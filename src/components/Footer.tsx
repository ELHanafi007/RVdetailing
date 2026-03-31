"use client";

import Link from "next/link";
import { Globe, Send, Smartphone, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold tracking-tighter uppercase text-white">
                sunshine<span className="text-blue-600">RVshine</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Leading mobile RV detailing and restoration specialists. Bringing showroom quality directly to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors"><Globe size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Send size={20} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors"><Smartphone size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#packages" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="#why-us" className="hover:text-white transition-colors">Why Choose Us</Link></li>
              <li><Link href="#process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-blue-600" />
                <span>(978) 764-7677</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-blue-600" />
                <span>info@sunshinervshine.com</span>
              </li>
              <li className="flex items-center gap-3 text-balance">
                <MapPin size={16} className="text-blue-600" />
                <span>Serving Ocala & Marion County Areas</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Business Hours</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Mon — Fri:</span>
                <span className="text-white">8:00 AM — 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Weekend:</span>
                <span className="text-white">8:00 AM — 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} sunshineRVshine. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
