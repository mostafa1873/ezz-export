import GlobalCTA from "@/components/home/cta";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/products";
import WhyChooseUs from "@/components/home/whyus";
import { motion } from "framer-motion";
import Link from "next/link";



export default function Home() {
  return (
    <main className="relative bg-white">
      <Hero />

      <WhyChooseUs />

      <Products />

      <GlobalCTA />

    </main>
  );
}
