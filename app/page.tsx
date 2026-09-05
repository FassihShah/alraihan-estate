"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, BriefcaseBusiness, ExternalLink, Globe2, MapPin, MessageCircle, ShieldCheck, UsersRound, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";
import { services } from "@/data/services";
import { propertyTypes } from "@/data/propertyTypes";

const copy = {
  ar: {
    hero: "تبحث عن عقار مناسب في الرياض؟", heroEn: "ALRAIHAN REAL ESTATE COMPANY", intro: "نساعدك في الوصول إلى الخيارات العقارية المناسبة للسكن أو الاستثمار أو الأعمال، وفق احتياجك وميزانيتك.",
    services: "خدماتنا العقارية", servicesEn: "Real Estate Services", servicesText: "حلول عملية تدعم العملاء في كل مرحلة من مراحل القرار العقاري.", explore: "كل الخدمات", comingSoon: "قيد التجهيز",
    properties: "اختر حسب احتياجك", propertiesEn: "Property Types", propertiesText: "حدّد نوع العقار المطلوب ثم أرسل طلبك لتتواصل معك شركة الريحان العقارية بالخيارات المناسبة.",
    about: "من نحن", aboutEn: "About ALRAIHAN", aboutText: "شركة الريحان العقارية تعمل من الرياض لتقديم خدمات عقارية منظمة وشفافة للأفراد والشركات.", more: "تعرّف علينا",
    vision: "رؤيتنا", visionEn: "Vision", visionText: "أن نكون شريكاً عقارياً مفضلاً في الرياض والمملكة ونساعد عملاءنا على تحقيق أهدافهم بثقة.",
    mission: "رسالتنا", missionEn: "Mission", missionText: "تقديم خدمات عقارية متميزة تلبي احتياجات العملاء وتساعدهم على اتخاذ قرارات عقارية مدروسة.",
    values: "قيمنا", valuesEn: "Our Values", valuesText: "مرخّصون للوساطة والتسويق العقاري، مع مبادئ واضحة في كل تواصل وكل قرار.", valueList: [["المعرفة بالسوق المحلي", "تركيزنا على الرياض وأحيائها يساعدك على تضييق الخيارات نحو ما يناسبك."], ["بحث مبني على احتياجك", "لا نعرض العقارات عشوائياً؛ نبدأ من احتياجك والمنطقة والميزانية."], ["متابعة مباشرة", "تواصل واضح ومباشر معك طوال رحلة البحث أو التسويق."]],
    video: "الرياض في مشهد", videoEn: "Riyadh in Motion", videoText: "شاهد لمحة مرئية عن المدينة. لا يبدأ الفيديو تلقائياً ويحمل بياناته عند الحاجة فقط.", videoLink: "استكشف مدينة المستقبل",
    resources: "روابط رسمية مهمة", resourcesEn: "Official Resources", resourcesText: "منصات حكومية خارجية للمعلومات والخدمات العقارية.", rega: "الهيئة العامة للعقار", market: "البورصة العقارية", external: "زيارة المنصة",
    cta: "هل تبحث عن العقار المناسب؟", ctaText: "أرسل متطلباتك، وسيتواصل معك فريق الريحان العقارية للبدء بالخطوة المناسبة.",
    midCta: "هل تبحث عن عقار في الرياض؟", midCtaText: "أخبرنا بما تبحث عنه وسنساعدك في العثور على الخيارات المناسبة.", midCtaSend: "أرسل طلبك العقاري",
  },
  en: {
    hero: "Looking for the right property in Riyadh?", heroEn: "شركة الريحان العقارية", intro: "We help you find real estate options that fit your needs and budget — for living, investing, or business.",
    services: "Real Estate Services", servicesEn: "خدماتنا العقارية", servicesText: "Practical solutions that support clients at every stage of a property decision.", explore: "All services", comingSoon: "Under Construction",
    properties: "Property Types", propertiesEn: "اختر حسب احتياجك", propertiesText: "Choose the property type you need, then send your request so ALRAIHAN can follow up with suitable options.",
    about: "About Us", aboutEn: "من نحن", aboutText: "ALRAIHAN REAL ESTATE is a Riyadh-based company providing organized, transparent real estate services for individuals and businesses.", more: "About ALRAIHAN",
    vision: "Our Vision", visionEn: "رؤيتنا", visionText: "To be a preferred real estate partner in Riyadh and across the Kingdom, helping clients achieve their property goals with confidence.",
    mission: "Our Mission", missionEn: "رسالتنا", missionText: "To deliver distinguished real estate services that address clients’ needs and help them make informed property decisions.",
    values: "Our Values", valuesEn: "قيمنا", valuesText: "Licensed for real estate brokerage and marketing, with clear principles in every conversation and decision.", valueList: [["Local market knowledge", "Our focus on Riyadh and its districts helps narrow the options down to what fits you."], ["Needs-based search", "Properties aren’t shown at random — we start from your need, area, and budget."], ["Direct follow-up", "Clear, direct communication with you throughout your search or marketing journey."]],
    video: "Riyadh in Motion", videoEn: "الرياض في مشهد", videoText: "Watch a short glimpse of the city. The video does not autoplay and loads only its metadata until play is chosen.", videoLink: "Explore Future City",
    resources: "Official Resources", resourcesEn: "روابط رسمية مهمة", resourcesText: "External government platforms for real estate information and services.", rega: "Real Estate General Authority", market: "Saudi Real Estate Exchange", external: "Visit platform",
    cta: "Looking for the right property?", ctaText: "Send your requirements and the ALRAIHAN team will contact you to take the right next step.",
    midCta: "Looking for a property in Riyadh?", midCtaText: "Tell us what you’re looking for and we’ll help you find the right options.", midCtaSend: "Send your request",
  },
};

const propertyImages = ["/images/WhatsApp Image 2026-08-25 at 12.27.10 AM.jpeg", "/images/WhatsApp Image 2026-08-25 at 12.27.06 AM.jpeg", "/images/WhatsApp Image 2026-08-25 at 12.27.05 AM.jpeg"];
const valueIcons = [BadgeCheck, BriefcaseBusiness, UsersRound];
const trustIcons = [BadgeCheck, MapPin, UsersRound, Globe2];

export default function HomePage() {
  const { lang } = useLanguage();
  const { open: openWhatsApp } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const primaryServices = ["buySell", "marketing", "management"].map((key) => services.find((service) => service.key === key)!);
  const trustLabels = lang === "ar"
    ? ["وسيط عقاري مرخص", "متخصص في سوق الرياض", "خدمة للأفراد والشركات", "عربي / English"]
    : ["Licensed broker", "Riyadh specialist", "Individuals & companies", "Arabic / English"];

  return <main className="min-h-screen bg-[#fbf7ef]">
    <Header />
    <section className="bg-[#f1e4cb] pt-6 md:pt-9">
      <div className="shell">
        <figure className="relative aspect-[16/7] w-full overflow-hidden rounded-[28px] border border-[#68421f]/15 bg-[#402713] sm:aspect-[16/6] sm:rounded-[38px] lg:aspect-[16/5]">
          <img src="/images/alraihan-office.png" alt={lang === "ar" ? "مقر شركة الريحان العقارية" : "ALRAIHAN REAL ESTATE office"} className="absolute inset-0 h-full w-full object-cover object-[54%_50%]" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f160e]/90 via-[#1f160e]/45 to-transparent px-6 pb-5 pt-16 text-start text-sm font-bold uppercase tracking-[.16em] text-[#fbf7ef] sm:px-9 sm:pb-6 sm:text-base lg:text-lg">{lang === "ar" ? "الريحان العقارية" : "ALRAIHAN REAL ESTATE"}</figcaption>
        </figure>
      </div>
    </section>
    <section id="home" className="overflow-hidden bg-[#f1e4cb] py-7 md:py-10">
      <div className="shell grid grid-cols-[136px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[172px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-10" dir="ltr">
        <div className="relative aspect-square overflow-hidden rounded-[56px_56px_14px_14px] border border-[#68421f]/20 bg-[#e4d0ac] shadow-[8px_8px_0_rgba(179,145,87,.14)] lg:rounded-[88px_88px_18px_18px]" aria-label={lang === "ar" ? "صورة مستشار الريحان العقاري" : "ALRAIHAN real estate advisor"}>
          <img src="/images/founder-standing-transparent.png" alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        </div>
        <div className="flex flex-col justify-center py-2 text-start lg:py-7" dir={lang === "ar" ? "rtl" : "ltr"}>
          <p className="eyebrow"><MapPin size={15} />{lang === "ar" ? "الرياض، المملكة العربية السعودية" : "RIYADH, SAUDI ARABIA"}</p>
          <h1 className={`mt-4 max-w-[650px] text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[1.15] tracking-[-.045em] text-[#402713] ${displayFont}`}>{l.hero}</h1>
          <p className="mt-3 text-xs font-bold tracking-[.06em] text-[#825d3b] sm:text-sm">{l.heroEn}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#5e4d3c] md:text-base md:leading-8">{l.intro}</p>
          <div className="mt-6 flex flex-wrap gap-2.5"><button onClick={openWhatsApp} className="btn btn-primary !px-4 !py-3"><MessageCircle size={17} />{c.whatsapp}</button><Link href="/request" className="btn btn-outline !px-4 !py-3">{c.submitRequirement}<Arrow size={17} /></Link></div>
        </div>
      </div>
    </section>
    <section className="border-y border-[#6b421f]/10 bg-[#faf5ea] py-5"><div className="shell flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-between">{trustLabels.map((label, index) => { const Icon = trustIcons[index]; return <span key={label} className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold tracking-[.02em] text-[#746557]"><Icon size={15} className="shrink-0 text-[#b39157]" />{label}</span>; })}</div></section>
    <section id="services" className="section"><div className="shell"><div className="max-w-2xl"><h2 className={`section-title ${displayFont}`}>{l.services}</h2><p className="text-sm font-bold text-[#825d3b]">{l.servicesEn}</p><p className="mt-4 leading-8 text-[#746557]">{l.servicesText}</p></div><div className="mt-9 grid gap-4 sm:grid-cols-3">{primaryServices.map((service, index) => { const Icon = service.key === "maintenance" ? Wrench : service.icon; const dark = index === 0 || service.isComingSoon; return <article key={service.key} className={dark ? "min-h-[270px] rounded-2xl bg-[#68421f] p-6 text-[#fbf7ef]" : "min-h-[270px] rounded-2xl border border-[#6b421f]/15 bg-[#faf5ea] p-6 text-[#402713]"}><Icon size={23} className={dark ? "text-[#fbf7ef]" : "text-[#68421f]"} /><h3 className="mt-10 text-xl font-bold">{lang === "ar" ? service.titleAr : service.titleEn}</h3><p className={dark ? "mt-1 text-xs font-bold text-[#e5d2ae]" : "mt-1 text-xs font-bold text-[#825d3b]"}>{lang === "ar" ? service.titleEn : service.titleAr}</p><p className={dark ? "mt-4 text-sm leading-7 text-[#f3e7cf]/85" : "mt-4 text-sm leading-7 text-[#746557]"}>{lang === "ar" ? service.descAr : service.descEn}</p>{service.isComingSoon ? <span className="mt-5 inline-block border border-[#e5d2ae]/50 px-2.5 py-1 text-[.68rem] font-bold">{l.comingSoon}</span> : <Link href={service.href || "/services"} className={dark ? "mt-5 inline-block text-xs font-bold text-[#e5d2ae]" : "mt-5 inline-block text-xs font-bold text-[#68421f]"}>{l.explore}</Link>}</article>; })}</div><Link href="/services" className="btn btn-outline mt-6">{l.explore}<Arrow size={17} /></Link></div></section>
    <section className="section !pt-0"><div className="shell rounded-2xl bg-[#68421f] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-14"><h2 className={`mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-5xl ${displayFont}`}>{l.midCta}</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/85">{l.midCtaText}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/request" className="btn bg-[#fbf7ef] text-[#6b421f]">{l.midCtaSend}<Arrow size={17} /></Link><button onClick={openWhatsApp} className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]"><MessageCircle size={17} />{c.whatsapp}</button></div></div></section>
    <section id="properties" className="bg-[#f3e7cf] py-16 md:py-20"><div className="shell grid items-center gap-8 lg:grid-cols-[.85fr_1.15fr]"><div><h2 className={`section-title ${displayFont}`}>{l.properties}</h2><p className="text-sm font-bold text-[#825d3b]">{l.propertiesEn}</p><p className="mt-4 leading-8 text-[#746557]">{l.propertiesText}</p><div className="mt-7 grid gap-3">{propertyTypes.map((property) => <Link key={property.key} href={`/request?type=${property.key}`} className="flex items-center justify-between gap-4 rounded-xl border border-[#6b421f]/15 bg-[#fbf7ef] px-5 py-4 text-[#402713] no-underline"><span><b className="block">{lang === "ar" ? property.titleAr : property.titleEn}</b><small className="mt-1 block text-xs font-bold text-[#825d3b]">{lang === "ar" ? property.titleEn : property.titleAr}</small></span><Arrow size={18} /></Link>)}</div></div><div className="grid gap-4 sm:grid-cols-[1.05fr_.95fr]"><img src={propertyImages[0]} alt="Riyadh urban development" className="h-[260px] w-full rounded-2xl object-cover sm:h-full" /><div className="grid gap-4"><img src={propertyImages[1]} alt="Residential property" className="h-[220px] w-full rounded-2xl object-cover sm:h-[180px]" /><img src={propertyImages[2]} alt="City development" className="h-[220px] w-full rounded-2xl object-cover sm:h-[180px]" /></div></div></div></section>
    <section id="about" className="section"><div className="shell"><div className="grid gap-6 rounded-2xl border border-[#6b421f]/15 bg-[#faf5ea] p-6 md:grid-cols-[1.15fr_.85fr] md:p-9"><div><p className="eyebrow">{l.aboutEn}</p><h2 className={`mt-3 text-3xl font-semibold text-[#402713] md:text-4xl ${displayFont}`}>{l.about}</h2><p className="mt-5 max-w-2xl leading-8 text-[#746557]">{l.aboutText}</p><Link href="/about" className="btn btn-outline mt-7">{l.more}<Arrow size={17} /></Link></div><div className="flex items-center rounded-xl bg-[#f1e4cb] p-6 text-lg font-semibold leading-9 text-[#68421f]">{lang === "ar" ? "نضع وضوح الخدمة واحتياج العميل في مركز كل تعامل عقاري." : "We put clear service and the client’s needs at the center of every property engagement."}</div></div><div className="mt-5 grid gap-4 md:grid-cols-2">{[[l.vision, l.visionEn, l.visionText], [l.mission, l.missionEn, l.missionText]].map(([title, english, text]) => <article key={title} className="rounded-2xl border border-[#6b421f]/15 bg-white p-6"><p className="text-xs font-bold tracking-[.13em] text-[#825d3b]">{english}</p><h3 className={`mt-2 text-2xl font-semibold text-[#402713] ${displayFont}`}>{title}</h3><p className="mt-3 leading-8 text-[#746557]">{text}</p></article>)}</div><div className="mt-5"><p className="text-sm font-bold text-[#825d3b]">{l.valuesEn}</p><h3 className={`mt-1 text-2xl font-semibold text-[#402713] ${displayFont}`}>{l.values}</h3><p className="mt-2 text-sm text-[#746557]">{l.valuesText}</p><div className="mt-5 grid gap-4 md:grid-cols-3">{l.valueList.map(([title, text], index) => { const Icon = valueIcons[index]; return <article key={title} className="flex h-full min-h-[150px] items-start gap-4 rounded-2xl border border-[#6b421f]/15 bg-white p-5"><Icon size={22} className="mt-1 shrink-0 text-[#68421f]" /><div><h4 className="font-bold text-[#402713]">{title}</h4><p className="mt-1 text-sm leading-6 text-[#746557]">{text}</p></div></article>; })}</div></div></div></section>
    <section className="border-y border-[#6b421f]/10 bg-[#f3e7cf] py-14 md:py-16"><div className="shell grid items-center gap-7 lg:grid-cols-[.86fr_1.14fr]"><div><p className="eyebrow">{l.videoEn}</p><h2 className={`mt-3 text-3xl font-semibold text-[#402713] md:text-4xl ${displayFont}`}>{l.video}</h2><p className="mt-4 leading-8 text-[#746557]">{l.videoText}</p><Link href="/future-city" className="btn btn-outline mt-7">{l.videoLink}<Arrow size={17} /></Link></div><video controls preload="metadata" poster={propertyImages[0]} className="w-full rounded-2xl bg-[#402713] shadow-[0_16px_30px_rgba(64,39,19,.12)]" aria-label="Riyadh video"><source src="/images/WhatsApp Video 2026-08-25 at 12.27.10 AM.mp4" type="video/mp4" /></video></div></section>
    <section id="official-resources" className="bg-[#faf5ea] py-14 md:py-16"><div className="shell"><h2 className={`section-title !mb-1 ${displayFont}`}>{l.resources}</h2><p className="text-sm font-bold text-[#825d3b]">{l.resourcesEn}</p><p className="mt-4 leading-7 text-[#746557]">{l.resourcesText}</p><div className="mt-7 grid gap-4 md:grid-cols-2"><a href="https://rega.gov.sa/" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-5 rounded-2xl border border-[#6b421f]/15 bg-white p-6 text-[#402713] no-underline"><div><h3 className="font-bold">{l.rega}</h3><p className="mt-1 text-sm text-[#746557]">Real Estate General Authority</p><span className="mt-4 inline-flex gap-2 text-xs font-bold">{l.external}<ExternalLink size={14} /></span></div><span className="text-lg font-extrabold text-[#0a5263]">REGA</span></a><a href="https://srem.moj.gov.sa/" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-5 rounded-2xl border border-[#6b421f]/15 bg-white p-6 text-[#402713] no-underline"><div><h3 className="font-bold">{l.market}</h3><p className="mt-1 text-sm text-[#746557]">Saudi Real Estate Exchange</p><span className="mt-4 inline-flex gap-2 text-xs font-bold">{l.external}<ExternalLink size={14} /></span></div><span className="text-center text-xs font-extrabold text-[#52704f]">البورصة<br />العقارية</span></a></div><p className="mt-5 flex gap-2 text-xs leading-6 text-[#746557]"><ShieldCheck size={16} className="shrink-0 text-[#b39157]" />{lang === "ar" ? "الروابط أعلاه لمصادر حكومية خارجية ولا تعني شراكة أو اعتماداً من هذه الجهات." : "These are external government resources and do not imply an endorsement or partnership."}</p></div></section>
    <section className="section"><div className="shell rounded-2xl bg-[#68421f] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-14"><h2 className={`mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-5xl ${displayFont}`}>{l.cta}</h2><p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/85">{l.ctaText}</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/request" className="btn bg-[#fbf7ef] text-[#6b421f]">{c.submitRequirement}<Arrow size={17} /></Link><button onClick={openWhatsApp} className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]"><MessageCircle size={17} />{c.whatsapp}</button></div></div></section>
    <Footer />
  </main>;
}
