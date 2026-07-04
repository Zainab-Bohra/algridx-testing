"use client";

import { useState, useEffect, useRef } from "react";
import { motion, Variants, animate, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HardHat, Zap, Layers, Activity, ChevronRight, ArrowDown } from "lucide-react";
import Hero from "@/components/site/Hero";
import SlidingMarquee from "@/components/site/SlidingMarquee";
// Centralized mapping lookup matrix import pointer
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

function Interactive3DCard({ cat }: { cat: any }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-240, 240], [15, -15]);
  const rotateY = useTransform(x, [-160, 160], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Find exact mapping from centralized static pipeline array
  const linkedProduct = staticProductsList.find((p) => p.slug === cat.slug);
  // Fallback default format layout if link structure is missing
  const finalImageSrc = linkedProduct ? linkedProduct.image : `/images/products/${cat.slug}.png`;

  return (
    <div className="w-full h-[400px] md:h-[420px] [perspective:1500px] group cursor-pointer" ref={cardRef}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        // 🚀 FIXED: Switched color track to exact beautiful Soft Ocean Steel Blue (#20547A) matching the screenshot context
        className="w-full h-full rounded-[32px] md:rounded-[40px] bg-[#20547A] relative transition-all duration-200 shadow-[6px_10px_0px_rgba(10,35,55,0.35),_0_15px_35px_rgba(10,37,64,0.05)] sm:group-hover:shadow-[10px_16px_0px_rgba(10,35,55,0.4),_0_45px_70px_rgba(32,84,122,0.25)] border border-white/10 overflow-hidden"
      >
        
        {/* Concentric Tunnel Wave Ripples Overlay directly matched from Screenshot 2026-07-04 171521_2.jpg */}
        <div className="absolute left-0 top-0 w-full h-full [transform-style:preserve-3d] z-0 pointer-events-none overflow-hidden">
          {/* Outermost Ring */}
          <span className="absolute block aspect-square rounded-full -top-[40px] -left-[20px] bg-white/[0.02] w-[420px] md:w-[460px] border border-white/5" />
          {/* Mid-Outer Ring */}
          <span className="absolute block aspect-square rounded-full -top-[20px] -left-[10px] bg-white/[0.03] w-[340px] md:w-[380px] border border-white/5" />
          {/* Center-Sized Core Waves */}
          <span className="absolute block aspect-square rounded-full top-[5px] left-[5px] bg-white/[0.04] w-[260px] md:w-[300px] [transform:translate3d(0,0,10px)]" />
          <span className="absolute block aspect-square rounded-full top-[10px] left-[10px] bg-white/[0.06] w-[200px] md:w-[240px] [transform:translate3d(0,0,25px)] transition-transform duration-500" />
          <span className="absolute block aspect-square rounded-full top-[14px] left-[14px] bg-white/[0.09] w-[160px] md:w-[190px] [transform:translate3d(0,0,45px)] sm:group-hover:[transform:translate3d(0,0,55px)] transition-transform duration-500" />
          <span className="absolute block aspect-square rounded-full top-[18px] left-[18px] bg-white/[0.14] w-[130px] md:w-[155px] [transform:translate3d(0,0,65px)] sm:group-hover:[transform:translate3d(0,0,75px)] transition-transform duration-500" />
          
          {/* White Circular Floating Pod for the Product Image */}
          <span className="absolute aspect-square rounded-full top-[24px] left-[24px] bg-white shadow-[0_15px_35px_rgba(10,37,64,0.18)] w-[110px] md:w-[135px] [transform:translate3d(0,0,90px)] sm:group-hover:[transform:translate3d(0,0,115px)] transition-all duration-500 grid place-content-center p-4 overflow-hidden border border-slate-100/90">
            <img
              src={finalImageSrc}
              alt={cat.name}
              className="max-h-full max-w-full object-contain scale-110 sm:group-hover:scale-125 transition-transform duration-500 mix-blend-multiply"
            />
          </span>
        </div>

        {/* Text Content Block */}
        <div className="pt-[180px] md:pt-[210px] px-6 md:px-7 pb-6 [transform:translate3d(0,0,40px)] relative z-10 flex flex-col justify-end h-full">
          <div className="mb-3">
            <span className="block text-white font-sans font-black text-base md:text-lg uppercase tracking-tight leading-tight transition-colors duration-300">
              {cat.name}
            </span>
            <span className="block text-[9px] tracking-widest text-white/90 bg-white/10 border border-white/10 px-2 py-0.5 rounded-md inline-block uppercase font-bold mt-1.5 font-sans">
              {cat.code} Framework
            </span>
            <p className="block text-[11px] text-slate-100/95 leading-relaxed font-normal mt-2.5 font-sans line-clamp-3">
              {cat.desc}
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div className="flex gap-1.5">
              {[1, 2, 3].map((dot) => (
                <div 
                  key={dot}
                  className="w-1.5 h-1.5 rounded-full bg-white/40 sm:group-hover:bg-white transition-colors"
                  style={{ transitionDelay: `${dot * 0.05}s` }}
                />
              ))}
            </div>

            <Link 
              href={linkedProduct ? `/products/${linkedProduct.slug}` : `/products`}
              className="flex items-center gap-0.5 text-white transition-colors duration-300 text-xs font-bold font-sans group/btn"
            >
              <span>More Details</span>
              <ChevronRight size={13} className="transition-transform sm:group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Slugs synchronized directly with central productsData matrix keys
const categories = [
  { slug: "ceiling-diffusers", name: "Ceiling Diffusers", code: "SAD / RAD Series", desc: "Engineered for optimal omnidirectional air distribution with whisper-quiet acoustics." },
  { slug: "linear-slot-diffusers", name: "Linear Slot Diffusers", code: "LSD-Series", desc: "Architectural linear profiles delivering high-capacity fluid airflow design." },
  { slug: "linear-bar-grilles", name: "Linear Bar Grilles", code: "LBG-Series", desc: "Heavy-duty extruded aluminum profiles ideal for premium floor and sidewall integrations." },
  { slug: "gravity-louvers", name: "Gravity Louvers", code: "GL-Series", desc: "Pressure-operated exhaust louvers engineered for automatic air release loops." },
  { slug: "volume-control-dampers", name: "Volume Control Dampers", code: "VCD-Series", desc: "Aerofoil opposing blades crafted for microscopic air volume and pressure balance." },
  { slug: "non-return-dampers", name: "Non-Return Dampers", code: "NRD-Series", desc: "Velocity actuated backdraft dampers designed for automatic airflow isolation." },
  { slug: "sand-trap-louvers", name: "Sand Trap Louvers", code: "STL-Series", desc: "High-capacity heavy architectural sand trap louvers engineered to separate desert sand." },
  { slug: "external-louvers", name: "External Weather Louvers", code: "EWL-Series", desc: "Architectural external intake or exhaust louvers optimized for structural facades." },
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

      {/* --- SECTION 2: HARDWARE INDEX --- */}
      <section className="py-24 md:py-36 px-6 max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={sectionReveal}
          className="border-b border-[#124170]/10 pb-8 mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
           
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170] mt-3">Our Products</h2>
          </div>
         
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <Interactive3DCard key={i} cat={cat} />
          ))}
        </div>
      </section>

      {/* --- SECTION 3: SYSTEM RIGIDITY & ACCURACY --- */}
      <section className="py-24 md:py-36 bg-[#0A2540] text-white relative z-10 rounded-t-[2.5rem] md:rounded-t-[4rem] shadow-[0_-20px_50px_rgba(10,37,64,0.15)]">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 md:mb-24">
            <div className="lg:col-span-8">
              <span className="text-[10px] uppercase font-black tracking-widest text-[#3B82F6] block mb-2">Performance Standards</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight leading-none text-white">
                Rigidity & Accuracy
              </h2>
            </div>
            <div className="lg:col-span-4 lg:border-l border-white/10 lg:pl-6">
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
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
                  whileHover={{ 
                    y: -6, 
                    borderColor: "#3B82F6", 
                    boxShadow: "0 25px 50px -15px rgba(59,130,246,0.25)" 
                  }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 150, damping: 20 }}
                  className="bg-white/5 border-2 border-white/5 p-6 md:p-10 flex gap-4 md:gap-6 items-start transition-all rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-xl"
                >
                  <div className="bg-[#124170] text-[#3B82F6] p-3 md:p-4 rounded-xl md:rounded-2xl shadow-inner shadow-black/30 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold tracking-tight mb-2 text-white">{feat.title}</h3>
                    <p className="text-xs md:text-sm text-slate-300 font-normal leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 md:pt-16 border-t border-white/10">
            {[
              { value: <><Counter value={44} />+</>, label: "System Profiles" },
              { value: <><Counter value={40} />+</>, label: "Years Operations Network" },
              { value: "UAE", label: "Production Plants" },
              { value: "GCC", label: "Enterprise Dispatch Hubs" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-5xl font-black text-white bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{stat.value}</p>
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
            <p className="text-xs text-slate-400 font-normal mt-4 leading-relaxed max-w-sm hidden lg:block">
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
                className="group relative bg-[#124170] border border-white/10 sm:bg-white sm:border-[#124170]/10 sm:hover:border-[#3B82F6]/50 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_12px_24px_rgba(10,37,64,0.15)] sm:hover:-translate-y-1.5 sm:hover:shadow-[0_25px_50px_rgba(59,130,246,0.1)] active:border-[#3B82F6] transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-transparent group-active:bg-[#3B82F6] rounded-l-[2rem] sm:hidden transition-colors" />
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 items-start">
                  <span className="text-4xl md:text-5xl font-black text-white/20 sm:text-[#124170]/15 group-hover:text-[#3B82F6] group-active:text-[#3B82F6] transition-colors duration-300 select-none">
                    {item.year}
                  </span>
                  <div className="space-y-1.5">
                    <h4 className="text-base md:text-xl font-extrabold text-white sm:text-[#124170] sm:group-hover:text-[#2563EB] group-active:text-[#2563EB] transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-300 sm:text-slate-600 font-normal leading-relaxed max-w-xl">
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
      <section className="py-24 md:py-36 bg-gradient-to-b from-[#F8FAFC] to-[#FFFFFF] relative z-10 rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-slate-200/80 shadow-[0_-15px_40px_rgba(10,37,64,0.02)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#124170]/10 pb-8 mb-12 md:mb-16 gap-4">
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
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  borderColor: "#3B82F6",
                  boxShadow: "0_25px_50px_-12px_rgba(59,130,246,0.25)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0A2540] border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] flex flex-col justify-between transition-all duration-300 relative overflow-hidden group h-56 md:h-60 active:border-[#3B82F6]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#3B82F6]/10 to-transparent rounded-bl-full pointer-events-none transition-colors" />

                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold text-white bg-white/10 border border-white/5 w-8 h-8 rounded-full flex items-center justify-center shadow-inner">
                    0{i + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                </div>

                <div className="space-y-1.5 mt-6 md:mt-8">
                  <h4 className="font-extrabold text-base md:text-xl tracking-tight uppercase text-white group-hover:text-[#3B82F6] transition-colors line-clamp-1">
                    {app.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed line-clamp-2">
                    {app.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
                  <span className="text-[9px] text-[#3B82F6] font-bold tracking-wider uppercase">Active Data Matrix</span>
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-black text-[#3B82F6] sm:text-slate-400 group-hover:text-[#3B82F6] transition-colors">
                    Matrix Spec <ChevronRight size={10} className="mt-0.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: BRANDED CTA BANNER --- */}
      <section className="py-24 md:py-32 text-center px-6 relative z-10 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Request AlugridX Technical Blueprint Data
          </h2>
         

          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4 sm:gap-5 max-w-md mx-auto sm:max-w-none">
            <Link href="/request-catalogue" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -4, boxShadow: "0px 15px 30px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-extrabold uppercase tracking-widest px-8 py-4.5 md:py-5 rounded-full shadow-md transition-colors cursor-pointer text-center"
              >
                Extract Core Catalogue
              </motion.div>
            </Link>
            <Link href="/contact-us" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(255,255,255,1)", color: "#0A2540" }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent border border-white/30 text-white text-xs font-extrabold uppercase tracking-widest px-8 py-4.5 md:py-5 rounded-full transition-all cursor-pointer text-center"
              >
                Connect with Desk
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
      
      <SlidingMarquee />
    </div>
  );
}