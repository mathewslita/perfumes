import React from 'react';

export const ALL_BRANDS = [
  // Casas Árabes de Alto Prestigio
  {
    id: 'lattafa',
    name: 'LATTAFA',
    category: 'arabes',
    logoImage: '/assets/images/brands/lattafa.svg?v=3',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'h-14 sm:h-17 w-auto object-contain max-w-[170px] scale-110 sm:scale-120'
  },
  {
    id: 'armaf',
    name: 'ARMAF',
    category: 'arabes',
    logoImage: '/assets/images/brands/armaf.webp?v=5',
    heightClass: 'h-14 sm:h-17 w-auto object-contain max-w-[170px] scale-110 sm:scale-120'
  },
  {
    id: 'afnan',
    name: 'AFNAN',
    category: 'arabes',
    logoImage: '/assets/images/brands/afnan.webp?v=5',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[210px]'
  },
  {
    id: 'al-haramain',
    name: 'AL HARAMAIN',
    category: 'arabes',
    logoImage: '/assets/images/brands/al_haramain.webp?v=5',
    filterStyle: { filter: 'grayscale(100%) contrast(150%) brightness(0.2)' },
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[210px]'
  },
  {
    id: 'bharara',
    name: 'BHARARA',
    category: 'arabes',
    logoImage: '/assets/images/brands/bharara.webp?v=5',
    heightClass: 'h-13 sm:h-16 w-auto object-contain max-w-[170px] scale-110 sm:scale-120 mix-blend-multiply'
  },
  {
    id: 'maison-alhambra',
    name: 'MAISON ALHAMBRA',
    category: 'arabes',
    logoImage: '/assets/images/brands/maison_alhambra.webp?v=5',
    heightClass: 'h-13 sm:h-16 w-auto object-contain max-w-[170px] scale-115 sm:scale-125 mix-blend-multiply'
  },
  {
    id: 'rasasi',
    name: 'RASASI',
    category: 'arabes',
    logoImage: '/assets/images/brands/rasasi.svg?v=2',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[200px]'
  },
  {
    id: 'french-avenue',
    name: 'FRENCH AVENUE',
    category: 'arabes',
    logoImage: '/assets/images/brands/french_avenue.webp?v=5',
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[200px] mix-blend-multiply'
  },
  {
    id: 'dumont-paris',
    name: 'DUMONT PARIS',
    category: 'arabes',
    logoImage: '/assets/images/brands/dumont_paris.webp?v=5',
    heightClass: 'h-13 sm:h-16 w-auto object-contain max-w-[170px] scale-115 sm:scale-125 mix-blend-multiply'
  },
  {
    id: 'rayhaan',
    name: 'RAYHAAN',
    category: 'arabes',
    logoImage: '/assets/images/brands/rayhaan.webp?v=5',
    heightClass: 'h-9 sm:h-11 w-auto object-contain max-w-[190px] mix-blend-multiply'
  },

  // Casa Icónica de Diseñador en Catálogo
  {
    id: 'halloween',
    name: 'HALLOWEEN',
    category: 'disenador',
    logoImage: '/assets/images/brands/halloween_delpozo.webp?v=5',
    heightClass: 'h-12 sm:h-15 w-auto object-contain max-w-[180px] scale-115 sm:scale-125 mix-blend-multiply'
  }
];

export const ARABIC_BRANDS = ALL_BRANDS.filter(b => b.category === 'arabes');
export const DESIGNER_BRANDS = ALL_BRANDS.filter(b => b.category === 'disenador');

// Duplicate 2x to match translate3d(-50%, 0, 0) seamless loop with minimal DOM nodes
const MARQUEE_ITEMS = [...ALL_BRANDS, ...ALL_BRANDS];

export default function BrandsSection({ onSelectBrand }) {
  const handleBrandClick = (brandName) => {
    if (onSelectBrand) {
      onSelectBrand(brandName);
    }
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="nuestras-marcas" 
      className="py-12 sm:py-16 bg-white border-t border-b border-[#C9A961]/20 scroll-mt-20 overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 text-center">
        <span className="text-[10px] sm:text-[11px] tracking-[0.3em] font-extrabold uppercase text-[#755B1E] block mb-2">
          CASAS OFICIALES
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E0E0E] tracking-[0.16em] uppercase">
          MARCAS CON LAS QUE TRABAJAMOS
        </h2>
        <div className="w-12 h-px bg-[#C9A961] mx-auto mt-3.5 mb-2.5" />
        <p className="text-xs text-stone-600 uppercase tracking-widest font-semibold">
          Fragancias Árabes de Dubái & Casas Icónicas de Diseñador
        </p>
      </div>

      {/* Cinta Automática Continua (Infinite Logo Ribbon) */}
      <div className="relative w-full overflow-hidden py-4 sm:py-6">
        {/* Left & Right Smooth Vignette Fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="overflow-hidden mask-marquee-edges">
          <div className="animate-marquee-left flex items-center" style={{ willChange: 'transform' }}>
            {MARQUEE_ITEMS.map((brand, idx) => (
              <button
                key={`${brand.id}-${idx}`}
                type="button"
                onClick={() => handleBrandClick(brand.name)}
                tabIndex={idx >= ALL_BRANDS.length ? -1 : undefined}
                aria-hidden={idx >= ALL_BRANDS.length ? 'true' : undefined}
                className="flex items-center justify-center flex-shrink-0 px-8 sm:px-12 h-26 sm:h-30 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer focus:outline-none group select-none"
                title={`Ver fragancias de ${brand.name}`}
                aria-label={idx >= ALL_BRANDS.length ? undefined : `Ver fragancias de ${brand.name}`}
              >
                <img
                  src={brand.logoImage}
                  alt={idx >= ALL_BRANDS.length ? '' : brand.name}
                  width="180"
                  height="64"
                  decoding="async"
                  style={brand.filterStyle || {}}
                  className={`transition-transform duration-300 ${brand.heightClass || 'h-12'}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
