import type { Lang } from "@/contexts/LanguageContext";

export const WHATSAPP_NUMBER = "";

export function t(lang: Lang) {
  const ar = lang === "ar";
  return {
    dir: ar ? "rtl" : ("ltr" as const),
    brandName: "ALRAIHAN",
    brandSub: ar ? "الريحان العقارية" : "REAL ESTATE",
    langToggle: ar ? "EN" : "العربية",
    home: ar ? "الرئيسية" : "Home",
    license: ar
      ? "وسيط ومسوق عقاري مرخص من الهيئة العامة للعقار"
      : "Real estate broker and marketer licensed by the General Real Estate Authority",
    fal: ar ? "رخصة فال العقارية رقم 1100054071" : "FAL Real Estate License No. 1100054071",
    whatsapp: ar ? "تواصل عبر واتساب" : "Chat on WhatsApp",
    whatsappDemo: ar
      ? "رقم واتساب سيتم ربطه قبل الإطلاق."
      : "WhatsApp number will be connected before launch.",
    close: ar ? "إغلاق" : "Close",
    submitRequirement: ar ? "أرسل طلبك" : "Submit Your Requirement",
    footerNote: ar
      ? "شركة عقارية مرخّصة في الرياض، تخدم الأفراد والشركات."
      : "A licensed real estate company in Riyadh, serving individuals and businesses.",
    footerNav: ar ? "التصفح" : "Navigation",
    footerLicense: ar ? "الترخيص" : "License",
    rights: ar ? `© ${new Date().getFullYear()} الريحان العقارية` : `© ${new Date().getFullYear()} ALRAIHAN REAL ESTATE`,
    assistant: {
      title: ar ? "مساعد الريحان" : "ALRAIHAN Assistant",
      enter: ar ? "اكتب رسالتك..." : "Write a message...",
      end: ar ? "شكراً لك. تم تسجيل معلوماتك." : "Thank you. Your information has been recorded.",
      defaultGreeting: ar
        ? "مرحباً بك في الريحان العقارية. كيف يمكنني مساعدتك؟"
        : "Welcome to ALRAIHAN REAL ESTATE. How can I help you?",
      defaultOptions: ar
        ? ["أبحث عن عقار للشراء", "أبحث عن عقار للإيجار", "أريد بيع عقار", "أريد استشارة"]
        : ["I want to buy", "I want to rent", "I want to sell", "I need consultation"],
      followUp: ar ? "ممتاز. يمكنك إرسال طلبك وسنتواصل معك." : "Excellent. You can send your request and we will contact you.",
      openRequest: ar ? "أرسل طلبك الآن" : "Submit your request now",
    },
    breadcrumbHome: ar ? "الرئيسية" : "Home",
  };
}

export const assistantGreetings: Record<string, { ar: string; en: string }> = {
  properties: { ar: "هل تبحث عن نوع معين من العقارات؟", en: "Are you looking for a specific property type?" },
  rental: { ar: "هل تبحث عن عقار للإيجار؟", en: "Are you looking for a property to rent?" },
  "buy-sell": { ar: "هل ترغب في شراء عقار أم بيع عقار؟", en: "Would you like to buy or sell a property?" },
  "property-management": { ar: "هل تحتاج مساعدة في إدارة عقارك؟", en: "Do you need help managing your property?" },
  "future-city": { ar: "هل تبحث عن عقار في الرياض؟", en: "Are you looking for a property in Riyadh?" },
  request: { ar: "هل تحتاج مساعدة في إكمال طلبك؟", en: "Would you like help completing your request?" },
  offers: { ar: "أخبرنا بما تبحث عنه وسنوافيك عند توفره.", en: "Tell us what you are looking for and we will follow up." },
  blog: { ar: "هل لديك سؤال عقاري تريد مناقشته؟", en: "Do you have a property question you'd like to discuss?" },
  services: { ar: "أي خدمة عقارية تحتاجها؟", en: "Which real estate service do you need?" },
  about: { ar: "هل تود التعرف أكثر على خدماتنا؟", en: "Would you like to learn more about our services?" },
  contact: { ar: "كيف يمكننا التواصل معك؟", en: "How can we reach you?" },
};
