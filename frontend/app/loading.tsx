export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0a1128] flex items-center justify-center overflow-hidden z-[9999]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-200/20 via-cyan-900/40 to-slate-200/20" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center">

        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-cyan-500/20 rounded-full scale-150" />

          <img
            src="/logo.png"
            alt="ALUGRIDX"
            className="w-28 h-28 object-contain relative z-10"
          />
        </div>

        <h1 className="mt-8 text-white text-5xl tracking-[10px] font-light">
          ALUGRIDX
        </h1>

        <div className="w-40 h-px bg-cyan-500/40 mt-4" />

        <p className="mt-4 text-cyan-200 tracking-[6px] uppercase text-sm">
          Air Distribution Solutions
        </p>

        <div className="mt-8 flex gap-2">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    </div>
  );
}