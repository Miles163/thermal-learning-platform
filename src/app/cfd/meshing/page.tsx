import { Grid3X3, BookOpen, ChevronRight, AlertCircle, Lightbulb, Layers, Gauge, Target } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function MeshingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-amber font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第四章 · 第三节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">网格划分技术</h1>
        <p className="text-gray-400 text-lg">
          网格是 CFD 仿真的基石——网格质量直接决定了计算精度、收敛速度和结果的可靠性。
          本章系统讲解网格质量评价、边界层处理和网格独立性验证的核心技术。
        </p>
      </div>

      <ChapterNav sections={[
        { id: "intro", label: "引言" },
        { id: "quality", label: "质量评价" },
        { id: "boundary", label: "边界层网格" },
        { id: "yplus", label: "Y+ 值" },
        { id: "independence", label: "网格独立性" },
        { id: "refinement", label: "局部加密" },
        { id: "comparison", label: "网格类型对比" },
        { id: "case", label: "工程案例" },
        { id: "exercises", label: "练习题" },
        { id: "advanced", label: "进阶内容" },
        { id: "next", label: "下一章" },
      ]} />

      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Grid3X3 className="w-4 h-4" />
          </span>
          章节简介
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 leading-relaxed mb-4">
            网格划分（Meshing）是 CFD 仿真工作流中最耗时、最考验经验的环节。
            据统计，在工业 CFD 项目中，网格生成通常占整个仿真周期的 40-60%。
            一个高质量的网格可以大幅提高计算精度和收敛速度，而糟糕的网格则可能导致结果完全错误甚至计算发散。
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            本章将帮助读者建立系统的网格质量观念，掌握评价网格优劣的科学方法，
            学会在不同仿真场景下选择合适的网格策略。
          </p>
          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-accent-cyan mb-2">本章核心内容</h4>
            <ul className="space-y-1.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">• 网格质量四大核心指标：正交性、偏斜度、纵横比、Y+</li>
              <li className="flex items-center gap-2">• 边界层网格的理论基础与生成方法</li>
              <li className="flex items-center gap-2">• 网格独立性验证（Grid Independence Study）的完整流程</li>
              <li className="flex items-center gap-2">• 局部加密策略与不同网格类型的工程选择</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="quality" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Target className="w-4 h-4" />
          </span>
          网格质量评价指标
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            网格质量是 CFD 精度的生命线。Fluent 和通用 CFD 软件使用以下四个核心指标来评价网格质量：
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">1. 正交性（Orthogonal Quality）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                衡量网格单元面法向与相邻单元中心连线之间的夹角。正交性越接近 1 越好。
              </p>
              <div className="bg-tech-900/70 rounded-lg p-2 mt-2 text-center">
                <div className="text-xs text-accent-cyan font-mono">OQ = min( A<sub>i</sub>·e<sub>i</sub> / |A<sub>i</sub>|·|e<sub>i</sub>| )</div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                <div className="bg-accent-green/10 rounded p-1 text-center"><span className="text-accent-green font-bold">优：</span> &gt; 0.7</div>
                <div className="bg-accent-amber/10 rounded p-1 text-center"><span className="text-accent-amber font-bold">可：</span> 0.3 - 0.7</div>
                <div className="bg-accent-red/10 rounded p-1 text-center"><span className="text-accent-red font-bold">差：</span> &lt; 0.15</div>
              </div>
            </div>

            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">2. 偏斜度（Skewness）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                衡量网格单元与理想单元形状的偏差程度。偏斜度越接近 0 越好。
                高偏斜度的单元会导致方程刚性增大、收敛困难。
              </p>
              <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                <div className="bg-accent-green/10 rounded p-1 text-center"><span className="text-accent-green font-bold">优：</span> &lt; 0.3</div>
                <div className="bg-accent-amber/10 rounded p-1 text-center"><span className="text-accent-amber font-bold">可：</span> 0.3 - 0.85</div>
                <div className="bg-accent-red/10 rounded p-1 text-center"><span className="text-accent-red font-bold">差：</span> &gt; 0.85</div>
              </div>
            </div>

            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">3. 纵横比（Aspect Ratio）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                单元最长边与最短边的比值。对于各向同性流动，纵横比越接近 1 越好。
                在边界层中，刻意使用高纵横比（10-100）网格以提高计算效率。
              </p>
              <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                <div className="bg-accent-green/10 rounded p-1 text-center"><span className="text-accent-green font-bold">优：</span> 1 - 5</div>
                <div className="bg-accent-amber/10 rounded p-1 text-center"><span className="text-accent-amber font-bold">可：</span> 5 - 50</div>
                <div className="bg-accent-red/10 rounded p-1 text-center"><span className="text-accent-red font-bold">差：</span> &gt; 100</div>
              </div>
            </div>

            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-red mb-2">4. 单元体积（Cell Volume）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                检查是否有负体积网格。负体积的网格单元会导致 Fluent 立即报错中止。
                网格划分完成后，应使用 Mesh Check 工具全面检查。
              </p>
            </div>
          </div>

          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 480 140" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="460" height="120" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <rect x="30" y="30" width="60" height="60" rx="2" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1" />
                <text x="60" y="108" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">理想单元</text>
                <rect x="140" y="30" width="50" height="70" rx="2" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1" />
                <text x="165" y="108" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">大纵横比</text>
                <polygon points="250,30 310,30 320,90 240,90" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1" />
                <text x="280" y="108" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">高偏斜度</text>
                <rect x="360" y="20" width="60" height="80" rx="2" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1" />
                <rect x="365" y="25" width="50" height="70" rx="1" fill="rgba(16,185,129,0.05)" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 1" />
                <text x="390" y="108" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">边界层单元</text>
                <text x="250" y="128" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-6 网格单元形状与质量评价</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="boundary" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Layers className="w-4 h-4" />
          </span>
          边界层网格
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            边界层（Boundary Layer）是流体在壁面附近速度从零（无滑移边界）变化到主流速度的区域。
            在边界层内，速度梯度和温度梯度极大，需要使用加密的网格来精确捕捉。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">边界层网格参数</h4>
              <div className="space-y-1.5 text-xs text-gray-400">
                <div>第一层高度（First Layer Height）：由目标 Y+ 决定</div>
                <div>层数（Number of Layers）：通常 8-15 层</div>
                <div>增长率（Growth Rate）：1.1 - 1.2</div>
                <div>总厚度（Total Thickness）：应覆盖整个边界层</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">边界层物理厚度估计</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                湍流边界层厚度 δ 可用下式估算：<br />
                <span className="text-accent-cyan font-mono">δ / x = 0.37 · Re<sub>x</sub>⁻¹/⁵</span><br />
                平板湍流边界层厚度公式<br />
                以 x = 0.1m，V = 3 m/s，空气为例：<br />
                <span className="text-accent-cyan font-mono">Re<sub>x</sub> = 3×0.1 / 1.5×10⁻⁵ = 20000</span><br />
                <span className="text-accent-cyan font-mono">δ = 0.1 × 0.37 × 20000⁻¹/⁵ ≈ 5.6 mm</span>
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 150" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="480" height="130" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <rect x="40" y="30" width="420" height="80" rx="4" fill="rgba(0,212,255,0.03)" stroke="#555" strokeWidth="0.5" />
                <line x1="40" y1="110" x2="460" y2="110" stroke="#555" strokeWidth="1.5" />
                <text x="250" y="125" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-7 边界层网格：壁面附近加密，逐渐过渡</text>
                <rect x="40" y="102" width="420" height="8" rx="1" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="0.5" />
                <rect x="40" y="95" width="420" height="7" rx="1" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="0.5" />
                <rect x="40" y="89" width="420" height="6" rx="1" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.5" />
                <rect x="40" y="84" width="420" height="5" rx="1" fill="rgba(0,212,255,0.08)" stroke="#00d4ff" strokeWidth="0.5" />
                <rect x="40" y="80" width="420" height="4" rx="1" fill="rgba(0,212,255,0.05)" stroke="#00d4ff" strokeWidth="0.5" />
                <text x="250" y="42" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">主流区域（粗网格）</text>
                <text x="250" y="75" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">边界层（细网格）</text>
                <line x1="20" y1="45" x2="20" y2="110" stroke="#ef4444" strokeWidth="1.5" />
                <polygon points="17,55 23,55 20,50" fill="#ef4444" />
                <polygon points="17,105 23,105 20,110" fill="#ef4444" />
                <text x="15" y="80" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">V(z)</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="yplus" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Gauge className="w-4 h-4" />
          </span>
          Y+ 值的意义与控制
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Y+ 是壁面距离的无量纲化值，是确定边界层网格第一层高度的关键参数。
            不同的湍流模型对 Y+ 值有不同要求。
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-xl font-bold text-accent-cyan font-mono">Y⁺ = u<sub>τ</sub> · y / ν</div>
            <p className="text-gray-500 text-xs mt-1">其中 u<sub>τ</sub> = √(τ<sub>w</sub>/ρ) 为壁面摩擦速度</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">低 Y+ 模型（Y+ ≈ 1）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                使用 SST k-ω、Enhanced Wall Treatment 等模型时，
                要求第一层网格节点位于粘性底层内部（Y+ ≈ 1）。
                需要非常细密的壁面网格，但能精确捕捉壁面传热和摩擦。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">壁面函数法（Y+ &gt; 30）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                使用标准壁面函数（Standard Wall Functions）时，
                要求第一层网格节点位于对数律层（Y+ 30-300）。
                允许较粗的壁面网格，大量节省计算资源，但精度较低。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">第一层网格高度估算公式</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              在划分网格前，可以根据 Re 估算第一层高度：<br />
              <span className="text-accent-cyan font-mono">Δy = (Y⁺ · L) · Re<sub>L</sub>⁻¹³/¹⁴ · 0.199</span><br />
              对于 Re = 10⁴、L = 0.1m 的平板流动，要获得 Y+ = 1：<br />
              <span className="text-accent-cyan font-mono">Δy ≈ 0.1 × 10000⁻⁰·⁹³ × 0.199 ≈ 0.035 mm</span><br />
              这在翅片间隙中意味着网格量会显著增加。
            </p>
          </div>
        </div>
      </section>

      <section id="independence" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Target className="w-4 h-4" />
          </span>
          网格独立性验证
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            网格独立性验证（Grid Independence Study）是确保仿真结果不依赖于网格密度的标准流程。
            只有在网格足够密时，数值解才趋近于网格无关解。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">验证流程</h4>
              <ol className="space-y-1.5 text-xs text-gray-400 list-decimal list-inside">
                <li>生成稀、中、密三套网格（粗网格、基准网格、细网格）</li>
                <li>在相同边界条件设置下进行仿真</li>
                <li>监控关键结果（如 CPU 温度、压降）随网格量的变化</li>
                <li>计算相对偏差：|(T<sub>fine</sub> - T<sub>medium</sub>)| / T<sub>fine</sub> &lt; 1%</li>
                <li>若偏差过大，继续加密网格直至稳定</li>
              </ol>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">实际应用示例</h4>
              <div className="text-xs text-gray-400">
                <div>粗网格：100 万单元 → CPU 温度 72.3°C</div>
                <div>基准网格：300 万单元 → CPU 温度 70.1°C</div>
                <div>细网格：600 万单元 → CPU 温度 69.8°C</div>
                <div className="mt-1 text-accent-green">
                  偏差：(70.1 - 69.8) / 69.8 = 0.4% &lt; 1%
                </div>
                <div className="text-accent-cyan font-bold">结论：300 万网格已满足独立性要求。</div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">网格收敛指数（GCI）</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              GCI（Grid Convergence Index）是更严格的网格独立性量化指标，基于 Richardson 外推法。
              GCI 值越小，说明网格解越接近精确解。通常要求 GCI &lt; 3-5%。
            </p>
            <div className="bg-tech-900/70 rounded-lg p-2 mt-2 text-center">
              <div className="text-xs text-accent-cyan font-mono">GCI = F<sub>s</sub> · |(f<sub>2</sub> - f<sub>1</sub>) / f<sub>1</sub>| / (r<sup>p</sup> - 1)</div>
              <p className="text-gray-500 text-[10px]">F<sub>s</sub> = 1.25（安全因子），r 为网格加密比，p 为收敛阶数</p>
            </div>
          </div>
        </div>
      </section>

      <section id="refinement" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Layers className="w-4 h-4" />
          </span>
          局部加密策略
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            全域加密网格会带来巨大的计算开销。最佳实践是在关键区域进行局部加密，
            在次要区域使用较粗网格，从而在精度和计算成本之间取得平衡。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">需要局部加密的区域</h4>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• 壁面附近（边界层加密）</li>
                <li>• 翅片间隙（流动加速区域）</li>
                <li>• 热源表面（温度梯度大）</li>
                <li>• 几何突变处（尖角、台阶）</li>
                <li>• 回流区和分离区</li>
                <li>• 进出口附近</li>
              </ul>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">Fluent Meshing 局部加密方法</h4>
              <ul className="space-y-1 text-xs text-gray-400">
                <li>• BOI（Body of Influence）：在指定区域加密</li>
                <li>• Curvature Refinement：曲面曲率自适应加密</li>
                <li>• Proximity Refinement：窄间隙自动加密</li>
                <li>• Custom Sizing：手动指定局部尺寸</li>
                <li>• Adaption（求解后自适应）：基于梯度自适应</li>
              </ul>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">散热器网格策略总结</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              对于翅片式散热器仿真，建议在翅片表面设置边界层网格（5-8 层），
              翅片间隙体网格尺寸为 0.2-0.5mm，风道入口出口区域尺寸为 1-3mm，
              中间区域使用非均匀过渡。总网格量控制在 300-500 万单元。
            </p>
          </div>
        </div>
      </section>

      <section id="comparison" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Grid3X3 className="w-4 h-4" />
          </span>
          不同网格类型对比
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-xs text-gray-400">
              <thead>
                <tr className="border-b border-tech-600/30">
                  <th className="text-left py-2 px-2 text-accent-cyan">属性</th>
                  <th className="text-left py-2 px-2 text-accent-cyan">四面体</th>
                  <th className="text-left py-2 px-2 text-accent-cyan">六面体</th>
                  <th className="text-left py-2 px-2 text-accent-cyan">多面体</th>
                  <th className="text-left py-2 px-2 text-accent-cyan">笛卡尔</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-tech-600/20">
                  <td className="py-2 px-2 font-bold">生成难度</td>
                  <td className="py-2 px-2">容易</td>
                  <td className="py-2 px-2 text-accent-amber">困难</td>
                  <td className="py-2 px-2">中等</td>
                  <td className="py-2 px-2 text-accent-green">容易</td>
                </tr>
                <tr className="border-b border-tech-600/20">
                  <td className="py-2 px-2 font-bold">几何适应性</td>
                  <td className="py-2 px-2 text-accent-green">极好</td>
                  <td className="py-2 px-2">差</td>
                  <td className="py-2 px-2 text-accent-green">好</td>
                  <td className="py-2 px-2">中等</td>
                </tr>
                <tr className="border-b border-tech-600/20">
                  <td className="py-2 px-2 font-bold">计算精度</td>
                  <td className="py-2 px-2">低</td>
                  <td className="py-2 px-2 text-accent-green">高</td>
                  <td className="py-2 px-2">中等</td>
                  <td className="py-2 px-2">中等</td>
                </tr>
                <tr className="border-b border-tech-600/20">
                  <td className="py-2 px-2 font-bold">收敛速度</td>
                  <td className="py-2 px-2">慢</td>
                  <td className="py-2 px-2 text-accent-green">快</td>
                  <td className="py-2 px-2">较快</td>
                  <td className="py-2 px-2">快</td>
                </tr>
                <tr>
                  <td className="py-2 px-2 font-bold">单元数（相同尺寸）</td>
                  <td className="py-2 px-2 text-accent-red">最多</td>
                  <td className="py-2 px-2 text-accent-green">最少</td>
                  <td className="py-2 px-2">适中</td>
                  <td className="py-2 px-2">适中</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">散热仿真推荐选择</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              对于散热器仿真，推荐使用 <span className="text-accent-cyan font-bold">多面体网格（Polyhedral）</span> 或 
              <span className="text-accent-green font-bold"> Mosaic 网格</span>
              （Fluent 2023+ 新增技术，自动连接六面体和多面体网格）。
              多面体网格比四面体网格单元数少 3-5 倍，收敛速度提升 2-4 倍，
              且对复杂几何适应性好，是目前电子散热仿真的最佳选择。
            </p>
          </div>
        </div>
      </section>

      <section id="case" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <AlertCircle className="w-4 h-4" />
          </span>
          工程案例：散热器网格划分策略
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">案例参数</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>散热器类型：铝挤型，40 片翅片</div>
                <div>翅片间距：1.5 mm</div>
                <div>翅片高度：25 mm</div>
                <div>基板厚度：8 mm</div>
                <div>风扇风速：3 m/s</div>
                <div>网格工具：Fluent Meshing</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">网格策略</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>翅片表面：边界层 8 层，第一层 0.05mm，增长率 1.2</div>
                <div>翅片间隙：体网格 0.3mm（多面体）</div>
                <div>基板：体网格 1mm</div>
                <div>风道入口/出口：体网格 2mm</div>
                <div>总网格量：约 4,200,000 单元</div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">网格质量检查结果</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              正交性最小值：0.32（满足 &gt; 0.15 的要求）<br />
              偏斜度最大值：0.81（满足 &lt; 0.85 的要求）<br />
              纵横比最大值：45（边界层中，可接受）<br />
              Y+ 最大值：2.3（SST k-ω 可使用 Enhanced Wall Treatment 处理 Y+ &lt; 5 的区域）<br />
              负体积检查：0 个，通过<br /><br />
              如果正交性 &lt; 0.15 或偏斜度 &gt; 0.85 的区域较多，需要重新优化网格。
              常见改进方法包括：对翅片边缘进行膨胀、使用 Size Function 控制过渡、
              在几何尖角处增加网格密度。
            </p>
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
              <h3 className="text-base font-semibold text-white">网格质量分析</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个 CFD 仿真出现"turbulent viscosity limited to viscosity ratio"警告，
              且残差曲线振荡无法收敛。分析可能与网格质量相关的原因并提出改进方案。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  可能原因：<br />
                  1. <span className="text-accent-cyan">高偏斜度单元</span>——偏斜度 &gt; 0.9 的单元会导致湍流方程不稳定。
                     检查 Skewness，对高偏斜区域重新划分或使用局部加密。<br />
                  2. <span className="text-accent-cyan">网格过渡过快</span>——从细网格到粗网格的增长率超过 1.3-1.4，
                     导致数值误差骤增。控制增长率 &lt; 1.2。<br />
                  3. <span className="text-accent-cyan">Y+ 值不匹配</span>——使用 SST k-ω 但 Y+ 在 5-30 的"缓冲区"。
                     调整第一层高度使 Y+ &lt; 1 或 &gt; 30。<br />
                  4. <span className="text-accent-cyan">负体积</span>——检查 Cell Volume，修复负体积网格。
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">Y+ 计算与边界层设置</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              空气以 5 m/s 流过一块平板（L = 0.2m），空气运动粘度 ν = 1.5×10⁻⁵ m²/s。
              要求使用 SST k-ω 模型（目标 Y+ = 1），估算第一层网格高度。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  先计算 Re：<span className="text-accent-cyan font-mono">Re<sub>L</sub> = 5 × 0.2 / 1.5×10⁻⁵ = 66,667</span><br />
                  使用平板湍流经验公式估算壁面摩擦：<br />
                  <span className="text-accent-cyan font-mono">C<sub>f</sub> = 0.0592 · Re<sub>L</sub>⁻¹/⁵ = 0.0592 × 66667⁻⁰·²</span><br />
                  <span className="text-accent-cyan font-mono">= 0.0592 / 9.15 = 0.00647</span><br />
                  <span className="text-accent-cyan font-mono">τ<sub>w</sub> = ½ρV² × C<sub>f</sub> = 0.5 × 1.2 × 25 × 0.00647 = 0.0971 Pa</span><br />
                  <span className="text-accent-cyan font-mono">u<sub>τ</sub> = √(τ<sub>w</sub>/ρ) = √(0.0971/1.2) = 0.284 m/s</span><br />
                  第一层高度：<span className="text-accent-cyan font-mono">Δy = Y⁺ · ν / u<sub>τ</sub> = 1 × 1.5×10⁻⁵ / 0.284</span><br />
                  <span className="text-accent-cyan font-mono">= 5.28×10⁻⁵ m ≈ 0.053 mm</span><br />
                  第一层网格高度应为 <span className="text-accent-green font-bold">约 0.05 mm</span>。
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">网格独立性验证</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个散热器仿真生成了三套网格，结果如下：<br />
              网格 A（200 万）：CPU 温度 74.5°C<br />
              网格 B（400 万）：CPU 温度 71.2°C<br />
              网格 C（800 万）：CPU 温度 70.3°C<br />
              分析三套网格的结果差异，判断是否已满足网格独立性，说明结论。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  计算网格 B 与 C 的相对偏差：<br />
                  <span className="text-accent-cyan font-mono">|71.2 - 70.3| / 70.3 = 0.9 / 70.3 = 1.28%</span><br />
                  偏差约为 <span className="text-accent-amber">1.28%</span>，略高于 1% 的推荐标准。<br /><br />
                  网格 A 与 B 的偏差：<span className="text-accent-cyan font-mono">|74.5 - 71.2| / 71.2 = 4.64%</span>（过大）<br /><br />
                  结论：<br />
                  1. 网格 A（200 万）<span className="text-accent-red">不满足</span>独立性要求（偏差 &gt; 1%）<br />
                  2. 网格 B（400 万）与 C（800 万）偏差 1.28% 略超标，<br />
                  3. 建议再生成一套网格 D（600 万）辅助判断趋势<br />
                  4. 如果 400 万与 600 万的结果偏差 &lt; 1%，则 400 万网格可接受<br />
                  5. 继续加密到更高网格量（1200 万）确认收敛趋势
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
          进阶内容：动网格与自适应网格
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            对于更复杂的工程问题，静态网格可能不足以捕捉流场的动态变化。
            动网格和自适应网格技术提供了更灵活的解决方案。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">动网格（Dynamic Mesh）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                适用于边界运动或变形的问题，如：<br />
                • 风扇旋转（Moving Reference Frame / Sliding Mesh）<br />
                • 阀门开启/关闭过程<br />
                • 流固耦合中的结构变形<br />
                Fluent 提供三种动网格方法：弹簧平滑、动态层铺、局部重构。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">自适应网格（Adaptive Mesh）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                在求解过程中根据流场特征（如温度梯度、涡量）自动加密或粗化网格。<br />
                • 基于梯度的自适应：加密温度梯度大的区域<br />
                • 基于涡量的自适应：加密涡旋区域<br />
                • 基于 Y+ 的自适应：确保壁面网格满足要求<br />
                可显著减少总网格量，但需注意网格过渡的平滑性。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">前瞻技术</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              近年来，基于机器学习的网格优化方法（如 Pointwise 的 AI-Meshing、
              Neural Nets for Mesh Quality Prediction）开始出现在工业应用中。
              同时，无网格方法（Meshless/Meshfree Methods）也在特定领域崭露头角。
              但 FVM + 高质量网格在可预见的未来仍然是工业 CFD 的主流。
            </p>
          </div>
        </div>
      </section>

      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-cyan/5 to-accent-teal/5 border border-accent-cyan/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-cyan font-mono mb-1">资源推荐</div>
              <h3 className="text-xl font-bold text-white">Icepak 教程</h3>
              <p className="text-gray-400 text-sm mt-1">专为电子散热设计的 CFD 工具教程</p>
            </div>
            <Link
              href="/cfd"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan text-black font-semibold text-sm hover:bg-accent-cyan/90 transition-all"
            >
              返回 CFD 专区 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
