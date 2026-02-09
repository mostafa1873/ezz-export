"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
// تأكد من صحة المسارات عندك
import arch from "../../assets/Ezzzzzzzzzzzzz-removebg-preview.png";
import about from "../../assets/about-main.webp";
import Link from "next/link";
import Seson from "./seson";
import ExportCTA from "./ExportCTA";

const steps = [
  {
    // صورة مزارع ماسك الخضار بإيده - بتبين الاهتمام اليدوي (Handpicking)
    img: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1280&auto=format&fit=crop",
    step: "01",
    title: "SELECTIVE",
    desc: "We handpick every single crop. If it's not perfect, it doesn't leave the farm.",
  },
  {
    // صورة معملية أو فحص جودة دقيق جداً بستايل مودرن
    img: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1280&auto=format&fit=crop",
    step: "02",
    title: "CERTIFIED",
    desc: "Our products pass the world's toughest safety tests. Zero chemicals, 100% natural.",
  },
  {
    // صورة كونتينرات شحن عملاقة أو لوجستيات بستايل "Dark & Professional"
    img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=1280&auto=format&fit=crop",
    step: "03",
    title: "LOGISTICS",
    desc: "Cold-chain control from Egypt to your warehouse. Freshness is guaranteed.",
  },
];


export default function AboutUsSection() {
  return (
    <>
      {/* 1. About Us Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white pt-8">
        
        {/* BACKGROUND - Removed heavy blurs for performance */}
        <div className="absolute inset-0 z-0 flex flex-col md:flex-row">
          <div className="flex-1 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
          <div className="flex-1 bg-[#051109] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a27]/20 to-transparent" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-6 sm:px-10 lg:px-20 py-24">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-24">
            
            {/* TEXT */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: "circOut" }}
              className="max-w-4xl"
            >
              <h1 className="font-black uppercase tracking-[-0.06em] leading-[0.85] text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw]">
                <span className="block text-[#051109]">Pure</span>
                <span className="block text-[#2d5a27] italic mt-1">Impact.</span>
              </h1>

              <div className="mt-12 flex gap-6 items-start">
                <div className="w-14 h-[2px] bg-[#2d5a27] mt-4 shrink-0" />
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-tight leading-snug">
                  Ezz Export is not a company,
                  <br />
                  <span className="text-[#2d5a27]">it’s a global promise.</span>
                </p>
              </div>
            </motion.div>

            {/* CARD - Reduced backdrop blur to fix lag */}
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 8 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] sm:rounded-[4rem] p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-start text-white relative z-10">
                <div>
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-50">Origin</p>
                  <p className="font-bold uppercase italic tracking-tight">The Nile Delta</p>
                </div>
                <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center">
                  <FiArrowUpRight />
                </div>
              </div>

              <div className="relative h-52 sm:h-64 w-full">
                <Image
                  src={arch}
                  alt="Premium"
                  fill
                  className="object-contain scale-110 sm:scale-125 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white italic uppercase leading-none tracking-tight">
                Global <br /> Reach.
              </h3>
            </motion.div>
          </div>
        </div>

        {/* WATERMARK */}
        <div className="absolute left-6 bottom-6 opacity-[0.03] pointer-events-none select-none">
          <h2 className="text-[20vw] sm:text-[14vw] font-black text-[#051109]">EST.24</h2>
        </div>
      </section>

      {/* 2. Story Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="py-20 lg:py-32 px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-10">
          
          <div className="lg:col-span-7 relative">
            <motion.div
              whileInView={{ scale: [1.02, 1] }}
              transition={{ duration: 1 }}
              className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full rounded-tl-[3rem] rounded-br-[3rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] overflow-hidden shadow-2xl"
            >
              <Image src={about} alt="The Farm" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 sm:w-44 h-32 sm:h-44 bg-[#2d5a27] rounded-full flex items-center justify-center p-1 text-white shadow-xl z-20 border-4 border-white"
            >
               <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center">
                  <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest text-center leading-relaxed">
                    The Nile's Finest <br /> Since 2024 <br /> Premium Quality
                  </p>
               </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-8 lg:pl-6">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-[#051109]">
              OUR <br /> <span className="text-[#2d5a27] italic">ROOTS.</span>
            </h2>

            <div className="space-y-6 relative z-10">
              <p className="text-lg sm:text-xl font-bold text-slate-700 leading-snug">
                Ezz Export started with a simple idea: take the best crops from our family farms and send them to the world.
              </p>

              <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed">
                We grew up in the fields. We aren't middlemen; we are the source. From the rich silt of the Nile to the global markets, we deliver nothing but pure excellence.
              </p>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-10 py-5 font-black uppercase tracking-wider text-white bg-[#2d5a27] rounded-full overflow-hidden transition-all duration-300 active:scale-95"
                >
                  <div className="absolute inset-0 bg-[#1e3c1a] translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative flex items-center gap-3">
                    Contact us now
                    <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Marquee Section - Smooth movement */}
      <div className="w-full bg-[#2d5a27] py-8 overflow-hidden border-y border-[#1e3c1a]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap w-fit"
        >
          {[...Array(2)].map((_, mainIndex) => (
            <div key={mainIndex} className="flex items-center gap-16 pr-16">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center gap-16">
                  <span className="text-transparent text-5xl md:text-6xl font-black uppercase italic tracking-tighter stroke-text-white">
                    Premium Quality
                  </span>
                  <FiStar className="text-[#d9f99d] text-4xl" />
                  <span className="text-white text-5xl md:text-6xl font-black uppercase italic tracking-tighter">
                    Pure Egyptian Soil
                  </span>
                  <FiStar className="text-[#d9f99d] text-4xl" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        <style jsx>{`
          .stroke-text-white {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
          }
        `}</style>
      </div>

      {/* 4. Process Section - Clean & Fresh Light Design */}
      <section className="bg-white py-12 relative overflow-hidden">
        
        {/* خلفية بنقشة خفيفة جداً لمنع الملل البصري */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-4"
              >
                <span className="w-12 h-[2px] bg-[#2d5a27]" />
                <span className="text-[#2d5a27] font-bold uppercase tracking-widest text-xs">Our Journey</span>
              </motion.div>
              <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.8] mb-4">
                Seed to <br /> <span className="italic text-[#2d5a27]">Shelve.</span>
              </h2>
            </div>
            <p className="max-w-xs text-slate-500 font-medium leading-relaxed border-l-2 border-slate-100 pl-6">
              Ensuring the highest Egyptian standards at every stage of the supply chain.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Image Container */}
                <div className="relative h-[450px] w-full rounded-[2rem] overflow-hidden mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(45,90,39,0.15)]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay خفيف بيظهر عند الهوفر بس */}
                  <div className="absolute inset-0 bg-[#2d5a27]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm border border-white/50">
                    <span className="text-xl font-black text-[#2d5a27]">{item.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <div className="flex items-center gap-4 mb-3">
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight group-hover:text-[#2d5a27] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="h-[2px] flex-grow bg-slate-100 group-hover:bg-[#2d5a27]/20 transition-all duration-500" />
                    <FiArrowUpRight className="text-2xl text-slate-300 group-hover:text-[#2d5a27] transition-all" />
                  </div>
                  
                  <p className="text-slate-500 text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Line Effect */}
                <motion.div 
                  className="absolute -bottom-4 left-0 h-1 bg-[#2d5a27] w-0 group-hover:w-full transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    <Seson />

    <ExportCTA />
    </>
  );
}