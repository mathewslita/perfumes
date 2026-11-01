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
      className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 select-none"
      onClick={onClose}
    >
      {/* Botón flotante para cerrar (esquina superior derecha) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-[#C9A961] hover:text-white border border-[#C9A961]/40 flex items-center justify-center transition-all shadow-2xl cursor-pointer active:scale-95 backdrop-blur-md"
        aria-label="Cerrar vista completa"
        title="Cerrar (Esc)"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Flecha Anterior (flotante izquierda) */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#0E0E0E] border border-[#C9A961]/40 shadow-2xl text-[#C9A961] hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer backdrop-blur-md"
          aria-label="Foto anterior"
          title="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Imagen Limpia en Alta Resolución Sin Cuadros Redundantes */}
      <div 
        className="relative max-w-full max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img 
          src={images[currentIndex]} 
          alt="Fotografía oficial en alta resolución" 
          className="max-h-[85vh] sm:max-h-[88vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-2xl filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] select-none transition-all duration-300"
        />
      </div>

      {/* Flecha Siguiente (flotante derecha) */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-[#0E0E0E] border border-[#C9A961]/40 shadow-2xl text-[#C9A961] hover:text-white flex items-center justify-center transition-all active:scale-90 cursor-pointer backdrop-blur-md"
          aria-label="Foto siguiente"
          title="Foto siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Indicador Minimalista Flotante Inferior (Solo si hay más de 1 imagen) */}
      {images.length > 1 && (
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl"
        >
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectIndex(idx)}
              className={`rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 h-2 bg-[#C9A961]'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
              title={`Imagen ${idx + 1}`}
              aria-label={`Imagen ${idx + 1}`}
            />
          ))}
          <span className="text-[10px] font-mono text-gray-300 ml-1 font-bold">
            {currentIndex + 1}/{images.length}
          </span>
        </div>
      )}
    </div>
  );
}
