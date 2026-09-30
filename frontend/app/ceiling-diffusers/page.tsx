import type { Metadata } from "next";
import CeilingDiffusersClient from "./CeilingDiffusersClient";

export const metadata: Metadata = {
  title: "Ceiling Diffusers & AC Grilles Manufacturer | AlugridX",
  description:
    "High-performance square and rectangular architectural ceiling diffusers manufactured for GCC commercial HVAC infrastructures. Tested to ASHRAE 70-1991 standards.",
  alternates: {
    canonical: "https://alugridx.com/ceiling-diffusers/",
  },
  openGraph: {
    title: "Ceiling Diffusers & AC Grilles Manufacturer | AlugridX",
    description:
      "Engineered square & rectangular ceiling diffusers for commercial air distribution. View sizing matrices, CFM capacity, and pressure drop technical data.",
    url: "https://alugridx.com/ceiling-diffusers/",
    siteName: "AlugridX Air Distribution",
    images: [
      {
        url: "/images/products/ceiling-diffusers.png",
        width: 800,
        height: 600,
        alt: "AlugridX Ceiling Diffusers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function CeilingDiffusersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "AlugridX Ceiling Diffusers",
    image: "https://alugridx.com/images/products/ceiling-diffusers.png",
    description:
      "Square & Rectangular ceiling diffusers engineered for 1, 2, 3, and 4-way airflow induction with low noise and minimal pressure drop.",
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
      url: "https://alugridx.com/ceiling-diffusers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <CeilingDiffusersClient />
    </>
  );
}