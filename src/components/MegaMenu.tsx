"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";

interface MegaMenuProps {
  type: "services" | "industries";
  onClose: () => void;
}

export default function MegaMenu({ type, onClose }: MegaMenuProps) {
  if (type === "services") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 0.2 }}
        className="absolute left-0 right-0 top-full bg-brand-dark-card border-b border-brand-dark-border shadow-2xl py-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 z-50 max-h-[80vh] overflow-y-auto"
      >
        {/* Left Column - Featured Intro */}
        <div className="md:col-span-1 border-r border-brand-dark-border pr-6 flex flex-col justify-between">
          <div>
            <h4 className="text-xl font-bold font-display text-white mb-2">
              Engineering <span className="text-brand-blue">Services</span>
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              We design, construct, test, and maintain robust electrical systems for utility, industrial, and commercial grids across India.
            </p>
          </div>
          <Link
            href="/services"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:text-white font-semibold transition-all duration-200"
          >
            All Services Portfolio <ArrowRight size={14} />
          </Link>
        </div>

        {/* Right Columns - Grid of Services */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {servicesData.map((service) => {
            const IconComp = service.icon;
            return (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                onClick={onClose}
                className="group flex gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                <div className="w-9 h-9 shrink-0 bg-brand-dark border border-brand-dark-border rounded-lg flex items-center justify-center text-brand-blue group-hover:text-brand-gold group-hover:border-brand-gold/30 transition-colors duration-200">
                  <IconComp size={18} />
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-white group-hover:text-brand-blue transition-colors duration-200">
                    {service.title}
                  </h5>
                  <p className="text-[10px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    );
  }

  // Industries dropdown
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2 }}
      className="absolute left-0 right-0 top-full bg-brand-dark-card border-b border-brand-dark-border shadow-2xl py-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-6 z-50 max-h-[80vh] overflow-y-auto"
    >
      {/* Left Column - Featured Intro */}
      <div className="md:col-span-1 border-r border-brand-dark-border pr-6 flex flex-col justify-between">
        <div>
          <h4 className="text-xl font-bold font-display text-white mb-2">
            Sectors We <span className="text-brand-gold">Serve</span>
          </h4>
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            Delivering bespoke high-current grids, automated panels, and safety networks across manufacturing plants, hospital grids, and transit networks.
          </p>
        </div>
        <Link
          href="/industries"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 text-xs text-brand-blue hover:text-white font-semibold transition-all duration-200"
        >
          Explore All Industries <ArrowRight size={14} />
        </Link>
      </div>

      {/* Right Columns - Grid of Industries */}
      <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        {industriesData.map((ind) => {
          const IconComp = ind.icon;
          return (
            <Link
              key={ind.id}
              href={`/industries#${ind.id}`}
              onClick={onClose}
              className="group flex gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              <div className="w-9 h-9 shrink-0 bg-brand-dark border border-brand-dark-border rounded-lg flex items-center justify-center text-brand-gold group-hover:text-brand-blue group-hover:border-brand-blue/30 transition-colors duration-200">
                <IconComp size={18} />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-white group-hover:text-brand-gold transition-colors duration-200">
                  {ind.title}
                </h5>
                <p className="text-[10px] text-gray-500 line-clamp-2 mt-0.5 leading-snug">
                  {ind.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
