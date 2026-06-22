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
import { penaltyFAQs } from "@/data/faqs";
import PenaltyCalculator from "@/components/tools/PenaltyCalculator";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    `LTO Penalty Calculator — Traffic Violation Fines ${CURRENT_YEAR_STR}`,
  description:
    "Calculate LTO traffic violation fines and penalties in the Philippines. Look up fines for speeding, illegal parking, driving without a license, and all other traffic violations.",
  keywords: [
    "LTO penalty calculator",
    "traffic violation fines",
    "LTO fines",
    "traffic penalty Philippines",
    "LTO violation fees",
    "speeding fine",
    "illegal parking fine",
    "driving without license penalty",
  ],
  openGraph: {
    title:
      `LTO Penalty Calculator — Traffic Violation Fines ${CURRENT_YEAR_STR}`,
    description:
      "Calculate LTO traffic violation fines and penalties in the Philippines. Free online calculator for all traffic offenses.",
    url: "https://ltotrackeronline.ph/penalty-calculator",
    type: "website",
    images: [
      {
        url: "https://ltotrackeronline.ph/img/LTO-Penalty-Calculator-Banner.webp",
        width: 1200,
        height: 630,
        alt: "LTO Penalty Calculator — Calculate traffic violation fines in the Philippines",
      },
    ],
  },
};

export default function PenaltyCalculatorPage() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Penalty Calculator" },
        ]}
      />
      <WebApplicationSchema
        name="LTO Penalty Calculator"
        description="Calculate LTO traffic violation fines and penalties in the Philippines. Look up fines for all traffic violations including speeding, illegal parking, and driving without a license."
        url="https://ltotrackeronline.ph/penalty-calculator"
      />
      <FAQPageSchema faqs={penaltyFAQs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "https://ltotrackeronline.ph" },
          {
            label: "Penalty Calculator",
            href: "https://ltotrackeronline.ph/penalty-calculator",
          },
        ]}
      />

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        LTO Penalty Calculator — Traffic Violation Fines in the Philippines
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Received a traffic violation ticket? Use our free <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}Penalty
        Calculator to look up the exact fine for your traffic offense. Our
        database covers all common traffic violations in the Philippines as
        defined under Republic Act No. 4136 (Land Transportation and Traffic
        Code), Republic Act No. 10586 (Anti-Drunk and Drugged Driving Act), and
        various MMDA ordinances. Know your rights, understand the penalties, and
        learn how to properly settle your traffic violation tickets.
      </p>

      <div className="my-8">
        <PenaltyCalculator />
      </div>

      {/* Tool Banner */}
      <div className="my-10">
        <Image
          src="/img/LTO-Penalty-Calculator-Banner.webp"
          alt="LTO Penalty Calculator — Look up traffic violation fines and penalties for all offenses in the Philippines"
          width={1200}
          height={630}
          className="w-full rounded-xl shadow-md"
        />
      </div>

      {/* Common Traffic Violations and Fines */}
      <section className="mt-12 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Common Traffic Violations and Their Fines
        </h2>
        <p className="text-gray-700 mb-4">
          Traffic violations in the Philippines are categorized based on
          severity, and fines are set by national law (Republic Act No. 4136 as
          amended), special laws, and local ordinances. Here are the most
          common traffic violations and their corresponding fines:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Driving Without a Valid Driver&apos;s License
        </h3>
        <p className="text-gray-700 mb-4">
          Operating a motor vehicle without a valid driver&apos;s license is one
          of the most serious traffic violations in the Philippines. This
          includes driving with an expired license, driving with a student
          permit without a licensed companion, or driving without any license
          at all. The fines are substantial:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>First offense: PHP 3,000.00</li>
          <li>Second offense: PHP 5,000.00</li>
          <li>Third offense: PHP 10,000.00 plus possible license revocation</li>
        </ul>
        <p className="text-gray-700 mb-4">
          Note that driving with a license that does not have the appropriate
          restriction code for the vehicle being operated is treated the same
          as driving without a license. For example, driving a car with only a
          motorcycle restriction (Restriction 1) is a violation.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Speeding
        </h3>
        <p className="text-gray-700 mb-4">
          Speed limits in the Philippines are set by Republic Act No. 4136 and
          local ordinances. The standard speed limits are 60 km/h on national
          highways, 40 km/h in residential and commercial areas, and 20 km/h in
          school zones. Exceeding these limits results in the following fines:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>First offense: PHP 1,000.00 to PHP 2,000.00</li>
          <li>Second offense: PHP 2,000.00 to PHP 3,000.00</li>
          <li>Third offense: PHP 3,000.00 to PHP 5,000.00 plus possible license suspension</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Reckless Driving
        </h3>
        <p className="text-gray-700 mb-4">
          Reckless driving is defined as operating a vehicle in a manner that
          endangers the safety of other road users. This includes weaving
          through traffic, sudden lane changes without signaling, tailgating,
          and other dangerous driving behaviors:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>First offense: PHP 2,000.00</li>
          <li>Second offense: PHP 3,000.00</li>
          <li>Third offense: PHP 10,000.00 plus license revocation</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Illegal Parking
        </h3>
        <p className="text-gray-700 mb-4">
          Parking violations are among the most common traffic offenses,
          especially in congested urban areas. Fines vary depending on whether
          the violation is caught by the LTO, MMDA, or a local government unit:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>LTO fine: PHP 1,000.00 (first offense)</li>
          <li>MMDA fine: PHP 200.00 to PHP 1,000.00 (depending on the zone)</li>
          <li>Local government fines: Varies by city ordinance</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Disregarding Traffic Signs and Signals
        </h3>
        <p className="text-gray-700 mb-4">
          Running a red light, ignoring stop signs, making prohibited turns,
          and other violations of traffic signs and signals carry the following
          penalties:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>First offense: PHP 1,000.00</li>
          <li>Second offense: PHP 2,000.00</li>
          <li>Third offense: PHP 5,000.00 plus possible license suspension</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Operating an Unregistered Motor Vehicle
        </h3>
        <p className="text-gray-700 mb-4">
          Driving a vehicle with an expired or no registration is a serious
          violation that can result in vehicle impoundment:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>First offense: PHP 10,000.00 or more</li>
          <li>Vehicle may be impounded until proper registration is obtained</li>
          <li>Additional late registration penalties apply when registering the vehicle</li>
        </ul>
      </section>

      {/* Anti-Drunk Driving Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Drunk Driving Penalties Under RA 10586
        </h2>
        <p className="text-gray-700 mb-4">
          Republic Act No. 10586, the Anti-Drunk and Drugged Driving Act of
          2013, imposes severe penalties for driving under the influence of
          alcohol or dangerous drugs. The law sets specific blood alcohol
          concentration (BAC) limits:
        </p>
        <ul className="text-gray-700 space-y-1 mb-4">
          <li>
            <strong>Non-professional drivers:</strong> BAC limit of 0.05%
          </li>
          <li>
            <strong>Professional drivers:</strong> BAC limit of 0.00% (zero
            tolerance)
          </li>
          <li>
            <strong>Motorcycle riders:</strong> BAC limit of 0.00% (zero
            tolerance)
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Penalties for drunk driving are among the most severe in Philippine
          traffic law:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>First offense:</strong> Three-month license suspension and
            a fine of PHP 20,000.00 to PHP 80,000.00. Attendance at a
            mandatory alcohol abuse awareness seminar is also required.
          </li>
          <li>
            <strong>Second offense:</strong> Six-month license revocation and a
            fine of PHP 80,000.00 to PHP 120,000.00.
          </li>
          <li>
            <strong>Third and subsequent offenses:</strong> License revocation,
            a fine of PHP 120,000.00 to PHP 200,000.00, and possible
            imprisonment of three months to one year.
          </li>
          <li>
            <strong>If the violation results in death or injury:</strong> The
            penalties increase dramatically, with possible imprisonment of up
            to 12 years and fines of up to PHP 500,000.00, in addition to civil
            liability for damages.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Law enforcement officers are authorized to conduct sobriety
          checkpoints and field sobriety tests. Refusal to submit to a
          breathalyzer or drug test is treated as a presumption of
          intoxication and carries the same penalties as a positive test result.
          The law applies 24 hours a day, seven days a week, on all public
          roads and highways.
        </p>
      </section>

      {/* How to Settle Violations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Settle Traffic Violation Tickets
        </h2>
        <p className="text-gray-700 mb-4">
          If you receive a traffic violation ticket, it is important to settle
          it promptly to avoid additional penalties and complications. Here is a
          guide to the settlement process:
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          LTO-Issued Tickets (TVR - Temporary Visitor&apos;s Receipt)
        </h3>
        <p className="text-gray-700 mb-4">
          When apprehended by LTO traffic enforcers, your driver&apos;s license
          is confiscated and replaced with a Temporary Visitor&apos;s Receipt
          (TVR), which serves as a temporary license for a limited period
          (usually 72 hours for minor violations). To settle the violation and
          retrieve your license:
        </p>
        <ol className="text-gray-700 space-y-2 mb-4">
          <li>
            Note the violation cited on the TVR and the LTO office where you
            need to settle.
          </li>
          <li>
            Visit the designated LTO district office within the prescribed
            period.
          </li>
          <li>
            Present the TVR at the traffic adjudication window and wait for
            your case to be processed.
          </li>
          <li>
            You will be informed of the fine amount based on the violation and
            whether it is your first, second, or subsequent offense.
          </li>
          <li>
            Pay the fine at the cashier&apos;s window. Payment methods vary by
            branch but typically include cash and, at some offices, online
            payment options.
          </li>
          <li>
            Present the official receipt of payment to retrieve your
            confiscated driver&apos;s license.
          </li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          MMDA-Issued Tickets
        </h3>
        <p className="text-gray-700 mb-4">
          MMDA traffic enforcers issue Unified Ordinance Violation Receipts
          (UOVRs) for violations within their jurisdiction. Unlike LTO
          enforcers, MMDA constables do not confiscate your license but instead
          issue a ticket that must be settled within a specified period. You
          can settle MMDA violations at MMDA traffic adjudication offices
          located in major areas throughout Metro Manila, or through
          online payment channels that the MMDA has set up for motorist
          convenience. Unsettled MMDA tickets can prevent you from renewing
          your vehicle registration at the LTO.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Local Government-Issued Tickets
        </h3>
        <p className="text-gray-700 mb-4">
          Traffic violations caught by local government traffic enforcers (such
          as city or municipal traffic management officers) are settled at the
          respective city or municipal hall. Each LGU has its own schedule of
          fines based on their local traffic ordinances. Like MMDA tickets,
          unsettled local government tickets may appear in the LTO system and
          prevent you from renewing your vehicle registration or driver&apos;s
          license until they are cleared.
        </p>
      </section>

      {/* Your Rights During a Traffic Stop */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Your Rights During a Traffic Stop in the Philippines
        </h2>
        <p className="text-gray-700 mb-4">
          Knowing your rights during a traffic stop can help protect you from
          unjust penalties and abuses by traffic enforcers. Here are the key
          rights that every Filipino motorist should know:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Right to see the traffic enforcer&apos;s ID:</strong> All
            traffic enforcers, whether LTO, MMDA, or local government, are
            required to wear their official identification at all times while
            on duty. You have the right to ask for their name and badge number.
          </li>
          <li>
            <strong>Right to be informed of the violation:</strong> The
            enforcer must clearly explain what traffic violation you committed
            and cite the specific law or ordinance that was violated.
          </li>
          <li>
            <strong>Right to receive a proper ticket:</strong> You should
            receive an official traffic violation ticket or receipt, not an
            informal or handwritten note. The ticket should specify the
            violation, the applicable fine, and the office where you can settle
            the violation.
          </li>
          <li>
            <strong>Right to contest the violation:</strong> If you believe the
            violation was unjustly issued, you have the right to contest it at
            the traffic adjudication hearing. You can present your side and
            provide evidence to support your case.
          </li>
          <li>
            <strong>Right against illegal demands:</strong> Traffic enforcers
            are prohibited from demanding or accepting cash payments on the
            spot. All fines must be paid through official channels. If an
            enforcer demands on-the-spot payment, this is considered bribery
            or extortion and should be reported.
          </li>
          <li>
            <strong>Right to report abusive enforcers:</strong> You can file a
            complaint against abusive or corrupt traffic enforcers with their
            respective agencies (LTO, MMDA, or the local government) and
            through the government&apos;s anti-corruption hotlines.
          </li>
        </ul>
      </section>

      {/* Demerit System */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The LTO Demerit Point System
        </h2>
        <p className="text-gray-700 mb-4">
          The LTO uses a demerit point system to track traffic violations
          committed by licensed drivers. Each violation carries a specific number
          of demerit points that are recorded against your driver&apos;s
          license. Accumulating too many demerit points can result in license
          suspension or revocation:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Minor violations</strong> (illegal parking, failure to
            carry license): 2 to 3 demerit points per offense.
          </li>
          <li>
            <strong>Moderate violations</strong> (speeding, disregarding
            traffic signs): 3 to 5 demerit points per offense.
          </li>
          <li>
            <strong>Serious violations</strong> (reckless driving, driving
            under the influence): 5 to 10 demerit points per offense.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          When a driver accumulates a certain number of demerit points within a
          specific period, the LTO may suspend the license for a period ranging
          from one month to one year, depending on the severity and frequency of
          violations. Repeated serious offenses can lead to permanent license
          revocation, meaning the driver would be permanently prohibited from
          holding a Philippine driver&apos;s license.
        </p>
        <p className="text-gray-700 mb-4">
          Demerit points can be reduced through the completion of approved
          driver improvement courses or by maintaining a clean driving record
          for a specified period. The LTO encourages drivers to enroll in safe
          driving programs offered by accredited training centers to improve
          their driving skills and reduce their demerit point count.
        </p>
      </section>

      {/* How to Avoid Traffic Violations */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Avoid Traffic Violations and Penalties
        </h2>
        <p className="text-gray-700 mb-4">
          The best way to deal with traffic violations is to avoid them in the
          first place. Here are practical tips for staying on the right side of
          Philippine traffic laws:
        </p>
        <ul className="text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Always carry your complete documents:</strong> Make sure you
            have your valid driver&apos;s license, current OR/CR, CTPL
            insurance, and any other required documents whenever you drive. A
            complete set of documents can prevent many common violations.
          </li>
          <li>
            <strong>Follow the speed limit:</strong> Pay attention to speed
            limit signs and adjust your speed accordingly. Remember that speed
            limits change depending on the zone (highway, residential, school
            zone).
          </li>
          <li>
            <strong>Observe traffic signs and signals:</strong> Stop at red
            lights, yield at yield signs, and follow lane markings and
            directional signs. Many intersections in Metro Manila have CCTV
            cameras that can capture violations.
          </li>
          <li>
            <strong>Never drive under the influence:</strong> The consequences
            of drunk driving are severe and can include imprisonment. Use
            ride-hailing services or designate a sober driver if you plan to
            drink.
          </li>
          <li>
            <strong>Maintain your vehicle:</strong> Ensure your lights, signals,
            brakes, tires, and emissions are in good working condition. A
            well-maintained vehicle is less likely to be flagged during
            roadside inspections.
          </li>
          <li>
            <strong>Know the coding scheme:</strong> Use our{" "}
            <Link
              href="/coding-checker"
              className="text-blue-600 hover:underline"
            >
              Number Coding Checker
            </Link>{" "}
            to verify your coding day and avoid number coding violations.
          </li>
          <li>
            <strong>Renew on time:</strong> Keep your vehicle registration and
            driver&apos;s license current. Use our{" "}
            <Link
              href="/renewal-calculator"
              className="text-blue-600 hover:underline"
            >
              Renewal Fee Calculator
            </Link>{" "}
            to prepare the exact fees before visiting the LTO.
          </li>
        </ul>
      </section>

      <FAQSection faqs={penaltyFAQs} />

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
            href="/renewal-calculator"
            className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-blue-600">
              Renewal Fee Calculator
            </h3>
            <p className="text-sm text-gray-600">
              Calculate license and vehicle registration renewal fees.
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
              Check the MMDA number coding schedule for your plate.
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
              Track your driver&apos;s license status after a violation.
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
              href="/guides/traffic-violations-fines"
              className="text-blue-600 hover:underline"
            >
              Complete List of Traffic Violations and Fines in the Philippines
            </Link>
          </li>
          <li>
            <Link
              href="/guides/how-to-settle-traffic-violations"
              className="text-blue-600 hover:underline"
            >
              How to Settle Traffic Violation Tickets: Step-by-Step Guide
            </Link>
          </li>
          <li>
            <Link
              href="/guides/anti-drunk-driving-law"
              className="text-blue-600 hover:underline"
            >
              Understanding the Anti-Drunk and Drugged Driving Act (RA 10586)
            </Link>
          </li>
          <li>
            <Link
              href="/guides/mmda-number-coding"
              className="text-blue-600 hover:underline"
            >
              MMDA Number Coding Scheme: Complete Guide to UVVRP Rules
            </Link>
          </li>
          <li>
            <Link
              href="/guides/lto-license-renewal"
              className="text-blue-600 hover:underline"
            >
              Complete Guide to LTO Driver&apos;s License Renewal
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
