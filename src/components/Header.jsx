import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, User, ChevronDown, Sparkles, X, Flame, ShieldCheck } from 'lucide-react';
import { BRANDS_LIST } from '../data/perfumes';

export default function Header({ 
  cartCount, 
  onOpenCart, 
  onSelectCategory, 
  onSelectBrand,
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
    }, 200);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onSelectCategory('all')} 
              className="text-left group flex flex-col"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-arabic-title text-2xl sm:text-3xl font-extrabold tracking-wider text-[#2E1065] group-hover:text-[#581C87] transition-colors">
                  SULTAN
                </span>
                <span className="font-arabic-title text-2xl sm:text-3xl font-light text-[#D4AF37]">
                  PARFUMS
                </span>
              </div>
              <span className="text-[9px] tracking-[0.25em] font-semibold text-gray-500 uppercase -mt-1">
                Alta Perfumería Árabe • Dubái
              </span>
            </button>
          </div>

          {/* Center Navigation Links with Mega-Menu Trigger */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm text-gray-700">
            <button 
              onClick={() => handleNavCategory('Para Él')}
              className="px-3.5 py-2 rounded-full hover:text-[#2E1065] hover:bg-purple-50 transition-all font-semibold"
            >
              Para Él
            </button>
            <button 
              onClick={() => handleNavCategory('Para Ella')}
              className="px-3.5 py-2 rounded-full hover:text-[#2E1065] hover:bg-purple-50 transition-all font-semibold"
            >
              Para Ella
            </button>
            <button 
              onClick={() => handleNavCategory('Unisex')}
              className="px-3.5 py-2 rounded-full hover:text-[#2E1065] hover:bg-purple-50 transition-all font-semibold"
            >
              Unisex
            </button>

            {/* Mega-Menu Hover Button (Ref: Imagen 1) */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="px-3.5 py-2 rounded-full flex items-center gap-1 text-[#2E1065] bg-purple-50/80 hover:bg-purple-100/70 font-bold transition-all border border-purple-200/50"
              >
                <span>Casas Árabes & Novedades</span>
                <ChevronDown className="w-4 h-4 text-[#D4AF37]" />
              </button>

              {/* MEGA MENU DROPDOWN (Ref: Imagen 1 Layout) */}
              {megaMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[920px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  
                  {/* Left Column 1: Casas / Marcas */}
                  <div className="col-span-3 border-r border-gray-100 pr-4">
                    <h4 className="text-xs font-bold text-[#2E1065] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Casas Oficiales
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {BRANDS_LIST.map((brand) => (
                        <li key={brand.name}>
                          <button
                            onClick={() => {
                              onSelectBrand(brand.name);
                              setMegaMenuOpen(false);
                            }}
                            className="w-full text-left flex items-center justify-between hover:text-[#2E1065] hover:font-bold py-1 px-1.5 rounded-md hover:bg-purple-50 transition-colors"
                          >
                            <span>{brand.name}</span>
                            <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded-full">
                              {brand.badge}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Left Column 2: Familias Olfativas & Formatos */}
                  <div className="col-span-3 border-r border-gray-100 pr-4">
                    <h4 className="text-xs font-bold text-[#2E1065] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-500" /> Acordes & Estilos
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>
                        <button 
                          onClick={() => { onSearch('vainilla'); setMegaMenuOpen(false); }}
                          className="hover:text-[#2E1065] hover:font-bold block py-1"
                        >
                          🍯 Gourmand & Vainilla
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => { onSearch('oud'); setMegaMenuOpen(false); }}
                          className="hover:text-[#2E1065] hover:font-bold block py-1"
                        >
                          🪵 Oud & Maderas Orientales
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => { onSearch('piña'); setMegaMenuOpen(false); }}
                          className="hover:text-[#2E1065] hover:font-bold block py-1"
                        >
                          🍍 Cítricos & Piña Ahumada
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => { onSearch('rosa'); setMegaMenuOpen(false); }}
                          className="hover:text-[#2E1065] hover:font-bold block py-1"
                        >
                          🌹 Rosas de Grasse & Lichi
                        </button>
                      </li>
                      <li>
                        <button 
                          onClick={() => { onSelectCategory('decants'); setMegaMenuOpen(false); }}
                          className="text-[#D4AF37] font-bold hover:underline block py-1"
                        >
                          🧪 Decants 10ml (Muestras)
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Right Column: 2 Photographic Promotion Banners (Identical to Image 1) */}
                  <div className="col-span-6 grid grid-cols-2 gap-4">
                    {/* Banner 1: Discovery Kit / Decants Pouch */}
                    <div 
                      onClick={() => {
                        onSelectCategory('decants');
                        setMegaMenuOpen(false);
                      }}
                      className="group cursor-pointer rounded-xl overflow-hidden relative border border-gray-100 bg-[#FAF7F2] shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="h-32 overflow-hidden bg-gray-100">
                        <img 
                          src="/assets/images/mega_menu_discovery.jpg" 
                          alt="Estuche organizador de decants de viaje"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="p-3 bg-white flex-grow flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase block">
                            Experiencia Discovery
                          </span>
                          <h5 className="font-bold text-xs text-[#2E1065] leading-tight mt-0.5">
                            Decants de 10ml en Atomizador
                          </h5>
                          <p className="text-[11px] text-gray-500 mt-1 line-clamp-2">
                            Prueba antes de comprar la botella grande con envío gratis.
                          </p>
                        </div>
                        <span className="text-xs font-bold text-[#2E1065] mt-2 inline-flex items-center gap-1 group-hover:text-[#D4AF37]">
                          Ver Muestras &rarr;
                        </span>
                      </div>
                    </div>

                    {/* Banner 2: Club de Nuit Urban Man Elixir (Ref: Image 1) */}
                    <div 
                      onClick={() => {
                        onOpenProduct('armaf-club-de-nuit-urban-man-elixir');
                        setMegaMenuOpen(false);
                      }}
                      className="group cursor-pointer rounded-xl overflow-hidden relative border border-gray-100 bg-gray-950 shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="h-32 overflow-hidden bg-gray-900 relative">
                        <img 
                          src="/assets/images/armaf_urban_elixir.jpg" 
                          alt="Armaf Club de Nuit Urban Man Elixir"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                        />
                        <span className="absolute top-2 left-2 bg-[#D4AF37] text-black text-[9px] font-black px-1.5 py-0.5 rounded">
                          NOVEDAD
                        </span>
                      </div>
                      <div className="p-3 bg-gray-950 text-white flex-grow flex flex-col justify-between">
                        <div>
                          <span className="text-[10px] font-bold text-[#D4AF37] tracking-wider uppercase block">
                            Armaf Parfums
                          </span>
                          <h5 className="font-bold text-xs text-white leading-tight mt-0.5">
                            Club de Nuit Urban Man Elixir
                          </h5>
                          <p className="text-[11px] text-gray-400 mt-1">
                            El híbrido bestial entre Sauvage Elixir y Aventus.
                          </p>
                        </div>
                        <span className="text-xs font-bold text-[#D4AF37] mt-2 inline-flex items-center gap-1">
                          Comprar Ahora &rarr;
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Visual Divider */}
            <span className="h-4 w-px bg-gray-200 mx-1 hidden xl:inline-block" />

            {/* Marcas Button - Refined Luxury Aesthetic */}
            <button 
              onClick={() => {
                const el = document.getElementById('nuestras-marcas');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3.5 py-1.5 rounded-full text-gray-800 hover:text-[#2E1065] hover:bg-amber-50/70 border border-transparent hover:border-[#D4AF37]/50 transition-all font-bold text-xs flex items-center gap-1.5 shadow-none hover:shadow-sm"
              title="Explorar todas las casas perfumeras"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Marcas</span>
            </button>

            {/* Nosotros Button - Refined Luxury Aesthetic */}
            <button 
              onClick={() => {
                const el = document.getElementById('acerca-de-nosotros');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-3.5 py-1.5 rounded-full text-gray-800 hover:text-[#2E1065] hover:bg-purple-50/70 border border-transparent hover:border-[#2E1065]/30 transition-all font-bold text-xs flex items-center gap-1.5 shadow-none hover:shadow-sm"
              title="Conoce nuestra historia y sellos de autenticidad"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E1065]" />
              <span>Nosotros</span>
            </button>

            <button 
              onClick={() => handleNavCategory('decants')}
              className="px-3.5 py-2 rounded-full hover:text-[#2E1065] hover:bg-purple-50 transition-all font-semibold"
            >
              Decants / Muestras
            </button>
            <button 
              onClick={() => handleNavCategory('ofertas')}
              className="px-3 py-2 rounded-full text-rose-600 hover:bg-rose-50 font-bold transition-all flex items-center gap-1"
            >
              <span>Ofertas</span>
              <span className="bg-rose-100 text-rose-700 text-[10px] px-1.5 py-0.5 rounded-full font-black">
                Hasta -44%
              </span>
            </button>
          </nav>

          {/* Right Actions: Live Search, Profile, Cart */}
          <div className="flex items-center gap-3">
            {/* Live Search Input (Ref: Imagen 1) */}
            <div className="relative w-44 sm:w-64 lg:w-72">
              <input
                type="text"
                placeholder="¿Buscas algo en especial? (oud, vainilla...)"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="w-full bg-[#FAF7F2] border border-gray-200 rounded-full py-2 pl-9 pr-8 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#2E1065] focus:bg-white focus:ring-2 focus:ring-[#2E1065]/10 transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button 
                  onClick={() => onSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* WhatsApp Advisor Live Button (Conversion-focused replacement for Mi Cuenta) */}
            <a
              href="https://wa.me/593985911895?text=Hola%20Sultan%20Parfums,%20deseo%20asesor%C3%ADa%20personalizada%20para%20elegir%20mi%20perfume"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-[#FAF7F2] hover:bg-emerald-50 border border-emerald-200 text-gray-800 hover:text-emerald-900 font-bold text-xs px-3.5 py-1.5 rounded-full transition-all shadow-sm active:scale-95"
              title="Chatear con un asesor humano en WhatsApp"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <div className="text-left text-[11px] leading-tight">
                <span className="text-emerald-700 font-black block text-[9px] uppercase tracking-wider">En Línea</span>
                <span className="text-[#2E1065] font-extrabold">Asesor WhatsApp</span>
              </div>
            </a>

            {/* Cart Trigger (Ref: Imagen 1 badge) */}
            <button 
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#FAF7F2] hover:bg-purple-100/70 border border-purple-200/60 text-[#2E1065] transition-all hover:scale-105 active:scale-95 group shadow-sm"
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="w-5 h-5 text-[#2E1065] group-hover:text-[#581C87]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#2E1065] text-[#D4AF37] font-black text-[11px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md animate-in zoom-in-50 duration-200">
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
