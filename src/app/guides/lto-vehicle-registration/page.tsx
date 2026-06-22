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
  HowToSchema,
} from "@/components/seo/JsonLd";

const guide = getGuideBySlug("lto-vehicle-registration")!;

export const metadata: Metadata = {
  title: `LTO Vehicle Registration ${CURRENT_YEAR_STR} — Complete Requirements, Fees & Process`,
  description: `Complete guide to LTO vehicle registration in the Philippines ${CURRENT_YEAR_STR}. New and renewal registration requirements, MVUC fees, step-by-step process, PMVIC inspection, CTPL insurance, and LTO office locations.`,
  keywords: [
    "LTO vehicle registration",
    `LTO registration requirements ${CURRENT_YEAR_STR}`,
    "how to register vehicle LTO",
    "LTO renewal registration",
    `LTO registration fees ${CURRENT_YEAR_STR}`,
    "MVUC fees Philippines",
    "LTO new vehicle registration",
    "LTO registration renewal requirements",
    "vehicle registration Philippines",
    "LTO OR CR renewal",
    "LTO LTMS portal registration",
    "PMVIC inspection requirements",
  ],
  openGraph: {
    title: `LTO Vehicle Registration ${CURRENT_YEAR_STR} — Complete Requirements, Fees & Process`,
    description:
      "Complete guide to LTO vehicle registration. New and renewal requirements, MVUC fees, step-by-step process, and LTO branch locations.",
    url: "https://ltotrackeronline.ph/guides/lto-vehicle-registration",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `LTO Vehicle Registration ${CURRENT_YEAR_STR} — Complete Requirements, Fees & Process`,
    description:
      "Complete guide to LTO vehicle registration. Requirements, fees, and step-by-step process for new and renewal registration.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-vehicle-registration",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  {
    id: "new-vs-renewal",
    text: "New Registration vs. Renewal Registration",
    level: 2,
  },
  {
    id: "new-registration-requirements",
    text: "New Vehicle Registration Requirements",
    level: 2,
  },
  {
    id: "renewal-requirements",
    text: "Renewal Registration Requirements",
    level: 2,
  },
  { id: "pmvic-inspection", text: "PMVIC Inspection", level: 2 },
  { id: "ctpl-insurance", text: "CTPL Insurance", level: 2 },
  {
    id: "registration-fees",
    text: "Complete Registration Fee Schedule",
    level: 2,
  },
  { id: "mvuc", text: "Motor Vehicle User's Charge (MVUC)", level: 2 },
  {
    id: "step-by-step-new",
    text: "Step-by-Step: New Vehicle Registration",
    level: 2,
  },
  {
    id: "step-by-step-renewal",
    text: "Step-by-Step: Renewal Registration",
    level: 2,
  },
  {
    id: "online-registration",
    text: "Online Registration via LTMS Portal",
    level: 2,
  },
  { id: "late-registration", text: "Late Registration Penalties", level: 2 },
  { id: "special-cases", text: "Special Registration Cases", level: 2 },
  { id: "tips", text: "Tips for a Smooth Registration", level: 2 },
];

const faqs = [
  {
    question: "What are the requirements for LTO vehicle registration renewal?",
    answer:
      "For LTO vehicle registration renewal, you need the following: original Certificate of Registration (CR), latest Official Receipt (OR), valid Compulsory Third-Party Liability (CTPL) insurance, PMVIC inspection certificate (for vehicles 4 years old and above or as required), and a valid government-issued ID. If there are any unpaid traffic violations on the vehicle, you must also settle those before the renewal can be processed. Ensure all documents are current and the vehicle passes the PMVIC inspection before visiting the LTO branch.",
  },
  {
    question: `How much does it cost to register a vehicle at the LTO in ${CURRENT_YEAR_STR}?`,
    answer:
      "The cost of vehicle registration at the LTO depends on the vehicle type and weight. For a typical private sedan, expect to pay approximately PHP 1,600 to PHP 4,500 which includes the registration fee (PHP 252.96 for cars), computer fee (PHP 67.36), MVUC (PHP 1,600 to PHP 3,500+ depending on gross vehicle weight), CTPL insurance (PHP 400 to PHP 750), and stenciling/sticker fees. Motorcycles are cheaper, starting at around PHP 800 to PHP 1,500 total. Late registration penalties and PMVIC inspection fees (PHP 600 to PHP 1,800) are additional costs if applicable.",
  },
  {
    question: "Can I renew my vehicle registration online through LTO?",
    answer:
      "Yes, the LTO offers online registration renewal through the LTMS Portal at portal.lto.gov.ph. You can create an account, fill out the renewal application, upload required documents, and pay the fees online. However, you still need to have a valid PMVIC inspection certificate and CTPL insurance before applying online. After online processing, you can pick up the new OR and registration sticker at your designated LTO branch or have it delivered to your address in select areas.",
  },
  {
    question: "What happens if I fail to renew my vehicle registration on time?",
    answer:
      "If you fail to renew your vehicle registration by the deadline (which is based on the last digit of your plate number or the assigned registration month), you will incur a late registration penalty. The penalty is 50% of the registration fee for every year or fraction of a year of delay. Additionally, driving with an expired registration is a traffic violation that can result in a fine of PHP 10,000 for the first offense under the updated LTO penalty schedule. Your vehicle can also be impounded if caught with expired registration during an LTO enforcement operation.",
  },
  {
    question: "What is MVUC and why do I have to pay it?",
    answer:
      "MVUC stands for Motor Vehicle User's Charge, a fee mandated by Republic Act No. 8794 (Motor Vehicle User's Charge Act of 2000). It is collected during vehicle registration and is based on the gross vehicle weight (GVW) of the vehicle. The MVUC is used to fund road maintenance, rehabilitation, and construction projects across the Philippines. The fee ranges from approximately PHP 720 for motorcycles to PHP 3,500 or more for heavier vehicles like SUVs and trucks. The MVUC is paid annually as part of the vehicle registration renewal.",
  },
  {
    question: "Do I need a PMVIC inspection for vehicle registration renewal?",
    answer:
      "PMVIC (Private Motor Vehicle Inspection Center) inspection is required for motor vehicles during registration renewal. The LTO has mandated that vehicles undergo a comprehensive 70-point inspection at accredited PMVIC centers to ensure roadworthiness, safety compliance, and emissions standards. The inspection covers brakes, lights, tires, emissions, steering, and other safety components. The PMVIC certificate is valid for a limited period, so schedule your inspection close to your registration renewal date. Inspection fees range from PHP 600 for motorcycles to PHP 1,800 for larger vehicles.",
  },
  {
    question:
      "Can I register my vehicle at any LTO branch or does it have to be a specific one?",
    answer:
      "For new vehicle registration, you can process it at any LTO District Office or Extension Office that handles motor vehicle registration. For renewal registration, you can renew at any LTO branch nationwide; you are not restricted to the branch where the vehicle was originally registered. This policy was implemented to make it more convenient for vehicle owners, especially those who have moved to a different area. However, some transactions like change of classification or major modifications may require processing at specific branches.",
  },
  {
    question: "What documents does a car dealer provide for new vehicle registration?",
    answer:
      "When you purchase a brand-new vehicle from an authorized dealer, the dealer typically provides the following documents for registration: Certificate of Stock Report (CSR), Sales Invoice, PNP-HPG clearance or certificate of no stolen vehicle case, CTPL insurance policy, vehicle emission compliance certificate from the manufacturer, the vehicle's conformity certificate, and sometimes the initial PMVIC inspection. Some dealers handle the entire registration process on behalf of the buyer as part of the purchase package, while others provide the documents for the buyer to process independently.",
  },
];

export default function LtoVehicleRegistration() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "LTO Vehicle Registration" },
        ]}
      />

      <ArticleSchema
        headline={`LTO Vehicle Registration ${CURRENT_YEAR_STR} — Complete Requirements, Fees & Process`}
        description="Complete guide to LTO vehicle registration in the Philippines. New and renewal registration requirements, MVUC fees, step-by-step process, and LTO office locations."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/lto-vehicle-registration"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "LTO Vehicle Registration",
            url: "https://ltotrackeronline.ph/guides/lto-vehicle-registration",
          },
        ]}
      />
      <HowToSchema
        name="How to Register a Vehicle at the LTO Philippines"
        description="Step-by-step guide to registering a motor vehicle at the LTO, including new and renewal registration."
        steps={[
          {
            name: "Gather Required Documents",
            text: "Collect all necessary documents including CR, OR, CTPL insurance, PMVIC certificate, and valid ID. For new vehicles, obtain the Certificate of Stock Report and Sales Invoice from the dealer.",
          },
          {
            name: "Obtain PMVIC Inspection Certificate",
            text: "Visit an accredited PMVIC center and have the vehicle inspected. Obtain the PMVIC certificate confirming the vehicle passed the 70-point inspection.",
          },
          {
            name: "Purchase CTPL Insurance",
            text: "Buy a Compulsory Third-Party Liability insurance policy from an accredited insurance provider. The policy must cover the upcoming registration period.",
          },
          {
            name: "Visit the LTO Branch",
            text: "Go to any LTO District Office or Extension Office. Submit all documents at the evaluation window for assessment.",
          },
          {
            name: "Pay Registration Fees",
            text: "After assessment, proceed to the cashier and pay the total registration fees including MVUC, computer fee, registration fee, and other applicable charges.",
          },
          {
            name: "Receive OR and Registration Sticker",
            text: "After payment, receive the new Official Receipt (OR) and registration sticker. Affix the sticker to your vehicle's windshield or plate as required.",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LTO Vehicle Registration {CURRENT_YEAR_STR} — Complete Requirements, Fees &
            Process
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>18 min read</span>
          </div>

          <section>
            <h2
              id="overview"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to the{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{" "}
              comprehensive guide to vehicle registration at the Land
              Transportation Office (LTO) in the Philippines. Vehicle
              registration is a mandatory legal requirement for all motor
              vehicles operating on Philippine roads, governed by Republic Act
              No. 4136 (Land Transportation and Traffic Code) and administered
              by the LTO under the Department of Transportation (DOTr). Whether
              you are registering a brand-new vehicle fresh from the dealership
              or renewing the registration of your existing car, motorcycle, or
              truck, understanding the complete process, requirements, and fees
              will save you time, money, and frustration.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every motor vehicle in the Philippines must be registered with the
              LTO and must carry a valid Certificate of Registration (CR) and
              Official Receipt (OR) at all times. The registration must be
              renewed annually (or every three years for new vehicles), and
              failure to maintain current registration results in penalties,
              fines, and potential impoundment of the vehicle. The registration
              process also serves as the government&apos;s primary mechanism for
              tracking vehicle ownership, ensuring road safety through
              inspections, and collecting road use charges that fund
              infrastructure development.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In this guide, we walk you through every aspect of the vehicle
              registration process for {CURRENT_YEAR_STR} — from the documents you need to
              prepare, to the exact fees you will pay, to the step-by-step
              process at the LTO branch. We also cover online registration
              through the LTMS Portal, late registration penalties, and special
              cases that many vehicle owners encounter.
            </p>
          </section>

          <section>
            <h2
              id="new-vs-renewal"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              New Registration vs. Renewal Registration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO handles two main types of vehicle registration: new
              registration (for vehicles being registered for the first time)
              and renewal registration (for vehicles with existing registration
              that needs to be renewed). The requirements, process, and fees
              differ between these two types.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>New vehicle registration</strong> applies when you
              purchase a brand-new vehicle from an authorized dealer, import a
              vehicle from abroad, or assemble a vehicle locally. This is the
              initial registration that creates the vehicle&apos;s record in the
              LTO database, assigns a plate number, and issues the first CR and
              OR. New vehicles receive a three-year registration validity,
              meaning the first renewal will be due three years after the
              initial registration date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Renewal registration</strong> is the annual process of
              renewing an existing vehicle&apos;s registration. This is the more
              common transaction that most vehicle owners deal with every year.
              The renewal ensures that the vehicle remains legally registered,
              road-worthy, and insured. The registration renewal deadline is
              typically based on the last digit of the plate number or the month
              assigned during initial registration. You can check your{" "}
              <Link
                href="/lto-plate-tracker"
                className="text-blue-600 hover:underline"
              >
                plate number status
              </Link>{" "}
              to verify your registration details.
            </p>
          </section>

          <section>
            <h2
              id="new-registration-requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              New Vehicle Registration Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have just purchased a brand-new vehicle, you will need the
              following documents for the initial registration at the LTO:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Certificate of Stock Report (CSR)</strong> — Issued by
                the dealer, this document certifies that the vehicle is part of
                the dealer&apos;s legitimate inventory and has been properly
                imported or manufactured. The CSR includes all vehicle
                specifications and identification numbers.
              </li>
              <li>
                <strong>Sales Invoice</strong> — The official sales invoice from
                the dealer showing the purchase price, buyer&apos;s name, and
                complete vehicle details. This serves as proof of purchase and
                ownership.
              </li>
              <li>
                <strong>
                  PNP-HPG Motor Vehicle Clearance Certificate
                </strong>{" "}
                — Certification from the Philippine National Police Highway
                Patrol Group confirming that the vehicle is not reported stolen
                and has no pending cases. For brand-new vehicles, the dealer
                often facilitates this.
              </li>
              <li>
                <strong>
                  Compulsory Third-Party Liability (CTPL) Insurance
                </strong>{" "}
                — A valid CTPL insurance policy covering the vehicle for the
                registration period. This is mandatory for all vehicles and
                protects third parties in case of accidents. Learn more in our{" "}
                <Link
                  href="/guides/ctpl-insurance-guide"
                  className="text-blue-600 hover:underline"
                >
                  CTPL Insurance Guide
                </Link>
                .
              </li>
              <li>
                <strong>Vehicle Emission Compliance Certificate</strong> — For
                brand-new vehicles, this is typically provided by the
                manufacturer certifying that the vehicle meets Philippine
                emission standards.
              </li>
              <li>
                <strong>Buyer&apos;s valid government-issued ID</strong> —
                Original and photocopy of at least one valid ID such as a
                driver&apos;s license, passport, UMID, PhilID, or similar
                government-issued identification.
              </li>
              <li>
                <strong>Duly accomplished Motor Vehicle Registration
                Application Form</strong> — Available at the LTO branch or
                downloadable from the{" "}
                <a
                  href="https://portal.lto.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                >
                  LTMS Portal
                </a>
                .
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many authorized dealers offer to handle the registration process
              on behalf of the buyer. If the dealer processes the registration,
              they will collect the registration fees and handle all the
              paperwork. The buyer will receive the CR, OR, and temporary plate
              or conduction sticker. However, it is important to verify that the
              dealer actually completes the registration by checking the
              vehicle&apos;s status through our{" "}
              <Link
                href="/mv-file-checker"
                className="text-blue-600 hover:underline"
              >
                MV File Checker
              </Link>{" "}
              tool.
            </p>
          </section>

          <section>
            <h2
              id="renewal-requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Renewal Registration Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For annual registration renewal, prepare the following documents
              before visiting the LTO:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Original Certificate of Registration (CR)</strong> — The
                current CR issued by the LTO. If the CR has been lost or
                damaged, you must apply for a replacement before renewal. For
                full renewal requirements, see our{" "}
                <Link
                  href="/guides/lto-renewal-requirements"
                  className="text-blue-600 hover:underline"
                >
                  LTO Renewal Requirements Guide
                </Link>
                .
              </li>
              <li>
                <strong>Latest Official Receipt (OR)</strong> — The most recent
                OR from the previous registration period, serving as proof that
                the last registration was completed and fees were paid.
              </li>
              <li>
                <strong>
                  Compulsory Third-Party Liability (CTPL) Insurance
                </strong>{" "}
                — A valid CTPL policy covering the upcoming registration period.
                The policy must be from an Insurance Commission-accredited
                provider.
              </li>
              <li>
                <strong>PMVIC Inspection Certificate</strong> — A certificate
                from an accredited Private Motor Vehicle Inspection Center
                confirming that the vehicle has passed the comprehensive
                inspection. This is required for vehicles that are four years
                old and above, or as mandated by the LTO.
              </li>
              <li>
                <strong>Valid government-issued ID</strong> — Original and
                photocopy of the registered owner&apos;s valid ID.
              </li>
              <li>
                <strong>
                  Clearance of traffic violations (if applicable)
                </strong>{" "}
                — Any unsettled traffic violations tied to the vehicle or the
                registered owner must be cleared before the renewal can be
                processed. Use our{" "}
                <Link
                  href="/penalty-calculator"
                  className="text-blue-600 hover:underline"
                >
                  Penalty Calculator
                </Link>{" "}
                to estimate any fines you may owe.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              The registration renewal deadline is determined by the vehicle&apos;s
              registration month, which is typically assigned based on the last
              digit of the plate number or the month of initial registration.
              Vehicle owners are encouraged to renew within their designated
              month to avoid late penalties and long queues at LTO branches.
            </p>
          </section>

          <section>
            <h2
              id="pmvic-inspection"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              PMVIC Inspection
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Private Motor Vehicle Inspection Center (PMVIC) program was
              introduced by the LTO to ensure that all vehicles on Philippine
              roads meet safety and emissions standards. Vehicles undergoing
              registration renewal are required to pass a comprehensive 70-point
              inspection at an accredited PMVIC center before their registration
              can be renewed. For a detailed walkthrough of the inspection process,
              visit our{" "}
              <Link
                href="/guides/pmvic-inspection-guide"
                className="text-blue-600 hover:underline"
              >
                PMVIC Inspection Guide
              </Link>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The inspection covers the following areas:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Braking system:</strong> Brake efficiency, parking
                brake, and brake line integrity
              </li>
              <li>
                <strong>Lighting system:</strong> Headlights (alignment and
                intensity), tail lights, signal lights, brake lights, and
                hazard lights
              </li>
              <li>
                <strong>Emission levels:</strong> Exhaust gas analysis for
                compliance with DENR standards
              </li>
              <li>
                <strong>Steering and suspension:</strong> Play in steering
                components, suspension condition, and wheel alignment
              </li>
              <li>
                <strong>Tires:</strong> Tread depth, tire condition, and proper
                size
              </li>
              <li>
                <strong>Body and chassis:</strong> Structural integrity, rust,
                and damage
              </li>
              <li>
                <strong>Horn, wipers, and mirrors:</strong> Functionality and
                condition
              </li>
              <li>
                <strong>Seatbelts:</strong> Condition and functionality of all
                seatbelts
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              PMVIC inspection fees vary by vehicle type: approximately PHP 600
              for motorcycles, PHP 1,000 to PHP 1,200 for light vehicles (cars
              and SUVs), and PHP 1,500 to PHP 1,800 for heavy vehicles (trucks
              and buses). If your vehicle fails any inspection point, you must
              repair the issue and return for re-inspection. Re-inspection fees
              are typically lower than the initial inspection fee.
            </p>
          </section>

          <section>
            <h2
              id="ctpl-insurance"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              CTPL Insurance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Compulsory Third-Party Liability (CTPL) insurance is required by
              law for all registered motor vehicles in the Philippines, as
              mandated by the Insurance Code. CTPL insurance provides coverage
              for bodily injury, death, or damage to a third party caused by the
              insured vehicle. It does not cover damage to the insured vehicle
              itself or the vehicle owner — those require separate comprehensive
              insurance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              CTPL premiums are regulated by the Insurance Commission and vary
              based on the vehicle type:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Motorcycles:</strong> Approximately PHP 400 to PHP 500
                per year
              </li>
              <li>
                <strong>Private cars/SUVs:</strong> Approximately PHP 550 to PHP
                700 per year
              </li>
              <li>
                <strong>UV Express/PUV:</strong> Approximately PHP 650 to PHP
                800 per year
              </li>
              <li>
                <strong>Trucks/buses:</strong> Approximately PHP 750 and above
                per year
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can purchase CTPL insurance from any Insurance
              Commission-accredited provider. Many insurance agents operate near
              LTO branches and PMVIC centers for convenience. Ensure that the
              CTPL policy covers the full registration period and is in the name
              of the registered vehicle owner. Read our{" "}
              <Link
                href="/guides/ctpl-insurance-guide"
                className="text-blue-600 hover:underline"
              >
                complete CTPL Insurance Guide
              </Link>{" "}
              for more details.
            </p>
          </section>

          <section>
            <h2
              id="registration-fees"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Complete Registration Fee Schedule
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO registration fee schedule includes several components. The
              table below provides the estimated fees for the most common
              vehicle types. For a complete breakdown of all fees, check our{" "}
              <Link
                href="/guides/lto-fees-schedule"
                className="text-blue-600 hover:underline"
              >
                LTO Fees Schedule Guide
              </Link>
              .
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Fee Component
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Motorcycle
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Private Car/SUV
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Truck/Heavy Vehicle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Registration Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 135.36
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 252.96
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 252.96 - 450.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Computer Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      MVUC
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 720
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,600 - 3,500
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 2,500 - 10,000+
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      CTPL Insurance
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 400 - 500
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 550 - 700
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 750+
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Sticker Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 45.00
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 45.00
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 45.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PMVIC Inspection
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 600
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,000 - 1,200
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,500 - 1,800
                    </td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Estimated Total
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 1,000 - 1,900
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 3,500 - 5,700
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 5,100 - 12,500+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that these are estimated amounts for renewal registration.
              New vehicle registration may have additional fees such as plate
              number fees and initial stenciling. The exact computation is done
              by the LTO evaluator based on the specific vehicle details.
            </p>
          </section>

          <section>
            <h2
              id="mvuc"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Motor Vehicle User&apos;s Charge (MVUC)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MVUC is one of the largest components of the registration fee,
              established under{" "}
              <a
                href="https://www.officialgazette.gov.ph/2000/08/05/republic-act-no-8794/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Republic Act No. 8794
              </a>{" "}
              (Motor Vehicle User&apos;s Charge Act of 2000). The MVUC is based
              on the gross vehicle weight (GVW) of the motor vehicle, with
              heavier vehicles paying more since they cause greater wear on
              roads.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MVUC schedule is divided into several weight brackets:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Motorcycles (all weights):</strong> PHP 720 per year
              </li>
              <li>
                <strong>Up to 1,600 kg GVW:</strong> PHP 1,600 per year
                (typical for small cars)
              </li>
              <li>
                <strong>1,601 to 2,300 kg GVW:</strong> PHP 2,300 per year
                (sedans and compact SUVs)
              </li>
              <li>
                <strong>2,301 to 3,500 kg GVW:</strong> PHP 3,500 per year
                (larger SUVs and pickups)
              </li>
              <li>
                <strong>3,501 to 4,500 kg GVW:</strong> PHP 4,500 per year
                (light trucks)
              </li>
              <li>
                <strong>Above 4,500 kg GVW:</strong> PHP 5,000 and above
                (heavy trucks and buses)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The proceeds from the MVUC go to the Motor Vehicle Road User&apos;s
              Tax Trust Fund, which finances road construction, rehabilitation,
              and maintenance throughout the country. The Special Road Support
              Fund, Special Vehicle Pollution Control Fund, and Special Road
              Safety Fund also receive portions of the MVUC collection.
            </p>
          </section>

          <section>
            <h2
              id="step-by-step-new"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step: New Vehicle Registration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For brand-new vehicles, the registration process is typically
              handled by the authorized dealer. However, if you are processing
              the registration yourself, follow these steps:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Collect all documents from the dealer.</strong> Obtain
                the Certificate of Stock Report (CSR), Sales Invoice, emission
                compliance certificate, and any other documents provided by the
                dealer. Verify that all vehicle details (engine number, chassis
                number, color, model) are correctly stated.
              </li>
              <li>
                <strong>Obtain PNP-HPG clearance.</strong> If not already
                provided by the dealer, visit a{" "}
                <Link
                  href="/guides/pnp-hpg-clearance"
                  className="text-blue-600 hover:underline"
                >
                  PNP-HPG office
                </Link>{" "}
                with the vehicle for clearance. This verifies the vehicle is
                legitimate and not flagged in any database.
              </li>
              <li>
                <strong>Purchase CTPL insurance.</strong> Buy a CTPL policy in
                your name from an accredited insurer. The policy must cover the
                initial registration period (three years for new vehicles).
              </li>
              <li>
                <strong>Visit an LTO District Office.</strong> Go to any LTO
                District Office that handles motor vehicle registration. Bring
                all documents, including the vehicle.
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong>{" "}
                Present the CSR, Sales Invoice, PNP-HPG clearance, CTPL
                insurance, emission certificate, your valid ID, and the
                completed application form.
              </li>
              <li>
                <strong>Vehicle inspection.</strong> The LTO may conduct a
                physical inspection of the vehicle to verify the engine number,
                chassis number, and other identifying features against the
                submitted documents.
              </li>
              <li>
                <strong>Fee assessment and payment.</strong> The evaluator
                computes the total fees. Proceed to the cashier and pay. Keep
                the receipt.
              </li>
              <li>
                <strong>Receive the CR, OR, and temporary plate.</strong> After
                processing, you will receive the Certificate of Registration,
                Official Receipt, registration sticker, and a temporary plate or
                conduction sticker. The permanent plate will be issued
                separately. Track your plate status using our{" "}
                <Link
                  href="/lto-plate-tracker"
                  className="text-blue-600 hover:underline"
                >
                  LTO Plate Tracker
                </Link>
                .
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="step-by-step-renewal"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step: Renewal Registration
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Renewal registration is the annual process that most vehicle
              owners go through. Follow these steps for a smooth renewal:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Check for unsettled violations.</strong> Before heading
                to the LTO, verify that there are no outstanding traffic
                violations on the vehicle. The LTO will not process the renewal
                if there are unresolved violations. Learn how to{" "}
                <Link
                  href="/guides/how-to-settle-traffic-violations"
                  className="text-blue-600 hover:underline"
                >
                  settle traffic violations
                </Link>{" "}
                before your renewal.
              </li>
              <li>
                <strong>Get the PMVIC inspection.</strong> Visit an accredited
                PMVIC center and have the vehicle inspected. If the vehicle
                passes, obtain the PMVIC certificate. Address any failed
                inspection points before proceeding.
              </li>
              <li>
                <strong>Purchase or renew CTPL insurance.</strong> Obtain a
                valid CTPL policy for the upcoming registration period. Ensure
                the policy is in the registered owner&apos;s name.
              </li>
              <li>
                <strong>Prepare all documents.</strong> Gather the CR, latest
                OR, PMVIC certificate, CTPL insurance, and your valid ID.
              </li>
              <li>
                <strong>Visit any LTO branch.</strong> You can renew at any LTO
                branch nationwide. Find the nearest branch using our{" "}
                <Link
                  href="/branches"
                  className="text-blue-600 hover:underline"
                >
                  LTO Branch Finder
                </Link>
                .
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong>{" "}
                Present all documents. The evaluator will review and verify the
                vehicle&apos;s records in the LTO system.
              </li>
              <li>
                <strong>Pay the fees.</strong> After assessment, proceed to the
                cashier and pay the total registration fees. You can use our{" "}
                <Link
                  href="/renewal-calculator"
                  className="text-blue-600 hover:underline"
                >
                  Renewal Calculator
                </Link>{" "}
                to estimate the fees in advance.
              </li>
              <li>
                <strong>Receive the new OR and sticker.</strong> After payment,
                receive the new Official Receipt and registration sticker.
                Affix the sticker to your vehicle as required (typically on the
                windshield for cars or on the plate for motorcycles).
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="online-registration"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Online Registration via LTMS Portal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO has progressively digitized its services through the Land
              Transportation Management System (LTMS) Portal at{" "}
              <a
                href="https://portal.lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                portal.lto.gov.ph
              </a>
              . Vehicle owners can now initiate and, in some cases, complete the
              registration renewal process online.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The online process works as follows:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Create an LTMS account.</strong> Register on the portal
                using your personal information and a valid email address.
                Verify your account through the confirmation email.
              </li>
              <li>
                <strong>Add your vehicle.</strong> Enter the vehicle&apos;s MV
                File Number, plate number, or engine number to link the vehicle
                to your account.
              </li>
              <li>
                <strong>Upload required documents.</strong> Scan and upload the
                PMVIC certificate, CTPL insurance policy, and valid ID.
              </li>
              <li>
                <strong>Pay online.</strong> The system computes the total fees
                and provides online payment options, including bank transfer,
                GCash, Maya, and credit/debit cards.
              </li>
              <li>
                <strong>Receive or pick up the OR and sticker.</strong>{" "}
                Depending on the area, the new OR and registration sticker may
                be delivered to your address or available for pickup at your
                selected LTO branch.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Online registration is particularly convenient as it allows you to
              avoid the queues and crowds at LTO branches. However, you must
              still complete the PMVIC inspection and obtain CTPL insurance
              before applying online. The LTMS Portal is continually being
              improved, so check the portal for the latest features and
              supported transactions.
            </p>
          </section>

          <section>
            <h2
              id="late-registration"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Late Registration Penalties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Failing to renew your vehicle registration on time incurs
              penalties. The late registration penalty structure is as follows:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Penalty rate:</strong> 50% surcharge on the registration
                fee for every year or fraction of a year of delay.
              </li>
              <li>
                <strong>Accumulated penalties:</strong> If the registration has
                been expired for multiple years, the penalties accumulate for
                each year. For example, if you are two years late, you pay
                penalties for two years on top of the current year&apos;s
                registration fees.
              </li>
              <li>
                <strong>Traffic violation:</strong> Driving with an expired
                registration is a separate traffic violation under{" "}
                <Link
                  href="/guides/traffic-violations-fines"
                  className="text-blue-600 hover:underline"
                >
                  LTO traffic violation rules
                </Link>
                , with a fine of PHP 10,000 for the first offense.
              </li>
              <li>
                <strong>Impoundment:</strong> Vehicles caught operating with
                expired registration during LTO enforcement operations may be
                impounded until the registration is renewed and penalties are
                settled.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To avoid late penalties, set reminders for your registration
              renewal month and prepare documents in advance. The{" "}
              <Link
                href="/coding-checker"
                className="text-blue-600 hover:underline"
              >
                Coding Checker
              </Link>{" "}
              tool can help you plan when to visit the LTO by checking the
              number coding schedule for your plate number.
            </p>
          </section>

          <section>
            <h2
              id="special-cases"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Special Registration Cases
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond standard new and renewal registration, the LTO also
              processes several special registration cases:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Imported vehicles:</strong> If you are importing a vehicle
              from abroad, additional documents are required, including the
              Bureau of Customs Certificate of Payment, the original foreign
              registration or title, and import clearance from the DTI
              (Department of Trade and Industry) if applicable. The vehicle must
              meet Philippine emission and safety standards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Rebuilt or modified vehicles:</strong> Vehicles that have
              undergone major modifications (engine change, body modification,
              classification change) must have the modifications recorded with
              the LTO before registration can proceed. This requires an LTO
              inspection and approval of the modification.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Vehicles with chattel mortgage:</strong> If the vehicle
              has an existing chattel mortgage (loan), the encumbrance is noted
              on the CR. The vehicle can still be registered while under
              mortgage, but a transfer of ownership cannot occur until the
              mortgage is released. Check if a vehicle has an encumbrance using
              our{" "}
              <Link
                href="/guides/how-to-check-vehicle-encumbrance"
                className="text-blue-600 hover:underline"
              >
                Vehicle Encumbrance Guide
              </Link>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>
                Vehicles with transferred registration from another region:
              </strong>{" "}
              If you have moved to a different region and want to transfer your
              vehicle&apos;s registration jurisdiction, the LTO can process a
              change of registration from the original branch to the new branch.
              This requires the standard renewal documents plus a clearance from
              the original registering branch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Diplomatic and government vehicles:</strong> Vehicles
              registered under diplomatic plates or government plates have
              different registration procedures and fee structures. These are
              handled by specific LTO offices designated for government and
              diplomatic transactions.
            </p>
          </section>

          <section>
            <h2
              id="tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips for a Smooth Registration
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Prepare early.</strong> Start gathering your documents
                and completing the PMVIC inspection at least two weeks before
                your registration deadline. This gives you time to address any
                issues that come up during the inspection.
              </li>
              <li>
                <strong>Go early in the month.</strong> LTO branches tend to be
                busiest toward the end of the month. Visiting in the first two
                weeks of your registration month typically results in shorter
                queues and faster processing.
              </li>
              <li>
                <strong>Bring exact payment.</strong> While most LTO branches
                accept various payment methods, bringing the approximate amount
                in cash can speed up the process at the cashier. Use our{" "}
                <Link
                  href="/renewal-calculator"
                  className="text-blue-600 hover:underline"
                >
                  Renewal Calculator
                </Link>{" "}
                to estimate the total fees.
              </li>
              <li>
                <strong>Check for violations first.</strong> Before visiting the
                LTO, check if there are any unsettled traffic violations on your
                license or vehicle. Unsettled violations will block the
                registration renewal.
              </li>
              <li>
                <strong>Keep digital copies.</strong> Take photos or scans of
                your CR, OR, and all submitted documents. These digital copies
                can be useful for insurance claims, vehicle verification, and
                as backup in case the originals are lost.
              </li>
              <li>
                <strong>Consider online renewal.</strong> The LTMS Portal offers
                an increasingly convenient way to renew registration without
                visiting the LTO branch. If your vehicle and documentation
                qualify for online processing, take advantage of this service.
              </li>
              <li>
                <strong>Verify your plate status.</strong> If you have a
                relatively new vehicle and are still waiting for your permanent
                plate, check the status through our{" "}
                <Link
                  href="/lto-plate-tracker"
                  className="text-blue-600 hover:underline"
                >
                  LTO Plate Tracker
                </Link>{" "}
                or read our{" "}
                <Link
                  href="/guides/lto-plate-backlog"
                  className="text-blue-600 hover:underline"
                >
                  LTO Plate Backlog Guide
                </Link>{" "}
                for the latest updates on plate production.
              </li>
            </ul>
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
                href="/renewal-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Registration Renewal Calculator →
              </Link>
              <Link
                href="/mv-file-checker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                MV File Number Checker →
              </Link>
              <Link
                href="/branches"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Find Nearest LTO Branch →
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
