"use client";

import { useState, useRef } from "react";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const violations = [
  { id: "no-license", name: "Driving Without a Valid License", fine: 3000 },
  { id: "expired-license", name: "Driving with Expired License", fine: 3000 },
  { id: "no-registration", name: "No Registration / Expired Registration", fine: 10000 },
  { id: "no-or-cr", name: "Failure to Carry OR/CR", fine: 1000 },
  { id: "no-helmet", name: "No Helmet (Motorcycle)", fine: 1500 },
  { id: "reckless", name: "Reckless Driving", fine: 2000 },
  { id: "red-light", name: "Beating the Red Light", fine: 3000 },
  { id: "illegal-parking", name: "Illegal Parking", fine: 1000 },
  { id: "no-seatbelt", name: "Not Wearing Seatbelt", fine: 1000 },
  { id: "distracted", name: "Distracted Driving (Mobile Phone)", fine: 5000 },
  { id: "overloading", name: "Overloading", fine: 5000 },
  { id: "obstruction", name: "Obstruction to Traffic", fine: 1000 },
  { id: "smoke-belching", name: "Smoke Belching", fine: 2000 },
  { id: "no-plate", name: "No License Plate / Concealed Plate", fine: 5000 },
  { id: "counterflow", name: "Counterflow / Swerving", fine: 2000 },
  { id: "coding", name: "Number Coding Violation (UVVRP)", fine: 300 },
  { id: "dui", name: "Driving Under the Influence", fine: 20000 },
  { id: "colorum", name: "Colorum Operation (Illegal PUV)", fine: 50000 },
];

export default function PenaltyCalculator() {
  const [selected, setSelected] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]);
    setShowResults(false);
  };

  const selectedViolations = violations.filter((v) => selected.includes(v.id));
  const total = selectedViolations.reduce((sum, v) => sum + v.fine, 0);

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#1e3a5f]">
          <AlertTriangle className="size-6" /> LTO Penalty Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600">Select all applicable violations to calculate your total penalty:</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {violations.map((v) => (
            <button
              key={v.id}
              onClick={() => toggle(v.id)}
              className={`text-left rounded-lg border-2 p-3 text-sm transition-all ${
                selected.includes(v.id) ? "border-red-400 bg-red-50 text-red-800" : "border-gray-200 text-gray-700 hover:border-gray-300"
              }`}
            >
              <span className="font-medium">{v.name}</span>
              <span className="block text-xs mt-0.5 opacity-70">₱{v.fine.toLocaleString()}</span>
            </button>
          ))}
        </div>
        <Button onClick={() => { setShowResults(true); setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100); }} disabled={selected.length === 0} className="w-full h-12 bg-red-600 hover:bg-red-700 text-white text-base">
          Calculate Total Penalty
        </Button>

        {showResults && selectedViolations.length > 0 && (
          <div ref={resultRef} className="scroll-mt-20 mt-6 animate-fade-in">
            <div className="rounded-lg bg-red-50 p-4 border border-red-200 space-y-2">
              {selectedViolations.map((v) => (
                <div key={v.id} className="flex justify-between text-sm">
                  <span className="text-gray-700">{v.name}</span>
                  <span className="font-medium text-red-700">₱{v.fine.toLocaleString()}</span>
                </div>
              ))}
              <hr className="border-red-200 my-2" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total Penalty</span>
                <span className="text-red-700">₱{total.toLocaleString()}</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                {selectedViolations.length} violation{selectedViolations.length > 1 ? "s" : ""}
              </Badge>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                Pay at any LTO branch
              </Badge>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Note: Fines shown are based on the latest available LTO and MMDA schedules. Actual fines may vary. Multiple offenses may result in license suspension or revocation.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
