import React, { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider.tsx';
import { Sparkles, Eye, X, ZoomIn } from 'lucide-react';

interface GalleryItem {
  id: string;
  category: 'all' | 'high-rise' | 'residential' | 'commercial';
  title: string;
  location: string;
  image: string;
  alt: string;
  tag: string;
}

export const BeforeAfterGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'high-rise' | 'residential' | 'commercial'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      category: 'high-rise',
      title: 'Waterfront Condo Tower Abseil Wash',
      location: 'Harbourfront, Toronto',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?q=80&w=1000&auto=format&fit=crop',
      alt: 'Certified high-rise window cleaner suspended on ropes cleaning skyscraper exterior glass overlooking city skyline',
      tag: '42nd Floor Abseil'
    },
    {
      id: 'g-2',
      category: 'commercial',
      title: 'Financial District Corporate Glass Atrium',
      location: 'Bay & King, Downtown Toronto',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      alt: 'Gleaming corporate skyscraper glass curtain wall reflecting blue Toronto sky after professional window cleaning',
      tag: 'Commercial Atrium'
    },
    {
      id: 'g-3',
      category: 'residential',
      title: 'Modern Architecture Floor-to-Ceiling Windows',
      location: 'The Bridle Path / Yorkville, Toronto',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop',
      alt: 'Luxury residential living room with crystal clear panoramic glass patio doors and pristine windows',
      tag: 'Luxury Residence'
    },
    {
      id: 'g-4',
      category: 'high-rise',
      title: 'Condo Balcony Glass & Railing Polishing',
      location: 'CityPlace, Toronto',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000&auto=format&fit=crop',
      alt: 'High-rise condo balcony with sparkling clean tempered glass railings showing unobstructed downtown view',
      tag: 'Condo Balconies'
    },
    {
      id: 'g-5',
      category: 'commercial',
      title: 'Luxury Retail Storefront Glazing',
      location: 'Bloor-Yorkville Prestige Mile',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop',
      alt: 'Spotless commercial boutique retail display windows with streak-free clarity',
      tag: 'Storefront Retail'
    },
    {
      id: 'g-6',
      category: 'residential',
      title: 'Lakeside Estate Glass Sunroom & Skylights',
      location: 'Oakville Waterfront',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
      alt: 'Sparkling estate home windows and glass conservatory overlooking manicured grounds',
      tag: 'Sunroom & Skylights'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 sm:py-32 relative bg-[#070D19] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-400/30 text-xs font-semibold text-sky-300 mb-4 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Visual Proof of Perfection
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Before & After Showcase
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See the transformative difference pure-water technology and certified rope access technicians make on Toronto glass.
          </p>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="mb-20">
          <BeforeAfterSlider />
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'high-rise', label: 'High-Rise & Condos' },
            { id: 'commercial', label: 'Commercial & Retail' },
            { id: 'residential', label: 'Residential Homes' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-900 border border-sky-500/15 cursor-pointer shadow-xl glass-card-hover"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Glass overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Corner Tag */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-400/30 text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                {item.tag}
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700 flex items-center justify-center text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-cyan-400" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                  <span>{item.location}</span>
                </span>
                <h4 className="text-base font-bold text-white mt-1 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 border border-slate-700 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="w-full max-h-[75vh] object-cover"
            />

            <div className="p-6 bg-slate-900">
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-xs font-bold text-cyan-300 uppercase">
                {selectedImage.tag}
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Location: {selectedImage.location}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                {selectedImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
