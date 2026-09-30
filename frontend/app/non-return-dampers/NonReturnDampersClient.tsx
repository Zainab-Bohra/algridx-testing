"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function NonReturnDampersClient() {
  // Standard Sizes Table Data
  const standardSizes = [
    { l: "150", w: "150" },
    { l: "200", w: "200" },
    { l: "300", w: "300" },
    { l: "400", w: "400" },
    { l: "500", w: "500" },
    { l: "600", w: "600" },
    { l: "700", w: "700" },
    { l: "800", w: "800" },
    { l: "900", w: "900" },
    { l: "1000", w: "1000" },
  ];

  // Performance Models Table Data
  const modelsList = [
    { model: "GL-RC-E", type: "Gravity Louvers for External Wall Mounting" },
    { model: "GL-C", type: "Gravity Louvers with Round Neck" },
    { model: "GL-RC-I", type: "Gravity Louvers for Internal Wall Mounting" },
    { model: "NRD-RC-F", type: "Non-Return Damper Flange Type for Duct Mounting" },
    { model: "NRD-RC-S", type: "Non-Return Damper with Straight Ends for Duct Mounting" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Available Standard Sizes", href: "#sec-standard-sizes" },
    { label: "1.2. MODEL GL-RC-E (External)", href: "#sec-model-gl-rc-e-ext" },
    { label: "1.3. MODEL GL-RC-E (Round Neck)", href: "#sec-model-gl-c" },
    { label: "1.4. MODEL GL-RC-E (Internal)", href: "#sec-model-gl-rc-e-int" },
    { label: "1.5. MODEL NRD-RC-F", href: "#sec-model-nrd-rc-f" },
    { label: "1.6. MODEL NRD-RC-S", href: "#sec-model-nrd-rc-s" },
    { label: "2. Performance Data", href: "#sec-performance" },
    { label: "2.1. NOMENCLATURE", href: "#sec-nomenclature" },
    { label: "3. Ordering Procedures", href: "#sec-ordering" },
    { label: "3.1. Ordering Data", href: "#sec-ordering-data" },
    { label: "3.2. Available Finish", href: "#sec-available-finish" },
    { label: "3.3. Type of Fixing", href: "#sec-type-fixing" },
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
            Non-Return Dampers / Gravity Louvers
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Non-Return%20Dampers"
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

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  ALUGRIDX Non-Return Dampers are also known as Gravity Dampers, Back Draught Dampers, and Pressure Relief Dampers.
                </p>
                <p>
                  Non-Return Dampers are air-operated, opening or closing dampers for air intake, discharge and/or pressure-relief vents in air-conditioning and ventilation systems.
                </p>
                <ul className="space-y-2.5 pt-2">
                  <li><strong>•</strong> The frame is manufactured from high-quality aluminum / galvanized sheet steel of <strong>1.1 mm thickness</strong>.</li>
                  <li><strong>•</strong> The blades are manufactured from high-quality aluminum sheets of <strong>0.5 mm / 0.7 mm thickness</strong>.</li>
                  <li><strong>•</strong> The blades are fitted with Nylon bushes to give a rattle-free and smooth performance.</li>
                  <li><strong>•</strong> The Nylon bushes are fixed through galvanized steel rods to the main frame for strong and rigid construction and therefore a smooth performance during variable air pressure.</li>
                  <li><strong>•</strong> The frame is fitted internally with an aluminum / galvanized sheet steel angle to prevent over-movement of the blade.</li>
                  <li><strong>•</strong> Additional center partition shall be provided if L or H dimension is more than <strong>900 mm</strong>.</li>
                </ul>
              </div>

              {/* 1.1 Available Standard Sizes */}
              <div id="sec-standard-sizes" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Standard Sizes
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm border-collapse font-sans">
                    <thead>
                      <tr className="border-b border-slate-200 text-[#0A2540] font-bold">
                        <th className="p-3.5">L</th>
                        {standardSizes.map((item, idx) => (
                          <th key={idx} className="p-3.5">{item.l}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr>
                        <td className="p-3.5 font-bold text-[#0A2540]">W</td>
                        {standardSizes.map((item, idx) => (
                          <td key={idx} className="p-3.5">{item.w}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1.2 MODEL GL-RC-E (External Face Wall) */}
              <div id="sec-model-gl-rc-e-ext" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL GL-RC-E
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  A Gravity Louver / Back Draught Damper for the installation on the <strong>External face of the wall</strong>.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/nrd/gl-rc-e-external.webp"
                    alt="MODEL GL-RC-E External Face Wall Installation"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL GL-RC-E – External Face of Wall Mounting
                  </span>
                </div>
              </div>

              {/* 1.3 MODEL GL-RC-E with Round Neck (EL: GL-C) */}
              <div id="sec-model-gl-c" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL GL-RC-E
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  A Gravity Louver / Back Draught Damper for the installation on the <strong>External face of the wall</strong> with Round Neck Transition (EL: GL-C).
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/nrd/gl-c-round.webp"
                    alt="MODEL GL-C Gravity Louver with Round Neck"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL GL-C – Gravity Louver with Round Neck Configuration
                  </span>
                </div>
              </div>

              {/* 1.4 MODEL GL-RC-E (Internal Face Wall) */}
              <div id="sec-model-gl-rc-e-int" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL GL-RC-E
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  A Gravity Louver / Back Draught Damper for the installation on the <strong>Internal face of the wall</strong>.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/nrd/gl-rc-e-internal.webp"
                    alt="MODEL GL-RC-E Internal Face Wall Installation"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL GL-RC-E – Internal Face of Wall Mounting
                  </span>
                </div>
              </div>

              {/* 1.5 MODEL NRD-RC-F (Flanged Type Duct Mounted) */}
              <div id="sec-model-nrd-rc-f" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL NRD-RC-F
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  A Flanged-Type Duct mounted Non-Return Damper.
                </p>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> The outer frame is manufactured from <strong>galvanized sheet steel of 1.2 mm thickness</strong>.</li>
                  <li><strong>•</strong> The blades are manufactured from <strong>aluminum sheet of 0.5 mm / 0.7 mm thickness</strong> in mill finish and are fixed to the main frame by means of <strong>galvanized steel rod of 2 mm / 3 mm dia</strong>.</li>
                </ul>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/nrd/nrd-rc-f-flange.webp"
                    alt="MODEL NRD-RC-F Flanged Type Duct Mounted"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL NRD-RC-F – Flanged Duct Mounted Non-Return Damper
                  </span>
                </div>
              </div>

              {/* 1.6 MODEL NRD-RC-S (Straight End Duct Mounted) */}
              <div id="sec-model-nrd-rc-s" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL NRD-RC-S
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  A Straight-End Duct mounted Non-Return Damper.
                </p>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> The outer frame is manufactured from <strong>galvanized sheet steel of 1.2 mm thickness</strong>.</li>
                  <li><strong>•</strong> The blades are manufactured from <strong>aluminum sheet of 0.5 mm / 0.7 mm thickness</strong> in mill finish and are fixed to the main frame by means of <strong>galvanized steel rod of 2 mm / 3 mm dia</strong>.</li>
                </ul>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/nrd/nrd-rc-s-straight.webp"
                    alt="MODEL NRD-RC-S Straight End Duct Mounted"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL NRD-RC-S – Straight End Duct Mounted Non-Return Damper
                  </span>
                </div>
              </div>

              {/* Green Get Quote Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Non-Return%20Dampers"
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
              </div>

              {/* 2.1 Nomenclature */}
              <div id="sec-nomenclature" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  NOMENCLATURE
                </h3>
                <div className="space-y-2 font-mono text-sm sm:text-base text-slate-700">
                  <p><strong>Pt (Pa):</strong> ........................................ Pressure Drop</p>
                  <p><strong>Vf (m/sec):</strong> .................................... Air Velocity based on nominal size. (free discharge)</p>
                </div>

                {/* Characteristic Curve */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mt-4">
                  <img
                    src="/images/products/nrd/nrd-performance-chart.webp"
                    alt="Non Return Damper Pressure Drop vs Velocity Performance Curve"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    ΔPr (Po) vs Vf (m/sec) Characteristic Curve
                  </span>
                </div>

                {/* Models Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 font-mono mt-6">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">MODEL</th>
                        <th className="p-4">TYPES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {modelsList.map((m, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{m.model}</td>
                          <td className="p-4 font-sans">{m.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20performance%20selection%20for%20Non-Return%20Dampers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. ORDERING PROCEDURES */}
            <section id="sec-ordering" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Ordering Procedures
                </h2>
              </div>

              {/* 3.1 Ordering Data Flowchart */}
              <div id="sec-ordering-data" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Ordering Data
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/nrd/nrd-ordering-data.webp"
                    alt="Non Return Damper Ordering Data Flowchart"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* 3.2 Available Finish */}
              <div id="sec-available-finish" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Finish
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Powder Coated color finish</li>
                  <li><strong>•</strong> Natural Anodized Aluminum</li>
                  <li><strong>•</strong> Mill finish Aluminum</li>
                  <li><strong>•</strong> Galvanized sheet steel frame for duct-mounted type and Round neck type</li>
                </ul>
              </div>

              {/* 3.3 Type of Fixing */}
              <div id="sec-type-fixing" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Type of Fixing
                </h3>
                <ul className="space-y-3 text-base text-slate-700 leading-relaxed">
                  <li>
                    <strong>• Countersunk screw fixing suffix 'S'</strong> (standard supply)
                    <p className="text-sm text-slate-500 pl-4 mt-0.5">(recommended for side wall applications)</p>
                  </li>
                  <li>
                    <strong>• Spring clip concealed fixing suffix 'C'</strong>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20custom%20finish%20and%20quotation%20for%20Non-Return%20Dampers"
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