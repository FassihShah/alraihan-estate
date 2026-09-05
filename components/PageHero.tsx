"use client";

import { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Breadcrumb, { Crumb } from "./Breadcrumb";
import BackButton from "./BackButton";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  trail: Crumb[];
  variant?: "light" | "image";
  image?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, trail, variant = "light", image, children }: Props) {
  const { lang } = useLanguage();
  const displayFont = lang === "ar" ? "arabic-display" : "display";

  if (variant === "image" && image) {
    return (
      <section className="relative overflow-hidden bg-[#412814] py-20 md:py-28">
        <img
          src={image.startsWith("/") ? image : `https://images.unsplash.com/photo-${image}?auto=format&fit=crop&w=1800&q=80`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2c1a0d]/85 via-[#2c1a0d]/65 to-[#412814]" />
        <div className="shell relative z-10">
          <BackButton dark className="mb-4" />
          <Breadcrumb trail={trail} dark />
          <p className="eyebrow mt-6 !text-[#e5d2ae]">{eyebrow}</p>
          <h1 className={`mt-4 max-w-3xl text-[clamp(2.1rem,4.6vw,3.8rem)] font-semibold leading-[1.25] text-[#fbf7ef] ${displayFont}`}>
            {title}
          </h1>
          {description && <p className="mt-5 max-w-2xl text-base leading-8 text-[#f3e7cf]/80">{description}</p>}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className="architectural-grid relative overflow-hidden bg-[#f1e4cb] py-16 md:py-20">
      <span className="watermark bottom-6 start-[46%]">R</span>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(255,255,255,.7),transparent_34%)]" />
      <div className="shell relative z-10">
        <BackButton className="mb-4" />
        <Breadcrumb trail={trail} />
        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className={`mt-4 max-w-3xl text-[clamp(2.1rem,4.6vw,3.8rem)] font-semibold leading-[1.25] text-[#402713] ${displayFont}`}>
          {title}
        </h1>
        {description && <p className="mt-5 max-w-2xl text-base leading-8 text-[#5e4d3c]">{description}</p>}
        {children}
      </div>
    </section>
  );
}
