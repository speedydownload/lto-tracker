import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  OrganizationSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About LTO Tracker — Our Mission & Team",
  description:
    "Learn about LTO Tracker, the trusted Philippine platform for LTO service tracking, branch information, and driver's license and vehicle registration guidance. Discover our mission, team, and commitment to accurate information.",
  keywords: [
    "about LTO Tracker",
    "LTO information platform",
    "LTO Philippines guide",
    "LTO tracking service",
    "LTO Tracker team",
    "LTO Tracker mission",
  ],
  openGraph: {
    title: "About LTO Tracker — Our Mission & Team",
    description:
      "Learn about LTO Tracker, the trusted Philippine platform for LTO service tracking, branch information, and guidance.",
    url: "https://ltotrackeronline.ph/about",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "About LTO Tracker — Our Mission & Team",
    description:
      "Learn about LTO Tracker, the trusted Philippine platform for LTO service tracking and guidance.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/about",
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "About", url: "https://ltotrackeronline.ph/about" },
        ]}
      />
      <OrganizationSchema />

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About LTO Tracker
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Your trusted resource for LTO information, tracking, and guidance in
            the Philippines
          </p>
        </header>

        <article className="prose prose-zinc max-w-none">
          <h2>Our Mission</h2>
          <p>
            <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}was created with a clear and simple mission: to make
            navigating the Land Transportation Office system easier for every
            Filipino. Whether you are a first-time driver applying for a student
            permit, a car owner renewing your vehicle registration, or someone
            waiting for the release of your license plate number, our platform
            provides the information you need in one accessible, well-organized
            location.
          </p>
          <p>
            We understand the frustrations that come with dealing with
            government agencies. Long queues, confusing requirements, unclear
            procedures, and difficulty reaching the right office are challenges
            that millions of Filipinos face every year when transacting with the
            LTO. Our goal is to bridge the information gap by providing clear,
            accurate, and up-to-date guidance that helps you prepare for your
            LTO visit and complete your transactions as smoothly as possible.
          </p>

          <h2>Who We Are</h2>
          <p>
            LTO Tracker is an independent information platform operated by a
            team of Filipino professionals with deep experience in government
            services, transportation policy, and digital technology. We are not
            affiliated with, endorsed by, or part of the Land Transportation
            Office or any government agency. Our team combines expertise in
            Philippine transportation regulations, web development, content
            creation, and user experience design to deliver the most helpful
            resource possible for LTO-related information.
          </p>
          <p>
            Our team members have personally navigated the LTO system many times
            over, from getting their first student permits to renewing licenses
            and registering vehicles. This firsthand experience, combined with
            extensive research and regular monitoring of official LTO updates,
            forms the foundation of the content and tools we provide on this
            platform.
          </p>

          <h2>What We Offer</h2>
          <p>
            LTO Tracker provides a comprehensive suite of information and
            tools to help you with your LTO transactions:
          </p>
          <ul>
            <li>
              <strong>LTO Branch Directory:</strong> A complete, searchable
              directory of LTO district offices across the Philippines, covering
              NCR, Luzon, Visayas, and Mindanao. Each listing includes the
              branch address, contact information, operating hours, and
              available services.
            </li>
            <li>
              <strong>Application Status Tracking:</strong> Guidance and tools
              to help you track the status of your LTO applications, including
              driver&apos;s license processing, vehicle registration, and plate
              number release updates.
            </li>
            <li>
              <strong>Requirements Guides:</strong> Detailed, step-by-step
              guides for every type of LTO transaction, including the complete
              list of documentary requirements, fees, and procedures.
            </li>
            <li>
              <strong>News and Updates:</strong> Timely information about LTO
              policy changes, fee adjustments, new circulars, system updates,
              and other developments that affect motorists.
            </li>
            <li>
              <strong>FAQs and Help Resources:</strong> Answers to the most
              common questions about LTO services, based on real queries from
              Filipino motorists.
            </li>
          </ul>

          <h2>Our Commitment to Accuracy</h2>
          <p>
            Information accuracy is the cornerstone of everything we do at LTO
            Status PH. We understand that incorrect or outdated information can
            lead to wasted trips, unnecessary expenses, and frustration. That is
            why we have established a rigorous editorial process to ensure that
            every piece of content on our platform is verified and current.
          </p>
          <p>
            Our content team monitors official LTO sources on a regular basis,
            including the LTO official website (lto.gov.ph), the LTMS Portal
            (portal.lto.gov.ph), <a href="https://www.dotr.gov.ph" target="_blank" rel="noopener noreferrer nofollow">Department of Transportation (DOTr)</a>
            announcements, official LTO circulars and memoranda, and Republic
            Acts and implementing rules and regulations related to land
            transportation. When policies change or new information becomes
            available, we update our content promptly.
          </p>
          <p>
            We also actively encourage our users to report any discrepancies
            they encounter. If you notice that a branch address has changed, a
            phone number is incorrect, or a procedure has been updated, we
            welcome your feedback through our{" "}
            <Link href="/contact">contact page</Link>. This community-driven
            approach helps us maintain the most accurate and current database
            possible.
          </p>

          <h2>Expertise and Authority</h2>
          <p>
            The information on LTO Tracker is created and reviewed by
            individuals with genuine expertise in Philippine transportation
            regulations and government services. Our content creators have
            backgrounds in transportation policy, government administration, and
            public service communication. Several members of our team have
            worked in roles related to government service delivery and
            understand the inner workings of agencies like the LTO.
          </p>
          <p>
            Beyond subject matter expertise, our technical team ensures that the
            platform is built to the highest standards of web development,
            accessibility, and user experience. We use modern technologies and
            best practices to deliver a fast, reliable, and mobile-friendly
            experience for all users, regardless of their device or internet
            connection.
          </p>

          <h2>Our Data Sources</h2>
          <p>
            Transparency about our data sources is essential to maintaining
            trust with our users. The information on LTO Tracker is compiled
            from the following sources:
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
              Department of Transportation (DOTr) official announcements and
              press releases
            </li>
            <li>
              LTO memorandum circulars, administrative orders, and department
              orders
            </li>
            <li>
              Republic Acts and their implementing rules and regulations,
              particularly RA 4136 (Land Transportation and Traffic Code) and RA
              11235 (Motorcycle Crime Prevention Act)
            </li>
            <li>
              Official LTO social media channels on Facebook and Twitter for
              real-time updates
            </li>
            <li>
              Verified reports from LTO branch visitors and our community of
              users
            </li>
          </ul>
          <p>
            For a complete list of our data sources and verification
            methodology, please visit our{" "}
            <Link href="/data-sources">Data Sources</Link> page.
          </p>

          <h2>Privacy and Trust</h2>
          <p>
            We take your privacy seriously. LTO Tracker does not collect,
            store, or transmit any sensitive personal information such as
            driver&apos;s license numbers, plate numbers, or government-issued
            identification details. Our platform is designed to provide
            information and guidance only. Any data you enter into our tools
            stays on your device and is not saved on our servers.
          </p>
          <p>
            For detailed information about how we handle data and protect your
            privacy, please review our{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>. We comply with
            the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) and
            are committed to the highest standards of data protection.
          </p>

          <h2>Community and Feedback</h2>
          <p>
            LTO Tracker is more than just an information website. It is a
            resource built by and for the Filipino motoring community. We
            actively seek feedback from our users to improve our content, add
            new features, and address the information needs of motorists across
            the country.
          </p>
          <p>
            If you have suggestions for new content, want to report an error, or
            have a question that is not covered on our platform, please do not
            hesitate to reach out. You can contact us through our{" "}
            <Link href="/contact">Contact page</Link> or send an email directly
            to support@ltotrackeronline.ph. We read every message and strive to respond
            within 24 to 48 hours.
          </p>

          <h2>Disclaimer</h2>
          <p>
            LTO Tracker is an independent, privately operated platform. We
            are not affiliated with, endorsed by, or connected to the Land
            Transportation Office, the Department of Transportation, or any
            Philippine government agency. The information provided on this
            website is for general informational purposes only. While we make
            every effort to ensure accuracy, we cannot guarantee that all
            information is complete, current, or error-free. Always verify
            critical information with the official LTO channels before making
            decisions based on content from this platform.
          </p>
          <p>
            For our complete legal notices, please refer to our{" "}
            <Link href="/disclaimer">Disclaimer</Link>,{" "}
            <Link href="/terms">Terms of Service</Link>, and{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </article>

        {/* Internal Links */}
        <section className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Explore LTO Tracker
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/branches" className="text-primary hover:underline">
                Browse all LTO branches in the Philippines
              </Link>
            </li>
            <li>
              <Link
                href="/data-sources"
                className="text-primary hover:underline"
              >
                View our data sources and verification process
              </Link>
            </li>
            <li>
              <Link
                href="/editorial-policy"
                className="text-primary hover:underline"
              >
                Read our editorial policy
              </Link>
            </li>
            <li>
              <Link href="/authors" className="text-primary hover:underline">
                Meet our team of authors
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Get in touch with us
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
