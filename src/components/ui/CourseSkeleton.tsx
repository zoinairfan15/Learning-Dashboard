export default function CourseSkeleton() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="skeleton h-5 w-32 rounded-lg" />
        <div className="skeleton h-4 w-20 rounded-lg" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-bg-border bg-bg-card p-5 min-h-[160px]"
          >
            {/* Icon skeleton */}
            <div className="skeleton w-10 h-10 rounded-xl mb-4" />

            {/* Title skeleton */}
            <div className="skeleton h-4 w-3/4 rounded-md mb-2" />
            <div className="skeleton h-4 w-1/2 rounded-md" />

            {/* Progress skeleton */}
            <div className="mt-5">
              <div className="flex justify-between mb-2">
                <div className="skeleton h-3 w-14 rounded" />
                <div className="skeleton h-3 w-8 rounded" />
              </div>
              <div className="skeleton h-1.5 w-full rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
