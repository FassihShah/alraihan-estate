"use client";

import Link from "next/link";
import { BadgeCheck, HeartHandshake, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / من نحن",
    title: "الريحان العقارية",
    description: "خدمة عقارية شخصية في الرياض، مبنية على فهم احتياجك وخبرة السوق المحلي.",
    whoTitle: "من نحن",
    whoText:
      "تساعد الريحان العقارية عملاءها على اتخاذ قرارات عقارية أفضل، من خلال فهم احتياجهم، ومعرفة بالسوق المحلي، وإرشاد مهني، وخدمة شخصية قريبة من العميل في كل خطوة.",
    whoPoints: ["فهم احتياجك أولاً", "معرفة بسوق الرياض", "إرشاد مهني وواضح", "خدمة شخصية مباشرة"],
    licenseTitle: "وسيط عقاري مرخص",
    photoNote: "مكان مخصص لصورة المستشار العقاري",
    founderTitle: "خدمة شخصية قريبة من العميل",
    founderText:
      "نؤمن أن القرار العقاري الجيد يبدأ بالاستماع. نولي اهتماماً شخصياً لكل عميل، ونحرص على أن يفهم خياراته بوضوح قبل اتخاذ قراره.",
    ctaTitle: "هل تود مناقشة احتياجك العقاري؟",
    ctaText: "أخبرنا بما تحتاجه، وسنساعدك على البدء بالخطوة الصحيحة.",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / ABOUT",
    title: "About ALRAIHAN REAL ESTATE",
    description: "Personal real estate service in Riyadh, built on understanding your needs and local market expertise.",
    whoTitle: "Who We Are",
    whoText:
      "ALRAIHAN REAL ESTATE helps clients make better property decisions by understanding their needs, applying local market knowledge, offering professional guidance, and staying close through personal service at every step.",
    whoPoints: ["Your need comes first", "Riyadh market knowledge", "Clear professional guidance", "Direct, personal service"],
    licenseTitle: "Licensed Real Estate Broker",
    photoNote: "Reserved for the real estate advisor portrait",
    founderTitle: "Personal service, close to the client",
    founderText:
      "We believe a good property decision starts with listening. We give every client personal attention and make sure they understand their options clearly before deciding.",
    ctaTitle: "Would you like to discuss your property need?",
    ctaText: "Tell us what you need and we will help you start in the right direction.",
  },
};

export default function AboutPage() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const values: [string, string, typeof ShieldCheck][] =
    lang === "ar"
      ? [
          ["النزاهة", "الوضوح والصدق أساس علاقتنا.", ShieldCheck],
          ["الاحترافية", "عناية بالتفاصيل وخدمة مدروسة.", Sparkles],
          ["العميل أولاً", "احتياجك هو نقطة البداية دائماً.", HeartHandshake],
        ]
      : [
          ["Integrity", "Clarity and honesty are the basis of our relationship.", ShieldCheck],
          ["Professionalism", "Care for detail and a considered service.", Sparkles],
          ["Client First", "Your need is always the starting point.", HeartHandshake],
        ];

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: lang === "ar" ? "من نحن" : "About" }]} />

      <section className="section">
        <div className="shell grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="eyebrow">01 / {l.whoTitle}</p>
            <h2 className={`section-title ${displayFont}`}>{l.whoTitle}</h2>
            <p className="max-w-xl text-lg leading-9 text-[#746557]">{l.whoText}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {l.whoPoints.map((p) => (
                <div key={p} className="flex items-center gap-2.5 rounded-lg border border-[#6b421f]/15 bg-[#faf5ea] px-4 py-3 text-sm font-semibold text-[#68421f]">
                  <BadgeCheck size={16} className="shrink-0 text-[#b39157]" />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <Portrait note={l.photoNote} />
          </div>
        </div>
      </section>

      <section className="section bg-[#412814] text-[#fbf7ef]">
        <div className="shell">
          <div className="credential mx-auto max-w-2xl rounded-xl border border-[#b39157]/40 bg-white/5 p-8 text-center md:p-10">
            <ShieldCheck className="mx-auto text-[#e4d0ac]" size={34} />
            <h2 className="mt-5 text-2xl font-bold md:text-3xl">{l.licenseTitle}</h2>
            <p className="mt-4 leading-8 text-[#f3e7cf]/85">{c.license}</p>
            <p className="mt-3 text-lg font-bold tracking-wide text-[#e4d0ac]">{c.fal}</p>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <span className="watermark -top-4 end-[-10px]">R</span>
        <div className="shell relative grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-[#6b421f]/20 bg-[#fbf7ef] p-8 md:p-10">
            <p className="eyebrow">02 / {lang === "ar" ? "الرؤية" : "Vision"}</p>
            <h2 className="mt-5 text-3xl font-semibold text-[#412814]">{lang === "ar" ? "الرؤية" : "Vision"}</h2>
            <p className="mt-5 leading-8 text-[#796a5b]">
              {lang === "ar"
                ? "أن نكون الوسيط العقاري المفضل في الرياض وفي المملكة، ونساعد عملاءنا على تحقيق أهدافهم العقارية من خلال فهم السوق والحلول المناسبة."
                : "To become a preferred real estate partner in Riyadh and across the Kingdom by helping clients achieve their property goals through market understanding and appropriate solutions."}
            </p>
          </article>
          <article className="rounded-2xl bg-[#6b421f] p-8 text-[#fbf7ef] md:p-10">
            <p className="eyebrow !text-[#e5d2ae]">03 / {lang === "ar" ? "الرسالة" : "Mission"}</p>
            <h2 className="mt-5 text-3xl font-semibold">{lang === "ar" ? "الرسالة" : "Mission"}</h2>
            <p className="mt-5 leading-8 text-[#f3e7cf]/75">
              {lang === "ar"
                ? "تقديم خدمات عقارية متميزة تلبي احتياجات عملائنا وتوقعاتهم، ومساعدتهم على اتخاذ قرارات عقارية حكيمة."
                : "To deliver distinguished real estate services that address our clients’ needs while helping them make informed property decisions."}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#402713] py-20 text-[#fbf7ef]">
        <div className="shell">
          <p className="eyebrow !text-[#e4d0ac]">04 / {lang === "ar" ? "قيمنا" : "Values"}</p>
          <h2 className={`mt-4 text-3xl font-semibold md:text-5xl ${displayFont}`}>{lang === "ar" ? "قيمنا" : "Our Values"}</h2>
          <div className="mt-10 border-y border-[#b39157]/40">
            {values.map(([x, d, I], i) => (
              <div key={x} className="grid items-center gap-5 border-b border-[#b39157]/30 py-6 last:border-0 md:grid-cols-[70px_1fr_1.3fr]">
                <span className="text-3xl font-light text-[#e4d0ac]/70">0{i + 1}</span>
                <div className="flex items-center gap-4">
                  <I className="text-[#e4d0ac]" />
                  <h3 className="text-lg font-bold">{x}</h3>
                </div>
                <p className="text-sm leading-7 text-[#f1e4cb]/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden">
        <span className="watermark bottom-10 start-[10%]">R</span>
        <div className="shell relative grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div className="order-2 mx-auto max-w-[340px] lg:order-none">
            <div className="border-s-[14px] border-[#68421f] ps-5">
              <Portrait note={l.photoNote} />
            </div>
          </div>
          <div>
            <p className="eyebrow">05 / PERSONAL ADVISORY</p>
            <h2 className={`section-title max-w-2xl ${displayFont}`}>{l.founderTitle}</h2>
            <p className="max-w-xl text-lg leading-9 text-[#746557]">{l.founderText}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell rounded-3xl bg-[#6b421f] px-7 py-12 text-center text-[#fbf7ef] md:px-12 md:py-16">
          <p className="eyebrow !text-[#e5d2ae]">LET'S BEGIN</p>
          <h2 className={`mx-auto mt-4 max-w-2xl text-3xl font-semibold md:text-5xl ${displayFont}`}>{l.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#f3e7cf]/75">{l.ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={open} className="btn bg-[#fbf7ef] text-[#6b421f]">
              <MessageCircle size={17} />
              {c.whatsapp}
            </button>
            <Link href="/request" className="btn border border-[#e5d2ae]/60 text-[#fbf7ef]">
              {c.submitRequirement}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
