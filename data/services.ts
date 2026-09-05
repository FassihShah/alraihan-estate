import { Landmark, Home, Building2, Sparkles, Search, MessageSquareText, Wrench, type LucideIcon } from "lucide-react";

export type ServiceKey = "buySell" | "rental" | "management" | "marketing" | "search" | "consultation" | "maintenance";

export const services: {
  key: ServiceKey;
  icon: LucideIcon;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  href?: string;
  isComingSoon?: boolean;
}[] = [
  {
    key: "buySell",
    icon: Home,
    titleAr: "البيع والشراء",
    titleEn: "Buying & Selling",
    descAr: "إرشاد واضح لخياراتك حتى تشتري أو تبيع بثقة.",
    descEn: "Clear guidance through your options so you buy or sell with confidence.",
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
    descAr: "متابعة واضحة ومبنية على الثقة لاحتياجات إدارة عقارك.",
    descEn: "Clear, trusted follow-through on your property management needs.",
    href: "/services/property-management",
  },
  {
    key: "marketing",
    icon: Sparkles,
    titleAr: "التسويق العقاري",
    titleEn: "Property Marketing",
    descAr: "عرض احترافي يضع عقارك أمام الجمهور المناسب له.",
    descEn: "Professional marketing that puts your property in front of the right audience.",
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
  {
    key: "maintenance",
    icon: Wrench,
    titleAr: "صيانة المنازل",
    titleEn: "Home Maintenance",
    descAr: "خدمة مرتبطة باحتياجات المنزل والعقار، ويجري تجهيزها حالياً.",
    descEn: "A home and property maintenance service currently being prepared.",
    isComingSoon: true,
  },
];
