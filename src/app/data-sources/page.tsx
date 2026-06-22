import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Data Sources",
  description:
    "Learn about the official sources used by LTO Tracker, including the LTO website, LTMS Portal, DOTr announcements, LTO circulars, and Republic Acts. Understand how we collect and verify our data.",
  keywords: [
    "LTO data sources",
    "LTO official website",
    "LTMS Portal",
    "LTO circulars",
    "DOTr announcements",
    "LTO Tracker sources",
    "LTO information verification",
  ],
  openGraph: {
    title: "Data Sources",
    description:
      "Learn about the official sources used by LTO Tracker for accurate LTO information.",
    url: "https://ltotrackeronline.ph/data-sources",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Data Sources",
    description:
      "Learn about the official sources used by LTO Tracker for accurate LTO information.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/data-sources",
  },
};

export default function DataSourcesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Data Sources" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          {
            name: "Data Sources",
            url: "https://ltotrackeronline.ph/data-sources",
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Data Sources
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Transparency about where our information comes from and how we
            verify it
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <p>
            At <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>, we believe transparency about our data sources
            is fundamental to earning and maintaining the trust of our users.
            Every piece of information published on our platform is sourced
            from identifiable, authoritative references. This page provides a
            comprehensive overview of the sources we use, how we collect data,
            and the verification processes we apply to ensure accuracy.
          </p>

          <h2>Official Government Sources</h2>
          <p>
            The foundation of our content is built on official government
            publications and resources. These are the most authoritative sources
            for LTO-related information and serve as our primary references:
          </p>

          <h3>1. LTO Official Website (lto.gov.ph)</h3>
          <p>
            The official website of the Land Transportation Office at{" "}
            <a
              href="https://lto.gov.ph"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              https://lto.gov.ph
            </a>{" "}
            is our primary source for LTO policies, fee schedules, service
            announcements, and branch directories. We monitor this website
            regularly for updates, new postings, and changes to existing
            content. Key information sourced from this website includes:
          </p>
          <ul>
            <li>Official LTO service fees and fee schedules</li>
            <li>Documentary requirements for all transaction types</li>
            <li>LTO branch addresses and contact information</li>
            <li>Official announcements and advisories</li>
            <li>Organizational structure and office directory</li>
          </ul>

          <h3>2. LTMS Portal (portal.lto.gov.ph)</h3>
          <p>
            The Land Transportation Management System Portal at{" "}
            <a
              href="https://portal.lto.gov.ph"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              https://portal.lto.gov.ph
            </a>{" "}
            is the LTO&apos;s official online transaction system. We reference
            this portal for information about:
          </p>
          <ul>
            <li>Online appointment booking procedures and availability</li>
            <li>Electronic payment processes and authorized channels</li>
            <li>Online application workflows and steps</li>
            <li>System updates, maintenance schedules, and service status</li>
            <li>Available transaction types and branch-specific services</li>
          </ul>

          <h3>3. Department of Transportation (DOTr)</h3>
          <p>
            The Department of Transportation, as the parent agency of the LTO,
            issues policy directives, department orders, and press releases that
            affect LTO operations. We monitor DOTr communications through:
          </p>
          <ul>
            <li>
              The official DOTr website at{" "}
              <a
                href="https://dotr.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                https://dotr.gov.ph
              </a>
            </li>
            <li>
              Official DOTr press releases and media advisories
            </li>
            <li>
              DOTr department orders that directly affect LTO operations
            </li>
            <li>
              Official DOTr social media channels for real-time announcements
            </li>
          </ul>

          <h3>4. LTO Memorandum Circulars and Administrative Orders</h3>
          <p>
            LTO memorandum circulars (MCs) and administrative orders (AOs) are
            the primary regulatory instruments used by the LTO to implement new
            policies, adjust fees, update requirements, and modify procedures.
            These documents carry the force of official LTO policy and are the
            definitive reference for how LTO services are conducted. We
            reference specific circulars including but not limited to:
          </p>
          <ul>
            <li>
              Fee schedule circulars specifying current rates for all LTO
              transactions
            </li>
            <li>
              Circulars implementing new requirements for driver&apos;s license
              applications and renewals
            </li>
            <li>
              Administrative orders on vehicle registration procedures and
              PMVIC requirements
            </li>
            <li>
              Circulars on plate number production, distribution, and claiming
              procedures
            </li>
            <li>
              Special advisories regarding holiday schedules, system
              maintenance, and temporary procedure changes
            </li>
          </ul>

          <h3>5. Republic Acts and Implementing Rules</h3>
          <p>
            Philippine laws and their implementing rules and regulations provide
            the legal framework for LTO operations. Key legislation we
            reference includes:
          </p>
          <ul>
            <li>
              <strong>Republic Act No. 4136</strong> — Land Transportation and
              Traffic Code. The foundational law governing motor vehicle
              registration, driver&apos;s licensing, and traffic regulations in
              the Philippines.
            </li>
            <li>
              <strong>Republic Act No. 10930</strong> — An Act Strengthening the
              LTO. Amendments to RA 4136 that updated penalties, extended
              license validity, and modernized LTO operations.
            </li>
            <li>
              <strong>Republic Act No. 11235</strong> — Motorcycle Crime
              Prevention Act. Requires larger, readable plate numbers for
              motorcycles and implements additional registration requirements.
            </li>
            <li>
              <strong>Republic Act No. 10173</strong> — Data Privacy Act of
              2012. Governs the processing of personal data by the LTO and
              other government agencies, and informs our own privacy practices.
            </li>
            <li>
              <strong>Republic Act No. 8792</strong> — Electronic Commerce Act
              of 2000. Provides the legal basis for electronic transactions,
              relevant to the LTMS Portal and online payment systems.
            </li>
            <li>
              <strong>Republic Act No. 10054</strong> — Motorcycle Helmet Act.
              Relevant to motorcycle-related LTO advisories and enforcement.
            </li>
          </ul>

          <h2>Secondary Sources</h2>
          <p>
            In addition to primary official sources, we use the following
            secondary sources to supplement and verify our information:
          </p>

          <h3>Official Social Media Channels</h3>
          <p>
            The LTO and DOTr maintain active social media presence on platforms
            including Facebook and Twitter (X). These channels are often the
            first to announce schedule changes, system updates, and advisory
            notices. We monitor these channels for breaking updates and
            cross-reference any announcements with official website postings
            before incorporating them into our content.
          </p>

          <h3>Philippine Official Gazette</h3>
          <p>
            New laws, executive orders, and proclamations affecting LTO
            operations are published in the Official Gazette of the Republic of
            the Philippines at{" "}
            <a
              href="https://www.officialgazette.gov.ph"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              officialgazette.gov.ph
            </a>
            . We reference the Official Gazette for the full text of Republic
            Acts and executive issuances.
          </p>

          <h3>Reputable News Organizations</h3>
          <p>
            For context and additional reporting on LTO-related developments, we
            may reference coverage from reputable Philippine news organizations
            including the Philippine Daily Inquirer, Philippine Star, Manila
            Bulletin, GMA News, ABS-CBN News, and Rappler. News sources are
            used for context only and are never treated as primary references
            for factual claims about LTO procedures or requirements.
          </p>

          <h2>How We Collect Data</h2>
          <p>
            Our data collection process is systematic and ongoing:
          </p>
          <ol>
            <li>
              <strong>Regular monitoring:</strong> Our research team monitors
              all primary sources on a weekly basis for new publications,
              updates, and announcements.
            </li>
            <li>
              <strong>Automated alerts:</strong> We use monitoring tools to
              receive alerts when official LTO and DOTr websites publish new
              content or update existing pages.
            </li>
            <li>
              <strong>Manual verification:</strong> All data collected through
              automated processes is manually reviewed and verified by a team
              member before being incorporated into our content.
            </li>
            <li>
              <strong>User submissions:</strong> We receive data corrections
              and updates from our community of users who visit LTO branches
              and report firsthand observations. These submissions are verified
              against official sources before being applied.
            </li>
            <li>
              <strong>Direct inquiries:</strong> When information cannot be
              verified through published sources, our team contacts LTO branches
              directly by phone or email to confirm details.
            </li>
          </ol>

          <h2>How We Verify Data</h2>
          <p>
            Verification is a critical component of our data quality process.
            We apply the following verification standards:
          </p>
          <ul>
            <li>
              <strong>Source authority:</strong> We prioritize official
              government publications over all other sources. Information from
              unofficial or unverified sources is not published unless
              independently confirmed.
            </li>
            <li>
              <strong>Cross-referencing:</strong> Critical data points,
              especially fees, requirements, and procedures, are verified
              against at least two independent sources before publication.
            </li>
            <li>
              <strong>Currency check:</strong> We verify the publication or
              effective date of source documents to ensure we are referencing
              the most current version.
            </li>
            <li>
              <strong>Consistency check:</strong> New information is compared
              against our existing content to identify potential contradictions
              or updates that need to be reflected across multiple pages.
            </li>
            <li>
              <strong>Expert review:</strong> For complex regulatory
              information or legal interpretations, we consult with individuals
              who have professional expertise in transportation regulation.
            </li>
          </ul>

          <h2>Data Limitations</h2>
          <p>
            We are transparent about the limitations of our data:
          </p>
          <ul>
            <li>
              There may be a delay between when official changes are
              implemented and when our content reflects those changes
            </li>
            <li>
              Some LTO branches may have local practices or requirements that
              differ from the standard procedures published by the central
              office
            </li>
            <li>
              Branch contact information (phone numbers, email addresses) may
              change without public announcement
            </li>
            <li>
              Fee schedules may be updated by new memorandum circulars that we
              have not yet identified
            </li>
            <li>
              Our coverage may not extend to every LTO extension office,
              licensing center, or satellite office in the country
            </li>
          </ul>
          <p>
            We encourage our users to always verify critical information
            directly with the LTO before making important decisions or
            undertaking trips to LTO branches. If you discover any
            discrepancies between our content and current official information,
            please <Link href="/contact">report them to us</Link> so we can
            update our records.
          </p>

          <h2>Links to Official Resources</h2>
          <p>
            For your convenience, here are direct links to the official LTO and
            related government resources:
          </p>
          <ul>
            <li>
              <a
                href="https://lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LTO Official Website — lto.gov.ph
              </a>
            </li>
            <li>
              <a
                href="https://portal.lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LTMS Portal — portal.lto.gov.ph
              </a>
            </li>
            <li>
              <a
                href="https://dotr.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Department of Transportation — dotr.gov.ph
              </a>
            </li>
            <li>
              <a
                href="https://www.officialgazette.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Official Gazette — officialgazette.gov.ph
              </a>
            </li>
            <li>
              <a
                href="https://privacy.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                National Privacy Commission — privacy.gov.ph
              </a>
            </li>
          </ul>

          <h2>Contact Us About Our Sources</h2>
          <p>
            If you have questions about our data sources, want to suggest
            additional sources we should monitor, or need to report a data
            discrepancy, please contact our editorial team:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:editorial@ltotrackeronline.ph">
                editorial@ltotrackeronline.ph
              </a>
            </li>
            <li>
              <strong>Contact Form:</strong>{" "}
              <Link href="/contact">ltotrackeronline.ph/contact</Link>
            </li>
          </ul>
        </article>

        {/* Related Links */}
        <section className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Related Pages
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/editorial-policy"
                className="text-primary hover:underline"
              >
                Editorial Policy
              </Link>
            </li>
            <li>
              <Link href="/authors" className="text-primary hover:underline">
                Our Authors
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary hover:underline">
                About LTO Tracker
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-primary hover:underline">
                Disclaimer
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
