"use client";

import { useState, useRef, useEffect } from "react";
import TrackerForm from "@/components/tools/TrackerForm";
import ResultCard from "@/components/tools/ResultCard";
import SkeletonLoader from "@/components/tools/SkeletonLoader";
import StepByStepGuide from "@/components/tools/StepByStepGuide";
import type { TrackerResult } from "@/types";

export default function TrackerClient() {
  const [result, setResult] = useState<TrackerResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [guideType, setGuideType] = useState<"plate" | "mv" | "license">("plate");
  const [searchInput, setSearchInput] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((result || showGuide) && !loading) {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [result, showGuide, loading]);

  const handleSearch = async (type: string, value: string) => {
    setLoading(true);
    setResult(null);
    setShowGuide(false);
    setSearchInput(value);

    if (type === "license") {
      setGuideType("license");
      await new Promise((r) => setTimeout(r, 1500));
      setShowGuide(true);
      setLoading(false);
      return;
    }

    const paramKey = type === "mv" ? "mvfile" : "plate";
    setGuideType(type === "mv" ? "mv" : "plate");

    try {
      const res = await fetch(`/api/ncr-plate?${paramKey}=${encodeURIComponent(value)}`);
      const data = await res.json();

      if (data.found && data.data) {
        setResult(data.data);
      } else {
        setShowGuide(true);
      }
    } catch {
      setShowGuide(true);
    }

    setLoading(false);
  };

  return (
    <div className="my-8">
      <TrackerForm onSearch={handleSearch} loading={loading} />
      {loading ? <SkeletonLoader /> : null}
      <div ref={resultRef} className="scroll-mt-20">
        {result && !loading ? <ResultCard result={result} /> : null}
        {showGuide && !loading ? <StepByStepGuide type={guideType} userInput={searchInput} /> : null}
      </div>
    </div>
  );
}
