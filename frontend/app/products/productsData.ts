// frontend/app/products/productsData.ts

export interface StaticProduct {
  slug: string;
  name: string;
  code: string;
  category: string;
  desc: string;
  image: string; 
  features: string[];
  dimensions: string[];
  kFactors: string;
}

export const staticProductsList: StaticProduct[] = [
  {
    slug: "non-return-dampers-flanged",
    name: "Non-Return Damper (Flanged)",
    code: "NRD-F-Series",
    category: "dampers",
    desc: "Heavy-duty flanged non-return dampers calibrated strictly for inline duct arrays to stop back-flow pressure loops and isolate system nodes.",
    image: "/images/products/non-return-damper-flanged.png",
    features: [
      "Air-operated automatic open/close",
      "Robust leak-resistant flange connection",
      "Aluminum blades (0.5 mm or 0.7 mm)"
    ],
    dimensions: ["Custom industrial duct dimensions manufactured on demand"],
    kFactors: "Class 2 low leak threshold matrix certified"
  },
  {
    slug: "ceiling-housing-hepa-filter",
    name: "Ceiling Housing with HEPA Filter",
    code: "CH-HEPA-Series",
    category: "filters",
    desc: "Premium grade terminal cleanroom filtration housings designed to seal high-efficiency filters directly to ceiling grids for flawless air purification cycles.",
    image: "/images/products/ceiling-housing-with-hepa-filter.png",
    features: [
"HEPA filtration (H10–H14)",
  "ULPA filtration up to U16 (AFV-8G)",
  "85%–99.995% filtration efficiency",
  "Captures particles down to 0.3 μm"
    ],
    dimensions: [ "Custom sizes available"],
    kFactors: "99.99% micro-particle collection tracking rating"
  },
  {
    slug: "bypass-terminal-units",
    name: "Bypass Terminal Unit (Manual Bypass)",
    code: "BPTU-M-Series",
    category: "grilles-registers",
    desc: "Acoustically insulated flow bypass terminals built with top-mounted mechanical calibration indicators for instant zone pressure routing.",
    image: "/images/products/bypass-terminal-unit.png",
    features: [
   "Constant fan airflow",
  "24–1900 LPS airflow capacity",
  "Pneumatic, Electrical & ACS controls",
  "Low noise performance",
  "Adjustable minimum airflow (20%)"
    ],
    dimensions: ["Custom sizes available"],
    kFactors: "High capacity pressure attenuation response limits"
  },
  {
    slug: "volume-control-dampers",
    name: "Volume Control Dampers",
    code: "VCD-Series",
    category: "dampers",
    desc: "Heavy-duty opposing blade dampers designed for high-precision volumetric control and pressure balancing across main duct nodes.",
    image: "/images/products/volume-control-dampers.png",
    features: [
   "Opposed & Parallel Blade designs",
  "Rectangular & Circular variants",
  "Galvanized steel construction",
  "Aluminum airfoil blades",
  "Smooth PVC/Nylon bearings"
    ],
    dimensions: ["100 × 100 mm",
  "Up to 2000 × 1500 mm",
  "Round Sizes Available",
  "Custom sizes available"
],

    kFactors: ["Airflow Regulation",
  "Pressure Control",
  "Leakage Performance"]
  },
  {
    slug: "ceiling-diffusers",
    name: "Ceiling Diffusers",
    code: "SAD / RAD Series",
    category: "grilles-registers",
    desc: "Engineered for supreme omnidirectional air induction grids. These systems maintain uniform temperature mix parameters across deep corporate layouts while throwing whisper-quiet acoustics.",
    image: "/images/products/ceiling-diffusers.png",
    features: [
      "1, 2, 3 & 4-way airflow",
      "Extruded aluminum construction",
      "Low noise & pressure drop",
      "Optional OBD & accessories"
    ],
    dimensions: ["150 x 150 mm", "225 x 225 mm", "300 x 300 mm", "375 × 375 mm", "450 x 450 mm", "600 × 600 mm"],
    kFactors: "0.014 to 0.082 m/s pressure drag rating"
  },
  {
    slug: "supply-return-air-registers-grilles",
    name: "Supply & Return Air Registers",
    code: "SRG-Series",
    category: "grilles-registers",
    desc: "Dual directional utility grilles equipped with an opposing blade damper matrix for instant air flow volume control.",
    image: "/images/products/supply-return-air-registers-grilles-and-fresh-air-grilles.png",
    features: [
      "Single & Double Deflection models",
      "Adjustable horizontal & vertical blades",
      "Optional Opposed Blade Damper (OBD)"
    ],
    dimensions: [
      "150 × 100 mm",
      "225 × 150 mm",
      "300 × 150 mm",
      "300 × 300 mm",
      "450 × 150 mm",
      "450 × 300 mm",
      "600 × 300 mm",
      "Custom sizes available"
    ],
    kFactors: "Class 1 Performance pressure drag rating"
  },
  {
    slug: "linear-slot-diffusers",
    name: "Linear Slot Diffusers",
    code: "LSD-Series",
    category: "grilles-registers",
    desc: "Architectural linear profiles delivering continuous geometric integration in premium plaster ceilings. Ideal for high-capacity supply and extraction workflows.",
    image: "/images/products/linear-slot-diffusers.png",
    features: [
      "1–8 slot configurations",
      "Adjustable airflow direction",
      "Hit & Miss Damper (Optional)",
      "Plenum Box compatible",
      "Extruded aluminum construction",
      "Continuous linear installation",
      "Low noise operation",
      "Powder-coated or anodized finish"
    ],
    dimensions: [
      "1 Slot",
      "2 Slots",
      "3 Slots",
      "4 Slots",
      "5 Slots",
      "6 Slots",
      "7 Slots",
      "8 Slots",
      "Custom lengths up to 2000 mm"
    ],
    kFactors: "Airflow Performance"
  },
  {
    slug: "round-ceiling-diffusers",
    name: "Round Ceiling Diffusers",
    code: "RCD-Series",
    category: "grilles-registers",
    desc: "Circular structural air terminals providing continuous horizontal 360-degree air pattern blankets with high induction rates.",
    image: "/images/products/round-ceiling-diffusers.png",
    features: [
      "Removable core configuration panels for rapid submittal checks",
      "High induction rate layout profiles to counter cold draft zones",
      "Pure Extruded Aluminium 6063 alloy foundation"
    ],
    dimensions: ["150 mm", "200 mm", "250 mm", "300 mm", "350 mm"],
    kFactors: "Rapid room temperature mixing matrix verified"
  },
  {
    slug: "disc-valves",
    name: "Disc Valves",
    code: "DV-Series",
    category: "filters",
    desc:  "Round ceiling diffuser designed for uniform radial air distribution with low noise and pressure drop for supply and return air applications.",
    image: "/images/products/disc-valves.png",
    features: [
 "Uniform radial airflow",
  "Low noise & pressure drop",
  "High-quality aluminum construction",
  "Butterfly damper (Supply model)",
  "Suitable for supply & return air",
  "Easy airflow adjustment"
    ],
    dimensions: [  "134 mm",
  "190 mm",
  "247 mm",
  "303 mm",
  "362 mm",
  "416 mm",
  "469 mm",
  "521 mm",
  "573 mm",
  "625 mm"],
    kFactors: "Micro-calibrated air distribution grids"
  },
  {
    slug: "linear-bar-grilles",
    name: "Linear Bar Grilles",
    code: "LBG-Series",
    category: "grilles-registers",
    desc: "Architectural floor and sidewall linear terminals delivering clean geometric integration and supreme vertical deflection controls.",
    image: "/images/products/linear-bar-grilles.png",
    features: [
      "0°, 15° one-way & 15° two-way airflow",
      "Continuous linear installation",
      "Low noise & low pressure drop",
      "Extruded aluminum construction",
      "Adjustable rear aerofoil blades"
    ],
    dimensions: [
      "1000 × 50 mm",
      "1000 × 100 mm",
      "1000 × 150 mm",
      "1000 × 200 mm",
      "1000 × 250 mm",
      "1000 × 300 mm",
      "Custom lengths available up to 3000 mm"
    ],
    kFactors: "Whisper-quiet structural acoustics"
  },
  {
    slug: "jet-diffusers",
    name: "Jet Diffusers",
    code: "JD-Series",
    category: "grilles-registers",
    desc:    "High-performance sand trap louvre designed to remove dust and sand from incoming air while maintaining low pressure drop.",
    image: "/images/products/jet-diffusers.png",
    features: [
 "Long throw up to 25 m",
  "Suitable for cooling & heating",
  "Adjustable airflow direction",
  "Wall or ceiling mounting",
  "Aluminum construction"
    ],
    dimensions: [  "125 mm",
  "150 mm",
  "160 mm",
  "200 mm",
  "250 mm",
  "315 mm",
  "350 mm",
  "400 mm",
  "450 mm",
  "500 mm",
  "630 mm"],
    kFactors:  "Long Throw Performance"
  },
  {
    slug: "gravity-louvers",
    name: "Gravity Louvers",
    code: "GL-Series",
    category: "louvers",
    desc:   "Air-operated non-return damper designed to prevent reverse airflow in HVAC systems with smooth, low-noise gravity operation.",
    image: "/images/products/gravity-louver.png",
    features: [
 "Automatic backdraft prevention",
  "Gravity-operated blades",
  "Aluminum or galvanized steel construction",
  "Smooth, rattle-free operation",
  "Nylon bush bearings",
  "Suitable for wall & duct mounting",
  "Low maintenance"
    ],
    dimensions: [  "150 × 150 mm",
  "200 × 200 mm",
  "300 × 300 mm",
  "400 × 400 mm",
  "500 × 500 mm",
  "600 × 600 mm",
  "700 × 700 mm",
  "800 × 800 mm",
  "900 × 900 mm",
  "1000 × 1000 mm",
  "Custom sizes available"],
    kFactors:   "Pressure Drop"
  },
  {
    slug: "sand-trap-louvers",
    name: "Sand Trap Louver",
    code: "STL-Series",
    category: "louvers",
    desc:   "Sand trap louver designed to remove dust and sand from incoming air while maintaining low pressure drop for HVAC air intake systems.",
    image: "/images/products/sand-trap-louvers.png",
    features: [
 "Efficient dust & sand separation",
  "Low pressure drop",
  "Self-draining base plate",
  "Mill finish aluminum or galvanized steel",
  "Optional removable filter",
  "Optional volume control damper",
  "Bird & insect screen options"
    ],
    dimensions: [ "200 × 150 mm",
  "300 × 200 mm",
  "400 × 300 mm",
  "500 × 400 mm",
  "600 × 500 mm",
  "700 × 600 mm",
  "800 × 700 mm",
  "900 × 800 mm",
  "1000 × 900 mm",
  "1100 × 1000 mm",
  "1200 × 1200 mm",
  "Custom sizes available"],
    kFactors: "High level sand rejection efficiency tracking configuration"
  },
  {
    slug: "external-louvers",
    name: "External Weather Louver",
    code: "EWL-Series",
    category: "louvers",
    desc: "Architectural external intake or exhaust louvers optimized strictly for structural facade layouts to provide optimum ventilation while blocking cross weather elements.",
    image: "/images/products/external-louvers.png",
    features: [
      "45-degree fixed horizontal fluid dynamic blade array profiles",
      "Rear-mounted multi-layer wire mesh preventing pest entrance parameters",
      "Anti-corrosion factory applied powder coat matte finish matching site design"
    ],
    dimensions: ["Custom bespoke square and rectangular configurations built straight from drawings"],
    kFactors: "ASHRAE certified water penetration protection limits"
  },
  {
    slug: "egg-crate-grilles",
    name: "Egg-Crate Exhaust Grille",
    code: "ECG-V2-Series",
    category: "grilles-registers",
    desc: "High open area modular exhaust grille core designed to streamline dirty air collection parameters from targeted zones with zero system noise generation.",
    image: "/images/products/egg-carate-grilles.png",
    features: [
      "Rigid square grid cell layout matrix mapping",
      "Maximum geometric air intake volume capacity",
      "Clean visual matching borders for flush architectural ceiling grid insertions"
    ],
    dimensions: ["600 x 600 mm standard T-bar grid tracking", "Custom surface mounts"],
    kFactors: "Ultra low local structural drag pressure ratings"
  },
  {
    slug: "door-transfer-grilles",
    name: "Door Transfer Air Grille",
    code: "DTG-Series",
    category: "grilles-registers",
    desc: "Bespoke zero-sight partition air balancing grilles configured to handle continuous room-to-room pressure transfer without risking architectural visibility boundaries.",
    image: "/images/products/door-transfer-grilles.png",
    features: [
      "Inverted V-shape sight-proof chevron blade configuration",
      "Telescopic matching frame structure allowing multi-thickness partition fits",
      "Impact resistant factory foundation engineered for premium office layouts"
    ],
    dimensions: ["Custom sizes engineered straight out of project wall metrics"],
    kFactors: "Calibrated volumetric transfer boundary airflow specifications"
  },
  {
    slug: "bypass-terminal-unit-bptu",
    name: "Bypass Terminal Unit",
    code: "BPTU-Series",
    category: "grilles-registers",
    desc: "Precision engineering bypass terminal units designed to regulate system pressure drops and volumetric balance within deep commercial HVAC nodes.",
    image: "/images/products/bypass-terminal-unit-bptu.png",
    features: [
      "VAV operation with constant fan airflow",
      "Pneumatic, Electrical, or ACS control options",
      "Airflow capacity: 24 – 1900 LPS",
      "Minimum inlet pressure: 20 Pa",
      "Minimum air volume: adjustable to 20%",
      "Accuracy: ±5% of design airflow",
      "Operating pressure up to 750 Pa",
      "Low noise operation",
      "Optional sound attenuator",
      "Slip & drive cleat connection (optional flanged)"
    ],
    dimensions: ["Custom Bespoke Sizes engineered on demand"],
    kFactors: "Calibrated on site technical configurations"
  }
];