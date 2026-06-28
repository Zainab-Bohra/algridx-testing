"use client";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowDown, ArrowRight, ShieldCheck, Grid3X3, ChevronLeft, ChevronRight } from "lucide-react";

const carouselProducts = [
  {
    title: "Linear Slot Profile",
    desc: "Micro-Calibrated Air Terminal",
    img: "/images/products/linear-slot-diffusers.avif"
  },
  {
    title: "Ceiling Diffuser",
    desc: "Omnidirectional Jet Deflection",
    img: "/images/products/ceiling-diffusers.avif"
  },
  {
    title: "Supply Air Grille",
    desc: "Precision Directional Throw",
    img: "/images/products/supply-air-grilles.avif"
  },
  {
    title: "Industrial Louver",
    desc: "Heavy-Duty Weather Shell",
    img: "/images/products/louvers.avif"
  },
  {
    title: "Volume Control Damper",
    desc: "Microscopic Pressure Balance",
    img: "/images/products/volume-control-dampers.avif"
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
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: "blur(4px)",
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#0A2540] flex items-center justify-center group/hero select-none"
    >
      {/* 1. LAYERS: BACKGROUND MESH & STRUCTURAL GRID (FIXED OPACITY FOR VIDEO VISIBILITY) */}
      <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          key="alugridx-hero-video"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.25] lg:opacity-[0.35] mix-blend-screen scale-105 pointer-events-none transition-opacity duration-700 z-0" 
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        
        {!isMobile && (
          <motion.div 
            className="absolute -inset-[500px] opacity-0 group-hover/hero:opacity-40 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_var(--x,50%_50%)_var(--y,50%_50%),rgba(59,130,246,0.18)_0%,transparent_50%)] z-10"
            style={{
              // @ts-ignore
              "--x": transformX,
              // @ts-ignore
              "--y": transformY,
            }}
          />
        )}

        {/* Perfectly Calibrated Transparent Tones to Avoid Video Hiding */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F355C]/40 via-[#0A2540]/60 to-[#0A2540] z-20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] z-30" />
      </div>

      {/* 2. MAIN GRID LAYOUT VIEWPORT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-28 pb-16 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* BRAND CONTENT ENTRY BLOCK */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-7">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] px-3.5 py-1.5 rounded-full shadow-xl"
          >
            <ShieldCheck size={13} className="text-[#3B82F6]" />
            <span className="text-white text-[8px] sm:text-[9px] font-black uppercase tracking-[0.22em] font-sans">
              ASHRAE Certified Structural Standard
            </span>
          </motion.div>

          <div className="space-y-3 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] font-sans drop-shadow-xl"
            >
              Alugrid<span className="text-[#3B82F6] bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">X</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-base sm:text-xl md:text-2xl font-light text-slate-300 italic tracking-wide font-sans"
            >
              engineered with <span className="font-extrabold text-white not-italic border-b-2 border-[#3B82F6] pb-0.5">Absolute Precision</span>
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm text-slate-300 leading-relaxed tracking-wide font-sans max-w-xl font-normal opacity-90"
          >
            AlugridX manufactures premium grade 6063-T6 extruded aluminium air terminals and system profiles. Fabricated in the UAE to withstand rigorous environmental loads, supplying elite architectural complexes and high-capacity infrastructure links globally.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start w-full sm:w-auto pt-2"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.02, y: -2, boxShadow: "0px 15px 30px rgba(59, 130, 246, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 text-[11px] font-black uppercase tracking-widest transition-all rounded-full flex items-center justify-center gap-2 cursor-pointer shadow-md font-sans w-full"
              >
                <span>Explore Profiles</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </motion.div>
            </Link>
            
            <Link href="/request-catalogue" className="w-full sm:w-auto">
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.02, y: -2, backgroundColor: "rgba(255, 255, 255, 1)", color: "#0A2540", borderColor: "white" }}
                whileTap={{ scale: 0.98 }}
                className="text-white border border-white/20 hover:border-white/40 bg-white/[0.02] px-8 py-4 text-[11px] font-black uppercase tracking-widest transition-all rounded-full text-center backdrop-blur-sm cursor-pointer font-sans w-full"
              >
                Request Catalogue
              </motion.div>
            </Link>
          </motion.div>
        </div>

        {/* HIGH-END INTERACTIVE DISPLAY POD */}
        <div className="lg:col-span-5 w-full flex flex-col items-center justify-center relative mt-4 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-white/0 border border-white/[0.08] p-3.5 sm:p-4 flex items-center justify-center shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden group/product"
          >
            {/* Ambient Lighting Shell Rings */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_60%)]" />
            <div className="absolute w-64 h-64 border border-white/[0.03] rounded-full animate-[spin_100s_linear_infinite]" />
            <div className="absolute w-44 h-44 border border-dashed border-white/[0.03] rounded-full animate-[spin_50s_linear_infinite_reverse]" />

            {/* Navigation Overlays */}
            <button 
              onClick={handlePrev}
              className="absolute left-3 z-30 w-8 h-8 rounded-full bg-slate-950/50 hover:bg-slate-950/80 border border-white/[0.08] flex items-center justify-center text-white backdrop-blur-md transition-all active:scale-95"
            >
              <ChevronLeft size={14} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-3 z-30 w-8 h-8 rounded-full bg-slate-950/50 hover:bg-slate-950/80 border border-white/[0.08] flex items-center justify-center text-white backdrop-blur-md transition-all active:scale-95"
            >
              <ChevronRight size={14} />
            </button>

            {/* Core Card Framework */}
            <div className="relative w-full h-full bg-gradient-to-b from-slate-900/40 to-slate-950/60 rounded-[1.65rem] sm:rounded-[2rem] border border-white/[0.08] p-5 flex flex-col justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] overflow-hidden">
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex flex-col justify-between absolute inset-0 p-5"
                >
                  <div className="flex items-center justify-between w-full">
                    <Grid3X3 className="text-[#3B82F6]/60 group-hover/product:text-[#3B82F6] transition-colors" size={16} />
                    <span className="text-[9px] font-mono tracking-wider text-slate-400 font-bold bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-md">
                      0{currentIndex + 1} // MATRIX
                    </span>
                  </div>

                  {/* Rendering Hub for High-Contrast Assets */}
                  <div className="my-auto py-1 grid place-content-center relative">
                    <div className="absolute w-28 h-28 bg-[#3B82F6]/10 blur-2xl rounded-full" />
                    <img 
                      src={carouselProducts[currentIndex].img} 
                      alt={carouselProducts[currentIndex].title} 
                      className="max-h-28 sm:max-h-36 object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="space-y-0.5 bg-slate-950/40 backdrop-blur-md border border-white/[0.05] p-3 rounded-lg bg-gradient-to-r from-slate-950/50 to-transparent">
                    <span className="text-white text-xs sm:text-sm font-black uppercase tracking-wider block font-sans">
                      {carouselProducts[currentIndex].title}
                    </span>
                    <span className="text-slate-400 text-[9px] sm:text-[10px] font-medium block font-sans tracking-wide">
                      {carouselProducts[currentIndex].desc}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

          {/* Minimal Inline Dashboard Index Line Indicators */}
          <div className="flex justify-center gap-1.5 mt-4">
            {carouselProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-6 bg-[#3B82F6]" : "w-1.5 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER DIRECTIVITY METRIC ELEMENT */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden lg:flex items-center gap-2.5 text-slate-400/40 text-[8px] font-black tracking-[0.25em] pointer-events-none font-sans">
        <span>ALUGRIDX ARCHITECTURAL CONTEXT</span>
        <ArrowDown size={11} className="animate-bounce text-[#3B82F6]" />
      </div>
    </div>
  );
}