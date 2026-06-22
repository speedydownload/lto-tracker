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

const guide = getGuideBySlug("how-to-settle-traffic-violations")!;

export const metadata: Metadata = {
  title: `How to Settle LTO Traffic Violations ${CURRENT_YEAR_STR} — Complete Payment Guide`,
  description: `Complete guide to settling LTO traffic violations in the Philippines ${CURRENT_YEAR_STR}. Step-by-step payment process, AVTS system, online payment options, LTO branch settlement, alarm list clearing, and how to redeem confiscated licenses.`,
  keywords: [
    "settle traffic violations LTO",
    "how to pay LTO traffic fines",
    "LTO violation payment",
    "AVTS system LTO",
    "LTO alarm list",
    "pay traffic fines online Philippines",
    "LTO traffic violation settlement",
    "redeem confiscated license LTO",
    "LTO TOP violation",
    `traffic violation fines Philippines ${CURRENT_YEAR_STR}`,
    "LTO violation clearance",
    "how to check traffic violations LTO",
  ],
  openGraph: {
    title: `How to Settle LTO Traffic Violations ${CURRENT_YEAR_STR} — Complete Payment Guide`,
    description:
      "Complete guide to settling LTO traffic violations. AVTS system, online payment, LTO branch payment, and alarm list clearing.",
    url: "https://ltotrackeronline.ph/guides/how-to-settle-traffic-violations",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Settle LTO Traffic Violations ${CURRENT_YEAR_STR} — Complete Payment Guide`,
    description:
      "Complete guide to settling LTO traffic violations. Payment process, AVTS system, and clearing the alarm list.",
  },
  alternates: {
    canonical:
      "https://ltotrackeronline.ph/guides/how-to-settle-traffic-violations",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  {
    id: "types-of-violations",
    text: "Types of Traffic Violations in the Philippines",
    level: 2,
  },
  {
    id: "how-violations-are-recorded",
    text: "How Violations Are Recorded",
    level: 2,
  },
  { id: "avts-system", text: "The AVTS System Explained", level: 2 },
  {
    id: "checking-violations",
    text: "How to Check Your Traffic Violations",
    level: 2,
  },
  {
    id: "settling-at-lto",
    text: "Step-by-Step: Settling Violations at LTO Branch",
    level: 2,
  },
  {
    id: "online-payment",
    text: "Paying Traffic Violations Online",
    level: 2,
  },
  {
    id: "redeeming-license",
    text: "Redeeming a Confiscated License",
    level: 2,
  },
  { id: "alarm-list", text: "Understanding the Alarm List", level: 2 },
  {
    id: "mmda-violations",
    text: "Settling MMDA Violations",
    level: 2,
  },
  {
    id: "lgu-violations",
    text: "Settling LGU Traffic Violations",
    level: 2,
  },
  {
    id: "consequences",
    text: "Consequences of Not Settling Violations",
    level: 2,
  },
  { id: "tips", text: "Tips for Handling Traffic Violations", level: 2 },
];

const faqs = [
  {
    question: `How do I pay LTO traffic violations in ${CURRENT_YEAR_STR}?`,
    answer:
      "You can pay LTO traffic violations through several channels: (1) Visit any LTO District Office or branch and settle the violation at the cashier after evaluation; (2) Pay online through the LTMS Portal at portal.lto.gov.ph using the online payment facility; (3) Pay through authorized payment partners such as GCash, Maya, or accredited banks. To settle at the LTO branch, bring the Temporary Operator's Permit (TOP) or citation ticket, a valid ID, and the payment amount. The evaluator will compute the fine based on the violation type, and you proceed to the cashier to pay.",
  },
  {
    question: "How can I check if I have unsettled traffic violations at the LTO?",
    answer:
      "You can check for unsettled traffic violations through several methods: (1) Visit the LTMS Portal at portal.lto.gov.ph and log in to check your driver's license and vehicle records; (2) Use the LTO Tracker tools to check your license or vehicle status; (3) Visit any LTO branch and request a records check using your license number or vehicle plate number; (4) Check the LTO AVTS (Alarm and Vehicle Tracking System) through the LTMS Portal to see if your vehicle or license has any pending violations or alarm entries.",
  },
  {
    question: "What is the LTO alarm list and how do I get off it?",
    answer:
      "The LTO alarm list (also known as the AVTS alarm list) is a database of vehicles and driver's licenses that have pending issues, including unsettled traffic violations, stolen vehicle reports, court orders, and other legal holds. If your vehicle or license is on the alarm list, you cannot renew your registration or license, and your vehicle may be flagged during LTO operations. To get off the alarm list, you must resolve the underlying issue — settle unpaid fines, provide clearance from the court, or present proof of ownership. Visit the LTO branch where the alarm was filed to initiate the clearing process.",
  },
  {
    question: "Can I settle traffic violations at any LTO branch?",
    answer:
      "In most cases, yes — you can settle LTO-issued traffic violations at any LTO District Office or branch nationwide. The LTO's LTMS system allows violation records to be accessed from any connected branch. However, there are some exceptions: violations involving confiscated licenses may require you to visit the specific branch where the license was surrendered, and violations with alarm or hold orders may need to be resolved at the branch that issued the alarm. For MMDA and LGU violations, you must settle at the respective agency's office, not the LTO.",
  },
  {
    question: "What happens if I don't pay my traffic violation fines?",
    answer:
      "Failing to pay traffic violation fines has several consequences: (1) Your driver's license renewal will be blocked — the LTO will not renew a license with pending violations; (2) Your vehicle registration renewal may be blocked if the violation is tied to the vehicle; (3) Your license or vehicle may be placed on the LTO alarm list, flagging it during enforcement operations; (4) Accumulated violations can lead to license suspension or revocation; (5) You may be subject to additional penalties or surcharges for delayed payment. It is always best to settle traffic violations promptly to avoid these compounding issues.",
  },
  {
    question: "How long do I have to settle a traffic violation after being apprehended?",
    answer:
      "When an LTO enforcer issues a Temporary Operator's Permit (TOP) upon apprehension, the TOP is typically valid for a limited period (usually 72 hours to 7 days depending on the violation). During this period, you are allowed to drive using the TOP as your temporary license. You should settle the violation and retrieve your confiscated license within this period. After the TOP expires, driving without settling the violation means you are operating without a valid license. However, the violation fine itself can still be paid even after the TOP expires — it will just accumulate in your records and must be settled before any license or registration renewal.",
  },
  {
    question: "Can I contest or dispute a traffic violation?",
    answer:
      "Yes, you have the right to contest or dispute a traffic violation. If you believe the violation was issued in error, you can file a formal protest or dispute at the LTO District Office that has jurisdiction over the apprehension area. You will need to present your case with supporting evidence (dashcam footage, witness statements, photos, etc.). The LTO adjudication process involves a hearing where both the enforcer and the motorist can present their sides. If the violation is overturned, the record is cleared and any confiscated documents are returned. You should file the dispute promptly, ideally within the TOP validity period.",
  },
  {
    question: "What is the difference between LTO, MMDA, and LGU traffic violations?",
    answer:
      "Traffic violations in the Philippines can be issued by three different authorities, each with their own processes: (1) LTO violations are issued by LTO traffic enforcers and are settled at LTO offices; they appear on your LTO record and affect license/registration renewal. (2) MMDA violations are issued by MMDA enforcers within Metro Manila and are settled at MMDA offices or through MMDA online payment channels; they operate under a separate system from LTO. (3) LGU violations are issued by local traffic enforcers (city or municipal) and are settled at the respective city/municipal hall traffic office. Each authority has its own fine schedule and payment process.",
  },
];

export default function HowToSettleTrafficViolations() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Settle Traffic Violations" },
        ]}
      />

      <ArticleSchema
        headline={`How to Settle LTO Traffic Violations ${CURRENT_YEAR_STR} — Complete Payment Guide`}
        description="Complete guide to settling LTO traffic violations in the Philippines. Step-by-step payment process, AVTS system, online payment, and alarm list clearing."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/how-to-settle-traffic-violations"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "Settle Traffic Violations",
            url: "https://ltotrackeronline.ph/guides/how-to-settle-traffic-violations",
          },
        ]}
      />
      <HowToSchema
        name="How to Settle LTO Traffic Violations in the Philippines"
        description="Step-by-step guide to paying and settling traffic violation fines at the LTO."
        steps={[
          {
            name: "Check Your Violations",
            text: "Visit the LTMS Portal or an LTO branch to check for any pending traffic violations on your license or vehicle. Note the violation details and fine amounts.",
          },
          {
            name: "Gather Required Documents",
            text: "Bring the Temporary Operator's Permit (TOP) or citation ticket, a valid government-issued ID, and sufficient payment for the fine amount.",
          },
          {
            name: "Visit the LTO Branch",
            text: "Go to any LTO District Office. Proceed to the evaluation window and present your TOP or citation ticket for assessment.",
          },
          {
            name: "Pay the Fine",
            text: "After the evaluator computes the total fine amount, proceed to the cashier and pay. Keep the official receipt as proof of payment.",
          },
          {
            name: "Retrieve Your License",
            text: "If your license was confiscated, present the payment receipt at the releasing window to retrieve your driver's license.",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Settle LTO Traffic Violations {CURRENT_YEAR_STR} — Complete Payment
            Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>17 min read</span>
          </div>

          <section>
            <h2
              id="overview"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Getting a traffic violation ticket is never pleasant, but settling
              it does not have to be a nightmare.{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{" "}
              has prepared this comprehensive guide to help Filipino motorists
              understand how to settle traffic violations issued by the Land
              Transportation Office (LTO), the Metropolitan Manila Development
              Authority (MMDA), and local government units (LGUs) across the
              Philippines. Whether you received a citation for a moving
              violation, an expired registration, or a number coding infraction,
              this guide walks you through every step of the settlement process
              — from checking your violations to paying your fines and
              retrieving your confiscated license.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traffic enforcement in the Philippines involves multiple agencies,
              each with their own procedures, fine schedules, and payment
              channels. Understanding which agency issued your violation and
              where to settle it is the first critical step. Unsettled
              violations can block your driver&apos;s license renewal, vehicle
              registration renewal, and even place your vehicle or license on
              the LTO alarm list, creating problems that compound over time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide covers LTO violations in detail, as well as MMDA and
              LGU violations, so you know exactly where to go and what to do
              regardless of which enforcing body issued your citation. We also
              explain the AVTS (Alarm and Vehicle Tracking System) and how it
              affects your records, online payment options, and how to contest a
              violation you believe was issued in error.
            </p>
          </section>

          <section>
            <h2
              id="types-of-violations"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Types of Traffic Violations in the Philippines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traffic violations in the Philippines are broadly categorized
              into several types, each with different fine amounts and
              consequences. For a complete list of violations and their
              corresponding fines, refer to our{" "}
              <Link
                href="/guides/traffic-violations-fines"
                className="text-blue-600 hover:underline"
              >
                Traffic Violations and Fines Guide
              </Link>
              .
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Moving violations:</strong> These are violations
                committed while the vehicle is in motion, such as beating a red
                light, illegal overtaking, speeding, illegal U-turn, and
                reckless driving. Moving violations generally carry higher fines
                and can result in license suspension for repeat offenses.
              </li>
              <li>
                <strong>Non-moving violations:</strong> These include illegal
                parking, obstruction, and other violations that occur when the
                vehicle is stationary. Fines are typically lower than moving
                violations.
              </li>
              <li>
                <strong>Registration violations:</strong> Operating a vehicle
                with expired registration, no registration plates, or
                unauthorized plates. These violations can result in vehicle
                impoundment in addition to fines.
              </li>
              <li>
                <strong>License violations:</strong> Driving without a valid
                license, driving with an expired license, or driving with the
                wrong license restriction code for the vehicle type. See our{" "}
                <Link
                  href="/guides/lto-license-restriction-codes"
                  className="text-blue-600 hover:underline"
                >
                  License Restriction Codes Guide
                </Link>{" "}
                for details.
              </li>
              <li>
                <strong>Number coding violations:</strong> Driving on a
                restricted road during coding hours on your coded day. For the
                complete coding schedule, check our{" "}
                <Link
                  href="/guides/mmda-number-coding"
                  className="text-blue-600 hover:underline"
                >
                  MMDA Number Coding Guide
                </Link>
                .
              </li>
              <li>
                <strong>Drunk driving:</strong> Operating a vehicle under the
                influence of alcohol, as defined by the{" "}
                <Link
                  href="/guides/anti-drunk-driving-law"
                  className="text-blue-600 hover:underline"
                >
                  Anti-Drunk and Drugged Driving Act
                </Link>
                . This carries severe penalties including license suspension,
                heavy fines, and potential imprisonment.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="how-violations-are-recorded"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              How Violations Are Recorded
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When an LTO enforcer apprehends you for a traffic violation, the
              following process occurs:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>The enforcer identifies the violation.</strong> The
                enforcer signals you to stop and informs you of the specific
                violation committed.
              </li>
              <li>
                <strong>Your documents are checked.</strong> The enforcer will
                ask for your driver&apos;s license, CR, and OR. They will verify
                that your documents are valid and current.
              </li>
              <li>
                <strong>A citation ticket is issued.</strong> The enforcer
                records the violation details on a citation ticket, including
                the date, time, location, violation type, your license number,
                and vehicle details.
              </li>
              <li>
                <strong>
                  A Temporary Operator&apos;s Permit (TOP) is issued.
                </strong>{" "}
                In most cases, the enforcer will confiscate your driver&apos;s
                license and issue a TOP, which serves as a temporary license
                valid for a limited period. The TOP allows you to continue
                driving while you settle the violation.
              </li>
              <li>
                <strong>The violation is entered into the LTMS/AVTS
                database.</strong>{" "}
                The violation is recorded in the LTO&apos;s digital system,
                linking it to both your driver&apos;s license record and the
                vehicle&apos;s registration record.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              For violations captured by CCTV or traffic camera systems (no-contact
              apprehension), the violation is recorded directly in the system and
              a notice is sent to the registered vehicle owner. You can check if
              your vehicle has any recorded violations using our tracking tools
              on the{" "}
              <Link
                href="/lto-plate-tracker"
                className="text-blue-600 hover:underline"
              >
                LTO Plate Tracker
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="avts-system"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              The AVTS System Explained
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Alarm and Vehicle Tracking System (AVTS) is the LTO&apos;s
              database system that tracks the status of all registered vehicles
              and driver&apos;s licenses in the Philippines. The AVTS is
              integrated into the larger LTMS (Land Transportation Management
              System) and serves as the central repository for violation
              records, alarm entries, and vehicle hold orders.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When a traffic violation is recorded in the AVTS, it creates a
              flag on both the driver&apos;s license and the vehicle
              registration. This flag prevents the license or registration from
              being renewed until the violation is settled. The AVTS also
              tracks other types of alerts including:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Traffic violation flags:</strong> Unsettled traffic
                fines linked to the license or vehicle
              </li>
              <li>
                <strong>Stolen vehicle alerts:</strong> Vehicles reported as
                stolen by the PNP-HPG
              </li>
              <li>
                <strong>Court hold orders:</strong> Vehicles or licenses under
                court orders preventing transfer or renewal
              </li>
              <li>
                <strong>Chattel mortgage encumbrances:</strong> Vehicles with
                active loan encumbrances recorded by lending institutions
              </li>
              <li>
                <strong>Administrative holds:</strong> Holds placed by the LTO
                for various administrative reasons
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can check if your vehicle or license has any AVTS entries by
              visiting the{" "}
              <a
                href="https://portal.lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                LTMS Portal
              </a>{" "}
              or by visiting any LTO branch for a records check.
            </p>
          </section>

          <section>
            <h2
              id="checking-violations"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              How to Check Your Traffic Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before heading to the LTO to settle a violation, it is wise to
              first check what violations are on your record. There are several
              ways to do this:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>LTMS Portal (online):</strong> Visit{" "}
                <a
                  href="https://portal.lto.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                >
                  portal.lto.gov.ph
                </a>{" "}
                and log in to your account. Navigate to the driver&apos;s
                license section to view any pending violations linked to your
                license number. You can also check vehicle violations by
                entering your plate number or MV File Number.
              </li>
              <li>
                <strong>LTO Tracker tools:</strong> Use our{" "}
                <Link
                  href="/lto-license-tracker"
                  className="text-blue-600 hover:underline"
                >
                  LTO License Tracker
                </Link>{" "}
                to check your license status, or the{" "}
                <Link
                  href="/lto-plate-tracker"
                  className="text-blue-600 hover:underline"
                >
                  LTO Plate Tracker
                </Link>{" "}
                to check your vehicle&apos;s status for any recorded
                violations.
              </li>
              <li>
                <strong>Visit an LTO branch:</strong> Go to any LTO District
                Office and request a violation records check. Bring your
                driver&apos;s license (or TOP) and a valid ID. The evaluator can
                pull up your complete violation history from the LTMS system.
              </li>
              <li>
                <strong>Call the LTO hotline:</strong> The LTO has a customer
                service hotline where you can inquire about your violation
                status. However, the phone lines can be busy, so online methods
                are generally more efficient.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="settling-at-lto"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step: Settling Violations at LTO Branch
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most common method of settling traffic violations is by
              visiting an LTO branch. Here is the complete step-by-step
              process:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Locate the nearest LTO branch.</strong> You can settle
                LTO violations at any District Office. Use our{" "}
                <Link
                  href="/branches"
                  className="text-blue-600 hover:underline"
                >
                  LTO Branch Finder
                </Link>{" "}
                to find the nearest location, complete with addresses and
                operating hours.
              </li>
              <li>
                <strong>Bring the required documents.</strong> You will need
                your TOP or citation ticket, a valid government-issued ID, and
                sufficient cash or payment for the fine. If the violation is
                tied to your vehicle, bring the CR and OR as well.
              </li>
              <li>
                <strong>Proceed to the evaluation window.</strong> Present your
                TOP or citation ticket to the evaluator. They will look up your
                violation record in the LTMS and verify the details of the
                violation.
              </li>
              <li>
                <strong>Review the computed fine.</strong> The evaluator will
                compute the total fine based on the violation type and any
                applicable penalties. Review the amount and ensure it matches
                the correct violation. If you believe there is an error, you
                can raise it with the evaluator or request to speak with a
                supervisor.
              </li>
              <li>
                <strong>Proceed to the cashier.</strong> Pay the fine at the
                cashier window. The LTO accepts cash payments. Some branches may
                also accept electronic payments. Obtain and keep the Official
                Receipt as proof of payment.
              </li>
              <li>
                <strong>Retrieve your confiscated license.</strong> If your
                driver&apos;s license was confiscated, proceed to the releasing
                window with your payment receipt. Present the receipt and your
                ID to claim your license. The staff will verify the payment and
                return your license.
              </li>
              <li>
                <strong>Confirm your record is cleared.</strong> Ask the
                evaluator to confirm that the violation has been cleared from
                your record. This ensures that the violation will not block
                future license or registration renewals.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use our{" "}
              <Link
                href="/penalty-calculator"
                className="text-blue-600 hover:underline"
              >
                Penalty Calculator
              </Link>{" "}
              to get an estimate of your fine amount before visiting the LTO, so
              you know how much to prepare.
            </p>
          </section>

          <section>
            <h2
              id="online-payment"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Paying Traffic Violations Online
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO has expanded its online services to include traffic
              violation payment through the LTMS Portal. Here is how to pay
              your violation online:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Log in to the LTMS Portal.</strong> Visit{" "}
                <a
                  href="https://portal.lto.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                >
                  portal.lto.gov.ph
                </a>{" "}
                and log in with your account credentials. If you do not have an
                account, you will need to register first.
              </li>
              <li>
                <strong>Navigate to the violations section.</strong> Find the
                traffic violations module in the portal. Enter your driver&apos;s
                license number or vehicle plate number to view pending
                violations.
              </li>
              <li>
                <strong>Select the violation to pay.</strong> Choose the
                specific violation(s) you want to settle. The system will
                display the fine amount and any applicable penalties.
              </li>
              <li>
                <strong>Choose a payment method.</strong> Available online
                payment methods include bank transfer, GCash, Maya (PayMaya),
                credit card, and debit card. Select your preferred method.
              </li>
              <li>
                <strong>Complete the payment.</strong> Follow the payment
                gateway instructions to complete the transaction. Save or
                screenshot the confirmation as proof of payment.
              </li>
              <li>
                <strong>Retrieve your license (if confiscated).</strong> Even
                if you pay online, you will still need to visit the LTO branch
                to physically retrieve your confiscated driver&apos;s license.
                Bring the online payment confirmation and a valid ID.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Online payment is convenient because it saves you time at the LTO
              branch — you only need to visit for license retrieval if
              applicable, not for payment processing. However, not all violation
              types may be available for online settlement, and the system may
              have scheduled maintenance periods.
            </p>
          </section>

          <section>
            <h2
              id="redeeming-license"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Redeeming a Confiscated License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When an LTO enforcer confiscates your driver&apos;s license during
              apprehension, retrieving it requires settling the violation and
              visiting the branch where the license was surrendered. The process
              is as follows:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Identify where your license was surrendered.</strong>{" "}
                Your TOP or citation ticket should indicate the LTO branch or
                office where the license was deposited. In some cases, the
                license is deposited at the nearest LTO branch in the area of
                apprehension.
              </li>
              <li>
                <strong>Settle the violation.</strong> Pay the fine either at
                the LTO branch or online through the LTMS Portal. Retain the
                official receipt.
              </li>
              <li>
                <strong>Visit the branch with the confiscated license.</strong>{" "}
                Go to the specific LTO branch where the license was surrendered.
                Present the payment receipt, your TOP, and a valid ID.
              </li>
              <li>
                <strong>Claim your license at the releasing window.</strong>{" "}
                The staff will verify the payment, locate your confiscated
                license, and return it to you.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your TOP has already expired and you have not settled the
              violation, do not drive. Driving without a valid license or TOP is
              a separate violation that carries additional fines. Use public
              transportation or ride-hailing services until you can settle the
              violation and retrieve your license.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your license is due for renewal and you have pending
              violations, you must settle all violations before the renewal
              can be processed. Check our{" "}
              <Link
                href="/guides/lto-license-renewal"
                className="text-blue-600 hover:underline"
              >
                LTO License Renewal Guide
              </Link>{" "}
              for the complete renewal process.
            </p>
          </section>

          <section>
            <h2
              id="alarm-list"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Understanding the Alarm List
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO alarm list is a critical component of the AVTS that
              motorists need to understand. Being on the alarm list means your
              vehicle or license has a pending issue that must be resolved
              before any transactions can be processed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Reasons for being placed on the alarm list:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                Accumulated unsettled traffic violations exceeding a certain
                threshold
              </li>
              <li>
                Vehicle reported as stolen or involved in a criminal case
              </li>
              <li>Court orders related to the vehicle or license</li>
              <li>
                Fraudulent documents submitted during a previous LTO
                transaction
              </li>
              <li>
                Unpaid penalties from previous registration periods
              </li>
              <li>
                Vehicle involved in an accident with unresolved claims
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>How to clear an alarm entry:</strong> Visit the LTO
              branch that placed the alarm. Present all relevant documents,
              including proof of violation settlement, court clearance, or
              police clearance as applicable. The LTO evaluator will review
              your documents and, if everything is in order, remove the alarm
              from the system. This process may take several days depending on
              the complexity of the issue.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your vehicle has been placed on the alarm list due to a
              previous owner&apos;s violations, you will need to prove
              current ownership through the{" "}
              <Link
                href="/guides/transfer-of-vehicle-ownership"
                className="text-blue-600 hover:underline"
              >
                transfer of ownership process
              </Link>{" "}
              and may need the previous owner&apos;s cooperation to resolve
              the outstanding issues.
            </p>
          </section>

          <section>
            <h2
              id="mmda-violations"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Settling MMDA Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MMDA violations are separate from LTO violations and must be
              settled at MMDA offices, not at LTO branches. If you were
              apprehended by an MMDA enforcer or received a ticket from the
              MMDA traffic system, here is how to settle it:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Visit the MMDA head office or satellite offices.</strong>{" "}
                The MMDA main office is located at the MMDA Building, EDSA
                corner Orense Street, Guadalupe Nuevo, Makati City. There are
                also satellite offices at various locations in Metro Manila.
              </li>
              <li>
                <strong>Present your citation ticket.</strong> Bring the MMDA
                citation ticket, your driver&apos;s license (or photocopy), and
                a valid ID.
              </li>
              <li>
                <strong>Pay the fine.</strong> MMDA fines can be paid at the
                cashier window. Some violations may also be payable online
                through the MMDA website or authorized payment channels.
              </li>
              <li>
                <strong>Retrieve confiscated documents.</strong> If any
                documents were confiscated, present the payment receipt to
                retrieve them.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that MMDA violations do not directly appear in the LTO AVTS
              system, so they will not directly block your LTO license or
              registration renewal. However, certain MMDA violations may be
              forwarded to the LTO for additional action, especially for
              serious offenses.
            </p>
          </section>

          <section>
            <h2
              id="lgu-violations"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Settling LGU Traffic Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Local government units (LGUs) — cities and municipalities — also
              have their own traffic enforcement divisions that issue
              violations for infractions within their jurisdiction. These
              violations are settled at the respective city or municipal hall,
              not at LTO or MMDA offices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Common LGU violations include illegal parking on local roads,
              local number coding violations (separate from the MMDA scheme),
              obstruction, and violations of local traffic ordinances. The fine
              amounts vary by city or municipality, as each LGU sets its own
              penalty schedule.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To settle an LGU violation, visit the city or municipal traffic
              management office (often located in or near City Hall), present
              the citation ticket and ID, pay the fine at the local treasurer&apos;s
              office, and retrieve any confiscated documents. Like MMDA
              violations, LGU violations generally do not appear in the LTO
              AVTS system, but some LGUs have data-sharing agreements with the
              LTO.
            </p>
          </section>

          <section>
            <h2
              id="consequences"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Consequences of Not Settling Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ignoring traffic violations creates a cascade of problems that
              only get worse over time. Here are the key consequences of not
              settling your traffic violations:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>License renewal blocked.</strong> The LTO will not
                process a driver&apos;s license renewal if there are unsettled
                violations on record. This means you cannot get a new license
                card when your current one expires, effectively making you
                unable to legally drive.
              </li>
              <li>
                <strong>Vehicle registration renewal blocked.</strong> If the
                violation is linked to your vehicle, the registration renewal
                will also be blocked. Driving with expired registration is an
                additional violation with a fine of up to PHP 10,000.
              </li>
              <li>
                <strong>Alarm list placement.</strong> Accumulated violations
                can result in your license or vehicle being placed on the LTO
                alarm list, flagging it during any LTO transaction or
                enforcement operation.
              </li>
              <li>
                <strong>License suspension or revocation.</strong> Under
                Republic Act No. 4136, the LTO has the authority to suspend or
                revoke a driver&apos;s license for repeated violations.
                Accumulating multiple violations of the same type or committing
                serious violations can trigger administrative proceedings
                for suspension or revocation.
              </li>
              <li>
                <strong>Additional fines and surcharges.</strong> Some
                violations may incur additional penalties or surcharges for
                delayed settlement, increasing the total amount you owe.
              </li>
              <li>
                <strong>Difficulty selling or transferring the vehicle.</strong>{" "}
                If your vehicle has unsettled violations, the{" "}
                <Link
                  href="/guides/lto-transfer-ownership"
                  className="text-blue-600 hover:underline"
                >
                  transfer of ownership
                </Link>{" "}
                process will be blocked, making it difficult to sell the
                vehicle.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips for Handling Traffic Violations
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Stay calm during apprehension.</strong> If you are
                pulled over by an enforcer, remain calm and polite. Present your
                documents when asked and listen to the explanation of the
                violation. Getting confrontational will not help your case and
                could lead to additional charges.
              </li>
              <li>
                <strong>Know your rights.</strong> You have the right to know
                the specific violation you committed, the right to see the
                enforcer&apos;s identification, and the right to contest the
                violation through the proper channels. Enforcers should not
                demand immediate cash payment — all fines must be paid through
                official channels.
              </li>
              <li>
                <strong>Never offer bribes.</strong> Offering a bribe to a
                traffic enforcer is a criminal offense under Philippine law.
                Both the one offering and the one accepting a bribe can face
                criminal charges. Always insist on the proper citation process.
              </li>
              <li>
                <strong>Document the encounter.</strong> If possible, note the
                enforcer&apos;s name, badge number, and the details of the
                apprehension. If you have a dashcam, the footage can serve as
                evidence if you decide to contest the violation.
              </li>
              <li>
                <strong>Settle promptly.</strong> Pay your fines as soon as
                possible to avoid complications with license and registration
                renewals. The longer you wait, the more likely the violation
                will create problems down the line.
              </li>
              <li>
                <strong>Keep all receipts.</strong> After settling a violation,
                keep the official receipt and any clearance documents
                indefinitely. These serve as proof of settlement in case the
                violation erroneously reappears in the system.
              </li>
              <li>
                <strong>Consider contesting unjust violations.</strong> If you
                genuinely believe a violation was issued in error, exercise your
                right to contest it. File a formal dispute at the LTO and
                present your evidence. The process takes time but can clear
                your record of unjust violations.
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
                href="/penalty-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Traffic Penalty Calculator →
              </Link>
              <Link
                href="/lto-license-tracker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO License Status Tracker →
              </Link>
              <Link
                href="/lto-plate-tracker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Plate Number Tracker →
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
