import type { Metadata } from "next";
import Link from "next/link";
import { TODAY_FORMATTED } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy of LTO Tracker. Learn how we collect, use, and protect your data in compliance with the Philippine Data Privacy Act of 2012 (RA 10173) and international data protection standards.",
  keywords: [
    "LTO Tracker privacy policy",
    "data privacy Philippines",
    "RA 10173",
    "Data Privacy Act",
    "LTO Tracker data protection",
  ],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Read the Privacy Policy of LTO Tracker. Learn how we collect, use, and protect your data.",
    url: "https://ltotrackeronline.ph/privacy-policy",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy",
    description:
      "Read the Privacy Policy of LTO Tracker. Learn how we collect, use, and protect your data.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          {
            name: "Privacy Policy",
            url: "https://ltotrackeronline.ph/privacy-policy",
          },
        ]}
      />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {TODAY_FORMATTED}
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <p>
            <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}(&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
            is committed to protecting the privacy and personal data of our
            users. This Privacy Policy describes how we collect, use, store, and
            disclose information when you visit our website at{" "}
            <a href="https://ltotrackeronline.ph">https://ltotrackeronline.ph</a> (the
            &quot;Website&quot;). This policy is designed to comply with the
            Philippine Data Privacy Act of 2012 (Republic Act No. 10173), its
            Implementing Rules and Regulations (IRR), and relevant issuances of
            the National Privacy Commission (NPC), as well as applicable
            international data protection standards including the General Data
            Protection Regulation (GDPR) for users within the European Economic
            Area.
          </p>
          <p>
            By accessing or using our Website, you acknowledge that you have
            read, understood, and agree to be bound by this Privacy Policy. If
            you do not agree with any part of this policy, please discontinue
            use of our Website immediately.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Provide Voluntarily</h3>
          <p>
            We may collect personal information that you voluntarily provide
            when you interact with our Website, including but not limited to:
          </p>
          <ul>
            <li>
              <strong>Contact Form Submissions:</strong> When you use our
              contact form, we collect your name, email address, subject of
              inquiry, and message content.
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> If you subscribe to our
              newsletter or updates, we collect your email address and any
              preferences you indicate.
            </li>
            <li>
              <strong>Feedback and Reports:</strong> When you submit branch
              corrections, content suggestions, or other feedback, we collect
              the information you provide in your submission.
            </li>
          </ul>

          <h3>1.2 Information Collected Automatically</h3>
          <p>
            When you visit our Website, certain information is collected
            automatically through cookies, web beacons, and similar tracking
            technologies:
          </p>
          <ul>
            <li>
              <strong>Device Information:</strong> Browser type and version,
              operating system, device type (desktop, mobile, tablet), and
              screen resolution.
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on pages,
              referring URLs, click patterns, and navigation paths through the
              Website.
            </li>
            <li>
              <strong>Network Information:</strong> IP address, approximate
              geographic location (city/region level, not precise location),
              Internet Service Provider (ISP), and connection type.
            </li>
            <li>
              <strong>Interaction Data:</strong> Search queries entered on the
              Website, branch pages viewed, and tools used.
            </li>
          </ul>

          <h3>1.3 Information We Do Not Collect</h3>
          <p>
            We want to make it clear that LTO Tracker does{" "}
            <strong>not</strong> collect, process, or store any of the following
            sensitive information:
          </p>
          <ul>
            <li>Driver&apos;s license numbers or details</li>
            <li>Vehicle plate numbers</li>
            <li>Government-issued identification numbers</li>
            <li>Financial or banking information</li>
            <li>Social Security System (SSS) numbers</li>
            <li>Tax Identification Numbers (TIN)</li>
            <li>Medical or health records</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes, in
            accordance with the Data Privacy Act&apos;s principles of
            transparency, legitimate purpose, and proportionality:
          </p>
          <ul>
            <li>
              <strong>Service Delivery:</strong> To operate, maintain, and
              improve our Website, tools, and content.
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries,
              feedback, and support requests submitted through our contact form.
            </li>
            <li>
              <strong>Analytics:</strong> To analyze usage patterns, understand
              user behavior, and improve the user experience of our Website.
            </li>
            <li>
              <strong>Content Improvement:</strong> To determine which content
              and features are most useful to our users and to develop new
              content accordingly.
            </li>
            <li>
              <strong>Advertising:</strong> To display relevant advertisements
              through our third-party advertising partners, primarily Google
              AdSense.
            </li>
            <li>
              <strong>Security:</strong> To detect, prevent, and respond to
              fraud, abuse, security risks, and technical issues.
            </li>
            <li>
              <strong>Legal Compliance:</strong> To comply with applicable laws,
              regulations, legal processes, or governmental requests.
            </li>
          </ul>

          <h2>3. Cookies and Tracking Technologies</h2>

          <h3>3.1 What Are Cookies</h3>
          <p>
            Cookies are small text files that are placed on your device when you
            visit a website. They help the website remember your preferences
            and provide a better browsing experience.
          </p>

          <h3>3.2 Types of Cookies We Use</h3>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> These cookies are necessary
              for the basic functionality of our Website, such as page
              navigation and security features. They cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> We use Google Analytics to
              understand how visitors interact with our Website. These cookies
              collect anonymous usage data such as pages visited, session
              duration, and bounce rate. You can opt out of Google Analytics by
              installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Our advertising partner,
              Google AdSense, may use cookies to display personalized
              advertisements based on your browsing history and interests. These
              cookies are managed by Google and are subject to Google&apos;s
              privacy policies.
            </li>
            <li>
              <strong>Preference Cookies:</strong> These cookies remember your
              settings and preferences, such as language and display options, to
              provide a personalized experience on return visits.
            </li>
          </ul>

          <h3>3.3 Managing Cookies</h3>
          <p>
            You can control and manage cookies through your browser settings.
            Most browsers allow you to refuse cookies, delete existing cookies,
            or set alerts before cookies are placed. Please note that disabling
            certain cookies may affect the functionality of our Website.
          </p>

          <h2>4. Third-Party Services</h2>

          <h3>4.1 Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements on our Website.
            Google AdSense may use cookies and web beacons to collect
            information about your visits to this and other websites to provide
            targeted advertisements. Google&apos;s use of advertising cookies
            enables it and its partners to serve ads based on your visit to our
            Website and other sites on the Internet. You can opt out of
            personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Google Ads Settings
            </a>
            .
          </p>

          <h3>4.2 Google Analytics</h3>
          <p>
            We use Google Analytics to collect and analyze usage data. Google
            Analytics uses cookies to track user interactions with our Website.
            The data collected is used to understand user behavior and improve
            our content and services. Google Analytics data is processed in
            accordance with{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>

          <h3>4.3 Other Third-Party Services</h3>
          <p>
            We may use additional third-party services for hosting, content
            delivery, and website performance optimization. These services may
            collect certain technical data as described in their respective
            privacy policies. We only work with third-party providers that
            maintain adequate data protection standards.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary
            to fulfill the purposes described in this Privacy Policy, unless a
            longer retention period is required or permitted by law.
            Specifically:
          </p>
          <ul>
            <li>
              <strong>Contact form submissions</strong> are retained for up to
              12 months after resolution of your inquiry, after which they are
              securely deleted.
            </li>
            <li>
              <strong>Email newsletter subscriptions</strong> are maintained
              until you unsubscribe, at which point your email address is
              removed from our mailing list within 30 days.
            </li>
            <li>
              <strong>Analytics data</strong> is retained in aggregated,
              anonymized form for up to 26 months, in accordance with Google
              Analytics data retention settings.
            </li>
            <li>
              <strong>Server logs</strong> containing IP addresses and access
              information are retained for up to 90 days for security purposes.
            </li>
          </ul>

          <h2>6. Your Rights Under the Data Privacy Act of 2012</h2>
          <p>
            Under Republic Act No. 10173 (Data Privacy Act of 2012), you have
            the following rights as a data subject:
          </p>
          <ul>
            <li>
              <strong>Right to Be Informed:</strong> You have the right to be
              informed of how your personal data is being collected, processed,
              and stored.
            </li>
            <li>
              <strong>Right to Access:</strong> You have the right to request
              access to your personal data that we hold, including the sources
              from which it was obtained.
            </li>
            <li>
              <strong>Right to Rectification:</strong> You have the right to
              request correction of any inaccurate or incomplete personal data
              we hold about you.
            </li>
            <li>
              <strong>Right to Erasure or Blocking:</strong> You have the right
              to request the deletion or blocking of your personal data when it
              is incomplete, outdated, false, unlawfully obtained, or no longer
              necessary for the purpose for which it was collected.
            </li>
            <li>
              <strong>Right to Object:</strong> You have the right to object to
              the processing of your personal data, including processing for
              direct marketing purposes.
            </li>
            <li>
              <strong>Right to Data Portability:</strong> You have the right to
              receive a copy of your personal data in a structured, commonly
              used, and machine-readable format.
            </li>
            <li>
              <strong>Right to Damages:</strong> You have the right to be
              indemnified for damages sustained due to inaccurate, incomplete,
              outdated, false, unlawfully obtained, or unauthorized use of your
              personal data.
            </li>
            <li>
              <strong>Right to File a Complaint:</strong> You have the right to
              file a complaint with the National Privacy Commission if you
              believe that your data privacy rights have been violated.
            </li>
          </ul>

          <h3>Additional Rights Under GDPR (for EEA Users)</h3>
          <p>
            If you are located in the European Economic Area (EEA), you may
            also have additional rights under the General Data Protection
            Regulation, including the right to restrict processing, the right
            to withdraw consent at any time, and the right to lodge a complaint
            with your local data protection authority.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement reasonable and appropriate organizational, physical,
            and technical security measures to protect your personal data
            against unauthorized access, alteration, disclosure, or
            destruction. These measures include:
          </p>
          <ul>
            <li>SSL/TLS encryption for all data transmitted to and from our Website</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls limiting data access to authorized personnel only</li>
            <li>Secure hosting infrastructure with industry-standard protections</li>
          </ul>
          <p>
            While we strive to protect your personal data, no method of
            transmission over the Internet or electronic storage is 100%
            secure. We cannot guarantee absolute security, but we will promptly
            notify affected users and the National Privacy Commission in the
            event of a data breach, as required by the Data Privacy Act.
          </p>

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our Website is not directed at children under the age of 13. We do
            not knowingly collect personal information from children. If you are
            a parent or guardian and believe that your child has provided us
            with personal information, please contact us at
            support@ltotrackeronline.ph, and we will take steps to delete such
            information from our systems.
          </p>

          <h2>9. International Data Transfers</h2>
          <p>
            Our Website may be accessed from various countries. If you access
            our Website from outside the Philippines, please be aware that your
            information may be transferred to, stored, and processed in the
            Philippines or other countries where our service providers operate.
            By using our Website, you consent to the transfer of your
            information to these jurisdictions, which may have data protection
            laws different from those in your country.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, legal requirements, or operational needs.
            When we make material changes, we will update the &quot;Last
            updated&quot; date at the top of this page and, where appropriate,
            provide a prominent notice on our Website. We encourage you to
            review this Privacy Policy periodically to stay informed about how
            we protect your data.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us:
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
          <p>
            For complaints regarding data privacy, you may also contact the
            National Privacy Commission (NPC) of the Philippines:
          </p>
          <ul>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://privacy.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                https://privacy.gov.ph
              </a>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:complaints@privacy.gov.ph">
                complaints@privacy.gov.ph
              </a>
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
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
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
              <Link href="/contact" className="text-primary hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
