import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Rafael Jose Villanueva — Research Analyst & Branch Specialist",
  description:
    "Rafael Jose Villanueva is the Research Analyst and Branch Specialist at LTO Tracker. He maintains the LTO branch directory and fee schedule content, ensuring accuracy across all regions.",
  keywords: [
    "Rafael Jose Villanueva",
    "LTO Tracker author",
    "LTO branch specialist",
    "LTO fee schedule",
    "LTO branch directory",
  ],
  openGraph: {
    title: "Rafael Jose Villanueva — Research Analyst & Branch Specialist",
    description:
      "Rafael Jose Villanueva is the Research Analyst and Branch Specialist at LTO Tracker, maintaining the branch directory and fee-related content.",
    url: "https://ltotrackeronline.ph/authors/rafael-jose-villanueva",
    siteName: "LTO Tracker",
    type: "profile",
    locale: "en_PH",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/Rafael-Jose-Villanueva.webp",
        width: 400,
        height: 400,
        alt: "Rafael Jose Villanueva — Research Analyst & Branch Specialist at LTO Tracker",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rafael Jose Villanueva — Research Analyst & Branch Specialist",
    description:
      "Rafael Jose Villanueva is the Research Analyst and Branch Specialist at LTO Tracker.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/authors/rafael-jose-villanueva",
  },
};

const expertise = [
  "LTO Branch Directory",
  "Regional Transportation",
  "Fee Schedules",
  "Regulatory Compliance",
];

const bio = [
  "Rafael Jose Villanueva is the Research Analyst and Branch Specialist at LTO Tracker, responsible for maintaining the accuracy and completeness of our LTO branch directory and fee-related content. A graduate of the Polytechnic University of the Philippines with a degree in Business Administration, Rafael combines his analytical skills with extensive knowledge of Philippine transportation regulations.",
  "Rafael has spent over five years working in roles related to government regulatory compliance and public transportation management. His previous position with a fleet management company required him to interact regularly with LTO district offices across the Philippines, from Metro Manila to regional branches in the Visayas and Mindanao. This hands-on experience with LTO branches in different regions gives him an unparalleled understanding of how LTO services vary by location.",
  "At LTO Tracker, Rafael manages the comprehensive branch directory that covers LTO offices across the National Capital Region, Luzon, Visayas, and Mindanao. He conducts quarterly verification calls to every listed branch, updates addresses and contact information, and tracks changes in available services. His attention to detail ensures that users can rely on our directory to find accurate branch information before making their trips.",
  "In addition to the branch directory, Rafael specializes in LTO fee schedules and regulatory compliance content. He monitors memorandum circulars for fee changes, updates our fee tables promptly, and explains how new regulations affect motorists. Rafael's analytical approach to content ensures that even the most technical regulatory information is presented in a way that ordinary motorists can understand and act upon.",
  "Rafael is passionate about improving access to government services for Filipinos in the provinces. He actively works to expand our branch directory coverage to include extension offices, licensing centers, and satellite offices that serve communities outside major cities.",
];

export default function RafaelJoseVillanuevaPage() {
  const authorGuides = guides.filter(
    (g) => g.author === "Rafael Jose Villanueva"
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Authors", url: "https://ltotrackeronline.ph/authors" },
          {
            name: "Rafael Jose Villanueva",
            url: "https://ltotrackeronline.ph/authors/rafael-jose-villanueva",
          },
        ]}
      />
      <ArticleSchema
        headline="Rafael Jose Villanueva — Research Analyst & Branch Specialist at LTO Tracker"
        description="Rafael Jose Villanueva is the Research Analyst and Branch Specialist at LTO Tracker, maintaining the branch directory and fee-related content."
        datePublished="2025-01-01"
        dateModified="2025-01-01"
        author="Rafael Jose Villanueva"
        url="https://ltotrackeronline.ph/authors/rafael-jose-villanueva"
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Authors", href: "/authors" },
            { label: "Rafael Jose Villanueva" },
          ]}
        />

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/img/Rafael-Jose-Villanueva.webp"
              alt="Rafael Jose Villanueva — Research Analyst & Branch Specialist at LTO Tracker"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Rafael Jose Villanueva
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Research Analyst & Branch Specialist
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {expertise.map((area) => (
              <Badge key={area} variant="secondary">
                {area}
              </Badge>
            ))}
          </div>
          <div className="mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100005306597248"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Follow on Facebook
            </a>
          </div>
        </header>

        <section className="prose prose-zinc max-w-none mb-10">
          {bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </section>

        {authorGuides.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Guides by Rafael Jose Villanueva
            </h2>
            <ul className="space-y-3">
              {authorGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="text-[#1e40af] hover:underline font-medium"
                  >
                    {guide.title}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {guide.description}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Content Maintained by Rafael
          </h2>
          <p className="text-muted-foreground mb-4">
            As Branch Specialist and Research Analyst, Rafael maintains and
            verifies the following key sections of LTO Tracker:
          </p>
          <ul className="space-y-2">
            <li>
              <Link
                href="/branches"
                className="text-[#1e40af] hover:underline font-medium"
              >
                LTO Branch Directory
              </Link>
              <p className="text-sm text-muted-foreground mt-0.5">
                Comprehensive directory of LTO offices across the Philippines
                with verified addresses, contact numbers, and operating hours.
              </p>
            </li>
            <li>
              <Link
                href="/guides/lto-fees-schedule"
                className="text-[#1e40af] hover:underline font-medium"
              >
                LTO Fees Schedule
              </Link>
              <p className="text-sm text-muted-foreground mt-0.5">
                Updated fee tables for all LTO transactions, monitored for
                changes from new memorandum circulars.
              </p>
            </li>
          </ul>
        </section>

        <section className="rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Related Pages
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-primary hover:underline">
                About LTO Tracker
              </Link>
            </li>
            <li>
              <Link
                href="/editorial-policy"
                className="text-primary hover:underline"
              >
                Editorial Policy
              </Link>
            </li>
            <li>
              <Link
                href="/authors/marco-antonio-reyes"
                className="text-primary hover:underline"
              >
                Marco Antonio Reyes
              </Link>
            </li>
            <li>
              <Link
                href="/authors/patricia-mae-santos"
                className="text-primary hover:underline"
              >
                Patricia Mae Santos
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
