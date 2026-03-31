import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RVDetail | Premium Mobile RV Detailing & Restoration Orlando",
  description: "High-end mobile RV detailing, oxidation removal, and ceramic coating in Orlando and Central Florida. Showroom results delivered to your doorstep.",
  keywords: "RV detailing Orlando, mobile RV wash, oxidation removal, ceramic coating RV, motorhome detailing Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
