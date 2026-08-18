"use client";

import Link from "next/link";
import { Building2, Compass, Home, MapPin, Sparkles, Wallet } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/data/translations";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / مدينة المستقبل",
    title: "مدينة المستقبل والرياض",
    description: "نساعدك على تحديد العقار المناسب وفق احتياجك وموقعك المفضل داخل الرياض والمناطق التي تهتم بها.",
    considerTitle: "ما الذي يهمك عند اختيار الموقع؟",
    consider: [
      ["الموقع", "قرب الموقع من عملك واحتياجاتك اليومية."],
      ["نوع العقار", "أرض أو فيلا أو شقة، بحسب هدفك."],
      ["سهولة الوصول", "قرب الطرق الرئيسية ووسائل التنقل."],
      ["الخدمات المحيطة", "المرافق والخدمات القريبة من الموقع."],
      ["أسلوب الحياة", "ملاءمة الموقع لنمط حياتك اليومي."],
      ["الميزانية", "ما يناسب ميزانيتك التقريبية."],
    ],
    galleryTitle: "لمحة من الرياض",
    ctaTitle: "هل تبحث عن عقار في الرياض؟",
    ctaText: "أرسل طلبك وسنساعدك على تحديد الخيارات المناسبة.",
    ctaBtn: "أرسل طلبك",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / FUTURE CITY",
    title: "Future City and Riyadh",
    description: "We help you identify suitable property options based on your requirements and preferred location in Riyadh.",
    considerTitle: "What Matters When Choosing a Location",
    consider: [
      ["Location", "Proximity to your work and daily needs."],
      ["Property Type", "Land, villa or apartment, depending on your goal."],
      ["Accessibility", "Closeness to main roads and transport."],
      ["Surrounding Services", "Facilities and services near the location."],
      ["Lifestyle", "How well the location suits your daily life."],
      ["Budget", "What fits your approximate budget."],
    ],
    galleryTitle: "A Glimpse of Riyadh",
    ctaTitle: "Looking for property in Riyadh?",
    ctaText: "Submit your requirement and we will help you identify the right options.",
    ctaBtn: "Submit Your Requirement",
  },
};

const considerIcons = [MapPin, Home, Compass, Building2, Sparkles, Wallet];
const galleryImages = ["1674822858255-fcc093a1ef43", "1492763204268-fa0b1a55f143", "1551031749-9257c3aee0df", "1758448511487-15f69dd6107b", "1613977257363-707ba9348227"];

export default function FutureCityPage() {
  const { lang } = useLanguage();
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
        trail={[{ label: lang === "ar" ? "مدينة المستقبل" : "Future City" }]}
        variant="image"
        image="1506795213373-430e921fe2ed"
      />

      <section className="section">
        <div className="shell">
          <p className="eyebrow">{l.considerTitle}</p>
          <h2 className={`section-title ${displayFont}`}>{l.considerTitle}</h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {l.consider.map(([title, desc], i) => {
              const Icon = considerIcons[i];
              return (
                <div key={title} className="rounded-2xl border border-[#68421f]/18 bg-[#faf5ea] p-6">
                  <Icon className="text-[#68421f]" size={24} />
                  <h3 className="mt-4 text-lg font-bold text-[#402713]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#746557]">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section border-t border-[#6b421f]/10 bg-[#f3e7cf]">
        <div className="shell">
          <p className="eyebrow">RIYADH</p>
          <h2 className={`section-title ${displayFont}`}>{l.galleryTitle}</h2>
          <div className="mt-8 grid auto-rows-[190px] gap-3 md:grid-cols-4 md:auto-rows-[220px]">
            {galleryImages.map((img, i) => (
              <div key={img} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src={`https://images.unsplash.com/photo-${img}?auto=format&fit=crop&w=${i === 0 ? 1200 : 700}&q=80`}
                  alt="Riyadh"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell rounded-3xl bg-[#412814] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-16">
          <h2 className={`mx-auto max-w-2xl text-3xl font-semibold md:text-5xl ${displayFont}`}>{l.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/75">{l.ctaText}</p>
          <Link href="/request?location=riyadh" className="btn mt-8 bg-[#fbf7ef] text-[#6b421f]">
            {l.ctaBtn}
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
