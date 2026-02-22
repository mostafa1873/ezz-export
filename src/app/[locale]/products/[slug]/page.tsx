import productsData from "../../../../data/products.json";
import ProductContent from "../../../../components/products/productdetails";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const createSlug = (name: string) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

// دالة توليد الـ SEO ديناميكياً لكل منتج بناءً على بياناته ولغته
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  const product = productsData.products.find(
    (p) => p.name_en && createSlug(p.name_en) === slug
  );

  if (!product) return {};

  // اختيار الاسم والوصف بناءً على اللغة الحالية
  const productName = locale === 'ar' ? product.name_ar : product.name_en;
  const productDesc = locale === 'ar' ? product.description_ar : product.description_en;

  return {
    title: `${productName} | Ezz Export`,
    description: productDesc,
    openGraph: {
      title: `${productName} | Ezz Export`,
      description: productDesc,
      images: [
        {
          url: product.image, // صورة المنتج الحقيقية تظهر عند مشاركة اللينك
          width: 800,
          height: 600,
          alt: productName,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${productName} | Ezz Export`,
      description: productDesc,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  // انتظر الـ params بالكامل
  const { slug, locale } = await params;

  if (!productsData?.products) {
    return notFound();
  }

  const product = productsData.products.find(
    (p) => p.name_en && createSlug(p.name_en) === slug
  );

  if (!product) {
    return notFound();
  }

  const safeProduct = JSON.parse(JSON.stringify(product));

  return <ProductContent product={safeProduct} />;
}

export async function generateStaticParams() {
  try {
    if (!productsData?.products) return [];

    // تأكد من إضافة 'it' لو كنت تدعم الإيطالية أيضاً
    const locales = ['ar', 'en', 'it'];
    const paths: { slug: string; locale: string }[] = [];

    productsData.products.forEach((p) => {
      if (p && p.name_en) {
        const slugValue = createSlug(p.name_en);
        if (slugValue) {
          locales.forEach((lang) => {
            paths.push({
              slug: slugValue,
              locale: lang,
            });
          });
        }
      }
    });

    return paths;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}