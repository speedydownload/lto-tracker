import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_YEAR_STR } from "@/lib/constants";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import {
  WebApplicationSchema,
  FAQPageSchema,
  BreadcrumbSchema,
} from "@/components/seo/JsonLd";
import { renewalFAQs } from "@/data/faqs";
import RenewalCalculator from "@/components/tools/RenewalCalculator";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    `LTO Renewal Fee Calculator ${CURRENT_YEAR_STR} — License & Registration Fees`,
  description:
    "Calculate your LTO renewal fees for driver's license and vehicle registration. Get an instant estimate of all fees, including CTPL insurance, emission testing, and penalties for late renewal.",
  keywords: [
    "LTO renewal fees",
    "license renewal fee",
    "vehicle registration fee",
    `LTO fees ${CURRENT_YEAR_STR}`,
    "renewal calculator",
    "LTO registration cost",
    "CTPL insurance cost",
    "LTO penalty late renewal",
  ],
  openGraph: {
    title:
      `LTO Renewal Fee Calculator ${CURRENT_YEAR_STR} — License & Registration Fees`,
    description:
      "Calculate your LTO renewal fees for driver's license and vehicle registration instantly. Free online calculator.",
    url: "https://ltotrackeronline.ph/renewal-calculator",
    type: "website",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/LTO-Renewal-Calculator-Banner.webp",
        width: 1200,
        height: 630,
        alt: "LTO Renewal Fee Calculator — Calculate license and registration renewal fees",
      },
    ],
  },
};

export default function RenewalCalculatorPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Renewal Fee Calculator" },
        ]}
      />
      <WebApplicationSchema
        name="LTO Renewal Fee Calculator"
        description="Calculate your LTO renewal fees for driver's license and vehicle registration. Get an instant estimate of all fees including CTPL, emission testing, and late penalties."
        url="https://ltotrackeronline.ph/renewal-calculator"
      />
      <FAQPageSchema faqs={renewalFAQs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://ltotrackeronline.ph" },
          {
            label: "Renewal Fee Calculator",
            href: "https://ltotrackeronline.ph/renewal-calculator",
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        LTO Renewal Fee Calculator {CURRENT_YEAR_STR} — License & Registration Fees
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Planning to renew your driver&apos;s license or vehicle registration at
        the LTO? Use our free <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}renewal fee calculator to get an accurate
        estimate of all the fees you will need to pay. Our calculator covers
        driver&apos;s license renewal (both professional and non-professional),
        vehicle registration renewal for all vehicle types, and includes
        additional costs such as CTPL insurance, emission testing, and
        penalties for late renewal. Be fully prepared before visiting the LTO
        and avoid surprises at the payment window.
      </p>

      <div className="my-8">
        <RenewalCalculator />
      </div>

      {/* Tool Banner */}
      <div className="my-10">
        <Image
          src="/img/LTO-Renewal-Calculator-Banner.webp"
          alt="LTO Renewal Fee Calculator — Calculate driver's license and vehicle registration renewal fees including CTPL insurance and emission testing costs"
          width={1200}
          height={630}
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* Driver's License Renewal Fees */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Driver&apos;s License Renewal Fees Breakdown
        </h2>
        <p className="text-gray-700 mb-4">
          The cost of renewing your Philippine driver&apos;s license depends
          on the type of license you hold and whether you are renewing on time
          or after the expiration date. Here is a detailed breakdown of all the
          fees involved in the license renewal process:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Non-Professional Driver&apos;s License Renewal
        </h3>
        <p className="text-gray-700 mb-4">
          The non-professional driver&apos;s license is the most common type of
          license issued by the LTO, held by millions of Filipino motorists who
          drive private vehicles for personal use. The renewal fees for a
          non-professional license are as follows:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>License fee: PHP 585.00 (for a 5-year validity period)</li>
          <li>Medical certificate: PHP 300.00 to PHP 500.00 (varies by clinic)</li>
          <li>Drug test: PHP 300.00 to PHP 500.00 (varies by laboratory)</li>
          <li>Comprehensive driving course (if applicable): PHP 1,000.00 to PHP 3,000.00</li>
          <li>Application form and computer fee: PHP 67.63</li>
        </ul>
        <p className="text-gray-700 mb-4">
          The total cost for a non-professional license renewal typically ranges
          from PHP 900.00 to PHP 1,500.00, depending on the medical
          certificate and drug test costs at your chosen accredited facility.
          If you renew through the LTMS online portal, you may also incur
          convenience fees charged by the payment channel you use.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Professional Driver&apos;s License Renewal
        </h3>
        <p className="text-gray-700 mb-4">
          Professional driver&apos;s license renewal involves additional
          requirements and slightly higher fees compared to non-professional
          renewal:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>License fee: PHP 720.00 (for a 5-year validity period)</li>
          <li>Medical certificate: PHP 300.00 to PHP 500.00</li>
          <li>Drug test: PHP 300.00 to PHP 500.00</li>
          <li>Neuro-psychiatric evaluation (for professional licenses): PHP 200.00 to PHP 400.00</li>
          <li>Application form and computer fee: PHP 67.63</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Professional drivers who are renewing for the first time under the
          5-year validity period (previously 3 years) will notice the higher
          base fee, which reflects the longer validity. However, on an annual
          basis, the 5-year license actually costs less than the old 3-year
          license, providing better value for professional drivers.
        </p>
      </section>

      {/* Vehicle Registration Renewal Fees */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Vehicle Registration Renewal Fees Breakdown
        </h2>
        <p className="text-gray-700 mb-4">
          Vehicle registration renewal fees in the Philippines vary
          significantly depending on the type, weight, and classification of the
          vehicle. Here is a comprehensive guide to the fees you can expect:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Base Registration Fees by Vehicle Type
        </h3>
        <p className="text-gray-700 mb-4">
          The Motor Vehicle Registration Fee is computed based on the gross
          vehicle weight (GVW) for trucks and utility vehicles, or the engine
          displacement for cars and motorcycles. The following are approximate
          base registration fees:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>Motorcycles (up to 400cc): PHP 600.00 to PHP 1,200.00</li>
          <li>Light vehicles (sedans, hatchbacks): PHP 1,600.00 to PHP 3,200.00</li>
          <li>SUVs and AUVs: PHP 3,200.00 to PHP 6,400.00</li>
          <li>Trucks and heavy vehicles: PHP 6,400.00 to PHP 25,000.00+ (depending on GVW)</li>
          <li>Public utility vehicles: Fees vary based on franchise type and vehicle category</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Additional Mandatory Fees
        </h3>
        <p className="text-gray-700 mb-4">
          In addition to the base registration fee, vehicle owners must pay
          several other mandatory fees as part of the renewal process:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Compulsory Third Party Liability (CTPL) Insurance:</strong>
            PHP 400.00 to PHP 1,600.00 depending on the vehicle type. CTPL
            insurance is mandatory for all registered vehicles and provides
            coverage for third-party injury and death resulting from vehicular
            accidents. The insurance must be obtained from an Insurance
            Commission-accredited provider before the registration renewal can
            be processed.
          </li>
          <li>
            <strong>Emission Testing:</strong> PHP 350.00 to PHP 750.00. All
            vehicles must undergo emission testing at a DENR-accredited
            emission testing center. Vehicles that fail the emission test must
            be repaired and retested before registration can be renewed. This
            requirement is part of the Clean Air Act (Republic Act No. 8749)
            and helps ensure that vehicles on Philippine roads meet minimum
            emission standards.
          </li>
          <li>
            <strong>Motor Vehicle Inspection (PMVIC):</strong> PHP 600.00 to
            PHP 1,800.00 depending on the vehicle type. Under the new LTO
            regulations, vehicles must undergo a comprehensive inspection at a
            Private Motor Vehicle Inspection Center (PMVIC) that checks brake
            systems, lighting, tires, steering, emissions, and overall vehicle
            roadworthiness.
          </li>
          <li>
            <strong>Stenciling Fee:</strong> PHP 50.00 to PHP 100.00 for
            chassis and engine number stenciling, which is required as part of
            the verification process.
          </li>
          <li>
            <strong>Computer fee:</strong> PHP 128.00 for the electronic
            processing of the registration.
          </li>
        </ul>
      </section>

      {/* Late Renewal Penalties */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Late Renewal Penalties and Surcharges
        </h2>
        <p className="text-gray-700 mb-4">
          Failing to renew your vehicle registration or driver&apos;s license
          on time results in penalties and surcharges that increase the total
          cost of renewal. Understanding these penalties can help you prioritize
          timely renewal and avoid unnecessary expenses:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Late Vehicle Registration Penalty
        </h3>
        <p className="text-gray-700 mb-4">
          If your vehicle registration expires and you fail to renew on time,
          the LTO imposes a penalty of 50% of the Motor Vehicle User&apos;s
          Charge (MVUC) for the first month, plus an additional penalty for
          each subsequent month. The penalty can accumulate to significant
          amounts if the registration remains expired for an extended period.
          For example, if your MVUC is PHP 1,600.00, the first-month penalty
          would be PHP 800.00, and additional monthly penalties would follow.
          After one year of non-renewal, the total penalties can exceed the
          original registration fee.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Late License Renewal Penalty
        </h3>
        <p className="text-gray-700 mb-4">
          For driver&apos;s licenses, the penalty for late renewal is
          relatively modest compared to vehicle registration. A penalty of
          PHP 50.00 to PHP 100.00 per year of delay is typically charged. However,
          if your license has been expired for more than two years, you may be
          required to retake the written and practical driving examinations,
          which adds additional costs for examination fees and potentially a new
          comprehensive driving course.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Consequences of Driving with Expired Registration or License
        </h3>
        <p className="text-gray-700 mb-4">
          Beyond the renewal penalties, driving with an expired registration or
          license is a traffic violation that carries its own set of fines.
          Under Republic Act No. 4136, driving with an expired license can
          result in a fine of PHP 3,000.00 for the first offense. Operating an
          unregistered motor vehicle can result in a fine of PHP 10,000.00 or
          more, and the vehicle may be impounded until proper registration is
          obtained. These violation fines are separate from and in addition to
          the late renewal penalties.
        </p>
      </section>

      {/* When and Where to Renew */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          When and Where to Renew Your LTO Registration
        </h2>
        <p className="text-gray-700 mb-4">
          Knowing when and where to renew can save you time and help you avoid
          penalties:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Vehicle Registration Renewal Schedule
        </h3>
        <p className="text-gray-700 mb-4">
          Vehicle registration in the Philippines must be renewed annually.
          The renewal date is based on the last digit of your plate number,
          not the date of initial registration. This system helps distribute
          the workload across the year and prevents overcrowding at LTO offices
          during specific months. The schedule is as follows:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>Plate ending in 1: Renewal month is January</li>
          <li>Plate ending in 2: Renewal month is February</li>
          <li>Plate ending in 3: Renewal month is March</li>
          <li>Plate ending in 4: Renewal month is April</li>
          <li>Plate ending in 5: Renewal month is May</li>
          <li>Plate ending in 6: Renewal month is June</li>
          <li>Plate ending in 7: Renewal month is July</li>
          <li>Plate ending in 8: Renewal month is August</li>
          <li>Plate ending in 9: Renewal month is September</li>
          <li>Plate ending in 0: Renewal month is October</li>
        </ul>
        <p className="text-gray-700 mb-4">
          You can renew your vehicle registration up to two months before the
          expiration date and up to two months after (with applicable late
          penalties). The LTMS online portal also allows for early renewal
          processing, making it more convenient to renew ahead of time.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Where to Renew
        </h3>
        <p className="text-gray-700 mb-4">
          You can renew your vehicle registration or driver&apos;s license at
          any LTO district office, extension office, or licensing center
          nationwide. In Metro Manila, there are also LTO satellite offices
          located in major malls and commercial centers for added convenience.
          For online processing, you can use the <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS portal</a>
          to start the renewal process, pay fees online, and schedule an
          appointment for any in-person requirements (such as biometrics
          capture for license renewal or vehicle inspection for registration
          renewal).
        </p>
      </section>

      {/* Tips for Saving on Renewal */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Tips for Saving Money on LTO Renewals
        </h2>
        <p className="text-gray-700 mb-4">
          While LTO fees are fixed by government regulations, there are
          several ways to minimize your total renewal costs:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Renew on time.</strong> The most effective way to save
            money is to renew before your registration or license expires. Late
            renewal penalties can add hundreds or even thousands of pesos to
            your total cost.
          </li>
          <li>
            <strong>Compare medical certificate and drug test prices.</strong>
            LTO-accredited clinics and drug testing laboratories charge varying
            rates. Shop around or ask for recommendations from friends and
            family to find affordable options that meet the LTO&apos;s
            requirements.
          </li>
          <li>
            <strong>Use the LTMS online portal.</strong> Processing your renewal
            online can save you time and reduce the risk of being charged
            unofficial &ldquo;assistance fees&rdquo; by fixers at LTO offices.
          </li>
          <li>
            <strong>Keep your vehicle well-maintained.</strong> A vehicle that
            passes the emission test and PMVIC inspection on the first attempt
            saves you the cost of retesting. Regular maintenance ensures your
            vehicle meets all the required standards.
          </li>
          <li>
            <strong>Get your CTPL insurance early.</strong> CTPL insurance
            rates are regulated, but comparing options from different accredited
            insurers may help you find the best value.
          </li>
        </ul>
      </section>

      <FAQSection faqs={renewalFAQs} />

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
              Track your plate, license, and MV file status in one place.
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
              Calculate fines for traffic violations including late registration.
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
              Check your driver&apos;s license renewal or application status.
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
              Track the delivery status of your vehicle plates.
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
              Verify your vehicle&apos;s MV file and registration status.
            </p>
          </Link>
          <Link
            href="/coding-checker"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              Number Coding Checker
            </h3>
            <p className="text-sm text-gray-600">
              Check the MMDA coding schedule for your plate number.
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
              href="/guides/lto-license-renewal"
              className="text-blue-600 hover:underline"
            >
              Complete Guide to LTO Driver&apos;s License Renewal in the
              Philippines
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
              href="/guides/lto-fees-schedule"
              className="text-blue-600 hover:underline"
            >
              Complete Schedule of LTO Fees for {CURRENT_YEAR_STR}: License, Registration,
              and More
            </Link>
          </li>
          <li>
            <Link
              href="/guides/ctpl-insurance-guide"
              className="text-blue-600 hover:underline"
            >
              CTPL Insurance Guide: What It Is, How Much It Costs, and Where to
              Get It
            </Link>
          </li>
          <li>
            <Link
              href="/guides/pmvic-inspection-guide"
              className="text-blue-600 hover:underline"
            >
              PMVIC Motor Vehicle Inspection: What to Expect and How to Prepare
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
