import React from 'react';
import { Sparkles, MessageCircle, RotateCcw } from 'lucide-react';
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
    { id: 'all', label: 'TODOS' },
    { id: 'Para Él', label: 'PARA ÉL' },
    { id: 'Para Ella', label: 'PARA ELLA' },
    { id: 'Unisex', label: 'UNISEX' },
    { id: 'decants', label: 'DECANTS 10ML' }
  ];

  const currentTab = selectedCategory || 'all';

  const displayProducts = products.filter(p => {
    if (currentTab === 'all' || currentTab === 'decants' || currentTab === 'ofertas') return true;
    if (currentTab === 'Para Él') return p.gender === 'Para Él' || p.gender === 'Unisex';
    if (currentTab === 'Para Ella') return p.gender === 'Para Ella' || p.gender === 'Unisex';
    if (currentTab === 'Unisex') return p.gender === 'Unisex';
    return true;
  });

  return (
    <section id="los-mas-vendidos" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (Ref: Imagen 4) */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="font-arabic-title text-2xl sm:text-3xl font-extrabold text-[#2E1065]">
              Los más vendidos
            </h2>
            <span className="text-2xl animate-bounce">🔥</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto">
            Las fragancias árabes que rompen récords de elogios y duración en todo el mundo.
          </p>

          {/* Dynamic Tabs (Ref: Imagen 4: SKINCARE / MAKE UP / CAPILAR style) */}
          <div className="flex items-center justify-center gap-2 sm:gap-6 mt-6 border-b border-gray-200">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`pb-3 px-2 sm:px-4 text-xs sm:text-sm font-bold tracking-wider transition-all relative ${
                    isActive
                      ? 'text-[#2E1065] font-black'
                      : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2E1065] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid (Ref: Imagen 4) */}
        {displayProducts.length === 0 ? (
          <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border border-purple-100 text-center max-w-xl mx-auto shadow-sm my-6">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h4 className="font-arabic-title text-xl font-bold text-gray-900 mb-2">
              No hay coincidencias con esos filtros combinados
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Para no dejarte sin opciones, puedes restablecer los filtros y explorar todo el catálogo de perfumes originales disponibles para entrega inmediata.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onResetFilters}
                className="inline-flex items-center gap-2 bg-[#2E1065] hover:bg-[#3B0764] text-[#D4AF37] font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restablecer Filtros y Ver Todo</span>
              </button>
              <a
                href="https://wa.me/593985911895?text=Hola%20Sultan%20Parfums,%20quiero%20consultar%20disponibilidad%20de%20perfumes%20%C3%A1rabes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all active:scale-95"
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
