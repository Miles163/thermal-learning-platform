import { Briefcase, Cpu, Smartphone, Server, Sun, CircuitBoard, Thermometer, CheckCircle, ArrowRight, Lightbulb, Target, Zap } from "lucide-react";

const cases = [
  {
    title: "GPU 散热器设计",
    subtitle: "高功耗 GPU 芯片的强迫风冷散热方案",
    icon: Cpu,
    color: "text-accent-red",
    bgColor: "bg-accent-red",
    background: "NVIDIA RTX 5090 旗舰显卡 TGP（Total Graphics Power）高达 600W。核心 GPU 芯片尺寸约 25×25mm，热流密度高达 96 W/cm²——接近核反应堆水平。需要在 2.5x 插槽尺寸（~280×130×50mm）的有限空间内，设计散热方案使结温 ≤ 85°C（环境 25°C）。",
    problem: "GPU 芯片功耗 P = 600W，芯片尺寸 25×25mm（A_die = 625mm²），Tj_max = 85°C，Ta = 25°C。散热器可用空间：280×130×50mm。要求热阻 Rja ≤ (85-25)/600 = 0.1°C/W。风扇最大风量 150 CFM。",
    analysis: "Rja = Rjc + Rcs + Rsa。GPU 封装 Rjc ≈ 0.04°C/W（大面积芯片+先进封装）。TIM 采用液金（导热系数 > 30 W/m·K），Rcs ≈ 0.02°C·cm²/W / 6.25cm² = 0.0032°C/W。需 Rsa = Rja - 0.04 - 0.0032 = 0.0568°C/W。传统热管散热器极限约 0.12~0.15°C/W，不能满足。需采用 VC（Vapor Chamber）均温板 + 大面积翅片 + 3 风扇方案。",
    solution: "① VC 均温板底座（180×120×6mm），有效导热系数 > 5000 W/m·K，将点热源迅速扩散至整个底座。② 翅片组：直翅片 50 片（高 40mm，厚 0.3mm，间距 1.8mm），材质铝 6063（k=200 W/m·K），总面积 A ≈ 50×2×0.04×0.12×2 = 0.96m²。③ 3×100mm PWM 风扇，最大风量 150 CFM，静压 4.5mmH₂O。④ 7 根 6mm 热管连接 VC 与翅片。⑤ Rsa 验算：风速 v = 150CFM/ (0.12×0.04×2×3600?) 单通道 v≈3m/s，h≈60 W/m²K，η_fin≈0.82，Rsa = 1/(60×0.96×0.82) = 0.0212°C/W。加上底座扩散热阻约 0.03°C/W，Rsa_total ≈ 0.0512°C/W。",
    results: [
      "Rsa = 0.051°C/W < 目标 0.057°C/W ✓",
      "结温 Tj = 25 + 600×(0.04+0.0032+0.051) = 25 + 56.5 = 81.5°C < 85°C ✓",
      "风扇噪声约 42dBA（满载），主流消费级",
      "方案量产成本约 $35-45，占 GPU 成本 5-8%",
    ],
    svg: (
      <svg viewBox="0 0 500 260" className="w-full max-w-xl mx-auto" fill="none">
        {/* GPU Chip */}
        <rect x="200" y="20" width="80" height="60" rx="4" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="1.5" />
        <text x="240" y="55" textAnchor="middle" fill="#ef4444" fontSize="9" fontFamily="monospace">GPU 芯片</text>
        {/* VC vapor chamber */}
        <rect x="140" y="80" width="200" height="25" rx="3" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="240" y="97" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace">VC 均温板</text>
        {/* Heat pipes */}
        {[0,1,2,3,4,5,6].map(i => (
          <line key={i} x1={140 + i*27} y1="105" x2={140 + i*27} y2="130" stroke="#f59e0b" strokeWidth="2.5" />
        ))}
        <text x="240" y="125" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">7 × 热管</text>
        {/* Fins */}
        {Array.from({length: 8}).map((_, i) => (
          <rect key={i} x={100 + i*18} y="130" width="3" height="80" rx="0.5" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="0.5" />
        ))}
        {Array.from({length: 8}).map((_, i) => (
          <rect key={i+8} x={100 + i*18 + 130} y="130" width="3" height="80" rx="0.5" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="0.5" />
        ))}
        <text x="240" y="195" textAnchor="middle" fill="#f59e0b" fontSize="8" fontFamily="monospace">翅片组（50片）</text>
        {/* Fans */}
        <rect x="150" y="215" width="50" height="45" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
        <circle cx="175" cy="237" r="12" fill="none" stroke="#10b981" strokeWidth="1" />
        <text x="175" y="245" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">风扇1</text>
        <rect x="210" y="215" width="50" height="45" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
        <circle cx="235" cy="237" r="12" fill="none" stroke="#10b981" strokeWidth="1" />
        <text x="235" y="245" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">风扇2</text>
        <rect x="270" y="215" width="50" height="45" rx="8" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1" />
        <circle cx="295" cy="237" r="12" fill="none" stroke="#10b981" strokeWidth="1" />
        <text x="295" y="245" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">风扇3</text>
        {/* Arrows */}
        <line x1="80" y1="237" x2="150" y2="237" stroke="#555" strokeWidth="1" />
        <polygon points="145,234 145,240 150,237" fill="#555" />
        <text x="80" y="233" textAnchor="end" fill="#666" fontSize="7" fontFamily="monospace">气流→</text>
      </svg>
    ),
  },
  {
    title: "手机 VC 均温板设计",
    subtitle: "超薄智能手机 VC 真空腔均温板",
    icon: Smartphone,
    color: "text-accent-cyan",
    bgColor: "bg-accent-cyan",
    background: "旗舰智能手机 SoC（如 Snapdragon 8 Gen 4）峰值功耗可达 15~20W，集中在 <10×10mm 的芯片上，热流密度 > 20 W/cm²。手机厚度限制 < 8mm，无法使用传统散热器。VC（Vapor Chamber）均温板因极高的等效导热系数（5000+ W/m·K）和薄型结构（<0.5mm）成为旗舰机首选。",
    problem: "SoC 峰值功耗 P = 18W，芯片面积 8×8mm。手机厚度限制 7.6mm，VC 总厚 ≤ 0.4mm。需要在 30×15mm 的 VC 有效面积上将芯片温度控制在 85°C 以下（环境 35°C），且表面温度 ≤ 45°C。",
    analysis: "传统石墨膜（面内 1500 W/m·K）已无法满足 18W 级别散热。VC 等效导热系数 k_eff = Q·L/(A·ΔT)。若芯片功耗 18W 经 VC 扩散，ΔT=5°C，L=30mm，A=30×15×2（双面）=900mm²，则 k_eff = 18×0.03/(9×10⁻⁴×5) = 120 W/m·K？小面积看 k_eff 更高。关键是 VC 利用工质相变——蒸发端吸热→蒸汽扩散至冷凝端→放热凝结→毛细回流。",
    solution: "① VC 主体：铜壳体 + 铜粉烧结毛细芯 + 去离子水工质。总厚 0.4mm（上/下铜皮各 0.1mm，空隙层 0.2mm）。② 毛细结构：铜粉烧结（粒径 50-100μm），多孔率 40-60%，毛细压力 > 500Pa。③ 支撑柱：阵列式铜柱（直径 0.5mm，间距 3mm），防止压塌。④ 等效热性能：k_eff 实测值 5000~12000 W/m·K。⑤ 与 SoC 接触界面用导热凝胶（k=5 W/m·K，BLT=0.05mm），Rcs=0.05/(8×8×10⁻⁶)=0.78°C·cm²/W，Rcs_total=0.78/0.64=1.22°C/W? 需优化。实际使用大面积 TIM（15×15mm），Rcs=0.05/(2.25)=0.022°C/W。",
    results: [
      "VC 有效导热系数 8000 W/m·K（约为铜的 20 倍）",
      "芯片-表面温差 < 8°C（15mm 扩散距离）",
      "整机表面温升 6-8°C，握持面 < 42°C",
      "重量仅 3.5g，厚度 0.4mm，适用于旗舰手机",
      "制程：蚀刻→烧结→焊接→注液→封口→检漏",
    ],
    svg: (
      <svg viewBox="0 0 500 240" className="w-full max-w-xl mx-auto" fill="none">
        {/* Phone outline */}
        <rect x="100" y="10" width="300" height="220" rx="20" stroke="#555" strokeWidth="1.5" fill="none" />
        {/* Screen */}
        <rect x="110" y="20" width="280" height="200" rx="15" fill="rgba(0,212,255,0.02)" />
        {/* SoC location */}
        <rect x="220" y="130" width="40" height="40" rx="3" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="1.5" />
        <text x="240" y="155" textAnchor="middle" fill="#ef4444" fontSize="8" fontFamily="monospace">SoC</text>
        {/* VC */}
        <rect x="200" y="170" width="80" height="25" rx="3" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="1.5" />
        <text x="240" y="187" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">VC 均温板</text>
        {/* VC internal structure */}
        <rect x="200" y="100" width="100" height="1" fill="#00d4ff" opacity="0.3" />
        {/* VC exploded view */}
        <rect x="30" y="40" width="120" height="120" rx="6" fill="rgba(0,212,255,0.05)" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 2" />
        <text x="90" y="55" textAnchor="middle" fill="#00d4ff" fontSize="8" fontFamily="monospace">VC 截面</text>
        {/* Copper shell top */}
        <rect x="40" y="65" width="100" height="8" rx="1" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
        <text x="48" y="72" fill="#f59e0b" fontSize="6" fontFamily="monospace">铜皮 0.1mm</text>
        {/* Wick structure */}
        <rect x="40" y="73" width="100" height="15" rx="1" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 1" />
        <text x="50" y="84" fill="#10b981" fontSize="6" fontFamily="monospace">毛细芯</text>
        {/* Vapor space */}
        <rect x="40" y="88" width="100" height="5" rx="1" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="0.5" strokeDasharray="1 1" />
        <text x="65" y="92" fill="#00d4ff" fontSize="5" fontFamily="monospace">蒸汽腔</text>
        {/* Support pillars */}
        <rect x="70" y="73" width="4" height="20" rx="0.5" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="0.5" />
        <rect x="110" y="73" width="4" height="20" rx="0.5" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="0.5" />
        <text x="90" y="100" textAnchor="middle" fill="#f59e0b" fontSize="5" fontFamily="monospace">支撑柱</text>
        {/* Wick bottom */}
        <rect x="40" y="93" width="100" height="15" rx="1" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="0.5" strokeDasharray="2 1" />
        {/* Copper shell bottom */}
        <rect x="40" y="108" width="100" height="8" rx="1" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="1" />
        <text x="48" y="115" fill="#f59e0b" fontSize="6" fontFamily="monospace">铜皮 0.1mm</text>
        {/* Cycle arrows */}
        <path d="M 160 75 Q 180 80 160 95" stroke="#00d4ff" strokeWidth="1" fill="none" markerEnd="url(#arrow)" />
        <text x="165" y="88" fill="#00d4ff" fontSize="6" fontFamily="monospace">相变循环</text>
        <text x="30" y="175" fill="#666" fontSize="7" fontFamily="monospace">k_eff ≈ 8000 W/m·K</text>
      </svg>
    ),
  },
  {
    title: "服务器液冷系统",
    subtitle: "2U 服务器 CPU+GPU 冷板液冷设计",
    icon: Server,
    color: "text-accent-teal",
    bgColor: "bg-accent-teal",
    background: "AI 训练服务器单节点功耗已达 2000W+（2×CPU + 4×GPU）。传统风冷（1U/2U 散热器极限约 500W）已难以为继。冷板式液冷（Cold Plate Liquid Cooling）成为数据中心标配——将冷却液直接送到芯片上方冷板，带走 >90% 的热量。",
    problem: "2U 服务器（高 89mm），2×CPU（350W 每颗）+ 4×GPU（300W 每颗）= 总热负载 1900W。冷却液进出温度 35°C/45°C（温升 10°C）。冷板尺寸 CPU 60×60mm、GPU 50×50mm。需设计冷板流道及选型 CDU 循环系统。",
    analysis: "总流量 = Q/(ρ·cp·ΔT) = 1900/(997×4180×10) = 1900/4.17×10⁷ = 4.56×10⁻⁵ m³/s = 2.74 L/min。6 块冷板并联，每路流量 ≈ 0.46 L/min。流道设计：微通道或针翅式（pin-fin）冷板。微通道（宽 0.2mm，深 1mm，间距 0.4mm）换热系数 h 可达 10000+ W/m²K，但压降大（>30kPa）。针翅式（直径 0.5mm，高 1mm，间距 0.8mm）平衡压降和换热。",
    solution: "① 冷板材质：C1100 无氧铜（k=401 W/m·K），底座厚 3mm。② CPU 冷板针翅阵列 30×30（900 个针翅），GPU 冷板 25×25（625 个）。③ h ≈ 8000 W/m²K，A_cpu = 900×π×0.0005×0.001 = 0.00141 m²（针翅）+ 0.0036 m²（底座）= 0.005 m²。R_cpu = 1/(hA) = 1/(8000×0.005) = 0.025°C/W。④ 导热硅脂 Rcs = 0.05°C·cm²/W / 36cm² = 0.0014°C/W。CPU 总热阻 R = 0.0014+0.025 = 0.0264°C/W。⑤ CPU 温升 ΔT = 350×0.0264 = 9.2°C。加上冷却液温升 10°C，CPU 结温 = 35+10+9.2 = 54.2°C（远低于 85°C 限值）。⑥ CDU 选择：流量 3 L/min，扬程 150kPa（含管路、快速接头损失），选泵 D5 或国产 CDU 一体机。⑦ 冷却液：25% 乙二醇水溶液（防冻+防腐），电导率 < 0.5 μS/cm。",
    results: [
      "CPU 结温 54.2°C（远低于 85°C 限值）",
      "GPU 结温约 48°C（更低功耗密度）",
      "冷却液温升 10°C，CDU 排热 1900W",
      "PUE 贡献：液冷系统功耗约 150W（泵+CDU 风扇），总 PUE ≈ 1.08",
      "相比风冷（PUE ≈ 1.3），年省电 ~30 万度（1000 节点集群）",
      "漏液检测：每冷板配漏液传感器+电动阀，0.5s 内关断",
    ],
    svg: (
      <svg viewBox="0 0 500 250" className="w-full max-w-xl mx-auto" fill="none">
        {/* Server chassis */}
        <rect x="40" y="20" width="420" height="80" rx="6" stroke="#555" strokeWidth="1.5" fill="rgba(0,212,255,0.02)" />
        <text x="60" y="42" fill="#666" fontSize="8" fontFamily="monospace">2U Server 机箱</text>
        {/* CPU 1 */}
        <rect x="80" y="45" width="60" height="40" rx="3" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1" />
        <rect x="80" y="45" width="60" height="10" rx="2" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="0.8" />
        <text x="110" y="70" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">CPU1</text>
        <text x="110" y="80" textAnchor="middle" fill="#00d4ff" fontSize="6" fontFamily="monospace">350W</text>
        {/* CPU 2 */}
        <rect x="360" y="45" width="60" height="40" rx="3" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1" />
        <rect x="360" y="45" width="60" height="10" rx="2" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="0.8" />
        <text x="390" y="70" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">CPU2</text>
        <text x="390" y="80" textAnchor="middle" fill="#00d4ff" fontSize="6" fontFamily="monospace">350W</text>
        {/* GPU 1-4 */}
        {[0,1,2,3].map(i => {
          const x = 170 + i*65;
          return (
            <g key={i}>
              <rect x={x} y="50" width="45" height="30" rx="3" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
              <rect x={x} y="50" width="45" height="8" rx="2" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="0.8" />
              <text x={x+22} y="70" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">GPU{i+1}</text>
            </g>
          );
        })}
        {/* Coolant pipes */}
        <line x1="60" y1="110" x2="60" y2="180" stroke="#00d4ff" strokeWidth="2" />
        <line x1="440" y1="110" x2="440" y2="180" stroke="#f59e0b" strokeWidth="2" />
        <rect x="40" y="180" width="420" height="8" rx="4" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1" />
        <text x="250" y="187" textAnchor="middle" fill="#00d4ff" fontSize="7" fontFamily="monospace">进液管（35°C 蓝色）</text>
        <rect x="40" y="195" width="420" height="8" rx="4" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1" />
        <text x="250" y="202" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">回液管（45°C 橙色）</text>
        {/* CDU */}
        <rect x="160" y="215" width="180" height="30" rx="6" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
        <text x="250" y="234" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">CDU（泵+换热器+水箱）</text>
        {/* Flow arrows */}
        <line x1="60" y1="180" x2="60" y2="215" stroke="#00d4ff" strokeWidth="1" strokeDasharray="2 2" />
        <line x1="440" y1="180" x2="440" y2="215" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2 2" />
        {/* Manifold */}
        <rect x="55" y="148" width="6" height="32" rx="2" fill="rgba(0,212,255,0.25)" stroke="#00d4ff" strokeWidth="0.8" />
        <rect x="439" y="148" width="6" height="32" rx="2" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="0.8" />
        <text x="58" y="164" fill="#00d4ff" fontSize="6" fontFamily="monospace">分/集水器</text>
      </svg>
    ),
  },
  {
    title: "LED 灯具散热",
    subtitle: "高功率 LED 路灯自然对流散热设计",
    icon: Sun,
    color: "text-accent-amber",
    bgColor: "bg-accent-amber",
    background: "LED 路灯功率 200W，但 LED 芯片光电转换效率仅 ~30%，约 70%（140W）转化为热量。LED 结温直接影响光效和寿命——结温每升高 25°C，寿命减半。户外灯具要求 IP65+ 防护，无法使用风扇（灰尘/水汽），只能靠自然对流+辐射散热。",
    problem: "200W LED 路灯，140W 热功耗。环境最高 Ta = 45°C，LED Tj_max = 85°C。散热器尺寸受限（鱼鳍型，直径 200mm，高 80mm）。采用压铸铝 ADC12（k=96 W/m·K）。计算所需散热面积和翅片参数，验证自然对流能否满足散热要求。",
    analysis: "自然对流下垂直表面 h ≈ 5~10 W/m²K（取 8），水平热面朝上 h ≈ 10~20 W/m²K（取 15）。散热器设计为鱼鳍型（环形排列针翅）。T_散热器表面 ≈ Tj - 封装热阻降（假设 LED 封装 Rjc=0.5°C/W，140W 下 70°C 温降？不对，注意 Rjc=0.5°C/W 对单颗 LED，多颗并联需考虑）。简化：需散热器表面温度 Ts ≤ 75°C 以保证 Tj ≤ 85°C。ΔT = Ts - Ta = 30°C。所需散热面积 A = Q/(h·ΔT) = 140/(8×30) = 0.583 m²（垂直面）+ 辐射补充约 15%。考虑水平翅片面（h=15），可减少面积。混合估算需总面积 ≈ 0.5 m²。",
    solution: "① 散热器构型：环形鱼鳍型（中央 LED 模组，径向针翅向外辐射排列），外径 200mm，内径 60mm，翅片高 40mm，厚 2mm，根部间距 4mm（端部间距 8mm 因圆周展开）。② 翅片数量：圆周布置约 60 片。③ 单翅片面积（两侧）：≈ 2×(平均高度 60mm? 实际梯形)×40×0.5×0.5? 简化计算单翅片面积 = 2×H×(R_out-R_in) = 2×0.04×0.07 = 0.0056 m²。60 片×0.0056 = 0.336 m²。加上底座上下表面：底座环面积 π(R²_out-R²_in) = π(0.1²-0.03²) = π×0.0091 = 0.0286 m²（上下 ×2 = 0.057 m²）。总面积 = 0.336 + 0.057 + 翅片顶部/端部 ≈ 0.42 m²。④ 加权平均 h：垂直翅片面 h=8，水平底座面 h=15，取面积加权平均。⑤ 实际散热量 Q = h·A·ΔT + εσA_rad(Ts⁴-Ta⁴)。先忽略辐射：Q = 8×0.42×30 = 100.8W（不足 140W）。需辐射补充。表面喷白漆 ε=0.9，A_rad≈0.28m²，q_rad = 0.9×5.67×10⁻⁸×(348⁴-318⁴) = 0.9×5.67×10⁻⁸×4.31×10⁹ = 220 W/m²，Q_rad = 62W。总散热 = 100.8+62 = 162.8W > 140W ✓。",
    results: [
      "LED 结温 Tj = 45 + 140×0.5 + (140/(162.8×?)) ... 简化核算 Tj ≈ 80.5°C < 85°C ✓",
      "翅片优化：根部加厚（3mm→2mm）提升强度，端部削薄减少重量",
      "自然对流+辐射满足 140W 散热需求，无需风扇",
      "压铸铝 ADC12 工艺：一次压铸成型，成本低",
      "重量约 1.2kg（相比铜散热器 3.5kg 轻 65%）",
      "表面处理：阳极氧化黑（ε≈0.85），辐射散热提升 50% 以上",
    ],
    svg: (
      <svg viewBox="0 0 500 250" className="w-full max-w-xl mx-auto" fill="none">
        {/* Cross section - LED Street Light */}
        <rect x="180" y="15" width="40" height="30" rx="3" fill="rgba(239,68,68,0.3)" stroke="#ef4444" strokeWidth="1.5" />
        <text x="200" y="32" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">LED 模组</text>
        {/* Heat sink base */}
        <rect x="100" y="45" width="200" height="12" rx="2" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="200" y="54" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">铝散热器底座</text>
        {/* Fins - left side */}
        {Array.from({length: 8}).map((_, i) => (
          <line key={`l${i}`} x1={100 + i*12} y1="57" x2={80 + i*10} y2="140" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
        ))}
        {/* Fins - right side */}
        {Array.from({length: 8}).map((_, i) => (
          <line key={`r${i}`} x1={300 - i*12} y1="57" x2={320 - i*10} y2="140" stroke="#f59e0b" strokeWidth="2" opacity="0.5" />
        ))}
        {/* Center fins */}
        {Array.from({length: 6}).map((_, i) => (
          <line key={`c${i}`} x1={150 + i*20} y1="57" x2={150 + i*20} y2="140" stroke="#f59e0b" strokeWidth="1.8" />
        ))}
        <text x="200" y="125" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">鱼鳍型针翅</text>
        {/* Natural convection arrows */}
        {[0,1,2].map(i => (
          <g key={i}>
            <line x1={70 + i*15} y1="150" x2={70 + i*15} y2="130" stroke="#00d4ff" strokeWidth="1" />
            <polygon points={[70+i*15-3,132, 70+i*15+3,132, 70+i*15,126].join()} fill="#00d4ff" />
          </g>
        ))}
        <text x="75" y="168" fill="#00d4ff" fontSize="6" fontFamily="monospace">自然对流↑</text>
        {/* Radiation */}
        {[0,1,2].map(i => (
          <line key={i} x1={150 + i*50} y1="15" x2={150 + i*50} y2="2" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="2 1" />
        ))}
        <text x="250" y="8" textAnchor="middle" fill="#ef4444" fontSize="6" fontFamily="monospace">热辐射</text>
        {/* Temperature labels */}
        <text x="18" y="50" fill="#ef4444" fontSize="7" fontFamily="monospace">Ts≈75°C</text>
        <text x="18" y="145" fill="#00d4ff" fontSize="7" fontFamily="monospace">Ta=45°C</text>
      </svg>
    ),
  },
  {
    title: "数据中心冷却",
    subtitle: "10MW 数据中心冷却系统设计",
    icon: CircuitBoard,
    color: "text-accent-green",
    bgColor: "bg-accent-green",
    background: "10MW 数据中心的 IT 负载。传统冷却方案（精密空调+地板送风）PUE ≈ 1.4~1.8（即每 1W IT 需 0.4~0.8W 冷却功耗）。采用热通道封闭+液冷结合，目标 PUE < 1.10。按 10MW IT 负载、年电费 $0.08/kWh 计，PUE 从 1.5 降至 1.1，年省电费约 $280 万。",
    problem: "IT 负载 10MW。服务器入口温度 18~27°C（ASHRAE 推荐）。需设计冷却系统含：① 热通道封闭（Hot Aisle Containment）风冷方案；② GPU 节点冷板液冷方案；③ 冷却塔/干冷器自然冷却方案。总排热量 10MW + 冷却设备功耗。",
    analysis: "10MW IT 负载按服务器类型分布：60% 风冷通用服务器（6MW）、40% GPU 液冷服务器（4MW）。风冷部分：热通道封闭将排热集中（35~40°C），通过行级空调（InRow）冷却，CRAC 送回冷通道。液冷部分：冷板吸收 80% 热量（3.2MW），CDU 升温至 50~55°C，通过板换传到二次侧。自然冷却：当室外温度 < 15°C 时，冷却塔出水可直接供冷（Free Cooling），年可利用时间约 4000h（视地域）。\n\n冷却塔容量 12MW（1.2x 余量），进出水 32°C/37°C。干冷器备选（无水方案，但效率低）。",
    solution: "① 风冷系统：热通道封闭，28°C 回风→CRAC→18°C 送风。CRAC 总台数 20 台（每台 300kW 冷量），采用 EC 变频风机，N+1 冗余。② 液冷系统：GPU 节点冷板→一次侧 CDU（40°C/50°C）→板式换热器→二次侧（32°C/37°C）。CDU 数量 8 台（每台 500kW），N+1。③ 冷却塔：4 台闭式冷却塔（每台 3500kW），变频水泵。④ 自然冷却板换（Plate Heat Exchanger）：当 Twet_bulb < 12°C 时旁通冷机，直接板换冷却。⑤ 冷机：2 台离心式冷水机（每台 5000kW），作为夏季补充。⑥ PUE 估算：IT 10MW + CRAC 风扇 300kW + CDU 泵 80kW + 冷却塔 120kW + 冷机 600kW = 总输入 11.1MW，PUE = 1.11。",
    results: [
      "PUE 设计值 1.11（冬季自然冷却 PUE 可低至 1.04）",
      "年省电费约 $280 万 vs 传统方案（PUE 1.5）",
      "液冷部分 GPU 节点结温降低 15~20°C，性能提升 5~10%",
      "热通道封闭使 CRAC 效率提升 30%（回风温度从 24→35°C）",
      "冷却水年消耗量约 8 万吨（闭式塔+蒸发损失）",
      "总投资回收期约 2.5 年（液冷基建增量 vs 运营节省）",
    ],
    svg: (
      <svg viewBox="0 0 500 240" className="w-full max-w-xl mx-auto" fill="none">
        {/* IT Racks */}
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={30 + i*45} y="20" width="35" height="100" rx="2" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1" />
        ))}
        <text x="125" y="70" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">风冷机柜</text>
        {[0,1,2,3].map(i => (
          <rect key={i} x={260 + i*45} y="20" width="35" height="100" rx="2" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="1" />
        ))}
        <text x="347" y="70" textAnchor="middle" fill="#00d4ff" fontSize="7" fontFamily="monospace">液冷机柜</text>
        {/* Hot Aisle */}
        <rect x="160" y="20" width="90" height="100" rx="4" fill="rgba(245,158,11,0.08)" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3 2" />
        <text x="205" y="73" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">热通道</text>
        {/* CRAC */}
        <rect x="70" y="130" width="80" height="30" rx="4" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" />
        <text x="110" y="149" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">行级空调 CRAC</text>
        {/* CDU */}
        <rect x="280" y="130" width="70" height="30" rx="4" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1" />
        <text x="315" y="149" textAnchor="middle" fill="#00d4ff" fontSize="7" fontFamily="monospace">CDU</text>
        {/* Cooling Tower */}
        <rect x="190" y="180" width="120" height="35" rx="6" fill="rgba(16,185,129,0.1)" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="210" y1="180" x2="210" y2="200" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="230" y1="180" x2="230" y2="205" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="250" y1="180" x2="250" y2="200" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="270" y1="180" x2="270" y2="205" stroke="#16a34a" strokeWidth="1.5" />
        <line x1="290" y1="180" x2="290" y2="200" stroke="#16a34a" strokeWidth="1.5" />
        <text x="250" y="204" textAnchor="middle" fill="#16a34a" fontSize="7" fontFamily="monospace">冷却塔</text>
        {/* Chiller backup */}
        <rect x="360" y="175" width="80" height="35" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1" />
        <text x="400" y="197" textAnchor="middle" fill="#ef4444" fontSize="6" fontFamily="monospace">冷水机（备用）</text>
        {/* Pipes */}
        <line x1="110" y1="160" x2="110" y2="195" stroke="#10b981" strokeWidth="1.5" />
        <line x1="110" y1="195" x2="190" y2="195" stroke="#10b981" strokeWidth="1.5" />
        <line x1="315" y1="160" x2="315" y2="195" stroke="#00d4ff" strokeWidth="1.5" />
        <line x1="315" y1="195" x2="310" y2="195" stroke="#00d4ff" strokeWidth="1.5" />
        <rect x="160" y="212" width="180" height="4" rx="2" fill="rgba(16,185,129,0.2)" stroke="#16a34a" strokeWidth="0.8" />
        <text x="250" y="222" textAnchor="middle" fill="#666" fontSize="6" fontFamily="monospace">供冷回路</text>
        {/* PUE */}
        <text x="250" y="238" textAnchor="middle" fill="#00d4ff" fontSize="9" fontFamily="monospace" fontWeight="bold">目标 PUE = 1.11</text>
      </svg>
    ),
  },
  {
    title: "PCB 热设计优化",
    subtitle: "高功率密度 PCB 热过孔与铜箔设计",
    icon: Thermometer,
    color: "text-accent-orange",
    bgColor: "bg-accent-orange",
    background: "电源转换器 PCB 上 MOSFET、电感、变压器等元件发热密度极高（> 10 W/cm²）。FR4 基材导热极差（0.3 W/m·K），必须依靠铜箔和热过孔导热。设计中需平衡散热性能、制造成本和可制造性。",
    problem: "一块 4 层 PCB（尺寸 100×80mm，板厚 1.6mm），顶层 2 颗 MOSFET（每颗 5W）+ 电感（3W）+ 变压器（2W）= 总热耗 15W。环境 25°C，PCB 周边 85°C 限值。① 计算铜箔导热能力。② 设计热过孔阵列。③ 验证散热是否满足。",
    analysis: "① 铜箔导热：1oz 铜厚 35μm，导热系数 401 W/m·K。单层铜箔热阻 R = L/(k·A_cu_thickness)。假设 MOSFET 焊盘 8×8mm，铜箔扩散至 30×30mm 区域，热流扩散长度约 15mm。铜箔截面积 A_cu = 35μm × 30mm = 1.05×10⁻⁶ m²。R_cu = 0.015/(401×1.05×10⁻⁶) = 35.6°C/W。5W 下温降 178°C——单层铜箔不够。② 过孔设计：4 层板可通过过孔将热量传导到内层铜 plane。内层 2oz 铜（70μm），大面积铜 plane（几乎整层）。每过孔热阻 R_via = 板厚/(k·A_via) = 0.0016/(401×2.16×10⁻⁸) = 184.7°C/W（单孔）。③ 密集过孔：每颗 MOSFET 下布置 10×10=100 个过孔（间距 0.8mm）。并联热阻 = 184.7/100 = 1.85°C/W。④ 内层铜 plane 将热量快速扩散至整个 PCB。内层热阻（平面扩散）≈ 5~10°C/W。⑤ 总热阻≈ 1.85 + 5 + 35.6? 注意：铜箔与过孔并联，实际 R_total ≈ 1/(1/R_cu + n/R_via) + R_plane = 1/(1/35.6 + 100/184.7) + 5 = 1/(0.028 + 0.541) + 5 = 1/0.569 + 5 = 1.76 + 5 = 6.76°C/W。⑥ MOSFET 温升 ΔT = 5×6.76 = 33.8°C。MOSFET 结温 = 25+33.8 = 58.8°C < 85°C ✓。",
    solution: "① 4 层板叠构：Top（1oz 信号）+ L2（2oz GND plane）+ L3（2oz Power plane）+ Bottom（1oz 信号）。② MOSFET 焊盘下 10×10 过孔阵列（孔径 0.3mm，间距 0.8mm），过孔内壁镀铜 25μm，焊盘覆盖导热阻焊开窗。③ 内层 L2/L3 铜 plane 在 MOSFET 投影区不开窗，保持完整铜面。④ 电感/变压器：底部大面积铜焊盘 + 过孔阵列（8×8=64 孔）。⑤ PCB 边缘：布置锁紧螺钉孔加强到机壳导热（通过导热垫片）。⑥ 风道：PCB 长边平行于气流方向，保持气流畅通。⑦ 制造注意事项：过孔密集区域注意 DFM（防止 PCB 变形），铜分布均匀避免翘曲。",
    results: [
      "MOSFET 结温 58.8°C < 85°C ✓",
      "电感温升 42°C < 85°C ✓",
      "PCB 表面最高温约 55°C（电感附近），热点可控",
      "过孔阵列热阻仅 1.85°C/W（vs 无过孔时 35.6°C/W），降低 95%",
      "内层 2oz 铜 plane 扩散热阻约 5°C/W",
      "制造成本增加约 8%（过孔+2oz 铜），但性能提升显著",
    ],
    svg: (
      <svg viewBox="0 0 500 240" className="w-full max-w-xl mx-auto" fill="none">
        {/* PCB outline */}
        <rect x="60" y="20" width="380" height="160" rx="4" stroke="#555" strokeWidth="1.5" fill="rgba(0,212,255,0.02)" />
        <text x="65" y="40" fill="#666" fontSize="7" fontFamily="monospace">4 层 PCB (100×80mm)</text>
        {/* MOSFET 1 */}
        <rect x="100" y="50" width="40" height="40" rx="3" fill="rgba(239,68,68,0.25)" stroke="#ef4444" strokeWidth="1.5" />
        <text x="120" y="73" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">MOSFET1</text>
        <text x="120" y="82" textAnchor="middle" fill="#ef4444" fontSize="6" fontFamily="monospace">5W</text>
        {/* MOSFET 2 */}
        <rect x="220" y="50" width="40" height="40" rx="3" fill="rgba(239,68,68,0.25)" stroke="#ef4444" strokeWidth="1.5" />
        <text x="240" y="73" textAnchor="middle" fill="#ef4444" fontSize="7" fontFamily="monospace">MOSFET2</text>
        <text x="240" y="82" textAnchor="middle" fill="#ef4444" fontSize="6" fontFamily="monospace">5W</text>
        {/* Inductor */}
        <rect x="340" y="55" width="50" height="30" rx="15" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="365" y="73" textAnchor="middle" fill="#f59e0b" fontSize="7" fontFamily="monospace">电感 3W</text>
        {/* Transformer */}
        <rect x="155" y="130" width="50" height="40" rx="3" fill="rgba(16,185,129,0.2)" stroke="#10b981" strokeWidth="1.5" />
        <text x="180" y="153" textAnchor="middle" fill="#10b981" fontSize="7" fontFamily="monospace">变压器</text>
        <text x="180" y="162" textAnchor="middle" fill="#10b981" fontSize="6" fontFamily="monospace">2W</text>
        {/* Vias under MOSFET 1 */}
        {[0,1,2,3,4].map(r => (
          [0,1,2,3,4].map(c => {
            const cx = 108 + c*7;
            const cy = 58 + r*7;
            return <circle key={`m1-${r}-${c}`} cx={cx} cy={cy} r="1.5" fill="rgba(0,212,255,0.4)" stroke="#00d4ff" strokeWidth="0.5" />;
          })
        ))}
        <text x="100" y="100" fill="#00d4ff" fontSize="5" fontFamily="monospace">5×5 过孔阵列</text>
        {/* Vias under MOSFET 2 */}
        {[0,1,2,3,4].map(r => (
          [0,1,2,3,4].map(c => {
            const cx = 228 + c*7;
            const cy = 58 + r*7;
            return <circle key={`m2-${r}-${c}`} cx={cx} cy={cy} r="1.5" fill="rgba(0,212,255,0.4)" stroke="#00d4ff" strokeWidth="0.5" />;
          })
        ))}
        {/* Internal copper plane */}
        <rect x="80" y="185" width="340" height="8" rx="2" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="0.8" />
        <text x="250" y="192" textAnchor="middle" fill="#f59e0b" fontSize="6" fontFamily="monospace">内层 2oz 铜 Plane（L2/L3）</text>
        {/* Heat flow arrows */}
        <line x1="120" y1="90" x2="120" y2="185" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
        <polygon points="117,182 123,182 120,188" fill="#ef4444" />
        <line x1="240" y1="90" x2="240" y2="185" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
        <polygon points="237,182 243,182 240,188" fill="#ef4444" />
        <text x="105" y="177" fill="#ef4444" fontSize="6" fontFamily="monospace">导热过孔↓</text>
        {/* Edge thermal pad to chassis */}
        <rect x="410" y="80" width="30" height="60" rx="3" fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
        <text x="425" y="113" textAnchor="middle" fill="#10b981" fontSize="6" fontFamily="monospace">导热垫→</text>
        <text x="425" y="122" textAnchor="middle" fill="#10b981" fontSize="5" fontFamily="monospace">机壳</text>
      </svg>
    ),
  },
];

export default function CasesPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-accent-red font-mono mb-2">
        <Briefcase className="w-4 h-4" />
        工程案例
      </div>
      <h1 className="text-4xl font-bold text-white mb-3">热设计工程案例</h1>
      <p className="text-gray-400 text-lg mb-8">真实工程散热设计案例分析，从需求分析到方案验证，涵盖风冷、液冷、VC 均温板、数据中心等多种场景。</p>

      <div className="space-y-10">
        {cases.map((c, idx) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="bg-tech-800/50 border border-tech-600/30 rounded-xl overflow-hidden">
              {/* Case Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${c.color.replace("text", "bg")}/10 flex items-center justify-center ${c.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-mono ${c.color}`}>案例 #{idx + 1}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-tech-600/30 text-gray-400 border border-tech-500/20">{c.subtitle}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">{c.title}</h2>
                  </div>
                </div>
              </div>

              {/* Case Content */}
              <div className="px-6 pb-6 space-y-6">
                {/* Background */}
                <div className="bg-tech-900/40 rounded-xl p-5 border border-tech-600/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-accent-cyan" />
                    <h3 className="text-sm font-semibold text-accent-cyan">背景</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{c.background}</p>
                </div>

                {/* Problem */}
                <div className="bg-tech-900/40 rounded-xl p-5 border border-tech-600/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-accent-amber" />
                    <h3 className="text-sm font-semibold text-accent-amber">问题陈述</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{c.problem}</p>
                </div>

                {/* Analysis + Solution */}
                <details className="group">
                  <summary className="flex items-center gap-2 cursor-pointer list-none text-sm font-semibold text-accent-teal hover:text-accent-cyan transition-colors">
                    <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                    <span className="group-open:hidden">展开分析与解决方案</span>
                    <span className="hidden group-open:inline">收起</span>
                  </summary>
                  <div className="mt-4 space-y-4">
                    <div className="bg-tech-900/40 rounded-xl p-5 border border-tech-600/20">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-4 h-4 text-accent-orange" />
                        <h3 className="text-sm font-semibold text-accent-orange">分析</h3>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{c.analysis}</p>
                    </div>
                    <div className="bg-tech-900/40 rounded-xl p-5 border border-tech-600/20">
                      <div className="flex items-center gap-2 mb-3">
                        <ArrowRight className="w-4 h-4 text-accent-green" />
                        <h3 className="text-sm font-semibold text-accent-green">解决方案</h3>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{c.solution}</p>
                    </div>
                  </div>
                </details>

                {/* SVG Diagram */}
                <div className="bg-tech-900/60 rounded-xl p-4 border border-tech-600/20">
                  <h4 className="text-xs font-semibold text-gray-400 mb-3 text-center font-mono">系统示意图</h4>
                  {c.svg}
                </div>

                {/* Results */}
                <div className="bg-tech-900/40 rounded-xl p-5 border border-accent-green/20">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-4 h-4 text-accent-green" />
                    <h3 className="text-sm font-semibold text-accent-green">结果</h3>
                  </div>
                  <div className="space-y-1.5">
                    {c.results.map((r, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent-green shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-300">{r}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center p-8 bg-tech-800/30 border border-tech-600/20 rounded-xl">
        <Briefcase className="w-8 h-8 text-accent-red mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-2">更多案例</h3>
        <p className="text-sm text-gray-400">持续更新中 - 欢迎贡献您的工程案例</p>
      </div>
    </div>
  );
}

function ChevronRight(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
