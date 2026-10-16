import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle2, Shield, Clock } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../data/content.ts';

interface ServiceAreaMapProps {
  onQuoteClick: () => void;
}

export const ServiceAreaMap: React.FC<ServiceAreaMapProps> = ({ onQuoteClick }) => {
  // Google Maps embed URL for 19 Bathurst St, Toronto, ON M5V 0N2
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.172260655452!2d-79.40277252329312!3d43.64041795365516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7d1fb3313%3A0x6b7724a3501efee7!2s19%20Bathurst%20St%2C%20Toronto%2C%20ON%20M5V%200N2!5e0!3m2!1sen!2sca!4v1710000000000!5m2!1sen!2sca`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=19+Bathurst+St,+Toronto,+ON+M5V+0N2`;

  return (
    <section id="service-area" className="py-24 sm:py-32 relative bg-[#070D19] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Toronto & Greater Toronto Area
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Service Coverage Area
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Headquartered at 19 Bathurst St in Downtown Toronto, CLIMBEX rapidly mobilizes fully equipped mobile crews across Toronto, Peel, York, and Halton regions.
          </p>
        </div>

        {/* Map & Info Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-sky-500/20 shadow-2xl backdrop-blur-xl">
            <div>
              {/* Headquarters Box */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400">
                      Primary Operations Hub
                    </span>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      {BUSINESS_INFO.address}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Near Fort York & Bathurst • Downtown Toronto
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-700 flex items-center justify-between text-xs">
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Get Directions</span>
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-white hover:text-cyan-300 font-semibold flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Service Areas Tag Cloud */}
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Key Regions We Serve:
              </h4>

              <div className="flex flex-wrap gap-2 mb-6">
                {SERVICE_AREAS.map((area) => (
                  <span
                    key={area.name}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold flex items-center gap-1.5 ${
                      area.highlight
                        ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                        : 'bg-slate-800/80 border border-slate-700 text-slate-300'
                    }`}
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    {area.name}
                  </span>
                ))}
              </div>

              {/* Response Time Guarantees */}
              <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Same-Day & Next-Day Estimates</strong> across Toronto</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Fully compliant with City of Toronto sidewalk & rigging permits</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                onClick={onQuoteClick}
                className="w-full py-3.5 px-4 rounded-xl bg-linear-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-400/20 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer"
              >
                Check Availability For Your Address
              </button>
            </div>
          </div>

          {/* Right Embedded Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-sky-500/20 shadow-2xl bg-slate-900 min-h-[420px] relative">
            <iframe
              title="CLIMBEX SERVICES - 19 Bathurst St, Toronto Google Map"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '440px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-150 contrast-110"
            />

            {/* Overlaid Location Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto p-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <div className="text-left">
                <span className="text-[11px] font-bold text-white block">
                  CLIMBEX Dispatch Center
                </span>
                <span className="text-[10px] text-slate-300 block">
                  19 Bathurst St, Toronto, ON M5V 0N2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
