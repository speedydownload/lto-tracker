"use client";

import { useState, useRef, useEffect } from "react";
import { Shield, Zap, Lock } from "lucide-react";
import TrackerForm from "@/components/tools/TrackerForm";
import ResultCard from "@/components/tools/ResultCard";
import SkeletonLoader from "@/components/tools/SkeletonLoader";
import StepByStepGuide from "@/components/tools/StepByStepGuide";
import type { TrackerResult } from "@/types";

export default function HeroSection() {
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
    <section className="relative bg-gradient-to-br from-[#1e3a5f] via-[#1e40af] to-[#2563eb] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDE0VjZoLThWMGgtMnY2aC04djhoLTh2MmgxNnYxNGgtMnYyaDh2LTJoLTJ2LTE0aDZ2LTJoLTh6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            LTO Tracker — Check Your Plate, License & MV File Status Online
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            The fastest and most reliable way to track your LTO plate number, driver&apos;s license, and motor vehicle file status in the Philippines.
          </p>
        </div>

        <TrackerForm onSearch={handleSearch} loading={loading} />

        {loading && <SkeletonLoader />}
        <div ref={resultRef} className="scroll-mt-20">
          {result && !loading && <ResultCard result={result} />}
          {showGuide && !loading && <StepByStepGuide type={guideType} userInput={searchInput} />}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {[
            { icon: Shield, label: "Free to Use" },
            { icon: Zap, label: "Real-Time Data" },
            { icon: Lock, label: "100% Secure" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-blue-100">
              <Icon className="size-5" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
