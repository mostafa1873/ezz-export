import React from "react";
import { Mail, Phone, MapPin, Globe, Instagram, Linkedin, Facebook, Clock } from "lucide-react";
import ContactForm from "../../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-[#fdfcf9] min-h-screen pb-20 selection:bg-[#1a3a16] selection:text-white">

      {/* --- Header Section --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2d5a27]/5 border border-[#2d5a27]/10">
              <Mail size={14} className="text-[#2d5a27]" />
              <span className="text-[#2d5a27] text-[10px] font-black uppercase tracking-[0.2em]">Contact Us</span>
            </div>
            <h1 className="text-6xl md:text-9xl text-[#1a3a16] tracking-tight">
              Get in <span className="font-sans not-italic font-[1000] uppercase block md:inline">Touch.</span>
            </h1>
            <p className="text-slate-500 max-w-xl text-lg font-medium leading-relaxed">
              We bring the richness of the Nile Delta to your business. Reach out to our expert team for global export inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* --- Main Grid Section --- */}
      <section className="px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Contact Info (Left) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#1a3a16] text-[#f4f1ea] p-10 rounded-[3rem] flex flex-col justify-between items-center text-center min-h-[300px] shadow-xl">
              <Globe className="opacity-20" size={40} />

              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-2">Global Exports</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-[250px]">
                  Serving over 45 countries with premium Egyptian produce.
                </p>

                {/* لينكات السوشيال ميديا في المنتصف */}
                <div className="flex gap-4 justify-center">
                  {/* Facebook */}
                  <a
                    href="https://web.facebook.com/people/Ezz-Export/61582088223661/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all border border-white/5 shadow-sm"
                  >
                    <Facebook size={18} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/ezzexport/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all border border-white/5 shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/ezz-export"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all border border-white/5 shadow-sm"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-100 p-8 rounded-[3rem] space-y-8 shadow-sm">
              {/* لينك الاتصال المباشر */}
              <a href="tel:+20123456789" className="block group">
                <InfoItem
                  icon={<Phone className="text-[#2d5a27] group-hover:scale-110 transition-transform" />}
                  title="Direct Call"
                  value="+20 1109458208"
                />
              </a>

              {/* لينك إرسال إيميل */}
              <a href="mailto:export@ezz-pure.com" className="block group">
                <InfoItem
                  icon={<Mail className="text-[#2d5a27] group-hover:scale-110 transition-transform" />}
                  title="Email Us"
                  value="info@ezzexport.com"
                />
              </a>

              {/* ساعات العمل (نص فقط) */}
              <div className="block">
                <InfoItem
                  icon={<Clock className="text-[#2d5a27]" />}
                  title="Working Hours"
                  value="Sat – Thu: 10AM – 6PM"
                />
              </div>
            </div>
          </div>

          {/* Form Section (Right) */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-slate-100 p-8 md:p-16 rounded-[3rem] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d5a27]/5 rounded-bl-full pointer-events-none" />
              <div className="mb-12">
                <h2 className="text-3xl font-[1000] text-[#1a3a16] uppercase tracking-tighter mb-2">Send an Inquiry</h2>
                <p className="text-slate-400 text-sm font-medium italic">Our export directors will get back to you within 24 hours.</p>
              </div>
              <ContactForm />
            </div>
          </div>

        </div>
      </section>

      {/* --- Map Section --- */}
      <section className="mt-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto h-[450px] rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6830.302830320971!2d30.12588334304795!3d31.133309447573765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5df16bb7ad9df%3A0xf73827d19914333a!2sKafr%20El-Dawar%2C%20Monshaat%20Al%20Awqaf%2C%20Kafr%20El%20Dawwar%2C%20Beheira%20Governorate!5e0!3m2!1sen!2seg!4v1770899802879!5m2!1sen!2seg"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
            style={{ border: 0 }}
            allowFullScreen
          />
          <div className="absolute bottom-8 left-8 bg-[#1a3a16] text-white p-6 rounded-3xl shadow-2xl max-w-xs">
            <div className="flex items-start gap-4">
              <MapPin className="shrink-0 text-[#2d5a27]" />
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-50 mb-1">Our Location</p>
                <p className="text-sm font-bold leading-tight">Kafr El Dawwar, El Beheira, Egypt</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

// --- Helper Components ---

function InfoItem({ icon, title, value }: any) {
  return (
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-2xl bg-[#f8fcf7] flex items-center justify-center border border-slate-50">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{title}</p>
        <p className="text-[#1a3a16] font-bold text-sm tracking-tight">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon }: any) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#1a3a16] transition-all cursor-pointer border border-white/5 shadow-sm">
      {icon}
    </div>
  );
}