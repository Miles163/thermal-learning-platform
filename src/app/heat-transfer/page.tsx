import { Zap, ChevronRight, BookOpen, Thermometer, Waves, Sun } from "lucide-react";
import Link from "next/link";

const chapters = [
  {
    slug: "conduction",
    title: "第一章 导热",
    subtitle: "Heat Conduction",
    icon: Thermometer,
    color: "text-accent-orange",
    desc: "学习导热的基本定律——傅里叶定律，掌握一维稳态导热、热阻网络分析、多层壁导热等核心内容。",
    topics: ["傅里叶定律推导", "导热系数与材料", "一维稳态导热", "热阻网络", "接触热阻"],
    formula: "Q = -kA · dT/dx",
  },
  {
    slug: "convection",
    title: "第二章 对流传热",
    subtitle: "Convection",
    icon: Waves,
    color: "text-accent-cyan",
    desc: "深入理解对流传热机理，掌握牛顿冷却定律、边界层理论、自然对流与强制对流的分析方法。",
    topics: ["牛顿冷却定律", "边界层理论", "自然对流", "强制对流", "无量纲数 Nu/Re/Pr"],
    formula: "Q = hA · ΔT",
  },
  {
    slug: "radiation",
    title: "第三章 热辐射",
    subtitle: "Thermal Radiation",
    icon: Sun,
    color: "text-accent-red",
    desc: "学习热辐射的基本规律，包括黑体辐射、斯特藩-玻尔兹曼定律、辐射换热网络分析法。",
    topics: ["黑体辐射", "斯特藩-玻尔兹曼定律", "发射率与灰体", "辐射网络", "太阳辐射"],
    formula: "Q = εσAT⁴",
  },
];

export default function HeatTransferHub() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-accent-orange font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          传热学
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">传热学基础</h1>
        <p className="text-gray-400 text-lg">
          传热学（Heat Transfer）是研究热量传递规律的学科，是热设计工程师最核心的理论基础。
          它研究由温差引起的热量传递过程，包括三种基本方式：导热、对流传热和热辐射。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          return (
            <Link
              key={ch.slug}
              href={`/heat-transfer/${ch.slug}`}
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
