const timelines = [
  { label: "New Registration", range: "2-4 weeks", percent: 35 },
  { label: "Registration Renewal", range: "1-2 weeks", percent: 20 },
  { label: "Transfer of Ownership", range: "3-6 weeks", percent: 55 },
  { label: "New License Plate", range: "4-8 weeks", percent: 70 },
  { label: "License Replacement", range: "2-4 weeks", percent: 35 },
];

export default function TimelineEstimator() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">LTO Processing Timeline</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Typical processing times for common LTO transactions. Actual times may vary based on current volume and branch.</p>
        </div>
        <div className="space-y-6">
          {timelines.map(({ label, range, percent }) => (
            <div key={label}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">{label}</span>
                <span className="text-sm font-semibold text-[#1e40af]">{range}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#1e40af] to-[#2563eb] transition-all duration-1000" style={{ width: `${percent}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6 text-center">
          Note: Processing times are estimates based on typical LTO operations. Delays may occur during peak seasons, holidays, or due to system backlogs. Use our LTO Tracker for real-time status updates.
        </p>
      </div>
    </section>
  );
}
