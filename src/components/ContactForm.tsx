"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, ArrowRight, MessageSquare, CheckCircle2, Loader2, X } from "lucide-react";
import { sendQuote } from "@/lib/actions";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendQuote(formData);

    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
    } else {
      setError(result.error || "Something went wrong. Please try again or call us directly.");
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* SUCCESS MODAL POP-UP */}
      <AnimatePresence>
        {isSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSuccess(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-slate-900 rounded-[3rem] p-8 md:p-12 text-center shadow-2xl border border-white/10"
            >
              <button 
                onClick={() => setIsSuccess(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="w-20 h-20 bg-blue-600/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-blue-500" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 italic tracking-tight">
                QUOTE <span className="text-blue-500 not-italic uppercase text-xl block tracking-widest mt-2">Received.</span>
              </h2>
              
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Thank you for choosing <span className="text-white font-bold">sunshineRVshine</span>. <br />
                Our restoration specialist will review your request and contact you within 60 minutes.
              </p>
              
              <button 
                onClick={() => setIsSuccess(false)}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
              >
                Close & Continue
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Get Started</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              Ready to restore your RV to perfection?
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Contact us today for a free estimate. Our team is ready to bring the showroom shine back to your home on wheels.
            </p>

            <div className="space-y-6">
              <a href="tel:+19787647677" className="flex items-center gap-6 p-6 rounded-3xl bg-blue-50 border border-blue-100 hover:bg-blue-600 group transition-all">
                <div className="p-4 bg-white rounded-2xl group-hover:scale-110 transition-transform">
                  <Phone className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-600 group-hover:text-blue-100 uppercase tracking-widest mb-1">Direct Line</p>
                  <p className="text-2xl font-bold text-slate-900 group-hover:text-white transition-colors">(978) 764-7677</p>
                </div>
                <ArrowRight className="ml-auto text-blue-600 group-hover:text-white transition-colors group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="p-4 bg-white rounded-2xl">
                  <Calendar className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-xl font-bold text-slate-900">Mon — Fri: 8am-6pm</p>
                  <p className="text-sm text-slate-500">Weekend: 8am-2pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-900/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden estimate field for automated pre-filling */}
              <input type="hidden" name="estimate" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                  <input required name="phone" type="tel" placeholder="(555) 000-0000" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">RV Type</label>
                  <select name="rvType" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Select RV Type</option>
                    <option>Class A Motorhome</option>
                    <option>Class B (Camper Van)</option>
                    <option>Class C Motorhome</option>
                    <option>5th Wheel</option>
                    <option>Travel Trailer</option>
                    <option>Toy Hauler</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">RV Length (ft)</label>
                  <input required name="length" type="text" placeholder="e.g., 35ft" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Interested Service</label>
                  <select name="service" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Select a package</option>
                    <option>Foundation ($7/ft)</option>
                    <option>Professional ($10/ft)</option>
                    <option>Bespoke ($15/ft)</option>
                    <option>Custom Restoration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Message (Optional)</label>
                <textarea name="message" rows={4} placeholder="Anything else we should know?" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
              </div>

              {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

              <button 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all text-lg shadow-xl shadow-blue-600/20 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    <MessageSquare size={20} /> Request My Fast Quote
                  </>
                )}
              </button>
              
              <p className="text-center text-slate-500 text-xs mt-4">
                We'll call you back within 1 hour for a finalized estimate.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
