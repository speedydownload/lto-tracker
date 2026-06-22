import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR_STR, formatDate } from "@/lib/constants";
import { getGuideBySlug } from "@/data/guides";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TableOfContents } from "@/components/layout/TableOfContents";
import FAQSection from "@/components/sections/FAQSection";
import {
  ArticleSchema,
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";

const guide = getGuideBySlug("pmvic-inspection-guide")!;

export const metadata: Metadata = {
  title: `PMVIC Inspection Guide ${CURRENT_YEAR_STR} — Requirements, Process, Fees & Locations`,
  description:
    "Complete guide to PMVIC inspection in the Philippines. Learn what Private Motor Vehicle Inspection Centers check, how to pass, fees, required documents, locations, and tips to avoid re-inspection.",
  keywords: [
    "PMVIC inspection",
    "PMVIC requirements",
    "PMVIC fees Philippines",
    "Private Motor Vehicle Inspection Center",
    "PMVIC checklist",
    "PMVIC locations",
    "PMVIC inspection process",
    "PMVIC vehicle inspection",
    `LTO PMVIC ${CURRENT_YEAR_STR}`,
    "PMVIC 70-point inspection",
    "PMVIC near me",
    "motor vehicle inspection Philippines",
  ],
  openGraph: {
    title: `PMVIC Inspection Guide ${CURRENT_YEAR_STR} — Requirements, Process, Fees & Locations`,
    description:
      "Everything you need to know about PMVIC inspections in the Philippines: what they check, how to pass, fees, documents, and accredited locations.",
    url: "https://ltotrackeronline.ph/guides/pmvic-inspection-guide",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `PMVIC Inspection Guide ${CURRENT_YEAR_STR} — Requirements, Process, Fees & Locations`,
    description:
      "Everything you need to know about PMVIC inspections in the Philippines: what they check, how to pass, fees, and locations.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/pmvic-inspection-guide",
  },
};

const headings = [
  { id: "what-is-pmvic", text: "What Is a PMVIC?", level: 2 },
  {
    id: "legal-basis",
    text: "Legal Basis for PMVIC Inspections",
    level: 2,
  },
  {
    id: "when-needed",
    text: "When Do You Need a PMVIC Inspection?",
    level: 2,
  },
  {
    id: "inspection-checklist",
    text: "The 70-Point Inspection Checklist",
    level: 2,
  },
  { id: "requirements", text: "Document Requirements", level: 2 },
  {
    id: "step-by-step",
    text: "Step-by-Step PMVIC Inspection Process",
    level: 2,
  },
  { id: "fees", text: `PMVIC Inspection Fees ${CURRENT_YEAR_STR}`, level: 2 },
  {
    id: "pass-or-fail",
    text: "What Happens If You Pass or Fail",
    level: 2,
  },
  {
    id: "tips-to-pass",
    text: "Tips to Pass the PMVIC Inspection",
    level: 2,
  },
  {
    id: "accredited-locations",
    text: "Accredited PMVIC Locations",
    level: 2,
  },
  {
    id: "common-issues",
    text: "Common Issues and Controversies",
    level: 2,
  },
  {
    id: "pmvic-vs-private-emission",
    text: "PMVIC vs. Private Emission Testing Centers",
    level: 2,
  },
];

const faqs = [
  {
    question: "What is PMVIC and why is it required?",
    answer:
      "PMVIC stands for Private Motor Vehicle Inspection Center. These are DOTr-accredited facilities that perform a comprehensive 70-point inspection of motor vehicles to ensure they meet road safety and emission standards. PMVIC inspection is required by Department Order No. 2018-019 as a prerequisite for vehicle registration renewal, transfer of ownership, and other LTO transactions. The program replaced the old emission testing system with a more thorough inspection process.",
  },
  {
    question: `How much does a PMVIC inspection cost in ${CURRENT_YEAR_STR}?`,
    answer: `PMVIC inspection fees in ${CURRENT_YEAR_STR} are as follows: motorcycles and tricycles cost PHP 600, light vehicles (sedans, SUVs, pickups) cost PHP 1,800, light trucks cost PHP 2,000, heavy vehicles and buses cost PHP 2,500, and trailers cost PHP 1,500. These fees are standardized by the DOTr and should be the same across all accredited PMVIC centers. Additional re-inspection fees apply if the vehicle fails and needs to be re-inspected.`,
  },
  {
    question: "What documents do I need for a PMVIC inspection?",
    answer:
      "You need the original Certificate of Registration (CR), the latest Official Receipt (OR) of the vehicle, and a valid government-issued ID. The vehicle itself must be brought physically to the PMVIC center for inspection. Some PMVICs also accept an LTO appointment confirmation or LTMS Portal transaction reference number if you are processing a renewal.",
  },
  {
    question: "What does the PMVIC 70-point inspection cover?",
    answer:
      "The 70-point inspection covers five major categories: (1) exterior condition including lights, mirrors, wipers, and body integrity; (2) under-chassis inspection of suspension, steering, brakes, and frame; (3) engine and emissions testing for pollution compliance; (4) interior safety checks of seatbelts, dashboard instruments, and horn; and (5) tire and wheel inspection for tread depth, damage, and proper mounting. Each item is individually tested and recorded.",
  },
  {
    question: "What happens if my vehicle fails the PMVIC inspection?",
    answer:
      "If your vehicle fails the PMVIC inspection, you will receive a detailed report listing the specific items that failed. You must have the issues repaired and return to the same PMVIC center for a re-inspection within 7 calendar days. The re-inspection covers only the items that originally failed and costs a reduced fee (typically 50% of the original inspection fee). If the vehicle fails again, you must pay the full inspection fee for a subsequent attempt.",
  },
  {
    question: "Can I choose which PMVIC center to go to?",
    answer:
      "Yes, you can go to any DOTr-accredited PMVIC center regardless of where your vehicle is registered. You are not limited to PMVIC centers in your province or region. However, some vehicle owners prefer to use a PMVIC center near their LTO branch for convenience, as the inspection certificate must be presented at the LTO during registration renewal or transfer of ownership.",
  },
  {
    question: "How long does a PMVIC inspection take?",
    answer:
      "The actual PMVIC inspection typically takes 15 to 30 minutes, depending on the vehicle type and the specific PMVIC center's equipment and staff. However, waiting times can add 30 minutes to 2 hours or more, especially during peak registration periods (end of month or quarter). Arriving early in the morning on a weekday can significantly reduce waiting time.",
  },
  {
    question:
      "Is a PMVIC inspection valid for both registration renewal and transfer of ownership?",
    answer:
      "A PMVIC inspection certificate is valid for 120 days (approximately 4 months) from the date of inspection. Within this validity period, the certificate can be used for any LTO transaction that requires it, including registration renewal, transfer of ownership, or change of engine/body modification. If the certificate expires before you complete the LTO transaction, you will need to get a new PMVIC inspection.",
  },
];

export default function PmvicInspectionGuide() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "PMVIC Inspection Guide" },
        ]}
      />

      <ArticleSchema
        headline={`PMVIC Inspection Guide ${CURRENT_YEAR_STR} — Requirements, Process, Fees & Locations`}
        description="Complete guide to PMVIC inspection in the Philippines. Learn what Private Motor Vehicle Inspection Centers check, how to pass, fees, required documents, and locations."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/pmvic-inspection-guide"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "PMVIC Inspection Guide",
            url: "https://ltotrackeronline.ph/guides/pmvic-inspection-guide",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PMVIC Inspection Guide {CURRENT_YEAR_STR} — Requirements, Process, Fees &
            Locations
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>18 min read</span>
          </div>

          <section>
            <h2
              id="what-is-pmvic"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What Is a PMVIC?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you own a motor vehicle in the Philippines, you will need to
              pass a PMVIC inspection before you can renew your registration or
              process certain transactions at the Land Transportation Office
              (LTO). Here at{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>
              , we receive thousands of questions about PMVICs every month, so we
              have put together this comprehensive guide to walk you through
              everything you need to know — from what a PMVIC is and what it
              checks, to how much it costs and where to find accredited centers
              near you.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              PMVIC stands for{" "}
              <strong>Private Motor Vehicle Inspection Center</strong>. These are
              facilities accredited by the Department of Transportation (DOTr)
              and the LTO to perform comprehensive inspections of motor vehicles
              to ensure they are roadworthy and meet Philippine safety and
              emission standards. Unlike the old emission testing centers that
              only checked exhaust emissions, PMVICs conduct a thorough 70-point
              inspection that covers every critical component of your vehicle —
              from brakes and lights to suspension and tires.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PMVIC system was introduced to address a serious road safety
              problem in the Philippines. Before PMVICs, vehicle inspections were
              limited to basic emission testing, and many vehicles on Philippine
              roads were operating with defective brakes, non-functioning lights,
              worn-out tires, and other safety hazards. The government recognized
              that a more rigorous inspection regime was needed to reduce
              road accidents, which consistently rank among the leading causes
              of death and injury in the country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Today, passing a PMVIC inspection is mandatory for all motor
              vehicles seeking to renew their registration, undergo transfer of
              ownership, or process other transactions requiring an inspection
              certificate. Whether you drive a motorcycle, sedan, SUV, truck, or
              bus, the PMVIC inspection applies to you.
            </p>
          </section>

          <section>
            <h2
              id="legal-basis"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Legal Basis for PMVIC Inspections
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PMVIC program is mandated by{" "}
              <strong>Department Order No. 2018-019</strong> issued by the
              Department of Transportation (DOTr), which established the Motor
              Vehicle Inspection System (MVIS) in the Philippines. This
              department order was issued pursuant to Republic Act No. 4136
              (Land Transportation and Traffic Code) and Republic Act No. 8749
              (Philippine Clean Air Act of 1999), which together provide the
              legal framework for vehicle safety and emission standards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The DOTr order mandates that all motor vehicles must undergo a
              comprehensive inspection at a DOTr-accredited PMVIC before they
              can be registered or have their registration renewed at the LTO.
              The inspection must be performed by trained technicians using
              calibrated equipment that meets international standards. The
              results are electronically transmitted to the LTO&apos;s Land
              Transportation Management System (LTMS) for verification.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more details on DOTr regulations and LTO policies, you can
              visit the official{" "}
              <a
                href="https://lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                LTO website
              </a>{" "}
              or the{" "}
              <a
                href="https://dotr.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                DOTr website
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              id="when-needed"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              When Do You Need a PMVIC Inspection?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A PMVIC inspection is required for the following LTO transactions:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>
                  Annual vehicle registration renewal
                </strong>{" "}
                — Every vehicle must pass a PMVIC inspection before the LTO will
                process the{" "}
                <Link
                  href="/guides/lto-vehicle-registration"
                  className="text-blue-600 hover:underline"
                >
                  vehicle registration renewal
                </Link>
                .
              </li>
              <li>
                <strong>Transfer of vehicle ownership</strong> — When buying or
                selling a used vehicle, the vehicle must pass a PMVIC inspection
                as part of the{" "}
                <Link
                  href="/guides/lto-transfer-ownership"
                  className="text-blue-600 hover:underline"
                >
                  transfer of ownership process
                </Link>
                .
              </li>
              <li>
                <strong>Change of engine or body modification</strong> — If you
                replace the engine or make significant body modifications, a
                PMVIC inspection verifies the changes meet safety standards.
              </li>
              <li>
                <strong>Re-registration of previously suspended or
                revoked registrations</strong> — Vehicles returning to active
                registration must undergo inspection.
              </li>
              <li>
                <strong>Initial registration of imported used vehicles</strong>{" "}
                — Second-hand imported vehicles must pass PMVIC inspection before
                they can be registered with the LTO.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Brand-new vehicles purchased from authorized dealerships are
              typically exempt from the PMVIC inspection for their first
              registration, as the manufacturer&apos;s certification serves as
              proof of roadworthiness. However, they will need to pass the
              PMVIC inspection starting from their first registration renewal
              (typically after three years for private vehicles).
            </p>
          </section>

          <section>
            <h2
              id="inspection-checklist"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              The 70-Point Inspection Checklist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PMVIC performs a comprehensive 70-point inspection covering
              five major categories. Understanding what is checked will help you
              prepare your vehicle and avoid costly re-inspections. Here is a
              detailed breakdown of each category:
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              1. Exterior and Lighting (approximately 20 inspection points)
            </h3>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Headlights — proper aim, brightness, and color (white or warm white only)</li>
              <li>Tail lights and brake lights — functionality and visibility</li>
              <li>Turn signal lights (front, rear, and side) — proper blinking rate and color</li>
              <li>Hazard warning lights — all indicators flash simultaneously</li>
              <li>License plate lights — illuminate the rear plate clearly</li>
              <li>Reverse lights — function when transmission is in reverse</li>
              <li>Side mirrors — both present, properly mounted, and adjustable</li>
              <li>Windshield — no cracks that obstruct the driver&apos;s view</li>
              <li>Windshield wipers — functional with proper blade contact</li>
              <li>Body condition — no sharp edges, loose panels, or structural damage</li>
              <li>Bumpers — present, properly mounted, and not excessively damaged</li>
              <li>Doors — open, close, and latch properly</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              2. Under-Chassis Inspection (approximately 15 inspection points)
            </h3>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Brake system — pad thickness, rotor condition, brake lines, fluid level</li>
              <li>Suspension — shock absorbers, springs, bushings, ball joints</li>
              <li>Steering — rack and pinion, tie rods, power steering system</li>
              <li>Exhaust system — no leaks, properly mounted, catalytic converter present</li>
              <li>Chassis frame — no excessive rust, cracks, or modifications</li>
              <li>Drive shaft and CV joints — no excessive play or damage</li>
              <li>Fuel system — no leaks in fuel lines, tank, or connections</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              3. Engine and Emissions (approximately 15 inspection points)
            </h3>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Emission levels — must meet Philippine Clean Air Act standards</li>
              <li>Engine condition — no excessive oil leaks or unusual noises</li>
              <li>Cooling system — no leaks, proper coolant level, functional fan</li>
              <li>Battery — properly secured, no corrosion on terminals</li>
              <li>Belts and hoses — no cracks, proper tension</li>
              <li>Engine number verification — matches the CR on file</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              4. Interior Safety (approximately 10 inspection points)
            </h3>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Seatbelts — all seatbelts present, functional, and not frayed</li>
              <li>Horn — functional and audible</li>
              <li>Speedometer — functional and readable</li>
              <li>Dashboard warning lights — functioning on ignition</li>
              <li>Rearview mirror — present and properly positioned</li>
              <li>Parking brake — holds the vehicle on an incline</li>
              <li>Pedal condition — brake, clutch, and accelerator in working order</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              5. Tires and Wheels (approximately 10 inspection points)
            </h3>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Tire tread depth — minimum 1.6mm across the tire surface</li>
              <li>Tire condition — no bulges, cuts, or exposed cords</li>
              <li>Tire size — matches manufacturer specifications for the vehicle</li>
              <li>Wheel alignment — within manufacturer specifications</li>
              <li>Wheel nuts — all present and properly torqued</li>
              <li>Spare tire — present and in usable condition (where applicable)</li>
            </ul>
          </section>

          <section>
            <h2
              id="requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Document Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before heading to a PMVIC center, make sure you have the following
              documents ready:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Original Certificate of Registration (CR)</strong> — The
                current CR of the vehicle. The PMVIC will verify the engine
                number and chassis number against the CR records.
              </li>
              <li>
                <strong>Latest Official Receipt (OR)</strong> — Proof of the
                most recent registration payment. This confirms the
                vehicle&apos;s registration status.
              </li>
              <li>
                <strong>Valid government-issued ID</strong> — The vehicle
                owner&apos;s or authorized representative&apos;s ID. If a
                representative is bringing the vehicle, an authorization letter
                from the registered owner may be required.
              </li>
              <li>
                <strong>The vehicle itself</strong> — The vehicle must be
                physically present at the PMVIC center for inspection. There is
                no way to complete the inspection without the vehicle.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              You do not need an appointment at most PMVIC centers — they
              operate on a walk-in basis. However, some centers in busy areas
              (especially in Metro Manila) offer online appointment systems to
              reduce waiting times. Check the specific PMVIC center&apos;s
              website or contact them directly to inquire about appointments.
            </p>
          </section>

          <section>
            <h2
              id="step-by-step"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step PMVIC Inspection Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is what to expect when you visit a PMVIC center for your
              vehicle inspection:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Arrive at the PMVIC center.</strong> Drive your vehicle
                to the PMVIC center and park in the designated queue area.
                During peak times (especially at the end of the month), expect
                waiting times of up to 1-2 hours.
              </li>
              <li>
                <strong>Register at the front desk.</strong> Present your CR, OR,
                and valid ID. The staff will record your vehicle details and
                assign you a queue number. You will be asked to pay the
                inspection fee at this stage.
              </li>
              <li>
                <strong>Exterior and lighting inspection.</strong> A technician
                will inspect the vehicle&apos;s exterior, checking all lights,
                mirrors, windshield, wipers, body panels, and bumpers.
                Headlight alignment is tested using specialized equipment.
              </li>
              <li>
                <strong>Under-chassis inspection.</strong> The vehicle is driven
                onto a lift or pit, and a technician inspects the underside of
                the vehicle, checking brakes, suspension, steering components,
                exhaust system, and frame condition.
              </li>
              <li>
                <strong>Brake testing.</strong> The vehicle is placed on a
                brake dynamometer that measures the braking force of each wheel.
                The brakes must meet minimum performance standards for the
                vehicle&apos;s weight class.
              </li>
              <li>
                <strong>Emission testing.</strong> The exhaust emissions are
                measured using a gas analyzer (for gasoline vehicles) or an
                opacity meter (for diesel vehicles). The results must be within
                the limits set by the Philippine Clean Air Act.
              </li>
              <li>
                <strong>Interior and tire inspection.</strong> The technician
                checks seatbelts, horn, speedometer, dashboard instruments,
                pedals, and tires. Tire tread depth is measured using a gauge.
              </li>
              <li>
                <strong>Engine and chassis number verification.</strong> The
                technician physically verifies the engine number and chassis
                number against the information in the CR. Any discrepancies are
                flagged.
              </li>
              <li>
                <strong>Results and certificate issuance.</strong> After all
                inspection points are completed, the results are compiled into a
                report. If the vehicle passes all items, a PMVIC inspection
                certificate is issued electronically and transmitted to the
                LTO&apos;s LTMS system. If the vehicle fails, a report
                detailing the failed items is provided.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="fees"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              PMVIC Inspection Fees {CURRENT_YEAR_STR}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PMVIC inspection fees are standardized by the DOTr and should be
              uniform across all accredited PMVIC centers. Here are the current
              fees as of {CURRENT_YEAR_STR}:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Vehicle Type
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Inspection Fee (PHP)
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Re-Inspection Fee (PHP)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Motorcycle / Tricycle
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 600
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 300
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Light Vehicle (sedan, SUV, pickup)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,800
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 900
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Light Truck
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 2,000
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Heavy Vehicle / Bus
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 2,500
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,250
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Trailer
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,500
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 750
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The re-inspection fee (typically 50% of the original fee) applies
              when a vehicle fails the initial inspection and returns within 7
              calendar days for re-testing on the failed items only. If the
              vehicle returns after 7 days, or if different items fail during
              re-inspection, the full inspection fee applies again.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              These fees do not include any repairs that your vehicle may need
              to pass the inspection. Repair costs will vary depending on the
              issues found. For a complete breakdown of all LTO-related costs,
              check our{" "}
              <Link
                href="/guides/lto-fees-schedule"
                className="text-blue-600 hover:underline"
              >
                LTO fees schedule guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="pass-or-fail"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What Happens If You Pass or Fail
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>If your vehicle passes:</strong> The PMVIC center will
              issue an electronic inspection certificate, and the passing result
              will be transmitted directly to the LTO&apos;s LTMS system. You
              will receive a printed copy of the inspection report showing all
              70 inspection points and their results. The certificate is valid
              for 120 days from the date of inspection. You can then proceed to
              the LTO to complete your{" "}
              <Link
                href="/guides/lto-renewal-requirements"
                className="text-blue-600 hover:underline"
              >
                registration renewal
              </Link>{" "}
              or other transaction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>If your vehicle fails:</strong> You will receive a
              detailed failure report listing each inspection item that did not
              meet the standards. The PMVIC center cannot perform repairs — you
              must take your vehicle to a separate repair shop to fix the
              issues. After repairs are completed, return to the same PMVIC
              center within 7 calendar days for a re-inspection at the reduced
              re-inspection fee. The re-inspection will only cover the items
              that originally failed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Common failure items include misaligned headlights (the most
              frequent failure), non-functional signal or brake lights, worn
              brake pads, excessive tire wear, emission levels above the
              threshold, missing side mirrors, and cracked windshields. Most of
              these issues are relatively inexpensive to fix, so do not panic
              if your vehicle fails — simply address the issues and return for
              re-inspection.
            </p>
          </section>

          <section>
            <h2
              id="tips-to-pass"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips to Pass the PMVIC Inspection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Passing the PMVIC inspection on the first try saves you time,
              money, and the hassle of coming back for a re-inspection. Here
              are practical tips from experienced Filipino motorists:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Check all your lights before going.</strong> This is the
                number one cause of PMVIC failures. Walk around your vehicle and
                verify that every light works: headlights (low and high beam),
                tail lights, brake lights, turn signals (front, rear, and side),
                hazard lights, reverse lights, and license plate lights. Replace
                any burned-out bulbs before the inspection.
              </li>
              <li>
                <strong>Inspect your tires.</strong> Check the tread depth using
                the peso coin test — insert a one-peso coin into the tread
                groove with the date side facing down. If you can see the entire
                date, your tread may be too shallow. Replace tires that show
                bulges, cuts, or exposed cords. Make sure all tires are the
                correct size for your vehicle.
              </li>
              <li>
                <strong>Test your brakes.</strong> Have your brakes checked by a
                mechanic before the inspection. Worn brake pads, leaking brake
                fluid, or a soft brake pedal will cause a failure. Replace pads
                and rotors as needed, and bleed the brake system if the pedal
                feels spongy.
              </li>
              <li>
                <strong>Ensure your seatbelts work.</strong> All seatbelts must
                buckle, lock, and retract properly. If any seatbelt is damaged,
                frayed, or non-functional, have it repaired or replaced before
                the inspection.
              </li>
              <li>
                <strong>Check your windshield and mirrors.</strong> A cracked
                windshield in the driver&apos;s line of sight will fail the
                inspection. Both side mirrors must be present and adjustable. The
                rearview mirror must be properly mounted inside the vehicle.
              </li>
              <li>
                <strong>Address any emission issues.</strong> If your vehicle
                produces visible smoke or has a check engine light on, have it
                serviced before the inspection. For gasoline vehicles, a tune-up
                and spark plug replacement can significantly improve emissions.
                For diesel vehicles, a fuel injector cleaning may help.
              </li>
              <li>
                <strong>Make sure your horn works.</strong> A non-functional horn
                is an automatic failure. Test it before you go and fix it if
                needed — it is usually a simple and inexpensive repair.
              </li>
              <li>
                <strong>Bring complete documents.</strong> Having the correct CR,
                OR, and ID ready prevents administrative delays and ensures the
                engine and chassis numbers can be properly verified.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="accredited-locations"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Accredited PMVIC Locations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As of {CURRENT_YEAR_STR}, there are over 300 DOTr-accredited PMVIC centers
              across the Philippines, with concentrations in Metro Manila,
              Central Luzon, Calabarzon, Central Visayas, and Western Visayas.
              The number of accredited centers continues to grow as the
              government expands the program to more areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Major PMVIC operators in the Philippines include:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>MVIS Philippines</strong> — One of the largest operators
                with centers across Metro Manila and major provincial cities
              </li>
              <li>
                <strong>Motolite PMVIC</strong> — Operated by the leading
                battery manufacturer, with centers nationwide
              </li>
              <li>
                <strong>Toyota Motor Philippines PMVIC</strong> — Located at
                select Toyota dealerships, open to all vehicle brands
              </li>
              <li>
                <strong>AutoHub PMVIC</strong> — Part of the AutoHub group,
                with centers in Metro Manila and nearby provinces
              </li>
              <li>
                <strong>Various regional operators</strong> — Smaller operators
                serving specific provinces and cities
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can check the DOTr&apos;s official list of accredited PMVIC
              centers on the{" "}
              <a
                href="https://dotr.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                DOTr website
              </a>
              . To find a PMVIC center near your preferred LTO branch, use our{" "}
              <Link
                href="/branches"
                className="text-blue-600 hover:underline"
              >
                LTO branch finder
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="common-issues"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Common Issues and Controversies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PMVIC program has not been without controversy since its
              launch. Here are some of the most common issues that vehicle
              owners encounter and the debates surrounding the program:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>High inspection fees.</strong> Many vehicle owners,
              particularly motorcycle riders and owners of older vehicles, have
              complained that the PMVIC fees are too high. The PHP 1,800 fee for
              a light vehicle, for instance, is significantly higher than the
              old emission testing fee of around PHP 300-500. Critics argue
              that the fees create an additional financial burden, especially
              for lower-income motorists. Supporters counter that the
              comprehensive inspection is necessary for road safety and that the
              fees reflect the cost of maintaining calibrated inspection
              equipment and trained technicians.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Limited PMVIC locations in some areas.</strong> In certain
              provinces and rural areas, PMVIC centers are sparse or
              non-existent, forcing vehicle owners to travel long distances for
              inspection. This is particularly problematic for motorcycle owners
              and those with vehicles that may not be in optimal condition for
              long journeys. The DOTr has been working to accredit more centers
              in underserved areas.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Long waiting times during peak periods.</strong> At the
              end of the month and toward the end of each quarter, PMVIC centers
              experience heavy volumes as vehicle owners rush to complete their
              registrations. Waiting times of 3-4 hours are not uncommon during
              these peak periods. The best strategy is to go early in the month
              and early in the morning on a weekday.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Questionable failures.</strong> Some vehicle owners report
              being failed for items that they believe are borderline or
              subjective. While the inspection is mostly objective and
              equipment-based, some items (such as body condition assessment)
              involve a degree of technician judgment. If you believe a failure
              is unjustified, you can request a review or file a complaint with
              the DOTr.
            </p>
          </section>

          <section>
            <h2
              id="pmvic-vs-private-emission"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              PMVIC vs. Private Emission Testing Centers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before the PMVIC system was fully rolled out, vehicle owners only
              needed to pass an emission test at a Private Emission Testing
              Center (PETC) before renewing their registration. The transition
              from the old PETC system to the new PMVIC system has been gradual,
              and some vehicle owners are still confused about the differences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The key difference is scope: a PETC only tested exhaust emissions,
              while a PMVIC conducts a comprehensive 70-point inspection
              covering safety, roadworthiness, and emissions. The PMVIC
              inspection is far more thorough and uses more advanced equipment.
              As a result, the PMVIC fee is higher than the old PETC emission
              testing fee.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In areas where PMVIC centers are not yet available, the LTO may
              still accept emission test results from accredited PETCs as an
              interim measure. However, the long-term plan is for all vehicles
              to undergo PMVIC inspection nationwide. Check with your local LTO
              branch to determine whether a PMVIC or PETC result is required in
              your area.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For related information about vehicle registration and the
              documents you will need alongside your PMVIC certificate, read our
              guide on{" "}
              <Link
                href="/guides/lto-renewal-requirements"
                className="text-blue-600 hover:underline"
              >
                LTO renewal requirements
              </Link>{" "}
              and our{" "}
              <Link
                href="/guides/ctpl-insurance-guide"
                className="text-blue-600 hover:underline"
              >
                CTPL insurance guide
              </Link>
              . If you are processing a vehicle transfer, also see our{" "}
              <Link
                href="/guides/pnp-hpg-clearance"
                className="text-blue-600 hover:underline"
              >
                PNP-HPG clearance guide
              </Link>
              .
            </p>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/lto-plate-tracker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Plate Number Tracker →
              </Link>
              <Link
                href="/mv-file-checker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                MV File Number Checker →
              </Link>
              <Link
                href="/renewal-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Registration Renewal Calculator →
              </Link>
              <Link
                href="/branches"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Find Your LTO Branch →
              </Link>
            </div>
          </section>

          <FAQSection faqs={faqs} />
        </article>

        <div className="hidden xl:block w-64 shrink-0">
          <TableOfContents headings={headings} />
        </div>
      </div>
    </div>
  );
}
