"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AssistantContextValue = { isOpen: boolean; open: () => void; close: () => void; toggle: () => void };

const AssistantContext = createContext<AssistantContextValue | null>(null);

export function AssistantProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AssistantContext.Provider
      value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false), toggle: () => setIsOpen((v) => !v) }}
    >
      {children}
    </AssistantContext.Provider>
  );
}

export function useAssistant() {
  const ctx = useContext(AssistantContext);
  if (!ctx) throw new Error("useAssistant must be used within AssistantProvider");
  return ctx;
}
