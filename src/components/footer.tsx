import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import logo from '../assets/greenrow.webp';

export default function Footer() {
    return (

        <footer className="bg-[#051a10] text-white pt-20 pb-10 border-t border-white/5 relative rounded-t-4xl overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-green-900/20 blur-[100px] rounded-full -z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    <div className="lg:col-span-1 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Link href="/" className="inline-block mb-6">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={140}
                                height={50}
                                className="h-18 w-auto object-contain brightness-110"
                            />
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 font-medium max-w-[sm]">
                            Premium Egyptian agricultural produce exported with excellence to global markets.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300">
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8 italic">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Our Products', 'Quality Control', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/50 text-sm font-bold hover:text-green-500 transition-colors flex items-center justify-center lg:justify-start group">
                                        <ArrowUpRight size={14} className="mr-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8 italic">Get in Touch</h4>
                        <ul className="space-y-6 w-full">
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Phone</p>
                                    <p className="text-sm font-bold text-white/80">+20 123 456 7890</p>
                                </div>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-sm font-bold text-white/80">info@ezzexport.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8 italic">Headquarters</h4>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500">
                                <MapPin size={18} />
                            </div>
                            <p className="text-sm font-bold text-white/80 leading-relaxed pt-1">
                                Cairo, Egypt <br />
                                <span className="text-white/30 font-medium">New Cairo, District 5</span>
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-8 p-4 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse" />
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium">
                            © {new Date().getFullYear()} Ezz Export — Global Trade Excellence
                        </span>
                    </div>

                    <Link
                        href="https://globalnexus.com"
                        className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300 border border-white/5"
                    >
                        <span className="text-[8px] text-white/40 uppercase font-bold tracking-tighter">Crafted by</span>
                        <span className="text-[10px] text-white group-hover:text-green-400 font-black tracking-widest transition-colors">
                            GLOBALNEXUS
                        </span>
                        <svg className="w-2 h-2 text-white/20 group-hover:text-green-400 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

            </div>
        </footer>
        
    );
}