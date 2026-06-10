import { notFound } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const res = await fetch(
    `${API_URL}/api/blogs/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const blog = await res.json();

  return (
    <div className="min-h-screen bg-slate-100">

      {/* HERO */}
      <section className="pt-44 pb-40 bg-gradient-to-br from-[#061224] via-[#0b1f3d] to-[#102a4c] relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">

          <div className="flex flex-wrap items-center gap-3 mb-8">

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold uppercase tracking-widest">
              {blog.category}
            </span>

            <span className="text-slate-400">•</span>

            <span className="text-slate-300 text-sm">
              {blog.readTime}
            </span>

            <span className="text-slate-400">•</span>

            <span className="text-slate-300 text-sm">
              ALUGRIDX
            </span>

          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight max-w-5xl">
            {blog.title}
          </h1>

        </div>
      </section>

      {/* ARTICLE */}
      <section className="-mt-28 pb-24 relative z-20">

        <div className="max-w-4xl mx-auto px-6">

          <article className="bg-white rounded-[36px] shadow-[0_25px_80px_rgba(0,0,0,0.12)] p-8 md:p-16 border border-slate-100">

            <div className="text-slate-700 text-lg leading-10 whitespace-pre-line">

              {blog.content}

            </div>

          </article>

        </div>

      </section>

    </div>
  );
}