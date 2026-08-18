"use client";

import { FormEvent, useState } from "react";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / خدماتنا / إدارة الأملاك",
    title: "إدارة الأملاك",
    description: "بإمكان ملاك العقارات التواصل مع الريحان العقارية لمناقشة احتياج إدارة عقارهم.",
    introTitle: "كيف يمكننا المساعدة",
    introText:
      "إذا كنت تملك عقاراً وتحتاج إلى مناقشة إدارته، يسعدنا التواصل معك لفهم احتياجك بدقة وتقديم التوجيه المناسب.",
    formTitle: "معلومات العقار",
    propertyType: "نوع العقار",
    types: ["فيلا", "شقة", "تجاري", "أخرى"],
    location: "موقع العقار",
    name: "الاسم",
    phone: "رقم الجوال",
    notes: "تفاصيل إضافية عن احتياجك",
    send: "إرسال الطلب",
    received: "شكراً لك، تم استلام طلبك وسنتواصل معك لمناقشة احتياجك.",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / SERVICES / PROPERTY MANAGEMENT",
    title: "Property Management",
    description: "Property owners can contact ALRAIHAN REAL ESTATE to discuss their property management requirements.",
    introTitle: "How We Can Help",
    introText:
      "If you own a property and need to discuss its management, we would be glad to speak with you, understand your requirement clearly, and offer suitable guidance.",
    formTitle: "Property Information",
    propertyType: "Property type",
    types: ["Villa", "Apartment", "Commercial", "Other"],
    location: "Property location",
    name: "Name",
    phone: "Phone number",
    notes: "Additional detail about your requirement",
    send: "Send request",
    received: "Thank you, your request has been received and we will contact you to discuss your requirement.",
  },
};

export default function PropertyManagementPage() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const [type, setType] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero
        eyebrow={l.eyebrow}
        title={l.title}
        description={l.description}
        trail={[
          { label: lang === "ar" ? "خدماتنا" : "Services", href: "/services" },
          { label: lang === "ar" ? "إدارة الأملاك" : "Property Management" },
        ]}
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">01 / {l.introTitle}</p>
            <h2 className={`section-title ${displayFont}`}>{l.introTitle}</h2>
            <p className="max-w-md leading-8 text-[#746557]">{l.introText}</p>
            <div className="credential mt-8 max-w-md rounded-e-xl p-5 text-sm text-[#68421f]">
              <ShieldCheck className="mb-2 text-[#b39157]" />
              <b>{c.license}</b>
              <br />
              <span className="text-xs text-[#746557]">{c.fal}</span>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl bg-[#faf5ea] p-6 shadow-[0_20px_60px_rgba(64,39,19,.10)] md:p-8">
            {submitted ? (
              <div className="py-8 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e4d0ac] text-[#68421f]">
                  <Check size={28} />
                </span>
                <p className="mt-5 text-sm leading-7 text-[#402713]">{l.received}</p>
                <button type="button" onClick={open} className="btn btn-primary mt-6">
                  <MessageCircle size={16} />
                  {c.whatsapp}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[#402713]">{l.formTitle}</h3>
                <p className="mb-3 mt-5 text-xs font-bold tracking-[.1em] text-[#825d3b]">{l.propertyType.toUpperCase()}</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {l.types.map((x, i) => (
                    <button
                      type="button"
                      key={x}
                      onClick={() => setType(i)}
                      className={`rounded-lg border px-3 py-3 text-sm font-bold transition ${
                        type === i ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"
                      }`}
                    >
                      {x}
                    </button>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <input required className="input" placeholder={l.location} />
                  <input required className="input" placeholder={l.name} />
                  <input required type="tel" className="input" placeholder={l.phone} />
                </div>
                <textarea className="input mt-4 min-h-24" placeholder={l.notes} />
                <button className="btn btn-primary mt-6 w-full sm:w-auto" type="submit">
                  {l.send}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
