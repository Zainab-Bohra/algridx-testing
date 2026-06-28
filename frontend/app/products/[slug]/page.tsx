"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`);
        if (!res.ok) throw new Error("Product data reference failure");
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center gap-4">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-2xl border-4 border-t-[#3B82F6] border-r-transparent border-b-[#124170] border-l-transparent shadow-lg"
          />
          <Loader2 size={24} className="animate-spin text-[#124170]" />
        </div>
        <span className="font-sans text-xs font-extrabold uppercase tracking-[0.2em] text-[#124170] mt-2 animate-pulse">
          Syncing Technical Profile
        </span>
      </div>
    );
  }

  return <ProductDetailClient />;
}