"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Setup default phone number and inquiry text
  const phoneNumber = "919034695410"; // Prefilled generic Indian corporate line
  const defaultText = encodeURIComponent("Hello CEBPL, I am visiting your website and would like to inquire about your turnkey electrical contracting and infrastructure solutions.");
  const waUrl = `https://wa.me/${phoneNumber}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip banner */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 bg-brand-dark-card border border-brand-dark-border text-white p-3 rounded-lg shadow-xl w-60 text-xs flex items-start gap-2.5 relative glow-gold"
          >
            <div className="flex-1">
              <p className="font-semibold text-brand-gold">Chat with CEBPL Desk</p>
              <p className="text-gray-400 mt-0.5">Need immediate technical support or estimation? Text us now!</p>
            </div>
            <button 
              onClick={() => setShowTooltip(false)} 
              className="text-gray-500 hover:text-white cursor-pointer"
            >
              <X size={14} />
            </button>
            {/* Arrow */}
            <div className="absolute right-5 -bottom-1.5 w-3 h-3 bg-brand-dark-card border-r border-b border-brand-dark-border transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:shadow-[#25D366]/30 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        {/* Animated concentric rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping opacity-75"></span>
        <MessageSquare size={26} fill="white" />
      </motion.a>
    </div>
  );
}
