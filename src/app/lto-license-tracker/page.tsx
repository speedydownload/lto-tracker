import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import {
  WebApplicationSchema,
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { licenseTrackerFAQs } from "@/data/faqs";
import Image from "next/image";
import TrackerClient from "./TrackerClient";

export const metadata: Metadata = {
  title:
    "LTO License Tracker — Check Driver's License Status",
  description:
    "Track your LTO driver's license application, renewal, or replacement status online. Check if your license card is ready for pickup at your designated LTO branch.",
  keywords: [
    "LTO license tracker",
    "driver's license status",
    "LTO license renewal",
    "check license status",
    "LTO license card",
    "Philippine driver's license",
    "license application status",
  ],
  openGraph: {
    title:
      "LTO License Tracker — Check Driver's License Status",
    description:
      "Track your LTO driver's license application, renewal, or replacement status online for free.",
    url: "https://ltotrackeronline.ph/lto-license-tracker",
    type: "website",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/LTO-License-Tracker-Banner.webp",
        width: 1200,
        height: 630,
        alt: "LTO License Tracker — Check your driver's license application status online",
      },
    ],
  },
};

export default function LTOLicenseTrackerPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "LTO License Tracker" },
        ]}
      />
      <WebApplicationSchema
        name="LTO License Tracker"
        description="Track your LTO driver's license application, renewal, or replacement status online. Check if your license card is ready for pickup."
        url="https://ltotrackeronline.ph/lto-license-tracker"
      />
      <FAQPageSchema faqs={licenseTrackerFAQs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://ltotrackeronline.ph" },
          {
            label: "LTO License Tracker",
            href: "https://ltotrackeronline.ph/lto-license-tracker",
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        LTO License Tracker — Check Your Driver&apos;s License Status Online
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Check the status of your Philippine driver&apos;s license application,
        renewal, or replacement with our free <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}online tracker. Whether you
        recently applied for a new license, renewed an expiring one, or
        requested a replacement for a lost or damaged card, our tool helps you
        find out if your license card has been printed, delivered to your LTO
        branch, or is ready for pickup. No need to call the LTO hotline or
        visit the office in person.
      </p>

      <TrackerClient />

      {/* Tool Banner */}
      <div className="my-10">
        <Image
          src="/img/LTO-License-Tracker-Banner.webp"
          alt="LTO Driver's License Tracker — Check your license application, renewal, or replacement status online for free"
          width={1200}
          height={630}
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* About Philippine Driver's Licenses */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Understanding the Philippine Driver&apos;s License System
        </h2>
        <p className="text-gray-700 mb-4">
          The Philippine driver&apos;s license system is administered by the
          Land Transportation Office (LTO) and serves as the official
          authorization for individuals to operate motor vehicles on public
          roads. The system has undergone significant modernization in recent
          years, moving from laminated paper licenses to secure polycarbonate
          cards with advanced security features. Understanding the different
          license types, requirements, and processes will help you navigate the
          LTO licensing system more effectively.
        </p>
        <p className="text-gray-700 mb-4">
          Under Republic Act No. 4136, also known as the Land Transportation
          and Traffic Code, all persons who wish to operate a motor vehicle on
          Philippine roads must hold a valid driver&apos;s license issued by
          the LTO. Driving without a valid license is a traffic violation that
          carries fines and penalties. The LTO maintains a comprehensive
          database of all licensed drivers in the country, which is used for
          identity verification, traffic law enforcement, and statistical
          purposes.
        </p>
      </section>

      {/* Types of Driver's Licenses */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Types of Driver&apos;s Licenses in the Philippines
        </h2>
        <p className="text-gray-700 mb-4">
          The LTO issues several types of driver&apos;s licenses, each
          designed for a specific category of driver and vehicle type:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Student Permit
        </h3>
        <p className="text-gray-700 mb-4">
          The student permit is the first step in obtaining a Philippine
          driver&apos;s license. It is valid for one year and allows the holder
          to practice driving under the supervision of a licensed driver. To
          obtain a student permit, applicants must be at least 16 years old (or
          17 years old for those who want to drive motorcycles), pass a written
          examination on traffic rules and regulations, and submit the required
          documents including a PSA-authenticated birth certificate, medical
          certificate, and a drug test result. Student permit holders are not
          allowed to drive alone and must always be accompanied by a holder of
          a valid professional or non-professional driver&apos;s license.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Non-Professional Driver&apos;s License
        </h3>
        <p className="text-gray-700 mb-4">
          The non-professional driver&apos;s license is for individuals who
          drive private vehicles for personal use. Holders of this license type
          are allowed to operate cars, motorcycles, and other private vehicles
          but are not authorized to drive vehicles for hire or commercial
          purposes. The non-professional license has a validity period of five
          years under Republic Act No. 10930, which extended the previous
          three-year validity. To apply, you must have held a student permit for
          at least one month, pass a practical driving test, and meet all
          documentary requirements.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Professional Driver&apos;s License
        </h3>
        <p className="text-gray-700 mb-4">
          The professional driver&apos;s license is required for individuals
          who drive public utility vehicles (PUVs) or vehicles for hire, such
          as taxis, jeepneys, buses, trucks-for-hire, and ride-hailing vehicles.
          Professional license holders can also drive any vehicle that a
          non-professional license covers. This license also has a five-year
          validity period. Applicants must be at least 18 years old, pass more
          comprehensive written and practical examinations, and provide
          additional documentation. Professional drivers are required to
          undergo periodic training and drug testing as part of their license
          renewal.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Conductor&apos;s License
        </h3>
        <p className="text-gray-700 mb-4">
          The conductor&apos;s license is issued to individuals who work as
          conductors on public utility buses and jeepneys. While conductors do
          not drive the vehicle, they are required to hold a valid
          conductor&apos;s license issued by the LTO. This license authorizes
          them to collect fares, manage passengers, and assist the driver in
          ensuring safe and orderly transportation.
        </p>
      </section>

      {/* License Restriction Codes */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          LTO License Restriction Codes Explained
        </h2>
        <p className="text-gray-700 mb-4">
          Philippine driver&apos;s licenses include restriction codes that
          specify which types of vehicles the holder is authorized to operate.
          Understanding these codes is important because driving a vehicle that
          falls outside your license restrictions is a violation that can result
          in fines and confiscation of your license:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Restriction 1:</strong> Motorcycles and motorized tricycles
            with engine displacement up to 400cc.
          </li>
          <li>
            <strong>Restriction 2:</strong> Motor vehicles up to 4,500 kg gross
            vehicle weight (GVW). This covers most private cars, SUVs, and
            pickup trucks.
          </li>
          <li>
            <strong>Restriction 3:</strong> Motor vehicles above 4,500 kg GVW.
            This includes trucks, buses, and other heavy vehicles.
          </li>
          <li>
            <strong>Restriction 4:</strong> Reserved (previously used for
            specific vehicle categories).
          </li>
          <li>
            <strong>Restriction 5:</strong> Motor vehicles with automatic
            transmission only (AT restriction).
          </li>
          <li>
            <strong>Restriction 6:</strong> Motorcycles with engine displacement
            above 400cc.
          </li>
          <li>
            <strong>Restriction 7:</strong> Reserved for special vehicle
            categories.
          </li>
          <li>
            <strong>Restriction 8:</strong> Motor vehicles with special
            equipment for persons with disabilities (PWDs).
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          You can add restriction codes to your license by passing the
          corresponding practical driving test. For example, if you currently
          hold a license with Restriction 1 (motorcycles) and Restriction 2
          (private cars), you can add Restriction 3 (heavy vehicles) by
          taking and passing the practical test for heavy vehicles at any LTO
          licensing center.
        </p>
      </section>

      {/* License Renewal Process */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Renew Your Philippine Driver&apos;s License
        </h2>
        <p className="text-gray-700 mb-4">
          Driver&apos;s license renewal in the Philippines can now be done both
          in person at LTO offices and through the <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS online portal</a>. Here is
          a comprehensive guide to the renewal process:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Online Renewal via LTMS Portal
        </h3>
        <ol className="text-gray-700 space-y-2 mb-4">
          <li>
            Create an account or log in to the LTMS portal at
            portal.lto.gov.ph.
          </li>
          <li>Select &ldquo;License Renewal&rdquo; from the services menu.</li>
          <li>
            Enter your license number and verify your personal information.
          </li>
          <li>
            Upload the required documents: medical certificate and drug test
            result from accredited facilities.
          </li>
          <li>
            Pay the renewal fees online through the available payment channels
            (credit/debit card, e-wallet, or over-the-counter payment at
            accredited banks and payment centers).
          </li>
          <li>
            Schedule an appointment at your preferred LTO branch for biometrics
            capture (photo, signature, and fingerprint).
          </li>
          <li>
            Visit the branch on your scheduled date, complete the biometrics
            process, and receive your temporary license receipt.
          </li>
          <li>
            Your new license card will be available for pickup or delivery once
            printed.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Walk-In Renewal at LTO Offices
        </h3>
        <p className="text-gray-700 mb-4">
          For those who prefer the traditional walk-in process, you can visit
          any LTO district office, extension office, or licensing center
          nationwide. Bring the following requirements: your current
          driver&apos;s license (or a photocopy if lost), a medical certificate
          from an LTO-accredited medical clinic, a drug test result from a
          DOH-accredited drug testing laboratory, and payment for the renewal
          fees. The walk-in process typically takes one to three hours,
          depending on the volume of transactions at the branch. To minimize
          waiting time, arrive early in the morning and avoid end-of-month rush
          periods.
        </p>
      </section>

      {/* License Validity and Expiration */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          License Validity, Expiration, and Grace Periods
        </h2>
        <p className="text-gray-700 mb-4">
          Under Republic Act No. 10930, both professional and non-professional
          driver&apos;s licenses in the Philippines are valid for five years
          from the date of issuance. The expiration date is printed on the
          license card and is typically set to your birthday in the year of
          expiration, making it easy to remember when your license needs
          renewal.
        </p>
        <p className="text-gray-700 mb-4">
          The LTO has implemented a &ldquo;no expiration on your birthday&rdquo;
          policy, which means that if your license expires on your birthday, you
          are given a grace period to renew without penalty. However, driving
          with an expired license beyond the grace period is a traffic
          violation. If your license has been expired for more than two years,
          you may be required to retake the written and practical examinations
          before a new license can be issued.
        </p>
        <p className="text-gray-700 mb-4">
          It is important to note that an expired Philippine driver&apos;s
          license cannot be used as a valid government-issued ID for most
          purposes. Banks, government agencies, and other institutions require a
          current, unexpired license for identity verification. Renewing your
          license on time ensures that you maintain a valid form of
          identification at all times.
        </p>
      </section>

      {/* New License Card Features */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Security Features of the New Philippine Driver&apos;s License Card
        </h2>
        <p className="text-gray-700 mb-4">
          The LTO has introduced new polycarbonate driver&apos;s license cards
          that feature multiple layers of security to prevent counterfeiting
          and fraud. These modern license cards are significantly more durable
          than the older PVC cards and include the following security features:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            Laser-engraved personal information that cannot be altered or
            tampered with.
          </li>
          <li>
            A machine-readable zone (MRZ) similar to international passports,
            enabling quick electronic verification.
          </li>
          <li>
            UV-reactive elements that are only visible under ultraviolet light.
          </li>
          <li>
            Holographic overlays with the Philippine coat of arms and LTO logo.
          </li>
          <li>
            Microprinting that is difficult to reproduce with standard printing
            equipment.
          </li>
          <li>
            A ghost image (secondary photograph) for additional identity
            verification.
          </li>
          <li>
            A unique serial number linked to the LTO central database for
            real-time verification.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          These enhanced security features make the new Philippine
          driver&apos;s license one of the most secure identification documents
          in Southeast Asia. The cards are designed to last for the full
          five-year validity period without significant wear or degradation,
          even under normal use conditions.
        </p>
      </section>

      <FAQSection faqs={licenseTrackerFAQs} />

      {/* Related Tools */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Related LTO Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              LTO Universal Tracker
            </h3>
            <p className="text-sm text-gray-600">
              Track plates, licenses, and MV files all in one unified tool.
            </p>
          </Link>
          <Link
            href="/lto-plate-tracker"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              LTO Plate Number Tracker
            </h3>
            <p className="text-sm text-gray-600">
              Check the delivery status of your vehicle&apos;s license plates.
            </p>
          </Link>
          <Link
            href="/mv-file-checker"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              MV File Number Checker
            </h3>
            <p className="text-sm text-gray-600">
              Verify motor vehicle file status and check for encumbrances.
            </p>
          </Link>
          <Link
            href="/renewal-calculator"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              Renewal Fee Calculator
            </h3>
            <p className="text-sm text-gray-600">
              Calculate your license renewal fees before visiting the LTO.
            </p>
          </Link>
          <Link
            href="/penalty-calculator"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              Penalty Calculator
            </h3>
            <p className="text-sm text-gray-600">
              Look up fines for driving without a license and other violations.
            </p>
          </Link>
          <Link
            href="/coding-checker"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              Number Coding Checker
            </h3>
            <p className="text-sm text-gray-600">
              Check the MMDA coding schedule based on your plate&apos;s last
              digit.
            </p>
          </Link>
        </div>
      </section>

      {/* Related Guides */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Related Guides
        </h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/guides/lto-license-renewal"
              className="text-blue-600 hover:underline"
            >
              Complete Guide to LTO Driver&apos;s License Renewal in the
              Philippines
            </Link>
          </li>
          <li>
            <Link
              href="/guides/lto-student-permit"
              className="text-blue-600 hover:underline"
            >
              How to Apply for an LTO Student Permit: Requirements and Process
            </Link>
          </li>
          <li>
            <Link
              href="/guides/lto-license-restriction-codes"
              className="text-blue-600 hover:underline"
            >
              LTO License Restriction Codes: Complete Guide to Vehicle
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/guides/foreign-license-conversion"
              className="text-blue-600 hover:underline"
            >
              How to Convert a Foreign Driver&apos;s License to a Philippine
              License
            </Link>
          </li>
          <li>
            <Link
              href="/guides/lto-vehicle-registration"
              className="text-blue-600 hover:underline"
            >
              LTO Vehicle Registration Guide: Requirements, Fees, and Process
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
