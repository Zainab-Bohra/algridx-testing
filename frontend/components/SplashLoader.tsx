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
    // 2.6 seconds premium entry timeline trigger
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
            exit={{ opacity: 0, y: -20, filter: "blur(15px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0A2540] flex flex-col items-center justify-center z-[99999] overflow-hidden select-none"
          >
            {/* Fine Corporate Blueprint Grid Layout Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
            
            {/* Soft Central Blue Glow Background Aura */}
            <div className="absolute w-[35rem] h-[35rem] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

            {/* BRANDED IDENTITY MATRIX RENDER */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-xs px-4">
              
              {/* 1. BRAND LOGO (Bada Size aur Sharp Shadow) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-8 flex justify-center"
              >
                <img 
                  src="/images/alugridx-without-bg-1.webp" 
                  alt="AlugridX Symbol" 
                  className="h-24 w-auto object-contain brightness-100 drop-shadow-[0_12px_25px_rgba(0,0,0,0.4)]"
                />
              </motion.div>

              {/* 2. PREMIUM SLEEPING LINE */}
              <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-5">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 1] }}
                  transition={{ 
                    duration: 2.2, 
                    ease: [0.22, 1, 0.36, 1],
                    repeat: Infinity,
                    repeatDelay: 0.2
                  }}
                  className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent origin-left"
                />
              </div>

              {/* 3. COMPANY BRAND NAME */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <h1 className="text-3xl font-black text-white uppercase tracking-[0.18em] pl-[0.18em] font-sans drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
                  Alugrid<span className="text-[#3B82F6] bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">X</span>
                </h1>
              </motion.div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout Entry transition blocks toggle */}
      <motion.div 
        animate={{ opacity: loading ? 0 : 1 }} 
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {!loading && children}
      </motion.div>
    </>
  );
}