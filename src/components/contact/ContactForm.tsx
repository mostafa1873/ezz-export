"use client";
import React from "react";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations('Contact.form');

  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
            {t('fullName')}
          </label>
          <input type="text" placeholder={t('fullNamePlaceholder')} className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm placeholder:text-slate-400" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
            {t('email')}
          </label>
          <input type="email" placeholder={t('emailPlaceholder')} className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm placeholder:text-slate-400" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a16] ml-2 rtl:mr-2 rtl:ml-0">
          {t('message')}
        </label>
        <textarea rows={5} placeholder={t('messagePlaceholder')} className="w-full bg-[#f8f9fa] border border-slate-200 rounded-[2rem] px-6 py-5 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none resize-none text-sm placeholder:text-slate-400" />
      </div>

      <button className="w-full bg-[#1a3a16] text-[#f4f1ea] rounded-full py-5 font-bold uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#2d5a27] transition-all duration-500 shadow-lg group">
        {t('submit')}
        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
      </button>
    </form>
  );
}