"use client";

import { useState, useRef } from "react";
import { Car, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const codingSchedule = [
  { day: "Monday", digits: [1, 2], dayIndex: 1 },
  { day: "Tuesday", digits: [3, 4], dayIndex: 2 },
  { day: "Wednesday", digits: [5, 6], dayIndex: 3 },
  { day: "Thursday", digits: [7, 8], dayIndex: 4 },
  { day: "Friday", digits: [9, 0], dayIndex: 5 },
];

export default function CodingChecker() {
  const [plate, setPlate] = useState("");
  const [result, setResult] = useState<{ lastDigit: number; codingDay: string; isCodingToday: boolean; isWeekend: boolean } | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const check = () => {
    const digits = plate.replace(/\D/g, "");
    if (!digits.length) return;
    const lastDigit = parseInt(digits[digits.length - 1]);
    const today = new Date().getDay();
    const isWeekend = today === 0 || today === 6;
    const schedule = codingSchedule.find((s) => s.digits.includes(lastDigit));
    const codingDay = schedule?.day || "None";
    const isCodingToday = !isWeekend && schedule?.dayIndex === today;
    setResult({ lastDigit, codingDay, isCodingToday, isWeekend });
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#1e3a5f]">
          <Car className="size-6" /> Number Coding Checker (UVVRP)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Enter your plate number"
            value={plate}
            onChange={(e) => { setPlate(e.target.value.toUpperCase()); setResult(null); }}
            onKeyDown={(e) => e.key === "Enter" && check()}
            className="flex-1 h-12 text-base"
          />
          <Button onClick={check} disabled={!plate.trim()} className="h-12 px-6 bg-[#1e40af] hover:bg-[#1e3a5f] text-white">
            Check
          </Button>
        </div>

        {result && (
          <div ref={resultRef} className="scroll-mt-20 animate-fade-in space-y-4">
            <div className={`rounded-lg p-6 text-center ${result.isCodingToday ? "bg-red-50 border-2 border-red-200" : "bg-green-50 border-2 border-green-200"}`}>
              {result.isCodingToday ? (
                <>
                  <XCircle className="size-12 text-red-500 mx-auto mb-2" />
                  <p className="text-xl font-bold text-red-700">CODING TODAY!</p>
                  <p className="text-sm text-red-600 mt-1">Your vehicle (last digit: {result.lastDigit}) is subject to coding today.</p>
                </>
              ) : result.isWeekend ? (
                <>
                  <CheckCircle className="size-12 text-green-500 mx-auto mb-2" />
                  <p className="text-xl font-bold text-green-700">NO CODING — WEEKEND</p>
                  <p className="text-sm text-green-600 mt-1">Number coding does not apply on weekends.</p>
                </>
              ) : (
                <>
                  <CheckCircle className="size-12 text-green-500 mx-auto mb-2" />
                  <p className="text-xl font-bold text-green-700">NOT CODING TODAY</p>
                  <p className="text-sm text-green-600 mt-1">Your vehicle (last digit: {result.lastDigit}) is free to travel today.</p>
                </>
              )}
              <Badge variant="outline" className="mt-3">Coding Day: {result.codingDay}</Badge>
            </div>
          </div>
        )}

        <div className="rounded-lg bg-gray-50 p-4">
          <h4 className="font-semibold text-gray-900 mb-3">MMDA Number Coding Schedule</h4>
          <div className="space-y-2">
            {codingSchedule.map((s) => {
              const today = new Date().getDay();
              const isToday = s.dayIndex === today;
              return (
                <div key={s.day} className={`flex justify-between text-sm rounded-lg px-3 py-2 ${isToday ? "bg-blue-100 font-medium" : ""}`}>
                  <span className="text-gray-700">{s.day} {isToday && <Badge variant="outline" className="ml-1 text-xs">Today</Badge>}</span>
                  <span className="font-medium">Ends in {s.digits.join(" & ")}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 mt-3">Window hours: 7:00 AM - 10:00 AM and 5:00 PM - 8:00 PM | Weekends & holidays: No coding</p>
        </div>
      </CardContent>
    </Card>
  );
}
