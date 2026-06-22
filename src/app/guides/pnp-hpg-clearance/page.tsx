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

const guide = getGuideBySlug("pnp-hpg-clearance")!;

export const metadata: Metadata = {
  title: `PNP-HPG Motor Vehicle Clearance ${CURRENT_YEAR_STR} — Requirements & Process`,
  description:
    "Complete guide to getting a PNP-HPG Motor Vehicle Clearance in the Philippines. Learn the requirements, step-by-step process, fees, processing time, and where to get your HPG clearance for vehicle transfer.",
  keywords: [
    "PNP-HPG clearance",
    "PNP-HPG motor vehicle clearance",
    "HPG clearance requirements",
    "Highway Patrol Group clearance",
    "PNP HPG clearance fee",
    "vehicle clearance Philippines",
    "HPG clearance for transfer of ownership",
    "PNP-HPG clearance process",
    "HPG clearance where to get",
    "PNP HPG vehicle inspection",
    `motor vehicle clearance ${CURRENT_YEAR_STR}`,
    "HPG clearance stolen vehicle check",
  ],
  openGraph: {
    title: `PNP-HPG Motor Vehicle Clearance ${CURRENT_YEAR_STR} — Requirements & Process`,
    description:
      "Everything you need to know about obtaining a PNP-HPG Motor Vehicle Clearance: requirements, process, fees, and HPG office locations.",
    url: "https://ltotrackeronline.ph/guides/pnp-hpg-clearance",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `PNP-HPG Motor Vehicle Clearance ${CURRENT_YEAR_STR} — Requirements & Process`,
    description:
      "Complete guide to PNP-HPG Motor Vehicle Clearance: requirements, fees, process, and where to get it.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/pnp-hpg-clearance",
  },
};

const headings = [
  { id: "what-is-hpg-clearance", text: "What Is a PNP-HPG Motor Vehicle Clearance?", level: 2 },
  { id: "why-needed", text: "Why Is HPG Clearance Needed?", level: 2 },
  { id: "when-required", text: "When Is HPG Clearance Required?", level: 2 },
  { id: "requirements", text: "Document Requirements", level: 2 },
  { id: "step-by-step", text: "Step-by-Step Process", level: 2 },
  { id: "fees", text: `HPG Clearance Fees ${CURRENT_YEAR_STR}`, level: 2 },
  { id: "processing-time", text: "Processing Time", level: 2 },
  { id: "hpg-offices", text: "Where to Get HPG Clearance", level: 2 },
  { id: "alarm-hold-orders", text: "Alarm and Hold Orders Explained", level: 2 },
  { id: "online-verification", text: "Online Verification Options", level: 2 },
  { id: "tips", text: "Tips for a Smooth HPG Clearance Process", level: 2 },
  { id: "common-problems", text: "Common Problems and Solutions", level: 2 },
];

const faqs = [
  {
    question: "What is a PNP-HPG Motor Vehicle Clearance?",
    answer:
      "A PNP-HPG Motor Vehicle Clearance is an official document issued by the Philippine National Police - Highway Patrol Group (PNP-HPG) certifying that a motor vehicle is not listed as stolen, carnapped, or involved in any pending criminal case. It also confirms that the vehicle has no alarm or hold orders. This clearance is a mandatory requirement for transferring vehicle ownership at the LTO and for certain other LTO transactions.",
  },
  {
    question: "How much does a PNP-HPG clearance cost?",
    answer:
      "The PNP-HPG Motor Vehicle Clearance fee is approximately PHP 150 for regular processing. This fee covers the records check and the issuance of the clearance certificate. There is no express or rush processing option — all clearances are processed on a first-come, first-served basis. Additional costs may include photocopying fees (PHP 5-10 per page) if you did not bring photocopies of your documents.",
  },
  {
    question: "How long does it take to get a PNP-HPG clearance?",
    answer:
      "The PNP-HPG clearance is typically issued within 1 to 3 hours if all documents are complete and the vehicle has no issues in the database. During peak periods (end of month or quarter), processing may take longer due to higher volumes. The physical inspection of the vehicle itself takes about 15-20 minutes, but waiting times for your turn can add significant time to the total process.",
  },
  {
    question: "Do I need to bring the actual vehicle for HPG clearance?",
    answer:
      "Yes, you must bring the actual vehicle to the PNP-HPG office for physical inspection. The HPG officer will physically verify the engine number, chassis number (frame number), and other identifying features of the vehicle against the information in the Certificate of Registration (CR). This physical inspection is essential to confirm that the vehicle matches its registration documents and is not stolen or modified.",
  },
  {
    question: "Can someone else process the HPG clearance on my behalf?",
    answer:
      "Yes, an authorized representative can process the HPG clearance on behalf of the vehicle owner. The representative must bring a notarized Special Power of Attorney (SPA) from the registered owner, the original CR and OR, and their own valid government-issued ID, in addition to the registered owner's ID photocopy. The vehicle itself must still be physically present at the HPG office for inspection.",
  },
  {
    question: "What happens if the vehicle has an alarm or hold order?",
    answer:
      "If the PNP-HPG database shows an alarm or hold order on the vehicle, the clearance will not be issued. An alarm may indicate that the vehicle has been reported stolen, is involved in a criminal case, or has a court-ordered restriction. The HPG office will advise you on the nature of the alarm and the steps needed to resolve it. In some cases, the issue may be a clerical error that can be corrected at the HPG office. In more serious cases, such as a stolen vehicle report, you may need to resolve the issue through legal channels.",
  },
  {
    question: "How long is the PNP-HPG clearance valid?",
    answer:
      "The PNP-HPG Motor Vehicle Clearance is typically valid for 60 days from the date of issuance. You must complete the LTO transfer of ownership or other transaction within this validity period. If the clearance expires before you complete the LTO transaction, you will need to obtain a new clearance, which means going through the entire process again and paying the fee once more.",
  },
  {
    question: "Is HPG clearance required for registration renewal?",
    answer:
      "No, PNP-HPG Motor Vehicle Clearance is not required for routine annual registration renewal. It is primarily required for transfer of ownership transactions, where the vehicle is changing from one registered owner to another. However, the LTO may require HPG clearance in certain special circumstances, such as when there are discrepancies in the vehicle records or when the vehicle is being re-registered after a long period of non-registration.",
  },
];

export default function PnpHpgClearance() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "PNP-HPG Clearance" },
        ]}
      />

      <ArticleSchema
        headline={`PNP-HPG Motor Vehicle Clearance ${CURRENT_YEAR_STR} — Requirements & Process`}
        description="Complete guide to getting a PNP-HPG Motor Vehicle Clearance in the Philippines. Requirements, step-by-step process, fees, and HPG office locations."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/pnp-hpg-clearance"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "PNP-HPG Clearance",
            url: "https://ltotrackeronline.ph/guides/pnp-hpg-clearance",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            PNP-HPG Motor Vehicle Clearance {CURRENT_YEAR_STR} — Requirements & Process
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>16 min read</span>
          </div>

          <section>
            <h2
              id="what-is-hpg-clearance"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What Is a PNP-HPG Motor Vehicle Clearance?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Planning to buy or sell a used vehicle in the Philippines? One of
              the most critical steps in the process is obtaining a PNP-HPG
              Motor Vehicle Clearance. Here at{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{", "}
              we help thousands of vehicle owners navigate LTO transactions
              every day, and the HPG clearance is one of the most commonly
              asked-about requirements. This guide covers everything you need to
              know about what it is, why you need it, and exactly how to get one.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PNP-HPG Motor Vehicle Clearance is an official certificate
              issued by the{" "}
              <strong>
                Philippine National Police — Highway Patrol Group (PNP-HPG)
              </strong>
              . This clearance certifies that a specific motor vehicle is
              &quot;clean&quot; — meaning it is not recorded as stolen,
              carnapped, or involved in any pending criminal case in the
              PNP-HPG&apos;s national database. It also confirms that the
              vehicle has no alarm orders, hold orders, or other restrictions
              that would prevent it from being legally transferred to a new
              owner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of the HPG clearance as a background check for your vehicle.
              Just as employers run background checks on job applicants, the
              PNP-HPG checks a vehicle&apos;s history to ensure it is not
              involved in any criminal activity. This protects both the buyer
              (who does not want to unknowingly purchase a stolen vehicle) and
              the legitimate owner (whose stolen vehicle may be recovered
              through the clearance process).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The HPG clearance process involves two components: a{" "}
              <strong>physical inspection</strong> of the vehicle (to verify
              engine and chassis numbers) and a{" "}
              <strong>database records check</strong> (to search for any alarms
              or criminal records associated with the vehicle). Both must be
              clear for the clearance to be issued.
            </p>
          </section>

          <section>
            <h2
              id="why-needed"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Why Is HPG Clearance Needed?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Philippines has historically faced a significant problem with
              carnapping (motor vehicle theft). To combat this, the government
              requires a PNP-HPG clearance as a safeguard in vehicle ownership
              transfers. The clearance serves several important purposes:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Prevents the sale of stolen vehicles.</strong> By
                checking the vehicle against the national database of stolen
                and carnapped vehicles, the HPG clearance ensures that stolen
                vehicles cannot be easily transferred to unsuspecting buyers
                through the LTO system.
              </li>
              <li>
                <strong>Verifies vehicle identity.</strong> The physical
                inspection confirms that the engine number and chassis number
                on the actual vehicle match the numbers recorded in the
                Certificate of Registration (CR). This prevents vehicles with
                tampered or re-stamped identification numbers from being
                transferred.
              </li>
              <li>
                <strong>Protects buyers from legal liability.</strong> If you
                purchase a vehicle that turns out to be stolen, you could face
                criminal charges or lose the vehicle when it is recovered by
                authorities. The HPG clearance significantly reduces this risk.
              </li>
              <li>
                <strong>Supports law enforcement.</strong> The clearance process
                helps the PNP-HPG track vehicle ownership changes and maintain
                an updated database. If a stolen vehicle is presented for
                clearance, the HPG can immediately flag it and potentially
                recover the vehicle and apprehend suspects.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              For these reasons, the LTO strictly requires a PNP-HPG clearance
              before processing any{" "}
              <Link
                href="/guides/transfer-of-vehicle-ownership"
                className="text-blue-600 hover:underline"
              >
                transfer of vehicle ownership
              </Link>
              . Attempting to transfer ownership without an HPG clearance will
              result in the LTO rejecting your application.
            </p>
          </section>

          <section>
            <h2
              id="when-required"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              When Is HPG Clearance Required?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A PNP-HPG Motor Vehicle Clearance is required for the following
              transactions and situations:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Transfer of ownership (sale, donation, or
                inheritance)</strong> — The most common scenario. Whether you
                are buying a used car from a private seller, receiving a vehicle
                as a gift, or inheriting a vehicle, you need an HPG clearance.
              </li>
              <li>
                <strong>Mortgage or lien registration</strong> — When a vehicle
                is being used as collateral for a loan (chattel mortgage), the
                lending institution may require an HPG clearance as part of
                their due diligence.
              </li>
              <li>
                <strong>Export of a vehicle</strong> — If you are shipping a
                vehicle out of the Philippines, an HPG clearance is typically
                required to prove the vehicle is not stolen.
              </li>
              <li>
                <strong>Insurance claims</strong> — Some insurance companies
                require an HPG clearance as part of the claims process,
                particularly for theft or total loss claims.
              </li>
              <li>
                <strong>Court-ordered verification</strong> — In legal
                proceedings involving vehicles (such as property disputes or
                criminal cases), the court may require an HPG clearance.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that an HPG clearance is{" "}
              <strong>not required for routine annual registration
              renewal</strong>. It is also not required for new vehicles being
              registered for the first time, as they come with manufacturer
              documentation that serves a similar purpose.
            </p>
          </section>

          <section>
            <h2
              id="requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Document Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prepare the following documents before visiting a PNP-HPG office:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Original Certificate of Registration (CR)</strong> — The
                current CR showing the registered owner of the vehicle. Bring
                both the original and a photocopy.
              </li>
              <li>
                <strong>Latest Official Receipt (OR)</strong> — Proof that the
                vehicle&apos;s registration is current or was most recently
                renewed. Bring both the original and a photocopy.
              </li>
              <li>
                <strong>Valid government-issued ID of the registered
                owner</strong> — Original and photocopy. Accepted IDs include
                driver&apos;s license, passport, UMID, PhilID, SSS ID, and
                other government-issued IDs with photo.
              </li>
              <li>
                <strong>The vehicle itself</strong> — The vehicle must be
                physically present at the PNP-HPG office for the engine and
                chassis number inspection.
              </li>
              <li>
                <strong>Duly accomplished PNP-HPG application form</strong> —
                Available at the HPG office. Some offices also provide
                downloadable forms on their regional websites.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>If a representative is processing the clearance:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                Notarized Special Power of Attorney (SPA) from the registered
                owner, specifically authorizing the representative to obtain the
                HPG clearance
              </li>
              <li>
                Valid government-issued ID of the representative (original and
                photocopy)
              </li>
              <li>
                Photocopy of the registered owner&apos;s valid ID
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="step-by-step"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the step-by-step process for obtaining a PNP-HPG Motor
              Vehicle Clearance:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Drive the vehicle to the PNP-HPG office.</strong> Go to
                the nearest PNP-HPG regional, provincial, or district office.
                Park the vehicle in the designated inspection area.
              </li>
              <li>
                <strong>Fill out the application form.</strong> Obtain an
                application form at the HPG office and fill it out with all
                required information about the vehicle and the owner.
              </li>
              <li>
                <strong>Submit documents at the receiving window.</strong>{" "}
                Present your completed application form along with the CR, OR,
                valid ID, and photocopies. The receiving officer will review
                your documents for completeness.
              </li>
              <li>
                <strong>Pay the clearance fee.</strong> Proceed to the cashier
                and pay the HPG clearance fee of approximately PHP 150. Keep
                the official receipt as proof of payment.
              </li>
              <li>
                <strong>Vehicle physical inspection.</strong> An HPG officer
                will inspect the vehicle, focusing on verifying the engine
                number and chassis (frame) number. The officer will compare the
                numbers physically stamped on the vehicle against the
                information in your CR. The officer may also check for signs
                of tampering, re-stamping, or welding on the engine and chassis
                number plates.
              </li>
              <li>
                <strong>Database records check.</strong> While the physical
                inspection is being conducted, another officer runs the
                vehicle&apos;s details through the PNP-HPG national database.
                This check searches for any alarms, hold orders, stolen vehicle
                reports, or criminal cases associated with the vehicle.
              </li>
              <li>
                <strong>Wait for results.</strong> After both the physical
                inspection and the database check are completed, wait for the
                results to be processed and the clearance document to be
                prepared.
              </li>
              <li>
                <strong>Receive the HPG clearance certificate.</strong> If the
                vehicle passes both the physical inspection and the database
                check, the PNP-HPG will issue the Motor Vehicle Clearance
                certificate. This document is valid for 60 days from the date
                of issuance.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="fees"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              HPG Clearance Fees {CURRENT_YEAR_STR}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PNP-HPG clearance fee is relatively affordable compared to
              other vehicle-related government fees. Here is the current fee
              structure:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Fee Component
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Amount (PHP)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Motor Vehicle Clearance Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 150
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Application Form
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Free (included)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Photocopying (if needed at HPG office)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 5 - 10 per page
                    </td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Typical Total
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 150 - 180
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The HPG clearance fee is standardized and should be the same
              across all PNP-HPG offices nationwide. Be cautious of any office
              or individual that charges significantly more than the official
              fee, as this could indicate an unauthorized collection. Always
              request an official receipt for any payment made. For a full
              overview of all fees involved in vehicle transfer, see our{" "}
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
              id="processing-time"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Processing Time
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under normal circumstances, the PNP-HPG Motor Vehicle Clearance
              can be obtained within{" "}
              <strong>1 to 3 hours</strong> from the time you arrive at the HPG
              office. The actual processing time depends on several factors:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Number of applicants ahead of you.</strong> HPG offices
                process clearances on a first-come, first-served basis. During
                peak periods, there may be dozens of vehicles ahead of you.
              </li>
              <li>
                <strong>Availability of inspecting officers.</strong> Some
                smaller HPG offices have limited staff, which can slow down
                processing.
              </li>
              <li>
                <strong>Database connectivity.</strong> The records check
                requires access to the PNP-HPG national database. If the system
                is slow or experiencing technical issues, processing will be
                delayed.
              </li>
              <li>
                <strong>Vehicle issues.</strong> If the engine or chassis number
                is difficult to read (due to corrosion, paint, or modification),
                the inspection may take longer as the officer carefully verifies
                the numbers.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To minimize your waiting time, arrive at the HPG office early in
              the morning (before 8:00 AM if possible) on a weekday. Avoid
              going at the end of the month or during the last few days before
              a holiday, as these tend to be the busiest times. Mid-month
              Tuesdays and Wednesdays are generally the least busy.
            </p>
          </section>

          <section>
            <h2
              id="hpg-offices"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Where to Get HPG Clearance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can obtain a PNP-HPG Motor Vehicle Clearance at any PNP-HPG
              office in the Philippines. The HPG has offices at the national,
              regional, provincial, and district levels. Here are some key HPG
              office locations:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>PNP-HPG National Headquarters:</strong> Camp Crame,
              Quezon City, Metro Manila. This is the main HPG office and
              typically processes a high volume of clearances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Regional HPG offices</strong> are located in major cities
              across the country, including Baguio, Angeles City (Pampanga),
              Calamba (Laguna), Naga, Legazpi, Iloilo, Cebu, Tacloban, Cagayan
              de Oro, Davao, Zamboanga, and General Santos. Each region has at
              least one HPG office that processes vehicle clearances.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Provincial and district HPG offices</strong> are located
              in smaller cities and municipalities. These offices handle lower
              volumes and may have shorter waiting times than the regional
              offices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can process the HPG clearance at any HPG office regardless of
              where the vehicle is registered. For example, if the vehicle is
              registered in Cebu but you are currently in Manila, you can obtain
              the clearance at the HPG office in Manila. For more information
              about PNP-HPG offices, you can visit the official{" "}
              <a
                href="https://hpg.pnp.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                PNP-HPG website
              </a>{" "}
              or the{" "}
              <a
                href="https://pnp.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                PNP website
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              id="alarm-hold-orders"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Alarm and Hold Orders Explained
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When the PNP-HPG runs a vehicle through their database, they
              check for two types of restrictions: <strong>alarm
              orders</strong> and <strong>hold orders</strong>. Understanding
              these is important, especially if you are buying a used vehicle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Alarm Order:</strong> An alarm order is a notification
              placed on a vehicle indicating that it has been reported stolen
              or carnapped. When a vehicle with an alarm order is presented for
              HPG clearance, the system will immediately flag it. The HPG office
              will then coordinate with the unit that filed the alarm to verify
              the status. If the alarm is active, the vehicle will be impounded
              and the person presenting it may be detained for investigation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Hold Order:</strong> A hold order is a restriction placed
              on a vehicle by a court, a government agency, or a lending
              institution. Common reasons for hold orders include unpaid loans
              (chattel mortgage), ongoing court cases involving the vehicle,
              customs issues for imported vehicles, or administrative holds by
              the LTO. A hold order prevents the vehicle from being transferred
              until the underlying issue is resolved.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>How to check before buying:</strong> If you are
              considering purchasing a used vehicle, it is highly recommended
              to request the seller to obtain an HPG clearance{" "}
              <em>before</em> you pay for the vehicle. This protects you from
              unknowingly purchasing a vehicle with legal issues. You can also
              use our{" "}
              <Link
                href="/guides/how-to-check-vehicle-encumbrance"
                className="text-blue-600 hover:underline"
              >
                vehicle encumbrance checker guide
              </Link>{" "}
              to verify if the vehicle has any outstanding liens or mortgages.
            </p>
          </section>

          <section>
            <h2
              id="online-verification"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Online Verification Options
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As of {CURRENT_YEAR_STR}, the PNP-HPG has been working on digitizing some of
              its services, but the full HPG clearance process still requires
              an in-person visit with the physical vehicle. However, there are
              some online options available for preliminary checks:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>LTO LTMS Portal.</strong> The LTO&apos;s online portal
                at{" "}
                <a
                  href="https://portal.lto.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                >
                  portal.lto.gov.ph
                </a>{" "}
                allows you to check a vehicle&apos;s registration status and
                some basic records. While this does not replace the HPG
                clearance, it can give you an initial view of the vehicle&apos;s
                registration history.
              </li>
              <li>
                <strong>MV File Number check.</strong> You can verify a
                vehicle&apos;s MV File Number and registration details using our{" "}
                <Link
                  href="/mv-file-checker"
                  className="text-blue-600 hover:underline"
                >
                  MV File Number Checker
                </Link>{" "}
                tool for a quick preliminary verification.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Remember that online checks are supplementary and do not replace
              the official PNP-HPG clearance. Only the physical HPG clearance
              certificate is accepted by the LTO for transfer of ownership
              processing.
            </p>
          </section>

          <section>
            <h2
              id="tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips for a Smooth HPG Clearance Process
            </h2>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Clean your engine bay before going.</strong> The HPG
                officer needs to read the engine number, which is usually
                stamped on the engine block. A dirty, greasy, or corroded
                engine bay can make the number difficult to read, slowing down
                the inspection. Clean the area around the engine number before
                your visit.
              </li>
              <li>
                <strong>Know where your chassis number is located.</strong> The
                chassis (frame) number is typically found on the vehicle&apos;s
                frame, often visible through the windshield on the
                driver&apos;s side dashboard or on the door jamb. Knowing its
                location speeds up the inspection.
              </li>
              <li>
                <strong>Bring complete photocopies.</strong> Have photocopies of
                your CR, OR, and ID ready before arriving at the HPG office.
                While most offices have photocopying services nearby, bringing
                your own copies saves time and a few pesos.
              </li>
              <li>
                <strong>Go early on a weekday.</strong> Arrive before 8:00 AM to
                avoid long queues. Mid-week (Tuesday to Thursday) is generally
                less busy than Mondays and Fridays.
              </li>
              <li>
                <strong>Verify CR details match the physical vehicle.</strong>{" "}
                Before going to the HPG, compare the engine number and chassis
                number on your CR against the actual numbers on the vehicle. If
                there are discrepancies (due to an engine replacement that was
                not recorded, for example), resolve them with the LTO first.
              </li>
              <li>
                <strong>Process the HPG clearance before paying for the
                vehicle.</strong> If you are buying a used vehicle, insist on
                getting the HPG clearance before finalizing the payment. This
                protects you from purchasing a vehicle with legal issues.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="common-problems"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Common Problems and Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Engine number is unreadable.</strong> Over time, engine
              numbers can become corroded, covered in paint, or worn down. If
              the HPG officer cannot read the engine number, they may request
              a chemical or acid etching to make the number visible. In extreme
              cases, a macro-etching examination may be needed, which involves
              a specialized process conducted by PNP forensics. This can add
              significant time and cost to the process.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Engine number mismatch with CR.</strong> If the engine
              number on the physical vehicle does not match the one recorded in
              the CR, the HPG cannot issue a clearance until the discrepancy is
              resolved. This commonly happens when a vehicle has undergone an
              engine replacement that was not properly documented with the LTO.
              The owner must first process a change of engine at the LTO,
              providing proof of the engine purchase and documentation, before
              the HPG clearance can be obtained.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>False or outdated alarm orders.</strong> In some cases,
              a vehicle may have an alarm order that is no longer valid — for
              example, if a vehicle was reported stolen but later recovered,
              and the alarm was never officially lifted. If you believe an alarm
              on your vehicle is erroneous, coordinate with the HPG office and
              the unit that originally filed the alarm to request a
              verification and lifting of the alarm.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Chattel mortgage not canceled.</strong> If the vehicle has
              a recorded chattel mortgage (loan) that has been fully paid but
              not officially canceled in the LTO records, it may show up as a
              hold order during the HPG check. Coordinate with the lending
              institution to obtain a mortgage cancellation certificate and
              have it recorded at the LTO before attempting the HPG clearance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the complete transfer of ownership process that follows your
              HPG clearance, read our{" "}
              <Link
                href="/guides/lto-transfer-ownership"
                className="text-blue-600 hover:underline"
              >
                LTO transfer of ownership guide
              </Link>
              . You will also need a{" "}
              <Link
                href="/guides/pmvic-inspection-guide"
                className="text-blue-600 hover:underline"
              >
                PMVIC inspection
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/ctpl-insurance-guide"
                className="text-blue-600 hover:underline"
              >
                CTPL insurance
              </Link>{" "}
              as part of the transfer requirements.
            </p>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/mv-file-checker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                MV File Number Checker →
              </Link>
              <Link
                href="/lto-plate-tracker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Plate Number Tracker →
              </Link>
              <Link
                href="/penalty-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Penalty Calculator →
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
