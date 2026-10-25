import React, { useState } from 'react';
import { 
  X, ShoppingBag, Zap, ShieldCheck, Truck, Check, 
  Flame, Sun, Moon, Sparkles 
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

  const isOnSale = product.onSale !== false && (product.originalPrice100ml > product.price100ml);
  const currentPrice = selectedFormat === '100ml' ? product.price100ml : product.priceDecant;
  const originalPrice = selectedFormat === '100ml' ? product.originalPrice100ml : product.originalPriceDecant;
  const savings = Math.max(0, originalPrice - currentPrice);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.imageMain];
  const isArabic = product.collection === 'arabes';

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
          <div className="overflow-y-auto p-4 sm:p-8 bg-white pb-6">
            
            {/* Main Grid: Gallery Left + Purchase Panel Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-7 items-start">
              
              {/* Left Column: Gallery + Lightbox Trigger - EL PERFUME PROTAGONISTA */}
              <div className="md:col-span-6 flex flex-col gap-3.5">
                <div 
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-square max-h-[380px] sm:max-h-none bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] rounded-3xl p-5 sm:p-7 md:p-8 border border-[#C9A961]/25 cursor-pointer overflow-hidden flex items-center justify-center group shadow-inner transition-all hover:border-[#C9A961]/50"
                >
                  <img 
                    src={images[activeImgIndex]} 
                    alt={product.name} 
                    className="w-full h-full max-h-[90%] max-w-[90%] object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.14)] group-hover:scale-108 transition-all duration-500 ease-out"
                  />
                  
                  {/* Badge de Oferta: Solo si el perfume tiene oferta activa */}
                  {isOnSale && (
                    <div className="absolute top-3.5 left-3.5 bg-[#0E0E0E] text-[#C9A961] font-black text-xs px-3 py-1 rounded-full shadow-lg border border-[#C9A961]/50 flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#C9A961] fill-[#C9A961]" />
                      <span>-{product.discountPercent}% OFF</span>
                    </div>
                  )}
                </div>

                {/* Thumbnails Strip: Solo si hay más de 1 imagen real */}
                {images.length > 1 && (
                  <div className="flex items-center gap-3 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIndex(idx)}
                        className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 bg-[#F8F4EC] p-1.5 flex-shrink-0 transition-all ${
                          activeImgIndex === idx 
                            ? 'border-[#0E0E0E] shadow-md scale-105 ring-2 ring-[#C9A961]' 
                            : 'border-gray-200 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img src={img} alt={`Vista ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Column: Direct Purchase Conversion Engine */}
              <div className="md:col-span-6 flex flex-col justify-between space-y-4">
                <div>
                  {/* Brand & Collection Badge */}
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
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

                  {/* Badges de Atributos & Icono Minimalista de Momento de Uso */}
                  <div className="flex items-center gap-2 mt-2.5 flex-wrap">
                    <span className="text-xs bg-[#0E0E0E] text-[#C9A961] font-bold px-2.5 py-0.5 rounded-full">
                      {product.concentration}
                    </span>

                    {/* Icono Minimalista de Momento de Uso: Solo icono, expande texto al pasar el mouse */}
                    {product.timeOfDay === 'dia' && (
                      <div 
                        className="group inline-flex items-center bg-amber-50/90 hover:bg-amber-100 text-amber-900 border border-amber-200/90 rounded-full h-6 px-1.5 transition-all duration-300 shadow-2xs cursor-pointer"
                        title="Momento: Día"
                      >
                        <Sun className="w-3.5 h-3.5 text-amber-600 fill-amber-400 flex-shrink-0 transition-transform duration-300 group-hover:rotate-45" />
                        <span className="text-[10px] font-bold tracking-wide max-w-0 opacity-0 group-hover:max-w-[50px] group-hover:opacity-100 group-hover:ml-1.5 group-hover:mr-1 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out">
                          Día
                        </span>
                      </div>
                    )}
                    {product.timeOfDay === 'noche' && (
                      <div 
                        className="group inline-flex items-center bg-[#F5F1E8] hover:bg-[#0E0E0E] text-[#0E0E0E] hover:text-[#C9A961] border border-stone-300 hover:border-[#C9A961]/50 rounded-full h-6 px-1.5 transition-all duration-300 shadow-2xs cursor-pointer"
                        title="Momento: Noche"
                      >
                        <Moon className="w-3.5 h-3.5 fill-[#0E0E0E] group-hover:fill-[#C9A961] flex-shrink-0 transition-transform duration-300 group-hover:-rotate-12" />
                        <span className="text-[10px] font-bold tracking-wide max-w-0 opacity-0 group-hover:max-w-[60px] group-hover:opacity-100 group-hover:ml-1.5 group-hover:mr-1 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out">
                          Noche
                        </span>
                      </div>
                    )}
                    {product.timeOfDay === 'ambas' && (
                      <div 
                        className="group inline-flex items-center bg-[#F5F1E8] hover:bg-[#0E0E0E] text-[#0E0E0E] hover:text-[#C9A961] border border-[#C9A961]/50 rounded-full h-6 px-1.5 transition-all duration-300 shadow-2xs cursor-pointer"
                        title="Momento: Día & Noche"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#A58B4E] group-hover:text-[#C9A961] fill-[#C9A961] flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-[10px] font-bold tracking-wide max-w-0 opacity-0 group-hover:max-w-[80px] group-hover:opacity-100 group-hover:ml-1.5 group-hover:mr-1 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out">
                          Día & Noche
                        </span>
                      </div>
                    )}

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>100% Original con Sello</span>
                    </span>
                  </div>

                  {/* Pricing Box & Savings (Condicionado por Oferta) */}
                  <div className="mt-3.5 p-3.5 bg-[#F5F1E8] rounded-2xl border border-[#C9A961]/30 shadow-sm">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-black text-[#0E0E0E]">
                        ${currentPrice.toFixed(2)}
                      </span>
                      {isOnSale ? (
                        <>
                          <span className="text-sm font-bold text-gray-400 line-through decoration-rose-500 decoration-1.5">
                            ${originalPrice.toFixed(2)}
                          </span>
                          <span className="ml-auto bg-[#0E0E0E] text-[#C9A961] text-xs font-black px-3 py-1 rounded-full border border-[#C9A961]/40 shadow-sm">
                            Ahorras ${savings.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="ml-auto text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                          Precio Oficial
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-gray-700 mt-2 pt-2 border-t border-gray-300/60">
                      <span>✓ Lote oficial sellado con Batch Code</span>
                      <span className="text-[#A58B4E] font-bold flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#C9A961] fill-[#C9A961]" /> Alta demanda
                      </span>
                    </div>
                  </div>

                  {/* Seleccionar Presentación: Sencillo, Minimalista y Elegante */}
                  <div className="mt-4">
                    <label className="text-[11px] font-extrabold text-gray-500 uppercase tracking-widest block mb-2">
                      Seleccionar Presentación:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {/* Botella Completa */}
                      <button
                        type="button"
                        onClick={() => setSelectedFormat('100ml')}
                        className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                          selectedFormat === '100ml'
                            ? 'border-[#0E0E0E] bg-[#FAF8F5] shadow-sm ring-1 ring-[#0E0E0E]'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/60'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-bold ${selectedFormat === '100ml' ? 'text-[#0E0E0E]' : 'text-gray-700'}`}>
                              Frasco Completo
                            </span>
                            <span className={`w-2.5 h-2.5 rounded-full transition-all ${
                              selectedFormat === '100ml' ? 'bg-[#C9A961] ring-2 ring-[#C9A961]/30' : 'bg-gray-200'
                            }`} />
                          </div>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            {product.volume100ml ? product.volume100ml.split('(')[0].trim() : '100 ml'}
                          </p>
                        </div>
                        <div className="text-base font-black text-[#0E0E0E] mt-2">
                          ${product.price100ml.toFixed(2)}
                        </div>
                      </button>

                      {/* Decant Muestra ($15 Árabe / $30 Diseñador) */}
                      <button
                        type="button"
                        onClick={() => setSelectedFormat('decant')}
                        className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                          selectedFormat === 'decant'
                            ? 'border-[#0E0E0E] bg-[#FAF8F5] shadow-sm ring-1 ring-[#0E0E0E]'
                            : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50/60'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className={`text-xs font-bold ${selectedFormat === 'decant' ? 'text-[#0E0E0E]' : 'text-gray-700'}`}>
                              Decant Muestra
                            </span>
                            <span className={`w-2.5 h-2.5 rounded-full transition-all ${
                              selectedFormat === 'decant' ? 'bg-[#C9A961] ring-2 ring-[#C9A961]/30' : 'bg-gray-200'
                            }`} />
                          </div>
                          <p className="text-[11px] text-gray-500 mt-0.5">
                            10 ml (Atomizador)
                          </p>
                        </div>
                        <div className="text-base font-black text-[#0E0E0E] mt-2">
                          ${product.priceDecant.toFixed(2)}
                        </div>
                      </button>
                    </div>

                    {/* Tip y selector de cantidad inteligente para Decant */}
                    {selectedFormat === 'decant' ? (
                      <div className="mt-2.5 p-2.5 bg-[#FAF8F5] rounded-xl border border-[#C9A961]/30">
                        <div className="text-[11px] text-gray-700 leading-snug flex items-start gap-1.5 mb-2">
                          <span className="text-[#A58B4E] font-bold text-xs flex-shrink-0">💡 Tip:</span>
                          <span>Un decant de 10ml rinde ~120 atomizaciones completas. Ideal para probar en tu piel antes de comprar el frasco completo.</span>
                        </div>
                        <div className="flex items-center gap-1.5 pt-1.5 border-t border-gray-200/70">
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mr-1">Armar Set:</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(1)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                              quantity === 1 
                                ? 'bg-[#0E0E0E] text-[#C9A961] shadow-xs' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            1 Decant
                          </button>
                          <button
                            type="button"
                            onClick={() => setQuantity(2)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                              quantity === 2 
                                ? 'bg-[#0E0E0E] text-[#C9A961] shadow-xs' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            2 Dúo
                          </button>
                          <button
                            type="button"
                            onClick={() => setQuantity(3)}
                            className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all ${
                              quantity === 3 
                                ? 'bg-[#0E0E0E] text-[#C9A961] shadow-xs' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                            }`}
                          >
                            3 Trío Set
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-2 px-2.5 py-1.5 bg-[#FAF8F5] rounded-lg border border-gray-200/80 text-[11px] text-gray-600 flex items-center gap-1.5">
                        <span className="text-[#A58B4E]">✨</span>
                        <span>Frasco 100% original con sello de fábrica y batch code coincidente.</span>
                      </div>
                    )}
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

                    {/* Direct Buy Now via WhatsApp */}
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

          </div>

          {/* Sticky Mobile Bottom Bar: Permite añadir al carrito y comprar en WhatsApp sin scroll */}
          <div className="md:hidden sticky bottom-0 left-0 right-0 bg-[#0E0E0E]/95 backdrop-blur-md border-t border-[#C9A961]/35 p-3 flex items-center justify-between gap-2 shadow-2xl z-30">
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-medium">
                {selectedFormat === '100ml' ? 'Frasco' : 'Decant'} • {quantity}x
              </span>
              <span className="text-base font-black text-[#C9A961]">
                ${(currentPrice * quantity).toFixed(2)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleAddToCart}
                className="bg-[#1C1C1C] hover:bg-[#2A2A2A] active:scale-95 text-[#F5F1E8] border border-[#C9A961]/40 py-2.5 px-3 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>+ Carrito</span>
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-[#C9A961] hover:bg-[#B89228] active:scale-95 text-[#0E0E0E] py-2.5 px-3.5 rounded-full text-xs font-black flex items-center gap-1 shadow-md"
              >
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </button>
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
