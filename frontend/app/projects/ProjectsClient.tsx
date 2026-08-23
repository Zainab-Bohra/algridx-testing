"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Building2, ArrowRight } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Commercial Tower Air Management",
    location: "Dubai, UAE",
    category: "Commercial",
    highlights: "Architectural Diffusers & Linear Grilles",
    img: "/images/projects/commercial-tower-vents.avif"
  },
  {
    id: 2,
    title: "Industrial Complex Ventilation Hub",
    location: "Ajman, UAE",
    category: "Industrial",
    highlights: "Heavy-Duty Louvers & Volume Control Dampers",
    img: "/images/projects/industrial-dampers.avif"
  },
  {
    id: 3,
    title: "Luxury High-Rise Residence",
    location: "Abu Dhabi, UAE",
    category: "Residential",
    highlights: "Supply Air Grilles & Ceiling Outlets",
    img: "/images/projects/residential-diffusers.avif"
  },
  {
    id: 4,
    title: "Hospitality Resort Integration",
    location: "Sharjah, UAE",
    category: "Hospitality",
    highlights: "High-Capacity Linear Slot Systems",
    img: "/images/projects/hotel-slot-diffusers.avif"
  },
  {
    id: 5,
    title: "Aviation Infrastructure Terminal",
    location: "Dubai, UAE",
    category: "Commercial",
    highlights: "Jet Diffusers & Sand Trap Weather Louvers",
    img: "/images/projects/airport-jet-diffusers.avif"
  },
  {
    id: 6,
    title: "Retail Landmark Infrastructure",
    location: "Ras Al Khaimah, UAE",
    category: "Commercial",
    highlights: "High-Volume Air Distribution Arrays",
    img: "/images/projects/mall-ceiling-grilles.avif"
  }
];

const filters = ["All Projects", "Commercial", "Industrial", "Residential", "Hospitality"];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projectsData.filter((proj) => {
    return activeFilter === "All Projects" || proj.category === activeFilter;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170] font-sans">
      {/* Structural Minimal Fine Blueprint Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">

        {/* REFINED ARCHITECTURAL HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            Execution Portfolio
          </h1>
          <p className="text-slate-500 text-sm font-normal mt-2 max-w-xl leading-relaxed">
            Engineered air distribution assemblies deployed across commercial, industrial, and high-specification GCC architectural developments.
          </p>
        </div>

        {/* TOP CATEGORY FILTER CONTROL BAR */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
            {filters.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === category
                    ? "bg-[#124170] text-white shadow-sm"
                    : "text-slate-500 hover:bg-slate-50 hover:text-[#124170]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* CLEAN MINIMAL PROJECTS GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                key={project.id}
                className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Canvas */}
                  <div className="h-48 w-full overflow-hidden relative bg-slate-50 border-b border-slate-100">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if(parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 bg-gradient-to-br from-[#124170] to-[#0A2540] flex flex-col items-center justify-center p-6 text-center">
                              <span class="text-white font-extrabold text-sm uppercase tracking-tight">${project.title}</span>
                              <span class="text-[#3B82F6] font-sans text-[10px] font-bold uppercase tracking-wider mt-1">${project.category}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-white/90 backdrop-blur-md text-[#124170] font-sans font-extrabold text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-md border border-slate-100">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Minimal Content */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-slate-400 font-sans text-[11px] font-semibold uppercase tracking-wider">
                      <Building2 size={12} className="text-[#3B82F6]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#124170] uppercase tracking-tight font-sans">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-normal">
                      {project.highlights}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* DIRECT RFQ BANNER */}
        <div className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white p-8 md:p-10 rounded-3xl shadow-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
          <div className="text-center md:text-left space-y-1.5 max-w-xl">
            <span className="text-[10px] font-sans font-extrabold tracking-wider text-[#3B82F6] uppercase block">Custom Fabrication Node</span>
            <h3 className="text-xl font-bold uppercase tracking-tight">Need Project-Specific Profiles?</h3>
            <p className="text-slate-300 text-xs font-normal leading-relaxed">
              Submit your architectural schedules for custom dimensions, custom RAL color powder-coating, and rapid shop drawing approvals.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/contact-us" className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-white text-white hover:text-[#124170] font-sans text-xs font-extrabold uppercase tracking-widest px-7 py-3.5 rounded-full transition-all text-center cursor-pointer">
              <span>Submit Project Inquiry</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}