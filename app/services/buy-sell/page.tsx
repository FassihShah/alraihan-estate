"use client";

import Link from "next/link";
import { CheckCircle2, MessageCircle, ShoppingBag, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";
import { propertyTypes } from "@/data/propertyTypes";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / خدماتنا / البيع والشراء",
    title: "بيع وشراء العقارات",
    description: "نرافقك في كل خطوة من رحلتك، سواء كنت تبحث عن عقار أو ترغب في بيع عقارك.",
    buyTitle: "الشراء",
    buySteps: ["فهم احتياجك", "تحديد نوع العقار المناسب", "تحديد الموقع المفضل", "مراجعة الميزانية", "مراجعة الخيارات المناسبة"],
    sellTitle: "البيع",
    sellSteps: ["فهم تفاصيل عقارك", "جمع معلومات العقار", "تحديد احتياج التسويق", "ربطك بالأطراف المهتمة"],
    typesTitle: "أنواع العقارات",
    ctaBuy: "أرغب بشراء عقار",
    ctaSell: "أرغب ببيع عقار",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / SERVICES / BUYING & SELLING",
    title: "Buying & Selling Property",
    description: "We stay with you through every step, whether you are looking to buy or hoping to sell.",
    buyTitle: "Buying",
    buySteps: ["Understand your requirement", "Choose the right property type", "Identify the preferred location", "Review the budget", "Review suitable options"],
    sellTitle: "Selling",
    sellSteps: ["Understand your property", "Collect property information", "Identify marketing needs", "Connect you with interested parties"],
    typesTitle: "Property Types",
    ctaBuy: "I Want to Buy",
    ctaSell: "I Want to Sell",
  },
};

export default function BuySellPage() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero
        eyebrow={l.eyebrow}
        title={l.title}
        description={l.description}
        trail={[
          { label: lang === "ar" ? "خدماتنا" : "Services", href: "/services" },
          { label: lang === "ar" ? "البيع والشراء" : "Buying & Selling" },
        ]}
      />

      <section className="section">
        <div className="shell grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#6b421f]/18 bg-[#faf5ea] p-8 md:p-10">
            <ShoppingBag className="text-[#68421f]" size={30} />
            <h2 className={`mt-5 text-2xl font-bold text-[#412814] ${displayFont}`}>{l.buyTitle}</h2>
            <ul className="mt-6 space-y-3">
              {l.buySteps.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm leading-7 text-[#514234]">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#b39157]" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/request?purpose=buy" className="btn btn-primary mt-8">
              {l.ctaBuy}
            </Link>
          </article>
          <article className="rounded-2xl bg-[#6b421f] p-8 text-[#fbf7ef] md:p-10">
            <Tag className="text-[#e4d0ac]" size={30} />
            <h2 className={`mt-5 text-2xl font-bold ${displayFont}`}>{l.sellTitle}</h2>
            <ul className="mt-6 space-y-3">
              {l.sellSteps.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm leading-7 text-[#f3e7cf]/85">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#e4d0ac]" />
                  {s}
                </li>
              ))}
            </ul>
            <Link href="/request?purpose=sell" className="btn mt-8 bg-[#fbf7ef] text-[#6b421f]">
              {l.ctaSell}
            </Link>
          </article>
        </div>
      </section>

      <section className="section border-t border-[#6b421f]/10 bg-[#f3e7cf]">
        <div className="shell">
          <p className="eyebrow">{l.typesTitle}</p>
          <h2 className={`section-title ${displayFont}`}>{l.typesTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {propertyTypes.map((p) => (
              <Link
                key={p.key}
                href={`/properties#${p.key}`}
                className="group overflow-hidden rounded-2xl bg-[#fbf7ef] text-inherit no-underline"
              >
                <img
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  src={p.image}
                  alt={lang === "ar" ? p.titleAr : p.titleEn}
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#412814]">{lang === "ar" ? p.titleAr : p.titleEn}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell rounded-3xl bg-[#412814] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-16">
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/request?purpose=buy" className="btn bg-[#fbf7ef] text-[#6b421f]">
              {l.ctaBuy}
            </Link>
            <Link href="/request?purpose=sell" className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]">
              {l.ctaSell}
            </Link>
            <button onClick={open} className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]">
              <MessageCircle size={17} />
              {c.whatsapp}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
