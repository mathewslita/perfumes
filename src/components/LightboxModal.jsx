import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Sparkles } from 'lucide-react';

export default function LightboxModal({ 
  images, 
  currentIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectIndex 
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Reset zoom whenever image changes
  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  // Keyboard navigation & zoom shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === '+' || e.key === '=') setZoomLevel(z => Math.min(2.5, +(z + 0.5).toFixed(1)));
      if (e.key === '-') setZoomLevel(z => Math.max(1, +(z - 0.5).toFixed(1)));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!images || images.length === 0) return null;

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel(z => Math.min(2.5, +(z + 0.5).toFixed(1)));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel(z => Math.max(1, +(z - 0.5).toFixed(1)));
  };

  const handleResetZoom = (e) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  const handleToggleDoubleClick = (e) => {
    e.stopPropagation();
    setZoomLevel(z => (z > 1 ? 1 : 2));
  };

  const isInfographic = currentIndex === 1 || (images[currentIndex] && images[currentIndex].includes('infographic'));

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
        
        {/* Top Bar: Infographic Notice + Zoom Controls + Close */}
        <div className="w-full flex items-center justify-between pb-3 border-b border-white/10 gap-2">
          
          {/* Image indicator */}
          <div className="flex items-center gap-2">
            {images.length > 1 && (
              <span className="text-[11px] font-mono text-[#C9A961] font-bold bg-[#C9A961]/15 px-2.5 py-1 rounded-full border border-[#C9A961]/30">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <span className="text-xs text-gray-300 font-medium hidden sm:inline">
              Fotografía Oficial de Alta Resolución
            </span>
          </div>

          {/* Center Zoom Controls */}
          <div className="flex items-center gap-1.5 bg-[#1A1A1A] border border-[#C9A961]/35 rounded-full px-2 py-1 shadow-inner">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 1}
              className={`p-1.5 rounded-full transition-colors ${
                zoomLevel <= 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
              title="Alejar (-)"
              aria-label="Alejar"
            >
              <ZoomOut className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-[#C9A961] px-1.5 min-w-[36px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>

            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 2.5}
              className={`p-1.5 rounded-full transition-colors ${
                zoomLevel >= 2.5 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
              title="Acercar (+)"
              aria-label="Acercar"
            >
              <ZoomIn className="w-4 h-4" />
            </button>

            {zoomLevel > 1 && (
              <button
                onClick={handleResetZoom}
                className="p-1.5 rounded-full text-gray-300 hover:text-[#C9A961] hover:bg-white/10 transition-colors ml-0.5"
                title="Restablecer tamaño (100%)"
                aria-label="Restablecer tamaño"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Close Button Top Right */}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors border border-white/10"
            aria-label="Cerrar vista completa"
            title="Cerrar (Esc)"
          >
            <X className="w-5 h-5 text-[#C9A961]" />
          </button>
        </div>

        {/* Center Main Image Stage with Nav Arrows */}
        <div className="relative w-full h-[52vh] sm:h-[58vh] md:h-[62vh] flex items-center justify-center my-2 overflow-auto bg-[#141414] rounded-2xl border border-white/5">
          
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0E0E0E]/90 border border-[#C9A961]/40 shadow-xl text-[#C9A961] flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0E0E0E] transition-all active:scale-95"
              aria-label="Foto anterior"
              title="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Zoomable Image Container */}
          <div 
            className={`w-full h-full flex items-center justify-center p-3 sm:p-4 overflow-auto ${
              zoomLevel > 1 ? 'cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onDoubleClick={handleToggleDoubleClick}
            title={zoomLevel > 1 ? 'Doble clic para restablecer' : 'Doble clic para ampliar al 200%'}
          >
            <img 
              src={images[currentIndex]} 
              alt="Detalle de alta resolución del perfume" 
              style={{
                transform: `scale(${zoomLevel})`,
                transition: 'transform 0.2s cubic-bezier(0.2, 0, 0, 1)'
              }}
              className="max-h-full max-w-full object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] select-none pointer-events-auto"
            />
          </div>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#0E0E0E]/90 border border-[#C9A961]/40 shadow-xl text-[#C9A961] flex items-center justify-center hover:bg-[#C9A961] hover:text-[#0E0E0E] transition-all active:scale-95"
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
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 bg-[#1A1A1A] p-1 flex-shrink-0 transition-all ${
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
