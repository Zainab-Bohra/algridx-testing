"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, Phone, ArrowRight, ShieldCheck, FileText, Sparkles } from "lucide-react";

export default function CatalogueClient() {
  const [formData, setFormData] = useState({ email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-cyan-500 selection:text-white">
      
      {/* BACKGROUND MESH */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HERO HEADER */}
        <div className="max-w-3xl mb-20 text-left">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-100 text-brand-blue font-black tracking-widest uppercase text-[10px] mb-4 border border-slate-200"
          >
            <Sparkles size={12} className="text-brand-blue animate-spin-slow" />
            ALUGRIDX 2026 Master Release
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black text-brand-navy tracking-tight leading-none"
          >
            Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-500 to-blue-600">Catalogue</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: CATALOGUE PREVIEW WITH LOGO */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* 📚 UPDATED BOOK MOCKUP WITH LOGO */}
            <div className="relative w-full h-52 bg-slate-50 border-2 border-slate-200/60 rounded-3xl p-8 flex items-center justify-between overflow-hidden group hover:border-brand-blue/40 transition-all duration-500 shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
              <div className="max-w-xs relative z-10">
                <span className="text-[10px] font-black tracking-widest text-brand-blue uppercase bg-white border border-slate-200 px-2.5 py-1 rounded shadow-sm">Official Submittal</span>
                <h4 className="text-2xl font-black text-brand-navy mt-3 italic">ALUGRIDX 2026</h4>
                <p className="text-xs text-slate-400 font-medium mt-1 leading-relaxed">Unified Engineering Reference Matrix & AutoCAD Blocks</p>
              </div>
              
              {/* Floating Pages with Logo Overlay */}
              <div className="relative w-40 h-full flex items-center justify-center shrink-0">
                <div className="absolute w-28 h-36 bg-slate-200 rounded-lg transform rotate-6 translate-x-4 shadow-md border border-slate-300/50" />
                <div className="absolute w-28 h-36 bg-slate-100 rounded-lg transform -rotate-3 translate-x-2 shadow-lg border border-slate-200" />
                
                {/* Main Dark Cover */}
                <div className="absolute w-28 h-36 bg-gradient-to-br from-brand-navy to-[#051122] rounded-lg shadow-2xl border border-white/10 flex flex-col justify-between p-4 transform group-hover:-translate-y-2 group-hover:-rotate-6 transition-all duration-700 ease-out">
                  
                  {/* 🖼️ FIXED NEXT.JS COMPLIANT LOGO PATH */}
                  <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded bg-white/5 p-1">
                    <img 
                      src="/images/alugridx-without-bg-1.webp" 
                      alt="ALUGRIDX"
                      className="w-full h-full object-contain filter brightness-110"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<span class="text-cyan-400 font-black text-[10px]">AX</span>';
                      }}
                    />
                  </div>

                  <div className="text-[10px] font-black text-white leading-none tracking-tight">
                    SPEC SHEET<br/>
                    <span className="text-cyan-400 text-[8px] font-light tracking-widest uppercase">2026 MATRIX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DIRECTORY LIST SUMMARY */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-brand-navy uppercase tracking-widest flex items-center gap-2">
                <FileText size={16} className="text-brand-blue" />
                What's in the catalogue
              </h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">
                Complete technical specifications, dimensional drawings, k-factors, throw and noise data — across all 15+ product series.
              </p>
            </div>

            {/* SPECIFICATIONS TOKENS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Ceiling Diffusers — SAD, RAD series",
                "Linear Slot Diffusers — SLSD, RLSD series",
                "Supply & Return Air Grilles",
                "Linear Bar Grilles — SLBR series",
                "Louvers — Exhaust & Sand Trap",
                "Dampers — VCD, NRD series",
                "Technical specifications & installation guides",
                "Custom sizing & project consultation"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex gap-3 items-center text-xs font-bold text-slate-600 bg-slate-50/60 border-2 border-slate-200/50 p-3.5 rounded-2xl hover:bg-white hover:border-brand-blue/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shrink-0">
                    <CheckCircle2 size={13} className="text-cyan-500 group-hover:text-white" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: SECURE FORM */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form-block" initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-gradient-to-b from-[#0a192f] via-[#051122] to-[#01060d] text-white p-8 md:p-12 rounded-3xl border-2 border-white/10 shadow-[0_20px_50px_rgba(10,25,47,0.3)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none rounded-bl-full" />
                  
                  <div className="mb-8">
                    <span className="text-[9px] font-black tracking-widest text-cyan-400 uppercase bg-white/5 border border-white/10 px-2.5 py-1 rounded shadow-sm inline-block">Catalogue 2026</span>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white mt-3">Get the catalogue</h3>
                    <p className="text-slate-400 text-xs font-light mt-1.5">Just your email and phone — we'll send it across within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Email Address *</label>
                      <div className="relative">
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/[0.02] border-2 border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all font-bold text-white tracking-wide placeholder-slate-600" placeholder="corporate@company.com" />
                        <Mail size={14} className="absolute left-4 top-4 text-slate-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-300 uppercase tracking-widest mb-2">Phone Number *</label>
                      <div className="relative">
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white/[0.02] border-2 border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-xs focus:outline-none focus:border-cyan-400 focus:bg-white/[0.05] transition-all font-bold text-white tracking-wide placeholder-slate-600" placeholder="+971 50 000 0000" />
                        <Phone size={14} className="absolute left-4 top-4 text-slate-500" />
                      </div>
                    </div>
                    <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" className="w-full bg-gradient-to-r from-brand-blue via-cyan-500 to-blue-600 text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-8 border border-white/10">
                      <span>Submit Request</span> <ArrowRight size={14} />
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success-block" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-slate-50 border-2 border-slate-200 p-8 md:p-12 rounded-3xl text-center shadow-sm flex flex-col items-center justify-center min-h-[400px]"
                >
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-6 border border-emerald-100 shadow-sm animate-pulse">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy tracking-tight">Request Logged Safely</h3>
                  <p className="text-slate-500 font-medium text-xs md:text-sm mt-3 max-w-sm leading-relaxed">
                    Thank you. The complete **ALUGRIDX 2026 Master Technical Grid** is scheduled for delivery to <span className="text-brand-blue font-extrabold">{formData.email}</span> within 24 hours.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}