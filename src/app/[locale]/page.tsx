import ExportCTA from "../../components/about/ExportCTA";
import Hero from "../../components/home/Hero";
import Products from "../../components/home/products";
import WhyChooseUs from "../../components/home/whyus";

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