import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Eye, Check, ChevronLeft, ChevronRight, ShieldCheck, Flame, Award, Clock } from 'lucide-react';

const NEW_ARRIVALS = [
  {
    id: 'rasasi-hawas-verde',
    brand: 'RASASI DUBÁI',
    name: 'Hawas Verde For Him',
    price: 85.00,
    decantPrice: 22.00,
    notes: 'Lima fresca, Romero noble, Manzana verde, Pachulí y Ámbar',
    image: '/assets/images/hawas verde rasari.webp',
    categoryBadge: 'Árabe • Nuevo Lanzamiento Dubái',
    vibeText: 'Frescura verde ambarada de fijación extrema'
  },
  {
    id: 'armaf-club-de-nuit-iconic',
    brand: 'ARMAF DUBÁI',
    name: 'Club de Nuit Iconic',
    price: 75.00,
    decantPrice: 20.00,
    notes: 'Toronja Azul, Menta helada, Jengibre picante e Incienso',
    image: '/assets/images/Club de nuit iconic.webp',
    categoryBadge: 'Árabe • Best Seller Azul',
    vibeText: 'Elixir azul todoterreno para oficina y noche'
  },
  {
    id: 'lattafa-khamrah-original',
    brand: 'LATTAFA DUBÁI',
    name: 'Khamrah Original',
    price: 65.00,
    decantPrice: 18.00,
    notes: 'Canela fina, Dátiles dulces, Praliné belga y Licor ámbar',
    image: '/assets/images/Khamrah clasico.webp',
    categoryBadge: 'Árabe • Fenómeno Mundial',
    vibeText: 'La fragancia gourmand más elogiada de Oriente'
  },
  {
    id: 'halloween-man-x',
    brand: 'HALLOWEEN PARÍS',
    name: 'Halloween Man X',
    price: 65.00,
    decantPrice: 18.00,
    notes: 'Café Espresso tostado, Whisky licoroso, Cardamomo y Cuero',
    image: '/assets/images/Halloween x man.jpg',
    categoryBadge: 'Diseñador • Alta Costura Madrid',
    vibeText: 'Magnetismo nocturno sofisticado de Jesús del Pozo'
  },
  {
    id: 'french-avenue-liquid-brun',
    brand: 'FRENCH AVENUE',
    name: 'Liquid Brun',
    price: 76.00,
    decantPrice: 20.00,
    notes: 'Vainilla Bourbon, Canela de Ceilán y Praliné de Avellana',
    image: '/assets/images/Liquid brun.webp',
    categoryBadge: 'Árabe • Nicho Supremo',
    vibeText: 'Opulencia cálida inspirada en Althair de Marly'
  }
];

export default function HeroBanner({ onExplore, onOpenAiModal, onOpenProduct, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-transición limpia y fluida cada 2.8 segundos
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % NEW_ARRIVALS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % NEW_ARRIVALS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + NEW_ARRIVALS.length) % NEW_ARRIVALS.length);

  const currentProduct = NEW_ARRIVALS[currentSlide];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0B0B0C] via-[#121214] to-[#0A0A0B] text-[#F5F1E8] min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)] flex flex-col justify-center py-10 sm:py-16 border-b border-[#C9A961]/30">
      
      {/* Decorative Golden Ambient Auras & Luxury Lighting */}
      <div className="absolute top-1/4 -left-24 w-[550px] h-[550px] bg-[#C9A961]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[600px] h-[600px] bg-[#C9A961]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[130px] pointer-events-none" />
      
      {/* Sutil halo central para iluminar la vitrina */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C9A961]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Embedded Keyframe for Fluid Progress Fill */}
      <style>{`
        @keyframes heroProgressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: Pre-title, Majestic Title, Narrative, CTAs & Stats Grid
              ========================================================================= */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6 text-center lg:text-left py-2">

            {/* Pre-title Exclusive Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C9A961]/15 text-[#C9A961] border border-[#C9A961]/40 px-3.5 py-1.5 rounded-full text-[10.5px] sm:text-xs font-black tracking-[0.2em] uppercase backdrop-blur-md self-center lg:self-start shadow-sm">
              <Sparkles className="w-3.5 h-3.5 fill-[#C9A961]" />
              <span>BOUTIQUE DE ALTA PERFUMERÍA • SELECCIÓN 2026</span>
            </div>

            {/* Headline and Narrative */}
            <div className="space-y-3">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-[62px] font-bold leading-[1.08] tracking-tight text-white uppercase">
                PERFUMES 100% ORIGINALES
                <span className="block text-[#C9A961] italic font-serif font-normal normal-case text-xl sm:text-3xl lg:text-[32px] xl:text-[36px] mt-2 tracking-normal">
                  Árabes de leyenda y diseñador de alta categoría.
                </span>
              </h1>

              {/* Sutil divisor dorado editorial */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent lg:from-[#C9A961] lg:to-transparent mx-auto lg:mx-0 my-3" />

              <p className="text-stone-300 text-xs sm:text-sm lg:text-[15px] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                En <strong className="text-white font-semibold">ARKANO PERFUMERÍA</strong> seleccionamos elixires de altísima concentración procedentes de las casas más prestigiosas de Dubái y piezas selectas de diseñador. Fórmulas de fijación titánica, estela envolvente y batch codes 100% verificables.
              </p>
            </div>

            {/* CTAs & Action Buttons */}
            <div className="pt-1">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  onClick={onExplore}
                  className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs sm:text-sm px-7 py-3.5 rounded-full flex items-center gap-2 shadow-xl hover:shadow-[#C9A961]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Explorar Catálogo Exclusivo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={onOpenAiModal}
                  className="bg-white/10 hover:bg-white/20 text-[#F5F1E8] hover:text-[#C9A961] border border-[#C9A961]/70 hover:border-[#C9A961] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#C9A961]" />
                  <span>ASESOR - IA de fragancias</span>
                </button>
              </div>
            </div>

            {/* Prestigious 3-Metric Counter Strip (Llena el espacio con datos de lujo) */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 max-w-xl">
              <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-[#C9A961]/25 hover:border-[#C9A961]/60 rounded-2xl p-3 sm:p-4 text-center lg:text-left transition-colors backdrop-blur-sm shadow-sm">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C9A961] block leading-none">49</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-200 font-bold block mt-1.5">Fragancias Élite</span>
                <span className="text-[9.5px] text-stone-400 hidden sm:block mt-0.5">48 Árabes • 1 Diseñador</span>
              </div>

              <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-[#C9A961]/25 hover:border-[#C9A961]/60 rounded-2xl p-3 sm:p-4 text-center lg:text-left transition-colors backdrop-blur-sm shadow-sm">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-white block leading-none">+14h</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-200 font-bold block mt-1.5">Fijación en Piel</span>
                <span className="text-[9.5px] text-stone-400 hidden sm:block mt-0.5">Concentración pura</span>
              </div>

              <div className="bg-white/[0.04] hover:bg-white/[0.07] border border-[#C9A961]/25 hover:border-[#C9A961]/60 rounded-2xl p-3 sm:p-4 text-center lg:text-left transition-colors backdrop-blur-sm shadow-sm">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C9A961] block leading-none">10ml</span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-200 font-bold block mt-1.5">Decants de Lujo</span>
                <span className="text-[9.5px] text-stone-400 hidden sm:block mt-0.5">Desde $16 para probar</span>
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Vitrina Majestuosa de Lanzamientos & Selector Interactivo
              ========================================================================= */}
          <div className="lg:col-span-5 xl:col-span-6 flex flex-col items-center lg:items-end justify-center">
            
            {/* Vitrina Card Container (Grande, Protagónica y Llena de Luz) */}
            <div className="relative w-full max-w-lg xl:max-w-[530px]">
              
              {/* Resplandor áurico trasero de la vitrina */}
              <div className="absolute inset-0 bg-[#C9A961]/20 rounded-3xl blur-2xl transform scale-105 pointer-events-none" />

              <div 
                className="relative bg-gradient-to-b from-white/[0.09] via-white/[0.05] to-[#0E0E0E]/90 backdrop-blur-xl border border-[#C9A961]/45 hover:border-[#C9A961] rounded-3xl p-4 sm:p-5 shadow-2xl cursor-pointer group/hero transition-all duration-500 hover:shadow-[#C9A961]/20"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => onOpenProduct && onOpenProduct(currentProduct.id)}
                title={`Haz clic para ver detalles y ficha de ${currentProduct.name}`}
              >
                
                {/* Stage Interior de la Botella con Pedestal Blanco & Sombra Realista */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[4/3.5] bg-gradient-to-b from-[#FAF8F5] via-[#F4EFE6] to-[#ECE5D8] pt-12 pb-24 sm:pt-10 sm:pb-24 px-6 flex items-center justify-center border border-white/20 shadow-inner">
                  
                  {/* Luz ambiental dorada detrás del frasco */}
                  <div className="absolute w-56 h-56 bg-[#C9A961]/25 rounded-full blur-3xl pointer-events-none" />

                  {/* Slide Images con cross-fade suave */}
                  {NEW_ARRIVALS.map((perfume, idx) => (
                    <div
                      key={perfume.id}
                      className={`absolute inset-0 flex items-center justify-center pt-8 pb-22 sm:pt-6 sm:pb-20 px-6 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        currentSlide === idx 
                          ? 'opacity-100 scale-100 z-10' 
                          : 'opacity-0 scale-95 pointer-events-none z-0'
                      }`}
                    >
                      <img 
                        src={perfume.image} 
                        alt={`${perfume.brand} ${perfume.name}`} 
                        className="w-full h-full max-h-[290px] sm:max-h-[320px] object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.22)] transform group-hover/hero:scale-105 transition-transform duration-700 ease-out" 
                      />
                    </div>
                  ))}
                  
                  {/* Badge Superior Izquierdo: NUEVOS LANZAMIENTOS */}
                  <div className="absolute top-3.5 left-3.5 bg-[#0E0E0E]/90 backdrop-blur-md border border-[#C9A961] text-[#C9A961] text-[10.5px] font-black tracking-wider uppercase px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 z-20">
                    <Sparkles className="w-3.5 h-3.5 fill-[#C9A961]" />
                    <span>VITRINA DESTACADA</span>
                  </div>

                  {/* Indicadores de Slide con barra de progreso fluida */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5 z-20 bg-[#0E0E0E]/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C9A961]/35 shadow-sm">
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
                            ? 'w-7 bg-white/20' 
                            : 'w-2 bg-white/40 hover:bg-white/80'
                        }`}
                        title={`Ver perfume ${idx + 1}`}
                        aria-label={`Ver perfume ${idx + 1}`}
                      >
                        {currentSlide === idx && (
                          <span 
                            key={`${idx}-${currentSlide}`}
                            className="absolute inset-0 bg-[#C9A961] rounded-full"
                            style={{
                              animation: isPaused ? 'none' : 'heroProgressFill 2.8s linear forwards'
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Flechas de Navegación Manual */}
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0E0E0E]/80 text-[#C9A961] hover:text-white hover:bg-[#0E0E0E] border border-[#C9A961]/40 flex items-center justify-center transition-all opacity-0 group-hover/hero:opacity-100 shadow-md cursor-pointer active:scale-90"
                    aria-label="Anterior perfume"
                    title="Anterior perfume"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0E0E0E]/80 text-[#C9A961] hover:text-white hover:bg-[#0E0E0E] border border-[#C9A961]/40 flex items-center justify-center transition-all opacity-0 group-hover/hero:opacity-100 shadow-md cursor-pointer active:scale-90"
                    aria-label="Siguiente perfume"
                    title="Siguiente perfume"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E0E]/40 backdrop-blur-[2px] opacity-0 group-hover/hero:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="bg-[#0E0E0E] text-[#C9A961] font-black text-xs py-2.5 px-5 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/hero:translate-y-0 transition-transform border border-[#C9A961]">
                      <Eye className="w-4 h-4 text-[#C9A961]" />
                      <span>Ver Perfume & Ficha Completa</span>
                    </span>
                  </div>

                  {/* Product Info Bar: Transición suave de textos y precio */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0E0E0E]/95 backdrop-blur-md border border-[#C9A961]/40 p-3 sm:p-4 rounded-2xl flex items-center justify-between gap-3 shadow-2xl z-20">
                    <div 
                      key={currentProduct.id} 
                      className="min-w-0 pr-2 transition-all duration-500 ease-out"
                    >
                      <span className="text-[9.5px] sm:text-[10px] text-[#C9A961] font-extrabold uppercase tracking-widest block truncate">
                        {currentProduct.brand} • {currentProduct.categoryBadge}
                      </span>
                      <h4 className="font-bold text-xs sm:text-base text-white group-hover/hero:text-[#C9A961] transition-colors truncate">
                        {currentProduct.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11.5px] text-stone-300 truncate mt-0.5">
                        {currentProduct.notes}
                      </p>
                    </div>

                    <div 
                      key={`price-${currentProduct.id}`}
                      className="text-right flex-shrink-0 transition-all duration-500 ease-out pl-2 border-l border-white/10"
                    >
                      <span className="text-base sm:text-lg font-black text-[#C9A961] block leading-none">
                        ${currentProduct.price.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-stone-300 font-semibold block mt-1">
                        Decant: <strong>${currentProduct.decantPrice.toFixed(0)}</strong>
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Interactive 5-Perfume Thumbnail Selector Strip (Llena el espacio inferior con elegancia) */}
              <div className="mt-3.5 sm:mt-4 flex items-center justify-between gap-2 px-1">
                {NEW_ARRIVALS.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative flex-1 h-14 sm:h-16 rounded-xl border p-1 bg-white/[0.06] backdrop-blur-md transition-all cursor-pointer flex items-center justify-center overflow-hidden ${
                      currentSlide === idx
                        ? 'border-[#C9A961] ring-2 ring-[#C9A961]/40 bg-white/[0.14] scale-105 shadow-lg'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-[#C9A961]/50'
                    }`}
                    title={p.name}
                  >
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm" 
                    />
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Indicador de Desplazamiento Cinematográfico Estilo GTA VI */}
      <div 
        onClick={onExplore}
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-1.5 cursor-pointer opacity-75 hover:opacity-100 transition-opacity group"
      >
        <span className="text-[9.5px] font-black uppercase tracking-[0.25em] text-[#C9A961] group-hover:text-white transition-colors">
          DESLIZA PARA EXPLORAR
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-[#C9A961]/70 group-hover:border-[#C9A961] flex items-start justify-center p-1 shadow-md">
          <span className="w-1.5 h-2 bg-[#C9A961] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
