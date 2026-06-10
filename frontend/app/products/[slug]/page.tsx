"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${slug}`
      );

      if (!res.ok) {
        throw new Error("Product not found");
      }

      const data = await res.json();
      setProduct(data);

      if (data.images?.length > 0) {
        setActiveImage(data.images[0]);
      }
    } catch (error) {
      console.error(error);
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
      <div className="min-h-screen bg-[#081229] flex items-center justify-center text-white">
        Loading Product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#081229] flex items-center justify-center text-white">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#081229] min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Products
        </Link>

        <div className="bg-[#10224a] border border-white/10 rounded-3xl p-8">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* IMAGE SECTION */}
            <div>

              <div className="bg-white rounded-3xl p-6 h-[500px] flex items-center justify-center overflow-hidden">
                <img
                  src={
                    activeImage ||
                    "https://placehold.co/600x400/f1f5f9/94a3b8?text=ALUGRIDX"
                  }
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/600x400/f1f5f9/94a3b8?text=ALUGRIDX";
                  }}
                />
              </div>

              {/* THUMBNAILS */}
              {product.images?.length > 0 && (
                <div className="flex gap-3 mt-4 flex-wrap">

                  {product.images.map(
                    (img: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(img)}
                        className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                          activeImage === img
                            ? "border-cyan-400"
                            : "border-white/10"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    )
                  )}

                </div>
              )}

            </div>

            {/* CONTENT SECTION */}
            <div>

              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase">
                {product.category}
              </span>

              <h1 className="text-4xl font-extrabold text-white mt-4">
                {product.name}
              </h1>

              <p className="text-cyan-400 font-bold mt-3">
                SERIES CODE: {product.code}
              </p>

              <div className="mt-8 border-t border-white/10 pt-8">
                <h3 className="text-slate-400 uppercase text-sm font-bold mb-4">
                  Product Description
                </h3>

                <p className="text-slate-200 leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="mt-8 bg-[#08152f] rounded-2xl p-5 flex items-center gap-3">
                <ShieldCheck
                  size={20}
                  className="text-green-400"
                />

                <span className="text-slate-300">
                  Certified Premium Aluminum Grade Construction
                </span>
              </div>

              {/* FEATURES */}
              <div className="mt-10">

                <h3 className="text-white font-bold text-lg mb-4">
                  Key Features
                </h3>

                {product.keyFeatures?.length > 0 ? (
                  <div className="space-y-3">

                    {product.keyFeatures.map(
                      (
                        feature: string,
                        index: number
                      ) => (
                        <div
                          key={index}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-cyan-400 mt-1"
                          />

                          <span className="text-slate-300">
                            {feature}
                          </span>
                        </div>
                      )
                    )}

                  </div>
                ) : (
                  <p className="text-slate-400">
                    No Features Added
                  </p>
                )}

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}