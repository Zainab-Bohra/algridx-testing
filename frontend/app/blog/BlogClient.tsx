"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  Tag,
  Clock,
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function BlogClient() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/blogs`
        );

        const data = await res.json();

        setBlogs(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categories = [
    "All",
    ...new Set(
      blogs.map((blog) => blog.category)
    ),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      activeTab === "All" ||
      blog.category === activeTab;

    const matchesSearch =
      blog.title
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      blog.excerpt
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#061224] pt-28 pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_left,rgba(37,99,235,0.15),transparent_30%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HERO */}
        <section className="rounded-[36px] bg-gradient-to-br from-[#0a192f] via-[#102a4c] to-[#061224] border border-white/10 p-8 md:p-14 mb-12 shadow-2xl">
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-black uppercase tracking-widest mb-6">
            ALUGRIDX BLOG
          </span>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
            HVAC Insights &
            <br />
            Engineering Guides
          </h1>

          <p className="text-slate-300 mt-6 text-lg max-w-2xl leading-relaxed">
            Technical articles, engineering
            knowledge and HVAC manufacturing
            insights from ALUGRIDX UAE.
          </p>
        </section>

        {/* BLOG CONTAINER */}
        <div className="bg-white rounded-[32px] p-6 md:p-8 shadow-xl">
          {/* FILTERS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <div className="flex items-center gap-2 overflow-x-auto">
              {categories.map((tab) => (
                <button
                  key={tab}
                  onClick={() =>
                    setActiveTab(tab)
                  }
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all whitespace-nowrap ${
                    activeTab === tab
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-slate-50 text-slate-500 border-slate-200 hover:border-cyan-500 hover:text-cyan-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(
                    e.target.value
                  )
                }
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-500"
              />

              <Search
                size={17}
                className="absolute left-4 top-3.5 text-slate-400"
              />
            </div>
          </div>

          {/* LOADING */}
          {loading && (
            <div className="text-center py-20">
              <p className="text-slate-500 font-medium">
                Loading blogs...
              </p>
            </div>
          )}

          {/* BLOG GRID */}
          {!loading && (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredBlogs.map(
                  (blog, index) => (
                    <motion.article
                      key={blog._id}
                      layout
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          index * 0.05,
                      }}
                      className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                    >
                      <div className="p-6">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-[10px] font-black uppercase tracking-widest">
                          <Tag size={11} />
                          {blog.category}
                        </span>

                        <div className="flex items-center gap-3 text-slate-400 text-xs font-bold mt-4">
                          <span>
                            {new Date(
                              blog.createdAt
                            ).toLocaleDateString(
                              "en-US",
                              {
                                month:
                                  "long",
                                year: "numeric",
                              }
                            )}
                          </span>

                          <span className="w-1 h-1 bg-slate-300 rounded-full" />

                          <span className="flex items-center gap-1">
                            <Clock
                              size={12}
                            />
                            {blog.readTime ||
                              "5 min read"}
                          </span>
                        </div>

                        <h2 className="text-xl font-black text-slate-900 leading-snug mt-4 group-hover:text-cyan-600 transition-colors">
                          {blog.title}
                        </h2>

                        <p className="text-slate-500 text-sm mt-3 leading-relaxed line-clamp-3">
                          {blog.excerpt}
                        </p>

                        <Link
                          href={`/blog/${blog.slug}`}
                          className="inline-flex items-center gap-2 mt-6 text-xs font-black uppercase tracking-widest text-cyan-600 hover:text-cyan-500"
                        >
                          Read More

                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>
                    </motion.article>
                  )
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* EMPTY STATE */}
          {!loading &&
            filteredBlogs.length === 0 && (
              <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <p className="text-slate-400 font-bold text-sm">
                  No blogs found.
                </p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}