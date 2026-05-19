import { GanttChartSquare, Thermometer, Target, Lightbulb, AlertCircle, BookOpen, ChevronRight, ArrowRight, Droplets, Waves, Flame, Zap } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function BoilingCondensationPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第 2.5 节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">沸腾与凝结传热</h1>
        <p className="text-gray-400 text-lg">
          沸腾和凝结是伴随相变的传热过程，具有极高的换热系数，广泛应用于热管理系统中。
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
              "理解沸腾传热的物理机理和池沸腾曲线",
              "掌握核态沸腾、过渡沸腾、膜态沸腾的特征与区别",
              "理解临界热流密度(CHF)的物理意义和工程重要性",
              "掌握凝结换热的两种模式：膜状凝结和珠状凝结",
              "了解沸腾/凝结在热管理中的典型应用（热管、均温板、浸没冷却）",
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
            学习本章前应熟悉导热和对流传热的基本概念，了解相变过程的基础知识。
            沸腾和凝结涉及复杂的两相流动和传热耦合，是传热学中最具挑战性的领域之一。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["相变", "潜热", "两相流", "气泡动力学", "临界热流密度"].map((kw) => (
              <span key={kw} className="text-xs px-2.5 py-1 rounded-full bg-tech-600/30 text-gray-300">
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Theory - detailed boiling and condensation theory */}
      <section id="theory" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Waves className="w-4 h-4" />
          </span>
          理论讲解
        </h2>

        {/* Sub-section: Pool Boiling Curve */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">池沸腾曲线 </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            池沸腾（Pool Boiling）是指沉浸在大容积静止液体中的加热表面上的沸腾过程。
            典型的池沸腾曲线以热流密度 q'' 对过热度 ΔT<sub>sat</sub> = T<sub>s</sub> - T<sub>sat</sub> 作图，
            展示了四个特征区域：
          </p>
          <div className="space-y-3">
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-cyan">
              <div className="text-sm font-semibold text-white mb-1">1. 自然对流区 (ΔT &lt; 5°C) </div>
              <p className="text-xs text-gray-400">过热度较低，表面温度不足以产生气泡。热量通过自然对流从加热表面传递到自由液面。换热系数较低。</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-orange">
              <div className="text-sm font-semibold text-white mb-1">2. 核态沸腾区 (5°C &lt; ΔT &lt; 30°C) </div>
              <p className="text-xs text-gray-400">加热表面上的汽化核心处产生气泡，气泡生长、脱离和上升过程中剧烈搅动流体，换热系数极高。这是工程中最理想的工作区域。</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-amber">
              <div className="text-sm font-semibold text-white mb-1">3. 过渡沸腾区 (30°C &lt; ΔT &lt; 120°C) </div>
              <p className="text-xs text-gray-400">气泡覆盖率过高，部分表面被蒸汽膜覆盖。热流密度随ΔT增加反而下降（负斜率）。不稳定区域，工程应用中应避免。</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border-l-4 border-accent-red">
              <div className="text-sm font-semibold text-white mb-1">4. 膜态沸腾区 (ΔT &gt; 120°C) </div>
              <p className="text-xs text-gray-400">稳定的蒸汽膜完全覆盖加热表面，传热需通过蒸汽膜导热和辐射。换热系数低，表面温度急剧升高，可能造成设备损坏。</p>
            </div>
          </div>
        </div>

        {/* Critical Heat Flux */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">临界热流密度 CHF</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            临界热流密度（Critical Heat Flux, CHF）是核态沸腾过渡到膜态沸腾的热流密度拐点，
            是沸腾传热中最重要的安全参数。超过CHF会导致传热恶化、表面温度急剧飙升，可能造成设备烧毁。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-orange font-mono">q″<sub>CHF</sub> = 0.131 · h<sub>fg</sub>ρ<sub>v</sub>[σg(ρ<sub>l</sub>−ρ<sub>v</sub>)]<sup>1/4</sup></div>
            <p className="text-gray-500 text-xs mt-1">Zuber 关联式 —— 饱和池沸腾CHF理论预测</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              ["h_fg", "汽化潜热 (J/kg)"],
              ["ρ_v, ρ_l", "汽相和液相密度 (kg/m³)"],
              ["σ", "表面张力 (N/m)"],
              ["g", "重力加速度 (m/s²)"],
            ].map(([sym, desc]) => (
              <div key={sym} className="bg-tech-700/30 rounded-lg p-3">
                <div className="text-sm font-mono text-accent-cyan">{sym}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            ))}
          </div>
          <div className="flex items-start gap-3 bg-accent-red/5 border border-accent-red/10 rounded-lg p-4 mt-4">
            <AlertCircle className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-red font-semibold">工程警示：</span>
              水在常压下的CHF约为1-1.5 MW/m²。电子散热中功率密度正接近这一量级，
              设计时必须留出充分的安全余量。两相冷却系统应在CHF的50-70%范围内工作。
            </p>
          </div>
        </div>

        {/* Nucleate Boiling Correlation */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">核态沸腾换热关联式 </h3>
          <p className="text-gray-400 text-sm mb-4">
            工程中最广泛使用的核态沸腾关联式由 Rohsenow 提出，将热流密度与过热度联系起来：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-lg font-bold text-accent-cyan font-mono">q″ = μ<sub>l</sub>h<sub>fg</sub>[g(ρ<sub>l</sub>−ρ<sub>v</sub>)/σ]<sup>1/2</sup>[(C<sub>p,l</sub>ΔT<sub>sat</sub>)/(C<sub>sf</sub>h<sub>fg</sub>Pr<sub>l</sub><sup>n</sup>)]<sup>3</sup></div>
            <p className="text-gray-500 text-xs mt-1">Rohsenow 核态沸腾关联式</p>
          </div>
          <div className="text-gray-400 text-sm leading-relaxed">
            <p>其中 C<sub>sf</sub> 为经验常数，取决于液体-固体组合；n 通常取 1.0（水）或 1.7（其他流体）。</p>
            <p className="mt-2">典型 C<sub>sf</sub> 值：水-铜 0.013，水-不锈钢 0.008，制冷剂-铜 0.002~0.004。</p>
          </div>
        </div>

        {/* Condensation */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">凝结换热 </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            凝结换热发生在蒸汽温度低于饱和温度的表面，分为两种模式：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/70 rounded-lg p-4 border border-accent-cyan/30">
              <div className="text-sm font-semibold text-accent-cyan mb-2">膜状凝结</div>
              <p className="text-xs text-gray-400">凝结液在表面形成连续的液膜，液膜厚度沿流动方向增加。冷凝液膜的热阻是传热的主要阻力。这是最常见的凝结模式（如空调冷凝器）。</p>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4 border border-accent-amber/30">
              <div className="text-sm font-semibold text-accent-amber mb-2">珠状凝结</div>
              <p className="text-xs text-gray-400">凝结液在表面形成离散的液珠，液珠生长、合并、滚落暴露出新鲜表面。换热系数可达膜状凝结的5-10倍，但表面处理难以长期维持。</p>
            </div>
          </div>
          <div className="bg-tech-900/70 rounded-lg p-4 text-center mb-4">
            <div className="text-lg font-bold text-accent-cyan font-mono">h = 0.943 · [k³<sub>l</sub>ρ<sub>l</sub>(ρ<sub>l</sub>−ρ<sub>v</sub>)gh<sub>fg</sub>/ (μ<sub>l</sub>LΔT)]<sup>1/4</sup></div>
            <p className="text-gray-500 text-xs mt-1">Nusselt 层流膜状凝结理论解（竖平板）</p>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">关键理解：</span>
              膜状凝结的换热系数与温差 ΔT 的四分之一次方成反比——温差越大换热越差，这是液膜增厚导致的热阻变大。
              因此在设计冷凝器时，需要权衡传热温差和凝结液膜的排出。
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Diagrams - visual representations */}
      <section id="diagrams" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <GanttChartSquare className="w-4 h-4" />
          </span>
          图示
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">池沸腾曲线</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-accent-cyan font-mono leading-relaxed">
                q'' (热流密度)
                  ↑
                  │  Ⅰ  Ⅱ        Ⅲ    Ⅳ
                  │   ╲          ╱
                  │    ╲ 核态   ╱  膜态
                  │  自 ╲ 沸腾 ╱  沸腾
                  │  然 ╲    ╱
                  │  对 ╲  ╱
                  │  流 ╲╱    过渡沸腾
                  │      └───╲───→ ΔT_sat
                  │           ╲
                  │            ╲
                  │      CHF点
              </pre>
            </div>
            <p className="text-xs text-gray-400">池沸腾曲线四个区域：Ⅰ自然对流、Ⅱ核态沸腾、Ⅲ过渡沸腾、Ⅳ膜态沸腾</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">气泡生长与脱离</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
                气泡脱离直径：
                D_d = [σ·d/(g(ρ_l-ρ_v))]^1/2

                脱离频率：
                f·D_d = 常数 ≈ 0.2 m/s

                汽化核心密度：
                N ∝ (1/r_c)^m
              </pre>
            </div>
            <p className="text-xs text-gray-400">气泡动力学参数：脱离直径、频率和汽化核心密度决定沸腾换热强度</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">膜状凝结液膜</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
                T_sat ──── 蒸汽 ────
                            ↓ 凝结
                  ┌──────────────┐
                  │  液膜 δ(x)   │ → 液膜厚度
                  │  T_s         │ → 壁温
                  └──────────────┘

                局部换热系数：
                h_x = k_l / δ(x)
                h_L = 4/3 · h_(x=L)
              </pre>
            </div>
            <p className="text-xs text-gray-400">竖平板上层流膜状凝结：液膜厚度沿高度方向增加，换热系数减小</p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">热管工作原理</h3>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <pre className="text-xs text-gray-400 font-mono leading-relaxed">
                蒸发段    绝热段    冷凝段
                ┌─────┬────────┬─────┐
                │     │        │     │
                │  ↑  │  汽流  │  ↓  │ → 蒸汽流动
                │     │        │     │
                │  ←──┼── 液流 ──→  │ → 毛细回流
                │     │        │     │
                └─────┴────────┴─────┘
                Q_in                 Q_out
              </pre>
            </div>
            <p className="text-xs text-gray-400">热管内部：蒸发段沸腾吸热 → 蒸汽流向冷凝段 → 凝结放热 → 毛细力驱动液体回流</p>
          </div>
        </div>
      </section>

      {/* Section 4: Engineering Cases */}
      <section id="cases" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Flame className="w-4 h-4" />
          </span>
          工程案例
        </h2>

        {/* Case 1: Heat Pipe */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例一：热管散热器</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            热管是沸腾与凝结传热的经典工程应用。在电子设备散热中，
            热管利用内部工质的蒸发-凝结循环，实现高效的热量传递：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4">
            <div className="text-sm font-semibold text-accent-cyan mb-2">热管典型参数</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="text-gray-400">等效导热系数</div>
              <div className="text-white font-mono">10,000 - 100,000 W/m·K</div>
              <div className="text-gray-400">传热极限</div>
              <div className="text-white font-mono">毛细极限 / 声速极限 / 携带极限</div>
              <div className="text-gray-400">工作温度</div>
              <div className="text-white font-mono">-40°C ~ 300°C（水）</div>
              <div className="text-gray-400">典型工质</div>
              <div className="text-white font-mono">水、氨、甲醇、丙酮</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
            <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
            <p className="text-sm text-gray-300">
              <span className="text-accent-amber font-semibold">设计要点：</span>
              热管的传热极限由毛细结构决定。烧结粉末吸液芯的毛细力最大但渗透率低，
              沟槽吸液芯的渗透率高但毛细力小。需根据应用场景选择合适的吸液芯类型。
            </p>
          </div>
        </div>

        {/* Case 2: Vapor Chamber */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例二：均温板 (VC)</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            均温板（Vapor Chamber）是热管的二维平面版本，适用于高功率密度芯片（CPU/GPU）
            的散热。均温板内部蒸汽在冷凝段放热后通过毛细力回流到蒸发段：
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">均温板 vs 热管</div>
              <div className="space-y-2 text-xs text-gray-400">
                <div>• 均温板面积大，适合面热源均温</div>
                <div>• 热管擅长点对点传输热量</div>
                <div>• 均温板热阻更低（0.1-0.3°C/W）</div>
                <div>• 均温板抗重力性能优于热管</div>
              </div>
            </div>
            <div className="bg-tech-900/70 rounded-lg p-4">
              <div className="text-xs font-semibold text-white mb-2">典型应用场合</div>
              <div className="space-y-2 text-xs text-gray-400">
                <div>• 服务器CPU散热（300-500W）</div>
                <div>• 激光器热管理（100-400W/cm²）</div>
                <div>• IGBT模块散热</div>
                <div>• 航空航天电子热控</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case 3: Immersion Cooling */}
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3">案例三：浸没式液冷</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            浸没式冷却将电子设备直接浸入介电冷却液中，利用沸腾换热实现极高的散热效率。
            这是当前数据中心冷却的前沿技术方向：
          </p>
          <div className="space-y-2 text-sm text-gray-400 mb-4">
            <div>• 单相浸没：冷却液始终为液态，依靠自然对流或强制循环带走热量</div>
            <div>• 两相浸没：冷却液在热源表面沸腾产生蒸汽，蒸汽在冷凝器上凝结回流</div>
            <div>• 两相浸没的 PUE 可低至 1.03，相比传统风冷（PUE 1.4-1.6）节能效果显著</div>
          </div>
          <div className="bg-tech-900/70 rounded-lg p-4">
            <div className="text-xs text-gray-400">
              <span className="text-accent-cyan">典型介电流体：</span> 3M Novec 7000/7100, Solvay Galden
              （沸点 34-61°C，绝缘性能优良，ODP为零，GWP较低）
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
              q: "池沸腾曲线中，哪一区域的热流密度最大？为什么这是工程中最重要的区域？",
              a: "核态沸腾区的末端（CHF点附近）热流密度最大。核态沸腾具有极高的换热系数（可达10^5 W/m²·K量级），且表面温度相对较低，是两相冷却系统最理想的工作区域。",
            },
            {
              q: "什么是临界热流密度（CHF）？超过CHF会有什么后果？",
              a: "CHF是从核态沸腾过渡到膜态沸腾的临界点热流密度。超过CHF后，表面被蒸汽膜覆盖，换热系数骤降，表面温度急剧升高，可能导致设备过热烧毁。",
            },
            {
              q: "膜状凝结和珠状凝结哪个换热系数更大？为什么工程中通常遇到的是膜状凝结？",
              a: "珠状凝结的换热系数可比膜状凝结大5-10倍。但珠状凝结需要特殊的表面处理（如疏水涂层），长期运行易退化，而膜状凝结是自然发生的，因此工程设计中通常按保守的膜状凝结计算。",
            },
            {
              q: "热管能够实现极高等效导热系数的物理原理是什么？",
              a: "热管利用工质的蒸发-凝结相变循环传递热量。蒸发段吸热使液体沸腾汽化，蒸汽携带潜热流向冷凝段凝结放热，凝结液通过毛细力回流。整个循环利用潜热传输热量，等效导热系数可达纯铜的数百倍。",
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
            <Zap className="w-4 h-4" />
          </span>
          进阶内容
        </h2>

        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">两相流流型</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              在微通道或管道中的强制对流沸腾，两相流的流型对传热和压降有决定性的影响。
              常见流型包括：泡状流、弹状流、段塞流、环状流和雾状流。不同流型对应不同的换热机理。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">沸腾传热强化技术 </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              为提高CHF和换热系数，工程中采用多种强化技术：多孔涂层表面（烧结铜粉）、
              微翅片结构、人工汽化核心、纳米流体工质等。这些技术可使CHF提升50-200%。
            </p>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white mb-3">微通道两相冷却</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              微通道（水力直径0.1-1mm）中的两相流具有极高的换热系数（10⁴-10⁵ W/m²·K），
              是解决高功率密度芯片散热的前沿方案。主要挑战包括流型不稳定性、压力脉动和临界热流密度限制。
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
              <h3 className="text-xl font-bold text-white">换热器设计</h3>
              <p className="text-gray-400 text-sm mt-1">学习换热器的分类、热设计和LMTD/ε-NTU计算方法</p>
            </div>
            <Link
              href="/heat-transfer/heat-exchangers"
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
