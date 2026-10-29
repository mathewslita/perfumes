import React from 'react';
import { Crown, Award, ArrowRight, Sparkles, ShieldCheck, Flame, Clock } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/perfumes';

export default function CategoryBanner({ 
  activeCollection, // 'all' | 'arabes' | 'disenador'
  onSelectCollection 
}) {
  const arabicData = COLLECTIONS_DATA.arabes;
  const designerData = COLLECTIONS_DATA.disenador;

  const arabicBrands = ['Lattafa', 'Armaf', 'Afnan', 'Al Haramain', 'Rasasi', 'Bharara'];
  const designerBrands = ['Dior', 'Chanel', 'YSL', 'Tom Ford', 'Versace', 'Xerjoff'];

  return (
    <section className="py-14 sm:py-20 bg-[#F9F7F2] border-b border-[#C9A961]/25 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A961]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0E0E0E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Minimalist Editorial Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] tracking-[0.35em] font-extrabold uppercase text-[#A58B4E] block mb-2">
            UNIVERSOS OLFATIVOS
          </span>
                    <h2 className="font-arabic-title text-2xl sm:text-3xl lg:text-4xl font-light text-[#0E0E0E] tracking-[0.16em] uppercase">
            NUESTRAS CATEGORÍAS
          </h2>
          <div className="w-12 h-px bg-[#C9A961] mx-auto mt-3.5 mb-2.5" />
          <p className="text-xs text-stone-600 uppercase tracking-widest font-medium">
            Selecciona un universo aromático para explorar sus joyas exclusivas
          </p>
        </div>

        {/* 2 Immersive Luxury Category Cards (Árabes & Diseñador) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-9">
          
          {/* =========================================================================
              CATEGORÍA 1: PERFUMES ÁRABES (DUBÁI & ORIENTE)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('arabes')}
            className={`group rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between border ${
              activeCollection === 'arabes'
                ? 'bg-gradient-to-b from-[#18140F] via-[#1E1812] to-[#120F0B] text-[#F5F1E8] border-[#C9A961] shadow-2xl ring-2 ring-[#C9A961] scale-[1.01]'
                : 'bg-gradient-to-b from-[#16120D] via-[#1C1610] to-[#110D09] text-[#F5F1E8] border-[#C9A961]/35 hover:border-[#C9A961] shadow-xl hover:shadow-2xl hover:-translate-y-1.5'
            }`}
          >
            <div>
              {/* Visual Bottle Showcase Stage */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#2E2419]/50 via-[#211A12]/60 to-[#110E0A] flex items-center justify-center p-4 mb-6 border border-[#C9A961]/25 group-hover:border-[#C9A961]/60 transition-colors shadow-inner">
                {/* Ambient Warm Golden Aura */}
                <div className="absolute w-48 h-48 bg-[#C9A961]/20 rounded-full blur-3xl pointer-events-none" />
                
                {/* Badges on Visual Stage */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#0E0E0E]/90 text-[#C9A961] border border-[#C9A961]/50 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm">
                  <Crown className="w-3.5 h-3.5 fill-[#C9A961]" />
                  <span>DUBÁI & ORIENTE</span>
                </div>

                <div className="absolute top-3 right-3 z-10 bg-[#C9A961] text-[#0E0E0E] text-[10px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-current" />
                  <span>+16h Fijación</span>
                </div>

                {/* Twin Hero Arabic Bottles */}
                <div className="relative z-10 flex items-end justify-center -space-x-5 sm:-space-x-7 pt-4">
                  <img 
                    src="/assets/images/lattafa_khamrah.jpg" 
                    alt="Lattafa Khamrah Dubái Original" 
                    className="h-44 sm:h-52 w-auto object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] transform -rotate-3 group-hover:rotate-0 group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <img 
                    src="/assets/images/al_haramain_amber_oud.jpg" 
                    alt="Al Haramain Amber Oud Gold Edition" 
                    className="h-40 sm:h-48 w-auto object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] transform rotate-4 group-hover:rotate-0 group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title & Brand Badges */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#C9A961] uppercase flex items-center gap-1">
                  <Crown className="w-3 h-3 text-[#C9A961]" />
                  COLECCIÓN REAL ORIENTAL
                </span>
                <span className="text-[10.5px] font-mono text-stone-400">
                  Dubái, EAU
                </span>
              </div>

              <h3 className="font-arabic-title text-2xl sm:text-3xl font-light text-white tracking-wide group-hover:text-[#C9A961] transition-colors">
                Perfumes Árabes
              </h3>

              {/* Brand Pills */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {arabicBrands.map((brand, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-semibold bg-white/5 text-stone-300 px-2.5 py-0.5 rounded-full border border-white/10 group-hover:border-[#C9A961]/30 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              {/* High-Fashion Poetic Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-[#C9A961]/30 my-4 backdrop-blur-sm relative shadow-sm">
                <span className="text-[#C9A961]/50 text-3xl font-serif absolute top-1.5 left-2.5 select-none leading-none">“</span>
                <p className="font-serif italic text-xs sm:text-[13px] text-stone-200 leading-relaxed pl-3">
                  {arabicData.phrase}
                </p>
              </div>

              {/* Key Highlights Micro-Stats */}
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/10 text-center">
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[9.5px] text-[#C9A961] uppercase font-bold tracking-wider">Fijación</div>
                  <div className="text-xs font-black text-white mt-0.5">14h a 16h+</div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[9.5px] text-[#C9A961] uppercase font-bold tracking-wider">Aceites</div>
                  <div className="text-xs font-black text-white mt-0.5">18% - 28%</div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[9.5px] text-[#C9A961] uppercase font-bold tracking-wider">Garantía</div>
                  <div className="text-xs font-black text-white mt-0.5">Dubái 100%</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#C9A961] group-hover:text-white transition-colors flex items-center gap-2">
                <span>Explorar Colección Árabe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                activeCollection === 'arabes' 
                  ? 'bg-[#C9A961] border-white shadow-glow-gold' 
                  : 'border-stone-500 group-hover:border-[#C9A961]'
              }`} />
            </div>
          </div>

          {/* =========================================================================
              CATEGORÍA 2: PERFUMES DE DISEÑADOR (ALTA COSTURA GLOBAL)
              ========================================================================= */}
          <div
            onClick={() => onSelectCollection('disenador')}
            className={`group rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-500 relative overflow-hidden flex flex-col justify-between border ${
              activeCollection === 'disenador'
                ? 'bg-gradient-to-b from-[#141519] via-[#1A1C22] to-[#0D0E11] text-[#F5F1E8] border-[#C9A961] shadow-2xl ring-2 ring-[#C9A961] scale-[1.01]'
                : 'bg-gradient-to-b from-[#111215] via-[#16171B] to-[#0B0C0E] text-[#F5F1E8] border-white/20 hover:border-[#C9A961] shadow-xl hover:shadow-2xl hover:-translate-y-1.5'
            }`}
          >
            <div>
              {/* Visual Bottle Showcase Stage */}
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#1F222B]/50 via-[#15171D]/60 to-[#0A0B0E] flex items-center justify-center p-4 mb-6 border border-white/15 group-hover:border-[#C9A961]/60 transition-colors shadow-inner">
                {/* Ambient Platinum Aura */}
                <div className="absolute w-48 h-48 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
                
                {/* Badges on Visual Stage */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#0E0E0E]/90 text-white border border-white/30 text-[10px] font-black px-2.5 py-1 rounded-full shadow-lg backdrop-blur-sm">
                  <Award className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>PARÍS & MILÁN</span>
                </div>

                <div className="absolute top-3 right-3 z-10 bg-white text-[#0E0E0E] text-[10px] font-black px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#0E0E0E]" />
                  <span>Alta Costura</span>
                </div>

                {/* Twin Hero Designer Bottles */}
                <div className="relative z-10 flex items-end justify-center -space-x-5 sm:-space-x-7 pt-4">
                  <img 
                    src="/assets/images/dior_sauvage_elixir.jpg" 
                    alt="Dior Sauvage Elixir París" 
                    className="h-44 sm:h-52 w-auto object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] transform -rotate-3 group-hover:rotate-0 group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <img 
                    src="/assets/images/bleu_de_chanel.jpg" 
                    alt="Bleu de Chanel Parfum Original" 
                    className="h-40 sm:h-48 w-auto object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] transform rotate-4 group-hover:rotate-0 group-hover:scale-108 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title & Brand Badges */}
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[10px] font-black tracking-[0.2em] text-[#C9A961] uppercase flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#C9A961]" />
                  ALTA COSTURA GLOBAL
                </span>
                <span className="text-[10.5px] font-mono text-stone-400">
                  París & Milán
                </span>
              </div>

              <h3 className="font-arabic-title text-2xl sm:text-3xl font-light text-white tracking-wide group-hover:text-[#C9A961] transition-colors">
                Perfumes de Diseñador
              </h3>

              {/* Brand Pills */}
              <div className="flex flex-wrap gap-1.5 my-3">
                {designerBrands.map((brand, i) => (
                  <span 
                    key={i} 
                    className="text-[10px] font-semibold bg-white/5 text-stone-300 px-2.5 py-0.5 rounded-full border border-white/10 group-hover:border-[#C9A961]/30 transition-colors"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              {/* High-Fashion Poetic Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/15 my-4 backdrop-blur-sm relative shadow-sm">
                <span className="text-[#C9A961]/50 text-3xl font-serif absolute top-1.5 left-2.5 select-none leading-none">“</span>
                <p className="font-serif italic text-xs sm:text-[13px] text-stone-200 leading-relaxed pl-3">
                  {designerData.phrase}
                </p>
              </div>

              {/* Key Highlights Micro-Stats */}
              <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/10 text-center">
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[9.5px] text-[#C9A961] uppercase font-bold tracking-wider">Origen</div>
                  <div className="text-xs font-black text-white mt-0.5">París & Milán</div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[9.5px] text-[#C9A961] uppercase font-bold tracking-wider">Estatus</div>
                  <div className="text-xs font-black text-white mt-0.5">Alta Gama</div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-[9.5px] text-[#C9A961] uppercase font-bold tracking-wider">Trazabilidad</div>
                  <div className="text-xs font-black text-white mt-0.5">Batch Code</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-[#C9A961] group-hover:text-white transition-colors flex items-center gap-2">
                <span>Explorar Colección Diseñador</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
              <span className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                activeCollection === 'disenador' 
                  ? 'bg-[#C9A961] border-white shadow-glow-gold' 
                  : 'border-stone-500 group-hover:border-[#C9A961]'
              }`} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
