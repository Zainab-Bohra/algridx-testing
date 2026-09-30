"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.03,
              filter: "blur(12px)",
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="fixed inset-0 bg-[#06101E] flex flex-col items-center justify-center z-[99999] overflow-hidden select-none"
          >
            {/* CLEAN STUDIO SPOTLIGHT (NO PATTERNS, NO GRIDS, NO DOTS) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Soft Center Lighting Halo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-b from-[#1D4ED8]/15 to-transparent rounded-full blur-[140px]" />
              
              {/* Subtle Ambient Depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030712_90%)]" />
            </div>

            {/* LOGO STAGE */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md px-6">
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex justify-center items-center"
              >
                <img 
                  src="/images/alugridx-without-bg-1.webp" 
                  alt="AlugridX Logo" 
                  className="h-36 sm:h-44 md:h-52 w-auto object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
                />
              </motion.div>

              {/* SLEEK MINIMAL PROGRESS BAR */}
              <div className="w-44 h-[2px] bg-white/10 rounded-full overflow-hidden mt-8">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  className="h-full w-full bg-gradient-to-r from-transparent via-[#38BDF8] to-white"
                />
              </div>

              {/* ARCHITECTURAL BRAND TAGLINE */}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-[10px] font-mono tracking-[0.28em] text-slate-400 uppercase mt-4"
              >
                Precision Engineered Air Systems
              </motion.span>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Transition */}
      <motion.div 
        animate={{ opacity: loading ? 0 : 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {!loading && children}
      </motion.div>
    </>
  );
}