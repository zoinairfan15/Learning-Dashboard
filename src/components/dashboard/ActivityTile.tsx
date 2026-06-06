"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { generateActivityData, getActivityColor } from "@/lib/activity";
import BentoTile from "@/components/ui/BentoTile";

export default function ActivityTile() {
  const activityData = generateActivityData();
  // Show last 16 weeks (112 days)
  const recentData = activityData.slice(-112);

  // Group into weeks (columns of 7)
  const weeks: typeof recentData[] = [];
  for (let i = 0; i < recentData.length; i += 7) {
    weeks.push(recentData.slice(i, i + 7));
  }

  const totalContributions = recentData.filter((d) => d.count > 0).length;

  return (
    <BentoTile className="p-5" meshClass="card-mesh-violet" glowColor="rgba(168,85,247,0.2)">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-4 h-4 text-accent-violet" strokeWidth={1.5} />
        <h3 className="font-display text-sm font-semibold text-text-primary">
          Learning Activity
        </h3>
      </div>

      <p className="font-mono text-xs text-text-muted mb-4">
        <span className="text-accent-violet font-medium">{totalContributions}</span> active days in the last 16 weeks
      </p>

      {/* Contribution grid */}
      <div className="flex gap-1 overflow-x-auto pb-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: wi * 0.02 + di * 0.005,
                  duration: 0.2,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                title={`${day.date}: ${day.count} sessions`}
                className={`w-2.5 h-2.5 rounded-sm ${getActivityColor(day.count)} cursor-pointer`}
                whileHover={{ scale: 1.5 }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-3">
        <span className="font-mono text-[10px] text-text-muted">Less</span>
        {["bg-bg-elevated", "bg-accent-cyan/20", "bg-accent-cyan/50", "bg-accent-cyan/75", "bg-accent-cyan"].map((c) => (
          <div key={c} className={`w-2.5 h-2.5 rounded-sm ${c}`} />
        ))}
        <span className="font-mono text-[10px] text-text-muted">More</span>
      </div>
    </BentoTile>
  );
}
