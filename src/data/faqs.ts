import { FAQ } from "@/types";
import { CURRENT_YEAR_STR } from "@/lib/constants";

export const homeFAQs: FAQ[] = [
  {
    question: "What is the LTO Tracker and how does it work?",
    answer: "The LTO Tracker is a free online tool that allows Filipino motorists to check the status of their LTO plate numbers, driver's licenses, and motor vehicle files. Simply enter your reference number (plate number, MV file number, or license number) and our system retrieves the latest status from LTO's database. You can check if your plate is pending, processing, available for release, or already released."
  },
  {
    question: "How do I check my LTO plate number status online?",
    answer: "To check your LTO plate number status, visit our LTO Plate Tracker page, enter your plate number in the format ABC-1234 or the old format 123-ABC, and click 'Track Status.' The system will display your plate's current status, estimated release date, and the LTO branch where you can pick it up. You can also check through the official LTMS portal at portal.lto.gov.ph."
  },
  {
    question: "Is the LTO Tracker free to use?",
    answer: "Yes, LTO Tracker's tracking tools are completely free to use. You can check your plate number status, license status, and MV file status as many times as you need without any charges. Our platform is supported by ads, allowing us to keep the service free for all Filipino motorists."
  },
  {
    question: "How long does it take for LTO plates to be released?",
    answer: "LTO plate release times vary depending on the type of transaction. New vehicle registration plates typically take 4-8 weeks, renewal plates take 1-2 weeks, and transfer of ownership can take 3-6 weeks. However, due to ongoing backlogs, some plates may take longer. Use our LTO Tracker to monitor your plate's status in real-time."
  },
  {
    question: "What documents do I need to claim my LTO plate?",
    answer: "To claim your LTO plate at the designated branch, you need to bring: (1) Original Official Receipt (OR) and Certificate of Registration (CR), (2) Valid government-issued ID, (3) Authorization letter and ID copy of the owner if someone else is claiming on their behalf. Visit the branch during office hours, Monday to Friday, 8:00 AM to 5:00 PM."
  },
  {
    question: "Can I check my driver's license status using this tracker?",
    answer: "Yes, our LTO License Tracker allows you to check your driver's license status by entering your license number in the format N01-23-456789. You can verify if your license is active, expired, or if your renewal application is being processed. The tracker also shows your license expiry date and any restrictions."
  },
  {
    question: "What is an MV file number and where can I find it?",
    answer: "An MV (Motor Vehicle) file number is a unique 15-digit reference number assigned to every motor vehicle registered with the LTO. You can find your MV file number on your Official Receipt (OR), Certificate of Registration (CR), or any LTO transaction document. This number is used to track all vehicle-related transactions with the LTO."
  },
  {
    question: "Is LTO Tracker affiliated with the Land Transportation Office?",
    answer: "No, LTO Tracker is an independent tracking platform and is not affiliated with, endorsed by, or connected to the Land Transportation Office (LTO) or any Philippine government agency. We provide tracking services based on publicly available information to help Filipino motorists monitor their LTO transaction status more conveniently."
  },
  {
    question: "What LTO branch should I go to for plate pickup?",
    answer: "Your plate will be delivered to the LTO branch where you originally registered your vehicle. This information is shown in your tracking results. You can use our Branch Finder to locate the branch address, contact number, and operating hours. If you need to change your pickup branch, you must contact the LTO directly."
  },
  {
    question: "How often should I check my LTO plate status?",
    answer: "We recommend checking your LTO plate status once a week. Plate production and delivery timelines can vary, and checking too frequently won't speed up the process. When your plate status changes to 'Available for Release,' you should visit your designated LTO branch as soon as possible to claim it, as unclaimed plates may be returned to the central office."
  }
];

export const plateTrackerFAQs: FAQ[] = [
  {
    question: "What plate number formats are accepted by the tracker?",
    answer: "Our LTO Plate Tracker accepts both new and old Philippine plate number formats. The new format is three letters followed by four numbers (e.g., ABC 1234), while the old format is three numbers followed by three letters (e.g., 123 ABC). Motorcycle plates follow the format AA 12345. Enter your plate number with or without the dash separator."
  },
  {
    question: "What does 'Available for Release' status mean for my plate?",
    answer: "'Available for Release' means your license plate has been manufactured and delivered to your designated LTO branch. You can now visit the branch during office hours (Mon-Fri, 8:00 AM - 5:00 PM) to claim your plate. Bring your OR/CR and valid ID. We recommend claiming your plate promptly, as unclaimed plates may be returned to the LTO central office after a certain period."
  },
  {
    question: "My plate shows 'Returned to LTO' — what should I do?",
    answer: "If your plate status shows 'Returned to LTO,' it means your plate was delivered to the branch but was sent back to the central office, usually because it remained unclaimed for an extended period. Contact the LTO Central Office at (02) 8922-9061 or visit your original registration branch to request re-delivery of your plate."
  },
  {
    question: "Can I track plates registered under a different name?",
    answer: "Yes, our plate tracker searches by plate number regardless of the registered owner's name. However, to claim the plate at the LTO branch, you must be the registered owner or present an authorization letter from the owner along with their valid ID and a copy of the OR/CR."
  },
  {
    question: "How accurate is the plate tracking information?",
    answer: "Our plate tracking information is sourced from LTO's systems and is updated regularly. However, there may be occasional delays in data synchronization. For the most authoritative information, you can also check directly through the LTMS portal at portal.lto.gov.ph or contact your LTO branch by phone."
  },
  {
    question: "What if my plate number is not found in the system?",
    answer: "If your plate number is not found, it could mean: (1) The plate order has not yet been entered into the system, (2) You may have entered the wrong format, (3) The plate is from a very recent registration that hasn't been processed yet. Try checking again after a few days, or contact your LTO branch for assistance."
  },
  {
    question: "Can I check the plate status of a motorcycle?",
    answer: "Yes, our tracker supports motorcycle plate numbers. Philippine motorcycle plates use the format of two letters followed by five numbers (e.g., AA 12345). Enter your motorcycle plate number in the tracker to check its current status, estimated release date, and pickup branch."
  },
  {
    question: "Why has my plate been 'Processing' for months?",
    answer: "Extended 'Processing' status is common due to the LTO plate backlog that has affected millions of vehicles. The LTO has been working to clear this backlog, but delays of several months are not unusual. Factors include high demand, limited manufacturing capacity, and logistical challenges in nationwide distribution. Continue monitoring with our tracker for status changes."
  }
];

export const licenseTrackerFAQs: FAQ[] = [
  {
    question: "How do I find my LTO license number?",
    answer: "Your LTO driver's license number is printed on your physical license card in the format N01-23-456789. It's also available on your old license card, any LTO receipt from previous transactions, or through the LTMS portal if you have an account. The license number starts with a letter followed by digits separated by dashes."
  },
  {
    question: "Can I check if my driver's license is still valid?",
    answer: "Yes, our License Tracker shows your license's current validity status and expiration date. Enter your license number to see if your license is Active, Expired, Suspended, or Revoked. If your license is nearing expiration, we recommend starting the renewal process at least 30 days before the expiry date."
  },
  {
    question: "What are DL restriction codes on my license?",
    answer: "DL restriction codes indicate the types of vehicles you're authorized to drive. Common codes are: Restriction 1 (motorcycles/tricycles), Restriction 2 (vehicles up to 4500kg GVW), Restriction 3 (vehicles above 4500kg GVW), Restriction 4 (cars with automatic transmission only), and Restriction 5 (motorcycles with manual transmission). These are printed on your license card."
  },
  {
    question: "How long is an LTO driver's license valid?",
    answer: `As of ${CURRENT_YEAR_STR}, LTO driver's licenses in the Philippines are valid for 5 years for most applicants. Under the 10-year validity program, licenses for drivers with a clean record (no violations in the past 5 years) may be issued for 10 years. Student permits are valid for 1 year. Check your specific expiry date using our license tracker.`
  },
  {
    question: "What happens if my license is expired?",
    answer: "If your license has been expired for less than 2 years, you can renew it following the standard renewal process but may need to pay a late renewal penalty. If expired for more than 2 years but less than 10 years, you may need to retake the written exam. If expired for more than 10 years, you'll need to apply for a new license from scratch."
  },
  {
    question: "Can I track my license renewal application?",
    answer: "Yes, after submitting your license renewal application, you can use our License Tracker to monitor the processing status. Enter your license number to see if your renewal is still being processed, if your new license card is ready for pickup, or if there are any issues with your application."
  },
  {
    question: "What does 'Suspended' license status mean?",
    answer: "A 'Suspended' status means your driving privileges have been temporarily revoked due to traffic violations, unpaid fines, or legal orders. During suspension, you are not legally allowed to drive. Contact the LTO to resolve the suspension, which typically involves paying fines, attending traffic safety seminars, or fulfilling court requirements."
  },
  {
    question: "How can I check for violations on my license?",
    answer: "You can check for violations associated with your license through the LTMS portal or by visiting any LTO branch. Our tracker shows the general status of your license but for detailed violation records, the official LTMS portal at portal.lto.gov.ph provides comprehensive information about any recorded traffic violations and fines."
  }
];

export const mvFileCheckerFAQs: FAQ[] = [
  {
    question: "What is an MV file number?",
    answer: "An MV (Motor Vehicle) file number is a unique 15-digit identification number assigned by the LTO to every motor vehicle registered in the Philippines. It serves as the vehicle's permanent record identifier in the LTO system and is used for all vehicle-related transactions including registration, renewal, transfer of ownership, and plate tracking."
  },
  {
    question: "Where can I find my MV file number?",
    answer: "Your MV file number can be found on several documents: (1) Your Official Receipt (OR) from vehicle registration, (2) Your Certificate of Registration (CR), (3) Any LTO transaction receipt related to your vehicle, (4) The LTMS portal if you have an online account. The number is typically printed on the upper portion of these documents."
  },
  {
    question: "What information does the MV File Checker show?",
    answer: "Our MV File Checker displays the current status of your motor vehicle file, including registration status, plate number assignment, any pending transactions, estimated processing completion dates, and the LTO branch handling your file. It covers transactions such as new registration, renewal, transfer of ownership, and plate production status."
  },
  {
    question: "Can I check the MV file for a used vehicle I want to buy?",
    answer: "Yes, checking the MV file is highly recommended before purchasing a used vehicle. It helps verify that the vehicle has a clean record, no encumbrances, no pending violations, and that the registration is current. However, for a complete background check, also obtain a PNP-HPG clearance to check if the vehicle has been reported stolen."
  },
  {
    question: "What does 'Encumbered' status mean in the MV file?",
    answer: "'Encumbered' means the vehicle has a lien or financial obligation registered against it, typically from a car loan or financing agreement. The vehicle cannot be transferred to a new owner until the encumbrance is released by the financing company. If you're buying a used car, avoid vehicles with encumbered MV files unless the seller can provide a release of chattel mortgage."
  },
  {
    question: "How long does MV file processing take?",
    answer: "MV file processing times vary by transaction type: New vehicle registration typically takes 1-3 business days, registration renewal takes 1-2 business days (longer if there are pending issues), and transfer of ownership takes 3-7 business days. These timelines may be longer during peak periods or if additional requirements are needed."
  },
  {
    question: "Can I transfer my MV file to a different LTO branch?",
    answer: "Yes, MV file transfers between LTO branches are possible but involve additional processing. You'll need to file a request at your current branch to have the file transferred to the new branch. This is typically done when you change your permanent address or want to transact at a more convenient location. The process takes 2-4 weeks."
  },
  {
    question: "What if my MV file has discrepancies?",
    answer: "If your MV file contains errors in vehicle details (chassis number, engine number, body type, etc.) or owner information, you need to file a correction request at your LTO branch. Bring supporting documents such as the vehicle's certificate of stock reported, deed of sale, and valid ID. Corrections may take 3-5 business days to process."
  }
];

export const renewalFAQs: FAQ[] = [
  {
    question: `How much does LTO license renewal cost in ${CURRENT_YEAR_STR}?`,
    answer: `LTO license renewal fees for ${CURRENT_YEAR_STR} are: Non-Professional license - ₱585 (application fee ₱100, license fee ₱350, computer fee ₱67.63, legal research fund ₱50, cyber education tax ₱17.37), Professional license - ₱720 (higher license fee), and Student Permit - ₱585. Additional costs include medical certificate (₱300-500) and drug test (₱300-500). Use our Renewal Calculator for exact totals.`
  },
  {
    question: "What documents are needed for license renewal?",
    answer: "For LTO license renewal, you need: (1) Current driver's license (original), (2) Medical certificate from an LTO-accredited clinic, (3) Drug test result from an LTO-accredited testing center, (4) Comprehensive Driving Course (CDC) certificate for professional licenses, (5) LTMS appointment confirmation if applying online. Bring original documents and one government-issued ID."
  },
  {
    question: "Can I renew my LTO license online?",
    answer: "Yes, you can start the LTO license renewal process online through the LTMS portal at portal.lto.gov.ph. Create an account, fill out the application form, schedule an appointment at your preferred LTO branch, and pay online. However, you still need to visit the branch in person for photo capture, biometrics, and document verification."
  },
  {
    question: "What is the penalty for late license renewal?",
    answer: "The LTO charges a late renewal penalty if you renew your license after the expiration date. The penalty varies based on how long the license has been expired. If renewed within the first year after expiry, the penalty is relatively minimal. Beyond 2 years, you may need to retake the written exam. Beyond 10 years, you'll need to apply for a completely new license."
  },
  {
    question: "How much does vehicle registration renewal cost?",
    answer: "Vehicle registration renewal costs depend on the vehicle type and weight. For private cars, expect to pay around ₱1,600-3,500 which includes: registration fee, computer fee, emission testing fee, CTPL insurance (₱600-800), sticker fee, and legal research fund. Motorcycles cost less at around ₱600-900. Late registration incurs additional penalties of 50% of the registration fee."
  },
  {
    question: "When should I renew my vehicle registration?",
    answer: "Vehicle registration must be renewed annually, due on the last working day of the month corresponding to the last digit of your plate number: 1-January, 2-February, 3-March, and so on. For example, if your plate ends in 5, your registration is due in May. You can renew up to 60 days before the due date without penalty."
  },
  {
    question: "Do I need an emission test for renewal?",
    answer: "Yes, a valid emission test certificate is required for vehicle registration renewal. The test must be conducted at a DENR-accredited Private Emission Testing Center (PETC). The certificate is valid for one year. The cost ranges from ₱200-600 depending on the vehicle type. Vehicles that fail the emission test cannot be registered until repairs are made and a passing certificate is obtained."
  },
  {
    question: "What is CTPL insurance and is it required for renewal?",
    answer: "CTPL (Compulsory Third Party Liability) insurance is mandatory for all motor vehicles in the Philippines. It covers bodily injury and death claims from third parties involved in accidents with your vehicle. You must present a valid CTPL insurance policy when renewing your vehicle registration. The cost is approximately ₱600-800 per year for private vehicles."
  }
];

export const penaltyFAQs: FAQ[] = [
  {
    question: `What are the common LTO traffic violation fines in ${CURRENT_YEAR_STR}?`,
    answer: "Common LTO traffic violation fines include: Driving without a license (₱3,000), Expired registration (₱10,000), No helmet for motorcycle riders (₹2,000), Reckless driving (₱2,000), Illegal parking (₱1,000-2,000), Beating the red light (₱1,000-3,000), Driving under the influence (₱3,000-500,000), and Overloading (₱3,000-10,000). Penalties vary and may be higher for repeat offenders."
  },
  {
    question: "How do I pay my LTO traffic violation fine?",
    answer: "LTO traffic violation fines can be paid through several channels: (1) In person at the LTO branch indicated on your ticket, (2) Through the LTMS portal online, (3) At authorized payment centers and partner banks, (4) Via mobile payment apps linked to the LTO system. Bring your traffic violation receipt (TVR) and valid ID when paying in person."
  },
  {
    question: "What happens if I don't pay my traffic violation fine?",
    answer: "Unpaid traffic violation fines may result in: (1) Inability to renew your driver's license or vehicle registration, (2) Accumulation of additional penalties and surcharges, (3) Suspension or revocation of your license for multiple unpaid violations, (4) The violation appearing on your LTO record permanently until resolved. It's important to settle fines promptly."
  },
  {
    question: "Can traffic violation fines be contested?",
    answer: "Yes, you have the right to contest a traffic violation. You must appear before the LTO adjudication division within the period specified on your TVR (Traffic Violation Receipt), typically 15 days. Bring evidence to support your case, such as photos, dashcam footage, or witness statements. If you fail to appear within the deadline, the violation may be recorded as final."
  },
  {
    question: "What is the Anti-Distracted Driving Act penalty?",
    answer: "Under the Anti-Distracted Driving Act (RA 10913), penalties for using mobile phones while driving are: First offense - ₱5,000, Second offense - ₱10,000, Third offense - ₱15,000 plus 3-month license suspension, Fourth offense - ₱20,000 plus license revocation. The law prohibits using any electronic device while driving, including hands-free calls in certain situations."
  },
  {
    question: "What are the DUI penalties in the Philippines?",
    answer: "Driving Under the Influence (DUI) penalties in the Philippines under RA 10586 (Anti-Drunk and Drugged Driving Act) include: First offense - ₱20,000-80,000 fine and 3-month license suspension, Second offense - ₱80,000-160,000 fine and license revocation, Third offense - ₱160,000-500,000 fine, imprisonment of 3 months to 2 years, and permanent license revocation."
  },
  {
    question: "Are there penalties for overloading passengers?",
    answer: "Yes, overloading penalties apply to both private and public vehicles. For public utility vehicles, the fine ranges from ₱5,000-10,000 for the first offense, with higher penalties for repeat violations. For private vehicles, carrying more passengers than the vehicle's rated capacity can result in fines of ₱1,000-5,000. Vehicle impoundment may also apply."
  },
  {
    question: "What is the penalty for driving with an expired license?",
    answer: "Driving with an expired driver's license is punishable by a fine of ₱3,000 for the first offense. You will be issued a Traffic Violation Receipt (TVR) and may be required to surrender your expired license. To avoid this penalty, renew your license before the expiration date. You can check your license expiry date using our License Tracker tool."
  }
];

export const codingFAQs: FAQ[] = [
  {
    question: "What is the number coding scheme in the Philippines?",
    answer: "The number coding scheme, officially known as the Unified Vehicular Volume Reduction Program (UVVRP), is a traffic management policy implemented by the MMDA in Metro Manila. It restricts vehicles from using major roads on specific days based on the last digit of their plate number to reduce traffic congestion."
  },
  {
    question: "What are the number coding hours?",
    answer: "The number coding scheme operates during two window periods: Morning window from 7:00 AM to 10:00 AM, and Afternoon window from 5:00 PM to 8:00 PM, Monday through Friday. The scheme does not apply on weekends, holidays, and during special non-working days declared by the government."
  },
  {
    question: "What is the coding schedule per plate number?",
    answer: "The coding schedule follows this pattern based on your plate's last digit: Monday - plates ending in 1 and 2, Tuesday - plates ending in 3 and 4, Wednesday - plates ending in 5 and 6, Thursday - plates ending in 7 and 8, Friday - plates ending in 9 and 0. Check your coding day using our free Coding Checker tool."
  },
  {
    question: "What is the fine for violating the number coding scheme?",
    answer: "The fine for violating the MMDA number coding scheme is ₱300 for the first offense. Repeat violations within the same year may result in higher fines. The penalty is enforced by MMDA traffic enforcers and can be paid at MMDA offices or authorized payment centers."
  },
  {
    question: "Are there exemptions to the number coding scheme?",
    answer: "Yes, several vehicle types are exempt from the number coding scheme, including: government vehicles, emergency vehicles (ambulances, fire trucks), public utility buses, diplomatic vehicles, school buses (during school hours), vehicles with special MMDA window hour exemption stickers, and vehicles driven by senior citizens or persons with disabilities (with proper documentation)."
  },
  {
    question: "Does number coding apply outside Metro Manila?",
    answer: "The MMDA number coding scheme applies only within Metro Manila's 16 cities and 1 municipality. Other cities like Cebu and Davao may have their own traffic management schemes. Always check local ordinances when driving in different cities. Our Coding Checker specifically covers the Metro Manila UVVRP scheme."
  },
  {
    question: "Does number coding apply to motorcycles?",
    answer: "No, motorcycles are generally exempt from the MMDA number coding scheme. The UVVRP primarily targets four-wheeled and larger vehicles. However, motorcycles must still comply with other traffic regulations and may be subject to separate local ordinances in certain areas."
  },
  {
    question: "Can I get a window hour exemption?",
    answer: "Yes, the MMDA issues Window Hour Exemption stickers for certain qualifying vehicles and situations. To apply, you need to submit a request at the MMDA main office with supporting documents justifying the exemption. Common reasons include medical appointments, essential business operations, and special circumstances that require daily vehicle use."
  }
];
