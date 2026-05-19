import { Wind, BookOpen, ChevronRight, AlertCircle, Lightbulb, Target, Zap, Gauge } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function FluidDynamicsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第三章 · 第二节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">流体动力学</h1>
        <p className="text-gray-400 text-lg">
          研究流体在运动中的行为规律，从质量守恒到能量守恒，从层流到湍流，全面掌握流动分析的核心理论。
        </p>
      </div>

      <ChapterNav sections={[
        { id: "intro", label: "引言" },
        { id: "streamline", label: "流线与迹线" },
        { id: "continuity", label: "连续性方程" },
        { id: "bernoulli", label: "伯努利方程" },
        { id: "momentum", label: "动量方程" },
        { id: "ns", label: "N-S 方程" },
        { id: "reynolds", label: "雷诺数" },
        { id: "pipeflow", label: "管内流动" },
        { id: "exercises", label: "练习题" },
        { id: "advanced", label: "进阶内容" },
        { id: "next", label: "下一章" },
      ]} />

      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Wind className="w-4 h-4" />
          </span>
          章节简介
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 leading-relaxed mb-4">
            流体动力学（Fluid Dynamics）研究流体在力的作用下的运动规律，是风冷散热器设计、液冷系统优化和风道设计的核心理论基础。
            本章从最基本的守恒定律出发，逐步构建从理想流动到真实粘性流动的完整理论体系。
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            学习本章后，你将能够独立进行简单风道系统的压降估算、泵和风扇的选型计算，
            并为后续学习 CFD 仿真打下坚实的理论基础。
          </p>
          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-accent-cyan mb-2">本章学习目标</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">• 理解连续性方程和伯努利方程的推导与物理意义</li>
              <li className="flex items-center gap-2">• 掌握雷诺数的物理含义和流态判断方法</li>
              <li className="flex items-center gap-2">• 熟练运用达西-魏斯巴赫公式计算管路压降</li>
              <li className="flex items-center gap-2">• 了解 N-S 方程的基本形式</li>
              <li className="flex items-center gap-2">• 能够进行风道和泵/风扇的初步选型计算</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="streamline" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Target className="w-4 h-4" />
          </span>
          流线与迹线
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">流线</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                某一瞬时，流场中所有质点的速度方向都与该曲线相切。流线不能相交（除非在驻点）。
                常用于可视化流动方向。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">迹线</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                某一流体质点在运动过程中经过的空间路径。与时间有关。
                在稳态流动中，流线和迹线完全重合。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 450 120" className="w-full max-w-lg mx-auto" fill="none">
                <rect x="10" y="10" width="430" height="100" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <path d="M30 60 Q100 40 200 55 Q300 70 400 50" stroke="#00d4ff" strokeWidth="2" fill="none" />
                {[60, 130, 200, 270, 340].map((x) => (
                  <polygon key={x} points={`${x},${55 + 15 * Math.sin(x/50)}`} fill="none" />
                ))}
                <path d="M30 60 Q100 25 200 50 Q300 75 400 45" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                <path d="M30 60 Q100 55 200 60 Q300 65 400 55" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" fill="none" />
                {[80, 150, 220, 290, 360].map((x) => (
                  <circle key={x} cx={x} cy={50 + 10 * Math.sin(x/40)} r="2" fill="#ef4444" />
                ))}
                <text x="225" y="95" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 3-5 流线示意图（管道中的流动）</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="continuity" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Zap className="w-4 h-4" />
          </span>
          连续性方程（质量守恒）
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            连续性方程是质量守恒定律在流体力学中的具体形式。对于控制体，单位时间内进入控制体的质量
            等于控制体内质量的变化率加上流出控制体的质量。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-xl font-bold text-accent-cyan font-mono">∂ρ/∂t + ∇·(ρV) = 0</div>
            <p className="text-gray-500 text-xs mt-1">连续性方程（通用形式）</p>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">推导过程</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              考虑一个固定的无限小控制体，尺寸为 dx × dy × dz。在 x 方向：
            </p>
            <div className="text-center mb-2">
              <div className="text-accent-cyan font-mono text-sm">
                流入质量：ρu·dy·dz
              </div>
              <div className="text-accent-cyan font-mono text-sm">
                流出质量：(ρu + ∂(ρu)/∂x · dx)·dy·dz
              </div>
              <div className="text-accent-cyan font-mono text-sm">
                净流出：∂(ρu)/∂x · dx·dy·dz
              </div>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              三个方向求和，根据质量守恒（净流出 = 质量减少率）：
            </p>
            <div className="text-center mt-1">
              <div className="text-accent-cyan font-mono text-sm">
                ∂(ρu)/∂x + ∂(ρv)/∂y + ∂(ρw)/∂z = -∂ρ/∂t
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">稳态不可压形式</h4>
              <div className="text-accent-cyan font-mono text-lg text-center">∇·V = 0</div>
              <p className="text-gray-500 text-xs mt-1 text-center">即 u₁A₁ = u₂A₂</p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">稳态可压形式</h4>
              <div className="text-accent-teal font-mono text-lg text-center">ρ₁u₁A₁ = ρ₂u₂A₂</div>
              <p className="text-gray-500 text-xs mt-1 text-center">质量流量守恒</p>
            </div>
          </div>
        </div>
      </section>

      <section id="bernoulli" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Gauge className="w-4 h-4" />
          </span>
          伯努利方程
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            伯努利方程是流体力学中最重要也是应用最广泛的方程之一。它由欧拉方程沿流线积分得到，
            描述了理想流体沿流线的能量守恒关系。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-2xl font-bold text-accent-cyan font-mono">P + ½ρV² + ρgh = 常数</div>
            <p className="text-gray-500 text-xs mt-1">伯努利方程（沿流线）</p>
          </div>

          <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">从欧拉方程到伯努利方程的推导</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              欧拉方程（无粘流体的运动方程）在流线切线方向的投影为：
            </p>
            <div className="text-center mb-2">
              <div className="text-accent-cyan font-mono text-sm">
                ∂V/∂t · ds + V·dV + dP/ρ + g·dz = 0
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              对于稳态流动（∂V/∂t = 0），沿流线积分：
            </p>
            <div className="text-center">
              <div className="text-accent-cyan font-mono text-sm">
                ∫ V·dV + ∫ dP/ρ + ∫ g·dz = 常数
              </div>
              <div className="text-accent-cyan font-mono text-sm mt-1">
                V²/2 + P/ρ + gz = 常数
              </div>
              <div className="text-accent-cyan font-mono text-sm mt-1">
                → P + ½ρV² + ρgh = 常数
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-3 text-center">
              <div className="text-accent-cyan font-bold font-mono">P</div>
              <div className="text-gray-500 text-xs">静压 (Pa)</div>
              <div className="text-gray-600 text-[10px]">压力势能</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-3 text-center">
              <div className="text-accent-amber font-bold font-mono">½ρV²</div>
              <div className="text-gray-500 text-xs">动压 (Pa)</div>
              <div className="text-gray-600 text-[10px]">动能</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-3 text-center">
              <div className="text-accent-green font-bold font-mono">ρgh</div>
              <div className="text-gray-500 text-xs">位压 (Pa)</div>
              <div className="text-gray-600 text-[10px]">重力势能</div>
            </div>
          </div>

          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-accent-red mb-2">伯努利方程的限制条件</h4>
            <ul className="space-y-1 text-xs text-gray-400">
              <li className="flex items-center gap-2">• 理想流体（无粘性）</li>
              <li className="flex items-center gap-2">• 稳态流动</li>
              <li className="flex items-center gap-2">• 沿同一条流线</li>
              <li className="flex items-center gap-2">• 不可压缩流体（或可压缩但有特定条件）</li>
              <li className="flex items-center gap-2">• 无旋转（无旋流）</li>
            </ul>
          </div>

          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 160" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="480" height="140" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <path d="M40 40 L160 40 L200 100 L300 100 L340 40 L460 40" stroke="#00d4ff" strokeWidth="2" fill="rgba(0,212,255,0.05)" />
                <path d="M40 130 L160 130 L200 75 L300 75 L340 130 L460 130" stroke="#00d4ff" strokeWidth="2" fill="rgba(0,212,255,0.05)" />
                <line x1="200" y1="100" x2="200" y2="75" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="340" y1="40" x2="340" y2="130" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 2" />
                <text x="250" y="120" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">V₁, P₁（低速、高压）</text>
                <text x="250" y="30" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">V₂, P₂（高速、低压）</text>
                <text x="120" y="92" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">A₁</text>
                <text x="380" y="92" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">A₂ &lt; A₁</text>
                <text x="250" y="155" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 3-6 文丘里管：伯努利效应示意图（缩颈处流速增大、压力降低）</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="momentum" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Zap className="w-4 h-4" />
          </span>
          动量方程
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            流体动量方程是牛顿第二定律在流体力学中的应用。对于控制体，动量的变化率等于作用在控制体上的所有外力之和。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-xl font-bold text-accent-cyan font-mono">∑F = d/dt ∫<sub>CV</sub> ρV dV + ∫<sub>CS</sub> ρV(V·n) dA</div>
            <p className="text-gray-500 text-xs mt-1">动量方程（雷诺输运定理形式）</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">工程应用</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                动量方程可用于计算流体对管道弯头、阀门等部件的冲击力。
                在散热设计中，用于评估风道中气流对翅片的冲击力。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">稳态简化形式</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                对于稳态不可压流动：<br />
                <span className="text-accent-cyan font-mono">∑F = ρ∫<sub>CS</sub> V(V·n) dA</span><br />
                常用于计算管道作用力。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ns" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Target className="w-4 h-4" />
          </span>
          纳维-斯托克斯方程（N-S 方程）
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            纳维-斯托克斯方程是描述粘性流体运动的最基本方程，是 CFD 仿真的数学基础。
            它在欧拉方程的基础上增加了粘性项。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">ρ(∂V/∂t + V·∇V) = -∇P + μ∇²V + ρg</div>
            <p className="text-gray-500 text-xs mt-1">N-S 方程（不可压缩形式）</p>
          </div>
          <div className="grid grid-cols-4 gap-2 text-xs mb-4">
            <div className="bg-tech-900/50 rounded-lg p-2 text-center">
              <div className="text-accent-cyan font-bold">ρ·∂V/∂t</div>
              <div className="text-gray-500">非稳态项</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-2 text-center">
              <div className="text-accent-amber font-bold">ρV·∇V</div>
              <div className="text-gray-500">对流项</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-2 text-center">
              <div className="text-accent-green font-bold">-∇P</div>
              <div className="text-gray-500">压力梯度</div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-2 text-center">
              <div className="text-accent-red font-bold">μ∇²V</div>
              <div className="text-gray-500">扩散项</div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">N-S 方程的难点</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              N-S 方程是一个非线性偏微分方程组，只有在极少数简单情况下存在解析解。
              对流项 V·∇V 的非线性导致湍流的产生，使得问题极为复杂。
              这也正是为什么需要 CFD 数值方法来解决实际工程问题。
            </p>
          </div>
        </div>
      </section>

      <section id="reynolds" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Gauge className="w-4 h-4" />
          </span>
          雷诺数与流态
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            雷诺数（Reynolds Number）是流体力学中最重要的无量纲参数，表征惯性力与粘性力的比值，
            用于判断流体的流动状态是层流还是湍流。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-2xl font-bold text-accent-cyan font-mono">Re = ρVD / μ = VD / ν</div>
            <p className="text-gray-500 text-xs mt-1">雷诺数定义</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 text-center border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan">层流</h4>
              <div className="text-2xl font-bold text-white font-mono my-1">Re &lt; 2300</div>
              <p className="text-gray-500 text-xs">流体分层流动，无横向混合</p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 text-center border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber">过渡区</h4>
              <div className="text-2xl font-bold text-white font-mono my-1">2300 ~ 4000</div>
              <p className="text-gray-500 text-xs">流态不稳定</p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 text-center border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-red">湍流</h4>
              <div className="text-2xl font-bold text-white font-mono my-1">Re &gt; 4000</div>
              <p className="text-gray-500 text-xs">强烈混合，随机脉动</p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 100" className="w-full max-w-xl mx-auto" fill="none">
                <line x1="40" y1="50" x2="460" y2="50" stroke="#555" strokeWidth="1" />
                {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((x) => (
                  <line key={x} x1={x} y1="30" x2={x} y2="70" stroke={x < 150 ? "#00d4ff" : x < 250 ? "#f59e0b" : "#ef4444"} strokeWidth={x < 250 ? 1 : (Math.random() * 2 + 1)} opacity="0.6" />
                ))}
                <text x="100" y="20" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">层流</text>
                <text x="200" y="20" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">过渡</text>
                <text x="350" y="20" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">湍流</text>
                <text x="250" y="92" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 3-7 不同雷诺数下的流动状态</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="pipeflow" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Wind className="w-4 h-4" />
          </span>
          管内流动与压降计算
        </h2>
        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">达西-魏斯巴赫公式</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              达西-魏斯巴赫公式（Darcy-Weisbach Equation）是计算管内流动沿程损失的基本公式：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">ΔP<sub>f</sub> = f · (L/D) · (½ρV²)</div>
              <p className="text-gray-500 text-xs mt-1">达西-魏斯巴赫公式</p>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-cyan font-bold font-mono text-xs">f</div>
                <div className="text-gray-500 text-[10px]">达西摩擦因子</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-amber font-bold font-mono text-xs">L</div>
                <div className="text-gray-500 text-[10px]">管长 (m)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-green font-bold font-mono text-xs">D</div>
                <div className="text-gray-500 text-[10px]">水力直径 (m)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-red font-bold font-mono text-xs">½ρV²</div>
                <div className="text-gray-500 text-[10px]">动压 (Pa)</div>
              </div>
            </div>
            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-accent-amber mb-1">摩擦因子 f 的计算</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                层流（Re &lt; 2300）：<span className="text-accent-cyan font-mono">f = 64 / Re</span>（理论解）<br />
                湍流：使用科尔布鲁克公式（Colebrook Equation）或穆迪图（Moody Chart）查取。
              </p>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">局部损失</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              除沿程损失外，管道的弯头、阀门、三通、变径等局部构件也会引起额外的压力损失：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">ΔP<sub>m</sub> = K · (½ρV²)</div>
              <p className="text-gray-500 text-xs mt-1">局部损失公式</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "90° 弯头", k: "0.75 - 1.5" },
                { name: "三通（直流）", k: "0.5 - 1.0" },
                { name: "突扩", k: "(1 - A₁/A₂)²" },
                { name: "球阀全开", k: "≈ 10" },
              ].map((v) => (
                <div key={v.name} className="bg-tech-900/50 rounded-lg p-2 text-center border border-tech-600/20">
                  <div className="text-xs text-white">{v.name}</div>
                  <div className="text-[10px] text-accent-cyan font-mono">K = {v.k}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">工程案例：风冷散热器风道设计</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  设计一个风道连接风扇与散热器，风道长 0.4m，水力直径 0.05m，
                  风速 3 m/s，空气温度 40°C（ρ = 1.127 kg/m³，μ = 1.91×10⁻⁵ Pa·s）。
                  计算风道的沿程压降。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">计算过程</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Re = ρVD/μ = 1.127 × 3 × 0.05 / 1.91×10⁻⁵ = 8850 &gt; 4000（湍流）<br />
                  使用布拉修斯公式（Blasius）：f = 0.316 / Re^(1/4) = 0.316 / 8850^(0.25) = 0.0326<br />
                  ΔP_f = f·(L/D)·½ρV² = 0.0326 × (0.4/0.05) × 0.5 × 1.127 × 9<br />
                  = 0.0326 × 8 × 5.07 = <span className="text-accent-green font-bold">1.32 Pa</span>
                </p>
              </div>
            </div>
            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-accent-amber mb-1">风扇选型结论</h4>
              <p className="text-gray-500 text-xs leading-relaxed">
                风道压降 1.32 Pa，加上散热器翅片压降（通常 5-20 Pa）和局部损失，
                总系统压降约为 15-30 Pa。应选择工作点在 20 Pa 时风量 ≥ 所需风量的风扇。
                注意风扇的性能曲线与系统阻抗曲线的交点即为实际工作点。
              </p>
            </div>
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
              <h3 className="text-base font-semibold text-white">连续性方程应用</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              水在一根内径 D₁ = 0.05m 的管道中以 V₁ = 2 m/s 流动，后经渐缩段变为 D₂ = 0.025m。
              水为不可压缩流体，求缩颈处的流速 V₂。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  不可压缩稳态：<span className="text-accent-cyan font-mono">A₁V₁ = A₂V₂</span><br />
                  <span className="text-accent-cyan font-mono">V₂ = (A₁/A₂) · V₁ = (D₁²/D₂²) · V₁</span><br />
                  <span className="text-accent-cyan font-mono">= (0.05²/0.025²) × 2 = 4 × 2 = 8 m/s</span><br />
                  缩颈处流速增大至 <span className="text-accent-green font-bold">8 m/s</span>。<br />
                  <span className="text-gray-500 text-xs">这就是喷嘴加速流体的原理。</span>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">伯努利方程计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              风道中某点静压 P₁ = 100 Pa（表压），风速 V₁ = 2 m/s。
              气流经过一突扩段后速度降为 V₂ = 1 m/s。空气密度为 1.2 kg/m³。
              忽略损失，求突扩段后的静压 P₂。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  伯努利方程（忽略高度差）：<span className="text-accent-cyan font-mono">P₁ + ½ρV₁² = P₂ + ½ρV₂²</span><br />
                  <span className="text-accent-cyan font-mono">P₂ = P₁ + ½ρ(V₁² - V₂²)</span><br />
                  <span className="text-accent-cyan font-mono">= 100 + 0.5 × 1.2 × (4 - 1)</span><br />
                  <span className="text-accent-cyan font-mono">= 100 + 1.8 = 101.8 Pa</span><br />
                  静压增加了 <span className="text-accent-green font-bold">1.8 Pa</span>。<br />
                  <span className="text-gray-500 text-xs">速度减小、静压增大——这就是扩压器的原理。</span>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">雷诺数计算与流态判断</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              水流经一个直径为 0.01m 的微细通道，流速为 0.5 m/s。水在 40°C 时的运动粘度为 0.658×10⁻⁶ m²/s。
              判断该流动的流态。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  <span className="text-accent-cyan font-mono">Re = V·D / ν = 0.5 × 0.01 / (0.658×10⁻⁶)</span><br />
                  <span className="text-accent-cyan font-mono">= 0.005 / 6.58×10⁻⁷ = 7599</span><br />
                  Re = 7599 &gt; 4000，所以流动为 <span className="text-accent-red font-bold">湍流</span>。<br />
                  <span className="text-gray-500 text-xs">即使在微细通道中，如果流速足够大，仍然可能产生湍流。</span>
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">风道总压降计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某散热风道总长 1.2m，水力直径 0.06m，内有 3 个 90° 弯头（K = 1.2 每个）。
              风速 5 m/s，空气密度 1.2 kg/m³，运动粘度 1.6×10⁻⁵ m²/s。计算风道总压降。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  先计算 Re：<span className="text-accent-cyan font-mono">Re = VD/ν = 5 × 0.06 / 1.6×10⁻⁵ = 18750</span>（湍流）<br />
                  科尔布鲁克公式近似（光滑管）：<span className="text-accent-cyan font-mono">f = 0.316/Re^(1/4) = 0.316/18750^(0.25) = 0.027</span><br />
                  沿程损失：<span className="text-accent-cyan font-mono">ΔP_f = f·(L/D)·½ρV² = 0.027 × (1.2/0.06) × 0.5 × 1.2 × 25</span><br />
                  <span className="text-accent-cyan font-mono">= 0.027 × 20 × 15 = 8.1 Pa</span><br />
                  局部损失：<span className="text-accent-cyan font-mono">ΔP_m = 3 × K × ½ρV² = 3 × 1.2 × 15 = 54 Pa</span><br />
                  总压降：<span className="text-accent-cyan font-mono">8.1 + 54 = 62.1 Pa</span><br />
                  <span className="text-gray-500 text-xs">可见局部损失在总压降中占主导地位，设计时应尽量减少弯头。</span>
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
          进阶内容：湍流模型简介
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            在实际工程湍流中，无法直接求解 DNS（直接数值模拟），需要借助湍流模型。
            湍流模型通过对 N-S 方程进行雷诺平均（RANS），引入湍流粘度概念来封闭方程组。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">k-ε 模型</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                最广泛使用的两方程湍流模型。求解湍动能 k 和耗散率 ε。
                适用于高雷诺数、远离壁面的充分发展湍流。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">k-ω 模型</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                求解湍动能 k 和比耗散率 ω。适用于壁面约束流动，
                SST k-ω 版本结合了两者优势，广泛用于散热仿真。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">LES/DNS</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                大涡模拟（LES）直接计算大尺度涡，模拟小尺度涡。
                DNS 直接求解所有尺度，计算成本极高。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">热设计中湍流模型的选择</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              对于大多数电子散热仿真（风冷散热器、液冷冷板），Realizable k-ε 和 SST k-ω 是最常用的选择。
              SST k-ω 在近壁面区域表现更好，适合需要精确计算壁面热通量的场景。
            </p>
          </div>
        </div>
      </section>

      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-teal/5 to-accent-green/5 border border-accent-teal/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-teal font-mono mb-1">下一章</div>
              <h3 className="text-xl font-bold text-white">CFD 仿真基础</h3>
              <p className="text-gray-400 text-sm mt-1">学习计算流体力学理论和 Fluent 仿真实操</p>
            </div>
            <Link
              href="/cfd/theory"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-teal text-black font-semibold text-sm hover:bg-accent-teal/90 transition-all"
            >
              开始学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
