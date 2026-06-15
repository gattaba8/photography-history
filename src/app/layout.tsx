import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Musée de la Photographie",
  description:
    "Explorez l'histoire de la photographie, des premières expériences de Niépce aux révolutions numériques contemporaines.",
  openGraph: {
    title: "Musée de la Photographie",
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
    <html lang="fr" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className="bg-white text-[#1a1a1a] antialiased">
        {children}
      </body>
    </html>
  );
}
