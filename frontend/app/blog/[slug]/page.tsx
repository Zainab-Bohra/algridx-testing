import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Clock, Tag, User } from "lucide-react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://algridx-testing.onrender.com";

// 🚀 GOOGLE SERP & DYNAMIC METADATA ENGINE
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return {
        title: "Article Not Found | ALUGRIDX",
        description: "The requested technical publication could not be located.",
      };
    }

    const blog = await res.json();

    const title = blog.metaTitle || `${blog.title} | ALUGRIDX`;
    const description =
      blog.metaDescription || blog.excerpt || blog.content?.substring(0, 160);
    const canonical =
      blog.canonicalUrl || `https://alugridx.com/blog/${slug}`;

    return {
      title,
      description,
      keywords: blog.tags?.length ? blog.tags : [blog.category, "HVAC", "ALUGRIDX"],
      authors: [{ name: blog.author || "ALUGRIDX" }],
      alternates: {
        canonical: canonical,
      },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "ALUGRIDX",
        type: "article",
        publishedTime: blog.createdAt,
        authors: [blog.author || "ALUGRIDX"],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch (error) {
    return {
      title: "Technical Insights | ALUGRIDX",
      description: "Air distribution and architectural HVAC solutions from ALUGRIDX.",
    };
  }
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let blog: any;

  try {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      notFound();
    }

    blog = await res.json();
  } catch (error) {
    console.error("SERVER ERROR:", error);
    throw error;
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-40 pb-24 relative text-[#124170] font-sans overflow-hidden">
      
      {/* 🚀 CLEAN AMBIENT LIGHTING BACKGROUND (NO CHECKS / NO BOXES) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

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