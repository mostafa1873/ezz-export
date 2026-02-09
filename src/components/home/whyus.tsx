"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import Link from "next/link";

const AboutFluid = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-12 bg-[#fefefe] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative">

        <motion.div
          animate={
            shouldReduceMotion
              ? { opacity: [0.25, 0.35, 0.25] }
              : { scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }
          }
          transition={{
            duration: shouldReduceMotion ? 18 : 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform, opacity" }}
          className="absolute -top-40 -left-20 w-[600px] h-[600px]
                     bg-gradient-to-br from-green-100/40 to-lime-100/20
                     rounded-full blur-[60px] md:blur-[120px] -z-10"
        />

        <div className="relative z-10 flex flex-col items-center">

          {/* Header Section */}
          <div className="text-center mb-20 relative w-full">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.04, scale: 1 }}
              viewport={{ once: true }}
              className="text-[8rem] md:text-[15rem] font-black text-green-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none tracking-tighter"
            >
              2025
            </motion.h2>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Sparkles className="w-4 h-4 text-[#2d5a27]" />
                <span className="text-[#2d5a27] font-bold uppercase tracking-[0.6em] text-[10px]">
                  The Essence of Quality
                </span>
              </motion.div>

              <h3 className="text-4xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
                Not Just a Company, <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2d5a27] to-[#2d5a27] italic">
                  A Green Legacy.
                </span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-5 relative group"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="absolute -inset-6 border-[1px] border-green-100 rounded-full animate-[spin_20s_linear_infinite] -z-10" />

              <div className="w-full aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%]
                              overflow-hidden border-[12px] border-white
                              shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]
                              transition-all duration-1000
                              md:group-hover:rounded-[40%_40%_40%_40%] relative">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
                  alt="Egyptian Soil"
                  fill
                  className="object-cover scale-[1.05] md:scale-110
                             md:group-hover:scale-100
                             transition-transform duration-[1500ms]"
                />
              </div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: shouldReduceMotion ? 0 : 1 }}
                className="absolute -bottom-6 -right-6 bg-green-800 text-white
                           w-24 h-24 md:w-28 md:h-28 rounded-full
                           flex flex-col items-center justify-center
                           text-center shadow-2xl border-4 border-white z-20"
              >
                <span className="text-xl font-black leading-none">100%</span>
                <span className="text-[8px] font-bold uppercase tracking-tighter opacity-80">
                  Natural<br />Organic
                </span>
              </motion.div>
            </motion.div>

            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-12 lg:pl-10">
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="max-w-md relative"
                >
                  <div className="absolute -left-6 top-0 w-1 h-full bg-green-50 rounded-full" />
                  <h4 className="text-xs font-black text-[#2d5a27] mb-3 tracking-[0.3em] uppercase">
                    Origin Story
                  </h4>
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                    We are the <span className="text-gray-900 font-bold italic">pulse</span> of the Egyptian fields.{" "}
                    <span className="text-[#2d5a27]">Ezz Export</span> was born to bridge ancient soil wisdom with global demand.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="max-w-md md:ml-auto relative text-right"
                >
                  <div className="absolute -right-6 top-0 w-1 h-full bg-green-50 rounded-full" />
                  <h4 className="text-xs font-black text-gray-400 mb-3 tracking-[0.3em] uppercase">
                    Philosophy
                  </h4>
                  <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                    Transparency is our soil. Quality is our harvest. Every shipment is a{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 text-gray-900 font-bold">testament</span>
                      <span className="absolute bottom-1 left-0 w-full h-2 bg-lime-200 -z-10 -rotate-1"></span>
                    </span>{" "}
                    to our commitment.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex lg:justify-start justify-center pt-4"
              >
                <Link href="/about">
                  <motion.button
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-4 bg-[#2d5a27] text-white
                               pl-8 pr-2 py-2 rounded-full transition-all duration-500
                               hover:bg-green-700 hover:shadow-[0_20px_40px_rgba(21,128,61,0.2)]"
                  >
                    <span className="font-bold tracking-tight text-xs md:text-sm uppercase">
                      Learn More About Ezz
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full
                                    flex items-center justify-center transition-transform duration-500
                                    md:group-hover:rotate-45 md:group-hover:bg-white/20">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </div>
                  </motion.button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default AboutFluid;
