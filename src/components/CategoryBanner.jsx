import React from 'react';
import { ArrowRight, Crown, Award } from 'lucide-react';

export default function CategoryBanner({ 
  activeCollection, // 'all' | 'arabes' | 'disenador'
  onSelectCollection 
}) {
  const scrollToCatalog = () => {
    const el = document.getElementById('los-mas-vendidos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="nuestras-colecciones" className="py-10 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Minimalist GTA VI Layout (Title Left + "Ver todo" Right) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-12 pb-4 border-b border-stone-200/80">
          <div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#8F7432] block mb-1">
              Catálogo Oficial
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#0E0E0E] uppercase">
              NUESTRAS COLECCIONES
            </h2>
          </div>

          <button
            onClick={scrollToCatalog}
            className="text-xs sm:text-sm font-bold text-stone-600 hover:text-[#8F7432] flex items-center gap-1.5 transition-colors cursor-pointer group py-1 self-start sm:self-auto"
          >
            <span>Ver todo el catálogo (49 Fragancias)</span>
            <ArrowRight className="w-4 h-4 text-[#C9A961] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2 Luxury Editorial Cards (Clean, Harmonious & Seamless Bottles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* =========================================================================
              CARD 1: COLECCIÓN ÁRABE (DUBÁI & ORIENTE)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('arabes')}
            className={`group rounded-3xl p-6 sm:p-9 cursor-pointer transition-all duration-500 flex flex-col justify-between relative overflow-hidden bg-white border ${
              activeCollection === 'arabes'
                ? 'border-[#C9A961] shadow-2xl ring-2 ring-[#C9A961]/40 scale-[1.01]'
                : 'border-stone-200/90 hover:border-[#C9A961] shadow-soft-card hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            {/* Visual Bottle Showcase Stage (Pedestal Alabastro Cálido) */}
            <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] flex items-center justify-center p-4 mb-6 border border-stone-200/70 group-hover:border-[#C9A961]/40 transition-colors shadow-inner">
              {/* Ambient Warm Glow */}
              <div className="absolute w-48 h-48 bg-[#C9A961]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Twin Arabic Bottles con transparencia total */}
              <div className="relative z-10 flex items-end justify-center -space-x-4 sm:-space-x-7 pt-4">
                <img 
                  src="/assets/images/khamrah_clasico_transparent.webp" 
                  alt="Lattafa Khamrah Dubái" 
                  className="h-44 sm:h-56 w-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)] transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <img 
                  src="/assets/images/amber_oud_gold_transparent.webp" 
                  alt="Al Haramain Amber Oud Gold Edition" 
                  className="h-40 sm:h-52 w-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)] transform rotate-4 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-[#8F7432] block">
                COLECCIÓN DUBÁI • 48 FRAGANCIAS
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] tracking-tight uppercase group-hover:text-[#8F7432] transition-colors leading-tight">
                PERFUMES ÁRABES
              </h3>

              <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed line-clamp-2">
                Lattafa, Armaf, Afnan, Rasasi, Al Haramain, Bharara, French Avenue, Dumont y Rayhaan. Fórmulas de altísima fijación y estela envolvente.
              </p>

              {/* Pill Button GTA Style */}
              <div className="pt-4">
                <button
                  type="button"
                  className="bg-[#0E0E0E] hover:bg-[#1A1A1A] text-[#C9A961] hover:text-white font-black text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 border border-[#C9A961]/40 shadow-md group-hover:shadow-lg group-hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explorar Colección Árabe</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A961] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              CARD 2: COLECCIÓN DISEÑADOR (HALLOWEEN MAN X)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('disenador')}
            className={`group rounded-3xl p-6 sm:p-9 cursor-pointer transition-all duration-500 flex flex-col justify-between relative overflow-hidden bg-white border ${
              activeCollection === 'disenador'
                ? 'border-[#0E0E0E] shadow-2xl ring-2 ring-[#0E0E0E]/30 scale-[1.01]'
                : 'border-stone-200/90 hover:border-stone-700 shadow-soft-card hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            {/* Visual Bottle Showcase Stage (Pedestal Platino Limpio) */}
            <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center p-4 mb-6 border border-stone-200/70 group-hover:border-stone-400 transition-colors shadow-inner">
              {/* Ambient Cool Glow */}
              <div className="absolute w-48 h-48 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* Halloween Man X Bottle con transparencia total */}
              <div className="relative z-10 flex items-end justify-center pt-4">
                <img 
                  src="/assets/images/halloween_x_man_transparent.webp" 
                  alt="Halloween Man X Jesús del Pozo" 
                  className="h-44 sm:h-56 w-auto object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)] group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-stone-500 block">
                ALTA COSTURA OCCIDENTAL • SELECCIÓN EXCLUSIVA
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] tracking-tight uppercase group-hover:text-stone-700 transition-colors leading-tight">
                PERFUMES DE DISEÑADOR
              </h3>

              <p className="text-xs sm:text-[13px] text-stone-600 font-normal leading-relaxed line-clamp-2">
                Halloween Man X por Jesús del Pozo Madrid. El magnetismo de la noche con café espresso tostado, cardamomo, whisky y cuero noble.
              </p>

              {/* Pill Button GTA Style */}
              <div className="pt-4">
                <button
                  type="button"
                  className="bg-white hover:bg-[#0E0E0E] text-[#0E0E0E] hover:text-[#C9A961] font-black text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 border-2 border-[#0E0E0E] shadow-md group-hover:shadow-lg group-hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explorar Colección Diseñador</span>
                  <ArrowRight className="w-4 h-4 text-[#0E0E0E] group-hover:text-[#C9A961] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
