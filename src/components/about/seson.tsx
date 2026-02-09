"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Weight, Calendar, Box, Sparkles } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: "01",
        name: "Navel Oranges",
        category: "Citrus",
        description: "Our premium Navel oranges are famous for their sweet taste, deep orange color, and seedless nature.",
        specs: { size: "48 / 56 / 64 / 72 / 80", season: "Dec - May", packing: "15 KG Cartons" },
        image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: "02",
        name: "Red Onions",
        category: "Vegetables",
        description: "Directly from the fertile delta soil, our red onions are known for their strong shelf life.",
        specs: { size: "40mm - 100mm", season: "Feb - July", packing: "10 / 25 KG Mesh Bags" },
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=1887&auto=format&fit=crop"
    },
    {
        id: "03",
        name: "Fresh Potatoes",
        category: "Tubers",
        description: "High-quality Spunta and Mondial varieties, meeting the highest European standards.",
        specs: { size: "35mm - 70mm", season: "Jan - June", packing: "Jumbo Bags / Cartons" },
        image: "https://images.unsplash.com/photo-1518977676601-b53f02ac6d31?q=80&w=2070&auto=format&fit=crop"
    }
];

const Seson = () => {
    const [active, setActive] = useState(products[0]);

    return (

        <section className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="flex flex-col items-center text-center mb-16 md:mb-24 relative">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.04 }}
                        className="text-[6rem] md:text-[13rem] font-black text-[#062216] absolute top-[-2rem] md:top-[-4rem] select-none tracking-tighter"
                    >
                        HARVEST
                    </motion.h2>

                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <Sparkles className="w-4 h-4 text-[#2d5a27]" />
                            <span className="text-[#2d5a27] font-bold uppercase tracking-[0.3em] text-[10px]">Ezz Export Quality</span>
                        </div>
                        <h3 className="text-4xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                            Export Grade <span className="text-[#2d5a27] ">Products</span>
                        </h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">

                    <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 md:gap-4 order-2 lg:order-1">
                        {products.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActive(item)}
                                className={`group w-full flex items-center justify-between p-5 md:p-7 rounded-[1.5rem] md:rounded-[2rem] transition-all duration-500 relative overflow-hidden shadow-sm border ${active.id === item.id
                                    ? "text-white shadow-2xl shadow-green-900/20 border-transparent lg:translate-x-4 bg-[#2d5a27]" // ضفنا اللون هنا مباشرة كـ fallback
                                    : "bg-white text-gray-400 hover:bg-gray-50 border-gray-100"
                                    }`}
                            >
                                {/* الـ Motion Div بيفضل موجود عشان الـ Animation الناعم بين الزراير */}
                                {active.id === item.id && (
                                    <motion.div
                                        layoutId="activeBg"
                                        className="absolute inset-0 bg-[#2d5a27] z-0" // شيلنا الـ -10 وخليناها 0
                                        initial={false}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}

                                <div className="relative z-10 flex items-center gap-4"> {/* ضفنا z-10 هنا عشان الكلام يظهر فوق اللون */}
                                    <span className={`text-[10px] font-black px-2 py-1 rounded-md border transition-colors ${active.id === item.id
                                        ? "border-white/30 bg-white/10 text-white"
                                        : "border-gray-100 bg-gray-50 text-gray-400"
                                        }`}>
                                        {item.id}
                                    </span>
                                    <span className="text-base md:text-xl font-bold tracking-tight">{item.name}</span>
                                </div>

                                <div className={`relative z-10 transition-all duration-500 ${active.id === item.id ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                                    }`}>
                                    <ArrowRight size={20} />
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Card */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-sm border border-gray-50"
                            >
                                {/* Image Frame */}
                                <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <Image
                                        src={active.image}
                                        alt={active.name}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                                    <div className="absolute top-4 left-4">
                                        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                                            {active.category}
                                        </span>
                                    </div>

                                </div>

                                {/* Info Content */}
                                <div className="space-y-6 md:space-y-8">
                                    <div>
                                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-none mb-4 tracking-tighter">
                                            {active.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                                            {active.description}
                                        </p>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { icon: Box, label: 'Available Sizes', val: active.specs.size },
                                            { icon: Calendar, label: 'Export Season', val: active.specs.season },
                                            { icon: Weight, label: 'Packing Way', val: active.specs.packing }
                                        ].map((spec, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 bg-gray-50/50 rounded-2xl border border-gray-100 group hover:bg-green-50 transition-colors">
                                                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm text-green-600">
                                                    <spec.icon size={18} />
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">{spec.label}</span>
                                                    <span className="text-xs md:text-sm font-bold text-gray-800 tracking-tight">{spec.val}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>


                <div className="flex justify-center mt-8 md:mt-12 px-4">
                    <Link href="/products" className="w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4 md:gap-8 bg-[#0a1a10] px-6 py-4 md:px-10 md:py-6 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl transition-all border border-white/5"
                        >
                            {/* تأثير الضوء المتحرك */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            <div className="flex flex-col items-start text-left relative z-10">
                                <span className="text-[8px] md:text-[10px] font-black text-[#4ade80] uppercase tracking-[0.3em] md:tracking-[0.4em] mb-0.5 md:mb-1">
                                    Discover More
                                </span>
                                <span className="text-white text-lg md:text-2xl font-black uppercase italic tracking-tighter leading-none">
                                    View All Products
                                </span>
                            </div>

                            {/* أيقونة السهم - مقاسها بيصغر في الموبايل */}
                            <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 bg-[#2d5a27] rounded-xl md:rounded-2xl flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-transform duration-500 shadow-lg">
                                <ArrowRight className="w-5 h-5 md:w-7 md:h-7" strokeWidth={3} />
                            </div>
                        </motion.button>
                    </Link>
                </div>

            </div>
        </section>

    );
};

export default Seson;