import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with LTO Tracker. Send us your questions, feedback, branch corrections, or partnership inquiries. We respond to all messages within 24-48 hours.",
  keywords: [
    "contact LTO Tracker",
    "LTO Tracker email",
    "LTO Tracker support",
    "LTO help Philippines",
    "LTO Tracker feedback",
  ],
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with LTO Tracker. Send us your questions, feedback, or partnership inquiries.",
    url: "https://ltotrackeronline.ph/contact",
    siteName: "LTO Tracker",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary",
    title: "Contact Us",
    description:
      "Get in touch with LTO Tracker. Send us your questions, feedback, or partnership inquiries.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/contact",
  },
};

export default function ContactPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Contact" },
  ];

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Contact", url: "https://ltotrackeronline.ph/contact" },
        ]}
      />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />

        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question, feedback, or correction about <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>? We would love to hear from
            you.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  For general inquiries and support:
                </p>
                <a
                  href="mailto:support@ltotrackeronline.ph"
                  className="mt-1 block text-sm font-medium text-primary hover:underline"
                >
                  support@ltotrackeronline.ph
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  For partnership and advertising:
                </p>
                <a
                  href="mailto:partnerships@ltotrackeronline.ph"
                  className="mt-1 block text-sm font-medium text-primary hover:underline"
                >
                  partnerships@ltotrackeronline.ph
                </a>
                <p className="mt-3 text-sm text-muted-foreground">
                  For press and media inquiries:
                </p>
                <a
                  href="mailto:media@ltotrackeronline.ph"
                  className="mt-1 block text-sm font-medium text-primary hover:underline"
                >
                  media@ltotrackeronline.ph
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://facebook.com/ltostatusph"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ltostatusph"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://youtube.com/@ltostatusph"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="text-primary hover:underline flex items-center gap-2"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                        <path
                          d="M9.545 15.568V8.432L15.818 12z"
                          fill="white"
                        />
                      </svg>
                      YouTube
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Response Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  All times are in Philippine Standard Time (PST / UTC+8). We
                  aim to respond to all messages within 24-48 hours during
                  business days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Note</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  LTO Tracker is an independent information platform and is{" "}
                  <strong>not affiliated</strong> with the Land Transportation
                  Office or any Philippine government agency. For official LTO
                  transactions, please contact the LTO directly at their
                  hotline <strong>1342</strong> or visit{" "}
                  <a
                    href="https://lto.gov.ph"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-primary hover:underline"
                  >
                    lto.gov.ph
                  </a>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Content */}
        <section className="mt-12 prose prose-zinc max-w-none">
          <h2>How Can We Help?</h2>
          <p>
            We welcome all types of inquiries and feedback. Here are some common
            reasons people reach out to us:
          </p>
          <ul>
            <li>
              <strong>Branch Information Updates:</strong> If you have visited an
              LTO branch and noticed that the address, phone number, or services
              listed on our directory are incorrect or outdated, please let us
              know so we can update our records.
            </li>
            <li>
              <strong>Content Suggestions:</strong> If there is a topic or guide
              you would like us to cover, we are always looking for new content
              ideas to help Filipino motorists.
            </li>
            <li>
              <strong>Technical Issues:</strong> If you experience any problems
              with our website, such as broken links, display errors, or
              accessibility issues, please report them so our technical team can
              address them promptly.
            </li>
            <li>
              <strong>Partnership Opportunities:</strong> If you represent a
              driving school, insurance provider, PMVIC, or other business
              related to LTO services, we are open to collaboration
              opportunities that benefit Filipino motorists.
            </li>
            <li>
              <strong>General Questions:</strong> If you have a question about
              LTO procedures, requirements, or fees that is not answered on our
              website, feel free to ask. While we cannot process official LTO
              transactions, we can help point you in the right direction.
            </li>
          </ul>
        </section>

        {/* Related Links */}
        <section className="mt-10 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-xl font-bold tracking-tight mb-3">
            Related Pages
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-primary hover:underline">
                About LTO Tracker
              </Link>
            </li>
            <li>
              <Link href="/branches" className="text-primary hover:underline">
                LTO Branch Directory
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
