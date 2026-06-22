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

const guide = getGuideBySlug("transfer-of-vehicle-ownership")!;

export const metadata: Metadata = {
  title: `Transfer of Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Buyer & Seller Guide`,
  description: `Practical buyer and seller guide to transferring vehicle ownership at the LTO Philippines in ${CURRENT_YEAR_STR}. Covers deed of sale, insurance transfer, fees, red flags, negotiation tips, and how to protect yourself in a used vehicle transaction.`,
  keywords: [
    "transfer of vehicle ownership LTO",
    "buyer seller guide vehicle transfer",
    "LTO deed of sale vehicle",
    "how to buy used car Philippines",
    "how to sell car Philippines LTO",
    "LTO transfer buyer guide",
    `vehicle ownership transfer ${CURRENT_YEAR_STR}`,
    "used car buying tips Philippines",
    "LTO CR transfer process",
    "sell vehicle LTO buyer seller",
  ],
  openGraph: {
    title: `Transfer of Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Buyer & Seller Guide`,
    description:
      "Practical buyer and seller guide to transferring vehicle ownership at the LTO. Deed of sale, insurance transfer, fees, and protection tips for both parties.",
    url: "https://ltotrackeronline.ph/guides/transfer-of-vehicle-ownership",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `Transfer of Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Buyer & Seller Guide`,
    description:
      "Practical buyer and seller guide to transferring vehicle ownership at the LTO Philippines.",
  },
  alternates: {
    canonical:
      "https://ltotrackeronline.ph/guides/transfer-of-vehicle-ownership",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "buyer-checklist", text: "Buyer's Pre-Purchase Checklist", level: 2 },
  { id: "seller-preparation", text: "Seller's Preparation Guide", level: 2 },
  { id: "deed-of-sale-tips", text: "Deed of Sale — Practical Tips", level: 2 },
  { id: "insurance-transfer", text: "Transferring & Obtaining Insurance", level: 2 },
  { id: "fees-breakdown", text: "Complete Fees Breakdown", level: 2 },
  { id: "who-pays-what", text: "Who Pays What? Negotiating Costs", level: 2 },
  { id: "step-by-step-buyer", text: "Step-by-Step Process for the Buyer", level: 2 },
  { id: "step-by-step-seller", text: "Step-by-Step Process for the Seller", level: 2 },
  { id: "red-flags", text: "Red Flags When Buying a Used Vehicle", level: 2 },
  { id: "protecting-yourself", text: "Protecting Yourself After the Sale", level: 2 },
  { id: "encumbrance-check", text: "How to Check for Encumbrances", level: 2 },
  { id: "common-mistakes", text: "Common Mistakes to Avoid", level: 2 },
];

const faqs = [
  {
    question: "Should the buyer or the seller process the transfer of ownership at the LTO?",
    answer:
      "In practice, the buyer is typically responsible for processing the transfer of ownership at the LTO, since the buyer has the most to gain from having the vehicle registered in their name. However, both parties should ideally be present during the LTO transaction, or the seller should provide a Special Power of Attorney (SPA) authorizing a representative. The most important thing is that both parties agree on who handles the process and that the transfer is completed promptly after the sale.",
  },
  {
    question: "How do I verify that a used vehicle is not stolen before buying it?",
    answer:
      "Before purchasing a used vehicle, obtain a PNP-HPG Motor Vehicle Clearance. This involves bringing the vehicle to a PNP Highway Patrol Group office for a physical inspection and records check. The PNP-HPG will verify the engine number and chassis number against their database of stolen vehicles and pending cases. If the vehicle is clean, a clearance certificate will be issued. Additionally, check the vehicle's Certificate of Registration (CR) to ensure the engine and chassis numbers match the physical vehicle. Never buy a vehicle without verifying its PNP-HPG status first.",
  },
  {
    question: "Can the vehicle transfer be completed if the seller is overseas or unavailable?",
    answer:
      "Yes, if the seller is overseas or otherwise unavailable, they can execute a Special Power of Attorney (SPA) authorizing a representative to sign the Deed of Sale and process the transfer at the LTO on their behalf. The SPA must be notarized (or authenticated at a Philippine embassy if the seller is abroad). The representative must present the original SPA, the seller's original CR and OR, and their own valid ID when processing the transfer. It is strongly recommended to have the SPA specifically mention the authority to sell and transfer the specific vehicle.",
  },
  {
    question: "What is the difference between the Deed of Absolute Sale and the Deed of Sale with Assumption of Mortgage?",
    answer:
      "A Deed of Absolute Sale transfers full and unconditional ownership of the vehicle from the seller to the buyer. The selling price is paid in full, and the vehicle is free from any outstanding mortgage or lien. A Deed of Sale with Assumption of Mortgage is used when the vehicle still has an outstanding loan. The buyer assumes the remaining loan balance and continues making payments to the lending institution. This type of sale requires the lender's consent and additional documentation, including a novation agreement with the financing company.",
  },
  {
    question: "What happens if the engine number or chassis number does not match the CR?",
    answer:
      "If the engine number or chassis number on the physical vehicle does not match the details on the Certificate of Registration (CR), the LTO will not process the transfer of ownership. A mismatch could indicate an unreported engine swap, a clerical error in the CR, or, in the worst case, a stolen vehicle with tampered identification numbers. If the engine was legitimately replaced, the seller must first process an engine change at the LTO with supporting documentation (receipt from the engine supplier, mechanic's certification) before the transfer can proceed.",
  },
  {
    question: "Is it safe to buy a vehicle using only a Deed of Sale without transferring at the LTO?",
    answer:
      "No, it is not safe for either party. Without completing the LTO transfer, the vehicle remains legally registered to the seller. The buyer cannot independently renew the registration, claim plates, or sell the vehicle to a third party. The seller remains liable for any traffic violations, accidents, or legal issues involving the vehicle. A Deed of Sale alone is not sufficient proof of ownership for legal purposes. Always complete the full LTO transfer of ownership immediately after the sale to protect both parties.",
  },
  {
    question: "How do I check if a vehicle has an outstanding loan or encumbrance?",
    answer:
      "You can check for vehicle encumbrances through several methods: request the seller to show the original CR (an annotation on the CR will indicate if there is an existing chattel mortgage), visit the LTO branch where the vehicle is registered and request an encumbrance check, or use the LTMS Portal to check the vehicle's records online. If a chattel mortgage exists, the seller must provide a mortgage cancellation document from the lending institution before the transfer can be processed. Our vehicle encumbrance checker tool can also help verify this information.",
  },
  {
    question: "Can I transfer ownership of a vehicle that has been involved in an accident?",
    answer:
      "Yes, you can transfer ownership of a vehicle that has been involved in an accident, provided there are no pending legal cases or hold orders on the vehicle. The vehicle must still pass the PMVIC inspection, which checks for roadworthiness and safety compliance. If the accident resulted in a police report or insurance claim, ensure all matters are resolved before proceeding with the sale. The PNP-HPG clearance will also reveal if there are any pending cases related to the vehicle.",
  },
];

export default function TransferOfVehicleOwnership() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Transfer of Vehicle Ownership (Buyer & Seller)" },
        ]}
      />

      <ArticleSchema
        headline={`Transfer of Vehicle Ownership at LTO ${CURRENT_YEAR_STR} — Buyer & Seller Guide`}
        description="Practical buyer and seller guide to transferring vehicle ownership at the LTO. Deed of sale, insurance transfer, fees, and protection tips."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/transfer-of-vehicle-ownership"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "Transfer of Vehicle Ownership (Buyer & Seller)",
            url: "https://ltotrackeronline.ph/guides/transfer-of-vehicle-ownership",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transfer of Vehicle Ownership at LTO {CURRENT_YEAR_STR} — Buyer &amp; Seller
            Guide
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
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{" "}
              presents this practical guide tailored specifically for buyers and
              sellers navigating the transfer of vehicle ownership at the Land
              Transportation Office (LTO) in {CURRENT_YEAR_STR}. While our{" "}
              <Link
                href="/guides/lto-transfer-ownership"
                className="text-[#1e40af] hover:underline"
              >
                comprehensive transfer of ownership guide
              </Link>{" "}
              covers the full regulatory process and document requirements, this
              companion article focuses on the real-world perspective of both
              parties in a used vehicle transaction. Buying or selling a
              second-hand vehicle in the Philippines involves far more than just
              exchanging money and keys. It requires careful verification,
              proper documentation, and a trip to the LTO to ensure the
              vehicle&apos;s registration is legally transferred to the new
              owner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every year, thousands of Filipino vehicle owners encounter
              problems because they failed to complete the transfer of ownership
              at the LTO. Sellers find themselves receiving traffic violation
              notices for vehicles they sold years ago. Buyers discover they
              cannot renew the registration or claim license plates because the
              vehicle is still in someone else&apos;s name. These problems are
              entirely avoidable with proper planning and execution.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide walks you through every practical aspect of the
              transaction from both sides of the table. From the buyer&apos;s
              pre-purchase checklist to the seller&apos;s preparation steps,
              from negotiating who pays the fees to protecting yourself after the
              sale is complete, this article covers the ground-level details
              that make the difference between a smooth transaction and a
              costly nightmare.
            </p>
          </section>

          <section>
            <h2
              id="buyer-checklist"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Buyer&apos;s Pre-Purchase Checklist
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Before you hand over any money, go through this thorough checklist
              to protect yourself from fraud, legal complications, and hidden
              vehicle problems:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Verify the seller&apos;s identity.</strong> Ask for a
                valid government-issued ID and compare the name on the ID to the
                name on the Certificate of Registration (CR). The person selling
                the vehicle should be the registered owner, or they should have a
                notarized Special Power of Attorney (SPA) from the registered
                owner authorizing the sale.
              </li>
              <li>
                <strong>Inspect the Certificate of Registration (CR).</strong>{" "}
                Ask to see the original CR, not a photocopy. Check that the
                vehicle details on the CR (make, model, year, color, engine
                number, chassis number, plate number) match the physical vehicle.
                Look for any annotations indicating an existing chattel mortgage
                or encumbrance.
              </li>
              <li>
                <strong>Check the Official Receipt (OR).</strong> The latest OR
                confirms that the vehicle&apos;s registration is current. An
                expired registration means additional fees during the transfer.
                The OR also shows the registered owner&apos;s name and address.
              </li>
              <li>
                <strong>Physically verify engine and chassis numbers.</strong>{" "}
                Locate the engine number on the engine block and the chassis
                number on the vehicle frame. Compare both numbers against the CR.
                Any discrepancy is a major red flag that could indicate the
                vehicle is stolen or has undergone an unreported engine swap.
              </li>
              <li>
                <strong>Request a PNP-HPG clearance before paying.</strong> This
                is the single most important step. A PNP-HPG Motor Vehicle
                Clearance confirms the vehicle is not reported stolen and has no
                pending criminal cases. Ideally, accompany the seller to a
                PNP-HPG office to process the clearance before finalizing the
                sale.
              </li>
              <li>
                <strong>Check for encumbrances.</strong> Use the{" "}
                <Link
                  href="/guides/how-to-check-vehicle-encumbrance"
                  className="text-[#1e40af] hover:underline"
                >
                  vehicle encumbrance guide
                </Link>{" "}
                to verify that the vehicle is free from any outstanding loans or
                liens. A vehicle with an existing chattel mortgage cannot be
                legally sold without the lender&apos;s consent and mortgage
                cancellation.
              </li>
              <li>
                <strong>Get a professional mechanical inspection.</strong> Beyond
                the PMVIC inspection (which focuses on safety and emissions),
                hire a trusted mechanic to assess the vehicle&apos;s overall
                mechanical condition, including the engine, transmission,
                suspension, and electrical systems.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="seller-preparation"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Seller&apos;s Preparation Guide
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a seller, preparing your documents and the vehicle in advance
              speeds up the sale and builds buyer confidence. Here is how to get
              ready:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Renew your registration if expired.</strong> A vehicle
                with current registration is easier to sell and transfer. If your
                registration has lapsed, consider renewing it before listing the
                vehicle, or be transparent with the buyer about the additional
                costs they will incur. Refer to our{" "}
                <Link
                  href="/guides/lto-vehicle-registration"
                  className="text-[#1e40af] hover:underline"
                >
                  vehicle registration guide
                </Link>{" "}
                for the renewal process.
              </li>
              <li>
                <strong>Settle outstanding violations.</strong> Check if there
                are any unresolved traffic violations recorded against your
                vehicle. Outstanding violations will prevent or delay the
                transfer. Use our{" "}
                <Link
                  href="/penalty-calculator"
                  className="text-[#1e40af] hover:underline"
                >
                  penalty calculator
                </Link>{" "}
                to estimate any fines.
              </li>
              <li>
                <strong>Obtain the chattel mortgage cancellation.</strong> If you
                financed the vehicle through a bank or financing company, make
                sure the loan is fully paid and request the release or
                cancellation of chattel mortgage document. This is essential for
                the LTO transfer.
              </li>
              <li>
                <strong>Gather your documents.</strong> Have the original CR,
                latest OR, your valid government-issued ID, and any loan
                discharge documents ready. Organize them in a folder so you can
                present them quickly to prospective buyers.
              </li>
              <li>
                <strong>Fix known mechanical issues.</strong> Addressing obvious
                mechanical problems before selling makes the vehicle more
                attractive, helps it pass the PMVIC inspection, and reduces the
                chance of post-sale disputes.
              </li>
              <li>
                <strong>Determine a fair selling price.</strong> Research the
                current market value of your vehicle model and year. Consider
                the vehicle&apos;s mileage, condition, service history, and any
                modifications. Setting a fair price leads to a faster sale and
                less negotiation.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="deed-of-sale-tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Deed of Sale — Practical Tips
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Deed of Absolute Sale is the legal backbone of your vehicle
              transaction. Here are practical tips that go beyond the basic
              format requirements:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Use a template, but customize it.</strong> Many notary
                publics have standard Deed of Sale templates for motor vehicles.
                These are generally acceptable, but review the template to ensure
                all vehicle details are correctly filled in and that the selling
                price reflects the actual amount agreed upon.
              </li>
              <li>
                <strong>State the actual selling price.</strong> Some buyers and
                sellers are tempted to under-declare the selling price to reduce
                transfer fees. This is inadvisable because it could create
                problems if the transaction is ever questioned, and the LTO and
                BIR have standard minimum values for different vehicle types and
                years.
              </li>
              <li>
                <strong>Include a warranty clause if agreed upon.</strong> While
                used vehicles are typically sold &quot;as is, where is,&quot; the
                buyer and seller can agree to include a short-term warranty for
                major components. If such an agreement exists, document it in the
                Deed of Sale to make it legally enforceable.
              </li>
              <li>
                <strong>Get at least three notarized copies.</strong> One for the
                buyer, one for the seller, and one for submission to the LTO. It
                is always better to have extra copies for your records.
              </li>
              <li>
                <strong>Both parties must be present at notarization.</strong>{" "}
                The notary public will require both the buyer and seller to
                present valid IDs and sign the document in person. If one party
                cannot attend, a representative with an SPA may sign on their
                behalf.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The notarization fee typically ranges from PHP 200 to PHP 1,000,
              depending on the notary public and the vehicle&apos;s selling
              price. Many notary public offices are located near LTO branches for
              convenience.
            </p>
          </section>

          <section>
            <h2
              id="insurance-transfer"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Transferring &amp; Obtaining Insurance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Insurance is a critical component of the vehicle transfer process.
              There are two types of insurance to consider: the mandatory CTPL
              (Compulsory Third-Party Liability) insurance and optional
              comprehensive insurance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>CTPL insurance (mandatory):</strong> The buyer must obtain
              a new CTPL policy in their name before the LTO transfer can be
              processed. The seller&apos;s existing CTPL policy is tied to their
              identity and cannot be simply transferred. New CTPL policies are
              available from any Insurance Commission-accredited provider. Many
              agents operate near LTO offices. CTPL premiums range from PHP 400
              to PHP 750 depending on the vehicle type. For more information on
              CTPL, see our{" "}
              <Link
                href="/guides/ctpl-insurance-guide"
                className="text-[#1e40af] hover:underline"
              >
                CTPL insurance guide
              </Link>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Comprehensive insurance (optional but
              recommended):</strong> If the seller has a comprehensive insurance
              policy on the vehicle, they should contact their insurance company
              to cancel the policy and request a pro-rated refund for the
              remaining coverage period. The buyer should arrange their own
              comprehensive insurance separately. Some insurance companies allow
              a policy transfer from seller to buyer if both parties agree and
              the insurer approves the transfer, but this is not always
              available and involves additional paperwork.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Insurance timing tip:</strong> Purchase the new CTPL
              policy before your LTO visit to avoid delays. However, do not
              purchase it too far in advance, as CTPL policies have a coverage
              start date. Coordinate the policy start date with your planned LTO
              transfer date for seamless coverage.
            </p>
          </section>

          <section>
            <h2
              id="fees-breakdown"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Complete Fees Breakdown
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding the full cost of transferring vehicle ownership helps
              both parties budget accurately and negotiate fairly. Here is a
              detailed breakdown:
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
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Typically Paid By
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
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Buyer
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Registration Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 252.96
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Buyer
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Computer Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Buyer
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      MVUC
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 720 - 3,500+
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Buyer
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      CTPL Insurance
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 400 - 750
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Buyer
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PNP-HPG Clearance
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 150.00
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Buyer
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PMVIC Inspection
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 600 - 1,800
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Negotiable
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Deed of Sale Notarization
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 200 - 1,000
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Split / Negotiable
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
                      Buyer
                    </td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Estimated Total
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 2,500 - 10,000+
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Mostly Buyer
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MVUC (Motor Vehicle User&apos;s Charge) varies significantly
              based on the vehicle&apos;s engine displacement and type. For more
              details on individual fee components, see our{" "}
              <Link
                href="/guides/lto-fees-schedule"
                className="text-[#1e40af] hover:underline"
              >
                complete LTO fees schedule
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="who-pays-what"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Who Pays What? Negotiating Costs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              There is no fixed rule in the Philippines about which party pays
              the transfer costs. However, common practice and general
              expectations are as follows:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Buyer typically pays:</strong> The LTO transfer fees,
              registration renewal, MVUC, new CTPL insurance, PNP-HPG
              clearance, and PMVIC inspection. Since these costs relate to the
              buyer&apos;s new registration and ownership, they are generally
              considered the buyer&apos;s responsibility.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Seller typically pays:</strong> Any late registration
              penalties (if the registration expired before the sale), any
              outstanding traffic violations tied to the vehicle, and the chattel
              mortgage cancellation fees. These are the seller&apos;s
              obligations that must be cleared before the transfer.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Split or negotiable:</strong> The Deed of Sale
              notarization fee and PMVIC inspection fee are commonly split
              between the buyer and seller or negotiated as part of the overall
              purchase agreement. In some transactions, the seller offers to
              shoulder the transfer costs as part of the selling price,
              particularly when the vehicle market is competitive.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Regardless of who pays, both parties should agree on the fee
              allocation before the sale is finalized and ideally document this
              agreement in the Deed of Sale or a separate written agreement.
            </p>
          </section>

          <section>
            <h2
              id="step-by-step-buyer"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step Process for the Buyer
            </h2>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Inspect the vehicle and verify documents.</strong>{" "}
                Complete the buyer&apos;s pre-purchase checklist above. Verify
                the seller&apos;s identity, the CR, the OR, and the engine and
                chassis numbers. Do not skip any verification step.
              </li>
              <li>
                <strong>Obtain PNP-HPG clearance.</strong> Accompany the seller
                to a PNP-HPG office with the vehicle. This step is critical for
                your protection. For more information, see our{" "}
                <Link
                  href="/guides/pnp-hpg-clearance"
                  className="text-[#1e40af] hover:underline"
                >
                  PNP-HPG clearance guide
                </Link>
                .
              </li>
              <li>
                <strong>Execute the Deed of Sale.</strong> Meet the seller at a
                notary public. Both parties sign the Deed of Absolute Sale with
                all vehicle details and the agreed selling price. Get three
                notarized copies.
              </li>
              <li>
                <strong>Get the vehicle inspected at a PMVIC.</strong> Take the
                vehicle to an accredited PMVIC for the comprehensive inspection.
                If the vehicle fails, arrange repairs and re-inspection before
                proceeding. Check our{" "}
                <Link
                  href="/guides/pmvic-inspection-guide"
                  className="text-[#1e40af] hover:underline"
                >
                  PMVIC inspection guide
                </Link>{" "}
                for what to expect.
              </li>
              <li>
                <strong>Purchase new CTPL insurance.</strong> Buy a CTPL policy
                in your name from an accredited insurance provider. Have the
                policy document ready for the LTO.
              </li>
              <li>
                <strong>Visit the LTO district office.</strong> Go to the LTO
                branch where the vehicle is registered. Bring all documents:
                original CR, latest OR, notarized Deed of Sale, PNP-HPG
                clearance, PMVIC certificate, CTPL insurance, and your valid ID.
              </li>
              <li>
                <strong>Submit at the evaluation window and pay fees.</strong>{" "}
                The evaluator reviews your documents and computes the total fees.
                Pay at the cashier and wait for the new CR to be issued in your
                name.
              </li>
              <li>
                <strong>Receive and verify the new CR.</strong> Check every
                detail on the new Certificate of Registration: your name,
                address, vehicle details, and plate number. Report any errors
                immediately.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="step-by-step-seller"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step Process for the Seller
            </h2>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Prepare your vehicle and documents.</strong> Complete the
                seller&apos;s preparation checklist above. Ensure the CR, OR,
                and any mortgage cancellation documents are in order.
              </li>
              <li>
                <strong>Agree on the selling price and terms.</strong> Negotiate
                the selling price, who pays the transfer costs, and any
                warranties or conditions with the buyer.
              </li>
              <li>
                <strong>Accompany the buyer to PNP-HPG.</strong> Support the
                buyer by going together to the PNP-HPG office for the vehicle
                clearance. Your cooperation demonstrates good faith and
                accelerates the process.
              </li>
              <li>
                <strong>Sign the Deed of Sale at the notary.</strong> Present
                your valid ID and sign the Deed of Absolute Sale in the presence
                of the notary public. Keep your copies of the notarized document.
              </li>
              <li>
                <strong>Turn over all documents and spare keys.</strong> Give the
                buyer the original CR, the latest OR, the PMVIC certificate (if
                available), the vehicle manual, service records, spare keys, and
                any other vehicle-related documents.
              </li>
              <li>
                <strong>Accompany the buyer to the LTO (or provide an SPA).</strong>{" "}
                Ideally, go to the LTO with the buyer to facilitate the transfer.
                If you cannot attend, execute a notarized SPA authorizing a
                representative to act on your behalf.
              </li>
              <li>
                <strong>Confirm the transfer is complete.</strong> Verify that
                the new CR has been issued in the buyer&apos;s name. Keep a
                photocopy of the new CR and the LTO acknowledgment receipt for
                your records. This is your proof that the vehicle is no longer
                legally yours.
              </li>
              <li>
                <strong>Cancel your insurance.</strong> Contact your insurance
                company to cancel any existing comprehensive insurance on the
                vehicle and request a refund for the remaining coverage period.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="red-flags"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Red Flags When Buying a Used Vehicle
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Protect yourself by watching out for these warning signs during a
              used vehicle transaction:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>The seller cannot produce the original CR.</strong> A
                photocopy or screenshot of the CR is not acceptable. If the
                original CR is &quot;lost,&quot; the seller must obtain a
                replacement from the LTO before the sale can proceed. Be very
                cautious in this situation.
              </li>
              <li>
                <strong>The name on the CR does not match the seller.</strong>{" "}
                If the seller is not the registered owner and does not have an
                SPA, the vehicle may have been sold multiple times without proper
                LTO transfers. This creates a chain of undocumented ownership
                that is extremely difficult to resolve.
              </li>
              <li>
                <strong>The seller refuses a PNP-HPG clearance check.</strong>{" "}
                Any legitimate seller should have no objection to verifying the
                vehicle&apos;s status with the PNP-HPG. Refusal is a serious red
                flag that the vehicle may be stolen or have pending legal issues.
              </li>
              <li>
                <strong>Engine or chassis numbers appear tampered.</strong> If
                the engine number plate looks scratched, re-stamped, or covered,
                or if the chassis number shows signs of alteration, walk away
                from the transaction immediately.
              </li>
              <li>
                <strong>The selling price is significantly below market
                value.</strong> While everyone wants a good deal, a price that is
                too good to be true usually is. Extremely low prices can indicate
                a stolen vehicle, hidden mechanical problems, or a scam.
              </li>
              <li>
                <strong>The seller pressures you to close quickly.</strong>{" "}
                Legitimate sellers understand that buyers need time for
                inspection and verification. High-pressure tactics to close the
                deal immediately are a red flag.
              </li>
              <li>
                <strong>The seller wants payment before the LTO
                transfer.</strong> While a deposit or down payment before the
                LTO visit is normal, a seller who demands full payment without
                agreeing to process the transfer is risky. Structure payments so
                that the final balance is released only after the LTO transfer
                is complete.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="protecting-yourself"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Protecting Yourself After the Sale
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For buyers:</strong> After the transfer, verify that the
              new CR accurately reflects your information. Keep the Deed of Sale
              and all receipts in a safe place. Obtain comprehensive vehicle
              insurance promptly. Monitor the vehicle&apos;s status using our{" "}
              <Link
                href="/mv-file-checker"
                className="text-[#1e40af] hover:underline"
              >
                MV File Checker
              </Link>{" "}
              to confirm the registration details. Set a reminder for the next
              registration renewal date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>For sellers:</strong> Keep copies of the Deed of Sale,
              a photocopy of the new CR in the buyer&apos;s name, and the LTO
              acknowledgment receipt. These documents prove that you legally
              transferred the vehicle. If you ever receive traffic violation
              notices for the vehicle after the sale, these documents are your
              defense. Cancel all existing insurance and remove any GPS tracking
              or personal data from the vehicle&apos;s infotainment system
              before handing it over.
            </p>
          </section>

          <section>
            <h2
              id="encumbrance-check"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              How to Check for Encumbrances
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Checking for encumbrances is a critical step that many buyers
              overlook. An encumbrance (typically a chattel mortgage from a car
              loan) means the vehicle is being used as collateral for a debt. If
              the loan is not fully paid, the lender has a legal claim on the
              vehicle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can check for encumbrances through these methods:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Check the CR directly.</strong> Look at the back of the
                Certificate of Registration for any annotation that says
                &quot;Chattel Mortgage&quot; or &quot;Encumbrance.&quot; This is
                the quickest way to check.
              </li>
              <li>
                <strong>Visit the LTO branch.</strong> Request an encumbrance
                check at the LTO district office where the vehicle is registered.
                The evaluator can look up the vehicle&apos;s records in the
                system.
              </li>
              <li>
                <strong>Use the LTMS Portal.</strong> Log in to the{" "}
                <a
                  href="https://portal.lto.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                >
                  LTMS Portal
                </a>{" "}
                and check the vehicle&apos;s records using the plate number or MV
                File Number.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              For a comprehensive walkthrough, see our{" "}
              <Link
                href="/guides/how-to-check-vehicle-encumbrance"
                className="text-[#1e40af] hover:underline"
              >
                vehicle encumbrance guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="common-mistakes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Common Mistakes to Avoid
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Delaying the LTO transfer.</strong> The biggest mistake
                both buyers and sellers make. Process the transfer as soon as
                possible after the sale. Every day the vehicle remains in the
                seller&apos;s name is a day of unnecessary risk for both parties.
              </li>
              <li>
                <strong>Accepting a photocopy of the CR.</strong> Always require
                the original CR. A photocopy is not valid for processing the
                transfer at the LTO and could indicate the seller does not have
                legitimate ownership.
              </li>
              <li>
                <strong>Skipping the PNP-HPG clearance.</strong> This is your
                primary protection against buying a stolen vehicle. Never skip
                this step, no matter how trustworthy the seller appears.
              </li>
              <li>
                <strong>Not checking for encumbrances.</strong> A vehicle with an
                outstanding chattel mortgage cannot be legally sold without the
                lender&apos;s consent. Verify this before paying for the vehicle.
              </li>
              <li>
                <strong>Under-declaring the selling price.</strong> While it may
                seem like a way to save on fees, under-declaring the price can
                lead to complications with the BIR and LTO, and provides less
                legal protection in case of a dispute.
              </li>
              <li>
                <strong>Not being present at the LTO together.</strong>{" "}
                Whenever possible, both buyer and seller should attend the LTO
                transfer. This ensures the transaction is completed smoothly and
                both parties can resolve any issues that arise during processing.
              </li>
            </ul>
          </section>

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
                href="/branches"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Find Your LTO Branch →
              </Link>
              <Link
                href="/penalty-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Penalty Calculator →
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
