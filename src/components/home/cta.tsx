import Link from "next/link";
import { MoveRight, Sparkles } from "lucide-react";

export default function GlobalCTA() {
  return (
    <section className="py-12 md:pb-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-[#062216] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Cultivating <span className="text-lime-400 italic">Success</span> <br className="hidden md:block" /> One Shipment at a Time.
              </h2>
            </div>

            <div className="w-full md:w-auto">
              <Link href="/contact" className="flex items-center justify-between md:justify-start gap-6 bg-white pl-8 pr-2 py-2 rounded-full hover:bg-lime-400 transition-all group">
                <span className="text-xs md:text-sm font-black uppercase text-[#062216]">Start Your Order</span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#062216] text-white rounded-full flex items-center justify-center group-hover:rotate-[-45deg] transition-transform">
                  <MoveRight size={20} />
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-white/40 text-[9px] font-medium uppercase tracking-[0.2em]">Join 50+ partners worldwide</p>
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em]">© 2025 Ezz Export Co.</p>
          </div>
        </div>
      </div>
    </section>
  );
}