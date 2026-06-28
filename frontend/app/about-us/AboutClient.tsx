"use client";
import { useRef } from "react";
import { motion, Variants, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { Shield, Target, Compass, Award, Building2, Zap, ArrowRight, Activity, Cpu, Sliders } from "lucide-react";

const fadeUpInteractive: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const valuePillars = [
  { icon: Shield, title: "Zero Defect Metric", subtitle: "Rigid Protocol", desc: "Every air distribution grille and louvre undergoes micro-tolerance inspections, completely mitigating site installation pressure drag errors." },
  { icon: Zap, title: "Autonomous Sourcing", subtitle: "UAE Ecosystem", desc: "By operating directly inside Ajman, we bypass long global supply chains, slashing standard GCC procurement windows by up to 40%." },
  { icon: Building2, title: "Architectural Symmetry", subtitle: "Bespoke Design", desc: "Our terminal networks are engineered not just as mechanical hardware, but as fluid, invisible integrations into premium spatial design." },
];

export default function AboutClient() {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-220, 220], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

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

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#124170] selection:bg-[#124170] selection:text-white overflow-hidden relative font-sans">
      
      {/* Structural blueprint layout grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      {/* 1. DYNAMIC BRAND HERO HEADER SECTION */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto relative z-10 border-b border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COMMAND NODE: Core Title Framework */}
          <div className="lg:col-span-7 space-y-6">
            {/* BRAND LOGO MOUNTED ON HERO HIGHLIGHT TAB */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 py-2.5 px-6 rounded-full bg-white text-[#124170] border border-slate-100 shadow-[0_10px_25px_rgba(10,37,64,0.04)]"
            >
              <div className="w-6 h-6 flex items-center justify-center rounded bg-slate-50 p-0.5 shrink-0 border border-slate-100">
                <img 
                  src="/images/alugridx-without-bg-1.webp" 
                  alt="ALUGRIDX Brand Icon" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider">
                <span className="font-black text-[#124170] tracking-widest">ALUGRIDX</span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-400">Evolving Air Systems Since 1986</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight uppercase leading-[0.95] text-[#124170] pt-2"
            >
              Engineering <br />
              Without <br />
              <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent font-light tracking-wide normal-case italic">compromise</span>.
            </motion.h1>
          </div>

          {/* RIGHT COMMAND NODE: Data Specification Parameters */}
          <div className="lg:col-span-5 space-y-6 lg:pt-14">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-slate-500 text-base font-normal leading-relaxed tracking-wide border-l-2 border-[#3B82F6] pl-5"
            >
              ALUGRIDX manufactures high-precision thermodynamic terminal systems, balancing absolute geometric aesthetics with micro-calibrated airflow velocity grids for premier regional infrastructures.
            </motion.p>

            {/* Micro Validation Console System */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-[0_15px_35px_rgba(10,37,64,0.03)] grid grid-cols-2 gap-4 text-xs font-bold"
            >
              <div className="flex items-center gap-2">
                <div className="bg-[#3B82F6]/5 p-2 rounded-xl text-[#3B82F6]">
                  <Cpu size={15} />
                </div>
                <span className="text-[#124170] text-sm font-extrabold">Premium Products</span>
              </div>
              <div className="flex items-center gap-2 border-l border-slate-100 null pl-4">
                <div className="bg-[#3B82F6]/5 p-2 rounded-xl text-[#3B82F6]">
                  <Sliders size={15} />
                </div>
                <span className="text-[#124170] text-sm font-extrabold">Reliable Service</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. CHRONICLE FRAMEWORK AREA */}
      <section className="py-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Narrative Text Column (Left Side) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpInteractive}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#124170] uppercase tracking-tight leading-tight">
              Four Decades of Deep Domain Authority
            </h2>
            <p className="text-slate-500 font-normal text-base leading-relaxed">
              Our narrative took root in <b>1986</b> under the institutional mantle of <b>Hashim Darwish Commission LLC</b>. For 40 years, this powerhouse governed core building supplies and technical MEP distributions across the GCC footprint.
            </p>
            <p className="text-slate-500 font-normal text-base leading-relaxed">
              In <b>2025</b>, this immense industrial lineage evolved into an independent manufacturing ecosystem: <b>ALUGRIDX Air Conditioning Industry LLC</b>. Moving away from pure trade into automated mechanics allows us to construct high-spec grids with ultimate speed parameters.
            </p>
          </motion.div>

          {/* Right Area Workspace Side: SINGLE FULL BRAND LOGO CARD (Fixed Syntax) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end [perspective:1500px]" ref={cardRef}>
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md h-[440px] bg-white border border-[#124170]/10 rounded-[3rem] p-4 shadow-[0_20px_50px_rgba(10,37,64,0.06)] hover:shadow-[0_40px_90px_rgba(59,130,246,0.22)] border-b-4 border-b-[#3B82F6]/30 transition-all duration-200 cursor-pointer"
            >
              {/* Core Canvas Frame featuring Full Uncropped AlugridX Identity Mark */}
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#0A2540] p-6 flex items-center justify-center relative [transform:translate3d(0,0,20px)] shadow-inner">
                <img 
                  src="/images/alugridx-logo.png" 
                  alt="ALUGRIDX Full Corporate Brand Mark" 
                  className="max-w-full max-h-full object-contain transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              </div>

              {/* Minimal floating trust parameters capsule label */}
              <div className="absolute -bottom-5 right-8 bg-[#0A2540] text-white border border-white/10 px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 [transform:translate3d(0,0,45px)]">
                <Award size={14} className="text-[#3B82F6]" />
                <span className="text-xs font-black uppercase tracking-wider">40 Yrs Trust Registry</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. CORE STRATEGIC MANIFESTO BOARDS */}
      <section className="py-24 bg-white relative z-10 rounded-t-[4rem] border-t border-slate-100 shadow-[0_-15px_40px_rgba(0,0,0,0.01)]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card Component */}
          <motion.div 
            whileHover={{ y: -6, borderColor: "#3B82F6", boxShadow: "0_20px_45px_rgba(59,130,246,0.1)" }}
            className="bg-slate-50 border-2 border-transparent p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#124170] text-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
              <Target size={20} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#124170] mb-3">Strategic Mission</h3>
            <p className="text-slate-500 font-normal text-sm md:text-base leading-relaxed">
              To blueprint, test, and dispatch superior aerodynamic terminal grids that amplify environmental performance metrics while preserving structural airflow safety parameters across complex GCC developments.
            </p>
          </motion.div>

          {/* Vision Card Component */}
          <motion.div 
            whileHover={{ y: -6, borderColor: "#3B82F6", boxShadow: "0_20px_45px_rgba(59,130,246,0.1)" }}
            className="bg-slate-50 border-2 border-transparent p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-[#124170] text-[#3B82F6] rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
              <Compass size={20} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#124170] mb-3">Future Vision</h3>
            <p className="text-slate-500 font-normal text-sm md:text-base leading-relaxed">
              To consolidate the Middle Eastern HVAC ecosystem by establishing ALUGRIDX as the absolute premium manufacturing standard, continuously redefining criteria for material longevity and client execution.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 4. THE SOVEREIGNTY PILLARS CONSOLE */}
      <section className="py-28 max-w-7xl mx-auto px-6 relative z-10">
        <div className="border-b border-slate-100 pb-6 mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
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
                whileHover={{ y: -5, borderColor: "#3B82F6", boxShadow: "0 25px 50px rgba(10,37,64,0.04)" }}
                key={i} 
                className="bg-white border-2 border-slate-100 rounded-[2rem] p-6 md:p-8 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-[#3B82F6] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    <Icon size={18} />
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-tight text-[#124170]">{item.title}</h4>
                  <p className="text-[10px] font-sans font-extrabold text-[#3B82F6] uppercase tracking-wider mt-1">{item.subtitle}</p>
                  <p className="text-slate-500 font-normal text-xs md:text-sm mt-4 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* 5. BRANDED CTA CONVERSION BANNER */}
      <section className="px-6 max-w-7xl mx-auto mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-[0_20px_50px_rgba(10,37,64,0.15)] relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />

         

          <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight leading-tight max-w-3xl mx-auto relative z-10">
            Deploy High-Fidelity Grids For Your Project Framework
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto mt-4 text-xs md:text-sm font-normal relative z-10 leading-relaxed">
            Connect directly with our engineering department in Ajman for instant dimensional parameters, AutoCAD submittal sheets, and rapid manufacturing schedules.
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-5 relative z-10">
            <Link href="/products">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-full shadow-md cursor-pointer"
              >
                Explore Core Components
              </motion.div>
            </Link>
            <Link href="/contact-us">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(255,255,255,1)", color: "#124170" }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 border border-white/30 bg-transparent text-white text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-full transition-all cursor-pointer"
              >
                <span>Request Factory Submittal</span> <ArrowRight size={12} />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}