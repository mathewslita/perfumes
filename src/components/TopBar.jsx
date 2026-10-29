import React from 'react';
import { ShieldCheck, Truck, MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0E0E0E] text-[#F5F1E8] text-xs py-2 px-3 sm:px-4 border-b border-[#C9A961]/25 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2">
        {/* On Mobile: Concise, elegant, 100% responsive without overflow */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-center w-full overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-[#C9A961] text-[#0E0E0E] font-black px-2 py-0.5 rounded-full text-[9px] uppercase tracking-wider shadow-sm flex-shrink-0">
            <ShieldCheck className="w-2.5 h-2.5" /> 100% ORIGINAL
          </span>
          <span className="text-gray-300 font-semibold text-[10.5px] truncate uppercase">
            ARABES & DISENADOR • ENVIOS EXPRESS
          </span>
        </div>

        {/* Right on Desktop */}
        <div className="hidden sm:flex items-center gap-4 text-gray-300 text-[11px] tracking-wide uppercase">
          <div className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-[#C9A961]" />
            <span>ENVIOS SEGUROS A TODO EL PAIS</span>
          </div>
          <span className="text-[#C9A961]/40">|</span>
          <a
            href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumeria,%20deseo%20asesoria%20sobre%20sus%20perfumes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#C9A961] hover:text-white font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>ASESORIA WHATSAPP: +593 99 285 1808</span>
          </a>
        </div>
      </div>
    </div>
  );
}
