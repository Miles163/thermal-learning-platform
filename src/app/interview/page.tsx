import {
  BookOpen, HelpCircle, CheckCircle, ChevronRight, Star,
  Flame, Thermometer, Wind, Sun, Cpu, Droplets, Layers,
} from "lucide-react";

const top10 = [
  { q: "传热的三种基本方式及其在电子散热中的体现？", a: "热传导：芯片→封装→PCB/散热器；对流传热：散热器→空气/冷却液；热辐射：高温表面→环境。三种方式在电子散热中同时存在。" },
  { q: "如何计算芯片结温 Tj？", a: "Tj = Ta + Rja × P。其中 Ta 为环境温度，Rja 为结到环境总热阻，P 为功耗。Rja = Rjc + Rcs + Rsa（芯片→外壳→散热器→环境）。" },
  { q: "自然对流与强制对流的换热系数量级？", a: "自然对流 h ≈ 5~25 W/m²K；强制风冷 h ≈ 25~250 W/m²K；液冷 h ≈ 500~15000 W/m²K。量级差异决定了散热方案选择。" },
  { q: "散热器热阻构成及优化方向？", a: "Rsa = Rbase + Rfin + Rflow。优化：增大翅片面积、减小翅片间距（但需平衡压降）、选用高导热材料、增大风速。" },
  { q: "CFD 仿真收敛判断三要素？", a: "① 残差降至 10⁻³（能量 10⁻⁶）以下且平稳；② 监控点温度/压力稳定；③ 进出口质量守恒偏差 <1%。" },
  { q: "导热硅脂（TIM）的作用与选型？", a: "填充界面微观空隙，降低接触热阻。关键参数：导热系数（W/m·K）、热阻（°C·cm²/W）、BLT（粘合层厚度）。优质 TIM 导热系数 > 8 W/m·K。" },
  { q: "液冷系统主要部件及选型要点？", a: "冷板（材质/流道设计）、水泵（流量/扬程）、换热器（散热能力）、冷却液（比热/电导率/防冻）、管路（材料/内径）、接头（密封性）。" },
  { q: "什么是热设计中的降额设计？", a: "为保可靠性，实际工作温度 < 规格书标称最大值，留安全余量。典型：Tj_max 标称 125°C，设计目标 ≤ 105°C（降额 20°C）。" },
  { q: "PCB 热设计的关键措施？", a: "① 功率器件下方布置密集热过孔；② 大面积铜箔铺铜；③ 发热元件远离敏感器件；④ 利用 PCB 边缘导热；⑤ 风道方向与 PCB 平行。" },
  { q: "散热翅片效率与翅片间距优化？", a: "翅片效率 η = tanh(mL)/(mL)，m = √(2h/kt)。间距过小→风阻大、气流难进入；过大→散热面积不足。典型间距 1.5~3mm。" },
];

const groups = [
  {
    title: "A. 传热学基础",
    icon: Flame,
    color: "text-accent-orange",
    questions: [
      {
        q: "比较三种传热方式的机理、控制方程和工程应用场景。",
        a: "导热（Conduction）：Fourier 定律 q=-k∇T，依赖分子/电子碰撞传递能量。固体内部主导，如芯片→封装→散热器。对流传热（Convection）：Newton 冷却定律 q=hΔT，流体运动携带热量。分自然对流（浮力驱动）和强制对流（外力驱动）。热辐射（Radiation）：Stefan-Boltzmann 定律 q=εσT⁴，电磁波传热，无需介质。高温表面（>200°C）辐射不可忽略。电子散热中常三种共存，热阻网络分析综合考虑。",
      },
      {
        q: "详细推导芯片结温计算公式，包括各层热阻的物理意义。",
        a: "Tj = Ta + P × (Rjc + Rcs + Rsa)。Rjc：结到外壳热阻（封装内部，由芯片尺寸、导热胶、基板决定，典型 0.1~0.5°C/W）。Rcs：外壳到散热器热阻（TIM 层，由导热硅脂/相变材料决定，典型 0.01~0.1°C·cm²/W）。Rsa：散热器到环境热阻（散热器本体+空气侧，由翅片设计、风速决定，典型 0.1~0.5°C/W）。设计目标：Tj ≤ Tj_max(max) - 20°C（降额）。",
      },
      {
        q: "傅里叶定律的物理意义、微分形式及适用条件。",
        a: "Fourier 定律：q = -k∇T。物理意义：热流密度正比于温度梯度，方向沿温度降低方向。k 为导热系数（W/m·K），是材料属性。微分形式：ρcp·∂T/∂t = ∇·(k∇T) + Q̇。适用条件：① 连续介质假设成立；② 各向同性或各向异性（张量形式）；③ 无内热源时简化为 Laplace 方程 ∇²T=0。注意：超薄薄膜（<100nm）或极低温（<1K）时 Fourier 定律可能失效（弹道输运）。",
      },
      {
        q: "自然对流和强制对流的无量纲数分析及区别。",
        a: "自然对流：Gr = gβΔTL³/ν²（Grashof 数，表征浮力/粘性力之比），Ra = Gr·Pr（Rayleigh 数）。Nu = f(Ra, Pr)。典型 h=5~25 W/m²K。强制对流：Re = ρvL/μ（Reynolds 数，表征惯性力/粘性力之比）。Nu = f(Re, Pr)。典型 h=25~250 W/m²K（空气），500~15000 W/m²K（液体）。核心区别：自然对流流速由浮力自决定，流速低；强制对流的流速由外部动力决定，可远超自然对流。电子散热中，<5W 可用自然对流，>10W 通常需强制风冷。",
      },
      {
        q: "电子设备中热辐射传热的贡献何时不可忽略？如何计算？",
        a: "当温差大或高温时辐射不可忽略。判据：辐射热流 q_rad = εσ(T₁⁴ - T₂⁴) 与对流热流 q_conv = hΔT 量级可比时。例如：表面 150°C、环境 25°C、ε=0.8、自然对流 h=10，q_rad≈0.8×5.67×10⁻⁸×(423⁴-298⁴)=0.8×5.67×10⁻⁸×2.43×10¹⁰≈1100W/m²，q_conv=10×125=1250W/m²，辐射贡献约 47%。高温场景（LED 灯具、逆变器）必须考虑辐射。计算采用辐射网络法：Q = (Eb1-Eb2)/((1-ε₁)/(ε₁A₁) + 1/(A₁F₁₂) + (1-ε₂)/(ε₂A₂))。",
      },
      {
        q: "导热界面材料（TIM）的类型、选型参数和性能比较。",
        a: "常见 TIM 类型：① 导热硅脂（Thermal Grease）：导热系数 1~12 W/m·K，BLT 薄（<50μm），适用 CPU/GPU。② 相变材料（PCM）：常温固态，加热变软填充空隙，导热系数 3~8 W/m·K，免维护。③ 导热凝胶（Thermal Gel）：类似硅脂但更稳定，适自动点胶工艺。④ 导热垫片（Pad）：预成型，易安装但热阻较大。⑤ 液态金属（Liquid Metal）：导热系数 >30 W/m·K，但导电需绝缘处理。选型参数：导热系数、热阻（°C·cm²/W）、BLT、电绝缘性、粘度、长期可靠性（泵出/干涸/相分离）。",
      },
    ],
  },
  {
    title: "B. 热力学",
    icon: Thermometer,
    color: "text-accent-red",
    questions: [
      {
        q: "热力学第一定律在电子散热系统中的工程应用形式。",
        a: "第一定律：能量守恒。稳态开口系统：Q̇ - Ẇ = ṁ(h₂ - h₁ + ½(v₂² - v₁²) + g(z₂ - z₁))。电子散热简化：无轴功 Ẇ=0，动能势能变化忽略，则 Q̇ = ṁ·cp·ΔT。这是风量计算的核心公式：Q = ρ·V̇·cp·ΔT（V̇ 为体积流量）。例如散除 300W 热量、温升 10°C：V̇ = 300/(1.2×1005×10) = 0.0249 m³/s = 52.8 CFM。",
      },
      {
        q: "第二定律和熵的概念在热设计中有什么实际意义？",
        a: "第二定律：热量不能自发从低温传向高温。熵 S = ∫δQ/T，熵增原理：孤立系统 ΔS ≥ 0。热设计意义：① 热传递方向——热量总从高温到低温，散热器温度必须高于环境才能散热。② 效率极限——Carnot 效率 η=1-TL/TH，温差越大越高效。③ 可用能分析——高品位热能（高温）更有价值，散热时尽量保持高温差。④ 熵产最小化——优化散热器减少不可逆损失，降低泵功/风扇功耗。",
      },
      {
        q: "Carnot 循环、Carnot 效率及对热设计的启示。",
        a: "Carnot 循环由两个等温过程和两个绝热过程组成。Carnot 效率 η_C = 1 - T_L/T_H（绝对温标）。启示：① 热机效率随热源温度升高而提高——电子产品尽可能在高温运行（在允许范围内）有利于废热回收。② 制冷/热泵 COP_C = T_L/(T_H-T_L)——温差越小 COP 越高，液冷系统的冷却液温度应尽量接近环境。③ 任何过程都不可达到 Carnot 效率，实际效率通常为 Carnot 的 30~70%。④ 半导体温差发电（TEG）基于此原理。",
      },
      {
        q: "制冷循环的 COP 计算及其在电子冷却中的应用。",
        a: "蒸气压缩制冷 COP_R = Q_L/W = h₁-h₄/h₂-h₁。理想 COP_C = T_L/(T_H-T_L)。实际 COP 通常为 3~6。电子冷却应用：① 高功率芯片（>1000W）用压缩机制冷（如超级计算机）。② 热电制冷（TEC）：COP 通常仅 0.5~1.5，适用于局部热点 cooling（如激光器、光模块）。③ 液冷系统 CDU（冷量分配单元）中的制冷循环 COP 分析。④ 数据中心冷却 PUE 评估中，制冷系统能耗占比约 30~40%，COP 提升直接降低运营成本。",
      },
    ],
  },
  {
    title: "C. 流体力学",
    icon: Wind,
    color: "text-accent-cyan",
    questions: [
      {
        q: "Bernoulli 方程在散热设计中的工程应用。",
        a: "Bernoulli：P₁/ρg + v₁²/2g + z₁ = P₂/ρg + v₂²/2g + z₂ + h_f（含沿程损失）。应用：① 风道设计——风道截面变化导致流速和静压转换，散热器入口和出口的压差计算。② 液冷系统——泵的扬程需克服管路沿程和局部阻力。③ 风扇选型——风扇 PQ 曲线与系统阻抗曲线的交点决定工作点。④ 喷嘴/孔板——冷却液喷射冲击冷却（Jet Impingement）的流量-压力关系。注意：Bernoulli 仅适用不可压无粘流，实际需修正摩擦损失。",
      },
      {
        q: "Reynolds 数的物理意义及散热设计中的流态判断。",
        answer: "Re = ρvD_h/μ = vD_h/ν。物理意义：惯性力与粘性力之比。流态判断：① 管内流动——层流 Re<2300，过渡 2300~4000，湍流 Re>4000。② 翅片间流动——通道流，层流 Re<500，湍流 Re>1000。③ 外流——平板上 Recrit ≈ 5×10⁵。热设计影响：层流 h∝Re^0.5（入口段效应明显），湍流 h∝Re^0.8（换热更强但压降更大）。翅片散热器通常在 Re=500~2000 间设计以平衡换热和压降。微通道冷板通道小（Dh~0.5mm），Re 常在层流区。",
      },
      {
        q: "散热器翅片间压降的计算方法及影响因素。",
        a: "压降 ΔP = f·(L/D_h)·(½ρv²)。f 为摩擦系数：层流 f=64/Re（圆管）或 f=96/Re（平行平板），湍流 Blasius f=0.079Re⁻⁰·²⁵。影响因素：① 翅片间距——间距减小→流速↑→压降↑（约平方关系）。② 翅片长度——越长压降越大。③ 粗糙度——表面粗糙度↑→压降↑（湍流时更显著）。④ 入口形状——圆角入口可降低入口损失 30~50%。⑤ 气流方向——与翅片平行还是垂直。热设计中常用 ΔP = ½ρv²(K_c + fL/D_h + K_e)（含收缩和扩张损失）。",
      },
      {
        q: "风扇 PQ 曲线与系统阻抗曲线的匹配方法。",
        a: "风扇性能曲线（PQ 曲线）：横轴风量 CFM/m³/s，纵轴静压 Pa/mmH₂O。随风量↑静压↓。系统阻抗曲线：ΔP ∝ V̇²（二次抛物线）。工作点 = 两曲线交点。匹配原则：① 工作点应在风扇高效区（通常 60~80% 最大风量处）。② 系统阻度过大→工作点左移→风量不足，需选更高静压风扇或优化风道。③ 多风扇串/并联：串联→静压叠加（适用于高阻系统），并联→风量叠加（适用于低阻系统）。④ 设计时留 10~20% 余量。⑤ 也可用 Fan Laws：V̇₂/V̇₁ = N₂/N₁，ΔP₂/ΔP₁ = (N₂/N₁)²，Pwr₂/Pwr₁ = (N₂/N₁)³。",
      },
    ],
  },
  {
    title: "D. CFD 仿真",
    icon: Layers,
    color: "text-accent-teal",
    questions: [
      {
        q: "网格独立性研究的完整流程和判断标准。",
        a: "流程：① 生成 3~5 套不同密度的网格（粗/中/细/极细，网格数倍率 1.5~2x）。② 对同一工况进行仿真计算。③ 监测关键结果（温度、压降、热流）随网格数的变化。④ 当相邻两套网格的结果偏差 <1% 时认为达到网格独立。⑤ 选择比「收敛」网格略密的网格进行最终计算（安全余量）。判断标准：关键温度变化 <0.5°C 或 <1%、压降变化 <2%、进出口质量流率偏差 <0.5%。注意：边界层需 y+ ≈ 1（低 Re 模型）或 30~300（壁面函数），加密时要保持比例。",
      },
      {
        q: "CFD 收敛判断的定量标准和工程实践。",
        a: "定量标准：① 残差——连续性/动量 <10⁻³，能量 <10⁻⁶（Fluent 默认），k/epsilon <10⁻³。② 监控点——温度/压力/速度波动 <0.1%。③ 全局平衡——进出口质量不平衡 <0.5%，能量不平衡 <1%。④ 流量监控——特定截面的流量不再变化。工程实践：① 观察残差曲线的波动——周期性震荡可能指流动不稳定（如涡脱），非发散而是物理。② 使用二阶迎风离散以降低假扩散。③ 先轻松收敛（一阶格式+低松弛因子）再提高精度。④ 若不易收敛可检查网格质量、时间步长（瞬态）、边界条件合理性。⑤ 切忌盲目追求残差 10⁻¹⁵——工程精度 10⁻⁴~10⁻⁵ 已足够。",
      },
      {
        q: "常用湍流模型的适用场景和在电子散热中的选择建议。",
        a: "① k-ε（标准/可实现/RNG）：应用最广，收敛性好。适合充分发展湍流，高 Re 数。可实现 k-ε 优于标准版。RNG k-ε 适合中等旋流。在电子散热中常用于风道、机箱级仿真。② k-ω（SST k-ω）：结合 k-ω（近壁面）和 k-ε（远场），适合有分离流、逆压梯度。推荐用于翅片间流动分析。③ Transition SST：考虑层流→湍流转捩，适合低 Re 电子散热。④ LES/DES：精度高但网格要求极高（计算量 100~1000x），仅研究级使用。推荐：电子散热首推 Realizable k-ε 或 SST k-ω，兼顾精度和效率。",
      },
      {
        q: "电子散热 CFD 仿真中边界条件的合理设置方法。",
        a: "入口边界：① 速度入口（Velocity-inlet）——已知风量/风速和温度。② 压力入口（Pressure-inlet）——已知环境压力。出口边界：① 压力出口（Pressure-outlet）——推荐，收敛性好。② 质量出口（Outflow）——仅适用充分发展流动。壁面边界：① 热流密度——已知芯片功耗（W/m²）。② 温度——已知表面温度（如散热器底座）。③ 对流——已知 h 和 T_amb（耦合传热时用）。④ 绝热——对称面或近似。对称边界：用于简化几何。风扇模型：① 风扇边界（Fluent fan）——给定 PQ 曲线。② MRF（多重参考系）——精确风扇模拟。热源：用体积热源（W/m³）代替复杂几何。辐射：开启 S2S（表面间辐射）或 DO（离散坐标）模型。",
      },
    ],
  },
  {
    title: "E. 散热设计",
    icon: Cpu,
    color: "text-accent-amber",
    questions: [
      {
        q: "散热器设计优化的完整方法论（从需求到验证）。",
        a: "① 确定目标：Tj_max、P、Ta_max → 计算 Rja(target) = (Tj_max - Ta_max)/P。② 介质选择：自然/强制风冷/液冷。③ 尺寸约束：安装空间（长/宽/高）。④ 初始设计：翅片类型（直翅/针翅/波纹）、翅片参数（厚度 0.5~2mm、间距 1.5~4mm、高度 5~50mm）、底座厚度 3~8mm。⑤ 热阻分解：Rsa = Rbase + Rfin + Rflow。⑥ 材料选择：铝 AL6063/6061（性价比）、铜（高性能）。⑦ 压降约束：风扇/系统 ΔP 上限。⑧ 优化变量：翅片高度↑→面积↑→R↓但高度受限。翅片间距↓→面积↑但压降↑→优化间距使热阻×压降最小（体积约束法）。⑨ 制造工艺：挤压/锻造/压铸/粘合/焊接。⑩ 仿真验证：CFD 确认 Rsa 和 ΔP。⑪ 实验验证：热阻测试（JEDEC 标准）。",
      },
      {
        q: "液冷与风冷的全面对比及选型决策矩阵。",
        a: "风冷优势：成本低、维护简单、无泄漏风险、安装方便。风冷限制：h_max≈250 W/m²K，散热能力受环境温度限制，噪声问题（>60dBA 不可接受）。液冷优势：h 高达 500~15000 W/m²K，散热能力远超风冷（可处理 >1000W），噪声低（泵 <40dBA）。液冷限制：成本高（~2~5x）、有泄漏风险、维护复杂、需额外空间（CDU/水箱）。决策矩阵：功耗 <100W → 风冷足够（低成本）。100~500W → 高端风冷或单相液冷。500~1000W → 推荐液冷。>1000W → 必须液冷（冷板/浸没）。特殊场景：噪声敏感（如 HPC 机房）→液冷。空间受限（如 1U 服务器）→液冷。",
      },
      {
        q: "PCB 热设计的完整准则和最佳实践。",
        a: "① 元件布局：发热元件靠近出风口，远离敏感器件（电容/传感器）。高热耗元件均匀分布避免热点。② 铜箔铺铜：使用大面积铜箔（1oz/2oz 铜厚）。热焊盘（Thermal Pad）连接功率器件焊盘到铜箔。③ 热过孔（Thermal Via）：直径 0.3~0.5mm，间距 0.5~1.0mm，阵列式布置在发热元件下方。过孔铜镀层 ≥25μm。填充导热胶可进一步降低热阻。④ 导热平面：内层使用大面积铜 plane（功率层）。多层板使用热传导通孔连接各层。⑤ PCB 材料：FR4 导热差（0.3 W/m·K），高功率场景考虑金属基板（IMS，1~3 W/m·K）或陶瓷基板。⑥ 风道设计：风道方向与 PCB 平行，避免大元件阻挡气流。PCB 边缘留空气流通道。",
      },
      {
        q: "热失控（Thermal Runaway）的机理分析和预防设计。",
        a: "机理：正反馈循环——温度↑→泄漏电流↑→功耗↑→温度进一步↑→最终损坏器件。常见于功率 MOSFET、BJT、LED。半导体结温每升高 10°C，泄漏电流约翻倍。预防措施：① 负温度系数设计——MOSFET 的 Rds(on) 随温度升高而增大（正温度系数），自动限流。② 热耦合——功率器件并联时紧贴安装，热平衡自动均流。③ 主动保护——温度传感器（NTC/热电偶）+ PWM 降频/关机。④ 散热余量——设计热阻留充分余量（降额 20~30°C）。⑤ 保险/熔断——PPTC（自恢复保险）或温度保险丝。⑥ 系统级——风扇堵转保护、温度监测报警。典型案例如 PC 电源 OTP（过温保护）触发。",
      },
      {
        q: "风扇 PQ 曲线与系统阻抗曲线的匹配方法。",
        a: "风扇 PQ 曲线（Pressure-Flow Rate）描述风扇在不同风量下能提供的静压，系统阻抗曲线描述散热系统在不同风量下的阻力。匹配方法：① 将风扇 PQ 曲线（风扇规格书提供）与系统阻抗曲线（CFD 仿真或经验公式获得）绘制在同一坐标系。② 两曲线交点为工作点（Operating Point），对应实际风量和静压。③ 工作点应在风扇高效区（通常 PQ 曲线中间区域），避免在低风量高静压区（喘振）或高风量低静压区（效率低）。④ 系统阻力过大导致工作点左移、风量不足；阻力过小则噪音增大。⑤ 优化策略：降低系统阻力（增大流道截面积、减少弯头）或更换更高风压风扇。⑥ 串/并联：串联增静压、并联增风量。CFD 仿真需校验系统阻抗曲线与风扇模型的匹配性。",
      },
      {
        q: "微通道冷板的压降和换热特性。",
        a: "微通道冷板（Microchannel Cold Plate）通道水力直径 0.1~1mm，常用于高功率芯片液冷。换热特性：① 层流时 Nu ≈ 3.66~8.23（取决于边界条件和截面形状）。② h = Nu·k/D_h，微通道 D_h 小→h 极大（可达 10000~50000 W/m²K）。③ 入口段效应显著——短通道（L<100D_h）平均 Nu 可提高 2~4 倍。压降特性：① 层流 ΔP ∝ μ·L·v/D_h²——D_h 缩小一半，ΔP 增大 4 倍（层流）至 8 倍（湍流）。② 微通道压降通常达 10~100kPa，需高扬程泵（齿轮泵/柱塞泵）。③ 加工精度影响（机械加工/蚀刻/DMLS），毛刺和粗糙度增大压降。设计权衡：缩小通道→换热增强但压降急剧上升。优化目标：最小化 h/(ΔP×V̇) 即泵功-热阻平衡。常用水力学直径 0.3~0.5mm。",
      },
      {
        q: "射流冲击冷却（Jet Impingement）的传热原理和应用。",
        a: "射流冲击冷却利用高速流体（空气/液体）垂直冲击加热表面，在驻点区产生极薄边界层（δ ∝ Re⁻⁰·⁵），h 极高。空气射流 h 可达 500~1000 W/m²K，液体射流 h 可达 5000~50000 W/m²K。关键参数：① 喷口直径 D（0.5~5mm）。② 射流速度 v（5~50 m/s 空气，0.5~5 m/s 液体）。③ 射流高度 H/D（最佳 4~8）。④ 驻点 Nu ∝ Re^0.5·Pr^0.33。应用：① GPU 局部热点——在芯片热点上方增加微型射流喷嘴。② LED 阵列——射流+针翅结合，峰值热流密度 > 500 W/cm²。③ 电力电子 IGBT——直接射流冷却可去除 300W/cm² 以上。限制：① 射流覆盖面积有限（~3~5D），大面积需多喷嘴阵列。② 泵功高（喷嘴处压降大）。③ 流体喷射方向受限（空间需求）。④ 在消费电子中因成本和空间难以普及，主要用于高功率军用/航空电子。",
      },
    ],
  },
  {
    title: "F. 散热材料与安全标准",
    icon: Cpu,
    color: "text-accent-green",
    questions: [
      {
        q: "散热设计中常见的安全标准与认证要求有哪些？",
        a: "IEC/EN 62368-1：音频/视频/信息技术设备安全标准，章节 5.5 和 6.5 涉及热安全。要求：① 可触及表面温升限值：金属 ≤ 70°C（手持 ≤ 55°C），塑料 ≤ 85°C（手持 ≤ 65°C）。② 绝缘材料热老化——温升不导致材料降解。③ 风扇堵转测试——故障状态下无着火风险。UL 认证：UL 1434（热敏电阻）、UL 94（阻燃等级 V-0/V-1/V-2）。RoHS/REACH：材料合规。GR-63-CORE（NEBS）：电信设备耐热性要求。",
      },
      {
        q: "热管工作原理及其极限（毛细极限、沸腾极限等）。",
        a: "热管：密封管壳内壁附毛细芯，工质（水/氨/甲醇）在蒸发端吸热汽化→蒸汽压差驱动流向冷凝端→放热凝结→毛细力驱动液态回流。有效导热系数可达 5000~100000 W/m·K。工作极限：① 毛细极限——毛细力不足以克服重力和流动阻力。② 沸腾极限——热流过高气泡阻塞毛细芯。③ 声速极限——蒸汽速度达声速。④ 携带极限——高速蒸汽撕扯液滴。⑤ 粘性极限——低温粘性阻力主导。设计准则：弯曲半径 ≥ 3×管径，填充率 10~30%。",
      },
      {
        q: "散热器噪声控制方法及声学优化。",
        a: "噪声来源：风扇气动噪声 + 翅片振动 + 气流啸声。控制方法：① 低噪声扇叶。② PWM 调速（噪声 ∝ v^5~6）。③ 避频避免共振。④ 翅片入口倒角（R0.5mm 降噪 2~3dB）。⑤ 风道平滑设计。⑥ 吸声材料。⑦ 隔振橡胶。目标噪声：消费级 < 40dBA，工业级 < 55dBA。",
      },
      {
        q: "相变材料（PCM）在热设计中的应用。",
        a: "相变材料利用固-液相变吸收潜热（150~250 J/g）。常用 PCM：石蜡基（熔点 40~60°C）、脂肪酸、盐水合物。应用：① 瞬时峰值吸收（CPU Turbo Boost）。② 温度缓冲（户外设备）。③ 无风扇设计蓄热。④ 电池热管理。限制：导热系数低（0.2~0.5 W/m·K），需石墨/金属泡沫增强。",
      },
      {
        q: "热电制冷器（TEC）的原理、选型及应用限制。",
        a: "TEC 利用帕尔贴效应：直流电通过 P/N 半导体电偶时，一端吸热一端放热。选型参数：制冷量 Qc、最大温差 ΔTmax（60~70°C）、COP（0.3~1.0）。应用：激光温控、传感器冷却、局部热点冷却。限制：COP 低、热端散热要求高、成本高、需防结露。",
      },
      {
        q: "IGBT/功率模块的热设计特殊考虑。",
        a: "关键点：① 多芯片热耦合——用 Foster/Cauer 网络描述瞬态热阻抗 Zth。② 基板热膨胀匹配——DBC 陶瓷基板 CTE 接近 Si。③ 双面散热。④ 功率循环寿命——ΔTj 每降 10°C 寿命延长 2x。⑤ 结温监测——用 Vce(sat) 作 TSP。⑥ 界面材料——高端用烧结银（> 200 W/m·K）。",
      },
      {
        q: "电池热管理系统（BTMS）的关键设计要点。",
        a: "锂离子电池最佳工作温度 15~35°C，模组温差 < 5°C。冷却方式：自然冷却（<5W）、风冷（5~20W）、液冷（>20W）、浸没。设计要点：① 方形电池用冷板，圆柱电池用蛇形管。② PTC 低温加热。③ 气凝胶隔热防热蔓延。④ 防爆阀排气。⑤ 电化学-热-流体多场耦合仿真。",
      },
    ],
  },
];

export default function InterviewPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 text-sm text-accent-amber font-mono mb-2">
        <BookOpen className="w-4 h-4" />
        面试专区
      </div>
        <h1 className="text-4xl font-bold text-white mb-3">热设计面试题库</h1>
      <p className="text-gray-400 text-lg mb-8">精选热设计工程师面试高频问题，覆盖传热学、热力学、流体力学、CFD 仿真及散热设计五大模块，包含 30+ 详细解答。</p>

      {/* 难度等级说明 */}

      {/* Top 10 Section */}
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <Star className="w-5 h-5 text-accent-amber" />
          <h2 className="text-xl font-bold text-white">高频面试题 Top 10</h2>
        </div>
        <div className="space-y-3">
          {top10.map((item, i) => (
            <div key={i} className="bg-tech-800/50 border border-accent-amber/20 rounded-xl p-4 hover:border-accent-amber/40 transition-all">
              <details className="group">
                <summary className="flex items-start gap-3 cursor-pointer list-none">
                  <div className="w-6 h-6 rounded-full bg-accent-amber/10 text-accent-amber text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-white">{item.q}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 shrink-0 mt-1 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="mt-3 ml-9 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </details>
            </div>
          ))}
        </div>
      </section>

      {/* Group Sections */}
      <div className="space-y-12">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <section key={group.title}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-8 h-8 rounded-lg ${group.color.replace("text", "bg")}/10 flex items-center justify-center ${group.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-xl font-bold text-white">{group.title}</h2>
              </div>
              <div className="space-y-4">
                {group.questions.map((item, i) => (
                  <div key={i} className="bg-tech-800/50 border border-tech-600/30 rounded-xl p-5">
                    <details className="group">
                      <summary className="flex items-start gap-3 cursor-pointer list-none">
                        <HelpCircle className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <span className="text-sm font-medium text-white">{item.q}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-500 shrink-0 mt-1 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="mt-4 ml-8 p-4 bg-tech-900/50 rounded-lg border border-tech-600/20">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-accent-green shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">{item.a}</p>
                        </div>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center p-8 bg-tech-800/30 border border-tech-600/20 rounded-xl">
        <BookOpen className="w-8 h-8 text-accent-cyan mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-white mb-2">AI 模拟面试（即将上线）</h3>
        <p className="text-sm text-gray-400 mb-2">AI 模拟热设计工程师真实面试场景，覆盖 30+ 核心问题</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4 text-xs text-gray-500">
          <span className="px-2 py-1 rounded bg-tech-700/50">传热学</span>
          <span className="px-2 py-1 rounded bg-tech-700/50">热力学</span>
          <span className="px-2 py-1 rounded bg-tech-700/50">流体力学</span>
          <span className="px-2 py-1 rounded bg-tech-700/50">CFD 仿真</span>
          <span className="px-2 py-1 rounded bg-tech-700/50">热设计</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-tech-600/30 text-gray-400 text-sm">开发中</span>
      </div>
    </div>
  );
}
