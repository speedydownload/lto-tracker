import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CURRENT_YEAR_STR } from "@/lib/constants";
import HeroSection from "@/components/sections/HeroSection";
import StatusCards from "@/components/sections/StatusCards";
import HowItWorks from "@/components/sections/HowItWorks";
import TimelineEstimator from "@/components/sections/TimelineEstimator";
import BranchFinder from "@/components/sections/BranchFinder";
import FAQSection from "@/components/sections/FAQSection";
import GuidesSection from "@/components/sections/GuidesSection";
import TrustSection from "@/components/sections/TrustSection";
import DisclaimerSection from "@/components/sections/DisclaimerSection";
import { WebApplicationSchema, FAQPageSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { homeFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "LTO Tracker — Check Plate, License & MV File Status Online",
  description:
    "Free LTO Tracker tool to check your plate number, driver's license, and MV file status online in the Philippines. Real-time updates, branch finder, renewal calculator, and penalty checker.",
  keywords: [
    "LTO Tracker",
    "LTO plate tracker",
    "LTO status check",
    "check LTO plate number",
    "LTO Philippines",
    "LTO license tracker",
    "MV file checker",
    "LTO online",
    "plate number status",
    "LTO branch finder",
  ],
  alternates: {
    canonical: "https://ltotrackeronline.ph",
  },
};

export default function HomePage() {
  return (
    <>
      <WebApplicationSchema
        name="LTO Tracker"
        url="https://ltotrackeronline.ph"
        description="Free online tool to track LTO plate numbers, driver's licenses, and motor vehicle file status in the Philippines."
      />
      <FAQPageSchema faqs={homeFAQs} />
      <BreadcrumbSchema items={[{ name: "Home", url: "https://ltotrackeronline.ph" }]} />

      <HeroSection />

      <StatusCards />

      <HowItWorks />

      {/* Main SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is the LTO Tracker?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}is a free online tool designed to help Filipino motorists check the status of their
              Land Transportation Office (LTO) transactions. Whether you&apos;re waiting for your new plate number, checking your
              driver&apos;s license renewal status, or tracking a motor vehicle (MV) file, our tracker provides real-time updates
              directly from LTO&apos;s database systems.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Philippines has experienced significant delays in plate number releases since the LTO modernization program began.
              Millions of vehicle owners have been waiting for years to receive their permanent license plates. Our LTO plate tracker
              was created to solve this problem by giving motorists an easy way to check if their plates are ready for pickup at their
              designated LTO branch.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              LTO Tracker is an independent tracking platform that aggregates information from the LTO&apos;s official systems,
              including the Land Transportation Management System (<a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS portal</a>), to provide you with accurate and up-to-date
              information about your LTO transactions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Use the LTO Tracker
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Using our LTO tracking tool is simple and straightforward. Here&apos;s how you can check your LTO status in just a few steps:
            </p>
            <ol className="space-y-3 text-gray-700 mb-8">
              <li className="leading-relaxed">
                <strong>Choose your tracking type</strong> — Select whether you want to track by plate number, MV file number,
                or driver&apos;s license number using the tabs at the top of the tracker form.
              </li>
              <li className="leading-relaxed">
                <strong>Enter your reference number</strong> — Type in your plate number (e.g., ABC-1234), MV file number
                (15-digit number from your Official Receipt), or license number (e.g., N01-23-456789).
              </li>
              <li className="leading-relaxed">
                <strong>Click &quot;Track Status&quot;</strong> — Our system will query the LTO database and retrieve the latest
                information about your transaction.
              </li>
              <li className="leading-relaxed">
                <strong>View your results</strong> — You&apos;ll see your current status, estimated release date, designated pickup
                branch, and any additional remarks from the LTO.
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding LTO Plate Number Status
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you check your plate number status through our LTO tracker, you&apos;ll see one of several status codes. Each code
              indicates a specific stage in the plate production and delivery process:
            </p>
            <ul className="space-y-4 text-gray-700 mb-8">
              <li className="leading-relaxed">
                <strong className="text-yellow-600">Pending</strong> — Your plate order has been received by the LTO and is queued for
                production. This is the initial status after vehicle registration. Plates in this status are waiting to be manufactured
                by the authorized plate maker.
              </li>
              <li className="leading-relaxed">
                <strong className="text-blue-600">Processing</strong> — Your plate is currently being manufactured or has been produced
                and is in transit to your designated LTO branch. This status means your plate is actively being worked on.
              </li>
              <li className="leading-relaxed">
                <strong className="text-green-600">Available for Release</strong> — Great news! Your plate has arrived at your
                designated LTO branch and is ready for pickup. Visit the branch during office hours (Monday to Friday, 8:00 AM to
                5:00 PM) with your OR/CR and valid ID to claim your plate.
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-600">Released</strong> — Your plate has already been released and claimed. If you haven&apos;t
                received your plate but the status shows released, contact your LTO branch immediately.
              </li>
              <li className="leading-relaxed">
                <strong className="text-red-600">Returned to LTO</strong> — Your plate was sent to the branch but has been returned to
                the LTO central office, possibly due to being unclaimed for an extended period. Contact LTO to arrange re-delivery.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Are LTO Plates Delayed in the Philippines?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO plate backlog has been one of the most significant issues facing Filipino motorists. Since the transition to the
              new plate design in 2016, the LTO has struggled to keep up with the demand for new license plates. Several factors
              contribute to these delays:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>High volume of new vehicle registrations (over 2 million per year)</li>
              <li>Transition from old to new plate design and security features</li>
              <li>Supply chain issues with plate manufacturing materials</li>
              <li>Limited production capacity of authorized plate makers</li>
              <li>COVID-19 pandemic disruptions to LTO operations</li>
              <li>Logistical challenges in distributing plates to branches nationwide</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              The LTO has been working to address this backlog through increased production capacity and partnerships with additional
              plate manufacturers. However, the backlog remains significant, making tools like our LTO tracker essential for motorists
              who want to stay informed about their plate status.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              LTO Tracker Features
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              LTO Tracker offers a comprehensive suite of tools designed to help Filipino motorists navigate the LTO system more
              efficiently. Our platform includes:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Plate Number Tracker</h3>
                <p className="text-gray-700 text-sm">
                  Check the production and delivery status of your new license plate. Track from order to release at your LTO branch.
                </p>
                <Link href="/lto-plate-tracker" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                  Use Plate Tracker →
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">License Tracker</h3>
                <p className="text-gray-700 text-sm">
                  Monitor your driver&apos;s license application or renewal status. Check if your new license card is ready for pickup.
                </p>
                <Link href="/lto-license-tracker" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                  Use License Tracker →
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">MV File Checker</h3>
                <p className="text-gray-700 text-sm">
                  Verify the status of your motor vehicle file for registration, renewal, or transfer of ownership transactions.
                </p>
                <Link href="/mv-file-checker" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                  Use MV File Checker →
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Number Coding Checker</h3>
                <p className="text-gray-700 text-sm">
                  Check if your vehicle is subject to the MMDA number coding scheme today based on your plate number&apos;s last digit.
                </p>
                <Link href="/coding-checker" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                  Check Coding Today →
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Renewal Calculator</h3>
                <p className="text-gray-700 text-sm">
                  Calculate the total cost of renewing your driver&apos;s license or vehicle registration, including late penalties.
                </p>
                <Link href="/renewal-calculator" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                  Calculate Renewal Fees →
                </Link>
              </div>
              <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Penalty Calculator</h3>
                <p className="text-gray-700 text-sm">
                  Find out how much you&apos;ll need to pay for traffic violations based on the latest LTO fine schedule.
                </p>
                <Link href="/penalty-calculator" className="text-blue-600 text-sm font-medium hover:underline mt-2 inline-block">
                  Calculate Penalties →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tips for Tracking Your LTO Transactions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To get the most out of our LTO tracker and ensure a smooth experience with the Land Transportation Office, keep these
              tips in mind:
            </p>
            <ol className="space-y-3 text-gray-700 mb-8">
              <li className="leading-relaxed">
                <strong>Keep your Official Receipt (OR)</strong> — Your OR contains the MV file number and other reference numbers
                you&apos;ll need for tracking. Store it safely along with your Certificate of Registration (CR).
              </li>
              <li className="leading-relaxed">
                <strong>Check regularly but not obsessively</strong> — Plate production typically takes 2-8 weeks depending on the
                type and current backlog. We recommend checking once a week for updates.
              </li>
              <li className="leading-relaxed">
                <strong>Know your designated branch</strong> — Your plate will be delivered to the LTO branch where you registered
                your vehicle. If you need to change the pickup branch, contact LTO directly.
              </li>
              <li className="leading-relaxed">
                <strong>Bring proper documents for pickup</strong> — When claiming your plate, bring your OR/CR, a valid government
                ID, and the authorization letter if someone else is picking up on your behalf.
              </li>
              <li className="leading-relaxed">
                <strong>Use the LTMS portal for official transactions</strong> — For renewals and applications, the LTO&apos;s official{" "}
                <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS portal</a> is the primary platform for online transactions.
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              LTO Online Services in the Philippines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Land Transportation Office has been steadily expanding its online services to make it easier for Filipino motorists
              to transact with the agency. Through the LTMS (Land Transportation Management System) portal, you can now perform
              several transactions online, including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>Driver&apos;s license renewal application and appointment scheduling</li>
              <li>Vehicle registration renewal</li>
              <li>Student permit application</li>
              <li>License status verification</li>
              <li>Transaction history and receipt viewing</li>
              <li>Branch appointment booking</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our LTO tracker complements these official services by providing a streamlined, user-friendly interface specifically
              designed for status tracking. While the LTMS portal handles the full range of LTO transactions, LTO Tracker focuses
              on giving you the fastest and most reliable way to check your transaction status.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive LTO Guides
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond our tracking tools, we provide detailed guides covering every aspect of dealing with the LTO. Whether you&apos;re
              a first-time driver getting your student permit or an experienced motorist renewing your license, our guides walk you
              through every step of the process:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li>
                <Link href="/guides/how-to-check-lto-plate" className="text-blue-600 font-medium hover:underline">
                  How to Check Your LTO Plate Number Status
                </Link>
                {" "}— A complete guide to checking your plate status online and at LTO branches.
              </li>
              <li>
                <Link href="/guides/lto-renewal-requirements" className="text-blue-600 font-medium hover:underline">
                  LTO Renewal Requirements {CURRENT_YEAR_STR}
                </Link>
                {" "}— Everything you need to prepare for license and registration renewal.
              </li>
              <li>
                <Link href="/guides/lto-student-permit" className="text-blue-600 font-medium hover:underline">
                  How to Get an LTO Student Permit
                </Link>
                {" "}— Step-by-step guide for first-time drivers applying for a student permit.
              </li>
              <li>
                <Link href="/guides/lto-license-renewal" className="text-blue-600 font-medium hover:underline">
                  LTO License Renewal Process
                </Link>
                {" "}— Complete walkthrough of the license renewal process, online and in-person.
              </li>
              <li>
                <Link href="/guides/lto-transfer-ownership" className="text-blue-600 font-medium hover:underline">
                  How to Transfer Vehicle Ownership
                </Link>
                {" "}— Requirements and process for transferring vehicle ownership at the LTO.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              LTO Branch Network Across the Philippines
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO operates a network of branches throughout the Philippines, from Metro Manila to the provinces. Each branch
              handles vehicle registration, license issuance, plate distribution, and other motor vehicle-related transactions.
              Our <Link href="/branches" className="text-blue-600 font-medium hover:underline">branch finder</Link> helps you
              locate the nearest LTO office, complete with address, contact information, and operating hours.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Major LTO branches in Metro Manila include the LTO Central Office in Quezon City, LTO Makati District Office,
              LTO Pasig, and LTO Las Pi&ntilde;as, among others. Regional offices serve areas outside NCR, including Cebu, Davao,
              Iloilo, and other major cities across Luzon, Visayas, and Mindanao.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-white">
              <h2 className="text-3xl font-bold mb-4">Your Trusted LTO Tracking Partner</h2>
              <p className="text-blue-100 text-lg mb-6">
                LTO Tracker provides the most comprehensive and reliable LTO tracking service in the Philippines.
                Our tools are used by thousands of Filipino motorists every day to check their plate, license, and
                vehicle registration status.
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Tracking Now
              </Link>
            </div>
            <div className="flex-1">
              <Image
                src="/LTO-Tracker-Banner.webp"
                alt="LTO Tracker - Check your plate, license, and MV file status online with LTO Tracker"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      <TimelineEstimator />

      <BranchFinder />

      <div className="container mx-auto px-4 max-w-4xl py-8">
        <FAQSection faqs={homeFAQs} title="Frequently Asked Questions About LTO Tracking" />
      </div>

      <GuidesSection />

      <TrustSection />

      <DisclaimerSection />
    </>
  );
}
