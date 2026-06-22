import { Tool } from "@/types";
import { CURRENT_YEAR_STR } from "@/lib/constants";

export const tools: Tool[] = [
  {
    slug: "lto-tracker",
    title: "LTO Tracker",
    description: "Track your LTO plate number, driver's license, and MV file status online. Free real-time tracking tool for Filipino motorists.",
    keywords: ["LTO Tracker", "LTO status check", "LTO plate status", "check LTO online", "LTO Philippines tracker"],
    features: [
      "Track plate numbers in real-time",
      "Check driver's license status",
      "Monitor MV file processing",
      "View estimated release dates",
      "Find pickup branch information",
      "Free and unlimited tracking"
    ],
    longDescription: "The LTO Tracker is your all-in-one tool for monitoring LTO transactions in the Philippines. Whether you are tracking a plate number, checking a license renewal, or verifying an MV file status, our comprehensive tracker provides real-time updates from the LTO system."
  },
  {
    slug: "lto-plate-tracker",
    title: "LTO Plate Number Tracker",
    description: "Check your LTO plate number status online. Track plate production, delivery, and release at your designated LTO branch.",
    keywords: ["LTO plate tracker", "plate number status", "LTO plate check", "check plate number Philippines", "LTO plate release"],
    features: [
      "Track new and replacement plates",
      "Check production status",
      "View delivery updates",
      "See release availability",
      "Get branch pickup info",
      "Support for all plate formats"
    ],
    longDescription: "The LTO Plate Number Tracker helps Filipino vehicle owners check the production and delivery status of their license plates. With millions of plates in the production pipeline, our tracker gives you instant access to your plate's current status."
  },
  {
    slug: "lto-license-tracker",
    title: "LTO License Tracker",
    description: "Check your LTO driver's license status, validity, and renewal progress online. Verify license restrictions and expiry date.",
    keywords: ["LTO license tracker", "driver's license status", "LTO license check", "license validity Philippines", "DL status check"],
    features: [
      "Verify license validity",
      "Check expiry date",
      "View restriction codes",
      "Track renewal applications",
      "Monitor license status",
      "Check for violations"
    ],
    longDescription: "The LTO License Tracker allows you to verify your driver's license status, check expiration dates, and monitor renewal applications. Stay informed about your license validity and any changes to your driving privileges."
  },
  {
    slug: "mv-file-checker",
    title: "MV File Number Checker",
    description: "Check your motor vehicle file status at LTO. Verify registration, track transactions, and monitor MV file processing.",
    keywords: ["MV file checker", "MV file number", "motor vehicle file", "LTO MV file status", "vehicle file check"],
    features: [
      "Check MV file status",
      "Track registration processing",
      "Verify vehicle records",
      "Monitor transfer of ownership",
      "Check for encumbrances",
      "View transaction history"
    ],
    longDescription: "The MV File Number Checker lets you verify the status of your motor vehicle file at the LTO. Check if your registration is being processed, monitor transfer of ownership transactions, and verify your vehicle's records."
  },
  {
    slug: "coding-checker",
    title: "Number Coding Scheme Checker",
    description: "Check if your vehicle is subject to MMDA number coding today. UVVRP coding schedule, hours, and exemptions for Metro Manila.",
    keywords: ["number coding checker", "UVVRP today", "coding scheme", "MMDA coding", "number coding schedule Manila"],
    features: [
      "Check today's coding status",
      "View weekly schedule",
      "Coding window hours",
      "Exemptions list",
      "Metro Manila coverage",
      "Real-time day detection"
    ],
    longDescription: "The Number Coding Scheme Checker helps Metro Manila drivers know if their vehicle is subject to the MMDA UVVRP (Unified Vehicular Volume Reduction Program) today based on their plate number's last digit."
  },
  {
    slug: "renewal-calculator",
    title: "LTO Renewal Fee Calculator",
    description: "Calculate your LTO license and vehicle registration renewal fees. Includes late penalties, medical certificate, and total costs.",
    keywords: ["LTO renewal calculator", "license renewal fee", "registration fee calculator", `LTO fees ${CURRENT_YEAR_STR}`, "renewal cost Philippines"],
    features: [
      "Calculate license renewal fees",
      "Compute registration costs",
      "Include late penalties",
      "Medical certificate fees",
      "Drug test costs",
      "Complete fee breakdown"
    ],
    longDescription: "The LTO Renewal Fee Calculator helps you compute the total cost of renewing your driver's license or vehicle registration, including all applicable fees, late penalties, and additional requirements."
  },
  {
    slug: "penalty-calculator",
    title: "LTO Penalty Calculator",
    description: "Calculate traffic violation fines in the Philippines. Find penalties for common LTO violations based on the latest fee schedule.",
    keywords: ["LTO penalty calculator", "traffic violation fines", "LTO fines Philippines", "traffic penalty amount", "violation fee calculator"],
    features: [
      "Calculate individual fines",
      "Multiple violation support",
      "Updated fee schedule",
      "RA 4136 violations",
      "MMDA violations",
      "Total penalty computation"
    ],
    longDescription: "The LTO Penalty Calculator helps Filipino motorists calculate the fines for traffic violations based on the latest LTO and MMDA fee schedules. Select your violations to see individual and total penalty amounts."
  }
];
