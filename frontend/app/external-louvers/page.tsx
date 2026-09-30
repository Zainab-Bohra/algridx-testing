import type { Metadata } from "next";
import ExternalLouversClient from "./ExternalLouversClient";

export const metadata: Metadata = {
  title: "External Louvers Manufacturer in UAE & Dubai | AlugridX",
  description:
    "High-performance architectural external intake and exhaust weather louvers (EL-B, EL-S, EL-V, EL-F, EL-FV) manufactured from extruded aluminum across UAE.",
  alternates: {
    canonical: "https://alugridx.com/external-louvers/",
  },
  openGraph: {
    title: "External Louvers | AlugridX Air Distribution",
    description:
      "Precision aluminum weather louvers engineered for weather protection and efficient air intake/exhaust ventilation.",
    url: "https://alugridx.com/external-louvers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function ExternalLouversPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "External Louvers",
    description:
      "Architectural external weather louvers with 45-degree fixed blades for air intake and exhaust with optional bird screen, insect screen, damper, and filter.",
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
      url: "https://alugridx.com/external-louvers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <ExternalLouversClient />
    </>
  );
}