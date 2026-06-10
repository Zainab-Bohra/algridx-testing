"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products/" },
  { name: "Projects", href: "/projects/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Blog", href: "/blog/" },
  { name: "Contact", href: "/contact-us/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-brand-navy/90 via-brand-navy/40 to-transparent border-b border-transparent py-5" 
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center z-50">
          <img 
            src="/images/alugridx-without-bg-1.webp" 
            alt="ALUGRIDX Airflow Redefined" 
            className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-white/90 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/request-catalogue/"
            className="bg-gradient-to-r from-brand-blue to-cyan-600 text-white px-5 py-2.5 rounded-md text-sm font-extrabold hover:from-cyan-500 hover:to-brand-blue transition-all shadow-[0_0_15px_rgba(0,150,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] whitespace-nowrap"
          >
            Request Catalogue
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-brand-navy/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/request-catalogue/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-cyan-500 text-brand-navy px-8 py-3 rounded-md font-bold shadow-[0_0_20px_rgba(0,255,255,0.4)]"
            >
              Request Catalogue
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}