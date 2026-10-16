import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showTagline = true,
  size = 'md',
  variant = 'light'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl tracking-wider',
    lg: 'text-3xl tracking-widest'
  };

  const subTextSizes = {
    sm: 'text-[9px] tracking-[0.25em]',
    md: 'text-[11px] tracking-[0.3em]',
    lg: 'text-xs tracking-[0.35em]'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_10px_rgba(56,189,248,0.4)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="climbexGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
            <linearGradient id="climbexGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" />
              <stop offset="100%" stopColor="#E0F2FE" />
            </linearGradient>
            <linearGradient id="goldStar" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE68A" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Hexagonal / Diamond Shield Frame */}
          <path
            d="M24 2L42 12V32L24 46L6 32V12L24 2Z"
            fill="#0A1526"
            stroke="url(#climbexGrad1)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Internal Skyscraper / Mountain Apex Facets */}
          <path
            d="M24 6L37 14V30L24 40L11 30V14L24 6Z"
            fill="#0F243E"
            stroke="#1E3A5F"
            strokeWidth="1.2"
          />

          {/* Ascending High-Rise Window Lines */}
          <path
            d="M24 7L34 29H14L24 7Z"
            fill="url(#climbexGrad1)"
            opacity="0.85"
          />

          {/* Center Dividing Glaze Line */}
          <line
            x1="24"
            y1="7"
            x2="24"
            y2="39"
            stroke="#BAE6FD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Window Cross Grids */}
          <path
            d="M17 22H31M19 16H29M15 28H33"
            stroke="#E0F2FE"
            strokeWidth="1.2"
            opacity="0.9"
          />

          {/* Apex Gleam / Sparkle Star */}
          <path
            d="M24 2L25.2 5.5L28.7 6.7L25.2 7.9L24 11.4L22.8 7.9L19.3 6.7L22.8 5.5L24 2Z"
            fill="url(#goldStar)"
            className="animate-pulse"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black font-['Outfit'] ${textSizes[size]} ${
              variant === 'light' ? 'text-white' : 'text-slate-900'
            }`}
          >
            CLIMBEX
          </span>
          <span className="text-cyan-400 font-extrabold text-[0.7em] uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
            Services
          </span>
        </div>

        {showTagline && (
          <span
            className={`font-semibold font-['Outfit'] uppercase text-cyan-300/80 ${subTextSizes[size]} mt-1 flex items-center gap-1`}
          >
            <span className="inline-block w-1 h-1 rounded-full bg-amber-400 animate-ping"></span>
            Shine Above The Rest
          </span>
        )}
      </div>
    </div>
  );
};
