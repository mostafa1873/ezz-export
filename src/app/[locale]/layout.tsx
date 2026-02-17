import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import FloatingActions from "../../components/FloatingActions";

// إضافات مكتبة الترجمة
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ezz Export",
  description: "EZZ Export",
  icons: {
    icon: [
      {
        url: "/icon.png",
        href: "/icon.png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // تعديل: الـ params هنا Promise
}>) {
  // فك الـ Promise للحصول على الـ locale (مهم جداً في Next.js 15)
  const { locale } = await params;

  // جلب ملفات اللغة (JSON) بناءً على الـ locale الحالي
  const messages = await getMessages();
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* تغليف المكونات بالـ Provider لضمان وصول الترجمة لكل مكان */}
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <FloatingActions />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}