"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, MessageSquare } from "lucide-react";

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white relative">
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Phone Number</label>
                  <input type="tel" placeholder="(555) 000-0000" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">RV Type</label>
                  <select className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
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
                  <input type="text" placeholder="e.g., 35ft" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Interested Service</label>
                  <select className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
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
                <textarea rows={4} placeholder="Anything else we should know?" className="w-full bg-slate-800 border border-slate-700 text-white rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder:text-slate-600" />
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all text-lg shadow-xl shadow-blue-600/20 active:scale-[0.98]">
                <MessageSquare size={20} /> Request My Fast Quote
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
