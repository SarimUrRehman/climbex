import React from 'react';
import { ArrowRight, Phone, Sparkles, Star, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface FinalCtaBannerProps {
  onQuoteClick: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-20 sm:py-28 relative bg-[#070D19] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1920&auto=format&fit=crop"
          alt="Toronto illuminated skyline at dusk"
          className="w-full h-full object-cover object-center opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#070D19] via-[#070D19]/90 to-[#070D19]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="rounded-3xl p-8 sm:p-14 bg-linear-to-r from-blue-950/90 via-slate-900/95 to-sky-950/90 border border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] backdrop-blur-xl text-center relative overflow-hidden animate-glass-sweep">
          {/* Subtle star gleam decoration */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-semibold text-cyan-300 mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Elevate Your Property’s View
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready for Windows That Truly{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-cyan-200 to-amber-300">
              Shine Above The Rest?
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Get your fast, transparent quote today. Experience the unmatched clarity of Toronto’s premier residential, commercial, and high-rise window specialists.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onQuoteClick}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-slate-950 font-extrabold text-base bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2.5 cursor-pointer group active:scale-95 pulse-glow"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Get Your Free Quote Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-bold text-base bg-slate-900/90 hover:bg-slate-800 border border-sky-400/40 hover:border-cyan-400 shadow-xl transition-all flex items-center justify-center gap-2.5 active:scale-95"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call +1 647-510-0882</span>
            </a>
          </div>

          {/* Micro trust row */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              5.0★ Google Rated (6 Reviews)
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              $5,000,000 Insured & WSIB
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Toronto & GTA Service Coverage</span>
          </div>
        </div>
      </div>
    </section>
  );
};
