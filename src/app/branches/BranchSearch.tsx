"use client";

import { useState } from "react";
import Link from "next/link";
import branches from "@/data/branches";
import { Input } from "@/components/ui/input";

export function BranchSearch() {
  const [query, setQuery] = useState("");

  const filteredBranches = query.trim()
    ? branches.filter(
        (b) =>
          b.city.toLowerCase().includes(query.toLowerCase()) ||
          b.name.toLowerCase().includes(query.toLowerCase()) ||
          b.region.toLowerCase().includes(query.toLowerCase()) ||
          b.address.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="mb-10">
      <label
        htmlFor="branch-search"
        className="block text-sm font-medium text-foreground mb-2"
      >
        Search for an LTO branch by city, region, or address
      </label>
      <Input
        id="branch-search"
        type="search"
        placeholder="e.g., Quezon City, Cebu, Davao..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-10 text-base"
      />

      {query.trim() && (
        <div className="mt-4">
          {filteredBranches.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No branches found matching &quot;{query}&quot;. Try a different
              city or region name.
            </p>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-3">
                Found {filteredBranches.length} branch
                {filteredBranches.length === 1 ? "" : "es"} matching &quot;
                {query}&quot;
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {filteredBranches.map((branch) => (
                  <Link
                    key={branch.slug}
                    href={`/branches/${branch.slug}`}
                    className="block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                  >
                    <p className="font-medium text-foreground">{branch.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {branch.city} &middot; {branch.regionGroup}
                    </p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
