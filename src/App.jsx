'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryBanner from './components/CategoryBanner';
import VibeSelector from './components/VibeSelector';
import BestSellersTabs from './components/BestSellersTabs';
import CrossSelling from './components/CrossSelling';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import FavoritesDrawer from './components/FavoritesDrawer';
import AiSommelierWidget from './components/AiSommelierWidget';
import BrandsSection from './components/BrandsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { PERFUMES_DATA, VIBE_CATEGORIES } from './data/perfumes';
import { Sparkles, ShieldCheck, Check, RotateCcw, Crown, Award } from 'lucide-react';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // UI States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'arabes', 'disenador', 'Para Él', 'Para Ella', 'Unisex', 'decants'
  const [activeVibe, setActiveVibe] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedAcorde, setSelectedAcorde] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isAiAdvisorOpen, setIsAiAdvisorOpen] = useState(false);

  // High-performance DOM refs for zero-rerender GPU scroll transition (60/120fps)
  const heroContainerRef = useRef(null);
  const heroOverlayRef = useRef(null);

  // Zero-rerender scroll listener for cinematic GTA VI curtain reveal
  useEffect(() => {
    let ticking = false;
    let lastP = -1;

    const updateScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      if (scrollY <= 800) {
        const p = Math.min(1, Math.max(0, scrollY / 500));
        if (Math.abs(p - lastP) > 0.003) {
          lastP = p;
          if (heroContainerRef.current) {
            heroContainerRef.current.style.transform = `scale(${1 - p * 0.05}) translateY(${p * -18}px)`;
            heroContainerRef.current.style.opacity = `${Math.max(0.18, 1 - p * 0.85)}`;
            heroContainerRef.current.style.pointerEvents = p > 0.65 ? 'none' : 'auto';
          }
          if (heroOverlayRef.current) {
            heroOverlayRef.current.style.opacity = `${p * 0.72}`;
          }
        }
      } else if (lastP !== 1) {
        lastP = 1;
        if (heroContainerRef.current) {
          heroContainerRef.current.style.opacity = '0.18';
          heroContainerRef.current.style.pointerEvents = 'none';
        }
        if (heroOverlayRef.current) {
          heroOverlayRef.current.style.opacity = '0.72';
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load cart & favorites on client mount to prevent SSR hydration mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arkano_cart') || localStorage.getItem('sultan_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const validCart = parsed
            .map(item => {
              if (item.id === 'yves-dorgeval-sublime-red') {
                const newProd = PERFUMES_DATA.find(p => p.id === 'lattafa-badee-al-oud-sublime');
                if (!newProd) return null;
                return {
                  ...item,
                  id: 'lattafa-badee-al-oud-sublime',
                  name: newProd.name,
                  brand: newProd.brand,
                  image: newProd.imageMain,
                  price: item.type === 'decant' ? newProd.priceDecant : newProd.price100ml
                };
              }
              return item;
            })
            .filter(Boolean)
            .filter(item => PERFUMES_DATA.some(p => p.id === item.id));
          setCart(validCart);
        }
      }
      const savedFavs = localStorage.getItem('arkano_favorites');
      if (savedFavs) {
        const parsedFavs = JSON.parse(savedFavs);
        if (Array.isArray(parsedFavs)) {
          // Migrar IDs antiguos y filtrar únicamente perfumes existentes en el catálogo
          const validFavs = parsedFavs
            .map(id => id === 'yves-dorgeval-sublime-red' ? 'lattafa-badee-al-oud-sublime' : id)
            .filter(id => PERFUMES_DATA.some(p => p.id === id));
          setFavorites(validFavs);
        }
      }
    } catch (e) {
      console.error('Error loading cart or favorites:', e);
    }
    setIsMounted(true);
  }, []);

  // Sync cart & favorites to localStorage after mounted
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('arkano_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cart, isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('arkano_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error('Error saving favorites:', e);
    }
  }, [favorites, isMounted]);

  // Depuración automática de IDs obsoletos para asegurar sincronización 1:1
  useEffect(() => {
    if (!isMounted) return;
    const valid = favorites.filter(id => PERFUMES_DATA.some(p => p.id === id));
    if (valid.length !== favorites.length) {
      setFavorites(valid);
    }
  }, [favorites, isMounted]);

  // Toggle favorite perfume
  const handleToggleFavorite = (productId) => {
    const prod = PERFUMES_DATA.find(p => p.id === productId);
    const prodName = prod?.name || 'Perfume';
    setFavorites(prev => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`🤍 "${prodName}" eliminado de tus favoritos`);
        return prev.filter(id => id !== productId);
      } else {
        showToast(`❤️ ¡"${prodName}" añadido a tus favoritos!`);
        return [...prev, productId];
      }
    });
  };

  const handleClearFavorites = () => {
    setFavorites([]);
    showToast('Tus favoritos han sido vaciados 🤍');
  };

  const toastTimeoutRef = useRef(null);

  // Show Toast Alert
  const showToast = (msg) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Add to Cart (con soporte para no interrumpir la navegación en favoritos)
  const handleAddToCart = (product, format = '100ml', quantity = 1, openCart = true) => {
    const isArabic = product.collection === 'arabes';
    let price = product.price100ml;
    let originalPrice = product.originalPrice100ml;
    let formatLabel = '';

    if (format === '30ml') {
      price = product.priceDecant30ml || (isArabic ? 28 : 32);
      originalPrice = product.originalPriceDecant30ml || (isArabic ? 35 : 40);
      formatLabel = ' (Decant 30ml)';
    } else if (format === '10ml' || format === 'decant') {
      price = product.priceDecant10ml || product.priceDecant || (isArabic ? 15 : 18);
      originalPrice = product.originalPriceDecant || (isArabic ? 20 : 24);
      formatLabel = ' (Decant 10ml)';
    }

    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.id === product.id && item.format === format);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          brand: product.brand,
          collection: product.collection,
          sku: product.sku,
          image: product.imageMain,
          format: format,
          price: price,
          originalPrice: originalPrice,
          quantity: quantity
        }];
      }
    });

    showToast(`¡"${product.name}${formatLabel}" añadido al carrito!`);
    if (openCart) {
      setIsFavoritesOpen(false);
      setIsCartOpen(true);
    }
  };

  // Update item quantity in cart
  const handleUpdateQty = (id, format, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id && item.format === format) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  // Remove single item from cart
  const handleRemoveItem = (id, format) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.format === format)));
  };

  // Buy Now via WhatsApp directly from PDP
  const handleBuyNowWhatsApp = (product, format = '100ml', quantity = 1) => {
    const isArabic = product.collection === 'arabes';
    let price = product.price100ml;
    let presentationName = `Botella Completa ${product.volume100ml || '100ml'}`;

    if (format === '30ml') {
      price = product.priceDecant30ml || (isArabic ? 28 : 32);
      presentationName = 'Decant de Lujo 30ml (Atomizador)';
    } else if (format === '10ml' || format === 'decant') {
      price = product.priceDecant10ml || product.priceDecant || (isArabic ? 15 : 18);
      presentationName = 'Decant Muestra 10ml (Atomizador)';
    }

    const totalAmount = price * quantity;
    const phoneNumber = '593992851808';

    let msg = `*¡Hola ARKANO Perfumería! 👑 Deseo comprar ahora este perfume con entrega express:*\n\n`;
    msg += `✨ *Colección:* ${product.collection === 'arabes' ? 'Alta Perfumería Árabe de Dubái' : 'Diseñador Alta Costura'}\n`;
    msg += `💎 *Producto:* ${product.brand} - ${product.name}\n`;
    msg += `📦 *Presentación:* ${presentationName}\n`;
    msg += `🔢 *Cantidad:* ${quantity}\n`;
    msg += `💰 *Total a Pagar:* $${totalAmount.toFixed(2)} USD\n`;
    msg += `🔒 *Garantía:* Con Sello de Fábrica y Batch Code verificado\n\n`;
    msg += `_¿Tienen disponibilidad para despacho hoy mismo?_`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  // Clear all filters safely
  const handleResetFilters = () => {
    setSelectedBrand(null);
    setSelectedAcorde(null);
    setActiveCategory('all');
    setActiveVibe('all');
    setSearchQuery('');
  };

  // Select brand with smart reset & smooth scroll
  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
    setSelectedAcorde(null);
    setActiveCategory('all');
    setActiveVibe('all');
    setSearchQuery('');
    const el = document.getElementById('los-mas-vendidos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Select acorde with smart fallback
  const handleSelectAcorde = (acordeId) => {
    setSelectedAcorde(acordeId);
    if (selectedBrand) {
      const brandHasAcorde = PERFUMES_DATA.some(
        p => p.brand.toLowerCase() === selectedBrand.toLowerCase() && p.acordes?.includes(acordeId)
      );
      if (!brandHasAcorde) setSelectedBrand(null);
    }
    if (activeCategory !== 'all') {
      const catHasAcorde = PERFUMES_DATA.some(p => {
        let matchesCat = true;
        if (activeCategory === 'arabes') matchesCat = p.collection === 'arabes';
        else if (activeCategory === 'disenador') matchesCat = p.collection === 'disenador';
        else if (activeCategory === 'Para Él') matchesCat = p.gender === 'Para Él' || p.gender === 'Unisex';
        else if (activeCategory === 'Para Ella') matchesCat = p.gender === 'Para Ella' || p.gender === 'Unisex';
        else if (activeCategory === 'Unisex') matchesCat = p.gender === 'Unisex';
        return matchesCat && p.acordes?.includes(acordeId);
      });
      if (!catHasAcorde) setActiveCategory('all');
    }
    setActiveVibe('all');
    setSearchQuery('');
    const el = document.getElementById('los-mas-vendidos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Select vibe / occasion with smart scroll
  const handleSelectVibe = (vibe) => {
    setActiveVibe(vibe);
    setSelectedBrand(null);
    setSelectedAcorde(null);
    setActiveCategory('all');
    setSearchQuery('');
    const el = document.getElementById('los-mas-vendidos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtered Products Logic (Optimizado y memoizado para máximo rendimiento)
  const filteredProducts = useMemo(() => {
    return PERFUMES_DATA.filter(p => {
      // Brand filter
      if (selectedBrand && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }

      // Acorde filter
      if (selectedAcorde && !p.acordes?.includes(selectedAcorde)) {
        return false;
      }

      // Category / Collection filter
      if (activeCategory === 'arabes' && p.collection !== 'arabes') return false;
      if (activeCategory === 'disenador' && p.collection !== 'disenador') return false;
      if (activeCategory === 'Para Él' && p.gender !== 'Para Él' && p.gender !== 'Unisex') return false;
      if (activeCategory === 'Para Ella' && p.gender !== 'Para Ella' && p.gender !== 'Unisex') return false;
      if (activeCategory === 'Unisex' && p.gender !== 'Unisex') return false;
      if (activeCategory === 'decants') return true; // Show all products for decants
      if (activeCategory === 'ofertas' && (p.onSale === false || p.originalPrice100ml <= p.price100ml)) return false;

      // Vibe filter
      if (activeVibe !== 'all') {
        const vibeMap = {
          dulces: '🍬 DULCES',
          beast: '🍬 DULCES',
          amaderados: '🪵 AMADERADOS',
          gourmand: '🪵 AMADERADOS',
          citricos: '🍋 CÍTRICOS',
          office: '🍋 CÍTRICOS',
          day: '☀️ DÍA',
          night: '🌙 NOCHE',
          viral: '👑 TOP VENTAS'
        };
        const vibeObj = vibeMap[activeVibe];
        if (vibeObj) {
          const matches = p.vibes?.includes(vibeObj) || (activeVibe === 'day' && (p.timeOfDay === 'dia' || p.timeOfDay === 'ambas'));
          if (!matches) return false;
        }
      }

      // Live search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchType = p.technicalTable.fragranceType.toLowerCase().includes(q);
        const matchInspo = p.inspiration.toLowerCase().includes(q);
        const matchNotes = (
          p.technicalTable.headNotes + ' ' + 
          p.technicalTable.heartNotes + ' ' + 
          p.technicalTable.baseNotes
        ).toLowerCase().includes(q);

        return matchName || matchBrand || matchType || matchInspo || matchNotes;
      }

      return true;
    });
  }, [selectedBrand, selectedAcorde, activeCategory, activeVibe, searchQuery]);

  const openedProduct = useMemo(() => PERFUMES_DATA.find(p => p.id === selectedProductId), [selectedProductId]);
  const cartItemCount = useMemo(() => (Array.isArray(cart) ? cart : []).reduce((sum, item) => sum + (item.quantity || 1), 0), [cart]);

  const getAcordeLabel = (id) => {
    switch (id) {
      case 'gourmand': return '🍯 Gourmand & Vainilla';
      case 'oud_maderas': return '🪵 Oud & Maderas Nobles';
      case 'citricos': return '🍍 Cítricos & Frutales';
      case 'especiados': return '🌶️ Especiados Cálidos';
      case 'rosas': return '🌹 Rosas & Florales';
      default: return id;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#0E0E0E] flex flex-col font-body selection:bg-[#0E0E0E] selection:text-[#C9A961]">
      
      {/* 1. Promotional Top Bar */}
      <TopBar />

      {/* 2. Header with Sticky Navbar & Mega-Menu */}
      <Header
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        favoritesCount={favorites.filter(id => PERFUMES_DATA.some(p => p.id === id)).length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenAiModal={() => setIsAiAdvisorOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedBrand(null);
          setSelectedAcorde(null);
          setActiveVibe('all');
        }}
        onSelectBrand={handleSelectBrand}
        onSelectAcorde={handleSelectAcorde}
        onSelectVibe={handleSelectVibe}
        onSearch={(query) => {
          setSearchQuery(query);
          if (query.trim()) {
            setSelectedAcorde(null);
          }
        }}
        searchQuery={searchQuery}
        onOpenProduct={(id) => setSelectedProductId(id)}
      />

      {/* GTA VI Immersive Scroll Curtain Experience (Rockstar Games Inspired) */}
      <div className="relative">
        
        {/* Sticky Hero Banner: Dims and scales down smoothly via direct GPU compositor updates */}
        <div 
          ref={heroContainerRef}
          className="sticky top-16 sm:top-20 z-0 overflow-hidden select-none will-change-transform"
          style={{
            transform: 'scale(1) translateY(0px)',
            opacity: 1
          }}
        >
          <HeroBanner
            onOpenProduct={(id) => setSelectedProductId(id)}
            onAddToCart={handleAddToCart}
            onExplore={() => {
              const el = document.getElementById('nuestras-colecciones') || document.getElementById('los-mas-vendidos');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenAiModal={() => setIsAiAdvisorOpen(true)}
          />

          {/* Cinematic Darkening Shade that deepens on scroll */}
          <div 
            ref={heroOverlayRef}
            className="absolute inset-0 bg-[#0E0E0E] pointer-events-none transition-opacity duration-75"
            style={{ opacity: 0 }}
          />
        </div>

        {/* Rising Curtain Sheet: Glides UP over the Hero with rounded top border and deep luxury shadow */}
        <div className="relative z-10 rounded-t-[36px] sm:rounded-t-[48px] shadow-[0_-25px_60px_rgba(0,0,0,0.55)] border-t border-[#C9A961]/40 bg-[#F5F1E8]">
          
          {/* Subtle tactile drag/curtain indicator */}
          <div className="pt-3 pb-1 flex justify-center">
            <div className="w-12 h-1.5 rounded-full bg-[#C9A961]/40" />
          </div>

          {/* 4. Category Showcase Banner (Nuestras Colecciones) */}
          <CategoryBanner
            activeCollection={activeCategory}
            onSelectCollection={(col) => {
              setActiveCategory(col);
              const el = document.getElementById('los-mas-vendidos');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 5. Brands Showcase Section */}
          <BrandsSection
            onSelectBrand={handleSelectBrand}
          />

          {/* 6. Visual "Vibe" Search */}
          <VibeSelector
            activeVibe={activeVibe}
            onSelectVibe={(vibeId) => setActiveVibe(vibeId)}
          />

          {/* 7. Best Sellers Section with Dynamic Tabs */}
          <main className="flex-grow">
            <BestSellersTabs
              products={filteredProducts}
              onOpenProduct={(id) => setSelectedProductId(id)}
              onAddToCart={handleAddToCart}
              selectedCategory={activeCategory}
              onTabChange={(tabId) => setActiveCategory(tabId)}
              onResetFilters={handleResetFilters}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              selectedBrand={selectedBrand}
              onClearBrand={() => setSelectedBrand(null)}
              selectedAcorde={selectedAcorde}
              onClearAcorde={() => setSelectedAcorde(null)}
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
              activeVibe={activeVibe}
              onClearVibe={() => setActiveVibe('all')}
              getAcordeLabel={getAcordeLabel}
              vibeCategories={VIBE_CATEGORIES}
            />

            {/* Cross-Selling Carousel ("También Compraron") */}
            <CrossSelling
              products={PERFUMES_DATA}
              onOpenProduct={(id) => setSelectedProductId(id)}
              onAddToCart={handleAddToCart}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
            />

            {/* About Us & Authenticity Guarantee Section */}
            <AboutSection />
          </main>
        </div>
      </div>

      {/* 11. Footer */}
      <Footer 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* 12. Product Detail Modal / PDP con Integración Fragrantica */}
      {selectedProductId && openedProduct && (
        <ProductDetailModal
          product={openedProduct}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
          onBuyNowWhatsApp={handleBuyNowWhatsApp}
          isFavorite={favorites.includes(selectedProductId)}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {/* 13. Slide-Over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onExploreCatalog={() => {
          setIsCartOpen(false);
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 14. Slide-Over Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onAddToCart={handleAddToCart}
        onRemoveFavorite={handleToggleFavorite}
        onOpenProduct={(id) => setSelectedProductId(id)}
        onClearFavorites={handleClearFavorites}
        onExploreCatalog={() => {
          setIsFavoritesOpen(false);
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCart={() => {
          setIsFavoritesOpen(false);
          setIsCartOpen(true);
        }}
      />

      {/* 14. AI Sommelier Floating Concierge Widget */}
      <AiSommelierWidget
        isOpen={isAiAdvisorOpen}
        onToggle={() => setIsAiAdvisorOpen(prev => !prev)}
        onClose={() => setIsAiAdvisorOpen(false)}
        onOpenProduct={(id) => setSelectedProductId(id)}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Alert Notification de Alta Visibilidad */}
      {toastMessage && (
        <div className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-[150] w-[92%] sm:w-auto max-w-md bg-[#0E0E0E]/95 backdrop-blur-md text-[#F5F1E8] border border-[#C9A961] px-4 py-3 rounded-2xl shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-full bg-[#C9A961] text-[#0E0E0E] flex items-center justify-center flex-shrink-0 shadow-sm">
              <Check className="w-4 h-4 font-black stroke-[3]" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-white truncate">
              {toastMessage}
            </span>
          </div>
          <button
            onClick={() => {
              setIsFavoritesOpen(false);
              setIsCartOpen(true);
              setToastMessage(null);
            }}
            className="text-xs font-black text-[#C9A961] hover:text-white uppercase tracking-wider flex-shrink-0 ml-2 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#C9A961]/20 border border-[#C9A961]/30 transition-colors cursor-pointer"
          >
            Ver Carrito →
          </button>
        </div>
      )}

    </div>
  );
}
