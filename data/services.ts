import { Landmark, Home, Building2, Sparkles, Search, MessageSquareText, type LucideIcon } from "lucide-react";

export type ServiceKey = "buySell" | "rental" | "management" | "marketing" | "search" | "consultation";

export const services: {
  key: ServiceKey;
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  href?: string;
}[] = [
  {
    key: "buySell",
    icon: Home,
    titleAr: "البيع والشراء",
    titleEn: "Buying & Selling",
    descAr: "نرافقك في فهم الخيارات، سواء كنت ترغب في شراء عقار أو بيعه.",
    descEn: "We guide you through the options, whether you are buying or selling.",
    href: "/services/buy-sell",
  },
  {
    key: "rental",
    icon: Building2,
    titleAr: "الإيجار",
    titleEn: "Rental",
    descAr: "حلول عملية للسكن أو الاستثمار مع اهتمام بالتفاصيل.",
    descEn: "Practical solutions for a home or investment, with attention to detail.",
    href: "/services/rental",
  },
  {
    key: "management",
    icon: Landmark,
    titleAr: "إدارة الأملاك",
    titleEn: "Property Management",
    descAr: "نناقش معك احتياجك في إدارة عقارك بأسلوب مبني على الثقة.",
    descEn: "We discuss your property management needs with a trusted approach.",
    href: "/services/property-management",
  },
  {
    key: "marketing",
    icon: Sparkles,
    titleAr: "التسويق العقاري",
    titleEn: "Property Marketing",
    descAr: "عرض احترافي لعقارك يركز على قيمته والجمهور المناسب له.",
    descEn: "Professional presentation of your property focused on value and audience.",
    href: "/services",
  },
  {
    key: "search",
    icon: Search,
    titleAr: "البحث عن العقار المناسب",
    titleEn: "Property Search Assistance",
    descAr: "بحث شخصي عن العقار وفق متطلباتك وموقعك وميزانيتك.",
    descEn: "A tailored property search around your requirements, location and budget.",
    href: "/services",
  },
  {
    key: "consultation",
    icon: MessageSquareText,
    titleAr: "الاستشارة العقارية",
    titleEn: "Real Estate Guidance",
    descAr: "رؤية محلية وواضحة تساعدك على اتخاذ قرار عقاري واثق.",
    descEn: "Clear, local guidance to help you make a confident property decision.",
    href: "/services",
  },
];
