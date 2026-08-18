"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";
import { blogArticles } from "@/data/blog";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / المدونة",
    title: "المدونة العقارية",
    description: "رؤى عملية تساعدك على قراءة السوق واتخاذ قرارك العقاري بثقة.",
    read: "اقرأ المقال",
    comingSoon: "قريباً",
    ctaTitle: "تحدث معنا عن احتياجك العقاري",
    ctaText: "لديك سؤال عقاري؟ أرسل طلبك وسنساعدك.",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / BLOG",
    title: "Real Estate Blog",
    description: "Practical insight to help you read the market and decide with confidence.",
    read: "Read article",
    comingSoon: "Coming soon",
    ctaTitle: "Talk to us about your property need",
    ctaText: "Have a property question? Send your request and we will help.",
  },
};

export default function BlogPage() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: lang === "ar" ? "المدونة" : "Blog" }]} />

      <section className="section">
        <div className="shell grid gap-6 md:grid-cols-2">
          {blogArticles.map((a) => {
            const title = lang === "ar" ? a.titleAr : a.titleEn;
            const excerpt = lang === "ar" ? a.excerptAr : a.excerptEn;
            const card = (
              <>
                <div className="relative">
                  <img
                    className={`h-56 w-full object-cover transition duration-500 ${a.hasPage ? "group-hover:scale-105" : "opacity-70"}`}
                    src={`https://images.unsplash.com/photo-${a.image}?auto=format&fit=crop&w=900&q=80`}
                    alt={title}
                  />
                  {!a.hasPage && (
                    <span className="absolute end-4 top-4 rounded-full bg-[#412814] px-3 py-1.5 text-[.65rem] font-bold tracking-[.1em] text-[#f3e7cf]">
                      {l.comingSoon}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-[.65rem] font-bold tracking-[.15em] text-[#b89558]">ALRAIHAN JOURNAL</p>
                  <h2 className={`mt-3 text-xl font-semibold text-[#412814] ${displayFont}`}>{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#796a5b]">{excerpt}</p>
                  {a.hasPage && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6b421f]">
                      {l.read}
                      <Arrow size={16} />
                    </span>
                  )}
                </div>
              </>
            );
            return a.hasPage ? (
              <Link href={`/blog/${a.slug}`} key={a.slug} className="group overflow-hidden rounded-2xl border border-[#6b421f]/15 bg-white text-inherit no-underline">
                {card}
              </Link>
            ) : (
              <div key={a.slug} className="group overflow-hidden rounded-2xl border border-[#6b421f]/15 bg-white text-inherit">
                {card}
              </div>
            );
          })}
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
