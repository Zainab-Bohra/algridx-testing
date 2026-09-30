"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from "lucide-react";

const infoCards = [
  { 
    icon: Phone, 
    title: "Direct Line", 
    value: "+971 58 552 1251", 
    href: "tel:+971585521251",
    sub: "Available for urgent WhatsApp queries & calls" 
  },
  { 
    icon: Mail, 
    title: "Enterprise Email", 
    value: "info@alugridx.com", 
    href: "mailto:info@alugridx.com",
    sub: "Technical submittals & RFQs" 
  },
  { 
    icon: MapPin, 
    title: "Manufacturing Plant", 
    value: "Building No. 144, Warehouse No. 16", 
    href: "https://maps.google.com/?q=Alugridx+Air+Conditioning+Industry+LLC+Ajman",
    sub: "Humaideya Street, Al Jurf 3, Near Red Chilly Restaurant, Ajman, UAE" 
  },
  { 
    icon: Clock, 
    title: "Plant Operations", 
    value: "Mon – Thu: 9AM–1PM, 2PM–6PM", 
    sub: "Fri: 9AM–12:30PM, 2PM–6PM | Sat: 9AM–1PM, 2PM–3PM | Sun: Closed" 
  },
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

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("The server dynamic response was altered. Verify if your Backend Server is active on Port 5000.");
      }

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormState({ name: "", email: "", phone: "", company: "", msg: "" });
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
    <div className="bg-[#F8FAFC] min-h-screen pt-28 pb-24 overflow-hidden relative text-[#124170] font-sans">
      
      {/* 🚀 CLEAN AMBIENT LIGHTING BACKGROUND (NO CHECKS / NO BOXES) */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#3B82F6]/10 via-[#124170]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-[45%] -right-40 w-[700px] h-[700px] bg-gradient-to-tl from-[#3B82F6]/8 via-slate-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-[#0A2540]/5 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* TOP BANNER */}
      <div className="relative z-10 w-full mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="relative w-full min-h-[12rem] sm:h-48 md:h-56 py-6 sm:py-0 rounded-3xl overflow-hidden bg-gradient-to-r from-[#0A2540] via-[#124170] to-[#1E568B] border border-slate-200/20 shadow-xl flex items-center justify-between px-6 md:px-14">
            
            {/* SUBTLE GRADIENT GLOW (NO GRID / NO PATTERNS) */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

            {/* LEFT TEXT CONTENT */}
            <div className="relative z-10 max-w-xl space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white">
                Contact Us
              </h1>
              
              <p className="text-slate-200 text-xs md:text-sm font-normal max-w-md hidden sm:block leading-relaxed opacity-90">
                Connect directly with our Ajman factory desk for instant dimensional parameters, product submittals, and RFQs.
              </p>
            </div>

            {/* RIGHT SIDE FLOATING 3D GRAPHIC */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 h-36 md:h-48 shrink-0 hidden sm:flex items-center justify-end"
            >
              <img 
                src="/images/contact-us-banner.jpg" 
                alt="Contact Us" 
                className="h-full w-auto object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)]"
              />
            </motion.div>

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10 px-4 sm:px-6">
        
        {/* MAIN SPLIT WORKSPACE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: INFORMATION CARDS CONSOLE & MAP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                const CardWrapper = card.href ? "a" : "div";
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ y: -6, boxShadow: "0px 25px 50px rgba(10, 37, 64, 0.12)" }}
                    key={i}
                    className="bg-white border border-slate-100 p-5 rounded-3xl relative overflow-hidden transition-all duration-300 group hover:bg-[#0A2540]"
                  >
                    <CardWrapper 
                      {...(card.href ? { href: card.href, target: card.href.startsWith("http") ? "_blank" : undefined, rel: card.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                      className="block"
                    >
                      <div className="w-10 h-10 bg-slate-50 border border-slate-100 text-[#3B82F6] rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-white/10 group-hover:text-white group-hover:border-white/10 shadow-sm">
                        <Icon size={16} />
                      </div>
                      <h4 className="text-[10px] font-bold uppercase text-[#3B82F6] group-hover:text-[#60A5FA] tracking-wider transition-colors">{card.title}</h4>
                      <p className="text-sm font-black text-[#124170] group-hover:text-white mt-1.5 break-words uppercase tracking-tight transition-colors">{card.value}</p>
                      <p className="text-xs text-slate-400 group-hover:text-slate-400/80 font-normal mt-1 leading-relaxed transition-colors">{card.sub}</p>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>

            {/* MAP BOX */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full h-64 sm:h-72 bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden relative shadow-[0_15px_35px_rgba(10,37,64,0.03)]"
            >
              <iframe
                title="Alugridx Factory Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1600077847575!2d55.5323852784685!3d25.432913564275147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9703e678ac1%3A0xe5b0511d109a6034!2sAlugridx%20Air%20Conditioning%20Industry%20LLC!5e0!3m2!1sen!2sus!4v1788763474934!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-90 hover:opacity-100"
              ></iframe>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border border-slate-100 shadow-[0_30px_70px_rgba(10,37,64,0.04)] relative"
          >
            <div className="mb-6 sm:mb-8 space-y-1">
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#124170]">Request a Quote &amp; Technical Submittals</h3>
              <p className="text-slate-400 text-xs font-normal">Please fill out the form below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Full Name *</label>
                  <input 
                    type="text" required value={formState.name} onChange={(e)=>setFormState({...formState, name: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3 sm:py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="e.g. David Doe"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Corporate Email *</label>
                  <input 
                    type="email" required value={formState.email} onChange={(e)=>setFormState({...formState, email: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3 sm:py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="name@company.com"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Phone *</label>
                  <input 
                    type="tel" required value={formState.phone} onChange={(e)=>setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3 sm:py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="+971 50 000 0000"
                    disabled={isLoading}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Company Name</label>
                  <input 
                    type="text" value={formState.company} onChange={(e)=>setFormState({...formState, company: e.target.value})}
                    className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3 sm:py-3.5 text-xs font-semibold text-[#124170] placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner" 
                    placeholder="e.g. Arabtec Construction"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Project Scope / RFQ Requirements *</label>
                <textarea 
                  rows={4} required value={formState.msg} onChange={(e)=>setFormState({...formState, msg: e.target.value})}
                  className="w-full bg-slate-50/60 border border-slate-100 rounded-xl px-4 py-3 sm:py-3.5 text-xs font-medium text-slate-600 placeholder-slate-400 focus:outline-none focus:border-[#3B82F6] focus:bg-white transition-all shadow-inner resize-none leading-relaxed" 
                  placeholder="Describe your required grille, diffuser, or volume damper sizes and specific count matrices..."
                  disabled={isLoading}
                />
              </div>

              <div className="pt-2">
                <motion.button 
                  whileHover={!isLoading ? { scale: 1.02, y: -1, boxShadow: "0px 10px 25px rgba(59, 130, 246, 0.3)" } : {}}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full text-white font-sans text-xs font-extrabold uppercase tracking-widest py-3.5 sm:py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-md ${isLoading ? "bg-slate-400 cursor-not-allowed" : "bg-[#124170] hover:bg-[#3B82F6] cursor-pointer"}`}
                >
                  {isLoading ? (
                    <>
                      <span>Transmitting System Data...</span>
                      <Loader2 size={13} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send size={13} />
                    </>
                  )}
                </motion.button>
              </div>

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