"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Activity, Loader2 } from "lucide-react";

const infoCards = [
  { icon: Phone, title: "Direct Line", value: "+971 58 552 1251", sub: "Available for urgent WhatsApp queries" },
  { icon: Mail, title: "Enterprise Email", value: "info@alugridx.com", sub: "Technical submittals & RFQs" },
  { icon: MapPin, title: "Manufacturing Plant", value: "Warehouse 16, Al Jurf 3", sub: "Behind China Mall, Ajman, UAE" },
  { icon: Clock, title: "Plant Operations", value: "Sat – Thu: 8:00 AM – 6:00 PM", sub: "Friday: Closed" },
];

export default function ContactClient() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setIsSubmitted(false);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      // 🌟 SAFE SHIELD: यहाँ चेक करें कि रिस्पॉन्स HTML है या असली JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("The server dynamic response was altered. Verify if your Backend Server is active on Port 5000.");
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", company: "", msg: "" }); // Reset form upon successful sync
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        setErrorMessage(data.error || "Something went wrong. Please check SMTP credentials inside .env");
      }
    } catch (error: any) {
      console.error("Transmission Error:", error);
      setErrorMessage(error.message || "Network error. Failed to connect to the ALUGRIDX Backend Server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-36 pb-24 overflow-hidden relative text-[#124170] font-sans">
      
      {/* FINE SPATIAL ARCHITECTURE GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#12417002_1px,transparent_1px),linear-gradient(to_bottom,#12417002_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10 px-6">
        
        {/* REFINED ARCHITECTURAL HEADER SECTION */}
        <div className="border-b border-[#124170]/10 pb-6 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-white text-[#3B82F6] text-[11px] font-extrabold uppercase tracking-wider border border-slate-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] mb-4"
          >
            <Activity size={13} className="animate-pulse text-[#3B82F6]" />
            Global Network Channels
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tight text-[#124170] leading-tight"
          >
            Request Quotation Matrix
          </motion.h1>
          <p className="text-slate-500 text-base font-normal mt-2 max-w-2xl">
            Connect directly with our Ajman factory desk for instant dimensional parameters, AutoCAD blueprints, and rapid manufacturing scale estimations.
          </p>
        </div>

        {/* MAIN SPLIT WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: INFORMATION CARDS CONSOLE & MAP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -6, boxShadow: "0px 25px 50px rgba(10, 37, 64, 0.12)" }}
                    key={i}
                    className="bg-white border border-slate-100 p-5 rounded-3xl relative overflow-hidden transition-all duration-300 group hover:bg-[#0A2540]"
                  >
                    <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-[#3B82F6] rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10 shadow-sm">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-[10px] font-bold uppercase text-[#3B82F6] group-hover:text-[#60A5FA] tracking-wider transition-colors">{card.title}</h4>
                    <p className="text-sm font-black text-[#124170] group-hover:text-white mt-1.5 break-words uppercase tracking-tight transition-colors">{card.value}</p>
                    <p className="text-xs text-slate-400 group-hover:text-slate-400/80 font-normal mt-1 leading-relaxed transition-colors">{card.sub}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* HIGH-DEPTH INTERACTIVE BLUEPRINT MAP BOX */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-72 bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden relative shadow-[0_15px_35px_rgba(10,37,64,0.03)]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.626815343468!2d55.5133649!3d25.4172828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzAyLjIiTiA1NcKwMzAnNDguMSJF!5e0!3m2!1sen!2sae!4v1624194000000!5m2!1sen!2sae"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-90 hover:opacity-100"
              ></iframe>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: HIGH-END CONTACT SUBMITTAL FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_30px_70px_rgba(10,37,64,0.04)] relative"
          >
            <div className="mb-8 space-y-1">
              <h3 className="text-xl font-black uppercase tracking-tight text-[#124170]">Technical Submittals Request</h3>
              <p className="text-slate-400 text-xs font-normal">Fill the architectural parameter nodes below. Estimation desks respond inside a 2-hour window.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" required value={formState.name} onChange={(e)=>setFormState({...formState, name: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="e.g. John Doe"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Corporate Email *</label>
                  <input 
                    type="email" required value={formState.email} onChange={(e)=>setFormState({...formState, email: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="name@company.com"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Phone Link *</label>
                  <input 
                    type="tel" required value={formState.phone} onChange={(e)=>setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="+971 50 000 0000"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Company Identity</label>
                  <input 
                    type="text" value={formState.company} onChange={(e)=>setFormState({...formState, company: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="e.g. Arabtec Construction"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Project Scope / RFQ Requirements *</label>
                <textarea 
                  rows={4} required value={formState.msg} onChange={(e)=>setFormState({...formState, msg: e.target.value})}
                  className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3.5 text-xs font-medium text-slate-600 placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner resize-none leading-relaxed" 
                  placeholder="Describe your required grille, diffuser, or volume damper sizes and specific count matrices..."
                  disabled={isLoading}
                />
              </div>

              {/* ACTION ACTUATOR CORE BUTTON */}
              <div className="pt-2">
                <motion.button 
                  whileHover={!isLoading ? { scale: 1.02, y: -1, boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.3)" } : {}}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full text-white font-sans text-xs font-extrabold uppercase tracking-widest py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-md ${isLoading ? "bg-slate-400 cursor-not-allowed" : "bg-[#124170] hover:bg-[#3B82F6] cursor-pointer"}`}
                >
                  {isLoading ? (
                    <>
                      <span>Transmitting System Data...</span>
                      <Loader2 size={13} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Dispatch Request Submittal</span>
                      <Send size={13} />
                    </>
                  )}
                </motion.button>
              </div>

              {/* MESSAGES TRANSLATION TRANSMISSION OVERLAY */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-3 text-emerald-700 text-xs font-sans font-bold uppercase tracking-wider shadow-sm"
                  >
                    <CheckCircle size={16} className="text-emerald-600 shrink-0" />
                    <span>Transmission Successful. RFQ details sent to info@alugridx.com.</span>
                  </motion.div>
                )}

                {errorMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex items-center gap-3 text-rose-700 text-xs font-sans font-bold uppercase tracking-wider shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-rose-600 shrink-0 animate-pulse" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}