"use client";

import { useState } from "react";
import { 
  Send, 
  CheckCircle, 
  Clock, 
  Tag, 
  Heading, 
  Key, 
  ArrowUpRight, 
  Monitor, 
  Terminal, 
  Search, 
  Globe, 
  AlertCircle,
  X,
  Link2,
  Sliders
} from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export default function BlogAdmin() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    readTime: "5 min read",
    // 🚀 ADVANCED SEO FIELDS
    metaTitle: "",
    metaDescription: "",
    focusKeyword: "",
    tags: [] as string[],
    canonicalUrl: "",
  });

  const [tagInput, setTagInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Auto-generate slug from title
  const handleTitleChange = (val: string) => {
    setForm(prev => {
      const updated = { ...prev, title: val };
      if (!prev.slug) {
        updated.slug = val
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/[\s_-]+/g, "-")
          .replace(/^-+|-+$/g, "");
      }
      return updated;
    });
  };

  // Tags Handler (Enter or comma press)
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const cleanTag = tagInput.replace(",", "").trim();
      if (!form.tags.includes(cleanTag)) {
        setForm(prev => ({ ...prev, tags: [...prev.tags, cleanTag] }));
      }
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setForm(prev => ({
      ...prev,
      tags: prev.tags.filter(t => t !== tagToRemove)
    }));
  };

  // Submit Handler
  const submitBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/blogs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          metaTitle: form.metaTitle || `${form.title} | ALUGRIDX`,
          metaDescription: form.metaDescription || form.excerpt,
          canonicalUrl: form.canonicalUrl || `https://alugridx.com/blog/${form.slug}`,
        }),
      });

      if (res.ok) {
        setIsSubmitted(true);
        setForm({
          title: "",
          slug: "",
          category: "",
          excerpt: "",
          content: "",
          readTime: "5 min read",
          metaTitle: "",
          metaDescription: "",
          focusKeyword: "",
          tags: [],
          canonicalUrl: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const data = await res.json();
        setErrorMsg(data.message || data.error || "Failed to commit document node");
      }
    } catch (err) {
      console.error("Transmission crash:", err);
      setErrorMsg("Network transmission failure: Check API server connection");
    } finally {
      setLoading(false);
    }
  };

  // Live SEO Helpers
  const titleLen = form.metaTitle.length || form.title.length;
  const descLen = form.metaDescription.length || form.excerpt.length;

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 relative overflow-hidden text-[#124170] font-sans">
      
      {/* AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[40%] -right-32 w-[600px] h-[600px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-10">
        
        {/* DASHBOARD HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#124170]/10 pb-6 gap-4">
          <div className="space-y-1">
            <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#3B82F6]/10 font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#3B82F6] border border-[#3B82F6]/20">
              <Terminal size={11} />
              Publishing & SEO Pipeline Core
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0A2540]">
              Editorial & SEO Console
            </h1>
          </div>
          <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider max-w-sm md:text-right leading-relaxed">
            // Injecting architectural specifications, engineering documentation, and SERP parameters.
          </p>
        </div>

        {/* WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* FORM CONSOLE (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <form onSubmit={submitBlog} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 1. TITLE */}
              <div className="md:col-span-2 bg-white border-2 border-slate-200 p-6 rounded-[2rem] shadow-sm transition-all duration-200 hover:border-[#0A2540]">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "title" ? "text-[#3B82F6]" : "text-slate-400"}`}>
                  Document Header / Article Title *
                </label>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    required 
                    value={form.title} 
                    onFocus={() => setFocusedField("title")} 
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-sm font-sans text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors font-black uppercase placeholder-slate-300" 
                    placeholder="e.g., Guide to Acoustic Ratings in Linear Slot Diffusers"
                  />
                  <Heading size={14} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
              </div>

              {/* 2. SLUG */}
              <div className="bg-white border-2 border-slate-200 p-6 rounded-[2rem] shadow-sm transition-all duration-200 hover:border-[#0A2540]">
                <div className="flex justify-between items-center">
                  <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "slug" ? "text-[#3B82F6]" : "text-slate-400"}`}>
                    URL Slug Reference *
                  </label>
                  <span className="text-[9px] font-mono text-emerald-600 font-bold uppercase">SEO Critical</span>
                </div>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    required 
                    value={form.slug} 
                    onFocus={() => setFocusedField("slug")} 
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, slug: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors placeholder-slate-300" 
                    placeholder="linear-slot-diffusers-acoustic-ratings"
                  />
                  <Key size={13} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
              </div>

              {/* 3. CATEGORY */}
              <div className="bg-white border-2 border-slate-200 p-6 rounded-[2rem] shadow-sm transition-all duration-200 hover:border-[#0A2540]">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "category" ? "text-[#3B82F6]" : "text-slate-400"}`}>
                  Category / Classification *
                </label>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    required 
                    value={form.category} 
                    onFocus={() => setFocusedField("category")} 
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-sans font-bold text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors placeholder-slate-300 uppercase" 
                    placeholder="HVAC Engineering / Diffusers"
                  />
                  <Tag size={13} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
              </div>

              {/* 4. READ TIME */}
              <div className="md:col-span-2 bg-white border-2 border-slate-200 p-6 rounded-[2rem] shadow-sm transition-all duration-200 hover:border-[#0A2540]">
                <label className={`text-[9px] font-mono font-bold uppercase tracking-wider block transition-colors ${focusedField === "readTime" ? "text-[#3B82F6]" : "text-slate-400"}`}>
                  Estimated Read Time
                </label>
                <div className="relative mt-2">
                  <input 
                    type="text" 
                    value={form.readTime} 
                    onFocus={() => setFocusedField("readTime")} 
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-slate-100 pl-8 py-2 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6] transition-colors" 
                    placeholder="4 min read"
                  />
                  <Clock size={13} className="absolute left-0 top-2.5 text-slate-400" />
                </div>
              </div>

              {/* 5. EXCERPT */}
              <div className="md:col-span-2 bg-white border-2 border-slate-200 p-6 rounded-[2rem] shadow-sm space-y-2">
                <label className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Abstract Summary Excerpt *
                </label>
                <textarea 
                  rows={2} 
                  required 
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3 text-xs text-slate-700 focus:outline-none focus:border-[#3B82F6] resize-none leading-relaxed" 
                  placeholder="Provide a condensed 2-sentence summary for post cards and schema markup..."
                />
              </div>

              {/* 6. GOOGLE SEO & METADATA CONFIGURATION ENGINE */}
              <div className="md:col-span-2 bg-white border-2 border-[#3B82F6]/30 p-7 rounded-[2.2rem] shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#3B82F6]">
                    <Search size={13} />
                    Google Search Metadata Engine (Yoast Equivalent)
                  </span>
                  <span className="text-[9px] font-mono text-slate-400 font-bold">ALUGRIDX SEO SUITE</span>
                </div>

                {/* Focus Keyword */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono uppercase text-slate-500 font-bold block">
                    Target Focus Keyword
                  </label>
                  <input
                    type="text"
                    value={form.focusKeyword}
                    onChange={(e) => setForm({ ...form, focusKeyword: e.target.value })}
                    placeholder="e.g., linear slot diffusers, HVAC louvers UAE"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>

                {/* SEO Meta Title */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-mono uppercase text-slate-500 font-bold block">
                      Google SERP Meta Title
                    </label>
                    <span className={`text-[9px] font-mono font-bold ${titleLen >= 50 && titleLen <= 60 ? "text-emerald-600" : "text-amber-500"}`}>
                      {titleLen}/60 chars (Recommended: 50-60)
                    </span>
                  </div>
                  <input
                    type="text"
                    value={form.metaTitle}
                    onChange={(e) => setForm({ ...form, metaTitle: e.target.value })}
                    placeholder={form.title ? `${form.title} | ALUGRIDX` : "e.g., Precision Linear Slot Diffusers Dubai | ALUGRIDX"}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-sans font-semibold text-[#0A2540] focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>

                {/* SEO Meta Description */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-mono uppercase text-slate-500 font-bold block">
                      Google SERP Meta Description
                    </label>
                    <span className={`text-[9px] font-mono font-bold ${descLen >= 140 && descLen <= 160 ? "text-emerald-600" : "text-amber-500"}`}>
                      {descLen}/160 chars (Recommended: 140-160)
                    </span>
                  </div>
                  <textarea
                    rows={3}
                    value={form.metaDescription}
                    onChange={(e) => setForm({ ...form, metaDescription: e.target.value })}
                    placeholder={form.excerpt || "High-precision architectural air terminals manufactured in UAE. Learn acoustic specifications..."}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-700 focus:outline-none focus:border-[#3B82F6] leading-relaxed"
                  />
                </div>

                {/* SEO TAGS PILLS GENERATOR */}
                <div className="space-y-2">
                  <label className="text-[9px] font-mono uppercase text-slate-500 font-bold block">
                    Article Tags (Press Enter or Comma to add)
                  </label>
                  <div className="flex flex-wrap gap-2 items-center min-h-[42px] p-2 bg-slate-50 border border-slate-200 rounded-xl">
                    {form.tags.map((tag, i) => (
                      <span key={i} className="bg-white border border-slate-200 text-[#0A2540] text-[11px] font-mono font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-2xs">
                        <span>{tag}</span>
                        <button type="button" onClick={() => removeTag(tag)} className="text-slate-400 hover:text-red-500">
                          <X size={12} />
                        </button>
                      </span>
                    ))}
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder={form.tags.length === 0 ? "Type tag & press enter (e.g. diffusers, acoustic)..." : ""}
                      className="bg-transparent text-xs font-mono outline-none flex-1 min-w-[120px] px-1 text-[#0A2540]"
                    />
                  </div>
                </div>

                {/* CANONICAL URL */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-mono uppercase text-slate-500 font-bold flex items-center gap-1">
                      <Link2 size={11} /> Canonical URL (Avoid duplicate content penalty)
                    </label>
                  </div>
                  <input
                    type="text"
                    value={form.canonicalUrl}
                    onChange={(e) => setForm({ ...form, canonicalUrl: e.target.value })}
                    placeholder={`https://alugridx.com/blog/${form.slug || "your-slug"}`}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-mono text-[#0A2540] focus:outline-none focus:border-[#3B82F6]"
                  />
                </div>

              </div>

              {/* 7. CORE CONTENT */}
              <div className="md:col-span-2 bg-white border-2 border-slate-200 p-6 rounded-[2rem] shadow-sm space-y-2">
                <label className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Core Article Content (Markdown or Text) *
                </label>
                <textarea 
                  rows={12} 
                  required 
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs font-mono text-slate-700 focus:outline-none focus:border-[#3B82F6] resize-none leading-relaxed" 
                  placeholder="Paste article body here..."
                />
              </div>

              {/* ALERTS */}
              {errorMsg && (
                <div className="md:col-span-2 bg-red-50 border-2 border-red-200 rounded-2xl p-4 flex items-center gap-3 text-red-600 text-xs font-mono font-bold uppercase">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {isSubmitted && (
                <div className="md:col-span-2 bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 flex items-center gap-3 text-emerald-800 text-xs font-mono font-bold uppercase shadow-sm">
                  <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                  <span>[ Secure Status: Article & Full SEO Suite Saved Successfully ]</span>
                </div>
              )}

              {/* SUBMISSION BUTTON */}
              <div className="md:col-span-2 pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-200 mt-2">
                <p className="text-[10px] text-slate-400 font-mono font-medium max-w-xs leading-normal">
                  All SEO metadata and structured tags will be automatically synchronized with Google Search Console index.
                </p>
                <button 
                  type="submit"
                  disabled={loading}
                  className="group bg-[#0A2540] hover:bg-[#2563EB] text-white px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 flex items-center gap-2 shadow-md w-full sm:w-auto justify-center cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  <span>{loading ? "Transmitting..." : "Deploy Publication Node"}</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>

            </form>
          </div>

          {/* STICKY LIVE SIMULATION (5 Cols) */}
          <div className="lg:col-span-5 sticky top-32 space-y-6">
            
            {/* GOOGLE SERP PREVIEW BOX */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-1">
                <Globe size={13} className="text-[#3B82F6]" />
                <span>Google Search (SERP) Live Snippet</span>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-[2rem] p-6 shadow-sm space-y-2 font-sans">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-[#0A2540]">
                    A
                  </div>
                  <div className="text-[11px] leading-tight text-slate-500">
                    <span className="block font-semibold text-slate-700">alugridx.com</span>
                    <span className="text-[10px] truncate max-w-[280px] block">
                      https://alugridx.com/blog/{form.slug || "url-slug"}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-semibold text-[#1a0dab] hover:underline cursor-pointer leading-snug line-clamp-2">
                  {form.metaTitle || (form.title ? `${form.title} | ALUGRIDX` : "Enter Document Header to Preview Search Title")}
                </h3>

                <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-2">
                  <span className="text-slate-400 font-mono text-[10px] mr-1">
                    {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} —
                  </span>
                  {form.metaDescription || form.excerpt || "Enter meta description to preview how this appears on Google SERP..."}
                </p>

                {form.tags.length > 0 && (
                  <div className="pt-2 flex flex-wrap gap-1 border-t border-slate-100 mt-2">
                    {form.tags.map((t, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* EDITORIAL CARD PREVIEW */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-1">
                <Monitor size={14} className="text-[#3B82F6]" />
                <span>Website Editorial Card Preview</span>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-[2rem] p-7 flex flex-col justify-between h-[370px] relative overflow-hidden shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[9px] font-mono font-bold bg-slate-100 text-[#0A2540] uppercase tracking-wider border border-slate-200">
                      <Tag size={10} className="text-[#3B82F6]" />
                      {form.category || "CLASSIFICATION"}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 font-mono text-[10px] font-bold uppercase">
                      <Clock size={11} className="text-[#3B82F6]" />
                      <span>{form.readTime || "5 min read"}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest font-bold block">
                      {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                    </span>
                    <h2 className="text-lg font-black text-[#0A2540] uppercase tracking-tight leading-snug line-clamp-2">
                      {form.title || "AWAITING EDITORIAL TITLE..."}
                    </h2>
                    <p className="text-slate-500 font-normal text-xs leading-relaxed line-clamp-3">
                      {form.excerpt || "The abstract structural documentation excerpt node will automatically render here as you type..."}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-slate-400">
                  <span>Author: ALUGRIDX</span>
                  <span className="text-[#3B82F6] flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}