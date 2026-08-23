"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { 
  ArrowRight, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Award, 
  SlidersHorizontal,
  Compass,
  Zap
} from "lucide-react";

const carouselProducts = [
  {
    title: "Linear Slot Profile",
    subtitle: "Micro-Calibrated Air Terminal",
    tag: "Architectural Series",
    code: "LSP-6063",
    img: "/images/products/linear-slot-diffusers.png"
  },
  {
    title: "Ceiling Diffuser",
    subtitle: "Omnidirectional Jet Deflection",
    tag: "High Volume",
    code: "CD-360X",
    img: "/images/products/ceiling-diffusers.png"
  },
  {
    title: "Sand Trap Louver",
    subtitle: "High-Capacity Airborne Purge",
    tag: "Industrial Grade",
    code: "STL-9000",
    img: "/images/products/sand-trap-louvers.png"
  },
  {
    title: "Ceiling Housing with HEPA",
    subtitle: "Hermetic Cleanroom Terminal",
    tag: "ISO-Class Safe",
    code: "HEPA-H14",
    img: "/images/products/ceiling-housing-with-hepa-filter.png"
  },
  {
    title: "Volume Control Damper",
    subtitle: "Microscopic Pressure Balance",
    tag: "Precision Flow",
    code: "VCD-PRO",
    img: "/images/products/volume-control-dampers.png"
  }
];

const features = [
  { icon: Award, label: "6063-T6 Extruded Alloy" },
  { icon: Compass, label: "UAE Precision Crafting" },
  { icon: SlidersHorizontal, label: "ASHRAE Certified" }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  // Mouse tilt / spotlight values
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

  const spotlightX = useTransform(mouseX, (v) => `${v}px`);
  const spotlightY = useTransform(mouseY, (v) => `${v}px`);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
    }, 6000);
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

  const slideVariants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.92,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.92,
      filter: "blur(6px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-blue-50/30 flex items-center justify-center select-none font-sans"
    >
      {/* ================= 1. DYNAMIC LIGHTING & BACKGROUND GRAPHICS ================= */}
      <div className="absolute inset-0 h-full w-full pointer-events-none z-0">
        <div className="absolute -top-40 -left-20 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 rounded-full blur-[120px]" />

        {!isMobile && (
          <motion.div 
            className="absolute -inset-[300px] opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle 500px at ${spotlightX} ${spotlightY}, rgba(59, 130, 246, 0.07) 0%, transparent 80%)`,
            }}
          />
        )}

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] z-20" />
      </div>

      {/* ================= 2. MAIN LAYOUT CONTAINER ================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* -------------- LEFT CONTENT COLUMN -------------- */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-7 relative">
          
          {/* Top Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 bg-white border border-blue-200/80 shadow-[0_4px_20px_rgba(59,130,246,0.08)] px-4 py-2 rounded-full backdrop-blur-md"
          >
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 text-white shadow-xs">
              <ShieldCheck size={13} />
            </div>
            <span className="text-blue-950 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em]">
              GCC Certified Structural Air Systems
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
          </motion.div>

          {/* BRAND LOGO IMAGE HEADLINE SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center lg:justify-start"
          >
            <img 
              src="/images/alugridx-logo-font.png" 
              alt="ALUGRIDX - Airflow Redefined" 
              className="w-full max-w-[340px] sm:max-w-[480px] lg:max-w-[540px] h-auto object-contain drop-shadow-sm"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed tracking-wide max-w-xl font-normal"
          >
            AlugridX engineers high-performance 6063-T6 extruded aluminium air terminals, linear slot diffusers, and environmental control dampers tailored for modern architectural developments globally.
          </motion.p>

          {/* Feature Micro-Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start pt-1"
          >
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 bg-white/80 border border-slate-200/80 shadow-xs px-3.5 py-2 rounded-xl text-slate-800 text-xs font-bold backdrop-blur-sm"
                >
                  <Icon size={14} className="text-blue-600" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto pt-3"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.03, y: -2, boxShadow: "0px 20px 40px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="group bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 hover:from-blue-700 hover:to-blue-800 text-white px-9 py-4 text-xs font-black uppercase tracking-widest transition-all rounded-full flex items-center justify-center gap-3 cursor-pointer shadow-[0_12px_28px_rgba(37,99,235,0.25)] w-full"
              >
                <span>Explore Profiles</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1.5" />
              </motion.div>
            </Link>
            
            <Link href="/request-catalogue" className="w-full sm:w-auto">
              <motion.div
                whileHover={isMobile ? {} : { scale: 1.03, y: -2, backgroundColor: "#FFFFFF", borderColor: "#93C5FD" }}
                whileTap={{ scale: 0.97 }}
                className="text-slate-800 border border-slate-200/90 bg-white/90 backdrop-blur-md px-9 py-4 text-xs font-black uppercase tracking-widest transition-all rounded-full text-center cursor-pointer shadow-xs w-full"
              >
                Request Catalogue
              </motion.div>
            </Link>
          </motion.div>

        </div>

        {/* -------------- RIGHT CAROUSEL SHOWCASE COLUMN -------------- */}
        <div className="hidden lg:col-span-5 w-full lg:flex flex-col items-center justify-center relative mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full max-w-[430px] aspect-square rounded-[3rem] bg-gradient-to-b from-white/90 to-blue-50/70 border border-white p-5 flex items-center justify-center shadow-[0_35px_90px_rgba(15,23,42,0.09)] backdrop-blur-3xl overflow-hidden group/product"
          >
            {/* Stage Background Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15)_0%,transparent_65%)]" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-sky-300/30 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute w-80 h-80 border border-blue-200/40 rounded-full animate-[spin_90s_linear_infinite]" />
            <div className="absolute w-60 h-60 border border-dashed border-blue-300/40 rounded-full animate-[spin_45s_linear_infinite_reverse]" />

            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              aria-label="Previous Product"
              className="absolute left-4 z-40 w-11 h-11 rounded-full bg-white text-blue-900 border border-slate-200/80 flex items-center justify-center shadow-md transition-all active:scale-90 hover:scale-105 hover:bg-blue-50 hover:border-blue-200"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next Product"
              className="absolute right-4 z-40 w-11 h-11 rounded-full bg-white text-blue-900 border border-slate-200/80 flex items-center justify-center shadow-md transition-all active:scale-90 hover:scale-105 hover:bg-blue-50 hover:border-blue-200"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>

            {/* INNER CARD CONTAINER */}
            <div className="relative w-full h-full bg-white/95 backdrop-blur-xl rounded-[2.3rem] border border-slate-100/90 p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.03)] overflow-hidden">
              
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
                  {/* Top Bar Info */}
                  <div className="flex items-center justify-between w-full z-10">
                    <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 font-bold px-3 py-1 rounded-full text-[10px] tracking-wide border border-blue-100 shadow-2xs">
                      <Sparkles size={13} className="text-blue-500" />
                      <span>{carouselProducts[currentIndex].tag}</span>
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-400 bg-slate-50 border border-slate-100 px-3 py-1 rounded-full uppercase">
                      {carouselProducts[currentIndex].code}
                    </span>
                  </div>

                  {/* Product Display Stage */}
                  <div className="my-auto py-2 grid place-content-center relative cursor-pointer">
                    <div className="absolute w-44 h-44 bg-blue-500/10 blur-2xl rounded-full transform scale-100 group-hover/product:scale-125 transition-transform duration-700" />
                    <motion.img 
                      whileHover={{ scale: 1.08, rotate: 1.5 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      src={carouselProducts[currentIndex].img} 
                      alt={carouselProducts[currentIndex].title} 
                      className="max-h-36 sm:max-h-44 object-contain bg-slate-50/80 rounded-2xl p-4 border border-slate-100 shadow-xs transition-all duration-300"
                    />
                  </div>

                  {/* Bottom Text Capsule */}
                  <div className="space-y-1 bg-gradient-to-r from-slate-900 via-slate-950 to-blue-950 text-white p-4 rounded-2xl shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold uppercase tracking-wide block">
                        {carouselProducts[currentIndex].title}
                      </span>
                      <Zap size={14} className="text-sky-400" />
                    </div>
                    <span className="text-slate-300 text-[11px] font-medium block tracking-wide">
                      {carouselProducts[currentIndex].subtitle}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>

          {/* Carousel Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-10 bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}