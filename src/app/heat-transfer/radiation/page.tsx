import { Sun, Thermometer, Waves, Target, Lightbulb, AlertCircle, BookOpen, ChevronRight, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function RadiationPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-red font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第 2.3 节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">热辐射</h1>
        <p className="text-gray-400 text-lg">
          热辐射是物体通过电磁波传递热量的方式，不需要介质，在高温和真空环境中尤为重要。
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
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Target className="w-4 h-4" />
          </span>
          章节简介
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">学习目标</h3>
          <div className="space-y-2">
            {[
              "理解热辐射的本质——电磁波传热",
              "掌握黑体辐射的三大定律（斯特藩-玻尔兹曼、普朗克、维恩位移）",
              "理解发射率、吸收率和灰体模型",
              "掌握辐射换热网络分析方法",
              "了解太阳辐射和温室效应的基本原理",
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-red/10 text-accent-red text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
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
            热辐射与导热和对流有本质区别：它不需要介质，可以在真空中传播。
            所有温度高于绝对零度的物体都持续向外辐射能量。温度越高，辐射越强。
            在高温炉设计、航天器热控、LED 灯具散热等领域，热辐射分析不可或缺。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["电磁波", "黑体", "发射率", "吸收率", "光谱", "热平衡"].map((kw) => (
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
            <Waves className="w-4 h-4" />
          </span>
          理论讲解
        </h2>

        <div className="space-y-6">
          {/* 2.1 Nature of Radiation */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.1 热辐射的本质</h3>
            <p className="text-gray-400 text-sm mb-4">
              热辐射是物体内部原子和分子热运动导致的电磁波辐射。
              与导热和对流不同，热辐射具有以下显著特征：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <div className="text-sm font-semibold text-accent-cyan mb-2">不需要介质</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  热辐射可以在真空中传播，这是太空中唯一的传热方式。
                  太阳能量就是通过辐射穿越 1.5 亿公里的真空到达地球。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <div className="text-sm font-semibold text-accent-orange mb-2">与温度强相关</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  辐射功率与绝对温度的四次方成正比（E ∝ T⁴）。
                  高温下辐射急剧增强——温度翻倍，辐射功率增加 16 倍。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <div className="text-sm font-semibold text-accent-green mb-2">双向往返</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  所有物体同时发射和吸收辐射。净传热量为发射与吸收的差值，
                  温差越大，净辐射传热越强。
                </p>
              </div>
            </div>
            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">电磁波谱</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                热辐射主要位于红外波段（波长 0.1 ~ 100 μm），
                随着温度升高，峰值波长向短波方向移动。
                太阳表面约 5800K，峰值在可见光波段（约 0.5 μm）；
                室温物体（300K）峰值在红外波段（约 10 μm）。
              </p>
            </div>
          </div>

          {/* 2.2 Blackbody Radiation */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.2 黑体辐射概念</h3>
            <p className="text-gray-400 text-sm mb-4">
              黑体是一个理想化的物体——它能吸收所有入射的电磁辐射（吸收率 α = 1），
              同时也是相同温度下最强的辐射体。黑体辐射是研究实际物体辐射的基准。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">E<sub>b</sub> = σT⁴</div>
              <p className="text-gray-500 text-xs mt-1">斯特藩-玻尔兹曼定律——黑体辐射总功率</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">E_b</div>
                <div className="text-gray-500 text-xs">黑体辐射力 W/m²</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">σ = 5.67×10⁻⁸</div>
                <div className="text-gray-500 text-xs">斯特藩-玻尔兹曼常数 W/(m²·K⁴)</div>
              </div>
            </div>
          </div>

          {/* 2.3 Planck's Law */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.3 普朗克定律（辐射光谱分布）</h3>
            <p className="text-gray-400 text-sm mb-4">
              普朗克定律揭示了黑体辐射能量在不同波长上的分布规律，
              是量子力学的重要基石之一（普朗克因此获 1918 年诺贝尔物理学奖）。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">E<sub>bλ</sub>(λ,T) = 2πhc² / [λ⁵(e^(hc/λkT) − 1)]</div>
              <p className="text-gray-500 text-xs mt-1">普朗克辐射定律——光谱辐射力分布</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">h = 6.626×10⁻³⁴</div>
                <div className="text-gray-500 text-xs">普朗克常数 J·s</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">c = 2.998×10⁸</div>
                <div className="text-gray-500 text-xs">光速 m/s</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold font-mono">k = 1.381×10⁻²³</div>
                <div className="text-gray-500 text-xs">玻尔兹曼常数 J/K</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-teal font-bold font-mono">λ</div>
                <div className="text-gray-500 text-xs">波长 μm</div>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-cyan font-semibold">物理意义：</span>
                普朗克定律给出了任意温度下黑体辐射光谱的精确形状。
                温度越高，辐射越强且峰值向短波方向移动。
                工程中常使用普朗克定律计算特定波段的辐射能量。
              </p>
            </div>
          </div>

          {/* 2.4 Wien's Displacement Law */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.4 维恩位移定律</h3>
            <p className="text-gray-400 text-sm mb-4">
              维恩位移定律描述了黑体辐射光谱峰值波长 λ_max 与温度 T 的关系。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">λ<sub>max</sub> · T = 2898 μm·K</div>
              <p className="text-gray-500 text-xs mt-1">维恩位移定律</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">典型计算</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  太阳（T ≈ 5800K）：λ_max = 2898/5800 ≈ 0.5 μm（可见光）<br />
                  白炽灯灯丝（T ≈ 2800K）：λ_max ≈ 1.03 μm（近红外）<br />
                  室温物体（T ≈ 300K）：λ_max ≈ 9.66 μm（远红外）
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">工程意义</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  根据物体温度预判其主要辐射波段，选择合适的热探测器和辐射涂层。
                  红外热像仪检测 8-14 μm 波段（室温物体）。
                  太阳能电池工作在 0.3-2.5 μm 波段（太阳辐射）。
                </p>
              </div>
            </div>
          </div>

          {/* 2.5 Real Surface Properties */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.5 实际物体辐射与灰体模型</h3>
            <p className="text-gray-400 text-sm mb-4">
              实际物体的辐射能力低于同温度下的黑体，引入发射率 ε 来度量。
              同时物体对入射辐射的吸收能力用吸收率 α 描述。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/70 rounded-lg p-4 text-center border border-tech-600/20">
                <div className="text-lg font-bold text-accent-cyan font-mono mb-2">实际辐射力</div>
                <div className="text-xl font-bold text-accent-cyan font-mono">E = ε · σT⁴</div>
                <p className="text-gray-500 text-xs mt-1">基尔霍夫定律：α = ε（热平衡时）</p>
              </div>
              <div className="bg-tech-900/70 rounded-lg p-4 text-center border border-tech-600/20">
                <div className="text-lg font-bold text-accent-cyan font-mono mb-2">灰体模型</div>
                <div className="text-xl font-bold text-accent-cyan font-mono">ε(λ) = 常数 &lt; 1</div>
                <p className="text-gray-500 text-xs mt-1">发射率与波长无关的理想化模型</p>
              </div>
            </div>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-tech-600/30">
                    <th className="text-left py-2 px-3 text-gray-400 font-semibold">材料</th>
                    <th className="text-right py-2 px-3 text-accent-cyan font-mono">发射率 ε</th>
                    <th className="text-right py-2 px-3 text-gray-400 font-semibold">备注</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["黑体（理想）", "1.0", "完美辐射体"],
                    ["阳极氧化铝", "0.8~0.85", "常用辐射增强处理"],
                    ["抛光铝", "0.04~0.06", "低辐射反射面"],
                    ["黑漆（无光）", "0.95~0.98", "最高效辐射涂层"],
                    ["白漆", "0.85~0.95", "可见光反射但红外辐射强"],
                    ["抛光铜", "0.03~0.05", "低辐射面"],
                    ["氧化的钢", "0.7~0.8", "高温氧化后辐射增强"],
                    ["玻璃", "0.85~0.95", "红外波段高发射率"],
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
                <span className="text-accent-amber font-semibold">关键概念：</span>
                发射率 ε 是实际物体辐射能力与黑体的比值，介于 0~1 之间。
                抛光金属表面的低发射率使其成为理想的辐射反射屏（太空毯）。
                黑漆表面的高发射率使其成为理想的散热涂层。
              </p>
            </div>
          </div>

          {/* 2.6 Radiation Network */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.6 辐射换热网络法</h3>
            <p className="text-gray-400 text-sm mb-4">
              辐射网络法将辐射换热问题抽象为等效电路，用表面热阻和空间热阻求解复杂辐射换热问题。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">表面热阻</h4>
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-accent-cyan font-mono">R<sub>s</sub> = (1 − ε) / (εA)</div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  表示实际表面与黑体表面之间的辐射阻力。
                  当 ε → 1（黑体表面）时，表面热阻趋于零。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">空间热阻</h4>
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-accent-cyan font-mono">R<sub>12</sub> = 1 / (A₁F<sub>12</sub>)</div>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  表面 1 和表面 2 之间的几何阻力。
                  F_12 为角系数，取决于两表面的几何关系。
                </p>
              </div>
            </div>

            <div className="bg-tech-900/70 rounded-lg p-4 text-center mb-4">
              <div className="text-lg font-bold text-accent-cyan font-mono">Q<sub>12</sub> = σ(T₁⁴ − T₂⁴) / ( (1−ε₁)/(ε₁A₁) + 1/(A₁F₁₂) + (1−ε₂)/(ε₂A₂) )</div>
              <p className="text-gray-500 text-xs mt-1">两灰体表面间辐射换热的一般公式</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">特例：无限大平行平板</h4>
                <div className="text-center mb-1">
                  <div className="text-base font-bold text-accent-cyan font-mono">F₁₂ = 1, A₁ = A₂ = A</div>
                  <div className="text-base font-bold text-accent-cyan font-mono mt-1">Q = σA(T₁⁴ − T₂⁴) / (1/ε₁ + 1/ε₂ − 1)</div>
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-amber mb-2">特例：黑体包围体</h4>
                <div className="text-center mb-1">
                  <div className="text-base font-bold text-accent-cyan font-mono">ε₂ = 1, F₁₂ = 1</div>
                  <div className="text-base font-bold text-accent-cyan font-mono mt-1">Q = ε₁σA₁(T₁⁴ − T₂⁴)</div>
                </div>
                <p className="text-gray-400 text-xs mt-1">表面 1 被大黑体环境包围</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Diagrams */}
      <section id="diagrams" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Waves className="w-4 h-4" />
          </span>
          图示
        </h2>

        <div className="space-y-6">
          {/* Diagram 1: Blackbody Spectrum */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">图 2-5 黑体辐射光谱分布曲线</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 560 340" className="w-full max-w-2xl mx-auto" fill="none">
                  {/* Axes */}
                  <line x1="50" y1="300" x2="520" y2="300" stroke="#555" strokeWidth="1.5" />
                  <line x1="50" y1="20" x2="50" y2="300" stroke="#555" strokeWidth="1.5" />
                  <polygon points="520,297 520,303 526,300" fill="#555" />
                  <polygon points="47,20 53,20 50,14" fill="#555" />
                  <text x="520" y="318" textAnchor="end" fill="#666" fontSize="10" fontFamily="monospace">波长 λ (μm)</text>
                  <text x="30" y="25" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">E_bλ</text>

                  {/* T=5800K curve (Sun) */}
                  <path d="M70,295 Q80,280 100,240 Q120,180 130,140 Q140,100 150,70 Q160,45 170,35 Q180,30 195,50 Q210,75 220,100 Q240,140 260,170 Q280,195 300,210 Q320,220 340,228 Q360,233 380,238 Q400,242 420,245 Q440,248 460,250 Q480,252 500,253 Q510,254 520,254"
                    stroke="#ef4444" strokeWidth="2" fill="none" />
                  <text x="180" y="22" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">5800K（太阳）</text>
                  {/* Peak marker for 5800K */}
                  <line x1="170" y1="35" x2="170" y2="300" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="170" y="315" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">λ_max≈0.5</text>

                  {/* T=2800K curve (filament) */}
                  <path d="M80,295 Q100,280 130,260 Q160,240 190,220 Q220,200 250,190 Q280,180 310,185 Q340,190 370,200 Q400,210 430,220 Q460,228 490,235 Q510,240 520,242"
                    stroke="#f59e0b" strokeWidth="2" fill="none" />
                  <text x="340" y="175" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">2800K（灯丝）</text>
                  <line x1="290" y1="185" x2="290" y2="300" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
                  <text x="290" y="315" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">λ_max≈1.03</text>

                  {/* T=1000K curve */}
                  <path d="M90,295 Q120,290 160,285 Q200,280 240,277 Q280,275 320,276 Q360,278 400,282 Q440,286 480,290 Q510,293 520,294"
                    stroke="#00d4ff" strokeWidth="2" fill="none" />
                  <text x="440" y="278" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">1000K</text>

                  {/* T=300K curve */}
                  <path d="M100,298 Q200,297 300,297 Q400,296 500,296 Q520,296 520,296"
                    stroke="#0891b2" strokeWidth="2" fill="none" strokeDasharray="4 2" />
                  <text x="480" y="293" textAnchor="middle" fill="#0891b2" fontSize="9" fontFamily="monospace">300K（室温）</text>

                  {/* Visible spectrum band */}
                  <rect x="70" y="320" width="100" height="10" rx="2" fill="url(#visGrad)" />
                  <defs>
                    <linearGradient id="visGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8b00ff" />
                      <stop offset="25%" stopColor="#0000ff" />
                      <stop offset="50%" stopColor="#00ff00" />
                      <stop offset="75%" stopColor="#ffff00" />
                      <stop offset="100%" stopColor="#ff0000" />
                    </linearGradient>
                  </defs>
                  <text x="120" y="345" textAnchor="middle" fill="#666" fontSize="8" fontFamily="monospace">可见光 0.38~0.78μm</text>
                </svg>
                <p className="text-xs text-gray-500 mt-2">
                  图 2-5 不同温度下黑体辐射光谱分布。温度升高，辐射峰值增大且向短波方向移动（维恩位移定律）。
                  太阳辐射峰值位于可见光波段，室温物体辐射峰值位于远红外波段。
                </p>
              </div>
            </div>
          </div>

          {/* Diagram 2: Two-surface Radiation Network */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">图 2-6 两灰体表面辐射换热网络</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 520 180" className="w-full max-w-2xl mx-auto" fill="none">
                  {/* Surface 1 */}
                  <rect x="30" y="15" width="70" height="50" rx="4" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1.5" />
                  <text x="65" y="30" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">表面 1</text>
                  <text x="65" y="45" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">T₁, ε₁, A₁</text>
                  <text x="65" y="75" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">J₁ = E₁ + ρ₁G₁</text>
                  <text x="65" y="88" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">有效辐射</text>

                  {/* Surface 2 */}
                  <rect x="420" y="15" width="70" height="50" rx="4" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1.5" />
                  <text x="455" y="30" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">表面 2</text>
                  <text x="455" y="45" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">T₂, ε₂, A₂</text>
                  <text x="455" y="75" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">J₂ = E₂ + ρ₂G₂</text>
                  <text x="455" y="88" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">有效辐射</text>

                  {/* Circuit diagram */}
                  {/* E_b1 node */}
                  <circle cx="120" cy="135" r="3" fill="#ef4444" />
                  <text x="108" y="139" textAnchor="end" fill="#ef4444" fontSize="9" fontFamily="monospace">E_b₁</text>
                  {/* Surface resistance 1 */}
                  <rect x="135" y="128" width="50" height="14" rx="2" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1" />
                  <text x="160" y="138" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">R_s₁</text>
                  <text x="160" y="125" textAnchor="middle" fill="#555" fontSize="5" fontFamily="monospace">(1-ε₁)/(ε₁A₁)</text>
                  <line x1="123" y1="135" x2="135" y2="135" stroke="#ef4444" strokeWidth="1" />
                  {/* J1 node */}
                  <circle cx="190" cy="135" r="3" fill="#f59e0b" />
                  <text x="195" y="139" textAnchor="start" fill="#f59e0b" fontSize="9" fontFamily="monospace">J₁</text>
                  {/* Space resistance */}
                  <rect x="210" y="128" width="70" height="14" rx="2" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
                  <text x="245" y="138" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">R₁₂ = 1/(A₁F₁₂)</text>
                  <line x1="193" y1="135" x2="210" y2="135" stroke="#10b981" strokeWidth="1" />
                  {/* J2 node */}
                  <circle cx="285" cy="135" r="3" fill="#f59e0b" />
                  <text x="290" y="139" textAnchor="start" fill="#f59e0b" fontSize="9" fontFamily="monospace">J₂</text>
                  {/* Surface resistance 2 */}
                  <rect x="305" y="128" width="50" height="14" rx="2" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="1" />
                  <text x="330" y="138" textAnchor="middle" fill="#00d4ff" fontSize="7" fontFamily="monospace">R_s₂</text>
                  <text x="330" y="125" textAnchor="middle" fill="#555" fontSize="5" fontFamily="monospace">(1-ε₂)/(ε₂A₂)</text>
                  <line x1="288" y1="135" x2="305" y2="135" stroke="#00d4ff" strokeWidth="1" />
                  {/* E_b2 node */}
                  <circle cx="360" cy="135" r="3" fill="#00d4ff" />
                  <text x="365" y="139" textAnchor="start" fill="#00d4ff" fontSize="9" fontFamily="monospace">E_b₂</text>

                  {/* Q12 arrow */}
                  <line x1="360" y1="135" x2="420" y2="135" stroke="#f59e0b" strokeWidth="1.5" />
                  <polygon points="414,132 414,138 420,135" fill="#f59e0b" />
                  <text x="390" y="130" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">Q₁₂</text>

                  {/* Calculation box */}
                  <rect x="120" y="150" width="220" height="22" rx="3" fill="rgba(255,255,255,0.03)" stroke="#555" strokeWidth="0.5" />
                  <text x="230" y="165" textAnchor="middle" fill="#666" fontSize="7" fontFamily="monospace">Q₁₂ = (E_b₁ − E_b₂) / (R_s₁ + R₁₂ + R_s₂)</text>
                </svg>
                <p className="text-xs text-gray-500 mt-2">
                  图 2-6 两灰体表面辐射换热网络图。E_b 为黑体辐射力，J 为有效辐射，
                  R_s 为表面热阻，R₁₂ 为空间热阻。总热阻 = R_s₁ + R₁₂ + R_s₂。
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
          {/* Case 1: Surface Coating */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">案例 1：散热器表面涂层辐射增强</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  铝合金散热器（A = 0.05 m²，T_s = 70°C = 343K），
                  环境温度 T_∞ = 25°C = 298K。
                  比较抛光铝表面（ε = 0.05）和阳极氧化表面（ε = 0.85）的辐射散热量。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">计算</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  辐射公式（黑体包围体）：<br />
                  <span className="text-accent-cyan font-mono">Q_rad = εσA(T_s⁴ − T_∞⁴)</span><br />
                  σ = 5.67×10⁻⁸<br />
                  T_s⁴ − T_∞⁴ = 343⁴ − 298⁴<br />
                  = 1.383×10¹⁰ − 7.89×10⁹ = 5.94×10⁹
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">结果对比</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-accent-cyan font-semibold">抛光铝：</span>
                Q_rad = 0.05 × 5.67×10⁻⁸ × 0.05 × 5.94×10⁹ = <span className="text-accent-cyan font-mono">0.84 W</span><br />
                <span className="text-accent-orange font-semibold">阳极氧化铝：</span>
                Q_rad = 0.85 × 5.67×10⁻⁸ × 0.05 × 5.94×10⁹ = <span className="text-accent-cyan font-mono">14.3 W</span><br />
                辐射散热量提高了 <span className="text-accent-green font-bold">17 倍</span>！<br /><br />
                假设自然对流（h = 10 W/m²·K）散热量 Q_conv = 10 × 0.05 × 45 = 22.5W。<br />
                抛光铝总散热：22.5 + 0.84 = 23.3W<br />
                阳极氧化总散热：22.5 + 14.3 = 36.8W，提高 <span className="text-accent-green font-bold">58%</span>。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-accent-green/5 border border-accent-green/10 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-green font-semibold">工程结论：</span>
                自然对流散热设备（无风扇）中，辐射散热可占总散热的 30-50%。
                阳极氧化或黑漆处理成本极低，是性价比最高的散热增强手段之一。
                对于高温设备（{'>'}100°C），辐射占比更高，涂层处理尤为重要。
              </p>
            </div>
          </div>

          {/* Case 2: LED Radiation */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">案例 2：LED 灯具辐射散热</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">背景</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  100W LED 工矿灯，LED 结温要求 ≤ 85°C。
                  灯具外壳温度约 65°C（338K），外壳面积 0.12 m²。
                  环境温度 35°C（308K），外壳发射率 ε = 0.9。
                  计算辐射散热量及其占总功耗的比例。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-amber mb-2">计算</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Q_rad = εσA(T_s⁴ − T_∞⁴)<br />
                  = 0.9 × 5.67×10⁻⁸ × 0.12 × (338⁴ − 308⁴)<br />
                  338⁴ = 1.305×10¹⁰，308⁴ = 9.00×10⁹<br />
                  差值 = 4.05×10⁹<br />
                  Q_rad = 0.9 × 5.67×10⁻⁸ × 0.12 × 4.05×10⁹<br />
                  = <span className="text-accent-cyan font-mono">24.8 W</span>
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">综合散热分析</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                自然对流散热量（假设 h = 8 W/m²·K）：<br />
                Q_conv = 8 × 0.12 × (65-35) = 8 × 0.12 × 30 = <span className="text-accent-cyan font-mono">28.8 W</span><br />
                总散热量 = 24.8 + 28.8 = <span className="text-accent-cyan font-mono">53.6 W</span><br /><br />
                仍有约 46W 需要通过其他途径（导热到灯具支架、更多表面等）散出。
                本题说明仅靠自然散热不足以满足 100W 散热需求，
                实际 LED 工矿灯常采用主动散热（风扇）或增大散热面积。<br />
                <span className="text-accent-cyan font-semibold">辐射占比：</span>
                辐射占自然冷却散热的 46.3%，不可忽略。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-4">
              <Sun className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-cyan font-semibold">LED 热管理要点：</span>
                高功率 LED 必须综合考虑导热（MCPCB）、对流（散热器+风扇）、
                辐射（高发射率涂层）三种传热方式。选用高发射率陶瓷基板和
                纳米辐射涂层可将辐射散热提升 15-20%。
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
              <h3 className="text-base font-semibold text-white">斯特藩-玻尔兹曼定律</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一黑体表面温度为 500°C（773K），表面积为 0.02 m²。
              计算该黑体的辐射总功率。若温度升高到 1000°C（1273K），
              辐射功率增加多少倍？
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  黑体辐射力：<span className="text-accent-cyan font-mono">E_b = σT⁴</span><br />
                  T₁ = 773K：<span className="text-accent-cyan font-mono">E_b₁ = 5.67×10⁻⁸ × 773⁴</span><br />
                  773⁴ = 3.57×10¹¹，E_b₁ = 5.67×10⁻⁸ × 3.57×10¹¹ = 20,242 W/m²<br />
                  Q₁ = E_b₁ × A = 20,242 × 0.02 = <span className="text-accent-green font-bold">404.8 W</span><br /><br />
                  T₂ = 1273K：<span className="text-accent-cyan font-mono">E_b₂ = 5.67×10⁻⁸ × 1273⁴</span><br />
                  1273⁴ = 2.63×10¹²，E_b₂ = 5.67×10⁻⁸ × 2.63×10¹² = 149,121 W/m²<br />
                  Q₂ = 149,121 × 0.02 = <span className="text-accent-green font-bold">2,982 W</span><br /><br />
                  辐射功率增加倍数：<span className="text-accent-cyan font-mono">Q₂/Q₁ = (1273/773)⁴ = 1.647⁴ ≈ 7.36 倍</span><br />
                  温度升高约 1.65 倍，辐射功率增加 <span className="text-accent-green font-bold">7.4 倍</span>！<br />
                  <span className="text-gray-500 text-xs">这正是 T⁴ 关系的威力——高温下辐射急剧增强。</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 2 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">维恩位移定律</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一恒星表面有效温度为 6000K，求其辐射峰值波长。
              若另一恒星峰值波长为 0.29 μm，其表面温度是多少？
              分别判断它们发出的光主要位于电磁波的哪个波段。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  维恩位移定律：<span className="text-accent-cyan font-mono">λ_max · T = 2898 μm·K</span><br /><br />
                  恒星 1（T = 6000K）：<br />
                  <span className="text-accent-cyan font-mono">λ_max = 2898 / 6000 = 0.483 μm</span><br />
                  属于 <span className="text-accent-green font-bold">可见光</span>（蓝绿光）波段。<br /><br />
                  恒星 2（λ_max = 0.29 μm）：<br />
                  <span className="text-accent-cyan font-mono">T = 2898 / 0.29 = 10,000 K</span><br />
                  属于 <span className="text-accent-green font-bold">紫外</span>波段边缘（0.29 μm &lt; 0.38 μm）。<br />
                  这颗恒星的温度比太阳高得多，主要辐射在紫外和可见光波段。
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 3 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">平行平板辐射换热</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              两无限大平行平板，温度分别为 T₁ = 400K 和 T₂ = 300K，
              发射率分别为 ε₁ = 0.4 和 ε₂ = 0.6。求两板间的净辐射换热量 Q/A。
              若在两板间加一块薄反射屏（两面 ε_s = 0.05），换热量减少多少？
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  无限大平行平板公式：<span className="text-accent-cyan font-mono">Q/A = σ(T₁⁴ − T₂⁴) / (1/ε₁ + 1/ε₂ − 1)</span><br /><br />
                  T₁⁴ − T₂⁴ = 400⁴ − 300⁴ = 2.56×10¹⁰ − 8.1×10⁹ = 1.75×10¹⁰<br />
                  1/ε₁ + 1/ε₂ − 1 = 1/0.4 + 1/0.6 − 1 = 2.5 + 1.667 − 1 = 3.167<br />
                  <span className="text-accent-cyan font-mono">Q/A = 5.67×10⁻⁸ × 1.75×10¹⁰ / 3.167</span><br />
                  <span className="text-accent-cyan font-mono">≈ 992.25 / 3.167 ≈ 313.3 W/m²</span><br /><br />
                  <span className="text-accent-amber font-semibold">加反射屏后：</span><br />
                  有效发射率变为：<span className="text-accent-cyan font-mono">1/(1/ε₁ + 2/ε_s + 1/ε₂ − 2)</span><br />
                  = 1/(2.5 + 40 + 1.667 − 2) = 1/42.167<br />
                  Q/A_屏 = 5.67×10⁻⁸ × 1.75×10¹⁰ / 42.167 ≈ <span className="text-accent-cyan font-mono">23.5 W/m²</span><br />
                  换热量减少 <span className="text-accent-green font-bold">92.5%</span>！<br />
                  <span className="text-gray-500 text-xs">这就是多层真空绝热板（太空毯）的工作原理。</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 4 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">大包围体辐射换热</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一小型电子元件（A₁ = 0.001 m²，ε₁ = 0.8，T₁ = 80°C = 353K）
              放置在大机箱内（机箱内壁 ε₂ = 0.85，T₂ = 40°C = 313K）。
              求元件向机箱的辐射散热量。机箱尺寸远大于元件（F₁₂ = 1，A₁ &lt;&lt; A₂）。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  当 A₁ &lt;&lt; A₂ 时，可简化使用：<span className="text-accent-cyan font-mono">Q = ε₁σA₁(T₁⁴ − T₂⁴)</span><br />
                  T₁⁴ − T₂⁴ = 353⁴ − 313⁴ = 1.553×10¹⁰ − 9.59×10⁹ = 5.94×10⁹<br />
                  <span className="text-accent-cyan font-mono">Q = 0.8 × 5.67×10⁻⁸ × 0.001 × 5.94×10⁹</span><br />
                  <span className="text-accent-cyan font-mono">Q = 0.8 × 5.67 × 0.001 × 5.94 × 10¹</span><br />
                  <span className="text-accent-cyan font-mono">Q = 0.269 W</span><br /><br />
                  辐射散热量约 <span className="text-accent-green font-bold">0.27 W</span>。
                  相比元件可能产生的数瓦功耗，辐射散热仅占小部分，
                  主要散热仍依赖机箱内的自然对流或强制对流。<br />
                  <span className="text-gray-500 text-xs">若元件表面抛光（ε=0.05），辐射散热仅 0.017W，几乎可忽略。</span>
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
            <h3 className="text-lg font-semibold text-white mb-3">太阳辐射与温室效应</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">太阳辐射</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  太阳表面约 5800K，辐射峰值在可见光波段。
                  太阳常数 G_sc = 1367 W/m²（地球大气层外垂直于太阳光线的单位面积接收的功率）。<br />
                  经过大气衰减后，地表最大辐照度约 1000 W/m²。
                  大气对太阳辐射的选择性吸收是温室效应的物理基础。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">温室效应机理</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  太阳短波辐射（可见光）大部分透过大气到达地表 →<br />
                  地表被加热后向外辐射长波辐射（远红外）→<br />
                  大气中的 CO₂、H₂O、CH₄ 等温室气体吸收长波辐射，
                  阻止热量向太空散失 →<br />
                  地表温度升高（否则地球平均温度约 -18°C，实际约 15°C）。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
              <Sun className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-amber font-semibold">辐射平衡概念：</span>
                地球的辐射平衡温度可由吸收的太阳辐射 = 地球向外辐射计算。
                太阳能热水器利用选择性吸收涂层——对太阳辐射高吸收、
                对自身红外辐射低发射——实现高效集热。
              </p>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">航天器热控中的辐射</h3>
            <p className="text-gray-400 text-sm mb-4">
              在真空中，辐射是唯一的传热方式。航天器热控大量使用辐射技术：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <div className="text-sm font-semibold text-accent-cyan mb-2">多层绝热毯（MLI）</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  由数十层镀铝聚酰亚胺薄膜叠合而成，每层 ε &lt; 0.05，
                  利用辐射屏蔽原理，等效热阻极高。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <div className="text-sm font-semibold text-accent-orange mb-2">散热面设计</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  航天器散热面涂高发射率白漆（低太阳吸收、高红外发射），
                  在散热的同时避免吸收过多太阳辐射。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <div className="text-sm font-semibold text-accent-green mb-2">可变发射率器件</div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  通过电致变色等技术改变表面发射率，主动调节航天器温度。
                  是智能热控的发展方向。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Next Chapter Guide */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-red/5 to-accent-amber/5 border border-accent-red/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm text-accent-red font-mono mb-1">
                <Zap className="w-4 h-4" />
                传热学基础完结
              </div>
              <h3 className="text-xl font-bold text-white">恭喜完成传热学基础！</h3>
              <p className="text-gray-400 text-sm mt-1">
                你已经学习了导热、对流传热和热辐射三种基本传热方式。
                接下来挑战更复杂的热管理系统设计。
              </p>
            </div>
            <Link
              href="/heat-transfer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-red text-black font-semibold text-sm hover:bg-accent-red/90 transition-all"
            >
              返回传热学主页 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
