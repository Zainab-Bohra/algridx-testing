"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const infoCards = [
  { icon: Phone, title: "Direct Line", value: "+971 58 552 1251", sub: "Available for urgent WhatsApp queries" },
  { icon: Mail, title: "Enterprise Email", value: "info@alugridx.com", sub: "Technical submittals & RFQs" },
  { icon: MapPin, title: "Manufacturing Plant", value: "Warehouse 16, Al Jurf 3", sub: "Behind China Mall, Ajman, UAE" },
  { icon: Clock, title: "Plant Operations", value: "Sat – Thu: 8:00 AM – 6:00 PM", sub: "Friday: Closed" },
];

export default function ContactClient() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", company: "", msg: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-24 overflow-hidden relative selection:bg-cyan-500 selection:text-white">
      
      {/* BACKGROUND ENGINEERING GRID DESIGN */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a04_1px,transparent_1px),linear-gradient(to_bottom,#0f172a04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-cyan-400/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-navy text-cyan-400 font-extrabold tracking-widest uppercase text-xs mb-5 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            Global Network Channels
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-7xl font-black text-brand-navy tracking-tight leading-none"
          >
            Let's Engineer Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-cyan-500 to-blue-700">Air Distribution Grid</span>
          </motion.h1>
        </div>

        {/* MAIN SPLIT GRID CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT SIDE: HQ INFO CARDS & LIVE MAP */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-black text-brand-navy tracking-tight mb-8"
            >
              Headquarters Info Matrix
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
whileHover={{
  y: -4,
  boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
}}                    key={i}
                    /* यहाँ border-2 लगा दिया है ताकि वाइट बैकग्राउंड पर ये साफ चमकें */
                    className="bg-slate-50/80 border-2 border-slate-200/60 p-6 rounded-2xl relative overflow-hidden transition-all duration-300 group hover:border-cyan-400"
                  >
                    <div className="w-10 h-10 bg-brand-navy text-cyan-400 rounded-xl flex items-center justify-center mb-4 border border-white/10 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-sm font-black text-brand-navy tracking-tight">{card.title}</h4>
                    <p className="text-base font-bold text-brand-blue mt-1.5 break-words">{card.value}</p>
                    <p className="text-xs text-slate-400 font-medium mt-1">{card.sub}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* LIVE INTERACTIVE GOOGLE MAP WITH PREMIUM BORDER */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              /* यहाँ भी साफ़ बॉर्डर-2 ऐड किया है */
              className="w-full h-80 bg-slate-100 rounded-3xl border-2 border-slate-200 overflow-hidden relative shadow-xl group"
            >
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.161311651613!2d55.532490278468586!3d25.4328699642771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f9703e678ac1%3A0xe5b0511d109a6034!2sAlugridx%20Air%20Conditioning%20Industry%20LLC!5e0!3m2!1sen!2sus!4v1780752331705!5m2!1sen!2sus"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen={true}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="w-full h-full grayscale contract-map hover:grayscale-0 transition-all duration-700 ease-in-out"
></iframe>
            </motion.div>
          </div>

          {/* RIGHT SIDE: PREMIUM METALLIC CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            /* डार्क कंटेनर में border-2 border-white/10 लगाया गया है ताकि यह उभरा हुआ और मजबूत दिखे */
            className="lg:col-span-7 bg-gradient-to-b from-[#0a192f] via-[#071324] to-[#02070f] rounded-3xl p-8 md:p-12 border-2 border-white/10 shadow-[0_30px_60px_rgba(10,25,47,0.25)] relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">Request Technical Submittals</h3>
            <p className="text-slate-400 text-sm font-light mb-8">Fill the framework fields below. Our structural engineering department responds within 2 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" required value={formState.name} onChange={(e)=>setFormState({...formState, name: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all font-medium" 
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Corporate Email</label>
                  <input 
                    type="email" required value={formState.email} onChange={(e)=>setFormState({...formState, email: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all font-medium" 
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Phone Number</label>
                  <input 
                    type="tel" required value={formState.phone} onChange={(e)=>setFormState({...formState, phone: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all font-medium" 
                    placeholder="+971 50 000 0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Company Name</label>
                  <input 
                    type="text" value={formState.company} onChange={(e)=>setFormState({...formState, company: e.target.value})}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all font-medium" 
                    placeholder="e.g. Arabtec Construction"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">Project Message / RFQ Requirements</label>
                <textarea 
                  rows={4} required value={formState.msg} onChange={(e)=>setFormState({...formState, msg: e.target.value})}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all font-medium resize-none" 
                  placeholder="Describe your grilles, diffusers, or dampers required size/quantities..."
                />
              </div>

              {/* SUBMIT BUTTON */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-brand-blue to-cyan-500 text-white font-black text-sm uppercase tracking-widest py-4.5 rounded-xl flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,120,255,0.3)] hover:shadow-[0_0_40px_rgba(0,255,255,0.5)] transition-all"
              >
                <span>Dispatch Message Securely</span>
                <Send size={16} />
              </motion.button>

              {/* SUCCESS MESSAGE OVERLAY */}
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex items-center gap-3 text-emerald-400 text-sm font-bold"
                >
                  <CheckCircle size={20} className="shrink-0" />
                  <span>Transmission Successful! Our estimating department is processing your framework parameters.</span>
                </motion.div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}