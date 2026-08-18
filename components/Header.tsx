"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe2, Menu, MessageCircle, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { getNav } from "@/data/navigation";
import { t } from "@/data/translations";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const { open } = useWhatsApp();
  const pathname = usePathname() || "/";
  const nav = getNav(lang);
  const c = t(lang);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => setMenu(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#6b421f]/15 bg-[#faf5ea]/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-[0_8px_24px_rgba(64,39,19,.07)]" : ""
      }`}
    >
      <div className={`shell flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-[66px]" : "h-[78px]"}`}>
        <Link href="/" aria-label="Home" className="flex items-center gap-2 text-left no-underline">
          <BrandLogo />
        </Link>
        <nav className="hidden items-center gap-6 text-[.82rem] font-semibold text-[#6b421f] lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 py-2 no-underline transition hover:text-[#b89558] ${
                  isActive(item.href) ? "text-[#412814]" : ""
                }`}
              >
                {item.label}
                {item.children && <ChevronDown size={13} />}
              </Link>
              {item.children && (
                <div className="invisible absolute start-0 top-full min-w-[200px] rounded-xl border border-[#6b421f]/15 bg-[#fbf7ef] p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-[#68421f] no-underline transition hover:bg-[#f1e4cb]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="hidden rounded-full border border-[#6b421f]/25 px-3 py-2 text-xs font-bold text-[#6b421f] sm:inline-flex"
          >
            <Globe2 size={14} className="mr-1" />
            {c.langToggle}
          </button>
          <button onClick={open} className="hidden sm:inline-flex btn btn-primary !px-4 !py-2.5">
            <MessageCircle size={16} />
            {c.whatsapp}
          </button>
          <button aria-label="Menu" onClick={() => setMenu(!menu)} className="grid h-10 w-10 place-items-center rounded-full border border-[#6b421f]/25 text-[#6b421f] lg:hidden">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 top-[79px] bottom-0 overflow-y-auto bg-[#faf5ea] lg:hidden"
          >
            <div className="shell flex min-h-full flex-col py-8">
              {nav.map((item) => (
                <div key={item.href} className="border-b border-[#6b421f]/10 py-4">
                  <Link
                    href={item.href}
                    className="block text-start text-2xl font-semibold tracking-tight text-[#412814] no-underline"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="mt-3 flex flex-col gap-3 ps-3">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="text-sm font-semibold text-[#825d3b] no-underline">
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-auto border-t border-[#6b421f]/15 pt-6">
                <p className="mb-4 text-xs tracking-[.13em] text-[#825d3b]">ALRAIHAN REAL ESTATE / RIYADH</p>
                <div className="flex gap-2">
                  <button onClick={toggleLang} className="btn btn-outline flex-1">
                    {c.langToggle}
                  </button>
                  <button onClick={open} className="btn btn-primary flex-1">
                    <MessageCircle size={16} />
                    {c.whatsapp}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
