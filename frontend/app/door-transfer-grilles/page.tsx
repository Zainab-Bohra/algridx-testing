import type { Metadata } from "next";
import DoorTransferGrillesClient from "./DoorTransferGrillesClient";

export const metadata: Metadata = {
  title: "Door Transfer Grilles Manufacturer in Dubai & UAE | AlugridX",
  description:
    "High-quality architectural vision-proof door transfer grilles (DTG-1 & DTG-2) with sight-proof inverted V chevrons for room-to-room pressure transfer across UAE projects.",
  alternates: {
    canonical: "https://alugridx.com/door-transfer-grilles/",
  },
  openGraph: {
    title: "Door Transfer Air Grilles | AlugridX",
    description:
      "Precision aluminum door transfer and partition air relief grilles with single or dual telescopic frame options.",
    url: "https://alugridx.com/door-transfer-grilles/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function DoorTransferGrillesPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Door Transfer Grilles",
    description:
      "Vision-proof inverted V core aluminum door transfer grilles for room partitions and doors.",
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
      url: "https://alugridx.com/door-transfer-grilles/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <DoorTransferGrillesClient />
    </>
  );
}