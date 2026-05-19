import { Thermometer, ChevronRight, BookOpen, Target, Activity, Repeat } from "lucide-react";
import Link from "next/link";

const chapters = [
  {
    slug: "first-law",
    title: "第一章 热力学第一定律",
    subtitle: "First Law of Thermodynamics",
    icon: Target,
    color: "text-accent-cyan",
    desc: "能量守恒定律在热力学中的表达，理解内能、热量、功的关系，掌握各种热力过程的能量分析。",
    topics: ["内能与焓", "能量守恒", "稳定流动", "比热容 cv/cp", "热力过程"],
    formula: "ΔU = Q - W",
  },
  {
    slug: "second-law",
    title: "第二章 热力学第二定律",
    subtitle: "Second Law of Thermodynamics",
    icon: Activity,
    color: "text-accent-amber",
    desc: "理解自然过程的方向性，学习熵的概念和熵增原理，掌握卡诺循环和热效率计算方法。",
    topics: ["卡诺循环", "熵与熵增", "热效率", "可逆过程", "可用能"],
    formula: "η = 1 - T₂/T₁",
  },
  {
    slug: "cycles",
    title: "第三章 热力循环",
    subtitle: "Thermodynamic Cycles",
    icon: Repeat,
    color: "text-accent-green",
    desc: "深入学习朗肯循环、布雷顿循环和制冷循环，掌握工业热力系统的分析方法。",
    topics: ["朗肯循环", "布雷顿循环", "制冷循环", "COP", "热电联产"],
    formula: "COP = Q₂ / W",
  },
];

export default function ThermodynamicsHub() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          热力学
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">热力学基础</h1>
        <p className="text-gray-400 text-lg">
          热力学（Thermodynamics）研究能量转换、传递和储存的宏观规律，是热设计的根本理论基础。
          热力学定律决定了所有热过程的能量关系和方向性。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <Link
              key={ch.slug}
              href={`/thermodynamics/${ch.slug}`}
              className="group block"
            >
              <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 hover:border-accent-cyan/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${ch.color.replace("text", "bg")}/10 flex items-center justify-center ${ch.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h2 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {ch.title}
                      </h2>
                      <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-accent-cyan transition-colors shrink-0" />
                    </div>
                    <div className="text-xs text-gray-500 font-mono mb-2">{ch.subtitle}</div>
                    <p className="text-sm text-gray-400 mb-3">{ch.desc}</p>
                    <div className="bg-tech-900/70 rounded-lg px-3 py-2 mb-3 inline-block">
                      <span className="text-sm font-mono text-accent-cyan">{ch.formula}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {ch.topics.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-tech-600/30 text-gray-400 border border-tech-500/20">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
