# 🌙 SULTAN PARFUMS — Boutique de Alta Perfumería Árabe

Una aplicación web de comercio electrónico de alta conversión especializada en **Perfumes Árabes 100% Originales con Sello Holográfico y Batch Code verificable** (Lattafa, Armaf, Afnan, Al Haramain, Rasasi, Bharara).

Diseñada bajo el concepto **"Lujo Oriental Accesible"**:
- **Paleta cromática:** Crema Arena Suave (`#FAF7F2`), Púrpura Imperial Profundo (`#2E1065`) y Dorado Árabe (`#D4AF37`).
- **Arquitectura UI/UX:** Inspirada fielmente en la distribución de 7 layouts e-commerce de alto rendimiento: Mega-menú fotográfico en hover, selector visual por "Vibe", fichas olfativas con pirámide y medidores de duración, carrito lateral con barra de envío gratis, checkout directo a WhatsApp Business y Asistente Sommelier IA.
- **Full-Stack:** Compatible de forma nativa con **Next.js (App Router) y Vercel**, incluyendo endpoints de API Route Handlers.

---

## 🚀 Despliegue en Vercel (1-Click Ready)

Este repositorio está 100% optimizado para **Vercel** con detección automática de Next.js:

1. Sube este repositorio a tu cuenta de **GitHub**.
2. En [Vercel](https://vercel.com), haz clic en **"Add New Project"** e importa el repositorio `perfumes`.
3. Vercel detectará automáticamente:
   - **Framework Preset:** `Next.js`
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
4. *(Opcional)* En las variables de entorno de Vercel (**Environment Variables**), agrega:
   - `GEMINI_API_KEY`: Tu clave de Google Gemini API para potenciar las respuestas del Sommelier IA en `/api/chat`. Si no se define, el sistema utiliza el motor sommelier semántico local incorporado.
5. Haz clic en **Deploy**. ¡Tu boutique estará en vivo con HTTPS y CDN global en segundos!

---

## 💎 Características y Módulos Implementados

### 1. Header Inteligente y Mega-Menú Visual (Ref: Imagen 1)
- **Top Bar Promocional:** Aviso de garantía holográfica, envíos asegurados y línea de soporte WhatsApp.
- **Navbar Sticky:** Logo de la marca, buscador predictivo en tiempo real y contador de carrito animado.
- **Mega-Menú en Hover:** 
  - Columnas de Marcas oficiales y Acordes olfativos a la izquierda.
  - **2 Banners fotográficos promocionales a la derecha**: Discovery Kit de Decants 10ml y Club de Nuit Urban Man Elixir en rocas volcánicas.

### 2. Buscador Visual por "Vibe" (Principiantes)
- Botones píldora para filtrar sin necesidad de conocer notas técnicas:
  - 🔥 *Modo Bestia (+12h)*
  - 🍯 *Dulces y Gourmand*
  - 💼 *Frescos para Oficina / Diario*
  - 🌙 *Seducción y Fiesta Nocturna*
  - 👑 *Los Más Virales de TikTok*

### 3. Ficha de Producto Especializada (PDP) & Modal Lightbox (Ref: Imágenes 5, 6 y 7)
- **Galería con Lightbox a Pantalla Completa:** Vista detallada en fondo oscuro con flechas de navegación y carrusel de miniaturas (Ref: Imagen 5).
- **Selector de Formato:** Botones para alternar entre `Botella Completa 100ml` y `Decant (Muestra 10ml)` con ajuste automático de precios y etiqueta de ahorro.
- **Medidores de Rendimiento Visual (Barras de progreso):** Duración en piel (12h+ Modo Bestia), Proyección/Estela y Estación ideal.
- **Referencia Olfativa ("Te encantará si te gusta..."):** ADN y parecidos con perfumes famosos de diseñador (*Angels' Share*, *Creed Aventus*, *Sauvage Elixir*, *Coco Mademoiselle*, *Erba Pura*, *Ultra Male*).
- **Tabla Técnica Estructurada (Ref: Imagen 7):** Notas de salida, corazón, fondo, concentración, batch code verificado y país de origen.
- **Botones de Conversión Rápida:** `Agregar al Carrito` y `Comprar Ahora por WhatsApp`.

### 4. Carrito Lateral Desplegable & Checkout a WhatsApp Business (Ref: Imagen 2)
- Cajón lateral con overlay translúcido.
- **Barra de progreso de incentivo:** Calcula en vivo cuánto le falta al cliente para obtener *Envío Gratis y un Decant de cortesía*.
- Control de cantidades (+ / -) y desglose de ahorro en negativo.
- **Botón "Confirmar Pedido por WhatsApp":** Construye automáticamente el enlace `https://wa.me/...` con el mensaje formateado, listado de productos, presentaciones, cantidades, total y datos de envío del cliente.

### 5. Sommelier de Perfumes IA (Ref: Widget Imágenes 1-4)
- Avatar flotante animado en la esquina inferior derecha con burbuja de saludo no intrusiva.
- Endpoint `/api/chat` en Next.js con soporte para Google Gemini API y motor semántico de respaldo.
- Respuestas especializadas con tarjetas de recomendación interactivas para agregar al carrito o abrir la ficha directamente.
- Enlace directo para escalar la conversación con un asesor humano en WhatsApp.

---

## 🗂️ Estructura del Repositorio

```text
perfumes/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js       # Route Handler de Next.js para el Sommelier IA
│   ├── layout.jsx             # Root layout con metadatos y fuentes
│   └── page.jsx               # Página de inicio Next.js
├── src/
│   ├── components/
│   │   ├── TopBar.jsx
│   │   ├── Header.jsx         # Mega-menú con 2 banners fotográficos
│   │   ├── HeroBanner.jsx
│   │   ├── VibeSelector.jsx   # Filtros rápidos por estilo
│   │   ├── BestSellersTabs.jsx# Tabs dinámicos y cuadrícula
│   │   ├── ProductCard.jsx    # Tarjeta con 3 notas e iconos
│   │   ├── CrossSelling.jsx   # Carrusel "Personas que vieron este producto..."
│   │   ├── ProductDetailModal.jsx # Ficha técnica, barras de duración y selector 100ml/10ml
│   │   ├── LightboxModal.jsx  # Modal fullscreen oscuro
│   │   ├── CartDrawer.jsx     # Slide-over cart con checkout WhatsApp
│   │   ├── AiSommelierWidget.jsx # Widget flotante de IA
│   │   ├── NewsletterBanner.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── perfumes.js        # Catálogo de 8 perfumes árabes con notas reales
│   ├── App.jsx                # Componente principal interactivo
│   ├── index.css              # Tailwind CSS v4 y tokens de diseño
│   └── main.jsx               # Entry para Vite
├── public/
│   └── assets/
│       └── images/            # Fotografías de producto de alta resolución
├── next.config.mjs            # Configuración de Next.js
├── postcss.config.mjs         # Configuración PostCSS / Tailwind
├── vercel.json                # Configuración de despliegue Vercel
├── vite.config.js             # Configuración Vite alternativa
└── package.json
```

---

## 🛠️ Comandos de Ejecución Local

### Con Next.js (Recomendado para Vercel)
```bash
# Modo desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción local
npm run start
```
Abre en tu navegador: `http://localhost:3000`

### Con Vite (Alternativa ultra-rápida)
```bash
npm run dev:vite
```
Abre en tu navegador: `http://localhost:5173`

---

## 📜 Licencia & Autenticidad
Creado para **SULTAN PARFUMS**. Todos los derechos reservados 2026. Distribución autorizada de perfumería oriental con sello holográfico.
