import { RefreshCw, CheckCircle, Heart, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { icon: RefreshCw, title: "Real-Time Data", desc: "Our tracker pulls the latest status information from LTO systems, giving you up-to-date results every time you check." },
  { icon: CheckCircle, title: "Verified Sources", desc: "All information is sourced from official LTO databases, LTMS portal, and verified government publications." },
  { icon: Heart, title: "Free Forever", desc: "LTO Tracker is and will always be free. We believe every Filipino motorist deserves easy access to their LTO status." },
  { icon: Shield, title: "Privacy First", desc: "We never store your personal data or tracking queries. Your privacy and security are our top priorities." },
];

export default function TrustSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Trust LTO Tracker?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We are committed to providing the most reliable LTO tracking service in the Philippines.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-0 shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4">
                  <Icon className="size-7 text-[#1e40af]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
