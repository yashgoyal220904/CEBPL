"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";
import MegaMenu from "./MegaMenu";
import { useQuoteModal } from "./QuoteModalContext";
import { servicesData } from "@/data/services";
import { industriesData } from "@/data/industries";

export default function Navbar() {
  const pathname = usePathname();
  const { openQuoteModal } = useQuoteModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"services" | "industries" | null>(null);
  
  // Mobile accordion states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true, type: "services" as const },
    { name: "Projects", path: "/projects" },
    { name: "Industries", path: "/industries", hasDropdown: true, type: "industries" as const },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Banner (Contact / Social info) */}
      <div className="hidden lg:flex bg-brand-dark border-b border-brand-dark-border py-2 px-6 justify-between items-center text-xs text-gray-400 font-sans z-50 relative top-nav-banner">
        <div className="flex gap-6">
          <div className="flex items-center gap-1.5">
            <Phone size={12} className="text-brand-gold" />
            <span>+91 90346 95410</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span>Class-A Electrical Contracting &amp; EPC Contractor</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-gray-300">Active projects nationwide</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 lg:top-8 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "glassmorphism lg:top-0 py-3 shadow-lg" 
            : "bg-brand-dark/95 backdrop-blur-sm border-b border-white/5 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/logo.png"
              alt="CEBPL Logo"
              className="h-12 md:h-16 lg:h-20 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setActiveMega(link.type || null)}
                    onMouseLeave={() => setActiveMega(null)}
                  >
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 cursor-pointer ${
                        pathname.startsWith(link.path) 
                          ? "text-brand-blue font-semibold" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          activeMega === link.type ? "transform rotate-180 text-brand-gold" : ""
                        }`}
                      />
                    </button>
                  </div>
                );
              }
              
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm font-medium transition-all duration-200 ${
                    pathname === link.path 
                      ? "text-brand-blue font-semibold" 
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Area (Call to Action) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => openQuoteModal()}
              className="bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-brand-blue text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-brand-blue/20 cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-300 hover:text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mega Menu Dropdowns (Desktop Hover) */}
        <AnimatePresence>
          {activeMega && (
            <div
              className="hidden lg:block absolute left-0 right-0 top-full"
              onMouseEnter={() => setActiveMega(activeMega)}
              onMouseLeave={() => setActiveMega(null)}
            >
              <MegaMenu type={activeMega} onClose={() => setActiveMega(null)} />
            </div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer for sticky header */}
      <div className="h-20 lg:h-28"></div>

      {/* Mobile Drawer (Menu Overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/90 backdrop-blur-md lg:hidden"
            />

            {/* Content Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-brand-dark-card border-l border-brand-dark-border p-6 shadow-2xl overflow-y-auto lg:hidden flex flex-col justify-between"
            >
              <div className="mt-8">
                {/* Mobile Drawer Header */}
                <div className="flex justify-between items-center pb-6 border-b border-brand-dark-border">
                  <img src="/logo.png" alt="CEBPL Logo" className="h-12 w-auto object-contain" />
                  <button onClick={() => setMobileMenuOpen(false)} className="text-gray-400 hover:text-white cursor-pointer">
                    <X size={22} />
                  </button>
                </div>

                {/* Mobile Navigation List */}
                <nav className="mt-6 space-y-4">
                  {navLinks.map((link) => {
                    if (link.hasDropdown) {
                      const isServices = link.type === "services";
                      const isOpen = isServices ? mobileServicesOpen : mobileIndustriesOpen;
                      const setOpen = isServices ? setMobileServicesOpen : setMobileIndustriesOpen;
                      const subItems = isServices ? servicesData : industriesData;

                      return (
                        <div key={link.name} className="border-b border-brand-dark-border/40 pb-2">
                          <button
                            onClick={() => setOpen(!isOpen)}
                            className="flex justify-between items-center w-full py-2 text-base font-semibold text-gray-200 cursor-pointer"
                          >
                            <span>{link.name}</span>
                            <ChevronDown size={18} className={`transition-transform duration-200 text-brand-blue ${isOpen ? "transform rotate-180 text-brand-gold" : ""}`} />
                          </button>
                          
                          {/* Submenu Accordion */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="pl-4 mt-2 space-y-2 overflow-hidden"
                              >
                                {subItems.map((item) => (
                                  <Link
                                    key={item.id}
                                    href={`/${link.type}#${item.id}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-1.5 text-sm text-gray-400 hover:text-brand-blue transition-colors"
                                  >
                                    {item.title}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={link.name}
                        href={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2.5 border-b border-brand-dark-border/40 text-base font-semibold transition-colors ${
                          pathname === link.path ? "text-brand-blue border-brand-blue/30" : "text-gray-200 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Mobile Drawer Bottom Info & CTA */}
              <div className="mt-8 border-t border-brand-dark-border pt-6 space-y-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full bg-gradient-to-r from-brand-blue to-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 text-sm uppercase tracking-wide cursor-pointer"
                >
                  Get a Quote <ArrowRight size={16} />
                </button>
                <div className="space-y-2 text-xs text-gray-400">
                  <p className="flex items-center gap-2">
                    <Phone size={12} className="text-brand-gold" />
                    +91 90346 95410
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
