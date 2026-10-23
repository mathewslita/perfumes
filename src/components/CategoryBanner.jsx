import React from 'react';
import { Crown, Award, ArrowRight } from 'lucide-react';
import { COLLECTIONS_DATA } from '../data/perfumes';

export default function CategoryBanner({ 
  activeCollection, // 'all' | 'arabes' | 'disenador'
  onSelectCollection 
}) {
  const arabicData = COLLECTIONS_DATA.arabes;
  const designerData = COLLECTIONS_DATA.disenador;

  return (
    <section className="py-14 sm:py-20 bg-[#F9F7F2] border-b border-[#C9A961]/25 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Minimalist Editorial Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] tracking-[0.35em] font-extrabold uppercase text-[#A58B4E] block mb-2">
            UNIVERSOS OLFATIVOS
          </span>
          <h2 className="font-arabic-title text-2xl sm:text-3xl lg:text-4xl font-light text-[#0E0E0E] tracking-[0.16em] uppercase">
            NUESTRAS CATEGORÍAS
          </h2>
          <div className="w-12 h-px bg-[#C9A961] mx-auto mt-4 mb-3" />
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Selecciona la categoría para explorar sus joyas aromáticas
          </p>
        </div>

        {/* 2 Clean Aesthetic Category Cards (Árabes & Diseñador) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Categoría 1: Perfumes Árabes */}
          <div
            onClick={() => onSelectCollection('arabes')}
            className={`group rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between border ${
              activeCollection === 'arabes'
                ? 'bg-white border-[#0E0E0E] shadow-xl ring-2 ring-[#C9A961]'
                : 'bg-white hover:bg-white border-gray-200 hover:border-[#C9A961] shadow-sm hover:shadow-lg hover:-translate-y-1'
            }`}
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-[#C9A961] text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#C9A961]/40">
                  <Crown className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>CATEGORÍA ÁRABE</span>
                </span>
                <span className="text-[11px] font-bold text-[#A58B4E] tracking-wider uppercase">
                  Dubái & EAU
                </span>
              </div>

              {/* Title */}
              <h3 className="font-arabic-title text-2xl sm:text-3xl font-black text-[#0E0E0E] tracking-tight mb-2 group-hover:text-[#A58B4E] transition-colors">
                Perfumes Árabes
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">
                Lattafa • Armaf • Afnan • Al Haramain • Rasasi • Bharara
              </p>

              {/* High-Quality Identifying Phrase (Pedido Expreso del Usuario) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F1E8]/70 border-l-4 border-[#C9A961] mb-6">
                <p className="font-serif italic text-sm sm:text-base text-[#0E0E0E] leading-relaxed">
                  "{arabicData.phrase}"
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-100 text-center">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Fijación</div>
                  <div className="text-xs font-black text-[#0E0E0E] mt-0.5">14h a 16h+</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Aceites</div>
                  <div className="text-xs font-black text-[#0E0E0E] mt-0.5">18% - 28%</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Garantía</div>
                  <div className="text-xs font-black text-[#0E0E0E] mt-0.5">Dubái 100%</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs font-black text-[#0E0E0E] uppercase tracking-wider group-hover:text-[#A58B4E] transition-colors flex items-center gap-2">
                <span>Explorar Colección Árabe</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className={`w-3 h-3 rounded-full border ${activeCollection === 'arabes' ? 'bg-[#C9A961] border-[#0E0E0E]' : 'border-gray-300'}`} />
            </div>
          </div>

          {/* Categoría 2: Perfumes de Diseñador */}
          <div
            onClick={() => onSelectCollection('disenador')}
            className={`group rounded-3xl p-8 sm:p-10 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between border ${
              activeCollection === 'disenador'
                ? 'bg-white border-[#0E0E0E] shadow-xl ring-2 ring-[#C9A961]'
                : 'bg-white hover:bg-white border-gray-200 hover:border-[#C9A961] shadow-sm hover:shadow-lg hover:-translate-y-1'
            }`}
          >
            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#C9A961]/40">
                  <Award className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>CATEGORÍA DISEÑADOR</span>
                </span>
                <span className="text-[11px] font-bold text-[#A58B4E] tracking-wider uppercase">
                  Alta Costura Global
                </span>
              </div>

              {/* Title */}
              <h3 className="font-arabic-title text-2xl sm:text-3xl font-black text-[#0E0E0E] tracking-tight mb-2 group-hover:text-[#A58B4E] transition-colors">
                Perfumes de Diseñador
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-6">
                Dior • Chanel • Yves Saint Laurent • Tom Ford • Versace • Xerjoff
              </p>

              {/* High-Quality Identifying Phrase (Pedido Expreso del Usuario) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F1E8]/70 border-l-4 border-[#0E0E0E] mb-6">
                <p className="font-serif italic text-sm sm:text-base text-[#0E0E0E] leading-relaxed">
                  "{designerData.phrase}"
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-gray-100 text-center">
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Origen</div>
                  <div className="text-xs font-black text-[#0E0E0E] mt-0.5">París & Milán</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Estatus</div>
                  <div className="text-xs font-black text-[#0E0E0E] mt-0.5">Alta Gama</div>
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase font-semibold">Trazabilidad</div>
                  <div className="text-xs font-black text-[#0E0E0E] mt-0.5">Batch Code</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 flex items-center justify-between">
              <span className="text-xs font-black text-[#0E0E0E] uppercase tracking-wider group-hover:text-[#A58B4E] transition-colors flex items-center gap-2">
                <span>Explorar Colección Diseñador</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className={`w-3 h-3 rounded-full border ${activeCollection === 'disenador' ? 'bg-[#C9A961] border-[#0E0E0E]' : 'border-gray-300'}`} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
