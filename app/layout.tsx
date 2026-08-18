import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { WhatsAppProvider } from "@/contexts/WhatsAppContext";
import { AssistantProvider } from "@/contexts/AssistantContext";
import GlobalWidgets from "@/components/GlobalWidgets";

export const metadata: Metadata = { title: "ALRAIHAN REAL ESTATE | الريحان العقارية", description: "Trusted Saudi real estate advisor in Riyadh." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <WhatsAppProvider>
            <AssistantProvider>
              {children}
              <GlobalWidgets />
            </AssistantProvider>
          </WhatsAppProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
