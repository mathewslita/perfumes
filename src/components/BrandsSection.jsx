import React, { useState } from 'react';
import { Sparkles, Crown, Award, Play, Pause, ArrowRight, CheckCircle2, Flame, Star, Compass, Moon, Sun } from 'lucide-react';

export const ARABIC_BRANDS = [
  {
    id: 'lattafa',
    name: 'LATTAFA',
    category: 'arabes',
    origin: 'Dubái, EAU',
    badge: '👑 Casa de Lujo',
    starPerfume: 'Khamrah',
    bottleImage: '/assets/images/lattafa_khamrah.jpg',
    tagline: 'Canela, Vainilla & Praliné',
    decantPrice: 'Desde $14.00',
    rating: '5.0 ★',
    vibeBadge: 'Fenómeno #1',
    logoImage: '/assets/images/brands/lattafa.svg',
    logoFilterDark: '', // natural gold #D1A647!
    logoFilterLight: 'brightness(0)',
    heightClass: 'max-h-12 sm:max-h-14 max-w-[130px]'
  },
  {
    id: 'armaf',
    name: 'ARMAF',
    category: 'arabes',
    origin: 'Dubái, EAU',
    badge: '🔥 Top Mundial',
    starPerfume: 'Club de Nuit Intense',
    bottleImage: '/assets/images/armaf_cdn_intense.jpg',
    tagline: 'Cítrico Ahumado Legendario',
    decantPrice: 'Desde $13.90',
    rating: '5.0 ★',
    vibeBadge: 'Rey Cumplidos',
    logoImage: '/assets/images/brands/armaf.avif',
    logoFilterDark: 'drop-shadow(0 0 6px rgba(201,169,97,0.5))',
    logoFilterLight: '',
    heightClass: 'max-h-12 sm:max-h-14 max-w-[130px]'
  },
  {
    id: 'afnan',
    name: 'AFNAN',
    category: 'arabes',
    origin: 'Dubái, EAU',
    badge: '💎 Niche Heritage',
    starPerfume: '9 PM',
    bottleImage: '/assets/images/afnan_9pm.jpg',
    tagline: 'Manzana, Canela & Vainilla',
    decantPrice: 'Desde $13.50',
    rating: '5.0 ★',
    vibeBadge: 'Viral TikTok',
    logoImage: '/assets/images/brands/afnan.avif',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: 'brightness(0)',
    heightClass: 'max-h-10 sm:max-h-12 max-w-[135px]'
  },
  {
    id: 'al-haramain',
    name: 'AL HARAMAIN',
    category: 'arabes',
    origin: 'Emiratos Árabes',
    badge: '🌿 Oud de Élite',
    starPerfume: 'Amber Oud Gold',
    bottleImage: '/assets/images/al_haramain_amber_oud.jpg',
    tagline: 'Melón, Piña & Ámbar Puro',
    decantPrice: 'Desde $17.00',
    rating: '5.0 ★',
    vibeBadge: 'Extrait Puro',
    logoImage: '/assets/images/brands/al_haramain.png',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: 'grayscale(100%) contrast(150%) brightness(0.2)',
    heightClass: 'max-h-11 sm:max-h-13 max-w-[140px]'
  },
  {
    id: 'bharara',
    name: 'BHARARA',
    category: 'arabes',
    origin: 'Dubái / USA',
    badge: '👑 Rey Halcón',
    starPerfume: 'King',
    bottleImage: '/assets/images/bharara_king.jpg',
    tagline: 'Naranja, Vainilla & Ámbar',
    decantPrice: 'Desde $16.50',
    rating: '5.0 ★',
    vibeBadge: 'Fijación 16h+',
    logoImage: '/assets/images/brands/bharara.webp',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-11 sm:max-h-13 max-w-[125px]'
  },
  {
    id: 'maison-alhambra',
    name: 'MAISON ALHAMBRA',
    category: 'arabes',
    origin: 'Dubái, EAU',
    badge: '✨ Clones Maestros',
    starPerfume: 'Kismet Angel',
    bottleImage: '/assets/images/maison_alhambra_kismet.jpg',
    tagline: 'Cognac, Vainilla & Canela',
    decantPrice: 'Desde $13.00',
    rating: '4.9 ★',
    vibeBadge: 'Dupe Alta Gama',
    logoImage: '/assets/images/brands/maison_alhambra.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-13 sm:max-h-15 max-w-[135px]'
  },
  {
    id: 'rasasi',
    name: 'RASASI',
    category: 'arabes',
    origin: 'Dubái, EAU',
    badge: '🌙 Leyenda Oriental',
    starPerfume: 'Hawas for Him',
    bottleImage: '/assets/images/rasasi_hawas.jpg',
    tagline: 'Acuático & Ciruela Marina',
    decantPrice: 'Desde $15.50',
    rating: '4.9 ★',
    vibeBadge: 'Bestia Marina',
    logoImage: '/assets/images/brands/rasasi.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: 'brightness(0)',
    heightClass: 'max-h-11 sm:max-h-13 max-w-[130px]'
  },
  {
    id: 'french-avenue',
    name: 'FRENCH AVENUE',
    category: 'arabes',
    origin: 'Dubái / París',
    badge: '✨ Alta Gama',
    starPerfume: 'Liquid Brun',
    bottleImage: '/assets/images/french_avenue_liquid_brun.jpg',
    tagline: 'Praliné, Vainilla & Canela',
    decantPrice: 'Desde $18.00',
    rating: '5.0 ★',
    vibeBadge: 'Nicho Sensación',
    logoImage: '/assets/images/brands/french_avenue.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-10 sm:max-h-12 max-w-[130px]'
  }
];

export const DESIGNER_BRANDS = [
  {
    id: 'dior',
    name: 'DIOR',
    category: 'disenador',
    origin: 'París, Francia',
    badge: '⚡ Sauvage Icon',
    starPerfume: 'Sauvage Elixir',
    bottleImage: '/assets/images/dior_sauvage_elixir.jpg',
    tagline: 'Lavanda, Canela & Regaliz',
    decantPrice: 'Desde $34.00',
    rating: '5.0 ★',
    vibeBadge: 'Elixir Supremo',
    logoImage: '/assets/images/brands/dior.webp',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-10 sm:max-h-12 max-w-[130px]'
  },
  {
    id: 'jean-paul-gaultier',
    name: 'JEAN PAUL GAULTIER',
    category: 'disenador',
    origin: 'París, Francia',
    badge: '⚓ Le Male Elite',
    starPerfume: 'Le Male Elixir',
    bottleImage: '/assets/images/jpg_le_male_elixir.jpg',
    tagline: 'Miel, Haba Tonka & Vainilla',
    decantPrice: 'Desde $31.00',
    rating: '5.0 ★',
    vibeBadge: 'Seducción Pura',
    logoImage: '/assets/images/brands/jean_paul_gaultier.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-11 sm:max-h-13 max-w-[140px]'
  },
  {
    id: 'chanel',
    name: 'CHANEL',
    category: 'disenador',
    origin: 'París, Francia',
    badge: '💎 Haute Parfumerie',
    starPerfume: 'Bleu de Chanel Parfum',
    bottleImage: '/assets/images/bleu_de_chanel.jpg',
    tagline: 'Sándalo Noble & Cedro Puro',
    decantPrice: 'Desde $32.00',
    rating: '4.9 ★',
    vibeBadge: 'Elegancia Eterna',
    logoImage: '/assets/images/brands/chanel.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-12 sm:max-h-14 max-w-[130px]'
  },
  {
    id: 'yves-saint-laurent',
    name: 'YVES SAINT LAURENT',
    category: 'disenador',
    origin: 'París, Francia',
    badge: '🖤 Alta Costura',
    starPerfume: 'Libre Le Parfum',
    bottleImage: '/assets/images/ysl_libre_parfum.jpg',
    tagline: 'Lavanda & Azahar con Azafrán',
    decantPrice: 'Desde $29.50',
    rating: '5.0 ★',
    vibeBadge: 'Fuego & Pasión',
    logoImage: '/assets/images/brands/ysl.png',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: 'contrast(125%)',
    heightClass: 'max-h-11 w-36 scale-120'
  },
  {
    id: 'versace',
    name: 'VERSACE',
    category: 'disenador',
    origin: 'Milán, Italia',
    badge: '🔱 Seducción',
    starPerfume: 'Eros Flame',
    bottleImage: '/assets/images/versace_eros_flame.jpg',
    tagline: 'Cítricos, Pimienta & Vainilla',
    decantPrice: 'Desde $24.00',
    rating: '4.9 ★',
    vibeBadge: 'Pasión Italiana',
    logoImage: '/assets/images/brands/versace.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-13 sm:max-h-15 max-w-[130px]'
  },
  {
    id: 'tom-ford',
    name: 'TOM FORD',
    category: 'disenador',
    origin: 'Nueva York, USA',
    badge: '🌟 Private Blend',
    starPerfume: 'Oud Wood',
    bottleImage: '/assets/images/tom_ford_oud_wood.jpg',
    tagline: 'Madera de Oud & Cardamomo',
    decantPrice: 'Desde $39.00',
    rating: '4.9 ★',
    vibeBadge: 'Lujo Absoluto',
    logoImage: '/assets/images/brands/tom_ford.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-8 sm:max-h-10 max-w-[135px]'
  },
  {
    id: 'giorgio-armani',
    name: 'GIORGIO ARMANI',
    category: 'disenador',
    origin: 'Milán, Italia',
    badge: '🌊 Acqua di Giò',
    starPerfume: 'ADG Profondo',
    bottleImage: '/assets/images/giorgio_armani_adg.jpg',
    tagline: 'Notas Marinas & Romero',
    decantPrice: 'Desde $26.00',
    rating: '4.9 ★',
    vibeBadge: 'Frescor Marino',
    logoImage: '/assets/images/brands/giorgio_armani.svg',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: '',
    heightClass: 'max-h-8 sm:max-h-10 max-w-[140px]'
  },
  {
    id: 'xerjoff',
    name: 'XERJOFF',
    category: 'disenador',
    origin: 'Turín, Italia',
    badge: '👑 Nicho de Lujo',
    starPerfume: 'Erba Pura',
    bottleImage: '/assets/images/xerjoff_erba_pura.jpg',
    tagline: 'Cítricos de Sicilia & Almizcle',
    decantPrice: 'Desde $42.00',
    rating: '5.0 ★',
    vibeBadge: 'Nicho Legendario',
    logoImage: '/assets/images/brands/xerjoff.png',
    logoFilterDark: 'brightness(0) invert(1)',
    logoFilterLight: 'brightness(0)',
    heightClass: 'max-h-9 sm:max-h-11 max-w-[130px]'
  }
];

export const ALL_BRANDS = [...ARABIC_BRANDS, ...DESIGNER_BRANDS];

export default function BrandsSection({ onSelectBrand }) {
  const [filter, setFilter] = useState('all'); // 'all', 'arabes', 'disenador'
  const [isPaused, setIsPaused] = useState(false);
  const [themeMode, setThemeMode] = useState('dark'); // 'dark' (Obsidiana VIP) or 'light' (Marfil Real)

  const isDark = themeMode === 'dark';

  const handleBrandClick = (brandName) => {
    if (onSelectBrand) {
      onSelectBrand(brandName);
    }
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Duplicate brands array 4 times for a seamless infinite loop
  const createInfiniteList = (brandsArray, times = 4) => {
    let repeated = [];
    for (let i = 0; i < times; i++) {
      repeated = repeated.concat(brandsArray.map(b => ({ ...b, uniqueLoopKey: `${b.id}-${i}` })));
    }
    return repeated;
  };

  const arabicRepeated = createInfiniteList(ARABIC_BRANDS, 4);
  const designerRepeated = createInfiniteList(DESIGNER_BRANDS, 4);

  return (
    <section 
      id="nuestras-marcas" 
      className={`py-16 sm:py-24 scroll-mt-20 relative overflow-hidden transition-colors duration-500 ${
        isDark 
          ? 'bg-[#0B0B0B] text-[#F5F1E8] border-t border-b border-[#C9A961]/35' 
          : 'bg-gradient-to-b from-[#F5F1E8] via-[#ECE6D8] to-[#F5F1E8] text-[#0E0E0E] border-t border-b border-[#C9A961]/30'
      }`}
    >
      {/* Ambient Lighting FX */}
      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-opacity duration-500 ${
        isDark ? 'bg-[#C9A961]/15 opacity-80' : 'bg-[#C9A961]/20 opacity-50'
      }`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-opacity duration-500 ${
        isDark ? 'bg-[#A58B4E]/15 opacity-80' : 'bg-[#A58B4E]/15 opacity-50'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-[#C9A961]/15 border border-[#C9A961]/40 text-[#C9A961] px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-[0.28em] uppercase mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A961] animate-pulse" />
            <span>ALTA PERFUMERÍA • CASAS OFICIALES & BEST SELLERS</span>
          </div>

          <h2 className="font-arabic-title text-3xl sm:text-4xl lg:text-5xl font-light tracking-[0.16em] uppercase">
            NUESTRAS MARCAS
          </h2>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent mx-auto mt-4 mb-3.5" />
          
          <p className={`text-xs sm:text-sm max-w-xl mx-auto font-medium leading-relaxed ${
            isDark ? 'text-stone-300' : 'text-stone-700'
          }`}>
            Cinta automática interactiva con las fragancias más virales del mundo. 
            Descubre su perfume estrella, precios en decant y haz clic para ver su catálogo completo.
          </p>

          {/* Interactive Category Pills, Controls & Theme Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7">
            
            {/* Category Filter Buttons */}
            <button
              onClick={() => setFilter('all')}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-xs ${
                filter === 'all'
                  ? 'bg-[#C9A961] text-[#0E0E0E] ring-2 ring-[#C9A961]/50 font-black scale-105 shadow-md'
                  : isDark 
                    ? 'bg-[#181818] text-stone-300 hover:text-white hover:bg-[#252525] border border-white/10'
                    : 'bg-white text-stone-700 hover:text-black hover:bg-stone-50 border border-stone-300'
              }`}
            >
              Todas las Casas ({ALL_BRANDS.length})
            </button>

            <button
              onClick={() => setFilter('arabes')}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-xs flex items-center gap-1.5 ${
                filter === 'arabes'
                  ? 'bg-[#C9A961] text-[#0E0E0E] ring-2 ring-[#C9A961]/50 font-black scale-105 shadow-md'
                  : isDark 
                    ? 'bg-[#181818] text-stone-300 hover:text-white hover:bg-[#252525] border border-white/10'
                    : 'bg-white text-stone-700 hover:text-black hover:bg-stone-50 border border-stone-300'
              }`}
            >
              <Crown className="w-3.5 h-3.5 text-[#C9A961]" />
              <span>👑 Casas Árabes ({ARABIC_BRANDS.length})</span>
            </button>

            <button
              onClick={() => setFilter('disenador')}
              className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer shadow-xs flex items-center gap-1.5 ${
                filter === 'disenador'
                  ? 'bg-[#C9A961] text-[#0E0E0E] ring-2 ring-[#C9A961]/50 font-black scale-105 shadow-md'
                  : isDark 
                    ? 'bg-[#181818] text-stone-300 hover:text-white hover:bg-[#252525] border border-white/10'
                    : 'bg-white text-stone-700 hover:text-black hover:bg-stone-50 border border-stone-300'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#C9A961]" />
              <span>✨ Casas Diseñador ({DESIGNER_BRANDS.length})</span>
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Reanudar movimiento automático" : "Pausar movimiento automático"}
              className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-xs ${
                isPaused 
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-2 ring-amber-400/30' 
                  : isDark
                    ? 'bg-[#181818] border-white/10 text-stone-300 hover:text-white hover:bg-[#252525]'
                    : 'bg-white/90 border-stone-300 text-stone-700 hover:text-black hover:bg-white'
              }`}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  <span className="text-[11px] font-bold">Reanudar cinta</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span className="text-[11px]">Pausar</span>
                </>
              )}
            </button>

            {/* Aesthetic Theme Switcher (Obsidiana VIP vs Marfil Real) */}
            <button
              onClick={() => setThemeMode(isDark ? 'light' : 'dark')}
              title="Alternar estética de la cinta (Modo Obsidiana VIP / Modo Marfil)"
              className={`text-[11px] font-bold px-3.5 py-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 shadow-xs ${
                isDark 
                  ? 'bg-[#C9A961]/20 border-[#C9A961]/50 text-[#C9A961] hover:bg-[#C9A961]/30' 
                  : 'bg-[#0E0E0E] border-black text-[#C9A961] hover:bg-black'
              }`}
            >
              {isDark ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>Modo Marfil</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#C9A961]" />
                  <span>Modo Obsidiana VIP</span>
                </>
              )}
            </button>
          </div>

          {/* Interactive Hint */}
          <div className="flex items-center justify-center gap-2 mt-4 text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className={isDark ? 'text-stone-400' : 'text-stone-600'}>
              Cinta continua activa • Pasa el cursor sobre cualquier marca para pausarla e ir a su catálogo
            </span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          CINTA AUTOMÁTICA CONTINUA CON PREVIEWS DE BEST SELLERS
          ========================================================================= */}
      <div className={`relative w-full overflow-hidden pause-marquee-hover py-6 sm:py-8 border-y transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-r from-black/80 via-[#121212] to-black/80 border-[#C9A961]/30 shadow-2xl' 
          : 'bg-gradient-to-r from-stone-200/50 via-white/80 to-stone-200/50 border-[#C9A961]/30 shadow-inner'
      }`}>
        
        {/* Left & Right Smooth Vignette Fade Overlays */}
        <div className={`pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-44 lg:w-60 z-20 transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent' 
            : 'bg-gradient-to-r from-[#ECE6D8] via-[#ECE6D8]/90 to-transparent'
        }`} />
        <div className={`pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-44 lg:w-60 z-20 transition-all duration-500 ${
          isDark 
            ? 'bg-gradient-to-l from-[#0B0B0B] via-[#0B0B0B]/90 to-transparent' 
            : 'bg-gradient-to-l from-[#ECE6D8] via-[#ECE6D8]/90 to-transparent'
        }`} />

        {/* --- MODO: TODAS LAS CASAS (DOS CINTAS SINCRONIZADAS) --- */}
        {filter === 'all' && (
          <div className="space-y-6 sm:space-y-8">
            
            {/* CINTA 1: CASAS ÁRABES DE DUBÁI (DESPLAZAMIENTO HACIA LA IZQUIERDA) */}
            <div className="relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#C9A961] flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#C9A961]" />
                  <span>CASAS ÁRABES DE DUBÁI • FRAGANCIAS DE ESTELA LEGENDARIA</span>
                </span>
                <span className="text-[10px] text-[#A58B4E] font-mono hidden sm:inline tracking-wider">
                  8 Casas de Lujo Oriental
                </span>
              </div>

              <div className="overflow-hidden mask-marquee-edges">
                <div 
                  className="animate-marquee-left"
                  style={{ animationPlayState: isPaused ? 'paused' : undefined }}
                >
                  {arabicRepeated.map((brand) => (
                    <LuxuryBrandCard 
                      key={brand.uniqueLoopKey} 
                      brand={brand} 
                      onSelect={handleBrandClick} 
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CINTA 2: CASAS DE DISEÑADOR (DESPLAZAMIENTO HACIA LA DERECHA) */}
            <div className="relative pt-2">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-3 flex items-center justify-between">
                <span className={`text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 ${
                  isDark ? 'text-stone-200' : 'text-stone-800'
                }`}>
                  <Award className="w-4 h-4 text-[#C9A961]" />
                  <span>CASAS ICÓNICAS DE DISEÑADOR • PARÍS, MILÁN & NUEVA YORK</span>
                </span>
                <span className="text-[10px] text-[#A58B4E] font-mono hidden sm:inline tracking-wider">
                  8 Casas de Alta Costura
                </span>
              </div>

              <div className="overflow-hidden mask-marquee-edges">
                <div 
                  className="animate-marquee-right"
                  style={{ animationPlayState: isPaused ? 'paused' : undefined }}
                >
                  {designerRepeated.map((brand) => (
                    <LuxuryBrandCard 
                      key={brand.uniqueLoopKey} 
                      brand={brand} 
                      onSelect={handleBrandClick} 
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* --- MODO: SOLO CASAS ÁRABES --- */}
        {filter === 'arabes' && (
          <div className="relative py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#C9A961] flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#C9A961]" />
                <span>COLECCIÓN EXCLUSIVA DE CASAS ÁRABES DE DUBÁI</span>
              </span>
              <span className={`text-xs font-medium ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Aceites puros, alta fijación y notas orientales
              </span>
            </div>

            <div className="overflow-hidden mask-marquee-edges">
              <div 
                className="animate-marquee-left"
                style={{ animationPlayState: isPaused ? 'paused' : undefined }}
              >
                {arabicRepeated.map((brand) => (
                  <LuxuryBrandCard 
                    key={brand.uniqueLoopKey} 
                    brand={brand} 
                    onSelect={handleBrandClick} 
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- MODO: SOLO CASAS DE DISEÑADOR --- */}
        {filter === 'disenador' && (
          <div className="relative py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between">
              <span className={`text-xs sm:text-sm font-black uppercase tracking-widest flex items-center gap-2 ${
                isDark ? 'text-stone-200' : 'text-stone-800'
              }`}>
                <Award className="w-4 h-4 text-[#C9A961]" />
                <span>COLECCIÓN EXCLUSIVA DE DISEÑADOR INTERNACIONAL</span>
              </span>
              <span className={`text-xs font-medium ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>
                Emblemas mundiales de la alta costura y sofisticación
              </span>
            </div>

            <div className="overflow-hidden mask-marquee-edges">
              <div 
                className="animate-marquee-left"
                style={{ animationPlayState: isPaused ? 'paused' : undefined }}
              >
                {designerRepeated.map((brand) => (
                  <LuxuryBrandCard 
                    key={brand.uniqueLoopKey} 
                    brand={brand} 
                    onSelect={handleBrandClick} 
                    isDark={isDark}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Trust Assurance Badge Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-[#C9A961]/25">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className={`flex flex-col items-center p-3.5 rounded-2xl border transition-colors ${
            isDark 
              ? 'bg-[#141414] border-[#C9A961]/20 shadow-lg' 
              : 'bg-white/80 border-stone-200/80 shadow-xs'
          }`}>
            <CheckCircle2 className="w-5 h-5 text-[#C9A961] mb-1.5" />
            <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>100% Originales</span>
            <span className="text-[10px] text-stone-400">Sellos y batch codes de fábrica</span>
          </div>
          <div className={`flex flex-col items-center p-3.5 rounded-2xl border transition-colors ${
            isDark 
              ? 'bg-[#141414] border-[#C9A961]/20 shadow-lg' 
              : 'bg-white/80 border-stone-200/80 shadow-xs'
          }`}>
            <Crown className="w-5 h-5 text-[#C9A961] mb-1.5" />
            <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>Dubái & Europa</span>
            <span className="text-[10px] text-stone-400">Importación directa garantizada</span>
          </div>
          <div className={`flex flex-col items-center p-3.5 rounded-2xl border transition-colors ${
            isDark 
              ? 'bg-[#141414] border-[#C9A961]/20 shadow-lg' 
              : 'bg-white/80 border-stone-200/80 shadow-xs'
          }`}>
            <Sparkles className="w-5 h-5 text-[#C9A961] mb-1.5" />
            <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>Decants & Botellas</span>
            <span className="text-[10px] text-stone-400">Prueba desde 10ml o 100ml sellado</span>
          </div>
          <div className={`flex flex-col items-center p-3.5 rounded-2xl border transition-colors ${
            isDark 
              ? 'bg-[#141414] border-[#C9A961]/20 shadow-lg' 
              : 'bg-white/80 border-stone-200/80 shadow-xs'
          }`}>
            <ArrowRight className="w-5 h-5 text-[#C9A961] mb-1.5" />
            <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-stone-900'}`}>Despacho Inmediato</span>
            <span className="text-[10px] text-stone-400">Envíos asegurados a todo el país</span>
          </div>
        </div>
      </div>

    </section>
  );
}

/**
 * LuxuryBrandCard Component: Eye-catching, practical luxury showcase card
 * Contains the Brand Logo + Actual Best Seller Bottle Preview + Notes + Decant Price
 */
function LuxuryBrandCard({ brand, onSelect, isDark = true }) {
  const logoFilter = isDark ? brand.logoFilterDark : brand.logoFilterLight;

  return (
    <div className="px-2.5 sm:px-3 flex-shrink-0">
      <button
        onClick={() => onSelect(brand.name)}
        className={`group relative text-left rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between focus:outline-none select-none w-[310px] sm:w-[350px] h-[168px] sm:h-[180px] p-4 sm:p-4.5 ${
          isDark
            ? 'bg-[#151515] hover:bg-[#1C1C1C] border-[#C9A961]/30 hover:border-[#C9A961] text-[#F5F1E8] shadow-xl hover:shadow-[0_12px_35px_rgba(201,169,97,0.35)] hover:-translate-y-1.5'
            : 'bg-white hover:bg-stone-50 border-stone-200 hover:border-[#C9A961] text-[#0E0E0E] shadow-md hover:shadow-2xl hover:shadow-[#C9A961]/25 hover:-translate-y-1.5'
        }`}
        title={`Explorar perfumes de ${brand.name}`}
      >
        {/* Subtle Decorative Golden Border Glow Bar at Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A961] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* --- Top Row: Origin Pill & Best Seller Badge --- */}
        <div className="w-full flex items-center justify-between gap-1 text-[10px] mb-1">
          <span className={`font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
            isDark 
              ? 'text-[#C9A961] bg-[#C9A961]/15 border-[#C9A961]/35' 
              : 'text-[#A58B4E] bg-[#F5F1E8] border-[#C9A961]/30'
          }`}>
            {brand.category === 'arabes' ? '👑' : '✨'} {brand.origin || 'Oficial'}
          </span>

          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
            isDark 
              ? 'bg-amber-400/10 text-amber-300 border border-amber-400/25' 
              : 'bg-amber-50 text-amber-800 border border-amber-200'
          }`}>
            <Flame className="w-3 h-3 text-amber-500 fill-amber-500" />
            <span>{brand.vibeBadge}</span>
          </span>
        </div>

        {/* --- Middle Row: Dual Column Layout (Logo + Best Seller Bottle Preview) --- */}
        <div className="w-full flex items-center justify-between gap-3 my-auto">
          
          {/* Left Column: Brand Logo & House Info */}
          <div className="flex-1 flex flex-col justify-center min-w-0 pr-1">
            <div className="h-12 sm:h-14 flex items-center justify-start">
              <img
                src={brand.logoImage}
                alt={brand.name}
                style={logoFilter ? { filter: logoFilter } : {}}
                className={`w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${brand.heightClass || 'max-h-11'}`}
                loading="eager"
              />
            </div>
            <div className="mt-1">
              <span className={`text-[11px] font-bold block truncate tracking-wide ${
                isDark ? 'text-stone-200' : 'text-stone-900'
              }`}>
                {brand.name}
              </span>
              <span className={`text-[10px] block truncate font-medium ${
                isDark ? 'text-stone-400' : 'text-stone-500'
              }`}>
                {brand.tagline}
              </span>
            </div>
          </div>

          {/* Right Column: Star Perfume Bottle Preview Window */}
          <div className="relative flex-shrink-0">
            <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border shadow-inner relative transition-transform duration-300 group-hover:scale-105 ${
              isDark 
                ? 'border-[#C9A961]/40 bg-black/60 ring-1 ring-[#C9A961]/30' 
                : 'border-stone-200 bg-stone-100 ring-1 ring-stone-300'
            }`}>
              <img
                src={brand.bottleImage}
                alt={brand.starPerfume}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-115"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0.5 inset-x-0 text-center">
                <span className="text-[9px] font-black tracking-tight text-white px-1 leading-none drop-shadow-md truncate block">
                  {brand.starPerfume}
                </span>
              </div>
            </div>

            {/* Decant Price Tag Chip */}
            <div className="absolute -top-1.5 -right-1.5 bg-[#C9A961] text-[#0E0E0E] text-[9px] font-black px-1.5 py-0.5 rounded-md shadow-md border border-white/20 whitespace-nowrap">
              {brand.decantPrice}
            </div>
          </div>

        </div>

        {/* --- Bottom Row: Rating & Call To Action --- */}
        <div className={`w-full pt-1.5 border-t flex items-center justify-between text-[11px] ${
          isDark ? 'border-white/10 text-stone-400' : 'border-stone-100 text-stone-600'
        }`}>
          <div className="flex items-center gap-1.5 text-[11px] font-semibold">
            <span className="text-amber-400 font-bold flex items-center gap-0.5">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              {brand.rating}
            </span>
            <span className="text-stone-500">•</span>
            <span className="truncate max-w-[100px] text-[10px] text-[#A58B4E]">
              {brand.starPerfume}
            </span>
          </div>

          <span className="flex items-center gap-1 font-bold text-[#C9A961] group-hover:translate-x-1 transition-transform duration-200 text-[11px]">
            <span>Ver catálogo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Hover Ambient Radial Flare */}
        <div className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none ${
          isDark ? 'bg-[#C9A961]/20' : 'bg-[#C9A961]/15'
        }`} />
      </button>
    </div>
  );
}
