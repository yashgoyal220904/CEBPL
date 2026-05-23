"use client";

import React from "react";
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Zap, 
  HardHat, 
  Heart,
  TrendingUp
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useQuoteModal } from "@/components/QuoteModalContext";

export default function About() {
  const { openQuoteModal } = useQuoteModal();

  const values = [
    {
      title: "Safety Absolute",
      desc: "We enforce absolute compliance to LOTO, proper PPE wear, and continuous site hazard identification. Safety is non-negotiable.",
      icon: HardHat
    },
    {
      title: "Uncompromising Quality",
      desc: "From cable layouts to breaker terminations, we align with IS/IEC standards. No shortcuts, only certified engineering.",
      icon: ShieldCheck
    },
    {
      title: "Ethical Integrity",
      desc: "Transparent material reconciliation, honest rate estimations, and direct reporting establish long-term corporate partnerships.",
      icon: Heart
    },
    {
      title: "Technical Innovation",
      desc: "Leveraging compaction GIS panels, astronomical timers, and thermal scanning audits to bring smart energy grids to clients.",
      icon: Zap
    }
  ];


  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <Navbar />

      {/* Header Banner */}
      <section className="relative py-20 border-b border-brand-dark-border overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
            About CEBPL
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
            Turnkey Electrical Infrastructure Solutions
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Chaurasiya Electricals &amp; Buildwell Private Limited (CEBPL) is a certified electrical contracting company specializing in industrial networks, substations, and grid infrastructures.
          </p>
        </div>
      </section>

      {/* Corporate Profile Detail */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white border-l-4 border-brand-blue pl-4">
              Corporate Profile &amp; Capability
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              **CEBPL** is a fast-growing, certified electrical engineering and EPC contracting firm. We provide complete turnkey solutions starting from site planning, engineering design, load calculations, custom panels fabrication, and cable laying to final testing, commissioning, and grid synchronization.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Equipped with an inventory of specialized testing and cabling equipment, our engineering cells are geared for rapid site mobilization, maintaining absolute quality control, and obtaining statutory CEIG approvals under scheduled timelines.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-dark-border">
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-brand-blue font-display">Govt Approved</p>
                <p className="text-[10px] text-gray-400 uppercase font-semibold">Electrical License</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-extrabold text-brand-gold font-display">100%</p>
                <p className="text-[10px] text-gray-400 uppercase font-semibold">CEIG Approval Standard</p>
              </div>
            </div>
          </div>

          {/* Right Cards - Vision / Mission */}
          <div className="grid grid-cols-1 gap-6">
            {/* Mission Box */}
            <div className="bg-brand-dark-card border border-brand-dark-border p-6 rounded-xl relative overflow-hidden group hover:border-brand-blue/20 transition-all duration-300">
              <div className="absolute top-4 right-4 text-brand-blue/5 group-hover:text-brand-blue/10 transition-colors">
                <Target size={60} />
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white mb-2">Our Mission</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    To deliver safe, energy-efficient, and top-tier electrical engineering infrastructures that power industries, support cities, and integrate green renewable feeds into India&apos;s national grids.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-brand-dark-card border border-brand-dark-border p-6 rounded-xl relative overflow-hidden group hover:border-brand-gold/20 transition-all duration-300">
              <div className="absolute top-4 right-4 text-brand-gold/5 group-hover:text-brand-gold/10 transition-colors">
                <Eye size={60} />
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Eye size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white mb-2">Our Vision</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    To become India&apos;s most reliable and technologically advanced electrical EPC contractor, known for high-standard EHS compliance and state-of-the-art power distribution solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Corporate Values */}
      <section className="bg-brand-dark-card/25 border-y border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs text-brand-gold uppercase font-bold tracking-widest">
              Our Principles
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white">
              The Values That Drive CEBPL
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              We stand firm on values that protect lives, preserve investments, and build enduring corporate relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div 
                  key={idx}
                  className="bg-brand-dark-card border border-brand-dark-border p-6 rounded-xl hover:border-brand-blue/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand-dark text-brand-blue rounded-lg flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold font-display text-white mb-2">{val.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Safety & Quality Section */}
      <section className="bg-brand-dark-card/25 border-t border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6">
            <span className="text-xs text-brand-gold uppercase font-bold tracking-widest">
              Commitment to Standard
            </span>
            <h2 className="text-3xl font-extrabold font-display text-white">
              Zero Incidents. 100% Quality Audited.
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              At CEBPL, safety is not merely a handbook guideline—it is integrated into every permit-to-work, tool setup, and cable termination. Our EHS desk maintains strict Lockout-Tagout protocols on active panels.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-0.5">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">ISO 9001:2015 Audits</h4>
                  <p className="text-gray-400 text-xs mt-0.5">All processes follow standardized drawing clearances, component reconciliations, and testing loops.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 mt-0.5">
                  <TrendingUp size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Calibrated Test Benchmarks</h4>
                  <p className="text-gray-400 text-xs mt-0.5">All diagnostic megger meters, primary injection test kits, and thermal cameras are calibrated quarterly at accredited labs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image/Stats Box */}
          <div className="bg-brand-dark-card border border-brand-dark-border p-8 rounded-2xl relative glow-blue text-center space-y-6">
            <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold font-display text-white">Safety Credentials</h3>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm mx-auto">
              We hold clean safety records across major infrastructure zones. Every project site features a dedicated Safety Officer reporting directly to our central EHS desk.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-brand-dark border border-brand-dark-border p-4 rounded-xl">
                <p className="text-2xl font-extrabold text-brand-blue font-display">0</p>
                <p className="text-[10px] text-gray-500 uppercase font-semibold">LTI Incidents</p>
              </div>
              <div className="bg-brand-dark border border-brand-dark-border p-4 rounded-xl">
                <p className="text-2xl font-extrabold text-brand-gold font-display">100%</p>
                <p className="text-[10px] text-gray-500 uppercase font-semibold">PPE Compliance</p>
              </div>
            </div>
            <button
              onClick={() => openQuoteModal("EHS / Safety Audit")}
              className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-white font-bold tracking-wider uppercase cursor-pointer"
            >
              Request Safety Credentials Book &rarr;
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
