import type { ActivityDay } from "@/types";

export function generateActivityData(): ActivityDay[] {
  const data: ActivityDay[] = [];
  const now = new Date();

  for (let i = 364; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(now.getDate() - i);
    const dateStr = date.toISOString().split("T")[0];

    // Weighted random: mostly 0, occasionally active
    const rand = Math.random();
    let count = 0;
    if (rand > 0.7) count = Math.floor(Math.random() * 3) + 1;
    if (rand > 0.88) count = Math.floor(Math.random() * 4) + 3;
    if (rand > 0.96) count = Math.floor(Math.random() * 3) + 7;

    data.push({ date: dateStr, count });
  }

  return data;
}

export function getActivityColor(count: number): string {
  if (count === 0) return "bg-bg-elevated";
  if (count <= 2) return "bg-accent-cyan/20";
  if (count <= 5) return "bg-accent-cyan/50";
  if (count <= 8) return "bg-accent-cyan/75";
  return "bg-accent-cyan";
}
