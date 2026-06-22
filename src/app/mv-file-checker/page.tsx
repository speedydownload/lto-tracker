import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import {
  WebApplicationSchema,
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { mvFileCheckerFAQs } from "@/data/faqs";
import Image from "next/image";
import TrackerClient from "./TrackerClient";

export const metadata: Metadata = {
  title:
    "MV File Number Checker — Check Motor Vehicle File Status",
  description:
    "Check your motor vehicle file number status online. Verify MV file details, check for encumbrances or alarms, and confirm your vehicle registration status with the LTO.",
  keywords: [
    "MV file checker",
    "motor vehicle file",
    "MV file number",
    "LTO vehicle status",
    "check MV file",
    "vehicle encumbrance",
    "vehicle registration status",
    "LTO Philippines",
  ],
  openGraph: {
    title:
      "MV File Number Checker — Check Motor Vehicle File Status",
    description:
      "Check your motor vehicle file number status online. Verify MV file details and confirm registration status.",
    url: "https://ltotrackeronline.ph/mv-file-checker",
    type: "website",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/MV-File-Checker-Tool-Banner.webp",
        width: 1200,
        height: 630,
        alt: "MV File Number Checker — Check motor vehicle file status online",
      },
    ],
  },
};

export default function MVFileCheckerPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "MV File Number Checker" },
        ]}
      />
      <WebApplicationSchema
        name="MV File Number Checker"
        description="Check your motor vehicle file number status online. Verify MV file details, check for encumbrances or alarms, and confirm your vehicle registration status."
        url="https://ltotrackeronline.ph/mv-file-checker"
      />
      <FAQPageSchema faqs={mvFileCheckerFAQs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://ltotrackeronline.ph" },
          {
            label: "MV File Number Checker",
            href: "https://ltotrackeronline.ph/mv-file-checker",
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        MV File Number Checker — Check Motor Vehicle File Status Online
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Verify the status of any motor vehicle registered with the LTO using
        our free <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}MV File Number Checker. Enter your 15-digit MV file number to
        instantly check your vehicle&apos;s registration status, verify
        ownership details, and determine whether there are any encumbrances or
        alarms on the vehicle. This tool is essential for vehicle buyers,
        sellers, and owners who want to ensure their vehicle records are clean
        and up to date.
      </p>

      <TrackerClient />

      {/* Tool Banner */}
      <div className="my-10">
        <Image
          src="/img/MV-File-Checker-Tool-Banner.webp"
          alt="MV File Number Checker — Verify motor vehicle registration status, encumbrances, and ownership details online for free"
          width={1200}
          height={630}
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* What Is an MV File Number */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Is an MV File Number and Why Is It Important?
        </h2>
        <p className="text-gray-700 mb-4">
          The Motor Vehicle (MV) File Number is a unique 15-digit identifier
          assigned by the Land Transportation Office (LTO) to every motor
          vehicle registered in the Philippines. Think of it as your
          vehicle&apos;s &ldquo;social security number&rdquo; &mdash; it
          permanently identifies your vehicle in the LTO&apos;s central
          database and is used for all official transactions related to that
          vehicle throughout its entire lifespan. The MV file number is
          assigned at the time of initial registration and remains the same
          even when ownership changes, the vehicle is re-registered, or the
          plate number is replaced.
        </p>
        <p className="text-gray-700 mb-4">
          The MV file number is printed on your Certificate of Registration
          (CR) and is also recorded in the Official Receipt (OR) issued during
          registration. It is essential for various transactions including
          annual registration renewal, transfer of ownership, mortgage or
          encumbrance recording, replacement of lost documents, and verification
          of vehicle identity. Without your MV file number, many LTO
          transactions cannot be processed, making it one of the most important
          pieces of information associated with your vehicle.
        </p>
        <p className="text-gray-700 mb-4">
          The 15-digit format of the MV file number contains encoded
          information about the vehicle, including the region code where the
          vehicle was first registered, the year of registration, and a unique
          sequential number. This structured format helps the LTO organize and
          manage millions of vehicle records efficiently across all its
          branches nationwide.
        </p>
      </section>

      {/* How to Find Your MV File Number */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Find Your MV File Number
        </h2>
        <p className="text-gray-700 mb-4">
          Your MV file number can be found in several places. If you cannot
          locate it, here are the most common sources:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          1. Certificate of Registration (CR)
        </h3>
        <p className="text-gray-700 mb-4">
          The most reliable source of your MV file number is your vehicle&apos;s
          Certificate of Registration, commonly referred to as the CR. The MV
          file number is prominently printed on the front of the CR, typically
          near the top of the document. The CR is issued by the LTO each time
          you register or renew the registration of your vehicle. It is a
          legal requirement to carry your current CR in the vehicle at all
          times while it is being operated on public roads.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          2. Official Receipt (OR)
        </h3>
        <p className="text-gray-700 mb-4">
          The Official Receipt issued during registration also contains your
          MV file number. The OR serves as proof that you have paid the
          required registration fees and is typically presented together with
          the CR when requested by traffic enforcers or law enforcement
          officers. The combination of the OR and CR (commonly referred to as
          &ldquo;OR/CR&rdquo;) is the most important set of documents for any
          registered vehicle in the Philippines.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          3. LTMS Portal
        </h3>
        <p className="text-gray-700 mb-4">
          If you have an account on the LTO&apos;s Land Transportation
          Management System (<a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS portal</a>), you can find your MV file number by
          logging into your account and viewing your registered vehicles. The
          LTMS portal displays all vehicles associated with your account,
          including their MV file numbers, plate numbers, and registration
          status.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          4. Previous Insurance or Loan Documents
        </h3>
        <p className="text-gray-700 mb-4">
          If you have Compulsory Third Party Liability (CTPL) insurance
          documents or vehicle loan/financing documents, these often include
          your MV file number. Auto insurance companies and financing
          institutions use the MV file number to verify the vehicle&apos;s
          registration status and ownership before issuing policies or
          approving loans.
        </p>
      </section>

      {/* What Information Does the MV File Contain */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Information Is Stored in Your MV File?
        </h2>
        <p className="text-gray-700 mb-4">
          Your MV file at the LTO is a comprehensive record that contains all
          the essential details about your vehicle. When you use our MV File
          Number Checker, you can verify the following information:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Vehicle identification:</strong> Make, model, year of
            manufacture, body type, color, engine number, and chassis number
            (Vehicle Identification Number or VIN).
          </li>
          <li>
            <strong>Registration status:</strong> Whether the vehicle&apos;s
            registration is current, expired, suspended, or revoked.
          </li>
          <li>
            <strong>Ownership details:</strong> The name and address of the
            registered owner.
          </li>
          <li>
            <strong>Plate number:</strong> The license plate number currently
            assigned to the vehicle.
          </li>
          <li>
            <strong>Encumbrances:</strong> Any mortgages, liens, or chattel
            mortgages recorded against the vehicle. This is critical when buying
            a used vehicle to ensure it is free from any financial claims.
          </li>
          <li>
            <strong>Alarms:</strong> Any alerts or flags placed on the vehicle,
            such as stolen vehicle reports, carnapping alerts, or hold orders
            from law enforcement agencies or courts.
          </li>
          <li>
            <strong>Transaction history:</strong> A record of all registrations,
            transfers, and other transactions processed for the vehicle.
          </li>
        </ul>
      </section>

      {/* Why Check MV File Before Buying */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why You Should Check the MV File Before Buying a Used Vehicle
        </h2>
        <p className="text-gray-700 mb-4">
          Purchasing a used vehicle is one of the most significant financial
          transactions that many Filipinos undertake. Unfortunately, the used
          vehicle market in the Philippines has its share of fraudulent sellers
          who attempt to sell vehicles with problematic records. Checking the
          MV file before completing a purchase is one of the most important
          steps you can take to protect yourself from fraud and financial loss.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Check for Stolen Vehicle Alerts
        </h3>
        <p className="text-gray-700 mb-4">
          One of the most critical checks is verifying whether the vehicle has
          been reported as stolen or carnapped. The LTO maintains a database of
          stolen vehicles, and any vehicle with an active carnapping alert will
          be flagged in the MV file. If you unknowingly purchase a stolen
          vehicle, you risk having it confiscated by law enforcement and losing
          your entire investment. Our MV File Number Checker can help you
          identify any alarms or flags associated with the vehicle before you
          hand over your money.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Verify Ownership and Encumbrances
        </h3>
        <p className="text-gray-700 mb-4">
          Checking the MV file allows you to verify that the person selling the
          vehicle is indeed the registered owner or has proper authorization to
          sell it. It also reveals any encumbrances such as chattel mortgages
          from banks or financing companies. A vehicle with an active
          encumbrance cannot be legally transferred to a new owner until the
          encumbrance is cancelled, which typically requires the loan to be
          fully paid and the financing company to issue a cancellation of
          mortgage. Buying an encumbered vehicle without cancelling the mortgage
          first can lead to legal complications and potential repossession by
          the financing company.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Confirm Registration Status
        </h3>
        <p className="text-gray-700 mb-4">
          The MV file check also confirms whether the vehicle&apos;s
          registration is current. A vehicle with expired registration may
          indicate that the owner has neglected maintenance or is trying to
          sell the vehicle to avoid paying accumulated registration penalties.
          Vehicles with long-lapsed registrations may require additional fees
          and clearances to bring them back into compliance, which can add
          significant cost to your purchase.
        </p>
      </section>

      {/* MV File for Transfer of Ownership */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          MV File and Transfer of Vehicle Ownership
        </h2>
        <p className="text-gray-700 mb-4">
          When a vehicle is sold or transferred to a new owner, the MV file
          must be updated at the LTO to reflect the change in ownership. The
          transfer of ownership process involves several steps and requires
          both the seller and buyer to submit specific documents:
        </p>
        <ol className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Deed of Sale:</strong> A notarized deed of absolute sale
            signed by both the seller and buyer, specifying the vehicle details
            and the sale price.
          </li>
          <li>
            <strong>Insurance:</strong> New Compulsory Third Party Liability
            (CTPL) insurance under the buyer&apos;s name.
          </li>
          <li>
            <strong>Original OR/CR:</strong> The seller must surrender the
            original Official Receipt and Certificate of Registration.
          </li>
          <li>
            <strong>PNP-HPG Clearance:</strong> A clearance from the Philippine
            National Police Highway Patrol Group certifying that the vehicle is
            not stolen and has no pending cases.
          </li>
          <li>
            <strong>Emission Test:</strong> A passing emission test result from
            an accredited testing center.
          </li>
          <li>
            <strong>Motor Vehicle Inspection:</strong> A vehicle inspection
            report from an LTO-accredited private motor vehicle inspection
            center (PMVIC).
          </li>
          <li>
            <strong>Payment of transfer fees:</strong> Including the transfer
            fee, registration fee, and any applicable taxes.
          </li>
        </ol>
        <p className="text-gray-700 mb-4">
          The transfer of ownership process is typically handled at the LTO
          district office that has jurisdiction over the area where the vehicle
          is registered. Processing time varies but usually takes one to three
          weeks. Once completed, the new owner will receive an updated
          Certificate of Registration reflecting their name, while the MV file
          number remains the same.
        </p>
      </section>

      {/* Common MV File Issues */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common MV File Issues and How to Resolve Them
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          MV File Not Found
        </h3>
        <p className="text-gray-700 mb-4">
          If our checker returns a &ldquo;not found&rdquo; result, it could
          mean that the MV file number you entered is incorrect, the vehicle
          has been deregistered, or the records have not been updated in the
          digital system. Older vehicles that were registered before the
          LTO&apos;s computerization may have records that have not yet been
          fully migrated to the digital database. In such cases, you should
          visit the LTO branch where the vehicle was originally registered to
          request a manual records search.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Encumbrance Still Showing After Loan Payoff
        </h3>
        <p className="text-gray-700 mb-4">
          A common issue is when a vehicle loan has been fully paid but the
          encumbrance still appears in the MV file. This happens because the
          cancellation of mortgage must be specifically filed with the LTO by
          the financing company or the vehicle owner. To resolve this, obtain a
          cancellation of chattel mortgage document from your financing company
          and file it with the LTO along with the required fees. The LTO will
          then update the MV file to reflect that the vehicle is free from
          encumbrances.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Discrepancies in Vehicle Information
        </h3>
        <p className="text-gray-700 mb-4">
          Occasionally, the MV file may contain errors in the vehicle details,
          such as incorrect engine number, chassis number, or color. These
          discrepancies can cause problems during registration renewal or
          transfer of ownership. To correct errors in the MV file, you will
          need to visit the LTO with supporting documents such as the
          vehicle&apos;s sales invoice, import documents, or a certification
          from the manufacturer or dealer confirming the correct information.
          The LTO will review the documents and update the MV file accordingly.
        </p>
      </section>

      <FAQSection faqs={mvFileCheckerFAQs} />

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
              Track plates, licenses, and MV files in one unified tool.
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
              Check if your license plates are ready for release.
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
              Track your driver&apos;s license application or renewal status.
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
              Calculate vehicle registration renewal fees before visiting the
              LTO.
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
              Look up fines for unregistered vehicles and other violations.
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
              Check the MMDA number coding schedule for your vehicle today.
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
              href="/guides/lto-vehicle-registration"
              className="text-blue-600 hover:underline"
            >
              LTO Vehicle Registration Guide: Requirements, Fees, and Process
            </Link>
          </li>
          <li>
            <Link
              href="/guides/transfer-of-vehicle-ownership"
              className="text-blue-600 hover:underline"
            >
              How to Transfer Vehicle Ownership at the LTO: Complete Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-check-vehicle-encumbrance"
              className="text-blue-600 hover:underline"
            >
              How to Check for Vehicle Encumbrances Before Buying a Used Car
            </Link>
          </li>
          <li>
            <Link
              href="/guides/lto-plate-backlog"
              className="text-blue-600 hover:underline"
            >
              LTO Plate Number Backlog: Current Status and Updates
            </Link>
          </li>
          <li>
            <Link
              href="/guides/pnp-hpg-clearance"
              className="text-blue-600 hover:underline"
            >
              How to Get a PNP-HPG Motor Vehicle Clearance
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
