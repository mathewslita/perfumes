import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Award, Eye, Crown, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from './Logo';

export default function HeroBanner({ onExplore, onOpenAiModal, onOpenProduct, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-transición fluida cada 4.5 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0E0E0E] via-[#161616] to-[#0E0E0E] text-[#F5F1E8] py-10 md:py-14 border-b border-[#C9A961]/30">
      
      {/* Decorative Golden Ambient Aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A58B4E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline, Fluid Transition Showcase & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-center lg:text-left">

            {/* Top Text */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-[#C9A961]/15 text-[#C9A961] border border-[#C9A961]/30 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>Colecciones de Alta Gama • 100% Originales</span>
              </div>

              <h1 className="font-arabic-title text-2xl sm:text-4xl lg:text-[40px] font-black leading-tight tracking-tight text-white">
                PERFUMES 100% ORIGINALES GARANTIZADOS,<br />
                <span className="text-[#C9A961] italic font-serif">
                  Árabes de Leyenda & Diseñador de Alta Categoría.
                </span>
              </h1>

              <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                En <strong>ARKANO PERFUMERÍA</strong> fusionamos el misticismo y fijación titánica de los elixires árabes con la sofisticación universal de las grandes casas de diseñador.
              </p>
            </div>

            {/* Showcase Visual con Transición Fluida y Elegante (Árabes & Diseñador) */}
            <div 
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C9A961]/40 bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] p-3 sm:p-4 shadow-2xl group/showcase"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative w-full h-44 sm:h-52 md:h-56 flex items-center justify-center overflow-hidden rounded-xl">
                
                {/* Slide 0: Árabes de Leyenda */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    currentSlide === 0 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 pointer-events-none z-0'
                  }`}
                >
                  <img 
                    src="/assets/images/hero_arabes_lineup.png" 
                    alt="Colección Perfumes Árabes de Dubái"
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.18)]"
                  />
                </div>

                {/* Slide 1: Diseñador de Alta Costura */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                    currentSlide === 1 
                      ? 'opacity-100 scale-100 z-10' 
                      : 'opacity-0 scale-105 pointer-events-none z-0'
                  }`}
                >
                  <img 
                    src="/assets/images/hero_disenador_lineup.png" 
                    alt="Colección Perfumes de Diseñador de Alta Costura"
                    className="w-full h-full object-contain filter drop-shadow-[0_12px_22px_rgba(0,0,0,0.18)]"
                  />
                </div>

                {/* Floating Badge (Top Left of Showcase) */}
                <div className="absolute top-2.5 left-2.5 z-20 bg-[#0E0E0E]/90 backdrop-blur-md border border-[#C9A961] text-[#C9A961] text-[9.5px] sm:text-[10.5px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 transition-all">
                  {currentSlide === 0 ? (
                    <>
                      <span>🌙</span>
                      <span>Árabes de Leyenda • Lotes de Dubái</span>
                    </>
                  ) : (
                    <>
                      <span>✨</span>
                      <span>Diseñador • Obras Maestras con Decants</span>
                    </>
                  )}
                </div>

                {/* Floating Badge (Top Right of Showcase) */}
                <div className="absolute top-2.5 right-2.5 z-20 bg-[#0E0E0E]/85 backdrop-blur-md text-white border border-[#C9A961]/40 text-[9.5px] sm:text-[10.5px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                  <span>100% Originales</span>
                </div>

                {/* Manual Navigation Controls (Arrows on Hover) */}
                <button 
                  onClick={(e) => { e.stopPropagation(); setCurrentSlide(prev => (prev === 0 ? 1 : 0)); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0E0E0E]/80 text-[#C9A961] hover:text-white hover:bg-[#0E0E0E] border border-[#C9A961]/40 flex items-center justify-center transition-all opacity-0 group-hover/showcase:opacity-100 shadow-md cursor-pointer active:scale-90"
                  aria-label="Anterior colección"
                  title="Ver colección anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button 
                  onClick={(e) => { e.stopPropagation(); setCurrentSlide(prev => (prev === 0 ? 1 : 0)); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0E0E0E]/80 text-[#C9A961] hover:text-white hover:bg-[#0E0E0E] border border-[#C9A961]/40 flex items-center justify-center transition-all opacity-0 group-hover/showcase:opacity-100 shadow-md cursor-pointer active:scale-90"
                  aria-label="Siguiente colección"
                  title="Ver siguiente colección"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Bottom Interactive Navigation Pills */}
                <div className="absolute bottom-2.5 inset-x-0 z-20 flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentSlide(0)}
                    className={`px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5 ${
                      currentSlide === 0
                        ? 'bg-[#0E0E0E] text-[#C9A961] ring-1.5 ring-[#C9A961] scale-105'
                        : 'bg-[#0E0E0E]/65 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/90'
                    }`}
                  >
                    <span>🌙 Árabes</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === 0 ? 'bg-[#C9A961]' : 'bg-gray-400'}`} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentSlide(1)}
                    className={`px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-sm flex items-center gap-1.5 ${
                      currentSlide === 1
                        ? 'bg-[#0E0E0E] text-[#C9A961] ring-1.5 ring-[#C9A961] scale-105'
                        : 'bg-[#0E0E0E]/65 text-gray-300 hover:text-white hover:bg-[#0E0E0E]/90'
                    }`}
                  >
                    <span>✨ Diseñador</span>
                    <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === 1 ? 'bg-[#C9A961]' : 'bg-gray-400'}`} />
                  </button>
                </div>

              </div>
            </div>

            {/* CTAs & Micro Proofs */}
            <div className="space-y-3 pt-1">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={onExplore}
                  className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#C9A961]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explorar Catálogo Exclusivo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={onOpenAiModal}
                  className="bg-white/5 hover:bg-white/10 text-white border border-[#C9A961]/30 font-semibold text-xs sm:text-sm px-5 py-3.5 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all hover:border-[#C9A961] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A961]" />
                  <span>ASESOR IA de fragancias</span>
                </button>
              </div>

              {/* Micro Trust Proofs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-[11px] sm:text-xs text-gray-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span className="text-gray-200">Batch Code & Sello de Origen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span className="text-gray-200">DURACION Y FIJACION COMPROBADA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span className="text-gray-200">Decants disponibles.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Flagship Product */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div 
                onClick={() => onOpenProduct && onOpenProduct('dior-sauvage-elixir')}
                className="relative bg-white/5 backdrop-blur-md border border-[#C9A961]/30 hover:border-[#C9A961] rounded-3xl p-4 shadow-2xl cursor-pointer group/hero transition-all duration-300 hover:scale-[1.02]"
                title="Haz clic para ver detalles de Dior Sauvage Elixir"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] pt-12 pb-24 sm:pt-8 sm:pb-20 px-6 flex items-center justify-center">
                  <img 
                    src="/assets/images/dior_sauvage_elixir.jpg" 
                    alt="Dior Sauvage Elixir en ARKANO Perfumería" 
                    className="w-full h-full max-h-[260px] sm:max-h-full object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.16)] transform group-hover/hero:scale-108 transition-transform duration-700 ease-out" 
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 bg-[#0E0E0E] border border-[#C9A961] text-[#C9A961] text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
                    <Crown className="w-3.5 h-3.5 fill-[#C9A961]" />
                    <span>Diseñador • Elixir Supremo</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]/40 text-[11px] font-black px-2.5 py-1 rounded-full shadow-md z-10">
                    👑 Top #1
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E0E]/40 backdrop-blur-[2px] opacity-0 group-hover/hero:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="bg-[#0E0E0E] text-[#C9A961] font-black text-xs py-2.5 px-5 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/hero:translate-y-0 transition-transform border border-[#C9A961]">
                      <Eye className="w-4 h-4 text-[#C9A961]" />
                      <span>Ver Perfume & Decant</span>
                    </span>
                  </div>

                  {/* Product Info Bar */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0E0E0E]/95 backdrop-blur-md border border-[#C9A961]/30 p-3 sm:p-3.5 rounded-2xl flex items-center justify-between gap-2 shadow-xl z-10">
                    <div>
                      <span className="text-[10px] text-[#C9A961] font-extrabold uppercase tracking-widest block">
                        Christian Dior París
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-white group-hover/hero:text-[#C9A961] transition-colors line-clamp-1">
                        Sauvage Elixir
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-gray-300">Canela, Lavanda y Sándalo Noble</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-sm sm:text-base font-black text-[#C9A961] block">$185.00</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Indicator */}
                <div className="mt-3 flex items-center justify-between text-xs px-2 text-gray-300">
                  <span className="flex items-center gap-1 text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span>Disponible en Botella y Decant 10ml</span>
                  </span>
                  <span className="text-[#C9A961] font-bold text-[11px] flex items-center gap-1 group-hover/hero:underline">
                    Ver ficha y notas olfativas →
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
