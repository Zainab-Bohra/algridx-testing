"use client";

import { useParams } from "next/navigation";
import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  // 🚀 FIXED: Hata diya saara slow fetch state logic. Ab bina kisi loading 
  // spinner ke page direct responsive layout render karega.
  return <ProductDetailClient />;
}