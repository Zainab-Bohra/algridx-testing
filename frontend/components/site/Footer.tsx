"use client";
import Link from "next/link";
import { Mail, MapPin, ShieldCheck, ArrowRight, Award, Compass } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-12 relative z-20 border-t border-[#3B82F6]/20 font-sans">
      
      {/* Structural matrix blueprint architectural grid overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: Logo Frame & Corporate Parameter Badge Cluster */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          
          {/* Asymmetric Luxury Mount Box for AlugridX Identity Mark */}
          <div className="shrink-0 bg-white/[0.03] p-5 rounded-2xl rounded-tr-[3.5rem] border border-white/10 shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)] group transition-all duration-300 hover:bg-white/[0.07] hover:border-[#3B82F6]/40 cursor-pointer">
            <Link href="/" className="inline-block">
              <img 
                src="/images/alugridx-without-bg-1.webp" 
                alt="ALUGRIDX Corporate Identity" 
                className="h-16 w-auto object-contain brightness-110 transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </Link>
          </div>

          {/* Core Description Text Block */}
          <div className="space-y-3 flex-1">
            <p className="text-sm font-normal text-slate-300 tracking-tight leading-relaxed max-w-sm">
              Engineering the future of micro-climates with <span className="text-[#60A5FA] font-semibold">absolute localized</span> manufacturing supremacy across the Middle Eastern infrastructures.
            </p>
            <div className="inline-flex items-center gap-2.5 bg-[#3B82F6]/5 border border-[#3B82F6]/20 px-4 py-1.5 rounded-xl text-[10px] font-extrabold uppercase tracking-wider text-[#60A5FA] shadow-sm">
              <ShieldCheck size={12} className="text-[#3B82F6]" />
              <span>ASHRAE Certified Calibration</span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Symmetric Corporate Navigation System Nodes */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:pl-8">
          
          {/* Sub-Col 1: Operational Component Directory */}
          <div className="space-y-4">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#60A5FA] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" /> Quick Directory
            </p>
            <ul className="space-y-3 text-xs font-semibold">
              {[
                { name: "Explore Components", href: "/products" },
                { name: "Project Portfolio", href: "/projects" },
                { name: "Technical Catalogues", href: "/request-catalogue" },
                { name: "Company Roots", href: "/about-us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="text-slate-300 hover:text-white transition-colors flex items-center gap-1 group w-fit tracking-wide"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#3B82F6]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-Col 2: Technical Logistics & Factory Coordinates */}
          <div className="space-y-4 text-xs">
            <p className="text-[11px] font-black uppercase tracking-widest text-[#60A5FA] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" /> Factory Desk
            </p>
            <div className="space-y-4 text-slate-300 font-medium tracking-wide">
              <div className="flex gap-3 items-start group cursor-pointer">
                <MapPin size={14} className="text-[#3B82F6] shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                <p className="leading-relaxed group-hover:text-white transition-colors">
                  Al Jurf Industrial 3,<br />
                  Ajman, UAE
                </p>
              </div>
              <div className="flex gap-3 items-center group">
                <Mail size={14} className="text-[#3B82F6] shrink-0 transition-transform duration-300 group-hover:rotate-6" />
                <a href="mailto:sales@alugridx.com" className="hover:text-white transition-colors font-sans">
                  sales@alugridx.com
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM: Ultra-Thin Boundary Frame Matrix with Clean Metatags */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[10px] font-sans text-slate-400 font-bold uppercase tracking-wider gap-4 relative z-10">
        <span className="text-slate-400/80">© 2026 ALUGRIDX LLC. All Rights Reserved.</span>
        <div className="flex items-center gap-5">
          <span className="text-[#3B82F6] font-black inline-flex items-center gap-1.5 bg-[#3B82F6]/5 px-3 py-1 rounded-lg border border-[#3B82F6]/10">
            <Award size={12} /> Industrial Stream
          </span>
          <span className="text-slate-500 font-medium">Fulfillment across GCC</span>
        </div>
      </div>
    </footer>
  );
}