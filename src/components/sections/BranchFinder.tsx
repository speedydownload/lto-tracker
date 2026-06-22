"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import branches from "@/data/branches";

export default function BranchFinder() {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filtered = branches.filter((b) =>
    b.name.toLowerCase().includes(query.toLowerCase()) ||
    b.city.toLowerCase().includes(query.toLowerCase()) ||
    b.address.toLowerCase().includes(query.toLowerCase())
  );

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Find an LTO Branch Near You</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Locate your nearest LTO branch with address, contact details, and operating hours.</p>
        </div>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-gray-400" />
            <Input
              placeholder="Search by city or branch name..."
              value={query}
              onChange={(e) => { setQuery(e.target.value); setShowAll(false); }}
              className="pl-10 h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayed.map((branch) => (
            <Link key={branch.slug} href={`/branches/${branch.slug}`}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{branch.name}</h3>
                  <div className="space-y-1.5">
                    <div className="flex items-start gap-2 text-sm text-gray-600">
                      <MapPin className="size-4 shrink-0 mt-0.5 text-[#1e40af]" />
                      <span>{branch.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="size-4 shrink-0 text-[#1e40af]" />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="size-4 shrink-0 text-[#1e40af]" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length > 12 && !showAll && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll(true)} variant="outline" className="border-[#1e40af] text-[#1e40af] hover:bg-blue-50">
              View All {filtered.length} Branches
            </Button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No branches found matching &quot;{query}&quot;. Try a different search term.</p>
        )}

        <div className="text-center mt-6">
          <Link href="/branches" className="text-[#1e40af] font-medium hover:underline text-sm">
            View Complete Branch Directory →
          </Link>
        </div>
      </div>
    </section>
  );
}
