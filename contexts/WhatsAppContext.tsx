"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type WhatsAppContextValue = { isOpen: boolean; open: () => void; close: () => void };

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <WhatsAppContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext);
  if (!ctx) throw new Error("useWhatsApp must be used within WhatsAppProvider");
  return ctx;
}
