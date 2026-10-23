import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export const ALL_BRANDS = [
  // Fila 1 (Casas Árabes de Alto Prestigio)
  {
    id: 'lattafa',
    name: 'LATTAFA',
    category: 'arabes',
    logoImage: '/assets/images/brands/lattafa.svg',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'max-h-16 max-w-[150px]'
  },
  {
    id: 'armaf',
    name: 'ARMAF',
    category: 'arabes',
    logoImage: '/assets/images/brands/armaf.avif',
    heightClass: 'max-h-16 max-w-[150px]'
  },
  {
    id: 'afnan',
    name: 'AFNAN',
    category: 'arabes',
    logoImage: '/assets/images/brands/afnan.avif',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'max-h-14 max-w-[160px]'
  },
  {
    id: 'al-haramain',
    name: 'AL HARAMAIN',
    category: 'arabes',
    logoImage: '/assets/images/brands/al_haramain.png',
    filterStyle: { filter: 'grayscale(100%) contrast(150%) brightness(0.2)' },
    heightClass: 'max-h-14 max-w-[160px]'
  },

  // Fila 2
  {
    id: 'bharara',
    name: 'BHARARA',
    category: 'arabes',
    logoImage: '/assets/images/brands/bharara.webp',
    heightClass: 'max-h-14 max-w-[140px]'
  },
  {
    id: 'maison-alhambra',
    name: 'MAISON ALHAMBRA',
    category: 'arabes',
    logoImage: '/assets/images/brands/maison_alhambra.svg',
    heightClass: 'max-h-18 max-w-[150px]'
  },
  {
    id: 'rasasi',
    name: 'RASASI',
    category: 'arabes',
    logoImage: '/assets/images/brands/rasasi.svg',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'max-h-14 max-w-[150px]'
  },
  {
    id: 'dior',
    name: 'DIOR',
    category: 'disenador',
    logoImage: '/assets/images/brands/dior.webp',
    heightClass: 'max-h-12 max-w-[150px]'
  },

  // Fila 3
  {
    id: 'french-avenue',
    name: 'FRENCH AVENUE',
    category: 'arabes',
    logoImage: '/assets/images/brands/french_avenue.svg',
    heightClass: 'max-h-12 max-w-[150px]'
  },
  {
    id: 'jean-paul-gaultier',
    name: 'JEAN PAUL GAULTIER',
    category: 'disenador',
    logoImage: '/assets/images/brands/jean_paul_gaultier.svg',
    heightClass: 'max-h-14 max-w-[160px]'
  },
  {
    id: 'chanel',
    name: 'CHANEL',
    category: 'disenador',
    logoImage: '/assets/images/brands/chanel.svg',
    heightClass: 'max-h-16 max-w-[150px]'
  },
  {
    id: 'yves-saint-laurent',
    name: 'YVES SAINT LAURENT',
    category: 'disenador',
    logoImage: '/assets/images/brands/ysl.png',
    heightClass: 'max-h-20 w-44 sm:w-52 scale-135 contrast-125'
  },

  // Fila 4
  {
    id: 'versace',
    name: 'VERSACE',
    category: 'disenador',
    logoImage: '/assets/images/brands/versace.svg',
    heightClass: 'max-h-18 max-w-[150px]'
  },
  {
    id: 'tom-ford',
    name: 'TOM FORD',
    category: 'disenador',
    logoImage: '/assets/images/brands/tom_ford.svg',
    heightClass: 'max-h-10 max-w-[160px]'
  },
  {
    id: 'giorgio-armani',
    name: 'GIORGIO ARMANI',
    category: 'disenador',
    logoImage: '/assets/images/brands/giorgio_armani.svg',
    heightClass: 'max-h-11 max-w-[175px]'
  },
  {
    id: 'xerjoff',
    name: 'XERJOFF',
    category: 'disenador',
    logoImage: '/assets/images/brands/xerjoff.png',
    filterStyle: { filter: 'brightness(0)' },
    heightClass: 'max-h-11 max-w-[165px]'
  }
];

export default function BrandsSection({ onSelectBrand }) {
  const [filter, setFilter] = useState('all'); // 'all', 'arabes', 'disenador'

  const displayedBrands = ALL_BRANDS.filter(b => {
    if (filter === 'all') return true;
    return b.category === filter;
  });

  const handleBrandClick = (brandName) => {
    onSelectBrand(brandName);
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nuestras-marcas" className="py-20 sm:py-24 bg-white border-t border-b border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Minimalist Editorial Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.35em] font-extrabold uppercase text-[#A58B4E] block mb-2">
            CASAS OFICIALES
          </span>
          <h2 className="font-arabic-title text-2xl sm:text-3xl lg:text-4xl font-light text-[#0E0E0E] tracking-[0.18em] uppercase">
            NUESTRAS MARCAS
          </h2>
          <div className="w-12 h-px bg-[#C9A961] mx-auto mt-4 mb-3" />
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Fragancias Árabes de Dubái & Casas Icónicas de Diseñador
          </p>

          {/* Minimalist Category Pills */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setFilter('all')}
              className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-[#0E0E0E] text-[#C9A961]'
                  : 'text-gray-400 hover:text-black hover:bg-gray-100'
              }`}
            >
              Todas las Casas ({ALL_BRANDS.length})
            </button>
            <button
              onClick={() => setFilter('arabes')}
              className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                filter === 'arabes'
                  ? 'bg-[#0E0E0E] text-[#C9A961]'
                  : 'text-gray-400 hover:text-black hover:bg-gray-100'
              }`}
            >
              <span>👑 Casas Árabes</span>
            </button>
            <button
              onClick={() => setFilter('disenador')}
              className={`text-xs font-bold px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                filter === 'disenador'
                  ? 'bg-[#0E0E0E] text-[#C9A961]'
                  : 'text-gray-400 hover:text-black hover:bg-gray-100'
              }`}
            >
              <span>✨ Casas Diseñador</span>
            </button>
          </div>
        </div>

        {/* Clean, Aesthetic, Pure Monochrome Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-8 sm:gap-x-12 items-center justify-items-center">
          {displayedBrands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleBrandClick(brand.name)}
              className="w-full flex items-center justify-center h-24 sm:h-28 p-2 cursor-pointer transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-108 focus:outline-none group"
              title={`Ver fragancias de ${brand.name}`}
            >
              <img
                src={brand.logoImage}
                alt={brand.name}
                style={brand.filterStyle || {}}
                className={`w-auto object-contain transition-transform duration-300 ${brand.heightClass || 'max-h-14'}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
