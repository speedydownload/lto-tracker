"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface TrackerFormProps {
  onSearch: (type: string, value: string) => void;
  loading?: boolean;
  defaultTab?: "plate" | "mv" | "license";
}

export default function TrackerForm({ onSearch, loading = false, defaultTab = "plate" }: TrackerFormProps) {
  const [plateNumber, setPlateNumber] = useState("");
  const [mvFileNumber, setMvFileNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const handleSubmit = (type: string) => {
    const value = type === "plate" ? plateNumber : type === "mv" ? mvFileNumber : licenseNumber;
    if (value.trim()) onSearch(type, value.trim());
  };

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-xl bg-white/95 backdrop-blur">
      <CardContent className="p-6">
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4 bg-gray-100">
            <TabsTrigger value="plate" className="text-xs sm:text-sm data-[state=active]:bg-[#1e40af] data-[state=active]:text-white">Plate Number</TabsTrigger>
            <TabsTrigger value="mv" className="text-xs sm:text-sm data-[state=active]:bg-[#1e40af] data-[state=active]:text-white">MV File No.</TabsTrigger>
            <TabsTrigger value="license" className="text-xs sm:text-sm data-[state=active]:bg-[#1e40af] data-[state=active]:text-white">License No.</TabsTrigger>
          </TabsList>

          <TabsContent value="plate">
            <div className="flex gap-2">
              <Input
                placeholder="Enter plate number (e.g., ABC 1234)"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit("plate")}
                className="flex-1 h-12 text-base"
                disabled={loading}
              />
              <Button onClick={() => handleSubmit("plate")} disabled={loading || !plateNumber.trim()} className="h-12 px-6 bg-[#1e40af] hover:bg-[#1e3a5f] text-white">
                {loading ? <Loader2 className="size-5 animate-spin" /> : <><Search className="size-5 mr-1" /> Track</>}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Format: ABC 1234, ABC-1234, or 1234 (old format)</p>
          </TabsContent>

          <TabsContent value="mv">
            <div className="flex gap-2">
              <Input
                placeholder="Enter 15-digit MV file number"
                value={mvFileNumber}
                onChange={(e) => setMvFileNumber(e.target.value.replace(/\D/g, "").slice(0, 15))}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit("mv")}
                className="flex-1 h-12 text-base"
                disabled={loading}
              />
              <Button onClick={() => handleSubmit("mv")} disabled={loading || !mvFileNumber.trim()} className="h-12 px-6 bg-[#1e40af] hover:bg-[#1e3a5f] text-white">
                {loading ? <Loader2 className="size-5 animate-spin" /> : <><Search className="size-5 mr-1" /> Check</>}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Found on your OR/CR document (15 digits)</p>
          </TabsContent>

          <TabsContent value="license">
            <div className="flex gap-2">
              <Input
                placeholder="Enter license number (e.g., N01-23-456789)"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value.toUpperCase())}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit("license")}
                className="flex-1 h-12 text-base"
                disabled={loading}
              />
              <Button onClick={() => handleSubmit("license")} disabled={loading || !licenseNumber.trim()} className="h-12 px-6 bg-[#1e40af] hover:bg-[#1e3a5f] text-white">
                {loading ? <Loader2 className="size-5 animate-spin" /> : <><Search className="size-5 mr-1" /> Verify</>}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">Format: N01-23-456789 (found on your license card)</p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
