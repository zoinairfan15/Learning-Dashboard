"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import * as LucideIcons from "lucide-react";
import type { Course } from "@/types";
import BentoTile from "@/components/ui/BentoTile";

interface CourseCardProps {
  course: Course;
  index: number;
}

const meshClasses = [
  "card-mesh",
  "card-mesh-violet",
  "card-mesh-emerald",
  "card-mesh-amber",
  "card-mesh-rose",
];

const accentColors = [
  { text: "text-accent-cyan", bg: "bg-accent-cyan", glow: "rgba(0,229,255,0.2)" },
  { text: "text-accent-violet", bg: "bg-accent-violet", glow: "rgba(168,85,247,0.2)" },
  { text: "text-accent-emerald", bg: "bg-accent-emerald", glow: "rgba(16,185,129,0.2)" },
  { text: "text-accent-amber", bg: "bg-accent-amber", glow: "rgba(245,158,11,0.2)" },
  { text: "text-accent-rose", bg: "bg-accent-rose", glow: "rgba(244,63,94,0.2)" },
];

// Dynamically render Lucide icon by name
function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const icons = LucideIcons as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>;
  // Convert snake_case or kebab-case to PascalCase
  const pascalName = name
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("");

  const Icon = icons[pascalName] || icons["BookOpen"];
  return <Icon className={className} strokeWidth={1.5} />;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(progressRef, { once: true, margin: "-50px" });

  const colorIndex = index % accentColors.length;
  const meshIndex = index % meshClasses.length;
  const { text, bg, glow } = accentColors[colorIndex];

  return (
    <BentoTile
      className="p-5"
      meshClass={meshClasses[meshIndex]}
      glowColor={glow}
    >
      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${text} bg-current/10`}>
        <DynamicIcon name={course.icon_name} className={`w-5 h-5 ${text}`} />
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-text-primary text-sm leading-snug mb-1 line-clamp-2">
        {course.title}
      </h3>

      {/* Progress section */}
      <div ref={progressRef} className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-text-muted">Progress</span>
          <motion.span
            className={`font-mono text-xs font-medium ${text}`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {course.progress}%
          </motion.span>
        </div>

        {/* Progress bar track */}
        <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${bg}`}
            initial={{ width: "0%" }}
            animate={isInView ? { width: `${course.progress}%` } : {}}
            transition={{
              duration: 0.9,
              delay: 0.2 + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              boxShadow: `0 0 8px ${glow}`,
            }}
          />
        </div>
      </div>
    </BentoTile>
  );
}
