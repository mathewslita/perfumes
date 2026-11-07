import React from 'react';
import { ShieldCheck, MessageCircle, HeartHandshake, CheckCircle, Crown } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="acerca-de-nosotros" className="py-12 sm:py-16 bg-[#F5F1E8] border-t border-b border-[#C9A961]/25 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* 3 Pillars of Trust Grid - Compacto, sutil y elegante */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">

          {/* Pillar 1: Árabes y Diseñador */}
          <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:border-[#C9A961]/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center flex-shrink-0 border border-[#C9A961]/40 shadow-xs">
                  <Crown className="w-4 h-4 text-[#C9A961]" />
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#0E0E0E] leading-snug">
                  1. Selección Dual: Árabes & Diseñador
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-normal">
                Reunimos lo mejor de dos continentes: los elixires virales de <strong className="font-bold text-[#0E0E0E]">Lattafa, Armaf, Afnan y Al Haramain</strong>, junto a obras icónicas de <strong className="font-bold text-[#0E0E0E]">Dior, Chanel, YSL y Tom Ford</strong> con controles de autenticidad.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Garantía de Origen Certificado</span>
            </div>
          </div>

          {/* Pillar 2: Sello Holográfico & Batch Code */}
          <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:border-[#C9A961]/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center flex-shrink-0 border border-[#C9A961]/40 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#C9A961]" />
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#0E0E0E] leading-snug">
                  2. Sello de Fábrica & Batch Code
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-normal">
                Cada perfume se entrega sellado con su celofán original de fábrica, <strong className="font-bold text-[#0E0E0E]">sello holográfico de autenticidad</strong> y código de lote (Batch Code) coincidente para verificar en CheckFresh y bases oficiales.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Trazabilidad 100% Verificable</span>
            </div>
          </div>

          {/* Pillar 3: Especificaciones y Cultura del Decant */}
          <div className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:border-[#C9A961]/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center flex-shrink-0 border border-[#C9A961]/40 shadow-xs">
                  <HeartHandshake className="w-4 h-4 text-[#C9A961]" />
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-[#0E0E0E] leading-snug">
                  3. Transparencia & Cultura del Decant
                </h3>
              </div>
              <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-normal">
                Pirámides olfativas completas y notas detalladas para conocer cada matiz aromático antes de comprar con atomizadores de vidrio de alta precisión.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-[11px] font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Cero Riesgo de Compra a Ciegas</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Personal Advice Card */}
        <div className="bg-[#0E0E0E] rounded-3xl p-6 sm:p-9 border border-[#C9A961]/40 text-[#F5F1E8] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[#C9A961] text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase block">
              Asesoría Personalizada Inmediata
            </span>
            <h3 className="font-serif text-xl sm:text-3xl font-bold text-white tracking-wide">
              ¿No sabes qué perfume árabe o de diseñador elegir?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-normal leading-relaxed">
              Escríbenos directamente a WhatsApp. Nuestro equipo de asesores te recomendará la fragancia perfecta según tu ocasión, clima y gustos olfativos.
            </p>
          </div>

          <a
            href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20personalizada%20para%20elegir%20mi%20perfume"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs sm:text-sm py-3.5 px-7 sm:py-4 sm:px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#0E0E0E]" />
            <span>Hablar con un Asesor ARKANO</span>
          </a>
        </div>

      </div>
    </section>
  );
}
