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

const guide = getGuideBySlug("anti-drunk-driving-law")!;

export const metadata: Metadata = {
  title: `Anti-Drunk Driving Law Philippines ${CURRENT_YEAR_STR} — RA 10586 Complete Guide`,
  description:
    "Complete guide to the Anti-Drunk and Drugged Driving Act (RA 10586) in the Philippines. Learn about BAC limits, penalties for first, second, and third offenses, checkpoint procedures, license suspension, vehicle impounding, and your rights.",
  keywords: [
    "anti-drunk driving law Philippines",
    "RA 10586",
    "drunk driving penalties Philippines",
    "BAC limit Philippines",
    "blood alcohol concentration Philippines",
    "drunk driving checkpoint",
    "drunk driving fine Philippines",
    "drugged driving Philippines",
    "license suspension drunk driving",
    "vehicle impounding drunk driving",
    "DUI Philippines",
    "anti-drunk driving act",
  ],
  openGraph: {
    title: `Anti-Drunk Driving Law Philippines ${CURRENT_YEAR_STR} — RA 10586 Complete Guide`,
    description:
      "Everything you need to know about RA 10586: BAC limits, penalties, checkpoints, impounding, and your rights under Philippine anti-drunk driving law.",
    url: "https://ltotrackeronline.ph/guides/anti-drunk-driving-law",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `Anti-Drunk Driving Law Philippines ${CURRENT_YEAR_STR} — RA 10586 Complete Guide`,
    description:
      "Complete guide to RA 10586: BAC limits, drunk driving penalties, checkpoints, and your rights.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/anti-drunk-driving-law",
  },
};

const headings = [
  { id: "overview", text: "Overview of RA 10586", level: 2 },
  { id: "bac-limits", text: "Blood Alcohol Concentration (BAC) Limits", level: 2 },
  { id: "what-constitutes", text: "What Constitutes Drunk Driving", level: 2 },
  { id: "penalties-first", text: "Penalties — First Offense", level: 2 },
  { id: "penalties-second", text: "Penalties — Second Offense", level: 2 },
  { id: "penalties-third", text: "Penalties — Third and Subsequent Offenses", level: 2 },
  { id: "penalties-injury-death", text: "Penalties When Injury or Death Occurs", level: 2 },
  { id: "checkpoints", text: "Sobriety Checkpoints and Testing", level: 2 },
  { id: "impounding", text: "Vehicle Impounding Rules", level: 2 },
  { id: "drugged-driving", text: "Drugged Driving Provisions", level: 2 },
  { id: "your-rights", text: "Your Rights During a Checkpoint", level: 2 },
  { id: "practical-tips", text: "Practical Tips and Advice", level: 2 },
];

const faqs = [
  {
    question: "What is the legal blood alcohol limit for driving in the Philippines?",
    answer:
      "The legal BAC (Blood Alcohol Concentration) limit in the Philippines is 0.05% for most drivers. For professional or commercial drivers (bus, truck, taxi, TNVS, and PUV drivers), the limit is stricter at 0.00% — meaning any detectable alcohol level is a violation. For non-professional drivers, a BAC of 0.05% or above is considered drunk driving under RA 10586. A BAC between 0.01% and 0.04% may still result in penalties if there are visible signs of impairment.",
  },
  {
    question: "What is the penalty for drunk driving on the first offense?",
    answer:
      "For a first offense under RA 10586, the penalties include: a fine of PHP 20,000 to PHP 80,000, imprisonment of 3 months minimum (depending on BAC level and circumstances), suspension of driver's license for 12 months, and mandatory attendance at a seminar on traffic safety and responsible drinking conducted by the LTO. If the offender is a professional driver, the license suspension is longer. The vehicle used may also be temporarily impounded.",
  },
  {
    question: "What happens on the second offense for drunk driving?",
    answer:
      "For a second offense, the penalties are significantly harsher: a fine of PHP 80,000 to PHP 120,000, imprisonment of minimum 6 months, suspension of driver's license for 24 months (2 years), mandatory rehabilitation program, and vehicle impounding. A second offense within the same 5-year period demonstrates a pattern of behavior that the courts treat more seriously.",
  },
  {
    question: "Can the police randomly stop me for a drunk driving checkpoint?",
    answer:
      "Yes, the police and the LTO are authorized to set up sobriety checkpoints under RA 10586. However, these checkpoints must follow established protocols: they must be in well-lit areas, properly marked with signage, manned by uniformed officers, and conducted without discrimination (all vehicles or every nth vehicle must be stopped, not selectively). You are required to comply with the checkpoint, but you have rights regarding how the testing is conducted.",
  },
  {
    question: "Can I refuse a breathalyzer test at a checkpoint?",
    answer:
      "Under RA 10586, refusal to submit to a breathalyzer or sobriety test at a lawful checkpoint is treated as a presumption of intoxication and can be used as evidence against you. Refusing the test does not protect you from prosecution — in fact, it may result in the same penalties as if you had tested positive. The law specifically provides that refusal to submit to testing shall be considered as a violation equivalent to a positive result.",
  },
  {
    question: "What is drugged driving and how is it different from drunk driving?",
    answer:
      "RA 10586 covers both drunk driving (alcohol-impaired driving) and drugged driving (driving under the influence of dangerous drugs or controlled substances). Drugged driving carries the same penalties as drunk driving, and in some cases, additional charges under the Comprehensive Dangerous Drugs Act (RA 9165) may apply. Testing for drugged driving may involve field sobriety tests, urine tests, or blood tests rather than breathalyzers.",
  },
  {
    question: "Will drunk driving appear on my LTO records?",
    answer:
      "Yes, a drunk driving conviction will be recorded in the LTO's database and will appear on your driver's license record. This record will affect future license renewals, applications for professional driving licenses, and may be considered in any subsequent traffic violation cases. The record remains even after the suspension period ends. You can check your license status and any recorded violations using the LTO's LTMS Portal or our LTO License Tracker tool.",
  },
  {
    question: "What should I do if I've been drinking and need to get home?",
    answer:
      "The safest and most responsible options include: using a ride-hailing service like Grab, calling a taxi, designating a sober driver before you start drinking, staying overnight at the venue or a nearby hotel, or calling a friend or family member for a ride. Never drive after consuming alcohol, even if you feel fine. Alcohol impairs judgment, reaction time, and coordination even at low levels. The consequences of drunk driving — legal penalties, injury, or death — far outweigh the inconvenience of finding alternative transportation.",
  },
];

export default function AntiDrunkDrivingLaw() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Anti-Drunk Driving Law" },
        ]}
      />

      <ArticleSchema
        headline={`Anti-Drunk Driving Law Philippines ${CURRENT_YEAR_STR} — RA 10586 Complete Guide`}
        description="Complete guide to the Anti-Drunk and Drugged Driving Act (RA 10586). BAC limits, penalties, checkpoints, impounding, and your rights."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Marco Antonio Reyes"
        url="https://ltotrackeronline.ph/guides/anti-drunk-driving-law"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "Anti-Drunk Driving Law",
            url: "https://ltotrackeronline.ph/guides/anti-drunk-driving-law",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Anti-Drunk Driving Law Philippines {CURRENT_YEAR_STR} — RA 10586 Complete Guide
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/marco-antonio-reyes" className="text-[#1e40af] hover:underline">Marco Antonio Reyes</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>19 min read</span>
          </div>

          <section>
            <h2
              id="overview"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Overview of RA 10586
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Drunk driving remains one of the leading causes of fatal road
              accidents in the Philippines. To address this, the Philippine
              government enacted Republic Act No. 10586, also known as the{" "}
              <strong>Anti-Drunk and Drugged Driving Act of 2013</strong>. At{" "}
              <Link
                href="/"
                className="text-[#1e40af] font-medium hover:underline"
              >
                LTO Tracker
              </Link>{", "}
              we believe every Filipino motorist should fully understand this
              law — not only to avoid penalties, but to protect themselves, their
              passengers, and everyone else on the road. This comprehensive
              guide covers every aspect of RA 10586, from the legal BAC limits
              and specific penalties for each offense level, to checkpoint
              procedures and your rights as a motorist.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              RA 10586 was signed into law on May 27, 2013, and its
              Implementing Rules and Regulations (IRR) were issued by the
              Department of Transportation and Communications (now DOTr) in
              coordination with the LTO, the Philippine National Police (PNP),
              and the Metropolitan Manila Development Authority (MMDA). The law
              applies to all motor vehicle drivers on all roads, streets, and
              highways in the Philippines, whether public or private.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The law penalizes any person who operates a motor vehicle while
              under the influence of alcohol, dangerous drugs, or other similar
              intoxicating substances. It establishes clear BAC
              (Blood Alcohol Concentration) limits, defines the testing
              procedures and checkpoint protocols, and prescribes graduated
              penalties that increase in severity for repeat offenders and for
              cases where the drunk driving results in physical injury or death.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For the full text of the law, you can refer to the official
              publication on the{" "}
              <a
                href="https://www.officialgazette.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                Official Gazette of the Philippines
              </a>
              .
            </p>
          </section>

          <section>
            <h2
              id="bac-limits"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Blood Alcohol Concentration (BAC) Limits
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RA 10586 establishes specific BAC limits that define the threshold
              for drunk driving. Understanding these limits is crucial for every
              driver:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Driver Type
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      BAC Limit
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Non-professional driver (private vehicle)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      0.05%
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      BAC at or above 0.05% is a violation
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Professional / commercial driver
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      0.00%
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Any detectable BAC is a violation
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Motorcycle driver
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      0.05%
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Same as non-professional drivers
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>What does 0.05% BAC mean in practical terms?</strong> A
              BAC of 0.05% roughly corresponds to consuming about 2 standard
              drinks (bottles of light beer or glasses of wine) within one hour
              for an average-weight adult. However, BAC levels vary
              significantly based on body weight, gender, food consumption,
              drinking speed, individual metabolism, and other factors. There is
              no reliable way to estimate your exact BAC without a breathalyzer,
              which is why the safest approach is simply not to drink at all
              before driving.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For professional drivers — including bus, truck, taxi, TNVS
              (Grab, etc.), jeepney, and UV Express drivers — the limit is zero
              tolerance (0.00%). This means that even a single drink before
              operating a public or commercial vehicle is a violation. This
              stricter standard reflects the greater responsibility these
              drivers have for passenger safety.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              It is also important to note that a BAC between 0.01% and 0.04%,
              while technically below the 0.05% threshold for non-professional
              drivers, can still be used as evidence of impairment if
              accompanied by visible signs of intoxication (such as slurred
              speech, impaired coordination, or erratic driving). The arresting
              officer&apos;s observations and field sobriety test results may
              support a charge even at lower BAC levels.
            </p>
          </section>

          <section>
            <h2
              id="what-constitutes"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              What Constitutes Drunk Driving
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under RA 10586, a person is considered to be driving under the
              influence if any of the following conditions are met:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                The driver&apos;s BAC level is at or above 0.05% (for
                non-professional drivers) or any detectable level (for
                professional drivers)
              </li>
              <li>
                The driver exhibits visible signs of intoxication, as observed
                by a law enforcement officer and confirmed through field
                sobriety tests
              </li>
              <li>
                The driver is involved in a vehicular accident and subsequent
                testing reveals alcohol or drug levels above the legal limit
              </li>
              <li>
                The driver refuses to submit to alcohol or drug testing when
                lawfully required to do so (refusal is treated as a presumption
                of intoxication)
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The law covers all types of motor vehicles, including cars,
              motorcycles, trucks, buses, and other motorized vehicles.
              Operating any motor vehicle on any road, street, or highway while
              intoxicated is a violation, regardless of whether the road is
              public or private.
            </p>
          </section>

          <section>
            <h2
              id="penalties-first"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Penalties — First Offense
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For a first-time violation of RA 10586 (without resulting
              physical injury or death), the penalties are as follows:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Penalty Component
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Fine
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 20,000 to PHP 80,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Imprisonment
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      3 months minimum (community service may be substituted)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      License suspension
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      12 months
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Mandatory seminar
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      LTO-conducted traffic safety and responsible drinking seminar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Vehicle
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Temporary impounding until the driver is sober or a sober companion claims it
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The exact fine amount within the PHP 20,000 to PHP 80,000 range
              is determined by the court based on the circumstances of the
              violation, including the BAC level, the driver&apos;s behavior,
              and whether there were aggravating factors. The 12-month license
              suspension means the driver cannot legally operate any motor
              vehicle during the suspension period. Driving with a suspended
              license is a separate offense with additional penalties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              For information about how violations affect your license, see our{" "}
              <Link
                href="/guides/lto-license-renewal"
                className="text-blue-600 hover:underline"
              >
                LTO license renewal guide
              </Link>{" "}
              and our{" "}
              <Link
                href="/guides/traffic-violations-fines"
                className="text-blue-600 hover:underline"
              >
                traffic violations and fines guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="penalties-second"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Penalties — Second Offense
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A second drunk driving offense within a five-year period carries
              substantially heavier penalties:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Penalty Component
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Fine
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 80,000 to PHP 120,000
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Imprisonment
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      6 months minimum
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      License suspension
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      24 months (2 years)
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Mandatory rehabilitation
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Alcohol rehabilitation or counseling program
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Vehicle
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Impounding for a longer period; may require court order for release
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The two-year license suspension for a second offense means the
              driver cannot drive any motor vehicle for two full years. After
              the suspension period, the driver must re-apply for a
              driver&apos;s license, which may include additional requirements
              such as completion of a rehabilitation program certificate.
            </p>
          </section>

          <section>
            <h2
              id="penalties-third"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Penalties — Third and Subsequent Offenses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For a third or subsequent offense, the consequences are the most
              severe:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Fine:</strong> PHP 120,000 to PHP 200,000
              </li>
              <li>
                <strong>Imprisonment:</strong> 6 months to 1 year minimum
              </li>
              <li>
                <strong>License:</strong> Permanent revocation of
                driver&apos;s license. The offender is permanently disqualified
                from holding a Philippine driver&apos;s license.
              </li>
              <li>
                <strong>Rehabilitation:</strong> Mandatory alcohol or drug
                rehabilitation program
              </li>
              <li>
                <strong>Vehicle:</strong> Extended impounding; forfeiture of
                the vehicle may be ordered by the court
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permanent license revocation means the individual can never
              legally drive a motor vehicle in the Philippines again. This is
              one of the most severe administrative penalties available under
              Philippine traffic law and reflects the government&apos;s
              serious stance against habitual drunk driving.
            </p>
          </section>

          <section>
            <h2
              id="penalties-injury-death"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Penalties When Injury or Death Occurs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When drunk driving results in physical injury or death, the
              penalties are significantly more severe. RA 10586 provides that
              the drunk driving offense is considered an{" "}
              <strong>aggravating circumstance</strong> in addition to the
              criminal charges for the injury or death itself:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Physical injury:</strong> The drunk driving penalties
                (fine and imprisonment) are imposed in their maximum amounts,
                plus the driver faces separate criminal charges for reckless
                imprudence resulting in physical injuries under the Revised
                Penal Code. Total imprisonment can range from 6 months to
                several years depending on the severity of the injuries.
              </li>
              <li>
                <strong>Homicide (death of a victim):</strong> If drunk driving
                results in the death of another person, the driver faces the
                maximum drunk driving penalties plus charges for reckless
                imprudence resulting in homicide. Imprisonment can range from
                6 years to 12 years or more. The driver&apos;s license is
                permanently revoked, and the vehicle may be forfeited.
              </li>
              <li>
                <strong>Multiple deaths:</strong> In cases involving multiple
                fatalities, each death is treated as a separate charge. The
                penalties compound accordingly, potentially resulting in
                decades of imprisonment.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond criminal penalties, the drunk driver is also civilly
              liable for damages to the victims and their families. This
              includes medical expenses, funeral costs, lost income, moral
              damages, and exemplary damages. The financial liability in a
              drunk driving accident involving death or serious injury can
              reach millions of pesos. The driver&apos;s{" "}
              <Link
                href="/guides/ctpl-insurance-guide"
                className="text-blue-600 hover:underline"
              >
                CTPL insurance
              </Link>{" "}
              coverage of only PHP 100,000 per person is grossly insufficient
              for such cases.
            </p>
          </section>

          <section>
            <h2
              id="checkpoints"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Sobriety Checkpoints and Testing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RA 10586 authorizes law enforcement agencies — the PNP, the LTO,
              and the MMDA (in Metro Manila) — to conduct sobriety checkpoints
              and administer alcohol testing to motorists. Here is how the
              checkpoint process works:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Checkpoint setup.</strong> The enforcement team
                establishes a checkpoint in a visible, well-lit location.
                Warning signs and pylons must be placed to alert approaching
                motorists. Officers must be in proper uniform and display their
                identification. Checkpoints are typically set up on weekends,
                holidays, and during special events when drunk driving is
                statistically more common.
              </li>
              <li>
                <strong>Initial screening.</strong> When a vehicle is stopped
                at the checkpoint, the officer will observe the driver for
                visible signs of intoxication, such as the smell of alcohol,
                slurred speech, bloodshot eyes, impaired coordination, or
                difficulty understanding instructions.
              </li>
              <li>
                <strong>Field sobriety test.</strong> If the officer suspects
                the driver may be intoxicated, the driver will be asked to
                perform standardized field sobriety tests. These may include
                walking in a straight line, standing on one leg, following an
                object with the eyes, and reciting the alphabet or counting
                backwards.
              </li>
              <li>
                <strong>Breathalyzer test.</strong> If the field sobriety test
                indicates possible intoxication, the officer will administer a
                breathalyzer test to determine the driver&apos;s BAC level.
                The breathalyzer device must be properly calibrated and
                certified. The driver is entitled to see the breathalyzer
                reading.
              </li>
              <li>
                <strong>Blood or urine test (if applicable).</strong> In cases
                where the breathalyzer results are disputed or where drugged
                driving is suspected, the driver may be taken to a hospital or
                medical facility for a blood or urine test. The driver has the
                right to request their own independent test at their expense.
              </li>
              <li>
                <strong>Arrest and processing.</strong> If the BAC test
                confirms intoxication above the legal limit, the driver is
                arrested and the vehicle is impounded. The driver is brought
                to the nearest police station for booking and is given the
                opportunity to contact a lawyer or family member.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              Checkpoints are most commonly set up in Metro Manila (by the
              MMDA and PNP), particularly in entertainment districts like
              Makati, Bonifacio Global City, Quezon City, and Pasig. However,
              they can be conducted anywhere in the Philippines. For more
              information on driving rules in Metro Manila, see our{" "}
              <Link
                href="/guides/mmda-number-coding"
                className="text-blue-600 hover:underline"
              >
                MMDA number coding guide
              </Link>
              .
            </p>
          </section>

          <section>
            <h2
              id="impounding"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Vehicle Impounding Rules
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When a driver is apprehended for drunk driving, the vehicle is
              impounded as part of the enforcement process. Here are the key
              rules regarding vehicle impounding under RA 10586:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Immediate impounding.</strong> The vehicle is
                immediately impounded at the checkpoint or apprehension point.
                The driver is not allowed to continue operating the vehicle
                under any circumstances.
              </li>
              <li>
                <strong>Impound duration.</strong> For first offenses, the
                vehicle is typically held until a sober driver or the
                registered owner (if different from the driver) claims it. For
                second and subsequent offenses, the impounding period may be
                longer and may require a court order for release.
              </li>
              <li>
                <strong>Storage fees.</strong> The vehicle owner is responsible
                for impound lot storage fees, which accrue daily until the
                vehicle is claimed. These fees vary by location but typically
                range from PHP 200 to PHP 500 per day.
              </li>
              <li>
                <strong>Claiming the vehicle.</strong> To claim an impounded
                vehicle, the registered owner (or authorized representative)
                must present the CR, OR, valid ID, and proof of payment of any
                applicable fines and storage fees. In some cases, a court order
                may be required.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="drugged-driving"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Drugged Driving Provisions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RA 10586 is not limited to alcohol — it also covers driving under
              the influence of dangerous drugs, controlled substances, and
              other intoxicating substances. The law refers to this as
              &quot;drugged driving&quot; and treats it with equal or greater
              severity than drunk driving.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Substances covered</strong> include but are not limited
              to: marijuana (cannabis), methamphetamine (shabu), cocaine,
              ecstasy, prescription drugs that impair driving ability (such as
              certain sedatives, opioids, and muscle relaxants), and any other
              substance that alters a person&apos;s ability to safely operate
              a motor vehicle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Testing for drugs</strong> is more complex than alcohol
              testing. While breathalyzers can quickly measure BAC, drug testing
              typically requires urine analysis, blood testing, or saliva
              testing conducted at a medical facility. Field sobriety tests can
              indicate drug impairment, but laboratory confirmation is usually
              needed for prosecution.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional charges:</strong> If a driver is found to be
              under the influence of illegal drugs, they face not only the
              penalties under RA 10586 but also potential charges under{" "}
              <strong>RA 9165</strong> (Comprehensive Dangerous Drugs Act of
              2002). Penalties under RA 9165 are extremely severe, including
              imprisonment of 12 years to life, depending on the substance and
              circumstances. The combination of drunk/drugged driving charges
              and drug possession charges can result in decades of imprisonment.
            </p>
          </section>

          <section>
            <h2
              id="your-rights"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Your Rights During a Checkpoint
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While RA 10586 grants law enforcement the authority to conduct
              sobriety checkpoints, you still have important rights as a
              motorist:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Right to see officer identification.</strong> You have
                the right to ask the officer to identify themselves and show
                their badge or identification card.
              </li>
              <li>
                <strong>Right to a properly conducted checkpoint.</strong> The
                checkpoint must be in a visible, well-lit area with proper
                signage. Unmarked, impromptu, or hidden checkpoints may be
                challenged in court.
              </li>
              <li>
                <strong>Right to see the breathalyzer reading.</strong> If
                administered a breathalyzer test, you have the right to see the
                reading on the device. The device must be properly calibrated
                and certified.
              </li>
              <li>
                <strong>Right to request an independent test.</strong> You have
                the right to request a separate, independent blood or urine
                test at your own expense. This can be done at a hospital or
                accredited laboratory of your choosing.
              </li>
              <li>
                <strong>Right to counsel.</strong> If you are arrested, you
                have the right to contact and consult with a lawyer. You also
                have the right to remain silent and not incriminate yourself.
              </li>
              <li>
                <strong>Right to be treated with dignity.</strong> Officers
                must treat you respectfully and professionally. Physical abuse,
                intimidation, or coercion is prohibited and can be reported.
              </li>
              <li>
                <strong>Right to file a complaint.</strong> If you believe
                your rights were violated during the checkpoint, you can file a
                complaint with the PNP Internal Affairs Service, the NAPOLCOM,
                or the appropriate government agency.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, it is important to note that you do{" "}
              <strong>not</strong> have the right to refuse the sobriety test
              or breathalyzer without consequence. Under RA 10586, refusal to
              submit to testing is treated as a presumption of intoxication
              and carries the same penalties as a positive test result.
            </p>
          </section>

          <section>
            <h2
              id="practical-tips"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Practical Tips and Advice
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The simplest and most effective advice for avoiding drunk driving
              violations is also the safest: <strong>do not drive after
              drinking</strong>. Here are practical alternatives and tips:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Designate a sober driver.</strong> Before going out
                with friends, agree on who will be the designated driver. The
                designated driver should abstain from alcohol completely for
                the entire outing.
              </li>
              <li>
                <strong>Use ride-hailing services.</strong> Grab and other
                ride-hailing services are widely available in Metro Manila and
                major cities. The cost of a ride is a fraction of the fine,
                legal fees, and personal consequences of a drunk driving arrest.
              </li>
              <li>
                <strong>Take a taxi.</strong> Traditional taxis are another
                safe alternative. Make sure to take metered or reputable taxi
                services.
              </li>
              <li>
                <strong>Stay overnight.</strong> If you are at a party, event,
                or gathering where you have consumed alcohol, consider staying
                overnight rather than driving home. Many hotels and accommodations
                near entertainment areas offer reasonable rates.
              </li>
              <li>
                <strong>Wait it out.</strong> If you have had a moderate amount
                of alcohol, the general rule of thumb is that your body
                eliminates about one standard drink per hour. However, this
                varies significantly between individuals, so it is always
                safer to err on the side of caution and wait longer than you
                think necessary.
              </li>
              <li>
                <strong>Know the penalty amounts.</strong> Sometimes
                understanding the real financial impact helps. A first offense
                fine of up to PHP 80,000, plus legal fees, license suspension,
                and lost income from potential imprisonment, can total PHP
                200,000 or more. A Grab ride home costs PHP 200-500. The math
                is simple. Use our{" "}
                <Link
                  href="/penalty-calculator"
                  className="text-blue-600 hover:underline"
                >
                  penalty calculator
                </Link>{" "}
                to understand the financial impact of traffic violations.
              </li>
              <li>
                <strong>Talk to your drinking companions.</strong> If you see a
                friend or colleague about to drive after drinking, speak up.
                Offer to call a ride for them or help them find alternative
                transportation. You could save their life and the lives of
                others.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              For more information about traffic laws and penalties in the
              Philippines, visit the official{" "}
              <a
                href="https://lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                LTO website
              </a>{" "}
              or check our other guides on{" "}
              <Link
                href="/guides/how-to-settle-traffic-violations"
                className="text-blue-600 hover:underline"
              >
                how to settle traffic violations
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/lto-license-restriction-codes"
                className="text-blue-600 hover:underline"
              >
                LTO license restriction codes
              </Link>
              .
            </p>
          </section>

          {/* Related Tools */}
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
                href="/penalty-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Penalty Calculator →
              </Link>
              <Link
                href="/coding-checker"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                Number Coding Checker →
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
