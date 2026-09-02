"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Edit3, Handshake, Home, KeySquare, MessageCircle, Ruler, Sparkles, UserRound, Wrench } from "lucide-react";
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
    eyebrow: "طلب عقار", title: "أرسل طلبك العقاري", description: "شارك احتياجك خطوة بخطوة، وسيتواصل معك فريق الريحان العقارية بالخيارات المناسبة.",
    purposeTitle: "ما الخدمة التي تحتاجها؟", purposeOptions: ["شراء", "استئجار", "بيع", "إدارة أملاك", "استشارة"],
    typeTitle: "نوع العقار", typeOptions: ["أرض", "فيلا", "شقة", "تجاري", "أخرى"],
    detailsTitle: "الموقع وتفاصيل العقار", cityLabel: "اختر المدينة", districtLabel: "اختر الحي", sizeLabel: "مساحة العقار بالمتر المربع", roleLabel: "صفتك عند تقديم الطلب", cityPlaceholder: "اختر المدينة", districtPlaceholder: "اختر الحي", sizePlaceholder: "مثال: 450", rolePlaceholder: "اختر الصفة", cityOptions: ["الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة"], districts: { "الرياض": ["الملقا", "النخيل", "الياسمين", "حطين", "الصحافة", "النرجس", "القيروان", "العليا", "حي آخر"], "جدة": ["الشاطئ", "الروضة", "أبحر", "الزهراء", "حي آخر"], "الدمام": ["الشاطئ الغربي", "الفيصلية", "الضباب", "حي آخر"], "مكة المكرمة": ["العوالي", "الشرائع", "حي آخر"], "المدينة المنورة": ["العزيزية", "العاقول", "حي آخر"] }, roleOptions: ["مالك العقار", "وسيط أو وكيل عقاري", "ممثل شركة", "أخرى"],
    budgetTitle: "الميزانية التقريبية", budgetLabel: "الميزانية التقريبية (اختياري)", notesTitle: "متطلبات إضافية", notesLabel: "أخبرنا بأي تفاصيل إضافية تساعد فريقنا على فهم طلبك", contactTitle: "معلومات التواصل", name: "الاسم", phone: "رقم الجوال", preferredLang: "اللغة المفضلة للتواصل", langAr: "العربية", langEn: "الإنجليزية", back: "السابق", next: "التالي", submit: "إرسال الطلب", stepOf: (a: number, b: number) => `الخطوة ${a} من ${b}`, received: "تم استلام طلبك", receivedText: "شكراً لك، استلم فريق الريحان العقارية طلبك وسيتواصل معك قريباً.", summary: "ملخص طلبك", wa: "تواصل عبر واتساب", edit: "تعديل الطلب",
  },
  en: {
    eyebrow: "Property Request", title: "Send Your Property Request", description: "Share your requirements step by step and the ALRAIHAN team will follow up with suitable options.",
    purposeTitle: "Which service do you need?", purposeOptions: ["Buy", "Rent", "Sell", "Property Management", "Consultation"],
    typeTitle: "Property type", typeOptions: ["Land", "Villa", "Apartment", "Commercial", "Other"],
    detailsTitle: "Location and property details", cityLabel: "Select city", districtLabel: "Select district", sizeLabel: "Property size in square metres", roleLabel: "Your role when submitting this request", cityPlaceholder: "Choose a city", districtPlaceholder: "Choose a district", sizePlaceholder: "Example: 450", rolePlaceholder: "Choose your role", cityOptions: ["Riyadh", "Jeddah", "Dammam", "Makkah", "Madinah"], districts: { Riyadh: ["Al Malqa", "Al Nakheel", "Al Yasmin", "Hittin", "Al Sahafa", "Al Narjis", "Al Qirawan", "Al Olaya", "Another district"], Jeddah: ["Al Shati", "Al Rawdah", "Obhur", "Al Zahra", "Another district"], Dammam: ["Al Shati Al Gharbi", "Al Faisaliyah", "Al Dabab", "Another district"], Makkah: ["Al Awali", "Al Sharayea", "Another district"], Madinah: ["Al Aziziyah", "Al Aqoul", "Another district"] }, roleOptions: ["Property owner", "Broker or real estate agent", "Company representative", "Other"],
    budgetTitle: "Approximate budget", budgetLabel: "Approximate budget (optional)", notesTitle: "Additional requirements", notesLabel: "Tell us any extra detail that helps our team understand your request", contactTitle: "Contact information", name: "Name", phone: "Phone number", preferredLang: "Preferred language", langAr: "Arabic", langEn: "English", back: "Back", next: "Continue", submit: "Send request", stepOf: (a: number, b: number) => `Step ${a} of ${b}`, received: "Your request has been received", receivedText: "Thank you. The ALRAIHAN REAL ESTATE team has received your request and will contact you shortly.", summary: "Request summary", wa: "Chat on WhatsApp", edit: "Edit request",
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
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [submitterRole, setSubmitterRole] = useState("");
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
    if (locationParam === "riyadh") setCity(l.cityOptions[0]);
  }, [l.cityOptions, params]);

  const steps = [l.purposeTitle, l.typeTitle, l.detailsTitle, l.budgetTitle, l.notesTitle, l.contactTitle];
  const totalSteps = steps.length;
  const districtOptions = city ? l.districts[city as keyof typeof l.districts] || [] : [];
  const canAdvance = () => {
    if (step === 0) return purpose !== null;
    if (step === 1) return propertyType !== null;
    if (step === 2) return Boolean(city && district && propertySize && Number(propertySize) > 0 && submitterRole);
    if (step === 5) return name.trim().length > 0 && phone.trim().length > 0;
    return true;
  };
  const onSubmit = (event: FormEvent) => { event.preventDefault(); if (!canAdvance()) return; if (step < totalSteps - 1) setStep((current) => current + 1); else setSubmitted(true); };
  const fieldClass = "input mt-2 w-full";

  return (
    <main className="min-h-screen bg-[#fbf7ef]">
      <Header />
      <PageHero eyebrow={l.eyebrow} title={l.title} description={l.description} trail={[{ label: l.title }]} />
      <section className="section"><div className="shell max-w-2xl"><form onSubmit={onSubmit} className="relative overflow-hidden rounded-2xl bg-[#faf5ea] p-6 shadow-[0_20px_60px_rgba(64,39,19,.10)] md:p-10">
        {!submitted && <><div className="mb-7 flex gap-1.5">{steps.map((item, index) => <span key={item} className={`h-1 flex-1 rounded-full transition ${index <= step ? "bg-[#68421f]" : "bg-[#e4d0ac]"}`} />)}</div><p className="mb-5 text-xs font-bold tracking-[.13em] text-[#825d3b]">{l.stepOf(step + 1, totalSteps)}</p></>}
        {submitted ? <div className="py-4 text-center"><span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e4d0ac] text-[#68421f]"><Check size={30} /></span><h3 className="mt-6 text-2xl font-bold text-[#412814]">{l.received}</h3><p className="mt-3 leading-7 text-[#796a5b]">{l.receivedText}</p><div className="mt-8 rounded-xl border border-[#6b421f]/15 bg-[#fbf7ef] p-5 text-start text-sm leading-8 text-[#514234]"><p className="mb-2 text-xs font-bold tracking-[.13em] text-[#825d3b]">{l.summary.toUpperCase()}</p>{purpose !== null && <p><b>{l.purposeTitle}:</b> {l.purposeOptions[purpose]}</p>}{propertyType !== null && <p><b>{l.typeTitle}:</b> {l.typeOptions[propertyType]}</p>}<p><b>{l.cityLabel}:</b> {city}</p><p><b>{l.districtLabel}:</b> {district}</p><p><b>{l.sizeLabel}:</b> {propertySize}</p><p><b>{l.roleLabel}:</b> {submitterRole}</p>{budget && <p><b>{l.budgetTitle}:</b> {budget}</p>}<p><b>{l.name}:</b> {name}</p><p><b>{l.phone}:</b> {phone}</p></div><div className="mt-7 flex flex-wrap justify-center gap-3"><button type="button" onClick={openWhatsApp} className="btn btn-primary"><MessageCircle size={16} />{l.wa}</button><button type="button" onClick={() => setSubmitted(false)} className="btn btn-outline"><Edit3 size={16} />{l.edit}</button></div></div> : <>
          {step === 0 && <><h3 className="text-xl font-bold text-[#402713]">{l.purposeTitle}</h3><div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">{l.purposeOptions.map((option, index) => { const Icon = purposeIcons[index]; return <button type="button" onClick={() => setPurpose(index)} key={option} className={`flex flex-col items-center gap-2 rounded-lg border px-3 py-4 text-sm font-bold transition ${purpose === index ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"}`}><Icon size={18} />{option}</button>; })}</div></>}
          {step === 1 && <><h3 className="text-xl font-bold text-[#402713]">{l.typeTitle}</h3><div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">{l.typeOptions.map((option, index) => <button type="button" onClick={() => setPropertyType(index)} key={option} className={`rounded-lg border px-3 py-4 text-sm font-bold transition ${propertyType === index ? "border-[#68421f] bg-[#68421f] text-white" : "border-[#ddccb0] bg-white text-[#68421f] hover:bg-[#f1e4cb]"}`}>{option}</button>)}</div></>}
          {step === 2 && <><h3 className="text-xl font-bold text-[#402713]">{l.detailsTitle}</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-bold text-[#68421f]">{l.cityLabel}<select required value={city} onChange={(event) => { setCity(event.target.value); setDistrict(""); }} className={fieldClass}><option value="" disabled>{l.cityPlaceholder}</option>{l.cityOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label><label className="text-sm font-bold text-[#68421f]">{l.districtLabel}<select required disabled={!city} value={district} onChange={(event) => setDistrict(event.target.value)} className={fieldClass}><option value="" disabled>{l.districtPlaceholder}</option>{districtOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label><label className="text-sm font-bold text-[#68421f]">{l.sizeLabel}<span className="relative mt-2 block"><Ruler size={16} className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-[#825d3b]" /><input required min="1" inputMode="numeric" type="number" value={propertySize} onChange={(event) => setPropertySize(event.target.value)} className="input w-full ps-10" placeholder={l.sizePlaceholder} /></span></label><label className="text-sm font-bold text-[#68421f]">{l.roleLabel}<span className="relative mt-2 block"><UserRound size={16} className="pointer-events-none absolute start-3 top-1/2 -translate-y-1/2 text-[#825d3b]" /><select required value={submitterRole} onChange={(event) => setSubmitterRole(event.target.value)} className="input w-full ps-10"><option value="" disabled>{l.rolePlaceholder}</option>{l.roleOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></span></label></div></>}
          {step === 3 && <><h3 className="text-xl font-bold text-[#402713]">{l.budgetTitle}</h3><input value={budget} onChange={(event) => setBudget(event.target.value)} className="input mt-5" placeholder={l.budgetLabel} /></>}
          {step === 4 && <><h3 className="text-xl font-bold text-[#402713]">{l.notesTitle}</h3><textarea value={notes} onChange={(event) => setNotes(event.target.value)} className="input mt-5 min-h-32" placeholder={l.notesLabel} /></>}
          {step === 5 && <><h3 className="text-xl font-bold text-[#402713]">{l.contactTitle}</h3><div className="mt-5 grid gap-4 sm:grid-cols-2"><input required value={name} onChange={(event) => setName(event.target.value)} className="input" placeholder={l.name} /><input required value={phone} onChange={(event) => setPhone(event.target.value)} type="tel" className="input" placeholder={l.phone} /></div><p className="mb-2 mt-5 text-xs font-bold tracking-[.1em] text-[#825d3b]">{l.preferredLang.toUpperCase()}</p><div className="flex gap-2"><button type="button" onClick={() => setPreferredLang("ar")} className={`btn ${preferredLang === "ar" ? "btn-primary" : "btn-outline"} !py-2`}>{l.langAr}</button><button type="button" onClick={() => setPreferredLang("en")} className={`btn ${preferredLang === "en" ? "btn-primary" : "btn-outline"} !py-2`}>{l.langEn}</button></div></>}
          <div className="mt-8 flex items-center justify-between gap-3">{step > 0 ? <button type="button" onClick={() => setStep((current) => current - 1)} className="btn btn-outline">{l.back}</button> : <span />}<button className="btn btn-primary" type="submit" disabled={!canAdvance()}>{step === totalSteps - 1 ? l.submit : l.next}<Arrow size={17} /></button></div>
        </>}
      </form></div></section>
      <Footer />
    </main>
  );
}
