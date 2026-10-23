import React, { useState } from 'react';
import { 
  X, ShoppingBag, Zap, ShieldCheck, Truck, Check, 
  Maximize2, Clock, Sparkles, Wind, Calendar, Info, Flame, ExternalLink, MessageCircle 
} from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function ProductDetailModal({ 
  product, 
  onClose, 
  onAddToCart,
  onBuyNowWhatsApp
}) {
  if (!product) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState('100ml'); // '100ml' or 'decant'
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentPrice = selectedFormat === '100ml' ? product.price100ml : product.priceDecant;
  const originalPrice = selectedFormat === '100ml' ? product.originalPrice100ml : product.originalPriceDecant;
  const savings = originalPrice - currentPrice;

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageMain];
  const isArabic = product.collection === 'arabes';
  const fragranticaUrl = product.fraganticaUrl || `https://www.fragrantica.es/buscar/?query=${encodeURIComponent(product.fraganticaQuery || (product.brand + ' ' + product.name))}`;

  const handleAddToCart = () => {
    onAddToCart(product, selectedFormat, quantity);
  };

  const handleBuyNow = () => {
    onBuyNowWhatsApp(product, selectedFormat, quantity);
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div 
          className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-6 border border-[#C9A961]/30 flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-[#0E0E0E] hover:text-[#C9A961] text-gray-700 p-2.5 rounded-full transition-colors border border-gray-200 shadow-sm"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-8 space-y-7 bg-white">
            
            {/* Top Grid: Gallery Left + Purchase Panel Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
              
              {/* Left Column: Gallery + Lightbox Trigger */}
              <div className="md:col-span-6 flex flex-col gap-3.5">
                <div 
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-square bg-[#F5F1E8] rounded-2xl p-6 border border-gray-200 cursor-pointer overflow-hidden flex items-center justify-center group"
                >
                  <img 
                    src={images[activeImgIndex]} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0E0E0E] text-[#C9A961] font-black text-xs px-3 py-1 rounded-full shadow-lg border border-[#C9A961]/50 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#C9A961] fill-[#C9A961]" />
                    <span>-{product.discountPercent}% OFF</span>
                  </div>
                  <button 
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all flex items-center gap-1 text-xs font-bold border border-gray-200"
                    title="Ver pantalla completa"
                  >
                    <Maximize2 className="w-4 h-4 text-[#0E0E0E]" />
                    <span className="hidden sm:inline">Zoom</span>
                  </button>
                </div>

                {/* Thumbnails Strip */}
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 bg-[#F5F1E8] p-1 flex-shrink-0 transition-all ${
                        activeImgIndex === idx 
                          ? 'border-[#0E0E0E] shadow-md scale-105 ring-2 ring-[#C9A961]' 
                          : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Direct Purchase Conversion Engine */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  {/* Brand & Collection Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-extrabold tracking-widest text-[#0E0E0E] uppercase text-sm">
                      {product.brand}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      isArabic 
                        ? 'bg-[#C9A961]/15 text-[#0E0E0E] border-[#C9A961]' 
                        : 'bg-[#0E0E0E] text-white border-[#C9A961]/40'
                    }`}>
                      {isArabic ? '👑 Colección Árabe' : '✨ Alta Costura Diseñador'}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="font-arabic-title text-2xl sm:text-3xl font-black text-[#0E0E0E] leading-tight">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-2.5 mt-2 flex-wrap">
                    <span className="text-xs bg-[#0E0E0E] text-[#C9A961] font-bold px-2.5 py-0.5 rounded-full">
                      {product.concentration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Original con Sello de Fábrica</span>
                    </span>
                    <a
                      href={fragranticaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#A58B4E] hover:text-[#0E0E0E] transition-colors"
                      title="Consultar opiniones verificadas de la comunidad mundial en Fragrantica"
                    >
                      <span>★ Ver opiniones en Fragrantica.es</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Pricing Box & Savings */}
                  <div className="mt-3.5 p-3.5 bg-[#F5F1E8] rounded-2xl border border-[#C9A961]/30 shadow-sm">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-[#0E0E0E]">
                        ${currentPrice.toFixed(2)}
                      </span>
                      <span className="text-sm font-bold text-gray-400 line-through decoration-rose-500 decoration-1.5">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-auto bg-[#0E0E0E] text-[#C9A961] text-xs font-black px-3 py-1 rounded-full border border-[#C9A961]/40 shadow-sm">
                        Ahorras ${savings.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-700 mt-2 pt-2 border-t border-gray-300/60">
                      <span>✓ Lote oficial sellado con Batch Code</span>
                      <span className="text-[#A58B4E] font-bold flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#C9A961] fill-[#C9A961]" /> Alta demanda
                      </span>
                    </div>
                  </div>

                  {/* Format Selector: Botella Completa vs Decant */}
                  <div className="mt-4">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Seleccionar Presentación:
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={() => setSelectedFormat('100ml')}
                        className={`p-3 rounded-xl border text-left transition-all relative ${
                          selectedFormat === '100ml'
                            ? 'border-[#0E0E0E] bg-white ring-2 ring-[#C9A961] shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-gray-900">Botella Completa</span>
                          <span className="text-[9px] bg-[#0E0E0E] text-[#C9A961] font-black px-1.5 py-0.5 rounded">Favorito</span>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{product.volume100ml}</div>
                        <div className="text-sm font-black text-[#0E0E0E] mt-1">
                          ${product.price100ml.toFixed(2)}
                        </div>
                        {selectedFormat === '100ml' && (
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedFormat('decant')}
                        className={`p-3 rounded-xl border text-left transition-all relative ${
                          selectedFormat === 'decant'
                            ? 'border-[#0E0E0E] bg-white ring-2 ring-[#C9A961] shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-gray-900">Decant Muestra 10ml</span>
                          <span className="text-[9px] bg-[#C9A961] text-[#0E0E0E] font-black px-1.5 py-0.5 rounded">🧪 Probar</span>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{product.volumeDecant}</div>
                        <div className="text-sm font-black text-[#0E0E0E] mt-1">
                          ${product.priceDecant.toFixed(2)}
                        </div>
                        {selectedFormat === 'decant' && (
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Quantity and Primary Conversion Actions */}
                  <div className="mt-4 space-y-2.5">
                    <div className="flex items-center gap-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded-full bg-white px-3 py-1.5 shadow-sm">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="text-gray-600 hover:text-black font-bold px-2 py-0.5 text-base"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm text-[#0E0E0E] px-3 min-w-[20px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="text-gray-600 hover:text-black font-bold px-2 py-0.5 text-base"
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        className="flex-grow bg-[#0E0E0E] hover:bg-[#1C1C1C] active:scale-98 text-white font-bold text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all border border-[#C9A961]/40"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#C9A961]" />
                        <span>Agregar al Carrito</span>
                      </button>
                    </div>

                    {/* Direct Buy Now via WhatsApp (+593 99 285 1808) */}
                    <button
                      onClick={handleBuyNow}
                      className="w-full bg-[#C9A961] hover:bg-[#B89228] active:scale-98 text-[#0E0E0E] font-black text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <Zap className="w-4 h-4 fill-current" />
                      <span>Comprar Ahora por WhatsApp</span>
                    </button>
                  </div>

                  {/* Guarantees Box */}
                  <div className="mt-3.5 p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1.5 text-[11px] text-gray-700">
                    <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                      <Truck className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Despacho express 24 a 48h con empaque blindado a todo el país</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#0E0E0E] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0 text-[#C9A961]" />
                      <span>Garantía ARKANO: 100% original con sello de fábrica y batch code</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* SECCIÓN OPTIMIZADA: PERFIL OLFATIVO & RENDIMIENTO EN VENTAS */}
            {/* Reemplaza la tabla pesada y las pestañas repetitivas por un formato ágil, seductor y directo a ventas */}
            <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 bg-[#F5F1E8]/60 space-y-5">
              
              {/* Header de la Sección */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-gray-200">
                <div>
                  <h3 className="font-arabic-title text-base sm:text-lg font-bold text-[#0E0E0E] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#C9A961]" /> Perfil Olfativo & Rendimiento
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    {product.inspiration}
                  </p>
                </div>

                {/* Botón directo y elegante a Fragrantica */}
                <a
                  href={fragranticaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0E0E0E] hover:bg-[#1F1F1F] text-[#C9A961] px-4 py-2 rounded-full text-xs font-bold transition-all border border-[#C9A961]/40 shadow-sm flex-shrink-0 self-start sm:self-auto"
                  title="Consultar ficha completa y miles de reseñas en Fragrantica.es"
                >
                  <span>Ficha en Fragrantica.es</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Pirámide Olfativa Rápida (Elegante y visual para ventas) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                {/* Notas de Salida */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#A58B4E] mb-1 flex items-center gap-1">
                    <span>🍊</span> Notas de Salida (Primeros 15 min)
                  </div>
                  <p className="text-xs text-gray-900 font-semibold leading-relaxed">
                    {product.technicalTable.headNotes}
                  </p>
                </div>

                {/* Notas de Corazón */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#A58B4E] mb-1 flex items-center gap-1">
                    <span>🌹</span> Notas de Corazón (Cuerpo del Perfume)
                  </div>
                  <p className="text-xs text-gray-900 font-semibold leading-relaxed">
                    {product.technicalTable.heartNotes}
                  </p>
                </div>

                {/* Notas de Fondo */}
                <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                  <div className="text-[10px] font-black uppercase tracking-wider text-[#A58B4E] mb-1 flex items-center gap-1">
                    <span>🪵</span> Notas de Fondo (Fijación 12h+)
                  </div>
                  <p className="text-xs text-gray-900 font-semibold leading-relaxed">
                    {product.technicalTable.baseNotes}
                  </p>
                </div>
              </div>

              {/* Rendimiento en Piel */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                    <Clock className="w-4 h-4 text-[#0E0E0E]" /> Duración:
                  </span>
                  <span className="text-xs font-black text-[#0E0E0E]">{product.performance.durationLabel}</span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                    <Wind className="w-4 h-4 text-[#0E0E0E]" /> Proyección:
                  </span>
                  <span className="text-xs font-black text-[#0E0E0E]">{product.performance.projectionLabel}</span>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-gray-700">
                    <Calendar className="w-4 h-4 text-[#0E0E0E]" /> Estación Ideal:
                  </span>
                  <span className="text-xs font-black text-[#0E0E0E]">{product.performance.seasonLabel}</span>
                </div>
              </div>

              {/* Callout de Cierre para Asesoría Express por WhatsApp */}
              <div className="bg-[#0E0E0E] text-[#F5F1E8] p-4 rounded-xl border border-[#C9A961]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-[#C9A961] text-[#0E0E0E] flex items-center justify-center font-black flex-shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="font-bold text-white block">
                      ¿Tienes dudas sobre cómo proyecta en tu piel?
                    </span>
                    <span className="text-[11px] text-gray-400">
                      Pregúntanos por WhatsApp al +593 99 285 1808 y un asesor te responderá de inmediato.
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBuyNow}
                  className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs px-4 py-2 rounded-full transition-colors flex-shrink-0 flex items-center gap-1.5"
                >
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>Pedir Ahora</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <LightboxModal
          images={images}
          currentIndex={activeImgIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setActiveImgIndex((prev) => (prev + 1) % images.length)}
          onPrev={() => setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length)}
          onSelectIndex={(idx) => setActiveImgIndex(idx)}
        />
      )}
    </>
  );
}
