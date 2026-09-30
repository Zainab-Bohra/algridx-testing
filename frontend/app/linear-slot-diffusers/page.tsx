import type { Metadata } from "next";
import LinearSlotDiffusersClient from "./LinearSlotDiffusersClient";

export const metadata: Metadata = {
  title: "Linear Slot Diffuser Manufacturer Dubai & UAE | AlugridX",
  description:
    "High-precision linear slot diffusers (SLSD, RLSD, DLSD) with hit-and-miss dampers and acoustic plenum boxes for ceiling air distribution across UAE commercial projects.",
  alternates: {
    canonical: "https://alugridx.com/linear-slot-diffusers/",
  },
  openGraph: {
    title: "Linear Slot Diffusers (LSD) | AlugridX",
    description:
      "Architectural 1 to 8 slot linear ceiling diffusers with supply, return, and dummy configurations engineered for seamless continuous ceiling integration.",
    url: "https://alugridx.com/linear-slot-diffusers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function LinearSlotDiffusersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Linear Slot Diffusers (LSD)",
    description:
      "Adjustable extruded aluminum linear slot diffusers available from 1 to 8 slots with hit-and-miss dampers and acoustically insulated plenum boxes.",
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
      url: "https://alugridx.com/linear-slot-diffusers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <LinearSlotDiffusersClient />
    </>
  );
}