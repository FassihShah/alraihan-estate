"use client";

import { FormEvent, useState } from "react";
import { Check, MessageCircle, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";
import { t } from "@/data/translations";

const copy = {
  ar: {
    eyebrow: "الريحان العقارية / تواصل معنا",
    title: "تواصل معنا",
    description: "يسعدنا التواصل معك ومساعدتك في اتخاذ قرارك العقاري.",
    photoNote: "مكان مخصص لصورة المستشار العقاري",
    enquiry: "نوع الاستفسار",
    enquiries: ["شراء", "بيع", "إيجار", "إدارة أملاك", "استشارة"],
    name: "الاسم",
    phone: "رقم الجوال",
    message: "رسالتك",
    preferredLang: "اللغة المفضلة للتواصل",
    langAr: "العربية",
    langEn: "الإنجليزية",
    send: "إرسال الرسالة",
    received: "شكراً لتواصلك معنا. سنقوم بالرد عليك في أقرب وقت.",
  },
  en: {
    eyebrow: "ALRAIHAN REAL ESTATE / CONTACT",
    title: "Contact Us",
    description: "We would be glad to hear from you and help with your property decision.",
    photoNote: "Reserved for the real estate advisor portrait",
    enquiry: "Type of enquiry",
    enquiries: ["Buy", "Sell", "Rent", "Property Management", "Consultation"],
    name: "Name",
    phone: "Phone number",
    message: "Your message",
    preferredLang: "Preferred language",
    langAr: "Arabic",
    langEn: "English",
    send: "Send Message",
    received: "Thank you for contacting us. We will respond as soon as possible.",
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const { open } = useWhatsApp();
  const c = t(lang);
  const l = copy[lang];
  const displayFont = lang === "ar" ? "arabic-display" : "display";
  const [enquiry, setEnquiry] = useState<number | null>(null);
  const [preferredLang, setPreferredLang] = useState<"ar" | "en">(lang);
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: lang === "ar" ? "تواصل معنا" : "Contact" }]} />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <div className="mx-auto max-w-[260px] lg:mx-0">
              <Portrait note={l.photoNote} />
            </div>
            <div className="credential mt-8 rounded-e-xl p-5 text-sm text-[#68421f]">
              <ShieldCheck className="mb-2 text-[#b39157]" />
              <b>{c.license}</b>
              <br />
              <span className="text-xs text-[#746557]">{c.fal}</span>
            </div>
            <button onClick={open} className="btn btn-primary mt-6 w-full">
              <MessageCircle size={16} />
              {c.whatsapp}
            </button>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-[#faf5ea] p-6 shadow-[0_20px_60px_rgba(64,39,19,.10)] md:p-8">
            {submitted ? (
              <div className="py-10 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e4d0ac] text-[#68421f]">
                  <Check size={28} />
                </span>
                <p className="mt-5 text-sm leading-7 text-[#402713]">{l.received}</p>
              </div>
            ) : (
              <>
                <p className="mb-3 text-xs font-bold tracking-[.1em] text-[#825d3b]">{l.enquiry.toUpperCase()}</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                  {l.enquiries.map((x, i) => (
                    <button
                      type="button"
                      key={x}
                      onClick={() => setEnquiry(i)}
                      className={`rounded-lg border px-3 py-3 text-sm font-bold transition ${
                        enquiry === i ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"
                      }`}
                    >
                      {x}
                    </button>
                  ))}
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <input required className="input" placeholder={l.name} />
                  <input required type="tel" className="input" placeholder={l.phone} />
                </div>
                <textarea required className="input mt-4 min-h-28" placeholder={l.message} />
                <p className="mb-2 mt-5 text-xs font-bold tracking-[.1em] text-[#825d3b]">{l.preferredLang.toUpperCase()}</p>
                <div className="flex gap-2">
                  <button type="button" onClick={() => setPreferredLang("ar")} className={`btn ${preferredLang === "ar" ? "btn-primary" : "btn-outline"} !py-2`}>
                    {l.langAr}
                  </button>
                  <button type="button" onClick={() => setPreferredLang("en")} className={`btn ${preferredLang === "en" ? "btn-primary" : "btn-outline"} !py-2`}>
                    {l.langEn}
                  </button>
                </div>
                <button className="btn btn-primary mt-6" type="submit">
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
