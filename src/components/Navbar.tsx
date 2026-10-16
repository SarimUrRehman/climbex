import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO } from '../data/content.ts';

interface NavbarProps {
  onQuoteClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Before & After', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Service Area', href: '#service-area' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuoteClickInternal = () => {
    setMobileMenuOpen(false);
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      const quoteEl = document.querySelector('#quote');
      if (quoteEl) {
        quoteEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#081120]/90 backdrop-blur-md border-b border-sky-500/20 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      {/* Top micro-bar for quick reassurance */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-sky-400/10 pb-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center text-xs text-slate-300">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                $5M Insured & WSIB Registered High-Rise Specialists
              </span>
              <span className="text-slate-400">Serving Toronto & Greater Toronto Area</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-amber-400 font-semibold">
                ★ 5.0 Google Rating (6 Reviews)
              </span>
              <span className="text-slate-500">|</span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-white hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-cyan-400" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            aria-label="CLIMBEX SERVICES - Home"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-sky-500/15" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-200 hover:text-cyan-400 transition-colors rounded-full hover:bg-sky-500/10"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Phone link */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-all group"
              title="Call CLIMBEX SERVICES now"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <span className="block text-[10px] text-slate-400 leading-tight">Fast Dispatch</span>
                <span className="font-bold text-slate-100">{BUSINESS_INFO.phone}</span>
              </div>
            </a>

            {/* CTA Button */}
            <button
              onClick={handleQuoteClickInternal}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_28px_rgba(245,158,11,0.6)] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-slate-950 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              aria-label="Call CLIMBEX SERVICES"
              className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 active:scale-95"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-slate-200 hover:text-white"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 bg-[#0A1526]/98 backdrop-blur-xl border-b border-sky-500/20 shadow-2xl transition-all animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-cyan-300 hover:bg-sky-500/10 active:bg-sky-500/20 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-slate-500 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-100 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call +1 647-510-0882</span>
            </a>

            <button
              onClick={handleQuoteClickInternal}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-linear-to-r from-amber-400 to-yellow-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-400/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Quote Today</span>
            </button>
          </div>

          <div className="mt-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
            <span className="text-amber-400">★ 5.0 Google Rating</span>
            <span>•</span>
            <span>19 Bathurst St, Toronto</span>
          </div>
        </div>
      )}
    </header>
  );
};
