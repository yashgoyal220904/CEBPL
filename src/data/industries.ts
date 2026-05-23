import { 
  Cpu,
  Hotel,
  Building2,
  Activity,
  Factory,
  ShoppingBag,
  LucideIcon 
} from "lucide-react";

export interface IndustryItem {
  id: string;
  title: string;
  icon: LucideIcon; // Lucide Icon reference
  description: string;
  subSectors: string[];
  keyOfferings: string[];
}

export const industriesData: IndustryItem[] = [
  {
    id: "it-sector",
    title: "IT Sector",
    icon: Cpu,
    description: "High-density power distribution, server-rack structured cabling, precision cooling power lines, and dual-active source UPS systems designed for software technology parks, enterprise server farms, and data centers.",
    subSectors: ["Data Center Parks", "Software Tech Parks", "Network Operations Centers", "Corporate IT Headquarters"],
    keyOfferings: ["Modular busway riser systems", "Double-conversion online UPS systems", "Isolated copper earth grids", "Precision cooling machinery feeds"]
  },
  {
    id: "hotel-sector",
    title: "Hotel Sector",
    icon: Hotel,
    description: "Intelligent ambient lighting loops, guestroom automation panels, commercial kitchen power outlets, central HVAC chiller wiring, and fast automatic mains failure (AMF) backup changeover grids.",
    subSectors: ["5-Star Hotels & Resorts", "Luxury Service Apartments", "Convention & Expo Centers", "Premium Dining Outlets"],
    keyOfferings: ["Guestroom control panel integrations", "Chilled water plant electricals", "Ballroom audio-visual power loops", "Standby DG synchronization panels"]
  },
  {
    id: "industry-sector",
    title: "Industry Sector",
    icon: Building2,
    description: "High-voltage and medium-voltage substation engineering, high-capacity copper/aluminum busbar runs, and extreme-condition cabling engineered to sustain continuous process plants with zero downtime.",
    subSectors: ["Heavy Engineering Units", "Chemical & Process Plants", "Cement & Fertilizer Works", "Metal Production Units"],
    keyOfferings: ["HT/LT substation installation", "Busbar trunking systems (up to 4000A)", "Plant lightning protection networks", "Industrial earthing loops & pits"]
  },
  {
    id: "hospital-sector",
    title: "Hospital Sector",
    icon: Activity,
    description: "Highly-isolated, medical-grade electrical layouts designed to meet strict healthcare standards, ensuring clean, continuous electricity for surgical theatres, intensive care blocks, and diagnostic scanners.",
    subSectors: ["Multispecialty Hospitals", "Diagnostic Scanning Centers", "Biomedical & Research Labs", "Emergency Care Centers"],
    keyOfferings: ["Isolated Power Systems (IPS)", "Active harmonic filtration panels", "Operating room isolated grounding", "Dual-redundant ATS backup systems"]
  },
  {
    id: "manufacturing-sector",
    title: "Manufacturing Sector",
    icon: Factory,
    description: "Robust, heavy-duty electrical distributions engineered to sustain high-current machinery, automation assembly lines, raw material processing feeders, and manufacturing sheds with optimal power factor management.",
    subSectors: ["Automotive Factories", "FMCG Processing Units", "Electronics Assembly Yards", "Packaging & Warehousing Units"],
    keyOfferings: ["Main Power Control Centers (PCC)", "Motor Control Centers (MCC) & VFDs", "Automatic Power Factor Correction (APFC)", "Machine feeder terminations"]
  },
  {
    id: "retail-sector",
    title: "Retail Sector",
    icon: ShoppingBag,
    description: "High-end aesthetic accent lighting grids, multi-tenant billing meter boards, commercial HVAC power interfaces, and secure concealed conduit runs designed for massive shopping malls and flagship showrooms.",
    subSectors: ["Shopping Malls & Plazas", "Luxury Brand Showrooms", "Hypermarkets & Department Stores", "Commercial Retail Outlets"],
    keyOfferings: ["Concealed conduit & wiring loops", "Multi-source utility meter boards", "Accent & aesthetic lighting systems", "Emergency escape route fire systems"]
  }
];
