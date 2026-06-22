import { Search, Database, Bell, MapPin } from "lucide-react";

const steps = [
  { icon: Search, title: "Enter Your Number", desc: "Type your plate number, MV file number, or license number into the tracker form." },
  { icon: Database, title: "System Query", desc: "Our system queries the LTO database to retrieve the latest status of your transaction." },
  { icon: Bell, title: "Get Status Update", desc: "Receive your real-time status including processing stage, estimated release, and remarks." },
  { icon: MapPin, title: "Visit Your Branch", desc: "When status shows 'Available,' visit your designated LTO branch to claim your plate or license." },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How the LTO Tracker Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Track your LTO transactions in 4 simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="text-center relative">
              {i < 3 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-blue-200" />}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1e40af] text-white mb-4 shadow-lg">
                <Icon className="size-7" />
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-white text-[#1e40af] text-xs font-bold flex items-center justify-center shadow">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
