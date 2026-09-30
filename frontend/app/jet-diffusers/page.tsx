import type { Metadata } from "next";
import JetDiffusersClient from "./JetDiffusersClient";

export const metadata: Metadata = {
  title: "Jet Diffusers Manufacturer in Dubai & UAE | Eyeball & Ring Type | AlugridX",
  description:
    "High-capacity eyeball jet diffusers (JD-EBT) and ring-type jet diffusers (JD-RT) for long throw air distribution in airports, stadiums, and high-ceiling commercial spaces across the UAE.",
  alternates: {
    canonical: "https://alugridx.com/jet-diffusers/",
  },
  openGraph: {
    title: "Jet Diffusers (Eyeball & Ring Type) | AlugridX",
    description:
      "AlugridX heavy-duty aluminum jet nozzles delivering up to 25m long throws with 360-degree rotational adjustment for heating and cooling large spaces.",
    url: "https://alugridx.com/jet-diffusers/",
    siteName: "AlugridX Air Distribution",
    type: "website",
  },
};

export default function JetDiffusersPage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Jet Diffusers (Eyeball Type & Ring Type)",
    description:
      "Long throw eyeball jet diffusers and ring-type nozzles manufactured from high-quality aluminum for high-ceiling industrial and commercial air distribution.",
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
      url: "https://alugridx.com/jet-diffusers/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <JetDiffusersClient />
    </>
  );
}