import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "RVDetail | The Art of the Detail",
  description: "Aerospace-grade restoration for the world's most exclusive motorhomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body className={`${inter.variable} font-sans bg-black text-white selection:bg-white selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
