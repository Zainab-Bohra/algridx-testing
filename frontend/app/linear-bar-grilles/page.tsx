import type { Metadata } from "next";
import LinearBarGrillesClient from "./LinearBarGrillesClient";

export const metadata: Metadata = {
  title: "Linear Bar Grilles Manufacturer & Supplier in UAE & GCC | AlugridX",
  description:
    "High-precision architectural linear bar grilles and registers with 0°, 15° single & double deflection, opposed blade dampers, curved profiles, and mitered corner assemblies.",
  alternates: {
    canonical: "https://alugridx.com/linear-bar-grilles/",
  },
  openGraph: {
    title: "Linear Bar Grilles Manufacturer & Supplier | AlugridX",
    description:
      "Engineered extruded aluminium linear bar grilles and registers calibrated for continuous architectural ceiling, wall, and sill mounting across UAE and GCC infrastructures.",
    url: "https://alugridx.com/linear-bar-grilles/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function LinearBarGrillesPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Linear Bar Grilles & Registers",
    description:
      "Extruded aluminum linear bar grilles with fixed horizontal bars and optional vertical deflection blades for architectural air distribution.",
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
      url: "https://alugridx.com/linear-bar-grilles/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <LinearBarGrillesClient />
    </>
  );
}