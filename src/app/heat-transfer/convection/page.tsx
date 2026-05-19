import { Wind, Waves, Thermometer, Target, Lightbulb, AlertCircle, BookOpen, ChevronRight, ArrowRight, Droplets } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function ConvectionPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-cyan font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第 2.2 节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">对流传热</h1>
        <p className="text-gray-400 text-lg">
          对流传热是流体流过固体表面时发生的热量传递，自然界和工程中最常见也最复杂的传热方式。
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
              "理解对流传热的物理机理和牛顿冷却定律",
              "掌握自然对流和强制对流的区别与适用场景",
              "理解速度边界层和热边界层的概念及发展过程",
              "掌握 Nu、Re、Pr、Gr 等无量纲数的定义和物理意义",
              "了解典型经验关联式及其在工程中的应用",
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
            对流传热涉及流体流动和热量传递的耦合。学习本章前应熟悉流体力学基本概念
            （流速、粘度、密度、雷诺数）和导热的傅里叶定律。
            对流传热在自然散热设备（无风扇）、风冷散热器、液冷系统等场景中无处不在。
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["流速", "粘度", "密度", "层流", "湍流", "边界层", "热流密度"].map((kw) => (
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
            <Wind className="w-4 h-4" />
          </span>
          理论讲解
        </h2>

        <div className="space-y-6">
          {/* 2.1 Newton's Cooling Law */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.1 牛顿冷却定律</h3>
            <p className="text-gray-400 text-sm mb-4">
              牛顿冷却定律是对流传热的基本方程，形式上极其简洁，
              但将对流传热的全部复杂性都封装在对流换热系数 h 中。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-xl font-bold text-accent-cyan font-mono">Q = hA · ΔT</div>
              <p className="text-gray-500 text-xs mt-1">牛顿冷却定律——对流传热基本方程</p>
              <div className="text-lg font-bold text-accent-cyan font-mono mt-2">q = h · (T<sub>s</sub> − T<sub>∞</sub>)</div>
              <p className="text-gray-500 text-xs mt-1">热流密度形式</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">h</div>
                <div className="text-gray-500 text-xs">对流换热系数 W/(m²·K)</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">A</div>
                <div className="text-gray-500 text-xs">换热面积 m²</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold font-mono">ΔT</div>
                <div className="text-gray-500 text-xs">壁面与流体温差 (T_s − T_∞) K</div>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">对流换热系数 h 的量级</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                <div className="bg-tech-900/50 rounded p-2 text-center">
                  <div className="text-accent-orange font-semibold">自然对流（空气）</div>
                  <div className="text-gray-400 font-mono">5 ~ 25</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2 text-center">
                  <div className="text-accent-cyan font-semibold">强制对流（空气）</div>
                  <div className="text-gray-400 font-mono">25 ~ 250</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2 text-center">
                  <div className="text-accent-green font-semibold">强制对流（水）</div>
                  <div className="text-gray-400 font-mono">500 ~ 10,000</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2 text-center">
                  <div className="text-accent-red font-semibold">相变换热</div>
                  <div className="text-gray-400 font-mono">2,500 ~ 100,000</div>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">单位：W/(m²·K)</p>
            </div>
          </div>

          {/* 2.2 Factors affecting h */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.2 影响对流换热系数的因素</h3>
            <p className="text-gray-400 text-sm mb-4">
              对流换热系数 h 不是材料物性，而是由流动状态、流体物性和几何条件共同决定的参数。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">流动因素</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>• 流速 v：流速越大，h 越大（约 h ∝ v^0.5~0.8）</div>
                  <div>• 流态：湍流 h 远大于层流</div>
                  <div>• 流动方向：横掠 vs 纵掠</div>
                  <div>• 自然对流 vs 强制对流</div>
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">流体物性</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>• 导热系数 k：k 越大，边界层导热越强</div>
                  <div>• 粘度 μ：影响边界层厚度</div>
                  <div>• 比热容 c_p：影响热容量</div>
                  <div>• 密度 ρ：影响动量传递</div>
                </div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 md:col-span-2">
                <h4 className="text-sm font-semibold text-accent-amber mb-2">几何条件</h4>
                <div className="text-xs text-gray-400 space-y-1">
                  <div>• 表面形状：平板、圆管、翅片、球体等几何形状影响流动分离和再附着</div>
                  <div>• 表面方向：水平/垂直/倾斜影响自然对流的浮升力方向</div>
                  <div>• 表面尺寸：特征长度 L 影响雷诺数和努塞尔数</div>
                  <div>• 表面粗糙度：粗糙表面促进湍流，可提高 h</div>
                </div>
              </div>
            </div>
          </div>

          {/* 2.3 Natural Convection */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.3 自然对流</h3>
            <p className="text-gray-400 text-sm mb-4">
              自然对流由流体内部温度差异引起的密度变化驱动——热流体密度小从而上升，
              冷流体密度大从而下降，形成自然循环。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">Gr = gβΔT L³ / ν²</div>
              <p className="text-gray-500 text-xs mt-1">格拉晓夫数——自然对流强度的量度</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">g</div>
                <div className="text-gray-500 text-xs">重力 9.81 m/s²</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">β</div>
                <div className="text-gray-500 text-xs">体胀系数 1/K</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold font-mono">ΔT</div>
                <div className="text-gray-500 text-xs">壁-流体温差 K</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-teal font-bold font-mono">ν</div>
                <div className="text-gray-500 text-xs">运动粘度 m²/s</div>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-accent-orange/5 border border-accent-orange/10 rounded-lg p-4">
              <Thermometer className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-orange font-semibold">物理意义：</span>
                Gr 数代表浮升力与粘性力的比值。Gr 越大，自然对流越强。
                当 Gr &lt; 10⁸ 时流态为层流，Gr &gt; 10⁹ 时为湍流。
                无风扇设备的散热完全依赖自然对流。
              </p>
            </div>
          </div>

          {/* 2.4 Forced Convection */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.4 强制对流</h3>
            <p className="text-gray-400 text-sm mb-4">
              强制对流依靠外部动力（风扇、泵）驱动流体流动，换热强度远高于自然对流。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-5 mb-4 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">Re = ρvL / μ = vL / ν</div>
              <p className="text-gray-500 text-xs mt-1">雷诺数——判断流态的关键参数</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mb-4">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">ρ</div>
                <div className="text-gray-500 text-xs">密度 kg/m³</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-orange font-bold font-mono">v</div>
                <div className="text-gray-500 text-xs">流速 m/s</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold font-mono">L</div>
                <div className="text-gray-500 text-xs">特征长度 m</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-teal font-bold font-mono">μ / ν</div>
                <div className="text-gray-500 text-xs">动力/运动粘度</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">层流（Re &lt; 2300）</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  流体分层流动，径向混合小，温度梯度集中在壁面附近。
                  换热系数较低，但与流速关系为 h ∝ v^0.5。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">湍流（Re &gt; 4000）</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  流体剧烈掺混，径向热量传递大大增强。
                  换热系数高，与流速关系为 h ∝ v^0.8。
                  工程中通常希望流动处于湍流状态以强化换热。
                </p>
              </div>
            </div>
          </div>

          {/* 2.5 Boundary Layer */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.5 边界层概念</h3>
            <p className="text-gray-400 text-sm mb-4">
              当流体流过固体表面时，壁面处流体速度为零（无滑移条件），
              速度从零逐渐增加到主流速度的区域称为速度边界层。
              类似地，温度从壁温变化到主流温度的区域称为热边界层。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">速度边界层 δ_v</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  定义：从壁面到速度达到 0.99v_∞ 的距离。<br />
                  层流时 δ_v ∝ √x，湍流时 δ_v ∝ x^0.8。<br />
                  层流边界层较薄，速度梯度大；湍流边界层较厚。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">热边界层 δ_t</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  定义：从壁面到 (T − T_s)/(T_∞ − T_s) = 0.99 的距离。<br />
                  热边界层厚度与速度边界层厚度的比值为 Pr 的函数：<br />
                  δ_t / δ_v ≈ Pr^(−1/3)
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">边界层传热的基本关系</h4>
              <div className="text-center">
                <div className="text-lg font-bold text-accent-cyan font-mono">h = k / δ<sub>t</sub></div>
              </div>
              <p className="text-gray-500 text-xs mt-1 text-center">
                热边界层越薄，温度梯度越大，对流换热系数越高
              </p>
            </div>
          </div>

          {/* 2.6 Dimensionless Numbers */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">2.6 无量纲数</h3>
            <p className="text-gray-400 text-sm mb-4">
              对流传热分析中，使用无量纲数可以将复杂的传热问题表示为简洁的经验关联式。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">努塞尔数 Nu</h4>
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-accent-cyan font-mono">Nu = hL / k</div>
                </div>
                <p className="text-gray-400 text-xs">
                  无量纲对流换热系数，表示对流传热与纯导热的比值。
                  层流外掠平板：Nu = 0.664·Re^0.5·Pr^(1/3)
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">普朗特数 Pr</h4>
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-accent-cyan font-mono">Pr = c<sub>p</sub>μ / k = ν / α</div>
                </div>
                <p className="text-gray-400 text-xs">
                  动量扩散与热量扩散的比值。<br />
                  液态金属 Pr &lt;&lt; 1，水 Pr ≈ 7，油 Pr &gt;&gt; 1
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">格拉晓夫数 Gr</h4>
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-accent-cyan font-mono">Gr = gβΔT L³ / ν²</div>
                </div>
                <p className="text-gray-400 text-xs">
                  浮升力与粘性力之比值，Gr 越大自然对流越强。
                  Gr/Re² 判断自然/强制对流的相对重要性。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-green mb-2">经验关联式通式</h4>
                <div className="text-center mb-2">
                  <div className="text-lg font-bold text-accent-cyan font-mono">Nu = C · Re<sup>m</sup> · Pr<sup>n</sup></div>
                </div>
                <p className="text-gray-400 text-xs">
                  强制对流最常用的关联式形式。
                  不同工况（内部流/外部流、层流/湍流）的 C, m, n 不同。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-accent-amber/5 border border-accent-amber/10 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-accent-amber shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-amber font-semibold">常用关联式示例：</span>
                管内湍流强制对流（Dittus-Boelter 公式）：
                加热流体时 <span className="text-accent-cyan font-mono">Nu = 0.023 Re^0.8 Pr^0.4</span>，
                冷却流体时 <span className="text-accent-cyan font-mono">Nu = 0.023 Re^0.8 Pr^0.3</span>。
                管内层流（充分发展）：<span className="text-accent-cyan font-mono">Nu = 3.66</span>（常数）。
              </p>
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
          {/* Diagram 1: Boundary Layer Development */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">图 2-3 速度和热边界层发展示意图</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 520 300" className="w-full max-w-2xl mx-auto" fill="none">
                  {/* Plate */}
                  <rect x="80" y="230" width="400" height="12" rx="2" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="280" y="257" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace">加热平板（T_s &gt; T_∞）</text>
                  {/* Free stream arrow */}
                  <line x1="60" y1="30" x2="490" y2="30" stroke="#555" strokeWidth="1.5" />
                  <polygon points="484,27 484,33 490,30" fill="#555" />
                  <text x="60" y="25" textAnchor="end" fill="#666" fontSize="10" fontFamily="monospace">主流 v_∞, T_∞</text>
                  {/* Velocity boundary layer profile shapes */}
                  <path d="M140,230 Q140,200 200,180 Q260,160 320,140 Q380,120 420,110" stroke="#00d4ff" strokeWidth="2" fill="none" />
                  <path d="M140,230 Q140,210 180,195 Q220,180 260,165 Q300,150 340,140" stroke="#00d4ff" strokeWidth="2" fill="none" strokeDasharray="6 3" />
                  {/* Velocity vectors inside BL */}
                  {[180, 240, 320, 400].map((x, i) => {
                    const yBase = 230;
                    const yTop = [210, 190, 170, 155][i];
                    const step = (yBase - yTop) / 4;
                    return Array.from({ length: 4 }, (_, j) => {
                      const y = yBase - step * (j + 1);
                      const len = 10 + 30 * ((j + 1) / 4);
                      return (
                        <g key={`${x}-${j}`}>
                          <line x1={x} y1={y} x2={x + len} y2={y} stroke="#00d4ff" strokeWidth="0.8" />
                          <polygon points={`${x + len - 3},${y - 2} ${x + len - 3},${y + 2} ${x + len},${y}`} fill="#00d4ff" />
                        </g>
                      );
                    });
                  })}
                  {/* Temperature boundary layer profile shapes */}
                  <path d="M140,230 Q140,215 180,200 Q220,185 260,170 Q300,155 340,145" stroke="#ef4444" strokeWidth="2" fill="none" />
                  {/* Temperature labels */}
                  <text x="160" y="245" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">δ_v</text>
                  <text x="160" y="252" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">δ_t</text>
                  {/* Arrows indicating BL growth */}
                  <line x1="430" y1="230" x2="430" y2="100" stroke="#0891b2" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="427,105 433,105 430,98" fill="#0891b2" />
                  <text x="440" y="165" textAnchor="start" fill="#0891b2" fontSize="9" fontFamily="monospace">边界层</text>
                  <text x="440" y="178" textAnchor="start" fill="#0891b2" fontSize="9" fontFamily="monospace">增厚</text>
                  {/* Laminar / Turbulent labels */}
                  <text x="200" y="145" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace">层流</text>
                  <text x="360" y="125" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">过渡→湍流</text>
                  {/* Transition indicator */}
                  <line x1="300" y1="130" x2="300" y2="230" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 2" />
                  <text x="300" y="128" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">x_c</text>
                  {/* Inlet */}
                  <text x="140" y="265" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">前缘 x=0</text>
                </svg>
                <p className="text-xs text-gray-500 mt-2">
                  图 2-3 平板外掠对流中速度边界层（蓝色）和热边界层（红色）的发展。
                  前缘处边界层最薄，沿流动方向逐渐增厚。层流段换热较弱，湍流段换热显著增强。
                </p>
              </div>
            </div>
          </div>

          {/* Diagram 2: Natural vs Forced Convection */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">图 2-4 自然对流 vs 强制对流对比</h3>
            <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20 flex items-center justify-center">
              <div className="text-center">
                <svg viewBox="0 0 500 220" className="w-full max-w-2xl mx-auto" fill="none">
                  {/* Natural Convection */}
                  <rect x="40" y="30" width="40" height="150" rx="3" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1.5" />
                  <text x="60" y="20" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace">热板</text>
                  {/* Flow arrows up */}
                  {[60, 100, 140].map((x) => (
                    <g key={x}>
                      {[0, 1, 2].map((i) => (
                        <line key={i} x1={x} y1={190 - i * 35} x2={x} y2={190 - (i + 1) * 35} stroke="#ef4444" strokeWidth="1.5" />
                      ))}
                      <text x={x} y="200" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">↑</text>
                    </g>
                  ))}
                  <text x="100" y="80" textAnchor="end" fill="#ef4444" fontSize="9" fontFamily="monospace">热空气↑</text>
                  <text x="220" y="140" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">自然对流</text>
                  <text x="220" y="155" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">h ≈ 5~25</text>

                  {/* Separator */}
                  <line x1="260" y1="20" x2="260" y2="200" stroke="#555" strokeWidth="1" strokeDasharray="4 4" />

                  {/* Forced Convection */}
                  <rect x="300" y="30" width="40" height="150" rx="3" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1.5" />
                  <text x="320" y="20" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">热板</text>
                  {/* Side flow arrows */}
                  <line x1="270" y1="50" x2="480" y2="50" stroke="#00d4ff" strokeWidth="2" />
                  <polygon points="474,47 474,53 480,50" fill="#00d4ff" />
                  <line x1="270" y1="80" x2="480" y2="80" stroke="#00d4ff" strokeWidth="2" />
                  <polygon points="474,77 474,83 480,80" fill="#00d4ff" />
                  <line x1="270" y1="110" x2="480" y2="110" stroke="#00d4ff" strokeWidth="2" />
                  <polygon points="474,107 474,113 480,110" fill="#00d4ff" />
                  <text x="375" y="65" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">强制气流 →</text>
                  <text x="375" y="95" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">强制气流 →</text>
                  <text x="375" y="125" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">强制气流 →</text>
                  <text x="400" y="155" textAnchor="middle" fill="#666" fontSize="10" fontFamily="monospace">强制对流</text>
                  <text x="400" y="170" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">h ≈ 25~250</text>

                  {/* Note */}
                  <text x="250" y="215" textAnchor="middle" fill="#555" fontSize="8" fontFamily="monospace">强制对流的换热系数通常比自然对流高 5~10 倍</text>
                </svg>
                <p className="text-xs text-gray-500 mt-2">
                  图 2-4 自然对流（左侧，热空气上升）与强制对流（右侧，风扇驱动气流）的对比。
                  强制对流的换热系数高出 5-10 倍。
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
          {/* Case 1: Fin Heatsink */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">案例 1：翅片散热器自然对流优化</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  某自然对流散热器功耗 20W，允许温升 40°C，环境 25°C。
                  散热器尺寸 100mm × 100mm × 40mm（含翅片），基板厚 3mm。
                  需要确定最佳翅片间距和翅片高度。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-amber mb-2">自然对流换热系数</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  对于垂直翅片自然对流：<br />
                  典型 h ≈ 8 W/(m²·K)<br />
                  所需换热面积：A = Q / (h·ΔT) = 20 / (8 × 40) = 0.0625 m²<br />
                  平基板面积仅 0.01 m²，需通过翅片扩展面积约 6 倍。
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">翅片参数优化</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                <span className="text-accent-cyan font-semibold">翅片间距 s：</span>
                自然对流要求 s ≥ 8mm 以避免边界层重叠阻碍流动。
                间距过小会大幅降低换热系数。推荐 s = 8~12mm。<br />
                <span className="text-accent-cyan font-semibold">翅片高度 H：</span>
                高度增加可扩展面积，但翅片效率降低（翅尖温度低）。
                H = 30~40mm 通常是最优范围。<br />
                <span className="text-accent-cyan font-semibold">翅片厚度 t：</span>
                通常 1~2mm，厚度影响导热和重量。<br />
                优化后：10 片翅片，间距 10mm，高度 35mm，厚度 1.5mm，
                总面积约 0.07 m²，温升约 36°C，满足要求。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-accent-green/5 border border-accent-green/10 rounded-lg p-4">
              <Lightbulb className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-green font-semibold">设计准则：</span>
                自然对流散热器翅片间距与翅片高度之比（s/H）应在 0.25~0.35 之间。
                散热器应垂直安装利用烟囱效应。表面进行阳极氧化或黑化处理可同时增强辐射散热。
              </p>
            </div>
          </div>

          {/* Case 2: Server Fan */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4">案例 2：服务器风扇强制对流设计</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-cyan mb-2">问题描述</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  1U 服务器 CPU 功耗 200W，采用强制风冷散热器。
                  散热器底座尺寸 60mm × 60mm，翅片高度 25mm，翅片间距 2mm。
                  风扇风量 30 CFM（约 0.014 m³/s），风速约 3 m/s。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">风量需求估算</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  空气比热 c_p ≈ 1005 J/(kg·K)，密度 ρ ≈ 1.2 kg/m³<br />
                  所需温升 ΔT = Q / (ṁ · c_p)<br />
                  ṁ = ρ · V̇ = 1.2 × 0.014 = 0.0168 kg/s<br />
                  ΔT = 200 / (0.0168 × 1005) ≈ 11.8°C<br />
                  出风温度约升高 12°C，可接受。
                </p>
              </div>
            </div>

            <div className="bg-tech-900/30 rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">对流换热计算</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                翅片间流速 v ≈ 3 m/s，水力直径 D_h ≈ 2 × 间距 = 4mm = 0.004m<br />
                空气 ν ≈ 1.5×10⁻⁵ m²/s，Pr ≈ 0.71，k ≈ 0.026 W/m·K<br />
                <span className="text-accent-cyan font-mono">Re = v·D_h/ν = 3 × 0.004 / 1.5×10⁻⁵ = 800</span>（层流）<br />
                对于矩形通道层流，Nu ≈ 4.0<br />
                <span className="text-accent-cyan font-mono">h = Nu · k / D_h = 4.0 × 0.026 / 0.004 = 26 W/(m²·K)</span><br />
                总换热面积约 0.12 m²，温升 40°C 时传递 Q = 26 × 0.12 × 40 ≈ 125W<br />
                <span className="text-accent-orange font-semibold">结论：</span>单散热器不足，需采用热管辅助或增加风速至 5 m/s 进入过渡流状态。
              </p>
            </div>

            <div className="flex items-start gap-3 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-4">
              <Wind className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-cyan font-semibold">流动优化：</span>
                提高风速至 5~6 m/s 使 Re &gt; 2000 进入过渡流或湍流，
                可显著提高 h 至 40~60 W/(m²·K)。同时需权衡风扇噪音（通常 ≤ 55 dBA）。
                1U 服务器通常采用热管+密集翅片+高风压风扇方案。
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
              <h3 className="text-base font-semibold text-white">牛顿冷却定律应用</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一散热器表面积 A = 0.08 m²，表面温度 T_s = 75°C，空气温度 T_∞ = 25°C。
              测得散热量 Q = 32W。求对流换热系数 h。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  由牛顿冷却定律：<span className="text-accent-cyan font-mono">Q = hA · ΔT</span><br />
                  <span className="text-accent-cyan font-mono">h = Q / (A · ΔT) = 32 / (0.08 × (75 − 25))</span><br />
                  <span className="text-accent-cyan font-mono">h = 32 / (0.08 × 50) = 32 / 4 = 8 W/(m²·K)</span><br />
                  对流换热系数为 <span className="text-accent-green font-bold">8 W/(m²·K)</span>，属于自然对流的典型范围。
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 2 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">雷诺数与流态判断</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              空气在直径 D = 50mm 的管道内流动，流速 v = 2 m/s，
              运动粘度 ν = 1.5×10⁻⁵ m²/s。判断流态并计算若需达到湍流（Re &gt; 4000）所需的最小流速。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  雷诺数公式：<span className="text-accent-cyan font-mono">Re = vD / ν</span><br />
                  当前：<span className="text-accent-cyan font-mono">Re = 2 × 0.05 / 1.5×10⁻⁵ = 6,667</span><br />
                  因 Re &gt; 4000，流态为 <span className="text-accent-green font-bold">湍流</span>。<br /><br />
                  临界流速（Re = 4000 时）：<br />
                  <span className="text-accent-cyan font-mono">v_c = Re · ν / D = 4000 × 1.5×10⁻⁵ / 0.05 = 1.2 m/s</span><br />
                  实际上只要 v &gt; 1.2 m/s 即可达到湍流。当前 2 m/s 已充分发展为湍流。
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 3 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">自然对流温升估算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一电子设备功耗 10W，外壳表面积 0.05 m²，自然对流换热系数 h ≈ 10 W/(m²·K)，
              环境温度 30°C。假设辐射散热可忽略，估算设备外壳的平衡温度。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  由牛顿冷却定律：<span className="text-accent-cyan font-mono">Q = hA · (T_s − T_∞)</span><br />
                  <span className="text-accent-cyan font-mono">T_s = T_∞ + Q / (hA)</span><br />
                  <span className="text-accent-cyan font-mono">T_s = 30 + 10 / (10 × 0.05)</span><br />
                  <span className="text-accent-cyan font-mono">T_s = 30 + 10 / 0.5 = 30 + 20 = 50°C</span><br />
                  外壳平衡温度约 <span className="text-accent-green font-bold">50°C</span>，温升 20°C。<br />
                  <span className="text-gray-500 text-xs">实际上辐射散热不可忽略，真实温度会略低于 50°C。
                  若外壳涂黑漆，辐射散热量约增加 20-30%。</span>
                </p>
              </div>
            </details>
          </div>

          {/* Exercise 4 */}
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">强制对流努塞尔数计算</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              水在内径 20mm 的管道内流动，流速 1.5 m/s，水温 30°C。
              已知水的物性：ρ = 995 kg/m³，μ = 7.98×10⁻⁴ Pa·s，k = 0.618 W/m·K，Pr = 5.2。
              使用 Dittus-Boelter 公式（Nu = 0.023 Re^0.8 Pr^0.4）计算 h。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  雷诺数：<span className="text-accent-cyan font-mono">Re = ρvD/μ = 995×1.5×0.02 / (7.98×10⁻⁴)</span><br />
                  <span className="text-accent-cyan font-mono">Re = 29.85 / 7.98×10⁻⁴ ≈ 37,400</span>（湍流）<br />
                  Dittus-Boelter 公式：<span className="text-accent-cyan font-mono">Nu = 0.023 × 37400^0.8 × 5.2^0.4</span><br />
                  37400^0.8 ≈ 4180，5.2^0.4 ≈ 1.93<br />
                  <span className="text-accent-cyan font-mono">Nu ≈ 0.023 × 4180 × 1.93 ≈ 185.6</span><br />
                  <span className="text-accent-cyan font-mono">h = Nu · k / D = 185.6 × 0.618 / 0.02</span><br />
                  <span className="text-accent-cyan font-mono">h ≈ 5,735 W/(m²·K)</span><br />
                  水的强制对流换热系数约为 <span className="text-accent-green font-bold">5,735 W/(m²·K)</span>，
                  远高于空气强制对流！
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
            <h3 className="text-lg font-semibold text-white mb-3">相变换热（沸腾与冷凝）</h3>
            <p className="text-gray-400 text-sm mb-4">
              相变换热利用液体的汽化潜热或蒸汽的凝结潜热传递热量，
              其换热系数可达普通对流的 10-100 倍，是最高效的换热方式之一。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-orange mb-2">沸腾换热</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  核态沸腾是最高效的沸腾状态，气泡在加热面形成并脱离，
                  带走大量潜热。典型 h = 2,500 ~ 100,000 W/(m²·K)。<br />
                  临界热流密度（CHF）是沸腾换热的极限——超过 CHF 后，
                  蒸汽膜覆盖表面导致传热急剧恶化（烧毁点）。
                </p>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
                <h4 className="text-sm font-semibold text-accent-teal mb-2">冷凝换热</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  膜状冷凝：冷凝液在壁面形成液膜，液膜热阻控制换热。
                  滴状冷凝：冷凝液在壁面形成液滴而非液膜，无液膜热阻。
                  滴状冷凝 h 可比膜状冷凝高 5-10 倍，但难以长期维持。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-accent-cyan/5 border border-accent-cyan/10 rounded-lg p-4">
              <Droplets className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">
                <span className="text-accent-cyan font-semibold">工程应用：</span>
                热管是相变换热最成功的工程应用——蒸发端液体沸腾吸热，
                蒸汽流向冷凝端放热凝结，通过毛细力或重力驱动循环。
                热管等效导热系数可达 10,000+ W/m·K，是纯铜的 25 倍以上。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Next Chapter */}
      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-cyan/5 to-accent-teal/5 border border-accent-cyan/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-cyan font-mono mb-1">下一节</div>
              <h3 className="text-xl font-bold text-white">热辐射</h3>
              <p className="text-gray-400 text-sm mt-1">学习物体通过电磁波传递热量的方式——热辐射</p>
            </div>
            <Link
              href="/heat-transfer/radiation"
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
