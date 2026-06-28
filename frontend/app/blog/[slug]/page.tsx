import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, User } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  const blog = await res.json();

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-40 pb-24 relative text-[#124170] font-sans overflow-hidden">
      {/* Fine-lined corporate spatial grid layout overlay lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* PREMIUM CAPSULE BACK TRIGGER BUTTON */}
        <div className="mb-10 flex justify-start">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-wider text-[#124170] bg-white border border-slate-100 hover:border-[#3B82F6]/30 px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(10,37,64,0.04)] hover:shadow-[0_10px_25px_rgba(59,130,246,0.15)] transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform text-[#3B82F6]" />
            <span>Return to Articles</span>
          </Link>
        </div>

        {/* COMPREHENSIVE INDUSTRIAL DATA SHEET CONTAINER */}
        <article className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_30px_70px_rgba(10,37,64,0.04)] overflow-hidden">
          
          {/* HEADER METADATA CORE PACK ROW */}
          <div className="p-8 md:p-14 bg-slate-50/60 border-b border-slate-100 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-sans font-extrabold bg-[#3B82F6]/5 text-[#3B82F6] rounded-lg border border-[#3B82F6]/10 uppercase tracking-wider shadow-sm">
                <Tag size={10} /> {blog.category || "HVAC Tech"}
              </span>
              <span className="text-slate-200 font-normal">•</span>
              <div className="flex items-center gap-1.5 text-slate-400 font-sans text-[11px] font-bold uppercase tracking-wide">
                <Clock size={12} className="text-[#3B82F6]" />
                <span>{blog.readTime || "5 Min Read"}</span>
              </div>
              <span className="text-slate-200 font-normal">•</span>
              <div className="flex items-center gap-1.5 text-slate-400 font-sans text-[11px] font-bold uppercase tracking-wide">
                <User size={12} className="text-[#3B82F6]" />
                <span>By {blog.author || "ALUGRIDX"}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black uppercase text-[#124170] tracking-tight leading-[1.12] font-sans pt-1">
              {blog.title}
            </h1>
          </div>

          {/* MAIN TECHNICAL TEXT DATA WORKSPACE */}
          <div className="p-8 md:p-16 text-slate-500 font-normal text-sm md:text-base leading-relaxed whitespace-pre-line tracking-wide selection:bg-[#124170] selection:text-white font-sans">
            {blog.content}
          </div>

        </article>

      </div>
    </div>
  );
}