import { Cpu, BookOpen, ChevronRight, AlertCircle, Lightbulb, Play, Settings, BarChart3, FileCheck } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function FluentTutorialPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-teal font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第四章 · 第二节
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Fluent 仿真实操</h1>
        <p className="text-gray-400 text-lg">
          从零开始完成一个完整的 CPU 散热器风冷仿真，涵盖几何建模、网格划分、求解设置到后处理的全部流程。
        </p>
      </div>

      <ChapterNav sections={[
        { id: "intro", label: "引言" },
        { id: "geometry", label: "几何建模" },
        { id: "mesh", label: "网格划分" },
        { id: "solver", label: "求解器设置" },
        { id: "models", label: "物理模型" },
        { id: "materials", label: "材料属性" },
        { id: "bc", label: "边界条件" },
        { id: "solve", label: "求解控制" },
        { id: "post", label: "后处理" },
        { id: "cpu-case", label: "完整案例" },
        { id: "trouble", label: "调试技巧" },
        { id: "exercises", label: "练习题" },
        { id: "next", label: "下一章" },
      ]} />

      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Cpu className="w-4 h-4" />
          </span>
          章节简介
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 leading-relaxed mb-4">
            ANSYS Fluent 是目前工业界应用最广泛的 CFD 软件之一，在电子散热领域有着不可替代的地位。
            本章将通过一个完整的 CPU 散热器风冷仿真案例，逐步骤进行详细讲解，帮助读者掌握 Fluent 的实操技能。
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            无论你是零基础的初学者还是有一定经验的工程师，本章的内容都将为你提供一份系统、完整的 Fluent 操作指南。
            从几何建模到后处理分析，每一步都有详细的说明和工程经验总结。
          </p>
          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-accent-cyan mb-2">本章案例概览</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400">
              <div className="bg-tech-900/50 rounded p-2 text-center">CPU 功耗：150 W</div>
              <div className="bg-tech-900/50 rounded p-2 text-center">散热器：铝挤型</div>
              <div className="bg-tech-900/50 rounded p-2 text-center">风扇：80×80×25 mm</div>
              <div className="bg-tech-900/50 rounded p-2 text-center">目标：T<sub>j</sub> &lt; 85°C</div>
            </div>
          </div>
        </div>
      </section>

      <section id="geometry" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Settings className="w-4 h-4" />
          </span>
          几何建模：DM/SpaceClaim
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Fluent 的几何建模通常在 DesignModeler（DM）或 SpaceClaim 中完成。
            对于散热仿真，几何处理的关键是流道提取（Fluid Volume Extraction）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">建模要点</h4>
              <ul className="space-y-1.5 text-xs text-gray-400">
                <li>• 简化不必要的几何细节（如倒角、圆角）</li>
                <li>• 使用 Fill 功能提取流体域</li>
                <li>• 为进出口创建命名选择（Named Selection）</li>
                <li>• 确保几何封闭无间隙</li>
                <li>• 对散热器翅片采用阵列复制</li>
              </ul>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">CPU 散热器几何参数</h4>
              <div className="text-xs text-gray-400">
                <div>基板尺寸：70 × 70 × 8 mm</div>
                <div>翅片数量：40 片</div>
                <div>翅片厚度：0.5 mm</div>
                <div>翅片间距：1.5 mm</div>
                <div>翅片高度：25 mm</div>
                <div>风扇区域：80 × 80 × 25 mm 流体域</div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 480 180" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="460" height="160" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <rect x="190" y="100" width="100" height="20" rx="2" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
                <text x="240" y="114" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">基板（Base）</text>
                {[0,1,2,3,4,5,6,7,8,9].map((i) => (
                  <rect key={i} x={155 + i * 18} y="60" width="12" height="40" rx="1" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="0.8" />
                ))}
                <text x="240" y="52" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">翅片（Fin）</text>
                <rect x="260" y="30" width="100" height="25" rx="3" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" />
                <text x="310" y="46" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">风扇区域</text>
                <line x1="260" y1="42" x2="270" y2="55" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2 1" />
                <rect x="200" y="120" width="80" height="15" rx="2" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1" />
                <text x="240" y="131" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">CPU 热源</text>
                <text x="250" y="165" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-4 CPU 散热器几何示意图（截面）</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="mesh" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Settings className="w-4 h-4" />
          </span>
          网格划分（Mesh）
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            网格质量直接决定了 CFD 计算的精度和收敛性。对于散热器仿真，推荐使用 Fluent Meshing 进行网格划分。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">网格设置参数</h4>
              <div className="space-y-1.5 text-xs text-gray-400">
                <div>基础尺寸：2 mm</div>
                <div>最小尺寸：0.2 mm（翅片间隙）</div>
                <div>边界层：5 层，增长率 1.2</div>
                <div>表面网格：三角形（Tria）</div>
                <div>体网格：多面体（Polyhedral）</div>
                <div>总网格量：约 300-500 万</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">网格质量控制</h4>
              <div className="space-y-1.5 text-xs text-gray-400">
                <div>偏斜度（Skewness）：&lt; 0.85</div>
                <div>正交性（Orthogonal Quality）：&gt; 0.15</div>
                <div>纵横比（Aspect Ratio）：&lt; 50</div>
                <div>Y+ 值：≈ 1（使用 SST k-ω 时）</div>
              </div>
              <div className="bg-tech-900/70 rounded-lg p-2 mt-2 text-center">
                <div className="text-xs text-accent-cyan font-mono">Y⁺ = u<sub>τ</sub>y / ν</div>
                <p className="text-gray-500 text-[10px]">无量纲壁面距离</p>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">工程经验</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              翅片间隙的网格需要特别注意：在 1.5mm 的间隙中至少要保证 5-8 个网格层。
              边界层网格的第一层高度根据目标 Y+ 值估算：对于空气强制对流，
              Y+ ≈ 1 对应第一层高度约为 0.05-0.1 mm。
            </p>
          </div>
        </div>
      </section>

      <section id="solver" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Play className="w-4 h-4" />
          </span>
          求解器设置
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            打开 Fluent 后，首先需要选择求解器的类型。Fluent 提供两种求解器：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">压力基求解器</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                适用于不可压缩和微可压缩流动（M &lt; 0.3）。
                是电子散热仿真的默认选择。按顺序求解动量方程和压力修正方程。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">密度基求解器</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                适用于高速可压缩流动（M &gt; 0.3），如喷管流动、激波等。
                同时求解动量方程和连续性方程。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">推荐设置（CPU 散热器风冷仿真）</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
              <div>求解器：压力基（Pressure-Based）</div>
              <div>速度格式：绝对（Absolute）</div>
              <div>时间：稳态（Steady）</div>
              <div>压力-速度耦合：SIMPLE</div>
              <div>梯度格式：Least Squares Cell Based</div>
              <div>压力格式：Standard</div>
              <div>动量格式：二阶迎风</div>
              <div>能量格式：二阶迎风</div>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <BarChart3 className="w-4 h-4" />
          </span>
          物理模型选择
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Fluent 中需要根据物理问题选择相应的模型。对于 CPU 散热器风冷仿真，需要激活以下模型：
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded bg-accent-cyan/10 text-accent-cyan text-[10px] font-bold flex items-center justify-center">1</span>
                <h4 className="text-sm font-semibold text-white">能量方程（Energy Equation）</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                必须开启。能量方程求解温度场，是散热仿真的核心。
                在 Models → Energy → Edit 中勾选 Energy Equation。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded bg-accent-amber/10 text-accent-amber text-[10px] font-bold flex items-center justify-center">2</span>
                <h4 className="text-sm font-semibold text-white">湍流模型（Viscous Model）</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                散热器中 Re 通常在 2000-10000 之间，为湍流或过渡流。
                推荐使用 SST k-ω（Shear Stress Transport）模型，
                它在近壁面区域使用 k-ω，在主流区域切换为 k-ε，两全其美。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-5 h-5 rounded bg-accent-green/10 text-accent-green text-[10px] font-bold flex items-center justify-center">3</span>
                <h4 className="text-sm font-semibold text-white">辐射模型（可选）</h4>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                当温差大或需要考虑辐射换热时激活。对于 CPU 散热器，在较低温度下辐射影响较小。
                如果环境温度高或散热器表面发射率高（如阳极氧化铝），可考虑开启 S2S 或 DO 模型。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="materials" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Settings className="w-4 h-4" />
          </span>
          材料属性设置
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            正确设置材料属性是仿真精度的保证。在 CPU 散热器仿真中至少需要定义三种材料：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">铝（Aluminum）</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>密度：2719 kg/m³</div>
                <div>比热容：871 J/(kg·K)</div>
                <div>导热系数：202.4 W/(m·K)</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">空气（Air）</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>密度：1.225 kg/m³（默认）</div>
                <div>比热容：1006.4 J/(kg·K)</div>
                <div>导热系数：0.0242 W/(m·K)</div>
                <div>粘度：1.789×10⁻⁵ Pa·s</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">CPU 芯片</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>密度：2329 kg/m³（硅）</div>
                <div>比热容：700 J/(kg·K)</div>
                <div>导热系数：148 W/(m·K)</div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">属性设置建议</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              对于自然对流仿真，空气密度应设置为不可压缩理想气体（Incompressible Ideal Gas）
              以考虑密度随温度的变化。对于强制风冷，空气可设置为常数密度。
              铜散热器的导热系数为 387.6 W/(m·K)，比铝高约 90%，但成本也显著增加。
            </p>
          </div>
        </div>
      </section>

      <section id="bc" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <BarChart3 className="w-4 h-4" />
          </span>
          边界条件设置
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            边界条件是 CFD 仿真中最重要的环节之一，它决定了仿真与实际物理过程的一致性。
          </p>
          <div className="space-y-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">入口边界：Velocity-Inlet</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                指定入口速度和温度。对于 80mm 风扇，典型风速为 2-5 m/s。
                <span className="block mt-1">湍流参数：使用湍流强度和水力直径</span>
                <span className="text-accent-cyan font-mono block mt-1">I = 0.16 · Re<sub>D</sub>⁻¹/⁸</span>
                <span className="text-gray-500 text-[10px] block">以 Re=5000 为例，湍流强度 I ≈ 5%</span>
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">出口边界：Pressure-Outlet</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                指定出口表压力，通常设为 0 Pa（相对大气压）。
                如果出口有管道阻力，可设负压。回流温度需根据情况设定。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">热源边界</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                CPU 发热面设置 Heat Flux 或 Volumetric Heat Source。<br />
                150W CPU，芯片面积 20×20 mm²：<br />
                <span className="text-accent-cyan font-mono">q" = 150 / (0.02 × 0.02) = 375,000 W/m²</span>
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-red mb-2">壁面边界：Wall</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                散热器外表面：Coupled（流固耦合传热）<br />
                风道壁面：No-Slip + 绝热（或指定换热系数）<br />
                PCB 板面：指定固定温度或对流边界
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">CPU 散热器案例边界条件汇总</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-gray-400">
                <thead>
                  <tr className="border-b border-tech-600/30">
                    <th className="text-left py-1 px-2 text-accent-cyan">边界</th>
                    <th className="text-left py-1 px-2 text-accent-cyan">类型</th>
                    <th className="text-left py-1 px-2 text-accent-cyan">参数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-tech-600/20">
                    <td className="py-1 px-2">风扇入口</td>
                    <td className="py-1 px-2">Velocity-Inlet</td>
                    <td className="py-1 px-2 font-mono">V = 3 m/s, T = 25°C</td>
                  </tr>
                  <tr className="border-b border-tech-600/20">
                    <td className="py-1 px-2">风道出口</td>
                    <td className="py-1 px-2">Pressure-Outlet</td>
                    <td className="py-1 px-2 font-mono">P = 0 Pa (gauge)</td>
                  </tr>
                  <tr className="border-b border-tech-600/20">
                    <td className="py-1 px-2">CPU 发热面</td>
                    <td className="py-1 px-2">Heat Flux</td>
                    <td className="py-1 px-2 font-mono">q" = 375,000 W/m²</td>
                  </tr>
                  <tr className="border-b border-tech-600/20">
                    <td className="py-1 px-2">散热器表面</td>
                    <td className="py-1 px-2">Coupled Wall</td>
                    <td className="py-1 px-2 font-mono">流固耦合传热</td>
                  </tr>
                  <tr>
                    <td className="py-1 px-2">外壁面</td>
                    <td className="py-1 px-2">Wall</td>
                    <td className="py-1 px-2 font-mono">绝热，No-Slip</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="solve" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Play className="w-4 h-4" />
          </span>
          求解控制与收敛监控
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">松弛因子设置</h4>
              <div className="space-y-1.5 text-xs text-gray-400">
                <div>压力：0.3（默认）</div>
                <div>密度：1.0</div>
                <div>动量：0.7</div>
                <div>湍动能：0.8</div>
                <div>湍流耗散率：0.8</div>
                <div>能量：0.9（若收敛困难则降至 0.7）</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">初始化方法</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-2">
                Fluent 提供两种初始化方式：
              </p>
              <div className="space-y-1.5 text-xs">
                <div className="bg-tech-900/50 rounded p-2">
                  <span className="text-accent-cyan font-bold">Standard Initialization</span>
                  <span className="text-gray-500">——指定全局初始值</span>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <span className="text-accent-green font-bold">Hybrid Initialization</span>
                  <span className="text-gray-500">——Fluent 自动生成初始场</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">收敛监控设置</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              建议监控以下变量：<br />
              1. 残差（Residuals）：连续性 ≤ 10⁻³，动量 ≤ 10⁻³，能量 ≤ 10⁻⁶<br />
              2. CPU 温度（Surface Monitor）：在 CPU 表面设置一个 Monitor，监控温度随时间步的变化<br />
              3. 进出口流量差：检查质量守恒（Report → Fluxes → Mass Flow Rate）<br />
              4. 设置自动保存（Auto-Save），每 100 步保存一次 case 和 data 文件
            </p>
          </div>
        </div>
      </section>

      <section id="post" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <FileCheck className="w-4 h-4" />
          </span>
          后处理
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            后处理是提取仿真结果、分析物理现象的关键步骤。Fluent 自带的 CFD-Post 和 Fluent 内嵌后处理功能都可以使用。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">温度云图（Temperature Contour）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                在散热器中心和翅片区域创建切片（Slice），显示温度分布云图。
                关注 CPU 最高温度（T<sub>j,max</sub>）和散热器温度均匀性。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">速度矢量（Velocity Vector）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                显示气流方向和速度大小。检查气流是否均匀通过所有翅片间隙，
                是否存在回流区或死区。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">流线图（Streamline）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                从入口发出多条流线，可视化气流路径。
                评估风道设计的合理性，优化气流组织。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-red mb-2">定量数据提取</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                提取 CPU 表面最高温度、平均温度、进出口压差、总散热量等关键指标。
                生成温度沿翅片高度的分布曲线。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 180" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="480" height="160" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <text x="250" y="30" textAnchor="middle" fill="#00d4ff" fontSize="10" fontFamily="monospace">温度云图示意（CPU 散热器截面）</text>
                <defs>
                  <linearGradient id="tempGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="30%" stopColor="#10b981" />
                    <stop offset="60%" stopColor="#f59e0b" />
                    <stop offset="85%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </linearGradient>
                </defs>
                <rect x="60" y="40" width="380" height="100" rx="4" fill="url(#tempGrad)" opacity="0.4" stroke="#555" strokeWidth="0.5" />
                <rect x="60" y="120" width="380" height="20" rx="2" fill="rgba(239,68,68,0.5)" stroke="#ef4444" strokeWidth="1" />
                <text x="250" y="133" textAnchor="middle" fill="#fff" fontSize="9" fontFamily="monospace">CPU 热源 150W</text>
                {[80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
                  <rect key={x} x={x} y="55" width="12" height="60" rx="1" fill="rgba(0,212,255,0.1)" stroke="#555" strokeWidth="0.5" />
                ))}
                <rect x="60" y="38" width="380" height="15" rx="2" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="0.5" strokeDasharray="2 1" />
                <text x="250" y="49" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">入口空气 25°C</text>
                <text x="250" y="168" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-5 CPU 散热器温度云图（示意图）</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="cpu-case" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <AlertCircle className="w-4 h-4" />
          </span>
          完整案例：CPU 散热器风冷仿真
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            以下是一个完整的 CPU 散热器风冷仿真算例，汇总了所有设置参数和预期结果。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">算例参数</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>CPU 尺寸：20 × 20 × 2 mm</div>
                <div>CPU 功耗：150 W</div>
                <div>散热器：铝挤型（6061-T6）</div>
                <div>散热器尺寸：70 × 70 × 33 mm</div>
                <div>翅片数量：40 片</div>
                <div>翅片厚度：0.5 mm</div>
                <div>翅片间距：1.5 mm</div>
                <div>基板厚度：8 mm</div>
              </div>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">边界与求解</h4>
              <div className="space-y-1 text-xs text-gray-400">
                <div>入口风速：3 m/s</div>
                <div>入口温度：25°C</div>
                <div>湍流强度：5%</div>
                <div>水力直径：0.08 m</div>
                <div>出口压力：0 Pa (gauge)</div>
                <div>热源：375,000 W/m²</div>
                <div>求解器：压力基 SIMPLE</div>
                <div>湍流模型：SST k-ω</div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">预期结果</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div className="bg-tech-900/50 rounded p-3 text-center">
                <div className="text-accent-cyan font-bold font-mono">~68°C</div>
                <div className="text-gray-500">CPU 最高温度</div>
              </div>
              <div className="bg-tech-900/50 rounded p-3 text-center">
                <div className="text-accent-amber font-bold font-mono">~12 Pa</div>
                <div className="text-gray-500">风道总压降</div>
              </div>
              <div className="bg-tech-900/50 rounded p-3 text-center">
                <div className="text-accent-green font-bold font-mono">~0.42 K/W</div>
                <div className="text-gray-500">总热阻</div>
              </div>
              <div className="bg-tech-900/50 rounded p-3 text-center">
                <div className="text-accent-red font-bold font-mono">~43°C</div>
                <div className="text-gray-500">温升 (ΔT)</div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">结果分析要点</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              CPU 最高温度 68°C 满足 &lt;85°C 的设计目标（留有 17°C 安全余量）。
              如果仿真结果显示 CPU 温度超过 85°C，可考虑以下改进方案：
              增大风速、增加翅片数量、使用铜基板、采用热管散热器或切换为液冷方案。
            </p>
          </div>
        </div>
      </section>

      <section id="trouble" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <AlertCircle className="w-4 h-4" />
          </span>
          常见问题与调试技巧
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="space-y-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-red mb-2">残差发散（Divergence）</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                残差曲线突然增大，计算发散。<br />
                <span className="text-accent-cyan">解决方法：</span> 减小松弛因子（压力降至 0.2，动量降至 0.5）、
                检查网格质量（是否有负体积）、检查边界条件是否合理、改用一阶格式先计算再切换二阶格式。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">温度不收敛</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                能量残差下降缓慢或不下降。<br />
                <span className="text-accent-cyan">解决方法：</span> 检查能量方程是否开启、
                确保流固耦合 Wall 设置为 Coupled、检查热源设置是否正确、
                降低能量松弛因子至 0.7、增加迭代次数至 2000 步。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">网格问题</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                计算提示负体积或高度扭曲单元。<br />
                <span className="text-accent-cyan">解决方法：</span> 在 Mesh 中检查 Skewness 和 Orthogonal Quality、
                对翅片间隙进行局部加密、使用 Mosaic 技术改善网格过渡、
                检查几何中是否有细小间隙或重叠面。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">Y+ 值不满足要求</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                使用 SST k-ω 时，Y+ 应 ≈ 1；使用标准壁面函数时，Y+ 应在 30-300 之间。<br />
                <span className="text-accent-cyan">解决方法：</span> 在 Mesh 中调整边界层第一层高度。
                估算公式：<span className="text-accent-cyan font-mono">Δy = Y⁺ · μ / (ρ · u<sub>τ</sub>)</span>，
                其中 <span className="text-accent-cyan font-mono">u<sub>τ</sub> = √(τ<sub>w</sub>/ρ)</span>。
              </p>
            </div>
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
              <h3 className="text-base font-semibold text-white">边界条件设置</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个 CPU 功耗 200W，芯片面积 25×25 mm，入口风速 2.5 m/s，入口温度 30°C。
              计算 Heat Flux 值，并说明应该使用哪种入口边界条件和出口边界条件。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  Heat Flux：<span className="text-accent-cyan font-mono">q" = 200 / (0.025 × 0.025) = 320,000 W/m²</span><br /><br />
                  入口边界：选择 <span className="text-accent-cyan font-bold">Velocity-Inlet</span>，
                  设置 V = 2.5 m/s，T = 30°C，湍流强度约 5%，水力直径根据入口尺寸计算。<br />
                  出口边界：选择 <span className="text-accent-cyan font-bold">Pressure-Outlet</span>，
                  设置表压力 0 Pa。<br />
                  如果出口有风机抽风，可根据风机性能曲线设置出口负压。
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">收敛问题诊断</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个散热仿真在计算 300 步后，能量残差稳定在 10⁻⁴ 不再下降，
              但 CPU 表面监测温度仍在缓慢上升。分析可能的原因并提出解决措施。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  能量残差 10⁻⁴ 未达到收敛标准（需 &lt; 10⁻⁶）。
                  且温度仍在变化，说明未达到稳态。<br /><br />
                  可能原因：<br />
                  1. 能量松弛因子过大（尝试降至 0.7）<br />
                  2. 流固耦合 Wall 未正确设置 Coupled<br />
                  3. 初始温度场不合理（使用更高的初始温度）<br />
                  4. 网格不满足边界层要求（Y+ 太大）<br />
                  5. 需要更多迭代步数（增加至 1000-2000）<br /><br />
                  措施：降低能量松弛因子至 0.7，检查流固耦合面设置，
                  使用 Hybrid Initialization 重新初始化，继续计算。
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">散热器优化分析</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个散热器仿真结果显示 CPU 最高温度 92°C（目标 &lt; 85°C）。
              提出至少 3 种改进方案，并用仿真验证的思路说明如何评估这些方案。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  改进方案：<br />
                  1. <span className="text-accent-cyan">增大风速</span>：将入口风速从 3 m/s 提升至 5 m/s，重新仿真观察温度变化。
                     注意压降也会随之增大，需确认风扇工作点。<br />
                  2. <span className="text-accent-cyan">增加翅片数量/高度</span>：增大散热面积。修改几何后重新划分网格和计算。<br />
                  3. <span className="text-accent-cyan">更换材料</span>：铝-铜复合散热器或全铜散热器（k 从 202 提升至 387 W/(m·K)）。<br />
                  4. <span className="text-accent-cyan">增加热管</span>：在基板中嵌入热管，提高热量扩散能力。<br /><br />
                  验证方法：每次只改变一个参数，保持其他条件不变，进行对比仿真。
                  记录 CPU 最高温度、总热阻、压降等指标，选择最优方案。
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-amber/5 to-accent-orange/5 border border-accent-amber/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-amber font-mono mb-1">进阶内容</div>
              <h3 className="text-xl font-bold text-white">网格划分技术</h3>
              <p className="text-gray-400 text-sm mt-1">深入学习网格质量评价、边界层网格和网格独立性验证</p>
            </div>
            <Link
              href="/cfd/meshing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-amber text-black font-semibold text-sm hover:bg-accent-amber/90 transition-all"
            >
              开始学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
