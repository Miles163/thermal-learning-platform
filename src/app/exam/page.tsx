import { GraduationCap, Calculator, Wind, Cpu, Thermometer, Sun, Droplets, Gauge, Box, Zap, CheckCircle, ChevronRight, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";

const problems = [
  {
    title: "芯片结温计算",
    icon: Thermometer,
    color: "text-accent-red",
    problem: "某 CPU 芯片功耗 P = 180W，环境温度 Ta = 25°C。封装热阻 Rjc = 0.15°C/W，TIM 热阻 Rcs = 0.05°C·cm²/W（芯片面积 A_die = 400mm²），散热器热阻 Rsa 与风速 v 的关系为 Rsa = 0.45/v^0.6 (°C/W)，其中 v 单位为 m/s。风扇提供风速 v = 3m/s。计算：① 芯片结温 Tj。② 若 Tj_max = 105°C，还需要多少降额空间？",
    steps: [
      "计算 TIM 热阻：Rcs_tot = Rcs / A_die = 0.05°C·cm²/W / 4cm² = 0.0125°C/W",
      "计算散热器热阻：Rsa = 0.45 / 3^0.6 = 0.45 / 1.933 = 0.233°C/W",
      "总热阻：Rja = Rjc + Rcs_tot + Rsa = 0.15 + 0.0125 + 0.233 = 0.3955°C/W",
      "结温：Tj = Ta + P × Rja = 25 + 180 × 0.3955 = 25 + 71.2 = 96.2°C",
      "降额空间：ΔT = Tj_max - Tj = 105 - 96.2 = 8.8°C；降额比例 = 8.8/(105-25) = 11%",
    ],
    answer: "Tj = 96.2°C，降额空间 8.8°C（11%），满足设计要求但余量偏小，建议优化散热器或增大风速。",
  },
  {
    title: "散热器翅片面积计算",
    icon: Calculator,
    color: "text-accent-orange",
    problem: "需设计一铝制散热器（k = 200 W/m·K）。目标热阻 Rsa = 0.3°C/W，已知：底座面积 A_base = 60×60mm²，翅片高度 H = 30mm，翅片厚度 t = 1mm，翅片间距 s = 2.5mm，风速 v = 3m/s 时的平均对流换热系数 h = 45 W/m²K。① 计算所需总散热面积 A_total。② 求所需翅片数量。③ 验算翅片效率。",
    steps: [
      "由 Rsa = 1/(h·A_total·η_fin) 得 A_total = 1/(Rsa·h·η_fin)。先假设 η_fin = 0.85",
      "A_total ≈ 1/(0.3 × 45 × 0.85) = 1/11.475 = 0.0872 m² = 87200 mm²",
      "散热器宽度 W = 60mm。单翅片间距 pitch = t + s = 1 + 2.5 = 3.5mm",
      "翅片数 n = W/pitch = 60/3.5 = 17.1，取 n = 17 片",
      "单翅片表面积（两侧）：A_fin = 2 × H × L = 2 × 30 × 60 = 3600 mm²；翅片总面积 = 17 × 3600 = 61200 mm²",
      "加上底座暴露面积 A_base_exposed = 60×60 - 17×1×60 = 3600 - 1020 = 2580 mm²",
      "总散热面积 A_total = 61200 + 2580 = 63780 mm² = 0.06378 m²",
      "核算翅片效率：m = √(2h/k_t) = √(2×45/200/0.001) = √450 = 21.21 m⁻¹；mL = 21.21 × 0.03 = 0.636",
      "η_fin = tanh(mL)/(mL) = tanh(0.636)/0.636 = 0.562/0.636 = 0.884",
      "实际 Rsa = 1/(h·A_total·η_fin) = 1/(45 × 0.06378 × 0.884) = 1/2.537 = 0.394°C/W",
      "面积不足，需调整。取 n = 22 片（pitch = 2.73mm），A_total = 22×3600 + (3600-22×1×60) = 79200 + 2280 = 81480 mm² = 0.08148 m²",
      "η_fin 不变 0.884，Rsa = 1/(45 × 0.08148 × 0.884) = 1/3.242 = 0.308°C/W，接近目标值",
    ],
    answer: "设计 22 片翅片（间距 1.73mm），总散热面积 0.0815 m²，实际 Rsa ≈ 0.308°C/W，满足 ≤0.3°C/W 目标。",
  },
  {
    title: "风量计算（CFM）",
    icon: Wind,
    color: "text-accent-cyan",
    problem: "某电子机箱需散除总热量 Q = 500W。空气入口温度 T_in = 30°C，出口温度 T_out = 45°C（温升 ΔT = 15°C）。空气密度 ρ = 1.2 kg/m³，定压比热容 cp = 1005 J/kg·K。① 计算所需质量流量 ṁ 和体积流量 V̇（m³/s 和 CFM）。② 若实际风扇最大风量仅 40 CFM，应如何处理？",
    steps: [
      "由能量守恒：Q = ṁ·cp·ΔT → ṁ = Q/(cp·ΔT) = 500/(1005 × 15) = 500/15075 = 0.0332 kg/s",
      "体积流量：V̇ = ṁ/ρ = 0.0332/1.2 = 0.0277 m³/s",
      "换算 CFM：1 m³/s = 2118.88 CFM，V̇ = 0.0277 × 2118.88 = 58.6 CFM",
      "若实际风扇仅 40 CFM (0.0189 m³/s)：ṁ = 0.0189 × 1.2 = 0.0227 kg/s",
      "实际温升：ΔT = Q/(ṁ·cp) = 500/(0.0227 × 1005) = 500/22.81 = 21.9°C",
      "出口温度：T_out = 30 + 21.9 = 51.9°C —— 超出系统允许温度（通常 <50°C）",
      "解决方案：① 更换更高风量风扇（>60 CFM）。② 降低系统阻抗使风扇工作点右移。③ 降低总功耗（降频/降额）。④ 增加第二个风扇并联（风量叠加，但非加倍）。",
    ],
    answer: "所需风量 58.6 CFM，40 CFM 不够（温升达 21.9°C）。建议选用 70+ CFM 风扇或双风扇并联。",
  },
  {
    title: "液冷系统水泵选型计算",
    icon: Droplets,
    color: "text-accent-teal",
    problem: "一液冷系统需冷却 800W 热负载，冷却液为 25% 乙二醇水溶液（ρ = 1030 kg/m³，cp = 3800 J/kg·K，μ = 0.003 Pa·s）。系统包含：冷板（ΔP_cp = 15kPa）、CDU 换热器（ΔP_cdu = 25kPa）、管路（总长 3m，内径 10mm，粗糙度 0.05mm）、4 个直角弯头（K=0.9 每个）、2 个球阀（K=0.5 每个）、1 个三通（K=1.0）。① 计算管路沿程和局部压降。② 确定泵所需扬程和流量。③ 选型建议。",
    steps: [
      "需求流量：ṁ = Q/(cp·ΔT)。设温升 ΔT = 10°C，ṁ = 800/(3800×10) = 0.0211 kg/s = 1.263 kg/min",
      "体积流量：V̇ = ṁ/ρ = 0.0211/1030 = 2.05×10⁻⁵ m³/s = 1.23 L/min = 0.325 GPM",
      "流速：v = V̇/A = 2.05×10⁻⁵/(π×0.005²) = 2.05×10⁻⁵/7.85×10⁻⁵ = 0.261 m/s",
      "Re = ρvD/μ = 1030×0.261×0.01/0.003 = 2.688/0.003 = 896 → 层流",
      "Darcy 摩擦系数：f = 64/Re = 64/896 = 0.0714",
      "沿程压降：ΔP_f = f·(L/D)·(½ρv²) = 0.0714×(3/0.01)×(0.5×1030×0.261²)",
      "= 0.0714×300×(0.5×1030×0.0681) = 0.0714×300×35.07 = 0.0714×10521 = 751 Pa",
      "局部损失：ΣK = 4×0.9 + 2×0.5 + 1.0 = 3.6 + 1.0 + 1.0 = 5.6",
      "ΔP_local = ΣK·(½ρv²) = 5.6×35.07 = 196 Pa",
      "总压降：ΔP_total = 751 + 196 + 15000 + 25000 = 40947 Pa ≈ 41 kPa ≈ 4.18 mH₂O",
      "安全系数 1.2：设计扬程 = 41×1.2 = 49.2 kPa ≈ 5.0 mH₂O；设计流量 = 1.23×1.2 = 1.48 L/min",
    ],
    answer: "选用泵参数：流量 ≥ 1.5 L/min，扬程 ≥ 5 mH₂O（~50kPa）。推荐型号：D5 PWM（12V DC，最大 10m 扬程/20L/min）或国产 DC50B（最大 7m 扬程/15L/min）。",
  },
  {
    title: "自然对流换热系数计算",
    icon: Sun,
    color: "text-accent-amber",
    problem: "一垂直平板散热器尺寸 H = 200mm，W = 150mm，表面温度 Ts = 75°C，环境温度 T∞ = 25°C，空气物性（膜温 Tf = 50°C）：ν = 1.9×10⁻⁵ m²/s，k = 0.028 W/m·K，Pr = 0.71，β = 1/Tf = 1/323 = 0.0031 K⁻¹。① 计算自然对流换热系数 h。② 计算该平板自然对流的散热量。③ 若改为水平放置（热面朝上），h 变化如何？",
    steps: [
      "Grashof 数：Gr = gβΔTH³/ν² = 9.81×0.0031×50×0.2³/(1.9×10⁻⁵)²",
      "= 9.81×0.0031×50×0.008/(3.61×10⁻¹⁰) = 0.01216/(3.61×10⁻¹⁰) = 3.37×10⁷",
      "Rayleigh 数：Ra = Gr·Pr = 3.37×10⁷ × 0.71 = 2.39×10⁷",
      "流态判断：Ra = 2.39×10⁷，在 10⁴~10⁹ 之间，层流。垂直板 Churchill-Chu 关联式：",
      "Nu = {0.825 + 0.387Ra^(1/6)/[1+(0.492/Pr)^(9/16)]^(8/27)}²",
      "[1+(0.492/0.71)^(9/16)]^(8/27) = [1+(0.693)^0.5625]^(0.2963) = [1+0.813]^0.2963 = 1.813^0.2963 = 1.188",
      "0.387Ra^(1/6) = 0.387×(2.39×10⁷)^(1/6) = 0.387×2.62 = 1.014",
      "Nu = (0.825 + 1.014/1.188)² = (0.825 + 0.853)² = 1.678² = 2.816",
      "h = Nu·k/H = 2.816×0.028/0.2 = 0.0788/0.2 = 3.94 W/m²K",
      "散热量：Q = hAΔT = 3.94×(0.2×0.15)×50 = 3.94×0.03×50 = 5.91W",
      "水平放置（热面朝上）：关联式 Nu = 0.54Ra^(1/4) (10⁴≤Ra≤10⁷) 或 0.15Ra^(1/3) (10⁷≤Ra≤10¹¹)",
      "Nu = 0.15×(2.39×10⁷)^(1/3) = 0.15×288 = 43.2",
      "h_horiz = 43.2×0.028/0.15（特征长度 L = A/P = 0.03/0.7 = 0.0429m）= 43.2×0.028/0.0429 = 28.2 W/m²K",
      "Q_horiz = 28.2×0.03×50 = 42.3W —— 水平放置散热能力是垂直的 7 倍",
    ],
    answer: "垂直放置 h = 3.94 W/m²K，散热仅 5.91W，自然对流效率很低。水平热面朝上 h = 28.2 W/m²K，散热 42.3W。自然对流设计建议：水平热面朝上 > 垂直 > 水平热面朝下。",
  },
  {
    title: "辐射换热计算",
    icon: Sun,
    color: "text-accent-red",
    problem: "一散热器表面温度 T₁ = 80°C（353K），发射率 ε₁ = 0.85，面对墙壁温度 T₂ = 25°C（298K），发射率 ε₂ = 0.7，表面积 A₁ = 0.05 m²，A₂ = 2 m²。① 计算两表面间的辐射换热量。② 若在表面喷黑漆（ε₁=0.95），换热量增加多少？③ 若抛光铝（ε₁=0.05）则如何？",
    steps: [
      "辐射网络法。表面热阻：表面1 R₁ = (1-ε₁)/(ε₁A₁) = (1-0.85)/(0.85×0.05) = 0.15/0.0425 = 3.529 m⁻²",
      "表面2 R₂ = (1-ε₂)/(ε₂A₂) = (1-0.7)/(0.7×2) = 0.3/1.4 = 0.214 m⁻²",
      "空间热阻：R₁₂ = 1/(A₁F₁₂)。F₁₂ = 1（小面对大面，假设完全可见）",
      "R₁₂ = 1/(0.05×1) = 20 m⁻²",
      "总热阻：R_total = R₁ + R₁₂ + R₂ = 3.529 + 20 + 0.214 = 23.743 m⁻²",
      "Eb₁ = σT₁⁴ = 5.67×10⁻⁸×353⁴ = 5.67×10⁻⁸×1.553×10¹⁰ = 880.6 W/m²",
      "Eb₂ = σT₂⁴ = 5.67×10⁻⁸×298⁴ = 5.67×10⁻⁸×7.89×10⁹ = 447.4 W/m²",
      "Q = (Eb₁-Eb₂)/R_total = (880.6-447.4)/23.743 = 433.2/23.743 = 18.25W",
      "黑漆（ε₁=0.95）：R₁ = (1-0.95)/(0.95×0.05) = 0.05/0.0475 = 1.053",
      "R_total = 1.053+20+0.214 = 21.267；Q = 433.2/21.267 = 20.37W，增加 11.6%",
      "抛光铝（ε₁=0.05）：R₁ = (1-0.05)/(0.05×0.05) = 0.95/0.0025 = 380",
      "R_total = 380+20+0.214 = 400.214；Q = 433.2/400.214 = 1.08W，减少 94%",
    ],
    answer: "初始 Q = 18.25W。黑漆后 Q = 20.37W（+11.6%）。抛光铝 Q = 1.08W（-94%）。结论：辐射在低发射率下几乎可忽略；高发射率涂层可提升辐射散热约 10~15%，但相比对流仍较小。",
  },
  {
    title: "管道流动压降（Darcy-Weisbach）",
    icon: Gauge,
    color: "text-accent-cyan",
    problem: "一液冷系统冷却液为纯水（ρ = 997 kg/m³，μ = 8.9×10⁻⁴ Pa·s），管路为铜管（内径 D = 8mm，粗糙度 ε = 0.0015mm），总长 L = 5m，流量 V̇ = 2 L/min。计算：① 流态。② 沿程压降。③ 若管径改为 6mm 而流量不变，压降变化多少倍？",
    steps: [
      "V̇ = 2 L/min = 2×10⁻³/60 = 3.33×10⁻⁵ m³/s",
      "A = πD²/4 = π×0.008²/4 = 5.03×10⁻⁵ m²",
      "v = V̇/A = 3.33×10⁻⁵/5.03×10⁻⁵ = 0.662 m/s",
      "Re = ρvD/μ = 997×0.662×0.008/8.9×10⁻⁴ = 5.28/8.9×10⁻⁴ = 5933 → 湍流",
      "相对粗糙度 ε/D = 0.0015/8 = 0.0001875",
      "Colebrook 公式：1/√f = -2log[ε/D/3.7 + 2.51/(Re√f)]",
      "Swamee-Jain 显式近似：f = 0.25/[log(ε/3.7D + 5.74/Re^0.9)]²",
      "= 0.25/[log(0.0001875/3.7 + 5.74/5933^0.9)]²",
      "5933^0.9 = 5933^0.9 = 5933×5933^(-0.1) ≈ 5933/2.37 = 2503",
      "5.74/2503 = 0.002293；ε/3.7D = 0.0001875/3.7 = 5.07×10⁻⁵",
      "总和 = 5.07×10⁻⁵ + 0.002293 = 0.002344；log(0.002344) = -2.63",
      "f = 0.25/(-2.63)² = 0.25/6.92 = 0.0361",
      "ΔP = f·(L/D)·(½ρv²) = 0.0361×(5/0.008)×(0.5×997×0.662²)",
      "= 0.0361×625×(0.5×997×0.438) = 0.0361×625×218.3 = 0.0361×136438 = 4925 Pa = 4.93 kPa",
      "若 D=6mm：A = 2.83×10⁻⁵ m²，v = 3.33×10⁻⁵/2.83×10⁻⁵ = 1.178 m/s",
      "Re = 997×1.178×0.006/8.9×10⁻⁴ = 7.04/8.9×10⁻⁴ = 7910",
      "f = 0.25/[log(0.0015/22.2 + 5.74/7910^0.9)]²，7910^0.9 ≈ 2700",
      "f ≈ 0.032，ΔP = 0.032×(5/0.006)×(0.5×997×1.178²) = 0.032×833×691 = 18426 Pa ≈ 3.74 倍",
    ],
    answer: "8mm 管 ΔP = 4.93 kPa，6mm 管 ΔP = 18.4 kPa（约 3.7 倍）。结论：管径减小 25%，压降增大近 4 倍。液冷管路应选足够大的内径以控制泵功消耗。",
  },
  {
    title: "换热器效能（NTU 方法）",
    icon: Box,
    color: "text-accent-teal",
    problem: "一逆流板式换热器用于液冷 CDU。一次侧（热侧）：冷却液流量 ṁ_h = 0.5 kg/s，cp_h = 3800 J/kg·K，入口温度 T_h,in = 60°C。二次侧（冷侧）：冷却水流量 ṁ_c = 0.8 kg/s，cp_c = 4180 J/kg·K，入口温度 T_c,in = 25°C。换热面积 A = 0.5 m²，总传热系数 U = 1500 W/m²K。① 求换热器效能 ε。② 求两侧出口温度。③ 若改为顺流，出口温度有何变化？",
    steps: [
      "热容量流率：C_h = ṁ_h·cp_h = 0.5×3800 = 1900 W/K；C_c = ṁ_c·cp_c = 0.8×4180 = 3344 W/K",
      "最小 C_min = 1900 W/K，C_max = 3344 W/K；C_r = C_min/C_max = 1900/3344 = 0.568",
      "NTU = UA/C_min = 1500×0.5/1900 = 750/1900 = 0.395",
      "逆流换热器 ε 公式：ε = [1-exp(-NTU·(1-C_r))]/[1-C_r·exp(-NTU·(1-C_r))]",
      "NTU·(1-C_r) = 0.395×(1-0.568) = 0.395×0.432 = 0.171",
      "e^(-0.171) = 0.843",
      "ε = (1-0.843)/(1-0.568×0.843) = 0.157/(1-0.479) = 0.157/0.521 = 0.301",
      "Q = ε·C_min·(T_h,in - T_c,in) = 0.301×1900×(60-25) = 0.301×1900×35 = 20016 W ≈ 20 kW",
      "T_h,out = T_h,in - Q/C_h = 60 - 20016/1900 = 60 - 10.54 = 49.5°C",
      "T_c,out = T_c,in + Q/C_c = 25 + 20016/3344 = 25 + 5.99 = 31.0°C",
      "顺流公式：ε = [1-exp(-NTU·(1+C_r))]/(1+C_r)",
      "NTU·(1+C_r) = 0.395×1.568 = 0.619；e^(-0.619) = 0.538",
      "ε_parallel = (1-0.538)/(1+0.568) = 0.462/1.568 = 0.295",
      "Q_parallel = 0.295×1900×35 = 19618W；T_h,out = 60-10.32 = 49.7°C；T_c,out = 25+5.87 = 30.9°C",
    ],
    answer: "逆流 ε = 0.301，热侧出口 49.5°C，冷侧出口 31.0°C，换热量 20.0kW。顺流 ε = 0.295 略低。逆流在 C_r<1 时优势不明显，但在 C_r=1 时逆流优势显著。",
  },
  {
    title: "热应力计算",
    icon: Zap,
    color: "text-accent-orange",
    problem: "一铝制散热器（6061-T6，E = 68.9 GPa，α = 23.6×10⁻⁶ /°C，σ_y = 276 MPa）通过螺钉固定在 PCB（FR4，α = 14×10⁻⁶ /°C）上。安装温度 T_install = 25°C，工作温度 T_work = 85°C。铝散热器长度 L = 120mm，截面 A_Al = 300 mm²。PCB 的等效截面积 A_FR4 = 500 mm²，E_FR4 = 22 GPa。① 计算温差引起的热应变。② 计算铝散热器和 PCB 中的热应力。③ 判断是否安全。",
    steps: [
      "温差 ΔT = T_work - T_install = 85-25 = 60°C",
      "自由热应变：ε_Al = α_Al·ΔT = 23.6×10⁻⁶×60 = 1.416×10⁻³；ε_FR4 = 14×10⁻⁶×60 = 0.84×10⁻³",
      "热变形差：ΔL = (α_Al-α_FR4)·ΔT·L = (23.6-14)×10⁻⁶×60×0.12 = 9.6×10⁻⁶×60×0.12 = 6.91×10⁻⁵ m = 0.069mm",
      "由于螺钉固定，两者变形必须一致，产生约束力。力平衡：F_Al = F_FR4 = F（大小相等方向相反）",
      "变形协调：α_Al·ΔT·L + F·L/(E_Al·A_Al) = α_FR4·ΔT·L - F·L/(E_FR4·A_FR4)",
      "代入：1.416×10⁻³×0.12 + F×0.12/(68.9×10⁹×3×10⁻⁴) = 0.84×10⁻³×0.12 - F×0.12/(22×10⁹×5×10⁻⁴)",
      "约去 L：1.416×10⁻³ + F/(68.9×10⁹×3×10⁻⁴) = 0.84×10⁻³ - F/(22×10⁹×5×10⁻⁴)",
      "1.416×10⁻³ + F/2.067×10⁷ = 0.84×10⁻³ - F/1.1×10⁷",
      "F/2.067×10⁷ + F/1.1×10⁷ = 0.84×10⁻³ - 1.416×10⁻³ = -0.576×10⁻³",
      "F×(4.838×10⁻⁸ + 9.09×10⁻⁸) = F×1.393×10⁻⁷ = -0.576×10⁻³",
      "F = -0.576×10⁻³/1.393×10⁻⁷ = -4136 N（负号表示铝受拉，PCB 受压）",
      "铝应力：σ_Al = F/A_Al = 4136/3×10⁻⁴ = 13.79 MPa（拉伸）",
      "PCB 应力：σ_FR4 = F/A_FR4 = 4136/5×10⁻⁴ = 8.27 MPa（压缩）",
      "安全系数（铝）：SF = σ_y/σ_Al = 276/13.79 = 20.0 → 安全",
      "FR4 抗压强度约 300 MPa，SF = 300/8.27 = 36.3 → 安全",
    ],
    answer: "铝应力 13.8 MPa（远低于屈服 276 MPa，SF=20），PCB 应力 8.3 MPa（安全）。本例温差 60°C 安全，但若温差达 200°C（如焊接过程），铝应力将达 46 MPa，仍需注意。",
  },
  {
    title: "PCB 铜厚及热过孔计算",
    icon: Cpu,
    color: "text-accent-green",
    problem: "一 DC-DC 转换器 MOSFET 功耗 P = 3W，焊盘尺寸 5×5mm²，需通过 PCB 铜箔和热过孔导热到背面铜 plane（温度要求 < 25°C 温升）。FR4 导热系数 0.3 W/m·K，铜导热系数 401 W/m·K。PCB 板厚 1.6mm。① 仅靠顶层 1oz 铜箔（35μm）散热，计算温升。② 若在焊盘下布置 4×4 = 16 个过孔（孔径 0.3mm，铜镀层 25μm），计算含过孔的总热阻。③ 所需过孔数量使温升 < 10°C。",
    steps: [
      "① 仅铜箔散热（不考虑 FR4 导热）：",
      "顶层铜箔面积近似为焊盘面积 A = 5×5 = 25 mm² = 2.5×10⁻⁵ m²",
      "1oz 铜厚 t = 35μm = 3.5×10⁻⁵ m。铜箔截面积 A_cu = 周长×厚度？非：热从焊盘中心向四周扩散，",
      "简化：热阻模型为 R = L/(k·A)，取 L = 5mm（从焊盘到铜 plane 边缘），A_cu = t × W（假设扩散宽度=焊盘宽）",
      "A_cu = 3.5×10⁻⁵ × 0.005 = 1.75×10⁻⁷ m²",
      "R_cu = 0.005/(401×1.75×10⁻⁷) = 0.005/7.02×10⁻⁵ = 71.2°C/W",
      "温升 ΔT = P×R_cu = 3×71.2 = 213.6°C —— 显然不够",
      "② 单个过孔：铜截面积 A_via = π(r_o² - r_i²) = π(0.15²-0.125²) = π×0.006875 = 0.0216 mm² = 2.16×10⁻⁸ m²",
      "单过孔热阻 R_via = L/(k·A_via) = 0.0016/(401×2.16×10⁻⁸) = 0.0016/8.66×10⁻⁶ = 184.7°C/W",
      "16 个过孔并联：R_via_total = 184.7/16 = 11.54°C/W",
      "铜箔热阻与过孔热阻并联：R_total = (71.2 × 11.54)/(71.2 + 11.54) = 821.6/82.74 = 9.93°C/W",
      "温升 ΔT = 3×9.93 = 29.8°C —— 仍 > 25°C",
      "③ 目标 R_total = ΔT_target/P = 10/3 = 3.33°C/W",
      "需过孔数 n：1/(1/71.2 + n/184.7) = 3.33",
      "1/71.2 + n/184.7 = 1/3.33 = 0.300",
      "n/184.7 = 0.300 - 0.014 = 0.286",
      "n = 0.286×184.7 = 52.8，取 n = 60 个过孔",
      "60 个过孔（约 8×8 阵列，间距 0.6mm），R_via_total = 184.7/60 = 3.08°C/W",
      "R_total = (71.2×3.08)/(71.2+3.08) = 219.3/74.28 = 2.95°C/W",
      "温升 ΔT = 3×2.95 = 8.85°C < 10°C ✓",
    ],
    answer: "1oz 铜箔仅 71.2°C/W（温升 214°C）。加 16 个过孔后总热阻 9.93°C/W（温升 29.8°C）。需 60 个过孔（8×8 阵列）使温升降至 8.9°C，满足 <10°C 目标。",
  },
];

// 附：常用热物性参数速查
const propertyTable = [
  ["纯铜 (C1100)", "401", "8930", "385", "17×10⁻⁶"],
  ["纯铝 (1060)", "234", "2700", "900", "23.6×10⁻⁶"],
  ["6061 铝合金", "167", "2700", "896", "23.6×10⁻⁶"],
  ["ADC12 压铸铝", "96", "2700", "960", "21×10⁻⁶"],
  ["铜钨合金 (WCu)", "180~230", "15000~17000", "180~200", "6~8×10⁻⁶"],
  ["氧化铝陶瓷 Al₂O₃", "25~35", "3900", "880", "7×10⁻⁶"],
  ["氮化铝 AlN", "170~200", "3260", "740", "4.5×10⁻⁶"],
  ["FR4 (玻纤环氧)", "0.3", "1900", "1300", "14×10⁻⁶"],
  ["导热硅脂 (优质)", "8~12", "~2500", "—", "—"],
  ["液态金属 (GaInSn)", "30~50", "6400", "370", "—"],
  ["空气 (25°C)", "0.026", "1.18", "1005", "—"],
  ["去离子水 (25°C)", "0.61", "997", "4181", "—"],
];

export default function ExamPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-accent-green font-mono mb-2">
        <GraduationCap className="w-4 h-4" />
        机考专区
      </div>
      <h1 className="text-4xl font-bold text-white mb-3">热设计计算题库</h1>
      <p className="text-gray-400 text-lg mb-6">10 道综合计算题，覆盖热设计笔试和机考高频题型。点击展开查看完整解析。</p>

      <Link
        href="/exam/questions"
        className="group flex items-center gap-3 px-5 py-4 mb-8 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 hover:bg-accent-cyan/10 transition-all"
      >
        <Brain className="w-6 h-6 text-accent-cyan" />
        <div className="flex-1">
          <div className="text-base font-semibold text-white group-hover:text-accent-cyan transition-colors">热设计工程师笔试题库（115题）</div>
          <div className="text-sm text-gray-500">12 个专题覆盖传热学/CFD/散热器件/前沿技术，含详细解析</div>
        </div>
        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-accent-cyan transition-colors" />
      </Link>

      <div className="space-y-6 mb-8">
        {problems.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
              <details className="group">
                <summary className="flex items-start gap-4 cursor-pointer list-none">
                  <div className={`w-10 h-10 rounded-xl ${p.color.replace("text", "bg")}/10 flex items-center justify-center ${p.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-mono ${p.color}`}>#{idx + 1}</span>
                      <h3 className="text-base font-semibold text-white">{p.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{p.problem}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-500 shrink-0 mt-2 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="mt-6 ml-14">
                  <div className="bg-tech-900/50 rounded-xl border border-tech-600/20 p-5 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-accent-cyan mb-3 flex items-center gap-2">
                        <Calculator className="w-3.5 h-3.5" />
                        解题步骤
                      </h4>
                      <div className="space-y-2">
                        {p.steps.map((step, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </div>
                            <p className="text-sm text-gray-300 font-mono leading-relaxed">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-tech-800/50 rounded-lg p-4 border border-accent-green/20">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent-green shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs font-semibold text-accent-green mb-1">最终答案</div>
                          <p className="text-sm text-gray-300 font-mono">{p.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          );
        })}
      </div>

      {/* Reference Table */}
      <div className="mb-8 bg-tech-800/50 border border-tech-600/30 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="w-4 h-4 text-accent-cyan" />
          <h3 className="text-sm font-semibold text-accent-cyan">附表：常用热物性参数速查</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-tech-600/30 text-gray-400">
                <th className="text-left py-2 px-3 font-semibold">材料</th>
                <th className="text-right py-2 px-3 font-mono">k (W/m·K)</th>
                <th className="text-right py-2 px-3 font-mono">ρ (kg/m³)</th>
                <th className="text-right py-2 px-3 font-mono">cp (J/kg·K)</th>
                <th className="text-right py-2 px-3 font-mono">α (/°C)</th>
              </tr>
            </thead>
            <tbody>
              {propertyTable.map((row) => (
                <tr key={row[0]} className="border-b border-tech-600/10">
                  <td className="py-1.5 px-3 text-gray-300">{row[0]}</td>
                  <td className="py-1.5 px-3 text-accent-cyan font-mono text-right">{row[1]}</td>
                  <td className="py-1.5 px-3 text-gray-400 font-mono text-right">{row[2]}</td>
                  <td className="py-1.5 px-3 text-gray-400 font-mono text-right">{row[3]}</td>
                  <td className="py-1.5 px-3 text-gray-400 font-mono text-right">{row[4]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center p-8 bg-tech-800/30 border border-tech-600/20 rounded-xl">
        <GraduationCap className="w-8 h-8 text-accent-green mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-2">模拟机考环境</h3>
        <p className="text-sm text-gray-400 mb-4">即将上线限时模拟机考，60 分钟完成全部计算题</p>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-tech-600/30 text-gray-400 text-sm">开发中</span>
      </div>
    </div>
  );
}
