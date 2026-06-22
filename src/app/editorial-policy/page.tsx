import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description:
    "Learn about the editorial standards and content creation process at LTO Tracker. Our policy covers fact-checking, source verification, update frequency, and our commitment to accurate LTO information.",
  keywords: [
    "LTO Tracker editorial policy",
    "content standards",
    "fact checking",
    "LTO information accuracy",
    "editorial guidelines",
  ],
  openGraph: {
    title: "Editorial Policy",
    description:
      "Learn about the editorial standards and content creation process at LTO Tracker.",
    url: "https://ltotrackeronline.ph/editorial-policy",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Editorial Policy",
    description:
      "Learn about the editorial standards and content creation process at LTO Tracker.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/editorial-policy",
  },
};

export default function EditorialPolicyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Editorial Policy" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          {
            name: "Editorial Policy",
            url: "https://ltotrackeronline.ph/editorial-policy",
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Editorial Policy
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Our commitment to accurate, reliable, and trustworthy LTO
            information
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <h2>Our Editorial Standards</h2>
          <p>
            At <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>, we hold ourselves to the highest editorial
            standards. Every piece of content published on our platform
            undergoes a rigorous creation, review, and verification process to
            ensure that Filipino motorists receive accurate, helpful, and
            actionable information about LTO services and procedures. Our
            editorial standards are guided by principles of accuracy,
            objectivity, thoroughness, and timeliness.
          </p>
          <p>
            We understand that the information we provide can directly impact
            our readers&apos; time, money, and experience with LTO
            transactions. An incorrect requirement, an outdated fee, or a wrong
            branch address can lead to wasted trips, unnecessary expenses, and
            frustration. This responsibility drives our commitment to quality
            across every article, guide, and data point on our platform.
          </p>

          <h2>How Content Is Created</h2>
          <p>
            Our content creation process follows a structured workflow designed
            to produce reliable and comprehensive information:
          </p>
          <ol>
            <li>
              <strong>Topic Identification:</strong> Our editorial team
              identifies topics based on user search queries, frequently asked
              questions received through our contact form, trending LTO-related
              issues, and official LTO policy announcements. We prioritize
              topics that address the most common needs and pain points of
              Filipino motorists.
            </li>
            <li>
              <strong>Research and Data Collection:</strong> Our writers conduct
              thorough research using official government sources, including the
              LTO website, LTMS Portal, Department of Transportation releases,
              LTO memorandum circulars, and relevant Republic Acts. We
              cross-reference multiple sources to verify the accuracy of every
              claim and data point.
            </li>
            <li>
              <strong>Draft Creation:</strong> Content is drafted by writers
              with subject matter expertise in Philippine transportation
              regulations and government services. Each draft includes proper
              citations, clear explanations, and practical advice based on
              real-world experience with LTO processes.
            </li>
            <li>
              <strong>Editorial Review:</strong> All drafts are reviewed by a
              senior editor who checks for accuracy, completeness, clarity,
              grammar, and adherence to our editorial guidelines. The editor
              verifies all factual claims against official sources and ensures
              the content provides genuine value to readers.
            </li>
            <li>
              <strong>Fact-Checking:</strong> Before publication, every article
              undergoes a dedicated fact-checking step where a separate team
              member independently verifies key information such as fees,
              requirements, procedures, and branch details against the most
              current official sources.
            </li>
            <li>
              <strong>Publication and Monitoring:</strong> After passing all
              review stages, content is published and monitored for user
              feedback. We track user reports of errors and official LTO
              announcements that may necessitate updates.
            </li>
          </ol>

          <h2>Fact-Checking Process</h2>
          <p>
            Our fact-checking process is the backbone of our editorial
            integrity. We employ the following practices to ensure the accuracy
            of our content:
          </p>
          <ul>
            <li>
              <strong>Primary source verification:</strong> All critical
              information, including LTO fees, documentary requirements, and
              procedures, is verified against official LTO publications,
              memorandum circulars, and the LTMS Portal. We do not rely solely
              on secondary sources or media reports for factual claims.
            </li>
            <li>
              <strong>Cross-referencing:</strong> Key facts are verified using
              at least two independent sources. When a single source provides
              information that cannot be independently verified, we clearly note
              this limitation in the content.
            </li>
            <li>
              <strong>Branch verification:</strong> LTO branch information,
              including addresses, phone numbers, and services, is verified
              through official LTO listings, direct phone verification, and
              user-submitted reports. We regularly audit our branch directory for
              accuracy.
            </li>
            <li>
              <strong>Expert consultation:</strong> For complex topics involving
              legal interpretations, new regulations, or technical procedures,
              we consult with subject matter experts who have professional
              experience in transportation regulation and government services.
            </li>
            <li>
              <strong>User feedback integration:</strong> We actively encourage
              users to report errors or outdated information. All user reports
              are investigated and, when verified, lead to immediate content
              corrections.
            </li>
          </ul>

          <h2>Update Frequency</h2>
          <p>
            Maintaining current information is critical to our mission. Our
            update schedule includes:
          </p>
          <ul>
            <li>
              <strong>Immediate updates:</strong> When the LTO issues new
              memorandum circulars, announces fee changes, or implements new
              procedures, we update our affected content within 24-48 hours of
              official confirmation.
            </li>
            <li>
              <strong>Weekly monitoring:</strong> Our editorial team monitors
              official LTO channels, including the LTO website, LTMS Portal,
              and official social media accounts, on a weekly basis for any
              announcements or changes that affect our content.
            </li>
            <li>
              <strong>Monthly audits:</strong> Each month, we review a
              selection of our most-visited pages to verify that all information
              remains current and accurate. Pages covering frequently changing
              information, such as fees and requirements, receive priority
              review.
            </li>
            <li>
              <strong>Quarterly branch directory review:</strong> Every quarter,
              we conduct a comprehensive review of our LTO branch directory,
              verifying addresses, contact numbers, and service offerings for
              all listed branches.
            </li>
            <li>
              <strong>Annual content audit:</strong> Once a year, our entire
              content library undergoes a full audit to identify and update any
              outdated information, remove content that is no longer relevant,
              and ensure all articles meet our current editorial standards.
            </li>
          </ul>
          <p>
            Every article on our Website includes a &quot;Last updated&quot;
            date to help readers assess the currency of the information. If you
            notice that an article has not been updated recently and may contain
            outdated information, please{" "}
            <Link href="/contact">let us know</Link>.
          </p>

          <h2>Sources Used</h2>
          <p>
            We rely on authoritative, verifiable sources for all content on LTO
            Status PH. Our primary sources include:
          </p>
          <ul>
            <li>
              The official LTO website at{" "}
              <a
                href="https://lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                lto.gov.ph
              </a>
            </li>
            <li>
              The LTMS Portal at{" "}
              <a
                href="https://portal.lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                portal.lto.gov.ph
              </a>
            </li>
            <li>
              Department of Transportation (DOTr) official communications and
              press releases
            </li>
            <li>
              LTO memorandum circulars, administrative orders, and department
              orders published in the Official Gazette or on the LTO website
            </li>
            <li>
              Republic Acts and their Implementing Rules and Regulations (IRR),
              including RA 4136 (Land Transportation and Traffic Code), RA 11235
              (Motorcycle Crime Prevention Act), and RA 10930 (amendments to RA
              4136)
            </li>
            <li>
              Official LTO social media channels for real-time advisories and
              announcements
            </li>
            <li>
              National Privacy Commission issuances related to data privacy in
              government services
            </li>
          </ul>
          <p>
            For a detailed list of all data sources used on our platform,
            please visit our{" "}
            <Link href="/data-sources">Data Sources</Link> page.
          </p>

          <h2>Editorial Independence</h2>
          <p>
            LTO Tracker maintains full editorial independence. Our content
            decisions are driven solely by the informational needs of our users
            and our commitment to accuracy. We adhere to the following
            principles:
          </p>
          <ul>
            <li>
              Advertising does not influence our editorial content. Advertisers
              and sponsors have no control over what we publish, how we present
              information, or which topics we cover.
            </li>
            <li>
              We do not accept payment for favorable coverage, positive
              reviews, or preferential placement of any product, service, or
              organization within our editorial content.
            </li>
            <li>
              When we include links to external resources, products, or
              services, we disclose any commercial relationships that may exist.
            </li>
            <li>
              Our editorial team operates independently from any business
              development or advertising functions.
            </li>
          </ul>

          <h2>Corrections Policy</h2>
          <p>
            We are committed to correcting errors promptly and transparently.
            Our corrections policy includes:
          </p>
          <ul>
            <li>
              <strong>Minor corrections</strong> (typos, formatting issues,
              minor factual updates) are made immediately without a formal
              correction notice, but the &quot;Last updated&quot; date is
              revised.
            </li>
            <li>
              <strong>Significant corrections</strong> (incorrect fees, wrong
              requirements, outdated procedures) are accompanied by a
              correction note at the top of the article explaining what was
              changed and when.
            </li>
            <li>
              <strong>Major errors</strong> (fundamentally incorrect
              information that could have materially misled readers) are
              corrected immediately, accompanied by a prominent correction
              notice, and may be communicated through our social media channels.
            </li>
          </ul>
          <p>
            If you believe any information on our Website is inaccurate, please
            report it through our{" "}
            <Link href="/contact">contact form</Link>. We investigate all error
            reports and respond within 48 hours.
          </p>

          <h2>Author Qualifications</h2>
          <p>
            All content on LTO Tracker is created by writers and editors who
            meet our qualification standards:
          </p>
          <ul>
            <li>
              Demonstrated knowledge of Philippine transportation regulations
              and LTO procedures, acquired through professional experience,
              academic study, or extensive personal experience with LTO
              services
            </li>
            <li>
              Strong research skills with the ability to locate, evaluate, and
              synthesize information from official government sources
            </li>
            <li>
              Excellent written communication skills in English and/or Filipino,
              with the ability to explain complex procedures in clear, accessible
              language
            </li>
            <li>
              Commitment to accuracy, objectivity, and ethical content creation
            </li>
          </ul>
          <p>
            You can learn more about our individual contributors on our{" "}
            <Link href="/authors">Authors</Link> page.
          </p>

          <h2>Contact Our Editorial Team</h2>
          <p>
            If you have questions about our editorial policy, want to suggest a
            topic for coverage, or need to report an error, please reach out:
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
                href="/data-sources"
                className="text-primary hover:underline"
              >
                Data Sources
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
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
