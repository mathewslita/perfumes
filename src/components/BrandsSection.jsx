import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ALL_BRANDS = [
  {
    id: 'lattafa',
    name: 'LATTAFA',
    tagline: 'El Corazón de Dubái',
    origin: 'Dubái, EAU',
    badge: 'Más Vendida',
    logoType: 'calligraphy',
    accentColor: '#D4AF37'
  },
  {
    id: 'armaf',
    name: 'ARMAF',
    tagline: 'Alta Gama & Proyección Bestia',
    origin: 'Emiratos Árabes',
    badge: 'Favorito Viral',
    logoType: 'circle-badge',
    accentColor: '#2E1065'
  },
  {
    id: 'afnan',
    name: 'AFNAN',
    tagline: 'Perfección Niche & Elegancia',
    origin: 'Dubái, EAU',
    badge: 'Nicho Accesible',
    logoType: 'emblem',
    accentColor: '#3B0764'
  },
  {
    id: 'al-haramain',
    name: 'AL HARAMAIN',
    tagline: 'Tradición y Lujo Desde 1970',
    origin: 'EAU • Fundada 1970',
    badge: 'Extrait de Parfum',
    logoType: 'tower',
    accentColor: '#B89228'
  },
  {
    id: 'bharara',
    name: 'BHARARA',
    tagline: 'Potencia & Sofisticación Moderna',
    origin: 'Dubái • Miami',
    badge: 'Lujo Urbano',
    logoType: 'monogram-3',
    accentColor: '#1F2937'
  },
  {
    id: 'maison-alhambra',
    name: 'MAISON ALHAMBRA',
    tagline: 'Inspiraciones de Alta Costura',
    origin: 'Dubái, EAU',
    badge: 'Doble Sello',
    logoType: 'deer',
    accentColor: '#4B5563'
  },
  {
    id: 'rasasi',
    name: 'RASASI',
    tagline: 'Herencia Oriental Auténtica',
    origin: 'Pioneros en Oriente',
    badge: 'Clásicos Reales',
    logoType: 'script',
    accentColor: '#1E1B4B'
  },
  {
    id: 'rayhaan',
    name: 'RAYHAAN',
    tagline: 'Frescura Magnética & Estela Azul',
    origin: 'Eau de Parfum',
    badge: 'Tendencia',
    logoType: 'clean-serif',
    accentColor: '#1E3A8A'
  },
  {
    id: 'french-avenue',
    name: 'FRENCH AVENUE',
    tagline: 'Vanguardia Parisina & Alma Árabe',
    origin: 'Línea de Lujo',
    badge: 'Colección Privada',
    logoType: 'geometric',
    accentColor: '#0F172A'
  },
  {
    id: 'dumont-paris',
    name: 'DUMONT PARIS',
    tagline: 'Aromas Intensos de Larga Fijación',
    origin: 'París • Dubái',
    badge: 'Fórmula Pura',
    logoType: 'shield',
    accentColor: '#374151'
  },
  {
    id: 'nautica',
    name: 'NAUTICA',
    tagline: 'Iconos Cítricos & Acuáticos',
    origin: 'Clásicos de Diseñador',
    badge: 'Uso Diario',
    logoType: 'sail',
    accentColor: '#0284C7'
  },
  {
    id: 'jean-paul-gaultier',
    name: 'JEAN PAUL GAULTIER',
    tagline: 'Seducción y Vanguardia Francesa',
    origin: 'Alta Perfumería París',
    badge: 'Iconos Mundiales',
    logoType: 'stencil',
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
    <section id="nuestras-marcas" className="py-16 sm:py-20 bg-white border-t border-b border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Identical structure to Luzents reference) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-purple-50 text-[#2E1065] text-xs font-bold px-3.5 py-1 rounded-full border border-purple-200/60 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Casas Oficiales 100% Originales</span>
          </div>

          <h2 className="font-arabic-title text-2xl sm:text-4xl font-black text-gray-950 tracking-tight uppercase">
            NUESTRAS MARCAS DE PERFUMES
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#2E1065] to-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Descubre todas las casas de perfumes originales que <strong>Sultan Parfums</strong> tiene para ti. 
            Explora nuestro catálogo con los perfumes árabes más virales de Dubái y joyas de alta concentración. 
            <strong> Haz clic en tu marca favorita</strong> para descubrir todas las fragancias disponibles.
          </p>
        </div>

        {/* 12 Brands Grid (Clean, High-End Minimalist Aesthetics) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {ALL_BRANDS.map((brand) => (
            <button
              key={brand.id}
              onClick={() => handleBrandClick(brand.name)}
              className="group text-left p-6 sm:p-7 rounded-2xl bg-[#FAF7F2]/60 hover:bg-white border border-gray-200/90 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between items-center text-center relative overflow-hidden active:scale-98"
            >
              {/* Subtle Corner Badge */}
              <span className="text-[9px] font-black tracking-wider uppercase bg-white/90 text-gray-600 group-hover:text-[#2E1065] group-hover:bg-purple-100/80 px-2 py-0.5 rounded-full border border-gray-200/80 mb-3 transition-colors">
                {brand.badge}
              </span>

              {/* Brand Logo Presentation */}
              <div className="h-20 w-full flex items-center justify-center py-2 transition-transform duration-300 group-hover:scale-105">
                {brand.id === 'lattafa' && (
                  <div className="flex flex-col items-center">
                    <span className="font-arabic-title text-3xl font-black text-gray-900 tracking-wider">لطافة</span>
                    <span className="font-bold text-base tracking-[0.2em] text-[#2E1065] mt-0.5">LATTAFA</span>
                  </div>
                )}

                {brand.id === 'armaf' && (
                  <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-gray-900 flex items-center justify-center p-2 group-hover:border-[#D4AF37]">
                    <span className="font-black text-xs tracking-widest text-gray-900">ARMAF</span>
                  </div>
                )}

                {brand.id === 'afnan' && (
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold text-gray-900 mb-0.5">افنان</span>
                    <span className="font-serif text-lg font-black tracking-widest text-gray-900">AFNAN</span>
                    <span className="text-[8px] tracking-[0.25em] text-gray-500 uppercase -mt-0.5">PERFUMES</span>
                  </div>
                )}

                {brand.id === 'al-haramain' && (
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center mb-1">
                      <span className="text-xs">🕌</span>
                    </div>
                    <span className="font-black text-xs tracking-wider text-gray-900">AL HARAMAIN</span>
                    <span className="text-[8px] text-gray-500 uppercase tracking-widest">SINCE 1970</span>
                  </div>
                )}

                {brand.id === 'bharara' && (
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-black font-mono text-gray-950">3</span>
                    <span className="font-black text-xs tracking-[0.3em] text-gray-900">BHARARA</span>
                  </div>
                )}

                {brand.id === 'maison-alhambra' && (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-0.5">🦌</span>
                    <span className="font-serif text-[10px] tracking-widest text-gray-700">MAISON</span>
                    <span className="font-serif text-xs font-black tracking-wider text-gray-900">ALHAMBRA</span>
                  </div>
                )}

                {brand.id === 'rasasi' && (
                  <div className="flex flex-col items-center">
                    <span className="font-serif italic text-2xl font-bold text-gray-900 tracking-wide">Rasasi</span>
                    <span className="text-[8px] tracking-widest text-gray-500 uppercase">PARFUMS</span>
                  </div>
                )}

                {brand.id === 'rayhaan' && (
                  <div className="flex flex-col items-center">
                    <span className="font-serif text-lg font-black tracking-widest text-gray-900">RAYHAAN</span>
                    <span className="text-[8px] tracking-[0.2em] text-gray-500 uppercase">EAU DE PARFUM</span>
                  </div>
                )}

                {brand.id === 'french-avenue' && (
                  <div className="flex flex-col items-center leading-tight">
                    <span className="font-sans font-black text-sm tracking-[0.3em] text-gray-900">FRENCH</span>
                    <span className="font-sans font-black text-sm tracking-[0.3em] text-gray-900">AVENUE</span>
                  </div>
                )}

                {brand.id === 'dumont-paris' && (
                  <div className="flex flex-col items-center">
                    <div className="w-5 h-5 border border-gray-900 rotate-45 flex items-center justify-center mb-1">
                      <span className="-rotate-45 text-[9px] font-bold">D</span>
                    </div>
                    <span className="font-serif text-xs font-black tracking-widest text-gray-900">DUMONT</span>
                    <span className="text-[8px] tracking-widest text-gray-500 uppercase">PARIS</span>
                  </div>
                )}

                {brand.id === 'nautica' && (
                  <div className="flex flex-col items-center">
                    <span className="text-xl mb-0.5">⛵</span>
                    <span className="font-sans font-black text-xs tracking-[0.25em] text-gray-900">NAUTICA</span>
                  </div>
                )}

                {brand.id === 'jean-paul-gaultier' && (
                  <div className="flex flex-col items-center leading-none">
                    <span className="font-serif text-xs tracking-wider text-gray-800">Jean Paul</span>
                    <span className="font-sans font-black text-sm uppercase tracking-tight text-gray-950 mt-0.5">GAULTIER</span>
                  </div>
                )}
              </div>

              {/* Description & Action */}
              <div className="mt-3 w-full pt-2.5 border-t border-gray-200/60">
                <p className="text-[11px] font-medium text-gray-500 line-clamp-1 mb-2">
                  {brand.tagline}
                </p>
                <span className="text-[11px] font-bold text-[#2E1065] group-hover:text-[#D4AF37] inline-flex items-center gap-1 transition-colors">
                  <span>Ver perfumes</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#FAF7F2] border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span><strong>100% Originales y Sellados de Fábrica:</strong> Cada frasco incluye sello holográfico y código de lote verificable.</span>
          </div>
          <a
            href="https://wa.me/593985911895?text=Hola,%20deseo%20consultar%20por%20un%20perfume%20específico%20que%20no%20encuentro%20en%20el%20catálogo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2E1065] font-extrabold hover:text-[#D4AF37] transition-colors whitespace-nowrap flex items-center gap-1"
          >
            <span>¿Buscas otra marca o referencia? Pregúntanos por WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
