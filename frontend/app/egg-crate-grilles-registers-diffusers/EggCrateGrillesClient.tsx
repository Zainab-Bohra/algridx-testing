"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function EggCrateGrillesClient() {
  const lHeaderSizes = ["200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100", "1200"];
  const wRowValues = ["150", "200", "300", "400", "500", "600", "700", "800", "900", "1100", "1200"];

  const standardModels = [
    { model: "EL", nomenclature: "'B'", accessories: "Bird Screen" },
    { model: "EL", nomenclature: "'S'", accessories: "Insect Screen" },
    { model: "EL", nomenclature: "'V'", accessories: "Volume Control Damper" },
    { model: "EL", nomenclature: "'F'", accessories: "12.5 mm / 25 mm filter" },
    { model: "EL", nomenclature: "'FV'", accessories: "Combine Filter & Volume Control Damper" },
    { model: "EL", nomenclature: "'T'", accessories: "Twin / Double Bank" },
  ];

  const ecgDimensionCodes = [
    { code: "A", description: "Nominal Size (L x W)" },
    { code: "B", description: "Neck size (L - 10) x (W - 10)" },
    { code: "C", description: "Overall size (B + 60)" },
    { code: "D", description: "Frame Width = 30 mm" },
    { code: "Cp", description: "Egg Crate Core Pitch = 12.5 mm / 13 mm" },
    { code: "Fd", description: "Frame depth = 27 mm" },
    { code: "Dd", description: "Damper depth = 44 mm" },
  ];

  const ecrfvDimensionCodes = [
    { code: "A", description: "Nominal Size (L x W)" },
    { code: "B", description: "Neck size (L - 10) x (W - 10)" },
    { code: "C", description: "Overall size (B + 60)" },
    { code: "D", description: "Frame Width = 30 mm" },
    { code: "Cp", description: "Egg Crate Core Pitch = 12.5 mm / 13 mm" },
    { code: "Fd", description: "Frame depth = 27 mm" },
    { code: "Fe(i)", description: "Internal frame depth = 45 mm" },
    { code: "Dd", description: "Damper depth = 44 mm" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "2. Dimensional Data", href: "#sec-dim-data" },
    { label: "2.1. MODEL: ECG-F", href: "#sec-ecg-f" },
    { label: "2.2. MODEL: ECR-FV", href: "#sec-ecr-fv" },
    { label: "2.3. MODEL: ECG-F", href: "#sec-ecg-filter-extra" },
    { label: "3. Dimensional Data", href: "#sec-core-data" },
    { label: "3.1. Aluminum Egg Crate Core suffix 'A'", href: "#sec-core-aluminum" },
    { label: "3.2. Polystyrene Egg Crate Core suffix 'P'", href: "#sec-core-polystyrene" },
    { label: "3.3. FIXING DETAILS", href: "#sec-fixing-details" },
    { label: "4. Quick Selection", href: "#sec-quick-selection" },
    { label: "5. Ordering Procedure", href: "#sec-ordering-procedure" },
    { label: "6. Available Finish", href: "#sec-available-finish" },
  ];

  return (
    <article className="bg-[#F8FAFC] min-h-screen pt-28 md:pt-36 pb-28 text-[#0A2540] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Breadcrumb Navigation */}
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
            Egg-Crate Grilles/Registers &amp; Diffusers
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Egg-Crate%20Grilles%20and%20Registers"
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

          {/* PRIMARY CONTENT (8 COLS) */}
          <main className="lg:col-span-8 space-y-12">

            {/* 1. INTRODUCTION */}
            <section id="sec-intro" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#0A2540]">
                  Salient Features
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> ALUGRIDX Egg Crate Grilles and Diffusers are manufactured to highest standards and designed.</li>
                  <li><strong>•</strong> Rigid and strong construction provides noiseless performance.</li>
                  <li><strong>•</strong> Grilles with opposed blade Volume Control Damper and filter gives positive and clean air control.</li>
                  <li><strong>•</strong> Frame and aluminum core are manufactured from high quality extruded aluminum and sheets respectively.</li>
                  <li><strong>•</strong> Perforated core sheet is of high quality mild steel and powder-coated finish.</li>
                  <li><strong>•</strong> Countersunk screw holes for flush heads with border frame.</li>
                  <li><strong>•</strong> Grilles with Polystyrene Egg Crate Core is available in two standard sizes only, i.e. 600 mm x 600 mm and 600 mm x 1200 mm.</li>
                </ul>
              </div>

              {/* Standard Sizes Table */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">L</th>
                        {lHeaderSizes.map((size, idx) => (
                          <th key={idx} className="p-3.5 sm:p-4">{size}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        {wRowValues.map((val, idx) => (
                          <td key={idx} className="p-3.5 sm:p-4">{val}</td>
                        ))}
                        <td className="p-3.5 sm:p-4 text-slate-400">–</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-1">
                  AVAILABLE STANDARD SIZES
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  ALUGRIDX Egg Crate are also available in 50 mm incremen
                </p>
              </div>

              {/* Types & Models Table */}
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  AVAILABLE STANDARD TYPES &amp; MODELS
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">MODEL</th>
                        <th className="p-3.5 sm:p-4">NOMENCLATURE</th>
                        <th className="p-3.5 sm:p-4">ACCESSORIES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {standardModels.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.model}</td>
                          <td className="p-3.5 sm:p-4">{row.nomenclature}</td>
                          <td className="p-3.5 sm:p-4 font-sans">{row.accessories}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Egg%20Crate%20Grilles"
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
            <section id="sec-dim-data" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-12 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimensional Data
                </h2>
              </div>

              {/* MODEL: ECG Cross-Section Image */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/egg-crate/ecg-cad.webp"
                  alt="MODEL ECG Egg Crate Grille Cross Section"
                  className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                />
              </div>

              {/* MODEL: ECG Description & Table */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  MODEL:- ECG
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  Return or Exhaust Air Grille having an Egg Crate core for maximum free area of 90%.
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  • The Egg Crate square core pattern is available in Aluminum.
                </p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono pt-2">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4 w-28">Code</th>
                        <th className="p-3.5 sm:p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ecgDimensionCodes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540]">{row.code}</td>
                          <td className="p-3.5 sm:p-4 font-sans">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MODEL: ECG-B & ECG-S */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    MODEL:- ECG-B &amp; ECG-S
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed">
                    Exhaust Air Grilles same as ECG model but with Bird Screen Mesh or Insect Screen respectively as accessory.
                  </p>
                </div>
     
              </div>

              {/* Register with OBD CAD (5-683x1024.webp) */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/5-683x1024.webp"
                    alt="Egg Crate Register with Opposed Blade Damper CAD"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    MODEL:- ECR
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed">
                    Egg Crate Register same as ECG model but with an opposed blade Volume Control Damper which can be operated from the face with a key or screw driver.
                  </p>
                </div>
              </div>

              {/* MODEL: ECR CAD */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/egg-crate/ecr-cad.webp"
                  alt="MODEL ECR Cross Section CAD"
                  className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                />
              </div>

              {/* 2.1. MODEL: ECG-F */}
              <div id="sec-ecg-f" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    MODEL: ECG-F
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed">
                    Same as ECG model but with a washable Aluminum Filter.
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    • The Filter thickness available is 12.5 mm &amp; 25 mm (available in Double Frame).
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/ecg-f-cad.webp"
                    alt="MODEL ECG-F Washable Filter CAD"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* 2.2. MODEL: ECR-FV */}
              <div id="sec-ecr-fv" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    MODEL: ECR-FV
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed">
                    Supply Register with double frame and Opposed Blade Volume Control Damper.
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    • The Double Frame fixed by a screwed knob enables easy access to filter and Volume Control Damper.
                  </p>
                  
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/ecr-fv-cad.webp"
                    alt="MODEL ECR-FV Double Frame with Filter CAD"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono pt-2">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4 w-28">Code</th>
                        <th className="p-3.5 sm:p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ecrfvDimensionCodes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540]">{row.code}</td>
                          <td className="p-3.5 sm:p-4 font-sans">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2.3. Outer Frame Profile CAD Diagram */}
              <div id="sec-ecg-filter-extra" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    MODEL: ECG-F
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed">
                    Supply or Return Air Grille with perforated M.S. sheet core having 3.8 mm diameter perforation at a 5 mm pitch.
                  </p>
                  <p className="text-sm font-semibold text-slate-600">
                    • Also available for supply air application model PC-V with Opposed Blade Volume Control Damper.
                  </p>
                </div>
                
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20drawings%20for%20Egg%20Crate%20Registers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. DIMENSIONAL DATA (CORE SUFFIX & FIXING DETAILS) */}
            <section id="sec-core-data" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-12 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimensional Data
                </h2>
              </div>

              {/* 3.1. Aluminum Egg Crate Core suffix 'A' */}
              <div id="sec-core-aluminum" className="space-y-6 scroll-mt-32">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/aluminum-core-a.webp"
                    alt="Aluminum Egg Crate Core Suffix A Grid"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    Aluminum Egg Crate Core suffix &apos;A&apos;
                  </h3>
                  <div className="text-slate-700 text-sm sm:text-base space-y-1 leading-relaxed">
                    <p>1. Size - 12.5 mm x 12.5 mm x 12.5 mm x 0.5 mm.</p>
                    <p>2. Size - 13 mm x 13 mm x 13 mm x 0.5 mm.</p>
                    <p className="font-semibold text-[#0A2540] pt-1">Both have a free area of ~ 90%</p>
                  </div>
                </div>
              </div>

              {/* 3.2. Polystyrene Egg Crate Core suffix 'P' */}
              <div id="sec-core-polystyrene" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/polystyrene-core-p.webp"
                    alt="Polystyrene Egg Crate Core Suffix P Grid"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                    Polystyrene Egg Crate Core suffix &apos;P&apos;
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Size 14.5 mm x 14.5 mm x 1.6 mm
                  </p>
                  <p className="font-semibold text-[#0A2540] text-sm sm:text-base">
                    free area ~ 85%
                  </p>
                </div>
              </div>

              {/* 3.3. FIXING DETAILS */}
              <div id="sec-fixing-details" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                {/* Type S Fixing Diagram */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/fixing-screw-type-s.webp"
                    alt="Type S Countersunk Screw Frame Fixing"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>

                {/* Screwed Knob / Latch Fixing Diagram */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/egg-crate/fixing-dual-frame-knob.webp"
                    alt="Dual Frame Screwed Knob Latch Fixing"
                    className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                    FIXING DETAILS
                  </h3>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <li><strong>• Countersunk screw fixing type &apos;S&apos;</strong> is standard and recommended for side wall or ceiling fixing.</li>
                    <li><strong>• Dual frame mounted on hinges and fixed by screwed knob fixing type &apos;K&apos;</strong>.</li>
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20fixing%20accessories%20for%20Egg%20Crate%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. QUICK SELECTION */}
            <section id="sec-quick-selection" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Quick Selection
                </h2>
              </div>

              {/* Egg Crate Perspective Front Visual */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/egg-crate/egg-crate-perspective.webp"
                  alt="Egg Crate Grille Perspective Elevation"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              {/* Selection Nomogram Chart */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/egg-crate/egg-crate-quick-selection.webp"
                  alt="Quick Selection Nomogram Alignment Chart"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              <div className="space-y-1 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  By limiting effective jet velocity to <strong>7 m/s</strong> all grille sizes shown meet <strong>NC 35</strong> assuming <strong>8 dB room attenuation</strong>.
                </p>
                <p className="text-xs text-slate-500 italic">
                  (selection based without damper or with damper fully open)
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20aerodynamic%20selection%20for%20Egg%20Crate%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 5. ORDERING PROCEDURE */}
            <section id="sec-ordering-procedure" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Ordering Procedure
                </h2>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/egg-crate/egg-crate-ordering-procedure.webp"
                  alt="Ordering Procedure Configuration Flowchart"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 pt-2">
                Ordering Data
              </p>
            </section>

            {/* 6. AVAILABLE FINISH */}
            <section id="sec-available-finish" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Available Finish
                </h2>
              </div>

              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li><strong>•</strong> Powder-coated color finish</li>
                <li><strong>•</strong> Natural anodized aluminum</li>
                <li><strong>•</strong> Mill finish aluminum</li>
                <li><strong>•</strong> Bronze anodized</li>
              </ul>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20want%20to%20place%20an%20order%20for%20Egg%20Crate%20Grilles"
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

          {/* STICKY TABLE OF CONTENTS */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h4 className="text-base font-extrabold text-[#0A2540] uppercase tracking-wider mb-5 border-b pb-3 border-slate-200">
                Table of Contents
              </h4>
              <nav className="space-y-1">
                {tocLinks.map((link, idx) => {
                  const isSubItem = link.label.match(/^\d+\.\d+\./);
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      className={`block py-1.5 px-3 rounded-xl transition-colors font-medium text-xs sm:text-sm leading-relaxed ${
                        isSubItem
                          ? "pl-6 text-slate-500 hover:text-[#3B82F6] hover:bg-slate-50"
                          : "text-slate-800 hover:text-[#3B82F6] hover:bg-slate-50 font-semibold"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

        </div>

      </div>
    </article>
  );
}