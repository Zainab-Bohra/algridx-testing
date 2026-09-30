"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function DiscValvesClient() {
  // Sizing Data for DV-VE (Exhaust) and DV-VS (Supply)
  const valveSizes = [
    { size: "100", a: "98", c: "75", e: "138" },
    { size: "125", a: "123", c: "100", e: "164" },
    { size: "150", a: "148", c: "120", e: "202" },
    { size: "160", a: "158", c: "130", e: "211" },
    { size: "200", a: "198", c: "158", e: "248" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Key Features", href: "#sec-key-features" },
    { label: "1.2. Available Finish", href: "#sec-available-finish" },
    { label: "1.3. Mounting & Rotation", href: "#sec-mounting-rotation" },
    { label: "2. Dimensional Data", href: "#sec-dimensional-data" },
    { label: "2.1. Model DV-VE", href: "#sec-model-dv-ve" },
    { label: "2.1.1. Exhaust Valve", href: "#sec-model-dv-ve" },
    { label: "2.2. Model DV-VS", href: "#sec-model-dv-vs" },
    { label: "2.2.1. Supply Disc Valve", href: "#sec-model-dv-vs" },
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
            Disc Valves
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Disc%20Valves"
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
                  <strong>ALUGRIDX Disc Valves</strong> offer an alternative to ceiling diffusers. By rotating the disc in either a clockwise or anticlockwise direction, the airflow passing through the disc valve can be regulated.
                </p>
                <p>
                  This rotation effectively alters the open space situated between the disc and the frame.
                </p>
              </div>

              {/* 1.1 Key Features */}
              <div id="sec-key-features" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Key Features
                </h3>
                <ul className="space-y-3 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Frame and disc are manufactured from high quality galvanized steel sheet.</strong></li>
                  <li><strong>• Disc is attached to the frame by threaded rod.</strong></li>
                  <li><strong>• A gasket is applied around the rear of the frame to prevent any air leakage.</strong></li>
                  <li><strong>• Disc valves are particularly well-matched to air distribution systems that deal with relatively low airflow rates within small circular ductwork.</strong></li>
                  <li><strong>• Recommended for exhaust of damp and greasy air in damp areas such as toilets, bathrooms, and kitchens.</strong></li>
                </ul>
              </div>

              {/* 1.2 Available Finish */}
              <div id="sec-available-finish" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Finish
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Powder coated color finish</strong> (e.g., RAL 9016, 9010)</li>
                </ul>
              </div>

              {/* 1.3 Mounting & Rotation */}
              <div id="sec-mounting-rotation" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Mounting & Rotation
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Ceiling or wall mounting</strong> by screws or collected into a circular duct</li>
                  <li><strong>• Can be mounted in exposed air ducts with mounting rings</strong></li>
                </ul>
              </div>

              {/* Green Get Quote Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Disc%20Valves"
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
            <section id="sec-dimensional-data" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimensional Data
                </h2>
              </div>

              {/* CAD Cross-Section Schematic */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/disc-valves/disc-valve-cad.webp"
                  alt="Model DV-VE Exhaust Disc Valve CAD Dimensional Drawing"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              {/* 2.1 Model DV-VE (Exhaust Valve) */}
              <div id="sec-model-dv-ve" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">
                    Model DV-VE
                  </h3>
                  <h4 className="text-xl font-bold text-slate-800">
                    Exhaust Valve
                  </h4>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">Size (mm)</th>
                        <th className="p-4">A</th>
                        <th className="p-4">C</th>
                        <th className="p-4">E</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {valveSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-4">{row.a}</td>
                          <td className="p-4">{row.c}</td>
                          <td className="p-4">{row.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2.2 Model DV-VS (Supply Disc Valve) */}
              <div id="sec-model-dv-vs" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">
                    Model DV-VS
                  </h3>
                  <h4 className="text-xl font-bold text-slate-800">
                    Supply Disc Valve
                  </h4>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">Size (mm)</th>
                        <th className="p-4">A</th>
                        <th className="p-4">C</th>
                        <th className="p-4">E</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {valveSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-4">{row.a}</td>
                          <td className="p-4">{row.c}</td>
                          <td className="p-4">{row.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Disc%20Valves"
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