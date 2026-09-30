"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function FlowbarSlotDiffusersClient() {
  // 1 Slot Dimensions Table
  const oneSlotSizes = [
    { size: "1 Slot (25 mm)", fl: "41", s: "25", n: "70", f: "107", h: "42" },
    { size: "1 Slot (38 mm)", fl: "48", s: "38", n: "95", f: "134", h: "42" },
    { size: "1 Slot (51 mm)", fl: "54", s: "51", n: "121", f: "159", h: "42" },
  ];

  // 2 Slot Dimensions Table
  const twoSlotSizes = [
    { type: "2 Slot (23 mm)", fl: "41", s: "23", c: "41", n: "132", f: "170", h: "42" },
    { type: "2 Slot (42 mm)", fl: "48", s: "42", c: "41", n: "182", f: "220", h: "42" },
    { type: "2 Slot (62 mm)", fl: "54", s: "62", c: "41", n: "235", f: "273", h: "42" },
  ];

  // 7.1.1: 1 Slot - 25 mm Slot Width
  const perf1Slot25mm = {
    headers: ["36", "58", "79", "101", "122", "144", "165"],
    airflow: ["36", "58", "79", "101", "122", "144", "165"],
    sp: ["7", "18", "34", "55", "81", "112", "148"],
    nc: ["<10", "16", "26", "33", "39", "44", "49"],
    throw: ["1.5–2.5–4.3", "2.8–4–5.5", "3.8–4.5–6.5", "4.3–5.3–7.3", "4.9–5.8–8.3", "5.3–6–8.8", "5.5–6.8–9.5"],
  };

  // 7.1.2: 1 Slot - 38 mm Slot Width
  const perf1Slot38mm = {
    headers: ["43", "65", "86", "108", "129", "151", "173"],
    airflow: ["43", "65", "86", "108", "129", "151", "173"],
    sp: ["8", "18", "32", "51", "73", "99", "129"],
    nc: ["<10", "14", "24", "31", "37", "42", "48"],
    throw: ["1.8–3–5", "3–4.3–5.8", "4–5–6.8", "4.3–5.5–7.5", "5–5.8–8.3", "5.3–6.5–8.8", "5.5–6.8–9.8"],
  };

  // 7.1.3: 1 Slot - 51 mm Slot Width
  const perf1Slot51mm = {
    headers: ["43", "72", "101", "129", "158", "187", "216"],
    airflow: ["43", "72", "101", "129", "158", "187", "216"],
    sp: ["5", "14", "28", "46", "68", "95", "127"],
    nc: ["<10", "11", "22", "30", "36", "41", "46"],
    throw: ["1.5–2.8–5", "2.8–4.3–6", "4–5.3–7.3", "5–5.8–8.3", "5.3–6.5–9.3", "5.8–7–10", "6–7.5–10.8"],
  };

  // 7.2.1: 2 Slot - 23 mm Slot Width
  const perf2Slot23mm = {
    headers: ["36", "58", "79", "101", "122", "144", "165"],
    airflow: ["36", "58", "79", "101", "122", "144", "165"],
    sp: ["4", "9", "20", "30", "42", "51", "62"],
    nc: ["<10", "<15", "<15", "25", "30", "33", "38"],
    throw: ["1–1.2–2.1", "1.4–2–2.8", "1.9–2.3–3.3", "2.2–2.7–3.6", "2.3–2.9–4.2", "2.7–3–4.4", "2.8–3.4–4.8"],
  };

  // 7.2.2: 2 Slot - 42 mm Slot Width
  const perf2Slot42mm = {
    headers: ["43", "65", "86", "108", "129", "151", "173"],
    airflow: ["43", "65", "86", "108", "129", "151", "173"],
    sp: ["4", "9", "19", "23", "35", "40", "52"],
    nc: ["<10", "<15", "<15", "20", "30", "32", "35"],
    throw: ["1–1.5–2.5", "1.5–2.2–2.9", "2–2.5–3.4", "2.2–2.8–3.7", "2.5–2.9–4.2", "2.7–3.3–4.4", "2.8–3.4–4.9"],
  };

  // 7.2.3: 2 Slot - 62 mm Slot Width
  const perf2Slot62mm = {
    headers: ["43", "72", "101", "129", "158", "187", "216"],
    airflow: ["43", "72", "101", "129", "158", "187", "216"],
    sp: ["3", "7", "14", "21", "31", "38", "51"],
    nc: ["<10", "<15", "<15", "18", "20", "30", "35"],
    throw: ["1–1.4–2.5", "1.4–2.2–3", "2–2.6–3.4", "2.5–2.9–4.2", "2.7–3.2–4.7", "2.9–3.5–5", "3–3.8–5.4"],
  };

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. 1 Slot – Flange Type", href: "#sec-intro" },
    { label: "1.2. VERTICAL THROW MODEL (FBD-F)", href: "#sec-intro" },
    { label: "1.3. DIMENSIONS AND DETAILS (1 SLOT)", href: "#sec-dims-1slot-flange" },
    { label: "1.4. Air Movement", href: "#sec-air-flange" },
    { label: "2. 1 Slot – Hidden Frame 45°", href: "#sec-hf-45" },
    { label: "2.1. VERTICAL THROW MODEL (FBD50-HF)", href: "#sec-hf-45" },
    { label: "2.2. DIMENSIONS AND DETAILS (1 SLOT)", href: "#sec-dims-hf-45" },
    { label: "2.3. Air Movement", href: "#sec-air-hf-45" },
    { label: "3. 1 Slot – Plaster Hidden Frame 45°", href: "#sec-phf-45" },
    { label: "3.1. HORIZONTAL THROW MODEL (FBD50-PHF)", href: "#sec-phf-45" },
    { label: "3.2. DIMENSIONS AND DETAILS (1 SLOT)", href: "#sec-dims-phf-1slot" },
    { label: "3.3. Air Movement", href: "#sec-air-phf-1slot" },
    { label: "3.4. DIMENSIONS AND DETAILS (2 SLOT)", href: "#sec-dims-phf-2slot" },
    { label: "3.5. Air Movement", href: "#sec-air-phf-2slot" },
    { label: "4. 1 Slot – Hidden Frame 90°", href: "#sec-hf-90" },
    { label: "4.1. VERTICAL THROW MODEL (FBD50-HF)", href: "#sec-hf-90" },
    { label: "4.2. DIMENSIONS AND DETAILS (1 SLOT)", href: "#sec-dims-hf-90" },
    { label: "4.3. Air Movement", href: "#sec-air-hf-90" },
    { label: "5. 2 Slot – Hidden Frame 45°", href: "#sec-2slot-hf-45" },
    { label: "5.1. DIMENSIONS AND DETAILS (2 SLOT)", href: "#sec-dims-2slot-hf-45" },
    { label: "5.2. Air Movement", href: "#sec-air-2slot-hf-45" },
    { label: "6. 2 Slot – Hidden Frame 90°", href: "#sec-2slot-hf-90" },
    { label: "7. Performance Data", href: "#sec-performance-data" },
    { label: "7.1. 1 Slot", href: "#sec-perf-1slot" },
    { label: "7.1.1. 25 mm Slot Width", href: "#sec-perf-1slot-25mm" },
    { label: "7.1.2. 38 mm Slot Width", href: "#sec-perf-1slot-38mm" },
    { label: "7.1.3. 51 mm Slot Width", href: "#sec-perf-1slot-51mm" },
    { label: "7.2. 2 Slot", href: "#sec-perf-2slot" },
    { label: "7.2.1. 23 mm Slot Width", href: "#sec-perf-2slot-23mm" },
    { label: "7.2.2. 42 mm Slot Width", href: "#sec-perf-2slot-42mm" },
    { label: "7.2.3. 62 mm Slot Width", href: "#sec-perf-2slot-62mm" },
    { label: "7.3. Pressure Loss", href: "#sec-perf-pressure-loss" },
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
            Flowbar Slot Diffusers (FBD)
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Flowbar%20Slot%20Diffusers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
          >
            <MessageCircle size={18} />
            <span>Get Quote !</span>
          </a>
        </header>

        {/* MAIN CONTENT + TABLE OF CONTENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* PRIMARY COLUMN */}
          <main className="lg:col-span-8 space-y-12">

            {/* 1. INTRODUCTION & 1 SLOT - FLANGE TYPE */}
            <section id="sec-intro" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  1 Slot – Flange Type
                </h3>
                <h4 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-800">
                  VERTICAL THROW MODEL (FBD-F)
                </h4>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed pt-2">
                  <li><strong>•</strong> ALUGRIDX Flowbar Slot Diffuser is designed for high airflow quantities suitable for ceiling applications.</li>
                  <li><strong>•</strong> Air pattern can be controlled using pattern controllers, powder-coated black, if required.</li>
                  <li><strong>•</strong> Curve is available upon request for 1 Slot Flowbar diffuser.</li>
                  <li><strong>•</strong> A 3 Slot Flowbar Diffuser is available upon request.</li>
                </ul>
              </div>

              {/* 1.3 Dimensions and Details (1 Slot) */}
              <div id="sec-dims-1slot-flange" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (1 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-1slot-cad.webp"
                    alt="Flowbar Slot Diffuser 1 Slot CAD Cross Section"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Size</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {oneSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 1.4 Air Movement */}
              <div id="sec-air-flange" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Flowbar Slot Diffusers Air Movement (Horizontal Left, Vertical, Horizontal Right)"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%201%20Slot%20Flange%20Flowbar%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 2. 1 SLOT – HIDDEN FRAME 45° */}
            <section id="sec-hf-45" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  1 Slot – Hidden Frame 45°
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-800">
                  VERTICAL THROW MODEL (FBD50-HF)
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> ALUGRIDX Flowbar Slot Diffuser is designed for high airflow quantities suitable for ceiling applications.</li>
                  <li><strong>•</strong> Air pattern can be controlled using pattern controllers, powder-coated black, if required.</li>
                </ul>
              </div>

              {/* 2.2 Dimensions and Details */}
              <div id="sec-dims-hf-45" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (1 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-1slot-cad.webp"
                    alt="1 Slot Hidden Frame 45 CAD Diagram"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Size</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {oneSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 2.3 Air Movement */}
              <div id="sec-air-hf-45" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Air Movement Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%201%20Slot%20Hidden%20Frame%20Flowbar%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. 1 SLOT – PLASTER HIDDEN FRAME 45° */}
            <section id="sec-phf-45" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  1 Slot – Plaster Hidden Frame 45°
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-800">
                  HORIZONTAL THROW MODEL (FBD50-PHF)
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> ALUGRIDX Flowbar Slot Diffuser Plaster Hidden Frame is designed for high airflow quantities suitable for ceiling applications.</li>
                  <li><strong>•</strong> Air pattern can be controlled using pattern controllers, powder-coated black, if required.</li>
                </ul>
              </div>

              {/* 3.2 Dimensions and Details (1 Slot) */}
              <div id="sec-dims-phf-1slot" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (1 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-1slot-cad.webp"
                    alt="1 Slot Plaster Hidden Frame 45 CAD"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Size</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {oneSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3.3 Air Movement (1 Slot) */}
              <div id="sec-air-phf-1slot" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Air Movement Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* 3.4 Dimensions and Details (2 Slot) */}
              <div id="sec-dims-phf-2slot" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (2 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-2slot-cad.webp"
                    alt="2 Slot Plaster Hidden Frame 45 CAD"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Type</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">C</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {twoSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.type}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.c}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3.5 Air Movement (2 Slot) */}
              <div id="sec-air-phf-2slot" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Air Movement Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Plaster%20Hidden%20Frame%20Flowbar%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 4. 1 SLOT – HIDDEN FRAME 90° */}
            <section id="sec-hf-90" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  1 Slot – Hidden Frame 90°
                </h2>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-800">
                  VERTICAL THROW MODEL (FBD50-HF)
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> ALUGRIDX Flowbar Slot Diffuser is designed for high airflow quantities suitable for ceiling applications.</li>
                  <li><strong>•</strong> Air pattern can be controlled using pattern controllers, powder-coated black, if required.</li>
                  <li><strong>•</strong> Curve is available upon request for 1 Slot Flowbar diffuser.</li>
                  <li><strong>•</strong> A 3 Slot Flowbar Diffuser is available upon request.</li>
                </ul>
              </div>

              {/* 4.2 Dimensions and Details */}
              <div id="sec-dims-hf-90" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (1 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-1slot-cad.webp"
                    alt="1 Slot Hidden Frame 90 CAD Diagram"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Size</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {oneSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 4.3 Air Movement */}
              <div id="sec-air-hf-90" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Air Movement Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%201%20Slot%20Hidden%20Frame%2090%20Flowbar%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 5. 2 SLOT – HIDDEN FRAME 45° */}
            <section id="sec-2slot-hf-45" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  2 Slot – Hidden Frame 45°
                </h2>
              </div>

              {/* 5.1 Dimensions and Details (2 Slot) */}
              <div id="sec-dims-2slot-hf-45" className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (2 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-2slot-cad.webp"
                    alt="2 Slot Hidden Frame 45 CAD Diagram"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Type</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">C</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {twoSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.type}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.c}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5.2 Air Movement */}
              <div id="sec-air-2slot-hf-45" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Air Movement Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%202%20Slot%20Hidden%20Frame%20Flowbar%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 6. 2 SLOT – HIDDEN FRAME 90° */}
            <section id="sec-2slot-hf-90" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  2 Slot – Hidden Frame 90°
                </h2>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] uppercase tracking-tight">
                  DIMENSIONS AND DETAILS (2 SLOT)
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-2slot-cad.webp"
                    alt="2 Slot Hidden Frame 90 CAD Diagram"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>
                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[540px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4">Slot Type</th>
                        <th className="p-3.5 sm:p-4">FL</th>
                        <th className="p-3.5 sm:p-4">S</th>
                        <th className="p-3.5 sm:p-4">C</th>
                        <th className="p-3.5 sm:p-4">N</th>
                        <th className="p-3.5 sm:p-4">F</th>
                        <th className="p-3.5 sm:p-4">H</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {twoSlotSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] font-sans">{row.type}</td>
                          <td className="p-3.5 sm:p-4">{row.fl}</td>
                          <td className="p-3.5 sm:p-4">{row.s}</td>
                          <td className="p-3.5 sm:p-4">{row.c}</td>
                          <td className="p-3.5 sm:p-4">{row.n}</td>
                          <td className="p-3.5 sm:p-4">{row.f}</td>
                          <td className="p-3.5 sm:p-4">{row.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Air Movement */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <h4 className="text-xl sm:text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Air Movement
                </h4>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/flowbar/fbd-air-movement.webp"
                    alt="Air Movement Diagram"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%202%20Slot%20Hidden%20Frame%2090%20Flowbar%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 7. PERFORMANCE DATA (FULL SPEC AS PER RECORDING) */}
            <section id="sec-performance-data" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-12 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Performance Data
                </h2>
              </div>

              {/* 7.1. 1 Slot Group */}
              <div id="sec-perf-1slot" className="space-y-8 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  1 Slot
                </h3>

                {/* 7.1.1: 25 mm Slot Width */}
                <div id="sec-perf-1slot-25mm" className="space-y-4 scroll-mt-32">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                    25 mm Slot Width
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Parameter</th>
                          {perf1Slot25mm.headers.map((h, idx) => (
                            <th key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot25mm.headers.length - 1 ? 'border-r border-slate-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Airflow (l/s)</td>
                          {perf1Slot25mm.airflow.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot25mm.airflow.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Static Pressure (Pa)</td>
                          {perf1Slot25mm.sp.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot25mm.sp.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">NC (Noise Criteria)</td>
                          {perf1Slot25mm.nc.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot25mm.nc.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Throw (m)</td>
                          {perf1Slot25mm.throw.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 whitespace-nowrap ${idx !== perf1Slot25mm.throw.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 7.1.2: 38 mm Slot Width */}
                <div id="sec-perf-1slot-38mm" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                    38 mm Slot Width
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Parameter</th>
                          {perf1Slot38mm.headers.map((h, idx) => (
                            <th key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot38mm.headers.length - 1 ? 'border-r border-slate-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Airflow (l/s)</td>
                          {perf1Slot38mm.airflow.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot38mm.airflow.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Static Pressure (Pa)</td>
                          {perf1Slot38mm.sp.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot38mm.sp.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">NC (Noise Criteria)</td>
                          {perf1Slot38mm.nc.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot38mm.nc.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Throw (m)</td>
                          {perf1Slot38mm.throw.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 whitespace-nowrap ${idx !== perf1Slot38mm.throw.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 7.1.3: 51 mm Slot Width */}
                <div id="sec-perf-1slot-51mm" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                    51 mm Slot Width
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Parameter</th>
                          {perf1Slot51mm.headers.map((h, idx) => (
                            <th key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot51mm.headers.length - 1 ? 'border-r border-slate-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Airflow (l/s)</td>
                          {perf1Slot51mm.airflow.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot51mm.airflow.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Static Pressure (Pa)</td>
                          {perf1Slot51mm.sp.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot51mm.sp.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">NC (Noise Criteria)</td>
                          {perf1Slot51mm.nc.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf1Slot51mm.nc.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Throw (m)</td>
                          {perf1Slot51mm.throw.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 whitespace-nowrap ${idx !== perf1Slot51mm.throw.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 7.2. 2 Slot Group */}
              <div id="sec-perf-2slot" className="space-y-8 pt-8 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  2 Slot
                </h3>

                {/* 7.2.1: 23 mm Slot Width */}
                <div id="sec-perf-2slot-23mm" className="space-y-4 scroll-mt-32">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                    23 mm Slot Width
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Parameter</th>
                          {perf2Slot23mm.headers.map((h, idx) => (
                            <th key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot23mm.headers.length - 1 ? 'border-r border-slate-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Airflow (l/s)</td>
                          {perf2Slot23mm.airflow.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot23mm.airflow.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Static Pressure (Pa)</td>
                          {perf2Slot23mm.sp.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot23mm.sp.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">NC (Noise Criteria)</td>
                          {perf2Slot23mm.nc.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot23mm.nc.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Throw (m)</td>
                          {perf2Slot23mm.throw.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 whitespace-nowrap ${idx !== perf2Slot23mm.throw.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 7.2.2: 42 mm Slot Width */}
                <div id="sec-perf-2slot-42mm" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                    42 mm Slot Width
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Parameter</th>
                          {perf2Slot42mm.headers.map((h, idx) => (
                            <th key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot42mm.headers.length - 1 ? 'border-r border-slate-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Airflow (l/s)</td>
                          {perf2Slot42mm.airflow.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot42mm.airflow.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Static Pressure (Pa)</td>
                          {perf2Slot42mm.sp.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot42mm.sp.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">NC (Noise Criteria)</td>
                          {perf2Slot42mm.nc.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot42mm.nc.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Throw (m)</td>
                          {perf2Slot42mm.throw.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 whitespace-nowrap ${idx !== perf2Slot42mm.throw.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 7.2.3: 62 mm Slot Width */}
                <div id="sec-perf-2slot-62mm" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-800">
                    62 mm Slot Width
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3.5 sm:p-4 border-r border-slate-200 font-extrabold">Parameter</th>
                          {perf2Slot62mm.headers.map((h, idx) => (
                            <th key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot62mm.headers.length - 1 ? 'border-r border-slate-200' : ''}`}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Airflow (l/s)</td>
                          {perf2Slot62mm.airflow.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot62mm.airflow.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Static Pressure (Pa)</td>
                          {perf2Slot62mm.sp.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot62mm.sp.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">NC (Noise Criteria)</td>
                          {perf2Slot62mm.nc.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 ${idx !== perf2Slot62mm.nc.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200">Throw (m)</td>
                          {perf2Slot62mm.throw.map((val, idx) => (
                            <td key={idx} className={`p-3.5 sm:p-4 whitespace-nowrap ${idx !== perf2Slot62mm.throw.length - 1 ? 'border-r border-slate-200' : ''}`}>{val}</td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* 7.3. Pressure Loss & Correction Notes */}
              <div id="sec-perf-pressure-loss" className="space-y-8 pt-8 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                  Pressure Loss
                </h3>

                <div className="space-y-6 text-sm text-slate-700 leading-relaxed">
                  {/* Throw Corrections */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
                      Throw Corrections
                    </h4>
                    <p>• For a 600 mm section, the throw values are 0.72 times the shown values.</p>
                    <p>• For a continuous length of 3000 mm, the throw values increase by 1.7 times the shown values.</p>
                    <p>• For 3600 mm, the multiplier is 1.8 times.</p>
                  </div>

                  {/* Air Pattern Notes */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
                      Air Pattern Notes
                    </h4>
                    <p>• Provided values are for 1-way air pattern.</p>
                    <p>• For divided airflow, select airflow per direction based on number of slots aimed in that direction (Total airflow split across aimed slots).</p>
                  </div>

                  {/* Noise Criteria Notes */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
                      Noise Criteria Notes
                    </h4>
                    <p>• Each NC value represents the Noise criteria curve such that the sound pressure across octave bands (2nd through 7th) will not surpass it.</p>
                    <p>• Measured with room absorption of 10 dB, equivalent to 10⁻¹² Watts, using a 1200 mm section (other lengths require correction – see Table A).</p>
                  </div>

                  {/* Test Conditions */}
                  <div className="space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
                      Test Conditions
                    </h4>
                    <p>• Tests performed without Plenum effect (no pressure or sound influence).</p>
                    <p>• Throw values are based on 1-way slot discharge.</p>
                    <p>• Pressures shown in Pascal (Pa).</p>
                    <p>• NC and Throw data based on standard sections of 1200 mm.</p>
                  </div>
                </div>

                {/* TABLE A – NC Correction with Length */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
                    TABLE A – NC Correction with Length
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3 sm:p-4 border-r border-slate-200 font-extrabold">Length (mm)</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">600</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">1200</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">1800</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">2400</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">3000</th>
                          <th className="p-3 sm:p-4">3600</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200 font-sans">Supply</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">-3</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">0</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+2</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+3</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+5</td>
                          <td className="p-3 sm:p-4">+5</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200 font-sans">Return</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">0</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+3</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+5</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+6</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">+8</td>
                          <td className="p-3 sm:p-4">+8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* TABLE B – Throw Correction with Length */}
                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <h4 className="text-base sm:text-lg font-bold text-[#0A2540]">
                    TABLE B – Throw Correction with Length
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540]">
                          <th className="p-3 sm:p-4 border-r border-slate-200 font-extrabold">Length (mm)</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">600</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">1200</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">2400</th>
                          <th className="p-3 sm:p-4 border-r border-slate-200">3000</th>
                          <th className="p-3 sm:p-4">3600</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                        <tr className="hover:bg-slate-50/70">
                          <td className="p-3 sm:p-4 font-bold text-[#0A2540] border-r border-slate-200 font-sans">Throw Correction</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">0.72</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">1</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">1.5</td>
                          <td className="p-3 sm:p-4 border-r border-slate-200">1.7</td>
                          <td className="p-3 sm:p-4">1.8</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20performance%20selection%20for%20Flowbar%20Slot%20Diffusers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                  >
                    <MessageCircle size={18} />
                    <span>Get Quote !</span>
                  </a>
                </div>
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