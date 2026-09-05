"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BackButton({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  const { lang } = useLanguage();
  const router = useRouter();
  const Arrow = lang === "ar" ? ArrowRight : ArrowLeft;
  const label = lang === "ar" ? "رجوع" : "Back";

  const goBack = () => {
    if (typeof window === "undefined") return;
    let sameOriginHistory = false;
    try {
      sameOriginHistory =
        Boolean(document.referrer) && new URL(document.referrer).origin === window.location.origin;
    } catch {
      sameOriginHistory = false;
    }
    if (sameOriginHistory && window.history.length > 1) router.back();
    else router.push("/");
  };

  return (
    <button
      type="button"
      onClick={goBack}
      aria-label={label}
      className={`inline-flex items-center gap-2 text-xs font-bold tracking-[.08em] transition hover:opacity-70 ${
        dark ? "text-[#e5d2ae]" : "text-[#68421f]"
      } ${className}`}
    >
      <Arrow size={15} />
      {label}
    </button>
  );
}
