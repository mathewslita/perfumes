import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Check, Flame, Sparkles } from 'lucide-react';

export default function CrossSelling({ products, onOpenProduct, onAddToCart }) {
  const scrollRef = useRef(null);
  const [addedId, setAddedId] = useState(null);

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

  const handleAddWithFeedback = (item) => {
    onAddToCart(item, '100ml', 1);
    setAddedId(item.id);
    setTimeout(() => {
      setAddedId(null);
    }, 1500);
  };

  return (
    <section className="py-14 bg-[#F5F1E8] border-t border-b border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E0E0E]"></span>
            <h3 className="font-arabic-title text-sm sm:text-base font-extrabold tracking-wider text-[#0E0E0E] uppercase">
              Personas que vieron este perfume también eligieron
            </h3>
          </div>
          <button 
            onClick={() => scroll('right')}
            className="text-xs font-bold text-[#0E0E0E] hover:text-[#C9A961] hover:underline hidden sm:flex items-center gap-1 transition-colors"
          >
            <span>Ver más recomendaciones</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#C9A961]" />
          </button>
        </div>

        {/* Carousel Container with Arrows */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-xl text-gray-800 flex items-center justify-center hover:bg-[#0E0E0E] hover:text-[#C9A961] hover:border-[#C9A961] transition-all hover:scale-105 active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Scrollable Track */}
          <div 
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none py-3 px-1"
          >
            {products.map((item) => {
              const isAdded = addedId === item.id;
              const savings = (item.originalPrice100ml - item.price100ml).toFixed(2);
              const isArabic = item.collection === 'arabes';

              return (
                <div 
                  key={item.id}
                  className="w-60 sm:w-72 flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-xl hover:border-[#C9A961] transition-all flex flex-col justify-between group/card"
                >
                  <div>
                    {/* Bottle Image Stage */}
                    <div 
                      className="relative aspect-square bg-[#F5F1E8] rounded-xl p-3 mb-3 overflow-hidden cursor-pointer flex items-center justify-center border border-gray-100"
                      onClick={() => onOpenProduct(item.id)}
                    >
                      <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-[#0E0E0E] text-[#C9A961] font-black text-[11px] px-2 py-0.5 rounded-full shadow-md border border-[#C9A961]/40">
                        <Flame className="w-3 h-3 text-[#C9A961] fill-[#C9A961]" />
                        <span>-{item.discountPercent}%</span>
                      </div>

                      <span className="absolute top-2.5 left-2.5 z-10 text-[9px] font-black bg-white/90 text-gray-800 px-2 py-0.5 rounded-full border border-gray-200">
                        {isArabic ? 'Árabe' : 'Diseñador'}
                      </span>

                      <img 
                        src={item.imageMain} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply group-hover/card:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Brand & Name */}
                    <span className="text-[10px] font-black tracking-widest text-[#0E0E0E] uppercase block mb-0.5">
                      {item.brand}
                    </span>
                    <h5 
                      onClick={() => onOpenProduct(item.id)}
                      className="font-bold text-sm text-gray-900 group-hover/card:text-[#0E0E0E] cursor-pointer line-clamp-1 leading-snug mb-1.5 transition-colors"
                    >
                      {item.name}
                    </h5>

                    {/* Trust Badge */}
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] text-emerald-800 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Lote Original Sellado</span>
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-3 border-t border-gray-100 mt-2">
                    <div className="flex items-baseline gap-2 mb-2.5">
                      <span className="text-base font-black text-[#0E0E0E]">
                        ${item.price100ml.toFixed(2)}
                      </span>
                      <span className="text-xs text-gray-400 line-through decoration-rose-500">
                        ${item.originalPrice100ml.toFixed(2)}
                      </span>
                      <span className="text-[10px] text-emerald-800 font-bold ml-auto bg-emerald-50 px-1.5 py-0.5 rounded">
                        Ahorra ${savings}
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddWithFeedback(item)}
                      className={`w-full font-bold text-xs py-2 px-3 rounded-full flex items-center justify-center gap-1.5 shadow-sm transition-all ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#0E0E0E] hover:bg-[#1A1A1A] text-white hover:text-[#C9A961] border border-[#C9A961]/40'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Agregado!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 text-[#C9A961]" />
                          <span>Agregar al carrito</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-xl text-gray-800 flex items-center justify-center hover:bg-[#0E0E0E] hover:text-[#C9A961] hover:border-[#C9A961] transition-all hover:scale-105 active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}
