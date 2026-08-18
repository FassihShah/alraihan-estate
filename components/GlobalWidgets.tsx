"use client";

import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import WhatsAppModal from "./WhatsAppModal";
import Assistant from "./Assistant";

export default function GlobalWidgets() {
  const { open } = useWhatsApp();
  return (
    <>
      <button
        aria-label="WhatsApp"
        onClick={open}
        className="fixed bottom-6 end-6 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#6b421f] text-white shadow-xl transition hover:scale-105"
      >
        <MessageCircle size={25} />
      </button>
      <Assistant />
      <WhatsAppModal />
    </>
  );
}
