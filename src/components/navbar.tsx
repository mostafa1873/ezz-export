"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { Home, Info, Leaf, PhoneCall } from "lucide-react";

import logoMain from '../assets/greenrow.webp';
import GB from '../assets/GB.webp';
import EG from '../assets/EG.webp';
import IT from '../assets/IT.webp';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const languages = [
        { code: 'EN', name: 'English', flag: GB },
        { code: 'AR', name: 'العربية', flag: EG },
        { code: 'IT', name: 'Italiano', flag: IT }
    ];

    const [currentLang, setCurrentLang] = useState(languages[0]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => { if (window.innerWidth > 1024) setMobileMenuOpen(false); };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navLinkStyles = (path: string) => {

        const isActive = path === '/'
            ? pathname === '/'
            : pathname.startsWith(path);

        return `relative px-6 py-2 rounded-full font-bold text-sm transition-all duration-500 
        ${isActive ? 'text-white bg-[#2d5a27] shadow-lg' : 'text-gray-500 hover:text-green-700 hover:bg-gray-100/60'}`;
    };


    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
             {/* Main Nav */}
            <div className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'top-4' : 'top-3'}`}>
                <nav className={`mx-auto transition-all duration-500 ease-in-out
    max-w-[95%] rounded-[3rem] ${isScrolled ? 'shadow-2xl bg-white/90 backdrop-blur-xl border border-white/40' : 'shadow-md bg-white/90 backdrop-blur-md border border-white/40'}`}>

                    <div className="w-full px-6 lg:px-12 h-24 flex justify-between items-center">

                        <div className="flex-none lg:flex-1 flex justify-start items-center">
                            <Link href="/" onClick={handleLogoClick} className="transition-transform duration-500 hover:scale-105 block">
                                <Image src={logoMain} alt="Zayat Export Logo" className="h-[45px] sm:h-[100px] lg:h-20 w-auto object-contain block" priority />
                            </Link>
                        </div>

                        <div className="hidden lg:flex flex-1 justify-center">
                            <div className="flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full border border-gray-100">
                                <Link href="/" className={navLinkStyles('/')}>Home</Link>
                                <Link href="/about" className={navLinkStyles('/about')}>About</Link>
                                <Link href="/products" className={navLinkStyles('/products')}>Products</Link>
                                <Link href="/contact" className={navLinkStyles('/contact')}>Contact</Link>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-end items-center gap-3">
                            <div className="relative hidden lg:block">
                                <button
                                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                                    className="flex items-center gap-2 bg-[#315028] text-white px-5 py-2.5 rounded-full hover:bg-agri-green transition-all cursor-pointer shadow-sm"
                                >
                                    <Image src={currentLang.flag} width={20} height={14} className="object-cover rounded-sm" alt="" />
                                    <span className="font-bold text-[11px] uppercase">{currentLang.code}</span>
                                </button>
                                {langMenuOpen && (
                                    <div className="absolute top-14 right-0 bg-white shadow-2xl rounded-2xl p-2 min-w-[160px] border border-gray-50 z-50">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => { setCurrentLang(lang); setLangMenuOpen(false); }}
                                                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:bg-agri-green hover:text-white rounded-xl transition-all"
                                            >
                                                <Image src={lang.flag} width={20} height={14} className="rounded-sm" alt="" /> {lang.name}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="lg:hidden w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-900 hover:bg-gray-200 transition-colors"
                            >
                                <HiMenuAlt3 size={28} />
                            </button>
                        </div>

                    </div>
                </nav>
            </div>

            {/* Menu Overlay */}
            <div className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMobileMenuOpen(false)} />

            {/* Sidebar Mobile */}
            <div className={`fixed top-0 h-full w-[280px] bg-white z-[120] transition-transform duration-500 ease-in-out transform right-0 rounded-l-[2.5rem] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className="flex flex-col h-full p-6">
                    <div className="flex justify-between items-center mb-10">
                        <Link href="/" onClick={() => { setMobileMenuOpen(false); handleLogoClick(); }} className="block">
                            <Image src={logoMain} alt="Logo" className="h-12 w-auto object-contain" />
                        </Link>
                        <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-full text-gray-400 hover:bg-gray-100 transition-colors">
                            <HiX size={20} />
                        </button>
                    </div>

                    <div className="space-y-2 flex-grow">
                        {[
                            { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
                            { name: 'About', path: '/about', icon: <Info className="w-5 h-5" /> },
                            { name: 'Products', path: '/products', icon: <Leaf className="w-5 h-5" /> },
                            { name: 'Contact', path: '/contact', icon: <PhoneCall className="w-5 h-5" /> }
                        ].map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="group block w-full"
                                >
                                    <div className={`flex items-center gap-4 h-14 transition-all duration-300 flex-row rounded-xl px-4
                                          ${isActive
                                            ? 'bg-[#2d5a27] text-white shadow-lg shadow-green-900/20'
                                            : 'text-gray-600 hover:bg-gray-100/80 hover:text-[#2d5a27]'}`}
                                    >
                                        <div className={`transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-[#2d5a27]'}`}>
                                            {link.icon}
                                        </div>

                                        <span className="text-xl font-bold uppercase tracking-tight">
                                            {link.name}
                                        </span>

                                        <div className={`ml-auto transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                                            <div className="w-1.5 h-1.5 rounded-full bg-current" />
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        <div className="mt-6 pt-6 border-t border-gray-50">
                            <span className="block text-[9px] font-black text-gray-300 uppercase tracking-widest mb-4">Select Language</span>
                            <div className="grid grid-cols-1 gap-2">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => { setCurrentLang(lang); setMobileMenuOpen(false); }}
                                        className={`flex items-center justify-center gap-2 py-2.5 rounded-xl transition-all border
                                            ${currentLang.code === lang.code ? 'bg-gray-900 border-gray-900 text-white' : 'bg-gray-50 border-transparent text-gray-500'}`}
                                    >
                                        <Image src={lang.flag} width={16} height={10} className="object-cover rounded-[1px]" alt="" />
                                        <span className="font-bold text-[11px] uppercase">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-50">
                        <div className="flex justify-center gap-5 mb-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF size={14} className="text-gray-300 hover:text-agri-green transition-colors" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={14} className="text-gray-300 hover:text-agri-green transition-colors" />
                            </a>
                            <a href="https://wa.me/YOUR_NUMBER" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={14} className="text-gray-300 hover:text-agri-green transition-colors" />
                            </a>
                        </div>
                        <p className="text-[8px] text-center font-bold text-gray-300 uppercase tracking-[0.2em]">Ezz Export</p>
                    </div>
                </div>
            </div>
        </>
    );
}
