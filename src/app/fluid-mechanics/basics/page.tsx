import { Droplets, BookOpen, ChevronRight, AlertCircle, Lightbulb, Waves, Weight, Gauge } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function FluidBasicsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第三章 · 流体力学
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">流体基本概念与静力学</h1>
        <p className="text-gray-400 text-lg">
          流体力学是热设计的核心基础学科，本章从连续介质假设出发，系统讲解流体的物理性质、静力学基本方程和工程应用。
        </p>
      </div>

      <ChapterNav sections={[
        { id: "intro", label: "引言" },
        { id: "continuum", label: "连续介质" },
        { id: "properties", label: "物理性质" },
        { id: "newtonian", label: "牛顿流体" },
        { id: "hydrostatics", label: "静力学" },
        { id: "pascal", label: "帕斯卡原理" },
        { id: "buoyancy", label: "浮力" },
        { id: "exercises", label: "练习题" },
        { id: "advanced", label: "进阶内容" },
        { id: "next", label: "下一章" },
      ]} />

      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Droplets className="w-4 h-4" />
          </span>
          章节简介
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 leading-relaxed mb-4">
            流体力学（Fluid Mechanics）是研究流体在外力作用下平衡与运动规律的学科。在热设计领域，
            流体力学与传热学密不可分——无论是风冷散热器的气流组织、液冷系统的流道设计，还是热管内部的两相流动，
            都离不开流体力学的基本原理。
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            本章集中讲解流体最核心的基础概念和静力学部分。流体静力学虽然看似简单，但在工程中有着广泛应用：
            从水冷系统的泵入口压力计算，到水箱安装高度的确定，再到大气压对散热器性能的影响，都需要用到静力学知识。
          </p>
          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-accent-cyan mb-2">本章学习目标</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">• 理解连续介质假设的物理意义和适用条件</li>
              <li className="flex items-center gap-2">• 掌握流体的密度、粘度等关键物理参数</li>
              <li className="flex items-center gap-2">• 区分牛顿流体和非牛顿流体的本构关系</li>
              <li className="flex items-center gap-2">• 熟练运用流体静力学基本方程进行压力计算</li>
              <li className="flex items-center gap-2">• 理解帕斯卡原理和浮力定律在工程中的应用</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="continuum" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Waves className="w-4 h-4" />
          </span>
          连续介质假设
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 leading-relaxed mb-4">
            流体由大量分子组成，分子之间存在空隙，每个分子都在做无规则热运动。如果从微观角度研究每个分子的运动，
            问题将变得极为复杂且不必要。连续介质假设（Continuum Hypothesis）是流体力学最基本的假设：
            将流体视为由连续分布的质点组成的连续介质，忽略分子间隙，用宏观的密度、速度、压力等场变量来描述流体的运动状态。
          </p>
          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">连续介质假设的适用条件</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              连续介质假设成立的条件是：流体的特征长度 L 远大于分子平均自由程 λ，即 <span className="text-accent-cyan font-mono">Kn = λ / L &lt; 0.01</span>，
              其中 Kn 为克努森数（Knudsen Number）。在常规工程问题中（空气、水、油等），这一条件通常满足。
              但在稀薄气体（如高空飞行器）或微纳尺度流动中，连续介质假设不再适用。
            </p>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 140" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="30" y="20" width="140" height="100" rx="8" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                {[50, 70, 90, 110, 130].map((x, i) => (
                  [30, 50, 70, 90, 110].map((y, j) => (
                    <circle key={`${i}-${j}`} cx={x} cy={y + (i % 2) * 10} r="2" fill="#555" />
                  ))
                ))}
                <text x="100" y="138" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">分子尺度（离散）</text>

                <line x1="180" y1="70" x2="220" y2="70" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="200" y="60" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">↑ Kn 很小</text>

                <rect x="230" y="20" width="240" height="100" rx="8" stroke="#00d4ff" strokeWidth="1.5" fill="rgba(0,212,255,0.05)" />
                <rect x="250" y="35" width="200" height="70" rx="4" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 2" />
                <text x="350" y="65" textAnchor="middle" fill="#00d4ff" fontSize="12" fontFamily="monospace">连续介质</text>
                <text x="350" y="85" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">ρ(x, y, z, t)</text>
                <text x="350" y="105" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">V(x, y, z, t)</text>
                <text x="350" y="138" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">宏观尺度（连续）</text>
              </svg>
              <p className="text-xs text-gray-500 mt-2">图 3-1 连续介质假设示意：从左到右为从离散分子到连续介质</p>
            </div>
          </div>
        </div>
      </section>

      <section id="properties" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Weight className="w-4 h-4" />
          </span>
          流体的物理性质
        </h2>
        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">密度 ρ（Density）</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              密度是单位体积流体的质量，定义式为 <span className="text-accent-cyan font-mono">ρ = dm / dV</span>。
              在热设计中，流体的密度随温度变化，这一效应对自然对流的驱动力至关重要。
            </p>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-xs font-semibold text-accent-cyan">空气 (20°C)</div>
                <div className="text-sm font-bold text-white font-mono">1.204</div>
                <div className="text-[10px] text-gray-500">kg/m³</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-xs font-semibold text-accent-cyan">水 (20°C)</div>
                <div className="text-sm font-bold text-white font-mono">998.2</div>
                <div className="text-[10px] text-gray-500">kg/m³</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-xs font-semibold text-accent-cyan">变压器油</div>
                <div className="text-sm font-bold text-white font-mono">~870</div>
                <div className="text-[10px] text-gray-500">kg/m³</div>
              </div>
            </div>
            <div className="bg-tech-900/30 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-accent-amber mb-1">热设计中密度的影响</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                空气密度随温度升高而降低。在 60°C 时空气密度约为 1.06 kg/m³（相比 20°C 降低约 12%），
                这意味着高温环境下风扇提供的质量流量会下降，影响散热效果。液冷系统中，冷却液的密度决定了系统的静压载荷。
              </p>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">粘度 μ 与运动粘度 ν（Viscosity）</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              粘度是流体抵抗剪切变形的能力度量。牛顿内摩擦定律给出剪应力与速度梯度的关系：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">τ = μ · du/dy</div>
              <p className="text-gray-500 text-xs mt-1">牛顿内摩擦定律</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-cyan font-bold font-mono text-sm">μ</div>
                <div className="text-gray-500 text-xs">动力粘度 (Pa·s)</div>
                <div className="text-gray-600 text-[10px] font-mono">水: 1.002×10⁻³ (20°C)</div>
                <div className="text-gray-600 text-[10px] font-mono">空气: 1.825×10⁻⁵ (20°C)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-teal font-bold font-mono text-sm">ν = μ/ρ</div>
                <div className="text-gray-500 text-xs">运动粘度 (m²/s)</div>
                <div className="text-gray-600 text-[10px] font-mono">水: 1.004×10⁻⁶ (20°C)</div>
                <div className="text-gray-600 text-[10px] font-mono">空气: 1.516×10⁻⁵ (20°C)</div>
              </div>
            </div>
            <div className="bg-tech-900/30 rounded-lg p-3">
              <h4 className="text-xs font-semibold text-accent-amber mb-1">温度对粘度的影响</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                液体的粘度随温度升高而降低（如水的粘度在 60°C 时约为 20°C 时的 45%）；
                气体的粘度随温度升高而增大。这一特性在散热器的流动分析中必须考虑。
              </p>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">其他重要物理性质</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan">比热容 c<sub>p</sub></h4>
                <div className="text-gray-400 text-xs mt-1">单位质量流体温度升高 1K 所需热量 (J/(kg·K))</div>
                <div className="text-gray-500 text-[10px] mt-1 font-mono">空气: 1005 | 水: 4182</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal">导热系数 k</h4>
                <div className="text-gray-400 text-xs mt-1">流体的导热能力 (W/(m·K))</div>
                <div className="text-gray-500 text-[10px] mt-1 font-mono">空气: 0.0257 | 水: 0.598</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-amber">热膨胀系数 β</h4>
                <div className="text-gray-400 text-xs mt-1">温度变化引起体积变化 (1/K)</div>
                <div className="text-gray-500 text-[10px] mt-1 font-mono">空气: 3.43×10⁻³ | 水: 2.07×10⁻⁴</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="newtonian" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <Gauge className="w-4 h-4" />
          </span>
          牛顿流体与非牛顿流体
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            根据剪应力与剪切率的关系，流体可分为牛顿流体和非牛顿流体两大类。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">τ = μ · γ̇</div>
            <p className="text-gray-500 text-xs mt-1">牛顿流体：剪应力与剪切率呈线性关系</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">牛顿流体</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                剪应力与剪切率成正比，粘度 μ 为常数（与剪切率无关）。
                <span className="block mt-1 text-accent-green">包括：水、空气、大多数气体、低粘度油</span>
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-orange mb-2">非牛顿流体</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                剪应力与剪切率不成正比，表观粘度随剪切率变化。
                <span className="block mt-1 text-accent-amber">包括：导热膏（剪切稀化）、某些聚合物溶液</span>
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 450 200" className="w-full max-w-md mx-auto" fill="none">
                <rect x="40" y="10" width="370" height="160" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <line x1="60" y1="150" x2="420" y2="150" stroke="#555" strokeWidth="1" />
                <line x1="60" y1="150" x2="60" y2="30" stroke="#555" strokeWidth="1" />
                <text x="240" y="185" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">剪切率 γ̇ (s⁻¹)</text>
                <text x="20" y="90" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace" transform="rotate(-90,20,90)">τ (Pa)</text>

                <line x1="60" y1="130" x2="400" y2="60" stroke="#00d4ff" strokeWidth="2" />
                <text x="300" y="55" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">牛顿流体（线性）</text>

                <path d="M60 140 Q200 130 400 40" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                <text x="280" y="120" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">非牛顿（剪切稀化）</text>

                <path d="M60 120 Q200 100 400 80" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="2 3" />
                <text x="300" y="95" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">非牛顿（剪切增稠）</text>

                <text x="240" y="18" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 3-2 牛顿流体与非牛顿流体的流变曲线</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="hydrostatics" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Weight className="w-4 h-4" />
          </span>
          流体静力学基本方程
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            流体静力学研究静止流体中压力的分布规律。考虑重力场中静止流体内的一个微元体，
            沿竖直方向力的平衡可推导出静力学基本方程：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-2xl font-bold text-accent-cyan font-mono">P = P₀ + ρgh</div>
            <p className="text-gray-500 text-xs mt-1">流体静力学基本方程</p>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-3 text-center">
              <div className="text-accent-cyan font-bold font-mono">P</div>
              <div className="text-gray-500 text-xs">深度 h 处的压力 (Pa)</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-3 text-center">
              <div className="text-accent-amber font-bold font-mono">P₀</div>
              <div className="text-gray-500 text-xs">自由表面压力 (Pa)</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-3 text-center">
              <div className="text-accent-teal font-bold font-mono">ρgh</div>
              <div className="text-gray-500 text-xs">静压增量 (Pa)</div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">推导过程</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              考虑静止流体中一个高度为 dz、截面积为 dA 的微元柱体。在竖直方向（z 轴向上为正），
              流体受到三个力的作用：顶面压力 P(z+dz)·dA（向下）、底面压力 P(z)·dA（向上）、
              微元体自身重力 ρg·dA·dz（向下）。力平衡条件为：
            </p>
            <div className="text-center mt-2">
              <div className="text-accent-cyan font-mono text-sm">P(z)·dA - P(z+dz)·dA - ρg·dA·dz = 0</div>
              <div className="text-accent-cyan font-mono text-sm mt-1">dP/dz = -ρg</div>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              积分得到 <span className="text-accent-cyan font-mono">P = P₀ - ρgz</span>，若取 z 正向向上，
              以自由表面为 z=0，则深度 h 处（z = -h）的压力为 <span className="text-accent-cyan font-mono">P = P₀ + ρgh</span>。
            </p>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 400 200" className="w-full max-w-sm mx-auto" fill="none">
                <rect x="40" y="10" width="320" height="170" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <line x1="60" y1="30" x2="340" y2="30" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="200" y="25" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">自由表面 P₀</text>
                <line x1="60" y1="100" x2="340" y2="100" stroke="#555" strokeWidth="1" strokeDasharray="2 2" />
                <text x="350" y="104" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">h</text>
                <line x1="130" y1="30" x2="130" y2="100" stroke="#f59e0b" strokeWidth="1.5" />
                <polygon points="127,65 133,65 130,70" fill="#f59e0b" />
                <polygon points="127,65 133,65 130,60" fill="#f59e0b" />
                <line x1="60" y1="160" x2="340" y2="160" stroke="#00d4ff" strokeWidth="1.5" />
                <text x="200" y="155" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">P = P₀ + ρgh</text>
                <rect x="140" y="80" width="120" height="60" rx="3" fill="rgba(0,212,255,0.05)" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 2" />
                <text x="200" y="115" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">深度 h</text>
                <text x="200" y="175" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 3-3 静水压力分布示意</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="pascal" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Gauge className="w-4 h-4" />
          </span>
          帕斯卡原理
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            帕斯卡原理（Pascal&apos;s Principle）：施加在静止流体上的压力将以等值传递到流体的各个部分。
            这是液压系统的工作原理基础。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-xl font-bold text-accent-cyan font-mono">F₁ / A₁ = F₂ / A₂</div>
            <p className="text-gray-500 text-xs mt-1">帕斯卡原理——压力等值传递</p>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">工程意义</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              在液冷系统中，泵产生的压力通过冷却液等值传递到系统的每个角落。这意味着系统中最薄弱的环节
              （如软管接头、密封圈）必须能够承受泵的额定压力。液冷系统中的静压也决定了泵的扬程需求：
              如果冷板位于泵上方 50cm 处，则需额外克服 ρgh = 998 × 9.81 × 0.5 ≈ 4895 Pa 的静压。
            </p>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 400 140" className="w-full max-w-md mx-auto" fill="none">
                <rect x="50" y="20" width="80" height="60" rx="3" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.5" />
                <text x="90" y="55" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">A₁</text>
                <rect x="270" y="40" width="100" height="40" rx="3" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1.5" />
                <text x="320" y="65" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">A₂</text>
                <line x1="130" y1="45" x2="270" y2="55" stroke="#555" strokeWidth="1.5" />
                <line x1="130" y1="55" x2="270" y2="65" stroke="#555" strokeWidth="1.5" />
                <rect x="55" y="10" width="70" height="10" rx="2" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
                <text x="90" y="18" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">F₁</text>
                <rect x="275" y="30" width="90" height="10" rx="2" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
                <text x="320" y="38" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">F₂</text>
                <text x="200" y="95" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">管道连接</text>
                <text x="200" y="120" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">F₂ = (A₂/A₁) · F₁</text>
                <text x="200" y="135" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">图 3-4 帕斯卡原理示意：液压千斤顶原理</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="buoyancy" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Waves className="w-4 h-4" />
          </span>
          浮力与阿基米德定律
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            阿基米德定律（Archimedes&apos; Principle）：浸没在流体中的物体所受的浮力等于被排开流体的重力。
            浮力来源于物体上下表面静压力的不对称分布。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-xl font-bold text-accent-cyan font-mono">F<sub>b</sub> = ρ<sub>f</sub>gV</div>
            <p className="text-gray-500 text-xs mt-1">阿基米德定律</p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-3">
              <div className="text-accent-cyan font-bold font-mono text-sm">ρ<sub>f</sub></div>
              <div className="text-gray-500 text-xs">流体密度 (kg/m³)</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-3">
              <div className="text-accent-amber font-bold font-mono text-sm">V</div>
              <div className="text-gray-500 text-xs">排开流体体积 (m³)</div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">热设计中的应用</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              热管和均温板内部的工质循环依赖于毛细力和重力/浮力的平衡。在环路热管中，
              蒸发器和冷凝器的相对高度差产生的浮力（重力）差是驱动工质循环的重要动力之一。
              在相变散热器中，气泡在液体中上升的速度也受浮力支配。
            </p>
          </div>
        </div>
      </section>

      <section id="exercises" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Lightbulb className="w-4 h-4" />
          </span>
          练习题
        </h2>
        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">1</span>
              <h3 className="text-base font-semibold text-white">水冷系统静压计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某水冷散热系统的冷板位于水箱液面下方 0.8m 处，水箱顶部与大气连通（大气压 101325 Pa）。
              水温为 40°C（此时 ρ = 992 kg/m³），求冷板入口处的绝对压力和表压力。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  绝对压力：<span className="text-accent-cyan font-mono">P_abs = P₀ + ρgh = 101325 + 992 × 9.81 × 0.8</span><br />
                  <span className="text-accent-cyan font-mono">= 101325 + 7786 = 109111 Pa</span><br />
                  表压力（相对于大气压）：<span className="text-accent-cyan font-mono">P_gauge = ρgh = 7786 Pa</span><br />
                  约 <span className="text-accent-green font-bold">7.8 kPa</span>（相当于 0.08 个大气压）。<br />
                  <span className="text-gray-500 text-xs">对于液冷系统，需要确保水泵的扬程能够克服整个回路的沿程损失加上此静压差。</span>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">水箱高度设计</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某液冷系统要求泵的入口绝对压力不低于 110 kPa 以防止气蚀。水箱与大气连通，
              冷却液密度为 1050 kg/m³（防冻液），大气压为 101.3 kPa。计算水箱液面至少应高出泵入口多少米？
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  由 <span className="text-accent-cyan font-mono">P = P₀ + ρgh</span> 求 h：<br />
                  <span className="text-accent-cyan font-mono">ρgh = P - P₀ = 110000 - 101300 = 8700 Pa</span><br />
                  <span className="text-accent-cyan font-mono">h = 8700 / (1050 × 9.81) = 0.845 m</span><br />
                  水箱液面至少应高出泵入口 <span className="text-accent-green font-bold">0.85 m</span>。<br />
                  <span className="text-gray-500 text-xs">实际设计中还需考虑管路阻力和安全余量，通常取 1.0 m 以上。</span>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">粘度换算与流态判断</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              空气在 20°C 时 μ = 1.825×10⁻⁵ Pa·s，ρ = 1.204 kg/m³；水在 20°C 时 μ = 1.002×10⁻³ Pa·s。
              分别计算空气和水的运动粘度 ν。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  运动粘度 <span className="text-accent-cyan font-mono">ν = μ / ρ</span><br />
                  空气：<span className="text-accent-cyan font-mono">ν = 1.825×10⁻⁵ / 1.204 = 1.516×10⁻⁵ m²/s</span><br />
                  水：<span className="text-accent-cyan font-mono">ν = 1.002×10⁻³ / 998.2 = 1.004×10⁻⁶ m²/s</span><br />
                  空气的运动粘度约是水的 <span className="text-accent-green font-bold">15 倍</span>。<br />
                  <span className="text-gray-500 text-xs">这意味着在相同特征尺寸和流速下，空气的雷诺数较小，更容易处于层流状态。</span>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">液压系统帕斯卡原理</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个液压系统中，小活塞面积 A₁ = 5 cm²，大活塞面积 A₂ = 200 cm²。
              需要在大活塞端产生 5000 N 的力来压紧散热器，求小活塞端需施加多大的力？
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  帕斯卡原理 <span className="text-accent-cyan font-mono">F₁/A₁ = F₂/A₂</span><br />
                  <span className="text-accent-cyan font-mono">F₁ = F₂ × (A₁/A₂) = 5000 × (5/200)</span><br />
                  <span className="text-accent-cyan font-mono">= 5000 × 0.025 = 125 N</span><br />
                  仅需施加 <span className="text-accent-green font-bold">125 N</span> 的力即可产生 5000 N 的输出。<br />
                  <span className="text-gray-500 text-xs">这就是液压系统实现力放大的基本原理，放大倍数为 A₂/A₁ = 40 倍。</span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="advanced" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <AlertCircle className="w-4 h-4" />
          </span>
          进阶内容：非牛顿流体在热管理中的应用
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            非牛顿流体在热设计中有着重要应用。最常见的是导热界面材料（TIM, Thermal Interface Material），
            如导热硅脂、导热凝胶等。这些材料通常为剪切稀化流体（假塑性流体）：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">τ = K · γ̇ⁿ</div>
            <p className="text-gray-500 text-xs mt-1">幂律模型：n &lt; 1 为剪切稀化，n &gt; 1 为剪切增稠</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">导热硅脂</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                在涂抹过程中受到剪切作用而变稀薄，便于均匀涂布；
                静止后恢复较高粘度，不易从界面流出。导热系数通常为 2-10 W/(m·K)。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">相变材料（PCM）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                在固态时为非牛顿体，达到相变温度后粘度急剧下降，填充界面微隙，
                提高接触热导率。典型相变温度 45-60°C。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">非牛顿流体粘度模型</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              常用非牛顿流体模型包括：幂律模型（Power-law）、宾汉模型（Bingham）、
              卡森模型（Casson）等。在 CFD 仿真中，Fluent 提供多种非牛顿流体模型供用户选择，
              对导热硅脂的涂布过程进行模拟优化。
            </p>
          </div>
        </div>
      </section>

      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-cyan/5 to-accent-teal/5 border border-accent-cyan/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-cyan font-mono mb-1">下一章</div>
              <h3 className="text-xl font-bold text-white">流体动力学</h3>
              <p className="text-gray-400 text-sm mt-1">学习连续性方程、伯努利方程、管内流动与风道设计</p>
            </div>
            <Link
              href="/fluid-mechanics/dynamics"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan text-black font-semibold text-sm hover:bg-accent-cyan/90 transition-all"
            >
              开始学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
