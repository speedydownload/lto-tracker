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

const guide = getGuideBySlug("lto-student-permit")!;

export const metadata: Metadata = {
  title:
    `How to Get an LTO Student Permit ${CURRENT_YEAR_STR} — Requirements & Process`,
  description:
    "Complete guide to getting your LTO student permit in the Philippines. Step-by-step process, requirements, fees, medical exam, written test, online application via LTMS Portal, and tips for first-time applicants.",
  keywords: [
    "LTO student permit requirements",
    "how to get student permit LTO",
    `LTO student permit ${CURRENT_YEAR_STR}`,
    "student permit requirements Philippines",
    "LTO student permit application",
    "student permit fees LTO",
    "LTO student permit online",
    "LTMS student permit",
    "LTO student permit process",
    "first time driver Philippines",
  ],
  openGraph: {
    title: `How to Get an LTO Student Permit ${CURRENT_YEAR_STR} — Requirements & Process`,
    description:
      "Complete guide to getting your LTO student permit in the Philippines. All requirements, fees, process, and tips for first-time applicants.",
    url: "https://ltotrackeronline.ph/guides/lto-student-permit",
    siteName: "LTO Tracker",
    type: "article",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: `How to Get an LTO Student Permit ${CURRENT_YEAR_STR} — Requirements & Process`,
    description:
      "Complete guide to getting your LTO student permit in the Philippines. All requirements, fees, and step-by-step process.",
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph/guides/lto-student-permit",
  },
};

const headings = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "who-can-apply", text: "Who Can Apply for a Student Permit?", level: 2 },
  { id: "requirements", text: "Complete Requirements", level: 2 },
  { id: "medical-exam", text: "Medical Examination", level: 2 },
  { id: "theoretical-driving-course", text: "Theoretical Driving Course (TDC)", level: 2 },
  { id: "written-exam", text: "Written Examination", level: 2 },
  { id: "application-process", text: "Step-by-Step Application Process", level: 2 },
  { id: "online-application", text: "Online Application via LTMS Portal", level: 3 },
  { id: "walk-in-application", text: "Walk-in Application at LTO Branch", level: 3 },
  { id: "fees", text: "Student Permit Fees", level: 2 },
  { id: "validity", text: "Validity and Restrictions", level: 2 },
  { id: "after-student-permit", text: "After Getting Your Student Permit", level: 2 },
  { id: "common-mistakes", text: "Common Mistakes to Avoid", level: 2 },
  { id: "tips", text: "Tips for First-Time Applicants", level: 2 },
];

const faqs = [
  {
    question: "How old do you have to be to get an LTO student permit?",
    answer:
      "You must be at least 16 years old to apply for an LTO student permit in the Philippines. If you are 16 or 17 years old, you must have written consent from a parent or legal guardian. Applicants 18 years old and above can apply on their own without parental consent. There is no maximum age limit for student permit applications.",
  },
  {
    question: `How much does an LTO student permit cost in ${CURRENT_YEAR_STR}?`,
    answer: `The total cost for an LTO student permit in ${CURRENT_YEAR_STR} is approximately PHP 535.63, which includes the application fee (PHP 100), computer fee (PHP 67.36), medical certificate fee (around PHP 200-300 at LTO-accredited clinics), and the license card fee. Additional costs include the Theoretical Driving Course (TDC) from accredited driving schools, which ranges from PHP 1,500 to PHP 3,000 depending on the school.`,
  },
  {
    question: "How long is an LTO student permit valid?",
    answer:
      "An LTO student permit is valid for one (1) year from the date of issuance. You cannot drive independently with a student permit. You must always be accompanied by a licensed driver who holds a valid professional or non-professional driver's license with at least one year of driving experience. The student permit must be converted to a non-professional driver's license within its validity period by passing the practical driving test.",
  },
  {
    question: "What happens if my student permit expires before I get my license?",
    answer:
      "If your student permit expires before you obtain your driver's license, you will need to apply for a new student permit and go through the entire application process again, including the medical exam, TDC, and written test. There is no renewal option for student permits. To avoid this, make sure to schedule your practical driving test and license application before your student permit expires.",
  },
  {
    question: "Do I need to attend driving school before getting a student permit?",
    answer:
      "Yes, you are required to complete a Theoretical Driving Course (TDC) from an LTO-accredited driving school before applying for a student permit. The TDC covers traffic rules and regulations, road signs, safe driving practices, and basic vehicle maintenance. After getting your student permit, you will need to complete a Practical Driving Course (PDC) before you can apply for a non-professional driver's license.",
  },
  {
    question: "Can I apply for an LTO student permit online?",
    answer:
      "Yes, you can start the student permit application process online through the LTMS Portal at portal.lto.gov.ph. You can create an account, fill out the application form, and schedule an appointment at your preferred LTO branch. However, you still need to visit the LTO branch in person for the medical exam, biometrics capture (photo and fingerprint), and to submit original documents.",
  },
  {
    question: "What type of vehicles can I drive with a student permit?",
    answer:
      "With a student permit, you can operate vehicles that correspond to the restriction codes indicated on your permit. For most student permit holders, this covers motorcycles (restriction code 1) and light vehicles like cars and small utility vehicles (restriction codes 2 and above). You cannot drive heavy commercial vehicles or for-hire vehicles with a student permit. You must always have a licensed driver beside you when practicing.",
  },
  {
    question: "What documents do I need for an LTO student permit application?",
    answer:
      "You need the following documents: a valid government-issued ID (or PSA birth certificate if you do not have a government ID), a Theoretical Driving Course (TDC) certificate from an accredited driving school, a medical certificate from an LTO-accredited clinic, two pieces of documentary ID, and if you are a minor (16-17 years old), a notarized parental consent form. Foreign nationals need additional documents including their passport and valid visa.",
  },
];

export default function LtoStudentPermit() {
  return (
    <div className="container mx-auto px-4 max-w-6xl py-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "LTO Student Permit" },
        ]}
      />

      <ArticleSchema
        headline={`How to Get an LTO Student Permit ${CURRENT_YEAR_STR} — Requirements & Process`}
        description="Complete guide to getting your LTO student permit in the Philippines. Step-by-step process, requirements, fees, and tips for first-time applicants."
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author="Patricia Mae Santos"
        url="https://ltotrackeronline.ph/guides/lto-student-permit"
      />
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://ltotrackeronline.ph" },
          { name: "Guides", url: "https://ltotrackeronline.ph/guides" },
          {
            name: "LTO Student Permit",
            url: "https://ltotrackeronline.ph/guides/lto-student-permit",
          },
        ]}
      />
      <HowToSchema
        name="How to Get an LTO Student Permit"
        description="Step-by-step guide to applying for your first LTO student permit in the Philippines."
        steps={[
          {
            name: "Complete the Theoretical Driving Course (TDC)",
            text: "Enroll in and complete the 15-hour TDC at an LTO-accredited driving school. Obtain your TDC certificate.",
          },
          {
            name: "Get a Medical Certificate",
            text: "Visit an LTO-accredited medical clinic for a physical examination. Obtain the medical certificate with the standard LTO format.",
          },
          {
            name: "Create an LTMS Account and Apply Online",
            text: "Visit portal.lto.gov.ph, create an account, and fill out the student permit application form. Schedule an appointment at your preferred LTO branch.",
          },
          {
            name: "Visit the LTO Branch",
            text: "Go to your chosen LTO branch on your scheduled appointment date. Bring all required documents including your TDC certificate, medical certificate, valid ID, and birth certificate.",
          },
          {
            name: "Take the Written Exam",
            text: "Take and pass the LTO written examination covering traffic rules, road signs, and safe driving knowledge.",
          },
          {
            name: "Submit Biometrics and Pay Fees",
            text: "Have your photo and fingerprints taken, pay the student permit fees, and receive your student permit.",
          },
        ]}
      />

      <div className="flex gap-8">
        <article className="flex-1 min-w-0 prose prose-lg max-w-none">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How to Get an LTO Student Permit {CURRENT_YEAR_STR} — Requirements & Process
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 flex-wrap">
            <span>By <Link href="/authors/patricia-mae-santos" className="text-[#1e40af] hover:underline">Patricia Mae Santos</Link></span>
            <span>Updated: {formatDate(guide.dateModified)}</span>
            <span>16 min read</span>
          </div>

          <section>
            <h2 id="overview" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Use <Link href="/" className="text-[#1e40af] font-medium hover:underline">LTO Tracker</Link>{" "}as your guide for getting your LTO student permit, the first official step toward becoming a licensed driver in the Philippines. The student permit, formally known as the Student&apos;s Permit (SP), is issued by the Land Transportation Office and authorizes you to practice driving under the supervision of a licensed driver. It is a prerequisite for applying for a non-professional or professional driver&apos;s license.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The student permit application process has been modernized in recent years with the implementation of the LTMS Portal for online scheduling and the requirement for applicants to complete a Theoretical Driving Course (TDC) at an accredited driving school before applying. These changes are part of the LTO&apos;s efforts to ensure that every new driver enters the road with proper knowledge of traffic laws and safe driving practices.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This comprehensive guide walks you through every step of the student permit application process, from preparing your documents and completing the TDC to passing the written exam and receiving your permit. Whether you are a teenager eager to learn to drive, a working professional who has never had a license, or a parent helping your child through the process, this guide covers everything you need to know.
            </p>
          </section>

          <section>
            <h2 id="who-can-apply" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Who Can Apply for a Student Permit?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The student permit application is open to Filipino citizens and foreign nationals who meet the following basic qualifications:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>
                <strong>Minimum age of 16 years old.</strong> Under Republic Act No. 4136, a person must be at least 16 years old to operate a motor vehicle in the Philippines. Applicants who are 16 to 17 years old must present a notarized parental or guardian consent form along with their application.
              </li>
              <li>
                <strong>Physically and mentally fit to drive.</strong> Applicants must pass a medical examination that checks visual acuity, hearing, physical mobility, and overall fitness to operate a motor vehicle. Certain medical conditions may result in restrictions on the permit rather than outright denial.
              </li>
              <li>
                <strong>No existing driver&apos;s license.</strong> The student permit is for individuals who do not currently hold a valid Philippine driver&apos;s license. If you already have an expired license, you may need to go through the renewal or reissuance process instead of applying for a student permit.
              </li>
              <li>
                <strong>Completion of the Theoretical Driving Course.</strong> As of the current regulations, all student permit applicants must complete a 15-hour Theoretical Driving Course at an LTO-accredited driving school before applying.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Foreign nationals residing in the Philippines can also apply for a student permit. In addition to the standard requirements, they need to present their passport with a valid visa, Alien Certificate of Registration (ACR), and other immigration documents as required by the LTO.
            </p>
          </section>

          <section>
            <h2 id="requirements" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Complete Requirements
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Prepare the following documents before your LTO visit. Having all requirements complete will prevent delays and the frustration of being turned away for missing documents.
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>PSA-issued Birth Certificate</strong> — The original or certified true copy of your birth certificate issued by the Philippine Statistics Authority (PSA). This serves as your primary proof of identity and age. If your birth certificate has not been registered with the PSA, you must have it registered first through your local civil registrar.
              </li>
              <li>
                <strong>Theoretical Driving Course (TDC) Certificate</strong> — A certificate of completion from an LTO-accredited driving school confirming that you have completed the required 15-hour theoretical driving course. The certificate must include the driving school&apos;s LTO accreditation number.
              </li>
              <li>
                <strong>Medical Certificate</strong> — A medical certificate from an LTO-accredited medical clinic or physician. The medical exam includes tests for visual acuity, color blindness, hearing, and general physical fitness. The certificate must be in the format prescribed by the LTO.
              </li>
              <li>
                <strong>At least one valid government-issued ID</strong> — Acceptable IDs include a passport, UMID, PhilID (Philippine Identification Card), voter&apos;s ID, postal ID, PRC ID, or school ID (for students). The ID must have your photo and signature.
              </li>
              <li>
                <strong>Two documentary stamps or IDs</strong> — Some branches require two forms of identification. If you only have one government ID, you may supplement it with your TIN card, barangay certificate, or company ID.
              </li>
              <li>
                <strong>Parental consent (for minors)</strong> — If you are 16 or 17 years old, you must present a notarized consent form signed by your parent or legal guardian. The parent or guardian must also provide a photocopy of their valid ID.
              </li>
              <li>
                <strong>Accomplished Application Form</strong> — The application form can be downloaded from the LTO website, obtained at the LTO branch, or filled out digitally through the LTMS Portal. The form requires personal information, address, and contact details.
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Additional requirements for foreign nationals:</strong> Valid passport with current visa, Alien Certificate of Registration (ACR-I Card), immigration clearance certificate, and proof of address in the Philippines (such as a barangay certificate or lease agreement).
            </p>
          </section>

          <section>
            <h2 id="medical-exam" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Medical Examination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The medical examination is a mandatory requirement for all student permit applicants. It is designed to ensure that you are physically and mentally capable of safely operating a motor vehicle. The exam must be conducted by an LTO-accredited medical clinic or physician.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many LTO district offices have accredited medical clinics located within or adjacent to the LTO building, making it convenient to complete the medical exam on the same day as your student permit application. You can also visit any LTO-accredited clinic separately before your LTO appointment.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The medical examination typically includes the following tests:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Visual acuity test:</strong> Measures your ability to see clearly at various distances. The minimum requirement is 20/40 vision in both eyes (with or without corrective lenses). If you wear glasses or contact lenses, you must wear them during the test, and a &quot;with corrective lenses&quot; restriction will be noted on your permit.</li>
              <li><strong>Color vision test:</strong> Checks your ability to distinguish between red, green, and yellow, which are the standard traffic signal colors. Color blindness in certain spectrums may result in a restriction on your permit.</li>
              <li><strong>Hearing test:</strong> Measures your ability to hear sounds at normal conversation levels and detect auditory signals such as horns and sirens.</li>
              <li><strong>Physical assessment:</strong> A general check of your physical condition, including limb mobility, coordination, and the absence of conditions that could impair your ability to control a vehicle.</li>
              <li><strong>Drug testing:</strong> Some clinics include a basic drug screening as part of the medical examination, as required by LTO regulations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The medical exam fee ranges from PHP 200 to PHP 500 depending on the clinic and the tests included. The certificate is valid for a limited period, so schedule your medical exam close to your planned LTO visit to ensure the certificate has not expired when you apply.
            </p>
          </section>

          <section>
            <h2 id="theoretical-driving-course" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Theoretical Driving Course (TDC)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Theoretical Driving Course (TDC) is a mandatory pre-licensing education requirement for all student permit applicants. The TDC must be completed at an LTO-accredited driving school and covers a minimum of 15 hours of instruction on the following topics:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Philippine traffic laws and regulations:</strong> Republic Act No. 4136, traffic signs, road markings, and traffic signal meanings</li>
              <li><strong>Road safety and defensive driving:</strong> Hazard awareness, proper following distances, and accident prevention techniques</li>
              <li><strong>Vehicle operations basics:</strong> Understanding vehicle controls, dashboard indicators, and basic vehicle maintenance</li>
              <li><strong>Driving ethics and road courtesy:</strong> Proper behavior on the road, sharing the road with pedestrians and cyclists, and dealing with road rage</li>
              <li><strong>Environmental responsibilities:</strong> Emissions awareness, fuel-efficient driving practices, and the environmental impact of motor vehicles</li>
              <li><strong>First aid fundamentals:</strong> Basic first aid procedures for road accident situations</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The TDC fee varies by driving school, typically ranging from PHP 1,500 to PHP 3,500. Some driving schools offer the TDC in a classroom setting over two to three days, while others provide online or blended learning options. When choosing a driving school, make sure it is accredited by the LTO and that the TDC certificate it issues is recognized by the LTO system.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon completing the TDC, you will receive a certificate of completion that includes a unique reference number. This reference number is entered into the LTMS system by the driving school and will be verified by the LTO during your student permit application. Keep your TDC certificate safe, as you will need to present the original during your LTO visit.
            </p>
          </section>

          <section>
            <h2 id="written-exam" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Written Examination
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO written examination tests your knowledge of Philippine traffic laws, road signs, and safe driving practices. It is a computerized, multiple-choice exam administered at the LTO branch during your student permit application. The exam covers the topics taught in the Theoretical Driving Course.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The written exam consists of approximately 40 questions, and you need to answer at least 30 correctly (75% passing score) to pass. The exam is available in English and Filipino, and you will be given approximately 30 to 45 minutes to complete it. Questions cover the following areas:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li>Traffic signs (regulatory, warning, and informational signs)</li>
              <li>Road markings and their meanings</li>
              <li>Right-of-way rules at intersections</li>
              <li>Speed limits for different road types and zones</li>
              <li>Safe following distances</li>
              <li>DUI (Driving Under the Influence) laws and penalties</li>
              <li>Proper use of vehicle lights and signals</li>
              <li>Pedestrian right-of-way and crosswalk rules</li>
              <li>Emergency procedures and accident protocols</li>
              <li>Vehicle registration and license laws</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you fail the written exam, you are typically allowed to retake it on the same day or on a subsequent visit, depending on the branch&apos;s policy. Some branches charge a small retake fee. Studying the TDC materials thoroughly and reviewing common road signs beforehand will significantly increase your chances of passing on the first attempt.
            </p>
          </section>

          <section>
            <h2 id="application-process" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Step-by-Step Application Process
            </h2>

            <h3 id="online-application" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Online Application via LTMS Portal
            </h3>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Create an LTMS account.</strong> Visit{" "}
                <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">portal.lto.gov.ph</a>{" "}
                and click on the registration link. Fill out the required fields including your full name, email address, mobile number, and date of birth. Verify your email and mobile number through the OTP codes sent to you.
              </li>
              <li>
                <strong>Log in and select Student Permit Application.</strong> After creating your account, log in and navigate to the Driver&apos;s License section. Select &quot;Student Permit Application&quot; from the available options.
              </li>
              <li>
                <strong>Fill out the application form.</strong> Complete the digital application form with your personal information, address, and other required details. Enter your TDC certificate reference number when prompted.
              </li>
              <li>
                <strong>Schedule an appointment.</strong> Choose your preferred LTO branch and select an available appointment date and time. The system will generate an appointment confirmation that you should print or save on your phone.
              </li>
              <li>
                <strong>Visit the LTO branch on your scheduled date.</strong> Bring all your original documents, your appointment confirmation, and be prepared for the medical exam (if not yet completed), written exam, and biometrics capture.
              </li>
            </ol>

            <h3 id="walk-in-application" className="text-xl font-bold text-gray-900 mt-8 mb-3">
              Walk-in Application at LTO Branch
            </h3>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Arrive early at the LTO branch.</strong> Walk-in applicants are served on a first-come, first-served basis. Arriving before 8:00 AM increases your chances of being accommodated. Note that some branches have limited walk-in slots and may prioritize applicants with online appointments.
              </li>
              <li>
                <strong>Get the medical exam.</strong> If you have not yet completed your medical exam, visit the accredited clinic at or near the LTO branch. The medical exam takes approximately 15 to 30 minutes.
              </li>
              <li>
                <strong>Submit documents at the evaluation window.</strong> Present all your documents (birth certificate, TDC certificate, medical certificate, valid ID) to the evaluator. They will review your documents and verify your TDC completion in the system.
              </li>
              <li>
                <strong>Take the written exam.</strong> After document evaluation, you will be directed to the examination room. The computerized exam takes approximately 30 to 45 minutes. Results are available immediately after completion.
              </li>
              <li>
                <strong>Biometrics capture.</strong> If you pass the written exam, proceed to the biometrics station for your photo and fingerprint capture. These will appear on your student permit card.
              </li>
              <li>
                <strong>Pay the fees.</strong> Go to the cashier window and pay the total student permit fees. The cashier will issue an official receipt for your payment.
              </li>
              <li>
                <strong>Receive your student permit.</strong> After payment, wait for your student permit to be printed and released. At most branches, this takes 15 to 30 minutes. Your student permit card will include your photo, personal details, permit number, validity dates, and any restrictions.
              </li>
            </ol>
          </section>

          <section>
            <h2 id="fees" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Student Permit Fees
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The fees for an LTO student permit include several components. Here is a breakdown of the typical costs:
            </p>
            <div className="overflow-x-auto mb-4 not-prose">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Fee Component</th>
                    <th className="border border-gray-200 px-4 py-2 text-left font-semibold text-gray-900">Amount (PHP)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Application / Permit Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 100.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Computer Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 67.36</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">License Card Fee</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 268.27</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">Medical Certificate (at accredited clinic)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-700">PHP 200 - 500</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Total (LTO fees only)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">PHP 435.63</td>
                  </tr>
                  <tr className="font-semibold bg-gray-50">
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">Total (including medical)</td>
                    <td className="border border-gray-200 px-4 py-2 text-gray-900">PHP 635 - 935</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Note that the Theoretical Driving Course (TDC) fee is paid directly to the driving school and is separate from the LTO fees. TDC fees typically range from PHP 1,500 to PHP 3,500 depending on the driving school. The total out-of-pocket cost for a student permit, including the TDC and medical exam, is approximately PHP 2,500 to PHP 4,000. For a detailed breakdown of all LTO transaction charges, check our <Link href="/guides/lto-fees-schedule" className="text-[#1e40af] hover:underline">LTO fees schedule</Link>.
            </p>
          </section>

          <section>
            <h2 id="validity" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Validity and Restrictions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LTO student permit is valid for <strong>one (1) year</strong> from the date of issuance. During this period, you are authorized to practice driving under specific conditions and restrictions:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Supervised driving only:</strong> You must always be accompanied by a person who holds a valid driver&apos;s license (professional or non-professional) with at least one year of driving experience. The licensed driver must be seated beside you (for cars) or in a position to provide immediate guidance.</li>
              <li><strong>No solo driving:</strong> You are not permitted to drive alone under any circumstances. Solo driving with only a student permit is a traffic violation.</li>
              <li><strong>No for-hire driving:</strong> Student permit holders cannot drive for-hire vehicles (taxis, TNVS, buses, UV Express, etc.) or engage in any commercial driving activities.</li>
              <li><strong>Restriction codes:</strong> Your student permit will indicate the restriction codes for the type of vehicles you are authorized to practice with. Common codes include RC1 (motorcycles), RC2 (vehicles up to 4,500 kg GVW), and others. Learn more about what each code means in our <Link href="/guides/lto-license-restriction-codes" className="text-[#1e40af] hover:underline">license restriction codes</Link> guide.</li>
              <li><strong>Carry permit at all times:</strong> You must carry your student permit and have it available for inspection whenever you are practicing driving. The supervising licensed driver should also carry their valid license.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The student permit cannot be renewed. If it expires before you obtain your driver&apos;s license, you must apply for a new student permit from scratch. Plan your practical driving training and license application timeline carefully to ensure you complete the process within the one-year validity period.
            </p>
          </section>

          <section>
            <h2 id="after-student-permit" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              After Getting Your Student Permit
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once you have your student permit, the next steps toward getting your full driver&apos;s license are:
            </p>
            <ol className="text-gray-700 leading-relaxed mb-4 space-y-3">
              <li>
                <strong>Wait at least 30 days.</strong> You must hold your student permit for a minimum of 30 days before you can apply for a non-professional driver&apos;s license. This waiting period is meant to give you adequate time to practice driving.
              </li>
              <li>
                <strong>Complete the Practical Driving Course (PDC).</strong> Enroll in and complete the PDC at an LTO-accredited driving school. The PDC provides hands-on driving training and typically consists of 8 hours of actual driving instruction. You will learn vehicle operation, parking, lane changes, turns, and highway driving.
              </li>
              <li>
                <strong>Practice driving regularly.</strong> Use the time between getting your student permit and applying for your license to gain real-world driving experience. Practice in different conditions: traffic, rain, nighttime, and on different road types (city streets, highways, residential areas).
              </li>
              <li>
                <strong>Apply for your non-professional driver&apos;s license.</strong> After completing the 30-day waiting period and the PDC, you can apply for a non-professional driver&apos;s license at any LTO branch. You will need to pass a practical driving test administered by the LTO.
              </li>
            </ol>
          </section>

          <section>
            <h2 id="common-mistakes" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Common Mistakes to Avoid
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Based on reports from first-time applicants, here are the most common mistakes that lead to delays or rejected applications:
            </p>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Bringing a photocopy of the birth certificate instead of the original.</strong> The LTO requires the original PSA-issued birth certificate. If your birth certificate is damaged or in poor condition, order a new copy from PSA Serbilis online or at their outlets.</li>
              <li><strong>Completing the TDC at a non-accredited school.</strong> The LTO system verifies TDC certificates against its database of accredited schools. A certificate from a non-accredited school will not be accepted.</li>
              <li><strong>Getting the medical exam too early.</strong> Medical certificates have a limited validity period. If you get the medical exam weeks before your LTO visit, it may expire before you apply.</li>
              <li><strong>Forgetting parental consent (for minors).</strong> If you are 16 or 17 years old, the notarized parental consent form is mandatory. The LTO will not process your application without it.</li>
              <li><strong>Not bringing enough IDs.</strong> Some branches require two forms of identification. Always bring at least two valid IDs to be safe.</li>
              <li><strong>Arriving too late in the day.</strong> LTO branches have daily processing limits. Arriving in the afternoon increases the risk of being told to come back the next day.</li>
            </ul>
          </section>

          <section>
            <h2 id="tips" className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Tips for First-Time Applicants
            </h2>
            <ul className="text-gray-700 leading-relaxed mb-4 space-y-2">
              <li><strong>Use the LTMS Portal.</strong> Applying online and scheduling an appointment saves you from the uncertainty of walk-in queues. It also allows you to fill out forms at your own pace.</li>
              <li><strong>Study for the written exam.</strong> Review the TDC materials, memorize common road signs, and take practice quizzes online. The written exam is the step where most applicants face difficulties.</li>
              <li><strong>Wear appropriate attire.</strong> Your student permit photo will be used for identification purposes. Wear a collared shirt and avoid wearing sunglasses, hats, or heavy accessories for the photo.</li>
              <li><strong>Budget for the full cost.</strong> Set aside PHP 3,000 to PHP 5,000 to cover the TDC, medical exam, LTO fees, and transportation to and from the LTO branch.</li>
              <li><strong>Bring snacks and water.</strong> The process can take 2 to 4 hours or longer depending on the branch. Having food and water makes the wait more comfortable.</li>
              <li><strong>Check the branch schedule.</strong> Confirm operating hours before visiting. Use our{" "}<Link href="/branches" className="text-blue-600 hover:underline">LTO Branch Directory</Link>{" "}to find your nearest branch and its schedule.</li>
            </ul>
          </section>

          {/* Related Tools */}
          <section className="mt-12 p-6 bg-blue-50 rounded-xl not-prose">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Related Tools</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/lto-license-tracker" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                LTO License Status Tracker →
              </Link>
              <Link href="/branches" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                Find Your LTO Branch →
              </Link>
              <Link href="/guides/lto-license-renewal" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
                License Renewal Guide →
              </Link>
              <Link href="/penalty-calculator" className="block rounded-lg bg-white p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow text-blue-700 font-medium">
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
