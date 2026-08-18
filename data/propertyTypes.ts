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
    image: "1551031749-9257c3aee0df",
  },
  {
    key: "villa",
    titleAr: "الفلل",
    titleEn: "Villas",
    descAr: "فلل بطراز سعودي حديث تناسب احتياج السكن العائلي.",
    descEn: "Modern Saudi-style villas suited to family living.",
    image: "1613977257363-707ba9348227",
  },
  {
    key: "apartment",
    titleAr: "الشقق",
    titleEn: "Apartments",
    descAr: "شقق سكنية حديثة في مواقع مميزة داخل الرياض.",
    descEn: "Modern residential apartments in well-placed Riyadh locations.",
    image: "1758448511487-15f69dd6107b",
  },
];
