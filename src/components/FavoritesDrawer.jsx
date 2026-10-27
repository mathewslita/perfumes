import React from 'react';
import { X, Trash2, Heart, ShoppingBag, MessageCircle, ArrowRight, Sparkles, Check, ExternalLink } from 'lucide-react';
import { PERFUMES_DATA } from '../data/perfumes';

export default function FavoritesDrawer({
  isOpen,
  onClose,
  favorites = [],
  onAddToCart,
  onRemoveFavorite,
  onOpenProduct,
  onClearFavorites,
  onExploreCatalog
}) {
  if (!isOpen) return null;

  // Resolve full perfume objects from favorites IDs
  const favoriteProducts = favorites
    .map(id => PERFUMES_DATA.find(p => p.id === id))
    .filter(Boolean);

  const totalCount = favoriteProducts.length;
  const totalValue = favoriteProducts.reduce((sum, p) => sum + (p.price100ml || 0), 0);

  // WhatsApp Wishlist Share
  const handleShareFavoritesWhatsApp = () => {
    if (favoriteProducts.length === 0) return;

    const phoneNumber = '593992851808';
    let msg = `*¡Hola ARKANO Perfumería! 👑 He guardado esta lista de perfumes favoritos en su boutique y deseo consultar disponibilidad para despacho:*\n\n`;

    favoriteProducts.forEach((p, idx) => {
      const isArabic = p.collection === 'arabes';
      msg += `${idx + 1}. *${p.brand} - ${p.name}*\n`;
      msg += `   • Colección: ${isArabic ? 'Árabe de Dubái' : 'Diseñador Alta Costura'}\n`;
      msg += `   • Frasco Completo: $${p.price100ml.toFixed(2)} | Decant 10ml: $${p.priceDecant.toFixed(2)}\n\n`;
    });

    msg += `──────────────────\n`;
    msg += `💎 *Total Fragancias:* ${totalCount}\n`;
    msg += `✨ *¿Tienen disponibilidad en botella o decants para entrega inmediata?*`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleAddAllToCart = () => {
    if (favoriteProducts.length === 0) return;
    favoriteProducts.forEach(p => {
      onAddToCart(p, '100ml', 1);
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity cursor-pointer"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-[#C9A961]/35 animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#0E0E0E] text-[#F5F1E8] border-b border-[#C9A961]/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-rose-500/15 border border-rose-500/40 flex items-center justify-center text-rose-500">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h3 className="font-arabic-title text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>MIS FAVORITOS</span>
                  <span className="text-xs font-mono font-bold bg-[#C9A961] text-[#0E0E0E] px-2 py-0.5 rounded-full">
                    {totalCount}
                  </span>
                </h3>
                <span className="text-[11px] text-[#C9A961]">
                  Fragancias exclusivas que te cautivaron
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {totalCount > 0 && (
                <button
                  onClick={onClearFavorites}
                  className="text-gray-400 hover:text-rose-400 text-xs px-2.5 py-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title="Vaciar favoritos"
                >
                  Vaciar
                </button>
              )}
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Cerrar favoritos"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-[#FAF8F5]">
            {totalCount === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
                <div className="w-20 h-20 rounded-full bg-[#F5F1E8] border-2 border-dashed border-[#C9A961]/50 flex items-center justify-center mb-4 shadow-inner">
                  <Heart className="w-9 h-9 text-rose-300" />
                </div>
                <h4 className="font-arabic-title text-lg font-bold text-gray-900 mb-1.5">
                  Aún no tienes perfumes en favoritos
                </h4>
                <p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-6">
                  Toca el icono del corazón en cualquier fragancia árabe o de diseñador para guardarla aquí y tenerla siempre lista.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onExploreCatalog) onExploreCatalog();
                  }}
                  className="bg-[#0E0E0E] hover:bg-[#252525] text-[#C9A961] border border-[#C9A961]/40 text-xs font-black py-3 px-6 rounded-full shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                </button>
              </div>
            ) : (
              favoriteProducts.map((product) => {
                const isArabic = product.collection === 'arabes';
                const discount = product.originalPrice100ml > product.price100ml
                  ? Math.round(((product.originalPrice100ml - product.price100ml) / product.originalPrice100ml) * 100)
                  : 0;

                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl p-3 sm:p-3.5 border border-stone-200 shadow-sm hover:border-[#C9A961]/60 hover:shadow-md transition-all group"
                  >
                    <div className="flex gap-3">
                      {/* Product Thumbnail (Clickable to open PDP) */}
                      <div 
                        onClick={() => {
                          onOpenProduct(product.id);
                          onClose();
                        }}
                        className="w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] p-1.5 border border-stone-200 flex-shrink-0 flex items-center justify-center cursor-pointer relative overflow-hidden"
                        title="Ver detalles de la fragancia"
                      >
                        <img 
                          src={product.imageMain} 
                          alt={product.name}
                          className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-108 transition-transform duration-300"
                        />
                        {discount > 0 && (
                          <span className="absolute top-1 left-1 bg-rose-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full">
                            -{discount}%
                          </span>
                        )}
                      </div>

                      {/* Info & Price */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-[10px] font-black text-[#A58B4E] uppercase tracking-wider truncate">
                              {product.brand}
                            </span>
                            <button
                              onClick={() => onRemoveFavorite(product.id)}
                              className="text-stone-400 hover:text-rose-500 p-1 rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
                              title="Quitar de favoritos"
                              aria-label="Quitar de favoritos"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <h4 
                            onClick={() => {
                              onOpenProduct(product.id);
                              onClose();
                            }}
                            className="font-arabic-title text-sm font-bold text-gray-900 truncate hover:text-[#C9A961] cursor-pointer transition-colors"
                          >
                            {product.name}
                          </h4>

                          <span className="text-[10px] text-stone-500 block truncate">
                            {product.technicalTable?.fragranceType || 'Alta Perfumería'}
                          </span>
                        </div>

                        {/* Prices & Actions */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                          <div>
                            <span className="text-sm font-black text-[#0E0E0E]">
                              ${product.price100ml.toFixed(2)}
                            </span>
                            {product.originalPrice100ml > product.price100ml && (
                              <span className="text-[10px] text-stone-400 line-through ml-1.5">
                                ${product.originalPrice100ml.toFixed(2)}
                              </span>
                            )}
                          </div>

                          <button
                            onClick={() => {
                              onAddToCart(product, '100ml', 1);
                            }}
                            className="inline-flex items-center gap-1.5 bg-[#0E0E0E] hover:bg-[#252525] text-[#C9A961] text-[11px] font-bold py-1.5 px-3 rounded-full transition-all active:scale-95 cursor-pointer shadow-xs border border-[#C9A961]/30"
                          >
                            <ShoppingBag className="w-3 h-3 text-[#C9A961]" />
                            <span>+ Carrito</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer with Actions */}
          {totalCount > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-stone-200 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-600 px-1">
                <span>Total de tu selección ({totalCount}):</span>
                <span className="text-base font-black text-[#0E0E0E]">
                  ${totalValue.toFixed(2)} USD
                </span>
              </div>

              {/* Add All to Cart Button */}
              <button
                onClick={handleAddAllToCart}
                className="w-full bg-[#0E0E0E] hover:bg-[#252525] text-[#C9A961] border border-[#C9A961]/50 text-xs font-black py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#C9A961]" />
                <span>Agregar Todos al Carrito ({totalCount})</span>
              </button>

              {/* Share Wishlist via WhatsApp */}
              <button
                onClick={handleShareFavoritesWhatsApp}
                className="w-full bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] text-xs font-black py-3 px-4 rounded-full flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Consultar Disponibilidad por WhatsApp</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
