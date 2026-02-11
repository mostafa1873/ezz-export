import ProductsGrid from "@/components/products/ProductsGrid";
import productsData from "@/data/products.json";
import { FiArrowDown, FiCheck, FiArrowUpRight } from "react-icons/fi";

export const metadata = {
  title: "Ezz Export | Global Premium Source",
  description: "Egypt's leading agricultural export signature.",
};

export default function ProductsPage() {
  const allProducts = productsData.products;

  return (
    <main className="min-h-screen bg-white">

      <header className="relative min-h-[95vh] flex items-center overflow-hidden pt-30 md:pt-20">

        <div className="absolute inset-0 z-0 flex">
          <div className="flex-1 bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

          <div
            className="absolute inset-y-0 right-0 w-[60%] bg-[#051109] hidden lg:block"
            style={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2d5a27]/20 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#051109] lg:hidden" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7">
              <h1 className="text-[16vw] lg:text-[8vw] font-[900] leading-[0.8] text-[#051109] uppercase tracking-[-0.04em]">
                Our <br />
                <span className="text-[#2d5a27] text-[14.5vw] lg:text-[7.2vw] tracking-[-0.02em] block mt-1">
                  Products.
                </span>
              </h1>

              <div className="mt-8 space-y-3 md:space-y-2 opacity-70">
                <div className="flex items-baseline gap-2 md:gap-3">
                  <span className="text-[5vw] md:text-xl font-black text-slate-400 tracking-tighter">01.</span>
                  <h2 className="text-[4vw] md:text-lg font-bold uppercase tracking-tight text-slate-600 leading-none">
                    Global <span className="text-[#2d5a27]/80">Certified</span> Quality.
                  </h2>
                </div>

                <div className="flex items-baseline gap-2 md:gap-3">
                  <span className="text-[5vw] md:text-xl font-black text-slate-400 tracking-tighter">02.</span>
                  <h2 className="text-[4vw] md:text-lg font-bold uppercase tracking-tight text-slate-600 leading-none">
                    Seamless <span className="text-[#2d5a27]/80">Worldwide</span> Delivery.
                  </h2>
                </div>
              </div>
            </div>

            {/* Right Side: The NEW Glass Box Design */}
            <div className="lg:col-span-5 flex justify-end">
              <div className="relative group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-16 w-full md:w-[420px] aspect-square shadow-[0_32px_64px_rgba(0,0,0,0.5)] flex flex-col justify-center items-center text-center relative overflow-hidden transition-all duration-700 hover:border-white/20">

                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30" />

                  <div className="absolute top-8 right-8 bg-white p-4 text-[#051109] hidden md:block shadow-2xl rounded-full group-hover:bg-[#2d5a27] group-hover:text-white transition-colors duration-500">
                    <FiArrowUpRight size={20} />
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-black tracking-[0.5em] text-[#2d5a27] uppercase font-mono block mb-4 italic opacity-80">
                      Origin Certificate
                    </span>

                    <h3 className="text-7xl font-[1000] uppercase tracking-[-0.04em] text-white leading-[0.85]">
                      Pure <br />
                      <span className="text-[#2d5a27] italic">Nile.</span>
                    </h3>

                    <div className="flex flex-col items-center gap-4 mt-8">
                      <div className="h-[2px] w-12 bg-white/20" />
                      <p className="text-[11px] font-black tracking-[0.4em] uppercase text-white/40 font-mono">
                        Export Protocol 2026
                      </p>
                    </div>
                  </div>

                </div>

                {/* Scroll Hint */}
                <div className="mt-5 flex flex-col items-center gap-3 group/scroll cursor-pointer">
                  <span className="text-[9px] font-black uppercase tracking-[0.6em] text-white/60 group-hover/scroll:text-[#2d5a27] transition-all duration-500 ml-[0.6em]">
                    Explore Catalog
                  </span>

                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover/scroll:border-[#2d5a27]/30 group-hover/scroll:bg-[#2d5a27]/5 transition-all duration-500">
                    <FiArrowDown
                      className="text-white/50 group-hover/scroll:text-[#2d5a27] animate-bounce"
                      size={14}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* PRODUCTS */}
      <section className="container mx-auto py-12 relative z-20">
        <ProductsGrid initialProducts={allProducts} />
      </section>

      {/* B2B SECTION - Optimized Responsive */}
      <section className="container mx-auto px-4 md:px-6 mb-24 md:mb-32 max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-[#051109] border border-[#2d5a27]/20 shadow-2xl">

          {/* إضاءة خلفية - حجم أصغر في الموبايل */}
          <div className="absolute -bottom-16 -left-16 w-40 h-40 md:w-80 md:h-80 bg-[#2d5a27]/10 blur-[60px] md:blur-[100px] -z-0" />

          <div className="flex flex-col lg:flex-row relative z-10">

            <div className="flex-1 p-8 sm:p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-[#2d5a27]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#2d5a27]" />
                <span className="text-[7px] md:text-[9px] font-black tracking-[0.3em] md:tracking-[0.4em] text-[#2d5a27] uppercase">
                  Partnerships
                </span>
              </div>

              <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.95] md:leading-[0.9]">
                Bulk <br />
                <span className="text-[#2d5a27]">Orders.</span>
              </h2>

              <p className="text-white/40 text-[9px] md:text-[11px] font-bold mb-8 max-w-[240px] md:max-w-[280px] uppercase tracking-[0.15em] md:tracking-widest leading-relaxed">
                Global supply chain & tailored packaging solutions.
              </p>

              <a href="/contact" className="inline-flex items-center gap-3 md:gap-4 py-3.5 md:py-4 px-8 md:px-10 bg-[#2d5a27] text-white font-black uppercase text-[8px] md:text-[9px] tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-[#051109] transition-all duration-500 rounded-full w-fit shadow-xl">
                <span>Contact Team</span>
                <FiArrowUpRight size={14} />
              </a>
            </div>

            <div className="flex-1 lg:flex-[0.8] p-8 sm:p-12 md:p-16 flex flex-col justify-center gap-5 md:gap-8 bg-[#2d5a27]/[0.02]">
              {[
                "Cold Chain Management",
                "Private Labeling Ready",
                "Full Compliance Docs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full border border-[#2d5a27]/30 flex items-center justify-center shrink-0 group-hover:bg-[#2d5a27] transition-all duration-500">
                    <FiCheck className="text-[#2d5a27] group-hover:text-white transition-colors" size={12} />
                  </div>
                  <span className="text-white/70 font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-[8px] md:text-[11px] group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}