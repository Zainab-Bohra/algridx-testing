import type { Metadata } from "next";
import FlowbarSlotDiffusersClient from "./FlowbarSlotDiffusersClient";

export const metadata: Metadata = {
  title: "Flowbar Slot Diffusers Manufacturer in UAE | AlugridX",
  description:
    "Architectural high-throw flowbar linear slot diffusers (FBD series) featuring concealed plaster frames, 45° and 90° hidden borders, and 3-way pattern controllers for luxury spaces.",
  alternates: {
    canonical: "https://alugridx.com/flowbar-slot-diffusers/",
  },
  openGraph: {
    title: "Flowbar Slot Diffusers (FBD) | AlugridX",
    description:
      "AlugridX Flowbar continuous linear slot diffusers engineered for high airflow capacity, seamless acoustic integration, and true horizontal or vertical throw control.",
    url: "https://alugridx.com/flowbar-slot-diffusers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function FlowbarSlotDiffusersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Flowbar Slot Diffusers (FBD)",
    description:
      "High airflow architectural linear slot diffusers available in flange, hidden frame 45°, plaster hidden frame, and 90° borderless configurations with 1 to 4 slots.",
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
      url: "https://alugridx.com/flowbar-slot-diffusers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <FlowbarSlotDiffusersClient />
    </>
  );
}