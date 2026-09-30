"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function LinearBarGrillesClient() {
  const miteredTableData = [
    { w: "100", x: "300", y: "300", q: "45°" },
    { w: "150", x: "600", y: "600", q: "90°" },
    { w: "200", x: "800", y: "800", q: "135°" },
    { w: "250", x: "1000", y: "1000", q: "—" },
    { w: "300", x: "1200", y: "1200", q: "—" },
  ];

  const akTable1 = [
    { size: "1000 x 50", pitch6: "0.020", pitch12: "0.029" },
    { size: "1000 x 100", pitch6: "0.041", pitch12: "0.059" },
    { size: "1000 x 150", pitch6: "0.063", pitch12: "0.093" },
    { size: "1000 x 200", pitch6: "0.090", pitch12: "0.129" },
    { size: "1000 x 250", pitch6: "0.115", pitch12: "0.164" },
    { size: "1000 x 300", pitch6: "0.144", pitch12: "0.199" },
  ];

  const akTable2 = [
    { size: "1000 x 100", pitch6: "—", pitch12: "0.059" },
    { size: "1000 x 150", pitch6: "—", pitch12: "0.093" },
    { size: "1000 x 200", pitch6: "—", pitch12: "0.129" },
    { size: "1000 x 250", pitch6: "—", pitch12: "0.164" },
    { size: "1000 x 300", pitch6: "—", pitch12: "0.199" },
  ];

  const damperAdjTable = [
    { open: "100", pt: "x 1.0", nr: "+0" },
    { open: "50", pt: "x 2.5", nr: "+10" },
    { open: "25", pt: "x 6.0", nr: "+20" },
  ];

  const vtTable = [
    { vtMs: "0.25", vtFpm: "50", lt: "x 1" },
    { vtMs: "0.5", vtFpm: "100", lt: "x 0.5" },
    { vtMs: "0.625", vtFpm: "125", lt: "x 0.4" },
  ];

  const reflectionTableLengths = ["1", "1.5", "2", "2.5", "3", "4", "5", "6"];
  const reflectionTableT = ["x1", "+1.05", "x1.1", "+1.1", "+1.1", "+1.1", "x1.1", "+1.15"];
  const reflectionTableNR = ["+1", "+2", "+3", "+4", "+5", "+6", "+7", "—"];

  const tocLinks = [
    { label: "1. Dimension Data", href: "#sec-dimension-data" },
    { label: "1.1. Linear Bar Grille", href: "#sec-linear-bar-grille" },
    { label: "1.2. Linear Bar Deflection", href: "#sec-linear-bar-deflection" },
    { label: "1.3. Double Deflection Linear Bar Grille", href: "#sec-double-deflection-grille" },
    { label: "2. Linear Bar Register", href: "#sec-linear-bar-register" },
    { label: "2.1. Curved Linear Bar Register", href: "#sec-curved-register" },
    { label: "3. Technical Details & Dimensions (RLBG-DD & SLBR-DD)", href: "#sec-tech-details" },
    { label: "4. Flange / Assembly Options & Corners", href: "#sec-flange-options" },
    { label: "5. Standard Bar & Core Styles", href: "#sec-core-styles" },
    { label: "6. Engineering & Performance Data", href: "#sec-eng-data" },
    { label: "7. NOTES ON SELECTION", href: "#sec-notes-selection" },
    { label: "8. Linear Bar Grille (Ak Selection Tables)", href: "#sec-ak-tables" },
    { label: "9. CORRECTION FACTORS", href: "#sec-correction-factors" },
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
            Linear Bar Grilles
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            High-precision architectural linear bar grilles and registers with fixed horizontal bars, adjustable rear airfoil deflection blades, continuous alignment strips, and mitered corners for ceiling, sidewall, and sill installations.
          </p>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Linear%20Bar%20Grilles"
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

            {/* 1. DIMENSION DATA & MAIN OVERVIEW */}
            <section id="sec-dimension-data" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimension Data
                </h2>
              </div>

              {/* 1.1 Linear Bar Grille */}
              <div id="sec-linear-bar-grille" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Linear Bar Grille
                </h3>
                <h4 className="text-xl font-bold text-[#0A2540]">Description:</h4>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Frame and face bars are of high quality extruded aluminium profiled construction with the advantages of corrosion resistance and rigidity.</li>
                  <li><strong>•</strong> Horizontal face bars with 0°, 15°-1 way throw and 15°-2 way throw are fixed rigidly to the frame with 8 mm pipes.</li>
                  <li><strong>•</strong> Vertical aluminium aerofoil blades are fixed at the rear side of the frame by nylon bushes.</li>
                  <li><strong>•</strong> These blades can be adjusted manually and individually in the vertical plane to obtain optimum air distribution.</li>
                  <li><strong>•</strong> For perfect unbroken appearance of continuous runs, alignment strips are provided with no additional cost.</li>
                  <li><strong>•</strong> Total structure is manufactured by mechanical assembly, assuring rigidity and to maintain straight line appearance.</li>
                  <li><strong>•</strong> Supplied with C-clamps for concealed fixing.</li>
                </ul>
              </div>

              {/* 1.2 Linear Bar Deflection Schematic */}
              <div id="sec-linear-bar-deflection" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Linear Bar Deflection
                </h3>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/linear-bar/linear-bar.webp"
                    alt="Linear Bar Deflection Schematic Diagram"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    Cross-section: Listed Size L = Duct Size, Neck Size N = L - 10 mm, Overall Height D = L - 50 mm
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <h4 className="text-lg font-bold text-[#0A2540]">Description:</h4>
                  <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                    <li><strong>•</strong> Frame and face bars are of high quality extruded aluminium profiled construction with the advantages of corrosion resistance and rigidity.</li>
                    <li><strong>•</strong> Horizontal face bars with 0°, 15°-1 way throw and 15°-2 way throw are fixed rigidly to the frame with 8 mm pipes.</li>
                    <li><strong>•</strong> Vertical aluminium aerofoil blades are fixed at the rear side of the frame by nylon bushes. These blades can be adjusted manually and individually in the vertical plane to obtain optimum air distribution.</li>
                    <li><strong>•</strong> Grilles are fixed rigidly with an opposed blade damper by grippers to ensure positive control over the air stream. Damper blades can be screw operated from the face opening of the grille.</li>
                    <li><strong>•</strong> Provided with alignment strip for continuous appearance. Foam gasket is sealed around the back of the frame to avoid air leakage.</li>
                    <li><strong>•</strong> Supplied with C-clamps for concealed fixing.</li>
                  </ul>
                </div>
              </div>

              {/* 1.3 Double Deflection Linear Bar Grille */}
              <div id="sec-double-deflection-grille" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">DOUBLE DEFLECTION Linear Bar Grille</h3>
                </div>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/linear-bar/double-deflection.webp"
                    alt="Double Deflection Linear Bar Grille (12 mm pitch and 6 mm pitch)"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    Double Deflection Linear Bar Grille (12 mm pitch & 6 mm pitch)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Linear%20Bar%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 2. LINEAR BAR REGISTER & CURVED PROFILES */}
            <section id="sec-linear-bar-register" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Linear Bar Register
                </h2>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl font-bold text-[#0A2540]">Description:</h4>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Frame and face bars are of high quality extruded aluminium profiled construction with the advantages of corrosion resistance and rigidity.</li>
                  <li><strong>•</strong> Horizontal face bars with 0°, 15°-1 way throw and 15°-2 way throw are fixed rigidly to the frame with 8 mm pipes.</li>
                  <li><strong>•</strong> Grilles are fixed rigidly with opposed blade damper by grippers. This ensures positive control over the air stream. Damper blades can be screw operated from the face opening.</li>
                  <li><strong>•</strong> For perfect unbroken appearance of continuous runs, alignment strips are provided with no additional cost.</li>
                  <li><strong>•</strong> Foam gasket is sealed around the back of the frame as option to avoid air leakage.</li>
                  <li><strong>•</strong> Supplied with C-clamps for concealed fixing.</li>
                </ul>
              </div>

              {/* Single Deflection Linear Bar Register */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <div className="text-center space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">SINGLE DEFLECTION Linear Bar Register</h3>
                </div>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/linear-bar/regis-1.webp"
                    alt="Single Deflection Linear Bar Register Cross Section"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    Neck size = L - 10 mm, Overall height B = L + 50 mm, Pitch = 12 mm
                  </span>
                </div>
              </div>

              {/* 2.1 Curved Linear Bar Register */}
              <div id="sec-curved-register" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl font-bold text-[#0A2540]">Description:</h4>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Frame and face bars are of high quality extruded aluminium profiled construction with the advantages of corrosion resistance and rigidity.</li>
                  <li><strong>•</strong> Horizontal face bars with 0°-1 way throw and 15°-2 way throw are fixed rigidly to the frame with 8 mm pipes.</li>
                  <li><strong>•</strong> Vertical aluminium aerofoil blades are fixed at the rear side of the frame by nylon bushings.</li>
                  <li><strong>•</strong> These blades can be adjusted manually and individually in the vertical plane to obtain optimum air distribution.</li>
                  <li><strong>•</strong> Alignment strips are provided at no additional cost for a perfect unbroken appearance of continuous runs.</li>
                  <li><strong>•</strong> Curved linear bar grilles are available up to a length of 3 meters with a minimum radius of curvature of 1 meter.</li>
                  <li><strong>•</strong> Available without damper. Dampers can be provided to use in plenum boxes as an option.</li>
                  <li><strong>•</strong> The foam gasket is sealed around the back of the frame as an option to avoid air leakage.</li>
                  <li><strong>•</strong> Supplied with C-clamps for concealed fixing.</li>
                  <li><strong>•</strong> Standard application on curved walls.</li>
                </ul>

                <div className="pt-4">
                  <div className="text-center space-y-1 mb-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">DOUBLE DEFLECTION Curved Linear Bar Register</h3>
                  </div>
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                    <img
                      src="/images/products/linear-bar/regis-2.webp"
                      alt="Double Deflection Curved Linear Bar Register - Concave and Convex Types"
                      className="max-w-full h-auto object-contain"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                      Concave Type & Convex Type Curved Wall Deflection
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Curved%20Linear%20Bar%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. TECHNICAL DETAILS & DIMENSIONS */}
            <section id="sec-tech-details" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Technical Details & Dimensions
                </h2>
              </div>

              {/* Formula Variant 1 */}
              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL: RLBG · DD & SLBR · DD 
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-slate-700 font-mono bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div><strong>N</strong> – Nominal Size: L × W</div>
                  <div><strong>A</strong> – (L - 10 mm) × (W - 10 mm)</div>
                  <div><strong>B</strong> – (L - 54 mm) × (W - 54 mm)</div>
                  <div><strong>Fw</strong> – Frame Width = 30 mm</div>
                  <div><strong>Fd</strong> – Frame Depth = 45 mm</div>
                  <div><strong>Bp</strong> – Linear Bar Pitch = 6 mm or 12.5 mm</div>
                  <div className="md:col-span-2 pt-2 border-t border-slate-200">
                    <strong>Bt – Bar Thickness:</strong>
                    <div className="pl-4 font-sans text-sm mt-1 space-y-1">
                      <div>• 15° – 2 Way = 5 mm</div>
                      <div>• 15° – 1 Way = 3 mm</div>
                    </div>
                  </div>
                  <div><strong>Dp</strong> – Damper Pitch = 25 mm</div>
                  <div><strong>Dd</strong> – Damper Depth = 36 mm</div>
                  <div className="md:col-span-2"><strong>Bp</strong> – Pitch of the Vertical Rear Blade = 20 mm</div>
                </div>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-3">
                  <img
                    src="/images/products/linear-bar/image.webp"
                    alt="Linear Bar Grille RLBG-DD & Linear Bar Register SLBR-DD"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    LINEAR BAR GRILLE (MODEL: RLBG - DD) & LINEAR BAR REGISTER (MODEL: SLBR - DD)
                  </span>
                </div>
              </div>

              {/* Formula Variant 2 */}
              <div className="space-y-4 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL: RLBG · DD & SLBR · DD 
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-slate-700 font-mono bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div><strong>N</strong> – Nominal Size: L × W</div>
                  <div><strong>A</strong> – (L - 10 mm) × (W - 10 mm)</div>
                  <div><strong>B</strong> – (L - 54 mm) × (W - 54 mm)</div>
                  <div><strong>Fw</strong> – Frame Width = 30 mm</div>
                  <div><strong>Fd</strong> – Frame Depth = 27 mm</div>
                  <div><strong>Bp</strong> – Linear Bar Pitch = 6 mm or 12.5 mm</div>
                  <div className="md:col-span-2 pt-2 border-t border-slate-200">
                    <strong>Bt – Bar Thickness:</strong>
                    <div className="pl-4 font-sans text-sm mt-1 space-y-1">
                      <div>• 15° – 2 Way = 5 mm</div>
                      <div>• 15° – 1 Way = 3 mm</div>
                    </div>
                  </div>
                  <div><strong>Dp</strong> – Damper Pitch = 25 mm</div>
                  <div><strong>Dd</strong> – Damper Depth = 36 mm</div>
                </div>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-3">
                  <img
                    src="/images/products/linear-bar/image2.webp"
                    alt="Linear Bar Grille RLBG-SD & Linear Bar Register SLBR-SD"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    LINEAR BAR GRILLE (MODEL: RLBG - SD) & LINEAR BAR REGISTER (MODEL: SLBR - SD)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20technical%20drawings%20for%20Linear%20Bar%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. FLANGE / ASSEMBLY OPTIONS & CORNERS */}
            <section id="sec-flange-options" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Flange/Assembly Options
                </h2>
              </div>

              {/* Sill or Ceiling Mount 90 & 135 Corner */}
              <div className="space-y-4">
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/linear-bar/Screenshot-2025-12-01-at-1.46.44-PM-2.webp"
                    alt="Sill or Ceiling Mount 90 Corner and 135 Corner"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>

                <p className="text-base text-slate-700 leading-relaxed pt-2">
                  Special horizontal mitered corner available for floor, sill, and ceiling mounting applications to get an angle greater than 90° and less than 180°. Available in 0°, 15° one-way and two-way deflections, and are without dampers.
                </p>

                {/* Sizing Matrix Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 mt-3">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-mono">
                        <th className="p-4">W</th>
                        <th className="p-4">X</th>
                        <th className="p-4">Y</th>
                        <th className="p-4">Q</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                      {miteredTableData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.w}</td>
                          <td className="p-4">{row.x}</td>
                          <td className="p-4">{row.y}</td>
                          <td className="p-4 font-semibold text-[#3B82F6]">{row.q}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-base text-slate-700 leading-relaxed pt-2">
                  Standard 90° horizontal mitered corners are available for floor, sill, and ceiling mounting in 0°, 15° one-way or two-way deflection, and are without damper.
                </p>

                {/* End Flanges Diagram */}
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center mt-3">
                  <img
                    src="/images/products/linear-bar/image4.webp"
                    alt="Mitred End Flange Type 45 and Straight End Flange Type T"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    with Mitred End Flange Type - "45" (Left or Right side) | with Straight End Flange Type - "T" (Left or Right side)
                  </span>
                </div>
              </div>

              {/* Sill or Wall mount External & Internal Corners */}
              <div className="space-y-6 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Sill or Wall mount Corners
                </h3>

                {/* 90 External Corner */}
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-[#0A2540]">90° External Corner</h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Vertical outside mitered corners are available for vertical side wall application at the junction of two outside walls with a standard angle of <strong>90°</strong>, available in <strong>0°, 15° one-way</strong> and <strong>two-way deflections</strong>.
                  </p>
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                    <img
                      src="/images/products/linear-bar/image5.webp"
                      alt="Sill or Wall mount 90 External Corner"
                      className="max-w-sm w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* 90 Internal Corner */}
                <div className="space-y-3 pt-6 border-t border-slate-200">
                  <h4 className="text-lg font-bold text-[#0A2540]">90° Internal Corner</h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Vertical inside mitered corners are available for vertical side wall application at the junction of two inside walls with a standard angle of <strong>90°</strong>, available in <strong>0°, 15° one-way</strong> and <strong>two-way deflections</strong>.
                  </p>
                  <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col items-center justify-center">
                    <img
                      src="/images/products/linear-bar/image6.webp"
                      alt="Sill or Wall mount 90 Internal Corner"
                      className="max-w-sm w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Linear%20Bar%20Corner%20Assemblies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 5. STANDARD BAR & CORE STYLES */}
            <section id="sec-core-styles" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Standard Bar & Core Styles
                </h2>
              </div>

              {/* MODEL: RLBG - SD */}
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0A2540]">MODEL : RLBG – SD</h3>
                <p className="text-base text-slate-700">
                  Return Linear Bar Grille with horizontal face 0° deflection or 15° one-way or two-way deflection.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center">
                  <img src="/images/products/linear-bar/Screenshot-2025-12-01-at-2.46.37-PM.webp" alt="MODEL: RLBG - SD" className="max-w-full h-auto object-contain" />
                </div>
              </div>

              {/* MODEL: RLBR - SD */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-extrabold text-[#0A2540]">MODEL : RLBR – SD</h3>
                <p className="text-base text-slate-700">
                  Return Linear Bar Register same as RLBG-SD but with Opposed Blade Damper.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center">
                  <img src="/images/products/linear-bar/Screenshot-2025-12-01-at-2.54.38-PM.webp" alt="MODEL: RLBR - SD" className="max-w-full h-auto object-contain" />
                </div>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center mt-2">
                  <img src="/images/products/linear-bar/image7.webp" alt="0 Deflection, 15 Deflection 1-Way and 2-Way" className="max-w-md w-full h-auto object-contain" />
                </div>
              </div>

              {/* MODEL: RLBG-DD */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-extrabold text-[#0A2540]">MODEL : RLBG–DD</h3>
                <p className="text-base text-slate-700">
                  Return Linear Bar Grille with fixed horizontal face bar 0° deflection, 15° one-way or two-way deflection and vertical adjustable bars.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center">
                  <img src="/images/products/linear-bar/Screenshot-2025-12-08-at-12.12.15-AM.webp" alt="MODEL: RLBG-DD" className="max-w-full h-auto object-contain" />
                </div>
              </div>

              {/* MODEL: SLBR-DD */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-extrabold text-[#0A2540]">MODEL : SLBR–DD</h3>
                <p className="text-base text-slate-700">
                  Supply Linear Bar Register same as <strong>RLBG-DD</strong> but with Opposed Blade Damper.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 flex justify-center">
                  <img src="/images/products/linear-bar/Screenshot-2025-12-08-at-12.14.12-AM.webp" alt="MODEL: SLBR-DD" className="max-w-full h-auto object-contain" />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Standard%20Core%20Styles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 6. ENGINEERING & PERFORMANCE DATA */}
            <section id="sec-eng-data" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Engineering & Performance Data
                </h2>
              </div>
              <ul className="space-y-3 text-base text-slate-700 leading-relaxed">
                <li><strong>•</strong> A wide variety of core styles available.</li>
                <li><strong>•</strong> The Core Styles shown can be used with or without border frames.</li>
                <li><strong>•</strong> The linear bar spacing (bar pitch) of 6 mm and 12.5 mm are available only for 0° and 15° one-way deflection, and 12.5 mm bar pitch for 15° two-way deflection.</li>
                <li><strong>•</strong> The internal supporting bars are placed at 300 mm distance from each other.</li>
              </ul>
            </section>

            {/* 7. NOTES ON SELECTION */}
            <section id="sec-notes-selection" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight uppercase">
                  Notes On Selection
                </h2>
              </div>

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>• The throw is normally selected up to 3/4 of the room length.</strong><br />
                  For a large air volume where the throw is more than 3/4 of the room length, distributing the air volume over several outlets will reduce the throw.
                </p>
                <p>
                  <strong>•</strong> The drop of the selected outlet plus 1.8 m is the minimum grille or register height from the floor.
                </p>
                <p>
                  <strong>• From the quick selection diagram:</strong> the size of the grille/register can be selected taking into account the throw, velocity, pressure loss, and noise level of the grille. For supply grilles and registers, <strong>airflow, air throw, and spread characteristics</strong> are the principal factors for the selection.
                </p>
                <p>
                  <strong>•</strong> In order to obtain long air throw and narrow air pattern, use the deflections between <strong>0° and 15° deflection angle</strong>. For shorter throw and wide air pattern, use <strong>15° two-way angle linear bar grilles</strong>.
                </p>
                <p>
                  <strong>• Performance data:</strong> Performance data shown in the selection charts on the following pages is based on 0°, 15° one-way, and 15° two-way linear bar grilles having a width of 50 mm to 300 mm linear bar grilles and of <strong>1 m lengths</strong>.
                </p>
                <p>
                  <strong>• Damper throttling:</strong> When the volume control damper is partially closed for balancing purposes or final airflow control, in addition to pressure drop and sound correction, the throw pattern will be reduced between 10% and 18% depending upon the amount of throttling. The pressure drop will increase accordingly. The sound level of a supply grille is in direct ratio to the velocity of the air pressure through it.
                </p>
                <p>
                  <strong>•</strong> Air passing through a properly selected air terminal device will not add any appreciable noise to the sound level of the existing system.
                </p>
                <p>
                  <strong>• System balance:</strong> In order for a new air-conditioning system to perform to the designer's plans and specifications, it must be properly balanced to deliver the required amount of air through each air terminal device.
                </p>
                <p>
                  <strong>• Ceiling height criteria:</strong> Correct ceiling heights must be observed in order to prevent air stream from dropping into the occupied zone which is generally about 1.8 m above floor level.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20selection%20guidance%20for%20Linear%20Bar%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 8. LINEAR BAR GRILLE (Ak SELECTION TABLES) */}
            <section id="sec-ak-tables" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Linear Bar Grille
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  LINEAR BAR GRILLE MODELS: SLBR / RLBG
                </p>
              </div>

              {/* Ak Table 1: 0° and 15° one-way */}
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Ak Selection table for 0° and 15° one-way
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4 font-sans">L × W (mm)</th>
                        <th className="p-4">Bar Pitch 6 mm / Ak m²</th>
                        <th className="p-4">Bar Pitch 12.6 mm / Ak m²</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {akTable1.map((r, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540] font-sans">{r.size}</td>
                          <td className="p-4">{r.pitch6}</td>
                          <td className="p-4 font-semibold text-[#3B82F6]">{r.pitch12}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Ak Table 2: 0° and 15° two-way */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                  Ak Selection table for 0° and 15° two-way
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4 font-sans">L × W (mm)</th>
                        <th className="p-4">Bar Pitch 6 mm / Ak m²</th>
                        <th className="p-4">Bar Pitch 12.6 mm / Ak m²</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {akTable2.map((r, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540] font-sans">{r.size}</td>
                          <td className="p-4">{r.pitch6}</td>
                          <td className="p-4 font-semibold text-[#3B82F6]">{r.pitch12}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 9. CORRECTION FACTORS */}
            <section id="sec-correction-factors" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight uppercase">
                  Correction Factors
                </h2>
              </div>

              {/* a) Correction of throw without ceiling effect */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  a) Correction of throw without ceiling effect:
                </h3>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-base font-mono text-[#0A2540]">
                  Distance between grille and ceiling &gt; 0.9 m (3 ft) =&gt; <strong>T₁ value by 0.7</strong>
                </div>
              </div>

              {/* b) Correction for damper adjustment */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  b) Correction for damper adjustment
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 max-w-lg">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4 font-sans">% OPEN</th>
                        <th className="p-4">Pt</th>
                        <th className="p-4">NR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {damperAdjTable.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.open}</td>
                          <td className="p-4">{row.pt}</td>
                          <td className="p-4">{row.nr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* c) Correction of rear vertical blade deflection */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  c) Correction of rear vertical blade deflection
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 max-w-lg">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4 font-sans">Deflection</th>
                        <th className="p-4">Pt</th>
                        <th className="p-4">Vk</th>
                        <th className="p-4">L</th>
                        <th className="p-4">NR</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540]">22°</td>
                        <td className="p-4">x 1.3</td>
                        <td className="p-4">x 1.15</td>
                        <td className="p-4">x 0.77</td>
                        <td className="p-4">+3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* d) Correction of throw for different values of Vt */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  d) Correction of throw for different values of Vt
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 max-w-lg">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4">Vt (m/sec)</th>
                        <th className="p-4">Vt (FPM)</th>
                        <th className="p-4">Lt</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {vtTable.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.vtMs}</td>
                          <td className="p-4">{row.vtFpm}</td>
                          <td className="p-4 font-semibold text-[#3B82F6]">{row.lt}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* e) Correction of rear vertical blade reflection */}
              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#0A2540]">
                  e) Correction of rear vertical blade reflection
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4 font-sans">Length (m)</th>
                        {reflectionTableLengths.map((l, i) => (
                          <th key={i} className="p-4 text-center">{l}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540] font-sans">T (m)</td>
                        {reflectionTableT.map((v, i) => (
                          <td key={i} className="p-4 text-center">{v}</td>
                        ))}
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540] font-sans">NR</td>
                        {reflectionTableNR.map((v, i) => (
                          <td key={i} className="p-4 text-center">{v}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20complete%20submittal%20and%20pricing%20for%20Linear%20Bar%20Grilles"
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