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
                      src={`https://images.unsplash.com/photo-${offer.image}?auto=format&fit=crop&w=800&q=80`}
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
