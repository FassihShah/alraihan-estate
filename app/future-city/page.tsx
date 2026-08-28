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
const galleryImages = [
  "/images/WhatsApp Image 2026-08-25 at 12.27.10 AM.jpeg",
  "/images/WhatsApp Image 2026-08-25 at 12.27.10.jpeg",
  "/images/WhatsApp Image 2026-08-25 at 12.29.25 AM.jpeg",
];

const locationVideos = [
  { src: "/images/WhatsApp Video 2026-08-25 at 12.27.10 AM.mp4", poster: "/images/WhatsApp Image 2026-08-25 at 12.27.10 AM.jpeg" },
];

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
        image="/images/WhatsApp Image 2026-08-25 at 12.27.10 AM.jpeg"
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
                  src={img}
                  alt={lang === "ar" ? "صورة موقع أو تطوير عمراني توضيحية" : "Illustrative location or urban-development visual"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className={`section-title ${displayFont}`}>{lang === "ar" ? "مشاهدة الموقع" : "Location Media"}</h2>
          <p className="max-w-xl leading-8 text-[#746557]">{lang === "ar" ? "مادة مرئية مرتبطة بالموقع لمساعدتك على تكوين انطباع أوضح قبل إرسال طلبك." : "Location media to help you build a clearer impression before submitting your request."}</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {locationVideos.map((video) => (
              <video key={video.src} controls preload="metadata" poster={video.poster} className="w-full rounded-2xl bg-[#402713]" aria-label={lang === "ar" ? "فيديو موقع" : "Location video"}>
                <source src={video.src} type="video/mp4" />
                {lang === "ar" ? "المتصفح لا يدعم تشغيل الفيديو." : "Your browser does not support video playback."}
              </video>
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
