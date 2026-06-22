import { AlertTriangle } from "lucide-react";

export default function DisclaimerSection() {
  return (
    <section className="py-10 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-start gap-4 rounded-lg bg-white p-6 border border-gray-200 shadow-sm">
          <AlertTriangle className="size-6 text-yellow-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              LTO Tracker is an <strong>independent informational website</strong> and is <strong>not affiliated</strong> with, endorsed by, or connected to the Land Transportation Office (LTO), Department of Transportation (DOTr), or any Philippine government agency. The information provided on this website is for general informational purposes only and should not be considered as official government communication. While we strive to keep information accurate and up-to-date, we make no guarantees regarding the completeness, reliability, or accuracy of the data presented. For official LTO transactions and authoritative information, please visit the official LTO website at <a href="https://www.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-[#1e40af] hover:underline">www.lto.gov.ph</a> or the LTMS portal at <a href="https://portal.lto.gov.ph" target="_blank" rel="noopener noreferrer nofollow" className="text-[#1e40af] hover:underline">portal.lto.gov.ph</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
