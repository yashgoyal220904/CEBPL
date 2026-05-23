"use client";

import React, { useEffect } from "react";

import { Check, ClipboardList, Info, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useQuoteModal } from "@/components/QuoteModalContext";
import { servicesData } from "@/data/services";

export default function Services() {
  const { openQuoteModal } = useQuoteModal();

  // Scroll to hash if present on mount
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for render cycles
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <Navbar />

      {/* Header Banner */}
      <section className="relative py-20 border-b border-brand-dark-border overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
            Electrical Engineering &amp; EPC Portfolio
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Delivering high-reliability High Tension / Low Tension electrification, turnkey industrial setups, and institutional power distribution infrastructure.
          </p>
        </div>
      </section>

      {/* Quick Jump Directory */}
      <section className="bg-brand-dark-card/45 border-b border-brand-dark-border py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 text-center">
            Quick Directory (Jump to Service Scope)
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  const el = document.getElementById(service.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border/60 text-[11px] text-gray-300 hover:text-white px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-medium"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services Loop */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {servicesData.map((service, index) => {
          const IconComponent = service.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-brand-dark-card/40 border border-brand-dark-border/80 rounded-2xl p-8 md:p-12 scroll-mt-32 hover:border-brand-blue/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Left Column (Details / Info) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-dark border border-brand-dark-border text-brand-blue rounded-xl flex items-center justify-center shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {service.title}
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-brand-gold uppercase mt-0.5">
                      Service Scope #{index + 1}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.longDesc}
                </p>

                {/* Offerings list */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <ClipboardList size={14} className="text-brand-blue" />
                    Key Offerings &amp; Inclusions:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-2 items-start leading-snug">
                        <Check size={14} className="text-green-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (Specifications Card & CTA) */}
              <div className="lg:col-span-5 bg-brand-dark border border-brand-dark-border/80 rounded-xl p-6 space-y-6 relative overflow-hidden self-stretch flex flex-col justify-between">
                {/* Background circuit lines effect */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full filter blur-xl pointer-events-none" />

                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Info size={14} className="text-brand-gold" />
                    Technical Standards &amp; Specs:
                  </h4>
                  <ul className="space-y-2.5 text-[11px] text-gray-400">
                    {service.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="leading-relaxed border-b border-brand-dark-border/40 pb-2 last:border-0 last:pb-0">
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openQuoteModal(service.title)}
                  className="w-full bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border group-hover:border-brand-blue/30 text-white font-semibold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group mt-6"
                >
                  Request Technical Proposal
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA Block */}
      <section className="bg-brand-dark-card/20 border-t border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Need customized grid engineering?
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed">
            CEBPL engineers design tailored load-distribution schemes for complex multi-MW industrial layouts, and draft regulatory documentation for CEA/CEIG approvals.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuoteModal("Custom Engineering Consult")}
              className="bg-brand-blue hover:bg-blue-600 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-blue/20 transition-all cursor-pointer"
            >
              Book Engineering Consultation
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
