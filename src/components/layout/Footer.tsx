import Link from "next/link";
import Image from "next/image";
import { CURRENT_YEAR } from "@/lib/constants";

const toolLinks = [
  { label: "LTO Tracker", href: "/" },
  { label: "Plate Tracker", href: "/lto-plate-tracker" },
  { label: "License Tracker", href: "/lto-license-tracker" },
  { label: "MV File Checker", href: "/mv-file-checker" },
  { label: "Coding Checker", href: "/coding-checker" },
  { label: "Renewal Calculator", href: "/renewal-calculator" },
  { label: "Penalty Calculator", href: "/penalty-calculator" },
];

const guideLinks = [
  { label: "How to Check LTO Plate", href: "/guides/how-to-check-lto-plate" },
  { label: "LTO Renewal Requirements", href: "/guides/lto-renewal-requirements" },
  { label: "LTO Student Permit", href: "/guides/lto-student-permit" },
  { label: "LTO License Renewal", href: "/guides/lto-license-renewal" },
  { label: "Transfer of Ownership", href: "/guides/lto-transfer-ownership" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Data Sources", href: "/data-sources" },
  { label: "Editorial Policy", href: "/editorial-policy" },
  { label: "Our Authors", href: "/authors" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#1e3a5f] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/LTO-Logo.webp" alt="LTO Tracker Logo" width={36} height={36} className="h-9 w-auto" />
            <span className="text-lg font-bold text-white">LTO Tracker</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-400">
            Your trusted resource for tracking LTO applications, checking license status, and accessing Philippine Land Transportation Office services and information.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="https://facebook.com/ltotrackeronline" target="_blank" rel="noopener noreferrer nofollow" className="text-gray-400 transition-colors hover:text-white">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://x.com/ltotrackeronline" target="_blank" rel="noopener noreferrer nofollow" className="text-gray-400 transition-colors hover:text-white">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://instagram.com/ltotrackeronline" target="_blank" rel="noopener noreferrer nofollow" className="text-gray-400 transition-colors hover:text-white">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://youtube.com/@ltotrackeronline" target="_blank" rel="noopener noreferrer nofollow" className="text-gray-400 transition-colors hover:text-white">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Tools</h3>
            <ul className="space-y-2.5">
              {toolLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Guides</h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">{link.label}</Link></li>
              ))}
              <li><Link href="/guides" className="text-sm font-medium text-gray-400 transition-colors hover:text-white">View All Guides &rarr;</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">{link.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600/50">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 text-center text-xs text-gray-500 md:flex-row md:justify-between md:text-left">
            <p>&copy; {CURRENT_YEAR} LTO Tracker. All rights reserved.</p>
            <p className="max-w-2xl">
              Disclaimer: LTO Tracker is an independent informational website and is not affiliated with, endorsed by, or connected to the Land Transportation Office (LTO) or any Philippine government agency.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
