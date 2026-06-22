import type { Metadata } from "next";
import Link from "next/link";
import { TODAY_FORMATTED } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Read the disclaimer for LTO Tracker. Understand that we are not affiliated with the Land Transportation Office or any Philippine government agency. Information is provided for general guidance only.",
  keywords: [
    "LTO Tracker disclaimer",
    "LTO not affiliated",
    "LTO Tracker legal notice",
    "LTO information disclaimer",
  ],
  openGraph: {
    title: "Disclaimer",
    description:
      "Read the disclaimer for LTO Tracker. We are not affiliated with the LTO or any government agency.",
    url: "https://ltotrackeronline.ph/disclaimer",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Disclaimer",
    description:
      "Read the disclaimer for LTO Tracker. We are not affiliated with the LTO or any government agency.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/disclaimer",
  },
};

export default function DisclaimerPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Disclaimer" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Disclaimer", url: "https://ltotrackeronline.ph/disclaimer" },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Disclaimer
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {TODAY_FORMATTED}
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <h2>General Disclaimer</h2>
          <p>
            The information contained on the <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}website at{" "}
            <a href="https://ltotrackeronline.ph">https://ltotrackeronline.ph</a> (the
            &quot;Website&quot;) is provided for general informational and
            educational purposes only. While we strive to keep the information
            up-to-date and accurate, LTO Tracker makes no representations or
            warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability, or availability with respect to
            the Website or the information, products, services, or related
            graphics contained on the Website for any purpose.
          </p>
          <p>
            Any reliance you place on information obtained from this Website is
            strictly at your own risk. In no event will LTO Tracker, its
            owners, operators, contributors, or affiliates be liable for any
            loss or damage, including without limitation, indirect or
            consequential loss or damage, or any loss or damage whatsoever
            arising from loss of data or profits arising out of, or in
            connection with, the use of this Website.
          </p>
          <p>
            The content on this Website should not be considered a substitute
            for official information from the Land Transportation Office (LTO)
            or any government agency. Users are strongly encouraged to verify
            all information directly with the relevant government office before
            making any decisions or taking any actions based on the content of
            this Website.
          </p>

          <h2>No Government Affiliation</h2>
          <p>
            LTO Tracker is an independently owned and operated private
            website. We are <strong>not</strong> affiliated with, endorsed by,
            authorized by, or in any way officially connected with:
          </p>
          <ul>
            <li>
              The Land Transportation Office (LTO) of the Republic of the
              Philippines
            </li>
            <li>The Department of Transportation (DOTr)</li>
            <li>
              The Land Transportation Management System (LTMS) Portal
            </li>
            <li>
              Any other Philippine government agency, department, bureau, or
              instrumentality
            </li>
          </ul>
          <p>
            The use of the acronym &quot;LTO&quot; and references to the Land
            Transportation Office in our website name, domain, and content are
            used solely for descriptive purposes to identify the subject matter
            of the information we provide. These references do not imply any
            official relationship, authorization, license, or endorsement by the
            Land Transportation Office or the Philippine government.
          </p>
          <p>
            All official LTO transactions, including but not limited to
            driver&apos;s license applications, vehicle registrations, and fee
            payments, must be conducted through official LTO channels. These
            include LTO branch offices, the official LTO website at{" "}
            <a
              href="https://lto.gov.ph"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              lto.gov.ph
            </a>
            , and the LTMS Portal at{" "}
            <a
              href="https://portal.lto.gov.ph"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              portal.lto.gov.ph
            </a>
            .
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            LTO Tracker endeavors to provide accurate and up-to-date
            information regarding LTO services, branch locations, requirements,
            fees, and procedures. However, please be aware of the following:
          </p>
          <ul>
            <li>
              <strong>Information changes frequently.</strong> LTO policies,
              procedures, fees, documentary requirements, and branch details are
              subject to change at any time without prior notice. Changes may
              occur due to new memorandum circulars, administrative orders,
              department orders, Republic Acts, or internal LTO directives.
            </li>
            <li>
              <strong>We cannot guarantee completeness.</strong> While we make
              every effort to cover all relevant information, our content may
              not include every detail, exception, or special circumstance that
              applies to your specific transaction or situation.
            </li>
            <li>
              <strong>Regional variations exist.</strong> LTO branch operations,
              available services, and local procedures may vary by region,
              province, or city. Information that applies to one branch may not
              apply to another.
            </li>
            <li>
              <strong>Delays in updates.</strong> There may be a gap between
              when official changes are implemented and when our Website
              reflects those changes. We update our content regularly, but
              real-time accuracy cannot be guaranteed.
            </li>
            <li>
              <strong>Third-party data.</strong> Some information on our Website
              is sourced from third-party sources. While we verify this
              information to the best of our ability, we cannot be held
              responsible for errors originating from external sources.
            </li>
          </ul>
          <p>
            For the most current and authoritative information, always consult
            the official LTO website, the LTMS Portal, or contact the relevant
            LTO branch directly. You may also call the LTO hotline at{" "}
            <strong>1342</strong> for official inquiries.
          </p>

          <h2>External Links</h2>
          <p>
            Our Website may contain links to external websites operated by
            third parties, including government agencies, news organizations,
            and other information providers. These links are provided for your
            convenience and informational purposes only.
          </p>
          <p>
            LTO Tracker does not control the content, accuracy, or
            availability of external websites and does not endorse or assume
            any responsibility for any content, privacy policies, or practices
            of third-party websites. The inclusion of a link on our Website
            does not imply:
          </p>
          <ul>
            <li>Our endorsement of the linked website or its content</li>
            <li>
              Any affiliation or partnership with the linked website&apos;s
              operators
            </li>
            <li>
              That the linked website&apos;s information is accurate, complete,
              or current
            </li>
            <li>
              Our responsibility for any transactions you conduct on the linked
              website
            </li>
          </ul>
          <p>
            We encourage you to read the terms of service and privacy policies
            of any external website you visit through links on our Website. You
            access external websites entirely at your own risk.
          </p>

          <h2>Professional Advice</h2>
          <p>
            The content on LTO Tracker does not constitute professional,
            legal, financial, or government service advice. Our Website provides
            general informational content about LTO procedures and services,
            but this information should not be relied upon as a substitute for:
          </p>
          <ul>
            <li>
              <strong>Legal advice.</strong> For questions about traffic laws,
              violations, penalties, or legal proceedings related to land
              transportation, consult a qualified attorney or the appropriate
              government agency.
            </li>
            <li>
              <strong>Official government guidance.</strong> For definitive
              answers about LTO requirements, fees, procedures, and policies,
              contact the LTO directly through their official channels.
            </li>
            <li>
              <strong>Financial advice.</strong> For questions about insurance
              requirements, financing, or tax obligations related to vehicle
              ownership, consult a qualified financial advisor or the relevant
              government agency.
            </li>
            <li>
              <strong>Medical advice.</strong> For questions about medical
              certificate requirements for driver&apos;s license applications or
              renewals, consult an LTO-accredited medical clinic or healthcare
              provider.
            </li>
          </ul>
          <p>
            Always seek the advice of qualified professionals or official
            government sources for matters requiring specialized knowledge or
            authoritative guidance.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable Philippine law,
            including but not limited to the Civil Code of the Philippines and
            the Electronic Commerce Act of 2000 (Republic Act No. 8792), LTO
            Status PH shall not be liable for any damages whatsoever, including
            but not limited to direct, indirect, incidental, special,
            consequential, or exemplary damages, resulting from:
          </p>
          <ul>
            <li>The use or inability to use the Website</li>
            <li>
              Any errors, omissions, or inaccuracies in the content
            </li>
            <li>
              Personal injury or property damage of any nature resulting from
              your reliance on information from the Website
            </li>
            <li>
              Unauthorized access to or use of our servers or any personal
              information stored therein
            </li>
            <li>
              Any interruption or cessation of transmission to or from the
              Website
            </li>
            <li>
              Any bugs, viruses, or other harmful components transmitted to or
              through the Website by any third party
            </li>
          </ul>

          <h2>User Responsibility</h2>
          <p>
            As a user of LTO Tracker, you acknowledge and accept that:
          </p>
          <ul>
            <li>
              You are solely responsible for verifying the accuracy of any
              information obtained from this Website before acting upon it
            </li>
            <li>
              You will not hold LTO Tracker responsible for any outcomes
              resulting from your use of information from this Website
            </li>
            <li>
              You understand that this Website is an informational resource and
              not an official government service platform
            </li>
            <li>
              You will comply with all applicable laws and regulations when
              using the information provided on this Website
            </li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@ltotrackeronline.ph">support@ltotrackeronline.ph</a>
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
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
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
              <Link href="/about" className="text-primary hover:underline">
                About Us
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
