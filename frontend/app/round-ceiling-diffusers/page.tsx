import type { Metadata } from "next";
import RoundCeilingDiffusersClient from "./RoundCeilingDiffusersClient";

export const metadata: Metadata = {
  title: "Round Ceiling Diffusers Manufacturer & Supplier in UAE & GCC | AlugridX",
  description:
    "Engineered circular ceiling diffusers and round swirl diffusers for high-induction radial airflow, low noise levels, and cleanroom air distribution across GCC projects.",
  alternates: {
    canonical: "https://alugridx.com/round-ceiling-diffusers/",
  },
  openGraph: {
    title: "Round Ceiling Diffusers & Swirl Diffusers | AlugridX",
    description:
      "AlugridX round diffusers manufactured from 1.25 mm high-grade aluminum with butterfly volume dampers and adjustable swirl blade profiles for commercial HVAC.",
    url: "https://alugridx.com/round-ceiling-diffusers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function RoundCeilingDiffusersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Round Ceiling Diffusers & Round Swirl Diffusers",
    description:
      "Circular and swirl aluminum diffusers providing uniform radial air distribution for supply and return HVAC systems.",
    brand: {
      "@type": "Brand",
      name: "AlugridX",
    },
    category: "HVAC Air Distribution Equipment",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      price: "0",
      availability: "https://schema.org/InStock",
      url: "https://alugridx.com/round-ceiling-diffusers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <RoundCeilingDiffusersClient />
    </>
  );
}