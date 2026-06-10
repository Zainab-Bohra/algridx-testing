"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Layers, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react";

// --- Actual B2B Project Submittal Dataset pointing to your local assets ---
const projectsData = [
  {
    id: 1,
    title: "Commercial Tower Installation",
    location: "Dubai, UAE",
    category: "Commercial",
    specs: "Supplied Architectural Ceiling Diffusers & Premium Linear Grilles",
    timeline: "Completed 2026",
    img: "/images/projects/commercial-tower-vents.avif" // Replace with actual site grille photo
  },
  {
    id: 2,
    title: "Industrial Facility Installation",
    location: "Ajman, UAE",
    category: "Industrial",
    specs: "Supplied Heavy-Duty Louvers, Volume Control Dampers (VCD), & Non-Return Dampers (NRD)",
    timeline: "Completed 2025",
    img: "/images/projects/industrial-dampers.avif" // Replace with actual factory damper photo
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
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-cyan-500 selection:text-white">
      
      {/* BRAND STRUCTURAL MESH OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-brand-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-slate-100 text-brand-blue font-black tracking-widest uppercase text-[10px] mb-4 border border-slate-200">
            Structural Footprint
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-none">
            Landmark Supply <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-500 to-blue-700">Execution Matrices</span>
          </h1>
        </div>

        {/* INTERACTIVE FILTER LATTICE */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-12 border-b border-slate-200/60 scrollbar-none">
          {filters.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                activeFilter === category
                  ? "bg-brand-navy text-cyan-400 shadow-md border-2 border-brand-navy"
                  : "bg-slate-50 text-slate-500 border-2 border-slate-200/60 hover:border-slate-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* DYNAMIC COMPACT PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                key={project.id}
                className="group bg-white border-2 border-slate-200/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-brand-blue/50 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Clean Image Frame with Clean Fallback Blueprint Design */}
                  <div className="h-44 sm:h-52 w-full overflow-hidden relative bg-[#0a192f] border-b border-slate-100 flex items-center justify-center">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        // सेफ्टी गार्ड: जब तक आप फोल्डर में इमेज नहीं डालतीं, यह एक बेहद प्रीमियम 'ALUGRIDX Blueprint' लुक दिखाएगा
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if(parent) {
                          parent.innerHTML = `<div class="absolute inset-0 bg-gradient-to-br from-[#0c223d] to-[#051122] flex flex-col items-center justify-center p-4 text-center border-b border-white/5">
                            <span class="text-cyan-400 font-black text-[11px] tracking-widest uppercase border border-cyan-400/30 px-2 py-0.5 rounded mb-2">ALUGRIDX MATRIX</span>
                            <span class="text-white font-extrabold text-sm tracking-tight">${project.title}</span>
                            <span class="text-slate-400 font-medium text-[10px] mt-1">${project.category} Submittal Chart</span>
                          </div>`;
                        }
                      }}
                    />
                    
                    {/* Floating Tech Category Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-brand-navy/90 backdrop-blur-md text-cyan-400 border border-white/10 font-black text-[9px] tracking-widest uppercase px-2.5 py-1.5 rounded-lg shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Specifications Block */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-wider mb-1">
                      <Building2 size={11} className="text-brand-blue" />
                      {project.location} • {project.timeline}
                    </div>
                    <h3 className="text-lg font-black text-brand-navy tracking-tight leading-snug group-hover:text-brand-blue transition-colors duration-300 min-h-[56px] flex items-center">
                      {project.title}
                    </h3>
                    
                    {/* Supplied Framework Box */}
                    <div className="mt-3 p-3 rounded-xl bg-slate-50 border-2 border-slate-200/50 flex gap-2.5 items-start group-hover:bg-brand-blue/[0.01] group-hover:border-brand-blue/15 transition-all duration-300">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-black text-brand-navy uppercase tracking-wider">Supply Parameters</p>
                        <p className="text-xs text-slate-500 font-medium mt-0.5 leading-relaxed line-clamp-2">{project.specs}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ENTERPRISE CAPACITY BANNER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-[#0a192f] via-[#051122] to-[#01060d] text-white p-8 rounded-2xl border-2 border-white/10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-bl-full pointer-events-none blur-xl" />
          <div className="text-left max-w-xl">
            <span className="text-xs font-black tracking-widest text-cyan-400 uppercase block mb-1">High Volume Dispatch Capacity</span>
            <h3 className="text-xl md:text-2xl font-black tracking-tight">Need Custom Dimensions for Your Framework?</h3>
            <p className="text-slate-400 text-xs font-light mt-1 leading-relaxed">Our Ajman engineering plant houses heavy-duty CNC punch lines capable of custom grid calibrations with tight-tolerance fulfillment metrics.</p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a href="/contact-us" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-blue to-cyan-500 text-white font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md hover:shadow-[0_0_35px_rgba(0,255,255,0.4)] transition-all text-center">
              <span>Submit RFQ Parameters</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}