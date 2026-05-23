export interface ProjectItem {
  id: string;
  title: string;
  category: "industrial" | "commercial" | "infrastructure" | "government";
  client: string;
  location: string;
  completionDate: string;
  scopeOfWork: string[];
  description: string;
  challenges: string;
  solutions: string;
  stats: { label: string; value: string }[];
  imagePlaceholder: string; // Used to generate or display placeholder visuals
}

export const projectsData: ProjectItem[] = [
  {
    id: "jewar-airport-project",
    title: "Noida International Airport (Jewar Airport) Phase-1",
    category: "infrastructure",
    client: "Tata Projects / Zurich Airport International",
    location: "Jewar, Uttar Pradesh, India",
    completionDate: "Ongoing (Phase-1 Target 2026)",
    scopeOfWork: [
      "Erection of 33/11KV Substation and main distribution loops",
      "Laying of high-tension (HT) armored XLPE cables across the terminal site",
      "Installation of compact packaged substations and multi-source AMF panels",
      "Testing, commissioning, and safety clearance for runway lighting feed loops",
      "Chief Electrical Inspector (CEIG) compliance and safety certification coordination"
    ],
    description: "CEBPL is proud to be part of the turnkey electrical contracting for Noida International Airport (Jewar Airport) Phase-1. Our scope spans routing high-capacity power lines from the primary grid interface to terminal buildings, runway feeder substations, and support offices.",
    challenges: "Executing works across a massive active infrastructure runway footprint required strict safety certifications, thermal-derated cable sizing for high ambient environments, and rigorous compliance checks.",
    solutions: "We deployed specialized high-efficiency cast resin transformers and compact modular switchgear. Our field engineers coordinated with airport design cells to complete cable tray routing and grid connections smoothly.",
    stats: [
      { label: "Voltage Level", value: "33 KV / 11 KV" },
      { label: "HT Cable Laid", value: "20+ KM" },
      { label: "Safety Milestone", value: "120,000 Safe Hours" },
      { label: "Phase Status", value: "On Schedule" }
    ],
    imagePlaceholder: "airport_terminal_substation"
  },
  {
    id: "infosys-project",
    title: "Infosys Development Center Corporate Campus",
    category: "commercial",
    client: "Infosys Limited",
    location: "Noida Sector 85, India",
    completionDate: "December 2025",
    scopeOfWork: [
      "Complete internal and external electrification for Software Blocks A & B",
      "Erection of vertical sandwich-type copper busway risers (3200A)",
      "Erection of smart Automatic Power Factor Correction (APFC) panels (1500 KVAR)",
      "Laying of dual-redundant server-room UPS lines and grounding loops",
      "Concealed grid wiring and energy-efficient LED automation installations"
    ],
    description: "Turnkey electrical engineering services for the premium Infosys Software Development Center. The design focuses on high energy efficiency, low line drops, and seamless grid-generator transfer capability to ensure continuous server operations.",
    challenges: "Ensuring total harmonic distortion (THD) below 3% to protect sensitive mainframe IT equipment, while keeping vertical voltage drops on high-rise risers minimal.",
    solutions: "We integrated custom active harmonic filters and vertical copper sandwich bus ducts. We also integrated smart AMF transfer panels to reduce backup power switchover times to under 6 seconds.",
    stats: [
      { label: "Area Electrified", value: "1.2M SqFt" },
      { label: "Busbar Rating", value: "3200 Amp" },
      { label: "APFC Rating", value: "1500 KVAR" },
      { label: "Switchover Time", value: "6 Seconds" }
    ],
    imagePlaceholder: "it_park_commercial_electrification"
  }
];
