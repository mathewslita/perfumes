import React from 'react';
import { ShoppingBag, Eye, Star } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onOpenProduct, 
  onAddToCart 
}) {
  return (
    <article className="group bg-white rounded-2xl border border-gray-100 shadow-soft-card hover:border-[#D4AF37]/50 flex flex-col justify-between overflow-hidden relative transition-all duration-300">
      
      {/* Top Badges: Discount & Vibe (Ref: Imagen 3 & 4) */}
      <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
        <span className="bg-rose-600 text-white font-extrabold text-[11px] px-2 py-0.5 rounded-full shadow-sm">
          -{product.discountPercent}%
        </span>
        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm ${product.badgeColor || 'bg-purple-100 text-[#2E1065]'}`}>
          {product.vibeBadge}
        </span>
      </div>

      {/* Image Thumbnail with Light Background & Quick View Overlay */}
      <div 
        onClick={() => onOpenProduct(product.id)}
        className="relative w-full aspect-square bg-[#FAF7F2] p-4 cursor-pointer overflow-hidden flex items-center justify-center"
      >
        <img 
          src={product.imageMain} 
          alt={`${product.brand} ${product.name} 100% original`} 
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Hover Quick View Button */}
        <div className="absolute inset-0 bg-[#2E1065]/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-[#2E1065] font-bold text-xs px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#D4AF37]" /> Ver Detalles
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          {/* Brand & Concentration */}
          <div className="flex items-center justify-between text-[11px] text-gray-500 mb-1">
            <span className="font-bold tracking-wider text-[#2E1065] uppercase">
              {product.brand}
            </span>
            <span className="text-gray-400 font-medium">
              {product.concentration}
            </span>
          </div>

          {/* Perfume Title */}
          <h4 
            onClick={() => onOpenProduct(product.id)}
            className="font-bold text-sm text-gray-900 group-hover:text-[#2E1065] transition-colors cursor-pointer line-clamp-1"
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
          <div className="flex items-center gap-1.5 mt-2.5 py-1 px-1.5 bg-[#FAF7F2] rounded-lg border border-gray-100/80">
            {product.noteIcons.map((note, idx) => (
              <span key={idx} className="text-[10px] text-gray-700 flex items-center gap-0.5" title={note.name}>
                <span>{note.emoji}</span>
                <span className="font-medium text-[9px] line-clamp-1">{note.name}</span>
                {idx < product.noteIcons.length - 1 && <span className="text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Add to Cart Button (Ref: Imagen 3 & 4) */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-lg font-black text-[#2E1065]">
              ${product.price100ml.toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice100ml.toFixed(2)}
            </span>
            <span className="text-[10px] text-emerald-600 font-bold ml-auto">
              Ahorras ${(product.originalPrice100ml - product.price100ml).toFixed(2)}
            </span>
          </div>

          {/* Pill Shaped Action Button (Ref: Imagen 1, 3, 4) */}
          <button
            onClick={() => onAddToCart(product, '100ml', 1)}
            className="w-full bg-[#2E1065] hover:bg-[#3B0764] active:scale-98 text-white font-bold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all group-btn"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>+ Añadir al carrito</span>
          </button>
        </div>

      </div>

    </article>
  );
}
