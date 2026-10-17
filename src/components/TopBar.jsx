import React from 'react';
import { Sparkles, ShieldCheck, Truck, MessageCircle } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#2E1065] text-white text-xs py-2 px-4 border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Holographic Authenticity Notice */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#1E0741] font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase shadow-sm">
            <ShieldCheck className="w-3 h-3" /> 100% Originales
          </span>
          <span className="text-purple-100 font-medium">
            Sello Holográfico de Fábrica y Batch Code Verificable en cada frasco
          </span>
        </div>

        {/* Right: Fast Shipping & WhatsApp Help */}
        <div className="flex items-center gap-4 text-purple-200">
          <div className="flex items-center gap-1 text-[11px]">
            <Truck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Envíos Asegurados a Todo el País</span>
          </div>
          <span className="text-purple-400 hidden md:inline">|</span>
          <a 
            href="https://wa.me/593985911895?text=Hola,%20deseo%20asesoría%20sobre%20un%20perfume%20árabe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#D4AF37] hover:text-white font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Asesoría WhatsApp: 098 591 1895</span>
          </a>
        </div>
      </div>
    </div>
  );
}
