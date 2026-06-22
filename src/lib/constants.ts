const now = new Date();

/** Numeric year at build time, e.g. 2026 */
export const CURRENT_YEAR = now.getFullYear();

/** String year at build time, e.g. "2026" */
export const CURRENT_YEAR_STR = String(CURRENT_YEAR);

/** ISO date string at build time, e.g. "2026-06-22" */
export const TODAY_ISO = now.toISOString().split("T")[0];

/** Formatted date at build time, e.g. "June 22, 2026" */
export const TODAY_FORMATTED = now.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

/**
 * Returns a fixed ISO date (YYYY-MM-DD) for a guide based on its index.
 * Dates start from Jan 1 of the current year with 7-day intervals.
 * Dates only change when the year changes.
 */
export function getGuideDate(index: number): string {
  const date = new Date(CURRENT_YEAR, 0, 1 + index * 7);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${CURRENT_YEAR_STR}-${month}-${day}`;
}

/** Converts an ISO date string (e.g. "2026-01-01") to a formatted date (e.g. "January 1, 2026") */
export function formatDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
