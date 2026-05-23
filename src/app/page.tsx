"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ArrowRight, 
  Shield, 
  Award, 
  Clock, 
  CheckCircle, 
  Users, 
  DollarSign, 
  HardHat, 
  PhoneCall, 
  Activity,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useQuoteModal } from "@/components/QuoteModalContext";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { industriesData } from "@/data/industries";

// Counter Animation Sub-Component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const { openQuoteModal } = useQuoteModal();
  const [selectedProjectCategory, setSelectedProjectCategory] = useState<string>("all");
  


  // Filtered projects
  const filteredProjects = selectedProjectCategory === "all"
    ? projectsData.slice(0, 3) // show first 3 on home
    : projectsData.filter(p => p.category === selectedProjectCategory).slice(0, 3);

  // Core why choose us items mapped to lucide icons
  const whyChooseUs = [
    { title: "Experienced Engineers", desc: "Certified design and commissioning experts.", icon: Users },
    { title: "Quality Assurance", desc: "Rigorous ISO-standard testing protocols.", icon: Award },
    { title: "Safety First Approach", desc: "Strict LOTO, EHS, and zero-accident target.", icon: HardHat },
    { title: "Timely Project Delivery", desc: "MS-Project scheduled parallel site works.", icon: Clock },
    { title: "Advanced Equipment", desc: "Hydraulic pullers, VLF testing, oil filtration units.", icon: Zap },
    { title: "Cost Effective Solutions", desc: "Value-engineered designs to optimize BOQ costs.", icon: DollarSign },
    { title: "Reliable Support", desc: "24/7 technical breakdown support for partners.", icon: Activity },
    { title: "Customer Satisfaction", desc: "100% project completion and board approvals.", icon: CheckCircle }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-dark-border">
        {/* Background Image with Dark Overlays */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_background.png"
            alt="Electrical Substation Grid Background"
            fill
            className="object-cover opacity-35"
            priority
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark/20"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 w-full relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 bg-brand-blue/10 border border-brand-blue/30 rounded-full px-4 py-1.5 text-xs text-brand-blue font-bold uppercase tracking-wider mx-auto lg:mx-0"
              >
                <Sparkles size={12} className="text-brand-gold animate-pulse" />
                Class-A Electrical EPC Contracting
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] text-white tracking-tight"
              >
                Complete Electrical Contracting &amp; <span className="text-gradient">Infrastructure</span> Solutions
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0"
              >
                Delivering reliable, safe and innovative electrical engineering services for industrial, commercial, institutional and government projects across India.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <button
                  onClick={() => openQuoteModal()}
                  className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-brand-blue text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider shadow-lg hover:shadow-brand-blue/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
                >
                  Get a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/services"
                  className="border border-brand-dark-border hover:border-brand-blue/30 bg-brand-dark-card/50 hover:bg-brand-dark-card text-white px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>

            {/* Right Graphic/Emblem */}
            <div className="lg:col-span-4 hidden lg:flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 1 }}
                className="w-72 h-72 border border-brand-blue/10 bg-brand-dark-card/30 rounded-full flex items-center justify-center p-8 relative glow-blue"
              >
                <div className="absolute inset-0 rounded-full border border-dashed border-brand-gold/10 animate-spin" style={{ animationDuration: "20s" }} />
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-dark border border-brand-dark-border px-3 py-1 rounded-md text-[10px] text-brand-gold font-bold uppercase tracking-widest">
                  ISO 9001:2015
                </div>
                <div className="text-center space-y-2">
                  <Zap size={56} className="text-brand-gold mx-auto filter drop-shadow-[0_0_10px_rgba(244,179,64,0.3)] animate-pulse" />
                  <p className="font-display font-extrabold text-2xl text-white">CEBPL</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold max-w-[150px] mx-auto">
                    Powering Progress Through Quality
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-brand-dark-card/40 border-b border-brand-dark-border py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1.5 border-r border-brand-dark-border/40 last:border-0">
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-brand-blue">
                Class-A
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Licensed Contractor
              </p>
            </div>
            <div className="space-y-1.5 border-r border-brand-dark-border/40 last:border-0">
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-brand-gold">
                <Counter value={33} suffix=" KV" />
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Voltage Capacity
              </p>
            </div>
            <div className="space-y-1.5 border-r border-brand-dark-border/40 last:border-0">
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                <Counter value={2500} suffix="+" />
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                Active Manpower
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="text-3xl sm:text-4xl font-extrabold font-display text-brand-blue">
                <Counter value={100} suffix="%" />
              </p>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                CEIG Safety Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image layout */}
          <div className="relative h-[350px] sm:h-[450px] rounded-2xl overflow-hidden border border-brand-dark-border group glow-gold">
            <Image
              src="/images/industrial_facility.png"
              alt="Industrial Plant Electrical Erection"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/95 border border-brand-dark-border p-5 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                <Shield size={22} />
              </div>
              <div>
                <p className="font-semibold text-white text-sm">Class-A Certified Safety</p>
                <p className="text-gray-400 text-xs mt-0.5">Continuous field compliance audits, LOTO procedures, certified safety wear.</p>
              </div>
            </div>
          </div>

          {/* Right - Text Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs text-brand-gold uppercase font-bold tracking-widest">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Trusted Infrastructure &amp; Electrical EPC Partners
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              **Chaurasiya Electricals &amp; Buildwell Private Limited (CEBPL)** stands at the forefront of electrical engineering and EPC solutions in India. For over a decade, we have partnered with key manufacturers, commercial builders, and government bodies to execute electrical distribution networks from drawing boards to live grids.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Our capability spans heavy-duty HT yards, automated control switchgear, low-loss vertical busways, and complex cable laying. Guided by a core principle of **&quot;Safety First, Quality Throughout&quot;**, we deliver high-reliability electrification.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex gap-2.5 items-start">
                <CheckCircle size={16} className="text-brand-blue mt-0.5" />
                <span className="text-gray-300 text-sm font-medium">Class-A Government Licensed</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle size={16} className="text-brand-blue mt-0.5" />
                <span className="text-gray-300 text-sm font-medium">Turnkey EPC Project Delivery</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle size={16} className="text-brand-blue mt-0.5" />
                <span className="text-gray-300 text-sm font-medium">ISO 9001:2015 Process Mapping</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <CheckCircle size={16} className="text-brand-blue mt-0.5" />
                <span className="text-gray-300 text-sm font-medium">Pan-India Support &amp; Mobilization</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-blue hover:text-white font-bold text-sm tracking-wider uppercase group"
              >
                Learn More About Us
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES PORTFOLIO */}
      <section className="bg-brand-dark-card/25 border-y border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
                Our Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Electrical Engineering Services
              </h2>
            </div>
            <Link
              href="/services"
              className="bg-brand-dark border border-brand-dark-border hover:border-brand-blue/30 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 flex items-center justify-center gap-1.5"
            >
              All 12 Services <ArrowRight size={14} />
            </Link>
          </div>

          {/* Service Cards Grid (Show first 6) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="bg-brand-dark-card border border-brand-dark-border hover:border-brand-blue/30 p-6 rounded-xl hover-lift group relative overflow-hidden"
                >
                  <div className="w-12 h-12 bg-brand-dark border border-brand-dark-border group-hover:border-brand-blue/20 text-brand-blue rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-6 line-clamp-3">
                    {service.shortDesc}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1 text-xs text-brand-gold hover:text-white font-bold transition-colors"
                  >
                    Read Scope Details <ArrowRight size={12} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE CEBPL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-brand-gold uppercase font-bold tracking-widest">
            Why Partner With Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Operational Excellence as Standard
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed">
            From industrial engineering audits to turnkey grid synchronization, CEBPL represents trust, safety, and delivery accuracy.
          </p>
        </div>

        {/* 8 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-brand-dark-card/50 border border-brand-dark-border/80 p-5 rounded-xl text-center space-y-3 hover:border-brand-gold/20 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-brand-dark border border-brand-dark-border text-brand-gold rounded-lg flex items-center justify-center mx-auto">
                  <Icon size={20} />
                </div>
                <h4 className="text-sm font-bold text-white font-display">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-[11px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED GRID */}
      <section className="bg-brand-dark-card/25 border-y border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
              Sectors Served
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Tailored Power Solutions Across Sectors
            </h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              Every sector demands special electrical clearance, power ratings, and diagnostic layouts. We possess core technical capabilities for each.
            </p>
          </div>

          {/* Grid Layout (6 items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.slice(0, 6).map((ind) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={ind.id}
                  className="bg-brand-dark-card border border-brand-dark-border hover:border-brand-gold/30 p-6 rounded-xl flex gap-4 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-dark border border-brand-dark-border text-brand-gold rounded-lg flex items-center justify-center shrink-0 group-hover:text-white group-hover:bg-brand-gold/10 transition-colors">
                    <IconComp size={22} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-base font-bold font-display text-white">
                      {ind.title}
                    </h3>
                    <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-2">
                      {ind.description}
                    </p>
                    <Link
                      href={`/industries#${ind.id}`}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-blue hover:text-white transition-colors"
                    >
                      Read Case Solutions <ArrowRight size={10} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WORK PROCESS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs text-brand-gold uppercase font-bold tracking-widest">
            How We Operate
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            Our Phased Project Execution Flow
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed">
            CEBPL ensures rigorous step-by-step progress tracking, guaranteeing error-free load distribution and grid interface on handover.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[12%] right-[12%] h-0.5 bg-brand-dark-border z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", name: "Site Survey", desc: "Rigorous load estimation, terrain diagnostics, and cable routing feasibility studies." },
              { step: "02", name: "Planning & Engineering", desc: "Formulating SLDs, panel layouts, equipment BOQ, and state board clearance layouts." },
              { step: "03", name: "Installation & Execution", desc: "Site civil works, structure fabrication, cable laying, and transformer erection." },
              { step: "04", name: "Testing & Handover", desc: "Relay diagnostics, insulation tests, board clearance inspection, and energization." }
            ].map((step, idx) => (
              <div key={idx} className="text-center space-y-4 group">
                <div className="w-14 h-14 bg-brand-dark-card border border-brand-dark-border group-hover:border-brand-blue/30 text-white rounded-full flex items-center justify-center font-display font-extrabold text-base mx-auto shadow-lg transition-colors duration-300">
                  <span className="text-brand-blue group-hover:text-brand-gold transition-colors">{step.step}</span>
                </div>
                <h4 className="text-base font-bold text-white font-display">{step.name}</h4>
                <p className="text-gray-400 text-xs max-w-xs mx-auto leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FEATURED PROJECTS SECTION */}
      <section className="bg-brand-dark-card/25 border-y border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
                Our Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Featured Engineering Masterpieces
              </h2>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {["all", "industrial", "commercial", "infrastructure", "government"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedProjectCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                    selectedProjectCategory === cat
                      ? "bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/20"
                      : "bg-brand-dark border-brand-dark-border text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={project.id}
                  className="bg-brand-dark-card border border-brand-dark-border hover:border-brand-gold/30 rounded-xl overflow-hidden hover-lift flex flex-col justify-between"
                >
                  <div className="p-6 space-y-4">
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider border border-brand-gold/20 px-2 py-0.5 rounded">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold font-display text-white leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-brand-dark-border/40">
                      {project.stats.slice(0, 2).map((st, i) => (
                        <div key={i}>
                          <p className="text-[10px] text-gray-500">{st.label}</p>
                          <p className="text-xs font-bold text-gray-300">{st.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-brand-dark/40 border-t border-brand-dark-border/50 flex justify-between items-center">
                    <span className="text-xs text-gray-400 font-sans">{project.location}</span>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-xs text-brand-blue hover:text-white font-bold flex items-center gap-1 group"
                    >
                      View Case Study
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>


      {/* 10. CONTACT CTA SECTION */}
      <section className="bg-gradient-to-br from-brand-dark-card to-brand-dark border-t border-brand-dark-border py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background circuit lines */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Let&apos;s Build Reliable Electrical <br />
            <span className="text-brand-blue">Infrastructure</span> Together
          </h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed">
            Need rates evaluation, site survey, drawing design, or bidding estimates? Contact CEBPL now and let our engineering team guide your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="bg-brand-blue hover:bg-blue-600 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl shadow-lg hover:shadow-brand-blue/30 transition-all cursor-pointer"
            >
              Request Quote Estimate
            </button>
            <Link
              href="/contact"
              className="border border-brand-dark-border hover:border-brand-gold/30 bg-brand-dark/50 hover:bg-brand-dark text-white font-bold uppercase tracking-wider text-xs px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <PhoneCall size={14} className="text-brand-gold" />
              Contact Our Desk
            </Link>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
