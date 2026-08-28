"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { propertyTypes } from "@/data/propertyTypes";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / العقارات",
    title: "ما نوع العقار الذي تبحث عنه؟",
    description: "اختر النوع الذي يناسب احتياجك، وسنساعدك على البدء بالخيارات المناسبة.",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / PROPERTIES",
    title: "What type of property are you looking for?",
    description: "Choose the type that matches your need, and we will help you begin with the right options.",
  },
};

export default function PropertiesPage() {
  const { lang } = useLanguage();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: lang === "ar" ? "العقارات" : "Properties" }]} />

      <section className="section">
        <div className="shell space-y-14">
          {propertyTypes.map((p, i) => (
            <div key={p.key} id={p.key} className="scroll-mt-28 grid items-center gap-8 md:grid-cols-2">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  className="h-[300px] w-full rounded-2xl object-cover md:h-[380px]"
                  src={p.image}
                  alt={lang === "ar" ? p.titleAr : p.titleEn}
                />
              </div>
              <div>
                <p className="eyebrow">0{i + 1}</p>
                <h2 className={`mt-3 text-3xl font-semibold text-[#412814] md:text-4xl ${displayFont}`}>
                  {lang === "ar" ? p.titleAr : p.titleEn}
                </h2>
                <p className="mt-4 max-w-md leading-8 text-[#746557]">{lang === "ar" ? p.descAr : p.descEn}</p>
                <Link href={`/request?type=${p.key}`} className="btn btn-primary mt-7">
                  {c.submitRequirement}
                  <Arrow size={17} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
