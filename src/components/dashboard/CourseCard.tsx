"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Code2, Network, FileCode, Database, Atom, Globe, Layers, Cpu, Star } from "lucide-react";
import type { Course } from "@/types";
import BentoTile from "@/components/ui/BentoTile";

const meshClasses = ["card-mesh","card-mesh-violet","card-mesh-emerald","card-mesh-amber","card-mesh-rose"];
const accentColors = [
  { text: "text-accent-cyan", bg: "bg-accent-cyan", glow: "rgba(0,229,255,0.2)" },
  { text: "text-accent-violet", bg: "bg-accent-violet", glow: "rgba(168,85,247,0.2)" },
  { text: "text-accent-emerald", bg: "bg-accent-emerald", glow: "rgba(16,185,129,0.2)" },
  { text: "text-accent-amber", bg: "bg-accent-amber", glow: "rgba(245,158,11,0.2)" },
  { text: "text-accent-rose", bg: "bg-accent-rose", glow: "rgba(244,63,94,0.2)" },
];

const iconMap: Record<string, React.ElementType> = {
  BookOpen, Code2, Network, FileCode, Database, Atom, Globe, Layers, Cpu, Star,
};

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const pascal = name.split(/[-_]/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join("");
  const Icon = iconMap[pascal] || BookOpen;
  return <Icon className={className} strokeWidth={1.5} />;
}

export default function CourseCard({ course, index }: { course: Course; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const { text, bg, glow } = accentColors[index % accentColors.length];
  return (
    <BentoTile className="p-5" meshClass={meshClasses[index % meshClasses.length]} glowColor={glow}>
      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 bg-current/10 ${text}`}>
        <DynamicIcon name={course.icon_name} className={`w-5 h-5 ${text}`} />
      </div>
      <h3 className="font-display font-semibold text-text-primary text-sm leading-snug mb-1 line-clamp-2">{course.title}</h3>
      <div ref={ref} className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-xs text-text-muted">Progress</span>
          <motion.span className={`font-mono text-xs font-medium ${text}`}
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}>
            {course.progress}%
          </motion.span>
        </div>
        <div className="h-1.5 rounded-full bg-bg-elevated overflow-hidden">
          <motion.div className={`h-full rounded-full ${bg}`}
            initial={{ width: "0%" }} animate={inView ? { width: `${course.progress}%` } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ boxShadow: `0 0 8px ${glow}` }} />
        </div>
      </div>
    </BentoTile>
  );
}