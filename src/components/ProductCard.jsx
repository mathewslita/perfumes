import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Flame, Check, ExternalLink, Sparkles } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onOpenProduct, 
  onAddToCart 
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

  const savings = (product.originalPrice100ml - product.price100ml).toFixed(2);
  const isArabic = product.collection === 'arabes';
  const fragranticaTarget = product.fraganticaUrl || `https://www.fragrantica.es/buscar/?query=${encodeURIComponent(product.fraganticaQuery || product.name)}`;

  return (
    <article className="group bg-white rounded-2xl border border-gray-200 shadow-soft-card hover:border-[#C9A961]/80 hover:shadow-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300">
      
      {/* Insignias Superiores: Descuento & Categoría Oficial (Árabe / Diseñador) */}
      <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1 bg-[#0E0E0E] text-[#C9A961] font-black text-xs px-2.5 py-1 rounded-full shadow-lg border border-[#C9A961]/50">
          <Flame className="w-3 h-3 text-[#C9A961] fill-[#C9A961]" />
          <span>-{product.discountPercent}%</span>
        </div>
        
        {/* Badge de Categoría (Árabe vs Diseñador) */}
        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md border ${
          isArabic
            ? 'bg-[#C9A961] text-[#0E0E0E] border-[#A58B4E]' 
            : 'bg-[#0E0E0E] text-white border-[#C9A961]/40'
        }`}>
          {isArabic ? '👑 Árabe' : '✨ Diseñador'}
        </span>
      </div>

      {/* Thumbnail de Producto */}
      <div 
        onClick={() => onOpenProduct(product.id)}
        className="relative w-full aspect-square bg-[#F5F1E8] p-5 cursor-pointer overflow-hidden flex items-center justify-center border-b border-gray-100"
      >
        <img 
          src={product.imageMain} 
          alt={`${product.brand} ${product.name} original`} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-[#0E0E0E]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <span className="bg-[#0E0E0E] text-[#C9A961] font-extrabold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-[#C9A961]/40">
            <Eye className="w-3.5 h-3.5 text-[#C9A961]" /> Ver Notas & Ficha
          </span>
        </div>
      </div>

      {/* Detalles del Perfume */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Marca, Concentración y Enlace a Fragrantica */}
          <div className="flex items-center justify-between text-[11px] mb-1">
            <span className="font-extrabold tracking-widest text-[#0E0E0E] uppercase">
              {product.brand}
            </span>
            <span className="text-gray-500 font-semibold text-[10px]">
              {product.concentration}
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

          {/* Autenticidad y Ficha en Fragrantica */}
          <div className="flex items-center justify-between mt-1.5 text-[11px]">
            <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <Check className="w-2.5 h-2.5 text-emerald-600" />
              <span>100% Original</span>
            </span>

            {/* Enlace Directo a Fragrantica */}
            <a
              href={fragranticaTarget}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[10px] font-bold text-gray-600 hover:text-[#0E0E0E] bg-[#F5F1E8] hover:bg-[#C9A961]/25 px-2 py-0.5 rounded-full transition-colors border border-gray-200"
              title="Abrir ficha y reseñas verificadas en Fragrantica.es"
            >
              <span>Ficha Fragrantica</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
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
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-xl font-black text-[#0E0E0E]">
              ${product.price100ml.toFixed(2)}
            </span>
            <span className="text-xs font-bold text-gray-400 line-through decoration-rose-500 decoration-1.5">
              ${product.originalPrice100ml.toFixed(2)}
            </span>
            <span className="text-[10px] text-emerald-800 font-black bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full ml-auto">
              Ahorras ${savings}
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
