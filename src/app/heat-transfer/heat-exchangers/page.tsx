import { GanttChartSquare, Thermometer, Target, Lightbulb, AlertCircle, BookOpen, ChevronRight, ArrowRight, Zap, Layers, GitCompare } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function HeatExchangersPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第 2.6 节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">换热器设计</h1>
        <p className="text-gray-400 text-lg">
          换热器是实现热量从一种流体传递到另一种流体的设备，是热管理系统中最关键的组件之一。
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
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Target className="w-4 h-4" />
          </span>
          章节简介
        </h2>

        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">学习目标</h3>
          <div className="space-y-2">
            {[
              "理解换热器的基本分类和工作原理",
              "掌握对数平均温差（LMTD）法的推导和应用",
              "掌握ε-NTU法的原理和典型关联式",
              "能够根据工程需求选择合适的换热器类型和设计方法",
              "了解换热器设计中的压降、结垢和材料选择等工程考量",
            ].map((obj, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
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
            学习本章前应熟悉对流传热的基本概念、热阻分析和总传热系数的计算方法。
            换热器是传热学理论最广泛的实际应用之一，也是热设计工程师必须掌握的核心技能。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["对流传热", "热阻网络", "总传热系数", "对数平均温差", "NTU"].map((kw) => (
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
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Layers className="w-4 h-4" />
          </span>
          理论讲解
        </h2>

        {/* Heat Exchanger Types */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">换热器分类</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-cyan">
              <div className="text-sm font-semibold text-white mb-2">按流动方式</div>
              <div className="space-y-2 text-xs text-gray-400">
                <div>• 顺流式：两种流体同向流动</div>
                <div>• 逆流式：两种流体反向流动（效率最高）</div>
                <div>• 叉流式：两种流体互相垂直流动</div>
                <div>• 壳管式：复杂的多程流动</div>
              </div>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-amber">
              <div className="text-sm font-semibold text-white mb-2">按结构类型</div>
              <div className="space-y-2 text-xs text-gray-400">
                <div>• 管壳式换热器（Shell-and-Tube）</div>
                <div>• 板式换热器（Plate Heat Exchanger）</div>
                <div>• 翅片管式换热器（Fin-Tube）</div>
                <div>• 微通道换热器（Microchannel）</div>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Heat Transfer Coefficient */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">总传热系数 U</h3>
          <p className="text-gray-400 text-sm mb-4">
            换热器的总传热系数 U 综合考虑了壁面两侧的对流传热热阻、壁面导热热阻和可能的污垢热阻：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">1/U = 1/h<sub>i</sub> + R<sub>f,i</sub> + (R<sub>w</sub>) + R<sub>f,o</sub> + 1/h<sub>o</sub></div>
            <p className="text-gray-500 text-xs mt-1">总热阻 = 各分项热阻之和（以内表面为基准）</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {[
              ["h_i, h_o", "管内/外对流传热系数 (W/m²·K)"],
              ["R_f,i, R_f,o", "管内/外污垢热阻 (m²·K/W)"],
              ["R_w", "壁面导热热阻 (m²·K/W)"],
              ["U", "总传热系数 (W/m²·K)"],
            ].map(([sym, desc]) => (
              <div key={sym} className="bg-tech-700/30 rounded-lg p-3">
                <div className="text-sm font-mono text-accent-cyan">{sym}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            ))}
          </div>
          <div className="bg-tech-900/70 rounded-lg p-4">
            <div className="text-xs text-gray-400 mb-1">典型 U 值范围 (W/m²·K)：</div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">气-气换热器</span>
                <span className="text-white font-mono">10-50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">气-液散热器</span>
                <span className="text-white font-mono">50-500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">液-液板换</span>
                <span className="text-white font-mono">1000-5000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">冷凝器/蒸发器</span>
                <span className="text-white font-mono">500-5000</span>
              </div>
            </div>
          </div>
        </div>

        {/* LMTD Method */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">对数平均温差法 (LMTD)</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            LMTD 法是换热器热设计的基本方法。换热量 Q = UAΔT<sub>lm</sub>，
            其中 ΔT<sub>lm</sub> 是对数平均温差：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">ΔT<sub>lm</sub> = (ΔT₁ − ΔT₂)/ln(ΔT₁/ΔT₂)</div>
            <p className="text-gray-500 text-xs mt-1">对数平均温差定义</p>
          </div>
          <div className="text-gray-400 text-sm space-y-2">
            <p>对于顺流：ΔT₁ = T<sub>h,in</sub> − T<sub>c,in</sub>，ΔT₂ = T<sub>h,out</sub> − T<sub>c,out</sub></p>
            <p>对于逆流：ΔT₁ = T<sub>h,in</sub> − T<sub>c,out</sub>，ΔT₂ = T<sub>h,out</sub> − T<sub>c,in</sub></p>
            <p>对于叉流和多程换热器：ΔT<sub>lm,actual</sub> = F·ΔT<sub>lm,counter</sub></p>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4 mt-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">关键区别：</span>
              在相同的进口条件下，逆流布置的ΔT<sub>lm</sub>总是大于顺流，
              因此逆流换热器需要的传热面积更小，效率更高。
              这就是为什么工程中优先选择逆流或接近逆流的布置方式。
            </p>
          </div>
        </div>

        {/* ε-NTU Method */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">ε-NTU 法</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            当出口温度未知时（如换热器选型），LMTD法需要迭代求解。
            ε-NTU法通过定义换热器效率 ε，直接关联无量纲参数 NTU 和热容流率比 C<sub>r</sub>：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/70 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-accent-cyan font-mono">ε = Q/Q<sub>max</sub></div>
              <p className="text-xs text-gray-400 mt-1">换热器效率</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-accent-cyan font-mono">NTU = UA/C<sub>min</sub></div>
              <p className="text-xs text-gray-400 mt-1">传热单元数</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-accent-cyan font-mono">C<sub>r</sub> = C<sub>min</sub>/C<sub>max</sub></div>
              <p className="text-xs text-gray-400 mt-1">热容流率比</p>
            </div>
          </div>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4">
            <div className="text-sm font-semibold text-white mb-2">典型 ε-NTU 关系式</div>
            <div className="text-xs text-gray-400 space-y-2">
              <div><span className="text-accent-cyan">逆流：</span> ε = (1 − exp[−NTU(1−C<sub>r</sub>)]) / (1 − C<sub>r</sub>·exp[−NTU(1−C<sub>r</sub>)])</div>
              <div><span className="text-accent-cyan">顺流：</span> ε = (1 − exp[−NTU(1+C<sub>r</sub>)]) / (1 + C<sub>r</sub>)</div>
              <div><span className="text-accent-cyan">C<sub>r</sub>=0（相变）：</span> ε = 1 − exp(−NTU)</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">工程应用：</span>
              在冷板设计和散热器选型中，通常已知进口温度和流量（即已知C_min、C_max和NTU），
              可直接用ε-NTU法计算出口温度和换热量，无需迭代。
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Diagrams */}
      <section id="diagrams" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <GanttChartSquare className="w-4 h-4" />
          </span>
          图示
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">逆流 vs 顺流温度分布</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
  逆流：               顺流：
  T↑                  T↑
   │ T_h,in ───→ T_h,out   │ T_h,in ───→ T_h,out
   │         ΔT₂          │         ΔT₁
   │   T_c,out ←─── T_c,in│   T_c,in ───→ T_c,out
   │  ΔT₁                 │         ΔT₂
   └───→ L               └───→ L
              </pre>
            </div>
            <p className="text-xs text-gray-400">逆流布置的温差均匀性更好，效率更高</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">ε-NTU 关系曲线</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
  ε
  1.0┤    C_r=0
     │    ╲ C_r=0.25
     │     ╲  C_r=0.5
     │      ╲   C_r=0.75
     │       ╲    C_r=1.0
  0 └─────────────────→ NTU
    0       1       2       3
              </pre>
            </div>
            <p className="text-xs text-gray-400">逆流换热器 ε-NTU 曲线：C_r 越小，效率越高</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">管壳式换热器</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
                ┌─────┬─────────────┬─────┐
  壳侧进口 ────┤     │  折流板     │     ├──── 壳侧出口
                │     │─┐        ┌──│     │
                │     │ │ 管束   │  │     │
  管侧进口 ────┤     │─┘        └──│     ├──── 管侧出口
                │     │            │     │
                └─────┴─────────────┴─────┘
              </pre>
            </div>
            <p className="text-xs text-gray-400">壳管式换热器：折流板引导壳侧流体横掠管束强化传热</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">板式换热器</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
    热侧 ───────→
                ┌─────────┐
   冷侧→│         │←冷侧
        │ 波纹板片 │
   冷侧→│         │←冷侧
        │         │
    热侧 ───────→  └─────────┘
              </pre>
            </div>
            <p className="text-xs text-gray-400">板式换热器：波纹板片形成冷热交替流道，传热效率高</p>
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Cases */}
      <section id="cases" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Zap className="w-4 h-4" />
          </span>
          工程案例
        </h2>

        {/* Case 1: Radiator */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例一：液冷散热器（翅片管式）</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            液冷散热器（Radiator）是液冷系统的排热终端，热侧的冷却液将热量通过翅片管传递到空气侧。
            这是典型的气-液换热器，空气侧热阻通常占总热阻的80%以上：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4">
            <div className="text-sm font-semibold text-accent-cyan mb-2">散热器设计参数</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">空气侧</div>
                <div className="text-white">h ~ 50-150 W/m²·K</div>
              </div>
              <div>
                <div className="text-gray-400">液侧</div>
                <div className="text-white">h ~ 2000-5000 W/m²·K</div>
              </div>
              <div>
                <div className="text-gray-400">U（以气侧为基准）</div>
                <div className="text-white">~ 30-80 W/m²·K</div>
              </div>
              <div>
                <div className="text-gray-400">翅片效率</div>
                <div className="text-white">η_f = 0.7-0.95</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4 mt-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">设计要点：</span>
              由于气侧热阻占主导，散热器的改进重点在空气侧：增大翅片面积、优化翅片间距、
              提高风速、采用波纹翅片或百叶窗翅片来破坏边界层。
            </p>
          </div>
        </div>

        {/* Case 2: Cold Plate */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例二：液冷冷板设计</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            液冷冷板是芯片热管理的核心组件，本质上是一个微通道或管道式换热器。
            冷板设计的关键是平衡热性能和流阻：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">设计输入</div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>芯片发热量：500-1000 W</div>
                <div>芯片面积：20×20 mm²</div>
                <div>热流密度：125-250 W/cm²</div>
                <div>冷却液：25% PG/水</div>
                <div>进口水温：45°C</div>
                <div>流量：1-4 LPM</div>
              </div>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">设计输出</div>
              <div className="space-y-1 text-xs text-gray-400">
                <div>热阻 Rth：0.02-0.05 °C/W</div>
                <div>结温 Tj &lt; 85°C</div>
                <div>压降 ΔP &lt; 20 kPa</div>
                <div>泵功 &lt; 5 W</div>
                <div>壁温 T_w &lt; 70°C</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">ε-NTU 应用：</span>
              冷板设计可直接使用 ε-NTU 法：已知冷却液入口温度、流量和热流密度，
              通过 NTU = UA/C_min 计算换热器效率，进而得到冷却液出口温度和芯片结温。
            </p>
          </div>
        </div>

        {/* Case 3: CDU */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例三：冷量分配单元 (CDU)</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            CDU 是数据中心液冷系统的关键设备，通过板式换热器隔离一次侧（冷水机组）和二次侧（IT设备冷却）回路：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4">
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">一次侧供回水温度</span>
                <span className="text-white font-mono">10°C / 18°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">二次侧供回水温度</span>
                <span className="text-white font-mono">18°C / 28°C</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">板换换热功率</span>
                <span className="text-white font-mono">100-1000 kW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">板换U值</span>
                <span className="text-white font-mono">~2000-4000 W/m²·K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LMTD 温差</span>
                <span className="text-white font-mono">约 3-5°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Exercises */}
      <section id="exercises" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <BookOpen className="w-4 h-4" />
          </span>
          练习题
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "为什么逆流换热器比顺流换热器更高效？在什么条件下两者效率相同？",
              a: "逆流换热器的对数平均温差（LMTD）大于顺流，因此需要更小的换热面积。当一侧流体发生相变（即C_r=0）时，逆流和顺流的效率相同，因为相变侧温度恒定。",
            },
            {
              q: "总传热系数 U 由哪些因素决定？热侧和冷侧的换热系数不匹配时如何优化？",
              a: "U由两侧的对流传热系数、壁面导热热阻和污垢热阻共同决定。当两侧换热系数相差数倍（如气-液换热器）时，强化低热阻侧的效果有限，应重点强化低换热系数侧（空气侧），如增加翅片面积。",
            },
            {
              q: "LMTD 法和 ε-NTU 法各适用于什么场景？",
              a: "LMTD法适用于已知进出口温度的校核计算；ε-NTU法适用于已知进口温度但出口温度未知的设计计算（如选型）。ε-NTU法避免了LMTD法需要的迭代过程。",
            },
            {
              q: "板式换热器相比管壳式的优势是什么？",
              a: "板式换热器传热效率高（U值可达管壳式的3-5倍）、结构紧凑、容易拆解清洗、可灵活增减板片调整换热面积。缺点是耐压能力较低、密封垫圈有泄漏风险。",
            },
          ].map((ex, i) => (
            <details key={i} className="group bg-tech-800/50 border border-tech-600/30 rounded-xl overflow-hidden">
              <summary className="p-4 cursor-pointer text-sm text-white font-medium flex items-center gap-3 hover:bg-tech-700/30 transition-colors">
                <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {ex.q}
                <ChevronRight className="w-4 h-4 text-gray-500 ml-auto group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4">
                <div className="border-t border-tech-600/20 pt-3">
                  <div className="flex gap-3">
                    <span className="text-xs text-accent-cyan font-mono shrink-0">答：</span>
                    <p className="text-sm text-gray-400">{ex.a}</p>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Section 6: Advanced */}
      <section id="advanced" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <GitCompare className="w-4 h-4" />
          </span>
          进阶内容
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">换热器设计流程</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              完整的设计流程包括：①确定工况参数（流量、温度、热负荷）→ ②选择换热器类型 → 
              ③估算换热面积（ε-NTU或LMTD）→ ④压降校核 → ⑤强度校核 → ⑥优化迭代。
              通常需要多次迭代以满足换热和压降的双重要求。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">污垢热阻与维护</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              长期运行后换热表面会积累污垢（水垢、污物、生物膜），增加热阻并减小流道截面。
              设计时应预留污垢余量（典型值 0.0001-0.0005 m²·K/W），并考虑定期清洗和维护的便利性。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">微通道换热器</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              微通道技术是换热器的小型化方向，通道水力直径0.2-2mm。优点：极高的面积体积比、
              低充注量（对制冷剂系统尤其重要）、更高的传热系数。应用包括汽车空调、数据中心液冷和热泵。
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Next Chapter */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-cyan/5 to-accent-blue/5 border border-accent-cyan/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-cyan font-mono mb-1">下一节</div>
              <h3 className="text-xl font-bold text-white">瞬态导热</h3>
              <p className="text-gray-400 text-sm mt-1">学习非稳态温度场分析和集总参数法</p>
            </div>
            <Link
              href="/heat-transfer/transient-conduction"
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
