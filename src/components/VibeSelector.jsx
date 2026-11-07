import React from 'react';
import { VIBE_CATEGORIES } from '../data/perfumes';

export default function VibeSelector({ activeVibe, onSelectVibe }) {
  return (
    <div className="bg-[#F5F1E8] py-3 sm:py-5 border-b border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Centered Title & Subtitle */}
        <div className="text-center mb-3 sm:mb-5">
          <span className="text-[10px] sm:text-[11px] font-extrabold tracking-[0.25em] text-[#A58B4E] uppercase block mb-1">
            DESCUBRIMIENTO POR OCASIÓN
          </span>
          <h3 className="font-serif text-base sm:text-2xl font-bold text-[#0E0E0E] uppercase tracking-wide">
            ¿QUÉ ESTILO BUSCAS HOY?
          </h3>
        </div>

        {/* Píldoras Horizontales Fluidas en Móvil y Centradas en Desktop */}
        <div className="flex items-center sm:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-2.5 px-1 py-1 -mx-2 sm:mx-0">
          {VIBE_CATEGORIES.map((vibe) => {
            const isActive = activeVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={() => onSelectVibe(vibe.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-xs uppercase tracking-wider cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-[#0E0E0E] text-[#C9A961] ring-1.5 ring-[#C9A961] shadow-md scale-102'
                    : 'bg-white text-gray-800 hover:text-[#0E0E0E] hover:bg-[#C9A961]/15 border border-gray-200 hover:border-[#C9A961]/50'
                }`}
              >
                <span className="text-xs sm:text-base">{vibe.icon}</span>
                <span>{vibe.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
