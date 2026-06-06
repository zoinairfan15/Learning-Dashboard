"use client";

import { AlertTriangle } from "lucide-react";

interface CourseErrorStateProps {
  message: string;
}

export default function CourseErrorState({ message }: CourseErrorStateProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-semibold text-text-primary">Active Courses</h2>
      </div>

      <div className="rounded-2xl border border-accent-rose/20 bg-accent-rose/5 p-6 flex items-start gap-4">
        <AlertTriangle className="w-5 h-5 text-accent-rose flex-shrink-0 mt-0.5" strokeWidth={1.5} />
        <div>
          <p className="font-display text-sm font-semibold text-accent-rose mb-1">
            Database connection failed
          </p>
          <p className="font-mono text-xs text-text-muted leading-relaxed">
            {message}
          </p>
          <p className="font-mono text-xs text-text-muted mt-2">
            Check your <code className="text-accent-cyan bg-bg-elevated px-1 py-0.5 rounded">.env.local</code> file and make sure your Supabase credentials are correct.
          </p>
        </div>
      </div>
    </section>
  );
}
