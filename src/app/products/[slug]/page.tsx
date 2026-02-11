import productsData from "@/data/products.json"; 
import ProductContent from "../../../components/products/productdetails";
import { notFound } from "next/navigation";

const createSlug = (name: string) => 
  name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  
  const product = productsData.products.find(
    (p) => createSlug(p.name_en) === slug
  );

  if (!product) {
    return notFound();
  }

  return <ProductContent product={product as any} />;
}

export async function generateStaticParams() {
  return productsData.products.map((p) => ({
    slug: createSlug(p.name_en),
  }));
}