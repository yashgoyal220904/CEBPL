"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, CheckCircle2, Clock, Landmark, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      <Navbar />

      {/* Header Banner */}
      <section className="relative py-20 border-b border-brand-dark-border overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs text-brand-blue uppercase font-bold tracking-widest">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-white">
            Connect With Our Engineering Desk
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Reach out to our estimating, design, or administration teams for rate analysis, bid requests, or general inquiries.
          </p>
        </div>
      </section>

      {/* Grid of contact details & Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (Details) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-display text-white border-l-4 border-brand-blue pl-4">
                Corporate Headquarters
              </h2>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our main offices are located in Noida, UP, coordinating materials logistics and design cells for projects operating nationwide.
              </p>
            </div>

            <div className="space-y-5">
              {/* Corporate Office */}
              <div className="flex gap-4 p-4 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-blue/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Corporate Office (Noida)</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Corporate Plaza, Block C, Sector 62, Noida, Uttar Pradesh - 201301
                  </p>
                </div>
              </div>

              {/* Registered Office */}
              <div className="flex gap-4 p-4 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-gold/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Registered Office (Vaishali, Bihar)</h4>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    C/o Kanti Devi Village, Pirapur, Block-Jandaha, Vaishali, Bihar - 844505
                  </p>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="flex gap-4 p-4 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-blue/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                  <Phone size={20} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-white">Contact Info</h4>
                  <p className="text-gray-400 text-xs">
                    <span className="font-semibold text-white">Phone / WhatsApp:</span> +91 90346 95410
                  </p>
                </div>
              </div>

              {/* Legal Registry */}
              <div className="flex gap-4 p-4 bg-brand-dark-card border border-brand-dark-border rounded-xl hover:border-brand-gold/20 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Landmark size={20} />
                </div>
                <div className="space-y-1 text-xs">
                  <h4 className="text-sm font-bold text-white mb-2">Legal &amp; Statutory Credentials</h4>
                  <p className="text-gray-400"><span className="font-semibold text-white">CIN:</span> <span className="font-mono text-brand-blue">U43211BR2025PTC076379</span></p>
                  <p className="text-gray-400"><span className="font-semibold text-white">PAN:</span> <span className="font-mono text-brand-gold">AAMCC7725K</span></p>
                  <p className="text-gray-400"><span className="font-semibold text-white">TAN:</span> <span className="font-mono text-brand-blue">PTNC05264A</span></p>
                </div>
              </div>
            </div>

            {/* Quick Operational Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-dark-border/40">
              <div className="flex items-start gap-2 text-xs">
                <Clock size={16} className="text-brand-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Working Hours</p>
                  <p className="text-gray-500 mt-0.5">Mon - Sat: 9 AM - 6 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <Shield size={16} className="text-brand-blue mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Support SLA</p>
                  <p className="text-gray-500 mt-0.5">Within 24 Hours Response</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Contact Form) */}
          <div className="lg:col-span-7 bg-brand-dark-card border border-brand-dark-border rounded-2xl p-8 shadow-2xl relative overflow-hidden glow-blue">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full filter blur-2xl pointer-events-none" />

            {!isSuccess ? (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold font-display text-white">
                    Submit an <span className="text-brand-blue">Inquiry</span>
                  </h3>
                  <p className="text-gray-400 text-xs mt-1">
                    Fill out the form below. Our team will get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Sahay"
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
                        placeholder="ramesh@gmail.com"
                        className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Tender Inquiry / Rate Contract"
                        className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Message / Inquiry Details *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the scope details, load capacity, site locations, and deadline schedules..."
                      className="w-full bg-brand-dark border border-brand-dark-border rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition duration-200 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-500 hover:to-brand-blue text-white py-3.5 rounded-lg font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-brand-blue/20 transition-all duration-200 text-sm mt-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                  <CheckCircle2 size={40} className="animate-bounce" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-gray-400 text-sm max-w-sm mb-6">
                  Thank you for contacting us. Your message has been routed to our project estimation cell. We will get back to you within 24 business hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="bg-brand-dark border border-brand-dark-border hover:bg-brand-dark-border text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  Send another message
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Styled Google Maps Placeholder Section */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-4 mb-6 text-center md:text-left">
          <h3 className="text-lg font-bold font-display text-white flex items-center gap-2 justify-center md:justify-start">
            <Landmark size={18} className="text-brand-gold" />
            Geographical Coordinates
          </h3>
          <p className="text-gray-400 text-xs max-w-lg">
            Our corporate headquarters coordinates operations across India. Check our location overlay details below.
          </p>
        </div>

        {/* Customized Dark Map Emblem Box */}
        <div className="relative h-96 w-full bg-brand-dark-card border border-brand-dark-border rounded-2xl overflow-hidden flex items-center justify-center p-6 text-center glow-gold">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[radial-gradient(#202020_1px,transparent_1px)] [background-size:16px_16px] opacity-40 z-0"></div>
          
          {/* Abstract map outlines / paths representing grid connectivity */}
          <svg className="absolute inset-0 w-full h-full text-brand-dark-border opacity-30 pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M50,100 C150,100 200,200 300,150 S450,50 600,120 S800,300 1000,180" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M100,200 C300,300 400,100 550,220 S700,50 900,100" fill="none" stroke="currentColor" strokeWidth="1" />
            <path d="M50,50 L950,350" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="5,5" />
            {/* Some connectivity node hubs */}
            <circle cx="300" cy="150" r="8" fill="#141414" stroke="currentColor" strokeWidth="2" />
            <circle cx="550" cy="220" r="10" fill="#141414" stroke="currentColor" strokeWidth="2" />
            <circle cx="600" cy="120" r="8" fill="#141414" stroke="currentColor" strokeWidth="2" />
          </svg>

          {/* Core locator mark */}
          <div className="relative z-10 space-y-4 max-w-sm mx-auto">
            {/* Glowing target */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <span className="absolute -inset-4 rounded-full bg-brand-blue/10 animate-ping"></span>
              <span className="absolute -inset-2 rounded-full bg-brand-blue/20 animate-pulse"></span>
              <div className="w-12 h-12 bg-brand-dark border border-brand-blue rounded-full flex items-center justify-center text-brand-blue glow-blue">
                <MapPin size={24} fill="currentColor" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-bold text-white font-display">CEBPL Head Office</p>
              <p className="text-xs text-brand-gold font-mono">28.6273&deg; N, 77.3725&deg; E</p>
              <p className="text-[11px] text-gray-400 leading-relaxed mt-1.5">
                Sector 62, Noida, Uttar Pradesh. <br />
                Connected directly to National Highway 24.
              </p>
            </div>
            <div className="pt-2">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-dark hover:bg-brand-dark-border border border-brand-dark-border hover:border-brand-blue/30 text-white px-5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider inline-block cursor-pointer transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}
