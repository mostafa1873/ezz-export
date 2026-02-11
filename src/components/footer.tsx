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
                            {[
                                { Icon: Facebook, href: "https://web.facebook.com/profile.php?id=61582088223661" },
                                { Icon: Instagram, href: "https://www.instagram.com/ezzexport/?fbclid=IwY2xjawNsKVpleHRuA2FlbQIxMQBicmlkETEwN2xjblIzdTRhNmpKZ2tPAR7k_hx9Tk12NMj34rMICVpeqJavdX_0OOiGNwksXLF4QkQh6xjWh5Z9BqjD0w_aem_EiVZGu7OHrur6W-PHTp5Eg" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/company/ezz-export" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300"
                                >
                                    <social.Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8 italic">Navigation</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Products', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-white/50 text-sm font-bold hover:text-green-500 transition-colors flex items-center justify-center lg:justify-start group"
                                    >
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
                                <a href="tel:+201234567890" className="group flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Phone</p>
                                        <p className="text-sm font-bold text-white/80 group-hover:text-green-500 transition-colors">+20 1109458208</p>
                                    </div>
                                </a>
                            </li>
                            <li className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                                <a href="mailto:info@ezzexport.com" className="group flex flex-col lg:flex-row items-center lg:items-start gap-4 w-full">
                                    <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">Email</p>
                                        <p className="text-sm font-bold text-white/80 group-hover:text-green-500 transition-colors">info@ezzexport.com</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-8 italic">Headquarters</h4>
                        <a
                            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6830.302830320971!2d30.12588334304795!3d31.133309447573765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5df16bb7ad9df%3A0xf73827d19914333a!2sKafr%20El-Dawar%2C%20Monshaat%20Al%20Awqaf%2C%20Kafr%20El%20Dawwar%2C%20Beheira%20Governorate!5e0!3m2!1sen!2seg!4v1770815370174!5m2!1sen!2seg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col lg:flex-row items-center lg:items-start gap-4"
                        >
                            <div className="w-10 h-10 rounded-xl bg-green-900/30 flex items-center justify-center shrink-0 border border-green-800/20 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                                <MapPin size={18} />
                            </div>
                            <p className="text-sm font-bold text-white/80 leading-relaxed pt-1 group-hover:text-green-500 transition-colors">
                                El Beheira, Egypt <br />
                                <span className="text-white/30 font-medium group-hover:text-green-500/50">Kafr El Dawwar</span>
                            </p>
                        </a>
                    </div>

                </div>

                <div className="mt-8 p-4 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center justify-center md:justify-start gap-2 w-full md:w-auto">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 animate-pulse shrink-0 hidden md:block" />
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-medium text-center md:text-left">
                            © {new Date().getFullYear()} Ezz Export — Global Trade Excellence
                        </span>
                    </div>

                    <Link
                        href="https://globalnexus.com"
                        className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300 border border-white/5 shrink-0"
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