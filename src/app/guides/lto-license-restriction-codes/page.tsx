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

const guide = getGuideBySlug("lto-license-restriction-codes")!;

export const metadata: Metadata = {
  title: `LTO License Restriction Codes ${CURRENT_YEAR_STR} — Complete Guide to All Codes`,
  description: `Complete guide to all LTO driver's license restriction codes in ${CURRENT_YEAR_STR}. Understand what restriction codes 1 through 8 mean, what vehicles each code allows you to drive, how to add or upgrade restriction codes, and requirements for each category.`,
  keywords: [
    "LTO restriction codes",
    `LTO license restriction codes ${CURRENT_YEAR_STR}`,
    "restriction code 1",
    "restriction code 2",
    "restriction code 3",
    "LTO license codes meaning",
    "what is restriction code on LTO license",
    "LTO restriction code motorcycle",
    "LTO restriction code car",
    "driver's license restriction codes Philippines",
    "how to add restriction code LTO",
    "LTO restriction code upgrade",
  ],
  openGraph: {
    title: `LTO License Restriction Codes ${CURRENT_YEAR_STR} — Complete Guide to All Codes`,
    description:
      "Complete guide to all LTO driver's license restriction codes. Learn what each code means, what vehicles you can drive, and how to upgrade your restriction codes.",
    url: "https://ltotrackeronline.ph/guides/lto-license-restriction-codes",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `LTO License Restriction Codes ${CURRENT_YEAR_STR} — Complete Guide to All Codes`,
    description:
      "Complete guide to all LTO driver's license restriction codes in the Philippines. What each code means and how to upgrade.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-license-restriction-codes",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "what-are-restriction-codes", text: "What Are Restriction Codes?", level: 2 },
  { id: "complete-list", text: "Complete List of Restriction Codes", level: 2 },
  { id: "code-1", text: "Restriction Code 1 — Motorcycles", level: 3 },
  { id: "code-2", text: "Restriction Code 2 — Light Vehicles", level: 3 },
  { id: "code-3", text: "Restriction Code 3 — Heavy Vehicles", level: 3 },
  { id: "code-4", text: "Restriction Code 4 — Articulated Vehicles", level: 3 },
  { id: "code-5", text: "Restriction Code 5 — Special Vehicles", level: 3 },
  { id: "code-6-7-8", text: "Restriction Codes 6, 7, and 8", level: 3 },
  { id: "condition-codes", text: "Condition Codes on Your License", level: 2 },
  { id: "how-to-add", text: "How to Add a Restriction Code", level: 2 },
  { id: "how-to-upgrade", text: "How to Upgrade Your Restriction Code", level: 2 },
  { id: "non-pro-vs-pro", text: "Non-Professional vs. Professional License", level: 2 },
  { id: "common-mistakes", text: "Common Mistakes and Violations", level: 2 },
];

const faqs = [
  {
    question: "What is restriction code 1 on an LTO license?",
    answer:
      "Restriction code 1 on an LTO driver's license means the holder is authorized to operate motorcycles and scooters only. This is the most common restriction code for riders who obtained their license specifically for two-wheeled motor vehicles. Code 1 covers all motorcycles regardless of engine displacement, including mopeds, scooters, underbone motorcycles, and large-displacement sport bikes. However, code 1 alone does not authorize the holder to drive cars, vans, trucks, or any four-wheeled motor vehicle.",
  },
  {
    question: "What is restriction code 2 on an LTO license?",
    answer:
      "Restriction code 2 authorizes the holder to drive motor vehicles with a gross vehicle weight (GVW) not exceeding 4,500 kilograms. This includes most private cars, SUVs, pickup trucks, vans, and similar light vehicles. Code 2 is the most sought-after restriction code for car owners and daily commuters. If your license has both codes 1 and 2, you are authorized to drive both motorcycles and light four-wheeled vehicles.",
  },
  {
    question: "Can I drive a motorcycle if my license only has restriction code 2?",
    answer:
      "No, you cannot legally drive a motorcycle if your license only has restriction code 2. Code 2 only authorizes you to drive light four-wheeled vehicles (cars, SUVs, vans). To legally ride a motorcycle, you need restriction code 1 on your license. If you are caught driving a motorcycle with only code 2, you can be cited for driving without a valid license for that vehicle type, which carries a fine. You need to apply for the addition of restriction code 1 through the LTO, which requires passing a practical driving test for motorcycles.",
  },
  {
    question: "How do I add a restriction code to my existing LTO license?",
    answer:
      "To add a restriction code to your existing LTO license, visit any LTO district office and apply for the addition. The general requirements include your current valid driver's license, a medical certificate from an LTO-accredited clinic, and passing the practical driving examination for the vehicle type corresponding to the new restriction code. For example, if you want to add code 1 (motorcycles), you must demonstrate your ability to operate a motorcycle during the practical exam. The fees include the license fee, computer fee, and examination fee. The entire process can typically be completed in a single day.",
  },
  {
    question: "What restriction code do I need to drive a truck?",
    answer:
      "To drive a truck, you need at least restriction code 3 on a professional driver's license. Code 3 covers motor vehicles with a gross vehicle weight (GVW) exceeding 4,500 kilograms, which includes medium and heavy-duty trucks, large buses, and other heavy vehicles. For articulated vehicles (trucks with trailers or tractor-trailer combinations), you need restriction code 4. Note that codes 3 and 4 are only available on professional licenses, not non-professional licenses.",
  },
  {
    question: "What is the difference between restriction codes on non-professional and professional licenses?",
    answer:
      "The main difference is the range of restriction codes available and their intended use. Non-professional licenses can carry restriction codes 1 (motorcycles) and 2 (light vehicles up to 4,500 kg GVW), and are intended for personal and private use only. Professional licenses can carry restriction codes 1 through 8, covering all vehicle types including heavy vehicles, articulated vehicles, and special vehicles. Professional license holders are also authorized to drive for-hire vehicles (taxis, ride-hailing cars, jeepneys, buses) and commercial vehicles, which non-professional license holders are not permitted to do.",
  },
  {
    question: "Do restriction codes expire or need to be renewed separately?",
    answer:
      "No, restriction codes do not expire or need to be renewed separately from your driver's license. When you renew your license, all existing restriction codes on your license are automatically carried over to your new license. The restriction codes remain valid for the entire duration of your license validity period (5 or 10 years). However, if you want to add new restriction codes during your renewal, you will need to pass the corresponding practical driving examination at the time of renewal.",
  },
  {
    question: "What happens if I drive a vehicle not covered by my restriction code?",
    answer:
      "Driving a vehicle that is not covered by your restriction code is considered a violation of RA 4136 (Land Transportation and Traffic Code). It is treated as driving without a proper license for that vehicle category. The penalties include a fine ranging from PHP 3,000 to PHP 10,000 for the first offense. Repeat offenders face higher fines and potential license suspension. Additionally, if you are involved in an accident while driving a vehicle outside your restriction code coverage, your insurance claim may be denied because you were not legally authorized to operate that vehicle type.",
  },
];

export default function LtoLicenseRestrictionCodes() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "License Restriction Codes" },
        ]}
      />

      <ArticleSchema
        headline={`LTO License Restriction Codes ${CURRENT_YEAR_STR} — Complete Guide to All Codes`}
        description={`Complete guide to all LTO driver's license restriction codes in ${CURRENT_YEAR_STR}. Understand what each code means, what vehicles each code allows, and how to add or upgrade restriction codes.`}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/lto-license-restriction-codes"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "License Restriction Codes",
            url: "https://ltotrackeronline.ph/guides/lto-license-restriction-codes",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LTO License Restriction Codes {CURRENT_YEAR_STR} — Complete Guide to All Codes
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>16 min read</span>
          </div>

          <section>
            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}
              provides this comprehensive guide to understanding the restriction codes printed on your Philippine driver&apos;s license. Every LTO-issued driver&apos;s license carries one or more restriction codes that define exactly which types of motor vehicles you are legally authorized to operate. Driving a vehicle that falls outside your authorized restriction codes is a traffic violation that can result in fines, license suspension, and complications with insurance claims.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many Filipino motorists are unsure about what their restriction codes mean, or are unaware that they may need additional codes to drive certain vehicles. This guide explains every restriction code from 1 through 8, the condition codes that may appear on your license, and the process for adding or upgrading your codes. Whether you are a first-time applicant deciding which codes to apply for, or an existing license holder looking to expand your driving privileges, this guide has you covered.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction codes are governed by{" "}
              <a href="https://www.officialgazette.gov.ph/1964/06/20/republic-act-no-4136/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">Republic Act No. 4136</a>{" "}
              (Land Transportation and Traffic Code) and its subsequent amendments, as well as LTO administrative orders that define vehicle classifications and licensing requirements. The current coding system has been in use for several decades and provides a standardized framework for vehicle operation authorization across the Philippines.
            </p>
          </section>

          <section>
            <h2 id="what-are-restriction-codes" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What Are Restriction Codes?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction codes are alphanumeric identifiers printed on the front of your LTO driver&apos;s license card. They appear in a dedicated field labeled &quot;Restrictions&quot; or &quot;RC&quot; on the license. Each code corresponds to a specific category of motor vehicle based on factors such as gross vehicle weight (GVW), number of wheels, engine type, and intended use.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The restriction code system serves several important purposes. First, it ensures that drivers have demonstrated competency in operating the specific type of vehicle they are authorized to drive. A person who has only trained and tested on a motorcycle should not be driving a heavy truck. Second, it allows traffic enforcement officers to quickly verify whether a driver is legally operating a particular vehicle. Third, it serves as a basis for insurance coverage determination, since insurance policies typically require the driver to hold a valid license for the vehicle type involved.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your license can carry multiple restriction codes simultaneously. For example, a license with codes &quot;1, 2&quot; means the holder is authorized to drive both motorcycles and light vehicles (cars, SUVs, vans). Each code must be individually earned by passing the corresponding practical driving examination.
            </p>
          </section>

          <section>
            <h2 id="complete-list" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Complete List of Restriction Codes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Below is the complete table of all LTO restriction codes, their descriptions, and the vehicle types they cover:
            </p>
            <div className="overflow-x-auto mb-6 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Code</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Vehicle Category</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Description</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">License Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">1</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Motorcycles / Scooters</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Two- or three-wheeled motor vehicles of any engine displacement</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Non-Pro / Pro</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">2</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Light Vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Motor vehicles with GVW of 4,500 kg or less (cars, SUVs, vans, pickups)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Non-Pro / Pro</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">3</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Heavy Vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Motor vehicles with GVW exceeding 4,500 kg (trucks, buses, heavy equipment)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Pro only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">4</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Articulated Vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Tractor-trailer combinations, articulated buses, and similar multi-section vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Pro only</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">5</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Special Vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Construction equipment, agricultural machinery, and other special-purpose vehicles</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Pro only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">6</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Vehicles with AT Only</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Automatic transmission vehicles only (typically combined with code 2)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Non-Pro / Pro</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">7</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Vehicles with Corrective Lens</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driver must wear corrective eyeglasses or contact lenses while driving</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Non-Pro / Pro</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700 font-semibold">8</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Daylight Driving Only</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Driver is only allowed to operate motor vehicles during daylight hours</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Non-Pro / Pro</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 id="code-1" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Restriction Code 1 — Motorcycles and Scooters
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction code 1 covers all two-wheeled and three-wheeled motor vehicles regardless of engine displacement. This includes mopeds (50cc and below), underbone motorcycles (110cc-125cc), standard motorcycles, sport bikes, cruisers, adventure bikes, and even large-displacement touring motorcycles. Tricycles (motorcycles with attached sidecars used as public utility vehicles) also fall under code 1 for the driver.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To obtain restriction code 1, applicants must pass the practical driving examination using a motorcycle. The exam tests skills such as balancing, figure-eight maneuvering, braking, obstacle avoidance, and road riding. Unlike some countries that differentiate between small and large motorcycle licenses, the Philippine system treats all motorcycles under a single restriction code regardless of engine size.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Code 1 is available on both non-professional and professional licenses. For-hire motorcycle operations such as motorcycle taxi services (like those provided by ride-hailing apps) require a professional license with code 1.
            </p>

            <h3 id="code-2" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Restriction Code 2 — Light Vehicles (Up to 4,500 kg GVW)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction code 2 is the most commonly held restriction code among Filipino car owners. It covers all motor vehicles with a gross vehicle weight (GVW) not exceeding 4,500 kilograms. This encompasses the vast majority of private vehicles on Philippine roads, including sedans, hatchbacks, compact cars, SUVs, crossovers, mid-size pickups, AUVs (Asian Utility Vehicles), and vans like the Toyota HiAce and Nissan NV350 Urvan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The practical driving exam for code 2 requires the applicant to demonstrate competency in operating a four-wheeled vehicle. The test typically includes forward driving, reversing, parking (parallel and perpendicular), turning, lane changing, and basic road navigation. If you took the exam using a manual transmission vehicle, your code 2 covers both manual and automatic transmission vehicles. If you took the exam using an automatic transmission vehicle only, you may receive an additional condition code (code 6) restricting you to automatic transmission vehicles.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Code 2 is available on both non-professional and professional licenses. To drive for-hire services (taxi, TNVS/ride-hailing, PUJ) using light vehicles, you must have a professional license with code 2.
            </p>

            <h3 id="code-3" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Restriction Code 3 — Heavy Vehicles (Over 4,500 kg GVW)
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction code 3 covers motor vehicles with a gross vehicle weight exceeding 4,500 kilograms. This includes medium-duty trucks, heavy-duty trucks, large buses, dump trucks, fire trucks, concrete mixers, and other heavy commercial and industrial vehicles. Code 3 is only available on professional driver&apos;s licenses, as operating heavy vehicles requires specialized training and skills that go beyond standard passenger car driving.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The practical driving examination for code 3 is more rigorous than for codes 1 and 2. Applicants must demonstrate the ability to safely operate a heavy vehicle, including skills such as wide turning, air brake management, hill starts with heavy loads, and maneuvering in tight spaces. Applicants typically need to complete a Practical Driving Course (PDC) specifically designed for heavy vehicle operation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Professional drivers holding code 3 are in high demand in the logistics, construction, and public transportation sectors. Many bus companies, trucking firms, and construction companies require their drivers to hold a professional license with code 3. A holder of code 3 is also authorized to drive all vehicles covered by codes 1 and 2 (motorcycles and light vehicles), as the higher code generally subsumes the lower vehicle categories.
            </p>

            <h3 id="code-4" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Restriction Code 4 — Articulated Vehicles
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction code 4 is the most advanced vehicle operation code, covering articulated vehicles. Articulated vehicles are those composed of two or more separate sections connected by a pivot joint, such as tractor-trailer combinations (semi-trucks), road trains, articulated buses, and multi-axle transport vehicles. This code is exclusively available on professional licenses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Operating articulated vehicles requires advanced driving skills including managing the pivot point during turns, understanding trailer sway dynamics, executing reverse maneuvers with a trailer, and managing the significantly longer stopping distances. The practical driving exam for code 4 is the most demanding, and few accredited driving schools offer training for this category.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Drivers with code 4 are typically employed in the heavy logistics and cargo transportation industry, operating container vans, fuel tankers, and long-haul freight vehicles. Code 4 holders are authorized to drive all vehicle categories covered by codes 1 through 3 as well.
            </p>

            <h3 id="code-5" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Restriction Code 5 — Special Vehicles
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Restriction code 5 covers special-purpose vehicles that do not fall neatly into the standard vehicle categories. This includes construction equipment such as bulldozers, backhoes, graders, and road rollers; agricultural machinery such as tractors and harvesters; and other specialized vehicles such as forklifts and airport ground support equipment. Code 5 is only available on professional licenses.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Special vehicle operation requires knowledge of the unique handling characteristics, safety features, and operational procedures specific to each type of equipment. The practical exam for code 5 focuses on the safe operation of the specific equipment category the applicant intends to use. Employers in the construction, agriculture, and industrial sectors often require their operators to hold a professional license with code 5.
            </p>

            <h3 id="code-6-7-8" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Restriction Codes 6, 7, and 8 — Condition Codes
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Codes 6, 7, and 8 are sometimes referred to as &quot;condition codes&quot; rather than vehicle category codes. They impose specific conditions on the driver rather than defining a vehicle type:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li><strong>Code 6 — Automatic Transmission Only:</strong> This code is added when the driver passed the practical driving examination using an automatic transmission vehicle and has not demonstrated competency with a manual transmission. Drivers with code 6 are restricted to operating automatic transmission vehicles only. To remove this restriction, the driver must pass the practical driving exam using a manual transmission vehicle.</li>
              <li><strong>Code 7 — Corrective Lens Required:</strong> This code is assigned based on the results of the medical/vision exam. If the driver&apos;s visual acuity requires corrective lenses (eyeglasses or contact lenses) to meet the LTO&apos;s minimum vision standards, code 7 is added to the license. The driver must wear their prescribed corrective lenses at all times while operating a motor vehicle. Driving without corrective lenses when code 7 is on your license is a traffic violation.</li>
              <li><strong>Code 8 — Daylight Driving Only:</strong> This code restricts the driver to operating motor vehicles only during daylight hours. It is typically assigned to drivers with vision conditions that do not meet the LTO&apos;s minimum standards for nighttime driving, such as night blindness (nyctalopia) or other visual impairments that affect low-light vision. Driving at night with code 8 on your license is a violation.</li>
            </ul>
          </section>

          <section>
            <h2 id="condition-codes" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Condition Codes on Your License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In addition to the vehicle category restriction codes (1-5) and the condition codes (6-8), the LTO may also note special conditions or endorsements on your license. These are typically indicated through a combination of codes or through notes in the &quot;Conditions&quot; field of your license card.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Common license conditions include hearing aid requirements for drivers with hearing impairments, vehicle modification requirements for drivers with physical disabilities (such as hand controls or wheelchair-accessible vehicle modifications), and geographic restrictions in certain rare circumstances. These conditions are determined during the medical examination phase of the licensing process.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is important to understand and comply with all codes and conditions on your license. Non-compliance is a traffic violation and can have serious legal and insurance implications. If you believe a condition code was assigned in error, you can request a re-evaluation at any LTO district office by undergoing a new medical examination.
            </p>
          </section>

          <section>
            <h2 id="how-to-add" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Add a Restriction Code
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you already have a valid driver&apos;s license and want to add a new restriction code (for example, adding code 1 for motorcycles to your existing code 2 license), follow this process:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li><strong>Visit any LTO district office.</strong> Unlike initial license applications, adding a restriction code is not tied to a specific branch. You can process this at any LTO office nationwide.</li>
              <li><strong>Bring your requirements.</strong> You will need your current valid driver&apos;s license, a medical certificate from an LTO-accredited clinic, and a valid government-issued ID. For the medical exam, make sure to complete it at an accredited clinic before your LTO visit.</li>
              <li><strong>Submit your application.</strong> At the evaluation window, inform the evaluator that you want to add a restriction code to your existing license. They will verify your documents and eligibility.</li>
              <li><strong>Take the practical driving exam.</strong> You must pass the practical driving examination for the vehicle type corresponding to the new code. For example, to add code 1, you must demonstrate motorcycle riding skills. The LTO may require you to provide your own vehicle for the exam, or the testing facility may have vehicles available.</li>
              <li><strong>Pay the fees.</strong> The fees for adding a restriction code include the license fee, computer fee, license card fee, and examination fee. The total is approximately PHP 600 to PHP 700. For a full breakdown, see our{" "}
                <Link href="/guides/lto-fees-schedule" className="text-[#1e40af] font-medium hover:underline">LTO fees schedule</Link>.
              </li>
              <li><strong>Receive your updated license.</strong> After passing the exam and paying the fees, your biometrics will be captured and a new license card will be issued with the additional restriction code included.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              The process for adding a restriction code can typically be completed within a single day. However, during busy periods, you may need to return on a separate day for the practical exam. Using the{" "}
              <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">LTMS Portal</a>{" "}
              to schedule your visit in advance can help reduce wait times.
            </p>
          </section>

          <section>
            <h2 id="how-to-upgrade" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              How to Upgrade Your Restriction Code
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upgrading your restriction code refers to obtaining authorization for a higher vehicle category or removing a condition code. Here are the most common upgrade scenarios:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Upgrading from Non-Professional to Professional License:</strong> This is the most common upgrade path. A professional license allows you to drive for-hire and commercial vehicles, and opens access to higher restriction codes (3, 4, 5). To upgrade, you must hold a valid non-professional license, complete a Practical Driving Course (PDC) at an accredited driving school, pass both the written and practical driving examinations for the professional category, and meet the medical requirements including a drug test. For the complete renewal and upgrade process, see our{" "}
              <Link href="/guides/lto-license-renewal" className="text-[#1e40af] font-medium hover:underline">LTO license renewal guide</Link>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Removing Code 6 (Automatic Transmission Restriction):</strong> If your license has code 6, which restricts you to automatic transmission vehicles, you can remove this restriction by passing the practical driving examination using a manual transmission vehicle. Visit any LTO district office with your requirements and request the removal of the AT restriction. After passing the manual transmission exam, your new license will be issued without code 6.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Adding Higher Vehicle Category Codes (3, 4, 5):</strong> To add restriction codes 3 (heavy vehicles), 4 (articulated vehicles), or 5 (special vehicles), you must first hold a professional license. Then, complete the specialized Practical Driving Course for the desired vehicle category, pass the corresponding practical exam, and pay the associated fees. These higher codes represent progressively more specialized and demanding driving competencies.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Note on timing:</strong> Upgrading your restriction code can be done at any time while your license is valid. However, it is often most efficient to combine an upgrade with your scheduled license renewal, as this avoids the need for an additional visit and duplicate processing fees.
            </p>
          </section>

          <section>
            <h2 id="non-pro-vs-pro" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Non-Professional vs. Professional License
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The type of driver&apos;s license you hold determines which restriction codes are available to you and what driving activities you are legally permitted to perform:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Aspect</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Non-Professional License</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Professional License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Available Codes</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">1, 2 (+ condition codes 6, 7, 8)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">1, 2, 3, 4, 5 (+ condition codes 6, 7, 8)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">For-Hire Driving</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not allowed</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Allowed (taxi, TNVS, PUJ, bus, etc.)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Commercial Vehicle Operation</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not allowed</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Allowed</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Renewal Fee (5-Year)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">~PHP 585</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">~PHP 685</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Drug Test Required</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Not typically</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you are planning to work as a professional driver, whether for a ride-hailing service, a bus company, a trucking firm, or any other commercial driving role, you must hold a professional license with the appropriate restriction code. Driving for hire with only a non-professional license is a serious violation that can result in fines, license confiscation, and legal liability issues.
            </p>
          </section>

          <section>
            <h2 id="common-mistakes" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Common Mistakes and Violations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Understanding restriction codes helps you avoid common mistakes that many Filipino motorists make. Here are the most frequent violations related to restriction codes:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li><strong>Driving a motorcycle with only code 2.</strong> This is extremely common. Many car drivers assume that their license automatically covers motorcycles, but code 2 only covers four-wheeled light vehicles. You need code 1 specifically for motorcycles. The fine for this violation ranges from PHP 3,000 to PHP 10,000.</li>
              <li><strong>Driving a manual transmission with code 6.</strong> If your license has code 6 (automatic transmission only), you are not allowed to drive a manual transmission vehicle. This violation is treated the same as driving without a proper license for the vehicle type.</li>
              <li><strong>Driving without corrective lenses when code 7 is on your license.</strong> If code 7 appears on your license, you must wear your prescribed eyeglasses or contact lenses every time you drive. Being caught without them is a traffic violation.</li>
              <li><strong>Driving for hire with a non-professional license.</strong> Even if you have the correct vehicle category code (1 or 2) on your non-professional license, using it for for-hire activities (ride-hailing, taxi, delivery services) is illegal. For-hire driving requires a professional license.</li>
              <li><strong>Driving a heavy truck with only code 2.</strong> Light vehicle drivers sometimes assume they can drive any truck, but vehicles exceeding 4,500 kg GVW require code 3 on a professional license. This is particularly relevant for large delivery trucks and construction vehicles.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The penalties for restriction code violations are outlined in RA 4136 and subsequent LTO memorandum circulars. For a full list of traffic violation fines, see our{" "}
              <Link href="/guides/traffic-violations-fines" className="text-[#1e40af] font-medium hover:underline">traffic violations and fines guide</Link>. If you have already been cited for a violation, learn how to settle it in our{" "}
              <Link href="/guides/how-to-settle-traffic-violations" className="text-[#1e40af] font-medium hover:underline">how to settle traffic violations guide</Link>.
            </p>
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
              <Link href="/coding-checker" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                Number Coding Checker →
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
