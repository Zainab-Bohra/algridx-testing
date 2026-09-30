"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function SupplyReturnRegistersClient() {
  const tocLinks = [
    { label: "1. Supply Air Registers", href: "#sec-supply-registers" },
    { label: "1.1. Supply Registers (Double Deflection)", href: "#sec-supply-dd" },
    { label: "1.2. Return Air Grilles (Double Deflection)", href: "#sec-return-dd" },
    { label: "1.3. Supply Registers (Single Deflection)", href: "#sec-supply-sd" },
    { label: "1.4. Return Air Grilles (Single Deflection)", href: "#sec-return-sd" },
    { label: "1.5. Exhaust Air Grilles – 45° Fixed Blades", href: "#sec-exhaust-45" },
    { label: "1.6. Models (Supply & Return Air Registers)", href: "#sec-models" },
    { label: "1.7. THROW Assessment", href: "#sec-throw" },
    { label: "1.8. EXPANSION ANGLE", href: "#sec-expansion" },
    { label: "1.9. Correction Factors For Deflection", href: "#sec-correction" },
    { label: "1.10. DROP Assessment", href: "#sec-drop" },
    { label: "1.11. EXAMPLE & METHOD (Drop Calculation)", href: "#sec-method" },
    { label: "1.12. Ak Value Chart", href: "#sec-ak-chart" }
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
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Supply/Return Air Registers, Grilles, and Fresh Air Grilles
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Engineered architectural grilles with individually adjustable horizontal and vertical airfoil blades, opposed blade dampers, and complete aerodynamic sizing nomograms.
          </p>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quote%20for%20Supply%20and%20Return%20Air%20Registers"
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
            
            {/* DIMENSION DATA SECTION */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-10">
              
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimension Data
                </h2>
              </div>

              {/* 1. Supply Air Registers */}
              <section id="sec-supply-registers" className="space-y-6 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  Supply Air Registers
                </h3>
                
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/registers/supply-2.webp"
                    alt="(SAR-DD-H) Supply Air Register Horizontal and Vertical"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    (SAR-DD-H) Supply Air Register Horizontal and Vertical
                  </span>
                </div>
              </section>

              {/* 1.1 Supply Registers (Double Deflection) */}
              <section id="sec-supply-dd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Supply Registers (Double Deflection):
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Design:</strong> Equipped with two rows of adjustable blades, one horizontal and one vertical.</li>
                  <li><strong>• Function:</strong> Offers enhanced control over air direction, allowing adjustments both vertically and horizontally.</li>
                  <li><strong>• Application:</strong> Suitable for spaces requiring precise and versatile air distribution, especially where multi-directional airflow is needed.</li>
                </ul>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-4">
                  <img
                    src="/images/products/registers/supply-6.webp"
                    alt="(RAG-DD-V) Supply Air Register Horizontal and Vertical"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    (RAG-DD-V) Supply Air Register Horizontal and Vertical
                  </span>
                </div>
              </section>

              {/* 1.2 Return Air Grilles (Double Deflection) */}
              <section id="sec-return-dd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Return Air Grilles (Double Deflection):
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Design:</strong> Feature two sets of blades, both horizontal and vertical, which can be fixed or adjustable.</li>
                  <li><strong>• Function:</strong> Allows modest control over the direction of incoming return air in two planes.</li>
                  <li><strong>• Application:</strong> Useful in scenarios where there's a need to slightly adjust the direction of return air, often in more complex HVAC setups.</li>
                </ul>

                <p className="text-base text-slate-700 font-medium pt-2">
                  <strong>• In Summary:</strong> Double-deflection units offer nuanced control in two planes – Ideal for spaces needing precision and multi-directional airflow management.
                </p>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-4">
                  <img
                    src="/images/products/registers/supply-1-1.webp"
                    alt="Return Air Grilles Double Deflection Schematic"
                    className="max-w-full h-auto object-contain"
                    
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
(SAR-SD-H) Supply Air Register Horizontal and Vertical

                  </span>
                </div>
                
              </section>

              {/* 1.3 Supply Registers (Single Deflection) */}
              <section id="sec-supply-sd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Supply Registers (Single Deflection):
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Design:</strong> Feature a single row of adjustable blades, which can be either horizontal or vertical.</li>
                  <li><strong>• Function:</strong> Allows for control of airflow direction in one plane, either horizontally or vertically, but not both.</li>
                  <li><strong>• Application:</strong> Ideal for targeted air distribution in specific directions, such as directing air along the ceiling or down a wall.</li>
                </ul>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-4">
                  <img
                    src="/images/products/registers/supply-6.webp"
                    alt="(SAR-SD-H) Supply Air Register Horizontal and Vertical"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
(RAG-SD-V) Supply Air Register Horizontal and Vertical

                  </span>
                </div>
              </section>

              {/* 1.4 Return Air Grilles (Single Deflection) */}
              <section id="sec-return-sd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Return Air Grilles (Single Deflection):
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>• In Summary:</strong> Single-deflection units (both supply registers and return air grilles) provide direction control in one plane, making them suitable for straightforward air distribution tasks.
                </p>
              </section>

              {/* 1.5 Exhaust Air Grilles – 45° Fixed Blades */}
              <section id="sec-exhaust-45" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Exhaust Air Grilles – 45° Fixed Blades:
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Blade Design:</strong> Grilles with fixed blades at a 45 degree angle, set at a fixed angle to the face of the grille.</li>
                  <li><strong>• Material:</strong> Usually made from aluminum or stainless steel for durability and longevity.</li>
                  <li><strong>• Construction:</strong> Rigid construction, designed to provide efficient air passage and protection from rain/debris when used externally.</li>
                  <li><strong>• Exhaust Function:</strong> Efficiently remove air from spaces such as kitchens, bathrooms, industrial areas.</li>
                  <li><strong>• External Use:</strong> Prevents ingress of rain; maintains airflow.</li>
                  <li><strong>• Aesthetics & Directional Flow:</strong> Can be aesthetically pleasing and help direct air in a specific direction.</li>
                </ul>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-4">
                  <h4 className="text-lg font-serif italic text-[#0A2540] mb-2 text-center">
                    (EAG-SD) Exhaust Air Grille Single Deflection
                  </h4>
                  <img
                    src="/images/products/registers/Supply-7.webp"
                    alt="(EAG-SD) Exhaust Air Grille Single Deflection"
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </section>

            </div>

            {/* QUICK QUOTE TRIGGER */}
            <div className="w-full">
              <a
                href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Supply%20and%20Return%20Air%20Registers"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
              >
                <MessageCircle size={18} />
                <span>Get Quote !</span>
              </a>
            </div>

            {/* MODELS SECTION */}
            <section id="sec-models" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Models (Supply & Return Air Registers)
                </h2>
              </div>

              {/* MODEL RAG-V */}
              <div className="space-y-3">
                <p className="text-base text-slate-700">
                  Double deflection Return Air Grille with individually adjustable front vertical and rear horizontal airfoil blades.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL RAG-V</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/1.webp" alt="MODEL RAG-V" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL RAG-H */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Double deflection Return Air Grille with individually adjustable front horizontal and rear vertical airfoil blades.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL RAG-H</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/2.webp" alt="MODEL RAG-H" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL SAR-V */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Double deflection Supply Air Register same as RAG-V but with an Opposed Blade Damper.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL SAR-V</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/3.webp" alt="MODEL SAR-V" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL SAR-H */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Double deflection Supply Air Register same as RAG-H but with an Opposed Blade Damper.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL SAR-H</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/4.webp" alt="MODEL SAR-H" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL RAG-HF */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Return Air Grille with fixed horizontal blades with a 45° angle.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL RAG-HF</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/5.webp" alt="MODEL RAG-HF" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL RAG-V (Vertical Blades) */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Return Air Grille with individually adjustable vertical airfoil blades.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL RAG-V (Adjustable)</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/6.webp" alt="MODEL RAG-V Adjustable" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL RAG-H (Horizontal Blades) */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Return Air Grille with individually adjustable horizontal blades.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL RAG-H (Horizontal)</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/7.webp" alt="MODEL RAG-H Horizontal" className="w-full h-auto" />
                </div>
              </div>

              {/* MODEL RAR-H */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <p className="text-base text-slate-700">
                  Return Air Register same as RAG-HF but with an Opposed Blade Volume Control Damper.
                </p>
                <h4 className="font-extrabold text-[#0A2540] text-lg">MODEL RAR-H</h4>
                <div className="rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/products/registers/8.webp" alt="MODEL RAR-H" className="w-full h-auto" />
                </div>
              </div>

            </section>

            {/* AIR STREAM FLOW ASSESSMENT */}
            <section id="sec-throw" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Stream Flow Assessment
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">THROW</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The throws, as shown in the Deflection diagram, are based on a Terminal Velocity of 0.25 m/s measured in the axis of the jet. The throws for other Terminal Velocities can be obtained by using the Correction Factors chart below.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col items-center">
                    <img src="/images/products/registers/9.webp" alt="0 Deflection" className="w-full h-auto object-contain" />
                    <span className="text-xs font-bold uppercase mt-2 text-slate-600">0° Deflection</span>
                  </div>
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col items-center">
                    <img src="/images/products/registers/10.webp" alt="22.5 Deflection" className="w-full h-auto object-contain" />
                    <span className="text-xs font-bold uppercase mt-2 text-slate-600">22.5° Deflection</span>
                  </div>
                </div>
              </div>

              {/* EXPANSION ANGLE */}
              <div id="sec-expansion" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">EXPANSION ANGLE</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  With the straight blade setting, the airflow is discharged at an approximate expansion angle of <strong>18° – 20°</strong>.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  With the blade setting at 22° on both sides, the expansion angle is increased and the throw is decreased. The expansion angle then becomes approximately <strong>35°</strong>.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  With the blade setting at 45° on both sides, the expansion angle then becomes approximately <strong>60°</strong>. For other data changes, refer to the Correction Factor chart below.
                </p>

                <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex justify-center mt-3">
                  <img src="/images/products/registers/11.webp" alt="Expansion Angle Diagram" className="max-w-md w-full h-auto object-contain" />
                </div>
              </div>

              {/* CORRECTION FACTORS TABLE */}
              <div id="sec-correction" className="pt-6 border-t border-slate-200 space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Correction Factors For Deflection
                </h3>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4">Parameter</th>
                        <th className="p-4">22° (35° Angle of Discharge)</th>
                        <th className="p-4">45° (60° Angle of Discharge)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-sans font-bold text-[#0A2540]">Lt.</td>
                        <td className="p-4">x 0.77</td>
                        <td className="p-4">x 0.55</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-sans font-bold text-[#0A2540]">Vk</td>
                        <td className="p-4">x 1.15</td>
                        <td className="p-4">x 1.25</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-sans font-bold text-[#0A2540]">pt</td>
                        <td className="p-4">x 1.30</td>
                        <td className="p-4">x 1.60</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-sans font-bold text-[#0A2540]">NR</td>
                        <td className="p-4">+ 3.00</td>
                        <td className="p-4">+ 5.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </section>

            {/* AIR STREAM DROP ASSESSMENT */}
            <section id="sec-drop" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Stream Drop Assessment
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">DROP</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The data for Drop shown here is for a type of installation without a ceiling effect. The drop due to the temperature differential is insignificant if there is a ceiling effect, and if the Terminal Velocity at the opposite wall is at least 0.375 m/s. The drop due to the spread of the airflow is always present.
                </p>
              </div>

              {/* EXAMPLE & METHOD */}
              <div id="sec-method" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">EXAMPLE</h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    As shown in the Drop Chart, the throw at 0.25 m/s : <strong>Lt. = 6.0 m</strong>. Discharge velocity <strong>Vk = 3 m/s</strong> at <strong>-10° temp. diff</strong>.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">METHOD</h3>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Connect the values for Vk and Lt. by a straight line. The isothermal drop due to the spread can be read on the line of the throw as : <strong>Ld. = 0.75 m</strong>.
                  </p>
                  <p className="text-base text-slate-700 leading-relaxed">
                    On the middle scale, read the data for -10° temp. diff : <strong>Ldx. = 1.45/1.65 m</strong>
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-base font-bold text-[#0A2540]">
                    Total Drop: Ldt. = Ldx. + Ld. = 1.45/1.65 + 0.75 = 2.4 m
                  </div>
                  <p className="text-base text-slate-700 leading-relaxed pt-1">
                    The drop can be corrected by setting an upward deflection of 15° to 20°. The correction “B” of the drop must be mounted at a distance “A” from the ceiling (0.6 mm minimum).
                  </p>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-base font-bold text-[#0A2540]">
                    A = 0.135 x L0.25 and B = 0.22 x L0.25
                  </div>
                </div>

                {/* NOMOGRAM & CURVES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col items-center">
                    <img src="/images/products/registers/sup-1.webp" alt="Alignment Nomogram" className="w-full h-auto object-contain" />
                    <span className="text-xs font-bold uppercase mt-2 text-slate-600">Nomogram (Vk, Δt, Lt, Ld)</span>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col items-center">
                      <img src="/images/products/registers/supppppp-1.webp" alt="Drop Trajectory Profile" className="w-full h-auto object-contain" />
                      <span className="text-xs font-bold uppercase mt-2 text-slate-600">Drop Trajectory Profile</span>
                    </div>
                    <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 flex flex-col items-center">
                      <img src="/images/products/registers/supp.webp" alt="B vs A Drop Correction Chart" className="w-full h-auto object-contain" />
                      <span className="text-xs font-bold uppercase mt-2 text-slate-600">B(m) vs A(m) Drop Correction Chart</span>
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* AK VALUE CHART */}
            <section id="sec-ak-chart" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Ak Value Chart
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  Effective Face Area Matrix ($m^2$) for Standard Duct Dimensions
                </p>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-8 flex flex-col items-center justify-center">
                <img
                  src="/images/products/registers/supply-8.webp"
                  alt="Ak Value Chart for Supply and Return Air Registers"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20complete%20submittal%20and%20pricing%20for%20Supply/Return%20Air%20Registers"
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