import { Cpu, BookOpen, ChevronRight, BookText, Monitor, Grid3X3 } from "lucide-react";
import Link from "next/link";

const chapters = [
  {
    slug: "theory",
    title: "第一章 CFD 理论基础",
    subtitle: "CFD Theory",
    icon: BookText,
    color: "text-accent-cyan",
    desc: "学习 CFD 的控制方程、离散化方法、求解算法和收敛判断标准，建立仿真理论基础。",
    topics: ["控制方程", "有限体积法", "SIMPLE 算法", "离散化", "收敛判断"],
    formula: "连续性 + 动量 + 能量",
  },
  {
    slug: "fluent-tutorial",
    title: "第二章 Fluent 仿真实操",
    subtitle: "Fluent Tutorial",
    icon: Monitor,
    color: "text-accent-teal",
    desc: "从几何建模到后处理的完整 Fluent 仿真流程，包含一个完整的 CPU 散热器风冷仿真案例。",
    topics: ["几何建模", "网格划分", "边界条件", "求解设置", "后处理"],
    formula: "CPU 散热仿真",
  },
  {
    slug: "meshing",
    title: "第三章 网格划分技术",
    subtitle: "Meshing",
    icon: Grid3X3,
    color: "text-accent-amber",
    desc: "掌握网格质量评价指标、边界层网格、网格独立性验证等核心技术，确保仿真精度。",
    topics: ["网格质量", "正交性", "Y+ 值", "边界层网格", "独立性验证"],
    formula: "Skewness < 0.9",
  },
];

export default function CFDHub() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-accent-teal font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          CFD 专区
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">CFD 仿真专区</h1>
        <p className="text-gray-400 text-lg">
          计算流体力学（CFD）是热设计工程师的核心技能。通过数值仿真预测温度场、流场和热应力，指导产品散热设计。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <Link
              key={ch.slug}
              href={`/cfd/${ch.slug}`}
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
