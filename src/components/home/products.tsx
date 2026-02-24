"use client";

// 1. إضافة useEffect و UseLayoutEffect للتحكم في الـ Scroll
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Snowflake, Droplets, Leaf, ArrowRight } from "lucide-react";
import iqf from '../../assets/iqf.webp';
import fresh from '../../assets/fresh.webp';
import brine from '../../assets/in-brine.webp';

const ProductCategories = () => {
    const t = useTranslations('categories');

    useEffect(() => {
        const handleHashScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    setTimeout(() => {
                        element.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                }
            }
        };

        handleHashScroll();
    }, []);

    const categoriesData = [
        {
            key: "fresh",
            icon: <Leaf className="w-5 h-5" />,
            color: "from-emerald-600/80 to-emerald-900/90",
            accent: "bg-emerald-500",
            image: fresh,
            link: "/products?filter=fresh#products-grid"
        },
        {
            key: "frozen",
            icon: <Snowflake className="w-5 h-5" />,
            color: "from-blue-600/80 to-blue-900/90",
            accent: "bg-blue-500",
            image: iqf,
            link: "/products?filter=iqf#products-grid",
        },
        {
            key: "brine",
            icon: <Droplets className="w-5 h-5" />,
            color: "from-amber-600/80 to-amber-900/90",
            accent: "bg-amber-500",
            image: brine,
            link: "/products?filter=in_brine#products-grid",
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Section */}
                <div className="mb-12 md:mb-24 relative flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 0.03, scale: 1 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] sm:text-[8rem] md:text-[14rem] font-black text-green-900 select-none pointer-events-none tracking-tighter"
                    >
                        COLLECTION</motion.h2>

                    <div className="relative z-10 space-y-3 md:space-y-4">
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                            <div className="w-6 md:w-8 h-[1px] bg-green-200" />
                            <span className="text-[#2d5a27] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-[8px] md:text-[10px] rtl:tracking-normal">
                                {t('expertise')}
                            </span>
                            <div className="w-6 md:w-8 h-[1px] bg-green-200" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
                            {t('titleMain')} <span className="text-[#2d5a27]">{t('titleHighlight')}</span>
                        </h2>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {categoriesData.map((cat, index) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* الصورة الأساسية */}
                            <Image
                                src={cat.image}
                                alt={t(`items.${cat.key}.title`)}
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />

                            {/* تدرج لوني يظهر فوق الصورة عند الهوفر */}
                            <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10`} />

                            {/* الكارت العائم - أصبح أصغر وله حواف داخلية (Inset) */}
                            <div className="absolute inset-x-4 bottom-4 md:inset-x-6 md:bottom-6 z-20">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 md:p-6 rounded-[2rem] transition-all duration-500 transform group-hover:-translate-y-2 shadow-2xl">
                                    
                                    <div className="flex items-center justify-between mb-2">
                                        <div className={`p-2 rounded-xl ${cat.accent} text-white shadow-lg`}>
                                            {cat.icon}
                                        </div>
                                        <span className="text-[9px] font-black text-white/70 uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-all">
                                            {t(`items.${cat.key}.tag`)}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-black text-white mb-1 tracking-tight">
                                        {t(`items.${cat.key}.title`)}
                                    </h3>

                                    {/* الوصف بيظهر بس عند الهوفر ومساحته محكومة */}
                                    <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out">
                                        <p className="text-white/80 text-[11px] md:text-[13px] leading-relaxed mb-4 mt-2 line-clamp-2">
                                            {t(`items.${cat.key}.description`)}
                                        </p>
                                    </div>

                                    {/* زرار Explore والـ Link */}
                                    <div className="flex items-center justify-between mt-1">
                                        <div className="flex items-center gap-2 text-white font-bold text-xs">
                                            <span>{t('explore')}</span>
                                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rtl:rotate-180" />
                                        </div>
                                    </div>

                                    {/* اللينك يغطي الكارت الأساسي بالكامل لسهولة الضغط */}
                                    <Link href={cat.link} className="absolute inset-0 z-30">
                                        <span className="sr-only">View {t(`items.${cat.key}.title`)}</span>
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