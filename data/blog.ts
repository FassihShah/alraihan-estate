export type BlogArticle = {
  slug: string;
  titleAr: string;
  titleEn: string;
  excerptAr: string;
  excerptEn: string;
  image: string;
  hasPage: boolean;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: "how-to-choose-property-riyadh",
    titleAr: "كيف تختار العقار المناسب في الرياض؟",
    titleEn: "How to Choose the Right Property in Riyadh",
    excerptAr: "خطوات عملية تبدأ من احتياجك وتنتهي بقرار أكثر وضوحاً.",
    excerptEn: "Practical steps that begin with your need and lead to a clearer choice.",
    image: "1600607687939-ce8a6c25118c",
    hasPage: true,
  },
  {
    slug: "before-buying-property",
    titleAr: "ما الذي يجب معرفته قبل شراء عقار؟",
    titleEn: "What Should You Know Before Buying Property?",
    excerptAr: "نقاط أساسية تجعل رحلة الشراء أكثر اطمئناناً.",
    excerptEn: "Essential points for a more assured buying journey.",
    image: "1600585154340-be6161a56a0c",
    hasPage: false,
  },
  {
    slug: "villa-or-apartment",
    titleAr: "كيف تختار بين الفيلا والشقة؟",
    titleEn: "Villa or Apartment: How Do You Choose?",
    excerptAr: "مقارنة هادئة بين نمطين مختلفين من السكن.",
    excerptEn: "A calm comparison between two different styles of living.",
    image: "1600566753086-00f18fb6b3ea",
    hasPage: false,
  },
  {
    slug: "choosing-property-location",
    titleAr: "ما الذي يجب مراعاته عند اختيار موقع العقار؟",
    titleEn: "What Should You Consider When Choosing a Property Location?",
    excerptAr: "الموقع ليس عنواناً فقط، بل جزء من أسلوب حياتك.",
    excerptEn: "Location is more than an address: it is part of your lifestyle.",
    image: "1492763204268-fa0b1a55f143",
    hasPage: false,
  },
];
