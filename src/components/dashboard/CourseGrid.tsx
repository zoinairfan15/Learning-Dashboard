import { createServerSupabaseClient } from "@/lib/supabase";
import type { Course } from "@/types";
import CourseCard from "./CourseCard";
import CourseErrorState from "@/components/ui/CourseErrorState";

async function getCourses(): Promise<{ data: Course[] | null; error: string | null }> {
  try {
    const supabase = createServerSupabaseClient();
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      return { data: null, error: error.message };
    }

    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : "Failed to connect to database",
    };
  }
}

export default async function CourseGrid() {
  const { data: courses, error } = await getCourses();

  if (error) {
    return <CourseErrorState message={error} />;
  }

  if (!courses || courses.length === 0) {
    return (
      <div className="rounded-2xl border border-bg-border bg-bg-card p-8 text-center">
        <p className="text-text-muted font-mono text-sm">No courses found.</p>
        <p className="text-text-muted text-xs mt-1">
          Add courses to your Supabase table to see them here.
        </p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-semibold text-text-primary">
          Active Courses
        </h2>
        <span className="font-mono text-xs text-text-muted">
          {courses.length} enrolled
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </section>
  );
}
