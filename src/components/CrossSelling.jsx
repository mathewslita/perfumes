import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

export default function CrossSelling({ products, onOpenProduct, onAddToCart }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-[#FAF7F2] border-t border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header (Ref: Imagen 3) */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-xs sm:text-sm tracking-wider text-gray-800 uppercase">
            Personas que vieron este producto también compraron
          </h3>
          <button 
            onClick={() => scroll('right')}
            className="text-xs font-semibold text-[#2E1065] hover:text-[#581C87] hover:underline hidden sm:block"
          >
            Ver más recomendaciones &rarr;
          </button>
        </div>

        {/* Carousel Container with Arrows (Ref: Imagen 3) */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-gray-200 shadow-md text-gray-700 flex items-center justify-center hover:bg-[#2E1065] hover:text-[#D4AF37] transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scrollable Track */}
          <div 
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none py-2 px-1"
          >
            {products.map((item) => (
              <div 
                key={item.id}
                className="w-56 sm:w-64 flex-shrink-0 bg-white rounded-2xl border border-gray-100 p-3 sm:p-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square bg-[#FAF7F2] rounded-xl p-3 mb-3 overflow-hidden cursor-pointer"
                       onClick={() => onOpenProduct(item.id)}>
                    <span className="absolute top-2 right-2 bg-rose-600 text-white font-extrabold text-[10px] px-1.5 py-0.5 rounded">
                      -{item.discountPercent}%
                    </span>
                    <img 
                      src={item.imageMain} 
                      alt={item.name} 
                      className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm font-black text-[#2E1065]">
                      ${item.price100ml.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-gray-400 line-through">
                      ${item.originalPrice100ml.toFixed(2)}
                    </span>
                  </div>

                  <h5 
                    onClick={() => onOpenProduct(item.id)}
                    className="font-bold text-xs text-gray-900 hover:text-[#2E1065] cursor-pointer line-clamp-2 leading-snug mb-2"
                  >
                    {item.brand} {item.name}
                  </h5>
                </div>

                {/* Pill Button (Ref: Imagen 3) */}
                <button
                  onClick={() => onAddToCart(item, '100ml', 1)}
                  className="w-full bg-[#2E1065] hover:bg-[#3B0764] text-white font-bold text-[11px] py-2 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <ShoppingBag className="w-3 h-3 text-[#D4AF37]" />
                  <span>+ Añadir al carrito</span>
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-gray-200 shadow-md text-gray-700 flex items-center justify-center hover:bg-[#2E1065] hover:text-[#D4AF37] transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </section>
  );
}
