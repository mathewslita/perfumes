import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { X } from 'lucide-react';

const AiSommelierChatPanel = dynamic(() => import('./AiSommelierChatPanel'), {
  ssr: false,
});

export default function AiSommelierWidget({
  onOpenProduct,
  onAddToCart,
  isOpen: controlledIsOpen,
  onToggle: controlledOnToggle,
  onClose: controlledOnClose,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (isControlled && controlledOnToggle) {
      controlledOnToggle();
    } else if (isControlled && controlledOnClose && isOpen) {
      controlledOnClose();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const [showGreeting, setShowGreeting] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setShowGreeting(false);
    }
  }, [isOpen]);

  // Auto dismiss greeting bubble after 6 seconds so it doesn't block screen on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating Avatar Trigger Button in Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        {showGreeting && !isOpen && (
          <div className="mb-2 bg-[#0E0E0E] text-[#F5F1E8] text-xs py-1.5 pl-3.5 pr-2 rounded-2xl shadow-xl border border-[#C9A961]/70 max-w-xs animate-bounce flex items-center gap-1.5">
            <span className="font-semibold text-[#F5F1E8]">¡Hola! Estoy aquí para ayudarte 😊</span>
            <button
              type="button"
              onClick={() => setShowGreeting(false)}
              className="w-7 h-7 min-w-[28px] min-h-[28px] rounded-full text-gray-400 hover:text-white hover:bg-white/10 flex items-center justify-center text-sm font-bold cursor-pointer"
              aria-label="Cerrar saludo"
            >
              &times;
            </button>
          </div>
        )}

        <button
          id="btn-sommelier-widget"
          type="button"
          onClick={handleToggle}
          className="relative w-14 h-14 rounded-full bg-white text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-[#C9A961] group cursor-pointer"
          aria-label="Abrir Asistente de Perfumes ARKANO"
          title="Asistente ARKANO Perfumes - ¡Estoy aquí para ayudarte!"
        >
          {isOpen ? (
            <div className="w-full h-full rounded-full bg-[#0E0E0E] flex items-center justify-center">
              <X className="w-6 h-6 text-[#C9A961]" />
            </div>
          ) : (
            <>
              <div className="w-full h-full rounded-full overflow-hidden p-0.5 bg-white">
                <img
                  src="/assets/images/arkano_mascot.webp"
                  alt="Asistente ARKANO Perfumes"
                  width="56"
                  height="56"
                  decoding="async"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A961] rounded-full border-2 border-[#0E0E0E] animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* Dynamically Loaded Interactive Chat Window */}
      {isOpen && (
        <AiSommelierChatPanel
          onClose={handleClose}
          onOpenProduct={onOpenProduct}
          onAddToCart={onAddToCart}
        />
      )}
    </>
  );
}
