"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Package, ArrowRight } from "lucide-react";
import { staticProductsList } from "./productsData";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const categoriesList = [
    { name: "All Products", slug: null },
    { name: "Filters", slug: "filters" },
    { name: "Louvers", slug: "louvers" },
    { name: "Dampers", slug: "dampers" },
    { name: "Grilles & Registers", slug: "grilles-registers" },
  ];

  const filteredProducts = staticProductsList.filter((prod) => {
    if (!categoryParam) return true;
    return prod.category.toLowerCase() === categoryParam.toLowerCase();
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 px-6 md:px-8 text-[#124170] font-sans relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            System Components
          </h1>
          <p className="text-slate-500 text-base font-normal mt-2 max-w-2xl">
            High-quality architectural grilles and diffusers calibrated strictly for high-tier commercial and industrial GCC infrastructures.
          </p>
        </div>

        {/* Categories Navbar */}
        <div className="w-full flex justify-center pb-4">
          <div className="flex flex-wrap gap-3 bg-white p-2.5 rounded-2xl border border-[#124170]/5 shadow-[0_10px_30px_rgba(10,37,64,0.04)] justify-center">
            {categoriesList.map((cat, index) => {
              const isActive = (!categoryParam && cat.slug === null) || categoryParam === cat.slug;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => router.push(cat.slug ? `/products?category=${cat.slug}` : "/products")}
                  className={`px-6 py-2.5 rounded-xl text-xs font-sans font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#124170] text-white shadow-md shadow-[#124170]/20 scale-[1.03]"
                      : "text-slate-500 hover:bg-slate-50 hover:text-[#124170]"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid Render */}
        <div className="w-full">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[2.5rem] border border-[#124170]/5 shadow-[0_15px_40px_rgba(0,0,0,0.02)] space-y-4">
              <Package className="mx-auto text-slate-300" size={40} />
              <p className="text-sm font-sans font-bold uppercase tracking-wider text-slate-400">No matching components registered</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8 pt-4">
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.slug}
                  onClick={() => router.push(`/products/${prod.slug}`)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                  className="group relative w-full h-[430px] bg-white rounded-[2.5rem] p-6 flex flex-col justify-between cursor-pointer shadow-[0_15px_35px_rgba(10,37,64,0.04)] border border-slate-100 transition-colors duration-300 hover:bg-[#0A2540]"
                >
                  {/* 3D Matrix Background Deck Layer */}
                  <div className="absolute inset-0 -left-1 m-auto w-[calc(100%+8px)] h-[calc(100%+8px)] rounded-[2.5rem] bg-gradient-to-br from-[#3B82F6] to-[#0A2540] -z-10 pointer-events-none transform transition-transform duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.1)] group-hover:rotate-[-8deg]" />
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#3B82F6] to-[#0A2540] -z-20 pointer-events-none transform scale-[0.93] blur-[15px] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:blur-[25px]" />

                  {/* FIXED: Large-Depth High Visibility Image Frame */}
                  <div className="h-56 bg-slate-50 rounded-2xl p-2 flex items-center justify-center overflow-hidden border border-slate-100/60 relative z-20">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full max-h-48 object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* FIXED: Typography Title Headers with Dynamic Text Switch on Hover */}
                  <div className="space-y-2 pt-4 relative z-20">
                    <span className="inline-block text-[9px] font-sans font-extrabold uppercase tracking-wider text-[#3B82F6] bg-[#3B82F6]/5 group-hover:bg-white/10 group-hover:text-[#60A5FA] px-2.5 py-1 rounded-lg border border-[#3B82F6]/10 group-hover:border-white/10 shadow-sm transition-colors duration-300">
                      {prod.code} Specification
                    </span>
                    <h3 className="font-extrabold text-[#124170] group-hover:text-white text-lg uppercase tracking-tight leading-tight transition-colors duration-300 line-clamp-2 pt-1 font-sans">
                      {prod.name}
                    </h3>
                  </div>

                  {/* FIXED: Refined Action Footer Layout */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 group-hover:border-white/10 relative z-20 text-xs font-sans uppercase tracking-wider font-bold transition-colors duration-300">
                    <span className="text-slate-400 group-hover:text-slate-300/80 text-[10px] font-semibold transition-colors duration-300">Technical Profile</span>
                    <span className="text-[#124170] group-hover:text-[#60A5FA] flex items-center gap-1 transition-colors duration-300">
                      <span>View</span>
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading Components Shell...</div>}>
      <ProductsContent />
    </Suspense>
  );
}