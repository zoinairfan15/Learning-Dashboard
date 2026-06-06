"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  meshClass?: string;
  glowColor?: string;
}

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function BentoTile({
  children,
  className,
  meshClass = "card-mesh",
  glowColor = "rgba(0,229,255,0.15)",
}: BentoTileProps) {
  return (
    <motion.article
      variants={tileVariants}
      whileHover={{
        scale: 1.012,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-bg-border bg-bg-card noise-overlay",
        meshClass,
        className
      )}
      style={
        {
          "--glow-color": glowColor,
        } as React.CSSProperties
      }
    >
      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, var(--glow-color, rgba(0,229,255,0.15)), transparent 60%)`,
          boxShadow: `inset 0 0 0 1px var(--glow-color, rgba(0,229,255,0.15))`,
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </motion.article>
  );
}
