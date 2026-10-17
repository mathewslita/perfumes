import React from 'react';
import { ShieldCheck, MessageCircle, Heart, Phone, Mail, MapPin, Sparkles } from 'lucide-react';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-[#2E1065] text-white pt-14 pb-8 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 4 Perfectly Balanced Columns (Ref: Imagen 3 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-purple-900/60">
          
          {/* Col 1: GARANTÍA & CONFIANZA (Eliminada Mi Cuenta sin BD) */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#D4AF37] mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Garantía & Confianza
              </h4>
              <ul className="space-y-2 text-xs text-purple-200">
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>100% Originales de Dubái</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Sello Holográfico de Fábrica 🔒</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Batch Code Verificable en Botella</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span>
                  <span>Decants de Muestra 10ml (~120 sprays)</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-purple-900/40">
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-[#D4AF37] mb-2.5">
                Compra Fácil por WhatsApp
              </h5>
              <p className="text-xs text-purple-200 leading-relaxed">
                Sin necesidad de registrarte ni crear contraseñas. Elige tu aroma y coordinamos tu pedido en minutos.
              </p>
            </div>
          </div>

          {/* Col 2: ACERCA DE */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#D4AF37] mb-3">
              Conoce Sultan Parfums
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-200">
              <li>
                <a 
                  href="#acerca-de-nosotros" 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Nuestra Historia & Misión 🌙
                </a>
              </li>
              <li>
                <a 
                  href="#nuestras-marcas" 
                  className="hover:text-white hover:underline transition-colors block"
                >
                  Nuestras 12 Casas Oficiales 👑
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/593985911895?text=Hola%20Sultan%20Parfums,%20deseo%20asesoría%20sobre%20sus%20perfumes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors block text-[#D4AF37]"
                >
                  Asesoría en Vivo por WhatsApp 💬
                </a>
              </li>
              <li>
                <span className="text-purple-300/80 block">
                  Envíos a todo el país con empaque blindado
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: CONTACTO DIRECTO (Squared neatly, no awkward text breaking) */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#D4AF37] mb-3 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" /> Contacto Directo
            </h4>
            
            <div className="space-y-3.5 text-xs">
              {/* WhatsApp Express */}
              <div className="bg-purple-950/40 p-2.5 rounded-xl border border-purple-800/40">
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block">
                  Pedidos Express WhatsApp
                </span>
                <a 
                  href="https://wa.me/593985911895" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-[#D4AF37] hover:text-white font-extrabold text-sm flex items-center gap-1.5 mt-0.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>098 591 1895</span>
                </a>
              </div>

              {/* Mayoristas */}
              <div>
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block">
                  Ventas Mayoristas
                </span>
                <span className="text-white font-semibold text-xs block mt-0.5">
                  093 939 4445 💛
                </span>
              </div>

              {/* Correo Oficial */}
              <div>
                <span className="text-[10px] font-bold text-purple-300 uppercase tracking-wider block">
                  Correo de Atención
                </span>
                <a 
                  href="mailto:contacto@sultanparfums.com" 
                  className="text-purple-100 hover:text-white text-xs block mt-0.5 hover:underline"
                >
                  contacto@sultanparfums.com ✉️
                </a>
              </div>

              {/* Trabaja con nosotros */}
              <div>
                <a href="#" className="text-purple-200 hover:text-white text-xs hover:underline inline-flex items-center gap-1">
                  Trabaja con nosotros 💼
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: BRAND LOGO & SOCIALS (Ref: Imagen 3 right side) */}
          <div className="flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1.5 mb-2">
                <span className="font-arabic-title text-2xl font-black text-white">
                  SULTAN
                </span>
                <span className="font-arabic-title text-2xl font-light text-[#D4AF37]">
                  PARFUMS
                </span>
              </div>
              <p className="text-xs text-purple-200 leading-relaxed font-light">
                La boutique de perfumes árabes 100% originales con mayor reputación, sellos de fábrica y batch codes garantizados.
              </p>
            </div>

            {/* Social Icons row */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] block mb-2.5">
                Síguenos en Redes Sociales
              </span>
              <div className="flex items-center gap-2.5">
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1E0741] flex items-center justify-center transition-all shadow-sm" 
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1E0741] flex items-center justify-center transition-all shadow-sm" 
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1E0741] flex items-center justify-center transition-all shadow-sm" 
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/593985911895" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#1E0741] flex items-center justify-center transition-all shadow-sm" 
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credits Bar (Aligned & Squared) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300 font-light">
          <p className="text-center sm:text-left">
            © 2026 SULTAN PARFUMS S.A. Todos los derechos reservados. Distribuidor Autorizado de Perfumería Oriental.
          </p>
          <div className="flex items-center gap-1.5 text-purple-200">
            <span>Creado con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>para amantes del lujo oriental accesible</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
