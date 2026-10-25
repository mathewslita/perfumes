import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectIndex 
}) {
  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Lightbox Container */}
      <div 
        className="relative max-w-5xl w-full max-h-[96vh] bg-[#0E0E0E] rounded-3xl shadow-2xl p-3 sm:p-6 flex flex-col items-center border border-[#C9A961]/40 text-[#F5F1E8]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Bar: Title & Close Button */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 gap-2">
          
          {/* Image indicator */}
          <div className="flex items-center gap-2">
            {images.length > 1 && (
              <span className="text-[11px] font-mono text-[#C9A961] font-bold bg-[#C9A961]/15 px-2.5 py-1 rounded-full border border-[#C9A961]/30">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <span className="text-xs text-gray-300 font-bold uppercase tracking-wider hidden sm:inline">
              FOTOGRAFIA OFICIAL EN ALTA RESOLUCION
            </span>
          </div>

          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors border border-white/10 cursor-pointer"
            aria-label="Cerrar vista completa"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5 text-[#C9A961]" />
          </button>
        </div>

        {/* Center Main Image Stage with Nav Arrows */}
        <div className="relative w-full h-[58vh] sm:h-[64vh] md:h-[68vh] flex items-center justify-center my-3 bg-[#141414] rounded-2xl border border-white/5 overflow-hidden">
          
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0E0E0E]/90 border border-[#C9A961]/40 shadow-xl text-[#C9A961] flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0E0E0E] transition-all active:scale-95 cursor-pointer"
              aria-label="Foto anterior"
              title="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Main Clean Image Presentation */}
          <div className="w-full h-full flex items-center justify-center p-3 sm:p-5">
            <img 
              src={images[currentIndex]} 
              alt="Detalle de alta resolucion del perfume" 
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] select-none pointer-events-auto"
            />
          </div>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0E0E0E]/90 border border-[#C9A961]/40 shadow-xl text-[#C9A961] flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0E0E0E] transition-all active:scale-95 cursor-pointer"
              aria-label="Foto siguiente"
              title="Foto siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

        </div>

        {/* Bottom Thumbnail Strip: Solo si hay más de 1 imagen */}
        {images.length > 1 && (
          <div className="w-full flex items-center justify-center gap-3 pt-3 border-t border-white/10 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => onSelectIndex(idx)}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 bg-[#1A1A1A] p-1 flex-shrink-0 transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'border-[#C9A961] ring-2 ring-[#C9A961]/40 shadow-lg scale-105' 
                    : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                }`}
              >
                <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
