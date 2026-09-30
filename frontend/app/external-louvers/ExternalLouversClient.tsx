"use client";

import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export default function ExternalLouversClient() {
  const constructionDetails = [
    { code: "A", description: "Normal size (L x W)" },
    { code: "B", description: "Neck size (L - 10) x (W - 10)" },
    { code: "C", description: "Overall size (B + 60)" },
    { code: "D", description: "Frame width = 30 mm" },
    { code: "Bp", description: "Blade pitch = 30 – 35 mm" },
    { code: "Bt", description: "Blade tip = 6 mm" },
    { code: "Fd", description: "Frame depth = 45 mm" },
    { code: "Dd", description: "Damper depth = 30 mm" },
    { code: "Ft", description: "Filter thickness = 12.5 mm – 25 mm" },
  ];

  const tocLinks = [
    { label: "1. Introduction", href: "#sec-intro" },
    { label: "1.1. Key Features", href: "#sec-key-features" },
    { label: "1.2. Construction", href: "#sec-construction" },
    { label: "1.3. Standard Sizes", href: "#sec-standard-sizes" },
    { label: "1.4. Standard Models & Accessories", href: "#sec-standard-models" },
    { label: "2. External Louvres", href: "#sec-external-louvres-luxury" },
    { label: "2.1. Highlights", href: "#sec-highlights" },
    { label: "2.2. MODEL EL-Y", href: "#sec-model-el-y" },
    { label: "2.3. Construction Details", href: "#sec-construction-details-1" },
    { label: "3. MODELS EL-F", href: "#sec-models-el-f" },
    { label: "4. MODEL EL-FV", href: "#sec-model-el-fv" },
    { label: "5. MODEL EL-FV", href: "#sec-model-el-fv-extra" },
    { label: "5.1. Construction Details", href: "#sec-construction-details-2" },
    { label: "6. Ordering Data & Fixing Details", href: "#sec-ordering-fixing" },
    { label: "6.1. Ordering Data", href: "#sec-ordering-data" },
    { label: "6.2. Fixing Details", href: "#sec-fixing-details" },
    { label: "6.3. Finishing Details", href: "#sec-finishing-details" },
  ];

  return (
    <article className="bg-[#F8FAFC] min-h-screen pt-28 md:pt-36 pb-28 text-[#0A2540] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Breadcrumb Navigation */}
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
            External Louvers
          </h1>
          <a
            href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20External%20Louvers"
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

          {/* PRIMARY CONTENT (8 COLS) */}
          <main className="lg:col-span-8 space-y-12">

            {/* 1. INTRODUCTION */}
            <section id="sec-intro" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Introduction
                </h2>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Alugridx External Louvres are engineered to deliver reliable intake and exhaust air performance while providing effective weather protection for industrial and commercial applications. Designed with durable extruded aluminium construction and a clean architectural profile, they combine strength, functionality, and long service life in demanding environments.
              </p>

              {/* 1.1. Key Features */}
              <div id="sec-key-features" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Key Features
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Manufactured from <strong>high-quality extruded aluminium</strong> for strength, rigidity, and durability.</li>
                  <li><strong>•</strong> Designed for both <strong>intake and exhaust air applications</strong>.</li>
                  <li><strong>• 45° blade inclination</strong> on a <strong>30–35 mm pitch</strong> helps minimize water ingress and improves weather resistance.</li>
                  <li><strong>•</strong> Available with optional <strong>bird screen, insect screen, volume control damper</strong>, and <strong>filter arrangements</strong>.</li>
                  <li><strong>•</strong> Suitable for large openings, with maximum <strong>single section sizes up to 1200 mm</strong> in length and width.</li>
                  <li><strong>•</strong> Can be supplied in <strong>multiple sections with central partitions</strong> for larger size requirements.</li>
                  <li><strong>•</strong> Optional <strong>filter thicknesses of 12.5 mm and 25 mm</strong> available.</li>
                </ul>
              </div>

              {/* 1.2. Construction */}
              <div id="sec-construction" className="space-y-3 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Construction
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  The frame and blades are manufactured from premium extruded aluminium and finished in <strong>natural anodized finish</strong>. Blades are firmly riveted to the main frame using suitable “L” sections, ensuring a robust and rigid construction for long-term performance.
                </p>
              </div>

              {/* 1.3. Standard Sizes */}
              <div id="sec-standard-sizes" className="space-y-3 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Standard Sizes
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  Standard sizes are available in a wide range of dimensions, with both length and width options extending up to <strong>1200 mm</strong>. Custom sizes can also be offered in <strong>50 mm increments</strong> to suit specific project requirements.
                </p>
              </div>

              {/* 1.4. Standard Models & Accessories */}
              <div id="sec-standard-models" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Standard Models &amp; Accessories
                </h3>
                <p className="text-base font-semibold text-[#0A2540]">
                  Model: EL
                </p>
                <p className="text-sm font-bold text-slate-600">
                  Available Accessories / Options:
                </p>
                <ul className="space-y-2 text-base text-slate-700 leading-relaxed">
                  <li><strong>• B</strong> – Bird Screen</li>
                  <li><strong>• S</strong> – Insect Screen</li>
                  <li><strong>• V</strong> – Volume Control Damper</li>
                  <li><strong>• F</strong> – 12.5 mm / 25 mm Filter</li>
                  <li><strong>• FV</strong> – Combined Filter &amp; Volume Control Damper</li>
                  <li><strong>• T</strong> – Twin / Double Bank</li>
                </ul>
              </div>
            </section>

            {/* 2. EXTERNAL LOUVRES (LUXURY / BROCHURE SECTION) */}
            <section id="sec-external-louvres-luxury" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="space-y-2">
                <p className="text-xs text-slate-500 italic">
                  Here is a <strong>shorter luxury catalogue version</strong> if you want it more compact for a brochure page:
                </p>
                <div className="border-b pb-4 border-slate-200">
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                    External Louvres
                  </h2>
                </div>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                Designed for intake and exhaust air applications, Alugridx External Louvres provide effective weather protection, durable aluminium construction, and reliable long-term performance for industrial and commercial use. Their rigid design, 45° blade configuration, and optional accessories make them a versatile solution for ventilation systems requiring both protection and airflow efficiency.
              </p>

              {/* 2.1. Highlights */}
              <div id="sec-highlights" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Highlights
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>• Extruded aluminium construction with natural anodized finish</strong></li>
                  <li><strong>• 45° fixed blade design</strong> for weather resistance and reduced water ingress</li>
                  <li><strong>• Suitable for intake and exhaust air applications</strong></li>
                  <li><strong>• Optional bird screen, insect screen, damper, and filter options</strong></li>
                  <li><strong>• Available in standard and custom sizes up to 1200 mm</strong></li>
                </ul>
                <p className="text-xs text-slate-500 italic pt-2">
                  If you want, I can also format this into the exact <strong>Alugridx product catalogue style</strong> used for your other diffuser and grille descriptions.
                </p>
              </div>

              {/* In-content CTA */}
              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20a%20quotation%20for%20External%20Louvers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>

              {/* DIMENSIONAL DETAILS Overview Diagram */}
              <div className="space-y-4 pt-6 border-t border-slate-200">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/external-louvers/external-louvers-drawing-1.webp"
                    alt="External Louvers Dimensional Details Comprehensive CAD"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* 2.2. MODEL EL-Y */}
              <div id="sec-model-el-y" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL EL-Y
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  Exhaust or Intake Air Louver fitted with opposed blade volume control damper and a bird/insect screen.
                </p>
              </div>

              {/* 2.3. Construction Details */}
              <div id="sec-construction-details-1" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Construction Details
                </h3>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4 w-28">Code</th>
                        <th className="p-3.5 sm:p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {constructionDetails.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540]">{row.code}</td>
                          <td className="p-3.5 sm:p-4 font-sans">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MODEL EL-Y CAD Image */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center pt-6">
                <img
                  src="/images/products/external-louvers/ChatGPT-Image-Dec-5-2025-at-08_54_39-PM-1-683x1024.webp"
                  alt="MODEL EL-Y CAD Drawing with Damper and Screen"
                  className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                />
              </div>
            </section>

            {/* 3. MODELS EL-F */}
            <section id="sec-models-el-f" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  MODELS EL-F
                </h2>
              </div>

              <div className="space-y-2">
                <p className="text-slate-700 text-base leading-relaxed">
                  Exhaust or Intake Air Louver fitted with a removable type washable air filter.
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  The thickness of the filter is <strong>12.5 mm – 25 mm</strong>.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                <img
                  src="/images/products/external-louvers/4483FD11-DD25-491E-8211-CC724EACE98E-683x1024.webp"
                  alt="MODEL EL-F with Removable Washable Filter CAD"
                  className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                />
              </div>
            </section>

            {/* 4. MODEL EL-FV */}
            <section id="sec-model-el-fv" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL EL-FV
                </h2>
              </div>

              <div className="space-y-2">
                <p className="text-slate-700 text-base leading-relaxed">
                  Exhaust or Intake Air Louver complete with a removable type washable filter and opposed blade Volume Control Damper.
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  The Damper can easily be operated with a screw driver from the face of the louver after removal of the frame.
                </p>
              </div>
            </section>

            {/* 5. MODEL EL-FV (Additional Construction Details & Profile) */}
            <section id="sec-model-el-fv-extra" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  MODEL EL-FV
                </h2>
              </div>

              <div className="space-y-2">
                <p className="text-slate-700 text-base leading-relaxed">
                  Exhaust or Intake Air Louver complete with a removable type washable filter and opposed blade Volume Control Damper.
                </p>
                <p className="text-sm font-semibold text-slate-600">
                  The Damper can easily be operated with a screw driver from the face of the louver after removal of the frame.
                </p>
              </div>

              {/* 5.1. Construction Details */}
              <div id="sec-construction-details-2" className="space-y-4 pt-4 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Construction Details
                </h3>

                <div className="overflow-x-auto rounded-xl border border-slate-200 font-mono">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50 font-bold text-[#0A2540] font-sans">
                        <th className="p-3.5 sm:p-4 w-28">Code</th>
                        <th className="p-3.5 sm:p-4">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {constructionDetails.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="p-3.5 sm:p-4 font-bold text-[#0A2540]">{row.code}</td>
                          <td className="p-3.5 sm:p-4 font-sans">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MODEL EL-FV Profile CAD (6-1-683x1024.webp) */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center pt-6">
                <img
                  src="/images/products/external-louvers/6-1-683x1024.webp"
                  alt="MODEL EL-FV Architectural Profile CAD"
                  className="max-w-xs sm:max-w-sm w-full h-auto object-contain"
                />
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20need%20specifications%20for%20MODEL%20EL-FV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2.5 shadow-sm"
                >
                  <MessageCircle size={18} />
                  <span>Get Quote !</span>
                </a>
              </div>
            </section>

            {/* 6. ORDERING DATA & FIXING DETAILS */}
            <section id="sec-ordering-fixing" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8 scroll-mt-32">
              <div className="border-b pb-4 border-slate-200">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                  Ordering Data &amp; Fixing Details
                </h2>
              </div>

              {/* 6.1. Ordering Data */}
              <div id="sec-ordering-data" className="space-y-4 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Ordering Data
                </h3>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
                  <img
                    src="/images/products/external-louvers/Screenshot-2025-12-05-at-9.09.39-PM.webp"
                    alt="Ordering Procedure Configuration Flowchart"
                    className="max-w-2xl w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* 6.2. Fixing Details */}
              <div id="sec-fixing-details" className="space-y-3 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Fixing Details
                </h3>
                <p className="text-slate-700 text-base leading-relaxed">
                  <strong>Countersunk screw fixing type &apos;S&apos; is the standard</strong>
                </p>
                <p className="text-slate-600 text-sm">
                  Recommended for side wall or sill fixing.
                </p>
              </div>

              {/* 6.3. Finishing Details */}
              <div id="sec-finishing-details" className="space-y-4 pt-6 border-t border-slate-200 scroll-mt-32">
                <h3 className="text-2xl font-extrabold text-[#0A2540] tracking-tight">
                  Finishing Details
                </h3>
                <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                  <li><strong>•</strong> Powder-coated color finish</li>
                  <li><strong>•</strong> Natural anodized aluminum</li>
                  <li><strong>•</strong> Mill finish aluminum</li>
                  <li><strong>•</strong> Bronze anodized</li>
                </ul>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/?text=Hello%20AlugridX,%20I%20want%20to%20place%20an%20order%20for%20External%20Louvers"
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