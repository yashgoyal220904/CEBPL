import { 
  Zap, 
  Building, 
  Factory, 
  Cable, 
  Cpu, 
  Activity, 
  Wrench, 
  Layers, 
  ShieldCheck, 
  Network, 
  Briefcase, 
  Lightbulb 
} from "lucide-react";

import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: LucideIcon; // Lucide Icon component reference
  features: string[];
  specs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ht-lt-works",
    title: "HT/LT Electrical Works",
    shortDesc: "High Tension & Low Tension line installations, substations, and overhead line networks up to 33KV/11KV.",
    longDesc: "We specialize in complete High Tension (HT) and Low Tension (LT) electrical installation services. Our capabilities cover setting up HT yards, designing overhead/underground distribution lines, installing HT poles, vacuum circuit breakers (VCB), and ring main units (RMU). We ensure fully compliant grid connections with high safety standards and minimal transmission loss.",
    icon: Zap,
    features: [
      "Substation installation up to 33KV/11KV",
      "HT/LT overhead line networks and cabling",
      "Vacuum Circuit Breaker (VCB) & SF6 installation",
      "HT panels, metering kiosks, and protection systems",
      "Liaisoning and statutory approvals with state electricity boards"
    ],
    specs: [
      "Voltage level support: 415V to 33KV",
      "Equipment: VCB, RMU, Isolators, Lightning Arrestors",
      "Standards compliance: Indian Electricity Rules (IE Rules), IS/IEC standards"
    ]
  },
  {
    id: "internal-external-electrification",
    title: "Internal & External Electrification",
    shortDesc: "Complete power cabling, interior/exterior lighting, earthing networks, and structural panels.",
    longDesc: "CEBPL delivers robust internal and external electrification services tailored to architectural blueprints. From sophisticated interior layout wiring, energy-efficient LED lighting schemes, to perimeter area lighting and safety earthing networks, we provide a unified electrical nervous system for any property.",
    icon: Building,
    features: [
      "Conduit laying and internal wire pulling",
      "Sleek architectural lighting & smart automation integration",
      "External street lighting, high masts, and facade lighting",
      "Maintenance-free chemical earthing and lightning protection",
      "Distribution boards and final sub-circuit setups"
    ],
    specs: [
      "Cabling types: FRLS (Flame Retardant Low Smoke), ZHFR",
      "Earthing: Copper plate, GI plate, Chemical electrode",
      "Protection: RCBO, MCB, RCCB configuration"
    ]
  },
  {
    id: "industrial-installations",
    title: "Industrial Electrical Installations",
    shortDesc: "Heavy-duty industrial electrification, plant machinery wiring, and motor control centers.",
    longDesc: "Heavy machinery and continuous production plants demand extreme reliability. We design and install robust industrial electrical networks featuring power distribution, machinery feeders, MCC panels, earthing pits, and instrumentation wiring for steel plants, manufacturing hubs, and chemical industries.",
    icon: Factory,
    features: [
      "Plant-wide power distribution network design",
      "Motor Control Centers (MCC) & Variable Frequency Drives (VFD)",
      "Machinery power feed connections and bus-duct trunking",
      "Hazardous area flame-proof electrical installations",
      "PLC / SCADA instrumentation and control wiring"
    ],
    specs: [
      "Capacity handling: Multi-Megawatt (MW) industrial loads",
      "Safety: IP55/IP65 ingress protection enclosures",
      "Cooling: Forced air ventilation and copper busbar rating up to 6300A"
    ]
  },
  {
    id: "cable-laying-termination",
    title: "Cable Laying & Termination",
    shortDesc: "Trench and tray routing for HT/LT armored power and control cables, with premium joint kits.",
    longDesc: "Structured cable routing is crucial for thermal management and fault prevention. CEBPL performs professional cable laying in underground trenches, overhead ladders, and perforated trays. We deploy certified jointers for HT/LT straight-through joints and end terminations using heat-shrinkable/cold-applied kits.",
    icon: Cable,
    features: [
      "Armored power & control cable laying (XLPE/PVC)",
      "Trenching, excavation, and structural cable tray setups",
      "Certified HT cable termination (up to 33KV) with premium kits",
      "Cable jointing, glanding, and lugging using hydraulic tooling",
      "Insulation resistance (Megger) and high-voltage testing"
    ],
    specs: [
      "Cables handled: Al/Cu conductor, XLPE/PVC insulated armored cables",
      "Kit brands: Raychem, 3M, or equivalent approved makes",
      "Testing: Megger, VLF (Very Low Frequency) test ready"
    ]
  },
  {
    id: "transformer-installation",
    title: "Transformer Installation",
    shortDesc: "Erection, structural positioning, dry-type/oil-cooled transformer testing, and commissioning.",
    longDesc: "Transformers are the core of power infrastructure. We handle the complete logistics, structural erection, vacuum filter filtration, testing, and commissioning of oil-cooled and dry-type cast resin transformers, including auxiliary components like OLTC and conservator tanks.",
    icon: Cpu,
    features: [
      "Oil-cooled and dry-type (CRT) transformer installation",
      "Transformer foundation coordination, structural rail erection",
      "Oil filtration, dehydration, and dielectric strength testing",
      "Cable box connection or bus-duct integration",
      "Buchholz relay, marshalling box, and safety protection wiring"
    ],
    specs: [
      "Ratings: 100 KVA to 10 MVA and above",
      "Oil testing: BDV (Breakdown Voltage) test minimum 60KV",
      "Types: Outdoor step-down distribution, Indoor dry cast resin"
    ]
  },
  {
    id: "testing-commissioning",
    title: "Testing & Commissioning",
    shortDesc: "Pre-commissioning electrical testing, relay calibration, insulation tests, and board approvals.",
    longDesc: "Before power is switched on, rigor is everything. CEBPL provides third-party and pre-commissioning testing services. Our engineers conduct insulation testing, relay calibration, earth resistance diagnostics, breaker contact resistance, and harmonic analysis to ensure safety and system stability.",
    icon: Activity,
    features: [
      "Insulation resistance testing (Megger) of cables & transformers",
      "Protection relay testing & CT/PT polarity check",
      "Contact resistance testing of circuit breakers",
      "Earth loop impedance and earth pit resistance measurement",
      "Preparation of test reports for Electrical Inspectorate approvals"
    ],
    specs: [
      "Equipment used: Calibrated primary/secondary injection kits, Megger, Earth testers",
      "Certification: Testing certified under ISO/IEC protocols",
      "Liaison: Comprehensive support for CEIG (Chief Electrical Inspector to Govt.) approvals"
    ]
  },
  {
    id: "electrical-maintenance",
    title: "Electrical Maintenance",
    shortDesc: "Preventive maintenance, thermal imaging, shutdown audits, and 24/7 emergency support.",
    longDesc: "Minimize costly shutdowns through structured maintenance. We offer tailored Annual Maintenance Contracts (AMC) incorporating thermal imaging of panels (to detect hot spots), transformer oil filtration, breaker servicing, and earth pit recharging, alongside rapid response emergency callouts.",
    icon: Wrench,
    features: [
      "Annual Maintenance Contracts (AMC) for commercial & industrial plants",
      "Infrared thermography audits for hotspot detection in panels",
      "Transformer oil filtration, top-up, and regular BDV tests",
      "Breaker overhauling and contact lubrication",
      "24/7 technical breakdown support and emergency troubleshooting"
    ],
    specs: [
      "Response time: Within 2 to 4 hours for AMC partners",
      "Diagnostics: Thermal camera profiling, oil gas analysis (DGA)",
      "Compliance: Standard maintenance logbooks mapped to ISO ISO-9001 guidelines"
    ]
  },
  {
    id: "power-distribution",
    title: "Power Distribution Systems",
    shortDesc: "Design and fabrication of AMF, APFC, PCC, and MCC panels, with advanced busbar systems.",
    longDesc: "Stable power routing starts at the panels. We supply, install, and commission state-of-the-art power panels, including Power Control Centers (PCC), Motor Control Centers (MCC), Automatic Power Factor Correction (APFC) panels to avoid utility penalties, and Automatic Mains Failure (AMF) panels for seamless generator transition.",
    icon: Layers,
    features: [
      "PCC (Power Control Center) panel up to 6300A installation",
      "APFC panels with high-quality capacitor banks and detuned reactors",
      "AMF (Automatic Mains Failure) panels for diesel generator integration",
      "Busbar trunking systems (Sandwich type) for vertical & horizontal routing",
      "Dual source billing and computerized energy monitoring systems"
    ],
    specs: [
      "Busbar materials: 99.9% pure ETP grade Copper or EC grade Aluminum",
      "Short circuit rating: Up to 50KA / 65KA for 1 second",
      "Enclosures: CRCA sheet steel, powder-coated, dust- & vermin-proof"
    ]
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Electrical Projects",
    shortDesc: "End-to-end design, procurement, execution, testing, and handover of complex electrical systems.",
    longDesc: "Single-point accountability for your engineering needs. CEBPL coordinates EPC turnkey projects from load calculation, conceptual design, component procurement, site execution, regulatory liaisoning, to final commissioning and hand-over, saving clients management overheads.",
    icon: ShieldCheck,
    features: [
      "Design-to-Delivery responsibility (EPC model)",
      "Equipment procurement from top-tier approved manufacturers",
      "Detailed project scheduling, resource mapping, and safety management",
      "Coordinated civil foundations, structural structures, and electrical networks",
      "Smooth handover with complete documentation, drawings (As-Built), and training"
    ],
    specs: [
      "Project management: Primavera P6 / MS Project tracking",
      "Procurement quality: Core partners include ABB, Siemens, Schneider, L&T, Polycab",
      "Safety: Zero LTI (Lost Time Injury) target execution"
    ]
  },
  {
    id: "infrastructure-development",
    title: "Infrastructure Development",
    shortDesc: "Mass electrical distribution for highway lighting, smart city infrastructure, and utility lines.",
    longDesc: "Powering smart developments. We design and build electrical networks for highways, smart cities, townships, and industrial parks. This includes high-mast lights, underground utility cabling, ring networks, ring distribution, and smart metering nodes.",
    icon: Network,
    features: [
      "Highway electrification and smart street lighting networks",
      "Underground infrastructure cabling for modern smart cities",
      "Packaged substations (CSS) for public utility distributions",
      "Aviation obstruction lighting and earthing systems",
      "Integration of solar power feed-ins to infrastructure grids"
    ],
    specs: [
      "Substations: Compact Packaged Substations (CSS) up to 2000 KVA",
      "Poles: Octagonal hot-dip galvanized poles, high-mast towers (15m to 40m)",
      "Controls: Timer/Photocell based automatic astronomical switches"
    ]
  },
  {
    id: "government-projects",
    title: "Government Projects",
    shortDesc: "Govt-approved electrical contracting, utility grid extensions, institutional complexes, and tenders.",
    longDesc: "As an approved government contractor, CEBPL works with state electricity boards, municipal corporations, public works departments, and central ministries. We deliver reliable public grid extensions, electrification for government hospitals, schools, and institutional complexes in strict compliance with administrative bylaws and schedules.",
    icon: Briefcase,
    features: [
      "Government approved contractor credentials",
      "Grid extensions, rural electrification, and feeder separations",
      "Institutional complex electrification (Govt. offices, central colleges)",
      "Strict compliance with Public Works Department (PWD) specifications",
      "Audited billing, transparent safety procedures, and quality compliance logs"
    ],
    specs: [
      "Tender execution: Expertise in e-procurement guidelines and public billing systems",
      "Quality audits: Regular inspection by third-party government agencies (WAPCOS, RITES, etc.)",
      "Bylaws: Bureau of Energy Efficiency (BEE) and ECBC compliant designs"
    ]
  },
  {
    id: "commercial-electrification",
    title: "Commercial Electrical Works",
    shortDesc: "Modern office park wiring, shopping mall electrification, UPS backup distribution, and safety grids.",
    longDesc: "High-density commercial spaces require high-security electrical loops. We execute complete fit-out wiring, UPS/DG emergency power supply distribution, clean power lines for data servers, architectural landscape illumination, and structured fire alarm integrations for office buildings, malls, and hotels.",
    icon: Lightbulb,
    features: [
      "Complete electrical fit-outs for IT parks, corporate towers, and retail hubs",
      "UPS power distribution, static transfer switches, and backup bypass wiring",
      "Structured data cabling, server room panels, and precise cooling controls",
      "Fire detection, emergency evacuation lighting, and access control integrations",
      "Energy management systems to optimize operational carbon footprint"
    ],
    specs: [
      "Emergency backup: Automatic transfer within milliseconds (static bypass/UPS)",
      "Standards: NBC (National Building Code of India) compliant fire and electrical layouts",
      "Power quality: Low harmonics filters, surge protection devices (SPD Class I & II)"
    ]
  }
];
