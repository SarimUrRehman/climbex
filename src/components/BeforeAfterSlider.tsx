import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertCircle, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop", // Grimy, dusty window interior view
  afterImage = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop", // Pristine crystal clear city view through spotless glass
  beforeAlt = "Dirty window with urban dust, hard water spots, and grime",
  afterAlt = "Crystal clear window cleaned by CLIMBEX SERVICES with streak-free pure water finish",
  beforeLabel = "BEFORE: Smog, Mineral Scale & Haze",
  afterLabel = "AFTER: 100% Crystal Pure Shine"
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Interactive Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-16/10 sm:aspect-16/9 rounded-2xl overflow-hidden shadow-2xl border border-sky-500/30 select-none bg-slate-900 cursor-ew-resize group"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER Image (Background - Clean) */}
        <img
          src={afterImage}
          alt={afterAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle glass glare sweep on clean side */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-sky-300/10 to-transparent pointer-events-none" />

        {/* BEFORE Image (Clipped overlay - Dirty) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeAlt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              filter: 'contrast(0.9) brightness(0.85) sepia(0.2)'
            }}
          />
          {/* Grime & Water Spots Simulator overlay */}
          <div
            className="absolute inset-0 bg-slate-950/40 mix-blend-multiply pointer-events-none backdrop-contrast-75"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '16px 16px'
            }}
          />
          {/* Foggy wash gradient */}
          <div className="absolute inset-0 bg-amber-950/20 pointer-events-none" />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(56,189,248,0.9)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-linear-to-b from-sky-400 to-blue-600 border-2 border-white shadow-xl flex items-center justify-center text-white cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
            <MoveHorizontal className="w-5 h-5 drop-shadow" />
          </div>
        </div>

        {/* Before Pill Label */}
        <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-red-500/30 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-lg">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>{beforeLabel}</span>
        </div>

        {/* After Pill Label */}
        <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-cyan-500/40 text-xs font-semibold text-cyan-300 flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>{afterLabel}</span>
        </div>

        {/* Instruction Badge at Bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-sky-400/20 text-xs text-slate-300 flex items-center gap-2 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
          <MoveHorizontal className="w-3.5 h-3.5 text-sky-400" />
          <span>Drag slider or click anywhere to compare</span>
        </div>

        {/* Hidden accessible range input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          aria-label="Drag slider to compare before and after window cleaning results"
          className="sr-only"
        />
      </div>

      {/* Feature Highlights beneath slider */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-sky-500/10 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Removes stubborn hard water spots & mineral deposits</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-sky-500/10 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Zero soap residue = windows stay clean 2x longer</span>
        </div>
        <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-sky-500/10 text-xs text-slate-300">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Safe for tinted, low-E, and architectural glass</span>
        </div>
      </div>
    </div>
  );
};
