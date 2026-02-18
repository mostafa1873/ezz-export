import productsData from "../../../../data/products.json"; 
import ProductContent from "../../../../components/products/productdetails";
import { notFound } from "next/navigation";

// دالة الـ Slug مع حماية لو الاسم مش موجود
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
  // انتظر الـ params لأنها Promise في النسخ الجديدة
  const { slug } = await params;
  
  if (!productsData?.products) {
    return notFound();
  }

  const product = productsData.products.find(
    (p) => p.name_en && createSlug(p.name_en) === slug
  );

  if (!product) {
    return notFound();
  }

  // تنظيف الـ Object قبل نقله للـ Client
  const safeProduct = JSON.parse(JSON.stringify(product));

  return <ProductContent product={safeProduct} />;
}

// تعديل الدالة لتكون متوافقة تماماً مع الـ Production
export async function generateStaticParams() {
  // 1. تأكد إن البيانات موجودة
  if (!productsData?.products) return [];

  // 2. فلترة المنتجات اللي فيها بيانات ناقصة عشان الـ Build ميفشلش
  return productsData.products
    .filter(p => p && p.name_en) 
    .map((p) => {
      const slug = createSlug(p.name_en);
      // لازم نرجع الـ slug لو موجود فعلاً
      return {
        slug: slug,
      };
    })
    .filter(item => item.slug !== ''); 
}