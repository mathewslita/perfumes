import React from 'react';
import { ShieldCheck, Award, Sparkles, MessageCircle, HeartHandshake, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="acerca-de-nosotros" className="py-16 sm:py-20 bg-[#FAF7F2] border-t border-b border-gray-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 bg-purple-100 text-[#2E1065] text-xs font-bold px-3.5 py-1 rounded-full mb-3 shadow-sm border border-purple-200/80">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nuestra Historia & Misión</span>
          </div>

          <h2 className="font-arabic-title text-2xl sm:text-4xl font-black text-gray-950 tracking-tight">
            EL SECRETO DE SULTAN PARFUMS
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-[#2E1065] to-[#D4AF37] mx-auto my-4 rounded-full" />

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Nacimos con una convicción clara: <strong>el lujo no tiene por qué ser inaccesible ni costar $300 dólares</strong>. 
            Acercamos la verdadera alta perfumería de Oriente Medio directamente a tus manos, 
            con autenticidad verificable y una atención cercana y personalizada por WhatsApp.
          </p>
        </div>

        {/* 3 Pillars of Trust Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          
          {/* Pillar 1: Importación Directa */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#2E1065] flex items-center justify-center mb-5 border border-purple-100">
                <Award className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-arabic-title text-lg font-bold text-gray-900 mb-2">
                1. Importación Directa de Dubái
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Trabajamos exclusivamente con lotes oficiales de las casas más respetadas de Emiratos Árabes Unidos: 
                <strong> Lattafa, Armaf, Afnan y Al Haramain</strong>. Eliminamos cadenas de intermediarios 
                para garantizar precios justos en frascos originales de alta concentración.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Garantía de Origen Certificado</span>
            </div>
          </div>

          {/* Pillar 2: Sello Holográfico & Batch Code */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#D4AF37]/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden">
            <span className="absolute top-3 right-3 bg-[#D4AF37] text-gray-950 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">
              Seguridad Total
            </span>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#B89228] flex items-center justify-center mb-5 border border-amber-200">
                <ShieldCheck className="w-6 h-6 text-[#2E1065]" />
              </div>
              <h3 className="font-arabic-title text-lg font-bold text-gray-900 mb-2">
                2. Sello Holográfico & Batch Code
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cada uno de nuestros perfumes se entrega en su empaque original sellado con celofán de fábrica, 
                <strong> holograma tridimensional de autenticidad</strong> y código de lote (Batch Code) 
                coincidente entre la base de la botella y la caja.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-[#2E1065]">
              <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Verificable en CheckFresh & Base Oficial</span>
            </div>
          </div>

          {/* Pillar 3: Cultura del Decant */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#2E1065] flex items-center justify-center mb-5 border border-purple-100">
                <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="font-arabic-title text-lg font-bold text-gray-900 mb-2">
                3. Cultura del Decant sin Riesgo
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Sabemos que comprar perfumes por internet puede generar dudas. Por eso fuimos pioneros en ofrecer 
                <strong> Decants de 10ml (~120 atomizaciones)</strong> para que sientas cómo evoluciona la fragancia 
                en tu propia piel antes de decidirte por la botella grande.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-bold text-purple-700">
              <CheckCircle className="w-4 h-4 text-[#2E1065]" />
              <span>Cero Riesgo de Compra a Ciegas</span>
            </div>
          </div>

        </div>

        {/* WhatsApp Personal Advice Card */}
        <div className="bg-gradient-to-r from-[#2E1065] via-[#3B0764] to-[#1E0741] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#D4AF37] uppercase block mb-1">
              Atención Humana & Cercana
            </span>
            <h3 className="font-arabic-title text-xl sm:text-2xl font-black">
              ¿TIENES DUDAS SOBRE QUÉ PERFUME VA MEJOR CONTIGO?
            </h3>
            <p className="text-xs text-purple-200 mt-1 max-w-xl font-light">
              No estás hablando con un call center frío. Nuestro equipo de apasionados por la perfumería te atiende 
              directamente por WhatsApp para recomendarte el aroma ideal según tu estilo, ocasión o clima.
            </p>
          </div>

          <a
            href="https://wa.me/593985911895?text=Hola%20Sultan%20Parfums,%20quiero%20conocer%20más%20sobre%20sus%20perfumes%20y%20garantía%20de%20autenticidad"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#B89228] text-[#1E0741] font-black text-xs uppercase tracking-wider py-3.5 px-7 rounded-full shadow-lg transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-[#1E0741]" />
            <span>Chatear con un Asesor Ahora</span>
          </a>
        </div>

      </div>
    </section>
  );
}
