import type { Lang } from "@/contexts/LanguageContext";

export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export function getNav(lang: Lang): NavItem[] {
  const ar = lang === "ar";
  return [
    { label: ar ? "الرئيسية" : "Home", href: "/" },
    { label: ar ? "من نحن" : "About", href: "/about" },
    {
      label: ar ? "خدماتنا" : "Services",
      href: "/services",
      children: [
        { label: ar ? "البيع والشراء" : "Buying & Selling", href: "/services/buy-sell" },
        { label: ar ? "الإيجار" : "Rental", href: "/services/rental" },
        { label: ar ? "إدارة الأملاك" : "Property Management", href: "/services/property-management" },
      ],
    },
    {
      label: ar ? "العقارات" : "Properties",
      href: "/properties",
      children: [
        { label: ar ? "الأراضي" : "Land", href: "/properties#land" },
        { label: ar ? "الفلل" : "Villas", href: "/properties#villa" },
        { label: ar ? "الشقق" : "Apartments", href: "/properties#apartment" },
      ],
    },
    { label: ar ? "مدينة المستقبل" : "Future City", href: "/future-city" },
    { label: ar ? "العروض" : "Offers", href: "/offers" },
    { label: ar ? "المدونة" : "Blog", href: "/blog" },
    { label: ar ? "تواصل معنا" : "Contact", href: "/contact" },
  ];
}
