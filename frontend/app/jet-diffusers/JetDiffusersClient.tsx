"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function JetDiffusersClient() {
  // Eyeball Table 1 (5 dimensions: A, B, C, D, E)
  const eyeballSizes1 = [
    { size: "125", a: "120", b: "61", c: "172", d: "96", e: "72" },
    { size: "150", a: "145", b: "75", c: "200", d: "113", e: "83" },
    { size: "160", a: "155", b: "75", c: "200", d: "113", e: "83" },
    { size: "200", a: "195", b: "105", c: "265", d: "142", e: "107" },
    { size: "250", a: "245", b: "128", c: "314", d: "179", e: "135" },
    { size: "315", a: "310", b: "165", c: "390", d: "230", e: "174" },
    { size: "350", a: "345", b: "185", c: "433", d: "251", e: "186" },
    { size: "400", a: "395", b: "210", c: "495", d: "285", e: "218" },
    { size: "450", a: "445", b: "235", c: "559", d: "316", e: "235" },
    { size: "500", a: "495", b: "256", c: "618", d: "350", e: "259" },
    { size: "630", a: "625", b: "323", c: "779", d: "440", e: "—" },
  ];

  // Eyeball Table 2 (4 dimensions: A, B, C, D)
  const eyeballSizes2 = [
    { size: "160", a: "145", b: "80", c: "115", d: "160" },
    { size: "200", a: "195", b: "100", c: "160", d: "220" },
    { size: "250", a: "245", b: "125", c: "215", d: "260" },
    { size: "315", a: "310", b: "162", c: "255", d: "320" },
    { size: "400", a: "395", b: "200", c: "345", d: "410" },
  ];

  // Ring Type Standard Sizes
  const ringTypeSizes = [
    { model: "JD-RT150", b: "148", a: "200" },
    { model: "JD-RT200", b: "198", a: "250" },
    { model: "JD-RT250", b: "248", a: "300" },
    { model: "JD-RT300", b: "298", a: "350" },
    { model: "JD-RT350", b: "348", a: "400" },
    { model: "JD-RT400", b: "398", a: "460" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Jet Diffusers – Eyeball Type (JD-EBT)", href: "#sec-eyeball-intro" },
    { label: "1.2. Available Finish", href: "#sec-available-finish" },
    { label: "1.3. Available Accessories", href: "#sec-available-accessories" },
    { label: "1.4. Mounting & Rotation", href: "#sec-mounting-rotation" },
    { label: "2. Dimensional Data", href: "#sec-dimensional-data" },
    { label: "3. Jet Diffusers – Ring Type (JD-RT)", href: "#sec-ring-type" },
    { label: "3.1. Standard Sizes", href: "#sec-ring-sizes" },
    { label: "3.2. Characteristics", href: "#sec-ring-characteristics" },
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
            Jet Diffusers
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20Jet%20Diffusers"
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

              {/* 1.1 Jet Diffusers – Eyeball Type (JD-EBT) */}
              <div id="sec-eyeball-intro" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Jet Diffusers – Eyeball Type (JD-EBT)
                </h3>
                <p className="text-base text-slate-700 leading-relaxed">
                  ALUGRIDX Jet Diffusers (Eyeball Type) are designed to provide ventilation in places where distribution of air through ceiling diffusers is difficult, supplying both cool and heated air in buildings and structures with large areas.
                </p>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Developed for large and high areas</strong>, such as airports, shopping centers, show centers, theaters, etc.</li>
                  <li><strong>• Ensures a long throw (25 m)</strong> at high outlet velocities.</li>
                  <li><strong>• Used for cooling/heating</strong>, with the characteristic of orientation.</li>
                  <li><strong>• Manufactured from high-quality aluminum sheets.</strong></li>
                </ul>
              </div>

              {/* 1.2 Available Finish */}
              <div id="sec-available-finish" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Finish
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Powder coated color finish</strong></li>
                  <li><strong>• Galvanized sheet steel frame</strong></li>
                </ul>
              </div>

              {/* 1.3 Available Accessories */}
              <div id="sec-available-accessories" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Available Accessories
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Butterfly Damper in plastic or steel</strong> (manual control)</li>
                  <li><strong>• Radial shaped Damper</strong> (screw control)</li>
                </ul>
              </div>

              {/* 1.4 Mounting & Rotation */}
              <div id="sec-mounting-rotation" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Mounting & Rotation
                </h3>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Ceiling or wall mounting</strong> by screws or connected into a circular duct</li>
                  <li><strong>• Manual rotation or by motor control</strong></li>
                </ul>
              </div>

              {/* Green Get Quote Button */}
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Jet%20Diffusers"
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

              {/* CAD Drawings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/images/products/jet-diffusers/jd-eyeball-cad-front.webp"
                    alt="Jet Diffuser Eyeball Front Spherical Diagram"
                    className="max-w-full h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="/images/products/jet-diffusers/jd-eyeball-cad-side.webp"
                    alt="Jet Diffuser Eyeball Side Profile Diagram"
                    className="max-w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Dimension Tables Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start pt-2">
                {/* Table 1: 5 Dimensions (7 Cols on xl) */}
                <div className="xl:col-span-7 overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-3">Size (mm)</th>
                        <th className="p-3">A</th>
                        <th className="p-3">B</th>
                        <th className="p-3">C</th>
                        <th className="p-3">D</th>
                        <th className="p-3">E</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {eyeballSizes1.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-3">{row.a}</td>
                          <td className="p-3">{row.b}</td>
                          <td className="p-3">{row.c}</td>
                          <td className="p-3">{row.d}</td>
                          <td className="p-3">{row.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table 2: 4 Dimensions (5 Cols on xl) */}
                <div className="xl:col-span-5 overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-3">Size (mm)</th>
                        <th className="p-3">A</th>
                        <th className="p-3">B</th>
                        <th className="p-3">C</th>
                        <th className="p-3">D</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {eyeballSizes2.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3 font-bold text-[#0A2540] font-sans">{row.size}</td>
                          <td className="p-3">{row.a}</td>
                          <td className="p-3">{row.b}</td>
                          <td className="p-3">{row.c}</td>
                          <td className="p-3">{row.d}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Eyeball%20Jet%20Diffusers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 3. JET DIFFUSERS – RING TYPE (JD-RT) */}
            <section id="sec-ring-type" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Jet Diffusers – Ring Type (JD-RT)
                </h2>
              </div>

              {/* 3.1 Standard Sizes */}
              <div id="sec-ring-sizes" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Standard Sizes
                </h3>
                <p className="text-sm text-slate-500 font-medium">
                  (Contains diagram with &Oslash;A and &Oslash;B dimensions)
                </p>

                {/* Ring Type CAD Diagram */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/jet-diffusers/jd-ring-cad.webp"
                    alt="Jet Diffuser Ring Type CAD Diagram"
                    className="max-w-md w-full h-auto object-contain"
                  />
                </div>

                {/* Ring Type Sizes Table */}
                <div className="overflow-x-auto rounded-xl border border-slate-200 max-w-md font-mono pt-2">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-[#0A2540] font-bold border-b border-slate-200 font-sans">
                        <th className="p-4">Model</th>
                        <th className="p-4">B (mm)</th>
                        <th className="p-4">A (mm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {ringTypeSizes.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-4 font-bold text-[#0A2540] font-sans">{row.model}</td>
                          <td className="p-4">{row.b}</td>
                          <td className="p-4 font-semibold text-[#3B82F6]">{row.a}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3.2 Characteristics */}
              <div id="sec-ring-characteristics" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540]">
                  Characteristics
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>• 360° – 4 way adjustable</strong></li>
                  <li><strong>• Metal slide damper as optional</strong></li>
                  <li><strong>• Aluminum</strong></li>
                  <li><strong>• RAL 9016 / 9010 white as standard</strong></li>
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20pricing%20for%20Ring%20Type%20Jet%20Diffusers"
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