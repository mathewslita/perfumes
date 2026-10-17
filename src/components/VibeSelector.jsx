import React from 'react';
import { VIBE_CATEGORIES } from '../data/perfumes';

export default function VibeSelector({ activeVibe, onSelectVibe }) {
  return (
    <div className="bg-[#FAF7F2] py-6 border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title for Beginners */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
              Compra Rápida e Intuitiva
            </span>
            <h3 className="font-arabic-title text-base sm:text-lg font-bold text-[#2E1065]">
              ¿Qué vibra o momento buscas hoy?
            </h3>
          </div>
          <span className="text-xs text-gray-500 italic">
            Elige tu estilo sin necesidad de olerlo previamente ✨
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
                    ? 'bg-[#2E1065] text-[#D4AF37] ring-2 ring-[#D4AF37] shadow-md scale-105'
                    : 'bg-white text-gray-700 hover:text-[#2E1065] hover:bg-purple-50/80 border border-gray-200'
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
