export interface StaticProduct {
  slug: string;
  name: string;
  code: string;
  category: "grilles-registers" | "louvers" | "dampers";
  desc: string;
  image: string;
  badge?: string;
}

export const staticProductsList: StaticProduct[] = [
  {
    slug: "ceiling-diffusers",
    name: "Ceiling Diffusers",
    code: "SAD / RAD Series",
    category: "grilles-registers",
    desc: "Omnidirectional air induction grids maintaining uniform room temperature with quiet acoustics.",
    image: "/images/products/ceiling-diffusers.png",
    badge: "POPULAR"
  },
  {
    slug: "supply-return-air-registers-grilles",
    name: "Supply & Return Air Registers & Grilles",
    code: "SRG-Series",
    category: "grilles-registers",
    desc: "Single and double deflection grilles with adjustable blades and optional opposed blade dampers.",
    image: "/images/products/supply-return-air-registers-grilles-and-fresh-air-grilles.png",
    badge: "STANDARD"
  },
  {
    slug: "linear-bar-grilles",
    name: "Linear Bar Grilles",
    code: "LBG-Series",
    category: "grilles-registers",
    desc: "Extruded aluminum architectural floor and sidewall linear profiles with 0° and 15° deflection.",
    image: "/images/products/linear-bar-grilles.png",
    badge: "BEST SELLER"
  },
  {
    slug: "linear-slot-diffusers",
    name: "Linear Slot Diffusers",
    code: "LSD-Series",
    category: "grilles-registers",
    desc: "Continuous linear ceiling slots (1–8 slots) designed for architectural integration and high airflow.",
    image: "/images/products/linear-slot-diffusers.png",
    badge: "TRENDING"
  },
  {
    slug: "flowbar-slot-diffusers",
    name: "Flowbar Slot Diffusers",
    code: "FBD-Series",
    category: "grilles-registers",
    desc: "High-throw architectural linear slot diffusers with aerodynamic jet airflow pattern control.",
    image: "/images/products/flowbar-slot-diffusers.png",
    badge: "ARCHITECTURAL"
  },
  {
    slug: "round-ceiling-diffusers",
    name: "Round Ceiling Diffusers",
    code: "RCD-Series",
    category: "grilles-registers",
    desc: "Circular air terminals providing uniform 360-degree air patterns with removable inner cores.",
    image: "/images/products/round-ceiling-diffusers.png",
    badge: "NEW"
  },
  {
    slug: "jet-diffusers",
    name: "Jet Diffusers",
    code: "JD-Series",
    category: "grilles-registers",
    desc: "Long-throw directional eyeball jet nozzles engineered for airports, atriums, and commercial malls.",
    image: "/images/products/jet-diffusers.png",
    badge: "HIGH CAPACITY"
  },
  {
    slug: "disc-valves",
    name: "Disc Valves",
    code: "DV-Series",
    category: "grilles-registers",
    desc: "Adjustable core supply and exhaust circular valves for precise airflow balancing in washrooms and pantries.",
    image: "/images/products/disc-valves.png",
    badge: "EXHAUST"
  },
  {
    slug: "door-transfer-grilles",
    name: "Door Transfer Grilles",
    code: "DTG-Series",
    category: "grilles-registers",
    desc: "Zero-sight chevron blade partition grilles for room-to-room air transfer without compromising privacy.",
    image: "/images/products/door-transfer-grilles.png",
    badge: "ACOUSTIC"
  },
  {
    slug: "egg-crate-grilles-registers-diffusers",
    name: "Egg-Crate Grilles & Registers",
    code: "ECG-Series",
    category: "grilles-registers",
    desc: "High free-area aluminum grid cores designed for maximum return air collection and low pressure loss.",
    image: "/images/products/egg-carate-grilles.png",
    badge: "RETURN AIR"
  },
  {
    slug: "external-louvers",
    name: "External Weather Louvers",
    code: "EWL-Series",
    category: "louvers",
    desc: "45-degree fixed weather-resistant exterior louvers with rear pest wire mesh for building facades.",
    image: "/images/products/external-louvers.png",
    badge: "WEATHERPROOF"
  },
  {
    slug: "sand-trap-louvers",
    name: "Sand Trap Louvers",
    code: "STL-Series",
    category: "louvers",
    desc: "Heavy-duty self-emptying vertical blades engineered for Gulf desert sand and dust separation.",
    image: "/images/products/sand-trap-louvers.png",
    badge: "HEAVY DUTY"
  },
  {
    slug: "volume-control-dampers",
    name: "Volume Control Dampers",
    code: "VCD-Series",
    category: "dampers",
    desc: "Opposed and parallel aerofoil aluminum blade dampers for precise duct volume and static pressure balance.",
    image: "/images/products/volume-control-dampers.png",
    badge: "HVAC CONTROL"
  },
  {
    slug: "non-return-dampers",
    name: "Non-Return Dampers",
    code: "NRD-Series",
    category: "dampers",
    desc: "Automatic gravity-actuated backdraft dampers for preventing backflow and backdraft in exhaust loops.",
    image: "/images/products/gravity-louver.png",
    badge: "AUTOMATIC"
  }
];