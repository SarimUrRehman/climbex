import React from 'react';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Clock,
  DollarSign,
  CheckCircle2,
  PhoneCall,
  Check
} from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/content.ts';

interface WhyChooseUsProps {
  onQuoteClick: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onQuoteClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-7 h-7 text-cyan-400" />;
      case 'Award':
        return <Award className="w-7 h-7 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-sky-400" />;
      case 'Clock':
        return <Clock className="w-7 h-7 text-emerald-400" />;
      case 'DollarSign':
        return <DollarSign className="w-7 h-7 text-cyan-300" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-7 h-7 text-teal-400" />;
      default:
        return <Sparkles className="w-7 h-7 text-cyan-400" />;
    }
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 relative bg-[#070D19] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-400/30 text-xs font-semibold text-sky-300 mb-4 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            The CLIMBEX Standard
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Toronto Chooses CLIMBEX SERVICES
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Window cleaning at extreme heights demands rigorous safety, certified craftsmanship, and relentless attention to detail. Here is what sets us apart.
          </p>
        </div>

        {/* 6 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-slate-900/60 border border-sky-500/15 hover:border-cyan-400/40 transition-all duration-300 glass-card-hover group"
            >
              {/* Corner Index */}
              <span className="absolute top-6 right-6 text-2xl font-black text-slate-800 group-hover:text-cyan-900/60 transition-colors font-['Outfit'] select-none">
                0{index + 1}
              </span>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center mb-6 shadow-inner group-hover:bg-sky-950/80 transition-colors">
                {getIcon(item.icon)}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reassurance Banner with direct phone */}
        <div className="mt-16 rounded-2xl p-8 bg-linear-to-r from-sky-950/80 via-slate-900/90 to-blue-950/80 border border-cyan-400/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Toronto Building Managers & Homeowners: Zero Risk Promise</h4>
              <p className="text-sm text-slate-300 mt-0.5">
                Full proof of insurance, WSIB clearance certificates, and equipment inspections supplied upfront with every quotation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onQuoteClick}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-amber-400/25 cursor-pointer"
            >
              Get Free Estimate
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 transition-all flex items-center justify-center"
              title="Call now"
            >
              <PhoneCall className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
