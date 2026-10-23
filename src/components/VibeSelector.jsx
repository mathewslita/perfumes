import React from 'react';
import { VIBE_CATEGORIES } from '../data/perfumes';

export default function VibeSelector({ activeVibe, onSelectVibe }) {
  return (
    <div className="bg-[#F5F1E8] py-6 border-b border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#A58B4E] uppercase">
              Descubrimiento por Ocasión
            </span>
            <h3 className="font-arabic-title text-base sm:text-lg font-bold text-[#0E0E0E]">
              ¿Qué estilo o momento buscas hoy?
            </h3>
          </div>
          <span className="text-xs text-gray-500 italic">
            Filtra rápidamente por personalidad y estela ✨
          </span>
        </div>

        {/* Scrollable / Responsive Pills Row */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {VIBE_CATEGORIES.map((vibe) => {
            const isActive = activeVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                onClick={() => onSelectVibe(vibe.id)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  isActive
                    ? 'bg-[#0E0E0E] text-[#C9A961] ring-2 ring-[#C9A961] shadow-md scale-105'
                    : 'bg-white text-gray-800 hover:text-[#0E0E0E] hover:bg-[#C9A961]/15 border border-gray-200'
                }`}
              >
                <span className="text-base">{vibe.icon}</span>
                <span>{vibe.name}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
