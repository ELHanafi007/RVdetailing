import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '700', '900'],
  style: ['normal', 'italic']
});

export const metadata: Metadata = {
  title: "sunshineRVshine | The Art of Restoration",
  description: "Hyper-luxury mobile RV detailing and molecular restoration in Ocala, FL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}>
      <body className="font-sans bg-black text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
