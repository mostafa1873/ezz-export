import Link from "next/link";
import { MoveRight, Sprout } from "lucide-react";

export default function GlobalCTA() {
  return (
    <section className="py-12 md:py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* الحاوية: بقت أضيق وأرشق */}
        <div className="relative overflow-hidden bg-[#062216] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-12 shadow-xl">
          
          {/* تأثير ضوئي خافت جداً غير مزعج */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 blur-[80px] rounded-full" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* المحتوى: مركز ومختصر */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-8 h-[1px] bg-lime-500/50" />
                <span className="text-lime-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Get Started
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
                Ready to Grow <br /> 
                <span className="text-lime-400 italic">Your Business?</span>
              </h2>
            </div>

            {/* الزرار: حجمه بقى "Compact" وشكله أنيق */}
            <div className="shrink-0 w-full md:w-auto">
              <Link href="/contact" className="group relative flex items-center justify-between gap-6 bg-white hover:bg-lime-400 text-[#062216] pl-8 pr-2 py-2 rounded-full transition-all duration-500 shadow-lg">
                <span className="text-sm font-black uppercase tracking-tight italic">
                  Start Partnership
                </span>
                
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#062216] text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-90 group-hover:rotate-[-45deg]">
                  <MoveRight size={20} />
                </div>
              </Link>
            </div>

          </div>

          {/* تذييل بسيط جداً */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.2em]">
              Premium Egyptian Export Standard
            </p>
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
                <span className="text-white/40 text-[9px] font-medium uppercase tracking-widest text-center">Trusted by 50+ Global Partners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}