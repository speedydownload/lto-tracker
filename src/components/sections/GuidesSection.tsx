import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { guides } from "@/data/guides";

export default function GuidesSection() {
  const displayedGuides = guides.slice(0, 6);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">LTO Guides & Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive guides to help you navigate LTO processes, from student permits to vehicle transfers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGuides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 cursor-pointer group">
                <CardContent className="p-6">
                  <BookOpen className="size-8 text-[#1e40af] mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#1e40af] transition-colors">{guide.title.split("—")[0].trim()}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{guide.description.slice(0, 120)}...</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{guide.readTime}</span>
                    <span className="text-[#1e40af] text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Guide <ArrowRight className="size-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        {guides.length > 6 && (
          <div className="text-center mt-8">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e40af] text-white font-semibold rounded-lg hover:bg-[#1e3a8a] transition-colors"
            >
              View All {guides.length} Guides <ArrowRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
