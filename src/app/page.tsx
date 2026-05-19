import {
  Thermometer,
  BookOpen,
  Cpu,
  Briefcase,
  GraduationCap,
  Target,
  ArrowRight,
  Zap,
  Trophy,
} from "lucide-react";
import { RoadmapCard } from "@/components/roadmap-card";
import Link from "next/link";

const roadmapSteps = [
  {
    step: "01",
    title: "基础理论",
    description: "掌握传热学、热力学、流体力学三大基础学科，建立扎实的理论根基。",
    icon: <BookOpen className="w-6 h-6" />,
    skills: ["传热学", "热力学", "流体力学", "数学基础"],
  },
  {
    step: "02",
    title: "CFD 仿真入门",
    description: "学习计算流体力学基础，掌握 Fluent 和 Icepak 等主流仿真工具。",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["CFD 理论", "Fluent", "Icepak", "网格划分", "后处理"],
  },
  {
    step: "03",
    title: "工程案例实战",
    description: "通过真实工程案例掌握散热设计方法，包括 GPU、手机、服务器等场景。",
    icon: <Briefcase className="w-6 h-6" />,
    skills: ["GPU 散热", "手机散热", "液冷设计", "PCB 热设计", "风冷设计"],
  },
  {
    step: "04",
    title: "面试与机考准备",
    description: "针对热设计工程师面试和机考进行专项训练，包含高频题和模拟测试。",
    icon: <Target className="w-6 h-6" />,
    skills: ["面试八股", "热阻计算", "风量计算", "热功耗分析"],
  },
  {
    step: "05",
    title: "求职与职业发展",
    description: "优化简历、模拟面试，最终拿到热设计工程师 Offer。",
    icon: <Trophy className="w-6 h-6" />,
    skills: ["简历优化", "模拟面试", "求职策略"],
  },
];

const quickLinks = [
  { href: "/thermodynamics", label: "热力学", icon: Thermometer, color: "text-accent-red" },
  { href: "/heat-transfer", label: "传热学", icon: Zap, color: "text-accent-orange" },
  { href: "/fluid-mechanics", label: "流体力学", icon: Waves, color: "text-accent-cyan" },
  { href: "/cfd", label: "CFD 专区", icon: Cpu, color: "text-accent-teal" },
  { href: "/interview", label: "面试专区", icon: BookOpen, color: "text-accent-amber" },
  { href: "/exam", label: "机考专区", icon: GraduationCap, color: "text-accent-green" },
];

function Waves(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M2 12c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0" />
      <path d="M2 17c2.5-2.5 5.5-2.5 8 0s5.5 2.5 8 0" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="text-center py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-cyan/5 to-transparent pointer-events-none rounded-3xl" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-mono mb-6">
            <Zap className="w-4 h-4" />
            Thermal Design Engineer
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            热设计工程师
            <span className="block text-accent-cyan thermal-glow-text">成长学习平台</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            从零开始学习热设计，掌握传热、流体、CFD 仿真核心技能
            <br />
            成为专业的热设计工程师
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/thermodynamics"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-cyan text-black font-semibold hover:bg-accent-cyan/90 transition-all"
            >
              开始学习 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-tech-500/50 text-gray-300 hover:text-white hover:border-accent-cyan/50 transition-all"
            >
              查看路线
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {quickLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3 px-4 py-4 rounded-xl bg-tech-800/50 border border-tech-600/30 hover:border-accent-cyan/30 transition-all"
            >
              <Icon className={`w-5 h-5 ${link.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                {link.label}
              </span>
              <ArrowRight className="w-4 h-4 ml-auto text-gray-600 group-hover:text-accent-cyan transition-colors" />
            </Link>
          );
        })}
      </div>

      {/* Roadmap */}
      <section id="roadmap" className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">学习成长路线</h2>
          <p className="text-gray-400">从零基础到热设计工程师的完整路径</p>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-accent-cyan via-accent-teal to-accent-amber hidden md:block" />
          <div className="space-y-8">
            {roadmapSteps.map((step, i) => (
              <RoadmapCard key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { value: "12+", label: "核心课程" },
          { value: "50+", label: "工程案例" },
          { value: "100+", label: "面试题目" },
          { value: "5", label: "成长阶段" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-6 rounded-xl bg-tech-800/30 border border-tech-600/20"
          >
            <div className="text-3xl font-bold text-accent-cyan mb-1">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
