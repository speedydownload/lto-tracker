"use client";

import { useState, useRef } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const licenseTypes = [
  { value: "student", label: "Student Permit", baseFee: 272.63, licenseFee: 0 },
  { value: "non-pro", label: "Non-Professional", baseFee: 272.63, licenseFee: 350 },
  { value: "pro", label: "Professional", baseFee: 272.63, licenseFee: 450 },
  { value: "conductor", label: "Conductor's License", baseFee: 272.63, licenseFee: 200 },
];

export default function RenewalCalculator() {
  const [licenseType, setLicenseType] = useState("non-pro");
  const [expiryDate, setExpiryDate] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<{
    baseFee: number; licenseFee: number; medicalFee: number; drugTest: number; penalty: number; total: number; isLate: boolean; documents: string[];
  } | null>(null);

  const calculate = () => {
    const type = licenseTypes.find((t) => t.value === licenseType)!;
    const today = new Date();
    const expiry = expiryDate ? new Date(expiryDate) : today;
    const isLate = expiry < today;
    const daysLate = isLate ? Math.floor((today.getTime() - expiry.getTime()) / 86400000) : 0;
    const penalty = isLate ? Math.min(daysLate * 2, 5000) : 0;
    const medicalFee = 350;
    const drugTest = 400;

    const documents = [
      "Current driver's license (original)",
      "Medical certificate from LTO-accredited clinic",
      "Drug test result from accredited center",
      "1 valid government-issued ID",
    ];
    if (licenseType === "pro") documents.push("Comprehensive Driving Course (CDC) certificate");
    if (licenseType === "student") {
      documents.length = 0;
      documents.push("PSA Birth Certificate", "Valid government-issued ID", "Medical certificate", "Theoretical Driving Course (TDC) certificate");
    }

    setResult({
      baseFee: type.baseFee,
      licenseFee: type.licenseFee,
      medicalFee,
      drugTest,
      penalty,
      total: type.baseFee + type.licenseFee + medicalFee + drugTest + penalty,
      isLate,
      documents,
    });
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#1e3a5f]">
          <Calculator className="size-6" /> LTO Renewal Fee Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">License Type</label>
          <div className="grid grid-cols-2 gap-2">
            {licenseTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setLicenseType(type.value)}
                className={`rounded-lg border-2 p-3 text-sm font-medium transition-all ${
                  licenseType === type.value ? "border-[#1e40af] bg-blue-50 text-[#1e40af]" : "border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Current Expiry Date (optional)</label>
          <Input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="h-12" />
          <p className="text-xs text-gray-500 mt-1">Leave empty to calculate without late penalty</p>
        </div>
        <Button onClick={calculate} className="w-full h-12 bg-[#1e40af] hover:bg-[#1e3a5f] text-white text-base">
          Calculate Renewal Fees
        </Button>

        {result && (
          <div ref={resultRef} className="scroll-mt-20 mt-6 animate-fade-in space-y-4">
            <div className="rounded-lg bg-gray-50 p-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-600">Application & Computer Fee</span><span className="font-medium">₱{result.baseFee.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">License Fee</span><span className="font-medium">₱{result.licenseFee.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">Medical Certificate</span><span className="font-medium">₱{result.medicalFee.toFixed(2)}</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">Drug Test</span><span className="font-medium">₱{result.drugTest.toFixed(2)}</span></div>
              {result.penalty > 0 && (
                <div className="flex justify-between text-sm"><span className="text-red-600">Late Penalty</span><span className="font-medium text-red-600">₱{result.penalty.toFixed(2)}</span></div>
              )}
              <hr className="my-2" />
              <div className="flex justify-between text-lg font-bold"><span>Total</span><span className="text-[#1e40af]">₱{result.total.toFixed(2)}</span></div>
            </div>
            {result.isLate && <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Late Renewal — Additional penalty applies</Badge>}
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Required Documents:</h4>
              <ul className="space-y-1">
                {result.documents.map((doc, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2"><span className="text-green-600 mt-0.5">✓</span>{doc}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
