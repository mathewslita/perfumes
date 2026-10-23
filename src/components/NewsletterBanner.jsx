import React, { useState } from 'react';
import { MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function NewsletterBanner() {
  const [name, setName] = useState('');

  const handleJoinWhatsApp = (e) => {
    e.preventDefault();
    const greeting = name.trim() ? `Hola ARKANO Perfumería, mi nombre es ${name.trim()}. ` : 'Hola ARKANO Perfumería. ';
    const text = encodeURIComponent(`${greeting}Deseo unirme al Club VIP de WhatsApp para recibir alertas de lotes de Dubái y fragancias de diseñador.`);
    window.open(`https://wa.me/593992851808?text=${text}`, '_blank');
  };

  return (
    <section className="bg-gradient-to-r from-[#0E0E0E] via-[#1A1A1A] to-[#0E0E0E] text-[#F5F1E8] py-12 px-4 border-t border-[#C9A961]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Text */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.25em] text-[#C9A961] uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
            <span>Club Privado en WhatsApp • ARKANO Perfumería</span>
          </div>
          <h3 className="font-arabic-title text-xl sm:text-2xl font-black tracking-wide text-white">
            EL CÍRCULO EXCLUSIVO DE LA ALTA PERFUMERÍA
          </h3>
          <p className="text-xs text-gray-400 mt-1 max-w-md font-light">
            Sé el primero en conocer la llegada de nuevos lotes exclusivos desde Dubái, lanzamientos de diseñador y acceso prioritario a decants limitados.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-auto">
          <form onSubmit={handleJoinWhatsApp} className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md">
            <input
              type="text"
              placeholder="Tu nombre (opcional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-60 bg-white/10 border border-white/20 rounded-full py-3 px-4 text-xs text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-2 focus:ring-[#C9A961] transition-all"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs uppercase tracking-wider py-3 px-6 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap active:scale-95 group"
            >
              <MessageCircle className="w-4 h-4 fill-[#0E0E0E]" />
              <span>UNIRME AL CLUB VIP 📲</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <span className="text-[10px] text-gray-500 block text-center sm:text-right mt-1.5 font-medium">
            ✓ Sin spam • Recibe solo alertas de stock y cupones de cortesía
          </span>
        </div>

      </div>
    </section>
  );
}
