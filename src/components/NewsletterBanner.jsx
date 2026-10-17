import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <section className="bg-gradient-to-r from-[#2E1065] via-[#3B0764] to-[#1E0741] text-white py-12 px-4 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Text (Ref: Imagen 3: "HABLEMOS DE BELLEZA") */}
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase block mb-1">
            Club Privado Sultan Parfums
          </span>
          <h3 className="font-arabic-title text-xl sm:text-2xl font-extrabold tracking-wide">
            HABLEMOS DE PERFUMES ORIENTALES
          </h3>
          <p className="text-xs text-purple-200 mt-1 max-w-md font-light">
            Sé el primero en conocer los nuevos lotes de Dubái, pre-ventas exclusivas de cosechas virales y cupones de cortesía.
          </p>
        </div>

        {/* Right Form with Pill Button (Ref: Imagen 3) */}
        <div className="w-full md:w-auto">
          {subscribed ? (
            <div className="flex items-center gap-2 bg-emerald-500/20 border border-emerald-400 text-emerald-200 text-xs py-3 px-6 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>¡Te has suscrito con éxito! Revisa tu bandeja para tu código de regalo.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-md">
              <input
                type="email"
                placeholder="Escribe tu mail aquí"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-72 bg-white/10 border border-white/20 rounded-full py-2.5 px-4 text-xs text-white placeholder-purple-200 focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-2 focus:ring-[#D4AF37] transition-all"
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#B89228] text-[#1E0741] font-black text-xs uppercase tracking-wider py-2.5 px-6 rounded-full shadow-md transition-all whitespace-nowrap active:scale-95"
              >
                Suscribir
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
