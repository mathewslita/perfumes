'use client';

import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryBanner from './components/CategoryBanner';
import VibeSelector from './components/VibeSelector';
import BestSellersTabs from './components/BestSellersTabs';
import CrossSelling from './components/CrossSelling';
import ProductDetailModal from './components/ProductDetailModal';
import CartDrawer from './components/CartDrawer';
import AiSommelierWidget from './components/AiSommelierWidget';
import BrandsSection from './components/BrandsSection';
import AboutSection from './components/AboutSection';
import NewsletterBanner from './components/NewsletterBanner';
import Footer from './components/Footer';
import { PERFUMES_DATA } from './data/perfumes';
import { Sparkles, ShieldCheck, Check, RotateCcw, Crown, Award } from 'lucide-react';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  // UI States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'arabes', 'disenador', 'Para Él', 'Para Ella', 'Unisex', 'decants'
  const [activeVibe, setActiveVibe] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedAcorde, setSelectedAcorde] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Load cart on client mount to prevent SSR hydration mismatch
  useEffect(() => {
    try {
      const saved = localStorage.getItem('arkano_cart') || localStorage.getItem('sultan_cart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCart(parsed);
        }
      }
    } catch (e) {
      console.error('Error loading cart:', e);
    }
    setIsMounted(true);
  }, []);

  // Sync cart to localStorage after mounted
  useEffect(() => {
    if (!isMounted) return;
    try {
      localStorage.setItem('arkano_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cart, isMounted]);

  // Show Toast Alert
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Add to Cart
  const handleAddToCart = (product, format = '100ml', quantity = 1) => {
    const isFull = format === '100ml';
    const price = isFull ? product.price100ml : product.priceDecant;
    const originalPrice = isFull ? product.originalPrice100ml : product.originalPriceDecant;

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

    showToast(`✨ ¡"${product.name} (${format === '100ml' ? 'Botella' : 'Decant 10ml'})" añadido al carrito!`);
    setIsCartOpen(true);
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
    const isFull = format === '100ml';
    const price = isFull ? product.price100ml : product.priceDecant;
    const totalAmount = price * quantity;
    const phoneNumber = '593992851808';

    let msg = `*¡Hola ARKANO Perfumería! 👑 Deseo comprar ahora este perfume con entrega express:*\n\n`;
    msg += `✨ *Colección:* ${product.collection === 'arabes' ? 'Alta Perfumería Árabe de Dubái' : 'Diseñador Alta Costura'}\n`;
    msg += `💎 *Producto:* ${product.brand} - ${product.name}\n`;
    msg += `📦 *Presentación:* ${isFull ? 'Botella Completa ' + product.volume100ml : 'Decant Muestra 10ml'}\n`;
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

  // Filtered Products Logic
  const filteredProducts = PERFUMES_DATA.filter(p => {
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
      const vibeObj = {
        beast: '🔥 Modo Bestia',
        gourmand: '🍯 Dulces y Gourmand',
        office: '💼 Oficina / Diario',
        night: '🌙 Seducción y Noche',
        viral: '👑 Más Virales de TikTok'
      }[activeVibe];
      if (vibeObj && !p.vibes.includes(vibeObj)) return false;
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

  const openedProduct = PERFUMES_DATA.find(p => p.id === selectedProductId);
  const cartItemCount = (Array.isArray(cart) ? cart : []).reduce((sum, item) => sum + (item.quantity || 1), 0);

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

      {/* Active Filter Notice if brand, acorde, category or search is active */}
      {(selectedBrand || selectedAcorde || searchQuery || activeCategory !== 'all' || activeVibe !== 'all') && (
        <div className="bg-[#0E0E0E] text-[#F5F1E8] border-b border-[#C9A961]/30 py-3 px-4 text-xs sticky top-20 z-30 backdrop-blur-md shadow-md">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-extrabold text-[#C9A961] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Filtros activos:
              </span>

              {selectedBrand && (
                <span className="inline-flex items-center gap-1.5 bg-[#C9A961] text-[#0E0E0E] px-3 py-1 rounded-full font-black shadow-sm">
                  <span>Casa: {selectedBrand}</span>
                  <button 
                    onClick={() => setSelectedBrand(null)} 
                    className="hover:text-black ml-0.5 text-sm leading-none"
                    title="Quitar filtro de casa"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedAcorde && (
                <span className="inline-flex items-center gap-1.5 bg-white/20 text-[#F5F1E8] px-3 py-1 rounded-full font-bold shadow-sm border border-[#C9A961]/40">
                  <span>{getAcordeLabel(selectedAcorde)}</span>
                  <button 
                    onClick={() => setSelectedAcorde(null)} 
                    className="hover:text-[#C9A961] ml-0.5 text-sm leading-none"
                    title="Quitar filtro de acorde"
                  >
                    &times;
                  </button>
                </span>
              )}

              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-[#C9A961]/25 text-[#C9A961] border border-[#C9A961]/40 px-3 py-1 rounded-full font-bold">
                  <span>
                    {activeCategory === 'arabes' 
                      ? '👑 Colección Árabe' 
                      : activeCategory === 'disenador' 
                        ? '✨ Diseñador Alta Costura' 
                        : activeCategory}
                  </span>
                  <button 
                    onClick={() => setActiveCategory('all')} 
                    className="hover:text-white ml-0.5 text-sm leading-none"
                    title="Quitar filtro de categoría"
                  >
                    &times;
                  </button>
                </span>
              )}

              {activeVibe !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-[#C9A961] px-3 py-1 rounded-full font-bold border border-[#C9A961]/30">
                  <span>Vibe seleccionada</span>
                  <button 
                    onClick={() => setActiveVibe('all')} 
                    className="hover:text-white ml-0.5 text-sm leading-none"
                    title="Quitar filtro de vibe"
                  >
                    &times;
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-white px-3 py-1 rounded-full border border-gray-600 font-medium">
                  <span>Búsqueda: "{searchQuery}"</span>
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="hover:text-[#C9A961] ml-0.5 text-sm leading-none"
                    title="Limpiar búsqueda"
                  >
                    &times;
                  </button>
                </span>
              )}

              <span className="text-gray-300 font-semibold bg-white/10 px-2.5 py-1 rounded-full border border-[#C9A961]/20">
                {filteredProducts.length} fragancia{filteredProducts.length === 1 ? '' : 's'} encontrada{filteredProducts.length === 1 ? '' : 's'}
              </span>
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs text-[#0E0E0E] bg-[#C9A961] hover:bg-[#B89228] font-black px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1 shadow-sm active:scale-95"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver Todo el Catálogo</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. Hero Banner (ARKANO PERFUMERÍA) */}
      <HeroBanner
        onOpenProduct={(id) => setSelectedProductId(id)}
        onAddToCart={handleAddToCart}
        onExplore={() => {
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAiModal={() => {
          const widgetBtn = document.querySelector('[aria-label="Abrir Sommelier de Perfumes IA"]');
          if (widgetBtn) widgetBtn.click();
        }}
      />

      {/* 4. Category Showcase Banner: Árabes & Diseñador con Frases de Alta Calidad */}
      <CategoryBanner
        activeCollection={activeCategory}
        onSelectCollection={(col) => {
          setActiveCategory(col);
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 5. Visual "Vibe" Search */}
      <VibeSelector
        activeVibe={activeVibe}
        onSelectVibe={(vibeId) => setActiveVibe(vibeId)}
      />

      {/* 6. Best Sellers Section with Dynamic Tabs */}
      <main className="flex-grow">
        <BestSellersTabs
          products={filteredProducts}
          onOpenProduct={(id) => setSelectedProductId(id)}
          onAddToCart={handleAddToCart}
          selectedCategory={activeCategory}
          onTabChange={(tabId) => setActiveCategory(tabId)}
          onResetFilters={handleResetFilters}
        />

        {/* 7. Cross-Selling Carousel ("También Compraron") */}
        <CrossSelling
          products={PERFUMES_DATA}
          onOpenProduct={(id) => setSelectedProductId(id)}
          onAddToCart={handleAddToCart}
        />

        {/* 8. Brands Showcase Section */}
        <BrandsSection
          onSelectBrand={handleSelectBrand}
        />

        {/* 9. About Us & Authenticity Guarantee Section */}
        <AboutSection />

        {/* 10. WhatsApp VIP Club Banner */}
        <NewsletterBanner />
      </main>

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

      {/* 14. AI Sommelier Floating Concierge Widget */}
      <AiSommelierWidget
        catalog={PERFUMES_DATA}
        onSelectProduct={(id) => {
          setSelectedProductId(id);
        }}
      />

      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]/50 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-[#C9A961] text-[#0E0E0E] flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 font-black" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-white">
            {toastMessage}
          </span>
        </div>
      )}

    </div>
  );
}
