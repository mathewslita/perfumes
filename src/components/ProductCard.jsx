import React, { useState } from 'react';
import { ShoppingBag, Eye, Star, Flame, Check } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onOpenProduct, 
  onAddToCart 
}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddWithFeedback = () => {
    onAddToCart(product, '100ml', 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  const savings = (product.originalPrice100ml - product.price100ml).toFixed(2);

  return (
    <article className="group bg-white rounded-2xl border border-gray-200/80 shadow-soft-card hover:border-[#D4AF37]/60 hover:shadow-xl flex flex-col justify-between overflow-hidden relative transition-all duration-300">
      
      {/* Top Badges: SOLID, HIGH-CONTRAST Discount & Vibe (Fix for translucent issue) */}
      <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1 bg-rose-600 text-white font-black text-xs px-2.5 py-1 rounded-full shadow-lg border-2 border-white ring-1 ring-black/10">
          <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
          <span>-{product.discountPercent}%</span>
        </div>
        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md border border-white/60 ${product.badgeColor || 'bg-purple-100 text-[#2E1065]'}`}>
          {product.vibeBadge}
        </span>
      </div>

      {/* Image Thumbnail with Light Background & Quick View Overlay */}
      <div 
        onClick={() => onOpenProduct(product.id)}
        className="relative w-full aspect-square bg-[#FAF7F2] p-5 cursor-pointer overflow-hidden flex items-center justify-center border-b border-gray-100"
      >
        <img 
          src={product.imageMain} 
          alt={`${product.brand} ${product.name} 100% original`} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-[#2E1065]/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-[#2E1065] font-extrabold text-xs px-4 py-2 rounded-full shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> Ver Detalles & Notas
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Brand & Concentration */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
            <span className="font-extrabold tracking-widest text-[#2E1065] uppercase">
              {product.brand}
            </span>
            <span className="text-gray-400 font-semibold">
              {product.concentration}
            </span>
          </div>

          {/* Perfume Title */}
          <h4 
            onClick={() => onOpenProduct(product.id)}
            className="font-bold text-sm text-gray-900 group-hover:text-[#2E1065] transition-colors cursor-pointer line-clamp-1"
            title={product.name}
          >
            {product.name}
          </h4>

          {/* Reviews Rating */}
          <div className="flex items-center gap-1 mt-1 text-[11px] text-amber-500">
            <div className="flex text-amber-400">
              {'★'.repeat(5)}
            </div>
            <span className="text-gray-600 font-medium text-[10px]">
              ({product.reviewCount})
            </span>
          </div>

          {/* 3 Main Olfactory Notes Icons Below Image (Ref: Prompt spec) */}
          <div className="flex items-center gap-1.5 mt-2.5 py-1 px-1.5 bg-[#FAF7F2] rounded-lg border border-gray-100">
            {product.noteIcons.map((note, idx) => (
              <span key={idx} className="text-[10px] text-gray-700 flex items-center gap-0.5" title={note.name}>
                <span>{note.emoji}</span>
                <span className="font-medium text-[9px] line-clamp-1">{note.name}</span>
                {idx < product.noteIcons.length - 1 && <span className="text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart Button (Ref: High-Contrast Offer Styling) */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-xl font-black text-[#2E1065]">
              ${product.price100ml.toFixed(2)}
            </span>
            <span className="text-xs font-bold text-gray-600 line-through decoration-rose-500 decoration-1.5">
              ${product.originalPrice100ml.toFixed(2)}
            </span>
            <span className="text-[10px] text-emerald-800 font-black bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full ml-auto">
              Ahorras ${savings}
            </span>
          </div>

          {/* Pill Shaped Action Button with Visual Feedback (Ref: Imagen 1, 3, 4) */}
          <button
            onClick={handleAddWithFeedback}
            className={`w-full font-bold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 ${
              isAdded 
                ? 'bg-emerald-600 text-white scale-102 ring-2 ring-emerald-300' 
                : 'bg-[#2E1065] hover:bg-[#3B0764] text-white hover:shadow-md'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4 text-white animate-bounce" />
                <span>¡Añadido al Carrito!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>+ Añadir al carrito</span>
              </>
            )}
          </button>
        </div>

      </div>

    </article>
  );
}
