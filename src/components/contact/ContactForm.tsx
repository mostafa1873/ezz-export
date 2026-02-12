"use client";
import React from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a16] ml-2">Full Name</label>
          <input type="text" placeholder="e.g. Julian Schmidt" className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a16] ml-2">Email Address</label>
          <input type="email" placeholder="contact@company.com" className="w-full bg-[#f8f9fa] border border-slate-200 rounded-2xl px-6 py-4 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none text-sm" />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-[10px] font-bold uppercase tracking-widest text-[#1a3a16] ml-2">Message</label>
        <textarea rows={5} placeholder="How can we help you with your export needs?" className="w-full bg-[#f8f9fa] border border-slate-200 rounded-[2rem] px-6 py-5 focus:bg-white focus:ring-2 focus:ring-[#2d5a27]/10 focus:border-[#2d5a27] transition-all outline-none resize-none text-sm" />
      </div>
      
      <button className="w-full bg-[#1a3a16] text-[#f4f1ea] rounded-full py-5 font-bold uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-[#2d5a27] transition-all duration-500 shadow-lg group">
        Send Inquiry
        <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </form>
  );
}