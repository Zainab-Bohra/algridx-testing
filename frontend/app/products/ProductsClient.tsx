"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
// Centralized mapping lookup matrix import pointer
import { staticProductsList } from "../productsData";

export default function ProductDetailClient() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [activeTab, setActiveTab] = useState("specs");

  // 🚀 FIXED: In-memory dynamic single lookups using routing keys (Zero Network Latency)
  const product = staticProductsList.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-[#124170] font-sans gap-4">
        <div className="text-xs font-bold uppercase tracking-[0.2em]">Component Model Grid Not Found</div>
        <Link href="/products" className="text-xs text-[#3B82F6] underline uppercase font-bold tracking-wider">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 relative text-[#124170] font-sans overflow-hidden">
      {/* Fine-lined corporate spatial architecture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Crisp clean Back to Catalog Trigger */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-[#3B82F6] mb-10 group transition-colors">
          <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Return to Catalog</span>
        </Link>

        {/* Core Product Grid Canvas */}
        <div className="bg-white rounded-[3rem] p-8 lg:p-14 border border-slate-100 shadow-[0_30px_70px_rgba(10,37,64,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* LEFT SIDE: DYNAMIC HIGH-DEPTH IMAGE DISPLAY */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0px 30px 60px rgba(10, 37, 64, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full h-[420px] bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center p-6 relative overflow-hidden shadow-inner cursor-pointer"
              >
                <img 
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-[360px] object-contain mix-blend-multiply transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/500x400/ffffff/124170?text=${product.name.replace(/\s+/g, '+')}`;
                  }}
                />
              </motion.div>

              {/* Verified Badge Row */}
              <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex gap-3.5 items-center">
                <ShieldCheck className="text-[#3B82F6] shrink-0" size={20} />
                <p className="text-xs font-semibold text-slate-500 leading-relaxed uppercase tracking-wide">Factory approved material compliance matrix for GCC ministries.</p>
              </div>
            </div>

            {/* RIGHT SIDE: PREMIUM ARCHITECTURAL SPECS CONSOLE */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold text-[#3B82F6] bg-[#3B82F6]/5 border border-[#3B82F6]/10 px-3 py-1 rounded-lg uppercase tracking-wider">
                  {product.category} Specification
                </span>
                <h1 className="text-3xl md:text-5xl font-black uppercase text-[#124170] tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {product.code} Framework Model
                </p>
                
                <p className="text-slate-500 text-base font-normal leading-relaxed pt-3">
                  {product.desc}
                </p>
              </div>

              {/* ROUNDED CORPORATE TAB NAVIGATION */}
              <div className="flex gap-4 border-b border-slate-100 pt-2">
                <button 
                  type="button"
                  onClick={() => setActiveTab("specs")}
                  className={`pb-3 px-2 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${activeTab === "specs" ? "border-[#124170] text-[#124170]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                >
                  Structural Features
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveTab("dims")}
                  className={`pb-3 px-2 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${activeTab === "dims" ? "border-[#124170] text-[#124170]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                >
                  Dimension Mappings
                </button>
              </div>

              {/* DATA WORKSPACE LAYOUT PANELS */}
              <div className="min-h-[160px]">
                {activeTab === "specs" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-3">
                    {product.features.map((feat: string, i: number) => (
                      <div key={i} className="flex gap-3 items-center text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100/60 p-3 rounded-xl shadow-sm">
                        <CheckCircle2 size={15} className="text-[#3B82F6] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "dims" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.dimensions.map((d: string, i: number) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-left text-xs font-bold text-[#124170] shadow-sm flex flex-col justify-center">
                          <span className="block text-[10px] text-slate-400 uppercase font-semibold mb-0.5">Sizing Framework</span>
                          <span className="text-sm font-extrabold">{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-[#3B82F6]/5 border border-[#3B82F6]/10 text-xs font-bold uppercase text-[#124170] tracking-wide">
                      Performance Metrics / Pressure Balance: <span className="text-[#3B82F6] font-extrabold">{product.kFactors}</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* HIGH-END 3D CTA SUBMITTAL BANNER CONSOLE */}
              <div className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_15px_30px_rgba(10,37,64,0.15)] relative overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-1">
                    <h4 className="text-lg font-black uppercase tracking-tight">Request Blueprint Data Package</h4>
                    <p className="text-slate-300 text-xs font-normal max-w-sm leading-relaxed">Get rapid pricing estimations and factory AutoCAD submittals directly into your mailbox.</p>
                  </div>
                  
                  <Link href={`/contact-us?product=${slug}`} className="w-full sm:w-auto">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-center text-xs font-extrabold uppercase tracking-widest px-7 py-4 rounded-full transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Request Submittal
                    </motion.div>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}