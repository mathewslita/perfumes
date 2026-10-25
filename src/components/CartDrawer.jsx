import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Truck, Gift, MessageCircle, ArrowRight, ShieldCheck, Crown } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cart: cartProp, 
  cartItems,
  onUpdateQty, 
  onRemoveItem,
  onClearCart,
  onExploreCatalog
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');

  const cart = Array.isArray(cartProp) 
    ? cartProp 
    : (Array.isArray(cartItems) ? cartItems : []);

  if (!isOpen) return null;

  // Metas progresivas en el carrito para incentivar compras superiores
  const GOAL_SHIPPING = 60.00;
  const GOAL_DECANT = 110.00;
  const GOAL_VIP = 170.00;

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price || 0) * (item.quantity || 1)), 0);
  const total = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  const totalDiscount = Math.max(0, subtotal - total);

  // Progreso visual calculado a lo largo de las 3 metas
  let progressPct = 0;
  if (total <= 0) {
    progressPct = 0;
  } else if (total < GOAL_SHIPPING) {
    progressPct = (total / GOAL_SHIPPING) * 33.3;
  } else if (total < GOAL_DECANT) {
    progressPct = 33.3 + ((total - GOAL_SHIPPING) / (GOAL_DECANT - GOAL_SHIPPING)) * 33.3;
  } else if (total < GOAL_VIP) {
    progressPct = 66.6 + ((total - GOAL_DECANT) / (GOAL_VIP - GOAL_DECANT)) * 33.4;
  } else {
    progressPct = 100;
  }

  // Texto motivacional dinámico
  let nextGoalMsg = null;
  if (total < GOAL_SHIPPING) {
    nextGoalMsg = (
      <span>
        Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_SHIPPING - total).toFixed(2)}</strong> más para <strong>Envío Gratis</strong> 🚚
      </span>
    );
  } else if (total < GOAL_DECANT) {
    nextGoalMsg = (
      <span>
        🎉 ¡Envío Gratis listo! Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_DECANT - total).toFixed(2)}</strong> para un <strong>Decant 10ml de REGALO</strong> 🧪
      </span>
    );
  } else if (total < GOAL_VIP) {
    nextGoalMsg = (
      <span>
        🌟 ¡Envío + Decant listos! Agrega <strong className="text-[#0E0E0E] font-black">${(GOAL_VIP - total).toFixed(2)}</strong> para el <strong>Kit VIP de Muestras</strong> 👑
      </span>
    );
  } else {
    nextGoalMsg = (
      <span className="text-[#8F7432] font-black flex items-center gap-1">
        👑 ¡NIVEL VIP SUPREMO ALCANZADO! Envío Gratis + Decant 10ml + Kit VIP ✨
      </span>
    );
  }

  // WhatsApp Message Generator
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    const phoneNumber = '593992851808'; // WhatsApp Business number
    let message = `*¡Hola ARKANO Perfumería! 👑 Deseo confirmar mi pedido de Perfumes Originales (Árabes / Diseñador):*\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.brand} - ${item.name}*\n`;
      message += `   • Presentación: ${item.format === '100ml' ? 'Botella Completa' : 'Decant Muestra 10ml'}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio Unitario: $${item.price.toFixed(2)}\n`;
      message += `   • Subtotal Ítem: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `──────────────────\n`;
    message += `💰 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    message += `🏷️ *Ahorro Total:* -$${totalDiscount.toFixed(2)}\n`;
    message += `👑 *TOTAL A PAGAR:* $${total.toFixed(2)} USD\n\n`;

    if (total >= GOAL_SHIPPING) {
      message += `🎁 *RECOMPENSAS DESBLOQUEADAS POR COMPRA:*\n`;
      if (total >= GOAL_SHIPPING) message += `• 🚚 Envío 100% GRATIS a domicilio asegurado\n`;
      if (total >= GOAL_DECANT) message += `• 🧪 Decant Muestra 10ml de REGALO cortesía ARKANO\n`;
      if (total >= GOAL_VIP) message += `• 👑 Kit VIP de Muestras Exclusivas + 10% OFF en próximo pedido\n`;
      message += `\n`;
    } else {
      message += `📦 *Envío:* Tarifa estándar a domicilio\n\n`;
    }

    if (customerName.trim() || customerCity.trim()) {
      message += `*Datos para Envío y Facturación:*\n`;
      if (customerName.trim()) message += `👤 Cliente: ${customerName}\n`;
      if (customerCity.trim()) message += `📍 Ciudad / Dirección: ${customerCity}\n`;
    }

    message += `\n_Solicito confirmación de disponibilidad inmediata con sello de fábrica, batch code verificado y número de guía. ¡Muchas gracias!_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Translucent Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 border-l border-[#C9A961]/30">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-[#0E0E0E] text-[#F5F1E8]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C9A961]" />
              <h2 className="font-arabic-title text-base sm:text-lg font-bold text-white tracking-wide">
                Tu Carrito ARKANO ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Gamified Goals Multi-Tier Progress Track */}
          <div className="bg-[#F5F1E8] p-3.5 border-b border-[#C9A961]/30 text-xs select-none">
            {/* Status notification */}
            <div className="flex items-center justify-between font-bold mb-2">
              <span className="text-[#0E0E0E] text-[11px] leading-tight">
                {nextGoalMsg}
              </span>
              <span className="text-[10px] text-gray-500 font-mono ml-2 flex-shrink-0">
                ${total.toFixed(0)} / $170
              </span>
            </div>

            {/* Stepper Multi-node Progress Bar */}
            <div className="relative pt-2 pb-5 px-1">
              {/* Background Track */}
              <div className="w-full bg-gray-200/90 rounded-full h-2 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-[#0E0E0E] via-[#C9A961] to-[#E3C57C] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }}
                />
              </div>

              {/* Goal 1: $60 (Left 33.3%) */}
              <div className="absolute top-0.5 left-[33.3%] -translate-x-1/2 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_SHIPPING 
                    ? 'bg-emerald-600 text-white border-emerald-700 scale-110 font-bold' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_SHIPPING ? '✓' : '🚚'}
                </div>
                <span className={`text-[9px] font-bold mt-1 text-center whitespace-nowrap leading-none ${
                  total >= GOAL_SHIPPING ? 'text-emerald-800' : 'text-gray-500'
                }`}>
                  $60 Envío
                </span>
              </div>

              {/* Goal 2: $110 (Left 66.6%) */}
              <div className="absolute top-0.5 left-[66.6%] -translate-x-1/2 flex flex-col items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_DECANT 
                    ? 'bg-emerald-600 text-white border-emerald-700 scale-110 font-bold' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_DECANT ? '✓' : '🧪'}
                </div>
                <span className={`text-[9px] font-bold mt-1 text-center whitespace-nowrap leading-none ${
                  total >= GOAL_DECANT ? 'text-emerald-800' : 'text-gray-500'
                }`}>
                  $110 Decant
                </span>
              </div>

              {/* Goal 3: $170 (Right 0) */}
              <div className="absolute top-0.5 right-0 flex flex-col items-end">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] border shadow-sm transition-transform duration-300 ${
                  total >= GOAL_VIP 
                    ? 'bg-[#0E0E0E] text-[#C9A961] border-[#C9A961] scale-110 font-bold' 
                    : 'bg-white text-gray-400 border-gray-300'
                }`}>
                  {total >= GOAL_VIP ? '★' : '👑'}
                </div>
                <span className={`text-[9px] font-bold mt-1 text-right whitespace-nowrap leading-none ${
                  total >= GOAL_VIP ? 'text-[#8F7432]' : 'text-gray-500'
                }`}>
                  $170 Kit VIP
                </span>
              </div>
            </div>

            {/* Quick action to explore more if cart has items and not at max goal */}
            {cart.length > 0 && total < GOAL_VIP && (
              <button
                onClick={() => {
                  onClose();
                  if (onExploreCatalog) onExploreCatalog();
                }}
                className="w-full text-center text-[10.5px] font-bold text-[#8F7432] hover:text-[#0E0E0E] transition-colors pt-1 flex items-center justify-center gap-1 group"
              >
                <span>+ Agregar otro perfume para desbloquear el siguiente regalo</span>
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
                <h4 className="font-arabic-title text-base font-bold text-gray-900">
                  Tu carrito está vacío
                </h4>
                <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                  Agrega una fragancia árabe o de diseñador para disfrutar de la experiencia sensorial ARKANO.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onExploreCatalog) onExploreCatalog();
                  }}
                  className="mt-5 bg-[#0E0E0E] hover:bg-[#1C1C1C] text-[#C9A961] border border-[#C9A961]/50 text-xs font-bold py-2.5 px-6 rounded-full transition-all shadow-md"
                >
                  Explorar Catálogo ARKANO
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={`${item.id}-${item.format}`} className="pt-4 first:pt-0 flex gap-3 sm:gap-4 items-start">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl bg-[#F5F1E8] p-1.5 flex-shrink-0 border border-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain mix-blend-multiply" 
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-grow text-xs">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#0E0E0E] uppercase block">
                          {item.brand}
                        </span>
                        <h4 className="font-bold text-gray-900 leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-gray-500 font-medium block mt-0.5">
                          {item.format === '100ml' ? 'Botella Completa' : 'Decant Muestra 10ml'}
                        </span>
                      </div>
                      
                      {/* Delete button */}
                      <button
                        onClick={() => onRemoveItem(item.id, item.format)}
                        className="text-gray-400 hover:text-rose-600 p-1 rounded transition-colors"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Selector and Price */}
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-0.5">
                        <button
                          onClick={() => onUpdateQty(item.id, item.format, -1)}
                          className="text-gray-500 hover:text-black font-bold px-1.5 text-xs"
                        >
                          -
                        </button>
                        <span className="px-2 font-bold text-xs text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.id, item.format, 1)}
                          className="text-gray-500 hover:text-black font-bold px-1.5 text-xs"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 block">
                          ${item.price.toFixed(2)} c/u
                        </span>
                        <div className="flex items-baseline gap-1.5 justify-end">
                          <span className="text-[11px] font-bold text-gray-400 line-through decoration-rose-500 decoration-1.5">
                            ${(item.originalPrice * item.quantity).toFixed(2)}
                          </span>
                          <span className="font-black text-sm text-[#0E0E0E]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & WhatsApp Checkout */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-[#F5F1E8] space-y-3">
              
              {/* Recompensas Desbloqueadas */}
              {total >= GOAL_SHIPPING && (
                <div className="bg-white/85 rounded-xl p-2.5 border border-[#C9A961]/40 shadow-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E0E0E]">
                    <Gift className="w-3.5 h-3.5 text-[#C9A961]" />
                    <span>Recompensas incluidas en tu orden:</span>
                  </div>
                  <div className="space-y-0.5 text-[11px] text-gray-700">
                    {total >= GOAL_SHIPPING && (
                      <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                        <span>✓</span>
                        <span>Envío 100% Gratis a domicilio asegurado</span>
                      </div>
                    )}
                    {total >= GOAL_DECANT && (
                      <div className="flex items-center gap-1.5 text-emerald-800 font-semibold">
                        <span>✓</span>
                        <span>Decant 10ml de Regalo (~120 atomizaciones)</span>
                      </div>
                    )}
                    {total >= GOAL_VIP && (
                      <div className="flex items-center gap-1.5 text-[#8F7432] font-semibold">
                        <span>★</span>
                        <span>Kit VIP de Muestras Exclusivas + 10% OFF</span>
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
                  placeholder="Ciudad / Dirección" 
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg py-1.5 px-2.5 text-xs focus:outline-none focus:border-[#0E0E0E]"
                />
              </div>

              {/* Financial Breakdown */}
              <div className="space-y-1.5 text-xs pt-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-mono font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-800 font-bold">
                  <span>Ahorro en tienda ARKANO:</span>
                  <span className="font-mono">-${totalDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-baseline text-base font-extrabold text-[#0E0E0E] border-t border-gray-300 pt-2">
                  <span>Total a pagar:</span>
                  <span className="font-black text-xl font-mono text-[#0E0E0E]">${total.toFixed(2)} USD</span>
                </div>
              </div>

              <p className="text-[10px] text-gray-500 text-center italic">
                Precios con impuestos incluidos • Batch code verificado y sellado
              </p>

              {/* Direct WhatsApp Checkout Button */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-[#0E0E0E] hover:bg-[#1A1A1A] active:scale-98 text-white font-extrabold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-xl border border-[#C9A961]/40 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-[#C9A961]" />
                <span>CONFIRMAR PEDIDO POR WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-[#C9A961] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-600 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>Atención personalizada y despacho inmediato garantizado</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
