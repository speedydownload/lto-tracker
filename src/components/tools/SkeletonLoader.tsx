import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoader() {
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 space-y-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="border-0 shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-3">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-40" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2"><Skeleton className="h-3 w-20" /><Skeleton className="h-5 w-32" /></div>
              <div className="space-y-2"><Skeleton className="h-3 w-20" /><Skeleton className="h-5 w-32" /></div>
              <div className="space-y-2"><Skeleton className="h-3 w-20" /><Skeleton className="h-5 w-32" /></div>
              <div className="space-y-2"><Skeleton className="h-3 w-20" /><Skeleton className="h-5 w-32" /></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
