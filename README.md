# 🌟 AUREA LUMINA — Maison de Haute Parfumerie

Una experiencia digital web de alta perfumería artesanal y fragancias de nicho. Desarrollada con estética editorial de lujo en modo oscuro (obsidiana y oro champán), tipografía refinada (*Playfair Display*, *Cormorant Garamond* y *Montserrat*), micro-animaciones interactivas y arquitectura modular en Vanilla HTML5, CSS3 y JavaScript.

---

## ✨ Características Principales

1. **Estética Visual de Lujo (*Dark Editorial Luxury*)**:
   - Paleta de colores inspirada en la alta perfumería francesa: fondo obsidiana profundo (`#0a0b0e`), acabados en pan de oro (`#d4af37`), champán suave y reflejos en cristal esmerilado con efecto *glassmorphism* (`backdrop-filter: blur(20px)`).
   - Fotografía de producto generada en alta definición con frascos de cristal facetado, destellos lumínicos y detalles de lujo.

2. **Descubridor Olfativo Interactivo ("Encuentra tu Firma")**:
   - Cuestionario sensorial en 3 etapas: Atmósfera deseada, Acordes olfativos predilectos e Intensidad de fijación.
   - Algoritmo en tiempo real que recomienda la fragancia ideal con notas desglosadas y botón de compra directa.

3. **Catálogo Exclusivo y Filtrado Dinámico**:
   - Filtros por familia olfativa: *Ámbar & Oriental*, *Maderas & Oud*, *Flores de Grasse*, *Cítrico Solar*.
   - Buscador predictivo en vivo por notas olfativas (oud, rosa, bergamota, vainilla, ámbar) o nombre.

4. **Pirámide Olfativa Interactiva**:
   - Desglose visual de las fases de evaporación: **Notas de Salida** (primeros 30 min), **Notas de Corazón** (2 a 6 horas) y **Notas de Fondo** (8 a 24+ horas).

5. **Modal de Vista Rápida (*Quick View*)**:
   - Inspección detallada del frasco, notas olfativas y selector dinámico de formato (100 ml vs. 50 ml) con cálculo de precio proporcional en vivo.

6. **Bolsa de Compras Desplegable (*Cart Drawer*)**:
   - Despliegue lateral con animación fluida.
   - Control de cantidades (+ / -), eliminación de productos y persistencia con `localStorage`.
   - Sistema de cupones de cortesía (prueba con `LUMINA10` para un 10% de descuento o `CONCIERGE` para 15%).
   - Simulación de compra con modal de confirmación y número de pedido oficial.

7. **Selector Multidivisa en Tiempo Real**:
   - Conversión instantánea de precios entre **USD ($)**, **EUR (€)** y **MXN ($)**.

8. **Optimización SEO y Semántica**:
   - Estructura semántica HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
   - Meta etiquetas OpenGraph, Twitter Cards, títulos y descripciones optimizadas.
   - IDs únicos en todos los elementos interactivos para pruebas automáticas.

---

## 📁 Estructura del Repositorio

```text
perfumes/
├── .git/                      # Repositorio Git inicializado
├── .gitignore                 # Exclusiones de control de versiones
├── index.html                 # Estructura semántica y componentes de la web
├── styles.css                 # Sistema de diseño, temas, responsive y efectos
├── app.js                     # Motor interactivo en Vanilla JavaScript
├── README.md                  # Documentación del proyecto
└── assets/
    └── images/
        ├── perfume_hero.jpg   # Frasco insignia Aurea Lumina
        ├── perfume_oud.jpg    # Aethel Agar Oud (Maderas & Humo)
        ├── perfume_rose.jpg   # Éclat de Rose (Flores de Grasse)
        └── perfume_solaris.jpg# Aurosa Bergamotto (Cítricos Solares)
```

---

## 🚀 Cómo Ejecutar el Proyecto

Puedes abrir la web directamente en tu navegador o a través de un servidor local:

### Opción 1: Apertura Directa
Abre el archivo `index.html` en cualquier navegador web moderno (Google Chrome, Edge, Firefox, Safari).

### Opción 2: Con un Servidor Local (Recomendado)
Usando Node.js / npx:
```bash
npx serve perfumes
```
O usando Python 3:
```bash
cd perfumes
python -m http.server 3000
```
Y abre en tu navegador: `http://localhost:3000`

---

## 📜 Licencia & Créditos
Creado para la experiencia de alta perfumería **AUREA LUMINA**. Todos los derechos reservados 2026.
