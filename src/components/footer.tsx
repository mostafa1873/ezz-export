import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import logo from '../assets/greenrow.webp';

export default function Footer() {
    return (
        <footer className="bg-[#062216] text-white py-10 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                
                {/* اللوجو - حجم مناسب وغير ضخم */}
                <Link href="/" className="mb-6">
                    <Image
                        src={logo}
                        alt="Logo"
                        width={150}
                        height={50}
                        className="h-16 w-auto object-contain"
                    />
                </Link>

                {/* روابط سريعة في سطر واحد أو اتنين - عشان نوفر مساحة */}
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-sm text-white/60 font-medium">
                    <Link href="/about" className="hover:text-white transition">About</Link>
                    <Link href="/products" className="hover:text-white transition">Products</Link>
                    <Link href="/quality" className="hover:text-white transition">Quality</Link>
                    <Link href="/contact" className="hover:text-white transition">Contact</Link>
                </div>

                {/* معلومات التواصل - بشكل مختصر جداً */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mb-8 text-xs text-white/40 uppercase tracking-widest">
                    <div className="flex items-center justify-center gap-2">
                        <Phone size={14} /> <span>+20 123 456 7890</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <Mail size={14} /> <span>info@ezzexport.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <MapPin size={14} /> <span>Cairo, Egypt</span>
                    </div>
                </div>

                {/* السوشيال ميديا - أيقونات بسيطة بدون دوائر كبيرة */}
                <div className="flex gap-6 mb-8 text-white/40">
                    <Link href="#" className="hover:text-white transition"><Facebook size={20} /></Link>
                    <Link href="#" className="hover:text-white transition"><Instagram size={20} /></Link>
                    <Link href="#" className="hover:text-white transition"><Linkedin size={20} /></Link>
                </div>

                {/* خط النهاية */}
                <div className="w-full pt-6 border-t border-white/5">
                    <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} Ezz Export & Trade.
                    </p>
                </div>
            </div>
        </footer>
    );
}