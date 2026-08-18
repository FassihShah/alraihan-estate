"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({ trail, dark = false }: { trail: Crumb[]; dark?: boolean }) {
  const { lang } = useLanguage();
  const c = t(lang);
  const Chevron = lang === "ar" ? ChevronLeft : ChevronRight;
  const items: Crumb[] = [{ label: c.breadcrumbHome, href: "/" }, ...trail];
  const color = dark ? "text-[#f3e7cf]/70" : "text-[#796a5b]";
  const currentColor = dark ? "text-[#fbf7ef]" : "text-[#412814]";
  return (
    <nav aria-label="breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-xs font-semibold ${color}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <Chevron size={12} className="opacity-60" />}
          {item.href ? (
            <Link href={item.href} className="no-underline transition hover:opacity-70" style={{ color: "inherit" }}>
              {item.label}
            </Link>
          ) : (
            <span className={currentColor}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
