import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
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
    <section id="recomendaciones-para-ti" className="py-12 sm:py-16 bg-[#F5F1E8] border-t border-b border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Responsive Luxury Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A961] ring-4 ring-[#C9A961]/20 flex-shrink-0"></span>
            <div>
              <h3 className="font-arabic-title text-base sm:text-lg md:text-xl font-black text-[#0E0E0E] uppercase tracking-wide">
                Nuestras Recomendaciones Para Ti
              </h3>
              <p className="text-[11px] text-gray-500 font-medium hidden sm:block">
                Selección basada en las fragancias más deseadas de nuestra colección
              </p>
            </div>
          </div>

          {/* Right Action Controls: Ver Catálogo & Navigation Arrows */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
            <button 
              onClick={handleVerMas}
              className="text-xs sm:text-sm font-bold text-[#0E0E0E] hover:text-[#C9A961] flex items-center gap-1.5 transition-all cursor-pointer group bg-white hover:bg-[#0E0E0E] hover:text-[#C9A961] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-gray-200 hover:border-[#C9A961] shadow-xs active:scale-95"
              title="Explorar todas las recomendaciones en el catálogo"
            >
              <span>Ver catálogo completo</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#C9A961] group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Carousel Navigation Buttons - Clean, accessible on all screens without blocking cards */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 text-[#0E0E0E] flex items-center justify-center hover:bg-[#0E0E0E] hover:text-[#C9A961] hover:border-[#C9A961] transition-all shadow-xs active:scale-90 cursor-pointer"
                aria-label="Anterior recomendación"
                title="Anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 text-[#0E0E0E] flex items-center justify-center hover:bg-[#0E0E0E] hover:text-[#C9A961] hover:border-[#C9A961] transition-all shadow-xs active:scale-90 cursor-pointer"
                aria-label="Siguiente recomendación"
                title="Siguiente"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          
          {/* Scrollable Track - Smooth touch scrolling on mobile */}
          <div 
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none py-3 px-1 -mx-1"
          >
            {products.map((item) => (
              <div 
                key={item.id}
                className="w-[260px] sm:w-[285px] flex-shrink-0 flex flex-col"
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

        </div>

      </div>
    </section>
  );
}
