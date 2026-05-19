import { Thermometer, Layers, Target, Lightbulb, AlertCircle, BookOpen, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function ConductionPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-orange font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第 2.1 节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">导热 (热传导)</h1>
        <p className="text-gray-400 text-lg">
          热传导是固体内部热量传递的主要方式，掌握傅里叶定律和热阻分析方法是热设计的核心基本功。
        </p>
      </div>

      <ChapterNav
        sections={[
          { id: "intro", label: "章节简介" },
          { id: "theory", label: "理论讲解" },
          { id: "diagrams", label: "图示" },
          { id: "cases", label: "工程案例" },
          { id: "exercises", label: "练习题" },
          { id: "advanced", label: "进阶内容" },
          { id: "next", label: "下一章" },
        ]}
      />

      {/* Section 1: Intro */}
      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <Target className="w-4 h-4" />
          </span>
          章节简介
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">学习目标</h3>
          <div className="space-y-2">
            {[
              "理解导热的微观物理机制（分子碰撞、自由电子、声子）",
              "掌握傅里叶定律的数学表达式和物理意义",
              "能够计算一维稳态导热问题（平壁、圆筒壁）",
              "掌握热阻概念及其在多层结构中的应用",
              "了解接触热阻和各向异性导热等进阶话题",
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-gray-400 text-sm">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">预备知识</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            在学习导热之前，您应熟悉温度、热量、热流密度等基本概念。
            导热是三种基本传热方式之一，在固体中占据主导地位。
            电子器件散热、建筑保温、航空航天热防护等工程领域都离不开导热分析。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["温度场", "温度梯度", "热流密度", "稳态", "热平衡"].map((kw) => (
              <span key={kw} className="text-xs px-2.5 py-1 rounded-full bg-tech-600/30 text-gray-300">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Theory */}
      <section id="theory" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Thermometer className="w-4 h-4" />
          </span>
          理论讲解
        </h2>

        <div className="space-y-6">
          {/* 2.1 Micro-mechanisms */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.1 导热的微观机理</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              从微观角度看，导热是物质内部微观粒子（分子、原子、自由电子）热运动引起的能量传递过程。
              不同物质中的导热机理有所不同：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">气体</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  气体分子做无规则热运动，高温区域的分子动能较大，
                  通过分子间碰撞将能量传递给低温区域的分子。
                  气体导热系数较小，且随温度升高而增大。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">金属</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  金属内部存在大量自由电子，自由电子的热运动是金属导热的主要载体。
                  同时晶格振动（声子）也有贡献。纯铜的导热系数高达 401 W/(m·K)，
                  主要得益于自由电子的高效能量传输。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">非金属固体</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  非金属固体（如陶瓷、塑料）中缺少自由电子，导热主要依靠晶格振动（声子）。
                  声子导热效率低于自由电子，因此非金属的导热系数通常远低于金属。
                  例如氧化铝陶瓷约为 30 W/(m·K)。
                </p>
              </div>
            </div>
          </div>

          {/* 2.2 Fourier's Law */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.2 傅里叶定律</h3>
            <p className="text-gray-400 text-sm mb-4">
              傅里叶定律是导热的基本定律，由法国数学家傅里叶（Fourier）于 1822 年提出。
              它描述了热流密度与温度梯度之间的线性关系。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-lg text-gray-500 mb-2 font-mono">一维形式：</div>
              <div className="text-2xl font-bold text-accent-cyan font-mono">q = -k · dT/dx</div>
              <div className="text-lg text-gray-500 mt-2 font-mono">或</div>
              <div className="text-2xl font-bold text-accent-cyan font-mono">Q = -kA · dT/dx</div>
              <p className="text-gray-500 text-xs mt-2">傅里叶定律——热传导基本定律</p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">q (或 Q)</div>
                <div className="text-gray-500 text-xs">热流密度 W/m² (或热流量 W)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">k</div>
                <div className="text-gray-500 text-xs">导热系数 W/(m·K)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold font-mono">dT/dx</div>
                <div className="text-gray-500 text-xs">温度梯度 K/m（负号表示热量沿温度降低方向）</div>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">三维傅里叶定律（矢量形式）</h4>
              <div className="text-center">
                <div className="text-xl font-bold text-accent-cyan font-mono">q = -k ∇T = -k (∂T/∂x i + ∂T/∂y j + ∂T/∂z k)</div>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">
                其中 ∇T 为温度梯度矢量，q 为热流密度矢量，方向与温度梯度相反
              </p>
            </div>
          </div>

          {/* 2.3 Thermal Conductivity */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.3 导热系数 k 的物理意义</h3>
            <p className="text-gray-400 text-sm mb-4">
              导热系数 k 是物质固有的热物性参数，表征物质传导热量的能力。
              数值上等于单位温度梯度下通过单位面积的热流密度，单位 W/(m·K)。
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-tech-600/30">
                    <th className="text-left py-2 px-3 text-gray-400 font-semibold">材料</th>
                    <th className="text-right py-2 px-3 text-accent-cyan font-mono">k (W/(m·K))</th>
                    <th className="text-right py-2 px-3 text-gray-400 font-semibold">备注</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["纯铜", "401", "电气/散热首选"],
                    ["纯铝", "237", "性价比最优"],
                    ["6061 铝合金", "167", "常见结构件"],
                    ["金刚石", "~2000", "自然界最高"],
                    ["氧化铝陶瓷", "30", "绝缘导热"],
                    ["水", "0.6", "常见冷却液"],
                    ["空气", "0.026", "优良隔热体"],
                    ["气凝胶", "0.015", "超级隔热材料"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-tech-600/10">
                      <td className="py-2 px-3 text-gray-300">{row[0]}</td>
                      <td className="py-2 px-3 text-accent-cyan font-mono text-right">{row[1]}</td>
                      <td className="py-2 px-3 text-gray-500 text-right">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
              <Thermometer className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-amber font-semibold">关键认知：</span>
                导热系数差异极大——金刚石约为空气的 77,000 倍。
                理解材料导热系数的量级是热设计选材的基础。空气的低导热系数使其成为优良的隔热材料，
                但也是散热设计中需要克服的主要热阻来源。
              </p>
            </div>
          </div>

          {/* 2.4 1D Steady State */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.4 一维稳态导热方程</h3>
            <p className="text-gray-400 text-sm mb-4">
              对于一维稳态导热（温度不随时间变化，仅沿一个方向变化），傅里叶定律可直接积分求解。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-lg text-gray-500 mb-2 font-mono">一维平壁稳态导热：</div>
              <div className="text-xl font-bold text-accent-cyan font-mono">Q = kA · (T₁ - T₂) / L</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">Q</div>
                <div className="text-gray-500 text-xs">热流量 (W)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">k</div>
                <div className="text-gray-500 text-xs">导热系数 (W/m·K)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold font-mono">A</div>
                <div className="text-gray-500 text-xs">截面积 (m²)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-teal font-bold font-mono">L</div>
                <div className="text-gray-500 text-xs">厚度 (m)</div>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">推导过程</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                对于一维稳态导热，温度梯度 dT/dx 为常数。对傅里叶定律分离变量并积分：<br />
                <span className="text-accent-cyan font-mono">∫dT = -(Q/kA)∫dx</span>，从 x=0 (T=T₁) 到 x=L (T=T₂)：<br />
                <span className="text-accent-cyan font-mono">T₂ - T₁ = -(Q/kA) · L</span><br />
                整理得 <span className="text-accent-cyan font-mono">Q = kA · (T₁ - T₂) / L</span>
              </p>
            </div>
          </div>

          {/* 2.5 Thermal Resistance */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.5 热阻概念</h3>
            <p className="text-gray-400 text-sm mb-4">
              热阻（Thermal Resistance）是导热分析中最重要的概念之一，类比电路中的电阻，
              使得传热问题可以采用网络分析方法求解。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">R = L / (k · A)</div>
              <p className="text-gray-500 text-xs mt-1">导热热阻定义（平壁）</p>
              <div className="text-xl font-bold text-accent-cyan font-mono mt-3">Q = ΔT / R</div>
              <p className="text-gray-500 text-xs mt-1">热流 = 温差 / 热阻（类比 Ohm 定律 I = V/R）</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">电路-热路类比</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>电压 V → 温差 ΔT</div>
                  <div>电流 I → 热流 Q</div>
                  <div>电阻 R → 热阻 R</div>
                  <div>电导率 σ → 导热系数 k</div>
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">热阻单位</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>导热热阻：<span className="text-accent-cyan font-mono">°C/W</span></div>
                  <div>或 <span className="text-accent-cyan font-mono">K/W</span></div>
                  <div>热阻越低，导热能力越强</div>
                  <div>典型 CPU 散热器目标热阻：≤ 0.2 °C/W</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2.6 Multi-layer Wall */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.6 多层平壁导热</h3>
            <p className="text-gray-400 text-sm mb-4">
              实际工程中常遇到多层结构（如 CPU 芯片-导热硅脂-散热器底座）。
              多层平壁的总热阻等于各层热阻之和（串联）。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">R<sub>总</sub> = R₁ + R₂ + R₃ + ...</div>
              <div className="text-xl font-bold text-accent-cyan font-mono mt-2">Q = (T₁ - T₄) / (R₁ + R₂ + R₃)</div>
              <p className="text-gray-500 text-xs mt-1">三层平壁导热：总热阻 = 各层热阻串联</p>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">各层界面温度计算</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                已知总热流 Q 后，各层界面温度可通过逐层计算得到：<br />
                <span className="text-accent-cyan font-mono">T₂ = T₁ - Q · R₁</span>（第一层出口温度）<br />
                <span className="text-accent-cyan font-mono">T₃ = T₂ - Q · R₂</span>（第二层出口温度）<br />
                这种方法在电子散热系统设计中广泛使用。
              </p>
            </div>
          </div>

          {/* 2.7 Cylindrical Wall */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.7 圆筒壁导热</h3>
            <p className="text-gray-400 text-sm mb-4">
              圆筒壁导热常见于管道、热管和圆柱形散热器中。
              由于截面积随半径变化，其温度分布呈对数而非线性。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">Q = 2πkL · (T₁ - T₂) / ln(r₂/r₁)</div>
              <p className="text-gray-500 text-xs mt-1">单层圆筒壁导热（L 为长度，r₁、r₂ 为内外半径）</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">ln(r₂/r₁)</div>
                <div className="text-gray-500 text-xs">对数半径比（形状因子）</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">R = ln(r₂/r₁)/(2πkL)</div>
                <div className="text-gray-500 text-xs">圆筒壁热阻</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-4 mt-4">
              <Thermometer className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-cyan font-semibold">温度分布特点：</span>
                圆筒壁内温度沿径向呈对数分布（非线性），因为传热面积随半径增大而增大。
                对于薄壁圆筒（r₂/r₁ ≈ 1），可用平壁公式近似。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Diagrams */}
      <section id="diagrams" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Layers className="w-4 h-4" />
          </span>
          图示
        </h2>

        <div className="space-y-6">
          {/* Diagram 1: 1D Temperature Distribution */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">图 2-1 一维平壁导热温度分布</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 300" className="w-full max-w-xl mx-auto" fill="none">
                  {/* Axes */}
                  <line x1="60" y1="250" x2="460" y2="250" stroke="#555" strokeWidth="1.5" />
                  <line x1="60" y1="20" x2="60" y2="250" stroke="#555" strokeWidth="1.5" />
                  {/* Arrowheads */}
                  <polygon points="460,247 460,253 466,250" fill="#555" />
                  <polygon points="57,20 63,20 60,14" fill="#555" />
                  {/* Axis labels */}
                  <text x="450" y="265" textAnchor="end" fill="#666" fontSize="10" fontFamily="monospace">x (位置)</text>
                  <text x="30" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">T</text>
                  {/* Temperature line (linear decreasing) */}
                  <line x1="120" y1="60" x2="400" y2="220" stroke="#ef4444" strokeWidth="2.5" />
                  {/* Wall boundaries */}
                  <line x1="120" y1="50" x2="120" y2="255" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 2" />
                  <line x1="400" y1="50" x2="400" y2="255" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="4 2" />
                  {/* Wall fill */}
                  <rect x="120" y="240" width="280" height="15" rx="2" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
                  <text x="260" y="258" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">平壁 (厚度 L)</text>
                  {/* Temperature labels */}
                  <line x1="120" y1="60" x2="80" y2="60" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="75" y="64" textAnchor="end" fill="#ef4444" fontSize="10" fontFamily="monospace">T₁</text>
                  <line x1="400" y1="220" x2="420" y2="220" stroke="#00d4ff" strokeWidth="1" strokeDasharray="2 2" />
                  <text x="425" y="224" textAnchor="start" fill="#00d4ff" fontSize="10" fontFamily="monospace">T₂</text>
                  {/* Gradient annotation */}
                  <line x1="200" y1="60" x2="200" y2="140" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="200" y="110" textAnchor="start" fill="#f59e0b" fontSize="8" fontFamily="monospace">dT/dx = 常数</text>
                  {/* Heat flux arrow */}
                  <line x1="400" y1="190" x2="460" y2="190" stroke="#f59e0b" strokeWidth="1.5" />
                  <polygon points="454,187 454,193 460,190" fill="#f59e0b" />
                  <text x="430" y="185" textAnchor="start" fill="#f59e0b" fontSize="8" fontFamily="monospace">Q</text>
                  {/* Temperature points */}
                  <circle cx="120" cy="60" r="3.5" fill="#ef4444" />
                  <circle cx="400" cy="220" r="3.5" fill="#00d4ff" />
                </svg>
                <p className="text-xs text-gray-500 mt-2">
                  图 2-1 一维稳态导热温度沿壁厚线性分布。温度梯度 dT/dx 为常数，热流 Q 恒定时，温度呈直线变化。
                </p>
              </div>
            </div>
          </div>

          {/* Diagram 2: Multi-layer Wall Thermal Resistance Network */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">图 2-2 多层平壁热阻网络图</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 200" className="w-full max-w-xl mx-auto" fill="none">
                  {/* Multi-layer wall */}
                  <rect x="30" y="10" width="60" height="140" rx="3" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1.5" />
                  <rect x="90" y="10" width="60" height="140" rx="3" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1.5" />
                  <rect x="150" y="10" width="60" height="140" rx="3" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1.5" />
                  <text x="60" y="87" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">层1</text>
                  <text x="120" y="87" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">层2</text>
                  <text x="180" y="87" textAnchor="middle" fill="#10b981" fontSize="10" fontFamily="monospace">层3</text>
                  {/* Temperature labels */}
                  <text x="20" y="30" textAnchor="end" fill="#ef4444" fontSize="10" fontFamily="monospace">T₁</text>
                  <text x="85" y="30" textAnchor="end" fill="#f59e0b" fontSize="10" fontFamily="monospace">T₂</text>
                  <text x="145" y="30" textAnchor="end" fill="#f59e0b" fontSize="10" fontFamily="monospace">T₃</text>
                  <text x="215" y="30" textAnchor="start" fill="#00d4ff" fontSize="10" fontFamily="monospace">T₄</text>
                  {/* Equivalent circuit below */}
                  <text x="30" y="175" textAnchor="start" fill="#666" fontSize="9" fontFamily="monospace">等效热路：</text>
                  {/* T1 node */}
                  <circle cx="120" cy="190" r="3" fill="#ef4444" />
                  <text x="110" y="194" textAnchor="end" fill="#ef4444" fontSize="8" fontFamily="monospace">T₁</text>
                  {/* R1 */}
                  <rect x="135" y="183" width="40" height="14" rx="2" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1" />
                  <text x="155" y="193" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">R₁</text>
                  <line x1="123" y1="190" x2="135" y2="190" stroke="#ef4444" strokeWidth="1" />
                  {/* T2 node */}
                  <circle cx="180" cy="190" r="3" fill="#f59e0b" />
                  <text x="172" y="194" textAnchor="end" fill="#f59e0b" fontSize="8" fontFamily="monospace">T₂</text>
                  {/* R2 */}
                  <rect x="195" y="183" width="40" height="14" rx="2" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="1" />
                  <text x="215" y="193" textAnchor="middle" fill="#00d4ff" fontSize="7" fontFamily="monospace">R₂</text>
                  <line x1="183" y1="190" x2="195" y2="190" stroke="#00d4ff" strokeWidth="1" />
                  {/* T3 node */}
                  <circle cx="240" cy="190" r="3" fill="#f59e0b" />
                  <text x="232" y="194" textAnchor="end" fill="#f59e0b" fontSize="8" fontFamily="monospace">T₃</text>
                  {/* R3 */}
                  <rect x="255" y="183" width="40" height="14" rx="2" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
                  <text x="275" y="193" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">R₃</text>
                  <line x1="243" y1="190" x2="255" y2="190" stroke="#10b981" strokeWidth="1" />
                  {/* T4 node */}
                  <circle cx="300" cy="190" r="3" fill="#00d4ff" />
                  <text x="305" y="194" textAnchor="start" fill="#00d4ff" fontSize="8" fontFamily="monospace">T₄</text>
                  {/* Q arrow through circuit */}
                  <line x1="300" y1="190" x2="340" y2="190" stroke="#f59e0b" strokeWidth="1.5" />
                  <polygon points="334,187 334,193 340,190" fill="#f59e0b" />
                  <text x="350" y="194" textAnchor="start" fill="#f59e0b" fontSize="8" fontFamily="monospace">Q</text>
                </svg>
                <p className="text-xs text-gray-500 mt-2">
                  图 2-2 多层平壁及其等效热阻串联网络。总热阻 R_总 = R₁ + R₂ + R₃，热流 Q = (T₁ − T₄) / R_总。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Cases */}
      <section id="cases" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <AlertCircle className="w-4 h-4" />
          </span>
          工程案例
        </h2>

        <div className="space-y-6">
          {/* Case 1: CPU Heatsink */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">案例 1：CPU 散热器底座导热设计</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  某 CPU 功耗为 150W，芯片尺寸 20mm × 20mm，结温最高 95°C。
                  需要在芯片上方安装散热器底座（厚度 5mm），将热量传导至翅片区域。
                  环境温度 25°C。比较铜底和铝底的导热性能。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-amber mb-2">已知参数</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  铜 k_Cu = 401 W/(m·K)，铝 k_Al = 237 W/(m·K)<br />
                  芯片面积 A = 0.02 × 0.02 = 0.0004 m²<br />
                  底座厚度 L = 0.005 m<br />
                  Q = 150W
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">计算分析</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                铜底：R_Cu = L/(k·A) = 0.005 / (401 × 0.0004) = <span className="text-accent-cyan font-mono">0.0312 °C/W</span><br />
                铝底：R_Al = 0.005 / (237 × 0.0004) = <span className="text-accent-cyan font-mono">0.0527 °C/W</span><br />
                铜底温降：ΔT_Cu = Q × R_Cu = 150 × 0.0312 = <span className="text-accent-green font-mono">4.68°C</span><br />
                铝底温降：ΔT_Al = 150 × 0.0527 = <span className="text-accent-orange font-mono">7.91°C</span><br />
                铜底比铝底温度低约 3.2°C。在 150W 功耗下，铜底比铝底的导热温降减小 41%。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-accent-green/5 border border-accent-green/10 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-green font-semibold">设计结论：</span>
                铜底座导热性能优于铝底座约 41%，但成本约为 3-4 倍。
                对于高性能 CPU（{'>'}100W），推荐使用铜底座或铜铝复合底座。
                对于低功耗场景（{'<'}50W），铝底座已足够。
              </p>
            </div>
          </div>

          {/* Case 2: PCB Thermal Vias */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">案例 2：PCB 导热过孔设计</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">背景</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  PCB 的 FR4 基材导热系数仅约 0.3 W/(m·K)，
                  通过在 PCB 上布置铜质导热过孔（Thermal Via）可显著降低热阻。
                  过孔直径 0.3mm，铜镀层厚度 25μm，长度 1.6mm（标准 2 层板厚度）。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">单片过孔热阻</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  铜截面积 A_Cu = π × (0.15² − 0.125²) = π × 0.006875 ≈ 0.0216 mm²<br />
                  = 2.16 × 10⁻⁸ m²<br />
                  R_via = L / (k_Cu · A_Cu) = 0.0016 / (401 × 2.16×10⁻⁸)<br />
                  = <span className="text-accent-cyan font-mono">185 °C/W</span>
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">阵列优化</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                单片过孔热阻 185°C/W 仍然较高，需并联多孔。<br />
                若放置 5×5 = 25 个过孔阵列，总热阻 R_total = 185 / 25 = <span className="text-accent-cyan font-mono">7.4 °C/W</span><br />
                若放置 10×10 = 100 个过孔，总热阻 R_total = 185 / 100 = <span className="text-accent-cyan font-mono">1.85 °C/W</span><br />
                相比 FR4 基材的直接导热（约 50-100 °C/W），过孔阵列可将热阻降低 1-2 个数量级。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-4">
              <Thermometer className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-cyan font-semibold">设计准则：</span>
                功率器件下方应密集布置导热过孔，典型间距 0.5-1.0mm。
                过孔数量越多、孔径越大、铜镀层越厚，导热效果越好。
                同时需考虑过孔对 PCB 制造成本的影响。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Exercises */}
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
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">1</span>
              <h3 className="text-base font-semibold text-white">单层平壁导热热流计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一厚度为 10mm 的铜板（k = 401 W/m·K），两侧温度分别为 100°C 和 60°C，
              传热面积为 0.05 m²。求通过铜板的热流量 Q。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  由傅里叶定律：<span className="text-accent-cyan font-mono">Q = kA · (T₁ − T₂) / L</span><br />
                  代入数值：<span className="text-accent-cyan font-mono">Q = 401 × 0.05 × (100 − 60) / 0.01</span><br />
                  <span className="text-accent-cyan font-mono">Q = 401 × 0.05 × 40 / 0.01</span><br />
                  <span className="text-accent-cyan font-mono">Q = 401 × 200 = 80,200 W</span><br />
                  热流量约为 <span className="text-accent-green font-bold">80.2 kW</span>。<br />
                  <span className="text-gray-500 text-xs">这表明铜的导热能力极强，10°C/mm 的温度梯度即可传递巨大热量。</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 2 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">多层平壁温度分布</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一炉壁由三层材料组成：内侧耐火砖（k₁ = 1.2 W/m·K，L₁ = 0.2m），
              中间保温层（k₂ = 0.08 W/m·K，L₂ = 0.1m），
              外侧钢板（k₃ = 45 W/m·K，L₃ = 0.005m）。
              炉内温度 T₁ = 800°C，环境温度 T₄ = 30°C，壁面积 A = 2 m²。
              求通过炉壁的热流量和各界面温度。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  各层热阻：<br />
                  <span className="text-accent-cyan font-mono">R₁ = 0.2/(1.2×2) = 0.0833 K/W</span><br />
                  <span className="text-accent-cyan font-mono">R₂ = 0.1/(0.08×2) = 0.625 K/W</span><br />
                  <span className="text-accent-cyan font-mono">R₃ = 0.005/(45×2) = 0.0000556 K/W</span><br />
                  总热阻：<span className="text-accent-cyan font-mono">R_总 = 0.0833 + 0.625 + 0.0000556 ≈ 0.7084 K/W</span><br />
                  热流量：<span className="text-accent-cyan font-mono">Q = (800-30)/0.7084 ≈ 1087 W</span><br />
                  界面温度：<br />
                  <span className="text-accent-cyan font-mono">T₂ = 800 − 1087 × 0.0833 = 800 − 90.5 ≈ 709.5°C</span><br />
                  <span className="text-accent-cyan font-mono">T₃ = 709.5 − 1087 × 0.625 = 709.5 − 679.4 ≈ 30.1°C</span><br />
                  <span className="text-accent-green font-bold">关键发现：</span>保温层热阻占总热阻的 88.2%，承担了绝大部分温降（679.4°C）。
                  钢板热阻几乎可以忽略。
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 3 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">思考：为什么空气是良好的隔热材料？</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              从导热的微观机理和导热系数量级两个方面，解释为什么静止空气是一种优良的隔热材料。
              并说明为什么双层玻璃窗比单层玻璃窗隔热效果更好。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">答：</span><br />
                  <span className="text-accent-cyan font-semibold">1) 微观机理：</span>气体分子间距大（远大于固体），
                  分子间碰撞频率低，能量传递效率远低于固体中的自由电子或声子。<br />
                  <span className="text-accent-cyan font-semibold">2) 量级比较：</span>
                  空气 k ≈ 0.026 W/m·K，约为铜的 1/15,000。
                  这意味着相同厚度下，空气的热阻是铜的 15,000 倍。<br />
                  <span className="text-accent-cyan font-semibold">3) 双层玻璃原理：</span>
                  双层玻璃中间夹有静止空气层（或真空），
                  玻璃本身导热较快（k ≈ 0.8 W/m·K），但空气层提供了巨大的热阻。
                  两层玻璃之间的空气层如同一个高效的隔热屏障。<br />
                  <span className="text-gray-500 text-xs">注：空气层的隔热效果依赖于&ldquo;静止&rdquo;条件。若空气流动形成对流，隔热性能将大幅下降。</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 4 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">圆筒壁导热</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一蒸汽管道内径 r₁ = 50mm，外径 r₂ = 60mm，管材导热系数 k = 50 W/m·K。
              管内蒸汽温度 T₁ = 200°C，管外表面温度 T₂ = 40°C，管道长度 L = 10m。
              求管道散热量 Q。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  圆筒壁导热公式：<span className="text-accent-cyan font-mono">Q = 2πkL · (T₁ − T₂) / ln(r₂/r₁)</span><br />
                  代入：<span className="text-accent-cyan font-mono">Q = 2π × 50 × 10 × (200 − 40) / ln(60/50)</span><br />
                  <span className="text-accent-cyan font-mono">Q = 2π × 500 × 160 / ln(1.2)</span><br />
                  <span className="text-accent-cyan font-mono">ln(1.2) ≈ 0.1823</span><br />
                  <span className="text-accent-cyan font-mono">Q = 2π × 500 × 160 / 0.1823</span><br />
                  <span className="text-accent-cyan font-mono">Q ≈ 2,758,000 W ≈ 2.76 MW</span><br />
                  10m 长的管道散热量高达 <span className="text-accent-green font-bold">2.76 MW</span>，
                  说明未保温的蒸汽管道热损失巨大，必须包裹保温材料。<br />
                  <span className="text-gray-500 text-xs">如加装 50mm 厚保温层（k = 0.04 W/m·K），可将散热量降低 95% 以上。</span>
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Section 6: Advanced */}
      <section id="advanced" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <ArrowRight className="w-4 h-4" />
          </span>
          进阶内容
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">接触热阻</h3>
            <p className="text-gray-400 text-sm mb-4">
              当两个固体表面接触时，实际接触面积仅为名义接触面积的很小一部分（1-2%），
              表面间的空隙充满空气（低导热系数），导致界面处产生额外热阻——接触热阻。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">R<sub>c</sub> = 1 / (h<sub>c</sub> · A)</div>
              <p className="text-gray-500 text-xs mt-1">接触热阻，其中 h_c 为接触导热系数（W/m²·K）</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">影响因素</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>• 表面粗糙度：越粗糙，接触热阻越大</div>
                  <div>• 接触压力：压力越大，接触热阻越小</div>
                  <div>• 界面材料：使用导热硅脂可填充空隙</div>
                  <div>• 表面硬度：软材料变形大，接触更好</div>
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">工程应用</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>• CPU-散热器之间必须使用导热硅脂（TIM）</div>
                  <div>• TIM 热阻典型值：0.01-0.1 °C·cm²/W</div>
                  <div>• 使用液金（液态金属）热阻可低至 0.005</div>
                  <div>• 无 TIM 时接触热阻可高达 1-10 °C·cm²/W</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">各向异性导热</h3>
            <p className="text-gray-400 text-sm mb-4">
              某些材料的导热系数在不同方向上差异很大，称为各向异性导热。
              典型例子包括石墨片（面内高达 1500 W/m·K，法向仅 5-10 W/m·K）和碳纤维复合材料。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">k = [k<sub>xx</sub>, k<sub>yy</sub>, k<sub>zz</sub>]</div>
              <p className="text-gray-500 text-xs mt-1">各向异性导热系数张量（对角形式）</p>
            </div>
            <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-amber font-semibold">设计应用：</span>
                利用各向异性材料定向导热——在手机散热中，石墨散热片沿面方向快速将热量扩散，
                同时法向低导热系数阻止热量返回屏幕。这种定向导热特性是先进热管理的重要工具。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Next Chapter */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-orange/5 to-accent-amber/5 border border-accent-orange/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-orange font-mono mb-1">下一节</div>
              <h3 className="text-xl font-bold text-white">对流传热</h3>
              <p className="text-gray-400 text-sm mt-1">学习流体与固体表面之间的热量传递——对流传热</p>
            </div>
            <Link
              href="/heat-transfer/convection"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-orange text-black font-semibold text-sm hover:bg-accent-orange/90 transition-all"
            >
              开始学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
