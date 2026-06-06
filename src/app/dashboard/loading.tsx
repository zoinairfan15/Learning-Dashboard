import CourseSkeleton from "@/components/ui/CourseSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8 grid-bg">
      <div className="mb-6">
        <div className="skeleton h-3 w-24 rounded mb-2" />
        <div className="h-px bg-gradient-to-r from-accent-cyan/30 via-accent-violet/20 to-transparent" />
      </div>

      <div className="grid grid-cols-12 gap-4 lg:gap-5">
        {/* Hero skeleton */}
        <div className="col-span-12 lg:col-span-8">
          <div className="skeleton rounded-2xl h-48" />
        </div>
        {/* Stats skeleton */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="skeleton rounded-2xl h-48" />
        </div>
        {/* Courses skeleton */}
        <div className="col-span-12 lg:col-span-8">
          <CourseSkeleton />
        </div>
        {/* Activity skeleton */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="skeleton rounded-2xl h-56" />
        </div>
      </div>
    </div>
  );
}
