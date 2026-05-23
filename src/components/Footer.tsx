"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle
} from "lucide-react";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1200);
  };

  // Select first 5 services and industries for footer links
  const footerServices = servicesData.slice(0, 5);
  const footerIndustries = industriesData.slice(0, 5);

  return (
    <footer className="bg-brand-dark border-t border-brand-dark-border pt-16 pb-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Identity Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img src="/logo.png" alt="CEBPL Logo" className="h-16 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              CHAURASIYA ELECTRICALS &amp; BUILDWELL PRIVATE LIMITED (CEBPL) is a leading electrical contractor and EPC contracting company powering industrial, commercial, and government infrastructure across India.
            </p>
          </div>

          {/* Quick Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-blue pl-2.5">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="hover:text-brand-blue transition-colors duration-200">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-brand-blue hover:text-white transition-colors duration-200 text-xs font-semibold flex items-center gap-1">
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Industries Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-gold pl-2.5">
              Sectors Served
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {footerIndustries.map((ind) => (
                <li key={ind.id}>
                  <Link href={`/industries#${ind.id}`} className="hover:text-brand-gold transition-colors duration-200">
                    {ind.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/industries" className="text-brand-gold hover:text-white transition-colors duration-200 text-xs font-semibold flex items-center gap-1">
                  View All Sectors &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-white pl-2.5">
                Newsletter
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Subscribe to our quarterly engineering bulletin for energy safety and power grid technology updates.
              </p>
              
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="bg-brand-dark-card border border-brand-dark-border rounded-lg px-3 py-2 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-brand-blue w-full"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-blue hover:bg-blue-600 text-white p-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center shrink-0 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    ) : (
                      <Send size={14} />
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 bg-brand-blue/10 border border-brand-blue/20 text-brand-blue p-2.5 rounded-lg text-xs"
                >
                  <CheckCircle size={14} />
                  <span>Subscribed successfully!</span>
                </motion.div>
              )}
            </div>

            {/* Corporate Location Details */}
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Corporate Office:</p>
                  <p>Corporate Plaza, Sector 62, Noida, UP - 201301</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Registered Office:</p>
                  <p className="leading-tight">C/o Kanti Devi Village, Pirapur, Block-Jandaha, Vaishali, Bihar - 844505</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-1 border-t border-brand-dark-border/40">
                <Mail size={14} className="text-brand-blue shrink-0" />
                <a href="mailto:chaurasiyaelectricalsbuildwell@gmail.com" className="hover:text-white">
                  chaurasiyaelectricalsbuildwell@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-brand-gold shrink-0" />
                <span>+91 90346 95410</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <hr className="border-brand-dark-border my-12" />

        {/* Copyright Panel */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <div className="space-y-1 text-center lg:text-left">
            <p>&copy; {new Date().getFullYear()} CHAURASIYA ELECTRICALS &amp; BUILDWELL PRIVATE LIMITED. All rights reserved.</p>
            <p className="text-[10px] text-gray-600 font-mono">CIN: U43211BR2025PTC076379 | PAN: AAMCC7725K | TAN: PTNC05264A</p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
