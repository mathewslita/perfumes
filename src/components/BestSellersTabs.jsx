import React, { useState } from 'react';
import { Flame, Sparkles, MessageCircle } from 'lucide-react';
import ProductCard from './ProductCard';

export default function BestSellersTabs({ 
  products, 
  onOpenProduct, 
  onAddToCart,
  selectedCategory,
  onTabChange
}) {
  const tabs = [
    { id: 'all', label: 'TODOS' },
    { id: 'Para Él', label: 'PARA ÉL' },
    { id: 'Para Ella', label: 'PARA ELLA' },
    { id: 'Unisex', label: 'UNISEX' },
    { id: 'decants', label: 'DECANTS 10ML' }
  ];

  const currentTab = selectedCategory || 'all';

  const filteredProducts = products.filter(p => {
    if (currentTab === 'all') return true;
    if (currentTab === 'decants') return true; // All have decants
    return p.gender === currentTab;
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
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-purple-100 text-center max-w-xl mx-auto shadow-sm my-6">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto mb-4 border border-amber-200">
              <Sparkles className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <h4 className="font-arabic-title text-xl font-bold text-gray-900 mb-2">
              Lote en Tránsito Directo desde Dubái ✈️
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-6">
              Estamos recibiendo nuevas cosechas selladas de esta casa perfumera esta semana en nuestro showroom. 
              Escríbenos por WhatsApp para enviarte la lista completa de referencias disponibles o reservarte tu botella.
            </p>
            <a
              href="https://wa.me/593985911895?text=Hola%20Sultan%20Parfums,%20quiero%20consultar%20disponibilidad%20y%20precios%20de%20esta%20marca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2E1065] hover:bg-[#3B0764] text-white font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Consultar Catálogo de la Marca en WhatsApp</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((perfume) => (
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
