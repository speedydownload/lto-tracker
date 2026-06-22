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

const guide = getGuideBySlug("alternative-routes-metro-manila")!;

export const metadata: Metadata = {
  title: `Alternative Routes in Metro Manila ${CURRENT_YEAR_STR} — Beat Traffic & Number Coding`,
  description: `Complete guide to alternative routes in Metro Manila for ${CURRENT_YEAR_STR}. Beat EDSA traffic, avoid number coding, discover Skyway and expressway options, C5 alternatives, and lesser-known routes to save time on your daily commute.`,
  keywords: [
    "alternative routes Metro Manila",
    "EDSA alternative routes",
    "avoid number coding Metro Manila",
    "Skyway routes Metro Manila",
    "C5 alternative routes",
    `Metro Manila traffic routes ${CURRENT_YEAR_STR}`,
    "beat traffic Metro Manila",
    "SLEX NLEX alternative",
    "Metro Manila expressway routes",
    "avoid coding day routes",
  ],
  openGraph: {
    title: `Alternative Routes in Metro Manila ${CURRENT_YEAR_STR} — Beat Traffic & Number Coding`,
    description:
      "Complete guide to alternative routes in Metro Manila. Beat EDSA traffic, avoid number coding, Skyway routes, and lesser-known shortcuts.",
    url: "https://ltotrackeronline.ph/guides/alternative-routes-metro-manila",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `Alternative Routes in Metro Manila ${CURRENT_YEAR_STR} — Beat Traffic & Number Coding`,
    description:
      "Complete guide to alternative routes in Metro Manila. Beat EDSA traffic, Skyway routes, and tips to avoid number coding.",
  },
  alternates: {
    canonical:
      "https://ltotrackeronline.ph/guides/alternative-routes-metro-manila",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "number-coding", text: "Understanding MMDA Number Coding", level: 2 },
  { id: "coding-exempt-routes", text: "Routes Exempt from Number Coding", level: 2 },
  { id: "edsa-alternatives", text: "EDSA Alternative Routes", level: 2 },
  { id: "c5-alternatives", text: "C5 Road Alternative Routes", level: 2 },
  { id: "skyway-routes", text: "Skyway System Routes", level: 2 },
  { id: "nlex-slex", text: "NLEX-SLEX Connector & Expressways", level: 2 },
  { id: "north-south", text: "North-to-South Metro Manila Routes", level: 2 },
  { id: "east-west", text: "East-to-West Metro Manila Routes", level: 2 },
  { id: "airport-routes", text: "Alternative Routes to NAIA", level: 2 },
  { id: "toll-costs", text: "Toll Fees Comparison", level: 2 },
  { id: "time-saving-tips", text: "Time-Saving Tips for Metro Manila Drivers", level: 2 },
  { id: "navigation-apps", text: "Best Navigation Apps for Metro Manila", level: 2 },
];

const faqs = [
  {
    question: "What are the best alternative routes to avoid EDSA traffic?",
    answer:
      "The best alternatives to EDSA depend on your origin and destination. For north-to-south travel, the Skyway System (Skyway Stage 3) runs parallel to EDSA and connects NLEX to SLEX, bypassing EDSA entirely. C5 Road is another major north-south alternative, though it can also be congested during peak hours. For shorter segments, Ortigas Avenue, Shaw Boulevard, and Kalayaan Avenue can serve as east-west connectors that reduce EDSA exposure. The NLEX-SLEX Connector Road is another option that links northern and southern Metro Manila without touching EDSA.",
  },
  {
    question: "Which routes are exempt from MMDA number coding in Metro Manila?",
    answer:
      "Several major routes in Metro Manila are exempt from the MMDA number coding scheme. These include the Skyway System (all stages), NLEX (North Luzon Expressway), SLEX (South Luzon Expressway), TPLEX (Tarlac-Pangasinan-La Union Expressway), CAVITEX (Manila-Cavite Expressway), MCX (Muntinlupa-Cavite Expressway), C6 Road, and the NLEX-SLEX Connector Road. Using these expressways and exempt roads allows you to travel on your coding day without violating the number coding policy.",
  },
  {
    question: `How much does the Skyway Stage 3 toll cost in ${CURRENT_YEAR_STR}?`,
    answer:
      "Skyway Stage 3 toll fees vary by vehicle class and entry/exit points. For Class 1 vehicles (cars, SUVs, vans), the end-to-end toll from Buendia to NLEX is approximately PHP 274. Partial trips cost less depending on your entry and exit points. Class 2 (buses) and Class 3 (trucks) vehicles pay higher rates. Toll fees are subject to periodic adjustments by the Toll Regulatory Board. Payment can be made via Autosweep RFID. Check the Skyway website for the most current toll matrix.",
  },
  {
    question: "What is the fastest route from NLEX to SLEX without passing through EDSA?",
    answer:
      "The fastest route from NLEX to SLEX without touching EDSA is the Skyway System. Take the NLEX Skyway Stage 3 connection at the Balintawak/NLEX interchange, travel along Skyway Stage 3 (elevated expressway) through the length of Metro Manila, then connect to Skyway Stage 1 and 2 which merge directly onto SLEX. The entire trip takes approximately 20 to 40 minutes depending on traffic, compared to 1.5 to 3 hours via EDSA. An alternative is the NLEX-SLEX Connector Road, which provides another expressway link between the two major highways.",
  },
  {
    question: "Can I drive on EDSA on my number coding day?",
    answer:
      "No, EDSA is covered by the MMDA number coding scheme (Unified Vehicular Volume Reduction Program). If your plate number ends in a digit that is restricted on a particular day, you cannot drive on EDSA and other covered roads during coding hours (7:00 AM to 10:00 AM and 5:00 PM to 8:00 PM on weekdays). Violating the number coding policy results in a fine. However, you can still drive on coding-exempt routes such as expressways, Skyway, and certain national highways. Check our coding checker tool for your specific coding day.",
  },
  {
    question: "What is the best route to NAIA from Quezon City to avoid traffic?",
    answer:
      "The best route from Quezon City to NAIA depends on the time of day. During off-peak hours, EDSA southbound to NAIA is the most direct route. During peak hours, take the Skyway Stage 3 from Quezon City (Balintawak entry), exit at Buendia or Sucat, then proceed to the airport. Another option is to take C5 Road southbound to BGC, then use the Lawton Avenue or Sales Road exit toward NAIA Terminals 1, 2, and 3. The NAIA Expressway (NAIAx) connects Skyway and SLEX directly to NAIA Terminal 3 for a toll of approximately PHP 54 for Class 1 vehicles.",
  },
  {
    question: "Is C5 a good alternative to EDSA?",
    answer:
      "C5 (C-5 Road or Circumferential Road 5) can be a good alternative to EDSA for certain routes, particularly for travel between Quezon City and Taguig/BGC/Paranaque. However, C5 itself experiences heavy congestion during peak hours, especially near the Kalayaan Flyover, BGC area, and the C5-SLEX interchange. C5 is most effective as an EDSA alternative during off-peak hours or for destinations specifically along the C5 corridor (Libis, Ortigas, BGC, Taguig). During peak hours, the Skyway system is generally a faster alternative.",
  },
  {
    question: "What navigation app is best for avoiding traffic in Metro Manila?",
    answer:
      "Waze and Google Maps are the two most widely used navigation apps in Metro Manila, and both provide real-time traffic data and alternative route suggestions. Waze is particularly popular among Filipino drivers because of its strong community-driven traffic reporting, which provides up-to-the-minute information about accidents, road closures, police checkpoints, and flooding. Google Maps offers more reliable mapping data and better integration with public transit options. For the best results, use both apps and compare their suggested routes before starting your trip.",
  },
];

export default function AlternativeRoutesMetroManila() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Alternative Routes Metro Manila" },
        ]}
      />

      <ArticleSchema
        headline={`Alternative Routes in Metro Manila ${CURRENT_YEAR_STR} — Beat Traffic & Number Coding`}
        description="Complete guide to alternative routes in Metro Manila. Beat EDSA traffic, avoid number coding, Skyway routes, and time-saving tips."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/alternative-routes-metro-manila"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "Alternative Routes Metro Manila",
            url: "https://ltotrackeronline.ph/guides/alternative-routes-metro-manila",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Alternative Routes in Metro Manila {CURRENT_YEAR_STR} — Beat Traffic &amp; Number
            Coding
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
              goes beyond license and plate tracking to help Filipino motorists
              navigate the realities of driving in the Philippines. For millions
              of Metro Manila drivers, daily commutes are defined by two
              unavoidable challenges: crushing traffic congestion and the MMDA
              number coding scheme that restricts your vehicle on certain days.
              This guide provides a comprehensive collection of alternative
              routes, expressway options, and strategic shortcuts that can save
              you significant time and help you stay mobile even on your coding
              day.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Metro Manila&apos;s road network has expanded considerably with
              the completion of Skyway Stage 3, the NLEX-SLEX Connector Road,
              and various road widening projects. These infrastructure
              improvements have created new route options that were not
              available just a few years ago. However, many drivers are still
              unaware of these alternatives or unsure how to use them
              effectively. This guide maps out the most practical alternative
              routes for common Metro Manila travel patterns.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you are trying to avoid EDSA during rush hour, find a way
              to travel on your number coding day using exempt routes, or simply
              discover faster paths between key Metro Manila destinations, this
              guide has you covered. We include toll cost comparisons, time
              estimates, and practical tips from experienced Metro Manila
              drivers.
            </p>
          </section>

          <section>
            <h2
              id="number-coding"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Understanding MMDA Number Coding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The MMDA Unified Vehicular Volume Reduction Program (UVVRP),
              commonly known as &quot;number coding,&quot; restricts vehicles
              from major Metro Manila roads based on the last digit of their
              plate number. Understanding the coding schedule is essential for
              planning alternative routes.
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Day
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Restricted Plate Endings
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Coding Hours
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Monday
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      1 and 2
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Tuesday
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      3 and 4
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Wednesday
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      5 and 6
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Thursday
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      7 and 8
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Friday
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      9 and 0
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      7:00 AM - 10:00 AM, 5:00 PM - 8:00 PM
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Number coding does not apply on weekends, holidays, and on
              certain designated days announced by the MMDA. Some local
              government units (LGUs) in Metro Manila implement their own
              coding schemes with different hours or additional restrictions.
              For a full breakdown, read our{" "}
              <Link
                href="/guides/mmda-number-coding"
                className="text-[#1e40af] hover:underline"
              >
                MMDA number coding guide
              </Link>
              , or use our{" "}
              <Link
                href="/coding-checker"
                className="text-[#1e40af] hover:underline"
              >
                coding checker tool
              </Link>{" "}
              to determine your specific coding day and hours.
            </p>
          </section>

          <section>
            <h2
              id="coding-exempt-routes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Routes Exempt from Number Coding
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The following roads and expressways are exempt from the MMDA
              number coding scheme, meaning you can travel on them even on your
              coding day:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Skyway System</strong> — All stages (Stage 1, Stage 2,
                Stage 3). This includes the elevated sections from Sucat/SLEX to
                Buendia and the Stage 3 extension from Buendia to NLEX
                Balintawak.
              </li>
              <li>
                <strong>NLEX (North Luzon Expressway)</strong> — From Balintawak
                interchange northward through Bulacan, Pampanga, and beyond.
              </li>
              <li>
                <strong>SLEX (South Luzon Expressway)</strong> — From Alabang
                interchange southward through Laguna, Batangas, and connecting
                expressways.
              </li>
              <li>
                <strong>CAVITEX (Manila-Cavite Expressway)</strong> — Connecting
                Roxas Boulevard/Paranaque to Cavite.
              </li>
              <li>
                <strong>MCX (Muntinlupa-Cavite Expressway)</strong> —
                Connecting SLEX Susana Heights interchange to Daang Hari in
                Cavite.
              </li>
              <li>
                <strong>NLEX-SLEX Connector Road</strong> — The newly completed
                expressway connecting NLEX Caloocan to Skyway/SLEX through
                Metro Manila.
              </li>
              <li>
                <strong>NAIA Expressway (NAIAx)</strong> — Connecting SLEX/Skyway
                to NAIA Terminal 3.
              </li>
              <li>
                <strong>C6 Road</strong> — The outer circumferential road along
                the eastern edge of Metro Manila, from Taguig through Pasig to
                Rizal.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> While the expressways themselves are
              coding-exempt, the local roads you use to access the expressway
              entry and exit ramps may still be covered by number coding. Plan
              your access route carefully to ensure you only use exempt roads
              during coding hours. If you get caught violating the coding scheme, learn how to <Link href="/guides/how-to-settle-traffic-violations" className="text-[#1e40af] hover:underline">settle traffic violations</Link> quickly. For complete details on the number coding
              policy, including fines for violations, see our{" "}
              <Link
                href="/guides/traffic-violations-fines"
                className="text-[#1e40af] hover:underline"
              >
                traffic violations and fines guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="edsa-alternatives"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              EDSA Alternative Routes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              EDSA (Epifanio de los Santos Avenue) is Metro Manila&apos;s most
              congested road, stretching 23.8 kilometers from Caloocan in the
              north to Pasay in the south. Here are proven alternatives for
              different segments:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>North EDSA (Caloocan/QC to Ortigas):</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Skyway Stage 3</strong> — The most effective bypass.
                Enter at Balintawak (NLEX connection) and exit at Quezon Avenue,
                Aurora Boulevard, or continue south. This completely avoids the
                North EDSA/Trinoma/SM North EDSA congestion zone.
              </li>
              <li>
                <strong>A. Bonifacio Avenue to C5</strong> — From Caloocan, take
                A. Bonifacio Avenue to Katipunan, then C5 southbound toward
                Ortigas/BGC.
              </li>
              <li>
                <strong>Congressional Avenue to Mindanao Avenue</strong> — For
                Quezon City destinations, use Congressional Avenue to reach the
                Commonwealth area without touching EDSA.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Central EDSA (Ortigas to Makati):</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>C5 Road</strong> — Runs parallel to EDSA on the east
                side. Connect via Ortigas Avenue, Shaw Boulevard, or Kalayaan
                Avenue. Best during off-peak hours.
              </li>
              <li>
                <strong>Skyway Stage 3 + Buendia exit</strong> — If coming from
                the north, stay on Skyway Stage 3 and exit at Buendia for
                Makati destinations.
              </li>
              <li>
                <strong>Shaw Boulevard to Pioneer to Boni</strong> — For
                Mandaluyong-to-Makati travel, use Shaw Boulevard and local
                roads through Pioneer and Boni to avoid the Shaw-EDSA and
                Ortigas-EDSA intersections.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>South EDSA (Makati to Pasay/Paranaque):</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Skyway Stage 1 and 2</strong> — From Makati (Buendia
                on-ramp) or the Magallanes interchange, take Skyway south toward
                Alabang/SLEX.
              </li>
              <li>
                <strong>Osmeña Highway (South Superhighway)</strong> — Runs
                parallel to EDSA&apos;s southern section and connects to SLEX.
                Often a faster alternative for Pasay, Taguig, and Paranaque
                destinations.
              </li>
              <li>
                <strong>Roxas Boulevard</strong> — For destinations near Manila
                Bay, Pasay, and the airport area, Roxas Boulevard provides a
                scenic alternative to southern EDSA.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="c5-alternatives"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              C5 Road Alternative Routes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              C5 (Circumferential Road 5) is often used as an EDSA alternative,
              but it can become equally congested. When C5 is jammed, consider
              these alternatives:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>C6 Road</strong> — The outermost circumferential road,
                running along the Laguna Lake shore through Taguig, Pasig, and
                into Rizal. C6 is less congested than C5 and is exempt from
                number coding. It is ideal for travel between Taguig/Paranaque
                and Pasig/Rizal.
              </li>
              <li>
                <strong>Skyway Stage 3</strong> — For north-south travel that
                would normally use C5, Skyway Stage 3 provides a faster
                elevated alternative, bypassing both EDSA and C5 congestion.
              </li>
              <li>
                <strong>BGC internal roads</strong> — For travel through the
                BGC area, use the internal road network (5th Avenue, 7th Avenue,
                26th Street, 32nd Street) to traverse BGC without sitting in C5
                traffic near the Kalayaan Flyover.
              </li>
              <li>
                <strong>Rizal Avenue Extension (Pasig area)</strong> — For the
                C5 segment through Pasig, local roads along Rizal Avenue
                Extension and Ortigas Avenue Extension can provide relief from
                C5 congestion.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="skyway-routes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Skyway System Routes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Skyway system is the single most transformative infrastructure
              addition to Metro Manila&apos;s road network. Understanding its
              full extent and connections helps you maximize its benefits:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Skyway Stage 1 (Sucat to Alabang interchange):</strong>{" "}
              Connects SLEX at Sucat/Alabang to the South Luzon Expressway,
              providing an elevated bypass over the congested surface-level
              roads in Paranaque and Muntinlupa.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Skyway Stage 2 (Alabang interchange to
              Buendia):</strong> The elevated expressway from the
              Sucat/Magallanes area to the Buendia/Gil Puyat on-ramp, passing
              over Osmeña Highway. This provides a fast connection between
              southern Metro Manila and Makati.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Skyway Stage 3 (Buendia to NLEX Balintawak):</strong> The
              newest and most impactful segment. This 18-kilometer elevated
              expressway runs from Buendia in Makati to the NLEX Balintawak
              interchange in Caloocan, with exit ramps at Quezon Avenue, E.
              Rodriguez (Aurora Blvd), and Plaza Dilao (Paco, Manila). Skyway
              Stage 3 effectively cuts the travel time from SLEX to NLEX from
              over 2 hours to under 30 minutes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Key Skyway connections:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>NLEX connection at Balintawak interchange (northbound)</li>
              <li>SLEX connection at Sucat and Alabang (southbound)</li>
              <li>
                NAIA Expressway connection for airport access (via Skyway Stage
                1/2)
              </li>
              <li>
                Buendia on/off-ramp for Makati CBD access
              </li>
              <li>
                Quezon Avenue off-ramp for Quezon City access
              </li>
              <li>
                Aurora Boulevard off-ramp for eastern Metro Manila access
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="nlex-slex"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              NLEX-SLEX Connector &amp; Expressways
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The NLEX-SLEX Connector Road is another major expressway that
              links the North Luzon Expressway and the South Luzon Expressway,
              providing an alternative to the Skyway system for north-south
              travel through Metro Manila.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The connector runs from the NLEX Caloocan interchange through
              the western part of Metro Manila (passing through areas near
              España Boulevard and the Manila port area) and connects to
              Skyway/SLEX. It provides a western corridor alternative to both
              EDSA and C5, which run through the central and eastern parts of
              Metro Manila respectively.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Other key expressways to know:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>CAVITEX</strong> — Connects Roxas Boulevard/Paranaque to
                Cavite. Useful for travel between Manila/Paranaque and Bacoor,
                Imus, and Kawit in Cavite.
              </li>
              <li>
                <strong>MCX (Muntinlupa-Cavite Expressway)</strong> — Connects
                SLEX Susana Heights to Daang Hari in Cavite. Ideal for travel
                between Alabang/Muntinlupa and the Daang Hari corridor.
              </li>
              <li>
                <strong>CALAX (Cavite-Laguna Expressway)</strong> — Connects
                CAVITEX and SLEX via Silang, Cavite. Useful for travel between
                Cavite and Laguna without passing through Metro Manila.
              </li>
              <li>
                <strong>TPLEX (Tarlac-Pangasinan-La Union Expressway)</strong>
                {" "}— Extends NLEX northward for travel to Northern Luzon. Not
                directly relevant for Metro Manila travel but important for
                long-distance trips.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="north-south"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              North-to-South Metro Manila Routes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For travel between northern Metro Manila (Caloocan, Quezon City,
              Valenzuela) and southern Metro Manila (Makati, Taguig, Paranaque,
              Alabang), here are the main route options ranked by typical speed:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Skyway Stage 3 (fastest, toll required)</strong> — NLEX
                Balintawak to Buendia, then Skyway Stage 1/2 to SLEX/Alabang.
                Estimated travel time: 20-40 minutes. Toll: ~PHP 274 end-to-end
                (Class 1).
              </li>
              <li>
                <strong>NLEX-SLEX Connector (fast, toll required)</strong> —
                NLEX Caloocan to SLEX via the western connector. Estimated
                travel time: 25-45 minutes. Check current toll rates.
              </li>
              <li>
                <strong>C5 Road (no toll, variable traffic)</strong> — From
                Libis/Katipunan southward through Ortigas, BGC, to C5-SLEX
                interchange. Estimated travel time: 45 minutes to 2 hours
                depending on traffic.
              </li>
              <li>
                <strong>EDSA (no toll, usually congested)</strong> — The most
                direct surface road but frequently the slowest during peak
                hours. Estimated travel time: 1 to 3+ hours.
              </li>
              <li>
                <strong>C6 Road (no toll, less congestion)</strong> — The
                eastern circumferential road via Taguig and Pasig. Longer
                distance but less traffic. Estimated travel time: 1 to 1.5
                hours.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="east-west"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              East-to-West Metro Manila Routes
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              East-west travel across Metro Manila is often more challenging
              than north-south travel because there are fewer major east-west
              corridors. Here are the key routes:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Ortigas Avenue</strong> — Connects Pasig/Cainta in the
                east to EDSA and beyond to the west. Passes through the Ortigas
                CBD. Can be congested near EDSA intersection.
              </li>
              <li>
                <strong>Shaw Boulevard</strong> — Parallel to Ortigas Avenue,
                connecting Mandaluyong to Pasig. The Shaw-EDSA intersection is
                a major bottleneck; use the Shaw Flyover when available.
              </li>
              <li>
                <strong>Marcos Highway</strong> — Connects Marikina and Antipolo
                to Quezon City (via Katipunan/C5). Important for eastern Metro
                Manila access.
              </li>
              <li>
                <strong>Quezon Avenue to España</strong> — For crossing the
                central QC area from east to west.
              </li>
              <li>
                <strong>Kalayaan Avenue</strong> — Connects C5 (near BGC) to
                Makati and EDSA. Useful for travel between BGC/Taguig and
                Makati without using EDSA for an extended distance.
              </li>
              <li>
                <strong>Lawton Avenue / Sales Road</strong> — Connects the
                airport area to BGC and C5. Important for NAIA access from the
                east side.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="airport-routes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Alternative Routes to NAIA
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Getting to Ninoy Aquino International Airport (NAIA) can be
              stressful due to traffic. Here are alternative routes from
              different parts of Metro Manila:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>From Quezon City / North Metro Manila:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                Skyway Stage 3 (Balintawak) → Skyway Stage 1/2 → NAIA
                Expressway → Terminal 3. Total toll: ~PHP 328. Time: 25-45
                minutes.
              </li>
              <li>
                Skyway Stage 3 → Exit Buendia → Gil Puyat Ave → Roxas Blvd →
                NAIA. Saves NAIA Expressway toll but adds surface road time.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>From Makati:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                Skyway Buendia on-ramp → Skyway → NAIA Expressway. Fastest
                option.
              </li>
              <li>
                Osmeña Highway (South Superhighway) → Andrews Avenue → NAIA.
                No toll option.
              </li>
              <li>
                Gil Puyat (Buendia) → Roxas Boulevard → NAIA Terminal 1/2.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>From BGC / Taguig:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                Lawton Avenue → Sales Road → NAIA Terminal 3. Direct and
                usually manageable.
              </li>
              <li>
                C5 southbound → Skyway Stage 1/2 → NAIA Expressway.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>From South (Alabang/Laguna):</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                SLEX → Skyway → NAIA Expressway → Terminal 3. Fastest toll
                route.
              </li>
              <li>
                SLEX → Alabang-Zapote Road → Coastal Road → NAIA. Longer but
                avoids Skyway toll.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Pro tip:</strong> Always add at least 1 hour of buffer
              time when heading to the airport, regardless of which route you
              take. Metro Manila traffic is unpredictable, and unexpected
              congestion, accidents, or flooding can significantly delay your
              travel. For international flights, aim to arrive at the airport at
              least 3 hours before departure.
            </p>
          </section>

          <section>
            <h2
              id="toll-costs"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Toll Fees Comparison
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Toll costs are an important factor when choosing alternative
              routes. Here is a comparison of key toll fees for Class 1 vehicles
              (cars, SUVs, vans) as of {CURRENT_YEAR_STR}:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Route
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Toll (PHP, Class 1)
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      RFID System
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Skyway Stage 3 (Buendia to NLEX)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 274
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Autosweep
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Skyway Stage 1 &amp; 2 (Sucat to Buendia)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 110 - 230
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Autosweep
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      NAIA Expressway
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 54
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Autosweep
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      SLEX (Alabang to Calamba)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 142
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Autosweep
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      NLEX (Balintawak to Sta. Rita)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 197
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Easytrip
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      CAVITEX (Roxas Blvd to Noveleta)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 123
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Autosweep
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      MCX (Susana Heights to Daang Hari)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      ~PHP 64
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Autosweep
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>RFID requirements:</strong> All major expressways in
              Metro Manila require cashless toll payment via RFID. The two main
              RFID systems are Autosweep (used by Skyway, SLEX, CAVITEX, MCX,
              NAIA Expressway) and Easytrip (used by NLEX, SCTEX, TPLEX). Make
              sure your vehicle has both RFID tags installed and loaded with
              sufficient balance before using these expressways. RFID
              installation is available at toll plazas and selected service
              stations. Refer to the{" "}
              <a
                href="https://www.nlex.com.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                NLEX Corporation website
              </a>{" "}
              and the{" "}
              <a
                href="https://www.skyway.com.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Skyway O&amp;M Corporation website
              </a>{" "}
              for the latest toll fee matrices.
            </p>
          </section>

          <section>
            <h2
              id="time-saving-tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Time-Saving Tips for Metro Manila Drivers
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Travel before 6:30 AM or after 9:00 PM.</strong> Metro
                Manila traffic is lightest during these hours. If your schedule
                allows flexibility, shifting your travel times outside peak
                hours can cut commute times by 50% or more.
              </li>
              <li>
                <strong>Use the Skyway for coding day travel.</strong> Since the
                Skyway system is exempt from number coding, you can use it to
                travel on your coding day without violating the UVVRP. If you are still waiting for your permanent plates, check the latest <Link href="/guides/lto-plate-backlog" className="text-[#1e40af] hover:underline">LTO plate backlog update</Link> to see when yours might be ready. Plan
                your route to enter and exit the Skyway system without
                touching coded roads during coding hours.
              </li>
              <li>
                <strong>Keep your Autosweep and Easytrip RFID loaded.</strong>{" "}
                Running out of RFID balance at a toll plaza creates delays and
                frustration. Set up auto-reload or check your balance regularly
                through the Autosweep or Easytrip mobile apps.
              </li>
              <li>
                <strong>Monitor flood-prone areas.</strong> During the rainy
                season (June to November), certain Metro Manila roads flood
                quickly. Espana, Welcome Rotonda, Roxas Boulevard, and parts of
                EDSA near Guadalupe are notorious flooding spots. Check weather
                reports and Waze flood reports before traveling.
              </li>
              <li>
                <strong>Avoid payday Fridays.</strong> Traffic is noticeably
                worse on the 15th and 30th/31st of each month (paydays),
                especially on Fridays. Plan accordingly or use expressways on
                these days.
              </li>
              <li>
                <strong>Use motorcycle lanes where available.</strong> If you
                ride a motorcycle, use the designated motorcycle lanes on EDSA
                and other major roads. These lanes provide a significant speed
                advantage during congested periods.
              </li>
              <li>
                <strong>Know your U-turn slots.</strong> Metro Manila uses
                U-turn slots instead of intersections on many major roads.
                Missing your U-turn slot can add 10-20 minutes to your trip.
                Study the U-turn slot locations along your regular routes.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="navigation-apps"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Best Navigation Apps for Metro Manila
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Navigation apps are essential tools for Metro Manila drivers.
              Here is how the most popular options compare:
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Waze:</strong> The most popular navigation app among
              Filipino drivers. Waze excels at real-time traffic reporting
              powered by its large community of users who report accidents,
              road closures, police checkpoints, flooding, and road hazards.
              Waze&apos;s route suggestions are generally excellent for avoiding
              traffic, and it updates routes dynamically as traffic conditions
              change during your trip. The app also shows estimated toll costs
              for expressway routes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Google Maps:</strong> Offers more reliable and
              comprehensive mapping data than Waze, with better coverage of
              new roads, buildings, and landmarks. Google Maps provides accurate
              estimated travel times based on historical and real-time traffic
              data. It also integrates public transit options (buses, jeepneys,
              trains) for those who want to compare driving versus commuting.
              Google Maps is particularly useful for finding destinations by
              name or business type.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Recommendation:</strong> Use both Waze and Google Maps.
              Check Google Maps first for an overview of traffic conditions and
              estimated travel times, then switch to Waze for real-time
              navigation during your trip. Both apps are free and available for
              iOS and Android devices. Make sure to enable traffic layer
              overlays in both apps for the most accurate information.
            </p>
          </section>

          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/coding-checker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Number Coding Checker →
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
                LTO Penalty Calculator →
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
