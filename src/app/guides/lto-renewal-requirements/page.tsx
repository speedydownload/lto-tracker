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
  HowToSchema,
} from "@/components/seo/JsonLd";

const guide = getGuideBySlug("lto-renewal-requirements")!;

export const metadata: Metadata = {
  title: `LTO Renewal Requirements ${CURRENT_YEAR_STR} — Complete Document Checklist`,
  description: `Complete checklist of LTO renewal requirements for ${CURRENT_YEAR_STR}. Covers vehicle registration renewal, driver's license renewal, document requirements, fees, PMVIC inspection, and step-by-step procedures at LTO Philippines.`,
  keywords: [
    `LTO renewal requirements ${CURRENT_YEAR_STR}`,
    "LTO vehicle registration renewal",
    "LTO renewal documents",
    "LTO renewal checklist",
    "LTO registration renewal Philippines",
    "PMVIC requirements",
    `LTO renewal fees ${CURRENT_YEAR_STR}`,
    "vehicle registration renewal requirements",
    "OR CR renewal requirements",
    "LTO renewal process",
  ],
  openGraph: {
    title: `LTO Renewal Requirements ${CURRENT_YEAR_STR} — Complete Document Checklist`,
    description:
      "Complete checklist of all documents, fees, and requirements for LTO vehicle registration and driver's license renewal in the Philippines.",
    url: "https://ltotrackeronline.ph/guides/lto-renewal-requirements",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `LTO Renewal Requirements ${CURRENT_YEAR_STR} — Complete Document Checklist`,
    description:
      "Complete checklist of all documents, fees, and requirements for LTO renewal in the Philippines.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-renewal-requirements",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  {
    id: "vehicle-registration-renewal",
    text: "Vehicle Registration Renewal Requirements",
    level: 2,
  },
  {
    id: "document-checklist",
    text: "Complete Document Checklist",
    level: 3,
  },
  { id: "pmvic-inspection", text: "PMVIC Inspection Requirement", level: 2 },
  {
    id: "insurance-requirements",
    text: "Insurance Requirements (CTPL & Comprehensive)",
    level: 2,
  },
  {
    id: "emissions-testing",
    text: "Emissions Testing Requirements",
    level: 2,
  },
  {
    id: "registration-fees",
    text: "Vehicle Registration Renewal Fees",
    level: 2,
  },
  {
    id: "late-renewal-penalties",
    text: "Late Renewal Penalties",
    level: 2,
  },
  {
    id: "renewal-process",
    text: "Step-by-Step Renewal Process",
    level: 2,
  },
  {
    id: "online-renewal",
    text: "Online Renewal via LTMS Portal",
    level: 2,
  },
  {
    id: "special-cases",
    text: "Special Cases and Situations",
    level: 2,
  },
  {
    id: "tips-and-reminders",
    text: "Tips and Reminders",
    level: 2,
  },
];

const faqs = [
  {
    question: "When should I renew my vehicle registration at the LTO?",
    answer:
      "You should renew your vehicle registration before the last working day of the month that corresponds to the last digit of your plate number. For example, if your plate ends in 1, your registration expires at the end of January. If your plate ends in 2, it expires at the end of February, and so on. Plates ending in 0 expire in October. You can renew up to 60 days before the expiration date without penalty.",
  },
  {
    question: "What happens if I renew my vehicle registration late?",
    answer:
      "Late renewal of vehicle registration incurs a penalty of 50% of the Motor Vehicle User's Charge (MVUC) for the first month of delay. This penalty increases for subsequent months of delay. Additionally, driving with an expired registration is a traffic violation that can result in a fine and the impounding of your vehicle during enforcement operations.",
  },
  {
    question: "Do I need a PMVIC inspection for vehicle registration renewal?",
    answer:
      "Yes, all motor vehicles are required to undergo inspection at a Private Motor Vehicle Inspection Center (PMVIC) before renewing their registration. The PMVIC replaced the old private emission testing centers and conducts a more comprehensive 70-point inspection covering brakes, lights, emissions, steering, suspension, and other safety components. You must obtain a PMVIC certificate before proceeding with your registration renewal.",
  },
  {
    question: "Can I renew my vehicle registration online?",
    answer:
      "Yes, the LTO offers online vehicle registration renewal through the LTMS Portal at portal.lto.gov.ph. You can pay the registration fees online through authorized payment channels and have your OR/CR delivered to your address. However, you still need to complete the PMVIC inspection in person before initiating the online renewal process.",
  },
  {
    question: "What insurance do I need for vehicle registration renewal?",
    answer:
      "You need a valid Compulsory Third-Party Liability (CTPL) insurance policy from an Insurance Commission-accredited provider. The CTPL policy must cover the entire registration period (one year). Comprehensive or collision insurance is optional but recommended. You must present the original CTPL Certificate of Cover (COC) during registration renewal.",
  },
  {
    question: "How much does vehicle registration renewal cost at the LTO?",
    answer:
      "The cost varies depending on the vehicle type and engine displacement. For private cars, the total typically ranges from PHP 1,600 to PHP 5,000 or more, including the Motor Vehicle User's Charge, registration fee, computer fee, CTPL insurance, and sticker fee. Motorcycles generally cost between PHP 500 and PHP 1,800. The PMVIC inspection fee is separate and ranges from PHP 600 to PHP 1,800 depending on vehicle type.",
  },
  {
    question: "Can I renew my vehicle registration at any LTO branch?",
    answer:
      "Vehicle registration renewal should be done at the LTO district office where your vehicle is registered (as indicated on your CR). However, some branches accept renewals for vehicles registered at other offices, particularly within the same region. It is best to check with the specific branch beforehand if you plan to renew at a different office from where you originally registered.",
  },
  {
    question: "What if I lost my CR or OR? Can I still renew?",
    answer:
      "If you lost your Certificate of Registration (CR) or Official Receipt (OR), you must first apply for a replacement before renewing your registration. You will need to file an affidavit of loss, present a valid government-issued ID, and pay the replacement fee. Once you have the replacement CR, you can proceed with the registration renewal process.",
  },
];

export default function LtoRenewalRequirements() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "LTO Renewal Requirements" },
        ]}
      />

      <ArticleSchema
        headline={`LTO Renewal Requirements ${CURRENT_YEAR_STR} — Complete Document Checklist`}
        description={`Complete checklist of LTO renewal requirements for ${CURRENT_YEAR_STR}, covering vehicle registration renewal, document requirements, fees, PMVIC inspection, and step-by-step procedures.`}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Rafael Jose Villanueva"
        url="https://ltotrackeronline.ph/guides/lto-renewal-requirements"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "LTO Renewal Requirements",
            url: "https://ltotrackeronline.ph/guides/lto-renewal-requirements",
          },
        ]}
      />
      <HowToSchema
        name="How to Renew Vehicle Registration at the LTO"
        description="A step-by-step guide to renewing your vehicle registration at the LTO in the Philippines, including all document requirements, fees, and procedures."
        steps={[
          {
            name: "Get PMVIC Inspection",
            text: "Visit a Private Motor Vehicle Inspection Center (PMVIC) and have your vehicle inspected. Obtain the PMVIC inspection certificate.",
          },
          {
            name: "Obtain CTPL Insurance",
            text: "Purchase or renew your Compulsory Third-Party Liability (CTPL) insurance from an accredited insurance provider.",
          },
          {
            name: "Prepare Documents",
            text: "Gather your original CR, latest OR, PMVIC certificate, CTPL insurance certificate, and valid ID.",
          },
          {
            name: "Visit LTO or Apply Online",
            text: "Visit your LTO district office or use the LTMS Portal at portal.lto.gov.ph to process your renewal.",
          },
          {
            name: "Pay Fees",
            text: "Pay the registration renewal fees at the cashier or through authorized online payment channels.",
          },
          {
            name: "Receive New OR/CR",
            text: "After payment, receive your new Official Receipt (OR) and updated Certificate of Registration (CR) with the new registration sticker.",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            LTO Renewal Requirements {CURRENT_YEAR_STR} — Complete Document Checklist
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/rafael-jose-villanueva" className="text-[#1e40af] hover:underline">Rafael Jose Villanueva</Link></span>
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
              Use <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}to prepare for renewing your vehicle registration at the Land Transportation
              Office (LTO), a mandatory annual obligation for every motor
              vehicle owner in the Philippines. Under Republic Act No. 4136 (the
              Land Transportation and Traffic Code), all motor vehicles must be
              registered and carry a valid registration at all times while
              operating on public roads. Failure to renew your registration on
              time results in penalties, and driving with an expired registration
              is a traffic violation that can lead to fines and the impounding of
              your vehicle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO has updated its renewal process in recent years with the
              introduction of the Private Motor Vehicle Inspection Centers
              (PMVICs), the LTMS Portal for online transactions, and revised fee
              schedules. These changes aim to improve road safety and streamline
              the <Link href="/guides/lto-vehicle-registration" className="text-[#1e40af] hover:underline">vehicle registration</Link> process, but they have also introduced new
              requirements that vehicle owners need to be aware of.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This guide provides a comprehensive checklist of every document,
              certificate, and fee required for vehicle registration renewal in{" "}
              {CURRENT_YEAR_STR}. If you also need to renew your driver&apos;s license, see our separate guide on the <Link href="/guides/lto-license-renewal" className="text-[#1e40af] hover:underline">LTO license renewal process</Link>. Whether you drive a private car, a motorcycle, a commercial
              vehicle, or a company-owned fleet vehicle, you will find all the
              information you need to complete your renewal smoothly and avoid
              unnecessary delays or rejected applications.
            </p>
          </section>

          <section>
            <h2
              id="vehicle-registration-renewal"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Vehicle Registration Renewal Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vehicle registration renewal in the Philippines requires several
              documents and certifications. The requirements have become more
              comprehensive with the introduction of the PMVIC system, which
              replaced the simpler emissions testing that was previously the
              primary inspection requirement. Below is a detailed breakdown of
              every requirement you need to fulfill.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The registration renewal schedule follows a system based on the
              last digit of your plate number. Each digit corresponds to a
              specific month: 1 for January, 2 for February, 3 for March, 4 for
              April, 5 for May, 6 for June, 7 for July, 8 for August, 9 for
              September, and 0 for October. Vehicles with conduction stickers
              (those still waiting for permanent plates) follow the last digit of
              the conduction sticker number. You can renew your registration
              starting 60 days before the expiration date.
            </p>

            <h3
              id="document-checklist"
              className="text-xl font-bold text-gray-900 mt-8 mb-3"
            >
              Complete Document Checklist
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prepare the following documents before going to the LTO or
              initiating your online renewal:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Original Certificate of Registration (CR)</strong> — The
                current, valid CR card for your vehicle. This is the blue card
                that shows your vehicle details, plate number, and registration
                information. You must present the original; photocopies are not
                accepted.
              </li>
              <li>
                <strong>Latest Official Receipt (OR)</strong> — The original OR
                from your most recent registration renewal. This proves that your
                previous year&apos;s registration was properly paid.
              </li>
              <li>
                <strong>PMVIC Inspection Certificate</strong> — A certificate
                from an accredited Private Motor Vehicle Inspection Center
                confirming that your vehicle has passed the comprehensive
                inspection. The certificate is valid for a limited period, so
                time your PMVIC visit close to your renewal date.
              </li>
              <li>
                <strong>
                  Compulsory Third-Party Liability (CTPL) Insurance
                </strong>{" "}
                — A valid CTPL insurance policy from an Insurance
                Commission-accredited provider. The insurance must cover the
                upcoming registration period (one year). You will need the
                original Certificate of Cover (COC).
              </li>
              <li>
                <strong>Valid government-issued ID</strong> — At least one valid
                ID such as a driver&apos;s license, passport, UMID, PhilID, SSS
                ID, or voter&apos;s ID. The name on the ID must match the name
                on the CR.
              </li>
              <li>
                <strong>Duly accomplished Motor Vehicle Inspection Report
                (MVIR)</strong> — This form is typically provided and filled out
                during the PMVIC inspection process. It documents the results of
                the 70-point vehicle inspection.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional requirements for specific cases:</strong>
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Company-owned vehicles:</strong> Secretary&apos;s
                certificate or board resolution authorizing the person processing
                the renewal, plus the authorized person&apos;s valid ID.
              </li>
              <li>
                <strong>Government vehicles:</strong> Authority to purchase or
                use the vehicle (from the head of the agency), plus supporting
                government documentation.
              </li>
              <li>
                <strong>Vehicles with changed details:</strong> If there have
                been modifications to the vehicle (engine change, body
                modification, color change), bring the appropriate LTO approval
                documents for the modification.
              </li>
              <li>
                <strong>Vehicles with unsettled violations:</strong> Outstanding
                traffic violations recorded in the LTO system must be settled
                before the renewal can proceed. Check and clear any violations
                in advance.
              </li>
            </ul>
          </section>

          <section>
            <h2
              id="pmvic-inspection"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              PMVIC Inspection Requirement
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Private Motor Vehicle Inspection Center (PMVIC) program is one
              of the most significant changes to the vehicle registration renewal
              process in recent years. PMVICs replaced the old private emission
              testing centers (PETCs) with a more comprehensive vehicle
              inspection system designed to improve road safety in the
              Philippines. For a detailed walkthrough, see our <Link href="/guides/pmvic-inspection-guide" className="text-[#1e40af] hover:underline">PMVIC inspection</Link> guide.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The PMVIC inspection covers approximately 70 inspection points
              across multiple vehicle systems. These include brake performance
              and condition, headlight alignment and brightness, signal lights
              and hazard lights, horn functionality, tire condition and tread
              depth, steering system, suspension components, exhaust emissions,
              windshield and mirror condition, seatbelt functionality, and
              overall vehicle structural integrity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>PMVIC inspection fees</strong> vary depending on the type
              of vehicle. As of {CURRENT_YEAR_STR}, typical fees are approximately PHP 600 for
              motorcycles, PHP 1,000 to PHP 1,200 for light vehicles (sedans,
              hatchbacks, SUVs), and PHP 1,500 to PHP 1,800 for trucks, vans,
              and utility vehicles. These fees are set by the Department of
              Transportation and are standardized across all accredited PMVICs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your vehicle fails the PMVIC inspection, you will receive a
              report detailing the specific items that did not pass. You must
              have these items repaired and return for a re-inspection. The
              re-inspection fee is typically lower than the initial inspection
              fee. Only vehicles that pass all inspection points receive the
              PMVIC certificate required for registration renewal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To find an accredited PMVIC near you, visit the LTO website or
              contact your nearest LTO district office for a list of authorized
              centers in your area. We recommend scheduling your PMVIC inspection
              at least two weeks before your intended LTO visit to allow time for
              any necessary repairs and re-inspection if needed.
            </p>
          </section>

          <section>
            <h2
              id="insurance-requirements"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Insurance Requirements (CTPL & Comprehensive)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every motor vehicle in the Philippines is required to carry
              Compulsory Third-Party Liability (CTPL) insurance before it can be
              registered or its registration renewed. CTPL insurance protects
              third parties (pedestrians, passengers, and occupants of other
              vehicles) who may be injured or killed in an accident involving
              your vehicle.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The CTPL insurance must be obtained from an insurance company
              accredited by the Insurance Commission of the Philippines. The
              coverage period must match or exceed the registration period (one
              year). When purchasing your CTPL, make sure the policy includes the
              correct vehicle details (plate number, engine number, chassis
              number) and that the start date of coverage aligns with your
              registration renewal date.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>CTPL insurance rates</strong> vary by vehicle type. For
              private cars, the annual CTPL premium typically ranges from PHP 400
              to PHP 750. For motorcycles, it ranges from PHP 150 to PHP 350. For
              commercial vehicles, rates are higher and depend on the seating
              capacity and vehicle classification. These rates are regulated by
              the Insurance Commission and may be adjusted periodically.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Comprehensive insurance</strong> (also called
              &quot;acts of God&quot; insurance or collision insurance) is
              optional but highly recommended. Comprehensive insurance covers
              damage to your own vehicle from accidents, theft, natural
              disasters, and other incidents. While not required for LTO
              registration renewal, many vehicle owners choose to carry
              comprehensive insurance for financial protection. If you have an
              auto loan, your lending institution may require comprehensive
              insurance as a condition of the loan.
            </p>
          </section>

          <section>
            <h2
              id="emissions-testing"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Emissions Testing Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Emissions testing is now conducted as part of the comprehensive
              PMVIC inspection. Under the PMVIC system, your vehicle&apos;s
              exhaust emissions are tested during the 70-point inspection, and
              the results are included in the overall PMVIC certificate. You no
              longer need to visit a separate private emission testing center
              (PETC) for a standalone emissions test.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The emissions standards are based on the Clean Air Act (Republic
              Act No. 8749) and the emission limits set by the Department of
              Environment and Natural Resources (DENR). The standards differ
              depending on whether your vehicle uses gasoline or diesel fuel, and
              they take into account the vehicle&apos;s year of manufacture.
              Newer vehicles are held to stricter emission standards than older
              models.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your vehicle fails the emissions portion of the PMVIC
              inspection, common causes include a dirty or clogged catalytic
              converter, worn spark plugs, a malfunctioning oxygen sensor,
              incorrect fuel-air mixture, or engine oil burning issues. Address
              these mechanical issues before returning for re-inspection.
            </p>
          </section>

          <section>
            <h2
              id="registration-fees"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Vehicle Registration Renewal Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The fees for vehicle registration renewal depend on the type and
              classification of your vehicle. The total amount you pay at the
              LTO includes several components, each mandated by different laws
              and regulations. Here is a breakdown of the typical fees:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Fee Component
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Private Car
                    </th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">
                      Motorcycle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Motor Vehicle User&apos;s Charge (MVUC)
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 720 - 3,500+
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 180 - 720
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Registration Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 252.96
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 126.48
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Computer Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 67.36
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      CTPL Insurance
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 400 - 750
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 150 - 350
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      Sticker Fee
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 45.00
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">
                      PHP 45.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50 font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      Estimated Total
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 1,600 - 5,000+
                    </td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">
                      PHP 570 - 1,800
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Motor Vehicle User&apos;s Charge (MVUC) is the largest
              component and varies based on your vehicle&apos;s engine
              displacement (in cubic centimeters) and gross vehicle weight. Larger
              engines and heavier vehicles pay higher MVUC rates. For a complete breakdown of all charges, see our <Link href="/guides/lto-fees-schedule" className="text-[#1e40af] hover:underline">LTO fees schedule</Link>. The specific
              MVUC rate for your vehicle is determined by the LTO based on the
              engine displacement recorded in your CR.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that the PMVIC inspection fee is paid directly to the PMVIC
              and is separate from the LTO registration fees listed above. The
              CTPL insurance premium is also paid to your insurance provider and
              presented to the LTO as part of the documentation.
            </p>
          </section>

          <section>
            <h2
              id="late-renewal-penalties"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Late Renewal Penalties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Renewing your vehicle registration after the deadline incurs
              penalties that increase the longer you delay. The penalty structure
              is designed to encourage timely renewal and is calculated based on
              the MVUC component of your registration fees.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The standard late registration penalty is <strong>50% of the
              MVUC</strong> for the first month of delay. Additional penalties
              may be assessed for each subsequent month. For example, if your
              MVUC is PHP 1,600, the late penalty for the first month would be
              PHP 800, bringing your total renewal cost significantly higher than
              if you had renewed on time.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond the financial penalty, driving with an expired registration
              carries additional risks. Under the Land Transportation and Traffic
              Code, operating an unregistered motor vehicle is a traffic
              violation punishable by a fine. During enforcement operations, your
              vehicle may be flagged down, and if your registration is found to
              be expired, the vehicle can be impounded until you complete the
              renewal process and pay all applicable fines and penalties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your registration has been expired for more than one year, the
              renewal process may be more complex. You may need to present
              additional documentation, undergo a more thorough vehicle
              inspection, and settle accumulated penalties. In extreme cases of
              long-lapsed registration, the LTO may require you to go through a
              process similar to a new registration rather than a simple renewal.
            </p>
          </section>

          <section>
            <h2
              id="renewal-process"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Step-by-Step Renewal Process
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Here is the complete step-by-step process for renewing your vehicle
              registration at the LTO district office:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Complete the PMVIC inspection.</strong> Visit an
                accredited PMVIC center and have your vehicle inspected. If your
                vehicle passes, you will receive the PMVIC certificate. If it
                fails, have the issues repaired and return for re-inspection.
              </li>
              <li>
                <strong>Obtain or renew CTPL insurance.</strong> Purchase your
                CTPL insurance policy from an accredited insurance provider.
                Make sure the policy period covers the upcoming registration
                year. Keep the original Certificate of Cover (COC).
              </li>
              <li>
                <strong>Gather all required documents.</strong> Collect your
                original CR, latest OR, PMVIC certificate, CTPL COC, and valid
                government-issued ID. Make photocopies of each document as some
                branches require them.
              </li>
              <li>
                <strong>Visit your LTO district office.</strong> Go to the LTO
                branch where your vehicle is registered. Arrive early to avoid
                long queues. Proceed to the registration renewal section.
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong>{" "}
                Present all your documents to the evaluator. They will review
                your documents, check your vehicle&apos;s records in the system,
                verify that there are no unsettled violations or encumbrances,
                and compute the total fees due.
              </li>
              <li>
                <strong>Pay the registration fees.</strong> Proceed to the
                cashier window and pay the total amount. The LTO accepts cash and
                some branches also accept debit cards and other electronic
                payment methods. Keep the receipt as proof of payment.
              </li>
              <li>
                <strong>Receive your new OR and CR.</strong> After payment, go to
                the releasing window to receive your new Official Receipt (OR)
                and updated Certificate of Registration (CR). You will also
                receive a new registration sticker for your vehicle&apos;s
                windshield or body (for motorcycles).
              </li>
              <li>
                <strong>Apply the registration sticker.</strong> Affix the new
                registration sticker to the designated location on your vehicle.
                For cars, this is typically the lower-right corner of the
                windshield. For motorcycles, it is affixed to the vehicle body
                as directed by the LTO.
              </li>
            </ol>
          </section>

          <section>
            <h2
              id="online-renewal"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Online Renewal via LTMS Portal
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO has introduced the option to renew vehicle registration
              online through the Land Transportation Management System (LTMS)
              Portal. This option saves you from queuing at the LTO office for
              the payment and processing portion of the renewal. However, the
              PMVIC inspection must still be completed in person before
              initiating the online renewal.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              To renew online, visit the LTMS Portal at{" "}
              <a
                href="https://portal.lto.gov.ph"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-blue-600 hover:underline"
              >
                portal.lto.gov.ph
              </a>
              , log in to your account (or create one), and navigate to the
              Vehicle Registration Renewal section. Enter your vehicle details,
              upload the required documents (PMVIC certificate, CTPL COC), and
              proceed to payment through the available online channels, which
              include GCash, Maya, bank transfers, and credit/debit cards.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              After successful payment, your new OR and CR will be processed and
              can be delivered to your home or office address through the
              LTO&apos;s authorized delivery partner. Delivery typically takes 5
              to 10 business days depending on your location. You can also opt
              to pick up the documents at your LTO district office if you prefer.
            </p>
          </section>

          <section>
            <h2
              id="special-cases"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Special Cases and Situations
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Vehicles with outstanding violations:</strong> The LTO
              system tracks traffic violations through the Anti-Fixers and Bribery
              System. If your vehicle has unresolved violations, you must settle
              these before the system will allow your registration renewal to
              proceed. Check the LTMS Portal or inquire at your branch to see if
              there are any pending violations on your vehicle&apos;s record.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Vehicles with alarm or hold orders:</strong> If there is an
              alarm, hold order, or encumbrance on your vehicle (such as from a
              pending legal case, unpaid loan, or flagged stolen vehicle report),
              the renewal cannot proceed until the issue is resolved. Contact the
              LTO Intelligence and Investigation Division or the entity that
              placed the hold to resolve the matter.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Vehicles with expired registration for over three
              years:</strong> For vehicles whose registration has been expired for
              more than three years, the LTO may require additional documentation
              and a more comprehensive review. This may include a re-verification
              of the vehicle&apos;s engine number and chassis number against the
              CR records, a fresh PMVIC inspection, and settlement of all
              accumulated penalties.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Renewal during the registration month
              extension:</strong> The LTO sometimes extends registration renewal
              deadlines due to holidays, system outages, or national emergencies
              (as was the case during COVID-19 lockdowns). Watch for official LTO
              announcements about deadline extensions and take advantage of them
              if your renewal falls during an affected period.
            </p>
          </section>

          <section>
            <h2
              id="tips-and-reminders"
              className="text-2xl font-bold text-gray-900 mt-10 mb-4"
            >
              Tips and Reminders
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Renew early.</strong> You can renew up to 60 days before
                your registration expiration date. Renewing early helps you
                avoid the rush during the last week of the month and reduces the
                risk of incurring late penalties.
              </li>
              <li>
                <strong>Schedule your PMVIC first.</strong> Since the PMVIC
                certificate is a prerequisite for renewal, get your inspection
                done at least two weeks before your planned LTO visit. This gives
                you time to address any issues if your vehicle fails the
                inspection.
              </li>
              <li>
                <strong>Check for violations beforehand.</strong> Log in to the
                LTMS Portal and check if there are any recorded violations on
                your vehicle. Settle these before your renewal visit to avoid
                delays at the LTO.
              </li>
              <li>
                <strong>Bring exact payment if possible.</strong> While LTO
                cashiers can make change, having the exact amount speeds up the
                process, especially at busy branches.
              </li>
              <li>
                <strong>Keep copies of everything.</strong> After renewal, make
                photocopies of your new OR and CR. Store the originals in a safe
                place and keep the copies in your vehicle for everyday use.
              </li>
              <li>
                <strong>Set a renewal reminder.</strong> Mark your calendar 60
                days before your registration expiration date so you have ample
                time to prepare documents and schedule your PMVIC inspection.
              </li>
            </ul>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">
              Related Tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href="/renewal-calculator"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Renewal Fee Calculator →
              </Link>
              <Link
                href="/"
                className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium"
              >
                LTO Registration Status Tracker →
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
