"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Check, Key, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / خدماتنا / الإيجار",
    title: "خدمات الإيجار",
    description: "حلول عملية للسكن أو الاستثمار، مع اهتمام بالتفاصيل.",
    lookingTitle: "أبحث عن عقار للإيجار",
    lookingText: "شاركنا تفضيلاتك الأساسية وسنبدأ من حيث يهمك.",
    type: "نوع العقار",
    types: ["فيلا", "شقة", "تجاري", "أخرى"],
    area: "المنطقة المفضلة",
    budget: "الميزانية التقريبية",
    name: "الاسم",
    phone: "رقم الجوال",
    send: "إرسال الطلب",
    received: "تم استلام طلبك، سنتواصل معك قريباً.",
    haveTitle: "لدي عقار للإيجار",
    haveText: "إذا كان لديك عقار وترغب بمناقشة تأجيره، تواصل معنا وسنستمع لاحتياجك.",
    haveCta: "لدي عقار للإيجار",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / SERVICES / RENTAL",
    title: "Rental Services",
    description: "Practical solutions for a home or investment, with attention to detail.",
    lookingTitle: "Looking for a Property to Rent",
    lookingText: "Share your essentials and we will begin where it matters to you.",
    type: "Property type",
    types: ["Villa", "Apartment", "Commercial", "Other"],
    area: "Preferred area",
    budget: "Approximate budget",
    name: "Name",
    phone: "Phone number",
    send: "Send request",
    received: "Your request has been received, we will contact you shortly.",
    haveTitle: "Have a Property for Rent",
    haveText: "If you have a property and would like to discuss renting it out, reach out and we will listen to your need.",
    haveCta: "I Have a Property for Rent",
  },
};

export default function RentalPage() {
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
          { label: lang === "ar" ? "الإيجار" : "Rental" },
        ]}
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">01 / {l.lookingTitle}</p>
            <h2 className={`section-title ${displayFont}`}>{l.lookingTitle}</h2>
            <p className="max-w-md leading-8 text-[#746557]">{l.lookingText}</p>
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
                <p className="mb-3 text-xs font-bold tracking-[.1em] text-[#825d3b]">{l.type.toUpperCase()}</p>
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
                  <input required className="input" placeholder={l.area} />
                  <input className="input" placeholder={l.budget} />
                  <input required className="input" placeholder={l.name} />
                  <input required type="tel" className="input" placeholder={l.phone} />
                </div>
                <button className="btn btn-primary mt-6 w-full sm:w-auto" type="submit">
                  {l.send}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      <section className="section border-t border-[#6b421f]/10 bg-[#412814] text-[#fbf7ef]">
        <div className="shell grid items-center gap-10 md:grid-cols-[.4fr_.6fr]">
          <Key size={54} className="text-[#e4d0ac]" />
          <div>
            <p className="eyebrow !text-[#e5d2ae]">02 / {l.haveTitle}</p>
            <h2 className={`mt-3 text-3xl font-semibold md:text-4xl ${displayFont}`}>{l.haveTitle}</h2>
            <p className="mt-4 max-w-lg leading-8 text-[#f3e7cf]/80">{l.haveText}</p>
            <Link href="/request?purpose=rent" className="btn mt-7 bg-[#fbf7ef] text-[#6b421f]">
              {l.haveCta}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
