import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function CrossSelling({ 
  products, 
  onOpenProduct, 
  onAddToCart, 
  favorites = [], 
  onToggleFavorite 
}) {
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

  const handleVerMas = () => {
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-[#F5F1E8] border-t border-b border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E0E0E]"></span>
            <h3 className="font-arabic-title text-sm sm:text-base font-extrabold tracking-wider text-[#0E0E0E] uppercase">
              NUESTRAS RECOMENDACIONES PARA TI
            </h3>
          </div>
          <button 
            onClick={handleVerMas}
            className="text-xs sm:text-sm font-bold text-[#0E0E0E] hover:text-[#C9A961] flex items-center gap-1.5 transition-colors cursor-pointer group"
            title="Explorar todas las recomendaciones en el catálogo"
          >
            <span>Ver más recomendaciones</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A961] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-xl text-gray-800 flex items-center justify-center hover:bg-[#0E0E0E] hover:text-[#C9A961] hover:border-[#C9A961] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Anterior recomendación"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Track */}
          <div 
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none py-3 px-1"
          >
            {products.map((item) => (
              <div 
                key={item.id}
                className="w-64 sm:w-72 flex-shrink-0 flex flex-col"
              >
                <ProductCard
                  product={item}
                  onOpenProduct={onOpenProduct}
                  onAddToCart={onAddToCart}
                  isFavorite={favorites.includes(item.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-xl text-gray-800 flex items-center justify-center hover:bg-[#0E0E0E] hover:text-[#C9A961] hover:border-[#C9A961] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Siguiente recomendación"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}
