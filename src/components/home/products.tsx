"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Snowflake, Droplets, Leaf, ArrowRight } from "lucide-react";
import iqf from '../../assets/iqf.webp';
import fresh from '../../assets/fresh.webp';
import brine from '../../assets/in-brine.webp';

const categories = [
    {
        title: "Fresh Harvest",
        arabic: "Fresh Products",
        description: "Premium quality straight from our fertile Egyptian soil.",
        icon: <Leaf className="w-5 h-5" />,
        color: "from-emerald-600/90 to-emerald-900/90",
        accent: "bg-emerald-500",
        image: fresh,
        link: "/products/fresh"
    },
    {
        title: "Frozen Foods",
        arabic: "IQF Products",
        description: "Advanced IQF technology preserving every single nutrient.",
        icon: <Snowflake className="w-5 h-5" />,
        color: "from-blue-600/90 to-blue-900/90",
        accent: "bg-blue-500",
        image: iqf,
        link: "/products/frozen"
    },
    {
        title: "Brine Solutions",
        arabic: "In Brine Products",
        description: "Expertly cured products maintained in premium brine.",
        icon: <Droplets className="w-5 h-5" />,
        color: "from-amber-600/90 to-amber-900/90",
        accent: "bg-amber-500",
        image: brine,
        link: "/products/brine"
    }
];

const ProductCategories = () => {
    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12 md:mb-24 relative flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.03, scale: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[8rem] md:text-[14rem] font-black text-green-900 select-none pointer-events-none tracking-tighter"
                    >
                        COLLECTION
                    </motion.h2>

                    <div className="relative z-10 space-y-3 md:space-y-4">
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                            <div className="w-6 md:w-8 h-[1px] bg-green-200" />
                            <span className="text-[#2d5a27] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px]">
                                Our Expertise
                            </span>
                            <div className="w-6 md:w-8 h-[1px] bg-green-200" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                            The <span className="italic text-[#2d5a27]">Three</span> Pillars
                        </h2>
                    </div>
                </div>

                {/* Categories Grid - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[450px] md:h-[600px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden cursor-pointer shadow-xl"
                        >
                            {/* الصورة الأساسية */}
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* Overlays */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-0 md:group-hover:opacity-100 transition-opacity duration-700`} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 md:group-hover:opacity-0" />

                            {/* المحتوى السفلي */}
                            <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 z-20">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-[1.8rem] md:rounded-[2rem] transition-all duration-700 md:group-hover:bg-transparent md:group-hover:border-transparent md:group-hover:backdrop-blur-none">
                                    
                                    <div className="flex items-center justify-between mb-3 md:mb-4">
                                        <div className={`p-2.5 md:p-3 rounded-xl md:rounded-2xl ${cat.accent} text-white shadow-lg`}>
                                            {cat.icon}
                                        </div>
                                        <span className="text-white/70 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                                            {cat.arabic}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                                        {cat.title}
                                    </h3>
                                    
                                    <div className="md:h-0 md:overflow-hidden transition-all duration-500 md:group-hover:h-20">
                                        <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                                            {cat.description}
                                        </p>
                                    </div>

                                    <Link href={cat.link}>
                                        <div className="flex items-center gap-3 text-white font-bold text-sm group/btn">
                                            <span className="relative">
                                                Explore Now
                                                <span className="absolute -bottom-1 left-0 w-full md:w-0 h-[2px] bg-white transition-all duration-500 md:group-hover:w-full" />
                                            </span>
                                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-gray-900 transition-all">
                                                <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;