import type { Metadata } from "next";
import NonReturnDampersClient from "./NonReturnDampersClient";

export const metadata: Metadata = {
  title: "Non-Return Dampers & Gravity Louvers Manufacturer in UAE | AlugridX",
  description:
    "Industrial air-operated non-return dampers, back draught dampers, and gravity louvers manufactured from high-grade aluminum and galvanized steel for duct and wall mounting.",
  alternates: {
    canonical: "https://alugridx.com/non-return-dampers/",
  },
  openGraph: {
    title: "Non-Return Dampers / Gravity Louvers | AlugridX",
    description:
      "Engineered back draught dampers and gravity louvers with rattle-free nylon bushes, flanged or straight casing, and precise pressure-relief regulation.",
    url: "https://alugridx.com/non-return-dampers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function NonReturnDampersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Non-Return Dampers / Gravity Louvers",
    description:
      "Air-operated opening and closing dampers for air intake, discharge, and pressure-relief vents in HVAC ventilation systems.",
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
      url: "https://alugridx.com/non-return-dampers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <NonReturnDampersClient />
    </>
  );
}