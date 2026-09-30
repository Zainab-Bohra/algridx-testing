"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function VolumeControlDampersClient() {
  const [conversionPage, setConversionPage] = useState<1 | 2 | 3>(1);

  // Models Table
  const modelsList = [
    { model: "CD", nom: "O - S", desc: "Opposed blade damper with slip on fixing" },
    { model: "CD", nom: "P - S", desc: "Parallel blade damper with slip on fixing" },
    { model: "CD", nom: "O - F", desc: "Opposed blade damper with flange fixing" },
    { model: "CD", nom: "P - F", desc: "Parallel blade damper with flange fixing" },
    { model: "CD", nom: "O - C", desc: "Opposed blade damper with 'C' cleat fixing" },
    { model: "CD", nom: "P - C", desc: "Parallel blade damper with 'C' cleat fixing" },
  ];

  // Installation Correction Factor Table
  const correctionFactors = [
    { angle: "0°", b: "6.0", c: "4.0", d: "9.0" },
    { angle: "15°", b: "4.3", c: "2.9", d: "6.3" },
    { angle: "30°", b: "2.0", c: "1.7", d: "2.7" },
    { angle: "45°", b: "1.4", c: "1.4", d: "1.8" },
  ];

  // Circular VCD Sizes
  const circularSizes = [
    { left: "100", right: "315" },
    { left: "125", right: "350" },
    { left: "150", right: "400" },
    { left: "160", right: "450" },
    { left: "200", right: "500" },
    { left: "250", right: "600" },
    { left: "300", right: "—" },
  ];

  // Useful Conversion Factors
  const convPage1 = [
    { m1: "mm", by1: "0.0393", t1: "in.", m2: "in.", by2: "25.4", t2: "mm" },
    { m1: "m", by1: "3.2807", t1: "ft.", m2: "ft.", by2: "0.3048", t2: "m" },
    { m1: "m2", by1: "10.764", t1: "ft2", m2: "ft2", by2: "0.0929", t2: "m2" },
    { m1: "m3", by1: "35.31", t1: "ft3", m2: "ft3", by2: "0.0283", t2: "m3" },
    { m1: "m3/sec", by1: "1000", t1: "—", m2: "—", by2: "0.001", t2: "m3/sec" },
    { m1: "m3/sec", by1: "2115.0", t1: "cfm", m2: "cfm", by2: "0.00047", t2: "m3/sec" },
    { m1: "m3/min", by1: "0.5886", t1: "cfm", m2: "cfm", by2: "1.6996", t2: "m3/min" },
    { m1: "m3/min", by1: "35.32", t1: "cfm", m2: "cfm", by2: "0.0284", t2: "m3/min" },
    { m1: "l/sec", by1: "2.1195", t1: "cfm", m2: "cfm", by2: "0.4719", t2: "l/sec" },
    { m1: "m3/sec", by1: "264.18", t1: "gpm (U.S.)", m2: "gpm (U.S.)", by2: "0.00378", t2: "m3/sec" },
    { m1: "m3/h", by1: "4.403", t1: "gpm (U.S.)", m2: "gpm (U.S.)", by2: "0.2298", t2: "m3/h" },
    { m1: "l/sec", by1: "15.85", t1: "gpm (U.S.)", m2: "gpm (U.S.)", by2: "0.063", t2: "l/sec" },
    { m1: "m/sec", by1: "196.8", t1: "fpm", m2: "fpm", by2: "0.0051", t2: "m/sec" },
    { m1: "m/sec", by1: "3.28", t1: "fps", m2: "fps", by2: "0.3048", t2: "m/sec" },
    { m1: "Kg", by1: "2.2046", t1: "Lbs", m2: "Lbs", by2: "0.4536", t2: "Kg" },
    { m1: "Kg", by1: "15456", t1: "grain", m2: "grain", by2: "0.00006", t2: "Kg" },
    { m1: "N", by1: "0.102", t1: "kg(kp)", m2: "kg(kp)", by2: "9.8066", t2: "N" },
    { m1: "N", by1: "0.2248", t1: "lb.- f", m2: "lb.- f", by2: "4.4482", t2: "N" },
    { m1: "Pa", by1: "1", t1: "N/m2", m2: "N/m2", by2: "1", t2: "Pa" },
    { m1: "Pa", by1: "0.000145", t1: "psi", m2: "psi", by2: "6896", t2: "Pa" },
  ];

  const convPage2 = [
    { m1: "Pa", by1: "0.000295", t1: "in. Hg", m2: "in. Hg", by2: "3386", t2: "Pa" },
    { m1: "Pa", by1: "0.0041", t1: "in. WG", m2: "in. WG", by2: "249", t2: "Pa" },
    { m1: "Pa", by1: "0.00033", t1: "ft. WG", m2: "ft. WG", by2: "2989", t2: "Pa" },
    { m1: "Pa", by1: "0.00001", t1: "bar", m2: "bar", by2: "10000", t2: "Pa" },
    { m1: "Pa", by1: "0.102", t1: "mm. WG", m2: "mm. WG", by2: "9.8066", t2: "Pa" },
    { m1: "Pa", by1: "0.0001", t1: "m. WG", m2: "m. WG", by2: "980.66", t2: "Pa" },
    { m1: "Pa", by1: "0.00001", t1: "At", m2: "At", by2: "98066", t2: "Pa" },
    { m1: "Pa", by1: "0.00001", t1: "kg/cm2", m2: "kg/cm2", by2: "98066", t2: "Pa" },
    { m1: "kg/cm2", by1: "14.223", t1: "psi", m2: "psi", by2: "0.0703", t2: "kg/cm2" },
    { m1: "Tr.", by1: "0.0075", t1: "psi", m2: "psi", by2: "133.3", t2: "Tr." },
    { m1: "Kcal/hr.", by1: "3.968", t1: "BTU/hr.", m2: "BTU/hr.", by2: "0.2519", t2: "Kcal/hr." },
    { m1: "Kcal/hr.", by1: "0.00033", t1: "Ref.ton", m2: "Ref.ton", by2: "3022.8", t2: "Kcal/hr." },
    { m1: "W", by1: "1", t1: "J/s", m2: "J/s", by2: "1", t2: "W" },
    { m1: "W", by1: "0.861", t1: "Kcal/hr", m2: "Kcal/hr", by2: "1.163", t2: "W" },
    { m1: "W", by1: "3.412", t1: "BTU/hr.", m2: "BTU/hr.", by2: "0.2931", t2: "W" },
    { m1: "kW", by1: "0.285", t1: "Ref.ton", m2: "Ref.ton", by2: "3.517", t2: "kW" },
    { m1: "kW", by1: "1.36", t1: "Hp/metric", m2: "Hp/metric", by2: "0.7354", t2: "kW" },
    { m1: "kW", by1: "1.341", t1: "HP (U.K)", m2: "HP (U.K)", by2: "0.7457", t2: "kW" },
    { m1: "kW", by1: "4.1868", t1: "J", m2: "J", by2: "0.2389", t2: "kW" },
    { m1: "BTU", by1: "1111", t1: "J", m2: "J", by2: "0.0009", t2: "BTU" },
  ];

  const convPage3 = [
    { m1: "kWh", by1: "3.6", t1: "MJ", m2: "MJ", by2: "0.2778", t2: "kWh" },
    { m1: "kGm", by1: "9.8087", t1: "J", m2: "J", by2: "0.102", t2: "kGm" },
    { m1: "lb. ft.", by1: "1.3558", t1: "J", m2: "J", by2: "0.7376", t2: "ft. lb." },
    { m1: "Kcal/kg", by1: "4.1868", t1: "kJ/kg", m2: "kJ/kg", by2: "0.2388", t2: "Kcal/kg" },
    { m1: "BTU/lb", by1: "2.326", t1: "kJ/kg", m2: "kJ/kg", by2: "0.4299", t2: "BTU/lb" },
    { m1: "kJ/kg", by1: "1", t1: "J/g", m2: "J/g", by2: "1", t2: "kJ/kg" },
    { m1: "grain/lb", by1: "0.143", t1: "g/kg", m2: "g/kg", by2: "6.993", t2: "grain/lb" },
    { m1: "m3/kg", by1: "16.018", t1: "ft.3/lb", m2: "ft.3/lb", by2: "0.0624", t2: "m3/kg" },
    { m1: "m3/degC. hr.", by1: "5", t1: "ft.3/degC hr.", m2: "ft.3/degC hr.", by2: "0.2", t2: "m3/degC hr." },
    { m1: "Kcal", by1: "—", t1: "BTU", m2: "BTU", by2: "—", t2: "Kcal" },
  ];

  // VAV Terminal Unit Data
  const vavUnits = [
    { size: 1, maxCfm: "200", a: "250 (10)", b: "200 (8)", c: "400", e: "175 (7)", f: "100 (4)" },
    { size: 2, maxCfm: "400", a: "300 (12)", b: "250 (10)", c: "400", e: "225 (9)", f: "150 (6)" },
    { size: 3, maxCfm: "600", a: "350 (14)", b: "300 (12)", c: "550", e: "275 (11)", f: "150 (6)" },
    { size: 4, maxCfm: "800", a: "400 (16)", b: "350 (14)", c: "550", e: "325 (13)", f: "250 (10)" },
    { size: 5, maxCfm: "1200", a: "450 (18)", b: "400 (16)", c: "600", e: "400 (16)", f: "275 (11)" },
    { size: 6, maxCfm: "1500", a: "500 (20)", b: "450 (18)", c: "600", e: "450 (18)", f: "150 (6)" },
    { size: 7, maxCfm: "2400", a: "600 (24)", b: "500 (20)", c: "600", e: "550 (22)", f: "150 (6)" },
    { size: 8, maxCfm: "3200", a: "800 (32)", b: "550 (22)", c: "600", e: "750 (30)", f: "150 (6)" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Silent Features", href: "#sec-features" },
    { label: "1.2. Constructional Details", href: "#sec-construction" },
    { label: "1.3. Available Finishes", href: "#sec-finishes" },
    { label: "1.4. Available Standard Sizes", href: "#sec-standard-sizes" },
    { label: "1.5. Available Standard Types & Models", href: "#sec-models" },
    { label: "2. Dimensional Data", href: "#sec-dimensional" },
    { label: "3. Technical Data", href: "#sec-technical" },
    { label: "3.1. Installation Correction Factor", href: "#sec-correction-factors" },
    { label: "4. Circular VCD", href: "#sec-circular-vcd" },
    { label: "4.1. Available Standard Sizes", href: "#sec-circular-sizes" },
    { label: "5. Useful Conversion Factors", href: "#sec-conversion" },
    { label: "6. Terminal Units (VAV)", href: "#sec-vav-units" },
    { label: "7. Technical Data", href: "#sec-vav-construction" },
    { label: "7.1. CONSTRUCTION", href: "#sec-vav-construction-details" },
  ];

  return (
    <article className="bg-[#F8FAFC] min-h-screen pt-28 md:pt-36 pb-28 text-[#0A2540] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link href="/products" className="inline-block">
            <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white border border-slate-300/80 text-[#0A2540] hover:bg-[#0A2540] hover:text-white text-sm font-semibold tracking-wide shadow-xs transition-all duration-200">
              <ArrowLeft size={16} />
              <span>Return to Catalog</span>
            </div>
          </Link>
        </nav>

        {/* HERO TITLE HEADER */}
        <header className="bg-[#0A2540] text-white rounded-3xl p-8 sm:p-14 mb-12 shadow-sm flex flex-col items-center justify-center text-center space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Volume Control Dampers
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Volume%20Control%20Dampers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <MessageCircle size={18} />
            <span>Get Quote !</span>
          </a>
        </header>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* PRIMARY CONTENT COLUMN (8 COLUMNS) */}
          <main className="lg:col-span-8 space-y-12">

            {/* 1. INTRODUCTION */}
            <section id="sec-intro" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>

              {/* 1.1 Silent Features */}
              <div id="sec-features" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Silent Features
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  ALUGRIDX Opposed Blade / Parallel Blade Volume Control Dampers are designed for air volume flow and pressure control or to isolate sections of ducting in the air-conditioning and ventilation system.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  Galvanized sheet steel casing with airfoil blades connected by linkage with manual operation by quadrant.
                </p>
              </div>

              {/* 1.2 Constructional Details */}
              <div id="sec-construction" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Constructional Details
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Frame:</strong> Galvanized sheet steel 1.2 mm thickness</li>
                  <li><strong>• Blades:</strong> Aluminum fixed profile airfoil blades 1 mm / 1.2 mm thickness</li>
                  <li><strong>• Bearings:</strong> PVC / Nylon bush</li>
                  <li><strong>• Shaft:</strong> Galvanized steel</li>
                  <li><strong>• Quadrant:</strong> Locking type with position indicator</li>
                  <li><strong>• General:</strong> All joints are welded and sealed for air-tight operation and all welded joints are protected by aluminum spray coating</li>
                </ul>
              </div>

              {/* 1.3 Available Finishes */}
              <div id="sec-finishes" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Finishes
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Galvanized sheet steel frame</li>
                  <li><strong>•</strong> Epoxy primary coated finish</li>
                </ul>
              </div>

              {/* 1.4 Available Standard Sizes (EXACT 2-ROW TABLE) */}
              <div id="sec-standard-sizes" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Standard Sizes
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm border-collapse font-sans">
                    <thead>
                      <tr className="border-b border-slate-200 text-[#0A2540] font-bold">
                        <th className="p-3.5">L</th>
                        <th className="p-3.5">150</th>
                        <th className="p-3.5">200</th>
                        <th className="p-3.5">300</th>
                        <th className="p-3.5">400</th>
                        <th className="p-3.5">500</th>
                        <th className="p-3.5">600</th>
                        <th className="p-3.5">700</th>
                        <th className="p-3.5">800</th>
                        <th className="p-3.5">900</th>
                        <th className="p-3.5">1000</th>
                        <th className="p-3.5">1200</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr>
                        <td className="p-3.5">100</td>
                        <td className="p-3.5">200</td>
                        <td className="p-3.5">300</td>
                        <td className="p-3.5">400</td>
                        <td className="p-3.5">500</td>
                        <td className="p-3.5">600</td>
                        <td className="p-3.5">700</td>
                        <td className="p-3.5">800</td>
                        <td className="p-3.5">900</td>
                        <td className="p-3.5">1000</td>
                        <td className="p-3.5">1200</td>
                        <td className="p-3.5"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1.5 Available Standard Types & Models */}
              <div id="sec-models" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Standard Types & Models
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">MODEL</th>
                        <th className="p-4">NOMENCLATURE</th>
                        <th className="p-4 font-sans">ACCESSORIES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {modelsList.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{m.model}</td>
                          <td className="p-4 font-bold text-[#3B82F6]">{m.nom}</td>
                          <td className="p-4 font-sans">{m.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Green Get Quote Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Volume%20Control%20Dampers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 2. DIMENSIONAL DATA */}
            <section id="sec-dimensional" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimensional Data
                </h2>
              </div>

              <div className="space-y-6 pt-2">
                {/* Opposed Blade Image */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/vcd/cd-opposed.webp"
                    alt="MODEL CD - O - S, MODEL CD - O - F, MODEL CD - O - (Opposed Blade)"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL CD - O - S | MODEL CD - O - F | MODEL CD - O -
                  </span>
                </div>

                {/* Parallel Blade Image */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/vcd/cd-parallel.webp"
                    alt="MODEL CD - P - F (Parallel Blade Damper)"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL CD - P - F
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20CAD%20submittal%20for%20VCD%20Dimensions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. TECHNICAL DATA */}
            <section id="sec-technical" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Technical Data
                </h2>
              </div>

              {/* Manual Quadrant Control Image */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/vcd/manual-quadrant.webp"
                  alt="Manual Operation Quadrant for AlugridX Volume Control Damper"
                  className="max-w-md w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  Manual Operation
                </span>
              </div>

              {/* 3.1 Installation Correction Factor */}
              <div id="sec-correction-factors" className="space-y-4 pt-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Installation Correction Factor
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">Blade angle</th>
                        <th className="p-4 text-center">B</th>
                        <th className="p-4 text-center">C</th>
                        <th className="p-4 text-center">D</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {correctionFactors.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.angle}</td>
                          <td className="p-4 text-center">{row.b}</td>
                          <td className="p-4 text-center">{row.c}</td>
                          <td className="p-4 text-center font-bold text-[#3B82F6]">{row.d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pressure Drop Curve Image */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/vcd/pressure-drop-type-a.webp"
                  alt="Pressure Drop Installation Type A"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              {/* Types of Installation & Example */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Types of Installation
                </h3>
                
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/vcd/types-of-installation.webp"
                    alt="Types of Installation A, B, D"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>

                {/* Calculation Box */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-2 font-mono text-sm sm:text-base text-slate-800">
                  <div className="font-bold text-[#0A2540] uppercase tracking-wider text-xs font-sans mb-2">
                    Example
                  </div>
                  <div>Given: Type D installation</div>
                  <div>X = 15°</div>
                  <div>V = 4 m/sec</div>
                  <div className="pt-2 font-bold text-[#0A2540]">
                    Result: Pr. Drop (D) = Pr. Drop (A) x 6.3
                  </div>
                  <div>= 5 x 6.3</div>
                  <div className="text-lg font-extrabold text-[#3B82F6]">= 31.5 Pa</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pressure%20drop%20selection%20for%20VCD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. CIRCULAR VCD */}
            <section id="sec-circular-vcd" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Circular VCD
                </h2>
              </div>

              {/* Circular CAD diagram */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/vcd/circular-vcd-cad.webp"
                  alt="Circular VCD VD-R/G and VD-R/S"
                  className="max-w-full h-auto object-contain"
                />
              </div>

              {/* 4.1 Available Standard Sizes for Round VCD */}
              <div id="sec-circular-sizes" className="space-y-4 pt-4 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  Available Standard Sizes
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 max-w-md font-mono">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">D (mm) left</th>
                        <th className="p-4">D (mm) right</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {circularSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.left}</td>
                          <td className="p-4 font-bold text-[#3B82F6]">{row.right}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Circular Performance Chart */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/vcd/circular-vcd-chart.webp"
                  alt="Circular VCD Pressure Drop Chart"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              {/* Models Description */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="space-y-1">
                  <div className="font-bold text-sm text-[#0A2540]">
                    VD-R/G: <span className="font-normal text-slate-700">Circular Volume Control Damper with Grooved Ends</span>
                  </div>
                  <div className="font-bold text-sm text-[#0A2540]">
                    VD-R/S: <span className="font-normal text-slate-700">Circular Volume Control Damper with Straight Ends</span>
                  </div>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  ALUGRIDX Models VD-R/G and VD-R/S are Circular Volume Control Dampers designed to regulate air volume through round ducts.
                </p>
                <ul className="space-y-1.5 text-sm text-slate-700 leading-relaxed">
                  <li>The casing and the blade are made from galvanized steel sheets.</li>
                  <li>The adjustable damper blades are mounted on Nylon bushes with a manually operated quadrant set.</li>
                  <li>The movement of the blades allows regulation from fully open to almost complete shut off.</li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Circular%20VCD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 5. USEFUL CONVERSION FACTORS */}
            <section id="sec-conversion" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Useful Conversion Factors
                </h2>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200 font-mono">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                      <th className="p-3">Multiply</th>
                      <th className="p-3">By</th>
                      <th className="p-3">To Get</th>
                      <th className="p-3 border-l border-slate-200">Multiply</th>
                      <th className="p-3">By</th>
                      <th className="p-3">To Get</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {(conversionPage === 1
                      ? convPage1
                      : conversionPage === 2
                      ? convPage2
                      : convPage3
                    ).map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-[#0A2540]">{r.m1}</td>
                        <td className="p-3">{r.by1}</td>
                        <td className="p-3 font-semibold text-[#3B82F6]">{r.t1}</td>
                        <td className="p-3 font-bold text-[#0A2540] border-l border-slate-200">{r.m2}</td>
                        <td className="p-3">{r.by2}</td>
                        <td className="p-3 font-semibold text-[#3B82F6]">{r.t2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Exact Pagination Bar */}
              <div className="flex items-center justify-end gap-1 pt-2">
                <button
                  onClick={() => setConversionPage((p) => (p > 1 ? ((p - 1) as 1 | 2 | 3) : p))}
                  disabled={conversionPage === 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-100 disabled:opacity-40"
                >
                  &lt;
                </button>
                {[1, 2, 3].map((page) => (
                  <button
                    key={page}
                    onClick={() => setConversionPage(page as 1 | 2 | 3)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold font-mono transition-colors ${
                      conversionPage === page
                        ? "bg-[#3B82F6] text-white shadow-sm"
                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setConversionPage((p) => (p < 3 ? ((p + 1) as 1 | 2 | 3) : p))}
                  disabled={conversionPage === 3}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-100 disabled:opacity-40"
                >
                  &gt;
                </button>
              </div>
            </section>

            {/* 6. TERMINAL UNITS (VAV) */}
            <section id="sec-vav-units" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Terminal Units (VAV)
                </h2>
              </div>

              {/* VAV Schematic Image */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/vcd/vav-terminal.webp"
                  alt="Terminal Units (VAV) Casing and Actuator Assembly"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="space-y-3 pt-2">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  DESCRIPTION
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The specialized low pressure bypass terminal unit has been intricately crafted to provide the capacity for controlling temperatures across multiple zones in air systems with low and medium airflow velocities. It adjusts its functioning in direct response to the cooling demands by modulating the volume of air supplied to the conditioned space. It releases conditioned air into the area precisely during periods of maximum cooling loads, as determined by the thermostat's settings.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  As the need for cooling decreases, the model undergoes moderation to redirect the conditioned air towards the return ceiling plenum or duct. This consistent adjustment ensures a steady air volume throughout the central system while simultaneously allowing for variable air volume delivery to the designated space.
                </p>
              </div>

              {/* 7. Technical Data & Construction */}
              <div id="sec-vav-construction" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Technical Data
                </h3>
                
                <div id="sec-vav-construction-details" className="space-y-2 scroll-mt-32">
                  <h4 className="text-lg font-bold text-[#0A2540]">
                    CONSTRUCTION
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Consists of an external casing made of <strong>1.0 mm galvanized steel</strong> acoustically and thermally insulated with <strong>1" glass fiber material</strong>.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-3">Size</th>
                        <th className="p-3">MAX. CFM</th>
                        <th className="p-3">A</th>
                        <th className="p-3">B</th>
                        <th className="p-3">C</th>
                        <th className="p-3">E</th>
                        <th className="p-3">F</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {vavUnits.map((u) => (
                        <tr key={u.size} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-[#0A2540]">{u.size}</td>
                          <td className="p-3 font-bold text-[#3B82F6]">{u.maxCfm}</td>
                          <td className="p-3">{u.a}</td>
                          <td className="p-3">{u.b}</td>
                          <td className="p-3">{u.c}</td>
                          <td className="p-3">{u.e}</td>
                          <td className="p-3">{u.f}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20VAV%20Terminal%20Units"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

          </main>

          {/* STICKY TABLE OF CONTENTS (4 COLUMNS) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs">
              <h4 className="text-base font-extrabold text-[#0A2540] uppercase tracking-wider mb-5 border-b pb-3 border-slate-200">
                Table of Contents
              </h4>
              <nav className="space-y-1.5">
                {tocLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="block py-1.5 px-3 rounded-xl text-slate-700 hover:text-[#3B82F6] hover:bg-slate-50 text-xs sm:text-sm font-semibold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}