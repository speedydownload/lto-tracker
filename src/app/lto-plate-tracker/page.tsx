import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR_STR } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import {
  WebApplicationSchema,
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { plateTrackerFAQs } from "@/data/faqs";
import Image from "next/image";
import TrackerClient from "./TrackerClient";

export const metadata: Metadata = {
  title:
    "LTO Plate Number Tracker — Check Your Plate Status Online",
  description:
    "Track your LTO plate number status online for free. Check if your license plates are ready for release, in transit, or still being processed.",
  keywords: [
    "LTO plate tracker",
    "plate number status",
    "LTO plate delivery",
    "check plate number",
    "LTO plate backlog",
    "plate number Philippines",
    "LTO plate release",
  ],
  openGraph: {
    title:
      "LTO Plate Number Tracker — Check Your Plate Status Online",
    description:
      "Track your LTO plate number status online for free. Check if your license plates are ready for release.",
    url: "https://ltotrackeronline.ph/lto-plate-tracker",
    type: "website",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/LTO-Plate-Tracker-Banner.webp",
        width: 1200,
        height: 630,
        alt: "LTO Plate Number Tracker — Check your plate delivery status online with LTO Tracker",
      },
    ],
  },
};

export default function LTOPlateTrackerPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "LTO Plate Number Tracker" },
        ]}
      />
      <WebApplicationSchema
        name="LTO Plate Number Tracker"
        description="Track your LTO plate number status online for free. Check if your license plates are ready for release, in transit, or still being processed."
        url="https://ltotrackeronline.ph/lto-plate-tracker"
      />
      <FAQPageSchema faqs={plateTrackerFAQs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://ltotrackeronline.ph" },
          {
            label: "LTO Plate Number Tracker",
            href: "https://ltotrackeronline.ph/lto-plate-tracker",
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        LTO Plate Number Tracker — Check Your Plate Status Online
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Waiting for your LTO license plates? Use our free <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}online plate number
        tracker to check the current status of your plate delivery. Find out
        instantly whether your plates are still being manufactured, already in
        transit to your designated LTO branch, or ready for you to claim. Our
        tracker covers both private vehicle plates and motorcycle plates across
        all LTO branches nationwide.
      </p>

      <TrackerClient />

      {/* Tool Banner */}
      <div className="my-10">
        <Image
          src="/img/LTO-Plate-Tracker-Banner.webp"
          alt="LTO Plate Number Tracker — Check your license plate delivery status online for free with LTO Tracker Philippines"
          width={1200}
          height={630}
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* About the LTO Plate Backlog */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Understanding the LTO Plate Number Backlog in the Philippines
        </h2>
        <p className="text-gray-700 mb-4">
          The LTO plate number backlog has been one of the most persistent
          issues facing Filipino motorists for nearly a decade. The problem
          began around 2014 when the LTO transitioned from locally manufactured
          plates to new designs that were intended to feature enhanced security
          features and a standardized format across all vehicle types. The
          contract for manufacturing the new plates was awarded through a
          controversial bidding process, and various legal challenges and supply
          chain issues delayed production significantly.
        </p>
        <p className="text-gray-700 mb-4">
          At the peak of the backlog, the LTO reported that over 10 million
          license plates remained undelivered, affecting vehicle owners who had
          registered their cars and motorcycles but received only temporary
          plates or no plates at all. Driving without proper plates became so
          common that the LTO and law enforcement had to issue memoranda
          allowing motorists to use their Official Receipt and Certificate of
          Registration (OR/CR) as proof of registration in lieu of actual
          plates.
        </p>
        <p className="text-gray-700 mb-4">
          In response to mounting public frustration, the LTO accelerated
          plate production and distribution efforts. The agency partnered with
          additional suppliers and implemented a more efficient distribution
          system, with plates being delivered directly to LTO district and
          extension offices for faster release to vehicle owners. By 2023 and
          into {CURRENT_YEAR_STR}, the backlog had been significantly reduced, though some
          motorists who registered their vehicles during the peak backlog period
          are still waiting for their permanent plates.
        </p>
      </section>

      {/* Plate Number Formats */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Philippine License Plate Number Formats Explained
        </h2>
        <p className="text-gray-700 mb-4">
          The Philippines uses several different plate number formats depending
          on the type and classification of the vehicle. Understanding these
          formats can help you correctly enter your plate number into our
          tracker and verify that the results match your vehicle:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Private Cars and SUVs
        </h3>
        <p className="text-gray-700 mb-4">
          Private vehicles use a three-letter, four-number format (e.g., ABC
          1234). The letter combinations are assigned sequentially as new
          vehicles are registered. Plates for private vehicles feature white
          backgrounds with green characters. The new plate design includes the
          Philippine flag, the full name &ldquo;Republic of the
          Philippines,&rdquo; the region identifier, and enhanced security
          features such as holograms and microprinting.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Motorcycles and Tricycles
        </h3>
        <p className="text-gray-700 mb-4">
          Motorcycle plates use a different format, typically consisting of a
          combination of letters and numbers in a smaller plate size designed to
          fit motorcycle mounting brackets. Under Republic Act No. 11235, the
          Motorcycle Crime Prevention Act, all motorcycles are required to
          display readable license plates on both the front and rear of the
          vehicle. This law was enacted to help law enforcement identify
          motorcycles involved in criminal activities, which had become a
          significant public safety concern. The readable plate requirement
          includes larger font sizes and reflective materials for better
          visibility.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Government Vehicles
        </h3>
        <p className="text-gray-700 mb-4">
          Government-owned vehicles use plates with red backgrounds and white
          characters. The format typically starts with the letter &ldquo;S&rdquo;
          (for national government) or specific letter codes assigned to
          government agencies. Diplomatic vehicles use blue plates with specific
          number codes that identify the country of the embassy or consulate.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          For-Hire and Public Utility Vehicles
        </h3>
        <p className="text-gray-700 mb-4">
          Taxis, UV Express vehicles, public utility jeepneys (PUJ), and buses
          use plates with yellow backgrounds and black characters. These plates
          are issued specifically for vehicles operating under a Certificate of
          Public Convenience (CPC) or Provisional Authority (PA) granted by the
          Land Transportation Franchising and Regulatory Board (LTFRB). The
          plate numbers for public utility vehicles follow a distinct series
          separate from private vehicle plates.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Temporary Plates
        </h3>
        <p className="text-gray-700 mb-4">
          When permanent plates are not yet available, the LTO issues temporary
          plates, which are paper-based printouts that should be displayed on
          the vehicle. These temporary plates are valid for a limited period and
          must be replaced with permanent plates once they become available. If
          your vehicle still has temporary plates, you can use our tracker to
          check whether your permanent plates have been manufactured and are
          ready for pickup.
        </p>
      </section>

      {/* How to Claim Your Plates */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Claim Your License Plates from the LTO
        </h2>
        <p className="text-gray-700 mb-4">
          Once our tracker shows that your plates have a status of &ldquo;For
          Release,&rdquo; you can proceed to claim them at your designated LTO
          branch. Here is a step-by-step guide to the claiming process:
        </p>
        <ol className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Verify the status</strong> using our tracker and note the
            designated LTO branch where your plates are available.
          </li>
          <li>
            <strong>Prepare the required documents:</strong> bring your claim
            stub (the receipt issued when you registered your vehicle), the
            latest Official Receipt and Certificate of Registration (OR/CR),
            and at least one valid government-issued ID.
          </li>
          <li>
            <strong>Visit the designated LTO branch</strong> during regular
            office hours (Monday to Friday, 8:00 AM to 5:00 PM). Some branches
            also operate on Saturdays with limited hours.
          </li>
          <li>
            <strong>Proceed to the plate release window</strong> and present
            your documents to the LTO staff. They will verify your identity and
            match your documents against their records.
          </li>
          <li>
            <strong>Sign the release form</strong> acknowledging receipt of
            your plates. Make sure to inspect the plates for any errors in the
            plate number, vehicle information, or physical defects before
            signing.
          </li>
          <li>
            <strong>Have your old temporary plates removed</strong> and your new
            permanent plates installed. Some LTO branches offer free plate
            installation, while others may charge a nominal fee.
          </li>
        </ol>
        <p className="text-gray-700 mb-4">
          If you cannot personally claim your plates, you may authorize a
          representative by providing a notarized Special Power of Attorney
          (SPA) or a signed authorization letter. Your representative must also
          present their own valid government-issued ID along with a photocopy
          of your ID. Note that the LTO strictly requires proper authorization
          to prevent unauthorized release of plates.
        </p>
      </section>

      {/* Plate Number Backlog Updates */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Latest Updates on the LTO Plate Backlog
        </h2>
        <p className="text-gray-700 mb-4">
          The LTO has been making steady progress in clearing the plate number
          backlog. As of the latest reports, the agency has significantly
          reduced the number of undelivered plates through increased production
          capacity and improved distribution logistics. The LTO has set
          ambitious targets to eliminate the backlog entirely, with a focus on
          delivering plates for vehicles registered between 2016 and 2022, which
          represent the bulk of the remaining undelivered plates.
        </p>
        <p className="text-gray-700 mb-4">
          The government has also implemented measures to prevent future
          backlogs, including requiring new plate suppliers to maintain minimum
          production capacity levels, establishing regional plate distribution
          hubs, and implementing an automated tracking system that allows both
          the LTO and vehicle owners to monitor plate production and delivery
          in real time. These measures are expected to ensure that new vehicle
          registrations receive their permanent plates within 30 to 90 days
          going forward.
        </p>
        <p className="text-gray-700 mb-4">
          The LTO has also introduced stricter enforcement of plate-related
          rules. Under the current regulations, motorists who fail to display
          proper license plates or use unauthorized plate covers, frames, or
          devices that obscure the plate number can face fines and penalties.
          The LTO regularly conducts anti-smoke belching, illegal plate, and
          unregistered vehicle operations to enforce compliance.
        </p>
      </section>

      {/* Why Plates Matter */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why License Plates Matter for Road Safety and Law Enforcement
        </h2>
        <p className="text-gray-700 mb-4">
          License plates serve as the primary means of identifying motor
          vehicles on public roads. They are essential for law enforcement,
          traffic management, toll collection, and accident investigation.
          Without proper plates, vehicles cannot be easily identified in the
          event of traffic violations, hit-and-run accidents, or criminal
          activities. This is why the Philippine government takes plate-related
          compliance seriously and has enacted laws that impose significant
          penalties for plate-related offenses.
        </p>
        <p className="text-gray-700 mb-4">
          The installation of automated license plate recognition (ALPR)
          systems on major roads and expressways in the Philippines has further
          emphasized the importance of having proper, readable plates.
          These systems are used for toll collection (such as on NLEX, SLEX,
          and Skyway), traffic law enforcement, and security monitoring.
          Vehicles without proper plates may have difficulty using tollways
          that rely on ALPR technology, and may be flagged by law enforcement
          cameras for further inspection.
        </p>
      </section>

      <FAQSection faqs={plateTrackerFAQs} />

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
              Track plates, licenses, and MV files all in one place.
            </p>
          </Link>
          <Link
            href="/lto-license-tracker"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              LTO License Tracker
            </h3>
            <p className="text-sm text-gray-600">
              Check your driver&apos;s license application or renewal status.
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
              Verify your vehicle&apos;s MV file number and registration status.
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
              Estimate your vehicle registration renewal fees before visiting
              the LTO.
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
              Calculate fines for traffic violations and plate-related offenses.
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
              Check the MMDA number coding schedule for your plate number.
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
              href="/guides/how-to-check-lto-plate-status"
              className="text-blue-600 hover:underline"
            >
              How to Check Your LTO Plate Number Status Online (Step-by-Step)
            </Link>
          </li>
          <li>
            <Link
              href="/guides/lto-plate-backlog"
              className="text-blue-600 hover:underline"
            >
              LTO Plate Number Backlog: Complete Update and Timeline
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
          <li>
            <Link
              href="/guides/lto-license-renewal"
              className="text-blue-600 hover:underline"
            >
              Complete Guide to LTO Driver&apos;s License Renewal
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mmda-number-coding"
              className="text-blue-600 hover:underline"
            >
              MMDA Number Coding Scheme: What Every Motorist Should Know
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
