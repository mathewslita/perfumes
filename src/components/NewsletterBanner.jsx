import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function NewsletterBanner() {
  const [name, setName] = useState('');

  const handleJoinWhatsApp = (e) => {
    e.preventDefault();
    const greeting = name.trim() ? `Hola Sultan Parfums, mi nombre es ${name.trim()}. ` : 'Hola Sultan Parfums. ';
    const text = encodeURIComponent(`${greeting}Quiero unirme al Club VIP de WhatsApp para recibir alertas de lotes de Dubái, pre-ventas y mi cupón de cortesía.`);
    window.open(`https://wa.me/593985911895?text=${text}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-[#2E1065] via-[#3B0764] to-[#1E0741] text-white py-12 px-4 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Club Privado en WhatsApp • Sultan Parfums</span>
          </div>
          <h3 className="font-arabic-title text-xl sm:text-2xl font-extrabold tracking-wide">
            HABLEMOS DE PERFUMES ORIENTALES
          </h3>
          <p className="text-xs text-purple-200 mt-1 max-w-md font-light">
            Sé el primero en conocer la llegada de nuevos lotes exclusivos desde Dubái, cosechas virales y promociones relámpago con cupón de cortesía.
          </p>
        </div>

        {/* Right Form: Direct 1-Click WhatsApp Connection */}
        <div className="w-full md:w-auto">
          <form onSubmit={handleJoinWhatsApp} className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md">
            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-60 bg-white/10 border border-white/20 rounded-full py-3 px-4 text-xs text-white placeholder-purple-200 focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B89228] text-[#1E0741] font-black text-xs uppercase tracking-wider py-3 px-6 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 fill-[#1E0741]" />
              <span>UNIRME AL CLUB VIP 📲</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <span className="text-[10px] text-purple-300/80 block text-center sm:text-right mt-1.5 font-medium">
            ✓ Sin spam • Recibe solo alertas de stock y cupones de descuento
          </span>
        </div>

      </div>
    </section>
  );
}
