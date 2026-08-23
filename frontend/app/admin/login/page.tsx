"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, User, ArrowRight } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (loading) setError("");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        router.push("/admin/");
      } else {
        setError(data.error || "Wrong Username or Password");
      }
    } catch (err) {
      setError("Server Error: Please try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen flex items-center justify-center px-6 relative text-[#0A2540] overflow-hidden font-sans">
      {/* Dark Navy Blueprint Mesh Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A254005_1px,transparent_1px),linear-gradient(to_bottom,#0A254005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-md w-full bg-white border-2 border-[#0A2540] p-8 rounded-[2.5rem] shadow-xl space-y-6 relative z-10">
        
        {/* Title Identity Block */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 bg-slate-100 text-[#0A2540] border-2 border-[#0A2540] rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <ShieldCheck size={26} className="text-[#0A2540]" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-black uppercase tracking-tight text-[#0A2540]">
              ALUGRIDX Authority
            </h2>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-2 border-red-200 text-red-600 text-xs font-mono font-bold p-3 rounded-xl text-center uppercase tracking-wide">
            [ System Check: {error} ]
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Username</label>
            <div className="relative">
              <User size={15} className="absolute left-4 top-4 text-slate-400" />
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                required 
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-xs font-mono text-[#0A2540] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition-colors" 
                placeholder="Secure Node ID" 
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-4 top-4 text-slate-400" />
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required 
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-xs font-mono text-[#0A2540] placeholder-slate-400 focus:outline-none focus:border-[#2563EB] transition-colors" 
                placeholder="Access Hash key" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#0A2540] hover:bg-[#2563EB] text-white font-mono text-xs font-bold uppercase tracking-widest py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-40"
          >
            <span>{loading ? "Verifying Keys..." : "Initialize Dashboard"}</span>
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>
      </div>
    </div>
  );
}