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
  Gauge,
  TrendingUp,
  RefreshCw,
  Cpu,
  Droplets,
  Flame,
  Wind,
} from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function CyclesPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第一章 · 第3节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">热力循环</h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          将热力学第一、第二定律应用于实际的动力装置和制冷装置——
          从蒸汽发电厂到数据中心冷却系统，热力循环是工程热设计的核心。
        </p>
      </div>

      <div className="flex items-center gap-2 mb-8 p-4 bg-tech-800/50 rounded-xl border border-tech-600/30">
        <Target className="w-5 h-5 text-accent-cyan shrink-0" />
        <div className="text-sm text-gray-400">
          <span className="text-accent-cyan font-semibold">学习目标：</span>
          掌握朗肯循环、布雷顿循环和蒸气压缩制冷循环的工作原理与热力分析方法，
          了解再热、回热等效率提升技术，能够计算热效率和制冷 COP。
        </div>
      </div>

      <ChapterNav
        sections={[
          { id: "intro", label: "循环分类" },
          { id: "rankine", label: "朗肯循环" },
          { id: "rankine-improve", label: "再热与回热" },
          { id: "brayton", label: "布雷顿循环" },
          { id: "refrigeration", label: "制冷循环" },
          { id: "case1", label: "数据中心" },
          { id: "case2", label: "液冷系统" },
          { id: "exercises", label: "练习题" },
          { id: "advanced", label: "进阶·CHP/ORC" },
          { id: "next", label: "下一章" },
        ]}
      />

      {/* ========== Section 1: Cycle Classification ========== */}
      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <RefreshCw className="w-4 h-4" />
          </span>
          热力循环的分类
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            热力循环（Thermodynamic Cycle）是指工质经过一系列状态变化后回到初始状态的过程。
            根据循环的目的和方向，分为两大类：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-5 border border-accent-orange/20">
              <div className="flex items-center gap-2 mb-3">
                <Flame className="w-5 h-5 text-accent-orange" />
                <h3 className="text-base font-semibold text-white">动力循环</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                将热能转化为机械能的循环，在 T-S 图上沿<strong className="text-accent-orange">顺时针</strong>方向进行。
                工质从高温热源吸热，部分转化为功，剩余热量排至低温热源。
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["蒸汽动力循环", "燃气轮机循环", "内燃机循环"].map((item) => (
                  <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-accent-orange/10 text-accent-orange border border-accent-orange/20">{item}</span>
                ))}
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-5 border border-accent-cyan/20">
              <div className="flex items-center gap-2 mb-3">
                <Droplets className="w-5 h-5 text-accent-cyan" />
                <h3 className="text-base font-semibold text-white">制冷/热泵循环</h3>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed mb-3">
                消耗功将热量从低温物体传递至高温物体的循环，在 T-S 图上沿<strong className="text-accent-cyan">逆时针</strong>方向进行。
                广泛应用于空调、制冷和热泵供暖。
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["蒸气压缩制冷", "吸收式制冷", "热泵循环"].map((item) => (
                  <span key={item} className="text-[10px] px-2 py-0.5 rounded-full bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">{item}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">循环分析的关键参数</h4>
            <div className="grid grid-cols-3 gap-3 text-xs text-center">
              <div className="bg-tech-800/50 rounded p-2">
                <div className="text-accent-cyan font-mono font-bold">η<sub>th</sub> = W<sub>net</sub>/Q<sub>in</sub></div>
                <div className="text-gray-500">热效率（动力循环）</div>
              </div>
              <div className="bg-tech-800/50 rounded p-2">
                <div className="text-accent-green font-mono font-bold">COP<sub>R</sub> = Q<sub>L</sub>/W</div>
                <div className="text-gray-500">制冷系数</div>
              </div>
              <div className="bg-tech-800/50 rounded p-2">
                <div className="text-accent-orange font-mono font-bold">COP<sub>HP</sub> = Q<sub>H</sub>/W</div>
                <div className="text-gray-500">热泵系数</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 2: Rankine Cycle ========== */}
      <section id="rankine" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Gauge className="w-4 h-4" />
          </span>
          朗肯循环——蒸汽动力循环
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">循环的四个主要过程</h3>
            <p className="text-gray-400 text-sm mb-4">
              朗肯循环（Rankine Cycle）是现代火力发电厂和核电站的基本热力循环。
              以水蒸气为工质，包含四个主要过程：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { step: "1→2", name: "等熵压缩（泵）", desc: "冷凝器中低温低压的饱和液经给水泵压缩为高压液体", color: "text-accent-green", tag: "泵功极小" },
                { step: "2→3", name: "等压加热（锅炉）", desc: "高压液体在锅炉中依次经预热、汽化、过热为过热蒸汽", color: "text-accent-orange", tag: "主要吸热阶段" },
                { step: "3→4", name: "等熵膨胀（汽轮机）", desc: "过热蒸汽在汽轮机中膨胀做功，输出有用功", color: "text-accent-red", tag: "输出功率" },
                { step: "4→1", name: "等压冷凝（冷凝器）", desc: "乏汽在冷凝器中被冷却水冷凝为饱和液体，放出潜热", color: "text-accent-cyan", tag: "放热阶段" },
              ].map((proc) => (
                <div key={proc.step} className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-lg font-bold font-mono ${proc.color}`}>{proc.step}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-tech-600/30 text-gray-400">{proc.tag}</span>
                  </div>
                  <div className="text-white text-sm font-semibold mb-1">{proc.name}</div>
                  <div className="text-gray-400 text-xs">{proc.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SVG: Rankine Cycle T-s Diagram */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">朗肯循环 T-s 图</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 380" className="w-full max-w-lg mx-auto" fill="none">
                  {/* Axes */}
                  <line x1="50" y1="40" x2="50" y2="340" stroke="#666" strokeWidth="2" />
                  <line x1="50" y1="340" x2="460" y2="340" stroke="#666" strokeWidth="2" />
                  <polygon points="50,40 45,55 55,55" fill="#666" />
                  <polygon points="460,340 445,335 445,345" fill="#666" />
                  <text x="55" y="35" fill="#666" fontSize="12" fontFamily="monospace">T (温度)</text>
                  <text x="450" y="358" fill="#666" fontSize="12" fontFamily="monospace">S (熵)</text>

                  {/* Saturation dome */}
                  <path d="M 80 340 Q 100 260 150 200 Q 200 150 250 120" stroke="#555" strokeWidth="1.5" strokeDasharray="5 3" />
                  <path d="M 250 120 Q 300 130 350 170 Q 400 220 430 340" stroke="#555" strokeWidth="1.5" strokeDasharray="5 3" />
                  <text x="255" y="115" fill="#555" fontSize="9" fontFamily="monospace">临界点</text>
                  <text x="150" y="190" fill="#555" fontSize="9" fontFamily="monospace">饱和液线</text>
                  <text x="350" y="200" fill="#555" fontSize="9" fontFamily="monospace">饱和汽线</text>

                  {/* Rankine Cycle */}
                  {/* 1→2: Compression in pump (liquid) */}
                  <line x1="85" y1="310" x2="110" y2="315" stroke="#10b981" strokeWidth="2.5" />
                  <text x="90" y="305" fill="#10b981" fontSize="10" fontFamily="monospace">1→2 泵</text>

                  {/* 2→3: Heating in boiler */}
                  <line x1="110" y1="315" x2="280" y2="315" stroke="#f59e0b" strokeWidth="2.5" />
                  <text x="140" y="335" fill="#f59e0b" fontSize="10" fontFamily="monospace">2→3 锅炉加热</text>

                  {/* 3→4: Expansion in turbine */}
                  <line x1="280" y1="315" x2="400" y2="200" stroke="#ef4444" strokeWidth="2.5" />
                  <text x="330" y="275" fill="#ef4444" fontSize="10" fontFamily="monospace">3→4 汽轮机</text>

                  {/* 4→1: Condensation */}
                  <line x1="400" y1="200" x2="85" y2="200" stroke="#00d4ff" strokeWidth="2.5" />
                  <text x="240" y="193" fill="#00d4ff" fontSize="10" fontFamily="monospace">4→1 冷凝器</text>

                  {/* Vertical line for condensation (constant T) - actual path */}
                  <line x1="400" y1="200" x2="85" y2="310" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 2" opacity="0.3" />

                  {/* Points */}
                  <circle cx="85" cy="310" r="4" fill="white" />
                  <text x="70" y="305" fill="white" fontSize="11" fontFamily="monospace">1</text>
                  <circle cx="110" cy="315" r="4" fill="white" />
                  <text x="115" y="310" fill="white" fontSize="11" fontFamily="monospace">2</text>
                  <circle cx="280" cy="315" r="4" fill="white" />
                  <text x="285" y="310" fill="white" fontSize="11" fontFamily="monospace">3</text>
                  <circle cx="400" cy="200" r="4" fill="white" />
                  <text x="405" y="195" fill="white" fontSize="11" fontFamily="monospace">4</text>

                  {/* Legend */}
                  <rect x="60" y="348" width="400" height="25" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  <text x="75" y="364" fill="#10b981" fontSize="9" fontFamily="monospace">泵</text>
                  <text x="120" y="364" fill="#f59e0b" fontSize="9" fontFamily="monospace">锅炉</text>
                  <text x="180" y="364" fill="#ef4444" fontSize="9" fontFamily="monospace">汽轮机</text>
                  <text x="250" y="364" fill="#00d4ff" fontSize="9" fontFamily="monospace">冷凝器</text>
                  <text x="330" y="364" fill="#555" fontSize="9">热效率 η = (W<sub>turb</sub> − W<sub>pump</sub>) / Q<sub>boiler</sub></text>
                </svg>
                <p className="text-xs text-gray-500 mt-3">图 3-1 朗肯循环 T-s 图</p>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">朗肯循环热效率</h3>
            <p className="text-gray-400 text-sm mb-4">
              朗肯循环的热效率表示为净输出功与锅炉吸热量之比：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono mb-2">
                η<sub>Rankine</sub> = (W<sub>turb</sub> − W<sub>pump</sub>) / Q<sub>boiler</sub>
              </div>
              <div className="text-gray-500 text-xs">
                用焓值表示：η = (h₃ − h₄) − (h₂ − h₁) / (h₃ − h₂)
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
              {[
                { param: "h₃ − h₄", desc: "汽轮机单位质量做功", unit: "kJ/kg" },
                { param: "h₂ − h₁", desc: "给水泵消耗功 (通常很小)", unit: "kJ/kg" },
                { param: "h₃ − h₂", desc: "锅炉中单位质量吸热", unit: "kJ/kg" },
              ].map((item) => (
                <div key={item.param} className="bg-tech-900/50 rounded-lg p-3 text-center">
                  <div className="text-accent-cyan font-bold font-mono">{item.param}</div>
                  <div className="text-gray-500 text-xs">{item.desc}</div>
                  <div className="text-gray-600 text-[10px] font-mono">{item.unit}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">典型朗肯循环参数</h4>
              <div className="text-xs text-gray-400">
                <div>锅炉压力：12.5 MPa &ensp;|&ensp; 过热温度：540°C &ensp;|&ensp; 冷凝器压力：10 kPa</div>
                <div className="mt-1">汽轮机入口焓 h₃ ≈ 3470 kJ/kg &ensp;|&ensp; 出口焓 h₄ ≈ 2340 kJ/kg</div>
                <div className="mt-1">热效率 η ≈ 35-38%（简单朗肯循环）</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 3: Improving Rankine Cycle ========== */}
      <section id="rankine-improve" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <TrendingUp className="w-4 h-4" />
          </span>
          提高朗肯循环效率的方法
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-tech-800/50 border border-accent-orange/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">再热循环</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                再热（Reheat）是将高压汽轮机排出的蒸汽送回锅炉的再热器中再次加热，
                然后送入低压汽轮机继续膨胀做功。主要优点：
              </p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• 提高排汽干度 → 减少汽轮机末级叶片的水蚀</li>
                <li>• 增加平均吸热温度 → 小幅提高效率（约 2-4%）</li>
                <li>• 不改变冷凝器压力</li>
              </ul>
              <div className="mt-3 text-xs text-accent-cyan font-mono text-center">
                再热后效率：η ≈ 40-42%
              </div>
            </div>

            <div className="bg-tech-800/50 border border-accent-teal/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">回热循环</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                回热（Regeneration）是从汽轮机的中间级抽出部分蒸汽，
                用于加热给水，减少锅炉中低温段的不可逆传热损失。主要优点：
              </p>
              <ul className="text-xs text-gray-400 space-y-2">
                <li>• 提高给水温度 → 减少锅炉中的不可逆传热温差</li>
                <li>• 显著提高效率（约 4-6%）</li>
                <li>• 采用 5-8 级抽汽回热</li>
              </ul>
              <div className="mt-3 text-xs text-accent-cyan font-mono text-center">
                回热后效率：η ≈ 42-45%
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">超超临界技术</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              提高锅炉的蒸汽参数（压力和温度）是提高朗肯循环效率最直接的方法：
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-xs text-gray-400">
                <thead>
                  <tr className="border-b border-tech-600/20">
                    <th className="text-left py-2 pr-4 text-gray-300">技术等级</th>
                    <th className="text-left py-2 pr-4 text-gray-300">压力 (MPa)</th>
                    <th className="text-left py-2 pr-4 text-gray-300">温度 (°C)</th>
                    <th className="text-left py-2 text-gray-300">效率</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { level: "亚临界", pressure: "15-18", temp: "540", eff: "35-38%" },
                    { level: "超临界 (SC)", pressure: "24-26", temp: "560-580", eff: "40-42%" },
                    { level: "超超临界 (USC)", pressure: "28-32", temp: "600-620", eff: "44-47%" },
                    { level: "先进超超临界 (A-USC)", pressure: "35-38", temp: "700-760", eff: "48-50%" },
                  ].map((row) => (
                    <tr key={row.level} className="border-b border-tech-600/10">
                      <td className="py-2 pr-4 text-accent-cyan">{row.level}</td>
                      <td className="py-2 pr-4 font-mono">{row.pressure}</td>
                      <td className="py-2 pr-4 font-mono">{row.temp}</td>
                      <td className="py-2 font-mono text-accent-green">{row.eff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              注：材料的高温强度是限制蒸汽参数提高的关键瓶颈。
              A-USC 需要镍基高温合金，成本大幅增加。
            </p>
          </div>
        </div>
      </section>

      {/* ========== Section 4: Brayton Cycle ========== */}
      <section id="brayton" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <Wind className="w-4 h-4" />
          </span>
          布雷顿循环——燃气轮机循环
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">循环过程</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                布雷顿循环（Brayton Cycle）由压气机、燃烧室和燃气轮机组成：
                <br />1→2：等熵压缩（压气机）
                <br />2→3：等压加热（燃烧室）
                <br />3→4：等熵膨胀（燃气轮机）
                <br />4→1：等压放热（排大气）
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">热效率</h4>
              <div className="text-lg font-bold font-mono text-accent-cyan text-center mb-2">
                η = 1 − 1 / (r<sub>p</sub>)<sup>(γ−1)/γ</sup>
              </div>
              <p className="text-gray-400 text-xs">
                其中 r<sub>p</sub> = P₂/P₁ 为压比。
                与奥托循环类似，布雷顿循环效率随压比增大而提高。
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">实例计算</h4>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div>某燃气轮机：压比 r<sub>p</sub> = 12，γ = 1.4</div>
              <div>η = 1 − 1 / 12<sup>(0.4/1.4)</sup> = 1 − 1 / 12<sup>0.286</sup></div>
              <div>= 1 − 1 / 2.037 = 1 − 0.491 = <span className="text-accent-green font-bold">50.9%</span></div>
              <div className="text-gray-500 text-xs mt-1">
                实际燃气轮机效率约为 30-40%，考虑压气机和涡轮的等熵效率、燃烧室压损等。
              </div>
            </div>
          </div>

          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">布雷顿 vs 朗肯</h4>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
              <div>
                <div className="text-accent-cyan font-semibold mb-1">布雷顿循环优势：</div>
                <ul className="space-y-1">
                  <li>• 结构紧凑、启动快（分钟级）</li>
                  <li>• 可用空气直接作为工质</li>
                  <li>• 适合峰值发电和航空动力</li>
                </ul>
              </div>
              <div>
                <div className="text-accent-cyan font-semibold mb-1">朗肯循环优势：</div>
                <ul className="space-y-1">
                  <li>• 效率高（大型电站可达 47%+）</li>
                  <li>• 可适用多种燃料（煤、核能、太阳能）</li>
                  <li>• 冷凝过程排热温度低，火用损失小</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-accent-amber/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">🔬 联合循环（CCGT）</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              将布雷顿循环（顶循环）和朗肯循环（底循环）串联使用：
              燃气轮机排出的高温烟气（约 550-600°C）送入余热锅炉产生蒸汽，
              驱动汽轮机发电。联合循环效率可达 60% 以上，
              是目前效率最高的化石燃料发电技术。
            </p>
          </div>
        </div>
      </section>

      {/* ========== Section 5: Refrigeration Cycle ========== */}
      <section id="refrigeration" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Droplets className="w-4 h-4" />
          </span>
          蒸气压缩式制冷循环
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">循环原理</h3>
            <p className="text-gray-400 text-sm mb-4">
              蒸气压缩式制冷循环（Vapor Compression Refrigeration Cycle）是最广泛应用的制冷方式，
              占全球制冷系统的 90% 以上。由四个核心部件组成：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {[
                { comp: "压缩机", func: "将低压低温蒸气压缩为高压高温过热蒸气", energy: "消耗功 W" },
                { comp: "冷凝器", func: "高压蒸气在冷凝器中放热，冷凝为高压液体", energy: "放热 Q<sub>H</sub>" },
                { comp: "膨胀阀", func: "高压液体经节流降压为低压低温两相混合物", energy: "等焓节流" },
                { comp: "蒸发器", func: "低压液体在蒸发器中吸热汽化，产生制冷效果", energy: "吸热 Q<sub>L</sub>" },
              ].map((item) => (
                <div key={item.comp} className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                  <div className="text-white text-sm font-semibold mb-1">{item.comp}</div>
                  <div className="text-gray-400 text-xs mb-1">{item.func}</div>
                  <div className="text-accent-cyan text-[10px] font-mono">{item.energy}</div>
                </div>
              ))}
            </div>

            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">
                COP<sub>R</sub> = Q<sub>L</sub> / W = (h₁ − h₄) / (h₂ − h₁)
              </div>
              <p className="text-gray-500 text-xs mt-1">制冷系数（COP）— 制冷量与输入功之比</p>
            </div>
          </div>

          {/* SVG: Vapor Compression Refrigeration */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">制冷循环系统示意图</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 520 300" className="w-full max-w-lg mx-auto" fill="none">
                  {/* Condenser */}
                  <rect x="160" y="20" width="200" height="50" rx="10" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="2" />
                  <text x="260" y="50" textAnchor="middle" fill="#00d4ff" fontSize="12" fontFamily="monospace" fontWeight="bold">冷凝器</text>
                  <text x="260" y="65" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">放热 Q<sub>H</sub> → 环境</text>

                  {/* Compressor */}
                  <rect x="380" y="100" width="100" height="60" rx="10" fill="rgba(239,68,68,0.08)" stroke="#ef4444" strokeWidth="2" />
                  <text x="430" y="130" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">压缩机</text>
                  <text x="430" y="148" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">W<sub>in</sub></text>

                  {/* Evaporator */}
                  <rect x="40" y="160" width="200" height="50" rx="10" fill="rgba(16,185,129,0.08)" stroke="#10b981" strokeWidth="2" />
                  <text x="140" y="187" textAnchor="middle" fill="#10b981" fontSize="11" fontFamily="monospace" fontWeight="bold">蒸发器</text>
                  <text x="140" y="203" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace">吸热 Q<sub>L</sub> ← 冷源</text>

                  {/* Expansion valve */}
                  <rect x="55" y="90" width="40" height="25" rx="5" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="2" />
                  <text x="75" y="107" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">膨胀阀</text>

                  {/* Flow lines */}
                  <defs>
                    <marker id="arrowBlue" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00d4ff" />
                    </marker>
                    <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#ef4444" />
                    </marker>
                    <marker id="arrowGreen" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                    </marker>
                    <marker id="arrowOrange" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#f59e0b" />
                    </marker>
                  </defs>

                  {/* Compressor → Condenser (high P, high T) */}
                  <line x1="430" y1="100" x2="360" y2="70" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
                  <text x="400" y="82" fill="#ef4444" fontSize="8" fontFamily="monospace">高压高温蒸气</text>

                  {/* Condenser → Expansion valve (high P liquid) */}
                  <line x1="160" y1="45" x2="95" y2="95" stroke="#00d4ff" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
                  <text x="105" y="62" fill="#00d4ff" fontSize="8" fontFamily="monospace">高压液体</text>

                  {/* Expansion valve → Evaporator (low P, low T) */}
                  <line x1="75" y1="115" x2="140" y2="160" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrowOrange)" />
                  <text x="55" y="142" fill="#f59e0b" fontSize="8" fontFamily="monospace">低压低温混合物</text>

                  {/* Evaporator → Compressor (low P vapor) */}
                  <line x1="240" y1="185" x2="380" y2="130" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#arrowGreen)" />
                  <text x="310" y="170" fill="#10b981" fontSize="8" fontFamily="monospace">低压蒸气</text>

                  <text x="260" y="280" textAnchor="middle" fill="#555" fontSize="10" fontFamily="monospace">红色 = 高压侧 &ensp;|&ensp; 蓝色/绿色 = 低压侧</text>
                </svg>
                <p className="text-xs text-gray-500 mt-3">图 3-2 蒸气压缩制冷循环系统图</p>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">热泵循环</h3>
            <p className="text-gray-400 text-sm mb-4">
              热泵（Heat Pump）与制冷循环的工作原理完全相同，区别仅在于使用目的：
              制冷循环利用蒸发器吸热（制冷），热泵循环利用冷凝器放热（供暖）。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-cyan/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">热泵 COP</h4>
                <div className="text-lg font-bold font-mono text-accent-cyan text-center mb-2">COP<sub>HP</sub> = Q<sub>H</sub> / W</div>
                <p className="text-gray-400 text-xs">
                  冷凝器供热量与压缩机功耗之比。
                  COP<sub>HP</sub> = COP<sub>R</sub> + 1（由能量守恒 Q<sub>H</sub> = Q<sub>L</sub> + W）。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-orange/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">卡诺 COP 极限</h4>
                <div className="text-lg font-bold font-mono text-accent-orange text-center mb-2">COP<sub>卡诺</sub> = T<sub>H</sub> / (T<sub>H</sub> − T<sub>L</sub>)</div>
                <p className="text-gray-400 text-xs">
                  温差越大，COP 越低。因此地源热泵（地下恒温 10-15°C）
                  比空气源热泵效率更高。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 6: Case 1 - Data Center Cooling ========== */}
      <section id="case1" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Cpu className="w-4 h-4" />
          </span>
          工程案例一：数据中心制冷系统 COP 优化
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                某数据中心制冷负荷 Q<sub>L</sub> = 500 kW，采用蒸气压缩式制冷系统。
                蒸发温度 5°C（278 K），冷凝温度 40°C（313 K），
                压缩机实际等熵效率 η<sub>comp</sub> = 0.82。
                求：(a) 卡诺 COP； (b) 实际 COP； (c) 压缩机功耗。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">制冷剂选择</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                常见数据中心制冷剂：
                <br />• R134a（HFC，GWP=1430，正逐步淘汰）
                <br />• R410A（HFC 混合物，GWP=2088）
                <br />• R1234yf（HFO，GWP=4，新一代环保制冷剂）
                <br />• R290（丙烷，天然工质，GWP=3，可燃）
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">计算过程</h4>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div><span className="text-accent-cyan">卡诺 COP：</span></div>
              <div>COP<sub>卡诺</sub> = T<sub>L</sub> / (T<sub>H</sub> − T<sub>L</sub>) = 278 / (313 − 278) = 278 / 35</div>
              <div>= <span className="text-accent-green font-bold">7.94</span></div>
              <div className="mt-2"><span className="text-accent-cyan">实际 COP（考虑压缩机和换热器不可逆性）：</span></div>
              <div>通常实际 COP ≈ 0.4-0.6 × COP<sub>卡诺</sub></div>
              <div>取实际 COP = 4.0（典型数据中心制冷系统）</div>
              <div className="mt-2"><span className="text-accent-cyan">压缩机功耗：</span></div>
              <div>W = Q<sub>L</sub> / COP = 500 / 4.0</div>
              <div>= <span className="text-accent-orange font-bold">125 kW</span></div>
              <div className="text-gray-500 text-xs mt-1">数据中心制冷系统能耗占总能耗的 30-40%</div>
            </div>
          </div>

          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">优化措施</h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-400">
              {[
                { measure: "提高蒸发温度", impact: "每提高 1°C，COP 增加约 2-3%" },
                { measure: "使用变频压缩机", impact: "部分负荷效率提高 15-30%" },
                { measure: "自然冷却（Free Cooling）", impact: "冬季直接利用室外冷空气，节能 50-70%" },
                { measure: "液冷系统替代风冷", impact: "制冷 COP 从 4 提升至 8-15" },
              ].map((item) => (
                <div key={item.measure} className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 text-accent-cyan shrink-0 mt-1" />
                  <div>
                    <div className="text-white">{item.measure}</div>
                    <div className="text-gray-500">{item.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 7: Case 2 - Liquid Cooling ========== */}
      <section id="case2" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Droplets className="w-4 h-4" />
          </span>
          工程案例二：液冷系统热力循环分析
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">系统方案</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                某高密度服务器机柜采用液冷方案：
                <br />• 单机柜功率密度：40 kW
                <br />• 冷却液入口温度：35°C
                <br />• 冷却液出口温度：45°C
                <br />• 冷却液：丙二醇水溶液（c<sub>p</sub> = 3.5 kJ/kg·K）
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">热力学分析</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                根据热力学第一定律：Q = ṁ·c<sub>p</sub>·ΔT
                <br />• 所需冷量 Q = 40 kW
                <br />• 温升 ΔT = 45 − 35 = 10°C
                <br />• 质量流量 ṁ = Q / (c<sub>p</sub>·ΔT)
              </p>
            </div>
          </div>

          <div className="bg-tech-900/70 rounded-lg p-5 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-3">计算结果</h4>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div>ṁ = 40 / (3.5 × 10) = 40 / 35</div>
              <div>= <span className="text-accent-green font-bold">1.14 kg/s</span></div>
              <div className="mt-2">换算为体积流量（密度约 1030 kg/m³）：</div>
              <div>V̇ = 1.14 / 1030 = 0.00111 m³/s</div>
              <div>= <span className="text-accent-cyan font-bold">66.6 L/min</span></div>
              <div className="mt-2 text-gray-500 text-xs">
                相比传统风冷（需要约 2000 CFM 风量才能带走 40 kW），
                液冷系统的体积流量仅为风冷的约 1/100，泵功远小于风机功耗。
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-green/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">液冷优势</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                液冷系统的 PUE（电能利用效率）可降至 1.05-1.15，
                而传统风冷系统 PUE 通常在 1.3-1.6。以 1 MW IT 负载计算，
                液冷每年可节省电费约 50-100 万元。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-accent-orange/20">
              <h4 className="text-sm font-semibold text-accent-orange mb-2">系统集成</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                液冷系统的排热通常通过 CDU（冷量分配单元）传递给制冷循环或冷却塔。
                典型方案：液冷 → CDU → 制冷机组 → 环境。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 8: Exercises ========== */}
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
              <h3 className="text-base font-semibold text-white">朗肯循环热效率</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某简单朗肯循环，汽轮机入口 h₃ = 3400 kJ/kg，出口 h₄ = 2300 kJ/kg，
              给水泵入口 h₁ = 200 kJ/kg，出口 h₂ = 210 kJ/kg。
              求：(a) 汽轮机做功； (b) 净功； (c) 锅炉吸热量； (d) 热效率。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  (a) w<sub>turb</sub> = h₃ − h₄ = 3400 − 2300 = <span className="text-accent-green font-bold">1100 kJ/kg</span><br />
                  (b) w<sub>pump</sub> = h₂ − h₁ = 210 − 200 = 10 kJ/kg<br />
                  &emsp;w<sub>net</sub> = 1100 − 10 = <span className="text-accent-green font-bold">1090 kJ/kg</span><br />
                  (c) q<sub>boiler</sub> = h₃ − h₂ = 3400 − 210 = <span className="text-accent-orange font-bold">3190 kJ/kg</span><br />
                  (d) η = w<sub>net</sub> / q<sub>boiler</sub> = 1090 / 3190 = <span className="text-accent-green font-bold">34.2%</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 2 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">布雷顿循环压比优化</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某燃气轮机布雷顿循环，压气机入口温度 300 K，γ = 1.4。
              分别计算压比 r<sub>p</sub> = 6、12、18 时的热效率。
              η = 1 − 1 / r<sub>p</sub><sup>(γ−1)/γ</sup>。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  (γ−1)/γ = 0.4/1.4 = 0.2857<br />
                  r<sub>p</sub>=6：η = 1 − 1/6<sup>0.2857</sup> = 1 − 1/1.669 = <span className="text-accent-green font-bold">40.1%</span><br />
                  r<sub>p</sub>=12：η = 1 − 1/12<sup>0.2857</sup> = 1 − 1/2.037 = <span className="text-accent-green font-bold">50.9%</span><br />
                  r<sub>p</sub>=18：η = 1 − 1/18<sup>0.2857</sup> = 1 − 1/2.290 = <span className="text-accent-green font-bold">56.3%</span><br />
                  <span className="text-gray-500 text-xs">效率随压比增大而提高，但增加幅度递减。实际设计中还需考虑压气机出口温度限制材料强度。</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 3 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">制冷循环 COP 计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某蒸气压缩制冷系统，蒸发温度 −10°C（263 K），冷凝温度 40°C（313 K）。
              制冷剂在压缩机入口为饱和蒸气（h₁ = 395 kJ/kg），
              压缩机出口过热（h₂ = 435 kJ/kg），
              膨胀阀前为饱和液体（h₃ = h₄ = 250 kJ/kg）。
              求 COP<sub>R</sub>。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  蒸发器吸热：q<sub>L</sub> = h₁ − h₄ = 395 − 250 = <span className="text-accent-green font-bold">145 kJ/kg</span><br />
                  压缩机耗功：w = h₂ − h₁ = 435 − 395 = <span className="text-accent-orange font-bold">40 kJ/kg</span><br />
                  COP<sub>R</sub> = q<sub>L</sub> / w = 145 / 40 = <span className="text-accent-green font-bold">3.63</span><br />
                  卡诺 COP<sub>R</sub> = T<sub>L</sub> / (T<sub>H</sub> − T<sub>L</sub>) = 263 / (313 − 263) = 263 / 50 = 5.26<br />
                  火用效率 = 3.63 / 5.26 = <span className="text-accent-cyan font-bold">69.0%</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 4 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-accent-cyan/10 text-accent-cyan text-sm font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">联合循环效率</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              某联合循环发电系统：燃气轮机效率 η<sub>GT</sub> = 38%，
              余热锅炉效率 η<sub>HRSG</sub> = 90%，
              蒸汽朗肯循环效率 η<sub>ST</sub> = 35%。
              求联合循环总效率（η<sub>CC</sub> = η<sub>GT</sub> + (1−η<sub>GT</sub>)·η<sub>HRSG</sub>·η<sub>ST</sub>）。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  η<sub>CC</sub> = η<sub>GT</sub> + (1 − η<sub>GT</sub>) × η<sub>HRSG</sub> × η<sub>ST</sub><br />
                  = 0.38 + (1 − 0.38) × 0.90 × 0.35<br />
                  = 0.38 + 0.62 × 0.90 × 0.35<br />
                  = 0.38 + 0.1953<br />
                  = <span className="text-accent-green font-bold">57.5%</span><br />
                  <span className="text-gray-500 text-xs">联合循环效率显著高于单一循环，是目前效率最高的火电技术。先进联合循环效率已超过 62%。</span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ========== Section 9: Advanced - CHP & ORC ========== */}
      <section id="advanced" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Layers className="w-4 h-4" />
          </span>
          进阶话题：热电联产与有机朗肯循环
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">热电联产（CHP）</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              热电联产（Combined Heat and Power, CHP），又称 cogeneration，
              是同时生产电能和热能的系统。一般火电厂的热效率仅 35-45%，
              其余 55-65% 的热量通过冷却塔排放到大气中造成巨大浪费。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4">
              <div className="text-center">
                <div className="text-lg font-bold text-accent-cyan font-mono">CHP 总效率 = (W + Q<sub>th</sub>) / Q<sub>fuel</sub></div>
                <p className="text-gray-500 text-xs mt-1">通常可达 75-90%</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-400">
              <div className="bg-tech-900/50 rounded p-3">
                <div className="text-accent-cyan font-semibold mb-1">背压式汽轮机</div>
                <p>排汽直接用于供热，简单高效，但供电随供热需求变化</p>
              </div>
              <div className="bg-tech-900/50 rounded p-3">
                <div className="text-accent-cyan font-semibold mb-1">抽凝式汽轮机</div>
                <p>从中压级抽汽供热，可独立调节供电和供热</p>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">有机朗肯循环（ORC）</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              有机朗肯循环（Organic Rankine Cycle, ORC）使用有机工质（如 R245fa、甲苯、
              硅氧烷等）代替水，利用低品位热源（80-300°C）发电。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                { source: "地热能", temp: "80-180°C", note: "全球地热发电装机 15 GW+" },
                { source: "太阳能光热", temp: "100-300°C", note: "CSP 与 ORC 结合" },
                { source: "工业余热", temp: "100-250°C", note: "钢铁/水泥/化工行业" },
              ].map((item) => (
                <div key={item.source} className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 text-center">
                  <div className="text-white text-sm font-semibold mb-1">{item.source}</div>
                  <div className="text-accent-cyan text-xs font-mono">{item.temp}</div>
                  <div className="text-gray-500 text-[10px]">{item.note}</div>
                </div>
              ))}
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">ORC 的独特优势</h4>
              <ul className="text-xs text-gray-400 space-y-1">
                <li>• 有机工质在较低温度下即可汽化，适合中低温热源</li>
                <li>• 工质分子量大，透平级数少，结构紧凑</li>
                <li>• 对于分布式能源系统（1 kW — 10 MW），ORC 效率可达 10-25%</li>
                <li>• 在数据中心余热回收中，0.5-50 MW 级 ORC 已开始商业应用</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Section 10: Next Chapter ========== */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-green/5 to-accent-teal/5 border border-accent-green/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-green font-mono mb-1">下一章</div>
              <h3 className="text-xl font-bold text-white">传热学基础</h3>
              <p className="text-gray-400 text-sm mt-1">
                学习热传导、对流传热和热辐射三种基本传热方式——从热力学分析到传热计算
              </p>
            </div>
            <Link
              href="/heat-transfer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-green text-black font-semibold text-sm hover:bg-accent-green/90 transition-all"
            >
              开始学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
