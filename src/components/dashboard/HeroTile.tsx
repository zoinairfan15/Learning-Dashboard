"use client";

import { motion } from "framer-motion";
import { Flame, Zap } from "lucide-react";
import BentoTile from "@/components/ui/BentoTile";
import type { Student } from "@/types";

interface HeroTileProps {
  student: Student;
}

export default function HeroTile({ student }: HeroTileProps) {
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <BentoTile className="p-6 md:p-8 min-h-[180px]" meshClass="card-mesh">
      {/* Background decorative orb */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-accent-violet/5 blur-2xl pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="font-mono text-xs text-text-muted tracking-widest uppercase mb-2"
          >
            {greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary leading-tight"
          >
            Welcome back,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">
              {student.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-2 text-text-secondary text-sm md:text-base"
          >
            Ready to continue your learning journey today?
          </motion.p>
        </div>

        {/* Streak indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
          className="flex-shrink-0"
        >
          <div className="relative flex flex-col items-center justify-center w-28 h-28 rounded-2xl border border-accent-amber/20 bg-accent-amber/5">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-amber/10 to-transparent" />

            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Flame className="w-8 h-8 text-accent-amber mb-1" strokeWidth={1.5} />
            </motion.div>

            <span className="font-display text-2xl font-bold text-accent-amber">
              {student.streak}
            </span>
            <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
              Day streak
            </span>
          </div>
        </motion.div>
      </div>

      {/* Progress pills */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="flex gap-2 mt-6 flex-wrap"
      >
        {[
          { label: "On Track", color: "text-accent-emerald border-accent-emerald/30 bg-accent-emerald/10", icon: <Zap className="w-3 h-3" /> },
          { label: "3 courses active", color: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/10", icon: null },
          { label: `Week ${Math.ceil(student.streak / 7)}`, color: "text-accent-violet border-accent-violet/30 bg-accent-violet/10", icon: null },
        ].map((pill) => (
          <span
            key={pill.label}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium font-mono ${pill.color}`}
          >
            {pill.icon}
            {pill.label}
          </span>
        ))}
      </motion.div>
    </BentoTile>
  );
}
