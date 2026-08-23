"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Package, ArrowUpRight, Sparkles, SlidersHorizontal } from "lucide-react";
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
    <div className="bg-[#F8FAFC] min-h-screen pt-32 pb-24 px-4 sm:px-6 md:px-8 text-[#124170] font-sans relative overflow-hidden select-none">

      {/* Background Architectural Grid & Subtle Top Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(18,65,112,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(18,65,112,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[20rem] bg-gradient-to-b from-[#3B82F6]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-slate-200 text-[#0A2540] text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
            <Sparkles size={12} className="text-[#3B82F6]" />
            <span>Industrial Air Distribution Catalogue</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#0A2540] font-sans">
            Our <span className="text-[#3B82F6]">Products</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            High-precision architectural grilles, diffusers, and control dampers calibrated specifically for commercial and industrial GCC infrastructures.
          </p>
        </div>

        {/* CATEGORIES BAR */}
        <div className="w-full flex justify-center pt-2">
          <div className="flex flex-wrap items-center gap-2 bg-white p-2.5 rounded-2xl border-2 border-slate-200 shadow-[0_10px_30px_rgba(10,37,64,0.05)] justify-center">
            <div className="hidden sm:flex items-center gap-2 px-3 text-[#0A2540] text-xs font-mono font-bold uppercase tracking-wider border-r-2 border-slate-200 mr-1">
              <SlidersHorizontal size={14} className="text-[#3B82F6]" />
              <span>Filter:</span>
            </div>

            {categoriesList.map((cat, index) => {
              const isActive = (!categoryParam && cat.slug === null) || categoryParam === cat.slug;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => router.push(cat.slug ? `/products?category=${cat.slug}` : "/products")}
                  className={`px-5 py-2.5 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0A2540] text-white shadow-md font-black"
                      : "text-slate-700 hover:text-[#0A2540] hover:bg-slate-100/80"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT GRID SECTION */}
        <div className="w-full pt-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-24 bg-white rounded-[2rem] border-2 border-slate-200 shadow-sm space-y-4">
              <Package className="mx-auto text-slate-400" size={48} />
              <p className="text-sm font-sans font-bold uppercase tracking-widest text-[#0A2540]">
                No matching components registered
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.slug}
                  onClick={() => router.push(`/products/${prod.slug}`)}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="group relative w-full h-[410px] bg-white rounded-[2rem] p-5 flex flex-col justify-between cursor-pointer border-2 border-slate-200 hover:border-[#3B82F6] shadow-sm hover:shadow-2xl transition-all duration-200 overflow-hidden"
                >
                  {/* PRODUCT IMAGE CONTAINER */}
                  <div className="h-52 bg-slate-50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden border-2 border-slate-200 group-hover:border-[#3B82F6] transition-colors duration-200">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full max-h-44 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-108"
                    />
                  </div>

                  {/* TYPOGRAPHY & META DETAILS */}
                  <div className="space-y-2 pt-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-[10px] font-mono font-black uppercase tracking-wider text-[#0A2540] bg-slate-100 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-200 px-2.5 py-1 rounded-md border border-slate-200">
                        {prod.code}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-extrabold uppercase tracking-widest">
                        GCC Spec
                      </span>
                    </div>

                    <h3 className="font-black text-[#0A2540] group-hover:text-[#3B82F6] text-base uppercase tracking-tight leading-snug transition-colors duration-200 line-clamp-2 pt-1 font-sans">
                      {prod.name}
                    </h3>
                  </div>

                  {/* FOOTER ACTION LINK */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs font-sans uppercase tracking-wider font-bold relative z-10">
                    <span className="text-slate-600 group-hover:text-[#0A2540] transition-colors duration-200">
                      View Specifications
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0A2540] group-hover:bg-[#3B82F6] flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110">
                      <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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
    <Suspense fallback={<div className="text-center py-20 text-slate-500 font-mono">Loading Products Shell...</div>}>
      <ProductsContent />
    </Suspense>
  );
}