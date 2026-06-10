"use client";
import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white border-t border-white/10 py-12 relative z-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        
        {/* COL 1: BRAND CENTRAL */}
        <div className="space-y-4">
          <Link href="/">
            <img 
              src="/images/alugridx-without-bg-1.webp" 
              alt="ALUGRIDX" 
              className="h-12 w-auto object-contain brightness-110"
            />
          </Link>
          <p className="text-slate-400 text-xs font-medium leading-relaxed max-w-xs">
            High-fidelity HVAC architectural grilles, diffusers, and dampers manufactured in Ajman, UAE.
          </p>
        </div>

        {/* COL 2: QUICK DIRECTORY */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Navigation</h4>
          <div className="grid grid-cols-2 gap-2.5 text-xs font-bold text-slate-300">
            <Link href="/products/" className="hover:text-cyan-400 transition-colors">Products</Link>
            <Link href="/projects/" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="/blog/" className="hover:text-cyan-400 transition-colors">Blog</Link>
            <Link href="/request-catalogue/" className="hover:text-cyan-400 transition-colors">Catalogue</Link>
            <Link href="/about-us/" className="hover:text-cyan-400 transition-colors">About Us</Link>
            <Link href="/contact-us/" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* COL 3: FACTORY & COMPLIANCE */}
        <div className="space-y-3 text-xs text-slate-300 font-medium">
          <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Factory Hub</h4>
          <p className="text-slate-400 flex gap-2 items-start">
            <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />
            <span>Al Jurf Industrial 3, Ajman, UAE</span>
          </p>
          <p className="flex gap-2 items-center">
            <Mail size={14} className="text-cyan-400" />
            <a href="mailto:sales@alugridx.com" className="hover:text-cyan-400 transition-colors">sales@alugridx.com</a>
          </p>
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded text-[9px] font-black uppercase text-cyan-400 tracking-widest mt-1">
            <ShieldCheck size={11} />
            <span>ASHRAE Compliant</span>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT NOTE */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-bold uppercase tracking-wider gap-3 relative z-10">
        <span>© 2026 ALUGRIDX LLC. All Rights Reserved.</span>
        <span className="text-cyan-400 text-[8px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
          Manufactured in UAE
        </span>
      </div>
    </footer>
  );
}