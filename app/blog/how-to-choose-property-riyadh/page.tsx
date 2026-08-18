"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";
import { blogArticles } from "@/data/blog";

const copy = {
  ar: {
    category: "إرشاد عقاري / 2026",
    title: "كيف تختار العقار المناسب في الرياض؟",
    intro: "قرار الشراء أو الاستثمار يبدأ بتحديد ما تحتاجه فعلاً، ثم مقارنة الخيارات بهدوء ووضوح.",
    body: [
      "في مدينة تنمو وتتغير بسرعة مثل الرياض، لا توجد إجابة واحدة تناسب الجميع. أفضل عقار هو الذي ينسجم مع أسلوب حياتك أو هدفك الاستثماري وميزانيتك، وليس فقط العقار الذي يبدو جذاباً عند الزيارة الأولى.",
    ],
    sections: [
      ["ابدأ من احتياجك", "هل تبحث عن سكن قريب من العمل؟ مساحة لعائلتك؟ أم فرصة استثمارية؟ تحديد الأولويات يساعدك على تقليل الخيارات والتحدث بوضوح مع المستشار العقاري."],
      ["ضع الموقع في سياقه", "ضع في الاعتبار سهولة الوصول والخدمات المحيطة وطبيعة الحي وخططك المستقبلية. الموقع الجيد ليس مجرد اسم حي؛ بل هو تفاصيل يومية تؤثر في جودة التجربة وقيمة العقار على المدى البعيد."],
      ["قارن بوعي", "قارن بين المساحة والحالة والموقع وتكلفة التشغيل، ولا تجعل أي عنصر واحد يحسم القرار وحده. السؤال المناسب في الوقت المناسب يجعل الاختيار أكثر راحة وثقة."],
    ],
    calloutTitle: "فكرة مهمة",
    calloutText: "فهم احتياجك هو الخطوة الأولى نحو اختيار عقار مناسب.",
    ctaRequest: "أرسل متطلباتك",
    relatedTitle: "مقالات ذات صلة",
    backToBlog: "المدونة",
  },
  en: {
    category: "Property Guidance / 2026",
    title: "How to Choose the Right Property in Riyadh",
    intro: "A buying or investment decision starts with identifying what you truly need, then calmly comparing the options.",
    body: [
      "In a city growing and changing as fast as Riyadh, there is no single answer that fits everyone. The best property is the one that fits your lifestyle or investment goal and your budget, not simply the one that looks appealing on a first visit.",
    ],
    sections: [
      ["Start with your need", "Are you looking for a home close to work? Space for your family? Or an investment opportunity? Defining priorities helps you narrow the options and speak clearly with your real estate advisor."],
      ["Put location in context", "Consider accessibility, surrounding services, the nature of the neighbourhood, and your future plans. A good location is not just a district name; it is daily details that affect the quality of experience and the property's long-term value."],
      ["Compare with awareness", "Compare space, condition, location and running cost, and do not let a single factor decide alone. The right question at the right time makes the choice calmer and more confident."],
    ],
    calloutTitle: "Key takeaway",
    calloutText: "Understanding your need is the first step toward choosing a suitable property.",
    ctaRequest: "Send your requirement",
    relatedTitle: "Related Articles",
    backToBlog: "Blog",
  },
};

export default function Article() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const related = blogArticles.filter((a) => a.slug !== "how-to-choose-property-riyadh").slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <article>
        <div className="shell max-w-4xl py-14">
          <Breadcrumb trail={[{ label: lang === "ar" ? "المدونة" : "Blog", href: "/blog" }, { label: l.title }]} />
          <div className="mt-8 text-center">
            <p className="eyebrow justify-center">{l.category}</p>
            <h1 className={`mt-5 text-4xl font-semibold leading-[1.5] text-[#412814] md:text-6xl ${displayFont}`}>{l.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-9 text-[#796a5b]">{l.intro}</p>
          </div>
        </div>
        <div className="shell overflow-hidden rounded-3xl">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85"
            alt="Modern home"
            className="h-[310px] w-full object-cover md:h-[500px]"
          />
        </div>
        <div className="shell grid max-w-4xl gap-12 py-16 md:grid-cols-[1fr_240px]">
          <div className={`space-y-7 text-[1.02rem] leading-9 text-[#514234] ${lang === "ar" ? "" : ""}`}>
            {l.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {l.sections.map(([h, p]) => (
              <div key={h}>
                <h2 className={`text-3xl font-semibold text-[#412814] ${displayFont}`}>{h}</h2>
                <p className="mt-4">{p}</p>
              </div>
            ))}
          </div>
          <aside className="h-fit rounded-2xl bg-[#f3e7cf] p-6">
            <CheckCircle2 className="text-[#6b421f]" />
            <h3 className="mt-4 font-bold text-[#412814]">{l.calloutTitle}</h3>
            <p className="mt-2 text-sm leading-7 text-[#796a5b]">{l.calloutText}</p>
            <Link href="/request" className="btn btn-primary mt-5 w-full !text-xs">
              <MessageCircle size={15} />
              {l.ctaRequest}
            </Link>
            <button onClick={open} className="btn btn-outline mt-3 w-full !text-xs">
              <MessageCircle size={15} />
              {c.whatsapp}
            </button>
          </aside>
        </div>

        <div className="shell max-w-4xl border-t border-[#6b421f]/10 py-14">
          <p className="eyebrow">{l.relatedTitle}</p>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((a) => (
              <Link key={a.slug} href="/blog" className="group overflow-hidden rounded-xl border border-[#6b421f]/15 bg-white text-inherit no-underline">
                <img
                  className="h-32 w-full object-cover transition duration-500 group-hover:scale-105"
                  src={`https://images.unsplash.com/photo-${a.image}?auto=format&fit=crop&w=500&q=80`}
                  alt={lang === "ar" ? a.titleAr : a.titleEn}
                />
                <div className="p-4">
                  <h4 className="text-sm font-bold leading-6 text-[#412814]">{lang === "ar" ? a.titleAr : a.titleEn}</h4>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="btn btn-outline mt-8">
            <Arrow size={16} />
            {l.backToBlog}
          </Link>
        </div>
      </article>
      <Footer />
    </main>
  );
}
