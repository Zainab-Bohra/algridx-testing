"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function RoundCeilingDiffusersClient() {
  const [perfPage, setPerfPage] = useState<1 | 2>(1);

  // Standard Sizes Table (S.No 1 - 10)
  const standardSizes = [
    { sNo: 1, neckInch: "5.3", neckMm: "134", outerInch: "9.8", outerMm: "250", flangeMm: "30", heightMm: "40" },
    { sNo: 2, neckInch: "7.5", neckMm: "190", outerInch: "12.1", outerMm: "307", flangeMm: "30", heightMm: "40" },
    { sNo: 3, neckInch: "9.7", neckMm: "247", outerInch: "14.3", outerMm: "363", flangeMm: "30", heightMm: "40" },
    { sNo: 4, neckInch: "11.9", neckMm: "303", outerInch: "16.5", outerMm: "419", flangeMm: "30", heightMm: "40" },
    { sNo: 5, neckInch: "14.3", neckMm: "362", outerInch: "18.8", outerMm: "478", flangeMm: "30", heightMm: "40" },
    { sNo: 6, neckInch: "16.4", neckMm: "416", outerInch: "21.0", outerMm: "534", flangeMm: "30", heightMm: "40" },
    { sNo: 7, neckInch: "18.5", neckMm: "469", outerInch: "23.5", outerMm: "598", flangeMm: "35", heightMm: "40" },
    { sNo: 8, neckInch: "20.5", neckMm: "521", outerInch: "25.7", outerMm: "653", flangeMm: "35", heightMm: "40" },
    { sNo: 9, neckInch: "22.6", neckMm: "573", outerInch: "27.7", outerMm: "704", flangeMm: "35", heightMm: "40" },
    { sNo: 10, neckInch: "24.6", neckMm: "625", outerInch: "29.8", outerMm: "756", flangeMm: "35", heightMm: "40" },
  ];

  // Round Swirl Diffuser Dimension Matrix
  const swirlDimensions = [
    { model: "RSD200", size: "200 Ø", od: "200", h: "195", d1: "320", e: "22.5" },
    { model: "RSD250", size: "250 Ø", od: "250", h: "170", d1: "360", e: "22.5" },
    { model: "RSD315", size: "315 Ø", od: "315", h: "210", d1: "460", e: "20" },
    { model: "RSD350", size: "350 Ø", od: "350", h: "200", d1: "520", e: "20" },
    { model: "RSD400", size: "400 Ø", od: "400", h: "235", d1: "570", e: "25" },
    { model: "RSD500", size: "500 Ø", od: "500", h: "260", d1: "720", e: "32.5" },
    { model: "RSD630", size: "630 Ø", od: "630", h: "310", d1: "875", e: "30" },
  ];

  // Swirl Airflow Sizing Matrix
  const swirlAirflows = ["300", "400", "500", "600", "800", "1000", "1200", "1600", "2000", "2500", "3000", "3500", "5000", "6000", "7000", "8000", "9000"];

  const swirlAirflowRows = [
    {
      condition: "Summer Working Condition",
      size: "315",
      values: ["1.26", "1.56", "1.91", "2.56", "3.13", "3.9", "4.9", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Summer Working Condition",
      size: "400",
      values: ["—", "0.85", "1.07", "1.28", "1.72", "2.17", "2.58", "3.51", "4.3", "5.37", "—", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Summer Working Condition",
      size: "500",
      values: ["—", "—", "—", "1.37", "1.54", "1.76", "2.25", "2.64", "3.78", "4.3", "4.95", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Fresh Air Working Condition",
      size: "315",
      values: ["—", "2.5", "3.2", "4.3", "5.2", "7.06", "8.8", "10.37", "13.34", "—", "—", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Fresh Air Working Condition",
      size: "400",
      values: ["—", "—", "2.5", "3.2", "3.9", "5.2", "6.5", "7.9", "9.8", "13.1", "16.5", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Fresh Air Working Condition",
      size: "500",
      values: ["—", "—", "—", "—", "3.4", "4.6", "6.4", "7.8", "9.7", "—", "—", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Fresh Air Working Condition",
      size: "630",
      values: ["—", "—", "—", "—", "3.6", "4.7", "5.7", "8", "10", "12", "16.5", "20.1", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Winter Working Condition",
      size: "315",
      values: ["—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Winter Working Condition",
      size: "400",
      values: ["—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Winter Working Condition",
      size: "500",
      values: ["—", "—", "—", "—", "4", "5.4", "7.6", "9.2", "11.5", "16.1", "18.3", "22", "—", "—", "—", "—", "—"]
    },
    {
      condition: "Winter Working Condition",
      size: "630",
      values: ["—", "—", "—", "—", "4", "5.58", "6.75", "9.4", "11.8", "14.2", "19", "23.7", "—", "—", "—", "—", "—"]
    }
  ];

  // Performance Characteristics Table (Paginated)
  const perfPage1 = [
    { model: "315 mm Ø", flow: "200", pd: "3.9", noise: "12" },
    { model: "315 mm Ø", flow: "300", pd: "8.6", noise: "21" },
    { model: "315 mm Ø", flow: "400", pd: "15", noise: "28" },
    { model: "315 mm Ø", flow: "500", pd: "24", noise: "31" },
    { model: "315 mm Ø", flow: "600", pd: "34.5", noise: "34" },
    { model: "315 mm Ø", flow: "700", pd: "47", noise: "38" },
    { model: "315 mm Ø", flow: "800", pd: "62", noise: "43" },
    { model: "315 mm Ø", flow: "1000", pd: "95", noise: "48" },
    { model: "315 mm Ø", flow: "1200", pd: "150", noise: "53" },
    { model: "315 mm Ø", flow: "1600", pd: "248", noise: "56" },
    { model: "400 mm Ø", flow: "400", pd: "5.8", noise: "16" },
    { model: "400 mm Ø", flow: "500", pd: "9", noise: "24" },
    { model: "400 mm Ø", flow: "600", pd: "13", noise: "29" },
    { model: "400 mm Ø", flow: "700", pd: "17.7", noise: "32" },
    { model: "400 mm Ø", flow: "800", pd: "23", noise: "35" },
    { model: "400 mm Ø", flow: "1000", pd: "36", noise: "40" },
    { model: "400 mm Ø", flow: "1200", pd: "52", noise: "43" },
    { model: "400 mm Ø", flow: "1600", pd: "92", noise: "48" },
    { model: "400 mm Ø", flow: "2000", pd: "144", noise: "52" },
    { model: "400 mm Ø", flow: "2500", pd: "225", noise: "56" },
  ];

  const perfPage2 = [
    { model: "500 mm Ø", flow: "800", pd: "9", noise: "18" },
    { model: "500 mm Ø", flow: "900", pd: "11.4", noise: "22" },
    { model: "500 mm Ø", flow: "1000", pd: "13.85", noise: "28" },
    { model: "500 mm Ø", flow: "1250", pd: "21.7", noise: "33" },
    { model: "500 mm Ø", flow: "1600", pd: "35.6", noise: "37" },
    { model: "500 mm Ø", flow: "2000", pd: "55.8", noise: "40" },
    { model: "500 mm Ø", flow: "2500", pd: "87.2", noise: "44" },
    { model: "500 mm Ø", flow: "3000", pd: "126", noise: "48" },
    { model: "500 mm Ø", flow: "3200", pd: "142", noise: "52" },
    { model: "500 mm Ø", flow: "3500", pd: "171", noise: "56" },
    { model: "630 mm Ø", flow: "1200", pd: "8.5", noise: "26" },
    { model: "630 mm Ø", flow: "1400", pd: "11.5", noise: "31" },
    { model: "630 mm Ø", flow: "1600", pd: "16", noise: "36" },
    { model: "630 mm Ø", flow: "2000", pd: "23", noise: "39" },
    { model: "630 mm Ø", flow: "2500", pd: "37", noise: "43" },
    { model: "630 mm Ø", flow: "3000", pd: "53", noise: "46" },
    { model: "630 mm Ø", flow: "3500", pd: "72", noise: "49" },
    { model: "630 mm Ø", flow: "4000", pd: "94", noise: "52" },
    { model: "630 mm Ø", flow: "4500", pd: "119", noise: "56" },
    { model: "630 mm Ø", flow: "5000", pd: "147", noise: "60" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "2. Performance Data", href: "#sec-perf-data" },
    { label: "3. Product Model Description", href: "#sec-model-desc" },
    { label: "3.1. MODEL SCD (Supply)", href: "#sec-model-scd" },
    { label: "3.2. MODEL RCD (Return)", href: "#sec-model-rcd" },
    { label: "4. Standard Sizes", href: "#sec-standard-sizes" },
    { label: "5. Accessories (Butterfly Damper)", href: "#sec-accessories" },
    { label: "6. Ordering Procedures & Installation Details", href: "#sec-ordering-install" },
    { label: "7. Round Swirl Diffuser", href: "#sec-swirl-diffuser" },
    { label: "7.1. Product Features", href: "#sec-swirl-features" },
    { label: "7.2. Standard Sizes & Airflow Sizing", href: "#sec-swirl-sizes" },
    { label: "7.3. Performance Characteristics", href: "#sec-swirl-perf" },
    { label: "7.4. Variable Swirl Diffusers (OD-4 to OD-8G)", href: "#sec-variable-swirl" },
    { label: "7.5. Applications & Descriptions (HEPA Boxes)", href: "#sec-hepa-applications" },
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
            Round Ceiling Diffusers
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Engineered circular ceiling and swirl diffusers manufactured from high-grade aluminum sheets with adjustable blade profiles, butterfly dampers, and high induction rates for commercial and industrial GCC spaces.
          </p>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Round%20Ceiling%20Diffusers"
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
            <section id="sec-intro" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Round Diffusers</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  ALUGRIDX Round Diffusers are designed to offer a way to supply or return conditioned air while keeping sound levels and pressure drops at acceptable levels. They ensure a uniform radial discharge of air in supply air applications.
                </p>
                <p className="text-base text-slate-700 leading-relaxed">
                  These diffusers are suitable for instances where the temperature difference in the supply air ranges from <strong>+10K to -10K</strong>.
                </p>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed pt-2">
                  <li><strong>•</strong> Manufactured from high quality aluminum sheets with a thickness of around <strong>1.25 mm</strong>.</li>
                  <li><strong>•</strong> Inner cores are securely affixed to the frame with a rigid connection.</li>
                  <li><strong>•</strong> A gasket is applied around the rear of the frame to prevent any air leakage.</li>
                  <li><strong>•</strong> As the standard procedure, the frame and butterfly damper are connected using rivets.</li>
                  <li><strong>•</strong> The Butterfly damper is operated by adjusting a stud on the diffuser face.</li>
                  <li><strong>•</strong> The Butterfly Damper is made of galvanized steel sheet with a thickness of <strong>1.0 mm</strong>.</li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Round%20Diffusers"
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
            <section id="sec-perf-data" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Performance Data
                </h2>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Available Finish</h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Powder coated color finish</li>
                  <li><strong>•</strong> Aluminum mill finish</li>
                  <li><strong>•</strong> Black matt finish (damper)</li>
                </ul>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Available Types</h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 max-w-md">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540]">Supply Diffuser</td>
                        <td className="p-4 font-mono font-bold text-[#3B82F6]">SCD</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540]">Return Diffuser</td>
                        <td className="p-4 font-mono font-bold text-[#3B82F6]">RCD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20custom%20finish%20for%20Round%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. PRODUCT MODEL DESCRIPTION */}
            <section id="sec-model-desc" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Product Model Description
                </h2>
              </div>

              {/* 3.1 MODEL SCD (Supply) */}
              <div id="sec-model-scd" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL SCD (Supply)
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Round diffusers with a butterfly damper, ideal for air supply. Can be installed in ceilings, providing uniform radial discharge for supply air.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/round-diffusers/3f5a1119-b394-41af-bd65-349f6e57822e.webp"
                    alt="MODEL SCD (Supply) with Butterfly Damper"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL SCD – Round Supply Diffuser with Butterfly Damper
                  </span>
                </div>
              </div>

              {/* 3.2 MODEL RCD (Return) */}
              <div id="sec-model-rcd" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  MODEL RCD (Return)
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  Round diffusers without a butterfly damper, ideal for extracting air. Can be installed in ceilings.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/round-diffusers/ima1ge.webp"
                    alt="MODEL RCD (Return) Diffuser"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    MODEL RCD – Round Return Diffuser (Extract Air)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20MODEL%20SCD%20and%20RCD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. STANDARD SIZES */}
            <section id="sec-standard-sizes" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Standard Sizes
                </h2>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/round-diffusers/unnamed-2.webp"
                  alt="Standard Sizes Dimension Cross Section (A, B, C, H)"
                  className="max-w-md w-full h-auto object-contain"
                />
                <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                  Diffuser Dimensions: Neck Size 'A', Outer Size 'B', Flange 'C', Height 'H'
                </span>
              </div>

              {/* Standard Sizes Table */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                  <thead>
                    <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                      <th className="p-4">S. No.</th>
                      <th className="p-4 whitespace-nowrap">Neck Size 'A' Inch</th>
                      <th className="p-4 whitespace-nowrap">Neck Size 'A' mm</th>
                      <th className="p-4 whitespace-nowrap">Outer Size 'B' Inch</th>
                      <th className="p-4 whitespace-nowrap">Outer Size 'B' mm</th>
                      <th className="p-4 whitespace-nowrap">Flange Width 'C' mm</th>
                      <th className="p-4 whitespace-nowrap">Diffuser Height 'H' mm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {standardSizes.map((row) => (
                      <tr key={row.sNo} className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540]">{row.sNo}</td>
                        <td className="p-4">{row.neckInch}</td>
                        <td className="p-4 font-bold text-[#0A2540]">{row.neckMm}</td>
                        <td className="p-4">{row.outerInch}</td>
                        <td className="p-4 font-bold text-[#0A2540]">{row.outerMm}</td>
                        <td className="p-4">{row.flangeMm}</td>
                        <td className="p-4">{row.heightMm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Standard%20Size%20Round%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 5. ACCESSORIES */}
            <section id="sec-accessories" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Accessories
                </h2>
              </div>

              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/round-diffusers/unnamed-3.webp"
                  alt="Volume Control Butterfly Damper with Adjusting Stud"
                  className="max-w-sm w-full h-auto object-contain"
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  Volume Control (Butterfly) Damper
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The Volume Control Damper is a flexible instrument used to manage the airflow volume in air outlets or inlets. Installed within the neck of the diffuser, it can be conveniently adjusted through the diffuser itself.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h4 className="text-lg font-bold text-[#0A2540]">Available Types</h4>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 max-w-xs font-mono">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">Minimum</th>
                        <th className="p-4">Maximum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-[#0A2540]">134 mm Dia.</td>
                        <td className="p-4 font-bold text-[#0A2540]">625 mm Dia.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20quote%20for%20Butterfly%20Dampers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 6. ORDERING PROCEDURES & INSTALLATION DETAILS */}
            <section id="sec-ordering-install" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Ordering Procedures & Installation Details
                </h2>
              </div>

              {/* Ordering Data Flowchart Image */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Ordering Data</h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Powder coated color finish</li>
                  <li><strong>•</strong> Aluminum mill finish</li>
                  <li><strong>•</strong> Black matt finish (damper)</li>
                </ul>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mt-3">
                  <img
                    src="/images/products/round-diffusers/image111.webp"
                    alt="Round Ceiling Diffusers Ordering Data Flowchart Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Installation Details */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Installation Details</h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  The attractively shaped Supply / Return diffuser can be installed by means of a fixing clamp and central as shown below.
                </p>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/round-diffusers/00054273-1dec-44af-b4b2-68d786e93d49.webp"
                    alt="Installation With Duct Fixing Clamp"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    Installation With Duct Fixing Clamp & Central Screw
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20installation%20details%20for%20Round%20Ceiling%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 7. ROUND SWIRL DIFFUSER */}
            <section id="sec-swirl-diffuser" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Round Swirl Diffuser
                </h2>
              </div>

              {/* 7.1 Product Features */}
              <div id="sec-swirl-features" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">Product Features</h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> The blade can be adjusted to suit summer, winter or normal temperature conditions.</li>
                  <li><strong>•</strong> Aluminium construction</li>
                  <li><strong>•</strong> Manually adjustable blade profiles</li>
                  <li><strong>•</strong> Environment friendly swirl motion</li>
                  <li><strong>•</strong> Designed for large areas like Airports, Exhibition Centres etc., where long throw is required.</li>
                  <li><strong>•</strong> Powder coated to required RAL finish</li>
                </ul>

                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center mt-3">
                  <img
                    src="/images/products/round-diffusers/image-4.webp"
                    alt="Round Swirl Diffuser Dimensions (ØD, ØD1, H, E)"
                    className="max-w-md w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    Round Swirl Diffuser CAD Section: ØD, ØD1, H, and Flange E
                  </span>
                </div>

                {/* Swirl Dimension Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 mt-4">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">Model</th>
                        <th className="p-4">Size (mm)</th>
                        <th className="p-4">ØD (mm)</th>
                        <th className="p-4">H (mm)</th>
                        <th className="p-4">D1 (mm)</th>
                        <th className="p-4">E (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {swirlDimensions.map((r, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{r.model}</td>
                          <td className="p-4">{r.size}</td>
                          <td className="p-4">{r.od}</td>
                          <td className="p-4">{r.h}</td>
                          <td className="p-4 font-bold text-[#3B82F6]">{r.d1}</td>
                          <td className="p-4">{r.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7.2 Standard Sizes Airflow Grid */}
              <div id="sec-swirl-sizes" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  Standard Sizes – Air Volume vs Velocity
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-3 whitespace-nowrap">Condition</th>
                        <th className="p-3 whitespace-nowrap">Size (mm)</th>
                        {swirlAirflows.map((flow, i) => (
                          <th key={i} className="p-3 whitespace-nowrap text-center">{flow}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {swirlAirflowRows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          <td className="p-3 font-sans font-semibold text-[#0A2540] whitespace-nowrap">{row.condition}</td>
                          <td className="p-3 font-bold text-[#3B82F6] whitespace-nowrap">{row.size}</td>
                          {row.values.map((v, cIdx) => (
                            <td key={cIdx} className="p-3 text-center whitespace-nowrap">{v}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7.3 Performance Characteristics Matrix */}
              <div id="sec-swirl-perf" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-3 border-slate-100">
                  <h3 className="text-xl font-extrabold text-[#0A2540]">
                    Performance Characteristics
                  </h3>
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <span className="text-sm text-slate-500 font-bold uppercase mr-1">Data Page</span>
                    <button
                      onClick={() => setPerfPage(1)}
                      className={`w-9 h-9 rounded-xl text-sm font-bold font-mono transition-colors ${
                        perfPage === 1 ? "bg-[#0A2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => setPerfPage(2)}
                      className={`w-9 h-9 rounded-xl text-sm font-bold font-mono transition-colors ${
                        perfPage === 2 ? "bg-[#0A2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      2
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">RSD Model</th>
                        <th className="p-4">Air Volume (m³/h)</th>
                        <th className="p-4">Pressure Drop (Pa)</th>
                        <th className="p-4">Noise dB(A)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {(perfPage === 1 ? perfPage1 : perfPage2).map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540]">{row.model}</td>
                          <td className="p-4">{row.flow}</td>
                          <td className="p-4">{row.pd}</td>
                          <td className="p-4 font-bold text-[#3B82F6]">{row.noise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 7.4 Variable Swirl Diffusers */}
              <div id="sec-variable-swirl" className="space-y-6 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Variable Swirl Diffusers
                </h3>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/round-diffusers/Screenshot-2025-12-06-at-6.47.50-PM-1536x387.webp"
                    alt="Variable Swirl Diffusers OD-4, OD-7, OD-8, OD-9, OD-11, OD-8G"
                    className="max-w-full h-auto object-contain"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mt-3 text-center">
                    Product Lineup: OD-4, OD-7, OD-8, OD-9, OD-11, OD-8G
                  </span>
                </div>

                {/* OD-4 */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#0A2540]">OD - 4</h4>
                  <p className="text-base text-slate-700 font-medium">Swirl Diffusers</p>
                  <ul className="space-y-1.5 text-base text-slate-700 leading-relaxed">
                    <li>• Swirl diffusers are designed for air-conditioning with floor-to-ceiling heights <strong>2.6 m to 4 m</strong> and a temperature difference between supply and room air of <strong>+10K to -10K</strong>.</li>
                    <li>• Due to the rotary swirling motion of the air discharge, induction of room air occurs very quickly.</li>
                    <li>• Swirl diffusers are suitable both for comfort as well as industrial air-conditioning.</li>
                  </ul>
                </div>

                {/* OD-7 */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xl font-bold text-[#0A2540]">OD - 7</h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Swirl diffusers consist of plenum boxes made of galvanized steel sheet and a diffuser face. A diffuser face is made of sheet steel or aluminum and powder-coated in RAL 9010 or any RAL color upon customer's request.
                  </p>
                </div>

                {/* OD-9 */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xl font-bold text-[#0A2540]">OD - 9</h4>
                  <p className="text-base text-slate-700 font-medium">Variable Swirl Diffusers</p>
                  <ul className="space-y-1.5 text-base text-slate-700 leading-relaxed">
                    <li>• Variable diffusers are designed for rooms with changing thermal loads which require different conditioning (heating/cooling).</li>
                    <li>• They are suitable for rooms with a floor-to-ceiling height of up to <strong>15 m</strong>, and a temperature difference between supply and room air of <strong>+10K and -10K</strong>.</li>
                    <li>• Required conditioning is achieved by the means of manual or power-driven blades adjusting.</li>
                    <li>• Variable diffusers are suitable both for comfort and industrial conditioning.</li>
                  </ul>
                </div>

                {/* OD-11 */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xl font-bold text-[#0A2540]">OD - 11</h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Variable diffusers consist of plenum boxes made of galvanized sheet steel and diffusers. Diffusers are made of sheet steel or sheet aluminum (OD-11) and powder-coated in RAL 9010 or any RAL color upon customer's request.
                  </p>
                </div>

                {/* OD-8 & OD-8G */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  <h4 className="text-xl font-bold text-[#0A2540]">OD - 8 & OD - 8G</h4>
                  <p className="text-base text-slate-700 leading-relaxed">
                    Diffusers are made of sheet steel or aluminum and powder-coated in RAL 9010 or any RAL color upon customer request.
                  </p>
                </div>
              </div>

              {/* 7.5 Applications & Descriptions (HEPA Boxes) */}
              <div id="sec-hepa-applications" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Applications & Descriptions (HEPA Filter Housings)
                </h3>
                <div className="space-y-3 text-base text-slate-700 leading-relaxed">
                  <p>
                    Ceiling housings with Hepa filters (AFV-8) are used in both supply and exhaust ventilation and air-conditioning installations, which require maximal cleanliness of the air. Built-in Hepa filters are of <strong>H10 to H14 class</strong>. They remove and filter particles with a diameter of <strong>0.3 µm</strong> in different levels: from <strong>85% (filters H10) up to 99.995% (filters H14)</strong>.
                  </p>
                  <p>
                    Ceiling housings with Hepa filter type AFV-8C has a special washer frame for attachment of the filter via gel gasket. The AFV-8C Hepa Filter type guarantees absolute air tightness for the filters up to class <strong>U16</strong>, which removes <strong>99.99995%</strong> of particles with a diameter of <strong>0.12 µm</strong>.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20complete%20submittal%20and%20pricing%20for%20Round%20Swirl%20Diffusers%20and%20HEPA%20Housings"
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