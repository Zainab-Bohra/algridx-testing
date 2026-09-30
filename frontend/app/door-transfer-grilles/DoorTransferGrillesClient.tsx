"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function DoorTransferGrillesClient() {
  const [currentPage, setCurrentPage] = useState(1);

  // Dimension Matrix Columns (L mm)
  const lDimensions = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"];
  // Dimension Matrix Row Values for W mm
  const wRowValues = ["100", "200", "300", "400", "500", "600", "700"];

  // Page 1: Suggested Sound Levels (from video & screenshots)
  const soundLevelsPage1 = [
    { category: "Large Buildings", application: "Radio and TV studios", soundLevel: "25–30", nc: "20–25" },
    { category: "Large Buildings", application: "Concert and Opera halls", soundLevel: "25–35", nc: "20–30" },
    { category: "Large Buildings", application: "Churches", soundLevel: "25–35", nc: "20–30" },
    { category: "Large Buildings", application: "Cinemas", soundLevel: "35–45", nc: "30–40" },
    { category: "Large Buildings", application: "Banquet halls", soundLevel: "40–50", nc: "35–45" },
    { category: "Hospitals", application: "Private rooms", soundLevel: "30–40", nc: "25–35" },
    { category: "Hospitals", application: "Operation theaters", soundLevel: "35–45", nc: "30–40" },
    { category: "Hospitals", application: "Waiting rooms", soundLevel: "40–50", nc: "35–45" },
    { category: "Offices", application: "Board rooms", soundLevel: "25–35", nc: "20–30" },
    { category: "Offices", application: "Conference rooms", soundLevel: "30–40", nc: "25–35" },
    { category: "Offices", application: "Executive offices", soundLevel: "35–45", nc: "30–40" },
    { category: "Offices", application: "General open offices", soundLevel: "35–45", nc: "30–40" },
    { category: "Offices", application: "Typing pools", soundLevel: "40–50", nc: "35–45" },
    { category: "Offices", application: "Computer rooms", soundLevel: "45–65", nc: "40–55" },
    { category: "Hotels/Restaurants/Stores", application: "Rooms", soundLevel: "30–40", nc: "25–35" },
    { category: "Hotels/Restaurants/Stores", application: "Restaurants", soundLevel: "35–45", nc: "30–40" },
  ];

  // Page 2: Suggested Sound Levels (from video & screenshots)
  const soundLevelsPage2 = [
    { category: "Hotels/Restaurants/Stores", application: "Stores", soundLevel: "30–50", nc: "35–45" },
    { category: "Hotels/Restaurants/Stores", application: "Supermarkets", soundLevel: "45–55", nc: "40–50" },
    { category: "Residential Buildings", application: "Single family homes (rural & suburban)", soundLevel: "–", nc: "20–30" },
    { category: "Residential Buildings", application: "Single family homes (urban)", soundLevel: "–", nc: "25–35" },
    { category: "Damage Risk Criteria", application: "Damage risk criteria", soundLevel: "85", nc: "–" },
  ];

  const currentSoundLevels = currentPage === 1 ? soundLevelsPage1 : soundLevelsPage2;

  const tocLinks = [
    { label: "1. Dimension Data", href: "#sec-dimension-data" },
    { label: "2. Installation Details", href: "#sec-installation-details" },
    { label: "2.1. AVAILABLE FINISHES", href: "#sec-available-finishes" },
    { label: "2.2. ORDERING PROCEDURES", href: "#sec-ordering-procedures" },
    { label: "3. Suggested Sound Levels", href: "#sec-sound-levels" },
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
            Door Transfer Grilles
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Door%20Transfer%20Grilles"
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

            {/* 1. DIMENSION DATA */}
            <section id="sec-dimension-data" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Dimension Data
                </h2>
              </div>

              <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                <p>
                  Door Transfer Grilles are designed to provide the maximum free area with a vision-proof inverted &ldquo;V&rdquo; core design, ensuring privacy while allowing efficient air transfer. These grilles are ideal for installation in doors, partitions, and return/exhaust air openings where the interior of the duct or plenum must remain concealed.
                </p>
                <p>
                  Manufactured from high-quality extruded aluminium sections, the inverted &ldquo;V&rdquo; louvers not only block visibility but also offer excellent strength and rigidity. When installed in the lower portion of a door, the grille is durable against impacts and maintains a clean, professional appearance over time.
                </p>
                <p>
                  Countersunk screw holes are provided as standard for a smooth, flush-mounted finish.
                </p>
                <p>
                  ALUGRIDX Door Transfer Grilles are available in all standard sizes as listed below.
                </p>
              </div>

              {/* Dimensions Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                      <th className="p-3.5 sm:p-4">L mm</th>
                      {lDimensions.map((dim, idx) => (
                        <th key={idx} className="p-3.5 sm:p-4">{dim}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-slate-50">
                      <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">W mm</td>
                      {wRowValues.map((val, idx) => (
                        <td key={idx} className="p-3.5 sm:p-4">{val}</td>
                      ))}
                      <td className="p-3.5 sm:p-4 text-slate-400">–</td>
                      <td className="p-3.5 sm:p-4 text-slate-400">–</td>
                      <td className="p-3.5 sm:p-4 text-slate-400">–</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm font-semibold text-slate-600">
                Door Transfer Grilles are also available in 50 mm increments.
              </p>

              {/* MODEL DTG-1 CAD Drawing & Details */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/door-transfer/dtg-model-1-cad.webp"
                    alt="MODEL DTG-1 Door Transfer Grille Single Frame CAD Drawing"
                    className="max-w-sm w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base font-semibold text-[#0A2540]">
                  <strong>DTG-1</strong> Door/Transfer grille with a fixed frame on one side.
                </p>
              </div>

              {/* MODEL DTG-2 CAD Drawing & Details */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/door-transfer/dtg-model-2-cad.webp"
                    alt="MODEL DTG-2 Door Transfer Grille Telescopic Frame CAD Drawing"
                    className="max-w-sm w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base font-semibold text-[#0A2540]">
                  <strong>DTG-2</strong> Door/Transfer grille with a fixed frame on one side and an additional removable frame on the other side.
                </p>
              </div>

              {/* In-content CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Door%20Transfer%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 2. INSTALLATION DETAILS */}
            <section id="sec-installation-details" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Installation Details
                </h2>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/door-transfer/dtg-installation-details.webp"
                  alt="Installation Details for MODEL DTG-1 and MODEL DTG-2"
                  className="max-w-md w-full h-auto object-contain"
                />
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20installation%20guidelines%20for%20Door%20Transfer%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>

              {/* 2.1. AVAILABLE FINISHES */}
              <div id="sec-available-finishes" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  AVAILABLE FINISHES
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Natural anodized aluminum</li>
                  <li><strong>•</strong> Powder-coated color finish</li>
                  <li><strong>•</strong> Golden/bronze anodized aluminum</li>
                </ul>
              </div>

              {/* 2.2. ORDERING PROCEDURES */}
              <div id="sec-ordering-procedures" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  ORDERING PROCEDURES
                </h3>
                <p className="text-sm font-bold text-slate-700">Example:</p>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Model no.</th>
                        <th className="p-3.5 sm:p-4">size</th>
                        <th className="p-3.5 sm:p-4">quantity</th>
                        <th className="p-3.5 sm:p-4">fixing</th>
                        <th className="p-3.5 sm:p-4">finish</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">DTG-1</td>
                        <td className="p-3.5 sm:p-4">600 x 300</td>
                        <td className="p-3.5 sm:p-4">17</td>
                        <td className="p-3.5 sm:p-4">&apos;S&apos; (standard)</td>
                        <td className="p-3.5 sm:p-4 uppercase">POWER COATED</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20want%20to%20place%20an%20order%20for%20Door%20Transfer%20Grilles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. SUGGESTED SOUND LEVELS */}
            <section id="sec-sound-levels" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Suggested Sound Levels
                </h2>
              </div>

              {/* Paginated Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[560px]">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                      <th className="p-3.5 sm:p-4">Category</th>
                      <th className="p-3.5 sm:p-4">Application</th>
                      <th className="p-3.5 sm:p-4">Sound Level dB A</th>
                      <th className="p-3.5 sm:p-4">NC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    {currentSoundLevels.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70">
                        <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.category}</td>
                        <td className="p-3.5 sm:p-4 font-sans">{row.application}</td>
                        <td className="p-3.5 sm:p-4">{row.soundLevel}</td>
                        <td className="p-3.5 sm:p-4">{row.nc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Pagination Controls matching live page UI */}
              <div className="flex items-center justify-end gap-1.5 pt-2 font-sans text-xs">
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="First page"
                >
                  <ChevronsLeft size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={14} />
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage(1)}
                  className={`px-3 py-1.5 rounded-lg border font-bold ${
                    currentPage === 1
                      ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                      : "border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  1
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage(2)}
                  className={`px-3 py-1.5 rounded-lg border font-bold ${
                    currentPage === 2
                      ? "bg-[#3B82F6] text-white border-[#3B82F6]"
                      : "border-slate-200 hover:bg-slate-100 text-slate-700"
                  }`}
                >
                  2
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentPage(2)}
                  disabled={currentPage === 2}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next page"
                >
                  <ChevronRight size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage(2)}
                  disabled={currentPage === 2}
                  className="p-2 rounded-lg border border-slate-200 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Last page"
                >
                  <ChevronsRight size={14} />
                </button>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20sound%20level%20verification%20for%20Door%20Transfer%20Grilles"
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