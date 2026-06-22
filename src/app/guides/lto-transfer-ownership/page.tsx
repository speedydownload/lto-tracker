import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR_STR } from "@/lib/constants";
import { getGuideBySlug } from "@/data/guides";
import { formatDate } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TableOfContents } from "@/components/layout/TableOfContents";
import FAQSection from "@/components/sections/FAQSection";
import {
  ArticleSchema,
  FAQPageSchema,
  BreadcrumbSchema,
  HowToSchema,
} from "@/components/seo/JsonLd";

const guide = getGuideBySlug("lto-transfer-ownership")!;

export const metadata: Metadata = {
  title: `How to Transfer Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Requirements & Process`,
  description:
    "Complete guide to transferring vehicle ownership at the LTO Philippines. Step-by-step process, document requirements, fees, deed of sale, insurance, PMVIC inspection, and tips for buying or selling a used vehicle.",
  keywords: [
    "LTO transfer of ownership",
    "how to transfer vehicle ownership LTO",
    "LTO transfer requirements",
    "deed of sale vehicle Philippines",
    `transfer of ownership requirements LTO ${CURRENT_YEAR_STR}`,
    "buy used car Philippines LTO",
    "sell vehicle LTO process",
    "LTO change of ownership",
    "vehicle transfer fees LTO",
    "LTO transfer of registration",
  ],
  openGraph: {
    title: `How to Transfer Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Requirements & Process`,
    description:
      "Complete guide to transferring vehicle ownership at the LTO. All requirements, fees, and step-by-step process for buyers and sellers.",
    url: "https://ltotrackeronline.ph/guides/lto-transfer-ownership",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Transfer Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Requirements & Process`,
    description:
      "Complete guide to transferring vehicle ownership at the LTO. All requirements, fees, and step-by-step process.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-transfer-ownership",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  {
    id: "why-transfer",
    text: "Why Transfer of Ownership Is Important",
    level: 2,
  },
  {
    id: "types-of-transfer",
    text: "Types of Ownership Transfer",
    level: 2,
  },
  { id: "requirements", text: "Complete Document Requirements", level: 2 },
  {
    id: "seller-requirements",
    text: "Documents from the Seller",
    level: 3,
  },
  { id: "buyer-requirements", text: "Documents from the Buyer", level: 3 },
  {
    id: "deed-of-sale",
    text: "Deed of Sale — How to Prepare It",
    level: 2,
  },
  { id: "insurance-transfer", text: "Insurance Requirements", level: 2 },
  { id: "pmvic-inspection", text: "PMVIC Inspection", level: 2 },
  { id: "fees", text: "Transfer of Ownership Fees", level: 2 },
  {
    id: "step-by-step-process",
    text: "Step-by-Step Transfer Process",
    level: 2,
  },
  {
    id: "online-process",
    text: "Online Processing via LTMS Portal",
    level: 2,
  },
  { id: "common-issues", text: "Common Issues and How to Resolve Them", level: 2 },
  {
    id: "tips-buyers-sellers",
    text: "Tips for Buyers and Sellers",
    level: 2,
  },
];

const faqs = [
  {
    question:
      "How much does it cost to transfer vehicle ownership at the LTO?",
    answer:
      "The total cost for transferring vehicle ownership at the LTO ranges from approximately PHP 2,000 to PHP 10,000 or more, depending on the vehicle type, age, and value. The fees include the transfer fee, registration fee, computer fee, CTPL insurance, PMVIC inspection fee, and other charges. Additionally, you may need to pay for the Deed of Sale notarization and a PNP-HPG motor vehicle clearance. The exact amount is computed at the LTO based on your specific vehicle details.",
  },
  {
    question:
      "What documents do I need to transfer vehicle ownership at the LTO?",
    answer:
      "You need the following key documents: original Certificate of Registration (CR) from the seller, latest Official Receipt (OR) from the seller, Deed of Sale (notarized), PNP-HPG Motor Vehicle Clearance, PMVIC inspection certificate, new CTPL insurance in the buyer's name, valid government-issued IDs of both buyer and seller, and any applicable tax documents. If the vehicle has an existing loan or chattel mortgage, you also need the mortgage cancellation document from the lender.",
  },
  {
    question: "How long does the LTO transfer of ownership process take?",
    answer:
      "The LTO transfer of ownership process typically takes 1 to 3 hours at the branch if all documents are complete and there are no issues with the vehicle's records. However, the total time from start to finish, including gathering all requirements (PNP clearance, PMVIC inspection, insurance, etc.), can take several days to a week. Processing times may vary by branch and time of the month, with end-of-month periods being the busiest.",
  },
  {
    question: "Can I transfer ownership of a vehicle with an expired registration?",
    answer:
      "Yes, you can transfer ownership of a vehicle with an expired registration, but you will need to renew the registration simultaneously during the transfer process. This means settling any late registration penalties in addition to the transfer fees. The vehicle must still pass the PMVIC inspection and have valid CTPL insurance. The total cost will be higher due to the combined fees and penalties.",
  },
  {
    question: "Do I need a PNP-HPG clearance for vehicle transfer?",
    answer:
      "Yes, a Philippine National Police - Highway Patrol Group (PNP-HPG) Motor Vehicle Clearance is required for all vehicle ownership transfers. This clearance verifies that the vehicle is not reported stolen, has no pending criminal cases, and has no alarm or hold orders. You can obtain the clearance at any PNP-HPG office by presenting the vehicle for physical inspection along with the CR, OR, and valid ID. The PNP-HPG clearance fee is approximately PHP 150.",
  },
  {
    question:
      "What is a Deed of Sale and how do I prepare one for a vehicle?",
    answer:
      "A Deed of Sale (also called Deed of Absolute Sale) is a legal document that formally transfers ownership of the vehicle from the seller to the buyer. It must include the full names and addresses of both parties, a complete description of the vehicle (make, model, year, color, engine number, chassis number, plate number), the agreed selling price, and the signatures of both parties. The Deed of Sale must be notarized by a licensed notary public to be valid for LTO processing.",
  },
  {
    question:
      "Can I transfer a vehicle registered to a deceased owner?",
    answer:
      "Yes, a vehicle registered to a deceased owner can be transferred to an heir or a buyer. The process requires additional documents including the death certificate of the registered owner, Certificate Authorizing Registration (CAR) or eCAR from the Bureau of Internal Revenue (BIR), extrajudicial settlement of estate (if applicable), and a Special Power of Attorney from co-heirs if only one heir is processing the transfer. This type of transfer is more complex and may take longer to process.",
  },
  {
    question: "What happens if I buy a vehicle without transferring ownership at the LTO?",
    answer:
      "Buying a vehicle without transferring ownership at the LTO creates significant legal and practical problems. The vehicle will remain registered under the seller's name, meaning the seller is still legally liable for traffic violations, accidents, and other liabilities associated with the vehicle. The buyer cannot renew the registration, claim license plates, or sell the vehicle to a third party without the original owner's cooperation. Always complete the transfer of ownership at the LTO as soon as possible after purchasing a used vehicle.",
  },
];

export default function LtoTransferOwnership() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "LTO Transfer of Ownership" },
        ]}
      />

      <ArticleSchema
        headline={`How to Transfer Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Requirements & Process`}
        description="Complete guide to transferring vehicle ownership at the LTO Philippines. Step-by-step process, document requirements, fees, and tips for buyers and sellers."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/lto-transfer-ownership"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "LTO Transfer of Ownership",
            url: "https://ltotrackeronline.ph/guides/lto-transfer-ownership",
          },
        ]}
      />
      <HowToSchema
        name="How to Transfer Vehicle Ownership at the LTO"
        description="Step-by-step guide to transferring motor vehicle ownership at the LTO in the Philippines."
        steps={[
          {
            name: "Prepare the Deed of Sale",
            text: "Draft and notarize a Deed of Absolute Sale signed by both the seller and the buyer, with complete vehicle details and agreed selling price.",
          },
          {
            name: "Obtain PNP-HPG Motor Vehicle Clearance",
            text: "Visit a PNP-HPG office with the vehicle for physical inspection and clearance. Present the CR, OR, and valid ID.",
          },
          {
            name: "Get PMVIC Inspection",
            text: "Have the vehicle inspected at a PMVIC center and obtain the inspection certificate.",
          },
          {
            name: "Obtain New CTPL Insurance",
            text: "Purchase a new CTPL insurance policy in the buyer's name from an accredited insurance provider.",
          },
          {
            name: "Visit the LTO District Office",
            text: "Go to the LTO branch where the vehicle is registered. Submit all documents at the evaluation window.",
          },
          {
            name: "Pay Fees and Receive New CR",
            text: "Pay the transfer fees, registration fees, and other charges. Receive the new Certificate of Registration in the buyer's name.",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Transfer Vehicle Ownership at LTO {CURRENT_YEAR_STR} — Requirements &
            Process
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>16 min read</span>
          </div>

          <section>
            <h2
              id="overview"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}as your guide for transferring vehicle ownership at the Land Transportation Office
              (LTO), a critical legal process that must be completed whenever a
              motor vehicle changes hands in the Philippines. Whether you are
              buying a used car from a private seller, receiving a vehicle as a
              gift, inheriting a vehicle from a deceased relative, or acquiring a
              fleet vehicle from a company, the transfer of ownership must be
              recorded at the LTO to update the vehicle&apos;s Certificate of
              Registration (CR) to reflect the new owner&apos;s name.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The transfer process involves multiple agencies and documents,
              making it one of the more complex LTO transactions. In addition to
              the LTO itself, you will interact with a notary public for the Deed
              of Sale, the PNP Highway Patrol Group for vehicle clearance, a
              PMVIC for vehicle inspection, and an insurance company for CTPL
              coverage. The process requires coordination between the buyer and
              the seller, and both parties must provide documents and, in some
              cases, appear together at the LTO branch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide provides a comprehensive walkthrough of the entire
              transfer of ownership process, from preparing the Deed of Sale to
              receiving the new CR in the buyer&apos;s name. We cover every
              document requirement, fee component, and practical step, along with
              common issues that arise and how to resolve them. Whether you are
              the buyer or the seller, this guide will help you navigate the
              process efficiently and avoid costly mistakes.
            </p>
          </section>

          <section>
            <h2
              id="why-transfer"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Why Transfer of Ownership Is Important
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many Filipinos purchase used vehicles through informal channels and
              delay or skip the transfer of ownership at the LTO, often because
              of the cost and perceived complexity of the process. This is a
              serious mistake that creates legal, financial, and practical
              problems for both the buyer and the seller.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For the buyer:</strong> Without a proper transfer, the
              vehicle remains legally registered to the seller. This means the
              buyer cannot renew the vehicle registration in their own name,
              cannot claim license plates, and cannot sell the vehicle to a third
              party without the original owner&apos;s cooperation. In case of an
              accident, insurance claims may be complicated or denied if the
              policy holder does not match the registered owner. If the seller
              incurs debts or legal issues, the vehicle could potentially be
              subject to legal claims or liens since it is still in the
              seller&apos;s name.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For the seller:</strong> If the vehicle remains in your
              name, you are still the registered owner in the eyes of the law.
              This means you could be held liable for traffic violations, unpaid
              tolls, accidents, and even criminal incidents involving the vehicle.
              If the buyer fails to maintain insurance or registration, any
              liability could fall back on you as the registered owner. The
              only way to sever your legal connection to the vehicle is to
              complete the transfer of ownership at the LTO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The bottom line is straightforward: always complete the transfer of
              ownership at the LTO as soon as possible after a vehicle changes
              hands. The cost and effort of the transfer process are minimal
              compared to the legal and financial risks of leaving the vehicle
              registered to the wrong person.
            </p>
          </section>

          <section>
            <h2
              id="types-of-transfer"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Types of Ownership Transfer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO processes several types of ownership transfers, each with
              slightly different requirements:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Sale (private party to private party):</strong> The most
                common type. The seller sells the vehicle to the buyer through a
                Deed of Absolute Sale. Both parties cooperate in submitting
                documents to the LTO.
              </li>
              <li>
                <strong>Sale (dealer to buyer):</strong> When purchasing from a
                licensed car dealership, the dealer typically handles the transfer
                process on behalf of the buyer. The dealer provides the Deed of
                Sale and other documents as part of the purchase.
              </li>
              <li>
                <strong>Donation:</strong> When a vehicle is given as a gift
                (common between family members), a Deed of Donation is used
                instead of a Deed of Sale. The donor and donee may have tax
                obligations related to the donation.
              </li>
              <li>
                <strong>Inheritance (estate transfer):</strong> When a vehicle
                owner passes away, the vehicle must be transferred to the
                heir(s) through an extrajudicial settlement of estate or a court
                order. This type requires additional documents from the Bureau
                of Internal Revenue (BIR) and the courts.
              </li>
              <li>
                <strong>Foreclosure/repossession:</strong> When a vehicle is
                repossessed by a lending institution due to unpaid loans, the
                lender processes the transfer through a court order or judicial
                confirmation of sale.
              </li>
              <li>
                <strong>Company transfer:</strong> When a company vehicle is
                sold or transferred, the company must provide a board resolution
                or secretary&apos;s certificate authorizing the sale, in addition
                to the standard transfer documents.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Complete Document Requirements
            </h2>

            <h3
              id="seller-requirements"
              className="text-xl font-bold text-gray-900 mt-8 mb-3"
            >
              Documents from the Seller
            </h3>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Original Certificate of Registration (CR)</strong> — The
                current CR showing the seller as the registered owner. This is
                the most critical document. If the CR has been lost, the seller
                must apply for a replacement at the LTO before the transfer can
                proceed.
              </li>
              <li>
                <strong>Latest Official Receipt (OR)</strong> — Proof that the
                vehicle&apos;s registration is current. If the registration has
                expired, the seller or buyer must renew it as part of the
                transfer process.
              </li>
              <li>
                <strong>Deed of Absolute Sale (notarized)</strong> — Signed by
                both the seller and the buyer, with all vehicle details and the
                agreed selling price. Must be notarized.
              </li>
              <li>
                <strong>Seller&apos;s valid government-issued ID</strong> —
                Original and photocopy of at least one valid ID (driver&apos;s
                license, passport, UMID, PhilID, etc.).
              </li>
              <li>
                <strong>
                  Tax Identification Number (TIN) or BIR Certificate
                </strong>{" "}
                — May be required for tax computation purposes related to the
                sale.
              </li>
              <li>
                <strong>
                  Chattel Mortgage cancellation (if applicable)
                </strong>{" "}
                — If the vehicle was financed through a loan, the seller must
                obtain a mortgage cancellation or release of chattel mortgage
                from the lending institution confirming that the loan has been
                fully paid.
              </li>
            </ol>

            <h3
              id="buyer-requirements"
              className="text-xl font-bold text-gray-900 mt-8 mb-3"
            >
              Documents from the Buyer
            </h3>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Buyer&apos;s valid government-issued ID</strong> —
                Original and photocopy of at least one valid ID.
              </li>
              <li>
                <strong>PNP-HPG Motor Vehicle Clearance</strong> — Obtained from
                a PNP Highway Patrol Group office after the vehicle passes a
                physical inspection and records check. The clearance confirms the
                vehicle is not stolen and has no pending criminal cases. See our guide on obtaining <Link href="/guides/pnp-hpg-clearance" className="text-[#1e40af] hover:underline">PNP-HPG motor vehicle clearance</Link> for full details.
              </li>
              <li>
                <strong>PMVIC Inspection Certificate</strong> — A certificate
                from an accredited PMVIC confirming that the vehicle has passed
                the comprehensive inspection.
              </li>
              <li>
                <strong>
                  Compulsory Third-Party Liability (CTPL) Insurance
                </strong>{" "}
                — A new CTPL policy in the buyer&apos;s name from an accredited
                insurance provider. The policy must cover the upcoming
                registration period.
              </li>
              <li>
                <strong>Appropriate Deed of Sale copy</strong> — The buyer&apos;s
                copy of the notarized Deed of Absolute Sale.
              </li>
              <li>
                <strong>Duly accomplished application form</strong> — The LTO
                application form for transfer of ownership, available at the LTO
                branch or through the LTMS Portal.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="deed-of-sale"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Deed of Sale — How to Prepare It
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Deed of Absolute Sale is the legal document that formalizes the
              transfer of vehicle ownership from the seller to the buyer. It is
              the cornerstone document of the entire transfer process, and the
              LTO will not process a transfer without a properly executed and
              notarized Deed of Sale.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A proper Deed of Sale for a motor vehicle must include the
              following elements:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Complete details of the seller (vendor):</strong> Full
                legal name, address, civil status, nationality, and government ID
                number.
              </li>
              <li>
                <strong>Complete details of the buyer (vendee):</strong> Full
                legal name, address, civil status, nationality, and government ID
                number.
              </li>
              <li>
                <strong>Complete vehicle description:</strong> Make, model, body
                type, year of manufacture, color, plate number, conduction
                sticker number (if applicable), engine number, chassis number
                (frame number), and MV File Number.
              </li>
              <li>
                <strong>Selling price:</strong> The agreed-upon price in both
                words and figures. The selling price is important because it is
                used as the basis for computing certain transfer fees.
              </li>
              <li>
                <strong>Declaration statements:</strong> The seller declares
                that they are the lawful owner of the vehicle, that the vehicle
                is free from liens and encumbrances (or discloses any existing
                ones), and that they voluntarily transfer ownership to the buyer.
              </li>
              <li>
                <strong>Signatures:</strong> Both the seller and the buyer must
                sign the document in the presence of at least two witnesses.
              </li>
              <li>
                <strong>Notarization:</strong> The Deed of Sale must be notarized
                by a licensed notary public. The notary public verifies the
                identities of both parties, witnesses the signing, and affixes
                their notarial seal and signature.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many notary public offices have template Deed of Sale forms for
              motor vehicles that you can use. The notarization fee typically
              ranges from PHP 200 to PHP 1,000 depending on the notary public
              and the selling price of the vehicle. Make sure to get at least
              three notarized copies: one for the seller, one for the buyer, and
              one for submission to the LTO.
            </p>
          </section>

          <section>
            <h2
              id="insurance-transfer"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Insurance Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the transfer of ownership, the buyer must obtain a new
              Compulsory Third-Party Liability (<Link href="/guides/ctpl-insurance-guide" className="text-[#1e40af] hover:underline">CTPL insurance</Link>) policy in their
              own name. The seller&apos;s existing CTPL policy cannot be
              transferred to the buyer, as the policy is tied to the
              policyholder&apos;s identity. The new CTPL policy must be
              purchased from an Insurance Commission-accredited provider and
              must cover the vehicle for the upcoming registration period.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are purchasing the vehicle from a dealership, the dealer
              may facilitate the CTPL insurance purchase as part of the sales
              package. For private sales, the buyer should arrange CTPL
              insurance before visiting the LTO. Many insurance agents operate
              near LTO offices and can issue CTPL policies on the spot, but
              arranging insurance in advance saves time during the transfer
              process.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have comprehensive insurance on the vehicle (as the
              seller), you should notify your insurance company of the sale and
              either cancel the policy (with a potential refund for the unused
              period) or transfer the policy to the buyer (if the insurer
              allows it). The buyer should also consider obtaining their own
              comprehensive insurance policy for ongoing protection.
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
              A PMVIC (Private Motor Vehicle Inspection Center) inspection is
              required as part of the transfer of ownership process. The
              inspection ensures that the vehicle is roadworthy and meets safety
              and emissions standards. The vehicle must be brought to an
              accredited PMVIC center for the comprehensive 70-point inspection.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PMVIC inspection should be completed before visiting the LTO
              for the transfer. If the vehicle fails any inspection points, the
              issues must be repaired and the vehicle re-inspected before the
              transfer can proceed. Common failure points for used vehicles
              include worn brakes, misaligned headlights, non-functional signal
              lights, excessive emissions, and worn tires.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              PMVIC inspection fees range from PHP 600 for motorcycles to PHP
              1,800 for larger vehicles. The buyer typically bears the cost of
              the PMVIC inspection, though this can be negotiated between the
              buyer and seller as part of the sale agreement.
            </p>
          </section>

          <section>
            <h2
              id="fees"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Transfer of Ownership Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The fees for transferring vehicle ownership at the LTO include
              several components:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Fee Component
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Estimated Cost (PHP)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Transfer Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 100 - 500
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Registration Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 252.96
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Computer Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      MVUC (Motor Vehicle User&apos;s Charge)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 720 - 3,500+
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      CTPL Insurance (buyer&apos;s name)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 400 - 750
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Sticker Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 45.00
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PNP-HPG Clearance
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 150.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PMVIC Inspection
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 600 - 1,800
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Deed of Sale Notarization
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 200 - 1,000
                    </td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Estimated Total
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 2,500 - 10,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The exact total varies depending on the vehicle type, engine
              displacement, and whether additional services (such as late
              registration renewal or mortgage cancellation) are needed. For a complete breakdown of all LTO charges, see our <Link href="/guides/lto-fees-schedule" className="text-[#1e40af] hover:underline">LTO fees schedule</Link>. The
              buyer typically bears most of the transfer costs, though the buyer
              and seller can negotiate how to split the expenses as part of their
              agreement.
            </p>
          </section>

          <section>
            <h2
              id="step-by-step-process"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step Transfer Process
            </h2>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Agree on the sale terms.</strong> The buyer and seller
                agree on the selling price and other terms. Inspect the vehicle
                thoroughly before committing to the purchase. Verify the engine
                number and chassis number against the CR to ensure they match.
              </li>
              <li>
                <strong>Execute the Deed of Sale.</strong> Both parties sign the
                Deed of Absolute Sale in the presence of a notary public. Ensure
                all vehicle details are accurately reflected in the document. Get
                at least three notarized copies.
              </li>
              <li>
                <strong>Obtain PNP-HPG clearance.</strong> Bring the vehicle to
                a PNP-HPG office for physical inspection and records check.
                Present the CR, OR, and valid ID. The clearance confirms the
                vehicle is not stolen and has no pending cases.
              </li>
              <li>
                <strong>Complete the PMVIC inspection.</strong> Take the vehicle
                to an accredited PMVIC for the 70-point inspection. If the
                vehicle passes, obtain the PMVIC certificate.
              </li>
              <li>
                <strong>Purchase CTPL insurance.</strong> The buyer obtains a new
                CTPL insurance policy in their name from an accredited provider.
              </li>
              <li>
                <strong>Visit the LTO district office.</strong> Go to the LTO
                branch where the vehicle is currently registered. Both the buyer
                and seller should ideally be present, though the seller can
                authorize a representative through an SPA.
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong>{" "}
                Present all documents to the evaluator: CR (original), OR
                (latest), Deed of Sale (notarized), PNP-HPG clearance, PMVIC
                certificate, CTPL insurance, IDs of both parties, and the
                application form.
              </li>
              <li>
                <strong>Wait for assessment and computation.</strong> The LTO
                evaluator will review all documents, verify the vehicle records,
                check for violations or encumbrances, and compute the total fees
                due.
              </li>
              <li>
                <strong>Pay the fees.</strong> Proceed to the cashier and pay
                the total amount. Keep the receipt as proof of payment.
              </li>
              <li>
                <strong>Receive the new CR.</strong> After payment processing,
                receive the new Certificate of Registration in the buyer&apos;s
                name. The new CR will show the buyer as the registered owner,
                with updated details reflecting the transfer. The new OR will
                also be issued with the registration sticker.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="online-process"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Online Processing via LTMS Portal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO has introduced the option to initiate the transfer of
              ownership process through the LTMS Portal at{" "}
              <a
                href="https://portal.lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                portal.lto.gov.ph
              </a>
              . While the physical inspection (PNP-HPG and PMVIC) and document
              submission still require in-person visits, some preliminary steps
              can be completed online.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Through the LTMS Portal, you can create your buyer account, fill
              out the transfer application form, upload scanned copies of your
              documents for pre-evaluation, and schedule an appointment at your
              preferred LTO branch. This can reduce the time you spend at the
              LTO office by allowing the evaluator to review your documents in
              advance and identify any issues before you arrive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As the LTO continues to digitize its services, it is expected that
              more steps of the transfer process will become available online.
              Check the LTMS Portal for the latest available services and
              features related to ownership transfers.
            </p>
          </section>

          <section>
            <h2
              id="common-issues"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Common Issues and How to Resolve Them
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The vehicle has an alarm or hold order.</strong> An alarm
              or hold order prevents the transfer from being processed. This can
              occur if the vehicle is reported stolen, has a pending court case,
              or has an outstanding lien from a lender. The buyer should always
              check for alarms before purchasing by requesting the PNP-HPG
              clearance before paying for the vehicle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The engine or chassis number does not match the
              CR.</strong> Discrepancies between the physical vehicle and the CR
              records are a red flag. This could indicate an engine swap that was
              not properly documented, an error in the CR, or, in the worst case,
              a stolen vehicle with altered numbers. The LTO will not process the
              transfer until the discrepancy is resolved. If the engine was
              legitimately replaced, the seller must first process an engine
              change with the LTO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The seller cannot be located or contacted.</strong> If you
              have already paid for the vehicle but the seller is uncooperative
              or unreachable, the transfer becomes extremely difficult. This is
              why it is crucial to process the transfer at the LTO at the time
              of sale, ideally with both parties present. Without the
              seller&apos;s cooperation, you may need to pursue legal remedies
              such as a court order to compel the transfer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>The vehicle has an outstanding chattel mortgage.</strong>{" "}
              If the vehicle was purchased on loan and the mortgage has not been
              fully discharged, the LTO cannot process the transfer until the
              mortgage cancellation document is submitted. The seller must
              coordinate with the lending institution to obtain the mortgage
              release or cancellation certificate.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Multiple layers of unregistered sales.</strong> In some
              cases, a vehicle has been sold multiple times without any of the
              transactions being recorded at the LTO. This creates a chain of
              undocumented transfers that must be resolved before the current
              buyer can register the vehicle in their name. The LTO may require
              Deeds of Sale from each successive transaction to establish the
              chain of ownership.
            </p>
          </section>

          <section>
            <h2
              id="tips-buyers-sellers"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips for Buyers and Sellers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For buyers:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Verify the vehicle before paying.</strong> Check the
                engine number and chassis number against the CR. <Link href="/guides/how-to-check-vehicle-encumbrance" className="text-[#1e40af] hover:underline">Check vehicle encumbrance</Link> records and get a PNP-HPG
                clearance before committing to the purchase. This protects you
                from buying a stolen vehicle or one with legal issues.
              </li>
              <li>
                <strong>Process the transfer immediately.</strong> Ideally,
                process the transfer at the LTO on the same day as the sale, with
                both the buyer and seller present. This eliminates the risk of
                the seller becoming uncooperative after receiving payment.
              </li>
              <li>
                <strong>Do not accept a vehicle without the original
                CR.</strong> The original CR is essential for the transfer. A
                photocopy is not sufficient. If the seller cannot produce the
                original CR, that is a significant red flag.
              </li>
              <li>
                <strong>Negotiate who pays the transfer costs.</strong> The
                buyer typically pays for the transfer, but this is negotiable.
                Factor the transfer costs into your budget when negotiating the
                purchase price.
              </li>
              <li>
                <strong>Get a mechanical inspection.</strong> In addition to the
                PMVIC inspection (which checks safety and emissions), consider
                having the vehicle inspected by a trusted mechanic to assess the
                overall mechanical condition before purchasing.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For sellers:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Ensure the transfer is completed.</strong> Do not simply
                hand over the vehicle and CR. Make sure the LTO transfer is
                processed and the CR is updated to the buyer&apos;s name. This
                protects you from future liability.
              </li>
              <li>
                <strong>Keep copies of all transfer documents.</strong> After the
                transfer, keep copies of the Deed of Sale, the old CR, and the
                LTO acknowledgment receipt for your records. These documents
                prove that you have legally divested yourself of the vehicle.
              </li>
              <li>
                <strong>Cancel your insurance.</strong> After the transfer, notify
                your insurance company and cancel any existing comprehensive
                insurance policy on the vehicle. You may be entitled to a
                pro-rated refund for the unused coverage period.
              </li>
              <li>
                <strong>Clear any violations first.</strong> If there are
                outstanding traffic violations on the vehicle, settle them before
                the sale to avoid complications during the transfer process.
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
                href="/"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Registration Status Tracker →
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
                Find Your LTO Branch →
              </Link>
              <Link
                href="/guides/lto-renewal-requirements"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Renewal Requirements Guide →
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
