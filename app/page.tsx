"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ExternalLink, MapPin, MessageCircle, ShieldCheck, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OfficePhoto from "@/components/OfficePhoto";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";
import { services } from "@/data/services";
import { propertyTypes } from "@/data/propertyTypes";

const copy = {
  ar: {
    hero: "قرارات عقارية أوضح تبدأ من فهم احتياجك", heroEn: "Real estate guidance, shaped around you",
    intro: "نساعدك على الوصول إلى العقار المناسب في الرياض بخدمة شخصية ومعرفة محلية دقيقة.",
    services: "خدماتنا العقارية", servicesEn: "Real Estate Services", servicesText: "الخدمات الأساسية التي تساعدك في كل مرحلة من قرارك العقاري.", exploreServices: "كل الخدمات",
    comingSoon: "قريباً", comingSoonEn: "Under Construction",
    properties: "اختر حسب احتياجك", propertiesEn: "Property Types", propertiesText: "ابدأ بنوع العقار الذي تبحث عنه، وسنتابع معك الخيارات المناسبة.",
    advisor: "مستشارك العقاري", advisorEn: "Your Property Advisor", advisorText: "خدمة قريبة من العميل، مبنية على الوضوح وفهم السوق المحلي.",
    company: "الريحان العقارية", companyEn: "ALRAIHAN REAL ESTATE", companyText: "حضور مهني وخدمة شخصية لمساعدتك في اتخاذ قرار عقاري واثق.", learnMore: "تعرّف علينا",
    resources: "روابط رسمية مهمة", resourcesEn: "Official Resources", resourcesText: "منصات حكومية خارجية للمعلومات والخدمات العقارية.",
    rega: "الهيئة العامة للعقار", regaEn: "Real Estate General Authority", market: "البورصة العقارية", marketEn: "Real Estate Market", external: "زيارة المنصة",
    cta: "هل تبحث عن العقار المناسب؟", ctaEn: "Let us help you start", ctaText: "أخبرنا باحتياجك، وسنتواصل معك للبدء بالخطوة المناسبة.",
  },
  en: {
    hero: "Real estate guidance, shaped around you", heroEn: "قرارات عقارية أوضح تبدأ من فهم احتياجك",
    intro: "Personal real estate guidance and local Riyadh knowledge to help you find the right property.",
    services: "Real Estate Services", servicesEn: "خدماتنا العقارية", servicesText: "The core services that support every stage of your property decision.", exploreServices: "All services",
    comingSoon: "Under Construction", comingSoonEn: "قريباً",
    properties: "Property Types", propertiesEn: "اختر حسب احتياجك", propertiesText: "Start with the property type you need, and we will follow up with suitable options.",
    advisor: "Your Property Advisor", advisorEn: "مستشارك العقاري", advisorText: "Personal service, built on clarity and a practical understanding of the local market.",
    company: "ALRAIHAN REAL ESTATE", companyEn: "الريحان العقارية", companyText: "A professional presence and personal guidance for more confident property decisions.", learnMore: "About ALRAIHAN",
    resources: "Official Resources", resourcesEn: "روابط رسمية مهمة", resourcesText: "External government platforms for real estate information and services.",
    rega: "Real Estate General Authority", regaEn: "الهيئة العامة للعقار", market: "Real Estate Market", marketEn: "البورصة العقارية", external: "Visit platform",
    cta: "Looking for the right property?", ctaEn: "دعنا نساعدك في البداية", ctaText: "Tell us what you need and we will help you take the right first step.",
  },
};

const propertyImages = [
  "/images/WhatsApp Image 2026-08-25 at 12.27.10 AM.jpeg",
  "/images/WhatsApp Image 2026-08-25 at 12.27.06 AM.jpeg",
  "/images/WhatsApp Image 2026-08-25 at 12.27.05 AM.jpeg",
];

export default function HomePage() {
  const { lang } = useLanguage();
  const { open: openWhatsApp } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const primaryServices = services.filter((service) => ["buySell", "rental", "management", "maintenance"].includes(service.key));

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />

      <section id="home" className="relative overflow-hidden bg-[#f1e4cb] py-10 md:py-14">
        <div className="shell grid items-stretch gap-6 lg:grid-cols-[.92fr_1.08fr]">
          <div className="flex flex-col justify-center py-5 lg:py-10">
            <p className="eyebrow"><MapPin size={15} />{lang === "ar" ? "الرياض، المملكة العربية السعودية" : "RIYADH, SAUDI ARABIA"}</p>
            <h1 className={`mt-5 max-w-[650px] text-[clamp(2.45rem,4.6vw,4.55rem)] font-semibold leading-[1.2] tracking-[-.045em] text-[#402713] ${displayFont}`}>{l.hero}</h1>
            <p className="mt-3 text-sm font-bold tracking-[.02em] text-[#825d3b] md:text-base">{l.heroEn}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5e4d3c] md:text-[1.06rem]">{l.intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button onClick={openWhatsApp} className="btn btn-primary"><MessageCircle size={17} />{c.whatsapp}</button>
              <Link href="/request" className="btn btn-outline">{c.submitRequirement}<Arrow size={17} /></Link>
            </div>
          </div>
          <div className="mx-auto grid h-[360px] w-full max-w-[300px] place-items-end overflow-hidden rounded-[140px_140px_20px_20px] border border-[#68421f]/20 bg-[#e4d0ac] shadow-[12px_12px_0_rgba(179,145,87,.14)] md:h-[420px] md:max-w-[330px] lg:h-[450px] lg:max-w-[350px]">
            <img
              src="/images/founder-standing.png"
              alt={lang === "ar" ? "المستشار العقاري في الريحان العقارية" : "ALRAIHAN real estate advisor"}
              className="h-full w-full scale-[.88] object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-[#6b421f]/10 bg-[#faf5ea] py-5">
        <div className="shell grid gap-4 sm:grid-cols-3">
          {[c.license, c.fal, lang === "ar" ? "خدمة عربية وإنجليزية" : "Arabic and English support"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-[#68421f]"><Check size={17} className="shrink-0 text-[#b39157]" />{item}</div>)}
        </div>
      </section>

      <section id="services" className="section">
        <div className="shell">
          <div className="max-w-2xl"><h2 className={`section-title ${displayFont}`}>{l.services}</h2><p className="text-sm font-bold text-[#825d3b]">{l.servicesEn}</p><p className="mt-4 max-w-xl leading-8 text-[#746557]">{l.servicesText}</p></div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {primaryServices.map((service, index) => {
              const Icon = service.key === "maintenance" ? Wrench : service.icon;
              const title = lang === "ar" ? service.titleAr : service.titleEn;
              const secondaryTitle = lang === "ar" ? service.titleEn : service.titleAr;
              const description = lang === "ar" ? service.descAr : service.descEn;
              const isFeature = index === 0 || service.isComingSoon;
              const card = <><Icon size={23} className={isFeature ? "text-[#fbf7ef]" : "text-[#68421f]"} /><h3 className={`mt-12 text-xl font-bold ${isFeature ? "text-[#fbf7ef]" : "text-[#402713]"}`}>{title}</h3><p className={`mt-1 text-xs font-bold ${isFeature ? "text-[#e5d2ae]" : "text-[#825d3b]"}`}>{secondaryTitle}</p><p className={`mt-4 text-sm leading-7 ${isFeature ? "text-[#f3e7cf]/85" : "text-[#746557]"}`}>{description}</p>{service.isComingSoon && <span className="mt-5 inline-block border border-[#e5d2ae]/50 px-2.5 py-1 text-[.68rem] font-bold text-[#fbf7ef]">{l.comingSoon}</span>}</>;
              const classes = `group relative min-h-[290px] rounded-2xl p-6 transition hover:-translate-y-1 ${isFeature ? "bg-[#68421f] shadow-[0_16px_30px_rgba(64,39,19,.13)]" : "border border-[#6b421f]/15 bg-[#faf5ea] hover:border-[#6b421f]/35"}`;
              return service.href ? <Link key={service.key} href={service.href} className={`${classes} no-underline`}>{card}</Link> : <button key={service.key} onClick={openWhatsApp} className={`${classes} text-start`} aria-label={`${title} - ${l.comingSoon}`}>{card}</button>;
            })}
          </div>
          <Link href="/services" className="btn btn-outline mt-6">{l.exploreServices}<Arrow size={17} /></Link>
        </div>
      </section>

      <section id="properties" className="bg-[#f3e7cf] py-16 md:py-20">
        <div className="shell grid items-center gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div><h2 className={`section-title ${displayFont}`}>{l.properties}</h2><p className="text-sm font-bold text-[#825d3b]">{l.propertiesEn}</p><p className="mt-4 max-w-md leading-8 text-[#746557]">{l.propertiesText}</p>
            <div className="mt-7 grid gap-3">{propertyTypes.map((property) => <Link key={property.key} href={`/request?type=${property.key}`} className="group flex items-center justify-between gap-4 rounded-xl border border-[#6b421f]/15 bg-[#fbf7ef] px-5 py-4 text-[#402713] no-underline transition hover:border-[#6b421f]/40"><span><b className="block">{lang === "ar" ? property.titleAr : property.titleEn}</b><small className="mt-1 block text-xs font-bold text-[#825d3b]">{lang === "ar" ? property.titleEn : property.titleAr}</small></span><Arrow size={18} className="shrink-0 transition group-hover:translate-x-1 rtl:group-hover:-translate-x-1" /></Link>)}</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1.05fr_.95fr]"><img src={propertyImages[0]} alt={lang === "ar" ? "تطوير عمراني توضيحي داخل الرياض" : "Illustrative urban development in Riyadh"} className="h-[260px] w-full rounded-2xl object-cover object-center sm:h-full" /><div className="grid gap-4"><img src={propertyImages[1]} alt={lang === "ar" ? "برج سكني توضيحي" : "Illustrative residential tower"} className="h-[220px] w-full rounded-2xl object-cover object-center sm:h-[180px]" /><img src={propertyImages[2]} alt={lang === "ar" ? "مشهد عمراني توضيحي" : "Illustrative city development"} className="h-[220px] w-full rounded-2xl object-cover object-center sm:h-[180px]" /></div></div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="shell grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
          <div className="flex flex-col justify-center px-2 py-4 lg:px-3"><p className="eyebrow">{l.advisor}</p><p className="mt-2 text-sm font-bold text-[#825d3b]">{l.advisorEn}</p><p className="mt-5 max-w-sm leading-8 text-[#746557]">{l.advisorText}</p><Link href="/about" className="btn btn-outline mt-7 w-fit">{l.learnMore}<Arrow size={17} /></Link></div>
          <div className="relative min-h-[330px] overflow-hidden rounded-2xl bg-[#68421f]"><OfficePhoto fill /><div className="absolute inset-0 bg-gradient-to-t from-[#402713]/85 via-[#402713]/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6 text-[#fbf7ef]"><h2 className={`text-2xl font-semibold ${displayFont}`}>{l.company}</h2><p className="mt-1 text-xs font-bold text-[#e5d2ae]">{l.companyEn}</p><p className="mt-4 max-w-md text-sm leading-7 text-[#f3e7cf]/85">{l.companyText}</p></div></div>
        </div>
      </section>

      <section id="official-resources" className="border-y border-[#6b421f]/10 bg-[#faf5ea] py-14 md:py-16">
        <div className="shell"><div className="max-w-2xl"><h2 className={`section-title !mb-1 ${displayFont}`}>{l.resources}</h2><p className="text-sm font-bold text-[#825d3b]">{l.resourcesEn}</p><p className="mt-4 leading-7 text-[#746557]">{l.resourcesText}</p></div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <a href="https://rega.gov.sa/" target="_blank" rel="noreferrer" className="group flex min-h-[144px] items-center justify-between gap-5 rounded-2xl border border-[#6b421f]/15 bg-white p-6 text-[#402713] no-underline transition hover:border-[#6b421f]/40"><div><h3 className="font-bold">{l.rega}</h3><p className="mt-1 text-sm text-[#746557]">{l.regaEn}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#68421f]">{l.external}<ExternalLink size={14} /></span></div><div className="relative grid h-16 w-28 shrink-0 place-items-center"><span className="text-sm font-extrabold text-[#0a5263]">REGA</span><img src="https://rega.gov.sa/media/nwdg1ou3/rega-new-logo.png" alt="REGA - Real Estate General Authority" className="absolute inset-0 h-full w-full object-contain" onError={(event) => { event.currentTarget.style.display = "none"; }} /></div></a>
            <a href="https://srem.moj.gov.sa/" target="_blank" rel="noreferrer" className="group flex min-h-[144px] items-center justify-between gap-5 rounded-2xl border border-[#6b421f]/15 bg-white p-6 text-[#402713] no-underline transition hover:border-[#6b421f]/40"><div><h3 className="font-bold">{l.market}</h3><p className="mt-1 text-sm text-[#746557]">{l.marketEn}</p><span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#68421f]">{l.external}<ExternalLink size={14} /></span></div><div className="relative grid h-16 w-28 shrink-0 place-items-center"><span className="text-center text-xs font-extrabold leading-4 text-[#52704f]">البورصة<br />العقارية</span><img src="https://saudipedia.com/saudipedia/uploads/images/2024/07/28/96720.jpg" alt="البورصة العقارية - Real Estate Market" className="absolute inset-0 h-full w-full object-contain" onError={(event) => { event.currentTarget.style.display = "none"; }} /></div></a>
          </div>
          <p className="mt-5 flex items-start gap-2 text-xs leading-6 text-[#746557]"><ShieldCheck size={16} className="mt-1 shrink-0 text-[#b39157]" />{lang === "ar" ? "الروابط أعلاه لمصادر حكومية خارجية ولا تعني شراكة أو اعتماداً من هذه الجهات." : "These are external government resources and do not imply an endorsement or partnership."}</p>
        </div>
      </section>

      <section className="section"><div className="shell rounded-2xl bg-[#68421f] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-14"><h2 className={`mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-5xl ${displayFont}`}>{l.cta}</h2><p className="mt-2 text-sm font-bold text-[#e5d2ae]">{l.ctaEn}</p><p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/85">{l.ctaText}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/request" className="btn bg-[#fbf7ef] text-[#6b421f]">{c.submitRequirement}<Arrow size={17} /></Link><button onClick={openWhatsApp} className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]"><MessageCircle size={17} />{c.whatsapp}</button></div></div></section>
      <Footer />
    </main>
  );
}
