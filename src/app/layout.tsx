import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karvi Printing Press - Best Printing Press in Gorakhpur",
  description: "High-quality, affordable printing for businesses & individuals. Brochures, flyers, business cards & more. Fast turnaround, free quotes. Call now!",
  robots: "index, follow",
  keywords: "printing press in gorakhpur, best printing press, Printing press in gorakhpur price, Offset printing press in gorakhpur, Best printing press in gorakhpur, Printing press in gorakhpur for sale, Printing Press near me, Gita Press Gorakhpur books online purchase,Photocopy shop near me, karvi printing press"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
