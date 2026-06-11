"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import {
  Package,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

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
function ProductsContent() {
const [products, setProducts] = useState<Product[]>([]); 
 const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
`${process.env.NEXT_PUBLIC_API_URL}/api/products`        );

       if (res.ok) {
  const data = await res.json();

  console.log("API DATA:", data);
  console.log("COUNT:", data.length);

  setProducts(data);
}
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

const handleCategoryChange = (slug: string | null) => {   
   if (slug) {
      router.push(`/products?category=${slug}`);
    } else {
      router.push("/products");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1128] flex items-center justify-center text-cyan-400 font-bold">
        Loading Products...
      </div>
    );
  }
console.log("Products State:", products);
  const filteredProducts = products.filter((prod) => {
    if (prod.isAvailable === false) return false;

    if (!categoryParam) return true;

    const productCategorySlug = prod.category
      ?.toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    return (
      productCategorySlug === categoryParam ||
      productCategorySlug?.includes(categoryParam)
    );
  });
  console.log("Filtered Products:", filteredProducts);

  return (
    <div className="bg-[#0a1128] min-h-screen pt-32 pb-20 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="text-center space-y-2 border-b border-white/10 pb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Our Products
          </h1>

          <p className="text-slate-400 text-sm">
            High-quality architectural grilles and
            diffusers engineered for perfection.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* SIDEBAR */}
        <div className="lg:col-span-3 lg:sticky lg:top-28 relative z-20">
  <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative z-20">

              <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#0a1128] pb-4 border-b border-slate-200">
                Browse Categories
              </h3>

              <div className="flex flex-col space-y-2 mt-4">

                {categoriesList.map((cat, index) => {
                  const isActive =
                    (!categoryParam &&
                      cat.slug === null) ||
                    categoryParam === cat.slug;

                  return (
                    <button
                      key={index}
                      onClick={() =>
                        handleCategoryChange(
                          cat.slug
                        )
                      }
className={`group flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${
  isActive
    ? "bg-gradient-to-r from-[#0a1128] to-[#12244f] text-white shadow-xl"
    : "text-slate-700 hover:bg-slate-100 hover:text-[#0a1128]"
}`}
                    >
                      <span>{cat.name}</span>

                      <ChevronRight
                        size={16}
                        className={`transition-transform ${
                          isActive
                  
  ? "bg-[#1b2d5c] text-white border border-slate-600 shadow-lg"
                            : "text-slate-400 group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}

              </div>

              {/* INFO CARD */}
<div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#0a1128] to-[#12244f] text-white">
                <p className="text-xs uppercase tracking-wider opacity-80">
                  Product Collection
                </p>

                <h4 className="text-lg font-bold mt-2">
                  Premium HVAC Solutions
                </h4>

                <p className="text-sm mt-2 text-white/80 leading-relaxed">
                  Browse our complete range of
                  architectural grilles,
                  diffusers and dampers.
                </p>

              </div>

            </div>

          </div>

          {/* PRODUCTS GRID */}
          <div className="lg:col-span-9">

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-[#101f42] rounded-2xl border border-white/10">

                <Package
                  className="mx-auto text-slate-500 mb-3"
                  size={40}
                />

                <p className="text-slate-400">
                  No products found in this
                  category.
                </p>

              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {filteredProducts.map((prod) => {
const imageSrc =
  prod.images && prod.images.length > 0
    ? prod.images[0].startsWith("http")
      ? prod.images[0]
      : `${process.env.NEXT_PUBLIC_API_URL}${prod.images[0]}`
    : "https://placehold.co/400x300/f8f9fa/adb5bd?text=ALUGRIDX";

                  return (
                    <div
                      key={prod._id}
                      className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 flex flex-col justify-between space-y-4 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
                    >

                      {/* IMAGE */}
                      <div className="h-52 bg-[#f8f9fa] rounded-2xl p-4 flex items-center justify-center overflow-hidden border border-slate-100">

                        <img
                          src={imageSrc}
                          alt={prod.name}
                          className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/400x300/f8f9fa/adb5bd?text=ALUGRIDX";
                          }}
                        />

                      </div>

                      {/* CONTENT */}
                      <div className="space-y-1 px-1">

                        <h3 className="font-extrabold text-[#0a1128] text-base leading-tight capitalize group-hover:text-cyan-600 transition-colors">
                          {prod.name}
                        </h3>

                        <p className="text-cyan-600 text-xs font-bold uppercase tracking-wider">
                          {prod.series ||
                            prod.code}{" "}
                          SERIES
                        </p>

                      </div>

                      {/* BUTTON */}
                      <button
                        onClick={() =>
                          router.push(
                            `/products/${
                              prod.slug ||
                              prod._id
                            }`
                          )
                        }
                        className="w-full bg-[#0a1128] hover:bg-cyan-600 text-white font-bold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <span>
                          View Details
                        </span>

                        <ArrowRight
                          size={14}
                        />
                      </button>

                    </div>
                  );
                })}

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-white">
          Loading Products...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}