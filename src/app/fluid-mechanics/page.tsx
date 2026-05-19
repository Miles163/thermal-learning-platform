import { Wind, BookOpen, ChevronRight, Droplets, Waves } from "lucide-react";
import Link from "next/link";

const chapters = [
  {
    slug: "basics",
    title: "第一章 流体基本概念与静力学",
    subtitle: "Fluid Basics & Hydrostatics",
    icon: Droplets,
    color: "text-accent-cyan",
    desc: "学习流体的基本物理性质、连续介质假设、流体静力学方程，为后续动力学打下基础。",
    topics: ["密度与粘度", "连续介质假设", "流体静力学", "帕斯卡原理", "浮力"],
    formula: "P = P₀ + ρgh",
  },
  {
    slug: "dynamics",
    title: "第二章 流体动力学",
    subtitle: "Fluid Dynamics",
    icon: Waves,
    color: "text-accent-teal",
    desc: "掌握连续性方程、伯努利方程、动量方程，理解层流与湍流、管内流动的压降计算。",
    topics: ["连续性方程", "伯努利方程", "N-S 方程", "雷诺数", "沿程损失"],
    formula: "P + ½ρv² + ρgh = const",
  },
];

export default function FluidMechanicsHub() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          流体力学
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">流体力学基础</h1>
        <p className="text-gray-400 text-lg">
          流体力学（Fluid Mechanics）研究流体运动规律及其与固体的相互作用，是风冷/液冷设计和 CFD 仿真的理论基础。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <Link
              key={ch.slug}
              href={`/fluid-mechanics/${ch.slug}`}
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
