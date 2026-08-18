"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAssistant } from "@/contexts/AssistantContext";
import { t, assistantGreetings } from "@/data/translations";

function greetingForPath(pathname: string, lang: "ar" | "en") {
  const key = Object.keys(assistantGreetings).find((k) => pathname === `/${k}` || pathname.startsWith(`/${k}/`) || pathname.startsWith(`/services/${k}`));
  if (!key) return null;
  return assistantGreetings[key][lang];
}

export default function Assistant() {
  const { lang } = useLanguage();
  const pathname = usePathname() || "/";
  const c = t(lang);
  const { isOpen: open, open: openChat, close: closeChat } = useAssistant();
  const [conversation, setConversation] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const contextLine = greetingForPath(pathname, lang);
  const greeting = contextLine || c.assistant.defaultGreeting;

  const choose = (x: string) => setConversation((cv) => [...cv, x, c.assistant.followUp]);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setConversation((cv) => [...cv, message, c.assistant.end]);
      setMessage("");
    }
  };

  return (
    <>
      <button
        aria-label="AI assistant"
        onClick={openChat}
        className="fixed bottom-6 start-6 z-30 grid h-14 w-14 place-items-center rounded-full border border-[#b89558]/50 bg-[#fbf7ef] text-[#6b421f] shadow-xl transition hover:scale-105"
      >
        <Sparkles size={23} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 25 }}
            className="fixed bottom-6 start-6 z-50 flex h-[min(590px,calc(100vh-48px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-[#6b421f]/20 bg-[#fbf7ef] shadow-2xl"
          >
            <div className="flex items-center justify-between bg-[#6b421f] p-4 text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="text-sm font-bold">{c.assistant.title}</span>
              </div>
              <button aria-label="Close chat" onClick={closeChat}>
                <X size={19} />
              </button>
            </div>
            <div className="flex-1 space-y-3 overflow-auto p-4">
              <div className="max-w-[88%] rounded-2xl rounded-ss-sm bg-[#e5d2ae] p-3 text-sm leading-6 text-[#412814]">
                {greeting}
              </div>
              {conversation.map((x, i) => (
                <div
                  key={i}
                  className={`max-w-[88%] rounded-2xl p-3 text-sm leading-6 ${
                    i % 2 === 0 ? "ms-auto rounded-se-sm bg-[#6b421f] text-white" : "rounded-ss-sm bg-[#e5d2ae] text-[#412814]"
                  }`}
                >
                  {x}
                </div>
              ))}
              {conversation.length === 0 && (
                <div className="space-y-2 pt-2">
                  {c.assistant.defaultOptions.map((x) => (
                    <button
                      key={x}
                      onClick={() => choose(x)}
                      className="block w-full rounded-lg border border-[#6b421f]/20 p-3 text-start text-sm font-semibold text-[#6b421f] transition hover:bg-[#f3e7cf]"
                    >
                      {x}
                    </button>
                  ))}
                </div>
              )}
              {conversation.length > 0 && (
                <Link
                  href="/request"
                  className="mt-1 flex items-center justify-center gap-2 rounded-lg bg-[#412814] p-3 text-sm font-bold text-white no-underline"
                >
                  <MessageCircle size={15} />
                  {c.assistant.openRequest}
                </Link>
              )}
            </div>
            <form onSubmit={submit} className="flex gap-2 border-t border-[#6b421f]/10 p-3">
              <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="input !py-2 text-sm"
                placeholder={c.assistant.enter}
              />
              <button aria-label="Send" className="grid w-10 shrink-0 place-items-center rounded-lg bg-[#6b421f] text-white">
                <Send size={16} />
              </button>
            </form>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
