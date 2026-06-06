"use client";

import { motion } from "framer-motion";
import { Clock, Trophy, BookMarked, TrendingUp } from "lucide-react";
import BentoTile from "@/components/ui/BentoTile";

const stats = [
  { label: "Hours This Week", value: "12.4", icon: Clock, color: "text-accent-cyan", bg: "bg-accent-cyan/10" },
  { label: "XP Earned", value: "2,840", icon: Trophy, color: "text-accent-amber", bg: "bg-accent-amber/10" },
  { label: "Lessons Done", value: "47", icon: BookMarked, color: "text-accent-emerald", bg: "bg-accent-emerald/10" },
  { label: "Weekly Growth", value: "+18%", icon: TrendingUp, color: "text-accent-violet", bg: "bg-accent-violet/10" },
];

export default function StatsTile() {
  return (
    <BentoTile className="p-5" meshClass="card-mesh-emerald" glowColor="rgba(16,185,129,0.2)">
      <h3 className="font-display text-sm font-semibold text-text-primary mb-4">
        Quick Stats
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
            className={`rounded-xl p-3 ${stat.bg} border border-current/10`}
          >
            <stat.icon className={`w-4 h-4 ${stat.color} mb-1.5`} strokeWidth={1.5} />
            <p className={`font-display text-lg font-bold ${stat.color}`}>
              {stat.value}
            </p>
            <p className="font-mono text-[10px] text-text-muted mt-0.5 leading-tight">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </BentoTile>
  );
}
