"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Edit3, Handshake, Home, KeySquare, Landmark, MessageCircle, Sparkles, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsApp } from "@/contexts/WhatsAppContext";

const purposeIcons = [Home, KeySquare, Handshake, Wrench, Sparkles];
const purposeKeys = ["buy", "rent", "sell", "management", "consultation"] as const;
const typeKeys = ["land", "villa", "apartment", "commercial", "other"] as const;

const copy = {
  ar: {
    eyebrow: "طلب عقار",
    title: "طلب عقار",
    description: "شاركنا احتياجك خطوة بخطوة، وسنساعدك على إيجاد الخيار المناسب.",
    purposeTitle: "ما الذي تحتاجه؟",
    purposeOptions: ["شراء", "استئجار", "بيع", "إدارة عقار", "استشارة"],
    typeTitle: "نوع العقار",
    typeOptions: ["أرض", "فيلا", "شقة", "تجاري", "أخرى"],
    locationTitle: "الموقع المفضل",
    locationLabel: "المدينة أو الحي المفضل",
    riyadhQuick: "الرياض",
    budgetTitle: "الميزانية التقريبية",
    budgetLabel: "الميزانية التقريبية (اختياري)",
    skip: "تخطي",
    notesTitle: "متطلبات إضافية",
    notesLabel: "أخبرنا بأي تفاصيل إضافية تساعدنا في فهم طلبك",
    contactTitle: "معلومات التواصل",
    name: "الاسم",
    phone: "رقم الجوال",
    preferredLang: "اللغة المفضلة للتواصل",
    langAr: "العربية",
    langEn: "الإنجليزية",
    back: "السابق",
    next: "التالي",
    submit: "إرسال الطلب",
    stepOf: (a: number, b: number) => `الخطوة ${a} من ${b}`,
    received: "تم استلام طلبك",
    receivedText: "شكراً لك، استلمنا طلبك وسنتواصل معك قريباً وفق احتياجك.",
    summary: "ملخص طلبك",
    wa: "تواصل عبر واتساب",
    edit: "تعديل الطلب",
  },
  en: {
    eyebrow: "Property Request",
    title: "Property Request",
    description: "Share what you need step by step, and we will help you find the right option.",
    purposeTitle: "What do you need?",
    purposeOptions: ["Buy", "Rent", "Sell", "Property Management", "Consultation"],
    typeTitle: "Property type",
    typeOptions: ["Land", "Villa", "Apartment", "Commercial", "Other"],
    locationTitle: "Preferred location",
    locationLabel: "Preferred city or district",
    riyadhQuick: "Riyadh",
    budgetTitle: "Approximate budget",
    budgetLabel: "Approximate budget (optional)",
    skip: "Skip",
    notesTitle: "Additional requirements",
    notesLabel: "Tell us any extra detail that helps us understand your request",
    contactTitle: "Contact information",
    name: "Name",
    phone: "Phone number",
    preferredLang: "Preferred language",
    langAr: "Arabic",
    langEn: "English",
    back: "Back",
    next: "Continue",
    submit: "Send request",
    stepOf: (a: number, b: number) => `Step ${a} of ${b}`,
    received: "Your request has been received",
    receivedText: "Thank you, we have received your request and will contact you shortly based on your need.",
    summary: "Request summary",
    wa: "Chat on WhatsApp",
    edit: "Edit Requirement",
  },
};

export default function RequestPageClient() {
  const { lang } = useLanguage();
  const { open: openWhatsApp } = useWhatsApp();
  const params = useSearchParams();
  const l = copy[lang];
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;

  const [step, setStep] = useState(0);
  const [purpose, setPurpose] = useState<number | null>(null);
  const [propertyType, setPropertyType] = useState<number | null>(null);
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [notes, setNotes] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredLang, setPreferredLang] = useState<"ar" | "en">(lang);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const purposeParam = params.get("purpose");
    const typeParam = params.get("type");
    const locationParam = params.get("location");
    const pIdx = purposeKeys.indexOf((purposeParam || "") as (typeof purposeKeys)[number]);
    const tIdx = typeKeys.indexOf((typeParam || "") as (typeof typeKeys)[number]);
    if (pIdx >= 0) setPurpose(pIdx);
    if (tIdx >= 0) setPropertyType(tIdx);
    if (locationParam === "riyadh") setLocation(l.riyadhQuick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const steps = [l.purposeTitle, l.typeTitle, l.locationTitle, l.budgetTitle, l.notesTitle, l.contactTitle];
  const totalSteps = steps.length;

  const canAdvance = () => {
    if (step === 0) return purpose !== null;
    if (step === 1) return propertyType !== null;
    if (step === 2) return location.trim().length > 0;
    if (step === 5) return name.trim().length > 0 && phone.trim().length > 0;
    return true;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!canAdvance()) return;
    if (step < totalSteps - 1) {
      setStep((s) => s + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: l.title }]} />

      <section className="section">
        <div className="shell max-w-2xl">
          <form onSubmit={onSubmit} className="relative overflow-hidden rounded-2xl bg-[#faf5ea] p-6 shadow-[0_20px_60px_rgba(64,39,19,.10)] md:p-10">
            {!submitted && (
              <>
                <div className="mb-7 flex gap-1.5">
                  {steps.map((_, i) => (
                    <span key={i} className={`h-1 flex-1 rounded-full transition ${i <= step ? "bg-[#68421f]" : "bg-[#e4d0ac]"}`} />
                  ))}
                </div>
                <p className="mb-5 text-xs font-bold tracking-[.13em] text-[#825d3b]">{l.stepOf(step + 1, totalSteps)}</p>
              </>
            )}

            {submitted ? (
              <div className="py-4 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e4d0ac] text-[#68421f]">
                  <Check size={30} />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-[#412814]">{l.received}</h3>
                <p className="mt-3 leading-7 text-[#796a5b]">{l.receivedText}</p>

                <div className="mt-8 rounded-xl border border-[#6b421f]/15 bg-[#fbf7ef] p-5 text-start text-sm leading-8 text-[#514234]">
                  <p className="mb-2 text-xs font-bold tracking-[.13em] text-[#825d3b]">{l.summary.toUpperCase()}</p>
                  {purpose !== null && (
                    <p>
                      <b>{l.purposeTitle}:</b> {l.purposeOptions[purpose]}
                    </p>
                  )}
                  {propertyType !== null && (
                    <p>
                      <b>{l.typeTitle}:</b> {l.typeOptions[propertyType]}
                    </p>
                  )}
                  {location && (
                    <p>
                      <b>{l.locationTitle}:</b> {location}
                    </p>
                  )}
                  {budget && (
                    <p>
                      <b>{l.budgetTitle}:</b> {budget}
                    </p>
                  )}
                  <p>
                    <b>{l.name}:</b> {name}
                  </p>
                  <p>
                    <b>{l.phone}:</b> {phone}
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <button type="button" onClick={openWhatsApp} className="btn btn-primary">
                    <MessageCircle size={16} />
                    {l.wa}
                  </button>
                  <button type="button" onClick={() => setSubmitted(false)} className="btn btn-outline">
                    <Edit3 size={16} />
                    {l.edit}
                  </button>
                </div>
              </div>
            ) : (
              <>
                {step === 0 && (
                  <>
                    <h3 className="text-xl font-bold text-[#402713]">{l.purposeTitle}</h3>
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {l.purposeOptions.map((x, i) => {
                        const Icon = purposeIcons[i];
                        return (
                          <button
                            type="button"
                            onClick={() => setPurpose(i)}
                            key={x}
                            className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-4 text-sm font-bold transition ${
                              purpose === i ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"
                            }`}
                          >
                            <Icon size={18} />
                            {x}
                          </button>
                        );
                      })}
                    </div>
                  </>
                )}
                {step === 1 && (
                  <>
                    <h3 className="text-xl font-bold text-[#402713]">{l.typeTitle}</h3>
                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {l.typeOptions.map((x, i) => (
                        <button
                          type="button"
                          onClick={() => setPropertyType(i)}
                          key={x}
                          className={`rounded-lg border px-3 py-4 text-sm font-bold transition ${
                            propertyType === i ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"
                          }`}
                        >
                          {x}
                        </button>
                      ))}
                    </div>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 className="text-xl font-bold text-[#402713]">{l.locationTitle}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setLocation(l.riyadhQuick)}
                        className={`flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-bold transition ${
                          location === l.riyadhQuick ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"
                        }`}
                      >
                        <Landmark size={15} />
                        {l.riyadhQuick}
                      </button>
                    </div>
                    <input required value={location} onChange={(e) => setLocation(e.target.value)} className="input mt-4" placeholder={l.locationLabel} />
                  </>
                )}
                {step === 3 && (
                  <>
                    <h3 className="text-xl font-bold text-[#402713]">{l.budgetTitle}</h3>
                    <input value={budget} onChange={(e) => setBudget(e.target.value)} className="input mt-5" placeholder={l.budgetLabel} />
                  </>
                )}
                {step === 4 && (
                  <>
                    <h3 className="text-xl font-bold text-[#402713]">{l.notesTitle}</h3>
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="input mt-5 min-h-32" placeholder={l.notesLabel} />
                  </>
                )}
                {step === 5 && (
                  <>
                    <h3 className="text-xl font-bold text-[#402713]">{l.contactTitle}</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <input required value={name} onChange={(e) => setName(e.target.value)} className="input" placeholder={l.name} />
                      <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="input" placeholder={l.phone} />
                    </div>
                    <p className="mt-5 mb-2 text-xs font-bold tracking-[.1em] text-[#825d3b]">{l.preferredLang.toUpperCase()}</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setPreferredLang("ar")}
                        className={`btn ${preferredLang === "ar" ? "btn-primary" : "btn-outline"} !py-2`}
                      >
                        {l.langAr}
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferredLang("en")}
                        className={`btn ${preferredLang === "en" ? "btn-primary" : "btn-outline"} !py-2`}
                      >
                        {l.langEn}
                      </button>
                    </div>
                  </>
                )}

                <div className="mt-8 flex items-center justify-between gap-3">
                  {step > 0 ? (
                    <button type="button" onClick={() => setStep((s) => s - 1)} className="btn btn-outline">
                      {l.back}
                    </button>
                  ) : (
                    <span />
                  )}
                  <button className="btn btn-primary" type="submit" disabled={!canAdvance()}>
                    {step === totalSteps - 1 ? l.submit : l.next}
                    <Arrow size={17} />
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
