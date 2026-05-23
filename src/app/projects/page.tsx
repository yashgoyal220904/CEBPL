"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Building, Landmark, Factory, Network } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filters = [
    { label: "All Projects", value: "all", icon: null },
    { label: "Industrial", value: "industrial", icon: Factory },
    { label: "Commercial", value: "commercial", icon: Building },
    { label: "Infrastructure", value: "infrastructure", icon: Network },
    { label: "Government", value: "government", icon: Landmark }
  ];

  const filteredProjects = selectedFilter === "all"
    ? projectsData
    : projectsData.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <Navbar />

      {/* Header Banner */}
      <section className="relative py-20 border-b border-brand-dark-border overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
            Our Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
            Engineering Showcases &amp; Successes
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Explore our industrial, commercial, and utility-scale infrastructure grid handovers executed in strict compliance with safety, time, and budget guidelines.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-brand-dark-card/45 border-b border-brand-dark-border py-6 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => {
            const Icon = filter.icon;
            const isActive = selectedFilter === filter.value;
            
            return (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-brand-blue border-brand-blue text-white shadow-lg shadow-brand-blue/20"
                    : "bg-brand-dark border-brand-dark-border text-gray-400 hover:text-white hover:border-brand-dark-border/80"
                }`}
              >
                {Icon && <Icon size={14} className={isActive ? "text-white" : "text-brand-blue"} />}
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid Display */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                {/* Image Placeholder Visual */}
                <div className="relative h-48 bg-brand-dark flex items-center justify-center border-b border-brand-dark-border p-6 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-gold/5 opacity-50 z-0"></div>
                  
                  {/* Decorative circuit path vector background */}
                  <svg className="absolute inset-0 w-full h-full text-brand-dark-border opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0,20 L 50,20 L 70,40 L 150,40 L 170,20 L 300,20" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M 50,20 L 50,100 L 100,100" fill="none" stroke="currentColor" strokeWidth="1" />
                    <path d="M 120,40 L 120,120 L 220,120" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="70" cy="40" r="4" fill="currentColor" />
                    <circle cx="170" cy="20" r="3" fill="currentColor" />
                  </svg>

                  <div className="z-10 text-center space-y-2">
                    <p className="text-xs text-brand-blue font-mono font-bold tracking-widest uppercase">
                      CASE #{project.id.toUpperCase().replace(/-/g, "_")}
                    </p>
                    <p className="text-sm font-display font-extrabold text-white line-clamp-1 max-w-[220px] mx-auto">
                      {project.client}
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-brand-gold font-bold uppercase tracking-wider border border-brand-gold/20 px-2.5 py-0.5 rounded">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 font-sans">
                        <Calendar size={10} />
                        <span>{project.completionDate}</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold font-display text-white leading-snug group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-[11px] line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t border-brand-dark-border/40 mt-4">
                    {project.stats.slice(0, 2).map((st, i) => (
                      <div key={i}>
                        <p className="text-[9px] text-gray-500 uppercase tracking-wider">{st.label}</p>
                        <p className="text-xs font-bold text-gray-300">{st.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-brand-dark/40 border-t border-brand-dark-border/50 flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin size={12} className="text-brand-blue" />
                    <span>{project.location}</span>
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs text-brand-blue hover:text-white font-bold flex items-center gap-1 group"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
