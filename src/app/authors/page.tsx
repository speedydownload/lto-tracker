import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  BreadcrumbSchema,
  OrganizationSchema,
} from "@/components/seo/JsonLd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Our Authors",
  description:
    "Meet the team behind LTO Tracker. Our authors are Filipino professionals with expertise in transportation regulation, government services, and public policy who create accurate, helpful LTO guides.",
  keywords: [
    "LTO Tracker authors",
    "LTO Tracker team",
    "LTO content writers",
    "LTO experts Philippines",
    "LTO Tracker contributors",
  ],
  openGraph: {
    title: "Our Authors",
    description:
      "Meet the team behind LTO Tracker. Our authors are Filipino professionals with expertise in transportation and government services.",
    url: "https://ltotrackeronline.ph/authors",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/LTO-Tracker-Banner.webp",
        width: 1200,
        height: 630,
        alt: "LTO Tracker Authors — Meet Our Team",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Our Authors",
    description:
      "Meet the team behind LTO Tracker. Our authors are Filipino professionals with expertise in transportation and government services.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/authors",
  },
};

const authors = [
  {
    name: "Marco Antonio Reyes",
    slug: "marco-antonio-reyes",
    role: "Senior Editor & Lead Writer",
    image: "/img/Marco-Antonio-Reyes.webp",
    expertise: [
      "Transportation Policy",
      "Government Regulations",
      "LTO Procedures",
      "Vehicle Registration",
    ],
    bio: `Marco Antonio Reyes is the Senior Editor and Lead Writer at LTO Tracker, bringing over eight years of experience in covering Philippine government services and transportation policy. A graduate of the University of the Philippines Diliman with a degree in Public Administration, Marco has spent his career making complex government processes accessible to everyday Filipinos.

Before joining LTO Tracker, Marco worked as a government affairs reporter for a major Philippine broadsheet, where he covered the Department of Transportation, Land Transportation Office, and Land Transportation Franchising and Regulatory Board (LTFRB). This experience gave him firsthand access to policymakers, regulatory processes, and the inner workings of transportation agencies in the Philippines.

Marco's expertise spans the full range of LTO services, from driver's license applications and vehicle registration to plate number distribution and enforcement policies. He has personally navigated every major LTO transaction multiple times, giving him practical experience that informs his writing. His articles are known for their clarity, thoroughness, and practical advice that helps readers prepare for their LTO visits.

As Senior Editor, Marco oversees the editorial quality of all content published on LTO Tracker. He leads the fact-checking team, ensures compliance with our editorial policy, and maintains relationships with official LTO sources to stay ahead of policy changes. Marco is committed to the platform's mission of providing the most accurate and helpful LTO information available online.`,
  },
  {
    name: "Patricia Mae Santos",
    slug: "patricia-mae-santos",
    role: "Content Strategist & Writer",
    image: "/img/Patricia-Mae-Santos.webp",
    expertise: [
      "Driver's License Guides",
      "LTMS Portal",
      "Digital Government Services",
      "User Experience",
    ],
    bio: `Patricia Mae Santos serves as the Content Strategist and Writer at LTO Tracker, specializing in driver's license processes, the LTMS Portal, and digital government services. With a background in Information Technology from De La Salle University and a Master's in Public Management from the Ateneo de Manila University, Patricia brings a unique blend of technical and public service expertise to the platform.

Patricia's career began in the technology sector, where she spent four years developing digital platforms for government services. She was part of a team that worked on public-facing government portals, giving her deep insight into how digital systems like the LTMS Portal are designed, operated, and can sometimes frustrate users. This experience drives her commitment to creating clear, step-by-step guides that help Filipinos navigate online government services with confidence.

At LTO Tracker, Patricia leads the creation of process guides and how-to content. Her articles cover everything from creating an LTMS account and booking appointments to understanding online payment workflows and troubleshooting common portal errors. She also manages the platform's content strategy, identifying the topics and questions that matter most to Filipino motorists through data analysis and user feedback.

Patricia is a strong advocate for digital literacy in government services. She regularly contributes insights on how technology can improve the delivery of LTO services and reduce the burden on motorists. Her work has helped thousands of users successfully complete their LTO transactions through the LTMS Portal without confusion or unnecessary delays.`,
  },
  {
    name: "Rafael Jose Villanueva",
    slug: "rafael-jose-villanueva",
    role: "Research Analyst & Branch Specialist",
    image: "/img/Rafael-Jose-Villanueva.webp",
    expertise: [
      "LTO Branch Directory",
      "Regional Transportation",
      "Fee Schedules",
      "Regulatory Compliance",
    ],
    bio: `Rafael Jose Villanueva is the Research Analyst and Branch Specialist at LTO Tracker, responsible for maintaining the accuracy and completeness of our LTO branch directory and fee-related content. A graduate of the Polytechnic University of the Philippines with a degree in Business Administration, Rafael combines his analytical skills with extensive knowledge of Philippine transportation regulations.

Rafael has spent over five years working in roles related to government regulatory compliance and public transportation management. His previous position with a fleet management company required him to interact regularly with LTO district offices across the Philippines, from Metro Manila to regional branches in the Visayas and Mindanao. This hands-on experience with LTO branches in different regions gives him an unparalleled understanding of how LTO services vary by location.

At LTO Tracker, Rafael manages the comprehensive branch directory that covers LTO offices across the National Capital Region, Luzon, Visayas, and Mindanao. He conducts quarterly verification calls to every listed branch, updates addresses and contact information, and tracks changes in available services. His attention to detail ensures that users can rely on our directory to find accurate branch information before making their trips.

In addition to the branch directory, Rafael specializes in LTO fee schedules and regulatory compliance content. He monitors memorandum circulars for fee changes, updates our fee tables promptly, and explains how new regulations affect motorists. Rafael's analytical approach to content ensures that even the most technical regulatory information is presented in a way that ordinary motorists can understand and act upon.

Rafael is passionate about improving access to government services for Filipinos in the provinces. He actively works to expand our branch directory coverage to include extension offices, licensing centers, and satellite offices that serve communities outside major cities.`,
  },
];

export default function AuthorsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Authors" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Authors", url: "https://ltotrackeronline.ph/authors" },
        ]}
      />
      <OrganizationSchema />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Authors
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Meet the Filipino professionals behind the content at LTO Tracker
          </p>
        </header>

        <section className="prose prose-zinc max-w-none mb-10">
          <p>
            The quality and accuracy of <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}is driven by our team of
            dedicated writers, editors, and researchers. Each member of our
            editorial team brings professional expertise in areas directly
            relevant to LTO services, transportation policy, and government
            processes in the Philippines. Our authors have firsthand experience
            with the LTO system and a deep understanding of the challenges
            Filipino motorists face when transacting with government agencies.
          </p>
          <p>
            We believe that trustworthy content starts with qualified authors.
            Every article, guide, and data entry on our platform is created or
            reviewed by a team member with demonstrated expertise in the subject
            matter. This commitment to expertise ensures that the information
            you find on LTO Tracker is not only accurate but also practical
            and genuinely useful for your LTO transactions.
          </p>
        </section>

        <div className="space-y-8">
          {authors.map((author) => (
            <Card key={author.name}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <Image
                      src={author.image}
                      alt={`${author.name} — ${author.role} at LTO Tracker`}
                      width={64}
                      height={64}
                      className="h-16 w-16 shrink-0 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        <Link href={`/authors/${author.slug}`} className="text-[#1e40af] hover:underline">
                          {author.name}
                        </Link>
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {author.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {author.expertise.map((area) => (
                    <Badge key={area} variant="secondary">
                      {area}
                    </Badge>
                  ))}
                </div>
                <div className="prose prose-zinc prose-sm max-w-none">
                  {author.bio.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team Section */}
        <section className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Join Our Team
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Are you a Filipino writer or researcher with expertise in
            transportation policy, government services, or LTO procedures? We
            are always looking for knowledgeable contributors who share our
            passion for providing accurate and helpful information to Filipino
            motorists.
          </p>
          <p className="text-sm text-muted-foreground mb-4">
            Ideal candidates have:
          </p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-4">
            <li>
              Professional experience related to LTO services, transportation
              regulation, or government administration
            </li>
            <li>
              Strong research skills and familiarity with official government
              publications
            </li>
            <li>
              Excellent writing skills in English and the ability to explain
              complex procedures clearly
            </li>
            <li>
              A genuine interest in helping Filipinos navigate government
              services more effectively
            </li>
          </ul>
          <p className="text-sm text-muted-foreground">
            If you are interested, please send your resume and a writing sample
            to{" "}
            <a
              href="mailto:editorial@ltotrackeronline.ph"
              className="text-primary hover:underline"
            >
              editorial@ltotrackeronline.ph
            </a>{" "}
            or reach out through our{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact form
            </Link>
            .
          </p>
        </section>

        {/* Related Links */}
        <section className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
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
                href="/data-sources"
                className="text-primary hover:underline"
              >
                Data Sources
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/branches" className="text-primary hover:underline">
                LTO Branch Directory
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
