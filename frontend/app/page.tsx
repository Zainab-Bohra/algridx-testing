"use client";
import { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Globe, Users, ChevronRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import SlidingMarquee from "@/components/site/SlidingMarquee";

// --- Animation Variants for Staggered Scroll Reveals ---
const sectionReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

// --- Animated Counter Sub-Component ---
function Counter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  return (
    <motion.span
      onViewportEnter={() => {
        const controls = animate(0, value, {
          duration: duration,
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

// --- Data Structures ---
const categories = [
  { name: "Ceiling Diffusers", code: "SAD / RAD Series", desc: "Engineered for optimal omnidirectional air distribution with whisper-quiet acoustics." },
  { name: "Linear Slot Diffusers", code: "SLSD / RLSD Series", desc: "Architectural linear profiles delivering high-capacity fluid airflow design." },
  { name: "Supply Air Grilles", code: "SAG Series", desc: "Precision double-deflection blades optimized for mechanical directional throw control." },
  { name: "Return Air Grilles", code: "RAG Series", desc: "High-free-area grilles built for high volume exhaust with zero pressure drag." },
  { name: "Linear Bar Grilles", code: "SLBR Series", desc: "Heavy-duty extruded aluminum profiles ideal for premium floor and sidewall integrations." },
  { name: "Louvers", code: "Exhaust & Sand Trap", desc: "High-efficiency weather protection keeping intake systems free of desert sand and rain." },
  { name: "Volume Control Dampers", code: "VCD Series", desc: "Aerofoil opposing blades crafted for microscopic air volume and pressure balance." },
  { name: "Non Return Dampers", code: "NRD Series", desc: "Pressure-operated backdraft shutters engineered for automated single-direction flow." },
];

const features = [
  { title: "Premium Grade Aluminium", desc: "Architectural 6063-T6 alloy bases built for maximum rigidity, anti-corrosion survival, and aesthetic lifespan.", icon: ShieldCheck },
  { title: "Tight Tolerance Manufacturing", desc: "Micro-machined structural tolerances conforming strictly to international ASHRAE standards.", icon: Cpu },
  { title: "UAE & GCC Supply Focus", desc: "Direct enterprise supply channels providing seamless project dispatching across the GCC industrial landscape.", icon: Globe },
  { title: "Custom Project Consultation", desc: "Dedicated specialized engineers backing your design from draft configurations to on-site testing phases.", icon: Users },
];

const applications = [
  { title: "Commercial Buildings", count: "120+ Projects" },
  { title: "Residential Complexes", count: "85+ Towers" },
  { title: "Hospitality & Resorts", count: "40+ Premium Sites" },
  { title: "Healthcare Facilities", count: "65+ Sterile Zones" },
  { title: "Industrial Plants", count: "50+ Systems" },
  { title: "Infrastructure Hubs", count: "30+ Nodes" },
  { title: "Aviation Terminals", count: "15+ Airports" },
  { title: "Mega Retail Spaces", count: "70+ Mall Outlets" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-cyan-500 selection:text-white overflow-hidden relative">
      
      {/* Structural Architectural Grid Overlay Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />

      {/* Hero & Marquee Components */}
      <Hero />
      <SlidingMarquee />

      {/* CORE OFFERS SECTION */}
      <section className="py-36 px-6 max-w-7xl mx-auto relative z-10">
        <div className="absolute top-[20%] left-[-10%] w-[40rem] h-[40rem] bg-cyan-400/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[35rem] h-[35rem] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }}
          variants={sectionReveal}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-navy text-cyan-400 font-extrabold tracking-widest uppercase text-xs mb-6 shadow-[0_4px_15px_rgba(10,25,47,0.2)] border border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Production Blueprint
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-brand-navy tracking-tight leading-tight">
            Advanced Air <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-500 to-blue-700">Management Systems</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-2xl mx-auto text-lg font-medium">Precision-machined structural terminal devices serving specialized high-tier HVAC frameworks.</p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {categories.map((cat, i) => (
            <motion.div variants={sectionReveal} key={i} className="group h-[380px] [perspective:1200px] cursor-pointer">
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] origin-center group-hover:[transform:rotateY(180deg)] rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
                
                {/* CARD FRONT */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white border border-slate-100/80 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group-hover:border-brand-blue/30 transition-all duration-300">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue/0 via-brand-blue/30 to-cyan-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  
                  <div className="h-44 w-full bg-gradient-to-b from-slate-50 to-slate-100/50 rounded-xl flex items-center justify-center p-4 overflow-hidden border border-slate-100/50 relative">
                    <img 
                      src={`/images/products/${cat.name.toLowerCase().replace(/\s+/g, '-')}.avif`}
                      alt={cat.name}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.05)] group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x300/f1f5f9/0a192f?text=ALUGRIDX";
                      }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-extrabold text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors">{cat.name}</h3>
                    <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1.5">{cat.code}</p>
                  </div>
                </div>

                {/* CARD BACK */}
                <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-brand-navy via-[#0b1d36] to-[#040e1a] rounded-2xl p-8 flex flex-col justify-between text-left text-white border border-white/5 overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.3)]">
                  <div className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
                  
                  <div>
                    <h3 className="text-2xl font-black tracking-tight border-b border-white/10 pb-3 text-cyan-400">{cat.name}</h3>
                    <p className="text-sm text-slate-300/90 leading-relaxed font-light mt-4">
                      {cat.desc}
                    </p>
                  </div>
                  
                  <Link 
                    href={`/products/?category=${cat.name.replace(/\s+/g, '-').toLowerCase()}`} 
                    className="group/btn w-full flex items-center justify-between bg-gradient-to-r from-brand-blue to-cyan-600 text-white px-5 py-3.5 rounded-xl font-bold text-sm shadow-[0_4px_20px_rgba(0,150,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300"
                  >
                    <span>Configure Specifications</span>
                    <ChevronRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. WHY ALUGRIDX SECTION */}
      <section className="py-36 bg-gradient-to-b from-brand-navy to-[#050c17] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-brand-blue/30 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }}
            variants={sectionReveal}
            className="text-left max-w-3xl mb-24"
          >
            <span className="text-cyan-400 font-black tracking-widest uppercase text-xs block mb-4">Enterprise Benchmarks</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">Engineering Architecture without Compromise</h2>
          </motion.div>

          {/* Cards Grid */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div 
                  variants={sectionReveal} 
                  key={i} 
                  className="group bg-gradient-to-br from-[#0e223d] to-[#081526] border border-white/10 rounded-2xl p-8 hover:from-[#122b4d] hover:to-[#0a1b30] hover:border-cyan-400/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(0,255,255,0.1)] transition-all duration-500 relative overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]"
                >
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />
                  
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-cyan-500/40 rounded-xl flex items-center justify-center mb-8 border border-white/10 shadow-lg group-hover:rotate-6 group-hover:scale-105 transition-all duration-500">
                    <Icon className="text-white" size={26} />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{feat.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">{feat.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* LIVE INTERACTIVE STATS PANEL */}
          <div className="mt-28 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-white/10 text-center lg:text-left">
            <div>
              <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-blue"><Counter value={44} />+</p>
              <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mt-2">Product Configurations</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-blue"><Counter value={40} />+</p>
              <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mt-2">Years Legacy Network</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-blue">UAE</p>
              <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mt-2">In-House Manufacturing</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-blue">GCC</p>
              <p className="text-sm font-bold text-slate-400 tracking-wider uppercase mt-2">Supply Grid Integrity</p>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-36 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }}
            variants={sectionReveal}
            className="lg:col-span-7"
          >
            <span className="text-brand-blue font-black tracking-widest uppercase text-xs block mb-4">Historical Foundation</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 tracking-tight leading-tight">Nearly Four Decades <br /> of Regional Domain Power</h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12">
              Born from the corporate foundations of Hashim Darwish Commission LLC (Est. 1986), ALUGRIDX infuses industrial HVAC distribution platforms with technical intelligence and absolute localized manufacturing supremacy.
            </p>
            
            {/* Minimalist Tech Timeline */}
            <div className="relative pl-10 space-y-12 before:absolute before:inset-y-2 before:left-[15px] before:w-[3px] before:bg-gradient-to-b before:from-brand-blue before:via-cyan-500 to-slate-200">
              <div className="relative group">
                <div className="absolute -left-[44px] top-1.5 w-6 h-6 bg-white border-4 border-brand-navy rounded-full transition-transform group-hover:scale-125 duration-300" />
                <span className="font-black text-brand-navy text-3xl tracking-tighter">1986</span>
                <p className="text-lg font-extrabold text-brand-blue mt-1">Hashim Darwish Commission LLC Founded</p>
                <p className="text-sm text-slate-500 mt-2 font-light">Established a landmark trade network for premium building frameworks across commercial sectors.</p>
              </div>
              <div className="relative group">
                <div className="absolute -left-[44px] top-1.5 w-6 h-6 bg-cyan-400 border-4 border-brand-navy rounded-full transition-transform group-hover:scale-125 duration-300 shadow-[0_0_15px_rgba(0,255,255,0.6)]" />
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-brand-blue text-3xl tracking-tighter">2025</span>
                <p className="text-lg font-extrabold text-brand-navy mt-1">ALUGRIDX Air Conditioning Industry LLC Launched</p>
                <p className="text-sm text-slate-500 mt-2 font-light">Evolving systems into automated tooling lines for tight-tolerance aerodynamic engineering designs.</p>
              </div>
            </div>
          </motion.div>

          {/* Mission/Vision Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-brand-blue/5 rounded-3xl transform rotate-2 scale-102 -z-10 blur-sm"></div>
            <div className="bg-gradient-to-br from-white to-slate-50/50 rounded-3xl p-10 lg:p-12 border border-slate-100 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="mb-12">
                <h3 className="text-2xl font-black text-brand-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-[3px] bg-cyan-500 block rounded"></span> Mission
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">To invent and manufacture innovative, high-precision thermodynamic air terminal networks that optimize indoor climates and structural energy profiles responsibly.</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-brand-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-[3px] bg-brand-blue block rounded"></span> Vision
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">To govern the GCC air distribution paradigm as the most trusted manufacturing destination, defining supreme benchmarks in quality matrixes and environmental reliability.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* APPLICATIONS ZONE */}
      <section className="py-36 bg-slate-50 border-y border-slate-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} variants={sectionReveal}
            className="text-center mb-24"
          >
            <span className="text-brand-blue font-black tracking-widest uppercase text-xs block mb-4">Structural Adaptability</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight">Architectural Specialization Zones</h2>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {applications.map((app, i) => (
              <motion.div 
                variants={sectionReveal} 
                key={i} 
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
                <div className="relative z-10 flex flex-col justify-between h-24">
                  <p className="font-extrabold text-xl text-brand-navy group-hover:text-white transition-colors duration-300">{app.title}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md group-hover:bg-white/10 group-hover:text-cyan-300 transition-all">{app.count}</span>
                    <ArrowRight size={18} className="text-slate-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-cyan-400 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PREMIUM TECHNICAL CATALOGUE PANEL */}
      <section className="py-28 bg-gradient-to-br from-brand-navy via-[#071324] to-[#01060d] text-white text-center px-6 relative overflow-hidden z-10">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight leading-tight">Access Engineering <br />Dimensional Data Matrixes</h2>
          <p className="text-slate-400 md:text-xl mb-12 font-light max-w-3xl mx-auto leading-relaxed">Download architectural product metrics including noise quotients, throw variables, k-factors, and custom size mapping tools.</p>
          <Link href="/request-catalogue/" className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-blue to-cyan-500 text-white px-10 py-5 font-black text-base rounded-xl shadow-[0_10px_30px_rgba(0,120,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] hover:scale-103 transition-all duration-300">
            Download Core Technical Catalogue <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* 🚀 5. LIGHT-THEMED PREMIUM CTA TRANSITION BANNER */}
      {/* पुराने डार्क कॉन्टैक्ट ग्रिड को हटाकर इसे यहाँ जोड़ दिया गया है ताकि ग्लोबल डार्क फ़ुटर के साथ परफेक्ट विज़ुअल ब्रेक बने */}
      <section className="bg-slate-50 border-t border-slate-200/60 py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a03_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-white text-brand-blue font-black tracking-widest uppercase text-[9px] border border-slate-200 shadow-sm">
            Next-Gen Air Management
          </span>
          
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight max-w-2xl mx-auto leading-tight">
            Ready to Integrate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-600">ALUGRIDX Systems?</span>
          </h2>
          
          <p className="text-slate-500 font-medium text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
            Connect directly with our engineering department to extract precise dimensional parameters, AutoCAD blueprint detail blocks, and quick factory RFQ dispatch grids.
          </p>

          <div className="pt-6 flex flex-wrap justify-center gap-4">
            <Link 
              href="/products/" 
              className="bg-brand-navy text-white font-black text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-md hover:bg-brand-blue transition-all duration-300"
            >
              Explore Components
            </Link>
            <Link 
              href="/contact-us/" 
              className="bg-white text-brand-navy border-2 border-slate-200 hover:border-brand-blue font-black text-xs uppercase tracking-widest px-7 py-4 rounded-xl transition-all shadow-sm"
            >
              Contact Engineering
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}