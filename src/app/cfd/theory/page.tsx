import { Cpu, BookOpen, ChevronRight, AlertCircle, Lightbulb, Grid3X3, Gauge, Layers } from "lucide-react";
import Link from "next/link";
import { ChapterNav } from "@/components/chapter-nav";

export default function CFDTheoryPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-accent-teal font-mono mb-2">
          <BookOpen className="w-4 h-4" />
          第四章 · CFD 仿真
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">CFD 理论基础</h1>
        <p className="text-gray-400 text-lg">
          计算流体力学（CFD）是现代热设计工程师的核心技能。本章讲解 CFD 的数学基础、离散化方法和求解算法。
        </p>
      </div>

      <ChapterNav sections={[
        { id: "intro", label: "引言" },
        { id: "governing", label: "控制方程" },
        { id: "discretization", label: "离散化方法" },
        { id: "fvm", label: "有限体积法" },
        { id: "mesh", label: "网格类型" },
        { id: "solver", label: "求解算法" },
        { id: "convergence", label: "收敛判据" },
        { id: "exercises", label: "练习题" },
        { id: "advanced", label: "进阶内容" },
        { id: "next", label: "下一章" },
      ]} />

      <section id="intro" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-teal/10 flex items-center justify-center text-accent-teal">
            <Cpu className="w-4 h-4" />
          </span>
          CFD 概述与工程意义
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 leading-relaxed mb-4">
            计算流体力学（Computational Fluid Dynamics, CFD）是使用数值方法和计算机求解流体流动和传热问题的学科。
            在热设计领域，CFD 已经成为不可或缺的工具——从手机芯片的散热仿真到数据中心的整体气流组织分析，
            CFD 能够显著减少物理样机测试次数，缩短产品开发周期，降低研发成本。
          </p>
          <p className="text-gray-400 leading-relaxed mb-4">
            与传统理论分析和实验研究相比，CFD 具有以下优势：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">成本低</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                无需搭建实验台架，只需计算机资源即可进行仿真实验，
                大量减少物理样机迭代。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">可视化</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                可直观显示流场中任意位置的速度矢量、温度云图、压力分布，
                帮助工程师深入理解流动和传热机理。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">参数化</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                可快速改变几何、边界条件等参数进行对比分析，
                实现设计优化（Design Optimization）。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 border border-tech-600/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">CFD 仿真在电子散热中的典型应用</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs text-gray-400">
              <div className="bg-tech-900/50 rounded p-2 text-center">芯片级散热</div>
              <div className="bg-tech-900/50 rounded p-2 text-center">PCB 级热分析</div>
              <div className="bg-tech-900/50 rounded p-2 text-center">系统级风道</div>
              <div className="bg-tech-900/50 rounded p-2 text-center">数据中心气流</div>
            </div>
          </div>
        </div>
      </section>

      <section id="governing" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <Layers className="w-4 h-4" />
          </span>
          控制方程
        </h2>
        <div className="space-y-6">
          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">CFD 的三个基本守恒方程</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              CFD 的核心是求解三大守恒定律的控制方程。这些方程从数学上完整描述了流体的流动和传热过程。
            </p>

            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-sm text-accent-cyan font-mono mb-1">连续性方程</div>
              <div className="text-lg font-bold text-accent-cyan font-mono">∂ρ/∂t + ∇·(ρV) = 0</div>
              <p className="text-gray-500 text-xs mt-1">质量守恒</p>
            </div>

            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-sm text-accent-amber font-mono mb-1">动量方程（N-S 方程）</div>
              <div className="text-base font-bold text-accent-amber font-mono">∂(ρV)/∂t + ∇·(ρVV) = -∇P + ∇·(τ) + ρg</div>
              <p className="text-gray-500 text-xs mt-1">牛顿第二定律</p>
            </div>

            <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
              <div className="text-sm text-accent-green font-mono mb-1">能量方程</div>
              <div className="text-base font-bold text-accent-green font-mono">∂(ρE)/∂t + ∇·(V(ρE+P)) = ∇·(k∇T) + Q̇</div>
              <p className="text-gray-500 text-xs mt-1">能量守恒（热力学第一定律）</p>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-cyan font-bold">V</div>
                <div className="text-gray-500">速度矢量</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-amber font-bold">P</div>
                <div className="text-gray-500">压力</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-3 text-center">
                <div className="text-accent-green font-bold">Q̇</div>
                <div className="text-gray-500">热源项</div>
              </div>
            </div>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-3">通用输运方程形式</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              三个守恒方程可以统一为通用输运方程（Transport Equation）的形式：
            </p>
            <div className="bg-tech-900/70 rounded-lg p-4 mb-3 text-center">
              <div className="text-lg font-bold text-accent-cyan font-mono">∂(ρφ)/∂t + ∇·(ρVφ) = ∇·(Γ∇φ) + S<sub>φ</sub></div>
              <p className="text-gray-500 text-xs mt-1">通用输运方程</p>
            </div>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-red font-bold">非稳态项</div>
                <div className="text-gray-500">瞬态变化</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-cyan font-bold">对流项</div>
                <div className="text-gray-500">流动输运</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-green font-bold">扩散项</div>
                <div className="text-gray-500">物理扩散</div>
              </div>
              <div className="bg-tech-900/50 rounded-lg p-2 text-center">
                <div className="text-accent-amber font-bold">源项</div>
                <div className="text-gray-500">产生/消耗</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discretization" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Grid3X3 className="w-4 h-4" />
          </span>
          离散化方法
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            控制方程是偏微分方程（PDE），无法直接获得解析解（除了极少数简单情况）。
            离散化将连续的 PDE 转化为代数方程组，通过计算机求解。
            主要的离散化方法有三种：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">有限差分法 FDM</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                直接在网格节点上用差分商代替微分。适用于结构化网格。
                是三种方法中数学上最简单的，但对复杂几何适应性差。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">有限体积法 FVM</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                将控制方程在控制体（Control Volume）上积分。
                天然满足守恒性，是 Fluent、STAR-CCM+ 等主流 CFD 软件采用的方法。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">有限元法 FEM</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                将求解域分割为有限个单元，利用变分原理或加权残值法求解。
                适用于固体力学和流固耦合问题。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/30 rounded-lg p-4">
            <h4 className="text-xs font-semibold text-accent-amber mb-1">为什么 FVM 是 CFD 主流？</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              有限体积法的核心优势在于其守恒特性：通过对控制体积分，离散方程直接保证了质量、动量、能量的整体守恒。
              这使得 FVM 在处理复杂流动和传热问题时具有出色的鲁棒性和精度。
            </p>
          </div>
        </div>
      </section>

      <section id="fvm" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center text-accent-green">
            <Layers className="w-4 h-4" />
          </span>
          有限体积法 FVM 详解
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            有限体积法的核心思想是将计算域划分为有限个互不重叠的控制体（Control Volume），
            对每个控制体积分通用输运方程，利用高斯散度定理将体积分转化为面积分：
          </p>
          <div className="bg-tech-900/70 rounded-lg p-4 mb-4 text-center">
            <div className="text-sm text-accent-cyan font-mono mb-1">对控制体积分</div>
            <div className="text-base font-bold text-accent-cyan font-mono">∫<sub>V</sub> ∂(ρφ)/∂t dV + ∫<sub>A</sub> n·(ρVφ)dA = ∫<sub>A</sub> n·(Γ∇φ)dA + ∫<sub>V</sub> S<sub>φ</sub> dV</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">FVM 的关键步骤</h4>
              <ol className="space-y-1 text-xs text-gray-400 list-decimal list-inside">
                <li>将计算域划分为控制体</li>
                <li>在控制体上积分守恒方程</li>
                <li>应用高斯散度定理</li>
                <li>使用插值格式（如中心差分、迎风格式）计算界面值</li>
                <li>组装代数方程组</li>
                <li>求解线性方程组</li>
              </ol>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-teal mb-2">插值格式对比</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-accent-cyan font-bold">一阶迎风</div>
                  <div className="text-gray-500">稳定、有数值耗散</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-accent-amber font-bold">二阶迎风</div>
                  <div className="text-gray-500">精度高、可能振荡</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-accent-green font-bold">QUICK</div>
                  <div className="text-gray-500">三阶精度、结构化网格</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-accent-red font-bold">中心差分</div>
                  <div className="text-gray-500">低 Re 适用</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 180" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="480" height="160" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                {[80, 200, 320].map((x) => (
                  [60, 130].map((y) => (
                    <rect key={`${x}-${y}`} x={x} y={y} width="100" height="50" rx="3" fill="rgba(0,212,255,0.05)" stroke="#00d4ff" strokeWidth="1" />
                  ))
                ))}
                {[80, 200, 320].map((x) => (
                  [60, 130].map((y) => (
                    <text key={`${x}-${y}`} x={x + 50} y={y + 28} textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">CV</text>
                  ))
                ))}
                <line x1="130" y1="85" x2="180" y2="85" stroke="#f59e0b" strokeWidth="1.5" />
                <polygon points="175,83 180,85 175,87" fill="#f59e0b" />
                <text x="155" y="80" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">face</text>
                <line x1="250" y1="85" x2="300" y2="85" stroke="#f59e0b" strokeWidth="1.5" />
                <polygon points="295,83 300,85 295,87" fill="#f59e0b" />
                {[80, 200, 320].map((x) => (
                  <circle key={x} cx={x + 50} cy="45" r="3" fill="#ef4444" />
                ))}
                <text x="200" y="42" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">节点（Node）</text>
                <text x="250" y="170" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-1 有限体积法网格与控制体示意</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="mesh" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-red/10 flex items-center justify-center text-accent-red">
            <Grid3X3 className="w-4 h-4" />
          </span>
          网格类型
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            网格是 CFD 计算的基础载具，网格质量直接决定了计算精度和收敛性。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">结构化网格</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                网格节点按(i,j,k)规则排列。所有内部节点有相同的拓扑结构。
                <span className="block mt-1 text-accent-green">优点：高质量、计算效率高</span>
                <span className="block text-accent-red">缺点：复杂几何难以生成</span>
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">非结构化网格</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                网格节点顺序不规则排列。常见类型有四面体、六面体、多面体。
                <span className="block mt-1 text-accent-green">优点：几何适应性强</span>
                <span className="block text-accent-red">缺点：计算精度和效率较低</span>
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20 mb-4">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">多面体网格（Polyhedral Mesh）</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              近年来 Fluent 力推的多面体网格兼具结构化和非结构化网格的优点。
              每个多面体单元（通常为 12-14 面）比同样数量的四面体单元具有更少的相邻单元数，
              收敛速度更快，且对复杂几何的适应性好。
            </p>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 480 120" className="w-full max-w-xl mx-auto" fill="none">
                <rect x="10" y="10" width="480" height="100" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <rect x="30" y="25" width="120" height="70" rx="4" fill="rgba(0,212,255,0.05)" stroke="#00d4ff" strokeWidth="1" />
                {[30, 50, 70, 90, 110, 130].map((x) => (
                  [25, 45, 65, 85].map((y) => (
                    <rect key={`${x}-${y}`} x={x} y={y} width="18" height="16" rx="1" fill="none" stroke="#00d4ff" strokeWidth="0.5" opacity="0.5" />
                  ))
                ))}
                <text x="90" y="110" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">结构化</text>

                <rect x="180" y="25" width="120" height="70" rx="4" fill="rgba(245,158,11,0.05)" stroke="#f59e0b" strokeWidth="1" />
                {[190, 210, 232, 255, 278].map((x) => (
                  [35, 55, 75].map((y) => (
                    x % 30 > 10 ?
                      <polygon key={`${x}-${y}`} points={`${x},${y} ${x+12},${y+8} ${x+8},${y+16} ${x-4},${y+16} ${x-8},${y+8}`} fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" /> :
                      <rect key={`${x}-${y}`} x={x} y={y} width="16" height="16" rx="1" fill="none" stroke="#f59e0b" strokeWidth="0.5" opacity="0.5" />
                  ))
                ))}
                <text x="240" y="110" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">非结构化</text>

                <rect x="330" y="25" width="130" height="70" rx="4" fill="rgba(16,185,129,0.05)" stroke="#10b981" strokeWidth="1" />
                {[340, 358, 378, 400, 422].map((x) => (
                  [35, 55, 75].map((y) => (
                    <polygon key={`${x}-${y}`} points={`${x+5},${y} ${x+12},${y+5} ${x+12},${y+12} ${x+5},${y+14} ${x-2},${y+12} ${x-2},${y+5}`} fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.5" />
                  ))
                ))}
                <text x="395" y="110" textAnchor="middle" fill="#10b981" fontSize="8" fontFamily="monospace">多面体</text>

                <text x="250" y="18" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-2 三种网格类型对比</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="solver" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-cyan/10 flex items-center justify-center text-accent-cyan">
            <Gauge className="w-4 h-4" />
          </span>
          求解算法
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            对于不可压缩流动，压力-速度耦合是求解的核心挑战。Fluent 提供了多种压力-速度耦合算法：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">SIMPLE</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Semi-Implicit Method for Pressure-Linked Equations。
                最经典的压力修正算法，先猜压力场，求解动量方程，再用连续性方程修正压力。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">SIMPLEC</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                SIMPLE-Consistent。对 SIMPLE 的改进，修正了压力修正方程中的略去项，
                收敛速度比 SIMPLE 更快，适用于大多数定常问题。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-green mb-2">PISO</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Pressure-Implicit with Splitting of Operators。
                增加了第二次压力修正和偏斜修正，适用于瞬态问题和网格质量较差的情况。
              </p>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-6 border border-tech-600/20">
            <div className="text-center">
              <svg viewBox="0 0 500 200" className="w-full max-w-lg mx-auto" fill="none">
                <rect x="10" y="10" width="480" height="180" rx="6" stroke="#555" strokeWidth="1" fill="rgba(255,255,255,0.02)" />
                <rect x="160" y="15" width="180" height="28" rx="4" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1" />
                <text x="250" y="33" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">开始：初始猜测 P*, V*</text>

                <line x1="250" y1="43" x2="250" y2="55" stroke="#555" strokeWidth="1" />
                <polygon points="247,52 253,52 250,57" fill="#555" />

                <rect x="135" y="58" width="230" height="28" rx="4" fill="rgba(245,158,11,0.1)" stroke="#f59e0b" strokeWidth="1" />
                <text x="250" y="76" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="monospace">步骤 1：求解动量方程 → V*</text>

                <line x1="250" y1="86" x2="250" y2="98" stroke="#555" strokeWidth="1" />
                <polygon points="247,95 253,95 250,100" fill="#555" />

                <rect x="110" y="100" width="280" height="28" rx="4" fill="rgba(16,185,129,0.1)" stroke="#10b981" strokeWidth="1" />
                <text x="250" y="118" textAnchor="middle" fill="#10b981" fontSize="9" fontFamily="monospace">步骤 2：求解压力修正方程 → P'</text>

                <line x1="250" y1="128" x2="250" y2="140" stroke="#555" strokeWidth="1" />
                <polygon points="247,137 253,137 250,142" fill="#555" />

                <rect x="135" y="142" width="230" height="28" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1" />
                <text x="250" y="160" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">步骤 3：修正压力与速度</text>

                <line x1="160" y1="170" x2="80" y2="40" stroke="#ef4444" strokeWidth="1" strokeDasharray="4 2" />
                <text x="75" y="30" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">否</text>
                <text x="100" y="110" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">收敛？</text>

                <line x1="340" y1="170" x2="420" y2="40" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2" />
                <text x="425" y="30" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">是</text>
                <text x="430" y="110" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">输出结果</text>

                <text x="250" y="188" textAnchor="middle" fill="#555" fontSize="9" fontFamily="monospace">图 4-3 SIMPLE 算法流程图</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="convergence" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center text-accent-amber">
            <AlertCircle className="w-4 h-4" />
          </span>
          收敛判据与松弛因子
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">收敛判据</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                CFD 求解器通过监控残差（Residual）判断是否收敛。残差是离散方程左右两端的差值。
                常见的收敛标准：
              </p>
              <ul className="space-y-1 text-xs text-gray-500 mt-2">
                <li>• 连续性残差 &lt; 10⁻³</li>
                <li>• 动量残差 &lt; 10⁻³</li>
                <li>• 能量残差 &lt; 10⁻⁶</li>
                <li>• 关键物理量（温度、压力）不再变化</li>
                <li>• 进出口质量流量平衡（偏差 &lt; 1%）</li>
              </ul>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">松弛因子</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                松弛因子（Under-Relaxation Factor）控制每次迭代中变量更新的幅度，
                用于提高求解的稳定性：
              </p>
              <div className="bg-tech-900/70 rounded-lg p-3 my-2 text-center">
                <div className="text-sm font-bold text-accent-cyan font-mono">φ<sup>new</sup> = φ<sup>old</sup> + α · Δφ</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-accent-cyan font-bold">α → 0</div>
                  <div className="text-gray-500">稳定但收敛慢</div>
                </div>
                <div className="bg-tech-900/50 rounded p-2">
                  <div className="text-accent-red font-bold">α → 1</div>
                  <div className="text-gray-500">快但易发散</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">工程案例：电子散热 CFD 仿真流程</h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              完整的电子散热 CFD 仿真流程遵循以下步骤：<br />
              <span className="text-accent-cyan font-mono">①</span> 几何建模（CAD/SpaceClaim）→
              <span className="text-accent-cyan font-mono">②</span> 网格划分（Mesh）→
              <span className="text-accent-cyan font-mono">③</span> 物理模型设置（湍流模型、能量方程）→
              <span className="text-accent-cyan font-mono">④</span> 边界条件（入口速度、出口压力、热源功率）→
              <span className="text-accent-cyan font-mono">⑤</span> 求解控制（松弛因子、初始化、收敛标准）→
              <span className="text-accent-cyan font-mono">⑥</span> 计算与监控 → 
              <span className="text-accent-cyan font-mono">⑦</span> 后处理分析。<br />
              一个典型的 CPU 散热器风冷仿真迭代次数约 500-2000 步（取决于网格量和模型复杂度），
              在 8 核工作站上通常需要 30 分钟到 2 小时。
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
              <h3 className="text-base font-semibold text-white">离散化方法选择</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一个电子散热仿真包含一个带有多个圆孔的 PCB 板和复杂形状的散热器，
              需要选择最适合的离散化方法和网格类型，并说明理由。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  建议采用 <span className="text-accent-cyan font-bold">有限体积法（FVM）</span> + <span className="text-accent-green font-bold">非结构化网格（多面体或四面体）</span>。<br />
                  理由：<br />
                  1. PCB 圆孔和散热器翅片几何复杂，结构化网格难以生成<br />
                  2. FVM 天然保证守恒性，适用于 Fluent 求解<br />
                  3. 多面体网格在复杂几何下比四面体网格收敛更快、精度更高<br />
                  4. Fluent 的 Mosaic 技术可以自动连接不同类型的网格
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">2</span>
              <h3 className="text-base font-semibold text-white">松弛因子选择</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              在进行一个高 Re 湍流散热仿真时，残差曲线在 200 步后开始振荡不再下降。
              分析可能的原因并提出改进措施。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  可能原因与解决措施：<br />
                  1. <span className="text-accent-cyan">松弛因子过大</span>：降低压力松弛因子（默认 0.3 可降至 0.2）和动量松弛因子（0.7 可降至 0.5）<br />
                  2. <span className="text-accent-cyan">网格质量差</span>：检查偏斜度（Skewness &gt; 0.85 的区域需要重新划分）<br />
                  3. <span className="text-accent-cyan">湍流模型不适合</span>：尝试切换到 SST k-ω<br />
                  4. <span className="text-accent-cyan">初始化不好</span>：使用 Hybrid Initialization 或 Patch 更合理的初始值
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">3</span>
              <h3 className="text-base font-semibold text-white">SIMPLE 算法步骤</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              简述 SIMPLE 算法在一个迭代步中的关键步骤，并说明为什么需要压力修正。
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  SIMPLE 算法步骤：<br />
                  1. 假设初始压力场 P*<br />
                  2. 求解动量方程得到速度场 V*<br />
                  3. 求解压力修正方程得到 P'（V*通常不满足连续性方程，需修正）<br />
                  4. 修正压力：<span className="text-accent-cyan font-mono">P = P* + α<sub>p</sub>·P'</span><br />
                  5. 修正速度：<span className="text-accent-cyan font-mono">V = V* - V'</span><br />
                  6. 检查收敛，否则回到步骤 2<br /><br />
                  压力修正之所以必要，是因为初始假设的压力场 P* 导致的速度场 V* 通常不满足连续性方程，
                  必须通过压力修正来使速度场满足质量守恒。
                </p>
              </div>
            </details>
          </div>

          <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center">4</span>
              <h3 className="text-base font-semibold text-white">数值耗散分析</h3>
            </div>
            <p className="text-gray-400 text-sm mb-3">
              一阶迎风格式（First Order Upwind）为什么会产生数值耗散（Numerical Diffusion）？
              在什么情况下数值耗散对散热仿真结果影响最大？
            </p>
            <details className="group">
              <summary className="text-sm text-accent-cyan cursor-pointer hover:text-accent-cyan/80">
                <span className="group-open:hidden">查看解析</span>
                <span className="hidden group-open:inline">隐藏解析</span>
              </summary>
              <div className="mt-4 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <span className="text-accent-amber font-semibold">解：</span><br />
                  一阶迎风格式假设界面上的物理量等于上游节点的值，忽略了下游的影响。
                  这种近似相当于引入了额外的"数值粘度"，导致物理量被过度"抹平"。
                  这称为数值耗散（或假扩散）。<br /><br />
                  数值耗散影响最大的情况：<br />
                  1. 流动方向与网格线不平行（斜流）时最严重<br />
                  2. 网格较为稀疏时更明显<br />
                  3. 对对流主导（高 Péclet 数）的问题影响大<br />
                  4. 在温度边界层和速度边界层的预测中会严重失真<br /><br />
                  改进方法：使用二阶迎风格式或 QUICK 格式，并加密网格。
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
          进阶内容：LES 和 DNS 高级方法
        </h2>
        <div className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            对于需要精确捕捉湍流瞬时细节的问题（如气动噪声、涡激振动），RANS 方法可能不够。
            大涡模拟（LES）和直接数值模拟（DNS）提供了更高精度的方法。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-cyan mb-2">RANS</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                雷诺平均 NS 方程。计算量小（小时级别），精度中等。
                适用于工程散热设计迭代。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-amber mb-2">LES</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                大涡模拟。计算量较大（天级别），精度高。
                适用于热疲劳分析和噪声预测。
              </p>
            </div>
            <div className="bg-tech-900/50 rounded-lg p-4 border border-tech-600/20">
              <h4 className="text-sm font-semibold text-accent-red mb-2">DNS</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                直接数值模拟。计算量极大（月级别），精度最高。
                仅用于学术研究和简单几何。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="next" className="mb-8 scroll-mt-20">
        <div className="bg-gradient-to-r from-accent-teal/5 to-accent-green/5 border border-accent-teal/20 rounded-xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm text-accent-teal font-mono mb-1">下一章</div>
              <h3 className="text-xl font-bold text-white">Fluent 仿真实操</h3>
              <p className="text-gray-400 text-sm mt-1">完整的 CPU 散热器风冷仿真教程</p>
            </div>
            <Link
              href="/cfd/fluent-tutorial"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-teal text-black font-semibold text-sm hover:bg-accent-teal/90 transition-all"
            >
              开始学习 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
