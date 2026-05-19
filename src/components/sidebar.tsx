"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Flame,
  Thermometer,
  Waves,
  Wind,
  Cpu,
  Briefcase,
  BookOpen,
  GraduationCap,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "首页", icon: Flame },
  { href: "/thermodynamics", label: "热力学", icon: Thermometer },
  { href: "/heat-transfer", label: "传热学", icon: Waves },
  { href: "/fluid-mechanics", label: "流体力学", icon: Wind },
  { href: "/cfd", label: "CFD 专区", icon: Cpu },
  { href: "/cases", label: "工程案例", icon: Briefcase },
  { href: "/interview", label: "面试专区", icon: BookOpen },
  { href: "/exam", label: "机考专区", icon: GraduationCap },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-tech-800 border-r border-tech-600/30 transition-all duration-300 z-50 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center gap-3 px-4 h-16 border-b border-tech-600/30 shrink-0">
        <Flame className="w-7 h-7 text-accent-cyan shrink-0" />
        {!collapsed && (
          <span className="font-bold text-lg text-white whitespace-nowrap">
            ThermaLearn
          </span>
        )}
      </div>

      <nav className="flex-1 py-4 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-accent-cyan/10 text-accent-cyan border-l-2 border-accent-cyan"
                  : "text-gray-400 hover:text-white hover:bg-tech-600/50 border-l-2 border-transparent"
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center h-12 border-t border-tech-600/30 text-gray-500 hover:text-white transition-colors shrink-0"
      >
        {collapsed ? <PanelLeft className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
      </button>
    </aside>
  );
}
