"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Tag, Clock, Newspaper, Layers, Loader2, ChevronLeft, ChevronRight } from "lucide-react";

// 🚀 FIXED: Hardcoded fallback direct targeting to bypass any Next.js local environment variables caching glitch
const API_URL = "http://localhost:5000";

function GeometricLoader() {
  return (
    <div className="text-center py-32 flex flex-col items-center justify-center gap-4">
      <div className="relative w-14 h-14 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-xl border-4 border-t-[#3B82F6] border-r-transparent border-b-[#124170] border-l-transparent shadow-md"
        />
        <Loader2 size={20} className="animate-spin text-[#124170]" />
      </div>
      <span className="font-sans text-xs font-extrabold uppercase tracking-widest text-[#124170] mt-2 animate-pulse">
        Loading...
      </span>
    </div>
  );
}

export default function BlogClient() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const cleanBaseUrl = API_URL.endsWith("/") ? API_URL.slice(0, -1) : API_URL;
        
        // 🚨 Debug Tracer: Browser console mein verify karne ke liye exact URL trace print hoga
        console.log("📡 Frontend runtime now triggering active fetch to URL:", `${cleanBaseUrl}/api/blogs`);

        const res = await fetch(`${cleanBaseUrl}/api/blogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs (${res.status})`);
        }

        const data = await res.json();
        console.log("✅ Successfully received array objects payload count:", data.length);
        setBlogs(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("❌ Failed to fetch dynamic blogs from Cluster0:", error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery]);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category || "Engineering"))];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = activeTab === "All" || blog.category === activeTab;
    const matchesSearch =
      blog.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentDisplayedBlogs = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 250, behavior: "smooth" });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170] font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12">
        
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170]">
            Blogs
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-3 rounded-2xl border border-slate-100 shadow-[0_10px_30px_rgba(10,37,64,0.03)]">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 px-1">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs font-sans font-extrabold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#124170] text-white shadow-md scale-[1.02]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-[#124170]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-85">
            <input
              type="text"
              placeholder="Search specifications documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50/60 border border-slate-100 rounded-xl pl-11 pr-4 py-3 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner"
            />
            <Search size={14} className="absolute left-4 top-3.5 text-slate-400" />
          </div>
        </div>

        {loading && <GeometricLoader />}

        {!loading && (
          <>
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              <AnimatePresence mode="popLayout">
                {currentDisplayedBlogs.map((blog) => (
                  <motion.article
                    key={blog._id}
                    layout
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0px 35px 60px rgba(10, 37, 64, 0.12)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="group bg-white border border-slate-100 rounded-[2.5rem] rounded-tr-[4.5rem] p-8 flex flex-col justify-between h-[390px] cursor-pointer relative overflow-hidden z-10 transition-colors duration-300 hover:bg-[#0A2540]"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(rgba(18,65,112,0.03)_1px,transparent_1px)] group-hover:bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:10px_10px] rounded-tr-[4.5rem] pointer-events-none transition-colors" />
                    <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-transparent group-hover:bg-[#3B82F6] transition-colors duration-300" />
                    
                    <div className="space-y-5 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[9px] font-sans font-extrabold bg-[#3B82F6]/5 text-[#3B82F6] group-hover:bg-white/10 group-hover:text-[#60A5FA] border border-[#3B82F6]/10 group-hover:border-white/10 shadow-sm transition-colors uppercase tracking-wider">
                          <Tag size={10} />
                          {blog.category || "Engineering"}
                        </span>
                        
                        <div className="flex items-center gap-1.5 text-slate-400 group-hover:text-slate-400/80 font-sans text-[10px] font-bold uppercase tracking-wide transition-colors">
                          <Clock size={11} className="text-[#3B82F6]" />
                          <span>{blog.readTime || "4 Min Read"}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#124170]/20 group-hover:bg-[#3B82F6] transition-colors" />
                          <span className="text-[10px] font-sans text-slate-400 group-hover:text-slate-400/70 uppercase tracking-widest font-bold block transition-colors">
                            {new Date(blog.createdAt || Date.now()).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-black text-[#124170] group-hover:text-white uppercase tracking-tight leading-[1.25] transition-colors line-clamp-2 font-sans pt-0.5">
                          {blog.title}
                        </h2>
                        
                        <p className="text-slate-500 group-hover:text-slate-300 font-normal text-xs leading-relaxed line-clamp-3 pt-1 transition-colors">
                          {blog.excerpt || blog.content?.substring(0, 140)}...
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 group-hover:border-white/10 flex items-center justify-between text-xs font-sans uppercase tracking-wider font-bold relative z-10 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Layers size={11} className="text-slate-300 group-hover:text-slate-500 transition-colors" />
                        <span className="text-slate-400 group-hover:text-slate-400/60 text-[10px] font-semibold transition-colors">Desk: {blog.author || "AX-DESK"}</span>
                      </div>
                      <Link href={`/blog/${blog.slug || blog._id}`} className="text-[#124170] group-hover:text-[#60A5FA] flex items-center gap-1 transition-colors relative block">
                        <span className="text-[11px] tracking-tight">Read more</span>
                        <ArrowRight size={13} className="transform transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-12">
                <button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#124170] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#124170] hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-10 h-10 rounded-xl text-xs font-extrabold transition-all cursor-pointer shadow-sm ${
                      currentPage === pageNumber
                        ? "bg-[#124170] text-white scale-105"
                        : "bg-white border border-slate-200 text-[#124170] hover:bg-slate-50"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="w-10 h-10 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-[#124170] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#124170] hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.01)] space-y-3">
            <Newspaper className="mx-auto text-slate-300" size={36} />
            <p className="text-xs font-sans font-bold uppercase tracking-wider text-slate-400">No correlating logs registered inside archives</p>
          </div>
        )}
      </div>
    </div>
  );
}