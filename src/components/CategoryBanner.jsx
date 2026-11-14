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
    <section className="py-10 sm:py-16 md:py-20 bg-[#0E0E0E] text-[#F5F1E8] border-b border-[#C9A961]/25 relative overflow-hidden">
      {/* Ambient Luxury Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C9A961]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header: Minimalist GTA VI Layout (Title Left + "Ver todo" Right) */}
        <div className="flex items-end justify-between mb-6 sm:mb-10 pb-3 border-b border-white/10">
          <div>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-[#C9A961] block mb-1">
              Catálogo Oficial
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white uppercase">
              NUESTRAS COLECCIONES
            </h2>
          </div>

          <button
            onClick={scrollToCatalog}
            className="text-xs sm:text-sm font-bold text-stone-400 hover:text-[#C9A961] flex items-center gap-1.5 transition-colors cursor-pointer group py-1"
          >
            <span>Ver todo el catálogo</span>
            <ArrowRight className="w-4 h-4 text-[#C9A961] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 2 Immersive Luxury Cards (Estilo GTA VI: Grandes, Redondeadas y Cinemáticas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* =========================================================================
              CARD 1: COLECCIÓN ÁRABE (DUBÁI & ORIENTE)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('arabes')}
            className={`group rounded-3xl p-6 sm:p-9 cursor-pointer transition-all duration-500 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#161619] to-[#101012] border ${
              activeCollection === 'arabes'
                ? 'border-[#C9A961] shadow-2xl ring-2 ring-[#C9A961]/40 scale-[1.01]'
                : 'border-white/10 hover:border-[#C9A961]/70 shadow-2xl hover:-translate-y-1'
            }`}
          >
            {/* Ambient Spotlight Interior */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A961]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C9A961]/30 transition-all duration-700" />

            {/* Stage Visual: Frascos Sin Fondo Blanco con Realismo Total */}
            <div className="relative h-60 sm:h-72 w-full flex items-center justify-center mb-6">
              <div className="relative z-10 flex items-end justify-center -space-x-5 sm:-space-x-8 pt-4">
                <img 
                  src="/assets/images/khamrah_clasico_transparent.webp" 
                  alt="Lattafa Khamrah Dubái" 
                  className="h-44 sm:h-56 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <img 
                  src="/assets/images/amber_oud_gold_transparent.webp" 
                  alt="Al Haramain Amber Oud Gold Edition" 
                  className="h-40 sm:h-52 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transform rotate-4 group-hover:rotate-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-[#C9A961] block">
                COLECCIÓN DUBÁI • 48 FRAGANCIAS
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase group-hover:text-[#C9A961] transition-colors leading-tight">
                PERFUMES ÁRABES
              </h3>

              <p className="text-xs sm:text-[13px] text-stone-400 font-normal leading-relaxed line-clamp-2">
                Lattafa, Armaf, Afnan, Rasasi, Al Haramain, Bharara, French Avenue, Dumont y Rayhaan.
              </p>

              {/* Pill Button GTA Style */}
              <div className="pt-3">
                <button
                  type="button"
                  className="bg-[#C9A961] hover:bg-[#D4B66E] text-[#0E0E0E] font-black text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 shadow-lg group-hover:shadow-[#C9A961]/30 group-hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explorar Colección Árabe</span>
                  <ArrowRight className="w-4 h-4 text-[#0E0E0E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              CARD 2: COLECCIÓN DISEÑADOR (HALLOWEEN MAN X)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('disenador')}
            className={`group rounded-3xl p-6 sm:p-9 cursor-pointer transition-all duration-500 flex flex-col justify-between relative overflow-hidden bg-gradient-to-b from-[#161619] to-[#101012] border ${
              activeCollection === 'disenador'
                ? 'border-white shadow-2xl ring-2 ring-white/30 scale-[1.01]'
                : 'border-white/10 hover:border-white/50 shadow-2xl hover:-translate-y-1'
            }`}
          >
            {/* Ambient Spotlight Interior */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none group-hover:bg-sky-400/20 transition-all duration-700" />

            {/* Stage Visual: Frasco Sin Fondo Blanco con Realismo Total */}
            <div className="relative h-60 sm:h-72 w-full flex items-center justify-center mb-6">
              <div className="relative z-10 flex items-end justify-center pt-4">
                <img 
                  src="/assets/images/halloween_x_man_transparent.webp" 
                  alt="Halloween Man X" 
                  className="h-44 sm:h-56 w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-stone-400 block">
                ALTA COSTURA OCCIDENTAL • SELECCIÓN EXCLUSIVA
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase group-hover:text-stone-200 transition-colors leading-tight">
                HALLOWEEN MAN X
              </h3>

              <p className="text-xs sm:text-[13px] text-stone-400 font-normal leading-relaxed line-clamp-2">
                Jesús del Pozo Madrid. El magnetismo de la noche con café espresso, cardamomo, whisky y cuero.
              </p>

              {/* Pill Button GTA Style */}
              <div className="pt-3">
                <button
                  type="button"
                  className="bg-white hover:bg-stone-200 text-[#0E0E0E] font-black text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full flex items-center gap-2 shadow-lg group-hover:shadow-white/20 group-hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Ver Halloween Man X</span>
                  <ArrowRight className="w-4 h-4 text-[#0E0E0E] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
