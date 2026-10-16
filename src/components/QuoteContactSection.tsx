import React, { useState, useEffect } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building,
  User,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content.ts';

interface QuoteContactSectionProps {
  preselectedService?: string;
}

export const QuoteContactSection: React.FC<QuoteContactSectionProps> = ({
  preselectedService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: preselectedService || 'Residential Window Cleaning',
    propertyType: 'Detached Single-Family Home',
    stories: '2 Stories',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  // Sync if preselectedService changes
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous, reliable quote submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  // Estimate guide based on inputs
  const getEstimatedRange = () => {
    if (formData.serviceType.includes('High-Rise') || formData.propertyType.includes('High-Rise')) {
      return 'Custom High-Rise Assessment';
    }
    if (formData.serviceType.includes('Commercial') || formData.propertyType.includes('Commercial')) {
      return '$149 – $349 / visit';
    }
    if (formData.serviceType.includes('Gutter')) {
      return '$160 – $240';
    }
    if (formData.serviceType.includes('Pressure')) {
      return '$199 – $380';
    }
    return '$189 – $295 (Est.)';
  };

  return (
    <section id="quote" className="py-24 sm:py-32 relative bg-[#070D19] border-t border-slate-800">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/30 text-xs font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Fast 60-Minute Response
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Request Your Free Quote
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Tell us about your property for a prompt, accurate, and completely transparent written quote. No obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-3xl p-6 sm:p-10 border border-sky-500/25 shadow-2xl backdrop-blur-xl">
            {isSuccess ? (
              <div className="text-center py-10 px-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Quote Request Received!
                </h3>
                <p className="mt-3 text-slate-300 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name}</span>. Our dispatch team is reviewing your <strong className="text-white">{formData.serviceType}</strong> inquiry for <strong className="text-white">{formData.propertyType}</strong>.
                </p>
                <div className="mt-6 p-4 rounded-xl bg-slate-800/80 border border-slate-700 max-w-md mx-auto text-left text-xs text-slate-300 space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Response Window:</span>
                    <span className="text-cyan-400 font-bold">Within 60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Confirmation Sent To:</span>
                    <span className="text-white font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Direct Dispatch Hotline:</span>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      serviceType: 'Residential Window Cleaning',
                      propertyType: 'Detached Single-Family Home',
                      stories: '2 Stories',
                      preferredDate: '',
                      message: ''
                    });
                  }}
                  className="mt-8 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                >
                  Submit Another Quote Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Real-time estimate indicator pill */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/80 border border-sky-500/20 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Estimated Starting Range:</span>
                  </div>
                  <span className="font-extrabold text-sm text-cyan-300 bg-sky-950 px-2.5 py-1 rounded-md border border-cyan-500/30">
                    {getEstimatedRange()}
                  </span>
                </div>

                {/* Row 1: Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Robert Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                          errors.name ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. (647) 510-0882"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Email & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="robert@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-800/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors ${
                          errors.email ? 'border-red-500' : 'border-slate-700'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Preferred Date (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Service Type & Property Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Requested
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Multi-Property">Custom Multi-Property Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Property Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="Detached Single-Family Home">Detached Single-Family Home</option>
                        <option value="Townhouse / Semi-Detached">Townhouse / Semi-Detached</option>
                        <option value="High-Rise Condominium / Tower">High-Rise Condominium / Tower</option>
                        <option value="Commercial Storefront / Plaza">Commercial Storefront / Plaza</option>
                        <option value="Office Low-Rise / Corporate">Office Low-Rise / Corporate</option>
                        <option value="Post-Construction Site">Post-Construction Site</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Row 4: Stories / Scope */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Building Stories / Height
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['1 Story', '2 Stories', '3+ Stories', 'High-Rise (4+ Stories)'].map((story) => (
                      <button
                        type="button"
                        key={story}
                        onClick={() => setFormData({ ...formData, stories: story })}
                        className={`py-2 px-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          formData.stories === story
                            ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md'
                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                        }`}
                      >
                        {story}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message / Special Instructions */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Additional Details or Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Interior & exterior required, skylights on 3rd floor, gated backyard access..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-slate-950 font-extrabold text-base bg-linear-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-98"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Calculating & Dispatching...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send My Free Quote Request</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 No obligation. Your privacy is protected. We will never share your personal information.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Business Hours Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="p-8 rounded-3xl bg-slate-900/80 border border-sky-500/20 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span>Direct Contact Details</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Immediate Dispatch & Quotes</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="block text-xl font-black text-white hover:text-cyan-300 transition-colors mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-emerald-400">● Open for calls now</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">General & Commercial Inquiries</span>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="block text-base font-bold text-white hover:text-cyan-300 transition-colors mt-0.5"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                    <span className="text-xs text-slate-400">Fast digital replies</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold">Toronto Office</span>
                    <p className="text-base font-bold text-white mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-xs text-slate-400">Serving all of Toronto & the GTA</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Business Operating Hours:</span>
                </div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Monday – Saturday:</span>
                    <span className="font-semibold text-white">7:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="font-semibold text-white">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Emergency & Commercial High-Rise:</span>
                    <span className="font-semibold text-cyan-400">24/7 Response Available</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Trust Guarantee Callout */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white block font-semibold mb-0.5">The Climbex 100% Streak-Free Guarantee</strong>
                If you are not delighted with any window or glass panel, notify us within 48 hours and we will return to re-clean it free of charge.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
