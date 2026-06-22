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

const guide = getGuideBySlug("mmda-number-coding")!;

export const metadata: Metadata = {
  title: `MMDA Number Coding Scheme ${CURRENT_YEAR_STR} — Schedule, Exemptions & Penalties`,
  description: `Complete guide to the MMDA Number Coding Scheme (UVVRP) in Metro Manila ${CURRENT_YEAR_STR}. Daily schedule, window hours, exemptions, penalties, and how to check your coding day. Updated for the latest MMDA guidelines.`,
  keywords: [
    "MMDA number coding",
    `number coding scheme ${CURRENT_YEAR_STR}`,
    "UVVRP schedule",
    "coding schedule Metro Manila",
    "number coding exemptions",
    "coding penalty MMDA",
    "number coding window hours",
    "Unified Vehicular Volume Reduction Program",
    "coding day checker",
    "MMDA coding today",
    "number coding Manila",
    "plate number coding schedule",
  ],
  openGraph: {
    title: `MMDA Number Coding Scheme ${CURRENT_YEAR_STR} — Schedule, Exemptions & Penalties`,
    description:
      "Complete guide to the MMDA Number Coding Scheme in Metro Manila. Daily schedule, window hours, exemptions, and penalties.",
    url: "https://ltotrackeronline.ph/guides/mmda-number-coding",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `MMDA Number Coding Scheme ${CURRENT_YEAR_STR} — Schedule, Exemptions & Penalties`,
    description:
      "Complete guide to the MMDA Number Coding Scheme. Daily schedule, exemptions, and penalties for Metro Manila.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/mmda-number-coding",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  {
    id: "what-is-uvvrp",
    text: "What Is the UVVRP (Number Coding)?",
    level: 2,
  },
  { id: "coding-schedule", text: "Number Coding Schedule", level: 2 },
  { id: "window-hours", text: "Window Hours", level: 2 },
  { id: "covered-areas", text: "Covered Areas and Roads", level: 2 },
  { id: "exemptions", text: "Exemptions from Number Coding", level: 2 },
  {
    id: "penalties",
    text: "Penalties for Number Coding Violations",
    level: 2,
  },
  { id: "special-days", text: "Holidays and Special Non-Coding Days", level: 2 },
  {
    id: "how-to-check",
    text: "How to Check Your Coding Day",
    level: 2,
  },
  {
    id: "lgu-coding",
    text: "Local Government Unit (LGU) Coding Schemes",
    level: 2,
  },
  {
    id: "alternative-routes",
    text: "Alternative Routes and Tips",
    level: 2,
  },
  {
    id: "history",
    text: "History and Purpose of the Number Coding Scheme",
    level: 2,
  },
];

const faqs = [
  {
    question: `What is the MMDA number coding schedule for ${CURRENT_YEAR_STR}?`,
    answer: `The MMDA number coding schedule for ${CURRENT_YEAR_STR} follows the standard UVVRP pattern: Monday - plates ending in 1 and 2; Tuesday - plates ending in 3 and 4; Wednesday - plates ending in 5 and 6; Thursday - plates ending in 7 and 8; Friday - plates ending in 9 and 0. The coding scheme operates during two window periods: 7:00 AM to 10:00 AM and 5:00 PM to 8:00 PM on weekdays. There is no number coding on Saturdays, Sundays, and declared holidays.`,
  },
  {
    question: "What are the number coding window hours in Metro Manila?",
    answer:
      "The standard MMDA number coding window hours are 7:00 AM to 10:00 AM (morning window) and 5:00 PM to 8:00 PM (evening window) on weekdays. Outside of these window hours, all vehicles are free to travel on all roads in Metro Manila regardless of their plate number ending. However, some cities and municipalities within Metro Manila may implement additional or modified window hours under their own local coding schemes, so it is important to check the specific coding rules for the area you are traveling through.",
  },
  {
    question: "What vehicles are exempt from the MMDA number coding scheme?",
    answer:
      "The following vehicles are exempt from the MMDA number coding scheme: emergency vehicles (ambulances, fire trucks, police vehicles), government vehicles with official plates, public utility vehicles (PUVs) operating on authorized routes, school buses and shuttles, diplomatic vehicles with diplomatic plates, media vehicles with MMDA-issued identification, vehicles of persons with disability (PWD) with proper identification, and newly purchased vehicles with temporary plates (within 7 days of purchase). Additionally, certain types of commercial vehicles and delivery trucks may have specific exemptions.",
  },
  {
    question: "What is the penalty for violating the number coding scheme?",
    answer:
      "The penalty for violating the MMDA number coding scheme is a fine. Under the current MMDA guidelines, the fine for a number coding violation is PHP 300 for the first offense. The apprehending officer will issue a Temporary Operator's Permit (TOP) or a citation ticket. The fine must be paid at the MMDA office or through authorized payment channels. Repeat offenders may face higher fines. Note that some cities and municipalities within Metro Manila may impose their own coding violation fines that could differ from the MMDA standard.",
  },
  {
    question: "Is there number coding on holidays and weekends?",
    answer:
      "No, the MMDA number coding scheme does not apply on Saturdays, Sundays, and officially declared national holidays. When a regular holiday or special non-working holiday falls on a weekday, the number coding restriction is lifted for that day, and all vehicles can travel freely on all roads in Metro Manila. The MMDA typically announces the suspension of the coding scheme ahead of holidays through their official social media channels and website.",
  },
  {
    question:
      "Does the number coding scheme apply to motorcycles and provincial vehicles?",
    answer:
      "Motorcycles are currently exempt from the MMDA number coding scheme. Provincial vehicles (vehicles with plates registered outside Metro Manila) are NOT exempt from the number coding scheme. If your vehicle has a provincial plate, the number coding restriction still applies based on the last digit of your plate number when you are driving within Metro Manila during coding hours. This is a common misconception among provincial drivers visiting Metro Manila.",
  },
  {
    question:
      "Can I get an MMDA number coding exemption for medical emergencies?",
    answer:
      "In case of a genuine medical emergency, you may still drive during your coding day. If you are apprehended, you should explain the situation to the enforcer and provide evidence of the emergency (such as hospital documents or a medical certificate). However, there is no guaranteed exemption for medical emergencies under the UVVRP rules. To avoid issues, consider using alternative transportation on your coding day or planning medical appointments outside of coding hours. Emergency vehicles like ambulances are always exempt.",
  },
  {
    question: "How do I check if my plate number is coded today?",
    answer:
      "You can quickly check if your plate number is coded today by using the LTO Tracker Coding Checker tool on our website. Simply enter the last digit of your plate number, and the tool will tell you which day your vehicle is restricted and whether coding is in effect today. You can also check by remembering the simple pattern: 1 and 2 on Monday, 3 and 4 on Tuesday, 5 and 6 on Wednesday, 7 and 8 on Thursday, 9 and 0 on Friday. No coding on weekends and holidays.",
  },
];

export default function MmdaNumberCoding() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "MMDA Number Coding" },
        ]}
      />

      <ArticleSchema
        headline={`MMDA Number Coding Scheme ${CURRENT_YEAR_STR} — Schedule, Exemptions & Penalties`}
        description="Complete guide to the MMDA Number Coding Scheme (UVVRP) in Metro Manila. Daily schedule, window hours, exemptions, and penalties."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/mmda-number-coding"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "MMDA Number Coding",
            url: "https://ltotrackeronline.ph/guides/mmda-number-coding",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            MMDA Number Coding Scheme {CURRENT_YEAR_STR} — Schedule, Exemptions & Penalties
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
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
              If you drive in Metro Manila, the MMDA Number Coding Scheme is one
              of the most important traffic rules you need to know.{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{" "}
              provides this comprehensive guide to help you understand the
              Unified Vehicular Volume Reduction Program (UVVRP), commonly known
              as the number coding scheme, which restricts vehicles from using
              major roads in Metro Manila on certain days based on the last digit
              of their plate number. This traffic management program has been in
              effect since 1995 and remains one of the primary strategies used
              by the Metropolitan Manila Development Authority (MMDA) to reduce
              traffic congestion in the National Capital Region (NCR).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding the number coding schedule, window hours,
              exemptions, and penalties is essential for every motorist who
              drives in Metro Manila — whether you are a daily commuter, a
              provincial visitor, or a commercial driver. In this guide, we
              cover everything you need to know about the number coding scheme
              for {CURRENT_YEAR_STR}, including the latest updates to the rules, which
              vehicles are exempt, and how to plan your travel to avoid
              violations.
            </p>
          </section>

          <section>
            <h2
              id="what-is-uvvrp"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What Is the UVVRP (Number Coding)?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Unified Vehicular Volume Reduction Program (UVVRP) is a
              traffic management scheme implemented by the{" "}
              <a
                href="https://mmda.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Metropolitan Manila Development Authority (MMDA)
              </a>{" "}
              to reduce the volume of vehicles on Metro Manila roads during peak
              hours. The program assigns a specific day of the week when
              vehicles are restricted from traveling on major thoroughfares
              based on the last digit of their license plate number.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The UVVRP was first introduced in 1995 through MMDA Regulation
              No. 96-005 and has undergone several modifications over the years.
              The original single-window scheme had one coding period per day,
              but this was later changed to the current two-window system to
              focus restrictions on peak commuting hours while allowing midday
              travel for coded vehicles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The primary goal of the number coding scheme is to remove
              approximately 20% of private vehicles from the road each weekday,
              thereby reducing traffic congestion, lowering carbon emissions,
              and improving air quality in the metropolitan area. While the
              effectiveness of the program has been debated, it remains a
              cornerstone of Metro Manila&apos;s traffic management strategy.
            </p>
          </section>

          <section>
            <h2
              id="coding-schedule"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Number Coding Schedule
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The number coding schedule is based on the last digit of your
              vehicle&apos;s license plate number. Here is the standard {CURRENT_YEAR_STR}{" "}
              MMDA number coding schedule:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                      Day
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                      Plate Ending
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                      Morning Window
                    </th>
                    <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                      Evening Window
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Monday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      1 and 2
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      7:00 AM - 10:00 AM
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Tuesday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      3 and 4
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      7:00 AM - 10:00 AM
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Wednesday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      5 and 6
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      7:00 AM - 10:00 AM
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Thursday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      7 and 8
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      7:00 AM - 10:00 AM
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Friday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      9 and 0
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      7:00 AM - 10:00 AM
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Saturday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700" colSpan={3}>
                      No number coding — all vehicles allowed
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700 font-medium">
                      Sunday
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700" colSpan={3}>
                      No number coding — all vehicles allowed
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              To quickly check if your vehicle is coded today, use our{" "}
              <Link
                href="/coding-checker"
                className="text-blue-600 hover:underline"
              >
                Coding Day Checker
              </Link>{" "}
              tool. Simply enter the last digit of your plate number and
              instantly see your coding schedule.
            </p>
          </section>

          <section>
            <h2
              id="window-hours"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Window Hours
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MMDA number coding scheme operates during two window periods
              on weekdays, targeting the peak morning and evening rush hours:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Morning window:</strong> 7:00 AM to 10:00 AM
              </li>
              <li>
                <strong>Evening window:</strong> 5:00 PM to 8:00 PM
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Between 10:01 AM and 4:59 PM (the midday gap), coded vehicles are
              free to travel on all roads in Metro Manila. Similarly, before
              7:00 AM and after 8:00 PM, there are no coding restrictions. This
              two-window system was designed to accommodate essential midday
              errands and business trips while focusing the volume reduction on
              the hours when traffic congestion is at its worst.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is important to note that the window hours refer to when
              the vehicle is on a covered road, not when the trip starts or
              ends. If you are driving on a covered road at 9:59 AM and your
              plate is coded that day, you are still in violation. Make sure to
              clear the covered area before the window period begins or wait
              until after it ends. Being caught at 9:58 AM is still a
              violation.
            </p>
          </section>

          <section>
            <h2
              id="covered-areas"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Covered Areas and Roads
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MMDA number coding scheme covers all major national highways,
              circumferential roads, and radial roads within Metro Manila. These
              include but are not limited to:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>EDSA</strong> (Epifanio de los Santos Avenue) — The main
                circumferential road connecting Caloocan to Pasay
              </li>
              <li>
                <strong>Commonwealth Avenue</strong> — A major road in Quezon
                City
              </li>
              <li>
                <strong>Quezon Avenue</strong> — Connecting Quezon City Circle
                to EDSA
              </li>
              <li>
                <strong>C-5 Road</strong> (Carlos P. Garcia Avenue) — A major
                circumferential road
              </li>
              <li>
                <strong>Roxas Boulevard</strong> — Along Manila Bay in Manila
                and Pasay
              </li>
              <li>
                <strong>Marcos Highway</strong> — Connecting Marikina to Rizal
                province
              </li>
              <li>
                <strong>Ortigas Avenue</strong> — Spanning from Manila to Pasig
                and beyond
              </li>
              <li>
                <strong>Shaw Boulevard</strong> — In Mandaluyong and Pasig
              </li>
              <li>
                <strong>España Boulevard</strong> — In Sampaloc, Manila
              </li>
              <li>
                <strong>Taft Avenue</strong> — In Manila, connecting to LRT
                Line 1
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that the number coding scheme generally does not apply to
              interior residential streets and purely local roads. However, some
              cities within Metro Manila have their own local coding ordinances
              that may extend the restriction to additional roads. For
              alternative routes on your coding day, check our{" "}
              <Link
                href="/guides/alternative-routes-metro-manila"
                className="text-blue-600 hover:underline"
              >
                Alternative Routes Guide for Metro Manila
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="exemptions"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Exemptions from Number Coding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certain categories of vehicles are exempt from the MMDA number
              coding scheme. The following vehicles may operate freely on all
              covered roads during coding hours:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Emergency vehicles:</strong> Ambulances, fire trucks,
                and other emergency response vehicles with proper markings and
                equipment.
              </li>
              <li>
                <strong>Philippine National Police (PNP) vehicles:</strong>{" "}
                Marked and unmarked police vehicles on official duty.
              </li>
              <li>
                <strong>Armed Forces of the Philippines (AFP) vehicles:</strong>{" "}
                Military vehicles on official duty.
              </li>
              <li>
                <strong>Government vehicles:</strong> Vehicles with official
                government plates (red plates with the government seal). These
                must be on official business.
              </li>
              <li>
                <strong>Diplomatic vehicles:</strong> Vehicles with diplomatic
                plates (blue plates).
              </li>
              <li>
                <strong>Public utility vehicles (PUVs):</strong> Buses, jeepneys,
                UV Express, taxis, TNVS (like Grab), and tricycles operating on
                authorized routes with valid franchise.
              </li>
              <li>
                <strong>School buses and service shuttles:</strong> School
                transport vehicles with MMDA-issued window cards and proper
                identification.
              </li>
              <li>
                <strong>Motorcycles:</strong> All motorcycles are exempt from the
                number coding scheme.
              </li>
              <li>
                <strong>Vehicles of persons with disability (PWD):</strong>{" "}
                Vehicles used by PWDs who hold a valid PWD ID and the vehicle
                displays a PWD sticker issued by the LGU.
              </li>
              <li>
                <strong>Newly purchased vehicles:</strong> Vehicles within 7
                days of purchase, as evidenced by the sales invoice or dealer
                documentation, are temporarily exempt while awaiting plate or
                conduction sticker assignment.
              </li>
              <li>
                <strong>Media vehicles:</strong> Accredited media vehicles with
                valid MMDA-issued window cards for news coverage purposes.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you believe your vehicle qualifies for an exemption, ensure you
              carry the supporting documentation at all times. Enforcing
              officers may ask for proof of exemption, and failure to present
              documentation may result in a citation even if your vehicle is
              technically exempt.
            </p>
          </section>

          <section>
            <h2
              id="penalties"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Penalties for Number Coding Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are caught driving on a covered road during coding hours on
              your restricted day, you will be issued a citation and penalized.
              The penalty structure for number coding violations is as follows:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Authority
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Fine (PHP)
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      MMDA (standard)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 300
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Payable at MMDA offices or online
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Makati City
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 300 - 500
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Local coding ordinance may apply
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Mandaluyong City
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 300 - 500
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Additional local coding restrictions
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      San Juan City
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 500 - 1,000
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Higher penalties for local coding violations
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              When apprehended, the enforcer will issue a Temporary
              Operator&apos;s Permit (TOP) or citation ticket. Your driver&apos;s
              license or the vehicle&apos;s CR/OR may be confiscated as
              collateral. You must settle the fine within the specified period
              (usually 5 to 7 days) to retrieve your documents. For details on
              settling traffic violations, refer to our{" "}
              <Link
                href="/guides/how-to-settle-traffic-violations"
                className="text-blue-600 hover:underline"
              >
                guide on settling traffic violations
              </Link>{" "}
              and use the{" "}
              <Link
                href="/penalty-calculator"
                className="text-blue-600 hover:underline"
              >
                Penalty Calculator
              </Link>{" "}
              to check the fine amount for specific violations.
            </p>
          </section>

          <section>
            <h2
              id="special-days"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Holidays and Special Non-Coding Days
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MMDA number coding scheme is suspended on the following
              occasions:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Regular holidays:</strong> New Year&apos;s Day, Araw ng
                Kagitingan, Maundy Thursday, Good Friday, Labor Day,
                Independence Day, National Heroes Day, Bonifacio Day, Christmas
                Day, Rizal Day, and other declared regular holidays.
              </li>
              <li>
                <strong>Special non-working holidays:</strong> Ninoy Aquino Day,
                All Saints&apos; Day, All Souls&apos; Day (if declared
                non-working), Feast of the Immaculate Conception, Last Day of
                the Year, Chinese New Year, EDSA Revolution Anniversary, and
                other declared special days.
              </li>
              <li>
                <strong>Special MMDA declarations:</strong> The MMDA may
                temporarily suspend the coding scheme during certain events,
                natural disasters, or special circumstances through official
                advisories.
              </li>
              <li>
                <strong>Holy Week and Christmas season:</strong> The MMDA
                typically lifts the number coding scheme during the Holy Week
                period and parts of the Christmas/New Year season to accommodate
                increased travel.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Always check the{" "}
              <a
                href="https://mmda.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                official MMDA website
              </a>{" "}
              or their social media accounts for the latest announcements on
              coding suspensions. The MMDA typically issues advisories before
              holidays and special events indicating whether the coding scheme
              is lifted.
            </p>
          </section>

          <section>
            <h2
              id="how-to-check"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              How to Check Your Coding Day
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Checking your coding day is straightforward. Here are the easiest
              methods:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Use our Coding Day Checker tool.</strong> Visit the{" "}
                <Link
                  href="/coding-checker"
                  className="text-blue-600 hover:underline"
                >
                  LTO Tracker Coding Checker
                </Link>{" "}
                and enter the last digit of your plate number. The tool
                instantly shows your coding day, current coding status, and
                window hours.
              </li>
              <li>
                <strong>Remember the pattern.</strong> The coding assignment
                follows a simple, consistent pattern that has not changed in
                years: 1-2 Monday, 3-4 Tuesday, 5-6 Wednesday, 7-8 Thursday,
                9-0 Friday. Memorize the pair that corresponds to your plate and
                you will always know your coding day.
              </li>
              <li>
                <strong>Check the MMDA website or social media.</strong> The{" "}
                <a
                  href="https://mmda.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-blue-600 hover:underline"
                >
                  MMDA official website
                </a>{" "}
                and their official Facebook and X (Twitter) accounts regularly
                post coding updates, especially regarding suspensions during
                holidays and special events.
              </li>
              <li>
                <strong>Check with Waze or Google Maps.</strong> Navigation apps
                like Waze and Google Maps sometimes display coding information
                for Metro Manila routes. However, these are not always
                up-to-date, so verify with official sources.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your vehicle does not yet have a permanent plate and is using a
              conduction sticker, the last digit of the conduction sticker
              number is used for coding purposes. You can check the status of
              your plate through our{" "}
              <Link
                href="/lto-plate-tracker"
                className="text-blue-600 hover:underline"
              >
                LTO Plate Tracker
              </Link>{" "}
              and our{" "}
              <Link
                href="/guides/how-to-check-lto-plate"
                className="text-blue-600 hover:underline"
              >
                guide on checking your LTO plate status
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="lgu-coding"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Local Government Unit (LGU) Coding Schemes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to the MMDA&apos;s UVVRP, several cities and
              municipalities within Metro Manila enforce their own local number
              coding ordinances. These local schemes may have different window
              hours, cover additional roads, or impose different penalties. Some
              notable LGU coding schemes include:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Makati City:</strong> Makati enforces its own coding
              scheme on specific roads within the city, including Ayala Avenue,
              Buendia Avenue (Gil Puyat Avenue), and other major
              thoroughfares. The coding hours may extend beyond the standard
              MMDA window hours, and the penalties may differ.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Mandaluyong City:</strong> Mandaluyong has local coding
              restrictions on Shaw Boulevard, Boni Avenue, and other major
              roads. Vehicles coded under the MMDA scheme are also restricted
              on Mandaluyong&apos;s covered local roads.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>San Juan City:</strong> San Juan implements a strict local
              coding scheme with potentially higher fines. The covered roads
              include Ortigas Avenue (within San Juan), N. Domingo Street, and
              other key routes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Las Pinas City, Paranaque City, Muntinlupa City:</strong>{" "}
              The southern Metro Manila cities also have coding restrictions on
              their major roads, particularly along Alabang-Zapote Road and the
              roads leading to and from the South Luzon Expressway (SLEX).
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              When driving through different cities in Metro Manila, be aware
              that you may be subject to both the MMDA&apos;s UVVRP and the
              local LGU&apos;s coding ordinance. Check with the specific LGU
              for their latest coding rules.
            </p>
          </section>

          <section>
            <h2
              id="alternative-routes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Alternative Routes and Tips
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you must travel on your coding day during window hours, here
              are strategies and tips to help you get around:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Use toll expressways.</strong> Expressways like the
                Skyway, NLEX, SLEX, TPLEX, MCX, and NAIA Expressway are not
                covered by the number coding scheme. You can use these to bypass
                coded areas, though toll fees apply. However, be aware that the
                exit roads may be covered by coding.
              </li>
              <li>
                <strong>Take interior roads.</strong> Local residential streets
                and barangay roads are generally not covered by the MMDA number
                coding. However, they tend to be narrower and may have their own
                traffic restrictions. For specific route suggestions, see our{" "}
                <Link
                  href="/guides/alternative-routes-metro-manila"
                  className="text-blue-600 hover:underline"
                >
                  Alternative Routes in Metro Manila Guide
                </Link>
                .
              </li>
              <li>
                <strong>Travel during non-window hours.</strong> Since the
                midday gap (10:01 AM to 4:59 PM) is free from coding, plan your
                trips to fall within this window if possible.
              </li>
              <li>
                <strong>Use public transportation.</strong> On your coding day,
                consider commuting via the MRT, LRT, P2P buses, or other public
                transport options. This not only keeps you within the law but
                also reduces your transportation costs and carbon footprint.
              </li>
              <li>
                <strong>Carpool or use ride-hailing services.</strong> Vehicles
                used by TNVS (Transportation Network Vehicle Services) like Grab
                are exempt from the coding scheme when they are on active
                trips.
              </li>
              <li>
                <strong>Consider getting a second vehicle.</strong> Some
                motorists purchase a second vehicle (often a motorcycle, which
                is exempt from coding) to use on their coding day. While this
                increases costs, it provides flexibility.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="history"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              History and Purpose of the Number Coding Scheme
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The number coding scheme was first introduced in 1995 by the MMDA
              under its then-Chairman Prospero Oreta. The program was inspired
              by similar traffic restriction schemes in other congested
              megacities around the world, such as the &quot;Hoy No
              Circula&quot; program in Mexico City and the odd-even plate
              restrictions in cities like Beijing and New Delhi.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Originally, the coding scheme operated with a single window from
              7:00 AM to 7:00 PM, restricting coded vehicles for the entire day.
              This was later modified to the current two-window system to reduce
              the economic impact on motorists who needed to run errands or
              conduct business during the day. The modification created the
              midday &quot;free window&quot; that allows all vehicles to
              travel between the morning and evening peaks.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, the scheme has been subject to various
              modifications, temporary suspensions, and expansions. During the
              COVID-19 pandemic in 2020 and 2021, the number coding scheme was
              suspended for extended periods due to reduced traffic volumes and
              public transportation restrictions. The scheme was gradually
              reinstated as normal activities resumed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The effectiveness of the number coding scheme remains a topic of
              debate. Critics argue that it encourages families to purchase
              second or third vehicles, ultimately increasing the total number
              of cars on the road. Proponents maintain that without the scheme,
              traffic congestion in Metro Manila would be significantly worse.
              Regardless of the debate, the number coding scheme remains in
              effect and compliance is mandatory for all motorists driving in
              Metro Manila.
            </p>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/coding-checker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Number Coding Day Checker →
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
                Traffic Penalty Calculator →
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
