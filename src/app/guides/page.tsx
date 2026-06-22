import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight, Clock, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { guides } from "@/data/guides";
import { CURRENT_YEAR_STR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `LTO Guides & Resources ${CURRENT_YEAR_STR} — Complete Philippine Motorist Guides`,
  description:
    "Browse all LTO guides and resources for Filipino motorists. Comprehensive articles on license renewal, vehicle registration, traffic violations, fees, and more.",
  keywords: [
    "LTO guides",
    "LTO resources",
    "Philippine motorist guides",
    "LTO how-to guides",
    "LTO articles",
    "LTO information Philippines",
  ],
  openGraph: {
    title: `LTO Guides & Resources ${CURRENT_YEAR_STR} — Complete Philippine Motorist Guides`,
    description:
      "Browse all LTO guides and resources for Filipino motorists. Comprehensive articles covering every aspect of LTO services.",
    url: "https://ltotrackeronline.ph/guides",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `LTO Guides & Resources ${CURRENT_YEAR_STR}`,
    description:
      "Browse all LTO guides for Filipino motorists. License renewal, registration, fees, and more.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides",
  },
};

export default function GuidesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
        ]}
      />

      <main className="container mx-auto px-4 max-w-6xl py-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Guides" },
          ]}
        />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            LTO Guides & Resources
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl">
            Comprehensive guides to help Filipino motorists navigate every LTO process. From getting your first student permit to transferring vehicle ownership, our expert-written articles cover it all.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group">
                <CardContent className="p-6">
                  <BookOpen className="size-8 text-[#1e40af] mb-3" />
                  <h2 className="font-semibold text-gray-900 mb-2 group-hover:text-[#1e40af] transition-colors text-lg">
                    {guide.title.split("—")[0].trim()}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="size-3" /> {guide.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3" /> {guide.readTime}
                    </span>
                  </div>
                  <span className="text-[#1e40af] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Guide <ArrowRight className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
