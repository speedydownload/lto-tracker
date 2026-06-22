import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR, CURRENT_YEAR_STR } from "@/lib/constants";
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

const guide = getGuideBySlug("lto-license-renewal")!;

export const metadata: Metadata = {
  title: `How to Renew Your LTO Driver's License ${CURRENT_YEAR_STR} — Step by Step`,
  description: `Step-by-step guide to renewing your LTO driver's license in ${CURRENT_YEAR_STR}. Covers requirements, fees, medical exam, online renewal via LTMS Portal, 5-year and 10-year license validity, and tips for Filipino motorists.`,
  keywords: [
    "LTO license renewal",
    "how to renew driver's license LTO",
    `LTO license renewal requirements ${CURRENT_YEAR_STR}`,
    "driver's license renewal Philippines",
    "LTO license renewal fees",
    "LTMS license renewal",
    "LTO license renewal online",
    "5 year driver's license Philippines",
    "10 year driver's license Philippines",
    "LTO license renewal process",
  ],
  openGraph: {
    title: `How to Renew Your LTO Driver's License ${CURRENT_YEAR_STR} — Step by Step`,
    description:
      "Complete step-by-step guide to renewing your LTO driver's license in the Philippines. Requirements, fees, online process, and expert tips.",
    url: "https://ltotrackeronline.ph/guides/lto-license-renewal",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Renew Your LTO Driver's License ${CURRENT_YEAR_STR} — Step by Step`,
    description:
      "Complete step-by-step guide to renewing your LTO driver's license in the Philippines.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-license-renewal",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "license-validity", text: "Understanding License Validity (5-Year and 10-Year)", level: 2 },
  { id: "when-to-renew", text: "When to Renew Your License", level: 2 },
  { id: "requirements", text: "Complete Renewal Requirements", level: 2 },
  { id: "medical-exam", text: "Medical Examination for Renewal", level: 2 },
  { id: "comprehensive-driving-exam", text: "Comprehensive Driver's Education (CDE)", level: 2 },
  { id: "renewal-fees", text: "License Renewal Fees", level: 2 },
  { id: "step-by-step-process", text: "Step-by-Step Renewal Process", level: 2 },
  { id: "online-renewal", text: "Online Renewal via LTMS Portal", level: 3 },
  { id: "branch-renewal", text: "In-Person Renewal at LTO Branch", level: 3 },
  { id: "late-renewal", text: "Renewing an Expired License", level: 2 },
  { id: "license-upgrade", text: "Upgrading Your License During Renewal", level: 2 },
  { id: "special-situations", text: "Special Situations", level: 2 },
  { id: "tips", text: "Tips for a Hassle-Free Renewal", level: 2 },
];

const faqs = [
  {
    question: "How long before expiration can I renew my LTO driver's license?",
    answer:
      "You can renew your LTO driver's license up to 60 days before the expiration date printed on your license card. The LTO encourages early renewal to avoid the rush of last-minute renewals. Your new license validity period will start from the expiration date of your current license, not from the date of renewal, so you will not lose any remaining validity days by renewing early.",
  },
  {
    question: `How much does it cost to renew a driver's license at the LTO in ${CURRENT_YEAR_STR}?`,
    answer:
      "The cost of renewing a driver's license depends on the validity period. For a 5-year non-professional license, the total fees are approximately PHP 585 (including the license fee, computer fee, and other charges). For a 10-year license (available to those with a clean record), the fees are approximately PHP 1,100. These amounts do not include the medical exam fee (PHP 200-500) and the CDE fee (if applicable), which are paid separately.",
  },
  {
    question: "Can I renew my LTO driver's license at any branch?",
    answer:
      "Yes, you can renew your driver's license at any LTO district office or licensing center in the Philippines. Unlike vehicle registration, which is tied to a specific branch, license renewal can be processed at whichever LTO branch is most convenient for you. This includes branches in a different city or region from where you originally obtained your license.",
  },
  {
    question: "What happens if my driver's license has been expired for more than 2 years?",
    answer:
      "If your driver's license has been expired for more than 2 years but less than 10 years, you can still renew it, but you may need to retake the written and practical driving examinations. The LTO treats long-expired licenses differently, and additional requirements or tests may be imposed at the evaluator's discretion. If your license has been expired for more than 10 years, you may need to apply for a new license starting from the student permit stage.",
  },
  {
    question: "Do I need to take a drug test for license renewal?",
    answer:
      "Drug testing may be included as part of the medical examination for driver's license renewal. The LTO has implemented drug testing requirements for certain categories of drivers, particularly professional license holders. The medical clinic accredited by the LTO will determine the specific tests required based on your license type and applicable regulations at the time of renewal.",
  },
  {
    question: "What is the 10-year driver's license and who qualifies?",
    answer:
      "The 10-year driver's license was introduced under Republic Act No. 10930. It is available to drivers who have maintained a clean driving record with no traffic violations, suspensions, or revocations during the preceding 5-year license period. The 10-year license costs more upfront but saves time and money over the long term by eliminating the need for mid-period renewal. The LTO system automatically determines eligibility when you apply for renewal.",
  },
  {
    question: "Can I change my name or address during license renewal?",
    answer:
      "Yes, you can update your personal information, including name changes (due to marriage, for example) and address changes, during the license renewal process. For name changes, you will need to present supporting documents such as a PSA-issued marriage certificate or court order for legal name change. For address changes, you will need a proof of your new address such as a recent utility bill, barangay certificate, or government-issued ID showing the new address.",
  },
  {
    question: "What if I lost my license before the renewal date?",
    answer:
      "If you have lost your driver's license before it is due for renewal, you should apply for a replacement license (duplicate copy) at any LTO branch. You will need to file an affidavit of loss, present a valid government-issued ID, and pay the replacement fee. If your license is close to expiration, you can opt to process the replacement and renewal simultaneously to save time.",
  },
];

export default function LtoLicenseRenewal() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "LTO License Renewal" },
        ]}
      />

      <ArticleSchema
        headline={`How to Renew Your LTO Driver's License ${CURRENT_YEAR_STR} — Step by Step`}
        description={`Step-by-step guide to renewing your LTO driver's license in ${CURRENT_YEAR_STR}. Covers requirements, fees, medical exam, online renewal, and tips for Filipino motorists.`}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/lto-license-renewal"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "LTO License Renewal",
            url: "https://ltotrackeronline.ph/guides/lto-license-renewal",
          },
        ]}
      />
      <HowToSchema
        name="How to Renew Your LTO Driver's License"
        description="Step-by-step guide to renewing your LTO driver's license at a branch or online through the LTMS Portal."
        steps={[
          {
            name: "Check Your License Expiration Date",
            text: "Check the expiration date on your current license card. You can renew up to 60 days before expiration.",
          },
          {
            name: "Complete the Medical Exam",
            text: "Visit an LTO-accredited medical clinic and obtain a medical certificate with drug test results if required.",
          },
          {
            name: "Complete the CDE (if required)",
            text: "Attend a Comprehensive Driver's Education seminar at an accredited provider if your license renewal requires it.",
          },
          {
            name: "Apply Online or Visit an LTO Branch",
            text: "Apply through the LTMS Portal at portal.lto.gov.ph or visit any LTO district office with your complete requirements.",
          },
          {
            name: "Submit Documents and Pay Fees",
            text: "Present your current license, medical certificate, CDE certificate, and valid ID. Pay the renewal fees at the cashier.",
          },
          {
            name: "Receive Your New License",
            text: "Have your photo and biometrics captured, then receive your new driver's license card with updated validity dates.",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Renew Your LTO Driver&apos;s License {CURRENT_YEAR_STR} — Step by Step
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>15 min read</span>
          </div>

          <section>
            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}guides you through renewing your driver&apos;s license at the Land Transportation Office (LTO), a process that every Filipino motorist must go through periodically. Whether your license is valid for 5 years or 10 years, the renewal process requires preparation, the right documents, and a visit to an LTO branch or the use of the LTMS Portal for online processing. Driving with an expired license is a traffic violation that carries a fine and can complicate insurance claims in case of an accident.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The license renewal process has evolved significantly with the passage of Republic Act No. 10930, which introduced the 5-year and 10-year license validity options. The LTO has also implemented the Comprehensive Driver&apos;s Education (CDE) requirement and improved its online services through the LTMS Portal to make the renewal process more convenient. Despite these improvements, many motorists still find the process confusing, especially with the varying requirements for different license types and situations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide provides a complete, updated walkthrough of the license renewal process for {CURRENT_YEAR_STR}. It covers every requirement, fee, and step you need to follow, whether you hold a non-professional or professional license, whether you plan to renew in person or online, and whether your license is currently valid or has already expired.
            </p>
          </section>

          <section>
            <h2 id="license-validity" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Understanding License Validity (5-Year and 10-Year)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under Republic Act No. 10930, which amended RA 4136, the LTO now issues driver&apos;s licenses with two possible validity periods:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>5-year driver&apos;s license:</strong> This is the standard validity period for all new and renewed licenses. Both non-professional and professional licenses are issued with a 5-year validity. The 5-year license replaced the previous 3-year license, giving motorists more time between renewals and reducing the frequency of LTO visits.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>10-year driver&apos;s license:</strong> This extended validity license is available to drivers who have maintained a clean driving record. To qualify for the 10-year license, you must have had no traffic violations, license suspensions, or license revocations during your most recent 5-year license period. The LTO system automatically checks your eligibility when you apply for renewal. If you qualify, you will be given the option to pay the higher fee for the 10-year license.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The 10-year license offers significant long-term savings. While the upfront cost is higher than the 5-year license, you save by not having to pay for a mid-period renewal, medical exam, and CDE. You also save the time and effort of an additional LTO visit. For motorists with clean records, the 10-year option is generally the more practical and economical choice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your license expiration date is printed on the front of your license card. The license expires on your birth month, making it easy to remember. For example, if your birthday is in March and you renewed your 5-year license in {CURRENT_YEAR_STR}, it will expire in March {CURRENT_YEAR + 5}.
            </p>
          </section>

          <section>
            <h2 id="when-to-renew" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              When to Renew Your License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO allows you to renew your driver&apos;s license starting <strong>60 days before the expiration date</strong>. Your license expires on the last day of your birth month. For example, if your birthday is June 15, your license is valid until June 30 of the expiration year.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Renewing early is strongly recommended. The benefits of early renewal include avoiding the rush during the last week before expiration, having buffer time in case of unexpected issues with documents or the LTMS system, and ensuring continuous validity of your license without any gap. When you renew early, your new license&apos;s validity period starts from the expiration date of your current license, not from the date of renewal. This means you do not lose any remaining valid days by renewing ahead of time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your license expires and you do not renew it immediately, you can still renew it at any time, but driving with an expired license is a violation. The consequences become more significant the longer you wait. Licenses expired for less than 2 years can typically be renewed through the standard process. Licenses expired for 2 to 10 years may require additional testing. Licenses expired for more than 10 years may require you to start the licensing process from scratch.
            </p>
          </section>

          <section>
            <h2 id="requirements" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Complete Renewal Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gather the following documents before heading to the LTO or starting your online renewal. For a printable document list, see our <Link href="/guides/lto-renewal-requirements" className="text-[#1e40af] hover:underline">renewal requirements checklist</Link>.
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Current driver&apos;s license card</strong> — Your existing license, whether valid or recently expired. If you have lost your license, you will need an affidavit of loss and a valid government-issued ID.
              </li>
              <li>
                <strong>Medical certificate</strong> — From an LTO-accredited medical clinic. The medical exam checks visual acuity, color vision, hearing, and general physical fitness. Drug testing may be included for professional license holders.
              </li>
              <li>
                <strong>CDE certificate (if required)</strong> — A certificate of completion for the Comprehensive Driver&apos;s Education seminar. The CDE requirement applies to certain renewal scenarios as determined by LTO regulations.
              </li>
              <li>
                <strong>Valid government-issued ID</strong> — At least one valid ID for identity verification. Acceptable IDs include passport, UMID, PhilID, voter&apos;s ID, or postal ID.
              </li>
              <li>
                <strong>Duly accomplished application form</strong> — Available at the LTO branch or through the LTMS Portal online.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional requirements for specific situations:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Name change:</strong> PSA-issued marriage certificate or court order for legal name change</li>
              <li><strong>Address change:</strong> Proof of new address (utility bill, barangay certificate, or updated government ID)</li>
              <li><strong>License upgrade:</strong> Additional requirements for upgrading from non-professional to professional (see License Upgrade section below)</li>
              <li><strong>Expired for more than 2 years:</strong> May require written and/or practical examination</li>
              <li><strong>Foreign license conversion:</strong> Original foreign license, embassy authentication, and additional LTO-specific requirements</li>
            </ul>
          </section>

          <section>
            <h2 id="medical-exam" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Medical Examination for Renewal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A medical examination is required for every driver&apos;s license renewal. The exam ensures that you remain physically and mentally fit to operate a motor vehicle. The exam must be conducted at an LTO-accredited medical clinic, many of which are conveniently located at or near LTO district offices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The medical examination for renewal includes the same tests as the student permit medical exam: visual acuity, color vision, hearing, and general physical assessment. For professional license renewals, additional tests may be required, including a more thorough drug screening.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The medical exam fee ranges from PHP 200 to PHP 500 depending on the clinic and the tests performed. The medical certificate is valid for a limited time, so complete your medical exam close to your planned renewal date. If you wear prescription eyeglasses or contact lenses, bring them to the exam, as they will be needed for the visual acuity test.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your medical exam reveals conditions that affect your ability to drive safely, the physician may recommend restrictions on your license. Common restrictions include the requirement to wear corrective lenses while driving, automatic transmission only restrictions, or daylight driving only restrictions. These restrictions are noted on your license card using standardized <Link href="/guides/lto-license-restriction-codes" className="text-[#1e40af] hover:underline">restriction codes</Link>.
            </p>
          </section>

          <section>
            <h2 id="comprehensive-driving-exam" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Comprehensive Driver&apos;s Education (CDE)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Comprehensive Driver&apos;s Education (CDE) is a refresher seminar required for certain driver&apos;s license renewals. The CDE serves as a continuing education program for licensed drivers, covering updates to traffic laws, defensive driving techniques, road safety awareness, and responsible driving behavior.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The CDE requirement is determined by the LTO based on your driving record and the circumstances of your renewal. Drivers with traffic violations on their record are more likely to be required to complete the CDE. The seminar is conducted by LTO-accredited providers and typically takes 4 to 8 hours to complete.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The CDE fee varies by provider but typically ranges from PHP 300 to PHP 1,000. Some providers offer the CDE seminar online, making it more convenient for busy professionals. Upon completion, you will receive a CDE certificate that must be presented during your license renewal at the LTO.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Even if the CDE is not required for your specific renewal, attending one can be beneficial as a refresher on updated traffic laws and driving best practices. The LTO periodically updates its rules and regulations, and the CDE helps ensure that all drivers are aware of the latest requirements and changes.
            </p>
          </section>

          <section>
            <h2 id="renewal-fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              License Renewal Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The fees for driver&apos;s license renewal vary based on the license type and validity period. Here is a breakdown:
            </p>
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
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Estimated Total (LTO fees)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 585</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">~PHP 1,100</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              These fees are for the LTO processing only. Additional costs include the medical exam (PHP 200-500), CDE seminar (PHP 300-1,000 if required), and transportation to the LTO branch. For a full breakdown of every LTO charge, refer to our <Link href="/guides/lto-fees-schedule" className="text-[#1e40af] hover:underline">LTO fees schedule</Link>. Professional license renewal fees are slightly higher than non-professional license fees. Late renewal penalties may also apply if your license has already expired.
            </p>
          </section>

          <section>
            <h2 id="step-by-step-process" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Step-by-Step Renewal Process
            </h2>

            <h3 id="online-renewal" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Online Renewal via LTMS Portal
            </h3>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Log in to the LTMS Portal.</strong> Visit{" "}
                <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">portal.lto.gov.ph</a>{" "}
                and log in to your account. If you do not have an account, create one using your email address and mobile number.
              </li>
              <li>
                <strong>Select License Renewal.</strong> Navigate to the Driver&apos;s License section and select &quot;License Renewal.&quot; The system will pull up your license details and check for any violations or pending issues.
              </li>
              <li>
                <strong>Enter medical certificate details.</strong> Input the details from your medical certificate, including the physician&apos;s license number and the clinic&apos;s accreditation number. Some clinics transmit this information directly to the LTMS.
              </li>
              <li>
                <strong>Choose license validity (5 or 10 years).</strong> If you are eligible for the 10-year license, the system will present this option. Select your preferred validity period and review the corresponding fees.
              </li>
              <li>
                <strong>Pay online.</strong> Complete the payment through the available online channels: GCash, Maya, bank transfer, credit card, or debit card. Save your payment confirmation.
              </li>
              <li>
                <strong>Schedule a branch visit for biometrics.</strong> Even with online renewal, you need to visit an LTO branch for photo and fingerprint capture. Schedule an appointment at your preferred branch.
              </li>
              <li>
                <strong>Visit the branch for biometrics and card release.</strong> Go to the branch on your appointment date. Present your confirmation, current license, and ID. Have your biometrics taken and receive your new license card.
              </li>
            </ol>

            <h3 id="branch-renewal" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              In-Person Renewal at LTO Branch
            </h3>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Complete prerequisite requirements.</strong> Get your medical exam and CDE certificate (if required) before visiting the LTO. Having these ready saves significant time.
              </li>
              <li>
                <strong>Visit any LTO district office.</strong> Unlike vehicle registration, license renewal is not tied to a specific branch. Choose the branch that is most convenient for you.
              </li>
              <li>
                <strong>Get a queue number.</strong> Upon arrival, obtain a queue number at the information desk. Specify that you are there for a driver&apos;s license renewal.
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong> When your number is called, present your current license, medical certificate, CDE certificate (if applicable), and valid ID. The evaluator will check your documents and records.
              </li>
              <li>
                <strong>Pay the renewal fees.</strong> Proceed to the cashier and pay the total fees. Keep your receipt.
              </li>
              <li>
                <strong>Biometrics capture.</strong> Go to the biometrics station for your photo and fingerprint capture. These will appear on your new license card.
              </li>
              <li>
                <strong>Wait for your new license.</strong> After biometrics, wait for your new license card to be printed and released. This typically takes 15 to 45 minutes depending on the branch&apos;s volume.
              </li>
              <li>
                <strong>Receive and verify your license.</strong> Check all details on your new license card: name, address, birthdate, license number, validity dates, restriction codes, and photo. Report any errors immediately before leaving the branch.
              </li>
            </ol>
          </section>

          <section>
            <h2 id="late-renewal" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Renewing an Expired License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your driver&apos;s license has already expired, you can still renew it, but the process may be more involved depending on how long it has been expired:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Expired for less than 2 years:</strong> The renewal process is essentially the same as a regular renewal. You will need the same documents (medical certificate, CDE if required, current or expired license, and valid ID) and will pay the standard renewal fees plus a late renewal penalty.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Expired for 2 to 10 years:</strong> In addition to the standard renewal requirements, the LTO may require you to retake the written examination to verify that your knowledge of traffic laws is current. Some branches may also require a practical driving test. The evaluator at the LTO branch will determine the specific additional requirements based on how long your license has been expired.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Expired for more than 10 years:</strong> Your license is considered lapsed beyond recovery, and you will likely need to start the licensing process from the beginning, starting with a student permit, then the TDC, practical driving course, and a full license application. This is the most time-consuming and expensive scenario, so it is important to renew your license on time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              While your license is expired, driving is a traffic violation. If you are caught driving with an expired license, you face a fine and the risk of your vehicle being impounded. Settle your license renewal as soon as possible to avoid these consequences.
            </p>
          </section>

          <section>
            <h2 id="license-upgrade" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Upgrading Your License During Renewal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The renewal period is an opportune time to upgrade your license from non-professional to professional, or to add new restriction codes for additional vehicle types. Here are the common upgrade paths:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Non-professional to professional license:</strong> To upgrade to a professional license, you must pass both the written and practical driving examinations for the professional category. Additional requirements include completion of a Practical Driving Course (PDC) specific to professional driving, a more comprehensive medical exam, and a drug test. Professional license holders can drive for-hire vehicles, heavy commercial vehicles, and are authorized for commercial driving activities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Adding restriction codes:</strong> You can add new restriction codes to your license during renewal. For example, if you have a license restricted to cars (RC2) and want to add motorcycle (RC1), you will need to pass the practical driving test for motorcycles. This allows you to legally operate the additional vehicle types covered by the new restriction codes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The upgrade can be processed simultaneously with the renewal, saving you from making separate LTO visits. Inform the evaluator at the beginning of the process that you wish to upgrade your license, and they will guide you through the additional requirements and tests.
            </p>
          </section>

          <section>
            <h2 id="special-situations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Special Situations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Renewal for overseas Filipinos (OFWs):</strong> If you are working abroad and your license is about to expire, you can renew it at the nearest Philippine embassy or consulate that offers LTO services. Not all embassies offer this service, so check with your local embassy first. Alternatively, you can authorize a representative in the Philippines to process certain aspects of the renewal, though biometrics must be done in person.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Senior citizens:</strong> Licensed drivers who are senior citizens (60 years and above) are entitled to priority processing at LTO branches, as mandated by the Expanded Senior Citizens Act. Senior citizen lanes or priority numbers are available at most LTO offices. The medical exam may include additional assessments for age-related conditions that could affect driving ability.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Persons with disabilities (PWDs):</strong> PWDs are also entitled to priority processing at LTO branches. If you have a disability that affects your driving, the LTO may issue your license with specific restrictions (such as automatic transmission only or modified vehicle controls). The medical exam will assess your ability to drive safely with any necessary accommodations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>License with unsettled violations:</strong> If you have unresolved traffic violations in the LTO system, these must be settled before the renewal can be processed. The evaluator will inform you of any pending violations and the corresponding fines. You can <Link href="/guides/how-to-settle-traffic-violations" className="text-[#1e40af] hover:underline">settle traffic violations</Link> at the LTO branch during your renewal visit.
            </p>
          </section>

          <section>
            <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Tips for a Hassle-Free Renewal
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Renew early.</strong> Start the process at least 30 days before your license expires. This gives you time to complete the medical exam, CDE, and handle any unexpected issues.</li>
              <li><strong>Use the LTMS Portal.</strong> Online scheduling reduces wait times at the branch. Even if you cannot complete the full renewal online, booking an appointment avoids the walk-in queue.</li>
              <li><strong>Arrive before 8:00 AM.</strong> LTO branches are busiest between 10 AM and 2 PM. Early arrival means shorter queues and faster processing.</li>
              <li><strong>Check for violations online.</strong> Log in to the LTMS Portal before your visit to see if there are any recorded violations on your license. Settle these in advance to avoid delays during renewal.</li>
              <li><strong>Wear a collared shirt.</strong> Your license photo is your official identification for 5 or 10 years. Dress neatly and avoid accessories that may obscure your face.</li>
              <li><strong>Bring extra IDs.</strong> While only one ID is technically required, having a backup prevents delays if one ID is questioned.</li>
              <li><strong>Consider the 10-year option.</strong> If you qualify for the 10-year license, the higher upfront cost is offset by not having to renew for a decade. Evaluate the long-term savings and convenience.</li>
              <li><strong>Keep your old license.</strong> Some LTO branches retain your old license during renewal, but if possible, ask if you can keep it as a backup ID until your new license is released.</li>
            </ul>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Related Tools</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/lto-license-tracker" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO License Status Tracker →
              </Link>
              <Link href="/branches" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                Find Your LTO Branch →
              </Link>
              <Link href="/penalty-calculator" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO Penalty Calculator →
              </Link>
              <Link href="/guides/lto-student-permit" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                Student Permit Guide →
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
