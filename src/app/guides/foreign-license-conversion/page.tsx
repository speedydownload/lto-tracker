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

const guide = getGuideBySlug("foreign-license-conversion")!;

export const metadata: Metadata = {
  title: `How to Convert a Foreign Driver's License to Philippine LTO License ${CURRENT_YEAR_STR}`,
  description: `Complete guide to converting a foreign driver's license to a Philippine LTO license in ${CURRENT_YEAR_STR}. Covers eligibility, country agreements, requirements, fees, exam exemptions, and step-by-step process at the LTO.`,
  keywords: [
    "convert foreign license Philippines",
    "foreign driver's license LTO",
    "foreign license to Philippine license",
    "LTO license conversion",
    "international driving permit Philippines",
    `convert license LTO ${CURRENT_YEAR_STR}`,
    "foreign nationals LTO license",
    "country agreement LTO license",
    "how to convert foreign license Philippines",
    "LTO foreign license requirements",
  ],
  openGraph: {
    title: `How to Convert a Foreign Driver's License to Philippine LTO License ${CURRENT_YEAR_STR}`,
    description:
      "Complete guide to converting a foreign driver's license to a Philippine LTO license. Eligibility, requirements, country agreements, fees, and step-by-step process.",
    url: "https://ltotrackeronline.ph/guides/foreign-license-conversion",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Convert a Foreign Driver's License to Philippine LTO License ${CURRENT_YEAR_STR}`,
    description:
      "Complete guide to converting a foreign driver's license to a Philippine LTO license. Requirements, country agreements, and step-by-step process.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/foreign-license-conversion",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "who-can-convert", text: "Who Can Convert a Foreign License?", level: 2 },
  { id: "country-agreements", text: "Country Agreements & Reciprocity", level: 2 },
  { id: "international-driving-permit", text: "International Driving Permit (IDP) vs. Conversion", level: 2 },
  { id: "requirements", text: "Complete Document Requirements", level: 2 },
  { id: "exam-requirements", text: "Written and Practical Exam Requirements", level: 2 },
  { id: "fees", text: "License Conversion Fees", level: 2 },
  { id: "step-by-step-process", text: "Step-by-Step Conversion Process", level: 2 },
  { id: "restriction-codes", text: "Restriction Codes on Converted Licenses", level: 2 },
  { id: "special-cases", text: "Special Cases", level: 2 },
  { id: "returning-ofws", text: "Returning OFWs with Foreign Licenses", level: 3 },
  { id: "expired-foreign-license", text: "Converting an Expired Foreign License", level: 3 },
  { id: "common-issues", text: "Common Issues and How to Avoid Them", level: 2 },
  { id: "tips", text: "Tips for a Smooth Conversion", level: 2 },
];

const faqs = [
  {
    question: "Can I drive in the Philippines with a foreign driver's license?",
    answer:
      "Yes, foreign nationals and tourists can legally drive in the Philippines using their valid foreign driver's license for up to 90 days from their date of arrival, provided the license is in English or accompanied by an official English translation. After 90 days, or if you become a resident, you must convert your foreign license to a Philippine LTO license. An International Driving Permit (IDP) can also be used alongside your foreign license during the initial 90-day period.",
  },
  {
    question: "How long does the foreign license conversion process take at the LTO?",
    answer:
      "The actual processing time at the LTO branch typically takes 2 to 4 hours if all your documents are complete and in order. However, the total time including document preparation (embassy authentication, medical exam, translation) can take 1 to 2 weeks. If your country has a reciprocity agreement with the Philippines, the process may be faster since you may be exempt from the written and practical driving exams.",
  },
  {
    question: "Do I need to take a driving test to convert my foreign license?",
    answer:
      "It depends on your country of origin. If your country has a reciprocity agreement with the Philippines, you are generally exempt from both the written and practical driving exams. If there is no reciprocity agreement, you will need to pass the LTO written examination (covering Philippine traffic laws and road signs) and may need to take the practical driving test. The LTO evaluator at the branch will determine the specific exam requirements based on your nationality and license type.",
  },
  {
    question: "Which countries have reciprocity agreements with the Philippines for license conversion?",
    answer:
      "The Philippines has reciprocity agreements with several countries, including Japan, South Korea, Belgium, the United Kingdom, Australia, and select ASEAN member states. The list of countries with reciprocity agreements is updated periodically by the LTO, so it is best to check with your nearest LTO district office or the LTO Central Office for the most current list. Citizens of countries with reciprocity agreements may be exempt from the written and practical driving exams during conversion.",
  },
  {
    question: "Can I convert my foreign license to a professional LTO license?",
    answer:
      "Foreign license conversion typically results in a non-professional driver's license, regardless of the license class held in your home country. If you need a professional license in the Philippines (required for driving for-hire vehicles, trucks, and buses), you must first convert your foreign license to a non-professional license and then apply for an upgrade to a professional license through the standard LTO process, which includes additional exams and training requirements.",
  },
  {
    question: "What if my foreign driver's license is not in English?",
    answer:
      "If your foreign driver's license is not in English, you must obtain an official English translation of the license. The translation can be done by your country's embassy or consulate in the Philippines, or by a certified translator recognized by the LTO. The translated document must be authenticated or notarized. Some countries issue licenses with both the local language and English text, which may be accepted without a separate translation at the LTO evaluator's discretion.",
  },
  {
    question: "Do I need to surrender my foreign license when converting to a Philippine license?",
    answer:
      "Yes, the LTO requires you to surrender your original foreign driver's license when converting to a Philippine license. The surrendered license is retained by the LTO and may be forwarded to the issuing country's embassy. If you need to keep your foreign license (for example, if you drive in multiple countries), consult with your embassy about obtaining a duplicate or replacement before surrendering the original to the LTO.",
  },
  {
    question: "How much does it cost to convert a foreign license to a Philippine LTO license?",
    answer:
      "The total cost of converting a foreign license to a Philippine LTO license ranges from approximately PHP 1,500 to PHP 3,500. This includes the license fee (PHP 585 for a 5-year non-professional license), medical exam fee (PHP 200-500), computer fee, embassy authentication (varies by embassy), translation fee (if applicable), and other miscellaneous charges. The 10-year license option (approximately PHP 1,100 for the license fee) may also be available if you qualify.",
  },
];

export default function ForeignLicenseConversion() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Foreign License Conversion" },
        ]}
      />

      <ArticleSchema
        headline={`How to Convert a Foreign Driver's License to Philippine LTO License ${CURRENT_YEAR_STR}`}
        description="Complete guide to converting a foreign driver's license to a Philippine LTO license. Eligibility, requirements, country agreements, fees, and step-by-step process."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/foreign-license-conversion"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "Foreign License Conversion",
            url: "https://ltotrackeronline.ph/guides/foreign-license-conversion",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Convert a Foreign Driver&apos;s License to Philippine LTO
            License {CURRENT_YEAR_STR}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>14 min read</span>
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
              provides this comprehensive guide for foreign nationals, returning
              overseas Filipino workers (OFWs), and dual citizens who need to
              convert their foreign driver&apos;s license to a Philippine Land
              Transportation Office (LTO) license. Whether you have relocated to
              the Philippines for work, retirement, or family reasons, driving
              legally on Philippine roads requires a valid LTO-issued
              driver&apos;s license once you have stayed beyond the initial
              tourist driving period. The conversion process replaces the need to
              apply for a brand-new license from scratch, recognizing the driving
              experience and qualifications you already hold from your home
              country.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The foreign license conversion process at the LTO involves
              submitting authenticated documents from your home country,
              undergoing a medical examination, and possibly taking written and
              practical driving exams depending on whether your country has a
              reciprocity agreement with the Philippines. The process is governed
              by LTO Administrative Order No. 2018-027 and subsequent amendments
              that outline the requirements, exemptions, and procedures for
              converting foreign-issued licenses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide covers everything you need to know for {CURRENT_YEAR_STR}: who is
              eligible, which countries have reciprocity agreements, the complete
              list of documentary requirements, fees, exam expectations, and a
              detailed step-by-step walkthrough. We also address special
              situations such as returning OFWs with foreign licenses, expired
              foreign licenses, and licenses issued in non-English languages.
            </p>
          </section>

          <section>
            <h2
              id="who-can-convert"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Who Can Convert a Foreign License?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO allows foreign license conversion for several categories
              of applicants. Understanding which category you fall under is
              important because the requirements and exemptions may differ:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Foreign nationals residing in the Philippines</strong>{" "}
                — Expatriates, foreign workers, retirees, and other foreign
                nationals who have been in the Philippines for more than 90 days
                and intend to continue driving must convert their foreign license
                to a Philippine license. This includes holders of work visas
                (9(g)), Special Resident Retiree&apos;s Visa (SRRV), investor
                visas (SIRV), and other long-term visa types.
              </li>
              <li>
                <strong>Returning overseas Filipino workers (OFWs)</strong> —
                Filipino citizens who obtained a driver&apos;s license abroad
                while working overseas can convert that foreign license to a
                Philippine LTO license upon their return. This is especially
                relevant for OFWs who did not hold a Philippine license before
                leaving or whose Philippine license has expired.
              </li>
              <li>
                <strong>Dual citizens</strong> — Filipinos who hold citizenship
                in another country and possess a foreign-issued driver&apos;s
                license can convert it to a Philippine license. Dual citizens
                must present their Philippine passport or identification
                certificate along with their foreign license.
              </li>
              <li>
                <strong>Former Filipino citizens</strong> — Individuals who
                previously held Filipino citizenship but are now citizens of
                another country may also apply for conversion, subject to
                immigration requirements and proper documentation.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tourists and short-term visitors (90 days or less) are generally
              not required to convert their license. They may drive using their
              valid foreign license or International Driving Permit (IDP)
              throughout the duration of their stay. However, once the 90-day
              period elapses, conversion becomes mandatory for those who
              continue to drive in the Philippines.
            </p>
          </section>

          <section>
            <h2
              id="country-agreements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Country Agreements &amp; Reciprocity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Philippines has entered into reciprocity agreements with
              several countries that streamline the license conversion process.
              Under these agreements, license holders from partner countries may
              be exempted from the written and practical driving examinations,
              making the conversion significantly faster and easier.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As of {CURRENT_YEAR_STR}, the Philippines recognizes reciprocity with the
              following countries and regions:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Country / Region
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Exam Exemption
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Japan
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Written &amp; Practical
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Bilateral agreement; requires embassy authentication
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      South Korea
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Written &amp; Practical
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Bilateral agreement; Korean license must be valid
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      United Kingdom
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Written &amp; Practical
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Includes England, Scotland, Wales, Northern Ireland
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Belgium
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Written &amp; Practical
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Bilateral agreement since 2016
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Australia
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Written &amp; Practical
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      All states and territories recognized
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ASEAN Member States
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Varies
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Under ASEAN MRA; subject to LTO evaluation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your country is not on the reciprocity list, you will generally
              need to take both the written and practical driving exams at the
              LTO. The written exam covers Philippine traffic laws, road signs,
              and safe driving practices. The practical exam tests your ability
              to operate a vehicle safely on Philippine roads. The LTO
              periodically updates its list of recognized countries, so check
              with the{" "}
              <a
                href="https://lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                LTO official website
              </a>{" "}
              or your nearest LTO district office for the latest information.
            </p>
          </section>

          <section>
            <h2
              id="international-driving-permit"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              International Driving Permit (IDP) vs. Conversion
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many foreign nationals confuse the International Driving Permit
              (IDP) with a license conversion. These are two very different
              things, and understanding the distinction is crucial for staying
              legal on Philippine roads.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>International Driving Permit (IDP):</strong> An IDP is a
              translation document that accompanies your existing foreign
              license. It does not replace your foreign license but serves as a
              multilingual verification of your driving credentials. An IDP is
              valid in the Philippines only when used alongside your original
              foreign license and only during a temporary visit. It is not a
              standalone license and cannot be used once you become a resident.
              IDPs are issued by authorized automobile associations in your home
              country (such as AAA in the United States or JAF in Japan) and are
              typically valid for one year.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>License conversion:</strong> Conversion is the process of
              exchanging your foreign driver&apos;s license for a Philippine
              LTO-issued license. This gives you a fully valid Philippine
              driver&apos;s license with a 5-year or 10-year validity period,
              the same as any license issued to a Filipino citizen. A converted
              license allows you to drive in the Philippines indefinitely and is
              required for anyone who resides in the country long-term.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you plan to stay in the Philippines for more than 90 days and
              wish to drive, you should pursue the full license conversion rather
              than relying on an IDP. Using an IDP beyond the permitted tourist
              period may result in traffic violations and fines.
            </p>
          </section>

          <section>
            <h2
              id="requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Complete Document Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prepare the following documents before visiting the LTO for your
              license conversion. Missing or incomplete documents are the most
              common reason for delays in the conversion process:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Original foreign driver&apos;s license</strong> — Your
                current, valid foreign license. The license must not be expired
                at the time of conversion (except in certain special cases). You
                will be required to surrender this license to the LTO upon
                successful conversion.
              </li>
              <li>
                <strong>Photocopy of foreign license</strong> — At least two
                clear photocopies of the front and back of your foreign license.
              </li>
              <li>
                <strong>Official English translation (if applicable)</strong> —
                If your foreign license is not in English, you must provide an
                official translation from your country&apos;s embassy or
                consulate in the Philippines, or from a certified translator. The
                translation must be notarized or authenticated.
              </li>
              <li>
                <strong>Embassy or consulate authentication</strong> — A
                certificate or letter from your country&apos;s embassy or
                consulate in the Philippines verifying the authenticity of your
                foreign license. This document confirms that the license is
                genuine and was lawfully issued by the foreign authority.
              </li>
              <li>
                <strong>Valid passport</strong> — Your current passport with
                valid visa stamps showing your legal status in the Philippines.
                For foreign nationals, this must include your current visa or
                immigration status (work visa, SRRV, etc.).
              </li>
              <li>
                <strong>Alien Certificate of Registration (ACR) I-Card</strong>
                {" "}— Required for foreign nationals holding long-term visas.
                The ACR I-Card is issued by the Bureau of Immigration and serves
                as the primary identification for foreigners in the Philippines.
              </li>
              <li>
                <strong>Medical certificate</strong> — From an LTO-accredited
                medical clinic. The medical exam includes visual acuity, color
                vision, hearing assessment, and general physical fitness. For
                details on the medical exam process, see our{" "}
                <Link
                  href="/guides/lto-license-renewal"
                  className="text-[#1e40af] hover:underline"
                >
                  license renewal guide
                </Link>
                .
              </li>
              <li>
                <strong>Duly accomplished LTO application form</strong> — The
                application form for foreign license conversion, available at any
                LTO district office or downloadable from the{" "}
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
              <li>
                <strong>Two recent passport-sized photos</strong> — Standard
                2x2-inch photos with a white background. Some LTO branches
                capture photos digitally during processing, but having physical
                photos as backup is recommended.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional requirements for returning OFWs:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                Philippine passport or dual citizenship documents
              </li>
              <li>
                OFW identification (OEC or equivalent documentation)
              </li>
              <li>
                Proof of overseas employment (employment contract or company
                certificate)
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="exam-requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Written and Practical Exam Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your country of origin and the reciprocity agreements
              in place, you may be required to take one or both of the following
              examinations:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Written examination:</strong> The LTO written exam for
              license conversion covers Philippine traffic laws and regulations
              (Republic Act No. 4136, as amended), standard road signs and
              markings used in the Philippines, right-of-way rules and
              intersection procedures, speed limits and traffic rules specific to
              Philippine roads, and basic defensive driving principles. The exam
              is conducted in English and consists of multiple-choice questions.
              A passing score of at least 60% is required. Study materials and
              reviewers are available at most LTO branches and online through the
              LTMS Portal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Practical driving examination:</strong> The practical test
              assesses your ability to safely operate a motor vehicle on
              Philippine roads. The test includes vehicle control exercises such
              as parking, reversing, and turning within a designated course, as
              well as an on-road driving segment where the examiner evaluates
              your lane discipline, signaling, awareness of traffic conditions,
              and compliance with traffic rules. The test is conducted at the LTO
              branch or a designated testing area.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your country has a reciprocity agreement with the Philippines,
              you are typically exempt from both the written and practical exams.
              The LTO evaluator will verify your exemption eligibility based on
              your nationality and the authentication documents from your
              embassy. Even if you are exempt from the exams, you must still
              complete the medical examination and submit all documentary
              requirements.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For applicants who need to take the exams, the{" "}
              <Link
                href="/guides/lto-student-permit"
                className="text-[#1e40af] hover:underline"
              >
                student permit guide
              </Link>{" "}
              provides additional information about the written exam content and
              preparation strategies, as the exam format is similar to the one
              for new license applicants.
            </p>
          </section>

          <section>
            <h2
              id="fees"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              License Conversion Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The fees for converting a foreign license to a Philippine LTO
              license include several components. Here is a breakdown of the
              estimated costs:
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
                      License Fee (5-year non-professional)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 585.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Computer Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Medical Exam Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 200 - 500
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Written Exam Fee (if required)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 100.00
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Practical Exam Fee (if required)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 150.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Embassy Authentication (varies)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 500 - 2,000
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Translation Fee (if applicable)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 300 - 1,000
                    </td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Estimated Total
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 1,500 - 3,500
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Embassy authentication fees vary significantly by country. Some
              embassies charge a flat fee, while others charge based on the type
              of document being authenticated. Contact your embassy directly for
              the current authentication fee schedule. For a comprehensive
              overview of all LTO fee structures, visit our{" "}
              <Link
                href="/guides/lto-fees-schedule"
                className="text-[#1e40af] hover:underline"
              >
                LTO fees schedule guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="step-by-step-process"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step Conversion Process
            </h2>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Authenticate your foreign license at your embassy.</strong>{" "}
                Visit your country&apos;s embassy or consulate in the Philippines.
                Request a certificate of authenticity or verification letter for
                your driver&apos;s license. If your license is not in English,
                also request an official English translation. Processing times
                vary by embassy, so allow at least 3 to 7 working days.
              </li>
              <li>
                <strong>Complete the medical examination.</strong> Visit an
                LTO-accredited medical clinic and undergo the standard medical
                exam (visual acuity, color vision, hearing, physical fitness).
                Obtain the medical certificate. This can be done on the same day
                as your LTO visit or in advance.
              </li>
              <li>
                <strong>Gather all required documents.</strong> Assemble your
                original foreign license, embassy authentication, medical
                certificate, passport with visa, ACR I-Card (for foreigners),
                photocopies, and passport-sized photos. Having a complete set of
                documents before visiting the LTO prevents unnecessary return
                trips.
              </li>
              <li>
                <strong>Visit the LTO district office.</strong> Go to an LTO
                district office that handles foreign license conversions. Not all
                LTO branches process conversions, so verify in advance. The LTO
                Central Office in Quezon City and major district offices in Metro
                Manila typically handle conversion applications. Use our{" "}
                <Link
                  href="/branches"
                  className="text-[#1e40af] hover:underline"
                >
                  LTO branch finder
                </Link>{" "}
                to locate the nearest branch.
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong>{" "}
                Present all documents to the evaluator. The evaluator will verify
                your identity, check the embassy authentication, confirm your
                visa status, and determine whether you need to take the written
                and practical exams.
              </li>
              <li>
                <strong>Take examinations (if required).</strong> If your country
                does not have a reciprocity agreement with the Philippines, you
                will be directed to take the written exam and, if applicable, the
                practical driving exam. The written exam is computer-based at
                most branches and results are available immediately.
              </li>
              <li>
                <strong>Pay the conversion fees.</strong> After passing the
                evaluation (and exams, if required), proceed to the cashier and
                pay the total fees. Keep your official receipt.
              </li>
              <li>
                <strong>Biometrics capture.</strong> Have your photo and
                fingerprints taken at the biometrics station. These will appear
                on your new Philippine driver&apos;s license card.
              </li>
              <li>
                <strong>Surrender your foreign license.</strong> Hand over your
                original foreign driver&apos;s license to the LTO. The license
                will be retained by the LTO. Make sure you have made photocopies
                before surrendering the original.
              </li>
              <li>
                <strong>Receive your Philippine driver&apos;s license.</strong>{" "}
                Wait for your new license card to be printed and released. The
                license will be a standard Philippine non-professional
                driver&apos;s license with a 5-year validity period (or 10 years
                if eligible). Verify all details on the card before leaving the
                branch.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="restriction-codes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Restriction Codes on Converted Licenses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When your foreign license is converted to a Philippine license, the
              LTO will assign restriction codes based on the vehicle categories
              covered by your original license and the results of your medical
              exam. The most common restriction codes issued on converted
              licenses include:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Restriction Code 1 (RC1)</strong> — Motorcycles and
                motorized tricycles
              </li>
              <li>
                <strong>Restriction Code 2 (RC2)</strong> — Motor vehicles up to
                4,500 kg gross vehicle weight (cars, SUVs, vans)
              </li>
              <li>
                <strong>Restriction Code 3 (RC3)</strong> — Motor vehicles above
                4,500 kg gross vehicle weight (trucks, buses)
              </li>
              <li>
                <strong>Restriction Code 8 (RC8)</strong> — Must wear corrective
                lenses while driving
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The restriction codes on your converted license will correspond to
              the vehicle types you were authorized to drive under your foreign
              license. If you want additional restriction codes (for example, to
              add motorcycle authorization), you may need to take additional
              practical exams. For a full explanation of all LTO restriction
              codes, see our{" "}
              <Link
                href="/guides/lto-license-restriction-codes"
                className="text-[#1e40af] hover:underline"
              >
                LTO license restriction codes guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="special-cases"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Special Cases
            </h2>

            <h3
              id="returning-ofws"
              className="text-xl font-bold text-gray-900 mt-8 mb-3"
            >
              Returning OFWs with Foreign Licenses
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Returning OFWs who obtained a driver&apos;s license in their host
              country (such as Saudi Arabia, UAE, Qatar, Singapore, or Hong Kong)
              can convert that license to a Philippine LTO license. The process
              is similar to the standard conversion, with a few additional
              considerations:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                OFWs must present proof of overseas employment, such as an
                Overseas Employment Certificate (OEC) or employment contract.
              </li>
              <li>
                The foreign license must be authenticated by the Philippine
                embassy or consulate in the host country or by the host
                country&apos;s embassy in the Philippines.
              </li>
              <li>
                If the OFW previously held a valid Philippine driver&apos;s
                license, the conversion process may be treated as a renewal
                rather than a new conversion, which can simplify the
                requirements.
              </li>
              <li>
                OFWs returning from countries with reciprocity agreements may
                benefit from exam exemptions.
              </li>
            </ul>

            <h3
              id="expired-foreign-license"
              className="text-xl font-bold text-gray-900 mt-8 mb-3"
            >
              Converting an Expired Foreign License
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In principle, the LTO requires that the foreign license being
              converted must be valid (not expired) at the time of application.
              However, there are circumstances where the LTO may accept a
              recently expired foreign license:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                If the license expired within the last 6 months to 1 year, the
                LTO may still accept it with a valid embassy authentication
                confirming the license was legitimately held.
              </li>
              <li>
                The applicant may be required to take both the written and
                practical driving exams regardless of reciprocity agreements.
              </li>
              <li>
                If the license has been expired for a long period (more than 2
                years), the LTO may require the applicant to go through the full
                new license application process starting from a student permit.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your foreign license is about to expire, it is advisable to
              start the conversion process as soon as possible to avoid
              complications. Renewing your foreign license at your embassy before
              converting may also be an option, depending on your country&apos;s
              policies on overseas license renewal.
            </p>
          </section>

          <section>
            <h2
              id="common-issues"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Common Issues and How to Avoid Them
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Embassy authentication delays.</strong> Some embassies have
              long processing times for license authentication. Start the embassy
              process at least 2 weeks before you plan to visit the LTO. Call
              your embassy in advance to check their schedule, required
              documents, and expected processing time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Non-English license without translation.</strong> Arriving
              at the LTO with a license in a non-English language (Japanese,
              Korean, Arabic, Chinese) without an official translation will
              result in your application being rejected. Ensure you obtain the
              translation from your embassy before your LTO visit.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Visiting a branch that does not handle
              conversions.</strong> Not all LTO district offices process foreign
              license conversions. Smaller satellite offices and some provincial
              branches may not have the authority or system access to handle
              conversion applications. Call ahead or visit the LTO Central Office
              in East Avenue, Quezon City, which handles all types of license
              transactions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>ACR I-Card not yet issued.</strong> Foreign nationals who
              have recently arrived or changed visa status may not yet have their
              ACR I-Card. The LTO generally requires this document for foreign
              applicants. Process your ACR I-Card at the{" "}
              <a
                href="https://immigration.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Bureau of Immigration
              </a>{" "}
              before attempting the license conversion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Mismatch between passport name and license
              name.</strong> If your name on your foreign license differs from
              your passport name (due to transliteration, marriage, or name
              change), bring supporting documents such as a marriage certificate,
              court order, or an embassy certificate confirming the name
              equivalence. The LTO evaluator needs to verify that the license and
              passport belong to the same person.
            </p>
          </section>

          <section>
            <h2
              id="tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips for a Smooth Conversion
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Start with your embassy.</strong> The embassy
                authentication is often the most time-consuming step. Begin here
                and work on other requirements while waiting for the
                authentication to be processed.
              </li>
              <li>
                <strong>Photocopy everything.</strong> Make at least two
                photocopies of every document: your foreign license (front and
                back), passport (data page and visa pages), ACR I-Card, and
                embassy authentication. The LTO requires copies of most
                documents.
              </li>
              <li>
                <strong>Call the LTO branch first.</strong> Confirm that the
                branch you plan to visit handles foreign license conversions.
                Ask about their schedule and any specific requirements they may
                have beyond the standard list.
              </li>
              <li>
                <strong>Arrive early.</strong> LTO branches that handle
                conversions can be busy. Arrive before 8:00 AM to minimize
                waiting time. Conversion applications typically take longer than
                standard transactions.
              </li>
              <li>
                <strong>Study for the exams.</strong> If your country does not
                have a reciprocity agreement, prepare for the written exam by
                studying Philippine traffic laws and road signs. Reviewers are
                available online and at LTO branches.
              </li>
              <li>
                <strong>Keep a copy of your foreign license.</strong> Since you
                will surrender the original, make sure to keep photocopies and
                take clear photographs of both sides of your foreign license
                before surrendering it. You may need these for reference or if
                you need to re-obtain a license in your home country.
              </li>
              <li>
                <strong>Check your license restriction codes.</strong> After
                receiving your new Philippine license, verify that the restriction
                codes accurately reflect the vehicle types you are authorized to
                drive. If there is an error, report it immediately at the
                evaluation window before leaving the branch.
              </li>
            </ul>
          </section>

          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/lto-license-tracker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO License Status Tracker →
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
              <Link
                href="/guides/lto-license-restriction-codes"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                License Restriction Codes Guide →
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
