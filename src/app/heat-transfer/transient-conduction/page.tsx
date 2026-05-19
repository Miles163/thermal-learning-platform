import { GanttChartSquare, Thermometer, Target, Lightbulb, AlertCircle, BookOpen, ChevronRight, ArrowRight, Clock, BarChart3 } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function TransientConductionPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-orange font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第 2.4 节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">瞬态导热</h1>
        <p className="text-gray-400 text-lg">
          瞬态导热分析温度随时间变化的非稳态过程，是评估热响应、峰值功率和热惯性的基础。
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
              "理解瞬态导热与稳态导热的核心区别",
              "掌握集总参数法的适用条件和数学模型",
              "理解毕渥数 Bi 的物理意义和判断准则",
              "掌握一维瞬态导热问题的分析方法",
              "能够分析热容、热阻和时间常数的关系",
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
            学习本章前应熟悉稳态导热的基本概念（傅里叶定律、热阻分析）和热容的概念。
            瞬态导热在电子散热中非常重要，比如开机温升、功放模块脉冲功率和热测试分析。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["热容", "热阻", "时间常数", "Bi数", "傅里叶数Fo"].map((kw) => (
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
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <Clock className="w-4 h-4" />
          </span>
          理论讲解
        </h2>

        {/* Lumped Capacitance Method */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">集总参数法</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            当物体内部的导热热阻远小于表面对流传热热阻时，可以假设物体内部温度均匀（仅随时间变化），
            这就是集总参数法的基本假设。它是最简单也最常用的瞬态导热分析方法：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-orange font-mono">ρVC<sub>p</sub>·dT/dt = −hA(T − T<sub>∞</sub>)</div>
            <p className="text-gray-500 text-xs mt-1">集总参数法能量平衡方程：蓄热率 = 对流换热率</p>
          </div>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">(T - T<sub>∞</sub>)/(T<sub>0</sub> - T<sub>∞</sub>) = exp(−t/τ)</div>
            <p className="text-gray-500 text-xs mt-1">温度响应解析解：τ = ρVC<sub>p</sub>/hA（热时间常数）</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              ["ρ", "密度 (kg/m³)"],
              ["V", "体积 (m³)"],
              ["C_p", "比热容 (J/kg·K)"],
              ["h", "对流传热系数 (W/m²·K)"],
              ["A", "换热面积 (m²)"],
              ["τ", "时间常数 (s)"],
            ].map(([sym, desc]) => (
              <div key={sym} className="bg-tech-700/30 rounded-lg p-3">
                <div className="text-sm font-mono text-accent-cyan">{sym}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Biot Number */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">毕渥数 Bi</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            毕渥数（Biot Number）是判断是否可以使用集总参数法的关键无量纲数：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-orange font-mono">Bi = h·L<sub>c</sub>/k</div>
            <p className="text-gray-500 text-xs mt-1">Bi = 内部导热热阻 / 表面对流热阻</p>
          </div>
          <div className="space-y-3">
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-cyan">
              <div className="text-sm font-semibold text-white mb-1">Bi &lt; 0.1</div>
              <p className="text-xs text-gray-400">内部热阻远小于外部热阻，温度梯度可忽略，适用集总参数法，误差 &lt; 5%</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-amber">
              <div className="text-sm font-semibold text-white mb-1">0.1 &lt; Bi &lt; 10</div>
              <p className="text-xs text-gray-400">内部和外部热阻相当，不能忽略内部温度梯度，需要求解一维或多维瞬态导热方程</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-red">
              <div className="text-sm font-semibold text-white mb-1">Bi &gt; 10</div>
              <p className="text-xs text-gray-400">内部热阻占主导，表面温度迅速接近环境温度，但内部温降显著。常见于高导热材料的大尺寸物体</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4 mt-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">物理解释：</span>
              L<sub>c</sub> = V/A 为特征尺寸。对于薄板 L<sub>c</sub> = 厚度/2，
              对于球体 L<sub>c</sub> = R/3。Bi &lt; 0.1 意味着内部温度差 &lt; 10% 的总体温差。
            </p>
          </div>
        </div>

        {/* One-Dimensional Transient */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">一维瞬态导热</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            当 Bi &gt; 0.1 时，需要使用一维瞬态导热方程和相应的边界条件求解。
            对平板、圆柱和球体等简单几何有解析解（海斯勒图）：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-sm font-bold text-accent-cyan font-mono">∂²T/∂x² = (1/α)·∂T/∂t</div>
            <p className="text-gray-500 text-xs mt-1">一维瞬态导热方程（傅里叶方程）</p>
          </div>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4">
            <div className="text-xs text-gray-400 mb-1">一维瞬态导热解的形式：</div>
            <div className="text-sm font-mono text-accent-orange text-center">θ* = Σ C<sub>n</sub>·exp(−ζ²<sub>n</sub>·Fo)·f(ζ<sub>n</sub>·x*)</div>
            <div className="text-xs text-gray-400 mt-1">其中 Fo = αt/L² 为傅里叶数（无量纲时间），α = k/ρCp 为热扩散率</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">傅里叶数 Fo (Fourier Number)</div>
              <div className="text-sm font-mono text-accent-cyan text-center mb-1">Fo = αt/L²</div>
              <div className="text-xs text-gray-400">物理意义：无量纲时间，表示热扩散的深度与特征尺寸的比值</div>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">热扩散率 α (Thermal Diffusivity)</div>
              <div className="text-sm font-mono text-accent-cyan text-center mb-1">α = k/ρC<sub>p</sub></div>
              <div className="text-xs text-gray-400">物理意义：衡量材料内部温度传播速度，α 越大温度变化越快</div>
            </div>
          </div>
        </div>

        {/* Semi-Infinite Solid */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">半无限大体</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            半无限大体模型假设物体在一个方向上无限延伸，适用于物体表面温度变化但内部深处尚未受到影响的初期阶段：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-sm font-bold text-accent-orange font-mono">(T − T₀)/(T<sub>s</sub> − T₀) = erfc[x/(2√(αt))]</div>
            <p className="text-gray-500 text-xs mt-1">第一类边界条件（表面温度阶跃）的误差函数解</p>
          </div>
          <div className="text-gray-400 text-sm">
            <p>工程中常用近似：热穿透深度 δ ≈ 4√(αt)，即距离表面 δ 处的温升约为表面温升的 1% 以下。</p>
            <p className="mt-2">典型热穿透时间：铜在 1 秒内热穿透深度约 13mm，不锈钢约 3mm。</p>
          </div>
        </div>
      </section>

      {/* Section 3: Diagrams */}
      <section id="diagrams" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <GanttChartSquare className="w-4 h-4" />
          </span>
          图示
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">集总参数温度响应曲线</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
  T(t)
   │
  T0┤×
   │ ╲
   │  ╲              τ=ρVCp/hA
   │   ╲
   │    ╲      在 t=τ 时：
  T∞┤────╲────  ΔT/ΔT0 = 36.8%
   │      ╲____
   └─────────────→ t
   0       τ    2τ    3τ
              </pre>
            </div>
            <p className="text-xs text-gray-400">集总参数法温度响应：指数衰减，时间常数 τ 为响应速度的量度</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">Bi 数判断策略</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
      Bi &lt; 0.1    0.1 &lt; Bi &lt; 10      Bi &gt; 10
      ────────    ─────────────    ────────
     集总参数法    一维瞬态解      表面快速响应
     T=T(t)       T=T(x,t)       热冲击问题
     误差 &lt; 5%   海斯勒图/数值    表面温度≈T∞
              </pre>
            </div>
            <p className="text-xs text-gray-400">根据 Bi 数选择瞬态导热分析方法</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">半无限大体温度分布</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
    T
    │  表面温度 T_s
  Ts┤───╲
    │    ╲
    │     ╲        t 增加 →
    │      ╲
    │       ╲═══════════ T0（初始温度）
    │        ╲
    └──────────────────→ x
    0        δ = 4√(αt)
              </pre>
            </div>
            <p className="text-xs text-gray-400">半无限大体温度分布：热穿透深度 δ ∝ √(αt)</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">不同材料热扩散率对比</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
 材料        α (mm²/s)   1秒穿透深度
 ────────────────────────────
 银           165         51mm
 铜           117         43mm
 铝            97         39mm
 石墨(面内)   150         ~50mm
 硅(芯片)      87         37mm
 不锈钢         4          8mm
 水            0.14       1.5mm
 空气          22         19mm(有对流)
              </pre>
            </div>
            <p className="text-xs text-gray-400">高热扩散率材料温度传播更快，瞬态热响应更好</p>
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Cases */}
      <section id="cases" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <Zap className="w-4 h-4" />
          </span>
          工程案例
        </h2>

        {/* Case 1: CPU Thermal Response */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例一：CPU 瞬态温升分析</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            芯片在开机或负载突增时温度随时间上升。集总参数法可估算热响应时间：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4">
            <div className="text-sm font-semibold text-accent-cyan mb-2">CPU 温度响应计算</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-gray-400">芯片热容 C_th</div>
              <div className="text-white font-mono">= m·C_p ≈ 2 J/K</div>
              <div className="text-gray-400">散热器热阻 R_th</div>
              <div className="text-white font-mono">≈ 0.3 °C/W</div>
              <div className="text-gray-400">时间常数 τ</div>
              <div className="text-white font-mono">= R_th·C_th ≈ 0.6s</div>
              <div className="text-gray-400">稳态温升 (100W)</div>
              <div className="text-white font-mono">= 100 × 0.3 = 30°C</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm">
            从上述计算可知，CPU的温度响应时间常数为0.6秒，5τ（约3秒）后基本达到稳态。
            这解释了为什么短时脉冲功率（&lt;1秒）可以利用热容缓冲，不需要散热系统达到稳态散热能力。
          </p>
        </div>

        {/* Case 2: Thermal Capacitance */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例二：热容缓冲与峰值功率</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            在电子散热设计中，热容可作为缓冲吸收瞬态峰值功率。利用集总参数法可计算允许的峰值功率持续时间：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">条件</div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>芯片最大允许结温：Tj,max = 85°C</div>
                <div>环境温度：Ta = 45°C</div>
                <div>散热器热阻：Rth = 0.3 °C/W</div>
                <div>系统热容：Cth = 200 J/K</div>
                <div>稳态功耗：P_base = 50W</div>
              </div>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">峰值功率能力</div>
              <div className="text-xs text-gray-400 space-y-1">
                <div>稳态结温：50×0.3+45 = 60°C</div>
                <div>温升余量：85-60 = 25°C</div>
                <div>200W 峰值可持续约 20s</div>
                <div>500W 峰值可持续约 5s</div>
                <div>1000W 峰值可持续约 2s</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">工程应用：</span>
              CPU 睿频（Turbo Boost）技术利用热容缓冲允许短时高功率运行。
              了解瞬态热特性有助于设计更激进的性能释放策略，同时确保芯片在安全温度范围内。
            </p>
          </div>
        </div>

        {/* Case 3: Thermal Testing */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例三：热瞬态测试 (T3Ster)</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            热瞬态测试是分析芯片封装热特性的标准方法。通过记录芯片加热或冷却过程中的结温变化曲线，
            利用集总参数模型或结构函数分析提取各层材料的热阻和热容：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4">
            <div className="text-sm font-semibold text-accent-cyan mb-2">结构函数分析</div>
            <div className="text-xs text-gray-400 space-y-2">
              <div>• 冷却曲线记录：T<sub>j</sub>(t) → T<sub>j0</sub> 到 T<sub>a</sub> 的完整过渡</div>
              <div>• 微分结构函数 dC<sub>th</sub>/dR<sub>th</sub> 显示各层材料的累计热容-热阻关系</div>
              <div>• 通过拐点识别芯片Die、焊接层、基板、TIM、散热器的热阻贡献</div>
              <div>• 瞬态测试相比稳态测试，可获得完整的热阻抗 Z<sub>th</sub>(t) 特性</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Exercises */}
      <section id="exercises" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <BookOpen className="w-4 h-4" />
          </span>
          练习题
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "集总参数法的基本假设是什么？如何判断其适用性？",
              a: "假设物体内部温度梯度可忽略（温度仅随时间变化）。通过 Bi = h·Lc/k < 0.1 判断适用性，Bi 数表示内部导热热阻与表面对流热阻之比。",
            },
            {
              q: "热时间常数 τ = ρVCp/hA 的物理意义是什么？",
              a: "时间常数 τ 表示物体温度变化到与初始温差约36.8%所需的时间。经过 5τ 后，温升/温降基本完成（达到稳态的99.3%以上）。τ 越大，热响应越慢。",
            },
            {
              q: "两个相同尺寸的铝块和铜块，在相同对流条件下冷却，哪个降温更快？为什么？",
              a: "铝块的降温速度取决于 α/k 比值。虽然铜的导热系数更高（约400 vs 铝237 W/m·K），但铝的热扩散率 α = k/ρCp 约为 97mm²/s，铜为 117mm²/s。铜的热扩散率更大，内部温度传播更快，因此整体降温更快。",
            },
            {
              q: "什么是热穿透深度？在电子散热中有什么实际意义？",
              a: "热穿透深度 δ ≈ 4√(αt) 表示表面温度变化能够影响到的内部深度。在电子散热中意义：当芯片尺寸小于热穿透深度时，可以近似使用集总参数法（Bi<0.1）；反之则需要考虑内部温度分布。",
            },
          ].map((ex, i) => (
            <details key={i} className="group bg-tech-800/50 border border-tech-600/30 rounded-xl overflow-hidden">
              <summary className="p-4 cursor-pointer text-sm text-white font-medium flex items-center gap-3 hover:bg-tech-700/30 transition-colors">
                <span className="w-6 h-6 rounded-full bg-accent-orange/10 text-accent-orange text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {ex.q}
                <ChevronRight className="w-4 h-4 text-gray-500 ml-auto group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 pb-4">
                <div className="border-t border-tech-600/20 pt-3">
                  <div className="flex gap-3">
                    <span className="text-xs text-accent-orange font-mono shrink-0">答：</span>
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
          <span className="w-8 h-8 rounded-lg bg-accent-orange/10 flex items-center justify-center text-accent-orange">
            <BarChart3 className="w-4 h-4" />
          </span>
          进阶内容
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">多层结构瞬态导热</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              实际电子封装是多层结构（芯片Die → 焊料 → 基板 → TIM → 散热器），
              各层材料热物性差异大，需要数值方法（有限差分或有限元）求解。
              热阻抗 Zth(t) 曲线可分解为各层的 Cauer 或 Foster 网络模型。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">热阻抗与热容网络模型</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              瞬态热分析常使用 RC 网络模型：Foster 模型（并联RC，物理参数拟合方便）和
              Cauer 模型（串联RC，物理意义明确）。通过热瞬态测试数据可提取 RC 网络参数，
              用于系统级热仿真。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">周期瞬态导热</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              当热源呈周期性变化（如脉冲负载、日/年环境温度循环）时，温度响应也呈周期性。
              利用复热容方法或傅里叶变换可分析周期性瞬态问题，热穿透深度与频率的平方根成反比——高频温度波动只能渗透到表面附近。
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Next Chapter */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-orange/5 to-accent-amber/5 border border-accent-orange/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-orange font-mono mb-1">下一节</div>
              <h3 className="text-xl font-bold text-white">沸腾与凝结传热</h3>
              <p className="text-gray-400 text-sm mt-1">学习相变传热——沸腾和凝结的机理与工程应用</p>
            </div>
            <Link
              href="/heat-transfer/boiling-condensation"
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
