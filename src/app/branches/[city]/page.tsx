import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import branches, { getBranchBySlug } from "@/data/branches";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import {
  LocalBusinessSchema,
  BreadcrumbSchema,
  FAQPageSchema,
} from "@/components/seo/JsonLd";
import FAQSection from "@/components/sections/FAQSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PageProps {
  params: Promise<{ city: string }>;
}

export function generateStaticParams() {
  return branches.map((branch) => ({
    city: branch.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const branch = getBranchBySlug(city);

  if (!branch) {
    return {
      title: "Branch Not Found",
    };
  }

  return {
    title: `LTO Branch ${branch.city} — Address, Contact & Services`,
    description: `Complete guide to the ${branch.name} in ${branch.city}. Find the address, phone number, operating hours, and full list of services. Located at ${branch.address}.`,
    keywords: [
      `LTO ${branch.city}`,
      `LTO branch ${branch.city}`,
      `LTO office ${branch.city}`,
      `LTO ${branch.city} address`,
      `LTO ${branch.city} contact number`,
      `LTO ${branch.city} services`,
      `driver's license ${branch.city}`,
      `vehicle registration ${branch.city}`,
      `LTO ${branch.region}`,
    ],
    openGraph: {
      title: `LTO Branch ${branch.city} — Address, Contact & Services`,
      description: `Find the ${branch.name} address, phone number, hours, and services. Located at ${branch.address}.`,
      url: `https://ltotrackeronline.ph/branches/${branch.slug}`,
      siteName: "LTO Tracker",
      type: "website",
      locale: "en_PH",
    },
    twitter: {
      card: "summary_large_image",
      title: `LTO Branch ${branch.city} — Address, Contact & Services`,
      description: `Find the ${branch.name} address, phone number, hours, and services.`,
    },
    alternates: {
      canonical: `https://ltotrackeronline.ph/branches/${branch.slug}`,
    },
  };
}

function generateBranchFaqs(cityName: string, branchName: string, address: string, phone: string) {
  return [
    {
      question: `Where is the LTO branch in ${cityName} located?`,
      answer: `The ${branchName} is located at ${address}. The office is accessible by public transportation and private vehicles. When visiting, we recommend arriving early in the morning to avoid long queues, especially on Mondays and Fridays which tend to be the busiest days. You can verify the exact location using Google Maps or Waze before your visit to plan your route efficiently.`,
    },
    {
      question: `What are the operating hours of the LTO ${cityName} branch?`,
      answer: `The ${branchName} operates from Monday to Friday, 8:00 AM to 5:00 PM. The office follows the standard government work schedule and is closed on weekends, regular holidays, and special non-working days as declared by the national government. During peak periods, such as end-of-year renewal rushes, the branch may extend its operating hours. Always check the official LTO announcements or call ${phone} for the most current schedule.`,
    },
    {
      question: `What services are available at the LTO ${cityName} branch?`,
      answer: `The ${branchName} offers a range of LTO services including driver's license application and renewal, student permit processing, vehicle registration and renewal, and other motor vehicle-related transactions. Some specialized services such as change of ownership, plate claiming, and special permits may also be available. We recommend checking the specific branch page or calling ahead at ${phone} to confirm the availability of the service you need before visiting.`,
    },
    {
      question: `Do I need to book an appointment before visiting the LTO ${cityName} branch?`,
      answer: `Yes, the LTO now requires appointments for most transactions through the LTMS (Land Transportation Management System) Portal at https://portal.lto.gov.ph. You can create an account, select the ${branchName}, choose your transaction type, and pick an available date and time slot. While some branches may accommodate walk-in clients depending on capacity, having an appointment significantly reduces your waiting time and ensures you will be served during your visit.`,
    },
    {
      question: `How do I contact the LTO ${cityName} branch?`,
      answer: `You can reach the ${branchName} by calling ${phone} during office hours (Monday to Friday, 8:00 AM to 5:00 PM). For general LTO inquiries, you may also contact the LTO hotline at 1342 or visit the official LTO website at https://lto.gov.ph. For online transactions and appointment booking, use the LTMS Portal at https://portal.lto.gov.ph. You can also visit the branch in person at ${address} for walk-in assistance, subject to availability.`,
    },
  ];
}

export default async function BranchCityPage({ params }: PageProps) {
  const { city } = await params;
  const branch = getBranchBySlug(city);

  if (!branch) {
    notFound();
  }

  const faqs = generateBranchFaqs(branch.city, branch.name, branch.address, branch.phone);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Branches", href: "/branches" },
    { label: branch.city },
  ];

  const nearbyBranches = branches
    .filter(
      (b) => b.regionGroup === branch.regionGroup && b.slug !== branch.slug
    )
    .slice(0, 4);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Branches", url: "https://ltotrackeronline.ph/branches" },
          {
            name: branch.city,
            url: `https://ltotrackeronline.ph/branches/${branch.slug}`,
          },
        ]}
      />
      <LocalBusinessSchema
        name={branch.name}
        address={branch.address}
        city={branch.city}
        phone={branch.phone}
        lat={branch.latitude}
        lng={branch.longitude}
      />
      <FAQPageSchema faqs={faqs} />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Badge variant="secondary">{branch.regionGroup}</Badge>
            <Badge variant="outline">{branch.region}</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {branch.name}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Complete guide to the LTO branch in {branch.city}, including
            address, contact details, operating hours, and available services
          </p>
        </header>

        {/* Branch Details Cards */}
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{branch.address}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Phone:</span>{" "}
                {branch.phone}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <span className="font-medium text-foreground">Email:</span>{" "}
                {branch.email}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{branch.hours}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Closed on weekends and national holidays
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Region</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{branch.region}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {branch.regionGroup} Region Group
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Available Services
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {branch.services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-2 rounded-lg border border-border bg-card p-3"
              >
                <svg
                  className="h-4 w-4 shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Branch Location
          </h2>
          <div className="aspect-video w-full rounded-xl border border-border overflow-hidden">
            <iframe
              title={`Map of ${branch.name}`}
              src={`https://www.google.com/maps?q=${branch.latitude},${branch.longitude}&z=16&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {branch.address} &middot; <a href={`https://www.google.com/maps/search/?api=1&query=${branch.latitude},${branch.longitude}`} target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">Open in Google Maps</a>
          </p>
        </section>

        {/* SEO Content */}
        <section className="prose prose-zinc max-w-none mb-10">
          <h2>About the {branch.name}</h2>
          <p>
            Use <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}to find this branch. The {branch.name} is one of the key Land Transportation Office
            district offices serving the motorists and residents of{" "}
            {branch.city} and the surrounding areas in the {branch.region}. As a
            full-service LTO branch, it plays a vital role in processing
            driver&apos;s licenses, vehicle registrations, and other
            transportation-related documents for thousands of Filipinos every
            month.
          </p>
          <p>
            Located at {branch.address}, this branch is strategically positioned
            to serve the local community and is accessible through various modes
            of public and private transportation. The office follows the standard
            government operating hours of Monday to Friday, 8:00 AM to 5:00 PM,
            ensuring consistent service delivery to all clients throughout the
            work week.
          </p>
          <h3>
            Driver&apos;s License Services in {branch.city}
          </h3>
          <p>
            One of the most common reasons Filipinos visit the {branch.name} is
            for driver&apos;s license transactions. The branch handles new
            license applications, renewals, and student permits. If you are
            applying for a new driver&apos;s license in {branch.city}, you will
            need to first obtain a student permit, complete a driving course at
            an accredited driving school, and then return to the branch to take
            the practical and written examinations.
          </p>
          <p>
            For license renewals, the process has been streamlined through the
            LTMS Portal. You can book an appointment online, pay the renewal
            fees through authorized payment channels, and visit the{" "}
            {branch.name} on your scheduled date. Make sure to bring your
            current driver&apos;s license, a valid medical certificate from an
            LTO-accredited clinic, and your LTMS transaction reference number.
          </p>
          <h3>
            Vehicle Registration in {branch.city}
          </h3>
          <p>
            Vehicle owners in {branch.city} and the {branch.region} rely on the{" "}
            {branch.name} for vehicle registration services. Whether you are
            registering a brand-new vehicle, renewing an existing registration,
            or processing a change of ownership, the branch has dedicated
            windows to handle these transactions efficiently.
          </p>
          <p>
            The annual vehicle registration renewal requires several documents
            including your Certificate of Registration (CR), Official Receipt
            (OR), a valid Motor Vehicle Inspection Report (MVIR) from a Private
            Motor Vehicle Inspection Center (PMVIC), and proof of Compulsory
            Third Party Liability (CTPL) insurance. The LTO has implemented
            online payment options to reduce the time spent at the branch,
            allowing you to pay your registration fees through the LTMS Portal
            or authorized banks before your visit.
          </p>
          <h3>
            Tips for Visiting the LTO {branch.city} Branch
          </h3>
          <p>
            Planning your visit to the {branch.name} can save you significant
            time and hassle. Here are some practical tips based on common
            experiences at this branch:
          </p>
          <ul>
            <li>
              <strong>Arrive early.</strong> The branch opens at 8:00 AM, and
              queues can start forming before opening time, especially on
              Mondays and near month-end deadlines.
            </li>
            <li>
              <strong>Book online first.</strong> Use the <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS Portal</a> to set an appointment and pre-fill your
              application. This significantly reduces processing time.
            </li>
            <li>
              <strong>Bring complete documents.</strong> Incomplete documentary
              requirements are the most common reason for delayed or denied
              transactions. Check the LTO website for the specific requirements
              of your transaction type.
            </li>
            <li>
              <strong>Check for updates.</strong> The LTO occasionally changes
              requirements, fees, or procedures. Follow the official LTO social
              media pages or visit our website for the latest information.
            </li>
            <li>
              <strong>Be patient and courteous.</strong> LTO staff handle
              hundreds of transactions daily. Having your documents ready and
              being cooperative helps everyone.
            </li>
          </ul>
          <h3>
            Transportation and Accessibility
          </h3>
          <p>
            The {branch.name} at {branch.address} is reachable by various modes
            of transportation common in {branch.city}. Jeepneys, buses, UV
            Express vans, tricycles, and ride-hailing services like Grab can
            bring you to or near the branch location. If you are driving, some
            branches have limited parking, so consider using nearby commercial
            parking facilities or taking public transportation to avoid the
            hassle of finding a parking spot.
          </p>
          <p>
            For motorists with disabilities, the LTO provides priority lanes at
            most branches. Senior citizens, pregnant women, and persons with
            disabilities (PWDs) are given priority in queuing as mandated by
            Philippine law. If you require special assistance, do not hesitate
            to inform the branch personnel upon arrival.
          </p>
          <h3>Contact the {branch.name}</h3>
          <p>
            For inquiries about specific transactions, document requirements, or
            to verify operating schedules, you can contact the {branch.name}{" "}
            directly at {branch.phone} or via email at {branch.email}. The LTO
            also maintains a national hotline at 1342 for general inquiries. For
            the most up-to-date information, you can also check the official LTO
            website at <a href="https://www.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">lto.gov.ph</a> or the <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow">LTMS Portal</a>.
          </p>
        </section>

        {/* Nearby Branches */}
        {nearbyBranches.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight mb-4">
              Other LTO Branches in {branch.regionGroup}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {nearbyBranches.map((nb) => (
                <Link
                  key={nb.slug}
                  href={`/branches/${nb.slug}`}
                  className="group block rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
                >
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {nb.name}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {nb.address}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/branches"
                className="text-sm text-primary hover:underline"
              >
                View all LTO branches in the Philippines
              </Link>
            </div>
          </section>
        )}

        {/* Quick Links */}
        <section className="mb-10 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-primary hover:underline"
              >
                Track your LTO application status
              </Link>
            </li>
            <li>
              <Link href="/branches" className="text-primary hover:underline">
                Browse all LTO branches
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary hover:underline">
                About LTO Tracker
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQs */}
        <FAQSection
          faqs={faqs}
          title={`Frequently Asked Questions About LTO ${branch.city}`}
        />
      </main>
    </>
  );
}
