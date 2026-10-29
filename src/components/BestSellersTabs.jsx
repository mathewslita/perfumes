import React, { useState, useEffect } from 'react';
import { Sparkles, MessageCircle, RotateCcw, Crown, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

export default function BestSellersTabs({ 
  products, 
  onOpenProduct, 
  onAddToCart,
  selectedCategory,
  onTabChange,
  onResetFilters,
  favorites = [],
  onToggleFavorite,
  selectedBrand,
  onClearBrand,
  selectedAcorde,
  onClearAcorde,
  searchQuery,
  onClearSearch,
  activeVibe,
  onClearVibe,
  getAcordeLabel,
  vibeCategories = []
}) {
  const tabs = [
    { id: 'all', label: 'TODOS', icon: null },
    { id: 'arabes', label: 'ARABES', icon: Crown },
    { id: 'disenador', label: 'DISEÑADOR', icon: Award },
    { id: 'Para Él', label: 'PARA EL', icon: null },
    { id: 'Para Ella', label: 'PARA ELLA', icon: null },
    { id: 'Unisex', label: 'UNISEX', icon: null },
    { id: 'decants', label: 'DECANTS', icon: null }
  ];

  const currentTab = selectedCategory || 'all';
  
  const hasActiveFilters = Boolean(
    selectedBrand || 
    selectedAcorde || 
    searchQuery || 
    (selectedCategory && selectedCategory !== 'all') || 
    (activeVibe && activeVibe !== 'all')
  );
  
  // Paginación Responsive: 8 en PC (>= 768px), 4 en Móviles (< 768px)
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsPerPage = isMobile ? 4 : 8;

  // Restablecer a página 1 al cambiar de categoría o tamaño de pantalla
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, isMobile]);

  const totalItems = products.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * itemsPerPage;
  const displayProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === safePage) return;
    setCurrentPage(newPage);
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="los-mas-vendidos" className="py-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <h2 className="font-arabic-title text-2xl sm:text-3xl font-extrabold text-[#0E0E0E] uppercase tracking-wide">
              NUESTRO CATALOGO DE PERFUMES
            </h2>
            <span className="text-2xl animate-bounce">🔥</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto uppercase tracking-wider font-medium">
            FRAGANCIAS ARABES Y DE DISEÑADOR CON ESTELA IMPONENTE, FIJACION PROLONGADA Y MAXIMA CALIDAD.
          </p>

          {/* Dynamic Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mt-6 border-b border-gray-200 pb-1">
            {tabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`pb-3 px-3 sm:px-4 text-xs font-bold tracking-wider transition-all relative whitespace-nowrap cursor-pointer ${
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

          {/* Banner de Categoría con su Frase Actualizada */}
          {currentTab === 'arabes' && (
            <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-[#F5F1E8] border border-[#C9A961]/40 text-center max-w-3xl mx-auto shadow-sm animate-in fade-in">
              <span className="inline-flex items-center gap-1.5 bg-[#0E0E0E] text-[#C9A961] text-[10px] font-black px-3.5 py-1 rounded-full uppercase tracking-widest border border-[#C9A961]/40 mb-1.5">
                <Crown className="w-3.5 h-3.5" />
                <span>CATEGORÍA ÁRABE</span>
              </span>
              <p className="font-serif italic text-sm sm:text-base text-[#0E0E0E] leading-relaxed max-w-2xl mx-auto mt-1">
                "Oler bien, sentirse bien consigo mismo nunca antes fue tan accesible"
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
                "Ser inolvidable nunca se sintió tan bien."
              </p>
            </div>
          )}
        </div>

        {/* Barra de Filtros Activos - Ubicada en la propia sección del Catálogo */}
        {hasActiveFilters && (
          <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-[#0E0E0E] text-[#F5F1E8] border border-[#C9A961]/40 shadow-md flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-extrabold text-[#C9A961] flex items-center gap-1.5 mr-1">
                <Sparkles className="w-3.5 h-3.5" /> Filtros activos:
              </span>

              {selectedBrand && (
                <span className="inline-flex items-center gap-1.5 bg-[#C9A961] text-[#0E0E0E] px-3 py-1 rounded-full font-black shadow-xs">
                  <span>Casa: {selectedBrand}</span>
                  <button 
                    onClick={onClearBrand} 
                    className="hover:text-black ml-0.5 text-sm leading-none cursor-pointer"
                    title="Quitar filtro de casa"
                    aria-label="Quitar filtro de casa"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedAcorde && (
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-[#F5F1E8] px-3 py-1 rounded-full font-bold shadow-xs border border-[#C9A961]/40">
                  <span>{getAcordeLabel ? getAcordeLabel(selectedAcorde) : selectedAcorde}</span>
                  <button 
                    onClick={onClearAcorde} 
                    className="hover:text-[#C9A961] ml-0.5 text-sm leading-none cursor-pointer"
                    title="Quitar filtro de acorde"
                    aria-label="Quitar filtro de acorde"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedCategory && selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-[#C9A961]/25 text-[#C9A961] border border-[#C9A961]/40 px-3 py-1 rounded-full font-bold">
                  <span>
                    {selectedCategory === 'arabes' 
                      ? '👑 Colección Árabe' 
                      : selectedCategory === 'disenador' 
                        ? '✨ Diseñador Alta Costura' 
                        : selectedCategory === 'decants'
                          ? '🧪 Decants 10ml'
                          : selectedCategory}
                  </span>
                  <button 
                    onClick={() => onTabChange('all')} 
                    className="hover:text-white ml-0.5 text-sm leading-none cursor-pointer"
                    title="Quitar filtro de categoría"
                    aria-label="Quitar filtro de categoría"
                  >
                    &times;
                  </button>
                </span>
              )}

              {activeVibe && activeVibe !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#C9A961] px-3 py-1 rounded-full font-bold border border-[#C9A961]/30 uppercase">
                  <span>ESTILO: {vibeCategories?.find(v => v.id === activeVibe)?.name || activeVibe}</span>
                  <button 
                    onClick={onClearVibe} 
                    className="hover:text-white ml-0.5 text-sm leading-none cursor-pointer"
                    title="Quitar filtro de estilo"
                    aria-label="Quitar filtro de estilo"
                  >
                    &times;
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1 rounded-full border border-gray-600 font-medium">
                  <span>Búsqueda: "{searchQuery}"</span>
                  <button 
                    onClick={onClearSearch} 
                    className="hover:text-[#C9A961] ml-0.5 text-sm leading-none cursor-pointer"
                    title="Limpiar búsqueda"
                    aria-label="Limpiar búsqueda"
                  >
                    &times;
                  </button>
                </span>
              )}

              <span className="text-gray-300 font-semibold bg-white/10 px-2.5 py-1 rounded-full border border-[#C9A961]/20">
                {products.length} fragancia{products.length === 1 ? '' : 's'} encontrada{products.length === 1 ? '' : 's'}
              </span>
            </div>

            <button
              onClick={onResetFilters}
              className="text-xs text-[#0E0E0E] bg-[#C9A961] hover:bg-[#B89228] font-black px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 shadow-xs active:scale-95 cursor-pointer ml-auto sm:ml-0"
              title="Restablecer todos los filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver Todo el Catálogo</span>
            </button>
          </div>
        )}
        {totalItems === 0 ? (
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
                className="inline-flex items-center gap-2 bg-[#0E0E0E] hover:bg-[#252525] text-[#C9A961] font-bold text-xs py-3 px-6 rounded-full shadow-md transition-all active:scale-95 border border-[#C9A961]/40 cursor-pointer"
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
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayProducts.map((perfume) => (
                <ProductCard
                  key={perfume.id}
                  product={perfume}
                  onOpenProduct={onOpenProduct}
                  onAddToCart={onAddToCart}
                  isFavorite={favorites.includes(perfume.id)}
                  onToggleFavorite={onToggleFavorite}
                />
              ))}
            </div>

            {/* Paginación Limpia y Minimalista (8 en PC / 4 en Móvil) */}
            {totalPages > 1 && (
              <nav 
                aria-label="Paginación del catálogo"
                className="mt-10 pt-4 flex items-center justify-center gap-2"
              >
                {/* Botón Anterior */}
                <button
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage === 1}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                    safePage === 1
                      ? 'opacity-30 border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-[#0E0E0E] border-gray-200 hover:border-[#C9A961] hover:text-[#C9A961] hover:shadow-xs active:scale-95'
                  }`}
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                {/* Botones de Páginas Numéricas */}
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => {
                    const isActive = pageNum === safePage;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                          isActive
                            ? 'bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961] font-black shadow-sm'
                            : 'bg-white text-gray-700 border border-gray-200 hover:border-[#C9A961]/60 hover:text-black'
                        }`}
                        aria-label={`Ir a página ${pageNum}`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                {/* Botón Siguiente */}
                <button
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage === totalPages}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 cursor-pointer ${
                    safePage === totalPages
                      ? 'opacity-30 border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-[#0E0E0E] border-gray-200 hover:border-[#C9A961] hover:text-[#C9A961] hover:shadow-xs active:scale-95'
                  }`}
                  aria-label="Página siguiente"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </nav>
            )}
          </>
        )}

      </div>
    </section>
  );
}
