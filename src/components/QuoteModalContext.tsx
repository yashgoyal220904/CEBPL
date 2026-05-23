"use client";

import React, { createContext, useContext, useState } from "react";
import QuoteModal from "./QuoteModal";

interface QuoteModalContextType {
  openQuoteModal: (serviceName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");

  const openQuoteModal = (serviceName?: string) => {
    if (serviceName) setPrefilledService(serviceName);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setPrefilledService("");
  };

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal, closeQuoteModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuoteModal} prefilledService={prefilledService} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
