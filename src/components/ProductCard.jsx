import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Flame, Check, ExternalLink, Sparkles, Sun, Moon, Heart } from 'lucide-react';

// Icono exacto de Sol con rayos, Luna creciente y 3 Estrellas (fiel al diseño de referencia)
export function VersatileSunMoon({ className = "w-5 h-5" }) {
  return (
    <svg 
      viewBox="1.5 2.5 21 19" 
      fill="currentColor" 
      className={className}
      aria-hidden="true"
    >
      {/* Rayos del Sol */}
      <path d="M10.48 3.45L9.88 4.84L11.10 4.83L10.48 3.45Z" />
      <path d="M3.95 6.45L4.58 7.87L5.39 6.93L3.95 6.45Z" />
      <path d="M3.33 11.32L2.00 11.93L3.38 12.57L3.39 11.33L3.33 11.32Z" />
      <path d="M4.55 16.10L3.95 17.49L5.42 17.01L4.55 16.10Z" />
      <path d="M11.08 19.13L9.87 19.17L10.48 20.55L11.13 19.20L11.08 19.13Z" />
      
      {/* Cuerpo del Sol */}
      <path d="M9.86 6.81L8.98 6.97L7.86 7.44L7.07 7.98L6.29 8.79L5.83 9.50L5.39 10.59L5.22 11.58L5.25 12.59L5.44 13.46L5.88 14.47L6.51 15.35L7.37 16.13L8.16 16.59L8.95 16.89L9.77 17.05L10.95 17.05L12.26 16.73L13.01 16.33L12.05 15.57L11.48 14.88L11.07 14.23L10.66 13.24L10.42 11.77L10.52 10.43L10.83 9.42L11.45 8.27L11.86 7.75L12.41 7.23L11.28 6.86L9.86 6.81Z" />
      
      {/* Luna Creciente */}
      <path d="M14.53 6.43L13.71 6.75L12.81 7.33L11.97 8.13L11.37 9.04L10.99 9.96L10.77 11.08L10.77 12.04L10.99 13.16L11.45 14.23L11.92 14.91L12.61 15.63L13.57 16.29L14.64 16.73L15.67 16.92L16.80 16.89L17.78 16.67L18.82 16.21L19.27 15.89L18.30 15.88L17.31 15.69L16.63 15.44L15.65 14.90L15.16 14.51L14.19 13.43L13.67 12.51L13.45 11.93L13.20 10.70L13.20 9.69L13.28 9.12L13.69 7.83L14.05 7.18L14.60 6.47L14.53 6.43Z" />
      
      {/* 3 Estrellas Acompañantes */}
      <path d="M17.78 5.72L17.37 6.54L17.15 6.59L16.40 6.52L16.99 7.03L17.08 7.20L16.77 8.04L17.48 7.63L17.61 7.63L18.30 8.20L18.15 7.31L18.27 7.16L18.94 6.77L18.05 6.64L17.93 6.47L17.78 5.72Z" />
      <path d="M16.96 10.52L16.63 11.15L15.96 11.14L16.43 11.58L16.22 12.27L16.71 11.97L16.88 11.97L17.34 12.38L17.25 11.74L17.40 11.56L17.82 11.33L17.20 11.23L17.08 11.08L16.96 10.52Z" />
      <path d="M20.84 11.92L20.43 12.74L20.27 12.79L19.46 12.72L20.14 13.38L19.83 14.24L20.54 13.83L20.67 13.83L21.36 14.40L21.21 13.52L21.33 13.37L22.00 12.97L21.08 12.82L20.84 11.92Z" />
    </svg>
  );
}

export default function ProductCard({ 
  product, 
  onOpenProduct, 
  onAddToCart,
  isFavorite = false,
  onToggleFavorite
}) {
  const [isAdded, setIsAdded] = useState(false);
  const [showTimeTooltip, setShowTimeTooltip] = useState(false);

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
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm flex items-center justify-center transition-all cursor-pointer active:scale-90 ${
              isFavorite
                ? 'bg-rose-50 border border-rose-300 text-rose-500 shadow-md scale-105'
                : 'bg-white/95 text-stone-400 hover:text-rose-500 border border-stone-200 hover:border-rose-300'
            }`}
            title={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
            aria-label={isFavorite ? "Quitar de favoritos" : "Guardar en favoritos"}
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 ${isFavorite ? 'fill-rose-500 text-rose-500 scale-110' : ''}`} />
          </button>
        </div>
        
        {/* Badges de Categoría y Momento (Día / Noche) Estable */}
        <div className="flex items-center gap-1 sm:gap-1.5 flex-shrink-0 pointer-events-auto">
          {product.timeOfDay && (
            <div className="relative group/time inline-flex items-center">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTimeTooltip(prev => {
                    const next = !prev;
                    if (next) setTimeout(() => setShowTimeTooltip(false), 3000);
                    return next;
                  });
                }}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-sm flex items-center justify-center cursor-pointer transition-all duration-200 border active:scale-90 ${
                  product.timeOfDay === 'dia'
                    ? 'bg-amber-50/95 text-amber-600 border-amber-200 hover:border-amber-400 hover:bg-amber-100'
                    : product.timeOfDay === 'noche'
                    ? 'bg-[#0E0E0E]/90 text-[#C9A961] border-[#C9A961]/40 hover:border-[#C9A961] hover:bg-black'
                    : 'bg-[#F5F1E8] text-[#0E0E0E] border-[#C9A961]/50 hover:border-[#C9A961]'
                }`}
                title={`Uso recomendado: ${product.timeOfDay === "dia" ? "Día" : product.timeOfDay === "noche" ? "Noche" : "Versátil"}`}
                aria-label={`Momento: ${product.timeOfDay === "dia" ? "Día" : product.timeOfDay === "noche" ? "Noche" : "Día y Noche"}`}
              >
                {product.timeOfDay === "dia" && (
                  <Sun className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-600 fill-amber-400" />
                )}
                {product.timeOfDay === "noche" && (
                  <Moon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#C9A961] fill-[#C9A961] -rotate-12" />
                )}
                {product.timeOfDay === "ambas" && (
                  <VersatileSunMoon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0E0E0E] flex-shrink-0" />
                )}
              </button>

              {/* Tooltip hacia abajo: 100% visible sin ser recortado por overflow-hidden en PC y Móvil */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 bg-[#0E0E0E]/95 backdrop-blur-sm text-[#F5F1E8] text-[9.5px] font-bold rounded-md shadow-xl whitespace-nowrap transition-all duration-200 pointer-events-none z-30 border border-[#C9A961]/50 ${
                  showTimeTooltip 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 -translate-y-1 scale-95 group-hover/time:opacity-100 group-hover/time:translate-y-0 group-hover/time:scale-100'
                }`}
              >
                {product.timeOfDay === "dia" ? "☀️ USO DÍA" : product.timeOfDay === "noche" ? "🌙 USO NOCHE" : "☀️🌙 VERSÁTIL"}
              </div>
            </div>
          )}

          {/* Badge de Categoría (Árabe vs Diseñador) sin fondo negro */}
          <span className={`text-[9px] sm:text-[10px] font-extrabold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-sm border ${
            isArabic
              ? "bg-[#C9A961] text-[#0E0E0E] border-[#A58B4E]"
              : "bg-[#F5F1E8] text-[#0E0E0E] border-[#C9A961]/60"
          }`}>
            {isArabic ? "👑 ARABE" : "✨ DISEÑADOR"}
          </span>
        </div>
      </div>

      {/* Thumbnail de Producto - PERFUME PROTAGONISTA */}
      <div 
        onClick={() => onOpenProduct(product.id)}
        className="relative w-full aspect-square bg-white p-3 sm:p-4 pt-9 sm:pt-11 cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <img 
          src={product.imageMain} 
          alt={`${product.brand} ${product.name} original`} 
          className="w-full h-full max-h-[88%] max-w-[88%] object-contain object-center mix-blend-multiply group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-[#0E0E0E]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="bg-[#0E0E0E] text-[#C9A961] font-extrabold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-[#C9A961]/40">
            <Eye className="w-3.5 h-3.5 text-[#C9A961]" /> Ver Perfume & Ficha
          </span>
        </div>
      </div>

      {/* Detalles del Perfume Limpios y Optimizados para Móvil */}
      <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Marca y Género */}
          <div className="flex items-center justify-between text-[10px] sm:text-[11px] mb-1">
            <span className="font-extrabold tracking-widest text-[#8F7432] uppercase truncate mr-1">
              {product.brand}
            </span>
            <span className="text-stone-500 font-semibold text-[9px] sm:text-[10px] uppercase tracking-wider flex-shrink-0">
              {product.gender.toUpperCase()}
            </span>
          </div>

          {/* Nombre del Perfume */}
          <h4 
            onClick={() => onOpenProduct(product.id)}
            className="font-serif font-bold text-[13px] sm:text-[15px] text-[#0E0E0E] group-hover:text-[#8F7432] transition-colors cursor-pointer line-clamp-1 tracking-tight leading-snug"
            title={product.name}
          >
            {product.name}
          </h4>

          {/* 3 Notas Olfativas Principales: visibles en desktop, limpias en móvil */}
          <div className="hidden sm:flex items-center gap-1.5 mt-2.5 py-1 px-2 bg-[#F5F1E8] rounded-lg border border-stone-200/80">
            {product.noteIcons.map((note, idx) => (
              <span key={idx} className="text-[10px] text-stone-800 flex items-center gap-1" title={note.name}>
                <span>{note.emoji}</span>
                <span className="font-medium text-[9.5px] line-clamp-1">{note.name}</span>
                {idx < product.noteIcons.length - 1 && <span className="text-stone-300">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Precios y Botón de Carrito */}
        <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-stone-100">
          <div className="flex items-baseline justify-between gap-1 mb-2">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base sm:text-xl font-black text-[#0E0E0E]">
                ${product.price100ml.toFixed(2)}
              </span>
              {isOnSale && (
                <span className="text-[10px] sm:text-xs font-bold text-stone-400 line-through decoration-rose-500 decoration-1">
                  ${product.originalPrice100ml.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Indicador refinado de Decant con micro-badge */}
            <span 
              onClick={() => onOpenProduct(product.id)} 
              className="text-[9.5px] sm:text-[10px] font-bold text-[#8F7432] hover:text-[#0E0E0E] transition-all cursor-pointer bg-[#F5F1E8] px-2 py-0.5 rounded-full border border-[#C9A961]/35 shadow-2xs hover:border-[#C9A961]"
              title="Ver presentación en decant de viaje 10ml"
            >
              Decant ${(product.priceDecant || (isArabic ? 15 : 30)).toFixed(0)}
            </span>
          </div>

          {/* Botón Añadir al Carrito ARKANO */}
          <button
            onClick={handleAddWithFeedback}
            className={`w-full font-bold text-xs py-2 sm:py-2.5 px-3 sm:px-4 rounded-full flex items-center justify-center gap-1.5 sm:gap-2 shadow-sm transition-all active:scale-95 cursor-pointer ${
              isAdded 
                ? 'bg-emerald-600 text-white scale-102 ring-2 ring-emerald-300' 
                : 'bg-[#0E0E0E] hover:bg-[#1F1F1F] text-[#F5F1E8] hover:shadow-md border border-[#C9A961]/40 hover:border-[#C9A961]'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-white animate-bounce" />
                <span>¡Añadido!</span>
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
