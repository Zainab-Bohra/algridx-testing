"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 font-sans ${
        isScrolled
          ? "bg-[#0A2540]/90 backdrop-blur-xl border-b border-[#3B82F6]/20 py-3 shadow-[0_10px_30px_rgba(10,37,64,0.15)]"
          : "bg-gradient-to-b from-[#0A2540]/80 via-[#0A2540]/30 to-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section Frame */}
        <Link href="/" className="flex items-center z-50 transition-transform hover:scale-[1.01] shrink-0">
          <img 
            src="/images/alugridx-without-bg-1.webp" 
            alt="ALUGRIDX" 
            className="h-12 md:h-14 w-auto object-contain brightness-110 drop-shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
          />
        </Link>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => {
            // 🚀 FIXED: Robust deep link path validation to ensure clean child route detection
            const isActive = link.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(link.href);
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-sans font-black uppercase tracking-widest relative pb-2 pt-1 group transition-colors duration-300 ${
                  isActive ? "text-[#3B82F6]" : "text-slate-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                
                {/* 🚀 FIXED: Dynamic Underline with layoutId for smooth fluid execution transitions */}
                {isActive ? (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B82F6] shadow-[0_2px_10px_rgba(59,130,246,0.8)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : (
                  /* Standard Micro-line Indicator on Hover for non-active links */
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3B82F6]/50 transition-all duration-300 group-hover:w-full rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Premium Branded CTA Accent Button */}
        <div className="hidden md:block">
          <Link
            href="/request-catalogue"
            className="group bg-[#3B82F6] hover:bg-white text-white hover:text-[#124170] px-6 py-3 rounded-full text-[11px] font-sans font-extrabold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] flex items-center gap-1.5 border border-transparent hover:border-white"
          >
            <span>Request Catalogue</span>
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Action Toggle Switch */}
        <button
          className="md:hidden text-slate-200 z-50 p-2 hover:text-[#3B82F6] transition-colors cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Glassmorphism Overlay Menu Plane */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-screen bg-[#0A2540]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 z-40"
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => {
                const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-sans font-black uppercase tracking-widest transition-colors duration-200 flex flex-col items-center gap-1.5 ${
                      isActive ? "text-[#3B82F6]" : "text-slate-200 hover:text-[#3B82F6]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {/* 🚀 Mobile Active Underline Bar with Layout Preservation */}
                    {isActive && (
                      <motion.span 
                        layoutId="activeMobileUnderline" 
                        className="w-8 h-[2px] bg-[#3B82F6] rounded-full shadow-[0_1px_5px_rgba(59,130,246,0.6)]" 
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <Link
              href="/request-catalogue"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#3B82F6] text-white px-8 py-4 rounded-full text-xs font-sans font-extrabold uppercase tracking-widest shadow-lg shadow-blue-500/10 border border-white/10"
            >
              Request Catalogue
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}