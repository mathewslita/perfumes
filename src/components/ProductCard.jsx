import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Flame, Check, ExternalLink, Sparkles, Sun, Moon, Heart } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onOpenProduct, 
  onAddToCart,
  isFavorite = false,
  onToggleFavorite
}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddWithFeedback = (e) => {
    e.stopPropagation();
    onAddToCart(product, '100ml', 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const isOnSale = product.onSale !== false && (product.originalPrice100ml > product.price100ml);
  const savings = (product.originalPrice100ml - product.price100ml).toFixed(2);
  const isArabic = product.collection === 'arabes';
  const fragranticaTarget = product.fraganticaUrl || `https://www.fragrantica.es/buscar/?query=${encodeURIComponent(product.fraganticaQuery || product.name)}`;

  return (
    <article className="group bg-white rounded-2xl border border-gray-200 shadow-soft-card hover:border-[#C9A961]/80 hover:shadow-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300 h-full">
      
      {/* Insignias Superiores: Descuento & Botón Favoritos & Categoría Oficial */}
      <div className="absolute top-2 left-2 right-2 z-10 flex items-center justify-between gap-1 pointer-events-none">
        <div className="flex items-center gap-1 sm:gap-1.5 pointer-events-auto flex-shrink-0">
          {isOnSale && (
            <div className="flex items-center gap-0.5 bg-rose-600 text-white font-black text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-md">
              <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
              <span>-{product.discountPercent}%</span>
            </div>
          )}

          {/* Botón de Favoritos con Corazón */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite && onToggleFavorite(product.id);
            }}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
              isFavorite
                ? 'bg-rose-50 border border-rose-300 text-rose-500 shadow-md scale-105'
                : 'bg-white/95 text-stone-400 hover:text-rose-500 border border-stone-200 hover:border-rose-300'
            }`}
            title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
            aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          >
            <Heart className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${isFavorite ? 'fill-rose-500 text-rose-500 scale-110' : ''}`} />
          </button>
        </div>
        
        {/* Badges de Categoría y Momento (Día / Noche) Estable */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0">
          {product.timeOfDay && (
            <div className="relative group/time inline-flex items-center">
              <span
                className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-sm bg-white/95 text-[#0E0E0E] border border-gray-200 flex items-center justify-center cursor-help transition-colors hover:border-[#C9A961]"
                title={`Momento recomendado: ${product.timeOfDay === "dia" ? "Día" : product.timeOfDay === "noche" ? "Noche" : "Día & Noche"}`}
              >
                {product.timeOfDay === "dia" && (
                  <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 fill-amber-400" />
                )}
                {product.timeOfDay === "noche" && (
                  <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0E0E0E] fill-[#0E0E0E]" />
                )}
                {product.timeOfDay === "ambas" && (
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#A58B4E] fill-[#C9A961]" />
                )}
              </span>

              {/* Tooltip flotante superior sin alterar el ancho ni provocar saltos */}
              <div className="absolute bottom-full right-0 mb-1 px-2 py-0.5 bg-[#0E0E0E] text-[#F5F1E8] text-[9px] font-bold rounded shadow-md whitespace-nowrap opacity-0 group-hover/time:opacity-100 transition-opacity pointer-events-none z-30 border border-[#C9A961]/40">
                {product.timeOfDay === "dia" ? "☀️ DIA" : product.timeOfDay === "noche" ? "🌙 NOCHE" : "✨ DIA & NOCHE"}
              </div>
            </div>
          )}

          {/* Badge de Categoría (Árabe vs Diseñador) sin fondo negro */}
          <span className={`text-[9px] sm:text-[10px] font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-sm border ${
            isArabic
              ? "bg-[#C9A961] text-[#0E0E0E] border-[#A58B4E]"
              : "bg-[#F5F1E8] text-[#0E0E0E] border-[#C9A961]/60"
          }`}>
            {isArabic ? "👑 ARABE" : "✨ DISENADOR"}
          </span>
        </div>
      </div>

      {/* Thumbnail de Producto - PERFUME PROTAGONISTA */}
      <div 
        onClick={() => onOpenProduct(product.id)}
        className="relative w-full aspect-square bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] pt-10 pb-4 px-4 sm:pt-12 sm:pb-6 sm:px-6 cursor-pointer overflow-hidden flex items-center justify-center border-b border-gray-100"
      >
        <img 
          src={product.imageMain} 
          alt={`${product.brand} ${product.name} original`} 
          className="w-full h-full max-h-[86%] max-w-[86%] object-contain filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.12)] group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-[#0E0E0E]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="bg-[#0E0E0E] text-[#C9A961] font-extrabold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-[#C9A961]/40">
            <Eye className="w-3.5 h-3.5 text-[#C9A961]" /> Ver Perfume & Ficha
          </span>
        </div>
      </div>

      {/* Detalles del Perfume */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Marca y Genero */}
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-extrabold tracking-widest text-[#0E0E0E] uppercase">
              {product.brand}
            </span>
            <span className="text-[#A58B4E] font-bold text-[10px] uppercase tracking-wider">
              {product.gender.toUpperCase()}
            </span>
          </div>

          {/* Nombre del Perfume */}
          <h4 
            onClick={() => onOpenProduct(product.id)}
            className="font-bold text-sm text-[#0E0E0E] group-hover:text-[#A58B4E] transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h4>

          {/* Autenticidad */}
          <div className="flex items-center justify-between mt-1.5 text-[11px]">
            <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 uppercase">
              <Check className="w-2.5 h-2.5 text-emerald-600" />
              <span>100% ORIGINAL CON SELLO</span>
            </span>
          </div>

          {/* 3 Notas Olfativas Principales */}
          <div className="flex items-center gap-1.5 mt-2.5 py-1 px-1.5 bg-[#F5F1E8] rounded-lg border border-gray-200/80">
            {product.noteIcons.map((note, idx) => (
              <span key={idx} className="text-[10px] text-[#0E0E0E] flex items-center gap-0.5" title={note.name}>
                <span>{note.emoji}</span>
                <span className="font-medium text-[9px] line-clamp-1">{note.name}</span>
                {idx < product.noteIcons.length - 1 && <span className="text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Precios y Botón de Carrito */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2 mb-1.5">
            <span className="text-xl font-black text-[#0E0E0E]">
              ${product.price100ml.toFixed(2)}
            </span>
            {isOnSale ? (
              <>
                <span className="text-xs font-bold text-gray-400 line-through decoration-rose-500 decoration-1.5">
                  ${product.originalPrice100ml.toFixed(2)}
                </span>
                <span className="text-[10px] text-emerald-800 font-black bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full ml-auto">
                  Ahorras ${savings}
                </span>
              </>
            ) : (
              <span className="text-[10px] text-gray-500 font-bold ml-auto uppercase tracking-wider">
                Frasco Completo
              </span>
            )}
          </div>

          {/* Opción en Decant 10ml */}
          <div 
            onClick={() => onOpenProduct(product.id)}
            className="flex items-center justify-between py-1.5 px-2.5 mb-2.5 rounded-xl bg-[#F5F1E8] hover:bg-[#EFE8DA] cursor-pointer transition-colors border border-[#C9A961]/35 group/decant"
            title="Ver presentación en decant de viaje 10ml"
          >
            <span className="text-[10.5px] font-semibold text-stone-700 flex items-center gap-1.5">
              <span className="text-xs">🧪</span>
              <span>o en Decant 10ml por</span>
            </span>
            <span className="text-xs font-black text-[#0E0E0E] group-hover/decant:text-[#A58B4E] transition-colors">
              ${(product.priceDecant || (isArabic ? 15 : 30)).toFixed(2)}
            </span>
          </div>

          {/* Botón Añadir al Carrito ARKANO */}
          <button
            onClick={handleAddWithFeedback}
            className={`w-full font-bold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 ${
              isAdded 
                ? 'bg-emerald-600 text-white scale-102 ring-2 ring-emerald-300' 
                : 'bg-[#0E0E0E] hover:bg-[#1F1F1F] text-[#F5F1E8] hover:shadow-md border border-[#C9A961]/40 hover:border-[#C9A961]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 text-white animate-bounce" />
                <span>¡Añadido al Carrito!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>+ Añadir al carrito</span>
              </>
            )}
          </button>
        </div>

      </div>

    </article>
  );
}
