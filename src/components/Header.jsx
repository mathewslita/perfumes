import React, { useState, useRef } from 'react';
import { Search, ShoppingBag, ChevronDown, Sparkles, X, Flame, ShieldCheck, Crown, Award, Menu, MessageCircle, ChevronRight } from 'lucide-react';
import { BRANDS_LIST, PERFUMES_DATA } from '../data/perfumes';
import Logo from './Logo';

export const OCCASIONS_LIST = [
  {
    id: 'night',
    name: 'Citas & Romance',
    vibe: 'night',
    icon: '🌹',
    badge: 'Seductor',
    desc: 'Vainilla, Ámbar & Especias cálidas'
  },
  {
    id: 'office',
    name: 'Oficina & Diario',
    vibe: 'office',
    icon: '💼',
    badge: 'Versátil',
    desc: 'Cítricos limpios & Maderas frescas'
  },
  {
    id: 'beast',
    name: 'Fiestas & Modo Bestia',
    vibe: 'beast',
    icon: '🔥',
    badge: '14+ Horas',
    desc: 'Proyección nuclear y estela imponente'
  },
  {
    id: 'viral',
    name: 'Virales de TikTok',
    vibe: 'viral',
    icon: '👑',
    badge: 'Top Elogios',
    desc: 'Los más comentados y comprados'
  },
  {
    id: 'gourmand',
    name: 'Dulces & Gourmand',
    vibe: 'gourmand',
    icon: '🍯',
    badge: 'Adictivo',
    desc: 'Vainilla, Canela, Praliné & Dátiles'
  },
  {
    id: 'decants',
    name: 'Decants Muestra 10ml',
    category: 'decants',
    icon: '🧪',
    badge: '$15 / $30',
    desc: 'Prueba ~120 sprays antes del frasco'
  }
];

export default function Header({ 
  cartCount, 
  onOpenCart, 
  onSelectCategory, 
  onSelectBrand,
  onSelectAcorde,
  onSelectVibe,
  onSearch, 
  searchQuery,
  onOpenProduct
}) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const menuTimeoutRef = useRef(null);

  // Category navigation that filters and smooth-scrolls to the catalog
  const handleNavCategory = (category) => {
    onSelectCategory(category);
    setMobileMenuOpen(false);
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Brand navigation with auto-scroll
  const handleSelectBrandNav = (brandName) => {
    onSelectBrand(brandName);
    setMegaMenuOpen(false);
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Occasion navigation with auto-scroll
  const handleSelectOccasionNav = (occasion) => {
    if (occasion.vibe && onSelectVibe) {
      onSelectVibe(occasion.vibe);
    } else if (occasion.category) {
      handleNavCategory(occasion.category);
    }
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
    const catalogEl = document.getElementById('los-mas-vendidos');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseEnter = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 250);
  };

  // Predictive Live Search Matches
  const searchMatches = (searchQuery && searchQuery.trim().length >= 2)
    ? PERFUMES_DATA.filter(p => {
        const q = searchQuery.toLowerCase().trim();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.technicalTable?.fragranceType?.toLowerCase().includes(q) ||
          (p.collection === 'arabes' && 'árabe arabes dubai dubái oriente lattafa armaf afnan'.includes(q)) ||
          (p.collection === 'disenador' && 'diseñador disenador francia paris dior chanel versace ysl'.includes(q))
        );
      }).slice(0, 5)
    : [];

  return (
    <header className="sticky top-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#C9A961]/25 text-[#F5F1E8] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo ARKANO PERFUMERÍA + Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Hamburger 3-rayitas Button (Visible on mobile/tablet) */}
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] text-[#C9A961] border border-[#C9A961]/35 transition-all active:scale-95 flex items-center justify-center shadow-sm"
              aria-label="Abrir menú de categorías"
              title="Todas las categorías"
            >
              <Menu className="w-5 h-5 text-[#C9A961]" />
            </button>

            <button 
              onClick={() => handleNavCategory('all')} 
              className="text-left group flex items-center transition-transform hover:scale-[1.02]"
              title="ARKANO Perfumería - Inicio"
            >
              <Logo variant="horizontal" theme="light" size="md" />
            </button>
          </div>

          {/* Center Navigation Links with Categories */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-xs tracking-wider uppercase">
            {/* Categoría Árabe con Corona */}
            <button 
              onClick={() => handleNavCategory('arabes')}
              className="px-3.5 py-2 rounded-full text-[#C9A961] hover:bg-white/10 transition-all font-bold flex items-center gap-1.5"
            >
              <Crown className="w-3.5 h-3.5" />
              <span>Árabes Dubái</span>
            </button>

            {/* Categoría Diseñador */}
            <button 
              onClick={() => handleNavCategory('disenador')}
              className="px-3.5 py-2 rounded-full text-[#F5F1E8] hover:text-[#C9A961] hover:bg-white/10 transition-all font-bold flex items-center gap-1.5"
            >
              <Award className="w-3.5 h-3.5 text-[#C9A961]" />
              <span>Diseñador</span>
            </button>

            <button 
              onClick={() => handleNavCategory('Para Él')}
              className="px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all font-semibold"
            >
              Para Él
            </button>
            <button 
              onClick={() => handleNavCategory('Para Ella')}
              className="px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all font-semibold"
            >
              Para Ella
            </button>
            <button 
              onClick={() => handleNavCategory('Unisex')}
              className="px-3 py-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-all font-semibold"
            >
              Unisex
            </button>

            {/* Mega-Menu Hover Button */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className="px-3.5 py-2 rounded-full flex items-center gap-1 text-[#C9A961] bg-[#1A1A1A] hover:bg-[#252525] font-bold transition-all border border-[#C9A961]/30 shadow-sm"
              >
                <span>Casas & Ocasiones</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C9A961] transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown Panel */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[760px] animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="bg-[#0E0E0E] rounded-3xl shadow-2xl border border-[#C9A961]/40 p-6 grid grid-cols-12 gap-6 text-[#F5F1E8]">
                    
                    {/* Columna 1: Casas de Diseñador & Árabes */}
                    <div className="col-span-4 border-r border-white/10 pr-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#C9A961] mb-3 flex items-center gap-1.5">
                        <Crown className="w-3.5 h-3.5" /> Casas de Perfumería
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {BRANDS_LIST.map((brand, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handleSelectBrandNav(brand.name)}
                              className="w-full text-left py-1.5 px-2 rounded-lg hover:bg-white/10 hover:text-[#C9A961] flex items-center justify-between transition-colors group"
                            >
                              <span className="font-semibold text-gray-200 group-hover:text-[#C9A961]">
                                {brand.name}
                              </span>
                              <span className="text-[10px] bg-white/10 text-[#C9A961] px-1.5 py-0.5 rounded font-mono">
                                {brand.badge}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Columna 2: Descubrimiento por Ocasión & Estilo */}
                    <div className="col-span-4 border-r border-white/10 pr-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#C9A961] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Descubrir por Ocasión
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {OCCASIONS_LIST.map((occ, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handleSelectOccasionNav(occ)}
                              className="w-full text-left py-1.5 px-2 rounded-lg hover:bg-white/10 hover:text-[#C9A961] flex items-center justify-between transition-colors group"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-sm">{occ.icon}</span>
                                <div>
                                  <div className="font-semibold text-gray-200 group-hover:text-[#C9A961] leading-tight">
                                    {occ.name}
                                  </div>
                                  <div className="text-[10px] text-gray-400 font-normal">
                                    {occ.desc}
                                  </div>
                                </div>
                              </div>
                              <span className="text-[10px] bg-white/10 text-[#C9A961] px-1.5 py-0.5 rounded font-mono ml-1 flex-shrink-0">
                                {occ.badge}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Columna 3: Decants de Lujo & Garantía */}
                    <div className="col-span-4 flex flex-col justify-between bg-gradient-to-b from-[#171717] to-[#121212] p-4 rounded-2xl border border-[#C9A961]/30">
                      <div>
                        <div className="inline-flex items-center gap-1 bg-[#C9A961]/20 text-[#C9A961] text-[9px] font-black px-2 py-0.5 rounded uppercase mb-2">
                          Decants Oficiales 10ml
                        </div>
                        <h5 className="font-arabic-title text-sm font-bold text-white leading-snug">
                          Descubre tu Firma Olfativa
                        </h5>
                        <p className="text-[11px] text-gray-300 mt-2 leading-relaxed">
                          Prueba ~120 sprays en tu piel con atomizador de vidrio de alta precisión antes de invertir en la botella completa.
                        </p>
                        <div className="mt-3 p-2 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-gray-300">Árabes Dubái</span>
                          <span className="font-black text-[#C9A961]">$15.00</span>
                        </div>
                        <div className="mt-1 p-2 bg-black/40 rounded-xl border border-white/5 flex items-center justify-between text-[11px]">
                          <span className="text-gray-300">Diseñador París</span>
                          <span className="font-black text-[#C9A961]">$30.00</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#C9A961] font-bold">
                        <span>🛡️ Batch Code</span>
                        <span>100% Genuinos</span>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions: Search + Cart */}
          <div className="flex items-center gap-3">
            {/* Live Search Input with Predictive Floating Dropdown */}
            <div className={`relative transition-all duration-300 ${searchFocused ? 'w-56 sm:w-72' : 'w-40 sm:w-56'}`}>
              <Search className="w-4 h-4 text-[#C9A961] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Buscar perfume, notas..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => {
                  // Pequeño timeout para permitir que el clic en el dropdown se ejecute
                  setTimeout(() => setSearchFocused(false), 220);
                }}
                className="w-full bg-[#1A1A1A] border border-[#C9A961]/30 focus:border-[#C9A961] rounded-full py-1.5 pl-9 pr-8 text-xs text-[#F5F1E8] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C9A961] transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearch('')} 
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  title="Limpiar búsqueda"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Floating Predictive Search Dropdown */}
              {searchFocused && searchQuery.trim().length >= 2 && (
                <div 
                  className="absolute top-full right-0 mt-2.5 w-72 sm:w-88 bg-[#0E0E0E] border border-[#C9A961]/40 rounded-2xl shadow-2xl p-2.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 text-[#F5F1E8]"
                  onMouseDown={(e) => e.preventDefault()} // Previene que el blur cierre antes del click
                >
                  <div className="flex items-center justify-between px-2 py-1 border-b border-white/10 text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    <span>Sugerencias Directas</span>
                    <span className="text-[#C9A961]">
                      {searchMatches.length} {searchMatches.length === 1 ? 'coincidencia' : 'coincidencias'}
                    </span>
                  </div>

                  {searchMatches.length > 0 ? (
                    <div className="space-y-1 mt-1.5 max-h-72 overflow-y-auto">
                      {searchMatches.map((perfume) => (
                        <button
                          key={perfume.id}
                          onClick={() => {
                            onOpenProduct(perfume.id);
                            onSearch('');
                            setSearchFocused(false);
                          }}
                          className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-[#C9A961]/35 transition-all text-left group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/10 p-1 flex items-center justify-center flex-shrink-0 group-hover:border-[#C9A961]/50">
                            <img src={perfume.imageMain} alt={perfume.name} className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-[9px] text-[#C9A961] font-extrabold uppercase tracking-wider truncate">
                              {perfume.brand}
                            </div>
                            <div className="text-xs font-bold text-white group-hover:text-[#C9A961] transition-colors truncate">
                              {perfume.name}
                            </div>
                            <div className="text-[10px] text-gray-400 flex items-center gap-1.5 mt-0.5">
                              <span>{perfume.concentration}</span>
                              <span>•</span>
                              <span className="text-stone-300">Decant ${(perfume.priceDecant || 15).toFixed(0)}</span>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-xs font-black text-white">
                              ${perfume.price100ml.toFixed(0)}
                            </div>
                            <span className="text-[9px] text-[#C9A961] font-mono font-bold block group-hover:translate-x-0.5 transition-transform">
                              Ver Ficha &rarr;
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-gray-400">
                      <p className="font-semibold text-gray-300 mb-1">Sin resultados exactos</p>
                      <p className="text-[11px]">Intenta buscar por <em>Khamrah, Sauvage, Vainilla</em> o <em>Oud</em>.</p>
                    </div>
                  )}

                  <div className="pt-2 mt-1.5 border-t border-white/10">
                    <button
                      onClick={() => {
                        setSearchFocused(false);
                        const catalogEl = document.getElementById('los-mas-vendidos');
                        if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full py-1.5 px-3 text-center text-[11px] font-bold text-[#C9A961] hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Ver resultados en el catálogo</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Trigger */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#252525] text-[#C9A961] border border-[#C9A961]/30 transition-all hover:scale-105 active:scale-95"
              aria-label="Ver carrito"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C9A961] text-[#0E0E0E] text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse-gently">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Mobile Drawer Menu ("Las 3 rayitas" con todas las categorías) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Drawer from Left */}
          <div className="fixed inset-y-0 left-0 max-w-full flex">
            <div className="w-[88vw] max-w-sm bg-[#0E0E0E] border-r border-[#C9A961]/35 shadow-2xl flex flex-col justify-between h-full text-[#F5F1E8] animate-in slide-in-from-left duration-300">
              
              {/* Drawer Header */}
              <div className="p-4 sm:p-5 border-b border-[#C9A961]/25 flex items-center justify-between bg-[#141414]">
                <button 
                  onClick={() => {
                    handleNavCategory('all');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left"
                >
                  <Logo variant="horizontal" theme="light" size="sm" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-[#1A1A1A] hover:bg-[#252525] text-gray-300 hover:text-white border border-[#C9A961]/30 transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5 text-[#C9A961]" />
                </button>
              </div>

              {/* Scrollable Category & Navigation Content */}
              <div className="flex-grow overflow-y-auto p-4 sm:p-5 space-y-6">
                
                {/* Section 1: Categorías Principales */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A961] flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#C9A961]" />
                      TODAS LAS CATEGORÍAS
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">8 Colecciones</span>
                  </div>

                  <div className="space-y-2">
                    {/* 1. Árabes Dubái */}
                    <button
                      onClick={() => handleNavCategory('arabes')}
                      className="w-full text-left p-3 rounded-2xl bg-gradient-to-r from-[#1E1911] to-[#141414] hover:from-[#292215] hover:to-[#1A1A1A] border border-[#C9A961]/50 flex items-center justify-between group transition-all shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#C9A961]/20 border border-[#C9A961]/40 flex items-center justify-center text-[#C9A961] flex-shrink-0">
                          <Crown className="w-5 h-5 text-[#C9A961]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white group-hover:text-[#C9A961] transition-colors flex items-center gap-1.5">
                            <span>Perfumes Árabes</span>
                            <span className="text-[9px] bg-[#C9A961] text-[#0E0E0E] font-black px-1.5 py-0.2 rounded font-sans">
                              DUBÁI
                            </span>
                          </div>
                          <div className="text-[11px] text-gray-400">
                            Lattafa, Armaf, Afnan, Al Haramain
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-[#C9A961] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </button>

                    {/* 2. Diseñador */}
                    <button
                      onClick={() => handleNavCategory('disenador')}
                      className="w-full text-left p-3 rounded-2xl bg-[#171717] hover:bg-[#202020] border border-white/10 hover:border-[#C9A961]/40 flex items-center justify-between group transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white flex-shrink-0">
                          <Award className="w-5 h-5 text-[#C9A961]" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-white group-hover:text-[#C9A961] transition-colors flex items-center gap-1.5">
                            <span>Perfumes de Diseñador</span>
                            <span className="text-[9px] bg-white/10 text-[#C9A961] font-bold px-1.5 py-0.2 rounded font-sans">
                              ALTA COSTURA
                            </span>
                          </div>
                          <div className="text-[11px] text-gray-400">
                            Dior, Chanel, YSL, Tom Ford, Versace
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#C9A961] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </button>

                    {/* 3. Para Él */}
                    <button
                      onClick={() => handleNavCategory('Para Él')}
                      className="w-full text-left p-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between group transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm">💼</span>
                        <span className="font-semibold text-xs text-gray-200 group-hover:text-white">Para Él (Caballeros)</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Amaderados & Seducción</span>
                    </button>

                    {/* 4. Para Ella */}
                    <button
                      onClick={() => handleNavCategory('Para Ella')}
                      className="w-full text-left p-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between group transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm">🌸</span>
                        <span className="font-semibold text-xs text-gray-200 group-hover:text-white">Para Ella (Damas)</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Florales & Gourmand</span>
                    </button>

                    {/* 5. Unisex */}
                    <button
                      onClick={() => handleNavCategory('Unisex')}
                      className="w-full text-left p-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-between group transition-colors border border-transparent hover:border-white/10"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm">💎</span>
                        <span className="font-semibold text-xs text-gray-200 group-hover:text-white">Colección Unisex</span>
                      </div>
                      <span className="text-[10px] text-gray-400">Versatilidad Suprema</span>
                    </button>

                    {/* 6. Decants 10ml */}
                    <button
                      onClick={() => handleNavCategory('decants')}
                      className="w-full text-left p-2.5 px-3 rounded-xl bg-[#C9A961]/10 hover:bg-[#C9A961]/20 border border-[#C9A961]/35 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-sm">🧪</span>
                        <span className="font-semibold text-xs text-[#C9A961]">Decants Muestras 10ml</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#C9A961] font-black">$15 / $30</span>
                    </button>

                    {/* 7. Ofertas Especiales */}
                    <button
                      onClick={() => handleNavCategory('ofertas')}
                      className="w-full text-left p-2.5 px-3 rounded-xl bg-red-950/30 hover:bg-red-950/50 border border-red-500/30 flex items-center justify-between group transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Flame className="w-4 h-4 text-red-400 fill-red-400" />
                        <span className="font-semibold text-xs text-red-300">Ofertas Exclusivas</span>
                      </div>
                      <span className="text-[10px] bg-red-500/20 text-red-300 font-bold px-1.5 py-0.5 rounded">Descuentos</span>
                    </button>

                    {/* 8. Ver Todo el Catálogo */}
                    <button
                      onClick={() => handleNavCategory('all')}
                      className="w-full text-center py-2.5 px-4 rounded-xl bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-xs uppercase tracking-wider transition-all mt-2 shadow-md active:scale-95"
                    >
                      Ver Todo el Catálogo
                    </button>
                  </div>
                </div>

                {/* Section 2: Casas de Perfumería */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A961] block mb-2.5">
                    CASAS OFICIALES
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {BRANDS_LIST.map((brand, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectBrandNav(brand.name)}
                        className="text-[11px] font-semibold py-1.5 px-2.5 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] hover:text-[#C9A961] border border-white/10 hover:border-[#C9A961]/40 text-gray-300 transition-colors"
                      >
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Section 3: Momentos y Ocasiones de Uso */}
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A961] block mb-2.5">
                    MOMENTOS & ESTILOS DE USO
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {OCCASIONS_LIST.map((occ, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOccasionNav(occ)}
                        className="text-[11px] font-medium p-2 rounded-xl bg-[#1A1A1A] hover:bg-[#252525] hover:text-[#C9A961] border border-white/10 hover:border-[#C9A961]/40 text-gray-200 transition-colors flex items-center gap-2 text-left"
                      >
                        <span className="text-base">{occ.icon}</span>
                        <div className="min-w-0">
                          <div className="font-bold text-xs truncate leading-tight">{occ.name.split('&')[0]}</div>
                          <div className="text-[9px] text-[#C9A961] font-mono">{occ.badge}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Drawer Footer: WhatsApp Support CTA */}
              <div className="p-4 border-t border-[#C9A961]/25 bg-[#141414] space-y-2.5">
                <a
                  href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20sobre%20fragancias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Asesoría Directa por WhatsApp</span>
                </a>
                <div className="flex items-center justify-between text-[10px] text-gray-400 pt-1 font-medium px-1">
                  <span>🛡️ 100% Original</span>
                  <span>✨ Batch Code</span>
                  <span>🚀 Entrega Express</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </header>
  );
}
