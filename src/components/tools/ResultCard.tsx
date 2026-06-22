"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Truck, Package, AlertTriangle, MapPin, Calendar, FileText } from "lucide-react";
import type { TrackerResult, StatusType } from "@/types";

const statusConfig: Record<StatusType, { color: string; bgColor: string; icon: typeof Clock; label: string }> = {
  pending: { color: "text-yellow-700", bgColor: "bg-yellow-100 border-yellow-200", icon: Clock, label: "Pending" },
  processing: { color: "text-blue-700", bgColor: "bg-blue-100 border-blue-200", icon: Truck, label: "Processing" },
  available: { color: "text-green-700", bgColor: "bg-green-100 border-green-200", icon: CheckCircle, label: "Available for Release" },
  released: { color: "text-gray-700", bgColor: "bg-gray-100 border-gray-200", icon: Package, label: "Released" },
  returned: { color: "text-red-700", bgColor: "bg-red-100 border-red-200", icon: AlertTriangle, label: "Returned to LTO" },
};

export default function ResultCard({ result }: { result: TrackerResult }) {
  const config = statusConfig[result.statusCode];
  const Icon = config.icon;

  return (
    <Card className="w-full max-w-2xl mx-auto mt-6 animate-fade-in border-0 shadow-lg">
      <CardHeader className={`${config.bgColor} border-b rounded-t-lg px-6 py-4`}>
        <CardTitle className="flex items-center justify-center gap-3 text-center">
          <Icon className={`size-7 ${config.color} shrink-0`} />
          <span className={`text-lg font-bold ${config.color}`}>{config.label}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {result.plateNumber && (
            <div className="flex items-start gap-3">
              <FileText className="size-5 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">Plate Number</p>
                <p className="text-base font-semibold text-gray-900">{result.plateNumber}</p>
              </div>
            </div>
          )}
          {result.mvFileNumber && (
            <div className="flex items-start gap-3">
              <FileText className="size-5 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">MV File Number</p>
                <p className="text-base font-semibold text-gray-900">{result.mvFileNumber}</p>
              </div>
            </div>
          )}
          {result.estimatedRelease && (
            <div className="flex items-start gap-3">
              <Calendar className="size-5 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">Estimated Release</p>
                <p className="text-base font-semibold text-gray-900">{result.estimatedRelease}</p>
              </div>
            </div>
          )}
          {result.branch && (
            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-gray-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-medium text-gray-500 uppercase">Pickup Branch</p>
                <p className="text-base font-semibold text-gray-900">{result.branch}</p>
              </div>
            </div>
          )}
        </div>
        {result.remarks && (
          <div className="mt-4 rounded-lg bg-gray-50 p-4">
            <p className="text-xs font-medium text-gray-500 uppercase mb-1">Remarks</p>
            <p className="text-sm text-gray-700">{result.remarks}</p>
          </div>
        )}
        <p className="text-xs text-gray-400 mt-4">Status: {result.status} | Last updated: {new Date().toLocaleDateString("en-PH")}</p>
      </CardContent>
    </Card>
  );
}
