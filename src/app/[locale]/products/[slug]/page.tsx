import productsData from "../../../../data/products.json"; 
import ProductContent from "../../../../components/products/productdetails";
import { notFound } from "next/navigation";

const createSlug = (name: string) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface PageProps {
  params: Promise<{ slug: string; locale: string }>; // ضفنا الـ locale هنا
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

    // لازم نعرف الـ locales اللي المشروع بيدعمها (مثلاً ar و en)
    const locales = ['ar', 'en']; 
    const paths: { slug: string; locale: string }[] = [];

    productsData.products.forEach((p) => {
      if (p && p.name_en) {
        const slugValue = createSlug(p.name_en);
        if (slugValue) {
          // بنولد مسار لكل لغة لكل منتج عشان Next.js ميتلخبطش
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