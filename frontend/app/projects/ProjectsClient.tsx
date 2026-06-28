"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link"; // <-- FIXED: यहाँ Link इम्पोर्ट जोड़ दिया गया है
import { Building2, CheckCircle2, ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Commercial Tower Installation",
    location: "Dubai, UAE",
    category: "Commercial",
    specs: "Supplied Architectural Ceiling Diffusers & Premium Linear Grilles",
    timeline: "Completed 2026",
    img: "/images/projects/commercial-tower-vents.avif"
  },
  {
    id: 2,
    title: "Industrial Facility Installation",
    location: "Ajman, UAE",
    category: "Industrial",
    specs: "Supplied Heavy-Duty Louvers, Volume Control Dampers (VCD), & Non-Return Dampers (NRD)",
    timeline: "Completed 2025",
    img: "/images/projects/industrial-dampers.avif"
  },
  {
    id: 3,
    title: "Luxury Residential Tower",
    location: "Abu Dhabi, UAE",
    category: "Residential",
    specs: "Supplied Premium Ceiling Diffusers & Directional Supply Air Grilles",
    timeline: "Completed 2025",
    img: "/images/projects/residential-diffusers.avif"
  },
  {
    id: 4,
    title: "5-Star Hospitality Project",
    location: "Sharjah, UAE",
    category: "Hospitality",
    specs: "Supplied High-Capacity Architectural Linear Slot Diffusers",
    timeline: "Completed 2025",
    img: "/images/projects/hotel-slot-diffusers.avif"
  },
  {
    id: 5,
    title: "Airport Expansion Project",
    location: "Dubai, UAE",
    category: "Commercial",
    specs: "Supplied High-Velocity Jet Diffusers & Heavy-Duty Weather Louvers",
    timeline: "Completed 2024",
    img: "/images/projects/airport-jet-diffusers.avif"
  },
  {
    id: 6,
    title: "Shopping Mall Installation",
    location: "Ras Al Khaimah, UAE",
    category: "Commercial",
    specs: "Supplied High-Volume Ceiling Diffusers & Exhaust Air Grilles",
    timeline: "Completed 2024",
    img: "/images/projects/mall-ceiling-grilles.avif"
  },
  {
    id: 7,
    title: "Industrial Park Installation",
    location: "Fujairah, UAE",
    category: "Industrial",
    specs: "Supplied Specialized High-Efficiency Sand Trap Louvers & Volume Control Dampers (VCD)",
    timeline: "Completed 2024",
    img: "/images/projects/fujairah-sand-trap.avif"
  }
];

const filters = ["All Grid Nodes", "Commercial", "Industrial", "Residential", "Hospitality"];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All Grid Nodes");

  const filteredProjects = projectsData.filter((proj) => {
    return activeFilter === "All Grid Nodes" || proj.category === activeFilter;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170] font-sans">
      {/* Structural Minimal Fine Blueprint Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        {/* REFINED ARCHITECTURAL HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            Execution Portfolio
          </h1>
          <p className="text-slate-500 text-base font-normal mt-2 max-w-2xl">
            Review engineering landmarks across premium commercial nodes, healthcare frameworks, and mega-scale GCC infrastructure hubs.
          </p>
        </div>

        {/* TOP CATEGORY FILTER CONTROL BAR */}
        <div className="w-full flex justify-center md:justify-start pb-4">
          <div className="flex flex-wrap gap-2.5 bg-white p-2 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(10,37,64,0.03)]">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-xl text-xs font-sans font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === category
                    ? "bg-[#124170] text-white shadow-md scale-[1.03]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-[#124170]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* HIGH-END 3D PROJECTS PORTFOLIO GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0px 30px 60px rgba(59, 130, 246, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 180, damping: 20 }}
                key={project.id}
                className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-[0_15px_35px_rgba(10,37,64,0.03)] transition-colors duration-300 flex flex-col justify-between relative z-10 hover:bg-[#0A2540]"
              >
                <div>
                  {/* Image Framework Canvas */}
                  <div className="h-56 w-full overflow-hidden relative bg-slate-50 border-b border-slate-100 flex items-center justify-center">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if(parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 bg-gradient-to-br from-[#124170] to-[#0A2540] flex flex-col items-center justify-center p-6 text-center">
                              <span class="text-white font-extrabold text-base uppercase tracking-tight leading-tight">${project.title}</span>
                              <span class="text-[#3B82F6] font-sans text-[10px] font-bold uppercase tracking-wider mt-2">${project.category} Framework</span>
                            </div>
                          `;
                        }
                      }}
                    />
                    
                    {/* Floating Corporate Badge System */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/95 backdrop-blur-md text-[#124170] font-sans font-extrabold text-[9px] tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-md border border-slate-100">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details Panel */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-400/80 font-sans text-[11px] font-semibold uppercase tracking-wider transition-colors">
                      <Building2 size={13} className="text-[#3B82F6]" />
                      <span>{project.location} • {project.timeline}</span>
                    </div>

                    <h3 className="text-xl font-black text-[#124170] group-hover:text-white uppercase tracking-tight leading-tight transition-colors line-clamp-2 min-h-[48px] font-sans">
                      {project.title}
                    </h3>
                    
                    {/* Technical Parameter Parameters Box */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100/80 flex gap-3.5 items-start group-hover:bg-white/5 group-hover:border-white/10 transition-all duration-300">
                      <CheckCircle2 size={16} className="text-[#3B82F6] shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-[10px] font-sans font-extrabold text-[#3B82F6] uppercase tracking-wider">Supply Specifications</p>
                        <p className="text-xs text-slate-500 group-hover:text-slate-300 font-normal leading-relaxed line-clamp-2 transition-colors">{project.specs}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ULTRA-PREMIUM SUBMITTAL BANNER CONSOLE */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white p-8 md:p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(10,37,64,0.15)] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/5"
        >
          {/* Internal Geometric Dot Pattern Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:14px_14px] pointer-events-none" />

          <div className="text-center lg:text-left space-y-2 max-w-xl relative z-10">
            <span className="text-[10px] font-sans font-extrabold tracking-wider text-[#3B82F6] uppercase block">High-Capacity Factory Node</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">Need Custom Grid Calibrations?</h3>
            <p className="text-slate-300 text-xs font-normal leading-relaxed">
              Our Ajman plant operates automated CNC punch lines to fabricate customized sizes straight from your structural AutoCAD blueprints with tight-tolerance fulfillment metrics.
            </p>
          </div>
          <div className="shrink-0 w-full lg:w-auto relative z-10">
            <Link href="/contact-us" className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-white text-white hover:text-[#124170] font-sans text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all text-center cursor-pointer">
              <span>Submit RFQ Parameters</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}