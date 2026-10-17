import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ALL_BRANDS = [
  {
    id: 'lattafa',
    name: 'LATTAFA',
    tagline: 'El Corazón de Dubái • Creadores de Yara y Khamrah',
    origin: 'Dubái, EAU',
    badge: 'Más Vendida',
    logoImage: '/assets/images/brands/lattafa.png',
    accentColor: '#D4AF37'
  },
  {
    id: 'armaf',
    name: 'ARMAF',
    tagline: 'Línea Club de Nuit • Proyección y Estela Extrema',
    origin: 'Emiratos Árabes',
    badge: 'Favorito Viral',
    logoImage: '/assets/images/brands/armaf.png',
    accentColor: '#2E1065'
  },
  {
    id: 'afnan',
    name: 'AFNAN',
    tagline: 'Afnan 9 PM • Elegancia Niche y Seducción Nocturna',
    origin: 'Dubái, EAU',
    badge: 'Nicho Accesible',
    logoImage: '/assets/images/brands/afnan.png',
    accentColor: '#3B0764'
  },
  {
    id: 'al-haramain',
    name: 'AL HARAMAIN',
    tagline: 'Amber Oud Gold Edition • Extrait de Parfum Puro',
    origin: 'EAU • Fundada 1970',
    badge: 'Extrait de Parfum',
    logoImage: '/assets/images/brands/al_haramain.png',
    accentColor: '#B89228'
  },
  {
    id: 'bharara',
    name: 'BHARARA',
    tagline: 'Línea King & Double Sangre • Potencia Moderna',
    origin: 'Dubái • Miami',
    badge: 'Lujo Urbano',
    logoImage: '/assets/images/brands/bharara.png',
    accentColor: '#1F2937'
  },
  {
    id: 'maison-alhambra',
    name: 'MAISON ALHAMBRA',
    tagline: 'Sub-casa de Lattafa • Inspiraciones de Alta Costura',
    origin: 'Dubái, EAU',
    badge: 'Doble Sello',
    logoImage: '/assets/images/brands/maison_alhambra.png',
    accentColor: '#4B5563'
  },
  {
    id: 'rasasi',
    name: 'RASASI',
    tagline: 'Hawas & Shuhrah • Pioneros de la Perfumería Árabe',
    origin: 'Pioneros en Oriente',
    badge: 'Clásicos Reales',
    logoImage: '/assets/images/brands/rasasi.png',
    accentColor: '#1E1B4B'
  },
  {
    id: 'rayhaan',
    name: 'RAYHAAN',
    tagline: 'Ocean Rush & Pacific • Frescura Azul Magnética',
    origin: 'Eau de Parfum',
    badge: 'Tendencia',
    logoImage: '/assets/images/brands/rayhaan.png',
    accentColor: '#1E3A8A'
  },
  {
    id: 'french-avenue',
    name: 'FRENCH AVENUE',
    tagline: 'Vanguardia Parisina & Notas Orientales de Nicho',
    origin: 'Línea de Lujo',
    badge: 'Colección Privada',
    logoImage: '/assets/images/brands/french_avenue.png',
    accentColor: '#0F172A'
  },
  {
    id: 'dumont-paris',
    name: 'DUMONT PARIS',
    tagline: 'Nitro White & Red • Fórmulas de Larga Fijación',
    origin: 'París • Dubái',
    badge: 'Fórmula Pura',
    logoImage: '/assets/images/brands/dumont.png',
    accentColor: '#374151'
  },
  {
    id: 'nautica',
    name: 'NAUTICA',
    tagline: 'Voyage • El Clásico Acuático Limpio y Cítrico',
    origin: 'Clásicos de Diseñador',
    badge: 'Uso Diario',
    logoImage: '/assets/images/brands/nautica.png',
    accentColor: '#0284C7'
  },
  {
    id: 'jean-paul-gaultier',
    name: 'JEAN PAUL GAULTIER',
    tagline: 'Le Male & Ultra Male • Seducción y Vanguardia Francesa',
    origin: 'Alta Perfumería París',
    badge: 'Iconos Mundiales',
    logoImage: '/assets/images/brands/jpg.png',
    accentColor: '#18181B'
  }
];

export default function BrandsSection({ onSelectBrand }) {
  const handleBrandClick = (brandName) => {
    onSelectBrand(brandName);
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nuestras-marcas" className="py-20 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] border-t border-b border-gray-200/80 scroll-mt-24 relative overflow-hidden">
      
      {/* Decorative Luxury Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2E1065]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-[#2E1065] text-xs font-black px-4 py-1.5 rounded-full border border-purple-200/70 mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span className="uppercase tracking-widest text-[11px]">Casas Oficiales 100% Originales</span>
          </div>

          <h2 className="font-arabic-title text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight uppercase">
            NUESTRAS MARCAS DE PERFUMES
          </h2>
          
          <div className="flex items-center justify-center gap-2 my-4">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-24 bg-[#D4AF37]" />
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Descubre todas las casas de perfumes originales que <strong>Sultan Parfums</strong> tiene para ti. 
            Explora nuestro catálogo con los perfumes árabes más virales de Dubái y joyas de alta concentración. 
            <span className="text-[#2E1065] font-bold block mt-1">Haz clic en tu marca favorita para ver todas sus fragancias disponibles.</span>
          </p>
        </div>

        {/* 12 Brands Grid with Dedicated Logo Image Stages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ALL_BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleBrandClick(brand.name)}
              className="group text-left p-5 sm:p-6 rounded-3xl bg-white hover:bg-white border-2 border-gray-200/80 hover:border-[#D4AF37] shadow-soft-card hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden active:scale-98"
            >
              {/* Corner Badge */}
              <div className="w-full flex justify-between items-center mb-3">
                <span className="text-[9px] font-black tracking-widest uppercase bg-purple-50 text-[#2E1065] px-2.5 py-0.5 rounded-full border border-purple-200/60">
                  {brand.badge}
                </span>
                <span className="text-[9px] font-bold text-gray-400 uppercase">
                  {brand.origin.split('•')[0]}
                </span>
              </div>

              {/* DEDICATED CLEAN LOGO IMAGE STAGE (Espacio generoso para el logo) */}
              <div className="w-full h-28 sm:h-32 bg-[#FAF7F2]/80 group-hover:bg-[#FAF7F2] rounded-2xl border border-gray-100 flex items-center justify-center p-4 relative overflow-hidden transition-colors">
                
                {/* Visual Brand Vector Logo (Clean, High-Contrast Monochrome matching Luzents Reference) */}
                <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-108">
                  {brand.id === 'lattafa' && (
                    <div className="flex flex-col items-center">
                      <span className="font-arabic-title text-4xl sm:text-5xl font-black text-gray-950 leading-none">لطافة</span>
                      <span className="font-extrabold text-sm sm:text-base tracking-[0.25em] text-[#2E1065] mt-1">LATTAFA</span>
                    </div>
                  )}

                  {brand.id === 'armaf' && (
                    <div className="relative w-20 h-20 rounded-full border-[3px] border-dashed border-gray-950 flex items-center justify-center p-2 group-hover:border-[#D4AF37] transition-colors">
                      <span className="font-black text-sm tracking-widest text-gray-950">ARMAF</span>
                    </div>
                  )}

                  {brand.id === 'afnan' && (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-gray-950 mb-0.5">افنان</span>
                      <span className="font-serif text-xl font-black tracking-widest text-gray-950">AFNAN</span>
                      <span className="text-[9px] tracking-[0.3em] text-gray-500 uppercase -mt-0.5 font-bold">PERFUMES</span>
                    </div>
                  )}

                  {brand.id === 'al-haramain' && (
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-gray-950 flex items-center justify-center mb-1">
                        <span className="text-base">🕌</span>
                      </div>
                      <span className="font-black text-xs sm:text-sm tracking-wider text-gray-950">AL HARAMAIN</span>
                      <span className="text-[8px] text-gray-500 uppercase tracking-widest font-bold">SINCE 1970</span>
                    </div>
                  )}

                  {brand.id === 'bharara' && (
                    <div className="flex flex-col items-center">
                      <span className="text-4xl sm:text-5xl font-black font-mono text-gray-950 leading-none">3</span>
                      <span className="font-black text-xs sm:text-sm tracking-[0.35em] text-gray-950 mt-1">BHARARA</span>
                    </div>
                  )}

                  {brand.id === 'maison-alhambra' && (
                    <div className="flex flex-col items-center">
                      <span className="text-3xl mb-0.5">🦌</span>
                      <span className="font-serif text-[10px] tracking-widest text-gray-600 font-bold">MAISON</span>
                      <span className="font-serif text-xs sm:text-sm font-black tracking-wider text-gray-950">ALHAMBRA</span>
                    </div>
                  )}

                  {brand.id === 'rasasi' && (
                    <div className="flex flex-col items-center">
                      <span className="font-serif italic text-3xl sm:text-4xl font-bold text-gray-950 tracking-wide">Rasasi</span>
                      <span className="text-[8px] tracking-widest text-gray-500 uppercase font-bold mt-0.5">PARFUMS</span>
                    </div>
                  )}

                  {brand.id === 'rayhaan' && (
                    <div className="flex flex-col items-center">
                      <span className="font-serif text-xl sm:text-2xl font-black tracking-widest text-gray-950">RAYHAAN</span>
                      <span className="text-[8px] tracking-[0.25em] text-gray-500 uppercase font-bold mt-0.5">EAU DE PARFUM</span>
                    </div>
                  )}

                  {brand.id === 'french-avenue' && (
                    <div className="flex flex-col items-center leading-tight">
                      <span className="font-sans font-black text-base sm:text-lg tracking-[0.35em] text-gray-950">FRENCH</span>
                      <span className="font-sans font-black text-base sm:text-lg tracking-[0.35em] text-gray-950">AVENUE</span>
                    </div>
                  )}

                  {brand.id === 'dumont-paris' && (
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 border-2 border-gray-950 rotate-45 flex items-center justify-center mb-1">
                        <span className="-rotate-45 text-[10px] font-black">D</span>
                      </div>
                      <span className="font-serif text-xs sm:text-sm font-black tracking-widest text-gray-950">DUMONT</span>
                      <span className="text-[8px] tracking-widest text-gray-500 uppercase font-bold">PARIS</span>
                    </div>
                  )}

                  {brand.id === 'nautica' && (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-0.5">⛵</span>
                      <span className="font-sans font-black text-xs sm:text-sm tracking-[0.3em] text-gray-950">NAUTICA</span>
                    </div>
                  )}

                  {brand.id === 'jean-paul-gaultier' && (
                    <div className="flex flex-col items-center leading-none">
                      <span className="font-serif text-xs sm:text-sm tracking-wider text-gray-800">Jean Paul</span>
                      <span className="font-sans font-black text-sm sm:text-base uppercase tracking-tight text-gray-950 mt-0.5">GAULTIER</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Tagline & Action Button */}
              <div className="mt-4 w-full pt-3 border-t border-gray-100 flex flex-col justify-between flex-grow">
                <p className="text-[11px] font-medium text-gray-600 line-clamp-2 min-h-[32px] leading-snug">
                  {brand.tagline}
                </p>
                
                <div className="mt-3 w-full bg-purple-50/70 group-hover:bg-[#2E1065] text-[#2E1065] group-hover:text-[#D4AF37] font-bold text-xs py-2 px-3 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-sm">
                  <span>Ver Colección</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-white border border-[#D4AF37]/40 shadow-soft-card flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-black text-gray-900 block text-sm">Garantía de Origen y Sellos Intactos</span>
              <span className="text-gray-500">Cada frasco incluye celofán original de fábrica, sello holográfico y Batch Code verificable.</span>
            </div>
          </div>

          <a
            href="https://wa.me/593985911895?text=Hola%20Sultan%20Parfums,%20deseo%20consultar%20por%20un%20perfume%20específico%20que%20no%20encuentro%20en%20el%20catálogo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2E1065] hover:bg-[#3B0764] text-[#D4AF37] font-bold text-xs py-2.5 px-5 rounded-full shadow-md transition-all whitespace-nowrap flex items-center gap-1.5 active:scale-95 flex-shrink-0"
          >
            <span>¿Buscas otra marca o dupe? Pregúntanos por WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
