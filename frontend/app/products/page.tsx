"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Package, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { staticProductsList } from "./productsData";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category");

  const categoriesList = [
    { name: "All Products", slug: null },
    { name: "Louvers", slug: "louvers" },
    { name: "Dampers", slug: "dampers" },
    { name: "Grilles & Registers", slug: "grilles-registers" },
  ];

  const filteredProducts = staticProductsList.filter((prod) => {
    if (!categoryParam) return true;
    return prod.category.toLowerCase() === categoryParam.toLowerCase();
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-28 sm:pt-32 pb-24 sm:pb-28 px-4 sm:px-6 md:px-8 text-[#0A2540] font-sans relative overflow-hidden select-none">

      {/* 🚀 CLEAN AMBIENT LIGHTING BACKGROUND (NO CHECKS / NO BOXES) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">

        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0A2540]">
            Our <span className="text-[#3B82F6]">Products</span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto">
            High-precision architectural grilles, diffusers, and control dampers calibrated specifically for commercial and industrial GCC infrastructures.
          </p>
        </div>

        {/* CATEGORIES FILTER BAR */}
        <div className="w-full flex justify-center pt-2">
          <div className="flex flex-wrap items-center gap-2 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200 shadow-sm justify-center max-w-full">
            <div className="hidden sm:flex items-center gap-2 px-3 text-[#0A2540] text-xs font-bold uppercase tracking-wider border-r border-slate-200 mr-1">
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
                  className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#0A2540] text-white shadow-md font-bold"
                      : "text-slate-700 hover:text-[#0A2540] hover:bg-slate-100"
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
            <div className="text-center py-20 sm:py-24 bg-white rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <Package className="mx-auto text-slate-400" size={48} />
              <p className="text-base font-bold uppercase tracking-widest text-[#0A2540]">
                No matching components registered
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.slug}
                  onClick={() => {
                    const rawSlug = (prod.slug || "").toLowerCase().trim();
                    const cleanSlug = rawSlug.replace(/\s+/g, "-");

                    if (cleanSlug.includes("egg") || cleanSlug.includes("eg-crate")) {
                      router.push("/egg-crate-grilles-registers-diffusers/");
                    } else if (cleanSlug === "ceiling-diffusers") {
                      router.push("/ceiling-diffusers/");
                    } else if (
                      cleanSlug === "supply-return-air-registers-grilles" ||
                      cleanSlug === "supply-return-air-registers-grilles-and-fresh-air-grilles"
                    ) {
                      router.push("/supply-return-air-registers-grilles-and-fresh-air-grilles/");
                    } else if (cleanSlug.includes("linear-bar")) {
                      router.push("/linear-bar-grilles/");
                    } else if (cleanSlug.includes("linear-slot")) {
                      router.push("/linear-slot-diffusers/");
                    } else if (cleanSlug.includes("flowbar")) {
                      router.push("/flowbar-slot-diffusers/");
                    } else if (cleanSlug.includes("round-ceiling")) {
                      router.push("/round-ceiling-diffusers/");
                    } else if (cleanSlug.includes("sand-trap")) {
                      router.push("/sand-trap-louvers/");
                    } else if (cleanSlug.includes("volume-control")) {
                      router.push("/volume-control-dampers/");
                    } else if (
                      cleanSlug.includes("non-return") ||
                      cleanSlug.includes("gravity") ||
                      cleanSlug.includes("backdraft")
                    ) {
                      router.push("/non-return-dampers/");
                    } else if (cleanSlug.includes("disc-valve")) {
                      router.push("/disc-valves/");
                    } else if (cleanSlug.includes("jet-diffuser")) {
                      router.push("/jet-diffusers/");
                    } else if (cleanSlug.includes("door-transfer")) {
                      router.push("/door-transfer-grilles/");
                    } else if (
                      cleanSlug.includes("external-louver") ||
                      cleanSlug.includes("external-weather-louver")
                    ) {
                      router.push("/external-louvers/");
                    } else {
                      router.push(`/products/${cleanSlug}`);
                    }
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="group relative w-full h-[400px] sm:h-[420px] bg-white rounded-3xl p-5 flex flex-col justify-between cursor-pointer border border-slate-200 hover:border-[#3B82F6] shadow-xs hover:shadow-xl transition-all duration-200 overflow-hidden"
                >
                  {/* PRODUCT IMAGE CONTAINER */}
                  <div className="h-48 sm:h-52 bg-slate-50 rounded-2xl p-4 flex items-center justify-center relative overflow-hidden border border-slate-200 group-hover:border-[#3B82F6] transition-colors duration-200">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full max-h-40 sm:max-h-44 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* TYPOGRAPHY & DETAILS */}
                  <div className="space-y-2 pt-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] bg-slate-100 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-200 px-2.5 py-1 rounded-md border border-slate-200">
                        {prod.code}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-widest">
                        GCC Spec
                      </span>
                    </div>

                    <h3 className="font-extrabold text-[#0A2540] group-hover:text-[#3B82F6] text-sm sm:text-base uppercase tracking-tight leading-snug transition-colors duration-200 line-clamp-2 pt-1">
                      {prod.name}
                    </h3>
                  </div>

                  {/* FOOTER ACTION LINK */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs sm:text-sm uppercase tracking-wider font-bold relative z-10">
                    <span className="text-slate-600 group-hover:text-[#0A2540] transition-colors duration-200">
                      View Specifications
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#0A2540] group-hover:bg-[#3B82F6] flex items-center justify-center text-white transition-all duration-200 group-hover:scale-110 shrink-0">
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