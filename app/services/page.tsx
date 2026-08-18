"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";
import { services } from "@/data/services";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / خدماتنا",
    title: "خدمات عقارية مبنية على احتياجك",
    description: "نهج هادئ وواضح لمساعدتك في كل مرحلة من قرارك العقاري.",
    howTitle: "كيف تساعدك الريحان",
    steps: ["نفهم احتياجك", "نحدد نوع العقار", "نراجع الخيارات", "نساعدك في اتخاذ القرار"],
    ctaTitle: "أرسل طلبك العقاري",
    ctaText: "شاركنا احتياجك وسنبدأ من حيث يهمك.",
    explore: "اكتشف الخدمة",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / SERVICES",
    title: "Real estate services built around your needs",
    description: "A calm, clear approach to every stage of your property decision.",
    howTitle: "How ALRAIHAN Helps",
    steps: ["Understand your requirement", "Identify the property type", "Review suitable options", "Help you make the decision"],
    ctaTitle: "Submit Your Property Requirement",
    ctaText: "Share your need and we will begin where it matters to you.",
    explore: "Explore service",
  },
};

export default function ServicesPage() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: lang === "ar" ? "خدماتنا" : "Services" }]} />

      <section className="section">
        <div className="shell">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              const title = lang === "ar" ? s.titleAr : s.titleEn;
              const desc = lang === "ar" ? s.descAr : s.descEn;
              const inner = (
                <>
                  <span className="text-xs font-bold tracking-[.16em] text-[#b39157]">0{i + 1}</span>
                  <span className="absolute end-7 top-7 grid h-10 w-10 place-items-center border border-[#68421f]/15 text-[#68421f]">
                    <Icon size={19} />
                  </span>
                  <div className="mt-14">
                    <h3 className="text-xl font-bold text-[#402713]">{title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-[#746557]">{desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#68421f]">
                      {l.explore}
                      <Arrow size={17} />
                    </span>
                  </div>
                </>
              );
              return s.href ? (
                <Link href={s.href} key={s.key} className="group relative overflow-hidden border border-[#68421f]/18 bg-[#faf5ea] p-7 text-inherit no-underline transition hover:border-[#68421f]/45 hover:bg-[#f1e4cb]">
                  {inner}
                </Link>
              ) : (
                <article key={s.key} className="group relative overflow-hidden border border-[#68421f]/18 bg-[#faf5ea] p-7 transition hover:border-[#68421f]/45 hover:bg-[#f1e4cb]">
                  {inner}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#412814] text-[#fbf7ef]">
        <div className="shell">
          <p className="eyebrow !text-[#e5d2ae]">PROCESS</p>
          <h2 className={`mt-3 text-3xl font-semibold md:text-4xl ${displayFont}`}>{l.howTitle}</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {l.steps.map((s, i) => (
              <div key={s} className="flex items-center gap-4 md:flex-col md:items-start md:gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#b39157]/50 text-lg font-bold text-[#e4d0ac]">
                  {i + 1}
                </span>
                <p className="text-base font-semibold text-[#f3e7cf]">{s}</p>
                {i < l.steps.length - 1 && <div className="hidden h-px flex-1 bg-[#b39157]/30 md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell rounded-3xl bg-[#6b421f] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-16">
          <h2 className={`mx-auto max-w-2xl text-3xl font-semibold md:text-5xl ${displayFont}`}>{l.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/75">{l.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/request" className="btn bg-[#fbf7ef] text-[#6b421f]">
              {c.submitRequirement}
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
