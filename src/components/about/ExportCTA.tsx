"use client";
import { motion } from "framer-motion";
import { Download, MessageSquare, ChevronRight, FileCheck } from "lucide-react";

export default function ExportCTA() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden bg-[#061a10] rounded-[2rem] md:rounded-[3.5rem] p-6 sm:p-10 md:p-16 shadow-2xl border border-emerald-900/30">

          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2d5a27] rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">

            <div className="text-center lg:text-left space-y-4 md:space-y-6 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-white">
                <FileCheck size={14} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">2026 Export Edition</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
                Secure Your <span className="text-[#2d5a27]">Bulk Order</span> <br className="hidden md:block" /> Today.
              </h2>

              <p className="text-emerald-100/60 text-sm md:text-base max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
                Download our technical catalog or speak directly with our logistics team for a custom quote.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full lg:w-auto">

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href="/catalog.pdf"
                className="flex items-center justify-between gap-6 p-4 md:p-5 bg-[#2d5a27] hover:bg-[#366d2f] text-white rounded-2xl md:rounded-3xl w-full transition-all shadow-lg shadow-black/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Download size={20} className="text-white" />
                  </div>
                  <span className="font-black text-sm md:text-base uppercase tracking-tight">Catalog 2026</span>
                </div>
                <ChevronRight size={20} className="text-white" />
              </motion.a>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/201109458208"
                className="flex items-center justify-between gap-6 p-4 md:p-5 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/30 text-emerald-50 rounded-2xl md:rounded-3xl w-full transition-all shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1a3326] rounded-xl flex items-center justify-center text-green-400">
                    <MessageSquare size={20} />
                  </div>
                  <span className="font-black text-sm md:text-base uppercase tracking-tight">Contact Sales</span>
                </div>
                <ChevronRight size={20} className="text-green-700" />
              </motion.a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}