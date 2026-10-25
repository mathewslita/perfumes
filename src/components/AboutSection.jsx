import React from 'react';
import { ShieldCheck, Award, Sparkles, MessageCircle, HeartHandshake, CheckCircle, Crown, ExternalLink } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="acerca-de-nosotros" className="py-16 sm:py-20 bg-[#F5F1E8] border-t border-b border-[#C9A961]/25 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-[#C9A961] text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-sm border border-[#C9A961]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
            <span>Nuestra Filosofía de Alta Perfumería</span>
          </div>

          <h2 className="font-arabic-title text-2xl sm:text-4xl font-black text-[#0E0E0E] tracking-tight">
            EL UNIVERSO DE ARKANO PERFUMERÍA
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-[#0E0E0E] via-[#C9A961] to-[#0E0E0E] mx-auto my-4 rounded-full" />

          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            En <strong>ARKANO</strong> creemos que una fragancia es la firma invisible de tu personalidad. 
            Curamos dos mundos complementarios de excelencia: <strong>el misterio oriental de los perfumes árabes de Dubái</strong> (con estela y fijación extrema de más de 12 horas) y <strong>la cumbre del lujo con perfumes de diseñador de alta costura</strong> (Dior, Chanel, YSL, Tom Ford).
          </p>
        </div>

        {/* 3 Pillars of Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Pillar 1: Árabes y Diseñador */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center mb-5 border border-[#C9A961]/40">
                <Crown className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="font-arabic-title text-lg font-bold text-gray-950 mb-2">
                1. Selección Dual: Árabes & Diseñador
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Reunimos lo mejor de dos continentes: los elixires virales de <strong>Lattafa, Armaf, Afnan y Al Haramain</strong>, junto a las obras icónicas de <strong>Dior, Chanel, Yves Saint Laurent y Tom Ford</strong>. Cada frasco pasa por rigurosos controles de autenticidad.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Garantía de Origen Certificado</span>
            </div>
          </div>

          {/* Pillar 2: Sello Holográfico & Batch Code */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#C9A961] shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-3 right-3 bg-[#0E0E0E] text-[#C9A961] text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider border border-[#C9A961]/40">
              Seguridad ARKANO
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F5F1E8] text-[#0E0E0E] flex items-center justify-center mb-5 border border-[#C9A961]/40">
                <ShieldCheck className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="font-arabic-title text-lg font-bold text-gray-950 mb-2">
                2. Sello de Fábrica & Batch Code
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cada perfume se entrega sellado con su celofán original de fábrica, 
                <strong> sello holográfico de autenticidad</strong> y código de lote (Batch Code) 
                coincidente entre el frasco y la caja para verificar en CheckFresh y bases de datos oficiales.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Trazabilidad 100% Verificable</span>
            </div>
          </div>

          {/* Pillar 3: Especificaciones y Cultura del Decant */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center mb-5 border border-[#C9A961]/40">
                <HeartHandshake className="w-6 h-6 text-[#C9A961]" />
              </div>
              <h3 className="font-arabic-title text-lg font-bold text-gray-950 mb-2">
                3. Transparencia & Cultura del Decant
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Incorporamos pirámides olfativas completas y notas detalladas para que conozcas cada matiz aromático antes de comprar. Además, dispones de <strong>Decants de 10ml</strong> (~120 sprays) para probar la evolución en tu piel sin arriesgar en una compra a ciegas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Cero Riesgo de Compra a Ciegas</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Personal Advice Card */}
        <div className="bg-[#0E0E0E] rounded-3xl p-6 sm:p-10 border border-[#C9A961]/40 text-[#F5F1E8] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-[#C9A961] text-xs font-bold tracking-widest uppercase">
              Asesoría Personalizada Inmediata
            </span>
            <h3 className="font-arabic-title text-xl sm:text-2xl font-black text-white">
              ¿No sabes qué perfume árabe o de diseñador elegir?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Escríbenos directamente a WhatsApp. Nuestro equipo de sommeliers te recomendará la fragancia perfecta según tu ocasión, clima y gustos olfativos.
            </p>
          </div>

          <a
            href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20personalizada%20para%20elegir%20mi%20perfume"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs sm:text-sm py-3.5 px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#0E0E0E]" />
            <span>Hablar con un Sommelier ARKANO</span>
          </a>
        </div>

      </div>
    </section>
  );
}
