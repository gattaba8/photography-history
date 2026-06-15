import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Histoire de la Photographie | Musée Virtuel",
  description:
    "Explorez l'histoire fascinante de la photographie, des premières expériences de Niépce aux révolutions numériques contemporaines. Un voyage visuel à travers deux siècles d'innovation et de création artistique.",
  keywords: [
    "photographie",
    "histoire",
    "musée virtuel",
    "Niépce",
    "Daguerre",
    "art photographique",
  ],
  authors: [{ name: "Musée Virtuel de la Photographie" }],
  openGraph: {
    title: "Histoire de la Photographie | Musée Virtuel",
    description:
      "Un voyage visuel à travers deux siècles d'innovation photographique.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#e8e0d4] antialiased">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
