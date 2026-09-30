"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Building2, ArrowRight, ShieldCheck } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "City Centre Ajman Retail Expansion",
    location: "Al Jurf, Ajman, UAE",
    category: "Commercial",
    highlights: "High-Capacity Linear Slot Diffusers & Geometric Atrium Vents",
    img: "/images/products/city-centre-ajman.webp"
  },
  {
    id: 2,
    title: "Dubai International Financial Centre (DIFC) Offices",
    location: "Downtown Dubai, UAE",
    category: "Commercial",
    highlights: "Architectural Linear Bar Grilles & Integrated Ceiling Slots",
    img: "/images/products/difc-corporate-offices.webp"
  },
  {
    id: 3,
    title: "Ajman Corniche Fine Dining & Hospitality Lounge",
    location: "Corniche Road, Ajman, UAE",
    category: "Hospitality",
    highlights: "Exposed Duct Circular Diffusers & Architectural Disc Valves",
    img: "/images/products/ajman-corniche-restaurant.webp"
  },
  {
    id: 4,
    title: "Al Jurf Industrial Logistics & Cold Storage Complex",
    location: "Industrial Area, Ajman, UAE",
    category: "Industrial",
    highlights: "Heavy-Duty Weatherproof External Louvers & Motorized Dampers",
    img: "/images/products/al-jurf-industrial.webp"
  },
  {
    id: 5,
    title: "Luxury Waterfront Hotel & Serviced Suites",
    location: "Palm Jumeirah, Dubai, UAE",
    category: "Hospitality",
    highlights: "Concealed Cove Slot Diffusers & Architectural Ceiling Grilles",
    img: "/images/products/palm-jumeirah-hotel.webp"
  }
];

const filters = ["All Projects", "Commercial", "Industrial", "Hospitality"];

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projectsData.filter((proj) => {
    return activeFilter === "All Projects" || proj.category === activeFilter;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170] font-sans">
      {/* 🚀 CLEAN AMBIENT LIGHTING BACKGROUND (NO CHECKS / NO BOXES) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">

        {/* HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170] pt-2">
            Our <span className="font-light italic font-serif text-[#3B82F6] tracking-normal lowercase">Projects</span>
          </h1>
          <p className="text-slate-500 text-sm font-normal mt-2 max-w-xl leading-relaxed">
            Engineered air distribution assemblies deployed across commercial shopping malls, corporate office headquarters, hospitality venues, and industrial complexes in Dubai and Ajman.
          </p>
        </div>

        {/* CATEGORY FILTER BAR */}
        <div className="w-full flex justify-center md:justify-start">
          <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm">
            {filters.map((category) => (
              <button
                key={category}
                type="button"
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

        {/* PROJECTS GRID */}
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
                  {/* Image Container */}
                  <div className="h-56 w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
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
                      <span className="bg-white/95 backdrop-blur-md text-[#124170] font-sans font-extrabold text-[9px] tracking-wider uppercase px-3 py-1 rounded-full border border-slate-100 shadow-2xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-slate-400 font-sans text-[11px] font-semibold uppercase tracking-wider">
                      <Building2 size={13} className="text-[#3B82F6]" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#124170] uppercase tracking-tight font-sans leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {project.highlights}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* DIRECT RFQ BANNER */}
        <div className="bg-gradient-to-br from-[#124170] to-[#0A2540] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="text-center lg:text-left space-y-2 max-w-xl relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-extrabold tracking-widest text-[#3B82F6] uppercase">
              <ShieldCheck size={13} />
              Direct Factory Support • Ajman
            </span>
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
              Have Project-Specific Requirements?
            </h3>
            <p className="text-slate-300 text-xs md:text-sm font-normal leading-relaxed">
              Share your BOQ schedules or duct layouts with our engineering team for custom sizing, architectural finishes, and fast-track submittal packages.
            </p>
          </div>
          
          <div className="shrink-0 w-full lg:w-auto relative z-10">
            <Link 
              href="/contact-us" 
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-white text-white hover:text-[#124170] font-sans text-xs font-extrabold uppercase tracking-widest px-8 py-4 rounded-full transition-all text-center cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>Request Technical Submittal</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}