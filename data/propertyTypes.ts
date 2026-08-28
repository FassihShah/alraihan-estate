export type PropertyTypeKey = "land" | "villa" | "apartment";

export const propertyTypes: {
  key: PropertyTypeKey;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  image: string;
}[] = [
  {
    key: "land",
    titleAr: "الأراضي",
    titleEn: "Land",
    descAr: "أراضٍ سكنية واستثمارية في الرياض ومختلف مناطق المملكة.",
    descEn: "Residential and investment land across Riyadh and the Kingdom.",
    image: "/images/WhatsApp Image 2026-08-25 at 12.27.10 AM.jpeg",
  },
  {
    key: "villa",
    titleAr: "الفلل",
    titleEn: "Villas",
    descAr: "فلل بطراز سعودي حديث تناسب احتياج السكن العائلي.",
    descEn: "Modern Saudi-style villas suited to family living.",
    image: "/images/WhatsApp Image 2026-08-25 at 12.27.05 AM.jpeg",
  },
  {
    key: "apartment",
    titleAr: "الشقق",
    titleEn: "Apartments",
    descAr: "شقق سكنية حديثة في مواقع مميزة داخل الرياض.",
    descEn: "Modern residential apartments in well-placed Riyadh locations.",
    image: "/images/WhatsApp Image 2026-08-25 at 12.27.06 AM.jpeg",
  },
];
