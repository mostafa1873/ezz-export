import ExportCTA from "@/components/about/ExportCTA";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/products";
import WhyChooseUs from "@/components/home/whyus";



export default function Home() {
  
  return (
    <main className="relative bg-white">
      <Hero />

      <WhyChooseUs />

      <Products />

      <ExportCTA/>
    </main>
  );
}


