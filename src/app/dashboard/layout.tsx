"use client";

import { useState } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import MobileNav from "@/components/sidebar/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-bg-base">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      </div>

      {/* Main content */}
      <main
        className={`flex-1 overflow-y-auto transition-all duration-300 pb-20 md:pb-0 ${
          collapsed ? "md:ml-0" : "md:ml-0"
        }`}
      >
        {children}
      </main>

      {/* Mobile bottom nav */}
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
