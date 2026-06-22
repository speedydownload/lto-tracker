import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Marco Antonio Reyes — Senior Editor & Lead Writer",
  description:
    "Marco Antonio Reyes is the Senior Editor and Lead Writer at LTO Tracker. With over eight years of experience covering Philippine government services and transportation policy, Marco creates thorough, accurate guides on LTO procedures.",
  keywords: [
    "Marco Antonio Reyes",
    "LTO Tracker author",
    "LTO Tracker editor",
    "LTO guide writer",
    "Philippine transportation writer",
  ],
  openGraph: {
    title: "Marco Antonio Reyes — Senior Editor & Lead Writer",
    description:
      "Marco Antonio Reyes is the Senior Editor and Lead Writer at LTO Tracker, specializing in LTO procedures and transportation policy.",
    url: "https://ltotrackeronline.ph/authors/marco-antonio-reyes",
    siteName: "LTO Tracker",
    type: "profile",
    locale: "en_PH",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/Marco-Antonio-Reyes.webp",
        width: 400,
        height: 400,
        alt: "Marco Antonio Reyes — Senior Editor & Lead Writer at LTO Tracker",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Marco Antonio Reyes — Senior Editor & Lead Writer",
    description:
      "Marco Antonio Reyes is the Senior Editor and Lead Writer at LTO Tracker.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/authors/marco-antonio-reyes",
  },
};

const expertise = [
  "Transportation Policy",
  "Government Regulations",
  "LTO Procedures",
  "Vehicle Registration",
];

const bio = [
  "Marco Antonio Reyes is the Senior Editor and Lead Writer at LTO Tracker, bringing over eight years of experience in covering Philippine government services and transportation policy. A graduate of the University of the Philippines Diliman with a degree in Public Administration, Marco has spent his career making complex government processes accessible to everyday Filipinos.",
  "Before joining LTO Tracker, Marco worked as a government affairs reporter for a major Philippine broadsheet, where he covered the Department of Transportation, Land Transportation Office, and Land Transportation Franchising and Regulatory Board (LTFRB). This experience gave him firsthand access to policymakers, regulatory processes, and the inner workings of transportation agencies in the Philippines.",
  "Marco's expertise spans the full range of LTO services, from driver's license applications and vehicle registration to plate number distribution and enforcement policies. He has personally navigated every major LTO transaction multiple times, giving him practical experience that informs his writing. His articles are known for their clarity, thoroughness, and practical advice that helps readers prepare for their LTO visits.",
  "As Senior Editor, Marco oversees the editorial quality of all content published on LTO Tracker. He leads the fact-checking team, ensures compliance with our editorial policy, and maintains relationships with official LTO sources to stay ahead of policy changes. Marco is committed to the platform's mission of providing the most accurate and helpful LTO information available online.",
];

export default function MarcoAntonioReyesPage() {
  const authorGuides = guides.filter((g) => g.author === "Marco Antonio Reyes");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Authors", url: "https://ltotrackeronline.ph/authors" },
          {
            name: "Marco Antonio Reyes",
            url: "https://ltotrackeronline.ph/authors/marco-antonio-reyes",
          },
        ]}
      />
      <ArticleSchema
        headline="Marco Antonio Reyes — Senior Editor & Lead Writer at LTO Tracker"
        description="Marco Antonio Reyes is the Senior Editor and Lead Writer at LTO Tracker, specializing in LTO procedures and transportation policy."
        datePublished="2025-01-01"
        dateModified="2025-01-01"
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/authors/marco-antonio-reyes"
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Authors", href: "/authors" },
            { label: "Marco Antonio Reyes" },
          ]}
        />

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/img/Marco-Antonio-Reyes.webp"
              alt="Marco Antonio Reyes — Senior Editor & Lead Writer at LTO Tracker"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Marco Antonio Reyes
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Senior Editor & Lead Writer
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
              href="https://www.facebook.com/profile.php?id=61568497340222"
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

        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Guides by Marco Antonio Reyes
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
                href="/authors/patricia-mae-santos"
                className="text-primary hover:underline"
              >
                Patricia Mae Santos
              </Link>
            </li>
            <li>
              <Link
                href="/authors/rafael-jose-villanueva"
                className="text-primary hover:underline"
              >
                Rafael Jose Villanueva
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
