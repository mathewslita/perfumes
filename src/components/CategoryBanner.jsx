import React from 'react';
import { ArrowRight, Crown, Award, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/perfumes';

export default function CategoryBanner({ 
  activeCollection, // 'all' | 'arabes' | 'disenador'
  onSelectCollection 
}) {
  const arabicData = COLLECTIONS_DATA.arabes;
  const designerData = COLLECTIONS_DATA.disenador;

  const arabicBrands = ['Lattafa', 'Armaf', 'Afnan', 'Al Haramain', 'Bharara', 'Rasasi', 'French Avenue'];
  const designerBrands = ['Halloween', 'Jesús del Pozo'];

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-[#F9F7F2] border-b border-[#C9A961]/25 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0E0E0E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Minimalist Editorial Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-[#8F7432] bg-[#C9A961]/15 px-3.5 py-1 rounded-full border border-[#C9A961]/35 inline-block mb-2.5">
            UNIVERSOS OLFATIVOS
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E0E0E] tracking-[0.14em] uppercase">
            NUESTRAS COLECCIONES
          </h2>
          <div className="w-12 h-px bg-[#C9A961] mx-auto mt-3 mb-2.5" />
          <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto font-normal">
            Explora la riqueza y estela de los elixires árabes o la elegancia atemporal de las casas de alta costura
          </p>
        </div>

        {/* 2 Luxury Editorial Category Cards (Árabes & Diseñador) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* =========================================================================
              CATEGORÍA 1: PERFUMES ÁRABES (DUBÁI & ORIENTE)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('arabes')}
            className={`group rounded-3xl p-5 sm:p-7.5 bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
              activeCollection === 'arabes'
                ? 'border-[#C9A961] shadow-2xl ring-2 ring-[#C9A961]/40 scale-[1.01]'
                : 'border-stone-200/90 hover:border-[#C9A961] shadow-soft-card hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            <div>
              {/* Header Badge & Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-[#C9A961] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-[#C9A961]/40 shadow-xs">
                  <Crown className="w-3 h-3 text-[#C9A961]" />
                  <span>DUBÁI & ORIENTE</span>
                </span>
                <span className="text-[10px] font-bold text-[#8F7432] tracking-wide">
                  48 Fragancias Disponibles
                </span>
              </div>

              {/* Visual Bottle Showcase Stage (Pedestal Limpio & Sin Recortes) */}
              <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] flex items-center justify-center p-4 mb-4 border border-stone-200/80 group-hover:border-[#C9A961]/40 transition-colors shadow-inner">
                {/* Ambient Warm Golden Aura */}
                <div className="absolute w-44 h-44 bg-[#C9A961]/25 rounded-full blur-2xl pointer-events-none" />

                {/* Twin Hero Arabic Bottles con mix-blend-multiply perfecto */}
                <div className="relative z-10 flex items-end justify-center -space-x-4 sm:-space-x-6 pt-3">
                  <img 
                    src="/assets/images/Khamrah clasico.webp" 
                    alt="Lattafa Khamrah Dubái Original" 
                    className="h-36 sm:h-48 w-auto object-contain mix-blend-multiply drop-shadow-[0_12px_16px_rgba(0,0,0,0.12)] transform -rotate-3 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                  <img 
                    src="/assets/images/Amber oud gold edition.jpg" 
                    alt="Al Haramain Amber Oud Gold Edition" 
                    className="h-32 sm:h-44 w-auto object-contain mix-blend-multiply drop-shadow-[0_12px_16px_rgba(0,0,0,0.12)] transform rotate-4 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title Editorial Playfair */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E0E0E] tracking-tight uppercase group-hover:text-[#8F7432] transition-colors mt-1 mb-1">
                PERFUMES ÁRABES
              </h3>

              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                Creaciones de las casas más aclamadas de Emiratos Árabes. Reconocidas mundialmente por su concentración en aceites nobles, estela magnética y fijación superior a 10 horas.
              </p>

              {/* Brand Pills */}
              <div className="flex flex-wrap gap-1.5 my-2.5">
                {arabicBrands.map((brand, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] sm:text-[11px] font-bold bg-[#F5F1E8] text-stone-800 px-2.5 py-0.5 rounded-full border border-stone-200/90 group-hover:border-[#C9A961]/40 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              {/* Poetic Quote Editorial */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF8F5] border-l-2 border-[#C9A961] my-3 shadow-2xs">
                <p className="font-serif italic text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                  "{arabicData.phrase}"
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-2 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#8F7432] group-hover:text-[#0E0E0E] transition-colors flex items-center gap-1.5">
                <span>Explorar Colección Árabe</span>
                <ArrowRight className="w-4 h-4 text-[#C9A961] group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className="text-[11px] font-bold text-stone-400 group-hover:text-[#0E0E0E] transition-colors">
                Ver catálogo &rarr;
              </span>
            </div>
          </div>

          {/* =========================================================================
              CATEGORÍA 2: PERFUMES DE DISEÑADOR (ALTA COSTURA GLOBAL)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('disenador')}
            className={`group rounded-3xl p-5 sm:p-7.5 bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
              activeCollection === 'disenador'
                ? 'border-[#0E0E0E] shadow-2xl ring-2 ring-[#0E0E0E]/30 scale-[1.01]'
                : 'border-stone-200/90 hover:border-stone-800 shadow-soft-card hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            <div>
              {/* Header Badge & Tag */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider border border-white/20 shadow-xs">
                  <Award className="w-3 h-3 text-[#C9A961]" />
                  <span>ALTA COSTURA</span>
                </span>
                <span className="text-[10px] font-bold text-stone-500 tracking-wide">
                  Casas Icónicas Occidentales
                </span>
              </div>

              {/* Visual Bottle Showcase Stage (Pedestal Limpio & Sin Recortes) */}
              <div className="relative h-48 sm:h-64 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#E5E7EB] flex items-center justify-center p-4 mb-4 border border-stone-200/80 group-hover:border-stone-400 transition-colors shadow-inner">
                {/* Ambient Platinum Aura */}
                <div className="absolute w-44 h-44 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />

                {/* Hero Designer Bottle con mix-blend-multiply perfecto */}
                <div className="relative z-10 flex items-end justify-center pt-3">
                  <img 
                    src="/assets/images/Halloween x man.jpg" 
                    alt="Halloween Man X" 
                    className="h-36 sm:h-48 w-auto object-contain mix-blend-multiply drop-shadow-[0_12px_16px_rgba(0,0,0,0.12)] group-hover:scale-105 transition-all duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title Editorial Playfair */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E0E0E] tracking-tight uppercase group-hover:text-stone-700 transition-colors mt-1 mb-1">
                PERFUMES DE DISEÑADOR
              </h3>

              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                Edición seleccionada de alta costura occidental. Presentando la célebre creación nocturna de Jesús del Pozo: Halloween Man X, con sus seductoras notas de café roasted, cardamomo y cuero.
              </p>

              {/* Brand Pills */}
              <div className="flex flex-wrap gap-1.5 my-2.5">
                {designerBrands.map((brand, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] sm:text-[11px] font-bold bg-stone-100 text-stone-800 px-2.5 py-0.5 rounded-full border border-stone-200 group-hover:border-stone-400 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              {/* Poetic Quote Editorial */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#F8F9FA] border-l-2 border-[#0E0E0E] my-3 shadow-2xs">
                <p className="font-serif italic text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                  "{designerData.phrase}"
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-2 pt-3 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#0E0E0E] group-hover:text-[#8F7432] transition-colors flex items-center gap-1.5">
                <span>Ver Halloween Man X</span>
                <ArrowRight className="w-4 h-4 text-[#0E0E0E] group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className="text-[11px] font-bold text-stone-400 group-hover:text-[#0E0E0E] transition-colors">
                Ver detalle &rarr;
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
