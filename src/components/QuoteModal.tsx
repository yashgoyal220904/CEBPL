"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export default function QuoteModal({ isOpen, onClose, prefilledService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledService) {
      setFormData(prev => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService, isOpen]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset form after close animation completes
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg bg-brand-dark-card border border-brand-dark-border rounded-xl p-6 md:p-8 shadow-2xl z-10 overflow-y-auto max-h-[90vh] glow-blue"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {!isSuccess ? (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-display text-white">
                    Request a <span className="text-brand-blue">Quote</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Fill out the form below, and our engineering team will get back to you with a customized technical proposal.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Sterling Industries Ltd."
                      className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rajesh@sterling.com"
                        className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Service Category
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm appearance-none"
                      style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%232DA8E0' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center", backgroundSize: "16px" }}
                    >
                      <option value="" disabled className="bg-brand-dark-card">Select a service category</option>
                      <option value="ht-lt-works" className="bg-brand-dark-card">HT/LT Electrical Works</option>
                      <option value="internal-external-electrification" className="bg-brand-dark-card">Internal &amp; External Electrification</option>
                      <option value="industrial-installations" className="bg-brand-dark-card">Industrial Electrical Installations</option>
                      <option value="cable-laying-termination" className="bg-brand-dark-card">Cable Laying &amp; Termination</option>
                      <option value="transformer-installation" className="bg-brand-dark-card">Transformer Installation</option>
                      <option value="testing-commissioning" className="bg-brand-dark-card">Testing &amp; Commissioning</option>
                      <option value="electrical-maintenance" className="bg-brand-dark-card">Electrical Maintenance</option>
                      <option value="power-distribution" className="bg-brand-dark-card">Power Distribution Systems</option>
                      <option value="turnkey-projects" className="bg-brand-dark-card">Turnkey Electrical Projects</option>
                      <option value="infrastructure-development" className="bg-brand-dark-card">Infrastructure Development</option>
                      <option value="government-projects" className="bg-brand-dark-card">Government Projects</option>
                      <option value="commercial-electrification" className="bg-brand-dark-card">Commercial Electrical Works</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Project Description
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project scope, location, and timeline requirements..."
                      className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-brand-blue text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-brand-blue/20 transition-all duration-200 text-sm mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Processing Request...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Submit Technical Inquiry
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                  <CheckCircle2 size={40} className="animate-bounce" />
                </div>
                <h4 className="text-xl font-bold font-display text-white mb-2">
                  Inquiry Submitted Successfully
                </h4>
                <p className="text-gray-400 text-sm max-w-sm mb-6">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your request for <span className="text-brand-blue font-medium">{formData.company}</span> has been logged. Our engineering desk will contact you within 24 business hours.
                </p>
                <button
                  onClick={onClose}
                  className="bg-brand-dark border border-brand-dark-border hover:bg-brand-dark-border text-white px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
