"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck,
  ArrowRight,
  Wind
} from "lucide-react";
import { staticProductsList, StaticProduct } from "@/app/products/productsData";

const categoryFilters = [
  { label: "All Products", value: "all" },
  { label: "Grilles & Diffusers", value: "grilles-registers" },
  { label: "Architectural Louvers", value: "louvers" },
  { label: "Duct Dampers", value: "dampers" }
];

export default function ProductsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    return staticProductsList.filter((product: StaticProduct) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170] font-sans">
      
      {/* 🚀 CLEAN AMBIENT LIGHTING BACKGROUND (NO CHECKS / NO BOXES) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* 1. ARCHITECTURAL HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] font-extrabold uppercase tracking-wider mb-3">
              <Layers size={13} />
              <span>Engineered Air Distribution Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#124170]">
              Product <span className="font-light italic font-serif text-[#3B82F6] tracking-normal lowercase">Catalog</span>
            </h1>
            <p className="text-slate-500 text-xs md:text-sm font-normal mt-2 max-w-xl leading-relaxed">
              Precision-extruded aluminum 6063-T6 air terminals, architectural louvers, and certified airflow control dampers fabricated in Ajman, UAE.
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-3 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span>{filteredProducts.length} Profiles Available</span>
          </div>
        </div>

        {/* 2. SEARCH & CATEGORY FILTER CONTROL BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-200/70 shadow-xs w-full md:w-auto">
            {categoryFilters.map((tab) => {
              const isActive = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer flex-1 sm:flex-initial text-center ${
                    isActive
                      ? "bg-[#124170] text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-50 hover:text-[#124170]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              placeholder="Search model, code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200/70 rounded-2xl text-xs font-medium text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/10 transition-all shadow-xs"
            />
          </div>

        </div>

        {/* 3. PRODUCT CATALOG GRID */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center space-y-3">
            <Wind size={32} className="mx-auto text-slate-300" />
            <h3 className="text-base font-black uppercase text-[#124170]">No Matching Air Terminals</h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We could not find any model matching your search. Please adjust your keywords or reset filters.
            </p>
            <button
              type="button"
              onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
              className="text-xs font-bold uppercase text-[#3B82F6] underline tracking-wider pt-2 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7 items-stretch">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((cat: StaticProduct) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                  key={cat.slug}
                  className="group bg-white border-2 border-slate-200 hover:border-[#0A2540] rounded-[2.2rem] p-5 md:p-6 flex flex-col justify-between shadow-xs hover:shadow-xl relative overflow-hidden transition-all duration-200"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#3B82F6]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-slate-100 text-[#0A2540] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors text-[9px] font-black tracking-widest px-2.5 py-1 rounded-md uppercase">
                        {cat.badge || "FEATURED"}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {cat.code}
                      </span>
                    </div>

                    <div className="w-full h-48 bg-gradient-to-b from-slate-100/70 via-slate-50 to-white rounded-[1.6rem] flex items-center justify-center p-4 my-2 border border-slate-200/80 group-hover:border-[#3B82F6]/30 transition-colors relative overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/400x300/ffffff/124170?text=${cat.name.replace(/\s+/g, '+')}`;
                        }}
                      />
                    </div>

                    <div className="space-y-1.5 mt-4 text-left">
                      <h3 className="text-[#0A2540] font-black text-base md:text-lg uppercase tracking-tight group-hover:text-[#2563EB] transition-colors leading-snug line-clamp-1">
                        {cat.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed font-normal line-clamp-2">
                        {cat.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-5 border-t border-slate-100 group-hover:border-slate-200 transition-colors">
                    <Link href={`/products/${cat.slug}`} className="w-full block">
                      <button 
                        type="button"
                        className="w-full bg-[#0A2540] group-hover:bg-[#2563EB] text-white font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer shadow-xs active:scale-98"
                      >
                        <span>View Specifications</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* 4. DIRECT ESTIMATION & FACTORY SUBMITTAL BANNER */}
        <div className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="text-center lg:text-left space-y-2 max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-extrabold tracking-widest text-[#3B82F6] uppercase">
              <ShieldCheck size={13} />
              Direct Factory Support • Ajman
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Require Custom Profile Dimensions?
            </h3>
            <p className="text-slate-300 text-xs md:text-sm font-normal leading-relaxed">
              Send your project BOQ or architectural duct schedules for quick estimation, custom RAL color powder coating, and AutoCAD submittals.
            </p>
          </div>
          
          <div className="shrink-0 w-full lg:w-auto relative z-10">
            <Link 
              href="/contact-us" 
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-white text-white hover:text-[#124170] font-sans text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}