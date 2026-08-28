"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";
import { demoOffers } from "@/data/offers";
import { propertyTypes } from "@/data/propertyTypes";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / العروض",
    title: "العروض العقارية",
    description: "يمكن عرض الفرص والعروض العقارية المتاحة هنا عند إضافتها.",
    demoLabel: "نموذج عرض",
    empty: "نعمل على إضافة العروض العقارية المتاحة. يمكنك إرسال طلبك الآن وسنتواصل معك وفق احتياجك.",
    ctaTitle: "أخبرنا بما تبحث عنه",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / OFFERS",
    title: "Real Estate Offers",
    description: "Available real estate opportunities and offers can be presented here when added.",
    demoLabel: "Demo Offer",
    empty: "Available real estate opportunities will be added here. You can submit your requirement now and we can follow up based on what you are looking for.",
    ctaTitle: "Tell Us What You're Looking For",
  },
};

export default function OffersPage() {
  const { lang } = useLanguage();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: lang === "ar" ? "العروض" : "Offers" }]} />

      <section className="section">
        <div className="shell">
          <div className="grid gap-5 md:grid-cols-3">
            {demoOffers.map((offer) => {
              const p = propertyTypes.find((pt) => pt.key === offer.type)!;
              return (
                <div key={offer.type} className="relative overflow-hidden rounded-2xl border border-[#68421f]/15 bg-[#faf5ea]">
                  <span className="absolute start-4 top-4 z-10 rounded-full bg-[#412814] px-3 py-1.5 text-[.65rem] font-bold tracking-[.1em] text-[#f3e7cf]">
                    {l.demoLabel}
                  </span>
                  <div className="relative">
                    <img
                      className="h-56 w-full object-cover opacity-90"
                      src={offer.image}
                      alt={lang === "ar" ? p.titleAr : p.titleEn}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold tracking-[.13em] text-[#b89558]">{(lang === "ar" ? p.titleAr : p.titleEn).toUpperCase()}</p>
                    <p className="mt-3 text-sm leading-7 text-[#796a5b]">
                      {lang === "ar" ? "منطقة نموذجية" : "Placeholder area"}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <h2 className={`section-title ${displayFont}`}>{lang === "ar" ? "مشاريع تجارية" : "Commercial Projects"}</h2>
            <p className="max-w-xl leading-8 text-[#746557]">{lang === "ar" ? "صور للمشاريع والفرص التجارية، ويمكنك التواصل معنا لمعرفة التفاصيل المتاحة." : "Visuals for commercial projects and opportunities. Contact us for the available details."}</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "/images/WhatsApp Image 2026-08-25 at 12.27.08 A.jpeg",
                "/images/WhatsApp Image 2026-08-25 at 12.27.08 AM.jpeg",
                "/images/WhatsApp Image 2026-08-25 at 12.27.08.jpeg",
              ].map((image) => (
                <img key={image} src={image} alt={lang === "ar" ? "مشروع تجاري" : "Commercial project"} className="h-72 w-full rounded-2xl object-cover" />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className={`section-title ${displayFont}`}>{lang === "ar" ? "فيديوهات المشاريع" : "Project Videos"}</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { src: "/images/WhatsApp Video 2026-08-25 at 12.27.06 AM.mp4", poster: "/images/WhatsApp Image 2026-08-25 at 12.27.08 A.jpeg" },
                { src: "/images/WhatsApp Video 2026-08-25 at 12.27.07 AM.mp4", poster: "/images/WhatsApp Image 2026-08-25 at 12.27.08.jpeg" },
              ].map((video) => (
                <video key={video.src} controls preload="metadata" poster={video.poster} className="w-full rounded-2xl bg-[#402713]" aria-label={lang === "ar" ? "فيديو مشروع" : "Project video"}>
                  <source src={video.src} type="video/mp4" />
                  {lang === "ar" ? "المتصفح لا يدعم تشغيل الفيديو." : "Your browser does not support video playback."}
                </video>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-[#6b421f]/15 bg-[#f3e7cf] p-8 text-center">
            <p className="leading-8 text-[#514234]">{l.empty}</p>
            <Link href="/request" className="btn btn-primary mt-6">
              {c.submitRequirement}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
