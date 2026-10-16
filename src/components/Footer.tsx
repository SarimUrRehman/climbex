import React from 'react';
import { Logo } from './Logo.tsx';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  ArrowUp,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050A14] text-slate-300 border-t border-slate-800/80 pt-16 pb-28 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              Toronto’s leading high-rise, commercial, and residential <strong className="text-slate-300">window cleaning service</strong>. Delivering crystal-clear, streak-free clarity with certified rope access technicians and deionized pure-water technology across the GTA.
            </p>

            {/* Quick credentials */}
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                $5,000,000 Commercial Liability & WSIB Registered
              </span>
              <span className="flex items-center gap-2 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400 shrink-0" />
                5.0★ Google Rating (6 Verified Customer Reviews)
              </span>
            </div>

            {/* Social Links (Placeholders for customization) */}
            <div className="pt-3">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-2">
                Connect With Us (Social Placeholders)
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#social-instagram"
                  aria-label="CLIMBEX on Instagram (placeholder)"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#social-facebook"
                  aria-label="CLIMBEX on Facebook (placeholder)"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#social-linkedin"
                  aria-label="CLIMBEX on LinkedIn (placeholder)"
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#google-business"
                  aria-label="CLIMBEX Google Business Profile (placeholder)"
                  className="px-3 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 flex items-center gap-1.5 text-xs font-semibold transition-colors"
                >
                  <span>Google 5.0★</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-cyan-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">Before & After</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-cyan-400 transition-colors">Google Reviews (5.0★)</a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-cyan-400 transition-colors">Toronto Service Area</a>
              </li>
              <li>
                <a href="#quote" className="hover:text-cyan-400 transition-colors">Get a Quote</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-cyan-300 transition-colors block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white mb-4">
              Contact & HQ
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-cyan-300 font-bold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">{BUSINESS_INFO.hours.weekdays}</p>
                  <p className="text-slate-400">{BUSINESS_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 CLIMBEX SERVICES. All rights reserved. Toronto & GTA Window Cleaning Specialists.</p>

          <div className="flex items-center gap-6">
            <span>Shine Above The Rest™</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
