"use client";
import { motion, Variants } from "framer-motion";import Link from "next/link";
import { Shield, Target, Compass, Award, Building2, Zap, ArrowRight, Activity } from "lucide-react";

// --- Advanced Symmetrical Motion Variants ---
const fadeUpInteractive: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const valuePillars = [
  { icon: Shield, title: "Zero Defect Metric", subtitle: "Rigid Protocol", desc: "Every air distribution grille and louvre undergoes micro-tolerance inspections, completely mitigating site installation pressure drag errors." },
  { icon: Zap, title: "Autonomous Sourcing", subtitle: "UAE Ecosystem", desc: "By operating directly inside Ajman, we bypass long global supply chains, slashing standard GCC procurement windows by up to 40%." },
  { icon: Building2, title: "Architectural Symmetry", subtitle: "Bespoke Design", desc: "Our terminal networks are engineered not just as mechanical hardware, but as fluid, invisible integrations into premium spatial design." },
];

export default function AboutClient() {
  return (
    <div className="bg-white min-h-screen text-slate-900 selection:bg-cyan-500 selection:text-white overflow-hidden relative">
      
      {/* 1. KINETIC CINEMATIC HERO LAYER (Dark Event Theme) */}
      <section className="bg-gradient-to-b from-[#061224] via-[#0a192f] to-white pt-40 pb-32 px-6 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[50rem] h-[25rem] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 backdrop-blur-md text-cyan-400 font-black tracking-widest uppercase text-[10px] mb-8 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          >
            <Activity size={12} className="animate-pulse text-cyan-400" />
            Evolving The Architecture of Air Since 1986
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tight leading-none"
          >
            Engineering Without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-brand-blue to-blue-500">Compromise.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-slate-400 mt-10 max-w-3xl mx-auto text-base md:text-xl font-medium leading-relaxed"
          >
            ALUGRIDX manufactures high-precision thermodynamic terminal systems, balancing aesthetics with airflow velocity grids for premier regional infrastructures.
          </motion.p>
        </div>
      </section>

      {/* 2. THE CHRONICLE OF POWER (With Attractive Building Image Overlay) */}
      <section className="py-32 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Narrative */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpInteractive}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <span className="text-xs font-black tracking-widest text-brand-blue uppercase bg-slate-100 border border-slate-200 px-3 py-1 rounded-full inline-block">
              The Genesis Continuum
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight leading-tight">
              Four Decades of Deep <br />Domain Authority
            </h2>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              Our narrative took root in **1986** under the institutional mantle of **Hashim Darwish Commission LLC**. For 40 years, this powerhouse governed core building supplies and technical MEP distributions across the GCC footprint.
            </p>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              In **2025**, this immense industrial lineage was weaponized into an independent manufacturing ecosystem: **ALUGRIDX Air Conditioning Industry LLC**. Moving away from pure trade into heavy-duty automated engineering allows us to construct high-spec grids with ultimate speed parameters.
            </p>
          </motion.div>

          {/* Right Column: Creative Modern Building Showcase Layer */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[480px] w-full group"
          >
            {/* Background Aesthetic Blur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-cyan-400/20 rounded-3xl transform -rotate-2 blur-sm scale-98" />
            
            {/* Main Premium Building Image Container */}
            <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-slate-200 shadow-2xl relative bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1000&auto=format&fit=crop" 
                alt="Modern GCC Glass Infrastructure" 
                className="w-full h-full object-cover opacity-85 group-hover:scale-103 transition-transform duration-1000 ease-out"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/800x1000/0a192f/ffffff?text=ALUGRIDX+Infrastructure";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glassmorphic 40 Yrs Badge (Apple Layout Style) */}
            <motion.div 
              whileHover={{ scale: 1.03, y: -4 }}
              className="absolute -bottom-6 -left-6 md:left-8 bg-brand-navy/95 backdrop-blur-md text-white p-6 rounded-2xl border-2 border-white/10 shadow-2xl max-w-xs transition-all duration-300"
            >
              <Award className="text-cyan-400 mb-2" size={28} />
              <h3 className="text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-blue">40 Yrs</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Unbroken Trust Grid</p>
              <p className="text-[11px] text-slate-300 font-medium mt-2 leading-relaxed">
                From foundational supplies in 1986 to aerospace alloy scaling in 2026.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. CORE MANIFESTO: MISSION & VISION (Interactive Depth Cards) */}
      <section className="py-24 bg-slate-50/60 border-y border-slate-100 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white border-2 border-slate-200/80 p-8 md:p-12 rounded-3xl shadow-sm transition-all duration-300 hover:border-brand-blue/60 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full pointer-events-none group-hover:bg-brand-blue/10 transition-colors" />
            <div className="w-12 h-12 bg-brand-navy text-cyan-400 rounded-xl flex items-center justify-center mb-6 border border-white/10 shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
              <Target size={22} />
            </div>
            <h3 className="text-2xl font-black text-brand-navy tracking-tight mb-4">Strategic Mission</h3>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              To blueprint, test, and dispatch superior aerodynamic terminal grids that amplify environmental performance metrics while preserving structural airflow safety parameters across complex GCC developments.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white border-2 border-slate-200/80 p-8 md:p-12 rounded-3xl shadow-sm transition-all duration-300 hover:border-cyan-400/60 group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none group-hover:bg-cyan-500/10 transition-colors" />
            <div className="w-12 h-12 bg-brand-navy text-cyan-400 rounded-xl flex items-center justify-center mb-6 border border-white/10 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
              <Compass size={22} />
            </div>
            <h3 className="text-2xl font-black text-brand-navy tracking-tight mb-4">Future Vision</h3>
            <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
              To consolidate the Middle Eastern HVAC ecosystem by establishing ALUGRIDX as the absolute premium manufacturing standard, continuously redefining criteria for material longevity and client execution.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. THE PILLARS OF PERFORMANCE (Sleek 3-Column Lattice) */}
      <section className="py-32 max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
            Discipline Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight mt-4">
            The Sovereignty Pillars
          </h2>
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {valuePillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div 
                variants={fadeUpInteractive}
                key={i} 
                className="group border-2 border-slate-200/70 rounded-2xl p-6 md:p-8 hover:bg-slate-50/40 hover:border-brand-blue/40 transition-all duration-300 relative flex flex-col justify-between min-h-[280px]"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-100 text-brand-navy rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-lg font-black text-brand-navy tracking-tight transition-colors group-hover:text-brand-blue">{item.title}</h4>
                  <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider mt-0.5">{item.subtitle}</p>
                  <p className="text-slate-500 font-medium text-xs md:text-sm mt-4 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 5. ENGAGING CONVERSION HUB (Stripe-Like Lower Deck) */}
      <section className="px-6 max-w-7xl mx-auto mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-navy via-[#07162b] to-[#020914] text-white rounded-3xl p-8 md:p-16 border-2 border-white/10 shadow-2xl relative overflow-hidden text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45rem] h-[45rem] bg-brand-blue/10 rounded-full blur-[130px] pointer-events-none" />
          
          <h3 className="text-2xl md:text-5xl font-black tracking-tight leading-tight relative z-10">
            Deploy High-Fidelity Grids <br /> For Your Project Framework
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-xs md:text-sm font-light relative z-10 leading-relaxed">
            Connect directly with our engineering department in Ajman for instant dimensional parameters, AutoCAD submittal sheets, and rapid manufacturing schedules.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 relative z-10">
            <Link href="/products" className="bg-gradient-to-r from-brand-blue to-cyan-500 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] hover:scale-102 transition-all duration-300">
              Explore Core Components
            </Link>
            <Link href="/contact-us" className="inline-flex items-center gap-2 border-2 border-white/20 bg-white/5 backdrop-blur-md text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
              <span>Request Factory Submittal</span> <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}