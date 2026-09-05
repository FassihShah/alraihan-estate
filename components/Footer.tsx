"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getNav } from "@/data/navigation";
import { t } from "@/data/translations";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  const { lang, toggleLang } = useLanguage();
  const nav = getNav(lang).filter((item) => ["/about", "/services", "/properties", "/blog", "/contact"].includes(item.href));
  const c = t(lang);
  return (
    <footer className="bg-[#412814] py-12 text-[#fbf7ef]">
      <div className="shell grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 rounded-md bg-[#f3e7cf] p-1.5 w-fit">
            <BrandLogo />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#f3e7cf]/70">{c.footerNote}</p>
        </div>
        <div>
          <p className="text-xs font-bold tracking-[.15em] text-[#e5d2ae]">{c.footerNav.toUpperCase()}</p>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="block mt-3 text-sm text-[#f3e7cf]/75 no-underline hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold tracking-[.15em] text-[#e5d2ae]">{c.footerLicense.toUpperCase()}</p>
          <p className="mt-3 text-sm leading-7 text-[#f3e7cf]/75">
            {c.license}
            <br />
            {c.fal}
          </p>
          <button onClick={toggleLang} className="mt-4 text-sm font-bold text-[#e5d2ae]">
            {c.langToggle}
          </button>
        </div>
      </div>
      <div className="shell mt-10 border-t border-white/10 pt-5 text-xs text-[#f3e7cf]/45">{c.rights}</div>
    </footer>
  );
}
