'use client';

import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
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
import { Sparkles, ShieldCheck, Check, RotateCcw } from 'lucide-react';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('sultan_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // UI States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all', 'Para Él', 'Para Ella', 'Unisex', 'decants', 'ofertas'
  const [activeVibe, setActiveVibe] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedAcorde, setSelectedAcorde] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('sultan_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [cart]);

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
    const phoneNumber = '593985911895';

    let msg = `*¡Hola Sultan Parfums! 🌙 Deseo comprar ahora este perfume árabe con entrega express:*\n\n`;
    msg += `👑 *Producto:* ${product.brand} - ${product.name}\n`;
    msg += `📦 *Presentación:* ${isFull ? 'Botella Completa ' + product.volume100ml : 'Decant Muestra 10ml'}\n`;
    msg += `🔢 *Cantidad:* ${quantity}\n`;
    msg += `💰 *Total a Pagar:* $${totalAmount.toFixed(2)} USD\n`;
    msg += `🏷️ *SKU:* ${product.sku}\n`;
    msg += `🔒 *Garantía:* Con Sello Holográfico y Batch Code verificado\n\n`;
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

  // Select acorde with smart fallback so it never returns an empty screen
  const handleSelectAcorde = (acordeId) => {
    setSelectedAcorde(acordeId);
    // If the currently selected brand has no perfume with this acorde, clear brand so user sees all matching perfumes!
    if (selectedBrand) {
      const brandHasAcorde = PERFUMES_DATA.some(
        p => p.brand.toLowerCase() === selectedBrand.toLowerCase() && p.acordes?.includes(acordeId)
      );
      if (!brandHasAcorde) setSelectedBrand(null);
    }
    // If active category has no matching perfume with this acorde, reset category to 'all'
    if (activeCategory !== 'all') {
      const catHasAcorde = PERFUMES_DATA.some(p => {
        const matchesCat = (activeCategory === 'Para Él' && (p.gender === 'Para Él' || p.gender === 'Unisex')) ||
                           (activeCategory === 'Para Ella' && (p.gender === 'Para Ella' || p.gender === 'Unisex')) ||
                           (activeCategory === 'Unisex' && p.gender === 'Unisex');
        return matchesCat && p.acordes?.includes(acordeId);
      });
      if (!catHasAcorde) setActiveCategory('all');
    }
    setActiveVibe('all');
    setSearchQuery('');
    const el = document.getElementById('los-mas-vendidos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Filtered Products Logic
  const filteredProducts = PERFUMES_DATA.filter(p => {
    // Brand filter from mega menu or brands section
    if (selectedBrand && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
      return false;
    }

    // Acorde filter from mega menu
    if (selectedAcorde && !p.acordes?.includes(selectedAcorde)) {
      return false;
    }

    // Category filter
    if (activeCategory === 'Para Él' && p.gender !== 'Para Él' && p.gender !== 'Unisex') return false;
    if (activeCategory === 'Para Ella' && p.gender !== 'Para Ella' && p.gender !== 'Unisex') return false;
    if (activeCategory === 'Unisex' && p.gender !== 'Unisex') return false;
    if (activeCategory === 'ofertas' && p.discountPercent < 40) return false;

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
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Label for active acorde
  const getAcordeLabel = (id) => {
    switch (id) {
      case 'gourmand': return '🍯 Gourmand & Vainilla';
      case 'oud_maderas': return '🪵 Oud & Maderas Orientales';
      case 'citricos': return '🍍 Cítricos & Piña Ahumada';
      case 'rosas': return '🌹 Rosas & Florales';
      default: return id;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1F2937] flex flex-col font-body selection:bg-[#2E1065] selection:text-[#D4AF37]">
      
      {/* 1. Promotional Top Bar (Ref: Imagen 1) */}
      <TopBar />

      {/* 2. Header with Sticky Navbar & Mega-Menu (Ref: Imagen 1) */}
      <Header
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setSelectedBrand(null);
          setSelectedAcorde(null);
        }}
        onSelectBrand={handleSelectBrand}
        onSelectAcorde={handleSelectAcorde}
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
        <div className="bg-purple-100/90 border-b border-purple-200 py-3 px-4 text-xs sticky top-20 z-30 backdrop-blur-md shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-extrabold text-[#2E1065] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> Filtros activos:
              </span>

              {selectedBrand && (
                <span className="inline-flex items-center gap-1.5 bg-[#2E1065] text-[#D4AF37] px-3 py-1 rounded-full font-bold shadow-sm">
                  <span>Casa: {selectedBrand}</span>
                  <button 
                    onClick={() => setSelectedBrand(null)} 
                    className="hover:text-white ml-0.5 text-sm leading-none"
                    title="Quitar filtro de casa"
                  >
                    &times;
                  </button>
                </span>
              )}

              {selectedAcorde && (
                <span className="inline-flex items-center gap-1.5 bg-[#D4AF37] text-[#1E0741] px-3 py-1 rounded-full font-black shadow-sm">
                  <span>{getAcordeLabel(selectedAcorde)}</span>
                  <button 
                    onClick={() => setSelectedAcorde(null)} 
                    className="hover:text-black ml-0.5 text-sm leading-none"
                    title="Quitar filtro de acorde"
                  >
                    &times;
                  </button>
                </span>
              )}

              {activeCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-purple-200 text-[#2E1065] px-3 py-1 rounded-full font-bold">
                  <span>{activeCategory}</span>
                  <button 
                    onClick={() => setActiveCategory('all')} 
                    className="hover:text-purple-950 ml-0.5 text-sm leading-none"
                    title="Quitar filtro de categoría"
                  >
                    &times;
                  </button>
                </span>
              )}

              {activeVibe !== 'all' && (
                <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full font-bold">
                  <span>Vibe seleccionada</span>
                  <button 
                    onClick={() => setActiveVibe('all')} 
                    className="hover:text-amber-950 ml-0.5 text-sm leading-none"
                    title="Quitar filtro de vibe"
                  >
                    &times;
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 bg-white text-gray-800 px-3 py-1 rounded-full border border-gray-300 font-medium">
                  <span>Búsqueda: "{searchQuery}"</span>
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="hover:text-black ml-0.5 text-sm leading-none"
                    title="Limpiar búsqueda"
                  >
                    &times;
                  </button>
                </span>
              )}

              <span className="text-gray-600 font-semibold bg-white/90 px-2.5 py-1 rounded-full border border-purple-200 shadow-xs">
                {filteredProducts.length} fragancia{filteredProducts.length === 1 ? '' : 's'} disponible{filteredProducts.length === 1 ? '' : 's'}
              </span>
            </div>

            <button
              onClick={handleResetFilters}
              className="text-xs text-[#2E1065] font-black hover:text-[#581C87] bg-white hover:bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200 transition-all flex items-center gap-1 shadow-xs"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ver Todo el Catálogo</span>
            </button>
          </div>
        </div>
      )}

      {/* 3. Hero Banner (Boutique de Lujo Oriental Accesible) */}
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

      {/* 4. Visual "Vibe" Search for Beginners */}
      <VibeSelector
        activeVibe={activeVibe}
        onSelectVibe={(vibeId) => setActiveVibe(vibeId)}
      />

      {/* 5. Best Sellers Section with Dynamic Tabs (Ref: Imagen 4) */}
      <main className="flex-grow">
        <BestSellersTabs
          products={filteredProducts}
          onOpenProduct={(id) => setSelectedProductId(id)}
          onAddToCart={handleAddToCart}
          selectedCategory={activeCategory}
          onTabChange={(tabId) => setActiveCategory(tabId)}
          onResetFilters={handleResetFilters}
        />

        {/* 6. Cross-Selling Carousel ("También Compraron") - Justo debajo del catálogo */}
        <CrossSelling
          products={PERFUMES_DATA}
          onOpenProduct={(id) => setSelectedProductId(id)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Brands Showcase Section (Ref: Luzents reference requested by user) */}
        <BrandsSection
          onSelectBrand={handleSelectBrand}
        />

        {/* 8. About Us & Authenticity Guarantee Section */}
        <AboutSection />

        {/* 9. WhatsApp VIP Club Banner (Ref: Imagen 3 upgraded to WhatsApp) */}
        <NewsletterBanner />
      </main>

      {/* 8. Footer (Ref: Imagen 3) */}
      <Footer 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* 9. Product Detail Modal / PDP (Ref: Imagen 5, 6, 7) */}
      {selectedProductId && openedProduct && (
        <ProductDetailModal
          product={openedProduct}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
          onBuyNowWhatsApp={handleBuyNowWhatsApp}
        />
      )}

      {/* 10. Slide-Over Cart Drawer (Ref: Imagen 2) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onExploreCatalog={() => {
          setIsCartOpen(false);
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 11. AI Sommelier Floating Concierge Widget */}
      <AiSommelierWidget
        catalog={PERFUMES_DATA}
        onSelectProduct={(id) => {
          setSelectedProductId(id);
        }}
      />

      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#2E1065] text-[#D4AF37] border border-[#D4AF37]/40 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-[#1E0741] flex items-center justify-center flex-shrink-0">
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
