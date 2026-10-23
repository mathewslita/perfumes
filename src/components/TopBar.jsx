import React from 'react';
import { Sparkles, ShieldCheck, Truck, MessageCircle, Crown } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0E0E0E] text-[#F5F1E8] text-xs py-2 px-4 border-b border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Holographic Authenticity Notice */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 bg-[#C9A961] text-[#0E0E0E] font-bold px-2.5 py-0.5 rounded-full text-[10px] tracking-wide uppercase shadow-sm">
            <ShieldCheck className="w-3 h-3" /> ARKANO 100% Original
          </span>
          <span className="text-gray-300 font-medium text-[11px]">
            Perfumes Árabes de Dubái & Diseñador con Batch Code y Sello de Fábrica
          </span>
        </div>

        {/* Right: Fast Shipping & WhatsApp Help */}
        <div className="flex items-center gap-4 text-gray-300 text-[11px]">
          <div className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-[#C9A961]" />
            <span>Envíos Asegurados a Todo el País</span>
          </div>
          <span className="text-[#C9A961]/40 hidden md:inline">|</span>
          <a 
            href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20sobre%20sus%20perfumes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#C9A961] hover:text-white font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Asesoría WhatsApp: +593 99 285 1808</span>
          </a>
        </div>
      </div>
    </div>
  );
}
