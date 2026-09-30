import type { Metadata } from "next";
import EggCrateGrillesClient from "./EggCrateGrillesClient";

export const metadata: Metadata = {
  title: "Egg-Crate Grilles, Registers & Diffusers Manufacturer UAE | AlugridX",
  description:
    "High-efficiency return and exhaust Egg-Crate Grilles (ECG, ECR, ECR-FV) with 90% free area, aluminum or polystyrene core, opposed blade dampers, and filter options across UAE.",
  alternates: {
    canonical: "https://alugridx.com/egegg-crate-grilles-registers-diffusers/",
  },
  openGraph: {
    title: "Egg-Crate Grilles / Registers & Diffusers | AlugridX",
    description:
      "Architectural return air egg-crate grilles with up to 90% free area, washable filters, and volume control dampers.",
    url: "https://alugridx.com/egegg-crate-grilles-registers-diffusers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function EggCratePage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Egg-Crate Grilles / Registers & Diffusers",
    description:
      "Aluminum return and exhaust air egg-crate grilles providing up to 90% free area with optional washable filter and opposed blade damper.",
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
      url: "https://alugridx.com/egegg-crate-grilles-registers-diffusers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <EggCrateGrillesClient />
    </>
  );
}