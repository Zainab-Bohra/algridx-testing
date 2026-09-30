import type { Metadata } from "next";
import DiscValvesClient from "./DiscValvesClient";

export const metadata: Metadata = {
  title: "Disc Valves Manufacturer & Supplier in Dubai & UAE | AlugridX",
  description:
    "Industrial supply and exhaust disc valves manufactured from galvanized steel with adjustable rotating core, threaded rod, and airtight sealing gasket for commercial HVAC ductwork.",
  alternates: {
    canonical: "https://alugridx.com/disc-valves/",
  },
  openGraph: {
    title: "Disc Valves (Supply & Exhaust) | AlugridX",
    description:
      "Precision-engineered air distribution disc valves for quiet, low airflow exhaust in bathrooms, toilets, kitchens, and commercial HVAC systems across the UAE and GCC.",
    url: "https://alugridx.com/disc-valves/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function DiscValvesPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Disc Valves (Supply & Exhaust)",
    description:
      "Adjustable air distribution disc valves manufactured from galvanized steel sheet with threaded rod and rear frame air seal gasket.",
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
      url: "https://alugridx.com/disc-valves/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DiscValvesClient />
    </>
  );
}