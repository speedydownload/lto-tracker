"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Menu,
  ChevronDown,
  Search,
  MapPin,
  FileText,
  Calculator,
  Car,
  CreditCard,
  ClipboardCheck,
  BookOpen,
} from "lucide-react";

const toolLinks = [
  { label: "LTO Tracker", href: "/", icon: Search, description: "Track your LTO application status" },
  { label: "Plate Tracker", href: "/lto-plate-tracker", icon: Car, description: "Track plate number release" },
  { label: "License Tracker", href: "/lto-license-tracker", icon: CreditCard, description: "Check license processing status" },
  { label: "MV File Checker", href: "/mv-file-checker", icon: FileText, description: "Verify motor vehicle records" },
  { label: "Coding Checker", href: "/coding-checker", icon: ClipboardCheck, description: "Check number coding scheme" },
  { label: "Renewal Calculator", href: "/renewal-calculator", icon: Calculator, description: "Estimate renewal fees and costs" },
  { label: "Penalty Calculator", href: "/penalty-calculator", icon: Calculator, description: "Calculate traffic violation fines" },
];

const guideLinks = [
  { label: "How to Check LTO Plate", href: "/guides/how-to-check-lto-plate" },
  { label: "LTO Renewal Requirements", href: "/guides/lto-renewal-requirements" },
  { label: "LTO Student Permit Guide", href: "/guides/lto-student-permit" },
  { label: "LTO License Renewal", href: "/guides/lto-license-renewal" },
  { label: "Transfer of Ownership", href: "/guides/lto-transfer-ownership" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const toolsRef = useRef<NodeJS.Timeout | null>(null);
  const guidesRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full bg-white transition-shadow duration-300", scrolled ? "shadow-md" : "shadow-none")}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/LTO-Logo.webp" alt="LTO Tracker Logo" width={40} height={40} className="h-10 w-auto" priority />
          <span className="text-lg font-bold text-[#1e3a5f]">LTO Tracker</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => { if (toolsRef.current) clearTimeout(toolsRef.current); setToolsOpen(true); setGuidesOpen(false); }}
            onMouseLeave={() => { toolsRef.current = setTimeout(() => setToolsOpen(false), 150); }}
          >
            <button className={cn("flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1e40af]", toolsOpen && "bg-gray-100 text-[#1e40af]")}>
              Tools <ChevronDown className={cn("size-4 transition-transform duration-200", toolsOpen && "rotate-180")} />
            </button>
            {toolsOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-80 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                {toolLinks.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link key={tool.href} href={tool.href} className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-50" onClick={() => setToolsOpen(false)}>
                      <Icon className="mt-0.5 size-5 shrink-0 text-[#1e40af]" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{tool.label}</div>
                        <div className="text-xs text-gray-500">{tool.description}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => { if (guidesRef.current) clearTimeout(guidesRef.current); setGuidesOpen(true); setToolsOpen(false); }}
            onMouseLeave={() => { guidesRef.current = setTimeout(() => setGuidesOpen(false), 150); }}
          >
            <button className={cn("flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1e40af]", guidesOpen && "bg-gray-100 text-[#1e40af]")}>
              Guides <ChevronDown className={cn("size-4 transition-transform duration-200", guidesOpen && "rotate-180")} />
            </button>
            {guidesOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-72 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                {guideLinks.map((guide) => (
                  <Link key={guide.href} href={guide.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-50" onClick={() => setGuidesOpen(false)}>
                    <FileText className="size-4 shrink-0 text-[#1e40af]" />
                    <span className="text-sm font-medium text-gray-900">{guide.label}</span>
                  </Link>
                ))}
                <div className="my-1 border-t border-gray-100" />
                <Link href="/guides" className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-50" onClick={() => setGuidesOpen(false)}>
                  <BookOpen className="size-4 shrink-0 text-[#1e40af]" />
                  <span className="text-sm font-medium text-[#1e40af]">View All Guides</span>
                </Link>
              </div>
            )}
          </div>

          <Link href="/branches" className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1e40af]">
            <MapPin className="size-4" /> Branches
          </Link>
          <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-[#1e40af]">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/" className="hidden sm:block">
            <Button className="bg-[#1e40af] text-white hover:bg-[#1e3a5f]">
              <Search className="mr-1 size-4" /> Track Now
            </Button>
          </Link>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" aria-label="Open menu" />}>
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 overflow-y-auto p-0">
                <SheetHeader className="border-b border-gray-200 px-5 py-4">
                  <SheetTitle className="flex items-center gap-2">
                    <Image src="/LTO-Logo.webp" alt="LTO Tracker" width={32} height={32} className="h-8 w-auto" />
                    <span className="text-base font-bold text-[#1e3a5f]">LTO Tracker</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col px-4 py-4">
                  <SheetClose render={<Link href="/" className="block sm:hidden" />}>
                    <Button className="w-full bg-[#1e40af] text-white hover:bg-[#1e3a5f]"><Search className="mr-1 size-4" /> Track Now</Button>
                  </SheetClose>
                  <div className="mt-4">
                    <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Tools</h3>
                    {toolLinks.map((tool) => {
                      const Icon = tool.icon;
                      return (
                        <SheetClose key={tool.href} render={<Link href={tool.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#1e40af]" />}>
                            <Icon className="size-4 shrink-0 text-[#1e40af]" />{tool.label}
                        </SheetClose>
                      );
                    })}
                  </div>
                  <div className="mt-5">
                    <h3 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-gray-500">Guides</h3>
                    {guideLinks.map((guide) => (
                      <SheetClose key={guide.href} render={<Link href={guide.href} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#1e40af]" />}>
                          <FileText className="size-4 shrink-0 text-[#1e40af]" />{guide.label}
                      </SheetClose>
                    ))}
                    <SheetClose render={<Link href="/guides" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#1e40af] hover:bg-blue-50" />}>
                      <BookOpen className="size-4 shrink-0 text-[#1e40af]" />View All Guides
                    </SheetClose>
                  </div>
                  <div className="mt-5 border-t border-gray-200 pt-4">
                    <SheetClose render={<Link href="/branches" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50" />}><MapPin className="size-4 text-[#1e40af]" /> LTO Branches</SheetClose>
                    <SheetClose render={<Link href="/about" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50" />}>About Us</SheetClose>
                    <SheetClose render={<Link href="/contact" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-blue-50" />}>Contact</SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
