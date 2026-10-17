import React from 'react';
import { Sparkles, Shield, Flame, ArrowRight, Award, Eye } from 'lucide-react';

export default function HeroBanner({ onExplore, onOpenAiModal, onOpenProduct, onAddToCart }) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#2E1065] via-[#3B0764] to-[#1E0741] text-white py-12 md:py-16 border-b border-[#D4AF37]/30">
      
      {/* Decorative Golden Pattern / Ambient Aura */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 rounded-full text-xs font-bold text-[#F7E7A9] tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Importación Directa de Dubái • Garantía 100% Original</span>
            </div>

            <h1 className="font-arabic-title text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              El Poder de la Perfumería Árabe,<br />
              <span className="text-[#D4AF37] italic font-serif">
                A Tu Alcance y Sin Salir de Casa.
              </span>
            </h1>

            <p className="text-purple-100 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Descubre los elixires orientales más virales de <strong>Lattafa, Armaf, Afnan y Al Haramain</strong>. Fragancias con fijación titánica de más de 12 horas, acordes de vainilla, oud y frutas doradas que dejan huella donde camines.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onExplore}
                className="bg-[#D4AF37] hover:bg-[#B89228] text-[#1E0741] font-bold text-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Explorar Más Vendidos</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onOpenAiModal}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm px-5 py-3 rounded-full flex items-center gap-2 backdrop-blur-sm transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>¿Dudas? Pregunta al Sommelier IA</span>
              </button>
            </div>

            {/* Micro Trust Proofs */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-purple-200">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>Batch Code Verificable</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>12h+ Modo Bestia</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#D4AF37]" />
                <span>Formato Botella o Decant 10ml</span>
              </div>
            </div>
          </div>

          {/* Right Visual Carousel / Highlights Column (Interactive Flagship Product) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div 
                onClick={() => onOpenProduct && onOpenProduct('lattafa-khamrah')}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#D4AF37]/80 rounded-3xl p-4 shadow-2xl cursor-pointer group/hero transition-all duration-300 hover:scale-[1.02]"
                title="Haz clic para ver detalles de Lattafa Khamrah"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-square bg-[#1E0741]/80">
                  <img 
                    src="/assets/images/lattafa_khamrah.jpg" 
                    alt="Lattafa Khamrah frasco de cristal tallado"
                    className="w-full h-full object-cover transform group-hover/hero:scale-108 transition-transform duration-700" 
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#1E0741] text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-[#1E0741]" />
                    <span>Top #1 Viral TikTok</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-black px-2.5 py-1 rounded-full shadow-md border border-white/60">
                    -41% OFF
                  </div>

                  {/* Hover Quick View Overlay */}
                  <div className="absolute inset-0 bg-[#2E1065]/30 backdrop-blur-[2px] opacity-0 group-hover/hero:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-[#2E1065] font-black text-xs py-2.5 px-5 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/hero:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-[#D4AF37]" />
                      <span>Ver Detalles & Decant</span>
                    </span>
                  </div>

                  {/* Product Info Bar */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#121212]/95 backdrop-blur-md border border-white/10 p-3.5 rounded-2xl flex items-center justify-between gap-2 shadow-xl">
                    <div>
                      <span className="text-[10px] text-[#D4AF37] font-extrabold uppercase tracking-widest block">
                        Lattafa Parfums
                      </span>
                      <h4 className="font-bold text-sm text-white group-hover/hero:text-[#D4AF37] transition-colors">
                        Khamrah Eau de Parfum
                      </h4>
                      <p className="text-[11px] text-gray-300">Praliné, Canela y Dátiles Orientales</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold text-gray-400 line-through decoration-rose-500 block">$98.00</span>
                      <span className="text-base font-black text-[#D4AF37]">$58.00</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Indicator */}
                <div className="mt-3 flex items-center justify-between gap-2 px-1 text-xs">
                  <span className="text-[11px] text-purple-200 font-medium">
                    ⚡ Disponible en Botella Completa (100ml) y Decant (10ml)
                  </span>
                  <span className="text-xs font-bold text-[#D4AF37] group-hover/hero:underline flex items-center gap-1 whitespace-nowrap">
                    <span>Ver Fragancia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
