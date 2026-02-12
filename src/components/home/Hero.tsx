"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBox, FiGlobe, FiPhone } from "react-icons/fi";
import arch from '../../assets/arch.png'
import Link from "next/link";

// --- عزل شريط الحركة (Marquee) لتحسين الأداء ---
const MovingTicker = memo(() => {
    return (
        <div className="w-full bg-[#0a2e1a] py-6 mt-5 lg:mt-0 mb-7 overflow-hidden rotate-[-2deg] scale-[1.05] z-50">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                style={{ willChange: "transform" }} // تنبيه للمتصفح لتجهيز كارت الشاشة
                className="flex whitespace-nowrap gap-12 md:gap-24"
            >
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-12 md:gap-24">
                        <div className="flex items-center gap-3">
                            <FiBox className="text-green-400" />
                            <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em]">Fast Delivery</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiGlobe className="text-green-400" />
                            <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em]">Global Reach</span>
                        </div>
                        <div className="flex items-center gap-3 text-green-400 font-serif italic text-xl">Premium Harvest</div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
});
MovingTicker.displayName = "MovingTicker";

export default function CinematicHero() {
    return (
        <section
            className="relative w-full min-h-screen bg-[#fff] overflow-hidden flex flex-col items-center justify-center pt-32 lg:pt-28"
        >
            {/* Background Text - Static */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none">
                <h2 className="text-[30vw] font-black tracking-tighter text-green-900">EZZ</h2>
            </div>

            <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left z-30">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#2d5a27] mb-6">
                                <div className="w-2 h-2 rounded-full bg-green-800 animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#2d5a27]">The New Season 2026</span>
                            </div>

                            <h1 className="text-[11vw] sm:text-[8vw] lg:text-[6.5rem] font-black text-slate-900 leading-[0.95] tracking-tighter mb-6">
                                NATURAL <br />
                                <span className="text-[#2d5a27] relative">SOURCE</span> <br />
                                <span>DIRECTLY.</span>
                            </h1>

                            {/* Mobile Image (Visible only on mobile) */}
                            <div className="relative w-48 h-48 mx-auto mb-8 block lg:hidden">
                                <Image
                                    src={arch}
                                    alt="Orange mobile"
                                    fill
                                    className="object-contain drop-shadow-[0_20px_30px_rgba(22,163,74,0.2)]"
                                    priority
                                />
                            </div>

                            <p className="text-sm sm:text-base md:text-lg text-slate-500 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium mb-10">
                                Premium Egyptian produce, exported with precision. From our fertile lands to the global dinner table.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/products"
                                    className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 bg-[#2d5a27] text-white rounded-[2rem] font-bold shadow-lg hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                                >
                                    Our Products
                                    <FiArrowUpRight className="w-5 h-5" />
                                </Link>

                                <a
                                    href="/contact"
                                    className="w-full sm:w-auto px-8 py-4 sm:px-12 sm:py-5 bg-white border border-[#2d5a27] text-slate-900 rounded-[2rem] font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <FiPhone className="text-[#2d5a27] w-5 h-5" />
                                    Contact Us
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Desktop Animated Image Area */}
                    <div className="w-full lg:w-1/2 relative hidden lg:flex justify-center items-center h-[600px]">
                        {/* Static Blur - Removed 'blur' animation to save resources */}
                        <div className="absolute w-64 h-64 md:w-[450px] md:h-[450px] bg-green-100/40 rounded-full blur-[80px]" />

                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ willChange: "transform" }}
                            className="relative w-64 h-64 md:w-[480px] md:h-[480px] z-20"
                        >
                            <Image
                                src={arch}
                                alt="Main Orange"
                                fill
                                className="object-contain drop-shadow-[0_40px_60px_rgba(22,163,74,0.15)]"
                                priority
                            />
                        </motion.div>

                        {/* Smaller Floating Fruit */}
                        <motion.div
                            animate={{
                                y: [0, 30, 0],
                                rotate: [0, -15, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ willChange: "transform" }}
                            className="absolute top-10 right-8 w-20 h-20 md:w-32 md:h-32 z-30 opacity-40 blur-[0.5px]"
                        >
                            <Image src={arch} alt="small fruit" fill className="object-contain" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Marquee Ticker */}
            <MovingTicker />

            {/* Noise Overlay - Optimized */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}