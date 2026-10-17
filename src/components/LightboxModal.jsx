import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectIndex 
}) {
  if (!images || images.length === 0) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Lightbox Container (Ref: Imagen 5) */}
      <div 
        className="relative max-w-4xl w-full bg-white rounded-xl shadow-2xl p-6 sm:p-8 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Top Right (Ref: Imagen 5) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Cerrar vista completa"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Center Main Image Stage with Nav Arrows */}
        <div className="relative w-full h-[400px] sm:h-[480px] flex items-center justify-center">
          
          {/* Previous Arrow (Ref: Imagen 5) */}
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-200 shadow-md text-gray-800 flex items-center justify-center hover:bg-[#2E1065] hover:text-[#D4AF37] transition-all"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <img 
            src={images[currentIndex]} 
            alt="Detalle de alta resolución del perfume" 
            className="max-h-full max-w-full object-contain drop-shadow-xl"
          />

          {/* Next Arrow (Ref: Imagen 5) */}
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-200 shadow-md text-gray-800 flex items-center justify-center hover:bg-[#2E1065] hover:text-[#D4AF37] transition-all"
            aria-label="Foto siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Thumbnail Strip (Ref: Imagen 5) */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100 overflow-x-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => onSelectIndex(idx)}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 bg-gray-50 flex-shrink-0 transition-all ${
                currentIndex === idx 
                  ? 'border-[#2E1065] shadow-md scale-105' 
                  : 'border-gray-200 opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
