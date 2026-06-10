"use client";
import { motion } from "framer-motion";

const items = [
  "UAE Manufacturing", "GCC Projects", "Premium Aluminium", 
  "HVAC Specialists", "Custom Sizes", "Fast Delivery", 
  "Engineering Excellence", "44+ Product Variants"
];

export default function SlidingMarquee() {
  return (
    <div className="flex w-full overflow-hidden bg-brand-blue py-3 text-white">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 text-sm font-semibold uppercase tracking-wider">
            • {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}