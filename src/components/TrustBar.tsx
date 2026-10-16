import React from 'react';
import { Star, Shield, Award, Building2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter.tsx';
import { TRUST_STATS } from '../data/content.ts';

export const TrustBar: React.FC = () => {
  const statIcons = [
    <Star key="star" className="w-6 h-6 text-amber-400" />,
    <Award key="award" className="w-6 h-6 text-cyan-400" />,
    <Shield key="shield" className="w-6 h-6 text-sky-400" />,
    <Building2 key="bldg" className="w-6 h-6 text-indigo-400" />
  ];

  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="rounded-2xl p-6 sm:p-8 bg-slate-900/90 backdrop-blur-xl border border-sky-500/25 shadow-2xl shadow-sky-950/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
          {TRUST_STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                index > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                  {statIcons[index]}
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white font-['Outfit']">
                  <AnimatedCounter
                    end={stat.value}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    suffix={stat.suffix}
                  />
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-200 mt-1">
                {stat.label}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
