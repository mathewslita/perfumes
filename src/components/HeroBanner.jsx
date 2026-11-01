import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Eye, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const NEW_ARRIVALS = [
  {
    id: 'rasasi-hawas-verde',
    brand: 'RASASI DUBÁI',
    name: 'Hawas Verde For Him',
    price: 68.00,
    notes: 'Fresco para el Día • Cítricos, Conífera y Pachulí',
    image: '/assets/images/rasasi_hawas_verde.jpg',
    categoryBadge: 'Árabe • Nuevo Lanzamiento'
  },
  {
    id: 'dior-sauvage-elixir',
    brand: 'CHRISTIAN DIOR PARÍS',
    name: 'Sauvage Elixir',
    price: 185.00,
    notes: 'Intenso Nocturno • Canela, Lavanda y Sándalo',
    image: '/assets/images/dior_sauvage_elixir.jpg',
    categoryBadge: 'Diseñador • Alta Costura'
  },
  {
    id: 'lattafa-khamrah',
    brand: 'LATTAFA DUBÁI',
    name: 'Khamrah',
    price: 58.00,
    notes: 'Gourmand Cálido • Canela, Praliné y Vainilla',
    image: '/assets/images/lattafa_khamrah.jpg',
    categoryBadge: 'Árabe • Edición Especial'
  },
  {
    id: 'bleu-de-chanel-parfum',
    brand: 'CHANEL PARÍS',
    name: 'Bleu de Chanel Parfum',
    price: 198.00,
    notes: 'Elegancia Atemporal • Cedro, Sándalo y Cítricos',
    image: '/assets/images/bleu_de_chanel.jpg',
    categoryBadge: 'Diseñador • Edición Lujo'
  }
];

export default function HeroBanner({ onExplore, onOpenAiModal, onOpenProduct, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-transición limpia y fluida cada 2.5 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % NEW_ARRIVALS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % NEW_ARRIVALS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + NEW_ARRIVALS.length) % NEW_ARRIVALS.length);

  const currentProduct = NEW_ARRIVALS[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#0E0E0E] via-[#161616] to-[#0E0E0E] text-[#F5F1E8] py-12 md:py-16 border-b border-[#C9A961]/30">
      
      {/* Decorative Golden Ambient Aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A58B4E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Embedded Keyframe for Fluid Progress Fill */}
      <style>{`
        @keyframes heroProgressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left py-2">

            {/* Headline and Narrative */}
            <div className="space-y-3">
              <h1 className="font-arabic-title text-2xl sm:text-4xl lg:text-[42px] font-black leading-tight tracking-tight text-white">
                PERFUMES 100% ORIGINALES GARANTIZADOS,<br />
                <span className="text-[#C9A961] italic font-serif">
                  Árabes de Leyenda & Diseñador de Alta Categoría.
                </span>
              </h1>

              <p className="text-gray-300 text-xs sm:text-sm lg:text-[15px] max-w-xl mx-auto lg:mx-0 font-light leading-relaxed pt-1">
                En <strong>ARKANO PERFUMERÍA</strong> fusionamos el misticismo y fijación titánica de los elixires árabes con la sofisticación universal de las grandes casas de diseñador.
              </p>
            </div>

            {/* CTAs & Action Buttons */}
            <div className="space-y-4 pt-1">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onExplore}
                  className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#C9A961]/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explorar Catálogo Exclusivo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={onOpenAiModal}
                  className="bg-white/5 hover:bg-white/10 text-white border border-[#C9A961]/30 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all hover:border-[#C9A961] cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A961]" />
                  <span>ASESOR - IA de fragancias</span>
                </button>
              </div>

              {/* Micro Trust Proofs con 3 Vistos Verdes */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gray-300 pt-2">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span className="text-gray-200">Batch Code & Sello de Origen</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span className="text-gray-200">DURACION Y FIJACION COMPROBADA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                  <span className="text-gray-200">Decants disponibles.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Vitrina de Nuevos Lanzamientos con Transición Fluida & Estilizada */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div 
                className="relative bg-white/5 backdrop-blur-md border border-[#C9A961]/35 hover:border-[#C9A961] rounded-3xl p-3.5 sm:p-4 shadow-2xl cursor-pointer group/hero transition-all duration-500 hover:shadow-[#C9A961]/15"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => onOpenProduct && onOpenProduct(currentProduct.id)}
                title={`Haz clic para ver detalles de ${currentProduct.name}`}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-square bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] pt-12 pb-24 sm:pt-10 sm:pb-22 px-6 flex items-center justify-center">
                  
                  {/* Slide Images con transición fluida tipo cross-fade y micro-escala */}
                  {NEW_ARRIVALS.map((perfume, idx) => (
                    <div
                      key={perfume.id}
                      className={`absolute inset-0 flex items-center justify-center pt-10 pb-24 sm:pt-8 sm:pb-20 px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        currentSlide === idx 
                          ? 'opacity-100 scale-100 z-10' 
                          : 'opacity-0 scale-95 pointer-events-none z-0'
                      }`}
                    >
                      <img 
                        src={perfume.image} 
                        alt={`${perfume.brand} ${perfume.name}`} 
                        className="w-full h-full max-h-[265px] sm:max-h-full object-contain rounded-2xl filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.18)] transform group-hover/hero:scale-105 transition-transform duration-700 ease-out" 
                      />
                    </div>
                  ))}
                  
                  {/* Badge Superior Izquierdo: NUEVOS LANZAMIENTOS */}
                  <div className="absolute top-3 left-3 bg-[#0E0E0E]/90 backdrop-blur-md border border-[#C9A961] text-[#C9A961] text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5 fill-[#C9A961]" />
                    <span>NUEVOS LANZAMIENTOS</span>
                  </div>

                  {/* Indicadores de Slide con barra de progreso fluida (2.5s) */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20 bg-[#0E0E0E]/85 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-[#C9A961]/35 shadow-sm">
                    {NEW_ARRIVALS.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentSlide(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer overflow-hidden relative ${
                          currentSlide === idx 
                            ? 'w-6 bg-white/20' 
                            : 'w-1.5 bg-white/40 hover:bg-white/80'
                        }`}
                        title={`Ver perfume ${idx + 1}`}
                        aria-label={`Ver perfume ${idx + 1}`}
                      >
                        {currentSlide === idx && (
                          <span 
                            key={`${idx}-${currentSlide}`}
                            className="absolute inset-0 bg-[#C9A961] rounded-full"
                            style={{
                              animation: isPaused ? 'none' : 'heroProgressFill 2.5s linear forwards'
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Flechas de Navegación Manual (visibles en hover) */}
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0E0E0E]/80 text-[#C9A961] hover:text-white hover:bg-[#0E0E0E] border border-[#C9A961]/40 flex items-center justify-center transition-all opacity-0 group-hover/hero:opacity-100 shadow-md cursor-pointer active:scale-90"
                    aria-label="Anterior perfume"
                    title="Anterior perfume"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0E0E0E]/80 text-[#C9A961] hover:text-white hover:bg-[#0E0E0E] border border-[#C9A961]/40 flex items-center justify-center transition-all opacity-0 group-hover/hero:opacity-100 shadow-md cursor-pointer active:scale-90"
                    aria-label="Siguiente perfume"
                    title="Siguiente perfume"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E0E]/40 backdrop-blur-[2px] opacity-0 group-hover/hero:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="bg-[#0E0E0E] text-[#C9A961] font-black text-xs py-2.5 px-5 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/hero:translate-y-0 transition-transform border border-[#C9A961]">
                      <Eye className="w-4 h-4 text-[#C9A961]" />
                      <span>Ver Perfume & Ficha</span>
                    </span>
                  </div>

                  {/* Product Info Bar: Transición suave de textos y precio */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0E0E0E]/95 backdrop-blur-md border border-[#C9A961]/35 p-3 sm:p-3.5 rounded-2xl flex items-center justify-between gap-2 shadow-xl z-20">
                    <div 
                      key={currentProduct.id} 
                      className="min-w-0 pr-2 transition-all duration-500 ease-out"
                    >
                      <span className="text-[10px] text-[#C9A961] font-extrabold uppercase tracking-widest block truncate">
                        {currentProduct.brand}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-white group-hover/hero:text-[#C9A961] transition-colors truncate">
                        {currentProduct.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-gray-300 truncate">
                        {currentProduct.notes}
                      </p>
                    </div>
                    <div 
                      key={`price-${currentProduct.id}`}
                      className="text-right flex-shrink-0 transition-all duration-500 ease-out"
                    >
                      <span className="text-sm sm:text-base font-black text-[#C9A961] block">
                        ${currentProduct.price.toFixed(2)}
                      </span>
                      <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-wider block">
                        Original
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
