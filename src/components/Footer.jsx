import React from 'react';
import { ShieldCheck, MessageCircle, Heart, Phone, Mail, MapPin, Sparkles, ExternalLink, Crown, Award } from 'lucide-react';
import Logo from './Logo';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="bg-[#0E0E0E] text-[#F5F1E8] pt-14 pb-8 border-t border-[#C9A961]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* 4 Perfectly Balanced Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">

          {/* Col 1: Identidad ARKANO */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <Logo variant="horizontal" theme="light" size="sm" />
              <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                Boutique de Alta Perfumería especializada en fragancias árabes importadas de Dubái y creaciones maestras de diseñador de alta costura internacional.
              </p>
            </div>

            <div className="pt-2">
              <h5 className="font-bold text-[11px] uppercase tracking-wider text-[#C9A961] mb-2">
                Compra Directa por WhatsApp
              </h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                Atención personalizada sin necesidad de registros engorrosos. Eliges tu perfume y coordinamos el despacho en minutos.
              </p>
            </div>
          </div>

          {/* Col 2: CATEGORÍAS & COLECCIONES */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#C9A961] mb-3">
              Colecciones Exclusivas
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('arabes')}
                  className="hover:text-[#C9A961] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Crown className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>Perfumes Árabes (Dubái) </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('disenador')}
                  className="hover:text-[#C9A961] transition-colors flex items-center gap-1.5 text-left"
                >
                  <Award className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>Perfumes de Diseñador </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Para Él')}
                  className="hover:text-[#C9A961] transition-colors block text-left"
                >
                  Colección Masculina (Para Él)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('Para Ella')}
                  className="hover:text-[#C9A961] transition-colors block text-left"
                >
                  Colección Femenina (Para Ella)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory && onSelectCategory('decants')}
                  className="hover:text-[#C9A961] transition-colors block text-left"
                >
                  Decants de Muestra
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: GARANTÍA & FRAGRANTICA */}
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest text-[#C9A961] mb-3 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C9A961]" /> Garantía de Origen
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-center gap-1.5">
                  <span className="text-[#C9A961]">✓</span>
                  <span>100% Originales con Sello de Fábrica</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#C9A961]">✓</span>
                  <span>Batch Code Verificable en Cada Frasco</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="text-[#C9A961]">✓</span>
                  <span>Envíos Seguros a Todo el País</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: CONTACTO DIRECTO */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-[#C9A961] mb-3 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C9A961]" /> Contacto Directo
            </h4>

            <div className="space-y-3 text-xs">
              {/* WhatsApp Express */}
              <div className="bg-[#171717] p-3 rounded-xl border border-[#C9A961]/25">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  Asesoría & Pedidos WhatsApp
                </span>
                <a
                  href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20sobre%20un%20perfume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm text-[#C9A961] hover:underline flex items-center gap-1.5 mt-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>+593 99 285 1808</span>
                </a>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Mail className="w-4 h-4 text-[#C9A961]" />
                <span>contacto@arkanoperfumeria.com</span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <MapPin className="w-4 h-4 text-[#C9A961]" />
                <span>Envíos nacionales con empaque seguro</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Fragrantica Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Logo variant="icon" size="sm" />
            <span>
              © {new Date().getFullYear()} <strong>ARKANO PERFUMERÍA</strong>. Todos los derechos reservados.
            </span>
          </div>

          <p className="text-[11px] text-gray-400 text-center sm:text-right">
            Las marcas mencionadas (Dior, Chanel, YSL, Tom Ford, Lattafa, Armaf, etc.) son propiedad de sus respectivos titulares. Las referencias a Fragrantica se proveen con fines informativos de la pirámide olfativa.
          </p>
        </div>

      </div>
    </footer>
  );
}
