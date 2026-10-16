import React, { useMemo } from 'react';

export const ParticleSparkles: React.FC = () => {
  // Generate a fixed array of subtle sparkle coordinates
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: (i * 17 + 7) % 95 + 2,
      y: (i * 23 + 11) % 90 + 5,
      size: (i % 3) + 2,
      duration: 4 + (i % 5) * 1.5,
      delay: (i % 4) * 0.8,
      type: i % 4 === 0 ? 'star' : i % 3 === 0 ? 'droplet' : 'dot'
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-slow transition-opacity"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        >
          {p.type === 'star' ? (
            <svg
              className="text-cyan-300 opacity-60 animate-pulse"
              width={p.size * 5}
              height={p.size * 5}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
            </svg>
          ) : p.type === 'droplet' ? (
            <div
              className="rounded-full bg-linear-to-b from-sky-300/40 to-cyan-400/20 backdrop-blur-xs border border-sky-200/30 shadow-[0_0_8px_rgba(56,189,248,0.4)]"
              style={{
                width: `${p.size * 3}px`,
                height: `${p.size * 4}px`,
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
              }}
            />
          ) : (
            <div
              className="rounded-full bg-cyan-400/50 shadow-[0_0_6px_rgba(6,182,212,0.8)]"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
