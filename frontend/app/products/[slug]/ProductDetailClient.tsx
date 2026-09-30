"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import { staticProductsList } from "@/app/products/productsData";

const defaultFeatures = [
  "Architectural extruded aluminum alloy 6063-T6 construction",
  "Calibrated low-acoustic and micro-pressure drop profile",
  "Electrostatic polyester powder coating (standard RAL 9010 / 9016)",
  "Compatible with standard plenum boxes and duct collar boots"
];

const defaultDimensions = [
  "Standard Factory Modular Sizes Available",
  "Custom Geometric Dimensions On-Demand",
  "Continuous Linear Length Runs Available",
  "Bespoke Flange Widths for Gypsum & T-Bar Integration"
];

export default function ProductDetailClient() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [activeTab, setActiveTab] = useState("specs");

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

  const featuresList = (product as any)?.features?.length 
    ? (product as any).features 
    : defaultFeatures;

  const dimensionsList = (product as any)?.dimensions?.length 
    ? (product as any).dimensions 
    : defaultDimensions;

  const kFactorsData = (product as any)?.kFactors || "Verified compliant with GCC Ministry & ASHRAE standards";

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 relative text-[#124170] font-sans overflow-hidden">
      
      {/* CLEAN AMBIENT LIGHTING BACKGROUND (NO CHECKS / NO BOXES) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#3B82F6] mb-10 group transition-colors">
          <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Return to Catalog</span>
        </Link>

        <div className="bg-white rounded-[3rem] p-8 lg:p-14 border-2 border-[#0A2540] shadow-[0_30px_70px_rgba(10,37,64,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Stage */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0px 30px 60px rgba(10, 37, 64, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full h-[420px] bg-slate-50 border-2 border-[#0A2540]/20 rounded-[2.5rem] flex items-center justify-center p-6 relative overflow-hidden shadow-sm cursor-pointer"
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

              <div className="bg-slate-50 border-2 border-[#0A2540]/20 p-5 rounded-2xl flex gap-3.5 items-center">
                <ShieldCheck className="text-[#3B82F6] shrink-0" size={20} />
                <p className="text-xs font-semibold text-slate-600 leading-relaxed uppercase tracking-wide">
                  Factory approved material compliance matrix for GCC ministries.
                </p>
              </div>
            </div>

            {/* Right Specs Console */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-extrabold text-[#3B82F6] bg-[#3B82F6]/10 border-2 border-[#3B82F6]/30 px-3 py-1 rounded-lg uppercase tracking-wider">
                  {product.category} Specification
                </span>
                <h1 className="text-3xl md:text-5xl font-black uppercase text-[#124170] tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {product.code} Framework Model
                </p>
                
                <p className="text-slate-600 text-base font-normal leading-relaxed pt-3">
                  {product.desc}
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex gap-4 border-b-2 border-[#0A2540]/15 pt-2">
                <button 
                  type="button"
                  onClick={() => setActiveTab("specs")}
                  className={`pb-3 px-2 text-xs font-extrabold uppercase tracking-wider transition-all border-b-4 cursor-pointer -mb-[2px] ${
                    activeTab === "specs" 
                      ? "border-[#124170] text-[#124170]" 
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Structural Features
                </button>
                <button 
                  type="button"
                  onClick={() => setActiveTab("dims")}
                  className={`pb-3 px-2 text-xs font-extrabold uppercase tracking-wider transition-all border-b-4 cursor-pointer -mb-[2px] ${
                    activeTab === "dims" 
                      ? "border-[#124170] text-[#124170]" 
                      : "border-transparent text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Dimension Mappings
                </button>
              </div>

              {/* Panels */}
              <div className="min-h-[160px]">
                {activeTab === "specs" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-3">
                    {featuresList.map((feat: string, i: number) => (
                      <div key={i} className="flex gap-3 items-center text-xs font-semibold text-slate-700 bg-slate-50 border-2 border-[#0A2540]/15 p-3 rounded-xl shadow-sm">
                        <CheckCircle2 size={15} className="text-[#3B82F6] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "dims" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {dimensionsList.map((d: string, i: number) => (
                        <div key={i} className="bg-slate-50 border-2 border-[#0A2540]/15 p-3.5 rounded-xl text-left text-xs font-bold text-[#124170] shadow-sm flex flex-col justify-center">
                          <span className="block text-[10px] text-slate-500 uppercase font-semibold mb-0.5">Sizing Framework</span>
                          <span className="text-sm font-extrabold">{d}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-[#3B82F6]/10 border-2 border-[#3B82F6]/30 text-xs font-bold uppercase text-[#124170] tracking-wide">
                      Performance Metrics / Pressure Balance: <span className="text-[#3B82F6] font-extrabold">{kFactorsData}</span>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* CTA Banner */}
              <div className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white p-6 md:p-8 rounded-[2.5rem] shadow-[0_15px_30px_rgba(10,37,64,0.15)] relative overflow-hidden border-2 border-[#0A2540]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
                  <div className="space-y-1">
                    <h4 className="text-lg font-black uppercase tracking-tight">Request Blueprint Data Package</h4>
                    <p className="text-slate-300 text-xs font-normal max-w-sm leading-relaxed">
                      Get rapid pricing estimations and factory AutoCAD submittals directly into your mailbox.
                    </p>
                  </div>
                  
                  <Link href={`/contact-us?product=${slug}`} className="w-full sm:w-auto">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2, boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-center text-xs font-extrabold uppercase tracking-widest px-7 py-4 rounded-full transition-colors whitespace-nowrap cursor-pointer border-2 border-transparent"
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