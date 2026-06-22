import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import {
  WebApplicationSchema,
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { codingFAQs } from "@/data/faqs";
import CodingChecker from "@/components/tools/CodingChecker";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Number Coding Scheme Checker — UVVRP Today",
  description:
    "Check if your vehicle is subject to the MMDA number coding scheme (UVVRP) today. Enter your plate number to instantly find out your coding day and window hours.",
  keywords: [
    "number coding",
    "UVVRP",
    "MMDA coding",
    "coding scheme",
    "number coding today",
    "coding day checker",
    "Manila coding",
    "plate number coding",
    "coding schedule",
  ],
  openGraph: {
    title:
      "Number Coding Scheme Checker — UVVRP Today",
    description:
      "Check if your vehicle is subject to the MMDA number coding scheme today. Instant results based on your plate number.",
    url: "https://ltotrackeronline.ph/coding-checker",
    type: "website",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/LTO-Coding-Checker-Banner.webp",
        width: 1200,
        height: 630,
        alt: "MMDA Number Coding Scheme Checker — Check your coding day instantly",
      },
    ],
  },
};

export default function CodingCheckerPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Number Coding Checker" },
        ]}
      />
      <WebApplicationSchema
        name="Number Coding Scheme Checker"
        description="Check if your vehicle is subject to the MMDA number coding scheme (UVVRP) today. Enter your plate number to instantly find out your coding day."
        url="https://ltotrackeronline.ph/coding-checker"
      />
      <FAQPageSchema faqs={codingFAQs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://ltotrackeronline.ph" },
          {
            label: "Number Coding Checker",
            href: "https://ltotrackeronline.ph/coding-checker",
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Number Coding Scheme Checker — Is Your Vehicle Coded Today?
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Use <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}to find out instantly if your vehicle is subject to the <a href="https://mmda.gov.ph" target="_blank" rel="noopener noreferrer nofollow">MMDA</a> Unified
        Vehicular Volume Reduction Program (UVVRP), commonly known as the
        number coding scheme. Simply enter the last digit of your plate number
        to check your coding day and the window hours when your vehicle is not
        allowed on major roads in Metro Manila. Stay compliant and avoid hefty
        fines by knowing your coding schedule before you drive.
      </p>

      <div className="my-8">
        <CodingChecker />
      </div>

      {/* Tool Banner */}
      <div className="my-10">
        <Image
          src="/img/LTO-Coding-Checker-Banner.webp"
          alt="MMDA Number Coding Scheme Checker — Check if your vehicle is subject to UVVRP coding today in Metro Manila"
          width={1200}
          height={630}
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* What Is the Number Coding Scheme */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Is the MMDA Number Coding Scheme (UVVRP)?
        </h2>
        <p className="text-gray-700 mb-4">
          The Unified Vehicular Volume Reduction Program (UVVRP), popularly
          known as the &ldquo;number coding scheme&rdquo; or simply
          &ldquo;coding,&rdquo; is a traffic management program implemented by
          the Metropolitan Manila Development Authority (MMDA) to reduce the
          volume of vehicles on the roads of Metro Manila during peak hours.
          The program was first introduced in 1995 under MMDA Regulation No.
          96-005 and has been modified several times since then to address the
          evolving traffic conditions in the National Capital Region.
        </p>
        <p className="text-gray-700 mb-4">
          Under the number coding scheme, vehicles are prohibited from
          traveling on certain major roads in Metro Manila on a specific day of
          the week, based on the last digit of their license plate number. The
          restriction applies during two window periods: the morning window
          from 7:00 AM to 10:00 AM and the afternoon window from 5:00 PM to
          8:00 PM on weekdays (Monday through Friday). The scheme does not apply
          on weekends and designated public holidays.
        </p>
        <p className="text-gray-700 mb-4">
          The goal of the UVVRP is to reduce the number of vehicles on the
          road by approximately 20% on any given weekday, thereby easing
          traffic congestion, reducing travel times, and lowering air pollution
          from vehicle emissions. While the program has been the subject of
          debate regarding its effectiveness, it remains one of the primary
          traffic management tools used by the MMDA in Metro Manila.
        </p>
      </section>

      {/* Coding Schedule */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Current Number Coding Schedule
        </h2>
        <p className="text-gray-700 mb-4">
          The number coding schedule assigns specific days of the week to plate
          numbers based on their last digit. Here is the current schedule:
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Day
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Last Digit of Plate Number
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Monday</td>
                <td className="border border-gray-300 px-4 py-2">1 and 2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Tuesday</td>
                <td className="border border-gray-300 px-4 py-2">3 and 4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Wednesday</td>
                <td className="border border-gray-300 px-4 py-2">5 and 6</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Thursday</td>
                <td className="border border-gray-300 px-4 py-2">7 and 8</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Friday</td>
                <td className="border border-gray-300 px-4 py-2">9 and 0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 mb-4">
          <strong>Window Hours:</strong> 7:00 AM to 10:00 AM and 5:00 PM to
          8:00 PM. Outside of these window hours, all vehicles may travel
          freely regardless of their plate number. The scheme does not apply on
          Saturdays, Sundays, and national holidays declared by Malacanang.
        </p>
      </section>

      {/* Where Does Coding Apply */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Where Does the Number Coding Scheme Apply?
        </h2>
        <p className="text-gray-700 mb-4">
          The MMDA number coding scheme applies to all national roads and
          circumferential roads within Metro Manila. This includes but is not
          limited to the following major thoroughfares:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>EDSA (Epifanio de los Santos Avenue)</li>
          <li>Commonwealth Avenue</li>
          <li>Quezon Avenue</li>
          <li>C-5 Road (Carlos P. Garcia Avenue)</li>
          <li>Ortigas Avenue</li>
          <li>Shaw Boulevard</li>
          <li>Marcos Highway</li>
          <li>Aurora Boulevard</li>
          <li>Espana Boulevard</li>
          <li>Taft Avenue</li>
          <li>Roxas Boulevard</li>
          <li>Osmena Highway (South Luzon Expressway connection)</li>
          <li>MacArthur Highway</li>
          <li>Quirino Avenue</li>
          <li>Buendia Avenue (Senator Gil Puyat Avenue)</li>
        </ul>
        <p className="text-gray-700 mb-4">
          It is important to note that some local government units (LGUs) within
          Metro Manila also implement their own local number coding ordinances
          that may have different schedules or cover additional local roads.
          For example, the City of Makati has its own local coding ordinance
          that covers major roads within the city in addition to the MMDA
          scheme. Similarly, cities like San Juan, Mandaluyong, and Pasig may
          have their own supplementary coding rules. Always check with the
          specific LGU if you are driving through their jurisdiction.
        </p>
      </section>

      {/* Exemptions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vehicles Exempt from the Number Coding Scheme
        </h2>
        <p className="text-gray-700 mb-4">
          Not all vehicles are subject to the MMDA number coding scheme.
          The following categories of vehicles are exempt from the UVVRP:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Public utility vehicles:</strong> Buses, jeepneys, taxis,
            UV Express, TNVS (ride-hailing vehicles like Grab), and other
            vehicles operating under a franchise from the LTFRB.
          </li>
          <li>
            <strong>Government vehicles:</strong> Vehicles with official
            government plates (red plates) that are being used for official
            government business.
          </li>
          <li>
            <strong>Diplomatic vehicles:</strong> Vehicles with diplomatic
            plates (blue plates) belonging to foreign embassies and consulates.
          </li>
          <li>
            <strong>Emergency vehicles:</strong> Ambulances, fire trucks, and
            other vehicles responding to emergencies, provided they have proper
            markings and are on active emergency duty.
          </li>
          <li>
            <strong>School buses and shuttle services:</strong> Duly registered
            and authorized school transport vehicles during school days and
            hours.
          </li>
          <li>
            <strong>Vehicles of persons with disabilities (PWDs):</strong>
            Vehicles registered under the name of a PWD or displaying a valid
            PWD parking sticker, provided the PWD is actually in the vehicle.
          </li>
          <li>
            <strong>Motorcycles:</strong> All motorcycles are currently exempt
            from the MMDA number coding scheme.
          </li>
          <li>
            <strong>Vehicles with special MMDA exemption:</strong> The MMDA
            issues window hour exemptions on a case-by-case basis for
            individuals who can demonstrate a compelling need, such as medical
            professionals on duty or individuals with medical conditions
            requiring regular hospital visits.
          </li>
        </ul>
      </section>

      {/* Penalties for Coding Violations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Penalties for Number Coding Violations
        </h2>
        <p className="text-gray-700 mb-4">
          Violating the MMDA number coding scheme carries significant penalties
          that can impact your wallet and your driving record:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>First offense:</strong> A fine of PHP 300 (MMDA) or varying
            amounts depending on local city ordinances.
          </li>
          <li>
            <strong>Second offense:</strong> A higher fine, typically PHP 500 or
            more, depending on the implementing authority.
          </li>
          <li>
            <strong>Third and subsequent offenses:</strong> Fines may increase
            further, and repeated violations may be reported to the LTO, which
            can affect your driving record.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          It is important to note that coding violation fines vary between the
          MMDA and individual city governments. Some cities, like Makati and
          Taguig, impose higher fines under their local ordinances. The fines
          are paid through the MMDA or the respective city government&apos;s
          traffic management office. Unpaid coding violation tickets can
          accumulate and may prevent you from renewing your vehicle registration
          at the LTO until all outstanding fines are settled.
        </p>
        <p className="text-gray-700 mb-4">
          The MMDA and local traffic enforcers use a combination of manual
          enforcement and automated systems to detect coding violations. On
          major roads like EDSA, the MMDA deploys traffic constables and
          operates CCTV cameras that can capture plate numbers of coding
          violators. Some cities also use mobile ALPR (Automated License Plate
          Recognition) systems mounted on patrol vehicles to detect violations
          in real time.
        </p>
      </section>

      {/* Tips to Avoid Coding Violations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips to Avoid Number Coding Violations
        </h2>
        <p className="text-gray-700 mb-4">
          Here are practical tips to help you stay compliant with the number
          coding scheme and avoid unnecessary fines:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Memorize your coding day.</strong> Know which day of the
            week your vehicle is coded based on the last digit of your plate
            number. Better yet, bookmark our coding checker tool for quick
            reference.
          </li>
          <li>
            <strong>Plan your routes.</strong> If you must drive on your coding
            day, use alternative routes that are not covered by the MMDA coding
            scheme. Many local roads and side streets are not covered, though
            be aware of local city coding ordinances.
          </li>
          <li>
            <strong>Adjust your schedule.</strong> The coding scheme only
            applies during the morning window (7:00 AM to 10:00 AM) and
            afternoon window (5:00 PM to 8:00 PM). If possible, travel outside
            these hours to avoid the restriction.
          </li>
          <li>
            <strong>Use public transportation.</strong> On your coding day,
            consider taking the MRT, LRT, bus, jeepney, or ride-hailing
            services to get around Metro Manila.
          </li>
          <li>
            <strong>Carpool or use a different vehicle.</strong> If you have
            access to another vehicle with a different plate ending, you can use
            it on your coded day. Carpooling with colleagues or neighbors is
            also an excellent way to reduce traffic while staying compliant.
          </li>
          <li>
            <strong>Check for coding suspensions.</strong> The MMDA occasionally
            suspends the number coding scheme during holidays, special events,
            or natural calamities. Follow the MMDA&apos;s official social media
            accounts or news channels for announcements about coding
            suspensions.
          </li>
          <li>
            <strong>Apply for an exemption.</strong> If you have a legitimate
            reason for needing to drive during your coding day (such as a
            medical condition), you can apply for a window hour exemption at the
            MMDA office.
          </li>
        </ul>
      </section>

      {/* History of the Coding Scheme */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          History and Evolution of the Number Coding Scheme
        </h2>
        <p className="text-gray-700 mb-4">
          The number coding scheme has a long history in Metro Manila, dating
          back to 1995 when the MMDA first implemented the UVVRP as a response
          to worsening traffic congestion in the National Capital Region. At
          the time, the program was modeled after similar traffic management
          schemes used in other congested Asian cities, such as the odd-even
          scheme in Jakarta and the license plate restriction in Beijing.
        </p>
        <p className="text-gray-700 mb-4">
          Over the years, the coding scheme has undergone several modifications.
          In its original form, the restriction applied for the entire day from
          7:00 AM to 7:00 PM. This was later changed to the current two-window
          system to provide more flexibility for motorists. The MMDA has also
          experimented with an &ldquo;enhanced&rdquo; or &ldquo;expanded&rdquo;
          number coding scheme that restricts each plate number for two days
          instead of one, though this has typically been implemented only on a
          temporary basis during periods of extreme congestion.
        </p>
        <p className="text-gray-700 mb-4">
          During the COVID-19 pandemic, the number coding scheme was suspended
          for an extended period as part of the community quarantine measures.
          The scheme was gradually reimplemented as quarantine restrictions were
          eased and vehicle volumes returned to pre-pandemic levels. The
          pandemic period also highlighted the impact of vehicle volume on
          traffic flow, as Metro Manila experienced significantly less
          congestion during the coding suspension, prompting discussions about
          alternative traffic management strategies for the future.
        </p>
      </section>

      <FAQSection faqs={codingFAQs} />

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
              Track your plate, license, and MV file status all in one place.
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
              Check the delivery status of your vehicle license plates.
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
              Calculate fines for coding violations and other traffic offenses.
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
              Estimate your vehicle registration and license renewal fees.
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
              Check your driver&apos;s license application or renewal status.
            </p>
          </Link>
          <Link
            href="/mv-file-checker"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              MV File Number Checker
            </h3>
            <p className="text-sm text-gray-600">
              Verify vehicle file status and check for encumbrances.
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
              href="/guides/mmda-number-coding"
              className="text-blue-600 hover:underline"
            >
              MMDA Number Coding Scheme: Complete Guide to UVVRP Rules and
              Exemptions
            </Link>
          </li>
          <li>
            <Link
              href="/guides/traffic-violations-fines"
              className="text-blue-600 hover:underline"
            >
              Complete List of Traffic Violations and Fines in the Philippines
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-check-lto-plate-status"
              className="text-blue-600 hover:underline"
            >
              How to Check Your LTO Plate Number Status Online
            </Link>
          </li>
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
              href="/guides/alternative-routes-metro-manila"
              className="text-blue-600 hover:underline"
            >
              Alternative Routes in Metro Manila to Avoid Coding Restrictions
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
