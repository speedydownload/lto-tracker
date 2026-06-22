import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema, ArticleSchema } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Patricia Mae Santos — Content Strategist & Writer",
  description:
    "Patricia Mae Santos is the Content Strategist and Writer at LTO Tracker. Specializing in driver's license processes and the LTMS Portal, Patricia creates clear step-by-step guides for Filipino motorists.",
  keywords: [
    "Patricia Mae Santos",
    "LTO Tracker author",
    "LTO Tracker writer",
    "LTMS Portal guide",
    "Philippine LTO writer",
  ],
  openGraph: {
    title: "Patricia Mae Santos — Content Strategist & Writer",
    description:
      "Patricia Mae Santos is the Content Strategist and Writer at LTO Tracker, specializing in driver's license processes and the LTMS Portal.",
    url: "https://ltotrackeronline.ph/authors/patricia-mae-santos",
    siteName: "LTO Tracker",
    type: "profile",
    locale: "en_PH",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/Patricia-Mae-Santos.webp",
        width: 400,
        height: 400,
        alt: "Patricia Mae Santos — Content Strategist & Writer at LTO Tracker",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Patricia Mae Santos — Content Strategist & Writer",
    description:
      "Patricia Mae Santos is the Content Strategist and Writer at LTO Tracker.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/authors/patricia-mae-santos",
  },
};

const expertise = [
  "Driver's License Guides",
  "LTMS Portal",
  "Digital Government Services",
  "User Experience",
];

const bio = [
  "Patricia Mae Santos serves as the Content Strategist and Writer at LTO Tracker, specializing in driver's license processes, the LTMS Portal, and digital government services. With a background in Information Technology from De La Salle University and a Master's in Public Management from the Ateneo de Manila University, Patricia brings a unique blend of technical and public service expertise to the platform.",
  "Patricia's career began in the technology sector, where she spent four years developing digital platforms for government services. She was part of a team that worked on public-facing government portals, giving her deep insight into how digital systems like the LTMS Portal are designed, operated, and can sometimes frustrate users. This experience drives her commitment to creating clear, step-by-step guides that help Filipinos navigate online government services with confidence.",
  "At LTO Tracker, Patricia leads the creation of process guides and how-to content. Her articles cover everything from creating an LTMS account and booking appointments to understanding online payment workflows and troubleshooting common portal errors. She also manages the platform's content strategy, identifying the topics and questions that matter most to Filipino motorists through data analysis and user feedback.",
  "Patricia is a strong advocate for digital literacy in government services. She regularly contributes insights on how technology can improve the delivery of LTO services and reduce the burden on motorists. Her work has helped thousands of users successfully complete their LTO transactions through the LTMS Portal without confusion or unnecessary delays.",
];

export default function PatriciaMaeSantosPage() {
  const authorGuides = guides.filter((g) => g.author === "Patricia Mae Santos");

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Authors", url: "https://ltotrackeronline.ph/authors" },
          {
            name: "Patricia Mae Santos",
            url: "https://ltotrackeronline.ph/authors/patricia-mae-santos",
          },
        ]}
      />
      <ArticleSchema
        headline="Patricia Mae Santos — Content Strategist & Writer at LTO Tracker"
        description="Patricia Mae Santos is the Content Strategist and Writer at LTO Tracker, specializing in driver's license processes and the LTMS Portal."
        datePublished="2025-01-01"
        dateModified="2025-01-01"
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/authors/patricia-mae-santos"
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Authors", href: "/authors" },
            { label: "Patricia Mae Santos" },
          ]}
        />

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/img/Patricia-Mae-Santos.webp"
              alt="Patricia Mae Santos — Content Strategist & Writer at LTO Tracker"
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
              priority
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Patricia Mae Santos
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Content Strategist & Writer
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
              href="https://www.facebook.com/profile.php?id=100060784002397"
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
            Guides by Patricia Mae Santos
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
                href="/authors/marco-antonio-reyes"
                className="text-primary hover:underline"
              >
                Marco Antonio Reyes
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
