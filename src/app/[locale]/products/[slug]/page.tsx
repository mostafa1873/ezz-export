import productsData from "@/data/products.json"; 
// تنبيه: تأكد أن اسم الفولدر والملف مطابقين تماماً (productdetails) بحروف صغيرة أو كبيرة
import ProductContent from "../../../../components/products/productdetails";
import { notFound } from "next/navigation";

// دالة الـ Slug مع حماية للمدخلات
const createSlug = (name: string) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!productsData || !productsData.products) {
    return notFound();
  }

  const product = productsData.products.find(
    (p) => createSlug(p.name_en) === slug
  );

  if (!product) {
    return notFound();
  }

  return <ProductContent product={product as any} />;
}

export async function generateStaticParams() {
  if (!productsData || !productsData.products) return [];

  return productsData.products.map((p) => ({
    slug: createSlug(p.name_en),
  }));
}