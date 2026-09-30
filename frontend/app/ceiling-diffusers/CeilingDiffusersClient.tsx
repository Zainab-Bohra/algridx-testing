"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Check,
  MessageCircle,
  Sliders
} from "lucide-react";

export default function CeilingDiffusersClient() {
  const [activeTablePage, setActiveTablePage] = useState<1 | 2>(1);

  const standardSizes = [
    { length: "150", width: "150" },
    { length: "225", width: "225" },
    { length: "300", width: "300" },
    { length: "375", width: "375" },
    { length: "450", width: "450" },
    { length: "525", width: "525" },
    { length: "600", width: "600" }
  ];

  const ductSizingHeaders = ["150x150", "225x225", "300x300", "375x375", "450x450", "525x525", "600x600"];
  const ductSizingRows = [
    ["Diffuser Size (W x D mm)", "150x150", "225x225", "300x300", "375x375", "450x450", "525x525", "600x600"],
    ["Duct Size (mm)", "150x150", "225x225", "300x300", "375x375", "450x450", "525x525", "600x600"],
    ["False Ceiling Opening Size (mm)", "230x230", "305x305", "380x380", "455x455", "530x530", "605x605", "680x680"]
  ];

  const techHeaders = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "2000", "3000", "4000"];

  const techDataRows = [
    { size: "150 x 150", effectiveArea: "0.0138", metric: "Vk-", values: ["-", "2", "6.4", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"] },
    { metric: "Pd(pa)-", values: ["-", "3.4", "9.6", "24.7", "-", "-", "-", "-", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "1.6", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"] },
    { size: "225 x 225", effectiveArea: "0.0277", metric: "Vk(m/s)-", values: ["-", "2.4", "4.7", "9.6", "13.9", "-", "-", "-", "-", "-", "-", "-", "-"] },
    { metric: "Pd(pa)-", values: ["-", "2.4", "7.7", "13.3", "23.5", "-", "-", "-", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "1.3", "2.9", "4.8", "-", "-", "-", "-", "-", "-", "-", "-", "-"] },
    { size: "300 x 300", effectiveArea: "0.0486", metric: "Vk(m/s)-", values: ["-", "2", "3.5", "4.7", "7.5", "9.6", "13.6", "-", "-", "-", "21.7", "-", "-"] },
    { metric: "Pd(pa)-", values: ["-", "1.3", "2.7", "4.5", "7.9", "15.6", "-", "-", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "1.3", "1.6", "2.1", "2.5", "3.6", "3.8", "-", "-", "-", "-", "-", "-"] },
    { size: "375 x 375", effectiveArea: "0.0694", metric: "Vk(m/s)-", values: ["-", "1.6", "2.4", "4.6", "8.2", "12.2", "14.7", "-", "-", "-", "19.5", "-", "-"] },
    { metric: "Pd(pa)-", values: ["-", "1.5", "1.7", "2.4", "3.7", "4.5", "7.2", "-", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "1.1", "1.5", "2.1", "2.4", "2.8", "3.6", "-", "-", "-", "-", "-", "-"] },
    { size: "450 x 450", effectiveArea: "0.0972", metric: "Vk(m/s)-", values: ["-", "-", "2.3", "4.2", "5.4", "7.8", "10.9", "15.5", "-", "-", "-", "-", "-"] },
    { metric: "Pd(pa)-", values: ["-", "-", "1.7", "2.3", "2.5", "3.8", "5.3", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "-", "1.1", "1.9", "2.3", "3.2", "3.7", "-", "-", "-", "-", "-"] },
    { size: "525 x 525", effectiveArea: "0.1296", metric: "Vk(m/s)-", values: ["-", "-", "-", "2.3", "4.3", "5.7", "8.4", "11.7", "-", "-", "-", "-", "-"] },
    { metric: "Pd(pa)-", values: ["-", "-", "-", "2.1", "2.5", "3.2", "4.3", "6.5", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "-", "-", "1.6", "2.0", "2.4", "2.9", "3.8", "-", "-", "-", "-", "-"] },
    { size: "600 x 600", effectiveArea: "0.1692", metric: "Vk(m/s)-", values: ["-", "-", "-", "-", "2.1", "3.9", "7.3", "9.8", "14.8", "18.5", "28", "36", "-"] },
    { metric: "Pd(pa)-", values: ["-", "-", "-", "-", "1.6", "2.5", "3.9", "5.8", "-", "-", "-", "-", "-"] },
    { metric: "Lr(m)-", values: ["-", "-", "-", "-", "1.5", "2.3", "3.1", "4.3", "-", "-", "-", "-", "-"] }
  ];

  const descriptionTable = [
    { slNo: 1, name: "Supply Air Diffuser", one: true, two: true, three: true, four: true },
    { slNo: 2, name: "Return Air Diffuser", one: true, two: true, three: true, four: true },
    { slNo: 3, name: "Extract Air Diffuser", one: true, two: true, three: true, four: true },
    { slNo: 4, name: "Supply Air Diffuser with Eq. Grid", one: true, two: true, three: true, four: true },
    { slNo: 5, name: "Supply Air Diffuser with Filter", one: true, two: true, three: true, four: true },
    { slNo: 6, name: "Supply Air Diffuser with Eq. Grid & Filter", one: true, two: true, three: true, four: true },
    { slNo: 7, name: "Two Way Width", one: false, two: true, three: false, four: false },
    { slNo: 8, name: "Two Way Corner", one: false, two: true, three: true, four: false },
    { slNo: 9, name: "One Way Width", one: true, two: false, three: false, four: false }
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Standard Sizes & Dimensions", href: "#sec-standard-sizes" },
    { label: "2. Introduction – Ceiling Diffusers", href: "#sec-intro-diffusers" },
    { label: "2.1. Opposed Blade Damper (OBD)", href: "#sec-obd" },
    { label: "2.2. Aluminum Filter (AF)", href: "#sec-af" },
    { label: "2.3. Butterfly Damper", href: "#sec-butterfly" },
    { label: "2.4. Equalizing Grid (EG)", href: "#sec-eg" },
    { label: "3. Fixing Information & Maintenance", href: "#sec-fixing" },
    { label: "3.1. Duct Fixing & Core Removal", href: "#sec-duct-fixing" },
    { label: "3.2. Operation of Opposed Blade Damper", href: "#sec-obd-op" },
    { label: "4. Product Range (Air Pattern Profiles)", href: "#sec-range" },
    { label: "5. Technical Data (Airflow, Velocity & Pressure Drop)", href: "#sec-tech-data" }
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
        <header className="bg-[#0A2540] text-white rounded-3xl p-8 sm:p-14 lg:p-16 mb-12 shadow-sm flex flex-col items-center justify-center text-center space-y-6">
         
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ceiling Diffusers & AC Grilles
          </h1>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed font-normal">
            Square and rectangular architectural aluminum ceiling diffusers engineered for 1, 2, 3, and 4-way omnidirectional air induction, acoustic attenuation, and low pressure drop across GCC corporate and industrial infrastructure.
          </p>

          <div className="pt-2">
            <a
              href="https://wa.me/?text=Hello%20AlugridX,%20I%20am%20interested%20in%20quotation%20for%20Ceiling%20Diffusers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2.5 shadow-md hover:shadow-lg"
            >
              <MessageCircle size={18} />
              <span>Get Immediate Quote</span>
            </a>
          </div>
        </header>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* PRIMARY CONTENT COLUMN (8 COLUMNS) */}
          <main className="lg:col-span-8 space-y-12">
            
            {/* 1. INTRODUCTION */}
            <section id="sec-intro" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight border-b pb-4 border-slate-200">
                1. Introduction
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
AlugridX Square & Rectangle Ceiling Diffusers are designed to meet the diverse needs of modern architecture and HVAC requirements, offering both aesthetic appeal and high-performance air distribution. These diffusers are engineered to seamlessly blend with various architectural details, ensuring an elegant integration with modular ceiling systems.              </p>
              
              <ul className="space-y-4 pt-2">
                <li className="text-slate-700 text-base sm:text-lg leading-relaxed flex gap-3.5 items-start">
                  <span className="text-[#3B82F6] font-bold text-2xl leading-none">•</span>
                  <span><strong className="text-[#0A2540] font-bold">Available in both square and rectangular shapes:</strong> Our ceiling diffusers cater to a wide range of air distribution patterns, including one-, two-, three-, or four-way flows, to match the specific ventilation needs of any space.</span>
                </li>
                <li className="text-slate-700 text-base sm:text-lg leading-relaxed flex gap-3.5 items-start">
                  <span className="text-[#3B82F6] font-bold text-2xl leading-none">•</span>
                  <span><strong className="text-[#0A2540] font-bold">Crafted from high-grade extruded aluminum:</strong> Our ceiling diffusers feature durable aluminum construction with options for extruded aluminum, ensuring a sleek finish. The design includes mitered corners and a core flush with the margin, optimizing airflow. The diffusers come with countersunk screw holes for a seamless appearance and are finished with a white powder coat for a clean, modern look. An optional aluminum damper is available, allowing for precise air volume control. Coanda effect, Also called the ceiling or wall effect. It is the tendency of an airstream to follow a wall plane when the stream is in contact with the wall. This effect increases the throw and reduces drop.</span>
                </li>
              </ul>
            </section>

            {/* 1.1 STANDARD SIZES */}
            <section id="sec-standard-sizes" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  1.1 Standard Sizes & Dimensions
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                  Any combination of Length (L) × Width (W)
                </p>
              </div>
              
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                      <th className="p-4 sm:p-5">Length (mm)</th>
                      <th className="p-4 sm:p-5">Width (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                    {standardSizes.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-4 sm:p-5 font-semibold text-[#0A2540]">{row.length}</td>
                        <td className="p-4 sm:p-5 font-semibold text-[#0A2540]">{row.width}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Standard%20Size%20Ceiling%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote for Standard Sizes</span>
                </a>
              </div>
            </section>

            {/* 2. INTRODUCTION - CEILING DIFFUSERS & ACCESSORIES */}
            <section id="sec-intro-diffusers" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight border-b pb-4 border-slate-200">
                  2. Introduction – Ceiling Diffusers
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  These ceiling diffusers are ideal for commercial and industrial applications that:
                </p>
                <ul className="list-disc pl-6 text-base sm:text-lg text-slate-700 space-y-2">
                  <li>Require large volumes of airflow with minimal noise (NC levels) and low pressure drop.</li>
                  <li>High-ceiling environments, thanks to their capability for concentrated airflow discharge, ensuring effective ventilation and room mixing across larger spaces.</li>
                </ul>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                  Our products are tested and calibrated to the highest global standards, including <strong className="text-[#0A2540]">ASHRAE 70-1991</strong>, ensuring aerodynamic reliability. For specialized environments such as <strong className="text-[#0A2540]">clean rooms, hospitals, laboratories, and data centers</strong>, our diffusers guarantee stringent control over air volume, room pressurization, and filtration purity.
                </p>
              </div>

              {/* 2.1 OBD */}
              <div id="sec-obd" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  2.1 Opposed Blade Damper (OBD)
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  The Opposed Blade Damper (OBD) is specifically designed to complement  Airtron’s Square and Rectangular Ceiling Diffusers. Its unique opposing blade configuration guarantees even air distribution across the diffuser's throat and offers precise airflow control, adjustable from fully open to completely closed, regardless of system pressure fluctuations.
                </p>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  This damper installs swiftly using sheet metal screws directly onto the diffuser neck. The control mechanism is conveniently positioned at the diffuser face, allowing effortless balancing via a lever or screwdriver through the removable core.
                </p>
              </div>

              {/* 2.2 AF */}
              <div id="sec-af" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  2.2 Aluminum Filter (AF)
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
Aluminum Air Filters are highly versatile and are employed across various industries, including electronics, computing, and pharmaceuticals, due to their excellent filtration capabilities and compliance with stringent industry standards.

The wide range of available materials for Aluminum Filters, including washable and easy-to-clean models, underscores their adaptability and efficiency in diverse environments. This adaptability is crucial in environments requiring strict contamination control such as pharmaceutical manufacturing areas, where air purity directly impacts product quality.                </p>
              </div>

              {/* 2.3 Butterfly Damper */}
              <div id="sec-butterfly" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  2.3 Butterfly Damper
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
Adapts square neck SSDA/diffusers to a round neck, permitting attachment of round flexible or rigid ducting. Damper selection is then restricted to round-neck dampers only. Adaptors fit over the diffuser neck for fast assembly.                </p>
              </div>

              {/* 2.4 Equalizing Grid */}
              <div id="sec-eg" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  2.4 Equalizing Grid (EG)
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
This device balances the airflow entering a diffuser or duct, offering control over airflow direction with minimal noise and disturbance. Louvers can be individually adjusted and are mounted using nylon bushes to ensure long-term position stability and noise-free operation.

Made from extruded aluminum for vanes and a mill-finish frame, it is also available in a black matte finish for aesthetic preference.                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20quote%20for%20Ceiling%20Diffusers%20with%20OBD%20or%20Filter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote for Components & Accessories</span>
                </a>
              </div>
            </section>

            {/* 3. FIXING INFORMATION */}
            <section id="sec-fixing" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight border-b pb-4 border-slate-200">
                3. Fixing Information & Maintenance
              </h2>

              <div id="sec-duct-fixing" className="space-y-3 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  3.1 Duct Fixing & Core Removal
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
To install the core of the diffuser, press down on the core pin strings into the holes located at one end of the border frame. Then, release the core once the pins align with the matching holes on the frame’s opposite end. To remove the core, simply perform these steps in reverse order.                </p>
              </div>

              <div id="sec-obd-op" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-xl font-extrabold text-[#0A2540]">
                  3.2 Operation of Opposed Blade Damper
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
The opposed blade damper is tailored for compatibility with all models of Airtron Ceiling Diffusers, designed to ensure a uniform airflow distribution throughout the diffuser’s throat. It enables precise control of the air volume, from fully open to fully closed positions, unaffected by variations in system pressure. The adjustment of the damper, ranging anywhere between fully open and fully closed, can be achieved using a screwdriver once the internal core has been removed, as shown in the illustration.                </p>
              </div>
            </section>

            {/* 4. PRODUCT RANGE */}
            <section id="sec-range" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="space-y-2 border-b pb-4 border-slate-200">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  4. Product Range & Airflow Patterns
                </h2>
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Square & Rectangular Modular Geometric Configurations
                </p>
              </div>

              {/* PRODUCT RANGE IMAGE CONTAINER */}
              <div className="w-full bg-slate-50 border-2 border-slate-200 rounded-3xl p-4 sm:p-8 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src="/images/products/ceiling-diffusers-range.jpg"
                  alt="AlugridX Ceiling Diffusers Range - One Way, Two Way, Three Way, Four Way Square and Rectangular Flow Models"
                  title="AlugridX Ceiling Diffuser Models and Core Pattern Profiles"
                  className="w-full h-auto max-h-[500px] object-contain rounded-2xl"
                  loading="lazy"
                />

              </div>

              {/* DUCT SIZING GRID TABLE */}
              <div className="pt-2 space-y-3">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540]">
                  4.1 Duct Sizing & Ceiling Opening Dimensions
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                        <th className="p-4 font-sans">Configuration</th>
                        {ductSizingHeaders.map((h, i) => (
                          <th key={i} className="p-4 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ductSizingRows.map((r, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-4 font-sans font-bold text-[#0A2540] whitespace-nowrap">{r[0]}</td>
                          {r.slice(1).map((val, cIdx) => (
                            <td key={cIdx} className="p-4 whitespace-nowrap">{val}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20custom%20sizes%20for%20Ceiling%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote for Bespoke Dimensions</span>
                </a>
              </div>
            </section>

            {/* 5. TECHNICAL DATA */}
            <section id="sec-tech-data" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 border-slate-200">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                    5. Technical Data & Performance Metrics
                  </h2>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mt-1">
                    Discharge Velocity ($V_k$), Throw ($L_r$), and Static Pressure Loss ($P_d$)
                  </p>
                </div>
                
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <span className="text-sm text-slate-500 font-bold uppercase mr-1">Data Page</span>
                  <button
                    onClick={() => setActiveTablePage(1)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold font-mono transition-colors ${
                      activeTablePage === 1 ? "bg-[#0A2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    1
                  </button>
                  <button
                    onClick={() => setActiveTablePage(2)}
                    className={`w-9 h-9 rounded-xl text-sm font-bold font-mono transition-colors ${
                      activeTablePage === 2 ? "bg-[#0A2540] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    2
                  </button>
                </div>
              </div>

              {/* TECHNICAL MATRIX TABLE */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200">
                <table className="w-full text-left text-sm sm:text-base border-collapse font-mono">
                  <thead>
                    <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200">
                      <th className="p-4 whitespace-nowrap font-sans">Size (mm)</th>
                      <th className="p-4 whitespace-nowrap font-sans">Effective Area (m²)</th>
                      <th className="p-4 whitespace-nowrap font-sans">Metric</th>
                      {techHeaders.slice(activeTablePage === 1 ? 0 : 7, activeTablePage === 1 ? 7 : 13).map((flow, i) => (
                        <th key={i} className="p-4 whitespace-nowrap text-center">{flow}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {techDataRows.map((row, rIdx) => {
                      const valuesSlice = row.values.slice(
                        activeTablePage === 1 ? 0 : 7,
                        activeTablePage === 1 ? 7 : 13
                      );
                      return (
                        <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-4 font-bold text-[#0A2540] whitespace-nowrap">{row.size || ""}</td>
                          <td className="p-4 text-slate-500 whitespace-nowrap">{row.effectiveArea || ""}</td>
                          <td className="p-4 font-semibold text-[#0A2540] whitespace-nowrap bg-slate-50/40">{row.metric}</td>
                          {valuesSlice.map((val, cIdx) => (
                            <td key={cIdx} className="p-4 text-center whitespace-nowrap font-medium">{val}</td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* PRODUCT DESCRIPTION CHECKLIST TABLE */}
              <div className="pt-6 space-y-4 border-t border-slate-200">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0A2540] tracking-wide">
                  5.1 Deflection Pattern & Application Matrix
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-sm sm:text-base border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 uppercase">
                        <th className="p-4">SL No.</th>
                        <th className="p-4">Product Description</th>
                        <th className="p-4 text-center">1-Way</th>
                        <th className="p-4 text-center">2-Way</th>
                        <th className="p-4 text-center">3-Way</th>
                        <th className="p-4 text-center">4-Way</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {descriptionTable.map((item) => (
                        <tr key={item.slNo} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-4 font-mono font-bold text-slate-400">{item.slNo}</td>
                          <td className="p-4 font-semibold text-[#0A2540]">{item.name}</td>
                          <td className="p-4 text-center">{item.one && <Check className="inline text-green-600" size={18} />}</td>
                          <td className="p-4 text-center">{item.two && <Check className="inline text-green-600" size={18} />}</td>
                          <td className="p-4 text-center">{item.three && <Check className="inline text-green-600" size={18} />}</td>
                          <td className="p-4 text-center">{item.four && <Check className="inline text-green-600" size={18} />}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20complete%20submittal%20and%20pricing%20for%20Ceiling%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Request Full Specification & Pricing</span>
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