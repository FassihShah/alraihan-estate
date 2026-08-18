"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, KeySquare, MapPin, MessageCircle, ShieldCheck, Sparkles, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Portrait from "@/components/Portrait";
import OfficePhoto from "@/components/OfficePhoto";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { useAssistant } from "@/contexts/AssistantContext";
import { t } from "@/data/translations";
import { services } from "@/data/services";
import { propertyTypes } from "@/data/propertyTypes";
import { blogArticles } from "@/data/blog";
import { demoOffers } from "@/data/offers";

const copy = {
  ar: {
    badge: "الرياض · المملكة العربية السعودية",
    hero: "خبرة عقارية تساعدك على اتخاذ القرار الصحيح",
    focusLine: "خدمات عقارية متنوعة في الرياض والمملكة",
    intro: "نساعدك على اختيار العقار المناسب في الرياض ومدينة المستقبل ومختلف مناطق المملكة، بخدمة عقارية شخصية مبنية على فهم احتياجاتك والسوق.",
    servicesBtn: "اكتشف خدماتنا",
    trusted: ["وسيط عقاري مرخص", "معرفة بسوق الرياض", "خدمة شخصية", "دعم عربي وإنجليزي"],

    quickEyebrow: "ابحث حسب النوع",
    quickTitle: "عقارات حسب احتياجك",
    quickText: "اختر النوع الذي يناسبك وأرسل طلبك مباشرة.",
    categoryCta: "أرسل طلبك",
    haveSell: "لدي عقار للبيع",
    haveRent: "لدي عقار للإيجار",

    aboutEyebrow: "من نحن",
    aboutTitle: "الريحان العقارية",
    aboutText: "نساعد عملاءنا على اتخاذ قرارات عقارية أفضل من خلال فهم احتياجهم ومعرفة السوق المحلي وإرشاد مهني وخدمة شخصية.",
    aboutMore: "المزيد عن الريحان",

    servicesTitle: "خدمة تتشكل حول احتياجك",
    servicesText: "نهج هادئ وواضح لمساعدتك في كل مرحلة من قرارك العقاري.",
    exploreService: "اكتشف الخدمة",

    requirementEyebrow: "طلبك العقاري",
    requirement: "ما العقار الذي تبحث عنه؟",
    reqIntro: "اختر نوع العقار وابدأ طلبك في أقل من دقيقة.",
    types: ["فيلا", "شقة", "أرض", "تجاري", "استثماري", "أخرى"],
    startRequest: "ابدأ طلبك",

    vision: "الرؤية",
    visionText: "أن نكون الوسيط العقاري المفضل في الرياض وفي المملكة، ونساعد عملاءنا على تحقيق أهدافهم العقارية.",
    mission: "الرسالة",
    missionText: "تقديم خدمات عقارية متميزة تلبي احتياجات عملائنا، ومساعدتهم على اتخاذ قرارات عقارية حكيمة.",
    values: "قيمنا",
    valuesIntro: "مبادئ واضحة تظهر في كل تواصل وكل قرار.",
    valuesList: [
      ["النزاهة", "الوضوح والصدق أساس علاقتنا."],
      ["الاحترافية", "عناية بالتفاصيل وخدمة مدروسة."],
      ["العميل أولاً", "احتياجك هو نقطة البداية دائماً."],
    ],

    advisor: "معك في كل خطوة من قرارك العقاري",
    advisorText: "نؤمن أن الاختيار العقاري الجيد يبدأ بالاستماع. نعمل بجانبك بفهم للسوق وتواصل واضح واهتمام شخصي.",
    photoNote: "مكان مخصص لصورة المستشار العقاري",
    sendReq: "أرسل متطلباتك",

    officeEyebrow: "ALRAIHAN / الحضور",
    officeTitle: "اسم موثوق في المشهد العقاري",
    officeText: "صورة من هوية الريحان العقارية، تعكس حضوراً مهنياً واضحاً وخدمة شخصية قريبة من العميل.",

    riyadh: "مدينة المستقبل والرياض",
    riyadhText: "نساعدك على تحديد العقار المناسب وفق احتياجك وموقعك المفضل داخل الرياض.",
    riyadhCta: "ابحث عن عقار في الرياض",
    riyadhMore: "استكشف مدينة المستقبل",

    offersEyebrow: "العروض",
    offersTitle: "عروض عقارية",
    offersText: "نموذج لتصميم صفحة العروض عند توفر بيانات فعلية.",
    offersDemo: "نموذج عرض",
    seeOffers: "شاهد كل العروض",

    blog: "المدونة",
    blogTitle: "معرفة تساعدك على اختيار أفضل",
    read: "اقرأ المقال",
    comingSoon: "قريباً",

    assistantEyebrow: "المساعد الذكي",
    assistantTitle: "مساعد ثنائي اللغة لمساعدتك بسرعة",
    assistantText: "تحدث مع مساعد الريحان بالعربية أو الإنجليزية للحصول على توجيه سريع حول احتياجك العقاري.",
    assistantBtn: "ابدأ المحادثة",

    cta: "هل تبحث عن العقار المناسب؟",
    ctaText: "أخبرنا بما تحتاجه، وسنساعدك على بدء الطريق الصحيح.",
  },
  en: {
    badge: "Riyadh · Saudi Arabia",
    hero: "Real estate guidance for better property decisions",
    focusLine: "Professional real estate services in Riyadh and across the Kingdom",
    intro: "We help individuals, investors and businesses find properties that match their needs in Riyadh and across the Kingdom through personal service and local market understanding.",
    servicesBtn: "Explore Our Services",
    trusted: ["Licensed Broker", "Riyadh Market Knowledge", "Personal Service", "Arabic & English Support"],

    quickEyebrow: "Search by Type",
    quickTitle: "Property categories for your need",
    quickText: "Choose the type that fits you and submit your request directly.",
    categoryCta: "Submit Your Requirement",
    haveSell: "I Have a Property to Sell",
    haveRent: "I Have a Property to Rent",

    aboutEyebrow: "Who We Are",
    aboutTitle: "ALRAIHAN REAL ESTATE",
    aboutText: "We help clients make better property decisions by understanding their needs, applying local market knowledge, and providing professional, personal service.",
    aboutMore: "More about ALRAIHAN",

    servicesTitle: "Service shaped around your needs",
    servicesText: "A calm, clear approach to every stage of your property decision.",
    exploreService: "Explore service",

    requirementEyebrow: "Your Requirement",
    requirement: "What property are you looking for?",
    reqIntro: "Choose a property type and start your request in under a minute.",
    types: ["Villa", "Apartment", "Land", "Commercial", "Investment", "Other"],
    startRequest: "Start Your Request",

    vision: "Vision",
    visionText: "To become a preferred real estate partner in Riyadh and across the Kingdom by helping clients achieve their property goals.",
    mission: "Mission",
    missionText: "To deliver distinguished real estate services that address our clients' needs and help them make informed property decisions.",
    values: "Our values",
    valuesIntro: "Clear principles that guide every conversation and decision.",
    valuesList: [
      ["Integrity", "Clarity and honesty are the basis of our relationship."],
      ["Professionalism", "Care for detail and a considered service."],
      ["Client First", "Your need is always the starting point."],
    ],

    advisor: "With you through every step of your property decision",
    advisorText: "We believe a good property choice begins with listening. We work beside you with market understanding, clear communication and personal attention.",
    photoNote: "Reserved for the real estate advisor portrait",
    sendReq: "Send your requirement",

    officeEyebrow: "ALRAIHAN / PRESENCE",
    officeTitle: "A trusted name in real estate",
    officeText: "A glimpse of ALRAIHAN's identity: a clear professional presence and service that stays close to the client.",

    riyadh: "Future City and Riyadh",
    riyadhText: "We help you identify suitable property options based on your requirements and preferred location in Riyadh.",
    riyadhCta: "Looking for property in Riyadh?",
    riyadhMore: "Explore Future City",

    offersEyebrow: "Offers",
    offersTitle: "Real Estate Offers",
    offersText: "A preview of how the offers page will look once real data is available.",
    offersDemo: "Demo Offer",
    seeOffers: "See all offers",

    blog: "Journal",
    blogTitle: "Knowledge for a better choice",
    read: "Read article",
    comingSoon: "Coming soon",

    assistantEyebrow: "Smart Assistant",
    assistantTitle: "A bilingual assistant to help you quickly",
    assistantText: "Chat with the ALRAIHAN assistant in Arabic or English for quick guidance on your property need.",
    assistantBtn: "Start Chat",

    cta: "Looking for the right property?",
    ctaText: "Tell us what you need and we will help you begin in the right direction.",
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const { open: openWhatsApp } = useWhatsApp();
  const { open: openAssistant } = useAssistant();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const Arrow = ({ className }: { className?: string }) =>
    lang === "ar" ? <ArrowLeft size={17} className={className} /> : <ArrowRight size={17} className={className} />;

  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />

      <section id="home" className="architectural-grid relative overflow-hidden bg-[#f1e4cb] py-16 md:py-24">
        <span className="watermark bottom-12 start-[42%]">R</span>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(255,255,255,.68),transparent_32%)]" />
        <div className="shell relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="reveal relative z-10">
            <p className="eyebrow">
              <MapPin size={15} />
              {lang === "ar" ? "الريحان العقارية | الرياض" : "ALRAIHAN REAL ESTATE | RIYADH"}
            </p>
            <h1 className={`mt-6 max-w-[720px] text-[clamp(2.6rem,5.2vw,5rem)] font-semibold leading-[1.34] tracking-[-.045em] text-[#402713] ${displayFont}`}>
              {l.hero}
            </h1>
            <p className="mt-5 max-w-xl text-base font-bold text-[#68421f]">{l.focusLine}</p>
            <p className="mt-4 max-w-xl text-[1rem] leading-8 text-[#5e4d3c] md:text-[1.1rem]">{l.intro}</p>
            <div className="credential mt-7 flex max-w-[510px] items-start gap-3 rounded-e-lg px-4 py-3 text-xs leading-6 text-[#68421f]">
              <BadgeCheck className="mt-1 shrink-0 text-[#b39157]" size={18} />
              <span>
                {c.license}
                <br />
                <b>{c.fal}</b>
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={openWhatsApp} className="btn btn-primary">
                <MessageCircle size={17} />
                {c.whatsapp}
              </button>
              <button onClick={() => scroll("services")} className="btn btn-outline">
                {l.servicesBtn}
                <Arrow />
              </button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute -inset-5 rounded-[48%] border border-[#b89558]/35" />
            <Portrait hero note={l.photoNote} />
            <div className="absolute bottom-5 -start-7 rounded-xl bg-[#412814] px-4 py-3 text-xs text-[#fbf7ef] shadow-xl">
              <b className="block">ALRAIHAN</b>
              <span className="opacity-70">{c.fal}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#6b421f]/10 bg-[#fbf7ef]">
        <div className="shell grid grid-cols-2 divide-x divide-[#6b421f]/10 md:grid-cols-4">
          {l.trusted.map((x) => (
            <div key={x} className="flex items-center gap-3 px-3 py-6 text-xs font-bold text-[#6b421f] md:px-7">
              <Check size={18} className="text-[#b89558]" />
              {x}
            </div>
          ))}
        </div>
      </section>

      <section className="shell pt-14">
        <div className="relative min-h-[340px] overflow-hidden rounded-3xl md:min-h-[440px]">
          <OfficePhoto fill />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2c1a0d]/90 via-[#2c1a0d]/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-[#fbf7ef] md:p-12">
            <p className="eyebrow !text-[#e5d2ae]">{l.officeEyebrow}</p>
            <h2 className={`mt-3 max-w-xl text-2xl font-semibold md:text-4xl ${displayFont}`}>{l.officeTitle}</h2>
            <p className="mt-3 max-w-xl leading-8 text-[#f3e7cf]/85">{l.officeText}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">{l.quickEyebrow}</p>
          <h2 className={`section-title ${displayFont}`}>{l.quickTitle}</h2>
          <p className="max-w-lg leading-7 text-[#746557]">{l.quickText}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {propertyTypes.map((p) => (
              <div key={p.key} className="group overflow-hidden rounded-2xl border border-[#6b421f]/15 bg-[#faf5ea]">
                <img
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                  src={`https://images.unsplash.com/photo-${p.image}?auto=format&fit=crop&w=900&q=80`}
                  alt={lang === "ar" ? p.titleAr : p.titleEn}
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#412814]">{lang === "ar" ? p.titleAr : p.titleEn}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#796a5b]">{lang === "ar" ? p.descAr : p.descEn}</p>
                  <Link href={`/request?type=${p.key}`} className="btn btn-outline mt-5 !py-2.5 !text-xs">
                    {l.categoryCta}
                    <Arrow />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/request?purpose=sell" className="flex items-center gap-2.5 rounded-lg border border-[#6b421f]/20 bg-[#faf5ea] px-5 py-3.5 text-sm font-bold text-[#68421f] no-underline transition hover:bg-[#f1e4cb]">
              <Tag size={16} />
              {l.haveSell}
            </Link>
            <Link href="/request?purpose=rent" className="flex items-center gap-2.5 rounded-lg border border-[#6b421f]/20 bg-[#faf5ea] px-5 py-3.5 text-sm font-bold text-[#68421f] no-underline transition hover:bg-[#f1e4cb]">
              <KeySquare size={16} />
              {l.haveRent}
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="section relative overflow-hidden bg-[#f3e7cf]">
        <span className="watermark -top-2 end-[-20px]">R</span>
        <div className="shell relative grid items-center gap-10 md:grid-cols-2">
          <div className="mx-auto w-full max-w-[320px]">
            <Portrait note={l.photoNote} />
          </div>
          <div>
            <p className="eyebrow">{l.aboutEyebrow}</p>
            <h2 className={`section-title ${displayFont}`}>{l.aboutTitle}</h2>
            <p className="max-w-xl leading-8 text-[#746557]">{l.aboutText}</p>
            <Link href="/about" className="btn btn-outline mt-6">
              {l.aboutMore}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">ALRAIHAN / SERVICES</p>
              <h2 className={`section-title ${displayFont}`}>{l.servicesTitle}</h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#746557]">{l.servicesText}</p>
          </div>
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              const title = lang === "ar" ? s.titleAr : s.titleEn;
              const desc = lang === "ar" ? s.descAr : s.descEn;
              return (
                <Link
                  href={s.href || "/services"}
                  key={s.key}
                  className={`group relative overflow-hidden border border-[#68421f]/18 bg-[#faf5ea] p-7 text-inherit no-underline transition hover:border-[#68421f]/45 hover:bg-[#f1e4cb] ${
                    i === 0 ? "md:col-span-2 lg:col-span-2 lg:min-h-[290px]" : ""
                  }`}
                >
                  <span className="text-xs font-bold tracking-[.16em] text-[#b39157]">0{i + 1}</span>
                  <span className="absolute end-7 top-7 grid h-10 w-10 place-items-center border border-[#68421f]/15 text-[#68421f]">
                    <Icon size={19} />
                  </span>
                  <div className={i === 0 ? "mt-14 max-w-md" : "mt-14"}>
                    <h3 className="text-xl font-bold text-[#402713]">{title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-[#746557]">{desc}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#68421f]">
                      {l.exploreService}
                      <Arrow />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="request" className="section bg-[#f1e4cb]">
        <div className="shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">{l.requirementEyebrow}</p>
            <h2 className={`section-title ${displayFont}`}>{l.requirement}</h2>
            <p className="max-w-md leading-8 text-[#746557]">{l.reqIntro}</p>
            <div className="credential mt-8 max-w-md rounded-e-xl p-5 text-sm text-[#68421f]">
              <ShieldCheck className="mb-2 text-[#b39157]" />
              <b>{c.license}</b>
              <br />
              <span className="text-xs text-[#746557]">{c.fal}</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-[#faf5ea] p-6 shadow-[0_20px_60px_rgba(64,39,19,.10)] md:p-8">
            <h3 className="text-xl font-bold text-[#402713]">{l.requirement}</h3>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {l.types.map((x, i) => {
                const typeKeys = ["villa", "apartment", "land", "commercial", "other", "other"];
                return (
                  <Link
                    key={x}
                    href={`/request?type=${typeKeys[i]}`}
                    className="rounded-lg border border-[#ddccb0] bg-white px-3 py-4 text-center text-sm font-bold text-[#68421f] no-underline transition hover:border-[#68421f] hover:bg-[#f1e4cb]"
                  >
                    {x}
                  </Link>
                );
              })}
            </div>
            <Link href="/request" className="btn btn-primary mt-7">
              {l.startRequest}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <span className="watermark -top-2 end-[-10px]">R</span>
        <div className="shell relative grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#6b421f]/20 bg-[#fbf7ef] p-8 md:p-10">
            <p className="eyebrow">{l.vision}</p>
            <h2 className="mt-5 text-3xl font-semibold text-[#412814]">{l.vision}</h2>
            <p className="mt-5 leading-8 text-[#796a5b]">{l.visionText}</p>
          </article>
          <article className="rounded-2xl bg-[#6b421f] p-8 text-[#fbf7ef] md:p-10">
            <p className="eyebrow !text-[#e5d2ae]">{l.mission}</p>
            <h2 className="mt-5 text-3xl font-semibold">{l.mission}</h2>
            <p className="mt-5 leading-8 text-[#f3e7cf]/75">{l.missionText}</p>
          </article>
        </div>
      </section>

      <section className="bg-[#402713] py-20 text-[#fbf7ef]">
        <div className="shell">
          <p className="eyebrow !text-[#e4d0ac]">ALRAIHAN / PRINCIPLES</p>
          <h2 className={`mt-4 text-3xl font-semibold md:text-5xl ${displayFont}`}>{l.values}</h2>
          <p className="mt-4 text-[#f1e4cb]/70">{l.valuesIntro}</p>
          <div className="mt-10 border-y border-[#b39157]/40">
            {l.valuesList.map(([x, d], i) => {
              const I = [ShieldCheck, Sparkles, BadgeCheck][i];
              return (
                <div key={x} className="grid items-center gap-5 border-b border-[#b39157]/30 py-6 last:border-0 md:grid-cols-[70px_1fr_1.3fr]">
                  <span className="text-3xl font-light text-[#e4d0ac]/70">0{i + 1}</span>
                  <div className="flex items-center gap-4">
                    <I className="text-[#e4d0ac]" />
                    <h3 className="text-lg font-bold">{x}</h3>
                  </div>
                  <p className="text-sm leading-7 text-[#f1e4cb]/70">{d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <span className="watermark bottom-10 start-[12%]">R</span>
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div className="order-2 max-w-[375px] lg:order-none">
            <div className="border-s-[14px] border-[#68421f] ps-5">
              <Portrait note={l.photoNote} />
            </div>
          </div>
          <div>
            <p className="eyebrow">PERSONAL ADVISORY</p>
            <h2 className={`section-title max-w-2xl ${displayFont}`}>{l.advisor}</h2>
            <p className="max-w-xl text-lg leading-9 text-[#746557]">{l.advisorText}</p>
            <Link href="/about" className="btn btn-outline mt-7">
              {l.sendReq}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="shell pb-24">
        <div className="relative min-h-[470px] overflow-hidden rounded-3xl bg-[#412814]">
          <img
            src="https://images.unsplash.com/photo-1506795213373-430e921fe2ed?auto=format&fit=crop&w=1800&q=80"
            alt="Riyadh"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#412814]/90 via-[#412814]/48 to-[#412814]/20" />
          <div className="relative z-10 flex min-h-[470px] max-w-xl flex-col justify-end p-8 text-[#fbf7ef] md:p-14">
            <p className="eyebrow !text-[#e5d2ae]">RIYADH / FUTURE CITY</p>
            <h2 className={`mt-3 text-4xl font-semibold leading-tight md:text-5xl ${displayFont}`}>{l.riyadh}</h2>
            <p className="mt-5 leading-8 text-[#f3e7cf]/85">{l.riyadhText}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/request?location=riyadh" className="btn bg-[#fbf7ef] text-[#6b421f]">
                {l.riyadhCta}
              </Link>
              <Link href="/future-city" className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]">
                {l.riyadhMore}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-[#6b421f]/10 bg-[#f3e7cf]">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{l.offersEyebrow}</p>
              <h2 className={`section-title mb-0 ${displayFont}`}>{l.offersTitle}</h2>
            </div>
            <Link href="/offers" className="btn btn-outline">
              {l.seeOffers}
              <Arrow />
            </Link>
          </div>
          <p className="mt-3 max-w-lg leading-7 text-[#746557]">{l.offersText}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {demoOffers.map((offer) => {
              const p = propertyTypes.find((pt) => pt.key === offer.type)!;
              return (
                <div key={offer.type} className="relative overflow-hidden rounded-2xl bg-[#fbf7ef]">
                  <span className="absolute start-4 top-4 z-10 rounded-full bg-[#412814] px-3 py-1.5 text-[.65rem] font-bold tracking-[.1em] text-[#f3e7cf]">
                    {l.offersDemo}
                  </span>
                  <img
                    className="h-44 w-full object-cover opacity-90"
                    src={`https://images.unsplash.com/photo-${offer.image}?auto=format&fit=crop&w=700&q=80`}
                    alt={lang === "ar" ? p.titleAr : p.titleEn}
                  />
                  <div className="p-5">
                    <p className="text-xs font-bold tracking-[.13em] text-[#b89558]">{(lang === "ar" ? p.titleAr : p.titleEn).toUpperCase()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="blog" className="section">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">{l.blog}</p>
              <h2 className={`section-title mb-0 ${displayFont}`}>{l.blogTitle}</h2>
            </div>
            <Link href="/blog" className="btn btn-outline">
              {l.blog}
              <Arrow />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {blogArticles.slice(0, 3).map((a) => {
              const title = lang === "ar" ? a.titleAr : a.titleEn;
              const desc = lang === "ar" ? a.excerptAr : a.excerptEn;
              const inner = (
                <>
                  <div className="relative">
                    <img
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
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
                    <span className="text-[.65rem] font-bold tracking-[.15em] text-[#b89558]">ALRAIHAN JOURNAL</span>
                    <h3 className="mt-3 text-lg font-bold text-[#412814]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#796a5b]">{desc}</p>
                    {a.hasPage && (
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#6b421f]">
                        {l.read}
                        <Arrow />
                      </span>
                    )}
                  </div>
                </>
              );
              return a.hasPage ? (
                <Link href={`/blog/${a.slug}`} key={a.slug} className="group overflow-hidden rounded-2xl bg-[#faf5ea] text-inherit no-underline">
                  {inner}
                </Link>
              ) : (
                <Link href="/blog" key={a.slug} className="group overflow-hidden rounded-2xl bg-[#faf5ea] text-inherit no-underline">
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-[#f1e4cb]">
        <div className="shell grid items-center gap-8 rounded-3xl border border-[#6b421f]/15 bg-[#faf5ea] p-8 md:grid-cols-[.15fr_.55fr_.3fr] md:p-12">
          <Sparkles className="mx-auto text-[#68421f] md:mx-0" size={38} />
          <div>
            <p className="eyebrow">{l.assistantEyebrow}</p>
            <h2 className={`mt-2 text-2xl font-bold text-[#412814] md:text-3xl ${displayFont}`}>{l.assistantTitle}</h2>
            <p className="mt-3 max-w-lg leading-7 text-[#746557]">{l.assistantText}</p>
          </div>
          <button onClick={openAssistant} className="btn btn-primary w-full md:w-auto">
            <Sparkles size={16} />
            {l.assistantBtn}
          </button>
        </div>
      </section>

      <section className="section">
        <div className="shell rounded-3xl bg-[#6b421f] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-16">
          <p className="eyebrow !text-[#e5d2ae]">LET'S BEGIN</p>
          <h2 className={`mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-5xl ${displayFont}`}>{l.cta}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/75">{l.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={openWhatsApp} className="btn bg-[#fbf7ef] text-[#6b421f]">
              <MessageCircle size={17} />
              {c.whatsapp}
            </button>
            <Link href="/contact" className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]">
              {l.sendReq}
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
