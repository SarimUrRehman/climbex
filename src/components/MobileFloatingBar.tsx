import React from 'react';
import { Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content.ts';

interface MobileFloatingBarProps {
  onQuoteClick: () => void;
}

export const MobileFloatingBar: React.FC<MobileFloatingBarProps> = ({ onQuoteClick }) => {
  return (
    <div
      role="region"
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-slate-950/95 backdrop-blur-lg border-t border-sky-500/25 shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom-6"
    >
      {/* Click-to-Call Primary Action */}
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className="flex-1 py-3 px-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/30 active:scale-95 transition-transform"
      >
        <div className="w-5 h-5 rounded-full bg-slate-950 text-cyan-400 flex items-center justify-center shrink-0">
          <Phone className="w-3 h-3" />
        </div>
        <div className="text-left leading-tight">
          <span className="block text-[9px] uppercase tracking-wider text-slate-900 font-bold">Call Dispatch</span>
          <span className="text-xs font-black text-white">{BUSINESS_INFO.phone}</span>
        </div>
      </a>

      {/* Free Quote Quick Trigger */}
      <button
        onClick={onQuoteClick}
        className="flex-1 py-3 px-3 rounded-xl bg-linear-to-r from-amber-400 to-yellow-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 active:scale-95 transition-transform cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
        <span>Get Free Quote</span>
      </button>
    </div>
  );
};
