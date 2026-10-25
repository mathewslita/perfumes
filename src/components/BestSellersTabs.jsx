import React from 'react';
import { Sparkles, MessageCircle, RotateCcw, Crown, Award } from 'lucide-react';
import ProductCard from './ProductCard';

export default function BestSellersTabs({ 
  products, 
  onOpenProduct, 
  onAddToCart,
  selectedCategory,
  onTabChange,
  onResetFilters
}) {
  const tabs = [
    { id: 'all', label: 'TODOS', icon: null },
    { id: 'arabes', label: '👑 ARABES DUBAI', icon: Crown },
    { id: 'disenador', label: '✨ DISENADOR', icon: Award },
    { id: 'Para Él', label: 'PARA EL', icon: null },
    { id: 'Para Ella', label: 'PARA ELLA', icon: null },
    { id: 'Unisex', label: 'UNISEX', icon: null },
    { id: 'decants', label: 'DECANTS 10ML', icon: null }
  ];

  const currentTab = selectedCategory || 'all';
  const displayProducts = products;

  return (
    <section id="los-mas-vendidos" className="py-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="font-arabic-title text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] uppercase tracking-wide">
              CATALOGO DE ALTA GAMA
            </h2>
            <span className="text-2xl animate-bounce">🔥</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto uppercase tracking-wider font-medium">
            FRAGANCIAS ARABES Y DE DISENADOR CON ESTELA IMPONENTE, FIJACION PROLONGADA Y MAXIMA CALIDAD.
          </p>

          {/* Dynamic Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-6 border-b border-gray-200 pb-1">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`pb-3 px-3 sm:px-4 text-xs font-bold tracking-wider transition-all relative whitespace-nowrap ${
                    isActive
                      ? 'text-[#0E0E0E] font-black'
                      : 'text-gray-400 hover:text-gray-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A961] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Banner de Categoría con su Frase de Alta Calidad */}
          {currentTab === 'arabes' && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F5F1E8] border border-[#C9A961]/40 text-center max-w-3xl mx-auto shadow-sm animate-in fade-in">
              <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-[#C9A961] text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#C9A961]/40 mb-1.5">
                <Crown className="w-3.5 h-3.5" />
                <span>CATEGORÍA ÁRABE • DUBÁI</span>
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#0E0E0E] leading-relaxed max-w-2xl mx-auto mt-1">
                "El misticismo milenario de Oriente en su máxima expresión: concentración pura, estela imponente y fijación legendaria que cautiva los sentidos."
              </p>
            </div>
          )}

          {currentTab === 'disenador' && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F5F1E8] border border-[#0E0E0E]/20 text-center max-w-3xl mx-auto shadow-sm animate-in fade-in">
              <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-white text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#C9A961]/40 mb-1.5">
                <Award className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>CATEGORÍA DISEÑADOR • ALTA COSTURA</span>
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#0E0E0E] leading-relaxed max-w-2xl mx-auto mt-1">
                "La cumbre de la sofisticación y el lujo global: creaciones maestras de las casas de moda más prestigiosas del mundo, emblema de elegancia atemporal y distinción."
              </p>
            </div>
          )}
        </div>

        {/* Product Cards Grid */}
        {displayProducts.length === 0 ? (
          <div className="bg-[#F5F1E8] rounded-3xl p-8 sm:p-12 border border-[#C9A961]/30 text-center max-w-xl mx-auto shadow-sm my-6">
            <div className="w-16 h-16 rounded-full bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center mx-auto mb-4 border border-[#C9A961]/50">
              <Sparkles className="w-8 h-8 text-[#C9A961]" />
            </div>
            <h4 className="font-arabic-title text-xl font-bold text-gray-950 mb-2">
              No hay coincidencias con esos filtros combinados
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Puedes restablecer los filtros para ver todo el catálogo de fragancias árabes y de diseñador listas para despacho.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-2 bg-[#0E0E0E] hover:bg-[#252525] text-[#C9A961] font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all active:scale-95 border border-[#C9A961]/40"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restablecer Filtros y Ver Todo</span>
              </button>
              <a
                href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20consultar%20disponibilidad%20de%20perfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayProducts.map((perfume) => (
              <ProductCard
                key={perfume.id}
                product={perfume}
                onOpenProduct={onOpenProduct}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
