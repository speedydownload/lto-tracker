import { Clock, Truck, CheckCircle, Package, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const statuses = [
  { icon: Clock, label: "Pending", color: "text-yellow-600", bg: "bg-yellow-50", badge: "bg-yellow-100 text-yellow-700", desc: "Your plate order has been received and is queued for production. This is the initial status after vehicle registration." },
  { icon: Truck, label: "Processing", color: "text-blue-600", bg: "bg-blue-50", badge: "bg-blue-100 text-blue-700", desc: "Your plate is being manufactured or is in transit to your designated LTO branch for release." },
  { icon: CheckCircle, label: "Available", color: "text-green-600", bg: "bg-green-50", badge: "bg-green-100 text-green-700", desc: "Your plate has arrived at the branch and is ready for pickup. Bring your OR/CR and valid ID to claim." },
  { icon: Package, label: "Released", color: "text-gray-600", bg: "bg-gray-50", badge: "bg-gray-100 text-gray-700", desc: "Your plate has been released and claimed. If unclaimed, contact your LTO branch for verification." },
  { icon: AlertTriangle, label: "Returned", color: "text-red-600", bg: "bg-red-50", badge: "bg-red-100 text-red-700", desc: "Your plate was returned to LTO central office. Contact the LTO to arrange re-delivery to your branch." },
];

export default function StatusCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Understanding LTO Status Codes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Learn what each LTO tracking status means and what action to take at each stage.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {statuses.map(({ icon: Icon, label, color, bg, badge, desc }) => (
            <Card key={label} className={`${bg} border-0 shadow-sm hover:shadow-md transition-shadow`}>
              <CardContent className="p-5 text-center">
                <Icon className={`size-8 ${color} mx-auto mb-3`} />
                <Badge className={`${badge} mb-3`}>{label}</Badge>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
