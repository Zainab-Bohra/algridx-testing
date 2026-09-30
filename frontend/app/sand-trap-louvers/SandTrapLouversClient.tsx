"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function SandTrapLouversClient() {
  const [soundPage, setSoundPage] = useState<1 | 2>(1);

  // Standard Dimension Combinations
  const stdSizes = [
    { l: "200", heights: ["150", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1100", "1200"] },
    { l: "300", heights: ["200", "300", "400", "500", "600", "700", "800", "900", "1100", "1200"] },
  ];

  // Nomenclature Table
  const nomenclature = [
    { model: "EL", code: "'B'", acc: "Bird Screen" },
    { model: "EL", code: "'S'", acc: "Insect Screen" },
    { model: "EL", code: "'V'", acc: "Volume Control Damper" },
    { model: "EL", code: "'F'", acc: "12.5 mm / 25 mm filter" },
    { model: "EL", code: "'FV'", acc: "Combine Filter & Volume Control Damper" },
    { model: "EL", code: "'T'", acc: "Twin / Double Bank" },
  ];

  // Free Area Performance Table (L x H mm)
  const freeAreaCols = ["300", "450", "600", "750", "900", "1050", "1200", "1350", "1500"];
  const freeAreaRows = [
    { h: "150", vals: ["0.014", "0.022", "0.029", "0.036", "0.043", "0.050", "0.058", "0.065", "0.072"] },
    { h: "300", vals: ["—", "0.043", "0.058", "0.072", "0.086", "0.101", "0.115", "0.130", "0.144"] },
    { h: "450", vals: ["—", "0.065", "0.086", "0.108", "0.130", "0.151", "0.173", "0.194", "0.216"] },
    { h: "600", vals: ["—", "—", "0.115", "0.144", "0.173", "0.202", "0.230", "0.259", "0.288"] },
    { h: "750", vals: ["—", "—", "—", "0.180", "0.216", "0.252", "0.288", "0.324", "0.360"] },
    { h: "900", vals: ["—", "—", "—", "—", "0.259", "0.302", "0.346", "0.389", "0.432"] },
    { h: "1050", vals: ["—", "—", "—", "—", "—", "0.353", "0.403", "0.454", "0.504"] },
    { h: "1200", vals: ["—", "—", "—", "—", "—", "—", "0.461", "0.518", "0.576"] },
    { h: "1350", vals: ["—", "—", "—", "—", "—", "—", "—", "0.583", "0.648"] },
    { h: "1500", vals: ["—", "—", "—", "—", "—", "—", "—", "—", "0.720"] },
  ];

  // Sound Levels Matrix
  const soundLevelsP1 = [
    { cat: "Large buildings", space: "Radio and TV studios", db: "25-30", nc: "20-25" },
    { cat: "Large buildings", space: "Concert and Opera halls", db: "25-35", nc: "20-30" },
    { cat: "Large buildings", space: "Churches", db: "25-35", nc: "20-30" },
    { cat: "Large buildings", space: "Cinemas", db: "35-45", nc: "30-40" },
    { cat: "Large buildings", space: "Banquet halls", db: "40-50", nc: "35-45" },
    { cat: "Hospitals", space: "Private rooms", db: "30-40", nc: "25-35" },
    { cat: "Hospitals", space: "Operation theaters", db: "35-45", nc: "30-40" },
    { cat: "Hospitals", space: "Waiting rooms", db: "40-50", nc: "35-45" },
    { cat: "Offices", space: "Board rooms", db: "25-35", nc: "20-30" },
    { cat: "Offices", space: "Conference rooms", db: "30-40", nc: "25-35" },
    { cat: "Offices", space: "Executive offices", db: "35-45", nc: "30-40" },
    { cat: "Offices", space: "General open offices", db: "35-45", nc: "30-40" },
    { cat: "Offices", space: "Typing pools", db: "40-50", nc: "35-45" },
    { cat: "Offices", space: "Computer rooms", db: "45-65", nc: "40-55" },
  ];

  const soundLevelsP2 = [
    { cat: "Residential buildings", space: "Single family homes (rural & suburban)", db: "25-35", nc: "20-30" },
    { cat: "Residential buildings", space: "Single family homes (urban)", db: "30-40", nc: "25-35" },
    { cat: "Residential buildings", space: "Apartment buildings", db: "35-45", nc: "30-40" },
    { cat: "Damage risk criteria", space: "Industrial plant area limits", db: "90", nc: "85" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Silent Features", href: "#sec-features" },
    { label: "1.2. Available Standard Sizes", href: "#sec-sizes" },
    { label: "1.3. MODEL LST", href: "#sec-model-lst" },
    { label: "1.4. MODEL LST-B & LST-S", href: "#sec-model-lst-bs" },
    { label: "1.5. MODEL LST-F", href: "#sec-model-lst-f" },
    { label: "1.6. MODEL LST-V", href: "#sec-model-lst-v" },
    { label: "1.7. Combined Filter & Damper", href: "#sec-model-combined" },
    { label: "1.8. HORIZONTAL SECTION & 'Z' Profile", href: "#sec-horizontal-section" },
    { label: "2. Performance Data", href: "#sec-performance" },
    { label: "3. Ordering Procedure", href: "#sec-ordering" },
    { label: "3.1. Fixing Details", href: "#sec-fixing" },
    { label: "3.2. Available Finish", href: "#sec-finish" },
    { label: "4. Suggested Sound Levels", href: "#sec-sound-levels" },
  ];

  return (
    <article className="bg-[#F8FAFC] min-h-screen pt-28 md:pt-36 pb-28 text-[#0A2540] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
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
            Sand Trap Louvers
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Engineered architectural air intake louvers calibrated to extract airborne sand and particulate matter at low intake velocities, equipped with self-emptying base trays, insect screens, and opposed blade volume dampers.
          </p>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Sand%20Trap%20Louvers"
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

            {/* 1. INTRODUCTION & SILENT FEATURES */}
            <section id="sec-intro" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>

              <div id="sec-features" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Silent Features</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  ALUGRIDX Sand Trap Louvres are manufactured to highest standards and designed to separate dust and sand from air stream at low velocities and moderate pressure drop, it will separate up to of solid particles held in the atmosphere.
                </p>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed pt-2">
                  <li><strong>•</strong> Available in two different types of construction: mill finish aluminum and galvanized sheet steel.</li>
                  <li><strong>•</strong> Provided with a self-emptying base plate and a 'Z' profile in case of multiple units installation one above the other.</li>
                  <li><strong>•</strong> Can be provided with a detachable filter of 25 mm / 50 mm thickness for better filtration.</li>
                  <li><strong>•</strong> Can be provided with an opposed blade Volume Control Damper for positive air volume control.</li>
                </ul>
              </div>

              {/* 1.2 Available Standard Sizes */}
              <div id="sec-sizes" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Available Standard Sizes
                </h3>

                {/* Sizes Row Preview */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-3">L</th>
                        <th className="p-3">200</th>
                        <th className="p-3">300</th>
                        <th className="p-3">400</th>
                        <th className="p-3">500</th>
                        <th className="p-3">600</th>
                        <th className="p-3">700</th>
                        <th className="p-3">800</th>
                        <th className="p-3">900</th>
                        <th className="p-3">1000</th>
                        <th className="p-3">1100</th>
                        <th className="p-3">1200</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-[#0A2540] font-sans">150</td>
                        <td className="p-3">200</td>
                        <td className="p-3">300</td>
                        <td className="p-3">400</td>
                        <td className="p-3">500</td>
                        <td className="p-3">600</td>
                        <td className="p-3">700</td>
                        <td className="p-3">800</td>
                        <td className="p-3">900</td>
                        <td className="p-3">1100</td>
                        <td className="p-3">1200</td>
                        <td className="p-3">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Nomenclature Matrix */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 mt-4">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">MODEL</th>
                        <th className="p-4">NOMENCLATURE</th>
                        <th className="p-4">ACCESSORIES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {nomenclature.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.model}</td>
                          <td className="p-4 font-bold text-[#3B82F6]">{row.code}</td>
                          <td className="p-4 font-sans font-medium">{row.acc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Sand%20Trap%20Louvers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* MODEL LST */}
            <section id="sec-model-lst" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL LST
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                Air Intake Sand Trap Louver manufactured out of aluminum (Suffix 'A') or galvanized sheet steel (Suffix 'S').
              </p>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/sand-trap-louvers/58ad8352-b808-4f3f-8fff-035eed81ba3c.webp"
                  alt="MODEL LST Cross Section Schematic"
                  className="max-w-xl w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  MODEL LST – Nominal Size - 10 mm / Nominal Size + 110 mm
                </span>
              </div>
            </section>

            {/* MODEL LST-B & LST-S */}
            <section id="sec-model-lst-bs" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL LST-B & LST-S
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                Air Intake Sand Trap Louver same as model LST model but with a bird screen or insect screen respectively as accessory.
              </p>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/sand-trap-louvers/image-2.webp"
                  alt="MODEL LST-B and LST-S Cross Section Schematic"
                  className="max-w-xl w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  MODEL LST-B / LST-S – Integrated Screen Accessory
                </span>
              </div>
            </section>

            {/* MODEL LST-F */}
            <section id="sec-model-lst-f" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL LST-F
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                Air Intake Sand Trap Louver same as model LST but is provided with a removable type aluminum filter as accessory.
              </p>
              <ul className="text-base text-slate-700 leading-relaxed">
                <li>• The filter thickness available is <strong>25 mm & 50 mm</strong>.</li>
              </ul>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mt-2">
                <img
                  src="/images/products/sand-trap-louvers/D04A2800-C48A-494F-8FAD-ABFEE3BCACDA.webp"
                  alt="MODEL LST-F with Removable Filter Media"
                  className="max-w-xl w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  MODEL LST-F – Removable Filter Bank Section
                </span>
              </div>
            </section>

            {/* MODEL LST-V */}
            <section id="sec-model-lst-v" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL LST-V
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                Air Intake Sand Trap Louver same as model LST but with an opposed blade Volume Control Damper.
              </p>
              <ul className="text-base text-slate-700 leading-relaxed">
                <li>• The Damper can be operated through a lever projected.</li>
              </ul>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mt-2">
                <img
                  src="/images/products/sand-trap-louvers/image2-2.webp"
                  alt="MODEL LST-V with Opposed Blade Volume Control Damper"
                  className="max-w-xl w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  MODEL LST-V – Opposed Blade Damper Attachment
                </span>
              </div>
            </section>

            {/* COMBINED FILTER & DAMPER VARIANT */}
            <section id="sec-model-combined" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL LST-B & LST-S (Combined Option)
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                Air Intake Sand Trap Louver same as model LST model but with bird screen or insect screen respectively as accessory and rear filter attachment.
              </p>
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/sand-trap-louvers/B348F7F7-288F-449B-A1FB-C5D9666C7E03.webp"
                  alt="Combined Filter and Screen Variant"
                  className="max-w-xl w-full h-auto object-contain"
                />
              </div>
            </section>

            {/* HORIZONTAL SECTION & 'Z' PROFILE */}
            <section id="sec-horizontal-section" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  HORIZONTAL SECTION
                </h2>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/sand-trap-louvers/37CBB1E3-FDD2-4BD4-A07A-36A2B5E99CCE-2-e1764952114647.webp"
                  alt="Horizontal Section Pitch Diagram (100 mm, 50 mm, 150 mm)"
                  className="max-w-xl w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  Horizontal Section: Blade Pitch 100 mm, 50 mm, 150 mm Spacing
                </span>
              </div>

              {/* Z Profile Assembly */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/sand-trap-louvers/B952B4F9-C78B-4347-A013-1FA6CAC7691F-2.webp"
                    alt="'Z' profile to combine the mounting of units one above the other"
                    className="max-w-sm w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm font-mono text-slate-600 text-center">
                  'Z' profile to combine the mounting of units one above the other to enable continuous architectural stacking.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20drawings%20for%20Sand%20Trap%20Louver%20Assembly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 2. PERFORMANCE DATA */}
            <section id="sec-performance" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Performance Data
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  For Sand Trap Louver Models LST – ‘B’ / ‘S’ / ‘V’ / ‘F’ / ‘FV’
                </p>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/sand-trap-louvers/11-1.webp"
                  alt="Efficiency and Pressure Drop Vs Velocity Curve"
                  className="max-w-md w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  Efficiency & Pressure Drop vs Velocity (m/sec)
                </span>
              </div>

              {/* Free Area Table */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  Effective Free Area Matrix (m²) – L × H mm
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-3">L × H mm</th>
                        {freeAreaCols.map((col, idx) => (
                          <th key={idx} className="p-3 text-center">{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {freeAreaRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-[#0A2540] font-sans">{row.h}</td>
                          {row.vals.map((v, cIdx) => (
                            <td key={cIdx} className="p-3 text-center">{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20aerodynamic%20data%20for%20Sand%20Trap%20Louvers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. ORDERING PROCEDURE & FINISH */}
            <section id="sec-ordering" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Ordering Procedure
                </h2>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/sand-trap-louvers/AC6925E3-C526-4217-A331-B20F65CD07BF.webp"
                  alt="Sand Trap Louver Ordering Procedure Code Structure"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>

              {/* 3.1 Fixing Details */}
              <div id="sec-fixing" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Fixing Details</h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Concealed type fixing (Suffix 'C') is the Standard supply.</li>
                  <li><strong>•</strong> Recommended for side wall installation.</li>
                </ul>
              </div>

              {/* 3.2 Available Finish */}
              <div id="sec-finish" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Available Finish</h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Mill Finish Aluminum (Suffix 'A')</li>
                  <li><strong>•</strong> Galvanized Steel Sheet (Suffix 'S')</li>
                  <li><strong>•</strong> Powder Coated Color Finish</li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20finish%20samples%20for%20Sand%20Trap%20Louvers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. SUGGESTED SOUND LEVELS */}
            <section id="sec-sound-levels" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-slate-200">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                    Suggested Sound Levels
                  </h2>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                    Acoustic Criteria by Category & Space Type
                  </p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-sm text-slate-500 font-bold uppercase mr-1">Page</span>
                  <button
                    onClick={() => setSoundPage(1)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold font-mono transition-colors ${
                      soundPage === 1 ? "bg-[#0A2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setSoundPage(2)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold font-mono transition-colors ${
                      soundPage === 2 ? "bg-[#0A2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    2
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                      <th className="p-4">Category</th>
                      <th className="p-4">Space Type</th>
                      <th className="p-4 font-mono">Range of sound levels (dB A)</th>
                      <th className="p-4 font-mono">Range of NC curves (NC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {(soundPage === 1 ? soundLevelsP1 : soundLevelsP2).map((r, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540]">{r.cat}</td>
                        <td className="p-4 font-medium">{r.space}</td>
                        <td className="p-4 font-mono font-bold text-[#3B82F6]">{r.db}</td>
                        <td className="p-4 font-mono">{r.nc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20complete%20submittal%20and%20pricing%20for%20Sand%20Trap%20Louvers"
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
              <nav className="space-y-2">
                {tocLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="block py-2 px-3 rounded-xl text-slate-700 hover:text-[#3B82F6] hover:bg-slate-50 text-sm font-semibold transition-colors"
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