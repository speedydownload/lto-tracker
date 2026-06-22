import type { Metadata } from "next";
import Link from "next/link";
import { TODAY_FORMATTED } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for LTO Tracker. Understand the conditions governing your use of our website, including disclaimers, liability limitations, and user conduct requirements.",
  keywords: [
    "LTO Tracker terms of service",
    "LTO Tracker terms and conditions",
    "terms of use",
    "LTO Tracker legal",
  ],
  openGraph: {
    title: "Terms of Service",
    description:
      "Read the Terms of Service for LTO Tracker. Understand the conditions governing your use of our website.",
    url: "https://ltotrackeronline.ph/terms",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service",
    description:
      "Read the Terms of Service for LTO Tracker. Understand the conditions governing your use of our website.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/terms",
  },
};

export default function TermsPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Terms of Service" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Terms of Service", url: "https://ltotrackeronline.ph/terms" },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {TODAY_FORMATTED}
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and
            use of the <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}website located at{" "}
            <a href="https://ltotrackeronline.ph">https://ltotrackeronline.ph</a> (the
            &quot;Website&quot;), operated by LTO Tracker (&quot;we,&quot;
            &quot;our,&quot; or &quot;us&quot;). Please read these Terms
            carefully before using our Website. By accessing or using the
            Website, you agree to be bound by these Terms. If you do not agree
            to all of these Terms, you must not use the Website.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing, browsing, or using this Website in any manner, you
            acknowledge that you have read, understood, and agree to be bound
            by these Terms of Service and our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>, which is
            incorporated into these Terms by reference. These Terms constitute a
            legally binding agreement between you and LTO Tracker.
          </p>
          <p>
            If you are using the Website on behalf of an organization, you
            represent and warrant that you have the authority to bind that
            organization to these Terms, and the terms &quot;you&quot; and
            &quot;your&quot; shall refer to both you individually and the
            organization.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            LTO Tracker is an independent, privately operated information
            platform that provides:
          </p>
          <ul>
            <li>
              A directory of Land Transportation Office (LTO) branches across
              the Philippines, including addresses, contact information,
              operating hours, and available services
            </li>
            <li>
              Informational guides about LTO processes, requirements, and
              procedures for transactions such as driver&apos;s license
              applications, vehicle registration, and plate number claims
            </li>
            <li>
              Tools and resources to help users track and understand their LTO
              application status
            </li>
            <li>
              News, updates, and analysis related to LTO policies, fees, and
              regulatory changes
            </li>
            <li>
              Frequently asked questions and answers about common LTO
              transactions
            </li>
          </ul>
          <p>
            Our Website is provided for general informational purposes only. We
            do not process, facilitate, or execute any official LTO
            transactions. Users must complete all official transactions directly
            with the LTO through their branches or the official LTMS Portal.
          </p>

          <h2>3. Disclaimer of Affiliation</h2>
          <p>
            LTO Tracker is <strong>not</strong> affiliated with, endorsed by,
            sponsored by, or in any way officially connected with the Land
            Transportation Office (LTO), the Department of Transportation
            (DOTr), or any other Philippine government agency. Any reference to
            government agencies, their services, or their processes on this
            Website is for informational purposes only.
          </p>
          <p>
            The use of the term &quot;LTO&quot; in our name and content is
            solely for descriptive purposes to identify the subject matter of
            our information platform. It does not imply any official
            relationship, authorization, or endorsement by the Land
            Transportation Office.
          </p>

          <h2>4. Accuracy Disclaimer</h2>
          <p>
            While we make every reasonable effort to ensure that the information
            on our Website is accurate, complete, and up-to-date, we make no
            representations or warranties of any kind, express or implied,
            about the completeness, accuracy, reliability, suitability, or
            availability of the information, products, services, or related
            graphics contained on the Website.
          </p>
          <p>
            LTO policies, procedures, fees, requirements, and branch
            information are subject to change at any time without notice. We
            strongly recommend that you verify all critical information directly
            with the LTO through their official channels (LTO hotline 1342, the
            official website at <a href="https://www.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">lto.gov.ph</a>, or the <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS Portal</a>) before taking any action based on information
            found on our Website.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by Philippine law, LTO Tracker,
            its owners, operators, employees, contributors, and affiliates
            shall not be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages, including but not limited to:
          </p>
          <ul>
            <li>
              Loss of data, income, profit, or business opportunity arising
              from your use of or inability to use the Website
            </li>
            <li>
              Any errors, omissions, or inaccuracies in the content provided on
              the Website
            </li>
            <li>
              Any actions taken or decisions made based on information obtained
              from the Website
            </li>
            <li>
              Delays, failed transactions, or additional costs incurred as a
              result of relying on information from the Website
            </li>
            <li>
              Unauthorized access to or alteration of your data or transmissions
            </li>
            <li>
              Any third-party content, products, or services linked to or
              referenced on the Website
            </li>
          </ul>
          <p>
            Your use of the Website and reliance on any information provided is
            solely at your own risk.
          </p>

          <h2>6. User Conduct</h2>
          <p>
            By using our Website, you agree to the following conduct
            requirements:
          </p>
          <ul>
            <li>
              You will use the Website only for lawful purposes and in
              accordance with these Terms
            </li>
            <li>
              You will not use the Website in any way that violates any
              applicable Philippine or international law or regulation
            </li>
            <li>
              You will not attempt to gain unauthorized access to any part of
              the Website, its servers, or any systems connected to the Website
            </li>
            <li>
              You will not use automated systems, bots, scrapers, or similar
              tools to access the Website for data collection without our prior
              written consent
            </li>
            <li>
              You will not transmit any viruses, malware, or other malicious
              code through the Website
            </li>
            <li>
              You will not impersonate any person or entity, or falsely state or
              otherwise misrepresent your affiliation with any person or entity
            </li>
            <li>
              You will not use the Website to send unsolicited commercial
              communications (spam)
            </li>
            <li>
              You will not interfere with or disrupt the Website or servers and
              networks connected to it
            </li>
            <li>
              When submitting feedback, corrections, or contact form messages,
              you will provide truthful and accurate information
            </li>
          </ul>
          <p>
            We reserve the right to restrict or terminate your access to the
            Website at any time, without notice, for any violation of these
            conduct requirements or for any other reason at our sole discretion.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on the Website, including but not limited to text,
            graphics, logos, icons, images, audio clips, digital downloads, data
            compilations, and software, is the property of LTO Tracker or its
            content suppliers and is protected by Philippine intellectual
            property laws, including Republic Act No. 8293 (Intellectual
            Property Code of the Philippines).
          </p>
          <p>
            You may view, download, and print content from the Website for
            personal, non-commercial use only, provided that you do not modify
            the content and that you retain all copyright and proprietary
            notices. Any other use of the content, including reproduction,
            modification, distribution, or publication, without our prior
            written consent is strictly prohibited.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our Website may contain links to third-party websites or services
            that are not owned or controlled by LTO Tracker. We have no
            control over, and assume no responsibility for, the content, privacy
            policies, or practices of any third-party websites or services.
          </p>
          <p>
            Links to external websites, including the official LTO website, the
            LTMS Portal, and other government resources, are provided for your
            convenience and informational purposes only. The inclusion of any
            link does not imply our endorsement of the linked website or any
            association with its operators. You access third-party websites at
            your own risk.
          </p>

          <h2>9. Advertising</h2>
          <p>
            Our Website may display third-party advertisements, primarily
            through Google AdSense. These advertisements are provided by
            third-party advertising networks and may be targeted based on your
            browsing activity. We are not responsible for the content, accuracy,
            or legality of any advertisements displayed on our Website or for
            any products or services offered by advertisers.
          </p>
          <p>
            The presence of advertisements on our Website does not constitute
            an endorsement or recommendation of the advertised products or
            services by LTO Tracker.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless LTO Tracker,
            its owners, operators, employees, and affiliates from and against
            any and all claims, liabilities, damages, losses, costs, and
            expenses (including reasonable attorney&apos;s fees) arising out of
            or in any way connected with your use of the Website, your
            violation of these Terms, or your violation of any rights of
            another person or entity.
          </p>

          <h2>11. Modifications to Terms</h2>
          <p>
            We reserve the right to modify, amend, or update these Terms of
            Service at any time without prior notice. Changes will be effective
            immediately upon posting on this page, with the &quot;Last
            updated&quot; date revised accordingly. Your continued use of the
            Website after any changes constitutes your acceptance of the
            modified Terms.
          </p>
          <p>
            We encourage you to review these Terms periodically to stay
            informed about any changes. If you do not agree to the modified
            Terms, you must stop using the Website.
          </p>

          <h2>12. Termination</h2>
          <p>
            We may terminate or suspend your access to the Website immediately,
            without prior notice or liability, for any reason whatsoever,
            including but not limited to a breach of these Terms. Upon
            termination, your right to use the Website will immediately cease.
          </p>

          <h2>13. Severability</h2>
          <p>
            If any provision of these Terms is found to be invalid, illegal, or
            unenforceable by a court of competent jurisdiction, the remaining
            provisions shall continue in full force and effect. The invalid
            provision shall be modified to the minimum extent necessary to make
            it valid and enforceable while preserving its original intent.
          </p>

          <h2>14. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of the Republic of the Philippines,
            without regard to its conflict of law provisions. Any disputes
            arising from or related to these Terms or your use of the Website
            shall be subject to the exclusive jurisdiction of the courts located
            in Metro Manila, Philippines.
          </p>

          <h2>15. Entire Agreement</h2>
          <p>
            These Terms, together with our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
            <Link href="/disclaimer">Disclaimer</Link>, constitute the entire
            agreement between you and LTO Tracker with respect to your use of
            the Website and supersede all prior or contemporaneous
            communications and proposals, whether oral or written, between you
            and us regarding the Website.
          </p>

          <h2>16. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms of Service,
            please contact us:
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
            Related Policies
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
              <Link href="/disclaimer" className="text-primary hover:underline">
                Disclaimer
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
