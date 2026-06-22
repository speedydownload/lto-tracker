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
} from "@/components/seo/JsonLd";

const guide = getGuideBySlug("lto-fees-schedule")!;

export const metadata: Metadata = {
  title: `LTO Fees Schedule ${CURRENT_YEAR_STR} — Complete List of LTO Fees & Charges`,
  description: `Complete and updated LTO fees schedule for ${CURRENT_YEAR_STR}. Covers all Land Transportation Office fees including driver's license, vehicle registration, student permit, transfer of ownership, late penalties, and miscellaneous charges in Philippine Pesos.`,
  keywords: [
    `LTO fees ${CURRENT_YEAR_STR}`,
    "LTO fees schedule",
    "LTO registration fees",
    "LTO license fees",
    "LTO student permit fee",
    "LTO transfer of ownership fee",
    "LTO penalty fees",
    "LTO charges Philippines",
    "how much LTO registration",
    "LTO fees list",
    `LTO renewal fees ${CURRENT_YEAR_STR}`,
    "LTO late registration penalty",
  ],
  openGraph: {
    title: `LTO Fees Schedule ${CURRENT_YEAR_STR} — Complete List of LTO Fees & Charges`,
    description: `Complete and updated LTO fees schedule for ${CURRENT_YEAR_STR}. All driver's license, vehicle registration, student permit, transfer, and penalty fees in PHP.`,
    url: "https://ltotrackeronline.ph/guides/lto-fees-schedule",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `LTO Fees Schedule ${CURRENT_YEAR_STR} — Complete List of LTO Fees & Charges`,
    description: `Complete and updated LTO fees schedule for ${CURRENT_YEAR_STR}. All driver's license, vehicle registration, student permit, transfer, and penalty fees.`,
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-fees-schedule",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "drivers-license-fees", text: "Driver's License Fees", level: 2 },
  { id: "student-permit-fees", text: "Student Permit Fees", level: 2 },
  { id: "vehicle-registration-fees", text: "Vehicle Registration Fees", level: 2 },
  { id: "new-vehicle-registration", text: "New Vehicle Registration", level: 3 },
  { id: "annual-renewal-fees", text: "Annual Renewal of Registration", level: 3 },
  { id: "transfer-of-ownership-fees", text: "Transfer of Ownership Fees", level: 2 },
  { id: "late-registration-penalties", text: "Late Registration Penalties", level: 2 },
  { id: "miscellaneous-fees", text: "Miscellaneous LTO Fees", level: 2 },
  { id: "payment-methods", text: "Payment Methods", level: 2 },
  { id: "tips-to-save", text: "Tips to Save on LTO Fees", level: 2 },
  { id: "where-to-pay", text: "Where to Pay LTO Fees", level: 2 },
];

const faqs = [
  {
    question: `How much is the total cost of LTO vehicle registration renewal in ${CURRENT_YEAR_STR}?`,
    answer: `The total cost of LTO vehicle registration renewal in ${CURRENT_YEAR_STR} depends on your vehicle type and weight. For a typical private car, expect to pay approximately PHP 1,600 to PHP 3,500 in total fees. This includes the registration fee, computer fee, MVUC (Motor Vehicle User's Charge), sticker fee, and insurance (CTPL). Motorcycles cost significantly less, with total renewal fees ranging from PHP 600 to PHP 1,200. These amounts do not include late penalty fees, which are charged at 50% of the registration fee for each year of delay.`,
  },
  {
    question: "What is the LTO penalty for late vehicle registration?",
    answer:
      "The LTO imposes a late registration penalty (LRF) of 50% of the motor vehicle registration fee for each year or fraction of a year of delay. For example, if your registration fee is PHP 1,600 and you are 1 year late, the penalty would be PHP 800. If you are 2 years late, the penalty doubles to PHP 1,600. This penalty can accumulate quickly, which is why it is important to renew your registration on time. In addition to the monetary penalty, driving with an expired registration is a traffic violation that carries its own fine.",
  },
  {
    question: `How much does a student permit cost at the LTO in ${CURRENT_YEAR_STR}?`,
    answer: `A student permit at the LTO in ${CURRENT_YEAR_STR} costs approximately PHP 525.63 in total. This breaks down as follows: PHP 100.00 for the student permit fee, PHP 67.36 for the computer fee, PHP 258.27 for the permit card fee, and PHP 100.00 for the application fee. Additional costs include the medical exam fee (PHP 200 to PHP 500) and the Theoretical Driving Course (TDC) fee (approximately PHP 2,500 to PHP 5,000), which are paid separately to accredited providers.`,
  },
  {
    question: "Are LTO fees the same at all branches?",
    answer:
      "Yes, official LTO fees are standardized across all LTO district offices and branches nationwide. The fees are set by LTO administrative orders and apply uniformly regardless of location. However, some ancillary costs may vary, such as the medical exam fee (which depends on the accredited clinic), CDE or TDC fees (which depend on the accredited school), and CTPL insurance premiums (which depend on the insurance provider). Always ask for the official LTO receipt and verify the amounts match the published fee schedule.",
  },
  {
    question: "Can I pay LTO fees online?",
    answer:
      "Yes, the LTO has enabled online payment for certain transactions through the LTMS Portal (portal.lto.gov.ph). Online payment options include GCash, Maya, credit card, debit card, and bank transfer. However, not all LTO transactions are available for online payment. Driver's license renewal and some vehicle registration services can be initiated online, but you will still need to visit an LTO branch for biometrics capture or document verification. Convenience fees may apply for online payment channels.",
  },
  {
    question: "What is the MVUC and why do I have to pay it?",
    answer:
      "MVUC stands for Motor Vehicle User's Charge, a fee mandated by Republic Act No. 8794. It is an annual charge collected during vehicle registration renewal and is used to fund road maintenance, construction, and improvement projects across the Philippines. The MVUC amount depends on your vehicle's type, gross vehicle weight (GVW), and whether it is private or for-hire. For private cars, MVUC typically ranges from PHP 720 to PHP 3,600 annually. Motorcycles pay a lower MVUC. The MVUC is separate from the registration fee and is a significant component of the total renewal cost.",
  },
  {
    question: "How much does it cost to transfer vehicle ownership at the LTO?",
    answer:
      "The cost of transferring vehicle ownership at the LTO varies depending on the vehicle type and value. The main fees include the transfer fee (1% of the vehicle's current market value or zonal value, whichever is higher), computer fee (PHP 67.36), stenciling fee (PHP 50.00), and registration fee for the new owner. You will also need to pay for CTPL insurance, emission testing, and any applicable HPG clearance fees. For a typical used private car, the total transfer cost ranges from PHP 5,000 to PHP 15,000 depending on the vehicle's value.",
  },
  {
    question: "Is the CTPL insurance fee included in LTO registration fees?",
    answer:
      "No, the CTPL (Compulsory Third Party Liability) insurance is a separate payment from LTO registration fees, but it is required before you can complete your vehicle registration or renewal. CTPL premiums are set by the Insurance Commission and paid to an accredited insurance provider, not directly to the LTO. For private cars, CTPL insurance typically costs PHP 600 to PHP 900 annually. For motorcycles, it is approximately PHP 300 to PHP 400. You must present proof of CTPL coverage when processing your vehicle registration at the LTO.",
  },
];

export default function LtoFeesSchedule() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "LTO Fees Schedule" },
        ]}
      />

      <ArticleSchema
        headline={`LTO Fees Schedule ${CURRENT_YEAR_STR} — Complete List of LTO Fees & Charges`}
        description={`Complete and updated LTO fees schedule for ${CURRENT_YEAR_STR}. Covers all Land Transportation Office fees including driver's license, vehicle registration, student permit, transfer of ownership, late penalties, and miscellaneous charges.`}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/lto-fees-schedule"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "LTO Fees Schedule",
            url: "https://ltotrackeronline.ph/guides/lto-fees-schedule",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LTO Fees Schedule {CURRENT_YEAR_STR} — Complete List of LTO Fees &amp; Charges
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>18 min read</span>
          </div>

          <section>
            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}
              brings you the most comprehensive and up-to-date listing of all fees and charges imposed by the Land Transportation Office (LTO) in the Philippines for {CURRENT_YEAR_STR}. Whether you are renewing your driver&apos;s license, registering a brand-new vehicle, processing a transfer of ownership, or applying for a student permit, knowing the exact fees beforehand helps you prepare the right amount and avoid surprises at the cashier window.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              LTO fees are set through administrative orders and are standardized across all LTO district offices and satellite offices nationwide. This means the official fees you pay in Metro Manila are the same fees charged in Cebu, Davao, or any other LTO branch in the country. However, some ancillary costs such as medical exams, emission testing, CTPL insurance, and driving school fees are paid to accredited private providers and may vary in price.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide covers every category of LTO fees you are likely to encounter as a Filipino motorist in {CURRENT_YEAR_STR}. We have organized the fees into clear tables with actual PHP amounts so you can quickly find the transaction you need. All fee amounts in this guide are based on the latest LTO administrative orders and circulars as of {formatDate(guide.dateModified)}. For the most current official schedule, you may also refer to the{" "}
              <a href="https://lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">official LTO website</a>.
            </p>
          </section>

          <section>
            <h2 id="drivers-license-fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Driver&apos;s License Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Driver&apos;s license fees apply to new license applications, renewals, and license-related transactions. The introduction of 5-year and 10-year license validity periods under{" "}
              <a href="https://www.officialgazette.gov.ph/2017/08/03/republic-act-no-10930/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Republic Act No. 10930</a>{" "}
              has changed the fee structure accordingly. For a step-by-step renewal walkthrough, see our{" "}
              <Link href="/guides/lto-license-renewal" className="text-[#1e40af] font-medium hover:underline">LTO license renewal guide</Link>.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">
              Non-Professional Driver&apos;s License
            </h3>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">5-Year License</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">10-Year License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">License Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 250.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 500.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">License Card Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 268.27</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 536.54</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Estimated Total</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 585.63</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 1,103.90</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">
              Professional Driver&apos;s License
            </h3>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">5-Year License</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">10-Year License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">License Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 350.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 700.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">License Card Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 268.27</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 536.54</td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Estimated Total</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 685.63</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 1,303.90</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional costs not included above:</strong> Medical exam fee (PHP 200-500 paid to accredited clinic), Comprehensive Driver&apos;s Education/CDE (PHP 300-1,000 if required), and drug testing for professional license holders (included in medical exam or charged separately). For details on restriction codes that appear on your license, see our{" "}
              <Link href="/guides/lto-license-restriction-codes" className="text-[#1e40af] font-medium hover:underline">LTO license restriction codes guide</Link>.
            </p>

            <h3 className="text-lg font-bold text-gray-900 mt-6 mb-3">
              Other License-Related Fees
            </h3>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Transaction</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee (PHP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Duplicate License (replacement for lost/damaged)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 585.63</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">License Upgrade (Non-Pro to Pro)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 685.63 + exam fees</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Conductor&apos;s License (5-Year)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 535.63</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">International Driving Permit</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 493.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Foreign License Conversion</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 585.63 + exam fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 id="student-permit-fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Student Permit Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A student permit is the first step in the Philippine driver licensing process. It authorizes you to learn how to drive under the supervision of a licensed driver. The student permit is valid for one year from the date of issuance. For the complete application process, refer to our{" "}
              <Link href="/guides/lto-student-permit" className="text-[#1e40af] font-medium hover:underline">LTO student permit guide</Link>.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Amount (PHP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Student Permit Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Application Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Permit Card Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 258.27</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Total LTO Fees</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">PHP 525.63</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional costs for student permit applicants:</strong> Medical exam at an accredited clinic (PHP 200-500), Theoretical Driving Course/TDC at an accredited driving school (PHP 2,500-5,000), and the Practical Driving Course/PDC which you must complete before applying for a full license (PHP 3,000-7,000 depending on the school and transmission type). These amounts are paid to private accredited providers and not directly to the LTO.
            </p>
          </section>

          <section>
            <h2 id="vehicle-registration-fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Vehicle Registration Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vehicle registration fees are among the most common LTO transactions. Every motor vehicle operating on Philippine roads must be registered with the LTO and the registration must be renewed annually. The fees vary depending on whether you are registering a new vehicle or renewing an existing registration, and on the vehicle type and weight. For the complete registration process, see our{" "}
              <Link href="/guides/lto-vehicle-registration" className="text-[#1e40af] font-medium hover:underline">LTO vehicle registration guide</Link>.
            </p>

            <h3 id="new-vehicle-registration" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              New Vehicle Registration
            </h3>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Private Car</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Motorcycle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Registration Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,600.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 500.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Plate Number Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 450.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 220.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">MVUC (varies by GVW)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 720.00 - 3,600.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 180.00 - 360.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Sticker Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 150.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Stenciling Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 50.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 30.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Insurance (CTPL)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 600.00 - 900.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 300.00 - 400.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Emission Test Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 250.00 - 500.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 150.00 - 300.00</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Estimated Total</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 3,900 - 7,300</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 1,550 - 1,980</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              New vehicle registration is processed at the LTO district office that has jurisdiction over the owner&apos;s address. The dealership typically handles the initial registration process for brand-new vehicles, with the costs included in the overall purchase transaction. For second-hand vehicles bought from private sellers, registration is part of the transfer of ownership process.
            </p>

            <h3 id="annual-renewal-fees" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Annual Renewal of Registration
            </h3>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Private Car</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Motorcycle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Registration Renewal Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,600.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 500.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">MVUC</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 720.00 - 3,600.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 180.00 - 360.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Sticker Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 150.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Insurance (CTPL)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 600.00 - 900.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 300.00 - 400.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Emission Test (PMVIC or PEC)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 250.00 - 1,800.00</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 150.00 - 500.00</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Estimated Total</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 3,400 - 8,100</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 1,300 - 1,930</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vehicle registration must be renewed annually. The registration period is based on the last digit of your plate number, with each digit assigned to a specific month. For example, plates ending in 1 are due in January, plates ending in 2 are due in February, and so on. Vehicles with plates ending in 0 are due in October. For PMVIC inspection details, check our{" "}
              <Link href="/guides/pmvic-inspection-guide" className="text-[#1e40af] font-medium hover:underline">PMVIC inspection guide</Link>.
            </p>
          </section>

          <section>
            <h2 id="transfer-of-ownership-fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Transfer of Ownership Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When buying or selling a used vehicle, the transfer of ownership must be processed at the LTO to legally change the registered owner. This is one of the most important transactions to complete because the registered owner is legally liable for any violations, accidents, or encumbrances associated with the vehicle. For a complete walkthrough, see our{" "}
              <Link href="/guides/transfer-of-vehicle-ownership" className="text-[#1e40af] font-medium hover:underline">transfer of vehicle ownership guide</Link>.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Amount (PHP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Transfer Fee (1% of vehicle value)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Varies (min PHP 500.00)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Registration Fee (new owner)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,600.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Stenciling Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 50.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">CTPL Insurance</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 600.00 - 900.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Emission Test</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 250.00 - 1,800.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">HPG/PNP Clearance</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00 - 200.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">MVUC</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 720.00 - 3,600.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The transfer fee is calculated as 1% of the vehicle&apos;s current market value or zonal value, whichever is higher. For a car valued at PHP 500,000, the transfer fee alone would be PHP 5,000. The total cost including all associated fees for a typical private car transfer ranges from PHP 5,000 to PHP 15,000. Additional requirements include a notarized Deed of Sale, PNP-HPG clearance (to verify the vehicle is not stolen or involved in crimes), and an updated emissions test result. Check our{" "}
              <Link href="/guides/pnp-hpg-clearance" className="text-[#1e40af] font-medium hover:underline">PNP-HPG clearance guide</Link>{" "}
              for details on obtaining this document.
            </p>
          </section>

          <section>
            <h2 id="late-registration-penalties" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Late Registration Penalties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Failing to renew your vehicle registration on time results in a Late Registration Fee (LRF) that accumulates over time. The LTO imposes this penalty to encourage timely registration and compliance with traffic regulations.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Delay Period</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Penalty Rate</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Example (PHP 1,600 reg. fee)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">1 year late or fraction thereof</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">50% of registration fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 800.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">2 years late</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">100% of registration fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,600.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">3 years late</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">150% of registration fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,400.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">5+ years late</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">250%+ of registration fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 4,000.00+</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to the monetary penalty, driving with an expired registration is a traffic violation under RA 4136 (Land Transportation and Traffic Code) that carries a separate fine. The LTO and traffic enforcement officers can apprehend vehicles with expired registration, and the vehicle may be impounded until the registration is renewed and all penalties are settled. Use our{" "}
              <Link href="/penalty-calculator" className="text-[#1e40af] font-medium hover:underline">penalty calculator</Link>{" "}
              to estimate your total late fees before visiting the LTO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Late license renewal fees:</strong> For driver&apos;s license renewals, the penalty for late renewal varies. Generally, if you renew within a short period after expiration, the penalty is minimal. However, licenses expired for more than 2 years may require you to retake examinations, adding examination fees to the total cost. Avoid accumulating late fees by setting reminders well before your license or registration expiration date.
            </p>
          </section>

          <section>
            <h2 id="miscellaneous-fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Miscellaneous LTO Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond the major transactions listed above, the LTO charges fees for a variety of other services and documents. Here is a table of commonly requested miscellaneous LTO transactions:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Transaction / Document</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee (PHP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Certified True Copy of OR/CR</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Change of Engine/Chassis</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 250.00 + stenciling</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Change of Color / Body Modification</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 250.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Encumbrance/Mortgage Filing</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 200.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Cancellation of Encumbrance</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Duplicate Certificate of Registration (CR)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 300.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Duplicate Official Receipt (OR)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Special Plate Number Application</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000.00 - 250,000.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Vehicle Alarm / Siren Permit</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 500.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Franchise Application (PUV)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,500.00 - 5,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              For encumbrance-related inquiries, you can use our{" "}
              <Link href="/guides/how-to-check-vehicle-encumbrance" className="text-[#1e40af] font-medium hover:underline">guide on checking vehicle encumbrance</Link>{" "}
              to understand how to verify whether a vehicle has an existing lien or mortgage before purchase. Special plate numbers (also known as vanity plates) have a wide fee range depending on the combination, with highly desirable combinations commanding premium prices.
            </p>
          </section>

          <section>
            <h2 id="payment-methods" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Payment Methods
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO accepts several payment methods for fees and charges. The available payment channels depend on whether you are processing your transaction in person at a branch or online through the LTMS Portal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>In-person at LTO branches:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Cash</strong> — Accepted at all LTO branches. This remains the most commonly used payment method. Bring exact or close-to-exact change to speed up the transaction.</li>
              <li><strong>Debit card</strong> — Selected LTO branches accept debit card payments through POS terminals. Check with your specific branch beforehand.</li>
              <li><strong>GCash / Maya</strong> — Many LTO branches have adopted QR code-based payments. Look for the GCash or Maya QR code at the cashier window.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Online through the LTMS Portal:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>GCash</strong> — Pay directly from your GCash wallet</li>
              <li><strong>Maya</strong> — Pay using your Maya account</li>
              <li><strong>Credit / Debit card</strong> — Visa and Mastercard accepted</li>
              <li><strong>Bank transfer</strong> — Transfer from select partner banks (BDO, BPI, Metrobank, and others)</li>
              <li><strong>Over-the-counter</strong> — Some transactions allow you to generate a payment reference number for payment at partner banks or payment centers</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Note:</strong> Convenience fees may apply for online and digital payment channels. These are typically small (PHP 10-25) but are charged on top of the official LTO fees. Always request and keep your official receipt regardless of the payment method used. For online payments, save a screenshot or printout of your payment confirmation as proof of transaction.
            </p>
          </section>

          <section>
            <h2 id="tips-to-save" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Tips to Save on LTO Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While official LTO fees are fixed and cannot be negotiated, there are several strategies to minimize your overall spending on LTO transactions:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li><strong>Renew on time, every time.</strong> Late registration penalties can add 50% or more to your total fees for each year of delay. Set calendar reminders at least 30 days before your registration or license expiration date.</li>
              <li><strong>Consider the 10-year license.</strong> If you qualify for the 10-year driver&apos;s license (clean driving record with no violations), the higher upfront cost saves you from paying for a second renewal cycle, medical exam, and CDE within that 10-year period.</li>
              <li><strong>Compare medical exam and CDE prices.</strong> Accredited clinics and CDE providers have varying prices. Shop around for the best rates, but always verify that the provider is LTO-accredited before paying.</li>
              <li><strong>Process multiple transactions at once.</strong> If your license renewal and vehicle registration are due around the same time, consider processing them on the same day to save on transportation costs.</li>
              <li><strong>Avoid fixers.</strong> Fixers at LTO branches charge significant markups (sometimes double or triple the official fees) for their &quot;services.&quot; All LTO transactions can be completed without a fixer by following the standard process. The LTO has a zero-fixer policy, and using fixers is illegal under the{" "}
                <a href="https://www.officialgazette.gov.ph/2007/06/15/republic-act-no-9485/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Anti-Red Tape Act (RA 9485)</a>.
              </li>
              <li><strong>Use the LTMS Portal.</strong> Online processing through the{" "}
                <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LTMS Portal</a>{" "}
                can save time and reduce the risk of being approached by fixers. It also allows you to review your fees before committing to payment.
              </li>
              <li><strong>Maintain a clean driving record.</strong> Traffic violations not only carry immediate fines (see our{" "}
                <Link href="/guides/traffic-violations-fines" className="text-[#1e40af] font-medium hover:underline">traffic violations and fines guide</Link>) but can also disqualify you from the 10-year license option and potentially increase your CDE requirements.
              </li>
            </ul>
          </section>

          <section>
            <h2 id="where-to-pay" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Where to Pay LTO Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LTO fees can be paid at any LTO district office, satellite office, or licensing center in the Philippines. The LTO has over 300 offices nationwide, and you can find the one nearest to you using our{" "}
              <Link href="/branches" className="text-[#1e40af] font-medium hover:underline">LTO branch finder</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important reminders when paying fees:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Always pay fees directly at the official cashier window. Never hand money to individuals claiming to &quot;process&quot; your transaction for you.</li>
              <li>Request an official receipt (OR) for every payment. The OR serves as your proof of payment and is legally required for all government transactions.</li>
              <li>Verify the amounts on your receipt against the published fee schedule. If there are discrepancies, raise them immediately with the branch supervisor.</li>
              <li>Keep your receipts for at least 3 years. They may be needed for future reference, disputes, or as proof of prior registration.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO has also partnered with select e-payment platforms to offer more convenient payment options. These partnerships are continually expanding, so check the LTO website or the LTMS Portal for the latest available payment channels. If you are paying for a traffic violation settlement, see our{" "}
              <Link href="/guides/how-to-settle-traffic-violations" className="text-[#1e40af] font-medium hover:underline">how to settle traffic violations guide</Link>{" "}
              for the specific process.
            </p>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Related Tools</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/renewal-calculator" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO Renewal Calculator →
              </Link>
              <Link href="/penalty-calculator" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO Penalty Calculator →
              </Link>
              <Link href="/lto-plate-tracker" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO Plate Number Tracker →
              </Link>
              <Link href="/branches" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
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
