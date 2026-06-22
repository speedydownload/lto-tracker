import type { Metadata } from "next";
import Link from "next/link";
import branches from "@/data/branches";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  BreadcrumbSchema,
  FAQPageSchema,
  OrganizationSchema,
} from "@/components/seo/JsonLd";
import FAQSection from "@/components/sections/FAQSection";
import { BranchSearch } from "./BranchSearch";

export const metadata: Metadata = {
  title: "LTO Branches in the Philippines — Complete Directory",
  description:
    "Find every LTO branch in the Philippines with our complete directory. Search by city or region for addresses, contact numbers, operating hours, and available services at NCR, Luzon, Visayas, and Mindanao LTO offices.",
  keywords: [
    "LTO branches Philippines",
    "LTO office near me",
    "LTO branch directory",
    "LTO district office",
    "LTO NCR branches",
    "LTO Visayas branches",
    "LTO Mindanao branches",
    "LTO Luzon branches",
    "LTO office address",
    "LTO contact number",
    "LTO branch hours",
    "Land Transportation Office branches",
  ],
  openGraph: {
    title:
      "LTO Branches in the Philippines — Complete Directory",
    description:
      "Find every LTO branch in the Philippines. Search by city or region for addresses, contact numbers, operating hours, and services.",
    url: "https://ltotrackeronline.ph/branches",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "LTO Branches in the Philippines — Complete Directory",
    description:
      "Find every LTO branch in the Philippines. Search by city or region for addresses, contact numbers, and services.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/branches",
  },
};

const faqs = [
  {
    question: "How many LTO branches are there in the Philippines?",
    answer:
      "The Land Transportation Office (LTO) operates hundreds of branches across the Philippines, including district offices, extension offices, licensing centers, and satellite offices. Our directory covers the major district offices in NCR, Luzon, Visayas, and Mindanao. The LTO continuously opens new branches and licensing centers to serve the growing number of motorists nationwide.",
  },
  {
    question: "What are the operating hours of LTO branches?",
    answer:
      "Most LTO branches in the Philippines operate from Monday to Friday, 8:00 AM to 5:00 PM. Some branches in major cities like Quezon City, Cebu City, and Davao City may have extended hours or Saturday operations during peak periods. It is always recommended to arrive early as queues can be long, especially during renewal season. LTO branches are closed on weekends and national holidays unless otherwise announced.",
  },
  {
    question: "Do I need an appointment to visit an LTO branch?",
    answer:
      "For most transactions, the LTO uses the LTMS (Land Transportation Management System) portal where you can set an appointment online before visiting a branch. While walk-ins may be accepted depending on the branch capacity, having an online appointment through the LTMS Portal at https://portal.lto.gov.ph ensures a smoother and faster experience. Some services like vehicle registration renewal also require online payment before visiting.",
  },
  {
    question: "What services are available at LTO district offices?",
    answer:
      "LTO district offices offer a comprehensive range of services including new driver's license applications, license renewals, student permit issuance, vehicle registration and renewal, change of ownership, plate number release and claiming, Motor Vehicle Inspection Report (MVIR) processing, conductor's permits, and special permits. Not all branches offer every service, so it is advisable to check the specific branch listing before visiting.",
  },
  {
    question: "Can I renew my driver's license at any LTO branch?",
    answer:
      "Yes, you can renew your driver's license at any LTO branch in the Philippines regardless of where your license was originally issued. The LTO's nationwide system allows for cross-branch transactions. However, you must first book an appointment through the LTMS Portal and ensure you have all required documents including your current license, medical certificate, and applicable fees.",
  },
  {
    question:
      "What documents do I need when visiting an LTO branch for vehicle registration?",
    answer:
      "For vehicle registration renewal, you need the original Certificate of Registration (CR) and Official Receipt (OR), a valid Motor Vehicle Inspection Report (MVIR) from an accredited Private Motor Vehicle Inspection Center (PMVIC), proof of insurance (Compulsory Third Party Liability or CTPL), and the registration fee payment. For new registration, additional documents such as the sales invoice, PNP-HPG clearance, and valid ID are required.",
  },
  {
    question: "How do I find the nearest LTO branch to my location?",
    answer:
      "You can use our branch directory on this page to search for LTO branches by city name or browse by region (NCR, Luzon, Visayas, Mindanao). Each branch listing includes the complete address, contact number, and available services. You can also visit the official LTO website at https://lto.gov.ph for the most current branch listings and any temporary closures or relocations.",
  },
  {
    question:
      "Are LTO branches open during holidays or special non-working days?",
    answer:
      "LTO branches generally follow the national government's holiday schedule and are closed during regular holidays, special non-working days, and local holidays. During extended holiday periods, the LTO may issue special advisories about adjusted schedules. Before visiting, check the official LTO social media pages or contact the branch directly for the most up-to-date operating schedule, especially during the holiday season.",
  },
];

const regionGroups = ["NCR", "Luzon", "Visayas", "Mindanao"] as const;

export default function BranchesPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Branches" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Branches", url: "https://ltotrackeronline.ph/branches" },
        ]}
      />
      <FAQPageSchema faqs={faqs} />
      <OrganizationSchema />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            LTO Branches in the Philippines
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Complete directory of Land Transportation Office branches across the
            country
          </p>
        </header>

        {/* Intro Content */}
        <section className="prose prose-zinc max-w-none mb-10">
          <p>
            Use <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}to find any branch. The Land Transportation Office, commonly known as the LTO, is the
            primary government agency in the Philippines responsible for
            regulating land transportation. With branches spread across every
            major city and province in the country, the LTO serves millions of
            Filipino motorists and commuters every year. Whether you need to
            apply for a new driver&apos;s license, renew your vehicle
            registration, claim your plate number, or process a change of
            ownership, finding the right LTO branch is the first step in any
            transaction.
          </p>
          <p>
            Our comprehensive LTO branch directory covers offices throughout the
            National Capital Region (NCR), Luzon, Visayas, and Mindanao. Each
            listing includes the branch&apos;s complete street address, contact
            telephone number, email address, operating hours, and a full list of
            available services. This directory is designed to help you plan your
            visit in advance, saving you time and ensuring you go to a branch
            that offers the specific service you need.
          </p>
          <p>
            The LTO has been modernizing its operations through the Land
            Transportation Management System (LTMS) portal, which allows
            motorists to book appointments, pay fees online, and track the
            status of their applications. Despite these digital improvements,
            most transactions still require a physical visit to an LTO branch.
            Understanding which branches are near you and what services they
            offer is essential for a smooth experience.
          </p>
          <p>
            In Metro Manila alone, the LTO operates district offices in major
            cities including Quezon City, Manila, Makati, Pasig, Caloocan, Las
            Pinas, Marikina, and Taguig. The LTO Central Office located at East
            Avenue in Diliman, Quezon City, serves as the headquarters and
            offers the most comprehensive range of services. For motorists in
            the provinces, regional district offices in cities like Cebu, Davao,
            Iloilo, Baguio, and Cagayan de Oro provide similar core services
            without the need to travel to Manila.
          </p>
          <p>
            Each LTO branch operates on a standard schedule of Monday through
            Friday, 8:00 AM to 5:00 PM, following the national government&apos;s
            work schedule. Some branches may have adjusted hours during peak
            seasons such as the months leading up to license expiration
            deadlines. It is always advisable to arrive early in the morning as
            queues tend to build up quickly, especially at busy metro branches.
          </p>
          <p>
            Our directory is regularly updated to reflect any changes in branch
            addresses, contact information, or service offerings. We source our
            data from the official LTO website, the LTMS Portal, and verified
            public records to ensure accuracy. If you notice any discrepancies
            or have updated information about a branch, we encourage you to
            contact us so we can keep this directory as current as possible for
            all users.
          </p>
          <p>
            Whether you are a first-time driver applying for a student permit, a
            vehicle owner needing to renew your registration, or someone
            tracking the release of your license plate, this branch directory
            will guide you to the correct LTO office. Use the search bar below
            to find a branch by city name or browse through the regional
            listings to discover all available offices in your area.
          </p>
        </section>

        {/* Search */}
        <BranchSearch />

        {/* Branches by Region */}
        {regionGroups.map((group) => {
          const regionBranches = branches.filter(
            (b) => b.regionGroup === group
          );
          if (regionBranches.length === 0) return null;

          return (
            <section key={group} className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-4 border-b border-border pb-2">
                {group === "NCR"
                  ? "National Capital Region (NCR)"
                  : group}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {regionBranches.map((branch) => (
                  <Link
                    key={branch.slug}
                    href={`/branches/${branch.slug}`}
                    className="group block rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {branch.name}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {branch.address}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {branch.phone}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {branch.services.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                        >
                          {service}
                        </span>
                      ))}
                      {branch.services.length > 3 && (
                        <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                          +{branch.services.length - 3} more
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* Internal Links */}
        <section className="mb-10 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Related Resources
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/lto-portal-tracker"
                className="text-primary hover:underline"
              >
                Track your LTO application status online
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary hover:underline">
                About LTO Tracker
              </Link>
            </li>
            <li>
              <Link
                href="/data-sources"
                className="text-primary hover:underline"
              >
                Our data sources and verification process
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact us with branch updates or corrections
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <FAQSection faqs={faqs} title="Frequently Asked Questions About LTO Branches" />
      </main>
    </>
  );
}
