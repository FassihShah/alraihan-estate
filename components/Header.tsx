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
    <>
      <header className={`sticky top-0 z-40 border-b border-[#6b421f]/15 bg-[#faf5ea]/95 backdrop-blur ${scrolled ? "shadow-[0_8px_24px_rgba(64,39,19,.10)]" : ""}`}>
        <div className="bg-[#402713] text-[#fbf7ef]">
          <div className="shell flex min-h-[78px] items-center justify-between gap-3 py-3 sm:min-h-[86px]">
            <Link href="/" aria-label="ALRAIHAN REAL ESTATE home" className="flex min-w-0 items-center gap-3 no-underline sm:gap-4">
              <span className="grid h-14 w-[68px] shrink-0 place-items-center rounded-md bg-[#f3e7cf] p-1 sm:h-16 sm:w-[78px]">
                <BrandLogo className="!h-12 !max-w-[60px] sm:!h-14 sm:!max-w-[70px]" />
              </span>
              <span className="min-w-0 text-start leading-tight">
                <b className="block truncate text-lg font-semibold sm:text-xl">{lang === "ar" ? "الريحان العقارية" : "ALRAIHAN REAL ESTATE"}</b>
                <small className="mt-1 block truncate text-[.63rem] font-bold tracking-[.12em] text-[#e5d2ae] sm:text-[.68rem]">{lang === "ar" ? "ALRAIHAN REAL ESTATE COMPANY" : "شركة الريحان العقارية"}</small>
              </span>
            </Link>
            <div className="flex shrink-0 items-center gap-2">
              <button onClick={toggleLang} className="hidden rounded-full border border-[#e5d2ae]/45 px-3 py-2 text-xs font-bold text-[#fbf7ef] sm:inline-flex">
                <Globe2 size={14} className="mr-1" />
                {c.langToggle}
              </button>
              <button onClick={open} className="hidden rounded-lg bg-[#f3e7cf] px-4 py-2.5 text-xs font-bold text-[#402713] sm:inline-flex sm:items-center sm:gap-2">
                <MessageCircle size={16} />
                {c.whatsapp}
              </button>
              <button aria-label="Menu" onClick={() => setMenu(!menu)} className="grid h-10 w-10 place-items-center rounded-full border border-[#e5d2ae]/45 text-[#fbf7ef] lg:hidden">
                {menu ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-[#e5d2ae]/20 bg-[#faf5ea]">
          <div className="shell flex h-[56px] items-center justify-center">
            <nav className="hidden items-center justify-center gap-6 text-[.82rem] font-semibold text-[#6b421f] lg:flex">
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
            <p className="text-center text-[.67rem] font-bold tracking-[.13em] text-[#825d3b] lg:hidden">ALRAIHAN REAL ESTATE</p>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="fixed inset-x-0 bottom-0 top-[134px] z-40 overflow-y-auto bg-[#faf5ea] lg:hidden"
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
    </>
  );
}
