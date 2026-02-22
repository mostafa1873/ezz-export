import ExportCTA from "../../components/about/ExportCTA";
import Hero from "../../components/home/Hero";
import Products from "../../components/home/products";
import WhyChooseUs from "../../components/home/whyus";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

// دالة توليد الـ Metadata للصفحة الرئيسية
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('title'),
    description: t('description'),
    // الرابط الأساسي للصفحة الرئيسية بكل لغة
    alternates: {
      canonical: `https://ezzexport.com/${locale}`,
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://ezzexport.com/${locale}`,
      siteName: "Ezz Export",
      type: "website",
      images: [
        {
          url: "/og-image.webp", // استخدمنا الـ webp اللي اتفقنا عليها
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('title'),
      description: t('description'),
      images: ["/og-image.webp"],
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main className="relative bg-white">
      <Hero />

      <WhyChooseUs />

      <Products />

      <ExportCTA />
    </main>
  );
}