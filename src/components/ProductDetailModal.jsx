import React, { useState } from 'react';
import { 
  X, ShoppingBag, Zap, ShieldCheck, Truck, Check, 
  Maximize2, Clock, Sparkles, Wind, Calendar, Info, Flame 
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
  const [activeTab, setActiveTab] = useState('composicion'); // 'composicion', 'historia', 'autenticidad'

  const currentPrice = selectedFormat === '100ml' ? product.price100ml : product.priceDecant;
  const originalPrice = selectedFormat === '100ml' ? product.originalPrice100ml : product.originalPriceDecant;
  const savings = originalPrice - currentPrice;

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageMain];

  const handleAddToCart = () => {
    onAddToCart(product, selectedFormat, quantity);
  };

  const handleBuyNow = () => {
    onBuyNowWhatsApp(product, selectedFormat, quantity);
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div 
          className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden my-6 border border-gray-100 flex flex-col max-h-[92vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-4 sm:p-8 space-y-8">
            
            {/* Top Grid: Gallery Left + Purchase Panel Right (Ref: Imagen 5 & 6) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Gallery + Lightbox Trigger (Ref: Imagen 5 & 6) */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <div 
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-square bg-[#FAF7F2] rounded-2xl p-6 border border-gray-100 cursor-pointer overflow-hidden flex items-center justify-center group"
                >
                  <img 
                    src={images[activeImgIndex]} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-rose-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg border-2 border-white ring-1 ring-black/10 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                    <span>-{product.discountPercent}% OFF</span>
                  </div>
                  <button 
                    className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-all flex items-center gap-1 text-xs font-bold border border-gray-200"
                    title="Ver pantalla completa"
                  >
                    <Maximize2 className="w-4 h-4 text-[#2E1065]" />
                    <span className="hidden sm:inline">Zoom</span>
                  </button>
                </div>

                {/* Thumbnails Strip */}
                <div className="flex items-center gap-3 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 bg-[#FAF7F2] p-1 flex-shrink-0 transition-all ${
                        activeImgIndex === idx 
                          ? 'border-[#2E1065] shadow-md scale-105' 
                          : 'border-gray-200 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Purchase Panel (Ref: Imagen 6) */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-5">
                <div>
                  {/* Brand & Concentration */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span className="font-extrabold tracking-widest text-[#2E1065] uppercase">
                      {product.brand}
                    </span>
                    <span className="font-mono text-gray-400">SKU: {product.sku}</span>
                  </div>

                  {/* Title */}
                  <h1 className="font-arabic-title text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                    {product.name}
                  </h1>

                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs bg-purple-100 text-[#2E1065] font-bold px-2 py-0.5 rounded-full">
                      {product.concentration}
                    </span>
                    <div className="flex items-center text-amber-400 text-xs">
                      {'★'.repeat(5)}
                      <span className="text-gray-500 font-semibold ml-1.5 text-xs">
                        {product.rating} ({product.reviewCount} reseñas verificadas)
                      </span>
                    </div>
                  </div>

                  {/* Pricing Box & Savings (Ref: Imagen 6) */}
                  <div className="mt-4 p-3.5 bg-[#FAF7F2] rounded-xl border border-gray-200/90 shadow-sm">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-[#2E1065]">
                        ${currentPrice.toFixed(2)}
                      </span>
                      <span className="text-sm font-bold text-gray-600 line-through decoration-rose-500 decoration-1.5">
                        ${originalPrice.toFixed(2)}
                      </span>
                      <span className="ml-auto bg-emerald-100 text-emerald-900 text-xs font-black px-3 py-1 rounded-full border border-emerald-300/80 shadow-sm">
                        Precio un {product.discountPercent}% más ventajoso
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-600 mt-2 pt-2 border-t border-gray-200/60">
                      <span>✓ Impuestos incluidos • Ahorro de <strong>${savings.toFixed(2)}</strong></span>
                      <span className="text-amber-800 font-bold flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> 14 personas viendo ahora
                      </span>
                    </div>
                  </div>

                  {/* Format Selector (Ref: Key Conversion Element with UX guidance) */}
                  <div className="mt-5">
                    <label className="text-xs font-bold text-gray-800 uppercase tracking-wider block mb-2">
                      Seleccionar Presentación:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedFormat('100ml')}
                        className={`p-3.5 rounded-xl border text-left transition-all relative ${
                          selectedFormat === '100ml'
                            ? 'border-[#2E1065] bg-purple-50/80 ring-2 ring-[#2E1065]/30 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-gray-900">Botella Completa</span>
                          <span className="text-[9px] bg-purple-100 text-[#2E1065] font-black px-1.5 py-0.5 rounded">👑 Favorito</span>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{product.volume100ml}</div>
                        <div className="text-sm font-black text-[#2E1065] mt-1.5">
                          ${product.price100ml.toFixed(2)}
                        </div>
                        <div className="text-[10px] text-emerald-700 font-bold mt-0.5">
                          Mejor valor por ml
                        </div>
                        {selectedFormat === '100ml' && (
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#2E1065] text-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedFormat('decant')}
                        className={`p-3.5 rounded-xl border text-left transition-all relative ${
                          selectedFormat === 'decant'
                            ? 'border-[#2E1065] bg-purple-50/80 ring-2 ring-[#2E1065]/30 shadow-md'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-extrabold text-xs text-gray-900">Decant / Muestra</span>
                          <span className="text-[9px] bg-amber-100 text-amber-900 font-black px-1.5 py-0.5 rounded">🧪 Probar</span>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5">{product.volumeDecant}</div>
                        <div className="text-sm font-black text-[#2E1065] mt-1.5">
                          ${product.priceDecant.toFixed(2)}
                        </div>
                        <div className="text-[10px] text-purple-700 font-bold mt-0.5">
                          ~120 atomizaciones
                        </div>
                        {selectedFormat === 'decant' && (
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-[#2E1065] text-white flex items-center justify-center">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Quantity and Action Buttons (Ref: Imagen 6) */}
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center gap-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-200 rounded-full bg-white px-3 py-1.5 shadow-sm">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="text-gray-500 hover:text-black font-bold px-2 py-0.5 text-base"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm text-gray-900 px-3 min-w-[20px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="text-gray-500 hover:text-black font-bold px-2 py-0.5 text-base"
                        >
                          +
                        </button>
                      </div>

                      {/* Add to Cart Button */}
                      <button
                        onClick={handleAddToCart}
                        className="flex-grow bg-[#2E1065] hover:bg-[#3B0764] active:scale-98 text-white font-bold text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
                        <span>Agregar al Carrito</span>
                      </button>
                    </div>

                    {/* Direct Buy Now via WhatsApp (Ref: Imagen 6 "Comprar") */}
                    <button
                      onClick={handleBuyNow}
                      className="w-full bg-[#D4AF37] hover:bg-[#C59B27] active:scale-98 text-[#1E0741] font-black text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    >
                      <Zap className="w-4 h-4 fill-current" />
                      <span>Comprar Ahora por WhatsApp</span>
                    </button>
                  </div>

                  {/* Trust Box & Shipping Time (Ref: Imagen 6) */}
                  <div className="mt-5 p-3.5 bg-gray-50 rounded-xl border border-gray-200/70 space-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                      <Truck className="w-4 h-4 flex-shrink-0" />
                      <span>Entrega estimada: 24 a 48 horas en tu domicilio con empaque seguro</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-900 font-semibold">
                      <ShieldCheck className="w-4 h-4 flex-shrink-0 text-[#D4AF37]" />
                      <span>Autenticidad Garantizada: Incluye sello holográfico y Batch Code verificable</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Performance Gauges & Olfactory Reference (Ref: Imagen 7 + Nicho upgrades) */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-gray-200">
              <h3 className="font-arabic-title text-lg font-bold text-[#2E1065] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Rendimiento en Piel y Referencia Olfativa
              </h3>

              {/* Inspiration DNA Box */}
              <div className="bg-white p-4 rounded-xl border border-purple-100 mb-6 shadow-sm">
                <div className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" /> ¿A qué se parece?
                </div>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {product.inspiration}
                </p>
              </div>

              {/* 3 Progress Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Duration */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-purple-700" /> Duración
                    </span>
                    <span className="text-[#2E1065] font-black">{product.performance.durationLabel}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-700 to-[#D4AF37] h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${product.performance.durationPct}%` }}
                    />
                  </div>
                </div>

                {/* Projection */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Wind className="w-4 h-4 text-purple-700" /> Estela / Proyección
                    </span>
                    <span className="text-[#2E1065] font-black">{product.performance.projectionLabel}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-700 to-[#D4AF37] h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${product.performance.projectionPct}%` }}
                    />
                  </div>
                </div>

                {/* Season */}
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-700" /> Estación Ideal
                    </span>
                    <span className="text-[#2E1065] font-black">{product.performance.seasonLabel}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-purple-700 to-[#D4AF37] h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: `${product.performance.seasonPct}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Structured Table (Identical to Imagen 7) */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden">
              <div className="bg-[#2E1065] text-white px-6 py-3.5 flex items-center justify-between">
                <h4 className="font-arabic-title text-sm font-bold tracking-wider uppercase">
                  Ficha Técnica Estructurada (Composición y Notas)
                </h4>
                <span className="text-[11px] text-[#D4AF37] font-semibold">
                  Batch Code Verificado
                </span>
              </div>
              
              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                <div className="grid grid-cols-12 p-3.5 bg-white hover:bg-purple-50/40 transition-colors">
                  <div className="col-span-4 font-bold text-gray-700">Notas de cabeza (Salida):</div>
                  <div className="col-span-8 text-gray-800 font-medium">{product.technicalTable.headNotes}</div>
                </div>
                <div className="grid grid-cols-12 p-3.5 bg-[#FAF7F2] hover:bg-purple-50/40 transition-colors">
                  <div className="col-span-4 font-bold text-gray-700">Notas de corazón:</div>
                  <div className="col-span-8 text-gray-800 font-medium">{product.technicalTable.heartNotes}</div>
                </div>
                <div className="grid grid-cols-12 p-3.5 bg-white hover:bg-purple-50/40 transition-colors">
                  <div className="col-span-4 font-bold text-gray-700">Notas de fondo:</div>
                  <div className="col-span-8 text-gray-800 font-medium">{product.technicalTable.baseNotes}</div>
                </div>
                <div className="grid grid-cols-12 p-3.5 bg-[#FAF7F2] hover:bg-purple-50/40 transition-colors">
                  <div className="col-span-4 font-bold text-gray-700">Tipo de fragancia:</div>
                  <div className="col-span-8 text-gray-800 font-medium">{product.technicalTable.fragranceType}</div>
                </div>
                <div className="grid grid-cols-12 p-3.5 bg-white hover:bg-purple-50/40 transition-colors">
                  <div className="col-span-4 font-bold text-gray-700">Concentración aromática:</div>
                  <div className="col-span-8 text-gray-800 font-medium">{product.technicalTable.concentrationPct}</div>
                </div>
                <div className="grid grid-cols-12 p-3.5 bg-[#FAF7F2] hover:bg-purple-50/40 transition-colors">
                  <div className="col-span-4 font-bold text-gray-700">Origen & Fabricación:</div>
                  <div className="col-span-8 text-gray-800 font-medium">{product.technicalTable.origin}</div>
                </div>
              </div>
            </div>

            {/* Storytelling Tabs (Ref: Imagen 7) */}
            <div className="space-y-4">
              <div className="flex border-b border-gray-200 gap-4">
                <button
                  onClick={() => setActiveTab('composicion')}
                  className={`pb-2.5 font-bold text-xs uppercase tracking-wider transition-all relative ${
                    activeTab === 'composicion'
                      ? 'text-[#2E1065] border-b-2 border-[#2E1065]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Composición de la Fragancia
                </button>
                <button
                  onClick={() => setActiveTab('historia')}
                  className={`pb-2.5 font-bold text-xs uppercase tracking-wider transition-all relative ${
                    activeTab === 'historia'
                      ? 'text-[#2E1065] border-b-2 border-[#2E1065]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  Historia & Estatus Viral
                </button>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl text-xs sm:text-sm text-gray-700 leading-relaxed">
                {activeTab === 'composicion' ? (
                  <p>{product.compositionText}</p>
                ) : (
                  <p>{product.historyText}</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lightbox Trigger Modal (Ref: Imagen 5) */}
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
