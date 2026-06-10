"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductDetailClient() {
  const params = useParams();

  const slug =
    typeof params?.slug === "string"
      ? params.slug
      : "";

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/products/${slug}`
        );

        if (!res.ok) {
          throw new Error("Product not found");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1128] flex items-center justify-center text-cyan-400 font-bold">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a1128] flex items-center justify-center text-white">
        Product Not Found
      </div>
    );
  }

  const imageSrc =
    product.images?.length > 0
      ? product.images[0]
      : "https://placehold.co/600x400/f1f5f9/0a192f?text=ALUGRIDX";

  return (
    <div className="bg-[#0a1128] min-h-screen pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 mb-12"
        >
          <ArrowLeft size={16} />
          Back to All Products
        </Link>

        <div className="bg-[#12244f] rounded-[32px] p-8 lg:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4 }}
  className="bg-white rounded-3xl p-6 h-[380px] flex items-center justify-center overflow-hidden cursor-pointer border border-white/20 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
>
  <motion.img
    src={imageSrc}
    alt={product.name}
    whileHover={{
      scale: 1.12,
      rotate: 2,
      y: -8,
    }}
    transition={{ duration: 0.45 }}
    className="max-w-full max-h-full object-contain"
    onError={(e) => {
      e.currentTarget.src =
        "https://placehold.co/600x400/f1f5f9/0a192f?text=ALUGRIDX";
    }}
  />
</motion.div>
            </div>

            <div className="lg:col-span-7">
              <span className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase">
                {product.category}
              </span>

      <h1 className="text-4xl lg:text-5xl font-extrabold mt-4">
  {product.name}
</h1>

              <div className="border-t border-white/10 mt-8 pt-8">
                <h3 className="text-slate-400 uppercase text-sm font-bold mb-4">
                  Product Description
                </h3>

                <p className="text-lg text-slate-200 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="mt-8 bg-[#08152f] rounded-2xl p-5 flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" size={20} />
                <span className="text-slate-300 text-sm">
                  Certified Premium Aluminum Grade Construction
                </span>
              </div>

              {/* SPECIFICATIONS */}
{product.specifications?.length > 0 && (
  <div className="mt-10 bg-[#08152f] rounded-2xl p-6 border border-white/10">
    <h3 className="text-xs font-black tracking-[0.25em] uppercase text-cyan-400 mb-5">
      Specifications
    </h3>

    <div className="space-y-3">
      {product.specifications.map((spec: any, index: number) => (
        <div
          key={index}
          className="grid grid-cols-2 gap-4 border-b border-white/10 pb-3 last:border-b-0"
        >
          <span className="text-slate-400 text-sm">{spec.key}</span>
          <span className="text-white text-sm font-medium">
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  </div>
)}

{/* FEATURES */}
{product.keyFeatures?.length > 0 && (
  <div className="mt-6 bg-[#08152f] rounded-2xl p-6 border border-white/10">
    <h3 className="text-xs font-black tracking-[0.25em] uppercase text-cyan-400 mb-5">
      Key Features
    </h3>

    <div className="space-y-3">
      {product.keyFeatures.map(
        (feature: string, index: number) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2
              size={18}
              className="text-cyan-400 mt-1"
            />
            <span>{feature}</span>
          </div>
        )
      )}
    </div>
  </div>
)}

{/* APPLICATIONS */}
{product.applications?.length > 0 && (
  <div className="mt-6 bg-[#08152f] rounded-2xl p-6 border border-white/10">
    <h3 className="text-xs font-black tracking-[0.25em] uppercase text-cyan-400 mb-5">
      Applications
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {product.applications.map(
        (item: string, index: number) => (
          <div
            key={index}
            className="flex items-center gap-2 text-slate-300 text-sm"
          >
            <CheckCircle2
              size={16}
              className="text-cyan-400"
            />
            {item}
          </div>
        )
      )}
    </div>
  </div>
)}

{/* STANDARDS */}
{product.standardsCompliance?.length > 0 && (
  <div className="mt-6 bg-[#08152f] rounded-2xl p-6 border border-white/10">
    <h3 className="text-xs font-black tracking-[0.25em] uppercase text-cyan-400 mb-5">
      Standards Compliance
    </h3>

    <div className="flex flex-wrap gap-2">
      {product.standardsCompliance.map(
        (item: string, index: number) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold"
          >
            {item}
          </span>
        )
      )}
    </div>
  </div>
)}

{/* FAQ */}
{product.faqs?.length > 0 && (
  <div className="mt-6 bg-[#08152f] rounded-2xl p-6 border border-white/10">
    <h3 className="text-xs font-black tracking-[0.25em] uppercase text-cyan-400 mb-5">
      FAQs
    </h3>

    <div className="space-y-4">
      {product.faqs.map((faq: any, index: number) => (
        <div key={index}>
          <h4 className="font-bold text-white">
            {faq.question}
          </h4>

          <p className="text-slate-400 mt-2">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  </div>
)}

{/* DATASHEET */}
{product.datasheetUrl && (
  <div className="mt-6">
    <a
      href={product.datasheetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-center bg-cyan-500 hover:bg-cyan-600 transition rounded-xl py-4 font-bold"
    >
      Download Datasheet
    </a>
  </div>
)}

{/* CTA */}
<div className="mt-6">
  <Link
    href="/contact-us"
    className="w-full flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4 font-bold text-white"
  >
    Request Quote
  </Link>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}