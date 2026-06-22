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

const guide = getGuideBySlug("traffic-violations-fines")!;

export const metadata: Metadata = {
  title: `LTO Traffic Violations and Fines ${CURRENT_YEAR_STR} — Complete Penalty Schedule`,
  description: `Complete list of LTO traffic violations and fines for ${CURRENT_YEAR_STR}. Covers all penalties under RA 4136, RA 10586, MMDA violations, speeding, reckless driving, no license, expired registration, and more with exact fine amounts in PHP.`,
  keywords: [
    "LTO traffic violations",
    `LTO fines ${CURRENT_YEAR_STR}`,
    "traffic violation fines Philippines",
    "RA 4136 penalties",
    "LTO penalty schedule",
    "traffic violation list",
    "reckless driving fine Philippines",
    "no license fine LTO",
    "expired registration fine",
    "LTO violation fees",
    `traffic fines Philippines ${CURRENT_YEAR_STR}`,
    "how much fine traffic violation",
  ],
  openGraph: {
    title: `LTO Traffic Violations and Fines ${CURRENT_YEAR_STR} — Complete Penalty Schedule`,
    description: `Complete list of all LTO traffic violations and fines for ${CURRENT_YEAR_STR}. Exact fine amounts, penalties, and settlement process for Filipino motorists.`,
    url: "https://ltotrackeronline.ph/guides/traffic-violations-fines",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `LTO Traffic Violations and Fines ${CURRENT_YEAR_STR} — Complete Penalty Schedule`,
    description: `Complete list of all LTO traffic violations and fines for ${CURRENT_YEAR_STR} in the Philippines.`,
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/traffic-violations-fines",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "legal-basis", text: "Legal Basis for Traffic Fines", level: 2 },
  { id: "license-violations", text: "License-Related Violations", level: 2 },
  { id: "registration-violations", text: "Registration-Related Violations", level: 2 },
  { id: "moving-violations", text: "Moving Violations", level: 2 },
  { id: "safety-violations", text: "Safety and Equipment Violations", level: 2 },
  { id: "parking-violations", text: "Parking and Loading Violations", level: 2 },
  { id: "special-violations", text: "Special Law Violations", level: 2 },
  { id: "demerit-system", text: "Demerit Point System", level: 2 },
  { id: "how-to-settle", text: "How to Settle Violations", level: 2 },
  { id: "how-to-check", text: "How to Check for Pending Violations", level: 2 },
  { id: "your-rights", text: "Your Rights During Apprehension", level: 2 },
];

const faqs = [
  {
    question: "How much is the fine for driving without a license in the Philippines?",
    answer:
      "The fine for driving without a license in the Philippines ranges from PHP 3,000 for the first offense to PHP 10,000 for the third and subsequent offenses. If the driver has never had a license (as opposed to simply not carrying it), the penalties are more severe and may include the impoundment of the vehicle. Under RA 4136, an unlicensed driver caught operating a motor vehicle may also face criminal charges in addition to the administrative fine.",
  },
  {
    question: "What is the fine for expired vehicle registration?",
    answer:
      "The fine for operating a vehicle with expired registration is PHP 10,000 for the first offense under the latest LTO schedule. In addition to this apprehension fine, you will also need to pay the late registration fee (LRF) of 50% of the registration fee for each year of delay when you renew your registration at the LTO. Your vehicle may also be impounded until the registration is renewed and all penalties are settled. To avoid these costs, use our renewal calculator to check your registration status ahead of time.",
  },
  {
    question: "How much is the fine for beating the red light?",
    answer:
      "The fine for disregarding a traffic signal (beating the red light) is PHP 3,000 for the first offense and PHP 5,000 for the second and subsequent offenses under the current LTO penalty schedule. This is classified as a moving violation and is considered a serious traffic offense due to the high risk of collision. CCTV-captured violations at intersections may result in a notice of violation sent to the registered owner of the vehicle.",
  },
  {
    question: "What happens if I don't settle my traffic violation?",
    answer:
      "If you do not settle your traffic violation within the prescribed period, several consequences may follow. First, you will not be able to renew your driver's license, as the LTMS system will flag your record with unresolved violations. Second, for vehicle-related violations, you may be unable to renew your vehicle registration until the violation is settled. Third, accumulated unsettled violations may lead to license suspension or revocation proceedings. The LTO stores violation records in its database indefinitely until settled.",
  },
  {
    question: "Can traffic violations be settled online?",
    answer:
      "Yes, some traffic violations can be settled online through the LTMS Portal (portal.lto.gov.ph). You can log in to check your violation records, view the fine amounts, and process payment through the available online channels (GCash, Maya, credit card, bank transfer). However, not all violation types are available for online settlement. Violations that require personal appearance, such as those involving confiscated licenses or those requiring administrative hearings, must be settled in person at the LTO branch or adjudication office where the violation was recorded.",
  },
  {
    question: "What is the penalty for drunk driving in the Philippines?",
    answer:
      "Under Republic Act No. 10586 (Anti-Drunk and Drugged Driving Act), the penalties for drunk driving are severe. For the first offense, the fine is PHP 20,000 to PHP 80,000 with a 12-month license suspension. For the second offense, the fine is PHP 80,000 to PHP 120,000 with permanent license revocation. For the third offense, the fine is PHP 120,000 to PHP 200,000 with permanent revocation and imprisonment of 3 months to 1 year. If drunk driving results in injury or death, the penalties are significantly higher and include mandatory imprisonment.",
  },
  {
    question: "How much is the fine for not wearing a seatbelt?",
    answer:
      "The fine for not wearing a seatbelt is PHP 1,000 for the first offense and PHP 2,000 for the second offense under the Seatbelt Use Act (RA 8750). For the third and subsequent offenses, the fine is PHP 5,000 and the driver's license may be suspended. This law requires all front-seat occupants (driver and front passenger) to wear seatbelts at all times while the vehicle is in motion. Failure to ensure that a child passenger is properly restrained carries additional penalties under the Child Safety in Motor Vehicles Act (RA 11229).",
  },
  {
    question: "What is the difference between LTO and MMDA traffic violations?",
    answer:
      "LTO traffic violations are national in scope and enforced under RA 4136 and other national laws. They are recorded in the LTMS database and affect your driver's license record. MMDA traffic violations are enforced within Metro Manila by MMDA traffic enforcers and are typically recorded in a separate system. MMDA violations carry their own fine schedule, which may differ from LTO fines. However, both LTO and MMDA violations must be settled to avoid complications during license and registration renewal. Some violations may be recorded by both agencies simultaneously.",
  },
];

export default function TrafficViolationsFines() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Traffic Violations & Fines" },
        ]}
      />

      <ArticleSchema
        headline={`LTO Traffic Violations and Fines ${CURRENT_YEAR_STR} — Complete Penalty Schedule`}
        description={`Complete list of LTO traffic violations and fines for ${CURRENT_YEAR_STR}. Covers all penalties under RA 4136, RA 10586, and more with exact fine amounts in PHP.`}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/traffic-violations-fines"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "Traffic Violations & Fines",
            url: "https://ltotrackeronline.ph/guides/traffic-violations-fines",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LTO Traffic Violations and Fines {CURRENT_YEAR_STR} — Complete Penalty Schedule
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>20 min read</span>
          </div>

          <section>
            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}
              presents the most complete and up-to-date reference of all traffic violations and fines enforced by the Land Transportation Office (LTO) in the Philippines for {CURRENT_YEAR_STR}. Every Filipino motorist should be aware of the specific violations and their corresponding penalties, not only to avoid fines but to ensure road safety for themselves and others. Traffic violations range from minor infractions like failing to carry your license to serious offenses like drunk driving and reckless driving that carry heavy fines and even imprisonment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The penalty amounts in this guide reflect the latest schedules issued by the LTO through memorandum circulars and administrative orders, as well as penalties specified in national laws such as Republic Act No. 4136 (Land Transportation and Traffic Code), Republic Act No. 10586 (Anti-Drunk and Drugged Driving Act), and Republic Act No. 10913 (Anti-Distracted Driving Act). Fine amounts have been updated significantly in recent years, with many violations now carrying substantially higher penalties compared to previous schedules.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding these violations and their penalties empowers you to make informed decisions on the road and helps you know your rights when dealing with traffic enforcers. This guide organizes all major violations into clear categories with exact fine amounts in Philippine Pesos.
            </p>
          </section>

          <section>
            <h2 id="legal-basis" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Legal Basis for Traffic Fines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traffic violations and their corresponding fines in the Philippines are established under several key laws and regulations:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Republic Act No. 4136</strong> — The Land Transportation and Traffic Code. This is the foundational traffic law in the Philippines, originally enacted in 1964 and amended multiple times. It defines most traffic offenses, vehicle registration requirements, driver licensing rules, and the general framework for traffic enforcement.</li>
              <li><strong>Republic Act No. 10586</strong> — The Anti-Drunk and Drugged Driving Act of 2013. Defines penalties specifically for driving under the influence of alcohol or drugs.</li>
              <li><strong>Republic Act No. 10913</strong> — The Anti-Distracted Driving Act. Prohibits the use of mobile phones, entertainment devices, and other distracting activities while driving.</li>
              <li><strong>Republic Act No. 8750</strong> — The Seatbelt Use Act of 1999. Mandates seatbelt use for all front-seat occupants.</li>
              <li><strong>Republic Act No. 11229</strong> — The Child Safety in Motor Vehicles Act. Requires proper child restraint systems for children 12 years old and below.</li>
              <li><strong>LTO Memorandum Circulars</strong> — Periodic circulars that update fine amounts and introduce new enforcement guidelines. The LTO regularly issues these to adjust penalties for inflation and changing traffic conditions.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The{" "}
              <a href="https://lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LTO official website</a>{" "}
              publishes the latest memorandum circulars containing updated fine schedules. Traffic enforcers from the LTO, MMDA (in Metro Manila), local traffic management offices, and the PNP-Highway Patrol Group are authorized to issue violation tickets.
            </p>
          </section>

          <section>
            <h2 id="license-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              License-Related Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These violations are related to your driver&apos;s license status, possession, and compliance with license conditions. For information about what your license restriction codes mean, see our{" "}
              <Link href="/guides/lto-license-restriction-codes" className="text-[#1e40af] font-medium hover:underline">restriction codes guide</Link>.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Violation</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">1st Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">2nd Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">3rd Offense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driving without a valid license</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driving with an expired license</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Failure to carry license while driving</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driving with improper restriction code</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driving with a suspended/revoked license</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000 + imprisonment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Allowing unlicensed person to drive</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Student driver without an accompanying licensed driver</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 id="registration-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Registration-Related Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vehicle registration violations are among the most costly offenses for Filipino motorists. Registration must be renewed annually, and all vehicles on public roads must display valid plates and carry the current Certificate of Registration (CR) and Official Receipt (OR). For plate number tracking, use our{" "}
              <Link href="/lto-plate-tracker" className="text-[#1e40af] font-medium hover:underline">LTO plate number tracker</Link>.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Violation</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">1st Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">2nd Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">3rd Offense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driving with expired registration</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 20,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Unregistered motor vehicle</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 20,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Failure to carry OR/CR</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No plate number / improper display of plate</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Using unauthorized/fake plate</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 20,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 50,000 + license revocation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Failure to display registration sticker</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that vehicles caught with expired registration may be impounded by enforcement officers until the registration is renewed and all penalties are paid. The impoundment fee adds additional costs on top of the violation fine. To avoid registration-related violations, make sure to renew on time. Check our{" "}
              <Link href="/guides/lto-fees-schedule" className="text-[#1e40af] font-medium hover:underline">LTO fees schedule</Link>{" "}
              for the exact renewal costs.
            </p>
          </section>

          <section>
            <h2 id="moving-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Moving Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Moving violations are offenses committed while the vehicle is in motion. These are among the most commonly cited violations and include some of the most dangerous driving behaviors on Philippine roads.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Violation</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">1st Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">2nd Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">3rd Offense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Reckless driving</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000 + suspension</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Disregarding traffic signs/signals</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Beating the red light</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Overspeeding</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000 + suspension</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Illegal overtaking</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Counterflowing / driving on wrong side</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Illegal U-turn</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Failure to give way to emergency vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Number coding violation (MMDA)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 300</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 300</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 300</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Hit and run</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000 + criminal charges</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000 + criminal charges</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 20,000 + license revocation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              For number coding violations in Metro Manila, check our{" "}
              <Link href="/guides/mmda-number-coding" className="text-[#1e40af] font-medium hover:underline">MMDA number coding guide</Link>{" "}
              to verify your vehicle&apos;s coding schedule and avoid unnecessary fines. You can also use our{" "}
              <Link href="/coding-checker" className="text-[#1e40af] font-medium hover:underline">coding checker tool</Link>{" "}
              to quickly determine if your plate is covered on any given day.
            </p>
          </section>

          <section>
            <h2 id="safety-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Safety and Equipment Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These violations relate to vehicle safety equipment, mandatory protective gear, and compliance with safety regulations designed to protect drivers, passengers, and other road users.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Violation</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">1st Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">2nd Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">3rd Offense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No seatbelt (driver/front passenger)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000 + suspension</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No helmet (motorcycle rider/passenger)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No child restraint / improper child safety</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Defective brakes / lights / signals</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No early warning device</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Illegal window tint (excessive tint)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 3,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No valid emission test / failed PMVIC</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 id="parking-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Parking and Loading Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Parking and loading violations are enforced both by the LTO and by local government traffic management offices. In Metro Manila, the MMDA also enforces parking regulations along major thoroughfares.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Violation</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">1st Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">2nd Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">3rd Offense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Illegal parking</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Obstruction (blocking traffic flow)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,500</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Double parking</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Loading/unloading in a no-loading zone</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 1,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 id="special-violations" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Special Law Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These violations are established by special laws that carry their own penalty schedules. The fines are often significantly higher than standard traffic violations due to the serious safety risks involved. For a detailed guide on the anti-drunk driving law, see our{" "}
              <Link href="/guides/anti-drunk-driving-law" className="text-[#1e40af] font-medium hover:underline">Anti-Drunk Driving Law guide</Link>.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Violation (Law)</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">1st Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">2nd Offense</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">3rd Offense</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Drunk driving (RA 10586)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 20,000 - 80,000 + 12-month suspension</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 80,000 - 120,000 + revocation</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 120,000 - 200,000 + imprisonment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Distracted driving (RA 10913)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000 + 3-month suspension</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">No CTPL insurance</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Smoke-belching</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 2,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 4,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 6,000 + 3-month vehicle impoundment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Overloading (goods/passengers)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 5,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 10,000</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 15,000 + franchise suspension</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The{" "}
              <a href="https://www.officialgazette.gov.ph/2013/05/27/republic-act-no-10586/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Anti-Drunk Driving Act (RA 10586)</a>{" "}
              imposes the most severe penalties among traffic-related special laws. Drunk driving that results in homicide or physical injuries carries significantly higher fines and mandatory imprisonment. The law gives traffic enforcers the authority to conduct sobriety tests and the BAC (Blood Alcohol Concentration) limit is set at 0.05%.
            </p>
          </section>

          <section>
            <h2 id="demerit-system" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Demerit Point System
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO operates a demerit point system that tracks accumulated violations against your driver&apos;s license. Each traffic violation carries a specific number of demerit points in addition to the monetary fine. When a driver accumulates enough demerit points within a defined period, the consequences escalate from warnings to license suspension and eventual revocation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>How the demerit system works:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Minor violations:</strong> 1-2 demerit points (parking violations, failure to carry documents, etc.)</li>
              <li><strong>Moderate violations:</strong> 3-4 demerit points (disregarding traffic signs, overspeeding, etc.)</li>
              <li><strong>Serious violations:</strong> 5-7 demerit points (reckless driving, counterflowing, hit and run, etc.)</li>
              <li><strong>Critical violations:</strong> 10+ demerit points (drunk driving, driving with revoked license, etc.)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Accumulated demerit points can result in the following actions: <strong>Warning letter</strong> when points reach a moderate threshold, <strong>mandatory attendance at a driver&apos;s re-education seminar</strong> at a higher threshold, <strong>license suspension</strong> (3 months to 1 year depending on points), and <strong>license revocation</strong> for the most severe accumulations. Demerit points are tracked in the LTO Management Information System (LTMIS) and are visible when you check your license status. Maintaining a clean driving record not only keeps your demerit points at zero but also qualifies you for the 10-year license upon renewal.
            </p>
          </section>

          <section>
            <h2 id="how-to-settle" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Settle Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you receive a traffic violation ticket (TVR — Temporary Violation Receipt or TOP — Temporary Operator&apos;s Permit), you must settle the violation within 15 days at the LTO district office that has jurisdiction. For a complete step-by-step settlement process, see our{" "}
              <Link href="/guides/how-to-settle-traffic-violations" className="text-[#1e40af] font-medium hover:underline">how to settle traffic violations guide</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Basic settlement process:</strong>
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Bring your TVR/TOP and valid ID to the specified LTO district office</li>
              <li>Proceed to the adjudication section and present your violation ticket</li>
              <li>The adjudicator will review the violation and inform you of the fine amount</li>
              <li>Pay the fine at the cashier window</li>
              <li>Receive your official receipt and have your license or documents returned</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe you were wrongly apprehended, you have the right to contest the violation through the LTO&apos;s adjudication process. You can present evidence and witnesses to support your case. The adjudicator will review the circumstances and make a determination. If the violation is upheld, you pay the fine. If dismissed, no fine is imposed and your record remains clean.
            </p>
          </section>

          <section>
            <h2 id="how-to-check" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Check for Pending Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can check your pending traffic violations through several channels:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>LTMS Portal:</strong> Log in to{" "}
                <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">portal.lto.gov.ph</a>{" "}
                and navigate to the violations section. This shows all violations recorded against your license number.</li>
              <li><strong>LTO branch inquiry:</strong> Visit any LTO district office and request a violation check at the information desk. Bring your license for the inquiry.</li>
              <li><strong>LTO Tracker:</strong> Use our{" "}
                <Link href="/lto-license-tracker" className="text-[#1e40af] font-medium hover:underline">LTO license tracker</Link>{" "}
                to check your license status and any recorded violations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is good practice to check for pending violations before your license or registration renewal, as unsettled violations can block the renewal process. Some violations issued by traffic enforcers may take a few days to appear in the system, so check again a few days after any traffic encounter.
            </p>
          </section>

          <section>
            <h2 id="your-rights" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Your Rights During Apprehension
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every Filipino motorist has rights when being apprehended for a traffic violation. Knowing your rights helps protect you from abuse and ensures that the enforcement process is followed properly:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li><strong>Right to know the violation.</strong> The enforcer must clearly state the specific violation you committed and the corresponding provision of law.</li>
              <li><strong>Right to see the enforcer&apos;s identification.</strong> Traffic enforcers must carry and display their official identification. You have the right to ask for their name, badge number, and issuing agency.</li>
              <li><strong>Right to a violation ticket.</strong> You are entitled to receive a written violation ticket (TVR or TOP) specifying the violation, date, time, location, and the enforcer&apos;s details. An enforcer cannot simply confiscate your license without issuing a ticket.</li>
              <li><strong>Right against on-the-spot payment.</strong> You are not required to pay fines to the traffic enforcer at the scene. All fines are paid at the LTO district office cashier. Any enforcer demanding on-the-spot payment is engaging in extortion, which is a criminal offense.</li>
              <li><strong>Right to contest the violation.</strong> You can contest any violation you believe was unjustly issued through the LTO adjudication process.</li>
              <li><strong>Right to report abusive enforcers.</strong> You can file a complaint against abusive or corrupt traffic enforcers through the LTO, the Civil Service Commission, or the Office of the Ombudsman.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you encounter a situation where your rights are being violated, remain calm, document the encounter if possible (take photos or videos of the enforcer&apos;s ID and the situation), and file a formal complaint afterward. Never engage in physical confrontation or bribery, as both are criminal offenses.
            </p>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Related Tools</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/penalty-calculator" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO Penalty Calculator →
              </Link>
              <Link href="/lto-license-tracker" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO License Status Tracker →
              </Link>
              <Link href="/coding-checker" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                Number Coding Checker →
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
