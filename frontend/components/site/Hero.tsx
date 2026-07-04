"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck, Grid3X3, ChevronLeft, ChevronRight, Activity, Cpu } from "lucide-react";

const carouselProducts = [
  {
    title: "Linear Slot Profile",
    desc: "Micro-Calibrated Air Terminal",
    img: "/images/products/linear-slot-diffusers.png"
  },
  {
    title: "Ceiling Diffuser",
    desc: "Omnidirectional Jet Deflection",
    img: "/images/products/ceiling-diffusers.png"
  },
  {
    title: "Sand Trap Louver",
    desc: "High-Capacity Airborne Particulate Purge",
    img: "/images/products/sand-trap-louvers.png"
  },
  {
    title: "Ceiling Housing with HEPA",
    desc: "Hermetic Cleanroom Terminal Filtration",
    img: "/images/products/ceiling-housing-with-hepa-filter.png"
  },
  {
    title: "Volume Control Damper",
    desc: "Microscopic Pressure Balance",
    img: "/images/products/volume-control-dampers.png"
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const checkDevice = () => setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const transformX = useTransform(mouseX, (v) => `${v}px`);
  const transformY = useTransform(mouseY, (v) => `${v}px`);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 40 : -40,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -40 : 30,
      opacity: 0,
      filter: "blur(6px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#0A2540] flex items-center justify-center group/hero select-none"
    >
      {/* 1. LAYERS: BACKGROUND MESH & VIDEO BLEND GRAPHICS */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          key="alugridx-hero-video"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22] lg:opacity-[0.32] mix-blend-screen scale-105 pointer-events-none transition-opacity duration-700 z-0" 
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {!isMobile && (
          <motion.div 
            className="absolute -inset-[500px] opacity-0 group-hover/hero:opacity-50 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%_50%)_var(--y,50%_50%),rgba(59,130,246,0.22)_0%,transparent_50%)] z-10"
            style={{
              // @ts-ignore
              "--x": transformX,
              // @ts-ignore
              "--y": transformY,
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/50 via-[#0A2540]/80 to-[#0A2540] z-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] z-30" />
      </div>

      {/* 2. MAIN GRID LAYOUT VIEWPORT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT CONSOLE: BRAND CONTENT TYPOGRAPHY */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 relative">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-white/[0.06] to-white/[0.01] backdrop-blur-xl border border-white/[0.1] px-4 py-2 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            <ShieldCheck size={14} className="text-[#3B82F6] animate-pulse" />
            <span className="text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] font-sans">
              ASHRAE Certified Structural Standard
            </span>
          </motion.div>

          <div className="space-y-4 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black text-white tracking-tighter uppercase leading-[0.85] font-sans drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
            >
              Alugrid<span className="text-[#3B82F6] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-white bg-clip-text text-transparent">X</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="text-lg sm:text-2xl md:text-3xl font-light text-slate-300 italic tracking-wide font-sans flex items-center justify-center lg:justify-start gap-3"
            >
              <span>engineered with</span> 
              <span className="font-black text-white not-italic bg-gradient-to-r from-[#3B82F6]/20 to-transparent border-b-2 border-[#3B82F6] px-3 py-0.5 rounded-sm shadow-sm">
                Absolute Precision
              </span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-300/90 leading-relaxed tracking-wide font-sans max-w-xl font-normal"
          >
            AlugridX manufactures premium grade 6063-T6 extruded aluminium air terminals and system profiles. Fabricated in the UAE to withstand rigorous environmental loads, supplying elite architectural complexes and high-capacity infrastructure links globally.
          </motion.p>

          {/* DYNAMIC CTAs WITH METALLIC HOVER GLOWS */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto pt-2"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.04, y: -3, boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="group bg-[#3B82F6] hover:bg-[#2563EB] text-white px-9 py-4.5 text-xs font-black uppercase tracking-widest transition-all rounded-full flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_10px_25px_rgba(59,130,246,0.2)] font-sans w-full"
              >
                <span>Explore Profiles</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
            
            <Link href="/request-catalogue" className="w-full sm:w-auto">
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.04, y: -3, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0A2540", borderColor: "white", boxShadow: "0px 20px 40px rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.97 }}
                className="text-white border border-white/20 hover:border-white/50 bg-white/[0.02] px-9 py-4.5 text-xs font-black uppercase tracking-widest transition-all rounded-full text-center backdrop-blur-sm cursor-pointer font-sans w-full"
              >
                Request Catalogue
              </motion.div>
            </Link>
          </motion.div>

          {/* NEW PREMIUM FEATURE: MICRO INLINE DASHBOARD WIDGET */}
          {!isMobile && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 0.8 }} 
              transition={{ delay: 0.6 }}
              className="pt-8 grid grid-cols-2 gap-8 border-t border-white/5 w-full max-w-md"
            >
            </motion.div>
          )}
        </div>

        {/* 🚀 FIXED: Shshifted side pod wrapper container layout to hidden on mobile views via 'hidden lg:flex' utility triggers */}
        <div className="hidden lg:col-span-5 w-full lg:flex flex-col items-center justify-center relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[350px] sm:max-w-[400px] aspect-square rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-white/0 border border-white/[0.1] p-4 flex items-center justify-center shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden group/product"
          >
            {/* Dynamic Glow Aura Core */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_65%)]" />
            <div className="absolute w-72 h-72 border border-white/[0.04] rounded-full animate-[spin_120s_linear_infinite]" />
            <div className="absolute w-52 h-52 border border-dashed border-white/[0.04] rounded-full animate-[spin_60s_linear_infinite_reverse]" />

            {/* Premium Navigation Trigger Elements */}
            <button 
              onClick={handlePrev}
              className="absolute left-4 z-30 w-9 h-9 rounded-full bg-slate-950/60 hover:bg-[#3B82F6] border border-white/[0.1] flex items-center justify-center text-white backdrop-blur-md transition-all active:scale-90"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 z-30 w-9 h-9 rounded-full bg-slate-950/60 hover:bg-[#3B82F6] border border-white/[0.1] flex items-center justify-center text-white backdrop-blur-md transition-all active:scale-90"
            >
              <ChevronRight size={16} />
            </button>

            {/* Core Display Container Box Framework */}
            <div className="relative w-full h-full bg-gradient-to-b from-slate-900/50 to-slate-950/80 rounded-[1.85rem] sm:rounded-[2.2rem] border border-white/[0.08] p-6 flex flex-col justify-between shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] overflow-hidden">
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex flex-col justify-between absolute inset-0 p-6"
                >
                  <div className="flex items-center justify-between w-full">
                    <Grid3X3 className="text-[#3B82F6]/50 group-hover/product:text-[#3B82F6] transition-colors duration-300" size={18} />
                    <span className="text-[9px] font-mono tracking-widest text-[#3B82F6] font-black bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-3 py-0.5 rounded-md uppercase">
                      Profile Matrix 0{currentIndex + 1}
                    </span>
                  </div>

                  {/* Enhanced Product Frame Wrapper Container */}
                  <div className="my-auto py-2 grid place-content-center relative group/img cursor-pointer">
                    <div className="absolute w-32 h-32 bg-[#3B82F6]/15 blur-3xl rounded-full transform scale-100 group-hover/product:scale-125 transition-transform duration-700" />
                    <motion.img 
                      whileHover={{ scale: 1.05, rotate: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      src={carouselProducts[currentIndex].img} 
                      alt={carouselProducts[currentIndex].title} 
                      className="max-h-32 sm:max-h-40 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)] bg-white/95 rounded-[1.5rem] p-3 border border-white/10 shadow-xl transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1 bg-gradient-to-r from-slate-950/60 to-transparent backdrop-blur-md border border-white/[0.06] p-4 rounded-xl shadow-lg">
                    <span className="text-white text-sm sm:text-base font-black uppercase tracking-wide block font-sans leading-tight">
                      {carouselProducts[currentIndex].title}
                    </span>
                    <span className="text-slate-400 text-[10px] sm:text-[11px] font-medium block font-sans tracking-wide">
                      {carouselProducts[currentIndex].desc}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

          {/* Slick Linear Progress Dash Navigation Dot Matrix */}
          <div className="flex justify-center gap-2 mt-5">
            {carouselProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-[#3B82F6]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER DIRECTIVITY NAVIGATION ICON METRIC LOOP */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex items-center gap-2.5 text-slate-400/50 text-[9px] font-black tracking-[0.25em] pointer-events-none font-sans">
        <span>ALUGRIDX ARCHITECTURAL CONTEXT</span>
        <ArrowDown size={12} className="animate-bounce text-[#3B82F6]" />
      </div>
    </div>
  );
}