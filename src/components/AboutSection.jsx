import React from 'react';
import { ShieldCheck, MessageCircle, HeartHandshake, CheckCircle, Crown } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="acerca-de-nosotros" className="py-12 sm:py-16 bg-[#F5F1E8] border-t border-b border-[#C9A961]/25 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-arabic-title text-xl sm:text-3xl font-black text-[#0E0E0E] tracking-tight">
            EL UNIVERSO DE ARKANO PERFUMERÍA
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-[#0E0E0E] via-[#C9A961] to-[#0E0E0E] mx-auto my-3 rounded-full" />

          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal">
            En <strong>ARKANO</strong> creemos que una fragancia es la firma invisible de tu personalidad.
            Curamos dos mundos complementarios de excelencia: <strong>el misterio oriental de los perfumes árabes de Dubái</strong> (con estela y fijación extrema de más de 12 horas) y <strong>la cumbre del lujo con perfumes de diseñador.</strong>
          </p>
        </div>

        {/* 3 Pillars of Trust Grid - Compacto, sutil y elegante */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5 mb-8 sm:mb-10">

          {/* Pillar 1: Árabes y Diseñador */}
          <div className="bg-white/90 rounded-xl p-4 sm:p-5 border border-gray-200/80 shadow-2xs hover:border-[#C9A961]/40 hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center flex-shrink-0 border border-[#C9A961]/30">
                  <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A961]" />
                </div>
                <h3 className="font-arabic-title text-[13px] sm:text-sm font-bold text-gray-900 leading-snug">
                  1. Selección Dual: Árabes & Diseñador
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-light">
                Reunimos lo mejor de dos continentes: los elixires virales de <strong>Lattafa, Armaf, Afnan y Al Haramain</strong>, junto a obras icónicas de <strong>Dior, Chanel, YSL y Tom Ford</strong> con controles de autenticidad.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-emerald-800">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Garantía de Origen Certificado</span>
            </div>
          </div>

          {/* Pillar 2: Sello Holográfico & Batch Code */}
          <div className="bg-white/90 rounded-xl p-4 sm:p-5 border border-gray-200/80 shadow-2xs hover:border-[#C9A961]/40 hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center flex-shrink-0 border border-[#C9A961]/30">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A961]" />
                </div>
                <h3 className="font-arabic-title text-[13px] sm:text-sm font-bold text-gray-900 leading-snug">
                  2. Sello de Fábrica & Batch Code
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-light">
                Cada perfume se entrega sellado con su celofán original de fábrica, <strong>sello holográfico de autenticidad</strong> y código de lote (Batch Code) coincidente para verificar en CheckFresh y bases oficiales.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-emerald-800">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Trazabilidad 100% Verificable</span>
            </div>
          </div>

          {/* Pillar 3: Especificaciones y Cultura del Decant */}
          <div className="bg-white/90 rounded-xl p-4 sm:p-5 border border-gray-200/80 shadow-2xs hover:border-[#C9A961]/40 hover:shadow-xs transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center flex-shrink-0 border border-[#C9A961]/30">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C9A961]" />
                </div>
                <h3 className="font-arabic-title text-[13px] sm:text-sm font-bold text-gray-900 leading-snug">
                  3. Transparencia & Cultura del Decant
                </h3>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-light">
                Pirámides olfativas completas y notas detalladas para conocer cada matiz aromático antes de comprar.
              </p>
            </div>
            <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-emerald-800">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Cero Riesgo de Compra a Ciegas</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Personal Advice Card */}
        <div className="bg-[#0E0E0E] rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#C9A961]/40 text-[#F5F1E8] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1.5 text-center lg:text-left">
            <span className="text-[#C9A961] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Asesoría Personalizada Inmediata
            </span>
            <h3 className="font-arabic-title text-lg sm:text-2xl font-black text-white">
              ¿No sabes qué perfume árabe o de diseñador elegir?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light">
              Escríbenos directamente a WhatsApp. Nuestro equipo de sommeliers te recomendará la fragancia perfecta según tu ocasión, clima y gustos olfativos.
            </p>
          </div>

          <a
            href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20personalizada%20para%20elegir%20mi%20perfume"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs sm:text-sm py-3 px-6 sm:py-3.5 sm:px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#0E0E0E]" />
            <span>Hablar con un Sommelier ARKANO</span>
          </a>
        </div>

      </div>
    </section>
  );
}
