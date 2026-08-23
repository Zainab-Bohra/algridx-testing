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
    }, 2600);

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
              scale: 1.05, 
              filter: "blur(16px)",
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
            }}
            className="fixed inset-0 bg-[#030b14] flex flex-col items-center justify-center z-[99999] overflow-hidden select-none"
          >
            {/* 1. AMBIENT BACKGROUND & DYNAMIC AIRFLOW LINES */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,rgba(3,11,20,0.95)_75%)] pointer-events-none" />
            
            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

            {/* Floating Airflow Particles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "200%", opacity: [0, 0.4, 0] }}
                transition={{
                  duration: 2.5 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.4,
                }}
                style={{ top: `${30 + i * 20}%` }}
                className="absolute h-[1px] w-96 bg-gradient-to-r from-transparent via-sky-400/30 to-transparent pointer-events-none blur-[1px]"
              />
            ))}

            {/* 2. CENTER STAGE */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-xl px-6">
              
              {/* LOGO CONTAINER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex justify-center items-center w-full"
              >
                {/* Backlight Aura */}
                <motion.div 
                  animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-[260px] h-[260px] bg-sky-500/20 rounded-full blur-[80px] pointer-events-none" 
                />
                
                <img 
                  src="/images/alugridx-without-bg-1.webp" 
                  alt="AlugridX Logo" 
                  className="h-48 sm:h-60 md:h-72 w-auto object-contain brightness-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] relative z-10"
                />
              </motion.div>

              {/* 3. ANIMATED LINE DIRECTLY UNDER LOGO */}
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[220px] h-[2px] bg-sky-950/80 overflow-hidden rounded-full mt-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              >
                {/* Continuous Shimmer Light Beam */}
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 1.4, 
                    ease: "easeInOut", 
                    repeat: Infinity 
                  }}
                  className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_12px_#38bdf8]"
                />
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Entry */}
      <motion.div 
        animate={{ opacity: loading ? 0 : 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {!loading && children}
      </motion.div>
    </>
  );
}