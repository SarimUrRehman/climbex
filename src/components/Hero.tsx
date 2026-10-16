import React from 'react';
import { ArrowRight, Phone, Star, ShieldCheck, Sparkles, CheckCircle2, Award, Building, Compass } from 'lucide-react';
import { ParticleSparkles } from './ParticleSparkles.tsx';
import { BUSINESS_INFO } from '../data/content.ts';

interface HeroProps {
  onQuoteClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 flex items-center justify-center overflow-hidden bg-[#070E1A]"
    >
      {/* Background Skyline Image with Deep Navy Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1920&auto=format&fit=crop"
          alt="Toronto modern high-rise skyscraper glass tower reflecting sunlight"
          className="w-full h-full object-cover object-center opacity-25 scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:hover:scale-100"
          loading="eager"
        />
        {/* Navy Gradient Overlays for optimal contrast and WCAG AA compliance */}
        <div className="absolute inset-0 bg-linear-to-b from-[#070E1A]/90 via-[#070E1A]/85 to-[#070E1A]" />
        <div className="absolute inset-0 bg-radial from-cyan-900/20 via-transparent to-transparent" />
        
        {/* Modern decorative architectural grid lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(56, 189, 248, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.15) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Floating Sparkle & Droplet Particles */}
      <ParticleSparkles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Tagline Badge with Glass Glare sweep */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/70 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.25)] text-xs sm:text-sm font-semibold text-cyan-300 mb-6 animate-glass-sweep">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span className="tracking-wide">SHINE ABOVE THE REST • TORONTO & GTA</span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span className="hidden sm:inline text-slate-300 font-normal">Residential • Commercial • High-Rise</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Crystal-Clear Windows.{' '}
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-linear-to-r from-sky-400 via-cyan-200 to-amber-300 animate-glass-sweep">
            Every Height. Every Time.
          </span>
        </h1>

        {/* Sub-headline with naturally woven SEO keywords */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Toronto’s premier <strong className="text-white font-semibold">window cleaning service</strong> for downtown high-rise condos, commercial storefronts, and luxury residential estates. Certified rope access technicians delivering streak-free brilliance.
        </p>

        {/* Google Rating Badge & Trust Pills */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
          {/* Google 5.0 Rating Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-amber-500/30 shadow-lg shadow-black/30">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="font-bold text-white text-base">5.0</span>
              <span className="text-slate-400">(6 Google Reviews)</span>
            </div>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/30">
              Verified
            </span>
          </div>

          {/* Quick Trust Pill */}
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-sky-500/20 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="font-medium">$5M Liability & WSIB Insured</span>
          </div>

          <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 backdrop-blur-md border border-sky-500/20 text-slate-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span className="font-medium">100% Streak-Free Guarantee</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          {/* Primary CTA */}
          <button
            onClick={onQuoteClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-slate-950 bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.45)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-95 group pulse-glow"
          >
            <Sparkles className="w-5 h-5 text-slate-950" />
            <span>Get a Free Quote Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Click-to-Call CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-slate-900/90 hover:bg-slate-800/90 border border-sky-400/40 hover:border-cyan-400 shadow-lg shadow-black/40 transition-all flex items-center justify-center gap-3 group active:scale-95"
          >
            <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Mini Trust Badges Row */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-sky-500/10 backdrop-blur-xs">
            <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Fully Insured</h4>
              <p className="text-[11px] text-slate-400">$5M Commercial + WSIB</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-sky-500/10 backdrop-blur-xs">
            <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Free Estimates</h4>
              <p className="text-[11px] text-slate-400">Same-Day Rapid Quote</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-sky-500/10 backdrop-blur-xs">
            <Award className="w-6 h-6 text-sky-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Streak-Free</h4>
              <p className="text-[11px] text-slate-400">100% Satisfaction Backed</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/40 border border-sky-500/10 backdrop-blur-xs">
            <Compass className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Toronto & GTA</h4>
              <p className="text-[11px] text-slate-400">19 Bathurst St Base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
