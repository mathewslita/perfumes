/**
 * AUREA LUMINA - Haute Parfumerie Engine
 * Modern Vanilla JS architecture: Catalog, Scent Finder Quiz, Cart Drawer, Modal & Currencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // State Management
  const state = {
    currency: 'USD',
    rates: {
      USD: { rate: 1, symbol: '$', suffix: 'USD' },
      EUR: { rate: 0.92, symbol: '€', suffix: 'EUR' },
      MXN: { rate: 18.5, symbol: '$', suffix: 'MXN' }
    },
    cart: JSON.parse(localStorage.getItem('aurea_cart') || '[]'),
    activeFilter: 'all',
    searchQuery: '',
    discountPercent: 0,
    appliedPromo: null,
    selectedProductForModal: null,
    selectedModalSize: '100ml',
    quizAnswers: {
      atmosphere: null,
      family: null,
      intensity: null
    }
  };

  // Products Database
  const products = [
    {
      id: 'aurea-lumina',
      name: 'Aurea Lumina',
      subtitle: "L'Or Impérial",
      category: 'oriental',
      badge: 'Insignia Maison',
      concentration: 'Extrait de Parfum (32%)',
      priceUSD: 260,
      image: './assets/images/perfume_hero.jpg',
      preview: 'Ámbar resplandeciente, azafrán real de Persia e incienso de Omán bañado en un halo dorado inigualable.',
      notes: {
        top: 'Bergamota de Calabria, Mandarina Solar, Cardamomo de Ceilán',
        heart: 'Azafrán Dorado, Azahar de Túnez, Rosa de Grasse',
        base: 'Ámbar Gris Macerado, Resina de Benjuí, Oud Blanco'
      },
      chips: ['Ámbar Dorado', 'Azafrán Real', 'Oud Blanco']
    },
    {
      id: 'aethel-agar-oud',
      name: 'Aethel Agar Oud',
      subtitle: 'Nuit Mystique',
      category: 'wood',
      badge: 'Cosecha Limitada',
      concentration: 'Extrait de Parfum (30%)',
      priceUSD: 310,
      image: './assets/images/perfume_oud.jpg',
      preview: 'Madera sagrada de agar silvestre madurada durante 20 años con acordes de cuero toscano y resina ahumada.',
      notes: {
        top: 'Pimienta Negra de Madagascar, Nuez Moscada, Ciprés Negro',
        heart: 'Cuero Toscano, Madera de Gaiac, Papiro Egipcio',
        base: 'Oud Puro de Assam, Pachulí Oscuro, Almizcle Ahumado'
      },
      chips: ['Oud de Assam', 'Cuero Toscano', 'Humo Sagrado']
    },
    {
      id: 'eclat-de-rose',
      name: 'Éclat de Rose',
      subtitle: 'Maison de Luxe',
      category: 'floral',
      badge: 'Cosecha al Alba',
      concentration: 'Eau de Parfum Intense',
      priceUSD: 240,
      image: './assets/images/perfume_rose.jpg',
      preview: 'Rosas centifolia cosechadas al amanecer en Grasse con dewdrops de lichi dulce y terciopelo floral.',
      notes: {
        top: 'Rocío de Lichi, Pera Williams, Mandarina Rosa',
        heart: 'Rosa Damascena Centifolia, Peonía Real, Jazmín Sambac',
        base: 'Almizcle de Cachemira, Cedro del Atlas, Ámbar Cristal'
      },
      chips: ['Rosa de Grasse', 'Lichi Dulce', 'Almizcle Seda']
    },
    {
      id: 'aurosa-bergamotto',
      name: 'Aurosa Bergamotto',
      subtitle: 'Soleil Méditerranéen',
      category: 'citrus',
      badge: 'Edición Solar',
      concentration: 'Eau de Parfum Concentrée',
      priceUSD: 220,
      image: './assets/images/perfume_solaris.jpg',
      preview: 'El resplandor del verano italiano en la costa Amalfitana. Cítricos nobles prensados en frío y neroli puro.',
      notes: {
        top: 'Bergamotto d’Oro de Calabria, Limón de Amalfi, Sal Marina',
        heart: 'Neroli de Sicilia, Flor de Azahar, Romero Silvestre',
        base: 'Vetiver de Haití, Madera de Cedro Flotante, Ámbar Solar'
      },
      chips: ['Bergamota Calabria', 'Neroli Silvestre', 'Brisa Marina']
    }
  ];

  // Helper: Format Price by Currency
  function formatPrice(usdAmount) {
    const { rate, symbol, suffix } = state.rates[state.currency];
    const converted = usdAmount * rate;
    return `${symbol}${Math.round(converted).toLocaleString()} ${suffix}`;
  }

  // Render Product Cards
  const productsGrid = document.getElementById('products-grid');

  function renderProducts() {
    if (!productsGrid) return;

    let filtered = products.filter(p => {
      const matchesCategory = (state.activeFilter === 'all') || (p.category === state.activeFilter);
      const matchesSearch = !state.searchQuery || 
        p.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        p.preview.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        p.chips.some(c => c.toLowerCase().includes(state.searchQuery.toLowerCase())) ||
        Object.values(p.notes).some(n => n.toLowerCase().includes(state.searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i data-lucide="compass" style="width: 44px; height: 44px; color: var(--gold-dim); margin-bottom: 12px;"></i>
          <h3 style="font-family: var(--font-serif); color: var(--text-main); font-size: 1.4rem;">No encontramos fragancias con ese criterio</h3>
          <p style="font-size: 0.9rem; margin-top: 8px;">Prueba buscando notas como "oud", "rosa", "bergamota" o "ámbar".</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <article class="product-card" data-id="${item.id}">
        <span class="product-badge">${item.badge}</span>
        <div class="product-thumb-wrap">
          <img src="${item.image}" alt="${item.name} frasco de lujo" class="product-thumb" loading="lazy">
          <div class="product-quick-view-overlay">
            <button class="btn btn-secondary btn-sm btn-quick-view" data-id="${item.id}">
              <i data-lucide="eye"></i> Vista Rápida
            </button>
          </div>
        </div>
        <div class="product-info">
          <span class="product-category">${item.concentration}</span>
          <h3 class="product-name">${item.name}</h3>
          <p class="product-olfactory-preview">${item.preview}</p>
          <div class="product-notes-chips">
            ${item.chips.map(chip => `<span class="note-chip">${chip}</span>`).join('')}
          </div>
          <div class="product-bottom-row">
            <span class="product-price">${formatPrice(item.priceUSD)}</span>
            <button class="btn-add-cart-icon btn-direct-add" data-id="${item.id}" aria-label="Añadir ${item.name} a la bolsa">
              <i data-lucide="plus"></i>
            </button>
          </div>
        </div>
      </article>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Attach Event Listeners to cards
    document.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openQuickViewModal(id);
      });
    });

    document.querySelectorAll('.btn-direct-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        addToCart(id, '100ml', 1);
      });
    });
  }

  // Filter Buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeFilter = btn.getAttribute('data-filter');
      renderProducts();
    });
  });

  // Search Functionality
  const searchToggleBtn = document.getElementById('btn-search-toggle');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('site-search-input');
  const clearSearchBtn = document.getElementById('btn-clear-search');

  if (searchToggleBtn && searchOverlay) {
    searchToggleBtn.addEventListener('click', () => {
      searchOverlay.classList.toggle('active');
      if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      renderProducts();
    });
  }

  // Currency Selector
  const currencySelect = document.getElementById('currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      renderProducts();
      renderCart();
      if (state.selectedProductForModal) {
        updateModalPrice();
      }
      showToast(`Moneda cambiada a ${state.currency}`);
    });
  }

  // Announcement Bar Close
  const closeAnnouncementBtn = document.getElementById('btn-close-announcement');
  const announcementBar = document.getElementById('announcement-bar');
  if (closeAnnouncementBtn && announcementBar) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.style.display = 'none';
    });
  }

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('btn-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    // Close nav on click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // ==========================================================================
  // FRAGRANCE FINDER QUIZ
  // ==========================================================================
  const quizStep1 = document.getElementById('quiz-step-1');
  const quizStep2 = document.getElementById('quiz-step-2');
  const quizStep3 = document.getElementById('quiz-step-3');
  const quizResult = document.getElementById('quiz-result');
  const progressSteps = document.querySelectorAll('.progress-step');

  function setQuizStep(stepNumber) {
    [quizStep1, quizStep2, quizStep3, quizResult].forEach(el => el.classList.add('hidden'));
    progressSteps.forEach(ps => {
      const stepIdx = parseInt(ps.getAttribute('data-step'), 10);
      ps.classList.toggle('active', stepIdx === stepNumber);
    });

    if (stepNumber === 1) quizStep1.classList.remove('hidden');
    if (stepNumber === 2) quizStep2.classList.remove('hidden');
    if (stepNumber === 3) quizStep3.classList.remove('hidden');
    if (stepNumber === 4) quizResult.classList.remove('hidden');
  }

  document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget;
      const attr = card.getAttribute('data-attr');
      const val = card.getAttribute('data-val');
      state.quizAnswers[attr] = val;

      if (attr === 'atmosphere') {
        setQuizStep(2);
      } else if (attr === 'family') {
        setQuizStep(3);
      } else if (attr === 'intensity') {
        calculateQuizResult();
        setQuizStep(4);
      }
    });
  });

  function calculateQuizResult() {
    // Determine recommended fragrance based on user answers
    let targetId = 'aurea-lumina';
    const { atmosphere, family } = state.quizAnswers;

    if (family === 'oud' || atmosphere === 'noche') {
      targetId = 'aethel-agar-oud';
    } else if (family === 'rose' || atmosphere === 'romance') {
      targetId = 'eclat-de-rose';
    } else if (family === 'citrus' || atmosphere === 'solar') {
      targetId = 'aurosa-bergamotto';
    } else {
      targetId = 'aurea-lumina';
    }

    const recommended = products.find(p => p.id === targetId);
    if (!recommended) return;

    document.getElementById('quiz-result-img').src = recommended.image;
    document.getElementById('quiz-result-family').textContent = recommended.concentration;
    document.getElementById('quiz-result-title').textContent = recommended.name;
    document.getElementById('quiz-result-desc').textContent = recommended.preview;
    document.getElementById('quiz-result-notes').innerHTML = recommended.chips.map(c => `<span>${c}</span>`).join(' • ');
    document.getElementById('quiz-result-price').textContent = formatPrice(recommended.priceUSD);

    // Setup action
    const btnAddQuiz = document.getElementById('btn-quiz-add-cart');
    btnAddQuiz.onclick = () => {
      addToCart(recommended.id, '100ml', 1);
      openCartDrawer();
    };
  }

  const btnQuizReset = document.getElementById('btn-quiz-reset');
  if (btnQuizReset) {
    btnQuizReset.addEventListener('click', () => {
      state.quizAnswers = { atmosphere: null, family: null, intensity: null };
      setQuizStep(1);
    });
  }

  // ==========================================================================
  // QUICK VIEW MODAL
  // ==========================================================================
  const productModal = document.getElementById('product-modal');
  const btnModalClose = document.getElementById('btn-modal-close');
  const modalImg = document.getElementById('modal-product-img');
  const modalCat = document.getElementById('modal-product-category');
  const modalName = document.getElementById('modal-product-name');
  const modalPrice = document.getElementById('modal-product-price');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalTop = document.getElementById('modal-notes-top');
  const modalHeart = document.getElementById('modal-notes-heart');
  const modalBase = document.getElementById('modal-notes-base');
  const btnModalAddCart = document.getElementById('btn-modal-add-cart');
  const sizeBtns = document.querySelectorAll('.size-btn');

  function openQuickViewModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    state.selectedProductForModal = product;
    state.selectedModalSize = '100ml';

    modalImg.src = product.image;
    modalCat.textContent = product.concentration;
    modalName.textContent = product.name;
    modalDesc.textContent = product.preview;
    modalTop.textContent = product.notes.top;
    modalHeart.textContent = product.notes.heart;
    modalBase.textContent = product.notes.base;

    sizeBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-size') === '100ml');
    });

    updateModalPrice();
    productModal.classList.remove('hidden');
  }

  function updateModalPrice() {
    if (!state.selectedProductForModal) return;
    const multiplier = state.selectedModalSize === '50ml' ? 0.65 : 1;
    const calculatedPrice = state.selectedProductForModal.priceUSD * multiplier;
    modalPrice.textContent = `${formatPrice(calculatedPrice)} (${state.selectedModalSize})`;
  }

  sizeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedModalSize = btn.getAttribute('data-size');
      updateModalPrice();
    });
  });

  if (btnModalClose) {
    btnModalClose.addEventListener('click', () => {
      productModal.classList.add('hidden');
    });
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        productModal.classList.add('hidden');
      }
    });
  }

  if (btnModalAddCart) {
    btnModalAddCart.addEventListener('click', () => {
      if (!state.selectedProductForModal) return;
      addToCart(state.selectedProductForModal.id, state.selectedModalSize, 1);
      productModal.classList.add('hidden');
      openCartDrawer();
    });
  }

  // ==========================================================================
  // SHOPPING CART DRAWER
  // ==========================================================================
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBackdrop = document.getElementById('cart-backdrop');
  const btnCartToggle = document.getElementById('btn-cart-toggle');
  const btnCloseCart = document.getElementById('btn-close-cart');
  const cartBadge = document.getElementById('cart-badge');
  const cartDrawerCount = document.getElementById('cart-drawer-count');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartEmptyMessage = document.getElementById('cart-empty-message');
  const cartSubtotalVal = document.getElementById('cart-subtotal-val');
  const cartDiscountRow = document.getElementById('cart-discount-row');
  const cartDiscountVal = document.getElementById('cart-discount-val');
  const cartTotalVal = document.getElementById('cart-total-val');
  const btnApplyPromo = document.getElementById('btn-apply-promo');
  const promoInput = document.getElementById('promo-input');
  const btnCartCheckout = document.getElementById('btn-cart-checkout');
  const checkoutModal = document.getElementById('checkout-modal');
  const btnCloseCheckout = document.getElementById('btn-close-checkout');

  function openCartDrawer() {
    cartDrawer.classList.add('active');
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('active');
  }

  if (btnCartToggle) btnCartToggle.addEventListener('click', openCartDrawer);
  if (btnCloseCart) btnCloseCart.addEventListener('click', closeCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);

  function saveCart() {
    localStorage.setItem('aurea_cart', JSON.stringify(state.cart));
    renderCart();
  }

  function addToCart(productId, size = '100ml', quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId && item.size === size);
    const unitPriceUSD = size === '50ml' ? Math.round(product.priceUSD * 0.65) : product.priceUSD;

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        image: product.image,
        size: size,
        priceUSD: unitPriceUSD,
        quantity: quantity
      });
    }

    saveCart();
    showToast(`"${product.name} (${size})" añadido a tu bolsa de alta perfumería.`);
  }

  function updateItemQty(index, delta) {
    if (!state.cart[index]) return;
    state.cart[index].quantity += delta;
    if (state.cart[index].quantity <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
  }

  function removeItem(index) {
    if (!state.cart[index]) return;
    state.cart.splice(index, 1);
    saveCart();
  }

  function renderCart() {
    const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;
    cartDrawerCount.textContent = totalCount;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="cart-empty-state">
          <i data-lucide="sparkles" class="empty-icon"></i>
          <h4>Tu bolsa está vacía</h4>
          <p>Permite que el aroma indicado encuentre su lugar en tu colección.</p>
          <a href="#coleccion" class="btn btn-secondary btn-sm" id="btn-cart-empty-link">Descubrir Frascos</a>
        </div>
      `;
      cartSubtotalVal.textContent = formatPrice(0);
      cartDiscountRow.classList.add('hidden');
      cartTotalVal.textContent = formatPrice(0);
      if (window.lucide) window.lucide.createIcons();

      const emptyLink = document.getElementById('btn-cart-empty-link');
      if (emptyLink) emptyLink.onclick = closeCartDrawer;
      return;
    }

    let subtotalUSD = 0;
    cartItemsList.innerHTML = state.cart.map((item, index) => {
      const itemTotalUSD = item.priceUSD * item.quantity;
      subtotalUSD += itemTotalUSD;
      return `
        <div class="cart-item-row">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-details">
            <h5 class="cart-item-name">${item.name}</h5>
            <span class="cart-item-size">Formato: ${item.size}</span>
            <div class="cart-item-price">${formatPrice(item.priceUSD)} c/u</div>
          </div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button class="qty-btn btn-minus" data-idx="${index}">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn btn-plus" data-idx="${index}">+</button>
            </div>
            <button class="btn-remove-item" data-idx="${index}">Quitar</button>
          </div>
        </div>
      `;
    }).join('');

    // Attach actions
    document.querySelectorAll('.btn-minus').forEach(b => {
      b.onclick = () => updateItemQty(parseInt(b.getAttribute('data-idx'), 10), -1);
    });
    document.querySelectorAll('.btn-plus').forEach(b => {
      b.onclick = () => updateItemQty(parseInt(b.getAttribute('data-idx'), 10), 1);
    });
    document.querySelectorAll('.btn-remove-item').forEach(b => {
      b.onclick = () => removeItem(parseInt(b.getAttribute('data-idx'), 10));
    });

    // Discount calculations
    const discountUSD = subtotalUSD * (state.discountPercent / 100);
    const totalUSD = subtotalUSD - discountUSD;

    cartSubtotalVal.textContent = formatPrice(subtotalUSD);
    if (state.discountPercent > 0) {
      cartDiscountRow.classList.remove('hidden');
      cartDiscountVal.textContent = `-${formatPrice(discountUSD)}`;
    } else {
      cartDiscountRow.classList.add('hidden');
    }
    cartTotalVal.textContent = formatPrice(totalUSD);

    if (window.lucide) window.lucide.createIcons();
  }

  // Promo Code Handler
  if (btnApplyPromo && promoInput) {
    btnApplyPromo.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'LUMINA10') {
        state.discountPercent = 10;
        state.appliedPromo = code;
        showToast('Código "LUMINA10" aplicado: 10% de cortesía concedido.');
      } else if (code === 'CONCIERGE') {
        state.discountPercent = 15;
        state.appliedPromo = code;
        showToast('Trato Concierge activado: 15% de cortesía concedido.');
      } else {
        showToast('Código no válido o expirado. Prueba con LUMINA10');
      }
      renderCart();
    });
  }

  // Checkout Handler
  if (btnCartCheckout) {
    btnCartCheckout.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Añade al menos un frasco a tu bolsa antes de finalizar.');
        return;
      }

      const randomOrderId = 'AL-' + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('order-reference').textContent = `#${randomOrderId}`;

      const summaryHtml = `
        <div style="margin-bottom: 8px; font-weight: 600; color: var(--gold-light);">Resumen de Selección:</div>
        ${state.cart.map(i => `<div>• ${i.name} (${i.size}) x${i.quantity}</div>`).join('')}
        <div style="margin-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 6px;">
          <strong>Total Pagado:</strong> ${cartTotalVal.textContent}
        </div>
      `;
      document.getElementById('order-summary-box').innerHTML = summaryHtml;

      // Clear Cart
      state.cart = [];
      state.discountPercent = 0;
      saveCart();
      closeCartDrawer();

      // Show receipt modal
      checkoutModal.classList.remove('hidden');
      if (window.lucide) window.lucide.createIcons();
    });
  }

  if (btnCloseCheckout && checkoutModal) {
    btnCloseCheckout.addEventListener('click', () => {
      checkoutModal.classList.add('hidden');
    });
  }

  // ==========================================================================
  // NEWSLETTER HANDLER
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterEmail = document.getElementById('newsletter-email');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (email) {
        showToast(`Bienvenido al Círculo Privado de Aurea Lumina.`);
        newsletterEmail.value = '';
      }
    });
  }

  // ==========================================================================
  // TOAST SYSTEM
  // ==========================================================================
  const toastContainer = document.getElementById('toast-container');
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="sparkles"></i><span>${message}</span>`;
    toastContainer.appendChild(toast);

    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => toast.remove(), 400);
    }, 3800);
  }

  // Initial render
  renderProducts();
  renderCart();
});
