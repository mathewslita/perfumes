import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Gift, MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { CART_GOALS_CONFIG, getAllowedFreePerfumesCount } from '../config/cartGoalsConfig';
import { PERFUMES_DATA } from '../data/perfumes';

export default function CartDrawer({
  isOpen,
  onClose,
  cart: cartProp,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onExploreCatalog,
  selectedGiftIds = [],
  onOpenGiftModal,
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  const cart = Array.isArray(cartProp)
    ? cartProp
    : (Array.isArray(cartItems) ? cartItems : []);

  if (!isOpen) return null;

  // 4 Metas oficiales de compra ARKANO ($120, $150, $350 y $550)
  const GOAL_DECANT = CART_GOALS_CONFIG.freeDecantThreshold;           // $120
  const GOAL_DELIVERY = CART_GOALS_CONFIG.personalDeliveryThreshold;   // $150
  const GOAL_PERFUME_1 = CART_GOALS_CONFIG.freePerfumeThreshold;       // $350
  const GOAL_PERFUME_2 = CART_GOALS_CONFIG.twoFreePerfumesThreshold;   // $550
  const DELIVERY_ZONES = CART_GOALS_CONFIG.personalDeliveryZones;

  // Cálculos basados únicamente en ítems pagados
  const subtotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price || 0) * (item.quantity || 1)), 0);
  const total = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  const totalDiscount = Math.max(0, subtotal - total);

  const allowedGiftsCount = getAllowedFreePerfumesCount(total);

  // Perfumes gratis seleccionados válidos según meta actual
  const selectedGiftPerfumes =
    allowedGiftsCount > 0
      ? selectedGiftIds
          .filter((id) => CART_GOALS_CONFIG.freeGiftPerfumeIds.includes(id))
          .slice(0, allowedGiftsCount)
          .map((id) => PERFUMES_DATA.find((p) => p.id === id))
          .filter(Boolean)
      : [];

  const needsGiftSelection = allowedGiftsCount > 0 && selectedGiftPerfumes.length < allowedGiftsCount;

  // Progreso visual de 4 etapas: 25% ($120), 50% ($150), 75% ($350), 100% ($550)
  let progressPct = 0;
  if (total <= 0) {
    progressPct = 0;
  } else if (total < GOAL_DECANT) {
    progressPct = (total / GOAL_DECANT) * 25;
  } else if (total < GOAL_DELIVERY) {
    progressPct = 25 + ((total - GOAL_DECANT) / (GOAL_DELIVERY - GOAL_DECANT)) * 25;
  } else if (total < GOAL_PERFUME_1) {
    progressPct = 50 + ((total - GOAL_DELIVERY) / (GOAL_PERFUME_1 - GOAL_DELIVERY)) * 25;
  } else if (total < GOAL_PERFUME_2) {
    progressPct = 75 + ((total - GOAL_PERFUME_1) / (GOAL_PERFUME_2 - GOAL_PERFUME_1)) * 25;
  } else {
    progressPct = 100;
  }

  // Mensaje motivacional dinámico según el tramo actual
  let nextGoalMsg = null;
  if (total < GOAL_DECANT) {
    nextGoalMsg = (
      <span>
        Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_DECANT - total).toFixed(2)}</strong> más para un <strong>Decant 10 ml GRATIS</strong> 🧪
      </span>
    );
  } else if (total < GOAL_DELIVERY) {
    nextGoalMsg = (
      <span>
        🧪 ¡Decant 10 ml Gratis listo! Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_DELIVERY - total).toFixed(2)}</strong> para <strong>Entrega Personal GRATIS</strong> <span className="text-stone-600 font-semibold">({DELIVERY_ZONES})</span> 🚚
      </span>
    );
  } else if (total < GOAL_PERFUME_1) {
    nextGoalMsg = (
      <span>
        🎉 ¡Decant + Entrega Gratis listos! Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_PERFUME_1 - total).toFixed(2)}</strong> para <strong>1 PERFUME GRATIS</strong> 🎁
      </span>
    );
  } else if (total < GOAL_PERFUME_2) {
    nextGoalMsg = (
      <span>
        🎁 ¡1 Perfume Gratis activo! Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_PERFUME_2 - total).toFixed(2)}</strong> más para llevarte <strong>2 PERFUMES GRATIS</strong> 👑
      </span>
    );
  } else if (needsGiftSelection) {
    nextGoalMsg = (
      <span className="text-[#755B1E] font-black">
        👑 ¡META SUPREMA DE ${GOAL_PERFUME_2} SUPERADA! Elige tus 2 Perfumes GRATIS ({selectedGiftPerfumes.length}/2) 🎁
      </span>
    );
  } else {
    nextGoalMsg = (
      <span className="text-emerald-800 font-black">
        👑 ¡TODAS LAS METAS ALCANZADAS! Decant 10 ml + Entrega Gratis + 2 Perfumes Gratis ✨
      </span>
    );
  }

  // Generador de pedido por WhatsApp
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    // Si alcanzó $350+ o $550+ y le falta elegir perfume(s) de la lista cerrada, abrir el selector primero
    if (needsGiftSelection && onOpenGiftModal) {
      onOpenGiftModal();
      return;
    }

    const phoneNumber = '593992851808';
    let message = `*¡Hola ARKANO Perfumería! 👑 Deseo confirmar mi pedido de Perfumes Originales (Árabes / Diseñador):*\n\n`;

    cart.forEach((item, index) => {
      const formatLabel = item.format === '100ml'
        ? 'Frasco 100ml'
        : item.format === '30ml'
          ? 'Decant 30ml'
          : 'Decant 10ml';
      message += `${index + 1}. *${item.brand} - ${item.name}*\n`;
      message += `   • Presentación: ${formatLabel}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio Unitario: $${item.price.toFixed(2)}\n`;
      message += `   • Subtotal Ítem: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `──────────────────\n`;
    message += `💰 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    if (totalDiscount > 0) {
      message += `🏷️ *Ahorro en Tienda:* -$${totalDiscount.toFixed(2)}\n`;
    }
    message += `👑 *TOTAL A PAGAR:* $${total.toFixed(2)} USD\n\n`;

    if (total >= GOAL_DECANT) {
      message += `🎁 *BENEFICIOS DESBLOQUEADOS POR META DE COMPRA:*\n`;
      message += `• 🧪 1 Decant de 10 ml GRATIS cortesía ARKANO\n`;
      if (total >= GOAL_DELIVERY) {
        message += `• 🚚 Entrega Personal GRATIS (válido para ${DELIVERY_ZONES})\n`;
      }
      if (selectedGiftPerfumes.length > 0) {
        selectedGiftPerfumes.forEach((gp, idx) => {
          const numLabel = allowedGiftsCount > 1 ? ` #${idx + 1}` : '';
          message += `• 🎁 PERFUME GRATIS${numLabel} ($${allowedGiftsCount > 1 ? GOAL_PERFUME_2 : GOAL_PERFUME_1}+): *${gp.brand} - ${gp.name}* (Frasco 100ml - $0.00 USD)\n`;
        });
      }
      message += `\n`;
    } else {
      message += `📦 *Despacho:* En máximo 6 horas con empaque blindado a todo el país\n\n`;
    }

    if (customerName.trim() || customerCity.trim()) {
      message += `*Datos para Entrega y Facturación:*\n`;
      if (customerName.trim()) message += `👤 Cliente: ${customerName}\n`;
      if (customerCity.trim()) message += `📍 Ciudad / Sector: ${customerCity}\n`;
    }

    message += `\n_Solicito confirmación de disponibilidad inmediata con sello de fábrica y batch code verificado. ¡Muchas gracias!_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Translucent Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-[#C9A961]/30">

          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-[#0E0E0E] text-[#F5F1E8]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C9A961]" />
              <h2 className="font-serif text-base sm:text-lg font-bold text-white tracking-wide">
                Tu Carrito ARKANO ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Barra de 4 Metas de Compra ($120 Decant / $150 Entrega / $350 1 Perfume / $550 2 Perfumes) */}
          <div className="bg-[#F5F1E8] p-3.5 border-b border-[#C9A961]/30 text-xs select-none">
            <div className="flex items-start justify-between font-bold mb-2 gap-2">
              <span className="text-[#0E0E0E] text-[11px] leading-snug">
                {nextGoalMsg}
              </span>
              <span className="text-[10px] text-stone-600 font-bold flex-shrink-0 bg-white/80 px-2 py-0.5 rounded-full border border-[#C9A961]/30">
                ${total.toFixed(0)} / ${GOAL_PERFUME_2}
              </span>
            </div>

            {/* Stepper de 4 Nodos: 25% ($120), 50% ($150), 75% ($350) y 100% ($550) */}
            <div className="relative pt-2 pb-7 px-1">
              <div className="w-full bg-gray-200/90 rounded-full h-2 overflow-hidden shadow-inner">
                <div
                  className="bg-gradient-to-r from-[#0E0E0E] via-[#C9A961] to-[#E3C57C] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }}
                />
              </div>

              {/* Meta 1: $120 Decant (Left 25%) */}
              <div className="absolute top-0.5 left-[25%] -translate-x-1/2 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_DECANT
                    ? 'bg-emerald-600 text-white border-emerald-700 scale-110 font-bold'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_DECANT ? '✓' : '🧪'}
                </div>
                <span className={`text-[8.5px] sm:text-[9px] font-bold mt-1 text-center leading-tight whitespace-nowrap ${
                  total >= GOAL_DECANT ? 'text-emerald-800' : 'text-stone-600'
                }`}>
                  $120<br />Decant
                </span>
              </div>

              {/* Meta 2: $150 Entrega Gratis (Left 50%) */}
              <div className="absolute top-0.5 left-[50%] -translate-x-1/2 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_DELIVERY
                    ? 'bg-emerald-600 text-white border-emerald-700 scale-110 font-bold'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_DELIVERY ? '✓' : '🚚'}
                </div>
                <span className={`text-[8.5px] sm:text-[9px] font-bold mt-1 text-center leading-tight whitespace-nowrap ${
                  total >= GOAL_DELIVERY ? 'text-emerald-800' : 'text-stone-600'
                }`}>
                  $150<br />Entrega
                </span>
              </div>

              {/* Meta 3: $350 1 Perfume Gratis (Left 75%) */}
              <div className="absolute top-0.5 left-[75%] -translate-x-1/2 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_PERFUME_1
                    ? 'bg-[#0E0E0E] text-[#C9A961] border-[#C9A961] scale-110 font-bold'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_PERFUME_1 ? '🎁' : '🎁'}
                </div>
                <span className={`text-[8.5px] sm:text-[9px] font-bold mt-1 text-center leading-tight whitespace-nowrap ${
                  total >= GOAL_PERFUME_1 ? 'text-[#755B1E]' : 'text-stone-600'
                }`}>
                  $350<br />1 Gratis
                </span>
              </div>

              {/* Meta 4: $550 2 Perfumes Gratis (Right 0) */}
              <div className="absolute top-0.5 right-0 flex flex-col items-end">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_PERFUME_2
                    ? 'bg-[#0E0E0E] text-[#C9A961] border-[#C9A961] scale-110 font-bold'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_PERFUME_2 ? '★' : '👑'}
                </div>
                <span className={`text-[8.5px] sm:text-[9px] font-bold mt-1 text-right leading-tight whitespace-nowrap ${
                  total >= GOAL_PERFUME_2 ? 'text-[#755B1E]' : 'text-stone-600'
                }`}>
                  $550<br />2 Gratis
                </span>
              </div>
            </div>

            {/* Botón de Acceso a la Lista Cerrada SOLO cuando total >= $350 */}
            {allowedGiftsCount > 0 && (
              <button
                type="button"
                onClick={onOpenGiftModal}
                className="w-full mt-1 py-2.5 px-3.5 rounded-xl bg-[#0E0E0E] hover:bg-[#1C1C1C] text-[#C9A961] border border-[#C9A961] font-black text-xs flex items-center justify-between gap-2 shadow-md transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2 truncate">
                  <Gift className="w-4 h-4 text-[#C9A961] flex-shrink-0 animate-bounce" />
                  <span className="truncate">
                    {needsGiftSelection
                      ? allowedGiftsCount === 2
                        ? `¡Elige tus 2 Perfumes Gratis (${selectedGiftPerfumes.length}/2)!`
                        : '¡Elegir mi Perfume Gratis de la promoción!'
                      : allowedGiftsCount === 2
                        ? `2 Regalos elegidos: ${selectedGiftPerfumes.map((g) => g.name).join(' + ')}`
                        : `Regalo elegido: ${selectedGiftPerfumes[0]?.name}`}
                  </span>
                </span>
                <span className="text-[10px] bg-[#C9A961] text-[#0E0E0E] px-2.5 py-0.5 rounded-full font-black flex-shrink-0 group-hover:scale-105 transition-transform">
                  {needsGiftSelection ? 'VER LISTA →' : 'CAMBIAR'}
                </span>
              </button>
            )}

            {cart.length > 0 && total < GOAL_PERFUME_2 && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onExploreCatalog) onExploreCatalog();
                }}
                className="w-full text-center text-[10.5px] font-bold text-[#755B1E] hover:text-[#0E0E0E] transition-colors pt-1.5 flex items-center justify-center gap-1 group cursor-pointer"
              >
                <span>+ Agregar otro perfume para alcanzar la siguiente meta</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-[#0E0E0E] text-[#C9A961] flex items-center justify-center mx-auto mb-3 border border-[#C9A961]/40">
                  <ShoppingBag className="w-8 h-8 text-[#C9A961]" />
                </div>
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Tu carrito está vacío
                </h3>
                <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
                  Agrega una fragancia árabe o de diseñador para disfrutar de la experiencia sensorial ARKANO.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onExploreCatalog) onExploreCatalog();
                  }}
                  className="mt-5 bg-[#0E0E0E] hover:bg-[#1C1C1C] text-[#C9A961] border border-[#C9A961]/50 text-xs font-bold py-2.5 px-6 rounded-full transition-all shadow-md cursor-pointer"
                >
                  Explorar Catálogo ARKANO
                </button>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={`${item.id}-${item.format}`} className="pt-4 first:pt-0 flex gap-3 sm:gap-4 items-start">
                    <div className="w-16 h-16 rounded-xl bg-[#F5F1E8] p-1.5 flex-shrink-0 border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        width="64"
                        height="64"
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>

                    <div className="flex-grow text-xs">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <span className="text-[10px] font-extrabold text-[#0E0E0E] uppercase block">
                            {item.brand}
                          </span>
                          <h3 className="font-bold text-gray-900 leading-snug">
                            {item.name}
                          </h3>
                          <span className="text-[11px] text-gray-500 font-medium block mt-0.5">
                            {item.format === '100ml'
                              ? 'Frasco 100ml'
                              : item.format === '30ml'
                                ? 'Decant 30ml'
                                : 'Decant 10ml'}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => onRemoveItem(item.id, item.format)}
                          className="text-gray-400 hover:text-rose-600 p-1.5 rounded transition-colors cursor-pointer"
                          title="Eliminar producto"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-0.5">
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.format, -1)}
                            className="text-gray-600 hover:text-black font-bold px-1.5 text-xs cursor-pointer"
                          >
                            -
                          </button>
                          <span className="px-2 font-bold text-xs text-gray-800">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, item.format, 1)}
                            className="text-gray-600 hover:text-black font-bold px-1.5 text-xs cursor-pointer"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] text-gray-500 block">
                            ${item.price.toFixed(2)} c/u
                          </span>
                          <div className="flex items-baseline gap-1.5 justify-end">
                            {item.originalPrice > item.price && (
                              <span className="text-[11px] font-bold text-stone-500 line-through decoration-[#755B1E]/80 decoration-1.5">
                                ${(item.originalPrice * item.quantity).toFixed(2)}
                              </span>
                            )}
                            <span className="font-black text-sm text-[#0E0E0E]">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Tarjetas de Perfume(s) Gratis Seleccionados (SOLO visibles si total >= $350) */}
                {allowedGiftsCount > 0 && selectedGiftPerfumes.length > 0 && (
                  <div className="pt-4 space-y-2.5">
                    {selectedGiftPerfumes.map((giftPerfume, idx) => (
                      <div
                        key={`${giftPerfume.id}-${idx}`}
                        className="p-3 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-[#F5F1E8] border-2 border-[#C9A961] flex items-center gap-3 shadow-xs"
                      >
                        <div className="w-14 h-14 rounded-xl bg-white p-1 border border-[#C9A961]/50 flex-shrink-0">
                          <img
                            src={giftPerfume.imageMain}
                            alt={giftPerfume.name}
                            width="56"
                            height="56"
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </div>
                        <div className="flex-grow min-w-0 text-xs">
                          <span className="inline-flex items-center gap-1 text-[9.5px] font-black uppercase tracking-wider bg-[#0E0E0E] text-[#C9A961] px-2 py-0.5 rounded-full">
                            🎁 PERFUME DE REGALO {allowedGiftsCount > 1 ? `#${idx + 1}` : ''} ($0.00)
                          </span>
                          <h4 className="font-bold text-[#0E0E0E] truncate mt-1">
                            {giftPerfume.brand} - {giftPerfume.name}
                          </h4>
                          <div className="flex items-center justify-between mt-0.5">
                            <span className="text-[11px] text-stone-600 font-medium">Frasco 100ml • Gratis</span>
                            <button
                              type="button"
                              onClick={onOpenGiftModal}
                              className="text-[11px] font-extrabold text-[#755B1E] hover:text-[#0E0E0E] underline cursor-pointer"
                            >
                              Cambiar opción
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Footer Summary & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-[#F5F1E8] space-y-3">

              {/* Recompensas Desbloqueadas ($120+) */}
              {total >= GOAL_DECANT && (
                <div className="bg-white/90 rounded-xl p-3 border border-[#C9A961]/50 shadow-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E0E0E]">
                    <Gift className="w-3.5 h-3.5 text-[#755B1E]" />
                    <span>Beneficios activos en tu pedido:</span>
                  </div>
                  <div className="space-y-1 text-[11px] text-gray-700">
                    <div className="flex items-start gap-1.5 text-emerald-800 font-semibold leading-snug">
                      <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                      <span>1 Decant de 10 ml GRATIS incluido</span>
                    </div>

                    {total >= GOAL_DELIVERY && (
                      <div className="flex items-start gap-1.5 text-emerald-800 font-semibold leading-snug">
                        <Check className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0 mt-0.5" />
                        <span>
                          Entrega Personal GRATIS <span className="font-normal text-stone-700">({DELIVERY_ZONES})</span>
                        </span>
                      </div>
                    )}

                    {allowedGiftsCount > 0 && (
                      <div className="flex items-start justify-between gap-2 text-[#755B1E] font-bold leading-snug pt-0.5">
                        <div className="flex items-start gap-1.5">
                          <span className="flex-shrink-0">🎁</span>
                          <span>
                            {selectedGiftPerfumes.length === allowedGiftsCount
                              ? `${allowedGiftsCount === 2 ? '2 Perfumes Gratis' : 'Perfume Gratis'}: ${selectedGiftPerfumes.map((g) => g.name).join(' + ')}`
                              : `${allowedGiftsCount === 2 ? `2 Perfumes Gratis (${selectedGiftPerfumes.length}/2 elegidos)` : '1 Perfume Original Gratis pendiente de elegir'}`}
                          </span>
                        </div>
                        {needsGiftSelection && (
                          <button
                            type="button"
                            onClick={onOpenGiftModal}
                            className="text-[10.5px] font-black bg-[#0E0E0E] text-[#C9A961] px-2.5 py-0.5 rounded-full flex-shrink-0 cursor-pointer"
                          >
                            Elegir →
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Optional Quick Fields for WhatsApp personalization */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Tu Nombre completo"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg py-1.5 px-2.5 text-xs focus:outline-none focus:border-[#0E0E0E]"
                />
                <input
                  type="text"
                  placeholder="Ciudad / Sector (ej. Quito, Cumbayá)"
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg py-1.5 px-2.5 text-xs focus:outline-none focus:border-[#0E0E0E]"
                />
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-1.5 text-xs pt-1">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                {totalDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Ahorro en tienda ARKANO:</span>
                    <span className="font-medium">-${totalDiscount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between items-baseline text-base font-extrabold text-[#0E0E0E] border-t border-gray-300 pt-2">
                  <span>Total a pagar:</span>
                  <span className="font-black text-xl text-[#0E0E0E]">${total.toFixed(2)} USD</span>
                </div>
              </div>

              <p className="text-[10px] text-stone-600 text-center italic">
                Precios con impuestos incluidos • Batch code verificado y sellado
              </p>

              {/* Direct WhatsApp Checkout Button */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-98 text-white font-extrabold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-xl hover:shadow-emerald-500/30 transition-all group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 text-white fill-current" />
                <span>
                  {needsGiftSelection
                    ? allowedGiftsCount === 2
                      ? `ELEGIR REGALOS (${selectedGiftPerfumes.length}/2) Y CONTINUAR`
                      : 'ELEGIR PERFUME GRATIS Y CONTINUAR'
                    : 'CONFIRMAR PEDIDO POR WHATSAPP'}
                </span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-600 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#755B1E]" />
                <span>Despacho en máximo 6 horas con empaque blindado a todo el país</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
