export const dynamic = 'force-dynamic'; // ده هيخلي الصفحة تتحمل وقت الطلب مش وقت الـ Build
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
  params: Promise<{ slug: string }>; // الـ params في Next 15 هي Promise
}

export default async function ProductPage({ params }: PageProps) {
  // 1. فك الـ Promise بتاع params فوراً
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  if (!productsData || !productsData.products) {
    return notFound();
  }

  // 2. البحث عن المنتج مع التأكد من وجود name_en
  const product = productsData.products.find(
    (p) => p.name_en && createSlug(p.name_en) === slug
  );

  if (!product) {
    return notFound();
  }

  // 3. التمرير الآمن: حول الـ Object لـ Plain JSON عشان تضمن إن مفيش "شوائب" سيرفر بتتنقل للـ Client
  const safeProduct = JSON.parse(JSON.stringify(product));

  return <ProductContent product={safeProduct} />;
}

export async function generateStaticParams() {
  if (!productsData || !productsData.products) return [];

  return productsData.products
    .filter(p => p.name_en) 
    .map((p) => ({
      slug: createSlug(p.name_en),
    }));
}