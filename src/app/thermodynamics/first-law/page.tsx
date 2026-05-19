import {
  Target,
  Lightbulb,
  AlertCircle,
  ChevronRight,
  BookOpen,
  Thermometer,
  Zap,
  ArrowRight,
  BarChart3,
  Layers,
  Atom,
  Gauge,
  TrendingUp,
  FlaskConical,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function FirstLawPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第一章 · 第1节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">热力学第一定律</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          能量守恒定律在热力学中的具体形式——揭示热量、功与内能之间的定量关系，
          是热设计中最基本也是最重要的分析工具。
        </p>
      </div>

      <div className="flex items-center gap-2 mb-8 p-4 bg-tech-800/50 rounded-xl border border-tech-600/30">
        <Target className="w-5 h-5 text-accent-cyan shrink-0" />
        <div className="text-sm text-gray-400">
          <span className="text-accent-cyan font-semibold">学习目标：</span>
          掌握热力学第一定律的物理意义与数学表达式，理解内能、焓、比热容的概念，
          能够对常见的工程热力过程进行能量分析。
        </div>
      </div>

      <ChapterNav
        sections={[
          { id: "intro", label: "能量守恒" },
          { id: "formula", label: "定律推导" },
          { id: "enthalpy", label: "焓与比热" },
          { id: "processes", label: "热力过程" },
          { id: "case1", label: "内燃机" },
          { id: "case2", label: "压缩机" },
          { id: "exercises", label: "练习题" },
          { id: "advanced", label: "进阶·火用" },
          { id: "next", label: "下一章" },
        ]}
      />

      {/* ========== Section 1: Intro ========== */}
      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Zap className="w-4 h-4" />
          </span>
          能量守恒：自然的底层法则
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">哲学与物理基础</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              能量既不会凭空产生，也不会凭空消失——这是自然界最基本的法则之一。
              早在 18 世纪，人们就发现机械能可以转化为热量（如摩擦生热），
              反之热量也可以做功（如蒸汽机）。然而，直到 19 世纪中叶，
              迈尔（Joule, Mayer, Helmholtz）等人通过大量实验才建立起能量守恒的定量关系。
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              热力学第一定律就是能量守恒定律在热力学系统中的具体数学表达。
              它告诉我们：一个系统从一个平衡态变化到另一个平衡态时，
              系统从外界吸收的热量 Q 与外界对系统做的功 W 之和，
              等于系统内能的变化 ΔU。
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <div className="flex items-start gap-3">
                <Atom className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <span className="text-accent-cyan font-semibold">核心思想：</span>
                  能量是守恒的，但能量的形式可以相互转换。
                  热力学第一定律给出了各种能量形式之间转换的定量关系。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">内能 U 的物理意义</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              内能（Internal Energy）是系统内部所有微观粒子能量的总和。
              从分子层面看，内能包括：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">分子动能</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  分子热运动的平动动能、转动动能和振动动能。
                  温度越高，分子动能越大。
                </p>
                <div className="mt-2 text-xs font-mono text-accent-amber">
                  E_k = (3/2)nRT（单原子理想气体）
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">分子势能</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  分子间相互作用力所对应的势能。
                  分子间距变化时，势能随之改变。
                </p>
                <div className="mt-2 text-xs font-mono text-accent-amber">
                  取决于分子间距和分子间作用力
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              对于理想气体，分子间无相互作用力，因此内能仅取决于温度（分子动能），
              与体积和压力无关：<span className="text-accent-cyan font-mono">U = f(T)</span>。
              这是理想气体模型的重要特征。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">热量 Q 与功 W 的本质区别</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              热量和功都是能量传递的形式，但它们有本质的区别。理解这种区别是掌握热力学的关键：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-orange/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">热量 Q — 过程量</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  热量是由于温度差而引起的能量传递。温度差是传热的驱动力。
                  热量不是系统的一个状态属性，而是一个过程量——离开过程谈热量没有意义。
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  符号约定：Q &gt; 0 表示系统吸热
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-green/20">
                <h4 className="text-sm font-semibold text-accent-green mb-2">功 W — 过程量</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  功是系统与外界通过广义力（如压力差、电势差等）进行的能量传递。
                  最常见的是体积功（膨胀功）：<span className="text-accent-cyan font-mono">δW = PdV</span>。
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  符号约定：W &gt; 0 表示系统对外做功
                </div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">状态量与过程量的对比</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-400">
                  <thead>
                    <tr className="border-b border-tech-600/20">
                      <th className="text-left py-2 pr-4 text-gray-300">属性</th>
                      <th className="text-left py-2 pr-4 text-accent-cyan">状态量</th>
                      <th className="text-left py-2 text-accent-orange">过程量</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr className="border-b border-tech-600/10">
                      <td className="py-2 pr-4">例子</td>
                      <td className="py-2 pr-4 text-accent-cyan font-mono">U, T, P, V</td>
                      <td className="py-2 text-accent-orange font-mono">Q, W</td>
                    </tr>
                    <tr className="border-b border-tech-600/10">
                      <td className="py-2 pr-4">与路径的关系</td>
                      <td className="py-2 pr-4">无关（仅取决于初末态）</td>
                      <td className="py-2">相关（取决于具体过程）</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">微分性质</td>
                      <td className="py-2 pr-4 text-accent-cyan font-mono">dU（恰当微分）</td>
                      <td className="py-2 text-accent-orange font-mono">δQ, δW（非恰当微分）</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 2: Formula ========== */}
      <section id="formula" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Target className="w-4 h-4" />
          </span>
          热力学第一定律的数学表达
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">闭口系统的第一定律</h3>
            <p className="text-gray-400 text-sm mb-4">
              考虑一个闭口系统（无质量交换），从状态 1 变化到状态 2。
              系统从外界吸收热量 Q，同时对外做功 W。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-6 mb-4 text-center">
              <div className="text-3xl font-bold text-accent-cyan font-mono mb-2">ΔU = Q − W</div>
              <div className="text-gray-500 text-sm font-mono">或  Q = ΔU + W</div>
              <p className="text-gray-600 text-xs mt-3">积分形式（闭口系统、静止、无化学反应）</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 text-center border border-accent-cyan/10">
                <div className="text-accent-cyan font-bold font-mono text-lg">ΔU = U₂ − U₁</div>
                <div className="text-gray-500 text-xs mt-1">系统内能变化 (J)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 text-center border border-accent-orange/10">
                <div className="text-accent-orange font-bold font-mono text-lg">Q</div>
                <div className="text-gray-500 text-xs mt-1">系统吸收的总热量 (J)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 text-center border border-accent-green/10">
                <div className="text-accent-green font-bold font-mono text-lg">W</div>
                <div className="text-gray-500 text-xs mt-1">系统对外做的总功 (J)</div>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">微分形式</h3>
            <p className="text-gray-400 text-sm mb-4">
              对于微元过程，第一定律的微分形式揭示了过程量与状态量之间的本质区别：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-6 mb-4 text-center">
              <div className="text-2xl font-bold text-accent-cyan font-mono mb-2">dU = δQ − δW</div>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-3">
                <span className="flex items-center gap-1"><span className="text-accent-cyan font-mono">dU</span> 恰当微分（与路径无关）</span>
                <span className="flex items-center gap-1"><span className="text-accent-orange font-mono">δQ, δW</span> 非恰当微分（与路径有关）</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              对于可逆过程，体积功可以表示为 <span className="text-accent-cyan font-mono">δW = PdV</span>，
              因此可逆过程的微分形式为：
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 text-center mt-3">
              <div className="text-xl font-bold text-accent-cyan font-mono">dU = δQ − PdV</div>
              <p className="text-gray-500 text-xs mt-1">可逆过程（仅体积功）</p>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">开口系统与稳定流动能量方程</h3>
            <p className="text-gray-400 text-sm mb-4">
              对于开口系统（有质量流入流出），系统除了热量和功的交换外，
              还有流动物质带来的能量。当系统处于稳定流动状态时（各点参数不随时间变化），
              能量方程为：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-6 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono mb-2">
                Q − W<sub>s</sub> = ṁ[(h₂ − h₁) + ½(c₂² − c₁²) + g(z₂ − z₁)]
              </div>
              <p className="text-gray-500 text-xs">稳定流动能量方程（Steady Flow Energy Equation, SFEE）</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-cyan font-mono font-bold">W<sub>s</sub></div>
                <div className="text-gray-500 text-xs">轴功（Shaft Work）</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-cyan font-mono font-bold">h = u + Pv</div>
                <div className="text-gray-500 text-xs">比焓（Specific Enthalpy）</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-orange font-mono font-bold">½c²</div>
                <div className="text-gray-500 text-xs">动能项</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-green font-mono font-bold">gz</div>
                <div className="text-gray-500 text-xs">重力势能项</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              在大多数工程应用中，动能和势能变化可忽略，SFEE 简化为：
              <span className="text-accent-cyan font-mono"> Q − W<sub>s</sub> = ṁ(h₂ − h₁)</span>。
            </p>
          </div>

          {/* SVG Diagram: Closed System Energy Balance */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">闭口系统能量平衡示意图</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 260" className="w-full max-w-lg mx-auto" fill="none">
                  {/* System boundary */}
                  <rect x="150" y="40" width="200" height="160" rx="16" stroke="#00d4ff" strokeWidth="2.5" fill="rgba(0,212,255,0.04)" strokeDasharray="8 4" />
                  <text x="250" y="130" textAnchor="middle" fill="#00d4ff" fontSize="16" fontFamily="monospace" fontWeight="bold">系统</text>
                  <text x="250" y="150" textAnchor="middle" fill="#00d4ff" fontSize="11" fontFamily="monospace">闭口系统</text>
                  <text x="250" y="168" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">无质量交换</text>

                  {/* Heat inflow arrow (top) */}
                  <defs>
                    <marker id="arrowCyan" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00d4ff" />
                    </marker>
                    <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
                    </marker>
                    <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="10 0, 0 3.5, 10 7" fill="#ef4444" />
                    </marker>
                    <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="10 0, 0 3.5, 10 7" fill="#10b981" />
                    </marker>
                  </defs>

                  {/* Heat entering */}
                  <line x1="250" y1="25" x2="250" y2="0" stroke="#f59e0b" strokeWidth="2" />
                  <polygon points="247,3 250,-3 253,3" fill="#f59e0b" />
                  <text x="250" y="-6" textAnchor="middle" fill="#f59e0b" fontSize="13" fontFamily="monospace" fontWeight="bold">Q (吸热)</text>

                  {/* Work leaving */}
                  <line x1="350" y1="80" x2="430" y2="80" stroke="#10b981" strokeWidth="2" />
                  <polygon points="427,77 433,80 427,83" fill="#10b981" />
                  <text x="390" y="73" textAnchor="middle" fill="#10b981" fontSize="13" fontFamily="monospace" fontWeight="bold">W (做功)</text>

                  {/* Work entering (alternative) */}
                  <line x1="350" y1="120" x2="430" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="5 3" />
                  <line x1="430" y1="120" x2="420" y2="115" stroke="#ef4444" strokeWidth="2" />
                  <line x1="430" y1="120" x2="420" y2="125" stroke="#ef4444" strokeWidth="2" />
                  <text x="390" y="113" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">W_in (压缩)</text>

                  {/* Internal energy label */}
                  <rect x="195" y="80" width="110" height="40" rx="8" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="250" y="105" textAnchor="middle" fill="#00d4ff" fontSize="14" fontFamily="monospace" fontWeight="bold">U (内能)</text>

                  {/* Energy conversion arrows inside */}
                  <path d="M 220 88 Q 210 60 230 50" stroke="#555" strokeWidth="1" fill="none" strokeDasharray="3 2" />
                  <path d="M 280 88 Q 290 60 270 50" stroke="#555" strokeWidth="1" fill="none" strokeDasharray="3 2" />

                  {/* Legend */}
                  <rect x="40" y="210" width="420" height="40" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <text x="60" y="235" fill="#f59e0b" fontSize="10" fontFamily="monospace">Q 热量</text>
                  <text x="160" y="235" fill="#10b981" fontSize="10" fontFamily="monospace">W 膨胀功</text>
                  <text x="280" y="235" fill="#ef4444" fontSize="10" fontFamily="monospace">W_in 压缩功</text>
                  <text x="400" y="235" fill="#00d4ff" fontSize="10" fontFamily="monospace">U 内能</text>
                </svg>
                <p className="text-xs text-gray-500 mt-3">图 1-1 闭口系统能量平衡示意图：Q = ΔU + W</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 3: Enthalpy & Specific Heat ========== */}
      <section id="enthalpy" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Layers className="w-4 h-4" />
          </span>
          焓 H 与比热容
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">焓 H 的定义与物理意义</h3>
            <p className="text-gray-400 text-sm mb-4">
              在开口系统分析和等压过程中，内能 U 与压力-体积乘积的组合经常出现。
              热力学定义焓（Enthalpy）来简化表达：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-6 mb-4 text-center">
              <div className="text-2xl font-bold text-accent-cyan font-mono">H = U + PV</div>
              <div className="text-gray-500 text-sm mt-2">比焓：<span className="text-accent-cyan font-mono">h = u + Pv</span></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-cyan font-mono font-bold">H</div>
                <div className="text-gray-500 text-xs">焓 (J) — 系统的总能量</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-orange font-mono font-bold">U</div>
                <div className="text-gray-500 text-xs">内能 — 系统内部的能量</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-green font-mono font-bold">PV</div>
                <div className="text-gray-500 text-xs">流动功 — 推动流体所需的能量</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              焓的物理意义可以理解为：在等压过程中，系统吸收的热量等于焓的增量。
              因此焓是热工计算中极为方便的参数。对于稳定流动开口系统，
              如果不考虑动能势能，能量方程简化为：
              <span className="text-accent-cyan font-mono"> Q − W<sub>s</sub> = H₂ − H₁</span>。
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 mt-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">焓的重要性质</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• 焓是状态量，其变化只取决于初末状态，与过程路径无关</li>
                <li>• 等压过程中，<span className="text-accent-cyan font-mono">Q<sub>p</sub> = ΔH</span></li>
                <li>• 理想气体的焓只与温度有关：<span className="text-accent-cyan font-mono">h = h(T)</span></li>
                <li>• 相变过程（如汽化）中，相变潜热等于焓变</li>
              </ul>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">比热容：c<sub>v</sub> 和 c<sub>p</sub></h3>
            <p className="text-gray-400 text-sm mb-4">
              比热容是单位质量物质温度升高 1 K 所需吸收的热量。
              根据过程条件不同，分为定容比热容和定压比热容：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-5 border border-accent-cyan/10">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">定容比热容 c<sub>v</sub></h4>
                <div className="text-lg font-bold font-mono text-accent-cyan mb-2">c<sub>v</sub> = (∂u/∂T)<sub>v</sub></div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  定容过程中，单位质量物质温度升高 1 K 所需的热量。
                  由于体积不变，所有热量全部用于增加内能。
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  理想气体：<span className="text-accent-cyan font-mono">Δu = c<sub>v</sub>ΔT</span>
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-5 border border-accent-orange/10">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">定压比热容 c<sub>p</sub></h4>
                <div className="text-lg font-bold font-mono text-accent-orange mb-2">c<sub>p</sub> = (∂h/∂T)<sub>p</sub></div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  定压过程中，单位质量物质温度升高 1 K 所需的热量。
                  热量同时用于增加内能和对外做功（膨胀）。
                </p>
                <div className="mt-2 text-xs text-gray-500">
                  理想气体：<span className="text-accent-cyan font-mono">Δh = c<sub>p</sub>ΔT</span>
                </div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 mt-2">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">迈耶关系（理想气体）</h4>
              <div className="text-lg font-bold font-mono text-accent-cyan text-center">c<sub>p</sub> − c<sub>v</sub> = R</div>
              <p className="text-gray-400 text-xs text-center mt-2">
                定压比热容总是大于定容比热容，差值等于气体常数 R。
              </p>
              <div className="grid grid-cols-3 gap-3 mt-3 text-xs text-center">
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-gray-300">单原子气体</div>
                  <div className="text-accent-cyan font-mono">c<sub>v</sub> = ³⁄₂R</div>
                  <div className="text-accent-orange font-mono">c<sub>p</sub> = ⁵⁄₂R</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-gray-300">双原子气体</div>
                  <div className="text-accent-cyan font-mono">c<sub>v</sub> = ⁵⁄₂R</div>
                  <div className="text-accent-orange font-mono">c<sub>p</sub> = ⁷⁄₂R</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-gray-300">多原子气体</div>
                  <div className="text-accent-cyan font-mono">c<sub>v</sub> ≈ 3R</div>
                  <div className="text-accent-orange font-mono">c<sub>p</sub> ≈ 4R</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 4: Thermodynamic Processes ========== */}
      <section id="processes" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <TrendingUp className="w-4 h-4" />
          </span>
          典型热力过程的能量分析
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">P-V 图上各热力过程曲线</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 350" className="w-full max-w-lg mx-auto" fill="none">
                  {/* Axes */}
                  <line x1="60" y1="30" x2="60" y2="300" stroke="#666" strokeWidth="2" />
                  <line x1="60" y1="300" x2="460" y2="300" stroke="#666" strokeWidth="2" />
                  <polygon points="60,30 55,45 65,45" fill="#666" />
                  <polygon points="460,300 445,295 445,305" fill="#666" />
                  <text x="70" y="25" fill="#666" fontSize="12" fontFamily="monospace">P (压力)</text>
                  <text x="450" y="318" fill="#666" fontSize="12" fontFamily="monospace">V (体积)</text>

                  {/* Isothermal (T = const) - hyperbolic */}
                  <path d="M 80 290 Q 100 260 120 230 Q 150 190 200 150 Q 250 120 300 100 Q 380 75 440 65" stroke="#00d4ff" strokeWidth="2.5" fill="none" />
                  <text x="380" y="68" fill="#00d4ff" fontSize="11" fontFamily="monospace">等温 (T=c)</text>

                  {/* Adiabatic (no heat transfer) - steeper */}
                  <path d="M 80 290 Q 110 260 140 220 Q 180 170 230 130 Q 280 100 340 78 Q 390 65 440 55" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                  <text x="360" y="58" fill="#ef4444" fontSize="11" fontFamily="monospace">绝热 (δQ=0)</text>

                  {/* Isobaric (P = const) */}
                  <line x1="80" y1="210" x2="400" y2="210" stroke="#10b981" strokeWidth="2.5" />
                  <text x="410" y="215" fill="#10b981" fontSize="11" fontFamily="monospace">等压 (P=c)</text>

                  {/* Isochoric (V = const) */}
                  <line x1="300" y1="60" x2="300" y2="295" stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="305" y="55" fill="#f59e0b" fontSize="11" fontFamily="monospace">等容 (V=c)</text>

                  {/* Polytropic - between isothermal & adiabatic */}
                  <path d="M 80 290 Q 105 265 135 225 Q 165 185 210 145 Q 265 105 330 82 Q 390 68 440 60" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 3" fill="none" />
                  <text x="350" y="95" fill="#a855f7" fontSize="10" fontFamily="monospace">多变 (PVⁿ=c)</text>

                  {/* Annotation point */}
                  <circle cx="200" cy="220" r="4" fill="white" />
                  <text x="180" y="215" fill="white" fontSize="10" fontFamily="monospace">状态1</text>
                  <circle cx="300" cy="100" r="4" fill="white" />
                  <text x="310" y="95" fill="white" fontSize="10" fontFamily="monospace">状态2</text>

                  {/* Legend */}
                  <rect x="60" y="310" width="400" height="30" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <text x="75" y="330" fill="#00d4ff" fontSize="9" fontFamily="monospace">等温</text>
                  <text x="130" y="330" fill="#ef4444" fontSize="9" fontFamily="monospace">绝热</text>
                  <text x="185" y="330" fill="#10b981" fontSize="9" fontFamily="monospace">等压</text>
                  <text x="240" y="330" fill="#f59e0b" fontSize="9" fontFamily="monospace">等容</text>
                  <text x="295" y="330" fill="#a855f7" fontSize="9" fontFamily="monospace">多变</text>
                  <text x="355" y="330" fill="#555" fontSize="9">P-V 图中曲线下的面积 = 功 W</text>
                </svg>
                <p className="text-xs text-gray-500 mt-3">图 1-2 P-V 图上各类热力过程曲线对比</p>
              </div>
            </div>
          </div>

          {/* Process table */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">五大热力过程对比</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-400">
                <thead>
                  <tr className="border-b border-tech-600/20 text-left">
                    <th className="py-2 pr-3 text-gray-300">过程</th>
                    <th className="py-2 pr-3 text-gray-300">条件</th>
                    <th className="py-2 pr-3 text-gray-300">P-V 关系</th>
                    <th className="py-2 pr-3 text-gray-300">Q</th>
                    <th className="py-2 pr-3 text-gray-300">W</th>
                    <th className="py-2 text-gray-300">ΔU</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "等容", condition: "V = const", pv: "—", q: "ΔU", w: "0", du: "Q" },
                    { name: "等压", condition: "P = const", pv: "—", q: "ΔH", w: "PΔV", du: "Q − W" },
                    { name: "等温", condition: "T = const", pv: "PV = c", q: "W", w: "nRT·ln(V₂/V₁)", du: "0" },
                    { name: "绝热", condition: "Q = 0", pv: "PV<sup>γ</sup> = c", q: "0", w: "−ΔU", du: "−W" },
                    { name: "多变", condition: "PV<sup>n</sup> = c", pv: "PV<sup>n</sup> = c", q: "ΔU + W", w: "∫PdV", du: "Q − W" },
                  ].map((proc) => (
                    <tr key={proc.name} className="border-b border-tech-600/10">
                      <td className="py-2 pr-3 text-accent-cyan font-semibold">{proc.name}</td>
                      <td className="py-2 pr-3">{proc.condition}</td>
                      <td className="py-2 pr-3 font-mono" dangerouslySetInnerHTML={{ __html: proc.pv }} />
                      <td className="py-2 pr-3 font-mono text-accent-orange">{proc.q}</td>
                      <td className="py-2 pr-3 font-mono text-accent-green">{proc.w}</td>
                      <td className="py-2 font-mono text-accent-cyan">{proc.du}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              γ = c<sub>p</sub>/c<sub>v</sub> 为绝热指数（比热比），对空气 γ ≈ 1.4。
              多变指数 n 的值介于 1 和 γ 之间（通常），n=1 为等温，n=γ 为绝热。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">绝热过程详解</h3>
            <p className="text-gray-400 text-sm mb-4">
              绝热过程（Adiabatic Process）是系统与外界没有热量交换的过程（Q=0）。
              在工程中，许多高速过程可近似视为绝热，如内燃机的压缩和膨胀冲程、
              燃气轮机中的气流、制冷剂在膨胀阀中的节流等。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">PV<sup>γ</sup> = const</div>
              <div className="text-gray-500 text-xs mt-1">绝热可逆过程（等熵过程）</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-tech-900/50 rounded-lg p-3">
                <h4 className="text-accent-cyan font-semibold mb-1">温度-压力关系</h4>
                <div className="font-mono text-xs">T₂/T₁ = (P₂/P₁)<sup>(γ−1)/γ</sup></div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <h4 className="text-accent-cyan font-semibold mb-1">温度-体积关系</h4>
                <div className="font-mono text-xs">T₂/T₁ = (V₁/V₂)<sup>(γ−1)</sup></div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <h4 className="text-accent-cyan font-semibold mb-1">绝热功</h4>
                <div className="font-mono text-xs">W = (P₂V₂ − P₁V₁)/(1−γ)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 5: Case 1 - Internal Combustion Engine ========== */}
      <section id="case1" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Cpu className="w-4 h-4" />
          </span>
          工程案例一：内燃机工作循环能量分析
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                某四冲程汽油发动机，压缩比为 10:1，进气状态为
                T₁ = 300 K，P₁ = 100 kPa。燃烧过程加入热量 q<sub>in</sub> = 2000 kJ/kg。
                假设工质为空气（理想气体，γ = 1.4，c<sub>v</sub> = 0.718 kJ/kg·K），
                求压缩终温 T₂、最高温度 T₃、热效率 η 和净功 w<sub>net</sub>。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">奥托循环分析</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                汽油发动机的理想循环为奥托循环（Otto Cycle），
                由四个可逆过程组成：
                <br />1→2：等熵压缩
                <br />2→3：等容加热
                <br />3→4：等熵膨胀
                <br />4→1：等容放热
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">详细计算过程</h4>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div><span className="text-accent-cyan">压缩比 r = V₁/V₂ = 10</span> → V₁/V₂ = 10</div>
              <div><span className="text-accent-cyan">过程 1→2（等熵压缩）：</span> T₂ = T₁ × (V₁/V₂)<sup>γ−1</sup> = 300 × 10<sup>0.4</sup></div>
              <div>T₂ = 300 × 2.512 = <span className="text-accent-green font-bold">753.6 K</span></div>
              <div><span className="text-accent-cyan">过程 2→3（等容加热）：</span> q<sub>in</sub> = c<sub>v</sub>(T₃ − T₂)</div>
              <div>T₃ = T₂ + q<sub>in</sub>/c<sub>v</sub> = 753.6 + 2000/0.718</div>
              <div>T₃ = 753.6 + 2785.5 = <span className="text-accent-orange font-bold">3539.1 K</span></div>
              <div><span className="text-accent-cyan">热效率：</span> η = 1 − 1/r<sup>γ−1</sup> = 1 − 1/10<sup>0.4</sup></div>
              <div>η = 1 − 1/2.512 = 1 − 0.398 = <span className="text-accent-green font-bold">60.2%</span></div>
              <div><span className="text-accent-cyan">净功：</span> w<sub>net</sub> = η × q<sub>in</sub> = 0.602 × 2000 = <span className="text-accent-green font-bold">1204 kJ/kg</span></div>
            </div>
          </div>

          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">结果分析</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              奥托循环的理论热效率为 60.2%，但实际汽油发动机效率通常在 25-35% 之间，
              主要损失包括：不完全燃烧损失、传热损失、排气损失、摩擦损失等。
              压缩比越高效率越高，但受限于爆震问题，实际汽油机的压缩比一般在 8-12 之间。
            </p>
          </div>
        </div>
      </section>

      {/* ========== Section 6: Case 2 - Compressor ========== */}
      <section id="case2" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <Gauge className="w-4 h-4" />
          </span>
          工程案例二：压缩机耗功计算
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                空气压缩机将空气从 100 kPa、300 K 压缩至 800 kPa。
                质量流量 ṁ = 0.5 kg/s。分别计算等温压缩和绝热压缩所需的功率。
                空气 R = 0.287 kJ/kg·K，γ = 1.4。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">开口系统分析</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                采用稳定流动能量方程（SFEE）。忽略动能势能变化，
                且假设压缩机绝热（Q ≈ 0），则功率 = ṁ(h₂ − h₁)。
                对于理想气体，h = c<sub>p</sub>T。
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">计算过程</h4>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div><span className="text-accent-cyan">等温压缩（n=1）：</span></div>
              <div>W<sub>isothermal</sub> = ṁRT·ln(P₂/P₁)</div>
              <div>= 0.5 × 0.287 × 300 × ln(800/100)</div>
              <div>= 0.5 × 0.287 × 300 × 2.079</div>
              <div>= <span className="text-accent-green font-bold">89.5 kW</span></div>
              <div className="mt-2"><span className="text-accent-cyan">绝热压缩（γ=1.4）：</span></div>
              <div>T₂ = T₁ × (P₂/P₁)<sup>(γ−1)/γ</sup></div>
              <div>T₂ = 300 × (8)<sup>0.4/1.4</sup> = 300 × 8<sup>0.286</sup></div>
              <div>T₂ = 300 × 1.811 = <span className="text-accent-orange font-bold">543.3 K</span></div>
              <div>W<sub>adiabatic</sub> = ṁ·c<sub>p</sub>·(T₂ − T₁)</div>
              <div>c<sub>p</sub> = γ·R/(γ−1) = 1.4 × 0.287/0.4 = 1.005 kJ/kg·K</div>
              <div>W<sub>adiabatic</sub> = 0.5 × 1.005 × (543.3 − 300)</div>
              <div>= 0.5 × 1.005 × 243.3 = <span className="text-accent-red font-bold">122.3 kW</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-green/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">等温压缩优势</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                等温压缩耗功 89.5 kW，比绝热压缩少 26.8%。
                实际压缩机通过中间冷却器实现多级压缩，近似等温过程，
                既节能又控制排气温度。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-red/20">
              <h4 className="text-sm font-semibold text-accent-red mb-2">工程启示</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                单级绝热压缩排气温度高达 543 K（270°C），
                可能导致润滑油碳化。工业上通常采用两级压缩中间冷却，
                将排气温度控制在 150°C 以下。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 7: Exercises ========== */}
      <section id="exercises" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Lightbulb className="w-4 h-4" />
          </span>
          练习题
        </h2>

        <div className="space-y-6">
          {/* Exercise 1 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">1</span>
              <h3 className="text-base font-semibold text-white">内能变化与第一定律</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某闭口系统从状态 A 变化到状态 B，沿路径 1 吸热 80 kJ，对外做功 30 kJ。
              <br />(a) 求内能变化 ΔU。
              <br />(b) 如果沿路径 2 吸热 50 kJ，求对外做功 W₂。
              <br />(c) 如果系统从 B 回到 A，外界对系统做功 20 kJ，求吸放热量 Q₃。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  (a) ΔU = Q − W = 80 − 30 = <span className="text-accent-green font-bold">50 kJ</span><br />
                  (b) ΔU 只与初末态有关，与路径无关 → ΔU = 50 kJ<br />
                  &emsp;W₂ = Q₂ − ΔU = 50 − 50 = <span className="text-accent-green font-bold">0 kJ</span><br />
                  (c) B→A：ΔU₃ = −ΔU = −50 kJ，W₃ = −20 kJ<br />
                  &emsp;Q₃ = ΔU₃ + W₃ = −50 + (−20) = <span className="text-accent-red font-bold">−70 kJ</span>（放热 70 kJ）
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 2 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">等温膨胀功</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              2 mol 理想气体在 400 K 温度下等温膨胀，体积从 0.02 m³ 增加到 0.08 m³。
              R = 8.314 J/mol·K。求：(a) 气体对外做功 W； (b) 吸收的热量 Q； (c) 内能变化 ΔU。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  等温过程 ΔU = 0，Q = W<br />
                  W = nRT·ln(V₂/V₁) = 2 × 8.314 × 400 × ln(0.08/0.02)<br />
                  = 2 × 8.314 × 400 × ln(4) = 6651.2 × 1.386<br />
                  = <span className="text-accent-green font-bold">9219 J</span><br />
                  Q = W = <span className="text-accent-green font-bold">9219 J</span>（从外界吸热）<br />
                  ΔU = <span className="text-accent-cyan font-bold">0</span>（等温理想气体）
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 3 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">焓变与比热容</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              空气（理想气体）在定压下从 25°C 加热到 200°C。c<sub>p</sub> = 1.005 kJ/kg·K，
              R = 0.287 kJ/kg·K。求每千克空气的 (a) 焓变 Δh； (b) 内能变化 Δu； (c) 对外做功 w。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  (a) Δh = c<sub>p</sub>·ΔT = 1.005 × (200 − 25) = 1.005 × 175 = <span className="text-accent-green font-bold">175.9 kJ/kg</span><br />
                  (b) c<sub>v</sub> = c<sub>p</sub> − R = 1.005 − 0.287 = 0.718 kJ/kg·K<br />
                  &emsp;Δu = c<sub>v</sub>·ΔT = 0.718 × 175 = <span className="text-accent-cyan font-bold">125.7 kJ/kg</span><br />
                  (c) 由 Δh = Δu + w<br />
                  &emsp;w = Δh − Δu = 175.9 − 125.7 = <span className="text-accent-orange font-bold">50.2 kJ/kg</span><br />
                  &emsp;（等压膨胀对外做功，也可用 w = R·ΔT = 0.287 × 175 = 50.2 ✓）
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 4 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">稳定流动能量方程</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              蒸汽轮机入口蒸汽比焓 h₁ = 3200 kJ/kg，出口比焓 h₂ = 2400 kJ/kg。
              蒸汽质量流量 ṁ = 10 kg/s，散热量 Q̇ = 200 kW。
              忽略动能势能变化，求汽轮机的输出功率 Ẇ<sub>s</sub>。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  SFEE：Q̇ − Ẇ<sub>s</sub> = ṁ(h₂ − h₁)<br />
                  &emsp;−200 − Ẇ<sub>s</sub> = 10 × (2400 − 3200)<br />
                  &emsp;−200 − Ẇ<sub>s</sub> = 10 × (−800) = −8000<br />
                  &emsp;−Ẇ<sub>s</sub> = −8000 + 200 = −7800<br />
                  &emsp;Ẇ<sub>s</sub> = <span className="text-accent-green font-bold">7800 kW</span>（汽轮机对外输出功率 7.8 MW）
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ========== Section 8: Advanced - Exergy ========== */}
      <section id="advanced" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <FlaskConical className="w-4 h-4" />
          </span>
          进阶话题：火用（Exergy）分析简介
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            热力学第一定律告诉我们能量守恒，但没有告诉我们能量的"质量"或"品位"。
            1 kJ 的机械能可以完全转化为功，但 1 kJ 的 100°C 热水中的热能只能部分转化为功。
            火用（Exergy）就是用来衡量能量中最大可转化为有用功的那部分。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">Ex = (H − H₀) − T₀(S − S₀)</div>
            <p className="text-gray-500 text-xs mt-1">物理火用的定义式（忽略动能势能）</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            其中下标 0 表示环境状态（死态）。火用分析可以揭示系统中不可逆损失的
            位置和大小，为系统优化提供方向。在热设计中，火用效率
            <span className="text-accent-cyan font-mono"> η<sub>ex</sub> = Ex<sub>out</sub>/Ex<sub>in</sub></span>
            比能量效率更能反映系统的热力学完善程度。
          </p>
          <div className="bg-tech-900/50 rounded-lg p-4 mt-3 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">关键要点</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• 能量守恒，但火用不守恒——不可逆过程会导致火用损失（火用耗散）</li>
              <li>• 火用损失与熵增成正比：<span className="text-accent-cyan font-mono">Ex<sub>loss</sub> = T₀·S<sub>gen</sub></span></li>
              <li>• 温度越高的热能，其火用值越大（品位越高）</li>
              <li>• 火用分析已经广泛应用在发电厂、制冷系统、化工过程等领域</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========== Section 9: Next Chapter ========== */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-cyan/5 to-accent-teal/5 border border-accent-cyan/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-cyan font-mono mb-1">下一节</div>
              <h3 className="text-xl font-bold text-white">热力学第二定律</h3>
              <p className="text-gray-400 text-sm mt-1">
                学习热量传递的方向性、卡诺循环和熵的概念——理解为什么效率不能达到 100%
              </p>
            </div>
            <Link
              href="/thermodynamics/second-law"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan text-black font-semibold text-sm hover:bg-accent-cyan/90 transition-all"
            >
              继续学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
