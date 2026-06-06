import { Suspense } from "react";
import HeroTile from "@/components/dashboard/HeroTile";
import CourseGrid from "@/components/dashboard/CourseGrid";
import ActivityTile from "@/components/dashboard/ActivityTile";
import StatsTile from "@/components/dashboard/StatsTile";
import CourseSkeleton from "@/components/ui/CourseSkeleton";
import BentoGrid from "@/components/dashboard/BentoGrid";

// Mock student data — in production, fetch from Supabase auth
const student = {
  name: "Arjun",
  streak: 14,
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 grid-bg">
      {/* Page header */}
      <header className="mb-6">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-1">
          LearnOS v2.4
        </p>
        <div className="h-px bg-gradient-to-r from-accent-cyan/30 via-accent-violet/20 to-transparent" />
      </header>

      {/* Bento Grid */}
      <BentoGrid>
        {/* Hero tile — full width on all sizes */}
        <div className="col-span-12 lg:col-span-8">
          <HeroTile student={student} />
        </div>

        {/* Stats tile */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <StatsTile />
        </div>

        {/* Courses — fetched from Supabase */}
        <div className="col-span-12 lg:col-span-8">
          <Suspense fallback={<CourseSkeleton />}>
            <CourseGrid />
          </Suspense>
        </div>

        {/* Activity tile */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <ActivityTile />
        </div>
      </BentoGrid>
    </div>
  );
}
