"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t, WHATSAPP_NUMBER } from "@/data/translations";

export default function WhatsAppModal() {
  const { lang } = useLanguage();
  const { isOpen, close } = useWhatsApp();
  const c = t(lang);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-[#33271d]/45 p-4"
          onClick={close}
        >
          <motion.div
            initial={{ scale: 0.96, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-[#fbf7ef] p-7 text-center shadow-2xl"
          >
            <MessageCircle className="mx-auto text-[#6b421f]" size={35} />
            <h3 className="mt-4 text-xl font-bold text-[#412814]">WhatsApp</h3>
            <p className="mt-3 leading-7 text-[#796a5b]">{c.whatsappDemo}</p>
            <button onClick={close} className="btn btn-primary mt-6">
              {c.close}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function whatsappHref() {
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : null;
}
