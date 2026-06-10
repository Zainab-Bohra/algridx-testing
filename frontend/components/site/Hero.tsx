"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-brand-navy">
      
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 h-full w-[125vw] max-w-none object-cover opacity-80" 
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Navy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 to-brand-navy/20"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full max-w-7xl flex-col justify-center px-6 sm:px-12 lg:px-24">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Precision Air <br /> Distribution Solutions
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-brand-light md:text-xl"
        >
          Premium aluminium grilles, diffusers, louvers and dampers manufactured in UAE for commercial, industrial and infrastructure projects across UAE & GCC.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/products" className="rounded-md bg-brand-blue px-8 py-4 font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-glow">
            Explore Products
          </Link>
          <Link href="/request-catalogue" className="rounded-md border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20">
            Request Catalogue
          </Link>
        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-6 right-6 hidden md:flex justify-between border-t border-white/20 pt-6 sm:left-12 lg:left-24 lg:right-24 text-white"
        >
          <div>
            <p className="text-3xl font-bold text-brand-blue">44+</p>
            <p className="text-sm text-brand-light">Product Variants</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-blue">40+</p>
            <p className="text-sm text-brand-light">Years Industry Legacy</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-blue">UAE</p>
            <p className="text-sm text-brand-light">Manufacturing</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-brand-blue">GCC</p>
            <p className="text-sm text-brand-light">Supply Network</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}