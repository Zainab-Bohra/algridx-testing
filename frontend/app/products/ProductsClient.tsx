"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

interface Product {
  _id: string;
  slug: string;
  name: string;
  category?: string;
  images?: string[];
  series?: string;
  code?: string;
  isAvailable?: boolean;
}

const productsExtendedData: Record<string, {
  name: string; code: string; category: string; desc: string;
  features: string[]; dimensions: string[]; kFactors: string;
}> = {
  "ceiling-diffusers": {
    name: "Ceiling Diffusers", code: "SAD / RAD Series", category: "Diffusers",
    desc: "Engineered for supreme omnidirectional air induction grids. These systems maintain uniform temperature mix parameters across deep corporate layouts while throwing whisper-quiet acoustics.",
    features: ["Removable core configuration for fast plenum access", "Conforms rigidly to ASHRAE 70 testing protocols", "Pure Extruded Aluminium 6063-T6 structure"],
    dimensions: ["150 x 150 mm", "225 x 225 mm", "300 x 300 mm", "450 x 450 mm"],
    kFactors: "0.014 to 0.082 m/s pressure drag rating"
  },
  "linear-slot-diffusers": {
    name: "Linear Slot Diffusers", code: "LSD-Series", category: "Diffusers",
    desc: "Architectural linear profiles delivering continuous geometric integration in premium plaster ceilings. Ideal for high-capacity supply and extraction workflows.",
    features: ["1 to 8 slot matrix options available", "Fully adjustable black deflection blades for 180° air pattern controls", "Mitred corners seamlessly welded for flawless lines"],
    dimensions: ["Slot Width: 20mm / 25mm", "Custom Lengths up to 3 Meters single piece"],
    kFactors: "Micro-calibrated jet throw limits"
  },
  "volume-control-dampers": {
    name: "Volume Control Dampers", code: "VCD-Series", category: "Dampers",
    desc: "Heavy-duty opposing blade dampers designed for high-precision volumetric control and pressure balancing across main duct nodes.",
    features: ["Aerofoil shaped aluminum blades minimizing system pressure drops", "Interlocking gear networks for automated smooth manual controls", "Neoprene gasket edges preventing leakage matrices"],
    dimensions: ["100 x 100 mm to 1200 x 1200 mm", "Custom multi-section banks for mega plant rooms"],
    kFactors: "Class 1A low-leakage performance matrix verified"
  }
};

export default function ProductDetailClient() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const [activeTab, setActiveTab] = useState("specs");
  const [dbProduct, setDbProduct] = useState<any>(null);

  useEffect(() => {
    const fetchLiveProduct = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setDbProduct(data);
        }
      } catch (err) {
        console.error("Live fetch error inside client:", err);
      }
    };
    if (slug) fetchLiveProduct();
  }, [slug]);

  if (!slug) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center text-[#124170] font-sans text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
        Loading Component Data
      </div>
    );
  }

  const staticProduct = productsExtendedData[slug] || {
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    code: "Custom Series", category: "HVAC Component",
    desc: "High-tier architectural aluminum terminal configuration optimized for tight-tolerance performance grids inside GCC corporate developments.",
    features: ["Heavy duty 6063-T6 aluminum alloy foundation", "Anti-corrosion powder coat factory finish", "Custom sizing built straight from site drawings"],
    dimensions: ["Custom Bespoke Sizes engineered on demand"],
    kFactors: "Calibrated on site technical submittals"
  };

  // Optimization Fix: Path shifted from /images/products/ to super fast /uploads/
  let dynamicImageSrc = `/uploads/${slug}.avif`; 

  if (dbProduct && dbProduct.images && dbProduct.images.length > 0) {
    const firstImg = dbProduct.images[0];
    dynamicImageSrc = firstImg.startsWith("http") 
      ? firstImg 
      : `${process.env.NEXT_PUBLIC_API_URL}${firstImg}`;
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
            
            {/* LEFT SIDE: DYNAMIC 3D HIGH-DEPTH IMAGE DISPLAY */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0px 30px 60px rgba(10, 37, 64, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-full h-[420px] bg-slate-50 border border-slate-100 rounded-[2.5rem] flex items-center justify-center p-10 relative overflow-hidden shadow-inner cursor-pointer"
              >
                <img 
                  src={dynamicImageSrc}
                  alt={staticProduct.name}
                  className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/500x400/ffffff/124170?text=${staticProduct.name.replace(/\s+/g, '+')}`;
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
                  {dbProduct?.category || staticProduct.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-black uppercase text-[#124170] tracking-tight leading-tight">
                  {dbProduct?.name || staticProduct.name}
                </h1>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  {dbProduct?.code || staticProduct.code} Framework Model
                </p>
                
                <p className="text-slate-500 text-base font-normal leading-relaxed pt-3">
                  {dbProduct?.shortDescription || staticProduct.desc}
                </p>
              </div>

              {/* ROUNDED CORPORATE TAB NAVIGATION */}
              <div className="flex gap-4 border-b border-slate-100 pt-2">
                <button 
                  onClick={() => setActiveTab("specs")}
                  className={`pb-3 px-2 text-xs font-extrabold uppercase tracking-wider transition-all border-b-2 cursor-pointer ${activeTab === "specs" ? "border-[#124170] text-[#124170]" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                >
                  Structural Features
                </button>
                <button 
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
                    {(dbProduct?.keyFeatures || staticProduct.features).map((feat: string, i: number) => (
                      <div key={i} className="flex gap-3 items-center text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-100/60 p-3 rounded-xl shadow-sm">
                        <CheckCircle2 size={15} className="text-[#3B82F6] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "dims" && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {(dbProduct?.specifications || staticProduct.dimensions.map((d: any) => ({ key: "Size", value: d }))).map((spec: any, i: number) => (
                        <div key={i} className="bg-slate-50 border border-slate-100 p-3.5 rounded-xl text-center text-xs font-bold text-[#124170] shadow-sm">
                          <span className="block text-[10px] text-slate-400 uppercase font-semibold mb-0.5">{spec.key || "Specs"}</span>
                          <span className="text-sm font-extrabold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 rounded-xl bg-[#3B82F6]/5 border border-[#3B82F6]/10 text-xs font-bold uppercase text-[#124170] tracking-wide">
                      Pressure Calibrations: <span className="text-[#3B82F6] font-extrabold">{staticProduct.kFactors}</span>
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