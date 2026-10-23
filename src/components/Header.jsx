import React, { useState, useRef } from 'react';
import { Search, ShoppingBag, ChevronDown, Sparkles, X, Flame, ShieldCheck, Crown, Award } from 'lucide-react';
import { BRANDS_LIST, ACORDES_LIST } from '../data/perfumes';
import Logo from './Logo';

export default function Header({ 
  cartCount, 
  onOpenCart, 
  onSelectCategory, 
  onSelectBrand,
  onSelectAcorde,
  onSearch, 
  searchQuery,
  onOpenProduct
}) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const menuTimeoutRef = useRef(null);

  // Category navigation that filters and smooth-scrolls to the catalog
  const handleNavCategory = (category) => {
    onSelectCategory(category);
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

  // Acorde navigation with auto-scroll
  const handleSelectAcordeNav = (acordeId) => {
    if (onSelectAcorde) {
      onSelectAcorde(acordeId);
    }
    setMegaMenuOpen(false);
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

  return (
    <header className="sticky top-0 z-40 bg-[#0E0E0E]/95 backdrop-blur-md border-b border-[#C9A961]/25 text-[#F5F1E8] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo ARKANO PERFUMERÍA */}
          <div className="flex items-center gap-4">
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
                <span>Casas & Acordes</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C9A961] transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Menu Dropdown Panel */}
              {megaMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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
                              className="w-full text-left py-1 px-2 rounded-lg hover:bg-white/10 hover:text-[#C9A961] flex items-center justify-between transition-colors group"
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

                    {/* Columna 2: Familias Olfativas y Acordes */}
                    <div className="col-span-4 border-r border-white/10 pr-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-[#C9A961] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" /> Acordes Estilo Fragrantica
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        {ACORDES_LIST.map((acorde, idx) => (
                          <li key={idx}>
                            <button
                              onClick={() => handleSelectAcordeNav(acorde.id)}
                              className="w-full text-left py-1 px-2 rounded-lg hover:bg-white/10 hover:text-[#C9A961] flex items-center justify-between transition-colors group"
                            >
                              <div className="flex items-center gap-2">
                                <span>{acorde.icon}</span>
                                <span className="font-semibold text-gray-200 group-hover:text-[#C9A961]">
                                  {acorde.name}
                                </span>
                              </div>
                              <span className="text-[10px] text-gray-400">
                                {acorde.badge}
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Columna 3: Banner de Calidad */}
                    <div className="col-span-4 flex flex-col justify-between bg-[#171717] p-4 rounded-2xl border border-[#C9A961]/25">
                      <div>
                        <div className="inline-flex items-center gap-1 bg-[#C9A961]/20 text-[#C9A961] text-[9px] font-black px-2 py-0.5 rounded uppercase mb-2">
                          Garantía ARKANO
                        </div>
                        <h5 className="font-arabic-title text-sm font-bold text-white leading-snug">
                          El Arte de la Perfumería Original
                        </h5>
                        <p className="text-[11px] text-gray-300 mt-1.5 leading-relaxed">
                          Fórmulas certificadas con sello holográfico y batch code coincidentes para total tranquilidad.
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C9A961] font-bold">
                        <span>Fragrantica Integrado</span>
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
            {/* Live Search Input */}
            <div className={`relative transition-all duration-300 ${searchFocused ? 'w-56 sm:w-64' : 'w-40 sm:w-52'}`}>
              <Search className="w-4 h-4 text-[#C9A961] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Buscar perfume, notas..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full bg-[#1A1A1A] border border-[#C9A961]/30 focus:border-[#C9A961] rounded-full py-1.5 pl-9 pr-8 text-xs text-[#F5F1E8] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#C9A961] transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearch('')} 
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
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
    </header>
  );
}
