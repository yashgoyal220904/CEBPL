"use client";

import React, { useEffect } from "react";
import { CheckSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useQuoteModal } from "@/components/QuoteModalContext";
import { industriesData } from "@/data/industries";

export default function Industries() {
  const { openQuoteModal } = useQuoteModal();

  // Scroll to hash if present on mount
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
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
            Sectors We Serve
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
            Specialized Grid Engineering by Industry
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Every sector operates under specific safety codes, energy clearances, and backup tolerances. We deliver custom solutions for all.
          </p>
        </div>
      </section>

      {/* Quick Jump Directory */}
      <section className="bg-brand-dark-card/45 border-b border-brand-dark-border py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4 text-center">
            Explore Sector Focus
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {industriesData.map((ind) => (
              <button
                key={ind.id}
                onClick={() => {
                  const el = document.getElementById(ind.id);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className="bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border/60 text-[11px] text-gray-300 hover:text-white px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-medium"
              >
                {ind.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Industries Loop */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {industriesData.map((ind, index) => {
          const IconComponent = ind.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={ind.id}
              id={ind.id}
              className={`bg-brand-dark-card/40 border border-brand-dark-border/80 rounded-2xl p-8 md:p-12 scroll-mt-32 hover:border-brand-gold/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Left Column (Description & Tags) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-dark border border-brand-dark-border text-brand-gold rounded-xl flex items-center justify-center shrink-0">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                      {ind.title}
                    </h3>
                    <p className="text-[10px] font-bold tracking-widest text-brand-blue uppercase mt-0.5">
                      Sector Focus #{index + 1}
                    </p>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {ind.description}
                </p>

                {/* Sub sectors tag blocks */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Core Target Segments:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ind.subSectors.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-brand-dark border border-brand-dark-border/60 text-gray-300 text-[10px] font-semibold px-3 py-1 rounded-full"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (Deliverables & CTA) */}
              <div className="lg:col-span-5 bg-brand-dark border border-brand-dark-border/80 rounded-xl p-6 space-y-6 self-stretch flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <CheckSquare size={14} className="text-brand-blue" />
                    Bespoke Deliverables:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-gray-300">
                    {ind.keyOfferings.map((offering, oIdx) => (
                      <li key={oIdx} className="flex gap-2 items-start leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openQuoteModal(`${ind.title} Electrification`)}
                  className="w-full bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border group-hover:border-brand-gold/30 text-white font-semibold py-3.5 rounded-lg text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group mt-6"
                >
                  Request Technical Presentation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom section */}
      <section className="bg-brand-dark-card/20 border-t border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
            Need customized industrial layout analysis?
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed">
            CEBPL partners with corporate planners and project directors to evaluate site coordinates, calculate line drops, and prepare bid packets.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openQuoteModal("Commercial Technical Audit")}
              className="bg-brand-blue hover:bg-blue-600 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-blue/20 transition-all cursor-pointer"
            >
              Schedule Engineering Audit
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
