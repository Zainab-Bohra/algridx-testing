import type { Metadata } from "next";
import SandTrapLouversClient from "./SandTrapLouversClient";

export const metadata: Metadata = {
  title: "Sand Trap Louvers Manufacturer & Supplier in UAE & GCC | AlugridX",
  description:
    "Industrial self-emptying sand trap louvers engineered to separate airborne sand and dust particles with low pressure drops, optional filters, and volume dampers across the GCC.",
  alternates: {
    canonical: "https://alugridx.com/sand-trap-louvers/",
  },
  openGraph: {
    title: "Sand Trap Louvers Manufacturer & Supplier | AlugridX",
    description:
      "Heavy-duty mill finish aluminum and galvanized steel sand trap louvers with self-cleaning base plates, bird/insect screens, and 25/50 mm washable filters.",
    url: "https://alugridx.com/sand-trap-louvers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function SandTrapLouversPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Sand Trap Louvers",
    description:
      "Engineered air intake sand trap louvers designed for harsh desert environments, separating airborne sand particles at low velocities.",
    brand: {
      "@type": "Brand",
      name: "AlugridX",
    },
    category: "HVAC External Louvers",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      price: "0",
      availability: "https://schema.org/InStock",
      url: "https://alugridx.com/sand-trap-louvers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <SandTrapLouversClient />
    </>
  );
}