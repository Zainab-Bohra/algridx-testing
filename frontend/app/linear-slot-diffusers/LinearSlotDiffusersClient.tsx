"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function LinearSlotDiffusersClient() {
  const slsdSizes = [
    { slots: "1", neck: "3.5", flange: "7.28" },
    { slots: "2", neck: "6.98", flange: "10.76" },
    { slots: "3", neck: "10.46", flange: "14.24" },
    { slots: "4", neck: "13.94", flange: "17.72" },
    { slots: "5", neck: "17.42", flange: "21.2" },
    { slots: "6", neck: "20.9", flange: "24.68" },
    { slots: "7", neck: "24.38", flange: "28.16" },
    { slots: "8", neck: "27.86", flange: "31.64" },
  ];

  const rlsdSizes = [
    { slots: "1", neck: "3.9", flange: "7.68" },
    { slots: "2", neck: "7.78", flange: "11.56" },
    { slots: "3", neck: "11.66", flange: "15.44" },
    { slots: "4", neck: "15.54", flange: "19.32" },
    { slots: "5", neck: "19.42", flange: "23.2" },
    { slots: "6", neck: "23.3", flange: "27.08" },
    { slots: "7", neck: "27.18", flange: "30.96" },
    { slots: "8", neck: "31.06", flange: "34.84" },
  ];

  const dlsdSizes = [
    { slots: "1", neck: "4.4", flange: "8.18" },
    { slots: "2", neck: "8.78", flange: "12.56" },
    { slots: "3", neck: "13.16", flange: "16.94" },
    { slots: "4", neck: "17.54", flange: "21.32" },
    { slots: "5", neck: "21.92", flange: "25.7" },
    { slots: "6", neck: "26.3", flange: "30.08" },
    { slots: "7", neck: "30.68", flange: "34.46" },
    { slots: "8", neck: "35.06", flange: "38.84" },
  ];

  const plenumInsulated = [
    { slots: "1", d: "150", h: "300", w: "A + 10", x: "W + 100" },
    { slots: "2", d: "200", h: "300", w: "A + 10", x: "W + 100" },
    { slots: "3", d: "200", h: "300", w: "A + 10", x: "W + 100" },
    { slots: "4", d: "250", h: "300", w: "A + 10", x: "W + 100" },
    { slots: "5", d: "315", h: "365", w: "A + 10", x: "W + 100" },
    { slots: "6", d: "315", h: "365", w: "A + 10", x: "W + 100" },
    { slots: "7", d: "315", h: "365", w: "A + 10", x: "W + 100" },
    { slots: "8", d: "315", h: "365", w: "A + 10", x: "W + 100" },
  ];

  const plenumUninsulated = [
    { slots: "1", d: "150", h: "275", w: "A + 10", x: "W + 50" },
    { slots: "2", d: "200", h: "275", w: "A + 10", x: "W + 50" },
    { slots: "3", d: "200", h: "275", w: "A + 10", x: "W + 50" },
    { slots: "4", d: "250", h: "275", w: "A + 10", x: "W + 50" },
    { slots: "5", d: "315", h: "340", w: "A + 10", x: "W + 50" },
    { slots: "6", d: "315", h: "340", w: "A + 10", x: "W + 50" },
    { slots: "7", d: "315", h: "340", w: "A + 10", x: "W + 50" },
    { slots: "8", d: "315", h: "340", w: "A + 10", x: "W + 50" },
  ];

  const lengthCorrections = [
    { len: "1", factor: "x 1", nc: "0" },
    { len: "1.5", factor: "x 1.05", nc: "+2" },
    { len: "2", factor: "x 1.1", nc: "+3" },
    { len: "2.5", factor: "x 1.1", nc: "+4" },
    { len: "3", factor: "x 1.1", nc: "+5" },
    { len: "4", factor: "x 1.1", nc: "+6" },
    { len: "5", factor: "x 1.15", nc: "+7" },
    { len: "6", factor: "x 1.15", nc: "+8" },
    { len: "8", factor: "x 1.15", nc: "+9" },
    { len: "10", factor: "x 1.15", nc: "+10" },
  ];

  const vtCorrections = [
    { vt: "0.25", factor: "1.0" },
    { vt: "0.375", factor: "0.67" },
    { vt: "0.050", factor: "0.50" },
    { vt: "0.625", factor: "0.40" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "2. Selection of Air Terminal Devices", href: "#sec-selection" },
    { label: "3. Single & Multi-Slot Airflow Adjustment", href: "#sec-adjustment" },
    { label: "4. Flange/Assembly options", href: "#sec-flange-options" },
    { label: "5. Dimension Data", href: "#sec-dim-data" },
    { label: "5.1. SLSD", href: "#sec-slsd" },
    { label: "5.2. RLSD / ELSD", href: "#sec-rlsd" },
    { label: "5.3. DLSD", href: "#sec-dlsd" },
    { label: "5.4. Technical Details", href: "#sec-tech-details" },
    { label: "5.5. Plenum Size with Insulation", href: "#sec-plenum-insulated" },
    { label: "5.6. Plenum Size without Insulation", href: "#sec-plenum-uninsulated" },
    { label: "6. Possible Problems & Solutions", href: "#sec-troubleshooting" },
    { label: "7. Quick Selection Chart", href: "#sec-quick-chart" },
    { label: "7.1. Correction Charts for other lengths", href: "#sec-chart-length" },
    { label: "7.1.1 The NC do not take room absorption into account", href: "#sec-chart-length" },
    { label: "7.2. Correction Chart for other Vt", href: "#sec-chart-vt" },
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
            Linear Slot Diffusers
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Linear%20Slot%20Diffusers"
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

          {/* PRIMARY COLUMN (8 COLS) */}
          <main className="lg:col-span-8 space-y-12">

            {/* 1. INTRODUCTION */}
            <section id="sec-intro" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  <strong>ALUGRIDX Linear Slot Diffusers (LSD)</strong> are adjustable diffusers for use in ceilings as a feature or as an unobtrusive inlet/outlet unit giving either a vertical or horizontal air pattern. These slot diffusers can be supplied in 1 to 8 slot configurations, the units being butted together to form continuous lengths (if required).
                </p>
                <p>
                  Linear Slot Diffusers can be supplied with <strong>Hit &amp; Miss Damper</strong> and <strong>Plenum Boxes (PB)</strong>. Each diffuser slot contains an airflow-regulating damper under which is an airflow regulating vane which gives directional control to the discharged air. Alignment of the butting section is achieved by loose strips which engage in the slots provided for the purpose.
                </p>
                <p>
                  Linear Slot Diffusers are manufactured from extruded aluminium in a natural mill finish, while the face section will be available in a powder-coated/anodized finish.
                </p>
              </div>
            </section>

            {/* 2. SELECTION OF AIR TERMINAL DEVICES */}
            <section id="sec-selection" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Selection of Air Terminal Devices
                </h2>
              </div>
              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  The function of an Air Terminal Device (ATD) is to direct the incoming or exhaust air in such a way that comfortable conditions are maintained in the occupied zone of any conditioned space. Failure to choose a suitable ATD, especially that used for supply purpose, may well nullify all other efforts to achieve comfort conditions in a room. At the same time, the ATD should be selected to suit aesthetic requirements. It is necessary at the selection stage to choose the position (wall, ceiling, floor, or sill) of the ATD&apos;s and the number, form, and type.
                </p>
                <p>
                  Consideration must be given to the occupancy of the conditioned space and the internal features, such as irregularities of surface, position of furniture, and any source of heat loss/gain.
                </p>
                <p>
                  Consideration should also be given to the method of fixing and to the finish of the ATD&apos;s.
                </p>
                <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-amber-900 rounded-r-xl font-bold">
                  ! No ATD can compensate for incorrectly designed duct entry conditions
                </div>
                <p>
                  Air from linear slot diffusers is a wide airstream (which can be taken as two-dimensional). The primary velocity is in proportion to the square root of the distance from the linear slot diffuser. There is little increase in the width of the airstream. This type of Air Terminal Device has a length-to-width aspect ratio of 10:1 or greater.
                </p>
                <p>
                  Throw from linear slot diffusers is taken to mean the distance from the device to the opposite wall.
                </p>
                <p>
                  Having taken into account the throw, drop (if applicable), and position of linear slot diffusers in the ceiling, airflow rate can be established per unit length (m) by number of slots of the ATD to meet the design criteria. Note should be taken of the noise and pressure characteristics.
                </p>
                <p>
                  To obtain the length of the slot diffuser, divide the total airflow rate per unit length (m). This total length can then be divided to suit the physical limitations and architectural requirements.
                </p>
                <p>
                  The number of slots and the width of the slot, i.e., S 16 or S 20 or S 25, can be determined. Note should be taken of the noise and pressure characteristics/data.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20assistance%20with%20Linear%20Slot%20Diffuser%20selection"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. SINGLE & MULTI-SLOT AIRFLOW ADJUSTMENT */}
            <section id="sec-adjustment" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Single &amp; Multi-Slot Airflow Adjustment
                </h2>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/linear-slot/lsd-airflow-patterns.webp"
                  alt="Single and Multi-Slot Airflow Adjustment Patterns"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20airflow%20patterns%20data%20for%20Linear%20Slot%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. FLANGE / ASSEMBLY OPTIONS */}
            <section id="sec-flange-options" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Flange/Assembly options
                </h2>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/linear-slot/lsd-flange-assembly.webp"
                  alt="Linear Slot Diffuser Flange and Assembly Options"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20flange%20options%20pricing%20for%20Linear%20Slot%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 5. DIMENSION DATA */}
            <section id="sec-dim-data" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-12 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimension Data
                </h2>
              </div>

              {/* SLSD Cross Section CAD */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/linear-slot/lsd-slsd-cad.webp"
                  alt="SLSD Dimension Cross Section CAD Diagram"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              {/* 5.1. SLSD */}
              <div id="sec-slsd" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  SLSD
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  ALUGRIDX model SLSD is a Supply Linear Slot Diffuser with Hit-&amp;-Miss Volume Control Damper and Straightening Deflectors. The Air Straightening Deflectors and Hit-&amp;-Miss Damper are adjustable.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[380px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slots</th>
                        <th className="p-3.5 sm:p-4">Neck</th>
                        <th className="p-3.5 sm:p-4">Flange</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {slsdSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.slots}</td>
                          <td className="p-3.5 sm:p-4">{row.neck}</td>
                          <td className="p-3.5 sm:p-4">{row.flange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5.2. RLSD / ELSD */}
              <div id="sec-rlsd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  RLSD / ELSD
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  ALUGRIDX model RLSD / ELSD is a Return or Exhaust Linear Slot Diffuser with a single Hit-&amp;-Miss Damper (Optional). The Hit-&amp;-Miss Damper is adjustable from the face of the Linear Diffuser.
                </p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[380px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slots</th>
                        <th className="p-3.5 sm:p-4">Neck</th>
                        <th className="p-3.5 sm:p-4">Flange</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {rlsdSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.slots}</td>
                          <td className="p-3.5 sm:p-4">{row.neck}</td>
                          <td className="p-3.5 sm:p-4">{row.flange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5.3. DLSD */}
              <div id="sec-dlsd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  DLSD
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  ALUGRIDX model DLSD is a Dummy or non-active linear slot diffuser with a blanking plate to replace Hit-&amp;-Miss Damper. ALUGRIDX Linear Slot Diffusers are available from 1–8 slots (more than 8 slots are available on request) and two different slot widths for low and high airflow requirements.
                </p>
                <div className="space-y-1 text-sm font-semibold text-slate-800">
                  <p>Coding:</p>
                  <p className="text-slate-600 font-normal">• S-16 = 16 mm Slot Width</p>
                  <p className="text-slate-600 font-normal">• S-20 = 20 mm Slot Width</p>
                  <p className="text-slate-600 font-normal">• S-25 = 25 mm Slot Width</p>
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[380px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slots</th>
                        <th className="p-3.5 sm:p-4">Neck</th>
                        <th className="p-3.5 sm:p-4">Flange</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {dlsdSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.slots}</td>
                          <td className="p-3.5 sm:p-4">{row.neck}</td>
                          <td className="p-3.5 sm:p-4">{row.flange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5.4. Technical Details */}
              <div id="sec-tech-details" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/linear-slot/lsd-plenum-elevation.webp"
                    alt="Plenum Elevation Profile"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  Technical Details
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>• ALUGRIDX Internally lined Plenum Boxes</strong> are used for even distribution of cool and dehumidified air over the linear surface of the slot diffuser with virtually no sound or turbulence.</li>
                  <li><strong>• ALUGRIDX Plenum boxes</strong> are manufactured to cover the full range of Linear Slot Diffusers, i.e., from 1 to 8 slots.</li>
                  <li><strong>•</strong> To maintain rigidity, all joints Plenum Boxes are welded and sealed for air-tight application.</li>
                  <li><strong>• Maximum length of a Plenum Box is 2000 mm</strong>, with one side inlet spigot per meter. Multiple sections can be supplied above 2000 mm.</li>
                  <li><strong>• Plenum Boxes are manufactured from 0.7 mm thick G.I. steel sheets</strong> and are internally lined with <strong>25 mm thick mineral fiber insulation</strong> (optional).</li>
                </ul>
              </div>

              {/* 5.5. Plenum Size with Insulation */}
              <div id="sec-plenum-insulated" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  Plenum Size with Insulation
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Number of Slots</th>
                        <th className="p-3.5 sm:p-4">Ø D</th>
                        <th className="p-3.5 sm:p-4">H</th>
                        <th className="p-3.5 sm:p-4">W</th>
                        <th className="p-3.5 sm:p-4">X</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {plenumInsulated.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.slots}</td>
                          <td className="p-3.5 sm:p-4">{row.d}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                          <td className="p-3.5 sm:p-4">{row.w}</td>
                          <td className="p-3.5 sm:p-4">{row.x}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/linear-slot/lsd-plenum-section.webp"
                    alt="Plenum Cross Section Diagram"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* 5.6. Plenum Size without Insulation */}
              <div id="sec-plenum-uninsulated" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540]">
                  Plenum Size without Insulation
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Number of Slots</th>
                        <th className="p-3.5 sm:p-4">Ø D</th>
                        <th className="p-3.5 sm:p-4">H</th>
                        <th className="p-3.5 sm:p-4">W</th>
                        <th className="p-3.5 sm:p-4">X</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {plenumUninsulated.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.slots}</td>
                          <td className="p-3.5 sm:p-4">{row.d}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                          <td className="p-3.5 sm:p-4">{row.w}</td>
                          <td className="p-3.5 sm:p-4">{row.x}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Linear%20Slot%20Plenum%20Boxes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 6. POSSIBLE PROBLEMS & SOLUTIONS */}
            <section id="sec-troubleshooting" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Possible Problems &amp; Solutions
                </h2>
              </div>
              <p className="text-base text-slate-700 leading-relaxed">
                If a noise level problem occurs at the commissioning stage, it is recommended that the following basic procedures are employed to determine if the ATD is responsible.
              </p>
              <ul className="space-y-4 text-base text-slate-700 leading-relaxed">
                <li>
                  <strong>• Shut down, in rotation, the various plants serving the conditioned space</strong> to identify which system is creating the noise.
                </li>
                <li>
                  <strong>• Do not be misled by the possible air imbalance created within the conditioned space</strong>, i.e. supply only creating noise by air escaping through decoration, etc.
                </li>
                <li>
                  <strong>• On the noisy system, check the position of the ATD dampers.</strong> If these are properly closed, open the dampers. If the noise level is reduced then damper-generated noise is probably the cause. Consider introducing duct dampers well upstream of the ATD to provide requisite pressure drop for balancing.
                </li>
                <li>
                  <strong>• Opening and closing of the ATD does not result in any significant change of noise level</strong>, either the noise is entering the conditioned space through some other path, i.e. structure-borne vibration, direct transmission through walls, ceiling, or floor, duct breakouts, or repositioning the duct from another noise source.
                </li>
                <li>
                  <strong>• Remove the ATD and the associated damper.</strong> If the noise level reduces, then the source of the problem may well be the ATD and the damper. But if the noise level increases, it is likely that the duct-borne noise is propagating down the system from some upstream source, possible main control damper, primary fans, poorly designed duct junctions, etc.
                </li>
              </ul>
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <p className="font-bold text-[#0A2540]">Remedial Measures:</p>
                <p className="text-slate-700 text-sm">• Replacing the ATD with one of greater free area or a larger device.</p>
                <p className="text-slate-700 text-sm">• Re-design the plenum box (possibly increasing the number of air inlet spigots).</p>
                <p className="text-slate-700 text-sm">• Increase the number of ATDs.</p>
              </div>
              <p className="text-sm font-semibold text-slate-600">
                Cost implications of remedial action should the noise problem occur with an ATD clearly emphasize the importance of total consideration at the design stage to correct selection.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20engineering%20support%20for%20Linear%20Slot%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 7. QUICK SELECTION CHART */}
            <section id="sec-quick-chart" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Quick Selection Chart
                </h2>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/linear-slot/lsd-quick-selection-chart.webp"
                  alt="Linear Slot Diffusers Quick Selection Nomogram Chart"
                  className="max-w-2xl w-full h-auto object-contain"
                />
              </div>

              {/* 7.1 Correction Charts for other lengths */}
              <div id="sec-chart-length" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Correction Charts for other lengths
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 border-r border-slate-200 font-extrabold">L (m)</th>
                        {lengthCorrections.map((row, idx) => (
                          <th key={idx} className="p-3.5 border-r border-slate-200">{row.len}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-[#0A2540] border-r border-slate-200 font-sans">Throw Factor</td>
                        {lengthCorrections.map((row, idx) => (
                          <td key={idx} className="p-3.5 border-r border-slate-200 whitespace-nowrap">{row.factor}</td>
                        ))}
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 font-bold text-[#0A2540] border-r border-slate-200 font-sans">NC</td>
                        {lengthCorrections.map((row, idx) => (
                          <td key={idx} className="p-3.5 border-r border-slate-200">{row.nc}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm font-semibold text-slate-500 italic">
                  The NC do not take the room absorption into account
                </p>
              </div>

              {/* 7.2 Correction Chart for other Vt */}
              <div id="sec-chart-vt" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Correction Chart for other Vt
                </h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono max-w-md">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Vt (m/s)</th>
                        {vtCorrections.map((row, idx) => (
                          <th key={idx} className="p-3.5 sm:p-4 border-r border-slate-200">{row.vt}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200 font-sans">Factor</td>
                        {vtCorrections.map((row, idx) => (
                          <td key={idx} className="p-3.5 sm:p-4 border-r border-slate-200">{row.factor}</td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="text-xs font-mono text-slate-500 space-y-1 pt-2">
                  <p>Vk = Ak × W/s</p>
                  <p>Vk × Ak × 3600 = m³/h</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20performance%20selection%20for%20Linear%20Slot%20Diffusers"
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
                      className={`block py-1 px-3 rounded-xl transition-colors font-medium text-xs leading-relaxed ${
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