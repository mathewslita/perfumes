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
    logoImage: '/assets/images/brands/armaf.avif?v=3',
    heightClass: 'h-14 sm:h-17 w-auto object-contain max-w-[170px] scale-110 sm:scale-120'
  },
  {
    id: 'afnan',
    name: 'AFNAN',
    category: 'arabes',
    logoImage: '/assets/images/brands/afnan.avif?v=2',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[210px]'
  },
  {
    id: 'al-haramain',
    name: 'AL HARAMAIN',
    category: 'arabes',
    logoImage: '/assets/images/brands/al_haramain.png?v=2',
    filterStyle: { filter: 'grayscale(100%) contrast(150%) brightness(0.2)' },
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[210px]'
  },
  {
    id: 'bharara',
    name: 'BHARARA',
    category: 'arabes',
    logoImage: '/assets/images/brands/bharara.webp?v=2',
    heightClass: 'h-13 sm:h-16 w-auto object-contain max-w-[170px] scale-110 sm:scale-120 mix-blend-multiply'
  },
  {
    id: 'maison-alhambra',
    name: 'MAISON ALHAMBRA',
    category: 'arabes',
    logoImage: '/assets/images/brands/maison_alhambra.webp?v=2',
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
    logoImage: '/assets/images/brands/french_avenue.webp?v=2',
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[200px] mix-blend-multiply'
  },
  {
    id: 'dumont-paris',
    name: 'DUMONT PARIS',
    category: 'arabes',
    logoImage: '/assets/images/brands/dumont_paris.png',
    heightClass: 'h-13 sm:h-16 w-auto object-contain max-w-[170px] scale-115 sm:scale-125 mix-blend-multiply'
  },
  {
    id: 'rayhaan',
    name: 'RAYHAAN',
    category: 'arabes',
    logoImage: '/assets/images/brands/rayhaan.png',
    heightClass: 'h-9 sm:h-11 w-auto object-contain max-w-[190px] mix-blend-multiply'
  },

  // Casas Icónicas de Diseñador
  {
    id: 'halloween',
    name: 'HALLOWEEN',
    category: 'disenador',
    logoImage: '/assets/images/brands/halloween_delpozo.png',
    heightClass: 'h-12 sm:h-15 w-auto object-contain max-w-[180px] scale-115 sm:scale-125 mix-blend-multiply'
  },
  {
    id: 'dior',
    name: 'DIOR',
    category: 'disenador',
    logoImage: '/assets/images/brands/dior.webp?v=2',
    heightClass: 'h-9 sm:h-11 w-auto object-contain max-w-[180px] mix-blend-multiply'
  },
  {
    id: 'jean-paul-gaultier',
    name: 'JEAN PAUL GAULTIER',
    category: 'disenador',
    logoImage: '/assets/images/brands/jean_paul_gaultier.jpg?v=2',
    heightClass: 'h-9.5 sm:h-11.5 w-auto object-contain max-w-[180px] mix-blend-multiply'
  },
  {
    id: 'chanel',
    name: 'CHANEL',
    category: 'disenador',
    logoImage: '/assets/images/brands/chanel.svg?v=2',
    heightClass: 'h-11 sm:h-13.5 w-auto object-contain max-w-[170px]'
  },
  {
    id: 'yves-saint-laurent',
    name: 'YVES SAINT LAURENT',
    category: 'disenador',
    logoImage: '/assets/images/brands/ysl.png?v=2',
    heightClass: 'h-9 sm:h-11 w-auto object-contain max-w-[220px]'
  },
  {
    id: 'versace',
    name: 'VERSACE',
    category: 'disenador',
    logoImage: '/assets/images/brands/versace.svg?v=5',
    heightClass: 'h-14 sm:h-17 w-auto object-contain max-w-[170px] scale-110 sm:scale-120'
  },
  {
    id: 'tom-ford',
    name: 'TOM FORD',
    category: 'disenador',
    logoImage: '/assets/images/brands/tom_ford.jpg?v=2',
    heightClass: 'h-7.5 sm:h-9 w-auto object-contain max-w-[220px] mix-blend-multiply'
  },
  {
    id: 'giorgio-armani',
    name: 'GIORGIO ARMANI',
    category: 'disenador',
    logoImage: '/assets/images/brands/giorgio_armani.webp?v=2',
    heightClass: 'h-7.5 sm:h-9 w-auto object-contain max-w-[240px] mix-blend-multiply'
  },
  {
    id: 'xerjoff',
    name: 'XERJOFF',
    category: 'disenador',
    logoImage: '/assets/images/brands/xerjoff.webp?v=2',
    heightClass: 'h-8.5 sm:h-10.5 w-auto object-contain max-w-[200px]'
  }
];

export const ARABIC_BRANDS = ALL_BRANDS.filter(b => b.category === 'arabes');
export const DESIGNER_BRANDS = ALL_BRANDS.filter(b => b.category === 'disenador');

// Quadruplicate to guarantee smooth infinite seamless loop on any screen width
const MARQUEE_ITEMS = [...ALL_BRANDS, ...ALL_BRANDS, ...ALL_BRANDS, ...ALL_BRANDS];

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
        <span className="text-[10px] sm:text-[11px] tracking-[0.3em] font-extrabold uppercase text-[#A58B4E] block mb-2">
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
                className="flex items-center justify-center flex-shrink-0 px-8 sm:px-12 h-26 sm:h-30 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105 cursor-pointer focus:outline-none group select-none"
                title={`Ver fragancias de ${brand.name}`}
                aria-label={`Ver fragancias de ${brand.name}`}
              >
                <img
                  src={brand.logoImage}
                  alt={brand.name}
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
