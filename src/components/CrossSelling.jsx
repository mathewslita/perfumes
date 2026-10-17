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
    <section className="py-14 bg-[#FAF7F2] border-t border-b border-gray-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header (Ref: Imagen 3) */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2E1065]"></span>
            <h3 className="font-arabic-title text-sm sm:text-base font-extrabold tracking-wider text-gray-900 uppercase">
              Personas que vieron este producto también compraron
            </h3>
          </div>
          <button 
            onClick={() => scroll('right')}
            className="text-xs font-bold text-[#2E1065] hover:text-[#D4AF37] hover:underline hidden sm:flex items-center gap-1 transition-colors"
          >
            <span>Ver más recomendaciones</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Carousel Container with Arrows (Ref: Imagen 3) */}
        <div className="relative group">
          
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-xl text-gray-800 flex items-center justify-center hover:bg-[#2E1065] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all hover:scale-105 active:scale-95"
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

              return (
                <div 
                  key={item.id}
                  className="w-60 sm:w-72 flex-shrink-0 bg-white rounded-2xl border border-gray-200/90 p-4 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all flex flex-col justify-between group/card"
                >
                  <div>
                    {/* Bottle Image Stage with SOLID, ULTRA-LEGIBLE Discount Badge */}
                    <div 
                      className="relative aspect-square bg-[#FAF7F2] rounded-xl p-3 mb-3 overflow-hidden cursor-pointer flex items-center justify-center border border-gray-100"
                      onClick={() => onOpenProduct(item.id)}
                    >
                      {/* SOLID HIGH-CONTRAST DISCOUNT BADGE (Fix for translucent issue) */}
                      <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-rose-600 text-white font-black text-xs px-2.5 py-1 rounded-full shadow-lg border-2 border-white ring-1 ring-black/10">
                        <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
                        <span>-{item.discountPercent}%</span>
                      </div>

                      <img 
                        src={item.imageMain} 
                        alt={item.name} 
                        className="w-full h-full object-contain mix-blend-multiply group-hover/card:scale-108 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    {/* Brand & Name */}
                    <span className="text-[10px] font-black tracking-widest text-[#2E1065] uppercase block mb-0.5">
                      {item.brand}
                    </span>
                    <h5 
                      onClick={() => onOpenProduct(item.id)}
                      className="font-bold text-sm text-gray-900 group-hover/card:text-[#2E1065] cursor-pointer line-clamp-1 leading-snug mb-1.5 transition-colors"
                      title={item.name}
                    >
                      {item.name}
                    </h5>

                    {/* 3 Olfactory Note Chips (Added for UX clarity) */}
                    <div className="flex items-center gap-1 mb-3 py-1 px-1.5 bg-[#FAF7F2] rounded-lg border border-gray-100">
                      {item.noteIcons.slice(0, 3).map((note, idx) => (
                        <span key={idx} className="text-[10px] text-gray-700 flex items-center gap-0.5" title={note.name}>
                          <span>{note.emoji}</span>
                          <span className="font-medium text-[9px] truncate max-w-[55px]">{note.name}</span>
                          {idx < 2 && <span className="text-gray-300">•</span>}
                        </span>
                      ))}
                    </div>

                    {/* Pricing Row: Solid, Clear, High-Contrast (Fix for translucent issue) */}
                    <div className="bg-purple-50/50 p-2.5 rounded-xl border border-purple-100/70 mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-[#2E1065]">
                          ${item.price100ml.toFixed(2)}
                        </span>
                        <div className="flex items-center gap-1 text-xs">
                          <span className="text-[11px] font-bold text-gray-600 line-through decoration-rose-500 decoration-1.5">
                            ${item.originalPrice100ml.toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-700 block mt-0.5">
                        Ahorro inmediato de ${savings}
                      </span>
                    </div>
                  </div>

                  {/* Micro-interactive Pill Button with Visual Feedback (Ref: Imagen 3) */}
                  <button
                    onClick={() => handleAddWithFeedback(item)}
                    className={`w-full font-bold text-xs py-2.5 px-4 rounded-full flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95 ${
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
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 shadow-xl text-gray-800 flex items-center justify-center hover:bg-[#2E1065] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all hover:scale-105 active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>

      </div>
    </section>
  );
}
