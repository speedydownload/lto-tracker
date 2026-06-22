import { NextRequest, NextResponse } from "next/server";
import type { TrackerResult, StatusType } from "@/types";

const NCR_PREFIXES = ["1301", "1303", "1801", "1324", "1336", "1366", "1380"];
const TIMEOUT_MS = 8000;

function mapStatus(raw: string): { status: string; statusCode: StatusType } {
  const lower = raw.toLowerCase().trim();
  if (lower.includes("for release") || lower.includes("available")) {
    return { status: raw, statusCode: "available" };
  }
  if (lower.includes("released") || lower.includes("claimed")) {
    return { status: raw, statusCode: "released" };
  }
  if (lower.includes("in transit") || lower.includes("processing") || lower.includes("production")) {
    return { status: raw, statusCode: "processing" };
  }
  if (lower.includes("returned") || lower.includes("return")) {
    return { status: raw, statusCode: "returned" };
  }
  if (lower.includes("pending")) {
    return { status: raw, statusCode: "pending" };
  }
  return { status: raw, statusCode: "processing" };
}

function cleanMvFile(mvFile: string): string {
  const match = mvFile.match(/^(\d{4})-0*(\d+)$/);
  if (match) {
    return `${match[1]}-${match[2]}`;
  }
  return mvFile;
}

function extractText(html: string, pattern: RegExp): string {
  const match = html.match(pattern);
  return match ? match[1].replace(/<[^>]*>/g, "").trim() : "";
}

async function fetchMvFile(query: string): Promise<{ found: boolean; reason?: string; data?: TrackerResult }> {
  const prefix = query.split("-")[0];
  if (!NCR_PREFIXES.includes(prefix)) {
    return { found: false, reason: "not-ncr" };
  }

  const cleaned = cleanMvFile(query);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch("https://www.ltoncr.com/mvfilefetch.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `query=${encodeURIComponent(cleaned)}`,
      signal: controller.signal,
    });

    const html = await res.text();

    if (!html || html.includes("No record found") || html.includes("no results") || html.trim().length < 50) {
      return { found: false, reason: "no-record" };
    }

    const plateNumber = extractText(html, /Plate\s*(?:Number|No\.?)\s*:?\s*<[^>]*>([^<]+)/i)
      || extractText(html, /plate[^:]*:\s*([A-Z0-9\s-]+)/i);
    const statusRaw = extractText(html, /Status\s*:?\s*<[^>]*>([^<]+)/i)
      || extractText(html, /status[^:]*:\s*([^<\n]+)/i);
    const branch = extractText(html, /(?:Branch|Office|Location)\s*:?\s*<[^>]*>([^<]+)/i)
      || extractText(html, /(?:branch|office)[^:]*:\s*([^<\n]+)/i);

    if (!statusRaw) {
      return { found: false, reason: "parse-error" };
    }

    const { status, statusCode } = mapStatus(statusRaw);

    return {
      found: true,
      data: {
        plateNumber: plateNumber || "",
        mvFileNumber: query,
        status,
        statusCode,
        estimatedRelease: statusCode === "available" ? "Ready Now" : null,
        branch: branch || "LTO NCR Office",
        remarks: statusCode === "available"
          ? "Your plate is ready for release. Visit the designated LTO branch with your OR/CR and valid ID to claim."
          : statusCode === "released"
            ? "Your plate has been released/claimed."
            : "Your plate is currently being processed. Please check back later for updates.",
      },
    };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return { found: false, reason: "timeout" };
    }
    return { found: false, reason: "fetch-error" };
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchPlate(plate: string): Promise<{ found: boolean; reason?: string; data?: TrackerResult }> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const pageRes = await fetch("https://www.ltoncr.com/newplateinquiry", {
      signal: controller.signal,
    });
    const pageHtml = await pageRes.text();

    const ajaxMatch = pageHtml.match(/url\s*:\s*["']([^"']*wdtNonceFrontendEdit[^"']*)["']/i)
      || pageHtml.match(/ajax_url\s*["']?\s*[:=]\s*["']([^"']+)["']/i)
      || pageHtml.match(/"url"\s*:\s*"([^"]+admin-ajax[^"]*)"/i);

    const nonceMatch = pageHtml.match(/wdtNonce\s*["']?\s*[:=]\s*["']([a-f0-9]+)["']/i)
      || pageHtml.match(/nonce\s*["']?\s*[:=]\s*["']([a-f0-9]+)["']/i);

    const tableIdMatch = pageHtml.match(/table_id\s*["']?\s*[:=]\s*["']?(\d+)["']?/i);

    if (!ajaxMatch) {
      return { found: false, reason: "no-ajax-url" };
    }

    let ajaxUrl = ajaxMatch[1];
    if (ajaxUrl.startsWith("/")) {
      ajaxUrl = `https://www.ltoncr.com${ajaxUrl}`;
    }

    const params = new URLSearchParams();
    params.set("draw", "1");
    params.set("start", "0");
    params.set("length", "10");
    params.set("search[value]", plate.toUpperCase().replace(/\s+/g, " ").trim());

    if (nonceMatch) {
      params.set("wdtNonce", nonceMatch[1]);
    }
    if (tableIdMatch) {
      params.set("table_id", tableIdMatch[1]);
    }

    const dataRes = await fetch(ajaxUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      signal: controller.signal,
    });

    const text = await dataRes.text();
    let json: { data?: string[][] };
    try {
      json = JSON.parse(text);
    } catch {
      return { found: false, reason: "json-parse-error" };
    }

    if (!json.data || json.data.length === 0) {
      return { found: false, reason: "no-record" };
    }

    const row = json.data[0];
    const plateNumber = (row[0] || "").replace(/<[^>]*>/g, "").trim();
    const mvFileNumber = (row[1] || "").replace(/<[^>]*>/g, "").trim();
    const statusRaw = (row[2] || "").replace(/<[^>]*>/g, "").trim();
    const branch = (row[3] || "").replace(/<[^>]*>/g, "").trim();

    if (!statusRaw) {
      return { found: false, reason: "no-status" };
    }

    const { status, statusCode } = mapStatus(statusRaw);

    return {
      found: true,
      data: {
        plateNumber: plateNumber || plate,
        mvFileNumber: mvFileNumber || "",
        status,
        statusCode,
        estimatedRelease: statusCode === "available" ? "Ready Now" : null,
        branch: branch || "LTO NCR Office",
        remarks: statusCode === "available"
          ? "Your plate is ready for release. Visit the designated LTO branch with your OR/CR and valid ID to claim."
          : statusCode === "released"
            ? "Your plate has been released/claimed."
            : "Your plate is currently being processed. Please check back later for updates.",
      },
    };
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") {
      return { found: false, reason: "timeout" };
    }
    return { found: false, reason: "fetch-error" };
  } finally {
    clearTimeout(timeout);
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const plate = searchParams.get("plate");
  const mvfile = searchParams.get("mvfile");

  if (!plate && !mvfile) {
    return NextResponse.json({ found: false, reason: "missing-param" }, { status: 400 });
  }

  if (mvfile) {
    const result = await fetchMvFile(mvfile);
    return NextResponse.json(result);
  }

  if (plate) {
    const result = await fetchPlate(plate);
    return NextResponse.json(result);
  }

  return NextResponse.json({ found: false, reason: "unknown" });
}
