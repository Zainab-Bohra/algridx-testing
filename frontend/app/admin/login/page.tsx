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
    setLoading(true);
    try {
     const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }
);
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
    <div className="bg-[#0a1128] min-h-screen flex items-center justify-center px-6 relative text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-md w-full bg-[#101f42] border border-white/10 p-8 rounded-2xl shadow-xl space-y-6 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-cyan-500/10 text-cyan-400 rounded-xl flex items-center justify-center mx-auto border border-cyan-500/20">
            <ShieldCheck size={28} />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-white">
            ALUGRIDX Admin Login
          </h2>
          <p className="text-xs text-slate-400">Please enter your details to login</p>
        </div>

        {error && (
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold p-3 rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300 block">Username</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-3.5 text-slate-500" />
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)}
                required 
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                placeholder="Enter Username" 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-300 block">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-3.5 text-slate-500" />
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}
                required 
                className="w-full bg-slate-950 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors" 
                placeholder="Enter Password" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm py-3 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <span>{loading ? "Checking..." : "Login"}</span>
            {!loading && <ArrowRight size={14} />}
          </button>
        </form>
      </div>
    </div>
  );
}