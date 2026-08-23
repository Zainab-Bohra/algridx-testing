"use client";

import { useState } from "react";
import { motion, Variants, animate } from "framer-motion";
import Link from "next/link";
import {
  HardHat,
  Zap,
  Layers,
  Activity,
  ChevronRight,
  ArrowUpRight,
  Heart,
} from "lucide-react";
import Hero from "@/components/site/Hero";
import SlidingMarquee from "@/components/site/SlidingMarquee";
import { staticProductsList } from "@/app/products/productsData";

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  return (
    <motion.span
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate: (latest) => setCount(Math.floor(latest)),
        });
        return () => controls.stop();
      }}
    >
      {count}
    </motion.span>
  );
}

// Product Card Component with Fixed Grid Alignment & Reversed Borders
function ProductCard({ cat }: { cat: any }) {
  const [isLiked, setIsLiked] = useState(false);
  const linkedProduct = staticProductsList.find((p) => p.slug === cat.slug);
  const finalImageSrc = linkedProduct ? linkedProduct.image : `/images/products/${cat.slug}.png`;

  const badgeText = cat.badge || "NEW";

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      className="group bg-white border-2 border-slate-200 hover:border-[#0A2540] rounded-[2.2rem] p-5 md:p-6 flex flex-col justify-between shadow-sm hover:shadow-2xl relative overflow-hidden transition-colors duration-200"
    >
      {/* Background Radial Glow on Hover */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#3B82F6]/20 via-[#3B82F6]/5 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div>
        {/* Top Header Bar: Badge & Bookmark Button */}
        <div className="flex items-center justify-between z-10 mb-3 relative">
          <span className="bg-slate-100 text-[#0A2540] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-150 text-[10px] font-black tracking-widest px-3 py-1 rounded-md uppercase">
            {badgeText}
          </span>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A2540] hover:text-red-500 transition-colors shadow-sm z-20"
          >
            <Heart
              size={15}
              className={isLiked ? "fill-red-500 text-red-500" : ""}
            />
          </button>
        </div>

        {/* Product Image Stage */}
        <div className="w-full h-48 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white group-hover:from-blue-50/60 group-hover:to-slate-50/60 rounded-[1.6rem] flex items-center justify-center p-4 my-2 border border-slate-200 group-hover:border-[#3B82F6]/40 transition-colors duration-150 relative overflow-hidden">
          <img
            src={finalImageSrc}
            alt={cat.name}
            className="max-h-full max-w-full object-contain drop-shadow-md mix-blend-multiply group-hover:scale-110 transition-transform duration-200 relative z-10"
          />
          <span className="absolute bottom-2.5 right-2.5 text-[9px] font-mono tracking-wider text-[#0A2540] bg-white/90 backdrop-blur-md border border-slate-200 px-2 py-0.5 rounded-md font-bold uppercase shadow-sm z-10">
            {cat.code}
          </span>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center items-center gap-1.5 my-3">
          <span className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#3B82F6] transition-colors duration-150" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
          <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
        </div>

        {/* Product Details */}
        <div className="space-y-1.5 text-left">
          <h3 className="text-[#0A2540] font-black text-lg md:text-xl uppercase tracking-tight group-hover:text-[#2563EB] transition-colors duration-150 leading-snug line-clamp-1">
            {cat.name}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed font-medium line-clamp-2">
            {cat.desc}
          </p>
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="pt-4 mt-5 border-t border-slate-200 group-hover:border-[#0A2540]/20 transition-colors">
        <Link
          href={linkedProduct ? `/products/${linkedProduct.slug}` : `/products`}
          className="w-full block"
        >
          <button className="w-full bg-[#0A2540] hover:bg-[#2563EB] text-white font-black text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-150 shadow-sm active:scale-95">
            <span>View Specs</span>
            <ArrowUpRight size={15} />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

const categories = [
  { slug: "ceiling-diffusers", name: "Ceiling Diffusers", code: "SAD / RAD", desc: "Engineered for optimal omnidirectional air distribution with whisper-quiet acoustics.", badge: "NEW" },
  { slug: "linear-slot-diffusers", name: "Linear Slot Diffusers", code: "LSD-Series", desc: "Architectural linear profiles delivering high-capacity fluid airflow design.", badge: "TRENDING" },
  { slug: "linear-bar-grilles", name: "Linear Bar Grilles", code: "LBG-Series", desc: "Heavy-duty extruded aluminum profiles ideal for premium floor and sidewall integrations.", badge: "BEST SELLER" },
  { slug: "gravity-louvers", name: "Gravity Louvers", code: "GL-Series", desc: "Pressure-operated exhaust louvers engineered for automatic air release loops.", badge: "POPULAR" },
  { slug: "volume-control-dampers", name: "Volume Control Dampers", code: "VCD-Series", desc: "Aerofoil opposing blades crafted for microscopic air volume and pressure balance.", badge: "NEW" },
  { slug: "non-return-dampers", name: "Non-Return Dampers", code: "NRD-Series", desc: "Velocity actuated backdraft dampers designed for automatic airflow isolation.", badge: "POPULAR" },
  { slug: "sand-trap-louvers", name: "Sand Trap Louvers", code: "STL-Series", desc: "High-capacity heavy architectural sand trap louvers engineered to separate desert sand.", badge: "HEAVY DUTY" },
  { slug: "external-louvers", name: "External Weather Louvers", code: "EWL-Series", desc: "Architectural external intake or exhaust louvers optimized for structural facades.", badge: "FEATURED" },
];

const features = [
  { title: "AlugridX 6063-T6 Extrusions", desc: "Premium grade alloy foundations crafted for high structural rigidity and corrosion prevention.", icon: Layers },
  { title: "Flow Calibrations", desc: "Components micro-machined to ensure total conformance with global ASHRAE airflow rules.", icon: Activity },
  { title: "GCC Logistics Node", desc: "Direct manufacturing dispatch loops providing bulk distribution across regional fields.", icon: Zap },
  { title: "Engineering Desk", desc: "Dedicated specialists executing blueprint checks from early stages down to site testing.", icon: HardHat },
];

const applications = [
  { title: "Commercial Architecture", scope: "Corporate Headquarters & Retail Podiums" },
  { title: "Residential Towers", scope: "High-Rise Enclaves & Luxury Spatial Living" },
  { title: "Hospitality Frameworks", scope: "Resorts & Premium Grade Entertainment Hubs" },
  { title: "Sterile Clinical Fields", scope: "Air Filtration Systems for Clean Medical Zones" },
  { title: "Industrial Complexes", scope: "Manufacturing Plants & Precision Infrastructure" },
  { title: "Infrastructure Hubs", scope: "Aviation Terminals & High-Traffic Rail Logistics" },
];

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#124170] selection:bg-[#124170] selection:text-white overflow-hidden relative font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      <Hero />

      {/* --- SECTION 2: OUR PRODUCTS / FEATURED COLLECTION --- */}
      <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionReveal}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-[10px] uppercase font-black tracking-widest text-[#3B82F6] block mb-2">
            ARCHITECTURAL AIR TERMINALS
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0A2540]">
            Featured Products
          </h2>
          <p className="text-slate-600 text-xs md:text-sm mt-3 font-medium">
            Explore our most popular air terminal models built for precision architectural environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {categories.map((cat, i) => (
            <ProductCard key={i} cat={cat} />
          ))}
        </div>
      </section>

      {/* --- SECTION 3: SYSTEM RIGIDITY & ACCURACY --- */}
      <section className="py-24 md:py-36 bg-[#F8FAFC] text-[#0A2540] relative z-10 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 md:mb-24">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#3B82F6] block mb-2">Performance Standards</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none text-[#0A2540]">
                Rigidity & Accuracy
              </h2>
            </div>
            <div className="lg:col-span-4 lg:border-l border-slate-300 lg:pl-6">
              <p className="text-sm text-slate-600 font-normal leading-relaxed">
                Every AlugridX matrix layout profile undergoes calibrated high-pressure load checking to guarantee absolute zero acoustic deflection across multi-tier regional developments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  transition={{ type: "tween", duration: 0.15 }}
                  className="bg-white border-2 border-slate-200 hover:border-[#0A2540] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex items-start gap-5 shadow-sm hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3B82F6] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Icon size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[#0A2540] font-black text-lg uppercase tracking-tight">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 md:pt-16 border-t border-slate-200">
            {[
              { value: <><Counter value={44} />+</>, label: "System Profiles" },
              { value: <><Counter value={40} />+</>, label: "Years Operations Network" },
              { value: "UAE", label: "Production Plants" },
              { value: "GCC", label: "Enterprise Dispatch Hubs" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-5xl font-black text-[#0A2540]">{stat.value}</p>
                <p className="text-[10px] md:text-[11px] uppercase tracking-wider text-[#3B82F6] mt-2 font-extrabold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HISTORICAL TIMELINE --- */}
      <section className="py-24 md:py-36 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">Corporate Roots</h2>
            <p className="text-xs text-slate-500 font-normal mt-4 leading-relaxed max-w-sm hidden lg:block">
              Tracing the technological execution lineage of AlugridX architectural frameworks across global delivery grids.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {[
              { year: "1986", title: "Strategic Foundation & GCC Network Setup", desc: "Inaugurated structural-scale architectural products supply loops across key GCC commercial zones, establishing an unshakeable ecosystem of trust and supply precision." },
              { year: "2025", title: "Technological Evolution & Automation Launch", desc: "Transitioned workflow execution into automated precision machinery lines, establishing tight thermodynamic parameters and zero-vibration air terminal setups." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileTap={{ scale: 0.99 }}
                className="group relative bg-white border-2 border-slate-200 hover:border-[#0A2540] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-200"
              >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start">
                  <span className="text-4xl md:text-5xl font-black text-[#124170]/20 group-hover:text-[#3B82F6] transition-colors duration-300 select-none">
                    {item.year}
                  </span>
                  <div className="space-y-1.5">
                    <h4 className="text-base md:text-xl font-extrabold text-[#124170] group-hover:text-[#2563EB] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: PREMIUM INTEGRATION NODES --- */}
      <section className="py-24 md:py-36 bg-white relative z-10 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-8 mb-12 md:mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170] mt-3">
                Integration Nodes
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.15 }}
                className="group bg-white border-2 border-slate-200 hover:border-[#0A2540] rounded-[2rem] p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-200 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-9 h-9 rounded-full bg-[#0A2540] text-white font-bold text-xs flex items-center justify-center font-mono">
                    0{i + 1}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                </div>

                <div className="mb-8">
                  <h3 className="text-[#0A2540] text-xl font-black uppercase tracking-tight mb-2">
                    {app.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed">
                    {app.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[#3B82F6] font-mono text-[10px] font-bold uppercase tracking-wider">
                    ACTIVE DATA MATRIX
                  </span>
                  <button className="flex items-center gap-1 text-[#0A2540] group-hover:text-[#3B82F6] font-mono text-[11px] font-bold uppercase transition-colors">
                    MATRIX SPEC <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: BRANDED CTA BANNER --- */}
      <section className="py-24 md:py-32 px-6 relative z-10 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto bg-white border-2 border-slate-200 hover:border-[#0A2540] rounded-[2.5rem] p-10 sm:p-16 text-center shadow-lg hover:shadow-xl transition-all duration-200 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#0A2540] max-w-3xl mx-auto leading-tight">
            REQUEST ALUGRIDX TECHNICAL BLUEPRINT DATA
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/request-catalogue" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#3B82F6] hover:bg-[#2563EB] text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-md active:scale-95">
                EXTRACT CORE CATALOGUE
              </button>
            </Link>
            <Link href="/contact-us" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0A2540] border-2 border-[#0A2540] font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-sm active:scale-95">
                CONNECT WITH DESK
              </button>
            </Link>
          </div>
        </div>
      </section>

      <SlidingMarquee />
    </div>
  );
}