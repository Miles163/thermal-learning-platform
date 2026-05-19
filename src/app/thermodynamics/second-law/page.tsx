import {
  Target,
  Lightbulb,
  AlertCircle,
  ChevronRight,
  BookOpen,
  Thermometer,
  Zap,
  ArrowRight,
  Layers,
  Atom,
  Gauge,
  TrendingUp,
  FlaskConical,
  RefreshCw,
  BarChart3,
  Snowflake,
} from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function SecondLawPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第一章 · 第2节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">热力学第二定律</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          第一定律告诉我们能量守恒，第二定律告诉我们能量转换的方向性——为什么热量不能自发从低温传向高温，
          为什么热机效率有上限，以及熵这个核心概念如何量化过程的不可逆性。
        </p>
      </div>

      <div className="flex items-center gap-2 mb-8 p-4 bg-tech-800/50 rounded-xl border border-tech-600/30">
        <Target className="w-5 h-5 text-accent-cyan shrink-0" />
        <div className="text-sm text-gray-400">
          <span className="text-accent-cyan font-semibold">学习目标：</span>
          理解热力学第二定律的两种经典表述，掌握卡诺循环与热效率的推导过程，
          深刻理解熵的定义、熵增原理及其在工程分析中的应用。
        </div>
      </div>

      <ChapterNav
        sections={[
          { id: "intro", label: "方向性" },
          { id: "statements", label: "经典表述" },
          { id: "carnot", label: "卡诺循环" },
          { id: "entropy", label: "熵与熵增" },
          { id: "case1", label: "火电厂" },
          { id: "case2", label: "热泵" },
          { id: "exercises", label: "练习题" },
          { id: "advanced", label: "进阶·统计熵" },
          { id: "next", label: "下一章" },
        ]}
      />

      {/* ========== Section 1: Directionality ========== */}
      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Zap className="w-4 h-4" />
          </span>
          自然过程的方向性
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">为什么需要第二定律？</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              热力学第一定律告诉我们能量是守恒的，但并没有告诉我们过程进行的方向。
              例如，将一杯热水放在室温环境中：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-orange/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">实际发生的 ✓</h4>
                <p className="text-gray-400 text-sm">
                  热量从热水传递到空气，热水逐渐冷却到室温。
                  这个过程是<strong className="text-accent-green">自发</strong>的。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 opacity-50">
                <h4 className="text-sm font-semibold text-gray-500 mb-2">不可能发生 ✗</h4>
                <p className="text-gray-500 text-sm">
                  热量从空气传递回热水，让热水变得更烫。
                  这个过程虽然<strong>不违反第一定律</strong>，但<strong className="text-accent-red">不会自发发生</strong>。
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              热力学第二定律正是用来描述自然过程进行方向的规律。
              它告诉我们：<strong className="text-accent-cyan">自然界的一切宏观自发过程都是不可逆的</strong>。
              这种不可逆性可以用熵来量化衡量。
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 mt-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">常见的不可逆过程</h4>
              <div className="flex flex-wrap gap-2">
                {["摩擦生热", "自由膨胀", "传热温差", "混合", "扩散", "化学反应", "节流", "粘性耗散"].map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-full bg-tech-600/30 text-gray-300 border border-tech-600/20">
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                这些过程都可以自发进行，但它们的逆过程不能自发发生。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 2: Classical Statements ========== */}
      <section id="statements" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Target className="w-4 h-4" />
          </span>
          热力学第二定律的经典表述
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-tech-800/50 border border-accent-orange/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer className="w-5 h-5 text-accent-orange" />
                <h3 className="text-lg font-semibold text-white">克劳修斯表述</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                不可能将热量从低温物体传递到高温物体而不引起其他变化。
              </p>
              <div className="bg-tech-900/50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm text-accent-red font-mono">T₂ (冷)</span>
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600 font-mono line-through">→</span>
                  <span className="text-sm text-accent-orange font-mono">T₁ (热)</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">热量不能自发从低温传向高温</div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                冰箱和热泵可以实现这一过程，但需要消耗额外的功——这就是"引起其他变化"。
              </p>
            </div>

            <div className="bg-tech-800/50 border border-accent-teal/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-accent-teal" />
                <h3 className="text-lg font-semibold text-white">开尔文-普朗克表述</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                不可能从单一热源吸热完全转化为功而不引起其他变化。
              </p>
              <div className="bg-tech-900/50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-sm text-accent-orange font-mono">Q₁</span>
                  <ArrowRight className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600 font-mono line-through">→ 100% W</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">不可能制造出第二类永动机</div>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                任何热机都必须有高温热源和低温热源，吸热 Q₁，放热 Q₂，净功 W = Q₁ − Q₂。
              </p>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">两种表述的等价性</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              克劳修斯表述和开尔文-普朗克表述在物理上是等价的——违反其中一种必然导致违反另一种。
              可以通过反证法证明：如果可以从单一热源吸热完全转化为功（违反 K-P 表述），
              则可以利用这个功驱动热泵将热量从低温传向高温（违反克劳修斯表述）。
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">
                  <span className="text-accent-amber font-semibold">深层含义：</span>
                  热力学第二定律揭示了一个深刻的真理——能量的转换是有方向性的。
                  机械能可以 100% 转化为热量（如摩擦生热），
                  但热量不能 100% 转化为机械能。这也意味着<strong className="text-accent-cyan">第二类永动机不可能实现</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 3: Carnot Cycle ========== */}
      <section id="carnot" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <RefreshCw className="w-4 h-4" />
          </span>
          卡诺循环与卡诺定理
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">卡诺循环的四个过程</h3>
            <p className="text-gray-400 text-sm mb-4">
              1824 年，法国工程师卡诺（Nicolas Léonard Sadi Carnot）提出了一个理想热机循环，
              由两个可逆等温过程和两个可逆绝热过程组成。卡诺循环是所有热机循环的理论极限。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { step: "1→2", name: "等温膨胀", desc: "工质与高温热源 T₁ 接触，吸收热量 Q₁，等温膨胀做功", color: "text-accent-orange" },
                { step: "2→3", name: "绝热膨胀", desc: "工质与热源隔离，继续膨胀，温度从 T₁ 降至 T₂，对外做功", color: "text-accent-red" },
                { step: "3→4", name: "等温压缩", desc: "工质与低温热源 T₂ 接触，放出热量 Q₂，等温压缩", color: "text-accent-cyan" },
                { step: "4→1", name: "绝热压缩", desc: "工质与热源隔离，继续压缩，温度从 T₂ 升至 T₁，完成循环", color: "text-accent-green" },
              ].map((proc) => (
                <div key={proc.step} className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                  <div className={`text-lg font-bold font-mono ${proc.color} mb-1`}>{proc.step}</div>
                  <div className="text-white text-sm font-semibold mb-1">{proc.name}</div>
                  <div className="text-gray-400 text-xs">{proc.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SVG: Carnot Cycle T-S Diagram */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">卡诺循环 T-S 图</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 350" className="w-full max-w-lg mx-auto" fill="none">
                  {/* Axes */}
                  <line x1="50" y1="30" x2="50" y2="300" stroke="#666" strokeWidth="2" />
                  <line x1="50" y1="300" x2="460" y2="300" stroke="#666" strokeWidth="2" />
                  <polygon points="50,30 45,45 55,45" fill="#666" />
                  <polygon points="460,300 445,295 445,305" fill="#666" />
                  <text x="55" y="25" fill="#666" fontSize="12" fontFamily="monospace">T (温度)</text>
                  <text x="450" y="318" fill="#666" fontSize="12" fontFamily="monospace">S (熵)</text>

                  {/* Process 1→2: Isothermal expansion at T1 */}
                  <line x1="80" y1="90" x2="200" y2="90" stroke="#f59e0b" strokeWidth="3" />
                  <text x="140" y="82" fill="#f59e0b" fontSize="11" fontFamily="monospace">1→2 等温膨胀 (T₁)</text>

                  {/* Process 2→3: Adiabatic expansion (isentropic) */}
                  <line x1="200" y1="90" x2="350" y2="250" stroke="#ef4444" strokeWidth="3" />
                  <text x="260" y="160" fill="#ef4444" fontSize="11" fontFamily="monospace">2→3 绝热膨胀</text>

                  {/* Process 3→4: Isothermal compression at T2 */}
                  <line x1="350" y1="250" x2="230" y2="250" stroke="#00d4ff" strokeWidth="3" />
                  <text x="270" y="242" fill="#00d4ff" fontSize="11" fontFamily="monospace">3→4 等温压缩 (T₂)</text>

                  {/* Process 4→1: Adiabatic compression */}
                  <line x1="230" y1="250" x2="80" y2="90" stroke="#10b981" strokeWidth="3" />
                  <text x="130" y="180" fill="#10b981" fontSize="11" fontFamily="monospace">4→1 绝热压缩</text>

                  {/* Points */}
                  <circle cx="80" cy="90" r="4" fill="white" />
                  <text x="65" y="85" fill="white" fontSize="11" fontFamily="monospace">1</text>
                  <circle cx="200" cy="90" r="4" fill="white" />
                  <text x="205" y="85" fill="white" fontSize="11" fontFamily="monospace">2</text>
                  <circle cx="350" cy="250" r="4" fill="white" />
                  <text x="355" y="245" fill="white" fontSize="11" fontFamily="monospace">3</text>
                  <circle cx="230" cy="250" r="4" fill="white" />
                  <text x="215" y="268" fill="white" fontSize="11" fontFamily="monospace">4</text>

                  {/* Area = W */}
                  <rect x="80" y="90" width="120" height="160" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" strokeDasharray="4 2" />
                  <text x="140" y="175" fill="rgba(0,212,255,0.5)" fontSize="14" fontFamily="monospace" fontWeight="bold">W = Q₁ − Q₂</text>

                  {/* Heat flow arrows */}
                  <path d="M 250 50 Q 280 50 280 70" stroke="#f59e0b" strokeWidth="1.5" fill="none" markerEnd="url(#arrowOrange)" />
                  <text x="260" y="48" fill="#f59e0b" fontSize="10" fontFamily="monospace">Q₁ (吸热)</text>

                  <path d="M 380 270 Q 380 290 350 290" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
                  <text x="385" y="288" fill="#00d4ff" fontSize="10" fontFamily="monospace">Q₂ (放热)</text>

                  {/* Legend */}
                  <rect x="60" y="310" width="400" height="30" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <text x="75" y="330" fill="#f59e0b" fontSize="9" fontFamily="monospace">等温</text>
                  <text x="140" y="330" fill="#ef4444" fontSize="9" fontFamily="monospace">绝热</text>
                  <text x="200" y="330" fill="#00d4ff" fontSize="9" fontFamily="monospace">等温</text>
                  <text x="260" y="330" fill="#10b981" fontSize="9" fontFamily="monospace">绝热</text>
                  <text x="330" y="330" fill="#555" fontSize="9">T-S 图中循环包围的面积 = 净功 W</text>
                </svg>
                <p className="text-xs text-gray-500 mt-3">图 2-1 卡诺循环 T-S 图（矩形循环）</p>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">卡诺热效率的推导</h3>
            <p className="text-gray-400 text-sm mb-4">
              卡诺循环是工作于两个热源之间最理想的热力循环。根据 T-S 图分析，可以推导出热效率：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4">
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">等温吸热 Q₁ = T₁·ΔS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">等温放热 Q₂ = T₂·ΔS</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">净功 W = Q₁ − Q₂ = (T₁ − T₂)·ΔS</span>
                </div>
                <div className="border-t border-tech-600/20 pt-2">
                  <span className="text-white font-semibold">热效率：</span>
                  <div className="text-2xl font-bold text-accent-cyan font-mono text-center mt-2">
                    η = W/Q₁ = 1 − T₂/T₁
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              由公式可知：<strong className="text-accent-cyan">卡诺效率只取决于高温热源温度 T₁ 和低温热源温度 T₂</strong>，
              与工质的种类无关。T₁ 越高、T₂ 越低，效率越高。
              只有当 T₂ = 0 K（绝对零度）时，效率才等于 100%——而这是不可能达到的。
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">卡诺定理</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                <strong className="text-white">定理：</strong>在相同的高温热源和相同的低温热源之间工作的一切可逆热机，
                其效率都相等，与工质无关。一切不可逆热机的效率都小于可逆热机的效率。
                <br /><span className="text-gray-500">这一定理确立了热机效率的理论上限。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 4: Entropy ========== */}
      <section id="entropy" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <BarChart3 className="w-4 h-4" />
          </span>
          熵 S 与熵增原理
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">熵的定义与推导</h3>
            <p className="text-gray-400 text-sm mb-4">
              克劳修斯（Rudolf Clausius）在 1865 年提出了熵（Entropy）的概念。
              他发现在可逆循环中，<span className="text-accent-cyan font-mono">∮ δQ/T = 0</span>，
              这表明存在一个状态函数——熵。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-2xl font-bold text-accent-cyan font-mono mb-2">dS = δQ<sub>rev</sub> / T</div>
              <p className="text-gray-500 text-xs">熵的微分定义式（可逆过程）</p>
              <div className="text-lg font-bold text-accent-cyan font-mono mt-4">ΔS = ∫ δQ<sub>rev</sub> / T</div>
              <p className="text-gray-500 text-xs">熵变的计算（通过可逆路径积分）</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-cyan font-mono font-bold">dS</div>
                <div className="text-gray-500 text-xs">熵的微元变化</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-orange font-mono font-bold">δQ<sub>rev</sub></div>
                <div className="text-gray-500 text-xs">可逆过程的微元热量</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3">
                <div className="text-accent-green font-mono font-bold">T</div>
                <div className="text-gray-500 text-xs">热力学温度 (K)</div>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">熵增原理</h3>
            <p className="text-gray-400 text-sm mb-4">
              对于任何热力学过程，<strong className="text-accent-cyan">孤立系统的总熵永远不会减少</strong>。
              这就是熵增原理（Principle of Entropy Increase），热力学第二定律的数学表达。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-3xl font-bold text-accent-cyan font-mono">ΔS<sub>孤立</sub> ≥ 0</div>
              <p className="text-gray-500 text-sm mt-2">
                可逆过程 ΔS = 0 &ensp;|&ensp; 不可逆过程 ΔS &gt; 0
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              对于有限大小的系统，总熵变等于系统熵变加上环境熵变：
            </p>
            <div className="bg-tech-900/50 rounded-lg p-4 text-center mt-2">
              <div className="text-lg font-bold text-accent-cyan font-mono">ΔS<sub>总</sub> = ΔS<sub>系统</sub> + ΔS<sub>环境</sub> ≥ 0</div>
            </div>
          </div>

          {/* SVG: Reversible vs Irreversible */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">可逆 vs 不可逆过程对比</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 220" className="w-full max-w-lg mx-auto" fill="none">
                  {/* Left: Reversible */}
                  <rect x="30" y="10" width="200" height="180" rx="10" fill="rgba(16,185,129,0.04)" stroke="#10b981" strokeWidth="1.5" />
                  <text x="130" y="35" textAnchor="middle" fill="#10b981" fontSize="13" fontFamily="monospace" fontWeight="bold">可逆过程</text>
                  <text x="130" y="55" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace">ΔS = 0</text>

                  {/* Two-way arrows */}
                  <path d="M 50 80 L 210 160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
                  <path d="M 210 80 L 50 160" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowGreen)" />
                  <text x="130" y="130" textAnchor="middle" fill="#10b981" fontSize="11" fontFamily="monospace">↔ 理想化</text>
                  <text x="130" y="148" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace">无耗散</text>
                  <text x="130" y="175" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">准平衡过程</text>

                  {/* Right: Irreversible */}
                  <rect x="270" y="10" width="200" height="180" rx="10" fill="rgba(239,68,68,0.04)" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="370" y="35" textAnchor="middle" fill="#ef4444" fontSize="13" fontFamily="monospace" fontWeight="bold">不可逆过程</text>
                  <text x="370" y="55" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">ΔS &gt; 0</text>

                  {/* One-way arrow */}
                  <path d="M 290 80 L 450 160" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowRed)" />
                  <text x="370" y="130" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="monospace">→ 实际过程</text>
                  <text x="370" y="148" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">摩擦·温差·混合</text>
                  <text x="370" y="175" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">自然界真实过程</text>

                  {/* Defs */}
                  <defs>
                    <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                      <polygon points="10 0, 0 3.5, 10 7" fill="#10b981" />
                    </marker>
                    <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                    </marker>
                  </defs>

                  <text x="250" y="210" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">自然界所有宏观过程都是不可逆的</text>
                </svg>
                <p className="text-xs text-gray-500 mt-3">图 2-2 可逆过程 vs 不可逆过程</p>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">可用能损失（火用损失）</h3>
            <p className="text-gray-400 text-sm mb-4">
              凡是涉及不可逆性的实际过程，都存在可用能的损失。火用损失与熵增成正比：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">Ex<sub>loss</sub> = T₀ · S<sub>gen</sub></div>
              <p className="text-gray-500 text-xs mt-1">
                T₀ 为环境温度，S<sub>gen</sub> 为不可逆过程产生的熵
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              {[
                { loss: "30-40%", source: "燃烧不可逆性", desc: "燃料燃烧的化学火用损失" },
                { loss: "10-15%", source: "传热温差", desc: "换热器中有限温差传热" },
                { loss: "5-10%", source: "摩擦损失", desc: "流体流动和机械摩擦" },
              ].map((item) => (
                <div key={item.source} className="bg-tech-900/50 rounded-lg p-3">
                  <div className="text-accent-orange font-bold font-mono text-lg">{item.loss}</div>
                  <div className="text-white text-xs font-semibold">{item.source}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 5: Case 1 - Power Plant ========== */}
      <section id="case1" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Gauge className="w-4 h-4" />
          </span>
          工程案例一：火力发电厂热效率分析
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">系统参数</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                某火力发电厂：锅炉蒸汽温度 540°C（813 K），
                冷凝器温度 35°C（308 K），
                实际热效率 η<sub>实际</sub> = 38%。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">卡诺效率计算</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                理论上最大效率：
                <br />η<sub>卡诺</sub> = 1 − T₂/T₁ = 1 − 308/813
                <br />= 1 − 0.379 = <span className="text-accent-green font-bold">62.1%</span>
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">效率差距分析</h4>
            <div className="text-sm text-gray-300">
              <p className="mb-2">
                理论最大效率 62.1%，实际效率仅 38%，差距 24.1 个百分点。
                主要损失来自：
              </p>
              <ul className="space-y-1 text-xs font-mono">
                <li><span className="text-accent-orange">燃烧不可逆损失：</span> 约 10% — 燃料燃烧过程的化学火用损失</li>
                <li><span className="text-accent-orange">传热温差损失：</span> 约 8% — 烟气与水蒸气之间的有限温差传热</li>
                <li><span className="text-accent-orange">汽轮机内损失：</span> 约 4% — 蒸汽流动摩擦、叶轮损失</li>
                <li><span className="text-accent-orange">冷凝器损失：</span> 约 2% — 排汽冷凝的不可逆性</li>
                <li><span className="text-accent-orange">其他辅助损失：</span> 约 0.1% — 泵功、管道散热等</li>
              </ul>
            </div>
          </div>

          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">改进措施</h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 text-accent-cyan shrink-0 mt-0.5" />
                <span>提高蒸汽参数（超超临界：600°C/30 MPa）→ η 可达 45%</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 text-accent-cyan shrink-0 mt-0.5" />
                <span>再热循环 → 减少排汽湿度，提高约 2-3% 效率</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 text-accent-cyan shrink-0 mt-0.5" />
                <span>回热加热 → 给水预热，提高约 4-5% 效率</span>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-3 h-3 text-accent-cyan shrink-0 mt-0.5" />
                <span>热电联产 → 利用排汽供热，综合效率可达 80%+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 6: Case 2 - Heat Pump ========== */}
      <section id="case2" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Snowflake className="w-4 h-4" />
          </span>
          工程案例二：热泵/制冷循环分析
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">系统描述</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                某热泵维持室内温度 22°C，室外环境温度 −5°C（268 K）。
                热泵功率 3 kW，实际 COP = 3.5。
                求：(a) 卡诺最大 COP； (b) 实际供热量； (c) 火用损失。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">COP 定义</h4>
              <div className="text-lg font-bold font-mono text-accent-cyan text-center mb-2">COP<sub>HP</sub> = Q<sub>H</sub> / W</div>
              <p className="text-gray-400 text-xs">
                热泵的性能系数 COP 表示消耗单位功所能提供的供热量。
                卡诺热泵 COP<sub>卡诺</sub> = T<sub>H</sub> / (T<sub>H</sub> − T<sub>L</sub>)。
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">计算结果</h4>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div><span className="text-accent-cyan">卡诺 COP：</span></div>
              <div>COP<sub>卡诺</sub> = T<sub>H</sub> / (T<sub>H</sub> − T<sub>L</sub>) = 295 / (295 − 268)</div>
              <div>= 295 / 27 = <span className="text-accent-green font-bold">10.93</span></div>
              <div className="mt-2"><span className="text-accent-cyan">实际供热量：</span></div>
              <div>Q<sub>H</sub> = COP × W = 3.5 × 3 = <span className="text-accent-orange font-bold">10.5 kW</span></div>
              <div className="mt-2"><span className="text-accent-cyan">火用损失分析：</span></div>
              <div>火用效率 η<sub>ex</sub> = COP<sub>实际</sub> / COP<sub>卡诺</sub> = 3.5 / 10.93 = <span className="text-accent-red font-bold">32.0%</span></div>
              <div>火用损失占 68% —— 主要来自压缩机不可逆性、换热器温差、节流损失</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-green/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">意义</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                即使是最理想的热泵，COP 也受卡诺极限限制。
                实际热泵 COP 通常在 2-5 之间，远低于卡诺值。
                提高热泵性能的关键是减少压缩机不可逆损失和优化换热器设计。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-cyan/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">工程启示</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                热泵的 COP 与 T<sub>H</sub> − T<sub>L</sub> 成反比。
                当温差增大时，COP 快速下降。因此在严寒地区（−30°C），
                空气源热泵效率很低，常采用地源热泵以保证稳定的 COP。
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
              <h3 className="text-base font-semibold text-white">卡诺效率计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某热机工作于 1200 K 和 400 K 两个热源之间。
              <br />(a) 求卡诺效率。
              <br />(b) 如果该热机实际效率只有卡诺效率的 60%，求实际效率。
              <br />(c) 若要达到 50% 的效率，需要将高温热源提高到多少度？（低温不变）
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  (a) η<sub>卡诺</sub> = 1 − T₂/T₁ = 1 − 400/1200 = 1 − 0.333 = <span className="text-accent-green font-bold">66.7%</span><br />
                  (b) η<sub>实际</sub> = 0.6 × 0.667 = <span className="text-accent-green font-bold">40.0%</span><br />
                  (c) η = 1 − T₂/T₁ → 0.5 = 1 − 400/T₁<br />
                  &emsp;400/T₁ = 0.5 → T₁ = 400/0.5 = <span className="text-accent-orange font-bold">800 K</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 2 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">熵变计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              1 kg 水在 100°C 时汽化为水蒸气，汽化潜热 h<sub>fg</sub> = 2257 kJ/kg。
              求水在等温等压汽化过程中的熵变。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  等温等压可逆相变：ΔS = Q/T = m·h<sub>fg</sub> / T<br />
                  T = 100 + 273.15 = 373.15 K<br />
                  ΔS = 1 × 2257 / 373.15 = <span className="text-accent-green font-bold">6.05 kJ/K</span><br />
                  汽化过程熵增加，因为水蒸气的分子混乱度远大于液态水。
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 3 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">熵增原理</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              将 0.5 kg 的 80°C 热水倒入 0.5 kg 的 20°C 冷水中（不考虑容器吸热），
              水的比热容 c = 4.18 kJ/kg·K。求混合后的总熵变，
              并判断过程是否可逆。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  混合温度 T = (0.5×80 + 0.5×20) / (0.5 + 0.5) = <span className="text-accent-cyan font-bold">50°C = 323.15 K</span><br />
                  热水熵变：ΔS<sub>h</sub> = mc·ln(T/T<sub>h</sub>) = 0.5 × 4.18 × ln(323.15/353.15)<br />
                  = 2.09 × ln(0.915) = 2.09 × (−0.0888) = <span className="text-accent-red font-bold">−0.1856 kJ/K</span><br />
                  冷水熵变：ΔS<sub>c</sub> = mc·ln(T/T<sub>c</sub>) = 0.5 × 4.18 × ln(323.15/293.15)<br />
                  = 2.09 × ln(1.1023) = 2.09 × 0.0974 = <span className="text-accent-green font-bold">+0.2035 kJ/K</span><br />
                  总熵变：ΔS<sub>总</sub> = −0.1856 + 0.2035 = <span className="text-accent-green font-bold">+0.0179 kJ/K &gt; 0</span><br />
                  → 过程不可逆（自发进行，熵增加）
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 4 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">热泵 COP 分析</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某空气源热泵在冬季供暖，室内需维持 25°C，室外温度为 −10°C。
              热泵输入功率 2.5 kW。
              <br />(a) 求卡诺 COP。
              <br />(b) 若实际 COP = 2.8，求供热量 Q<sub>H</sub>。
              <br />(c) 当室外温度降至 −25°C 时，卡诺 COP 变为多少？
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  (a) T<sub>H</sub> = 25 + 273 = 298 K, T<sub>L</sub> = −10 + 273 = 263 K<br />
                  &emsp;COP<sub>卡诺</sub> = T<sub>H</sub> / (T<sub>H</sub> − T<sub>L</sub>) = 298 / (298 − 263) = 298 / 35 = <span className="text-accent-green font-bold">8.51</span><br />
                  (b) Q<sub>H</sub> = COP × W = 2.8 × 2.5 = <span className="text-accent-green font-bold">7.0 kW</span><br />
                  (c) T<sub>L</sub>' = −25 + 273 = 248 K<br />
                  &emsp;COP<sub>卡诺</sub>' = 298 / (298 − 248) = 298 / 50 = <span className="text-accent-red font-bold">5.96</span><br />
                  <span className="text-gray-500 text-xs">室外温度从 −10°C 降到 −25°C，卡诺 COP 下降 30%。实际 COP 下降更显著，这也是严寒地区空气源热泵效率低的原因。</span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ========== Section 8: Advanced - Statistical Entropy ========== */}
      <section id="advanced" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Atom className="w-4 h-4" />
          </span>
          进阶话题：熵的统计意义
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            如果说克劳修斯从宏观角度定义了熵，那么玻尔兹曼（Ludwig Boltzmann）
            则从微观统计角度揭示了熵的本质——<strong className="text-accent-cyan">熵是系统混乱度的度量</strong>。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-2xl font-bold text-accent-cyan font-mono mb-2">S = k · ln Ω</div>
            <p className="text-gray-500 text-xs">玻尔兹曼熵公式（刻在玻尔兹曼墓碑上的公式）</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">符号含义</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• <span className="text-accent-cyan font-mono">S</span> — 宏观熵值</li>
                <li>• <span className="text-accent-cyan font-mono">k</span> — 玻尔兹曼常数（1.381 × 10⁻²³ J/K）</li>
                <li>• <span className="text-accent-cyan font-mono">Ω</span> — 系统的微观状态数（简并度）</li>
              </ul>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">物理含义</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                一个系统可实现的微观状态数越多，系统的混乱度越大，熵值越高。
                热力学第二定律的统计意义：<strong className="text-accent-cyan">孤立系统总是自发地向着微观状态数更多的方向（即熵增大的方向）演化</strong>。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">宏观与微观的统一</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              克劳修斯熵（宏观）：<span className="text-accent-cyan font-mono">dS = δQ<sub>rev</sub>/T</span>
              &ensp;→ 热力学过程的宏观描述<br />
              玻尔兹曼熵（微观）：<span className="text-accent-cyan font-mono">S = k·lnΩ</span>
              &ensp;→ 系统微观状态的统计描述<br />
              两者在热力学极限下完全等价，是物理学中宏观与微观统一的典范。
              正如玻尔兹曼所说："我的一生都在追寻熵的微观解释。"
            </p>
          </div>
        </div>
      </section>

      {/* ========== Section 9: Next Chapter ========== */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-amber/5 to-accent-orange/5 border border-accent-amber/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-amber font-mono mb-1">下一节</div>
              <h3 className="text-xl font-bold text-white">热力循环</h3>
              <p className="text-gray-400 text-sm mt-1">
                学习朗肯循环、布雷顿循环和制冷循环——将热力学理论应用于实际动力装置
              </p>
            </div>
            <Link
              href="/thermodynamics/cycles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-amber text-black font-semibold text-sm hover:bg-accent-amber/90 transition-all"
            >
              继续学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
