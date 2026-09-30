import type { Metadata } from "next";
import SupplyReturnRegistersClient from "./SupplyReturnRegistersClient";

export const metadata: Metadata = {
  title: "Supply/Return Air Registers, Grilles, and Fresh Air Grilles | AlugridX",
  description:
    "High-performance single & double deflection supply air registers, return air grilles, and exhaust louvers manufactured for GCC HVAC applications.",
  alternates: {
    canonical:
      "https://alugridx.com/supply-return-air-registers-grilles-and-fresh-air-grilles/",
  },
  openGraph: {
    title: "Supply/Return Air Registers, Grilles, and Fresh Air Grilles | AlugridX",
    description:
      "Engineered supply and return air registers with double deflection airfoil blades, opposed blade dampers, throw & drop calculation charts.",
    url: "https://alugridx.com/supply-return-air-registers-grilles-and-fresh-air-grilles/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function SupplyReturnRegistersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Supply/Return Air Registers, Grilles, and Fresh Air Grilles",
    description:
      "Single and double deflection supply and return air registers calibrated for commercial and industrial GCC projects.",
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
      url: "https://alugridx.com/supply-return-air-registers-grilles-and-fresh-air-grilles/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <SupplyReturnRegistersClient />
    </>
  );
}