import React from 'react';
import {
  Home,
  Building2,
  Maximize2,
  Sparkles,
  Sliders,
  Hammer,
  Droplets,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content.ts';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-sky-400" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'Maximize2':
        return <Maximize2 className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-300" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-indigo-400" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-orange-400" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-blue-400" />;
      case 'Flame':
        return <Zap className="w-6 h-6 text-teal-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#0B1528] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Specialized Glass & Exterior Solutions
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Window Cleaning Services in Toronto
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From single-family residential homes to 60-storey waterfront condominium towers, CLIMBEX delivers pristine, streak-free clarity across the Greater Toronto Area.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="group relative rounded-2xl p-6 bg-slate-900/70 hover:bg-slate-900/90 border border-sky-500/15 hover:border-cyan-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between glass-card-hover"
            >
              {/* Badge if present */}
              {service.badge && (
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {service.badge}
                </div>
              )}

              <div>
                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-sky-950/80 transition-all duration-300 shadow-inner">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* 1-2 line description */}
                <p className="text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Micro highlight point */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Pure Water Finish
                  </span>
                  <span className="text-cyan-400 font-semibold">{service.typicalEstimate}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 group/btn border border-slate-700 hover:border-cyan-400 cursor-pointer"
                >
                  <span>Select & Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/50 border border-sky-400/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white">Need a custom multi-property package or condo board tender?</h4>
            <p className="text-xs text-slate-400 mt-1">We provide commercial walkthroughs, rigging assessments, and formal proposal documentation.</p>
          </div>
          <button
            onClick={() => onSelectService('Custom Multi-Property')}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shrink-0 cursor-pointer shadow-lg shadow-cyan-500/20"
          >
            Request Commercial Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
};
