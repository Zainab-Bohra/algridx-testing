import type { Metadata } from "next";
import VolumeControlDampersClient from "./VolumeControlDampersClient";

export const metadata: Metadata = {
  title: "Volume Control Dampers Manufacturer & Supplier in UAE & GCC | AlugridX",
  description:
    "High-precision opposed and parallel blade volume control dampers (VCD), circular duct dampers, and VAV terminal units manufactured from galvanized steel with manual quadrant control.",
  alternates: {
    canonical: "https://alugridx.com/volume-control-dampers/",
  },
  openGraph: {
    title: "Volume Control Dampers (VCD) & Terminal Units | AlugridX",
    description:
      "AlugridX heavy-duty volume control dampers engineered for air volume regulation, duct isolation, and low pressure drop across GCC industrial HVAC systems.",
    url: "https://alugridx.com/volume-control-dampers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function VolumeControlDampersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Volume Control Dampers & VAV Terminal Units",
    description:
      "Opposed blade, parallel blade, circular volume control dampers, and VAV terminal units for precise airflow regulation in ductwork.",
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
      url: "https://alugridx.com/volume-control-dampers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <VolumeControlDampersClient />
    </>
  );
}