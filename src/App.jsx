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
import NewsletterBanner from './components/NewsletterBanner';
import Footer from './components/Footer';
import { PERFUMES_DATA } from './data/perfumes';
import { Sparkles, ShieldCheck, Check } from 'lucide-react';

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

  // Filtered Products Logic
  const filteredProducts = PERFUMES_DATA.filter(p => {
    // Brand filter from mega menu
    if (selectedBrand && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
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
        }}
        onSelectBrand={(brand) => {
          setSelectedBrand(brand);
          setActiveCategory('all');
        }}
        onSearch={(query) => setSearchQuery(query)}
        searchQuery={searchQuery}
        onOpenProduct={(id) => setSelectedProductId(id)}
      />

      {/* Active Filter Notice if brand or search is active */}
      {(selectedBrand || searchQuery || activeCategory !== 'all' || activeVibe !== 'all') && (
        <div className="bg-purple-100/70 border-b border-purple-200/80 py-2.5 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#2E1065]">Filtro activo:</span>
              {selectedBrand && (
                <span className="bg-[#2E1065] text-[#D4AF37] px-2.5 py-0.5 rounded-full font-bold">
                  Casa: {selectedBrand}
                </span>
              )}
              {activeCategory !== 'all' && (
                <span className="bg-purple-200 text-[#2E1065] px-2.5 py-0.5 rounded-full font-bold">
                  Categoría: {activeCategory}
                </span>
              )}
              {activeVibe !== 'all' && (
                <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full font-bold">
                  Vibe seleccionada
                </span>
              )}
              {searchQuery && (
                <span className="bg-white text-gray-800 px-2.5 py-0.5 rounded-full border border-gray-200">
                  Búsqueda: "{searchQuery}"
                </span>
              )}
              <span className="text-gray-500 font-medium">({filteredProducts.length} fragancias encontradas)</span>
            </div>
            <button
              onClick={() => {
                setSelectedBrand(null);
                setActiveCategory('all');
                setActiveVibe('all');
                setSearchQuery('');
              }}
              className="text-xs text-[#2E1065] font-bold hover:underline"
            >
              Limpiar filtros &times;
            </button>
          </div>
        </div>
      )}

      {/* 3. Hero Banner (Boutique de Lujo Oriental Accesible) */}
      <HeroBanner
        onExplore={() => {
          const el = document.getElementById('los-mas-vendidos');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenAiModal={() => {
          // Open AI Widget
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
        />

        {/* 6. Cross-Selling Carousel (Ref: Imagen 3) */}
        <CrossSelling
          products={PERFUMES_DATA}
          onOpenProduct={(id) => setSelectedProductId(id)}
          onAddToCart={handleAddToCart}
        />

        {/* 7. Newsletter Banner (Ref: Imagen 3) */}
        <NewsletterBanner />
      </main>

      {/* 8. Footer (Ref: Imagen 3) */}
      <Footer 
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          window.scrollTo({ top: 400, behavior: 'smooth' });
        }} 
      />

      {/* 9. Product Detail Modal / PDP (Ref: Imagen 5, 6, 7) */}
      {openedProduct && (
        <ProductDetailModal
          product={openedProduct}
          onClose={() => setSelectedProductId(null)}
          onAddToCart={handleAddToCart}
          onBuyNowWhatsApp={handleBuyNowWhatsApp}
        />
      )}

      {/* 10. Slide-Over Cart Drawer with WhatsApp Direct Checkout (Ref: Imagen 2) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCart([])}
      />

      {/* 11. AI Sommelier Floating Avatar Widget (Ref: Imagen 1, 2, 3, 4) */}
      <AiSommelierWidget
        onOpenProduct={(id) => setSelectedProductId(id)}
        onAddToCart={handleAddToCart}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-24 right-5 z-50 bg-[#1E0741] text-[#F7E7A9] border border-[#D4AF37]/70 py-3 px-5 rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top-4 duration-300">
          <Sparkles className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
