"use client";
import { useState, useEffect } from "react";import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldCheck } from "lucide-react";

// --- Complete Detailed Dataset ---
const productsExtendedData: Record<string, {
  name: string;
  code: string;
  category: string;
  desc: string;
  features: string[];
  dimensions: string[];
  kFactors: string;
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
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  // 🛡️ SAFETY GUARD: If slug is not resolved yet, show a clean loader instead of crashing
  if (!slug) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-slate-400 font-bold text-sm tracking-widest uppercase">
        Loading Component Parameters...
      </div>
    );
  }
  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");

      if (!res.ok) return;

      const data = await res.json();

      const found = data.find(
        (item) => item.slug === slug
      );

      if (found) {
        setProductData(found);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (slug) {
    fetchProduct();
  }
}, [slug]);

  // Fallback if data for specific slug isn't drafted yet
  const product = productsExtendedData[slug] || {
    name: slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    code: "Custom Series", category: "HVAC Component",
    desc: "High-tier architectural aluminum terminal configuration optimized for tight-tolerance performance grids inside GCC corporate developments.",
    features: ["Heavy duty 6063-T6 aluminum alloy foundation", "Anti-corrosion powder coat factory finish", "Custom sizing built straight from site drawings"],
    dimensions: ["Custom Bespoke Sizes engineered on demand"],
    kFactors: "Calibrated on site technical submittals"
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-cyan-500 selection:text-white">
      
      {/* CAD BLUEPRINT BACKGROUND MESH */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00bcd403_1px,transparent_1px),linear-gradient(to_bottom,#00bcd403_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* BACK BUTTON */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 hover:text-brand-blue transition-colors mb-12 group">
          <ArrowLeft size={14} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Return to Catalog Directory</span>
        </Link>

        {/* MAIN SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: IMAGE PREVIEW */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }}
              className="w-full h-[360px] bg-gradient-to-b from-slate-50 to-slate-100/60 border-2 border-slate-200/80 rounded-3xl flex items-center justify-center p-8 relative overflow-hidden shadow-sm group"
            >
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-slate-300" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-slate-300" />
              
              <img 
                src={`/images/products/${slug}.avif`}
                alt={product.name}
                className="max-w-full max-h-full object-contain filter drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/500x400/f1f5f9/0a192f?text=" + product.name.replace(/\s+/g, '+');
                }}
              />
            </motion.div>

            <div className="bg-slate-50 border-2 border-slate-200/50 p-5 rounded-2xl flex gap-3 items-center">
              <ShieldCheck className="text-emerald-500 shrink-0" size={20} />
              <p className="text-xs font-medium text-slate-600 leading-relaxed">This assembly carries factory approved material compliance certification for GCC ministries.</p>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT & TABS */}
          <div className="lg:col-span-7">
            <div>
              <span className="text-[10px] font-black text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md uppercase tracking-widest border border-cyan-100">{product.category}</span>
              <h1 className="text-3xl md:text-5xl font-black text-brand-navy tracking-tight mt-3">{product.name}</h1>
              <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{product.code} Configuration Node</p>
              
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed mt-6">
                {product.desc}
              </p>
            </div>

            {/* TAB BUTTONS */}
            <div className="flex gap-2 border-b border-slate-200 mt-10 pb-px">
              <button 
                onClick={() => setActiveTab("specs")}
                className={`pb-3 px-2 text-xs font-black uppercase tracking-wider transition-all border-b-2 ${activeTab === "specs" ? "border-brand-blue text-brand-blue" : "border-transparent text-slate-400 hover:text-slate-600"}`}
              >
                Structural Features
              </button>
              <button 
                onClick={() => setActiveTab("dims")}
                className={`pb-3 px-2 text-xs font-black uppercase tracking-wider transition-all border-b-2 ${activeTab === "dims" ? "border-brand-blue text-brand-blue" : "border-transparent text-slate-400 hover:text-slate-600"}`}
              >
                Dimension Mappings
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className="py-8 min-h-[220px]">
              {activeTab === "specs" && (
                <motion.ul initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm text-slate-600 font-medium">
                      <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </motion.ul>
              )}

              {activeTab === "dims" && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="grid grid-cols-2 gap-3">
                    {product.dimensions.map((dim, i) => (
                      <div key={i} className="bg-slate-50 border-2 border-slate-200/50 p-3 rounded-xl text-center text-xs font-bold text-brand-navy">
                        {dim}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-cyan-50/40 border border-cyan-100 text-xs font-medium text-cyan-800">
                    <strong>Pressure Calibration Matrix:</strong> {product.kFactors}
                  </div>
                </motion.div>
              )}
            </div>

            {/* REQUEST BANNER */}
            <div className="bg-gradient-to-b from-[#0a192f] to-[#030a14] text-white p-6 md:p-8 rounded-2xl border-2 border-white/10 shadow-lg mt-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-bl-full pointer-events-none" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="text-lg font-black tracking-tight">Request Submittal for {product.name}</h4>
                  <p className="text-slate-400 text-xs font-light mt-1">Get immediate pricing scales and architectural AutoCAD DWG files directly into your mailbox.</p>
                </div>
                <Link href={`/contact-us?product=${slug}`} className="w-full sm:w-auto text-center bg-gradient-to-r from-brand-blue to-cyan-500 text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all whitespace-nowrap shrink-0">
                  Request Technical Submittal
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}