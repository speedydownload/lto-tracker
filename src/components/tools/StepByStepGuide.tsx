"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface StepByStepGuideProps {
  type: "plate" | "mv" | "license";
  userInput: string;
}

interface Step {
  title: string;
  description: string;
  image?: string;
  alt?: string;
}

const plateSteps: Step[] = [
  {
    title: "Visit the Official LTO LTMS Portal",
    description:
      "Go to portal.lto.gov.ph — the official Land Transportation Management System. This is the only authorized government portal for checking your LTO plate status.",
    image: "/img/steps/ltms-step-1-visit-portal.webp",
    alt: "Screenshot of the LTO LTMS Portal homepage at portal.lto.gov.ph",
  },
  {
    title: "Create an Account or Log In",
    description:
      "If you're a new user, register with your valid email address and create a password. If you already have an account, enter your credentials to log in.",
    image: "/img/steps/ltms-step-2-login.webp",
    alt: "LTO LTMS Portal login and registration page",
  },
  {
    title: 'Navigate to "LTO Tracker" on the Dashboard',
    description:
      'Once logged in, find the "LTO Tracker" or "Plate Tracker" option on your dashboard. This section lets you check the current status of your plate or MV file.',
  },
  {
    title: "Enter Your Plate Number or MV File Number",
    description:
      "Type your plate number (e.g., ABC 1234) or MV file number into the search field and click Search. The system will look up your record in the LTO database.",
  },
  {
    title: "View Your Plate/Vehicle Status",
    description:
      "The results page will show your plate status (e.g., For Release, In Transit, Processing), the designated branch for pickup, and the estimated release date if available.",
  },
];

const licenseSteps: Step[] = [
  {
    title: "Visit the Official LTO LTMS Portal",
    description:
      "Go to portal.lto.gov.ph — the official Land Transportation Management System. This is the authorized government portal for checking your driver's license status.",
    image: "/img/steps/ltms-step-1-visit-portal.webp",
    alt: "Screenshot of the LTO LTMS Portal homepage at portal.lto.gov.ph",
  },
  {
    title: "Create an Account or Log In",
    description:
      "Register with your valid email address if you're a new user, or enter your existing credentials to log in to the LTMS portal.",
    image: "/img/steps/ltms-step-2-login.webp",
    alt: "LTO LTMS Portal login and registration page",
  },
  {
    title: "Go to \"Driver's License\" Section",
    description:
      "On your dashboard, navigate to the \"Driver's License\" section. This area allows you to view your license details, renewal status, and download your electronic driver's license (eDL).",
  },
  {
    title: "Check Your License Status",
    description:
      "Enter your driver's license number in the search field. The system will display your current license status, expiration date, and any restrictions or conditions.",
  },
  {
    title: "View and Download Your eDL",
    description:
      "If your license is active and valid, you can view your full license details and download your electronic driver's license (eDL) directly from the portal.",
  },
];

function StepImage({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-48 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400">
        <span>Screenshot coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={600}
      height={340}
      className="w-full rounded-lg border border-gray-200 shadow-sm"
      onError={() => setHasError(true)}
    />
  );
}

const relatedTools = [
  { label: "LTO Plate Tracker", href: "/lto-plate-tracker" },
  { label: "MV File Checker", href: "/mv-file-checker" },
  { label: "LTO License Tracker", href: "/lto-license-tracker" },
  { label: "How to Check LTO Plate", href: "/guides/how-to-check-lto-plate" },
];

export default function StepByStepGuide({ type, userInput }: StepByStepGuideProps) {
  const steps = type === "license" ? licenseSteps : plateSteps;
  const heading =
    type === "license"
      ? "How to Check Your LTO License Status"
      : type === "mv"
        ? "How to Check Your MV File Status"
        : "How to Check Your LTO Plate Status";

  const intro =
    type === "license"
      ? `We couldn't find license data for "${userInput}" in our system. Follow these steps to check your driver's license status on the official LTO LTMS Portal:`
      : type === "mv"
        ? `We couldn't find MV file data for "${userInput}" in our system. Follow these steps to check on the official LTO LTMS Portal:`
        : `We couldn't find plate data for "${userInput}" in our system. Follow these steps to check on the official LTO LTMS Portal:`;

  return (
    <div className="mx-auto mt-6 max-w-2xl rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="mb-2 text-xl font-bold text-gray-900">{heading}</h3>
      <p className="mb-6 text-sm text-gray-600">{intro}</p>

      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={index}>
            <h4 className="text-base font-semibold text-gray-900">
              <span className="mr-2.5 inline-flex h-6 w-6 translate-y-[-1px] items-center justify-center rounded-full bg-blue-600 align-middle text-xs font-bold text-white">
                {index + 1}
              </span>
              <span className="align-middle">{step.title}</span>
            </h4>
            <div className="mt-1 pl-[34px]">
              <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
              {step.image && step.alt && (
                <div className="mt-3">
                  <StepImage src={step.image} alt={step.alt} />
                </div>
              )}
            </div>
            {index === 0 && (
              <div className="mt-5 flex justify-center">
                <a
                  href="https://portal.lto.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
                >
                  Open Official LTMS Portal
                  <ExternalLink className="size-4" />
                </a>
              </div>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-8 text-center">
        <a
          href="https://portal.lto.gov.ph"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
        >
          Go to Official LTMS Portal
          <ExternalLink className="size-4" />
        </a>
        <p className="mt-2 text-xs text-gray-400">
          You will be redirected to portal.lto.gov.ph — the official LTO website.
        </p>
      </div>

      <div className="mt-8 border-t border-gray-100 pt-6">
        <h4 className="mb-3 text-sm font-semibold text-gray-700">Related Tools</h4>
        <div className="flex flex-wrap gap-2">
          {relatedTools
            .filter((tool) => {
              if (type === "plate" && tool.href === "/lto-plate-tracker") return false;
              if (type === "mv" && tool.href === "/mv-file-checker") return false;
              if (type === "license" && tool.href === "/lto-license-tracker") return false;
              return true;
            })
            .map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                {tool.label}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
