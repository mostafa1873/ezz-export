"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import arch from "../../assets/Ezzzzzzzzzzzzz-removebg-preview.png";
import about from "../../assets/about-main.webp";
import Link from "next/link";
import Seson from "./seson";
import ExportCTA from "./ExportCTA";
import pro1 from "../../assets/pro1.png";
import pro2 from "../../assets/pro2.png";
import pro3 from "../../assets/pro3.png";

const steps = [
  {
    img: pro1,
    step: "01",
    title: "SELECTIVE",
    desc: "We handpick every single crop. If it's not perfect, it doesn't leave the farm.",
  },
  {
    img: pro2,
    step: "02",
    title: "CERTIFIED",
    desc: "Our products pass the world's toughest safety tests. Zero chemicals, 100% natural.",
  },
  {
    img: pro3,
    step: "03",
    title: "LOGISTICS",
    desc: "Cold-chain control from Egypt to your warehouse. Freshness is guaranteed.",
  },
];

export default function AboutUsSection() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-white pt-8">
        {/* BACKGROUND */}
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
              viewport={{ once: true }} 
              className="max-w-4xl"
            >
              <h1 className="font-black uppercase tracking-[-0.06em] leading-[0.85] text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[8vw]">
                <span className="block text-[#051109]">Pure</span>
                <span className="block text-[#2d5a27] mt-1">Impact.</span>
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

            {/* CARD */}
            <motion.div
              whileHover={{ rotateY: -8, rotateX: 8 }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] sm:rounded-[4rem] p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden transform-gpu will-change-transform"
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
                  className="object-contain scale-110 sm:scale-125 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform-gpu"
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
              viewport={{ once: true }}
              className="relative h-[400px] sm:h-[500px] md:h-[650px] w-full rounded-tl-[3rem] rounded-br-[3rem] md:rounded-tl-[5rem] md:rounded-br-[5rem] overflow-hidden shadow-2xl transform-gpu"
            >
              <Image src={about} alt="The Farm" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-32 sm:w-44 h-32 sm:h-44 bg-[#2d5a27] rounded-full flex items-center justify-center p-1 text-white shadow-xl z-20 border-4 border-white transform-gpu"
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

      {/* 3. Marquee Section */}
      <div className="w-full bg-[#2d5a27] py-8 overflow-hidden border-y border-[#1e3c1a]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap w-fit transform-gpu"
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

      {/* 4. Process Section */}
      <section className="bg-[#F8F9FA] py-24 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2d5a27]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="w-8 h-[2px] bg-[#2d5a27]" />
                <span className="text-[#2d5a27] font-bold uppercase tracking-[0.2em] text-xs">Our Process</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black text-[#051109] leading-[0.9] tracking-tight">
                From Soil to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2d5a27] to-[#5cb85c]">
                  Success.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-gray-500 text-lg leading-relaxed font-medium">
              We control every step of the journey to ensure that the freshness of the Nile Delta reaches your destination intact.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true, amount: 0.2 }} // يبدأ فقط عند ظهور 20% منه لتحسين الإسكرول
                className="group relative h-[550px] w-full rounded-[2.5rem] overflow-hidden cursor-pointer transform-gpu"
              >
                {/* 1. Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  <Image
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 transform-gpu"
                  />
                </div>

                {/* 2. Big Background Number */}
                <div className="absolute top-4 right-6 z-10">
                  <span className="text-[8rem] font-black text-white/10 leading-none select-none transition-transform duration-700 group-hover:-translate-y-2 group-hover:text-white/20">
                    {item.step}
                  </span>
                </div>

                {/* 3. Floating Glass Card Content */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 
                transition-all duration-700 ease-in-out transform 
                translate-y-[70%] group-active:translate-y-0 group-hover:translate-y-0 will-change-transform">

                  <div className="bg-black/30 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-[2rem] shadow-2xl 
                  transition-all duration-500 group-hover:bg-black/50 group-active:bg-black/50 transform-gpu">

                    {/* Title Row */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white text-[#2d5a27] flex items-center justify-center transform -rotate-45 group-hover:rotate-0 group-active:rotate-0 transition-transform duration-500">
                        <FiArrowUpRight className="text-lg md:text-xl font-bold" />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed line-clamp-3 
                  opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 delay-100">
                      {item.desc}
                    </p>

                    {/* Progress Bar Decoration */}
                    <div className="w-full h-1 bg-white/20 mt-6 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ade80] w-0 group-hover:w-full group-active:w-full transition-all duration-700 ease-out" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Products Section */}
      <Seson />

      {/* 6. CTA Section */}
      <ExportCTA />
    </>
  );
}