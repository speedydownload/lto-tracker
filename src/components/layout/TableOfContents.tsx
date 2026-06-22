"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState("");

  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const visible = entries.filter((e) => e.isIntersecting);
    if (visible.length > 0) {
      setActiveId(visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b)).target.id);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { rootMargin: "-80px 0px -60% 0px", threshold: 0 });
    headings.forEach((h) => { const el = document.getElementById(h.id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [headings, handleObserver]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
      setActiveId(id);
    }
  };

  if (!headings.length) return null;

  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto xl:block">
      <div className="rounded-xl border border-gray-200 bg-white p-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#1e3a5f]">On This Page</h2>
        <ul className="space-y-1">
          {headings.map((h) => (
            <li key={h.id}>
              <a
                href={`#${h.id}`}
                onClick={(e) => handleClick(e, h.id)}
                className={cn(
                  "block rounded-md py-1.5 text-sm leading-snug transition-colors",
                  h.level === 2 && "pl-3",
                  h.level === 3 && "pl-6",
                  activeId === h.id ? "border-l-2 border-[#1e40af] bg-blue-50 font-medium text-[#1e40af]" : "border-l-2 border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default TableOfContents;
