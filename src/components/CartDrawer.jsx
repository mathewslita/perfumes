import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Truck, Gift, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

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

  // Free shipping threshold
  const FREE_SHIPPING_GOAL = 75.00;

  // Calculations
  const subtotal = cart.reduce((sum, item) => sum + ((item.originalPrice || item.price || 0) * (item.quantity || 1)), 0);
  const total = cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 1)), 0);
  const totalDiscount = Math.max(0, subtotal - total);
  const progressPct = Math.min(100, Math.round((total / FREE_SHIPPING_GOAL) * 100));
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_GOAL - total);

  // WhatsApp Message Generator
  const handleCheckoutWhatsApp = () => {
    if (cart.length === 0) return;

    const phoneNumber = '593985911895'; // WhatsApp Business number
    let message = `*¡Hola Sultan Parfums! 👋 Deseo confirmar mi pedido de Perfumes Árabes 100% Originales:*\n\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.brand} - ${item.name}*\n`;
      message += `   • Presentación: ${item.format === '100ml' ? 'Botella Completa' : 'Decant Muestra 10ml'}\n`;
      message += `   • Cantidad: ${item.quantity}\n`;
      message += `   • Precio Unitario: $${item.price.toFixed(2)} (Ahorro aplicado)\n`;
      message += `   • Subtotal Ítem: $${(item.price * item.quantity).toFixed(2)}\n\n`;
    });

    message += `──────────────────\n`;
    message += `💰 *Subtotal Original:* $${subtotal.toFixed(2)}\n`;
    message += `🏷️ *Ahorro Total:* -$${totalDiscount.toFixed(2)}\n`;
    message += `👑 *TOTAL A PAGAR:* $${total.toFixed(2)} USD\n`;
    message += `📦 *Envío:* ${total >= FREE_SHIPPING_GOAL ? '¡GRATIS A DOMICILIO! 🎁' : 'Tarifa estándar'}\n\n`;

    if (customerName.trim() || customerCity.trim()) {
      message += `*Datos para Envío y Facturación:*\n`;
      if (customerName.trim()) message += `👤 Cliente: ${customerName}\n`;
      if (customerCity.trim()) message += `📍 Ciudad / Dirección: ${customerCity}\n`;
    }

    message += `\n_Solicito confirmación de disponibilidad inmediata con sello holográfico y número de guía. ¡Muchas gracias!_`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Translucent Backdrop (Ref: Imagen 2) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header (Ref: Imagen 2: "Carrito") */}
          <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#2E1065]" />
              <h2 className="font-arabic-title text-lg font-bold text-gray-900">
                Carrito ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Cerrar carrito"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Incentive Progress Bar: Free Shipping & Gift Decant */}
          <div className="bg-[#FAF7F2] p-3.5 border-b border-gray-200/70 text-xs">
            <div className="flex items-center justify-between font-bold mb-1.5">
              <span className="flex items-center gap-1 text-[#2E1065]">
                {total >= FREE_SHIPPING_GOAL ? (
                  <>
                    <Gift className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-extrabold">¡Felicidades! Tienes Envío Gratis y Muestrario de Regalo</span>
                  </>
                ) : (
                  <>
                    <Truck className="w-4 h-4 text-[#D4AF37]" />
                    <span>Te faltan <strong className="text-[#2E1065]">${remainingForFreeShipping.toFixed(2)}</strong> para Envío Gratis 🎁</span>
                  </>
                )}
              </span>
              <span className="text-[11px] text-gray-500 font-mono">{progressPct}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#2E1065] to-[#D4AF37] h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          {/* Cart Items List (Ref: Imagen 2 Layout) */}
          <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-4 divide-y divide-gray-100">
            {cart.length === 0 ? (
              <div className="text-center py-16 px-4">
                <div className="w-16 h-16 rounded-full bg-purple-50 text-[#2E1065] flex items-center justify-center mx-auto mb-3">
                  <ShoppingBag className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h4 className="font-arabic-title text-base font-bold text-gray-800">
                  Tu carrito está vacío
                </h4>
                <p className="text-xs text-gray-500 mt-1 max-w-xs mx-auto">
                  Agrega una de nuestras joyas olfativas de Dubái para iniciar tu experiencia sensorial.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    if (onExploreCatalog) onExploreCatalog();
                  }}
                  className="mt-5 bg-[#2E1065] text-white text-xs font-bold py-2.5 px-6 rounded-full hover:bg-[#3B0764] transition-all"
                >
                  Explorar Perfumes Árabes
                </button>
              </div>
            ) : (
              cart.map((item, idx) => (
                <div key={`${item.id}-${item.format}`} className="pt-4 first:pt-0 flex gap-3 sm:gap-4 items-start">
                  {/* Thumbnail (Ref: Imagen 2) */}
                  <div className="w-16 h-16 rounded-xl bg-[#FAF7F2] p-1.5 flex-shrink-0 border border-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-contain mix-blend-multiply" 
                    />
                  </div>

                  {/* Details (Ref: Imagen 2) */}
                  <div className="flex-grow text-xs">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <span className="text-[10px] font-extrabold text-[#2E1065] uppercase block">
                          {item.brand}
                        </span>
                        <h4 className="font-bold text-gray-900 leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-gray-500 font-medium block mt-0.5">
                          {item.format === '100ml' ? 'Botella Completa' : 'Decant Muestra 10ml'}
                        </span>
                      </div>
                      
                      {/* Delete button (Ref: Imagen 2 trash icon) */}
                      <button
                        onClick={() => onRemoveItem(item.id, item.format)}
                        className="text-gray-400 hover:text-rose-600 p-1 rounded transition-colors"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Selector and Price Breakdown (Ref: Imagen 2) */}
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
                          ${item.price.toFixed(2)} por 1 un.
                        </span>
                        <div className="flex items-baseline gap-1.5 justify-end">
                          <span className="text-[11px] font-bold text-gray-500 line-through decoration-rose-500 decoration-1.5">
                            ${(item.originalPrice * item.quantity).toFixed(2)}
                          </span>
                          <span className="font-black text-sm text-[#2E1065]">
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

          {/* Footer Summary & WhatsApp Checkout (Ref: Imagen 2 Layout) */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-[#FAF7F2] space-y-3">
              
              {/* Optional Quick Fields for WhatsApp personalization */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input 
                  type="text" 
                  placeholder="Tu Nombre completo" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg py-1.5 px-2.5 text-xs focus:outline-none focus:border-[#2E1065]"
                />
                <input 
                  type="text" 
                  placeholder="Ciudad / Dirección" 
                  value={customerCity}
                  onChange={(e) => setCustomerCity(e.target.value)}
                  className="bg-white border border-gray-200 rounded-lg py-1.5 px-2.5 text-xs focus:outline-none focus:border-[#2E1065]"
                />
              </div>

              {/* Financial Breakdown (Ref: Imagen 2) */}
              <div className="space-y-1.5 text-xs pt-2">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal:</span>
                  <span className="font-mono font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Descuentos en tienda:</span>
                  <span className="font-mono">-${totalDiscount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-baseline text-base font-extrabold text-[#2E1065] border-t border-gray-200 pt-2">
                  <span>Total a pagar:</span>
                  <span className="font-black text-xl font-mono">${total.toFixed(2)} USD</span>
                </div>
              </div>

              <p className="text-[10px] text-gray-400 text-center italic">
                Tasas y fletes calculados en el carrito • Batch code verificado
              </p>

              {/* Direct WhatsApp Checkout Button (Ref: Imagen 2 "IR AL CHECKOUT" pill style) */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-[#2E1065] hover:bg-[#3B0764] active:scale-98 text-white font-extrabold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-purple-950/20 transition-all group"
              >
                <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
                <span>CONFIRMAR PEDIDO POR WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Atención humana personalizada y pago seguro contra entrega o transferencia</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
