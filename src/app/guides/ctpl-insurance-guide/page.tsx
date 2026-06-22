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

const guide = getGuideBySlug("ctpl-insurance-guide")!;

export const metadata: Metadata = {
  title: `CTPL Insurance Philippines ${CURRENT_YEAR_STR} — Complete Guide to Compulsory Third Party Liability`,
  description:
    "Complete guide to CTPL insurance in the Philippines. Learn what Compulsory Third Party Liability insurance covers, why it's required, premiums, how to get it, accredited providers, and claims process.",
  keywords: [
    "CTPL insurance Philippines",
    "Compulsory Third Party Liability",
    "CTPL insurance cost",
    "CTPL insurance requirements",
    "CTPL insurance LTO",
    "third party liability insurance Philippines",
    `CTPL premium rates ${CURRENT_YEAR_STR}`,
    "CTPL insurance providers",
    "CTPL insurance coverage",
    "motor vehicle insurance Philippines",
    "CTPL for registration renewal",
    "CTPL insurance meaning",
  ],
  openGraph: {
    title: `CTPL Insurance Philippines ${CURRENT_YEAR_STR} — Complete Guide to Compulsory Third Party Liability`,
    description:
      "Everything you need to know about CTPL insurance in the Philippines: coverage, premiums, providers, claims, and why it's required for LTO registration.",
    url: "https://ltotrackeronline.ph/guides/ctpl-insurance-guide",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `CTPL Insurance Philippines ${CURRENT_YEAR_STR} — Complete Guide to Compulsory Third Party Liability`,
    description:
      "Complete guide to CTPL insurance: coverage, premiums, how to get it, providers, and LTO requirements.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/ctpl-insurance-guide",
  },
};

const headings = [
  { id: "what-is-ctpl", text: "What Is CTPL Insurance?", level: 2 },
  { id: "legal-basis", text: "Legal Basis and Requirements", level: 2 },
  { id: "coverage", text: "What CTPL Insurance Covers", level: 2 },
  { id: "what-not-covered", text: "What CTPL Does Not Cover", level: 2 },
  { id: "premiums", text: `CTPL Premium Rates ${CURRENT_YEAR_STR}`, level: 2 },
  { id: "how-to-get", text: "How to Get CTPL Insurance", level: 2 },
  { id: "providers", text: "Accredited CTPL Insurance Providers", level: 2 },
  { id: "ctpl-vs-comprehensive", text: "CTPL vs. Comprehensive Insurance", level: 2 },
  { id: "claims-process", text: "How to File a CTPL Claim", level: 2 },
  { id: "renewal-and-transfer", text: "CTPL for Renewal and Transfer of Ownership", level: 2 },
  { id: "common-mistakes", text: "Common Mistakes to Avoid", level: 2 },
  { id: "tips", text: "Tips for Vehicle Owners", level: 2 },
];

const faqs = [
  {
    question: "What is CTPL insurance and is it mandatory in the Philippines?",
    answer:
      "CTPL stands for Compulsory Third Party Liability insurance. Yes, it is mandatory in the Philippines under Republic Act No. 4136 (Land Transportation and Traffic Code) and Insurance Commission regulations. Every motor vehicle in the Philippines must have a valid CTPL policy before it can be registered or have its registration renewed at the LTO. The CTPL provides basic liability coverage for death, bodily injury, or property damage caused by the insured vehicle to third parties.",
  },
  {
    question: `How much does CTPL insurance cost in ${CURRENT_YEAR_STR}?`,
    answer: `CTPL insurance premiums in ${CURRENT_YEAR_STR} vary by vehicle type: private cars typically pay PHP 560 to PHP 610 per year, motorcycles and tricycles pay around PHP 350 to PHP 400, UV Express and taxis pay PHP 700 to PHP 900, trucks pay PHP 750 to PHP 1,100, and buses pay PHP 1,100 to PHP 1,700. These rates are regulated by the Insurance Commission and should be uniform across all accredited providers. Some providers may include minimal administrative fees.`,
  },
  {
    question: "What does CTPL insurance cover?",
    answer:
      "CTPL insurance covers liability for death or bodily injury caused by the insured vehicle to third parties (people outside the vehicle). The maximum coverage is PHP 100,000 per person for death, PHP 100,000 per person for bodily injury (depending on the severity), and PHP 100,000 per accident for all claims combined. It does not cover damage to the insured vehicle itself, injury to the driver, theft, fire, or other risks — those require separate comprehensive insurance.",
  },
  {
    question: "Can I buy CTPL insurance online?",
    answer:
      "Yes, several accredited insurance providers now offer online CTPL purchase. You can buy CTPL insurance through the websites or mobile apps of major providers such as Standard Insurance, Malayan Insurance, FPG Insurance, and others. You will need to provide your vehicle details (make, model, year, plate number) and personal information. The CTPL policy is typically issued electronically and can be printed or presented digitally at the LTO.",
  },
  {
    question: "Where can I buy CTPL insurance near LTO offices?",
    answer:
      "CTPL insurance is available from accredited insurance agents and brokers located near most LTO district and regional offices. Many of these agents set up booths or stalls within or adjacent to the LTO compound. You can also purchase CTPL from authorized banks, online insurance platforms, and directly from insurance company offices. Some PMVIC centers also offer CTPL insurance on-site for convenience.",
  },
  {
    question: "Is CTPL insurance the same as comprehensive car insurance?",
    answer:
      "No, CTPL insurance and comprehensive car insurance are very different. CTPL is a basic, government-mandated liability coverage that only covers third-party death and bodily injury up to PHP 100,000 per person. Comprehensive insurance is a voluntary product that provides much broader coverage, including damage to your own vehicle (collision, fire, theft), higher third-party liability limits, personal accident coverage for the driver and passengers, and other benefits. CTPL is the minimum required by law, while comprehensive insurance is recommended for better protection.",
  },
  {
    question: "What happens if I drive without CTPL insurance?",
    answer:
      "Driving without valid CTPL insurance is a violation of Philippine law. You cannot register or renew your vehicle registration at the LTO without a valid CTPL policy. If caught driving without CTPL during an enforcement operation, you may face fines and penalties. More importantly, if you cause an accident while uninsured, you will be personally liable for all death, injury, and damage claims from third parties, which can amount to millions of pesos in serious cases.",
  },
  {
    question: "How do I file a claim on CTPL insurance?",
    answer:
      "To file a CTPL claim, the injured third party (or their family in case of death) must notify the insurance company in writing within six months of the accident. Required documents include the police report or traffic accident investigation report, medical certificates or death certificate, hospital bills and receipts, the CTPL policy number and details, and IDs of the claimant. The insurance company will investigate the claim and, if approved, pay the benefits directly to the claimant up to the policy limits.",
  },
];

export default function CtplInsuranceGuide() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "CTPL Insurance Guide" },
        ]}
      />

      <ArticleSchema
        headline={`CTPL Insurance Philippines ${CURRENT_YEAR_STR} — Complete Guide to Compulsory Third Party Liability`}
        description="Complete guide to CTPL insurance in the Philippines. Coverage, premiums, providers, claims process, and LTO requirements."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/ctpl-insurance-guide"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "CTPL Insurance Guide",
            url: "https://ltotrackeronline.ph/guides/ctpl-insurance-guide",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            CTPL Insurance Philippines {CURRENT_YEAR_STR} — Complete Guide to Compulsory Third
            Party Liability
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>17 min read</span>
          </div>

          <section>
            <h2
              id="what-is-ctpl"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What Is CTPL Insurance?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every motor vehicle registered in the Philippines is required to
              carry Compulsory Third Party Liability (CTPL) insurance. At{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{", "}
              CTPL is one of the most frequently searched topics among
              Filipino motorists, and for good reason — without it, you cannot
              register your vehicle or renew your registration at the Land
              Transportation Office (LTO). This guide explains everything you
              need to know about CTPL insurance, from what it covers and how
              much it costs to where you can get it and how to file a claim.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              CTPL stands for{" "}
              <strong>Compulsory Third Party Liability</strong>. It is a type
              of motor vehicle insurance mandated by Philippine law that
              provides basic financial protection to third parties — people
              outside your vehicle — who are injured or killed as a result of
              an accident caused by your vehicle. The word
              &quot;compulsory&quot; means it is not optional; every motor
              vehicle owner must purchase CTPL coverage before their vehicle
              can legally operate on Philippine roads.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Think of CTPL as the absolute minimum insurance coverage that
              Philippine law requires for all motor vehicles. It does not
              protect the vehicle owner, the driver, or the vehicle itself — it
              only provides liability coverage for harm done to other people.
              Despite its limited scope, CTPL serves an essential social
              purpose: ensuring that accident victims receive at least some
              financial compensation regardless of the vehicle owner&apos;s
              ability to pay out of pocket.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many Filipino motorists confuse CTPL with comprehensive car
              insurance. They are very different products with different
              coverage, premiums, and purposes. We will explain the differences
              in detail later in this guide.
            </p>
          </section>

          <section>
            <h2
              id="legal-basis"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Legal Basis and Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CTPL insurance is mandated by several Philippine laws and
              regulations:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Republic Act No. 4136</strong> (Land Transportation and
                Traffic Code) — Requires all motor vehicles to be registered
                with the LTO and to carry minimum insurance coverage.
              </li>
              <li>
                <strong>Insurance Commission Circular Letters</strong> — The
                Insurance Commission (IC) issues circulars that set the minimum
                CTPL premium rates, coverage limits, and other regulatory
                requirements for insurance companies offering CTPL policies.
              </li>
              <li>
                <strong>Presidential Decree No. 612</strong> (Insurance Code of
                the Philippines) — Provides the overall legal framework for
                insurance regulation in the Philippines.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under these laws, the LTO is prohibited from registering or
              renewing the registration of any motor vehicle that does not have
              a valid CTPL policy. The CTPL policy must be issued by an
              insurance company accredited by the Insurance Commission and
              must be valid for the entire registration period.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about Insurance Commission regulations, visit
              the official{" "}
              <a
                href="https://insurance.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Insurance Commission website
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              id="coverage"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What CTPL Insurance Covers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CTPL insurance provides liability coverage for injuries or death
              caused by the insured vehicle to third parties. Here is a
              breakdown of the standard coverage:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Coverage Type
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Maximum Amount (PHP)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Death of a third party
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 100,000 per person
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Bodily injury to a third party
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Up to PHP 100,000 per person
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Maximum per accident (all claims)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 100,000 aggregate
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Emergency medical treatment
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 5,000 (immediate hospitalization)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              A &quot;third party&quot; in CTPL coverage refers to any person
              outside the insured vehicle who is injured or killed as a result
              of an accident involving the vehicle. This includes pedestrians
              hit by the vehicle, passengers and drivers of other vehicles
              involved in a collision, and bystanders who are affected by the
              accident.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The coverage is on a &quot;per person&quot; basis, meaning each
              injured third party can receive up to PHP 100,000 in benefits.
              However, the aggregate per-accident limit means that the total
              payout for all claims arising from a single accident is capped.
              In accidents involving multiple victims, the benefits may be
              shared proportionally among the claimants.
            </p>
          </section>

          <section>
            <h2
              id="what-not-covered"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What CTPL Does Not Cover
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is equally important to understand what CTPL insurance does
              <strong> not</strong> cover, as many vehicle owners have
              misconceptions about their protection:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Damage to your own vehicle.</strong> CTPL does not pay
                for repairs to the insured vehicle, regardless of who caused
                the accident. You need comprehensive insurance (also called
                &quot;acts of God&quot; or &quot;own damage&quot; coverage) for
                this.
              </li>
              <li>
                <strong>Injury or death of the vehicle&apos;s driver.</strong>{" "}
                The driver of the insured vehicle is not considered a third
                party and is therefore not covered by CTPL. Personal accident
                insurance or comprehensive insurance with passenger coverage
                is needed.
              </li>
              <li>
                <strong>Injury or death of passengers inside the insured
                vehicle.</strong> Passengers riding in the insured vehicle are
                generally not covered by CTPL, though some policies may have
                limited passenger coverage. Separate passenger personal
                accident insurance is recommended.
              </li>
              <li>
                <strong>Vehicle theft or carnapping.</strong> CTPL provides no
                coverage for vehicle theft. Comprehensive insurance with
                theft coverage is needed.
              </li>
              <li>
                <strong>Fire, flood, or natural disaster damage.</strong> CTPL
                does not cover damage to the vehicle from natural events.
                Comprehensive insurance covers these risks.
              </li>
              <li>
                <strong>Third-party property damage.</strong> Standard CTPL
                policies in the Philippines only cover death and bodily injury,
                not damage to other people&apos;s property (such as the other
                vehicle, fences, or buildings). Property damage liability
                requires additional coverage.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Because of these significant coverage gaps, most financial
              advisors strongly recommend purchasing comprehensive car
              insurance in addition to the mandatory CTPL, especially for newer
              or higher-value vehicles. The CTPL is only the bare minimum
              required by law.
            </p>
          </section>

          <section>
            <h2
              id="premiums"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              CTPL Premium Rates {CURRENT_YEAR_STR}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CTPL premiums are regulated by the Insurance Commission and are
              standardized across all accredited providers. The rates are based
              on the vehicle type and classification. Here are the approximate
              annual CTPL premiums for {CURRENT_YEAR_STR}:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Vehicle Type
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Annual Premium (PHP)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Motorcycle / Tricycle
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 350 - 400
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Private Car (sedan, hatchback)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 560 - 610
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Private SUV / Pickup
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 560 - 650
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      UV Express / Taxi / TNVS
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 700 - 900
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Light Truck (up to 3,930 kg)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 750 - 900
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Heavy Truck (over 3,930 kg)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 900 - 1,100
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Bus (tourist, provincial)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 1,100 - 1,700
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              These premiums include the basic CTPL coverage as mandated by
              law. Some providers may add small administrative or processing
              fees on top of the premium, but the core premium should be
              consistent across providers. Be wary of CTPL policies priced
              significantly below the regulated rates, as they may not be
              legitimate or may not be recognized by the LTO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For a comprehensive overview of all fees related to vehicle
              registration, including CTPL, see our{" "}
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
              id="how-to-get"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              How to Get CTPL Insurance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Getting CTPL insurance is straightforward, and you have several
              options for purchasing it:
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Option 1: Purchase near the LTO office
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The most common method for most Filipino vehicle owners. Insurance
              agents and brokers set up booths near LTO offices, offering
              instant CTPL issuance. Simply present your CR and OR, pay the
              premium, and receive your CTPL policy on the spot. This is
              convenient if you are already at the LTO for registration
              renewal.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Option 2: Buy online
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Several accredited insurance companies now offer online CTPL
              purchasing through their websites or mobile apps. You enter your
              vehicle details, pay online (via credit card, GCash, Maya, or bank
              transfer), and receive your CTPL policy electronically. This
              saves you the trip to an insurance office and lets you complete
              the purchase at your convenience.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Option 3: Through your car dealership
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When purchasing a new vehicle, the dealership typically includes
              the CTPL insurance as part of the registration package. The
              dealer arranges the CTPL policy on your behalf, usually through
              their partnered insurance provider. The cost is included in the
              total registration fees.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Option 4: From your comprehensive insurance provider
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have comprehensive car insurance, your insurance company
              can also issue the CTPL policy. Many comprehensive policies
              already include CTPL as a bundled component, so you may already
              have CTPL coverage without purchasing it separately. Check with
              your insurance provider to confirm.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Regardless of where you purchase CTPL, make sure the policy is
              issued by an{" "}
              <strong>Insurance Commission-accredited provider</strong> and
              that the policy details (vehicle information, coverage period,
              policy number) are accurate. An invalid or unrecognized CTPL
              policy will be rejected by the LTO.
            </p>
          </section>

          <section>
            <h2
              id="providers"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Accredited CTPL Insurance Providers
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Insurance Commission accredits dozens of insurance companies
              to issue CTPL policies in the Philippines. Here are some of the
              major and most widely available providers:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Standard Insurance Co., Inc.</strong> — One of the largest motor vehicle insurers in the Philippines with a nationwide network</li>
              <li><strong>Malayan Insurance Co., Inc.</strong> — A major player in both CTPL and comprehensive motor vehicle insurance</li>
              <li><strong>FPG Insurance Corporation</strong> — Well-known for affordable CTPL and vehicle insurance products</li>
              <li><strong>Philippine British Assurance Co., Inc.</strong> — Long-established insurer with wide agent network</li>
              <li><strong>Stronghold Insurance Co., Inc.</strong> — Offers CTPL with convenient online purchasing options</li>
              <li><strong>Pioneer Insurance & Surety Corporation</strong> — One of the oldest and largest non-life insurance companies</li>
              <li><strong>Charter Ping An Insurance Corporation</strong> — Major insurer with both walk-in and online services</li>
              <li><strong>PGA Sompo Insurance Corporation</strong> — Japanese-backed insurer with growing presence in the Philippines</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can verify whether an insurance company is accredited by
              checking the Insurance Commission&apos;s official list at{" "}
              <a
                href="https://insurance.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                insurance.gov.ph
              </a>
              . Only purchase CTPL from accredited companies to ensure your
              policy will be accepted by the LTO.
            </p>
          </section>

          <section>
            <h2
              id="ctpl-vs-comprehensive"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              CTPL vs. Comprehensive Insurance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many vehicle owners ask whether CTPL is enough or if they should
              also get comprehensive insurance. Here is a side-by-side
              comparison to help you decide:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Feature
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      CTPL Insurance
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Comprehensive Insurance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Mandatory?</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Yes (required by law)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No (voluntary)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Own vehicle damage</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not covered</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Covered</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Third-party bodily injury</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Up to PHP 100,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Higher limits available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Theft / carnapping</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not covered</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Covered</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Fire damage</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not covered</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Covered</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Flood / natural disaster</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not covered</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Usually covered (acts of God)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Annual cost</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 350 - 1,700</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000 - 80,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Our recommendation:</strong> If you drive a vehicle that
              has significant value (generally PHP 200,000 and above), getting
              comprehensive insurance in addition to CTPL is strongly
              recommended. The CTPL&apos;s PHP 100,000 coverage limit is
              extremely low given the potential costs of a serious accident,
              and CTPL offers zero protection for your own vehicle. For older
              or lower-value vehicles, CTPL alone may be acceptable if you are
              willing to accept the financial risk.
            </p>
          </section>

          <section>
            <h2
              id="claims-process"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              How to File a CTPL Claim
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are a third party injured in a vehicle accident, or if the
              family of a deceased third party needs to claim CTPL benefits,
              here is the process:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Obtain a police report.</strong> Report the accident to
                the nearest police station or traffic enforcement unit. Get an
                official police report or traffic accident investigation report.
                This document is essential for any CTPL claim.
              </li>
              <li>
                <strong>Identify the CTPL insurer.</strong> Get the at-fault
                vehicle&apos;s CTPL policy details, including the insurance
                company name and policy number. These should be in the
                vehicle&apos;s registration documents. For help with traffic
                violation records, check our{" "}
                <Link
                  href="/guides/traffic-violations-fines"
                  className="text-blue-600 hover:underline"
                >
                  traffic violations and fines guide
                </Link>
                .
              </li>
              <li>
                <strong>Notify the insurance company.</strong> Contact the
                insurance company in writing within six months of the accident.
                Provide the policy number, date and location of the accident,
                and a description of the injuries or death.
              </li>
              <li>
                <strong>Submit supporting documents.</strong> Provide the
                following to the insurance company: police report, medical
                certificates or doctor&apos;s report, hospital bills and
                receipts, death certificate (if applicable), claimant&apos;s
                valid ID, and proof of relationship to the deceased (if filing
                on behalf of a family member).
              </li>
              <li>
                <strong>Wait for investigation and approval.</strong> The
                insurance company will investigate the claim, verify the
                documents, and determine the benefit amount. This process
                typically takes 30 to 60 days.
              </li>
              <li>
                <strong>Receive payment.</strong> If the claim is approved, the
                insurance company will pay the benefits directly to the claimant
                via check or bank transfer, up to the policy limits.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Important: The six-month filing deadline is strict. If you do not
              notify the insurance company within six months of the accident,
              your claim may be denied. Act promptly to preserve your rights.
            </p>
          </section>

          <section>
            <h2
              id="renewal-and-transfer"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              CTPL for Renewal and Transfer of Ownership
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CTPL insurance plays a role in two major LTO transactions:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Registration renewal:</strong> When renewing your
              vehicle&apos;s annual registration, you must present a valid CTPL
              policy that covers the upcoming registration period. If your
              existing CTPL has expired or will expire during the new
              registration period, you must purchase a new one before the LTO
              will process your renewal. For the complete renewal process, see
              our{" "}
              <Link
                href="/guides/lto-renewal-requirements"
                className="text-blue-600 hover:underline"
              >
                LTO renewal requirements guide
              </Link>
              .
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Transfer of ownership:</strong> When a vehicle is
              transferred to a new owner, the buyer must obtain a new CTPL
              policy in their own name. The seller&apos;s existing CTPL policy
              cannot be transferred to the buyer. The new CTPL must be
              presented at the LTO along with the other transfer documents,
              including the{" "}
              <Link
                href="/guides/pnp-hpg-clearance"
                className="text-blue-600 hover:underline"
              >
                PNP-HPG clearance
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/pmvic-inspection-guide"
                className="text-blue-600 hover:underline"
              >
                PMVIC inspection certificate
              </Link>
              . For the full transfer process, see our{" "}
              <Link
                href="/guides/lto-transfer-ownership"
                className="text-blue-600 hover:underline"
              >
                transfer of ownership guide
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
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Buying CTPL from unaccredited sources.</strong> Some
                roadside vendors or online sellers offer suspiciously cheap
                CTPL policies. These may be counterfeit, expired, or issued by
                unaccredited companies. Always verify the insurance
                company&apos;s accreditation with the Insurance Commission. The
                LTO will reject policies from unaccredited providers.
              </li>
              <li>
                <strong>Assuming CTPL covers your own vehicle.</strong> The most
                common misconception among Filipino motorists. CTPL only covers
                third parties — not your vehicle, not you as the driver, and
                not your passengers. If you want broader protection, you need
                comprehensive insurance.
              </li>
              <li>
                <strong>Letting CTPL expire between registrations.</strong>{" "}
                Some vehicle owners let their CTPL lapse between registration
                periods, driving without coverage. This is illegal and exposes
                you to full personal liability in case of an accident.
              </li>
              <li>
                <strong>Not checking the policy details.</strong> Always verify
                that the CTPL policy accurately reflects your vehicle&apos;s
                plate number, engine number, chassis number, and other details.
                Incorrect information can void the policy or cause issues at
                the LTO.
              </li>
              <li>
                <strong>Thinking CTPL is sufficient protection.</strong> With a
                maximum coverage of PHP 100,000, CTPL is grossly insufficient
                for serious accidents. Medical bills for a single major injury
                can easily exceed PHP 1,000,000. Vehicle owners should consider
                comprehensive insurance for adequate protection.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips for Vehicle Owners
            </h2>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Buy CTPL early before your registration renewal
                date.</strong> Do not wait until the last day. Purchase your
                CTPL at least a week before you plan to visit the LTO for
                renewal to avoid the rush. Use our{" "}
                <Link
                  href="/renewal-calculator"
                  className="text-blue-600 hover:underline"
                >
                  renewal calculator
                </Link>{" "}
                to estimate your total registration costs.
              </li>
              <li>
                <strong>Keep your CTPL policy in the vehicle.</strong> Store a
                copy of your CTPL policy in the vehicle along with your CR and
                OR. If you are involved in an accident, having the policy
                readily available helps the third party file their claim
                promptly.
              </li>
              <li>
                <strong>Consider comprehensive insurance for newer
                vehicles.</strong> If your vehicle is worth more than PHP
                200,000, comprehensive insurance is a worthwhile investment.
                The annual premium is a fraction of what you would pay out of
                pocket for a major repair, theft, or accident.
              </li>
              <li>
                <strong>Verify your CTPL after purchase.</strong> After buying
                CTPL, verify the policy number with the insurance company to
                ensure it is legitimate and active. Some fake CTPL policies
                have been reported in the market.
              </li>
              <li>
                <strong>Know the claims process before you need it.</strong>{" "}
                Familiarize yourself with how CTPL claims work so you are
                prepared in case of an accident. Keep the insurance
                company&apos;s contact information accessible.
              </li>
            </ol>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/renewal-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Registration Renewal Calculator →
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
