/**
 * Catálogo Oficial ARKANO PERFUMERÍA
 * Colecciones:
 *  - Perfumes Árabes (Dubái & Oriente)
 *  - Perfumes de Diseñador (Alta Costura Internacional)
 * Con integración profunda a especificaciones técnicas y enlaces inteligentes a Fragrantica.
 */

export const COLLECTIONS_DATA = {
  arabes: {
    id: 'arabes',
    title: 'Perfumes Árabes',
    subtitle: 'Alta Perfumería de Dubái & Casas Orientales Exclusivas',
    phrase: 'El misticismo milenario de Oriente en su máxima expresión: concentración pura, estela imponente y fijación legendaria que cautiva los sentidos.',
    badge: '👑 Colección Árabe Dubái',
    accentColor: '#C9A961',
    features: [
      'Concentración pura de 18% a 28% en aceites de grado nicho',
      'Fijación titánica de 12 a 16+ horas comprobadas',
      'Sello holográfico tridimensional y Batch Code verificado de Dubái'
    ]
  },
  disenador: {
    id: 'disenador',
    title: 'Perfumes de Diseñador',
    subtitle: 'Alta Costura Internacional & Casas Icónicas de Lujo',
    phrase: 'La cumbre de la sofisticación y el lujo global: creaciones maestras de las casas de moda más prestigiosas del mundo, emblema de elegancia atemporal y distinción.',
    badge: '✨ Colección Diseñador Alta Costura',
    accentColor: '#A58B4E',
    features: [
      'Creaciones icónicas de las casas maestras de París, Milán y Nueva York',
      'Balance olfativo perfecto de máxima sofisticación y estatus',
      'Frascos sellados de origen con trazabilidad oficial garantizada'
    ]
  }
};

export const PERFUMES_DATA = [
  // ==================== COLECCIÓN DISEÑADOR ====================
  {
    id: 'dior-sauvage-elixir',
    name: 'Sauvage Elixir',
    brand: 'DIOR',
    collection: 'disenador',
    collectionBadge: 'Diseñador • Alta Costura',
    sku: 'CD-91044',
    concentration: 'Elixir Concentré',
    volume100ml: '60 ml / 2.0 FL. OZ. (Ultra Concentrado)',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 185.00,
    originalPrice100ml: 225.00,
    priceDecant: 30.00,
    originalPriceDecant: 30.00,
    discountPercent: 18,
    onSale: false,
    timeOfDay: 'noche',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 2840,
    gender: 'Para Él',
    vibes: ['🔥 Modo Bestia', '🌙 Seducción y Noche', '👑 Más Virales de TikTok'],
    vibeBadge: '⚡ Elixir Supremo',
    badgeColor: 'bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]',
    acordes: ['oud_maderas', 'especiados', 'citricos'],
    imageMain: '/assets/images/dior_sauvage_elixir.jpg',
    gallery: [
      '/assets/images/dior_sauvage_elixir.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Dior/Sauvage-Elixir-68415.html',
    fraganticaQuery: 'Dior Sauvage Elixir',
    noteIcons: [
      { emoji: '🪵', name: 'Sándalo & Regaliz' },
      { emoji: '🌿', name: 'Lavanda de Nyons' },
      { emoji: '🌶️', name: 'Canela & Nuez Moscada' }
    ],
    technicalTable: {
      headNotes: 'Canela cálida, Nuez moscada, Cardamomo de Guatemala y Pomelo luminoso',
      heartNotes: 'Lavanda silvestre de Nyons con facetas licorosas y almendradas',
      baseNotes: 'Regaliz oscuro, Sándalo noble, Ámbar cálido, Pachulí y Vetiver de Haití',
      fragranceType: 'Aromático Especiado Nocturno de Alta Concentración',
      concentrationPct: '30%+ Elixir Concentré (Nivel Monumental)',
      batchCodePrefix: 'BATCH# DIOR-ELX-2026',
      origin: 'París, Francia'
    },
    performance: {
      durationLabel: '16+ Horas en Piel (Modo Bestia)',
      durationPct: 99,
      projectionLabel: 'Nuclear / Llena Espacios con 2 Sprays',
      projectionPct: 98,
      seasonLabel: 'Otoño / Invierno / Noches de Gala',
      seasonPct: 96
    },
    inspiration: 'La cumbre de la alta perfumería masculina de la casa Dior, creada por François Demachy.',
    compositionText: 'Un elixir excepcionalmente concentrado donde el frescor emblemático de Sauvage se embriaga con un corazón de especias incandescentes, una esencia de lavanda de Nyons hecha a medida y un fondo de maderas licorosas de magnetismo arrollador.',
    historyText: 'Aclamado por la crítica internacional y por los coleccionistas de Fragrantica como una de las mejores creaciones de diseñador de la década. Rompe récords de longevidad en cualquier escenario.'
  },
  {
    id: 'bleu-de-chanel-parfum',
    name: 'Bleu de Chanel Parfum',
    brand: 'CHANEL',
    collection: 'disenador',
    collectionBadge: 'Diseñador • Alta Costura',
    sku: 'CH-49912',
    concentration: 'Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 198.00,
    originalPrice100ml: 235.00,
    priceDecant: 30.00,
    originalPriceDecant: 30.00,
    discountPercent: 16,
    onSale: false,
    timeOfDay: 'ambas',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 3150,
    gender: 'Para Él',
    vibes: ['💼 Oficina / Diario', '🌙 Seducción y Noche', '👑 Más Virales de TikTok'],
    vibeBadge: '👑 Distinción Absoluta',
    badgeColor: 'bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]',
    acordes: ['citricos', 'oud_maderas'],
    imageMain: '/assets/images/bleu_de_chanel.jpg',
    gallery: [
      '/assets/images/bleu_de_chanel.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Chanel/Bleu-de-Chanel-Parfum-49912.html',
    fraganticaQuery: 'Bleu de Chanel Parfum',
    noteIcons: [
      { emoji: '🍋', name: 'Ralladura de Limón' },
      { emoji: '🪵', name: 'Sándalo de Nueva Caledonia' },
      { emoji: '🌿', name: 'Cedro & Geranio' }
    ],
    technicalTable: {
      headNotes: 'Ralladura de limón, Bergamota brillante, Menta fresca y Artemisia',
      heartNotes: 'Lavanda aromática, Geranio silvestre, Notas verdes y Piña sutil',
      baseNotes: 'Sándalo de Nueva Caledonia, Cedro noble, Madera de ámbar, Iso E Super y Haba tonka',
      fragranceType: 'Amaderado Aromático Lujoso',
      concentrationPct: '24% Parfum de Alta Concentración',
      batchCodePrefix: 'BATCH# CH-BLU-2026',
      origin: 'Neuilly-sur-Seine, Francia'
    },
    performance: {
      durationLabel: '10 - 12 Horas en Piel',
      durationPct: 91,
      projectionLabel: 'Aura Elegante / 1.5 Metros Envolvente',
      projectionPct: 88,
      seasonLabel: 'Las 4 Estaciones / Reuniones de Éxito',
      seasonPct: 98
    },
    inspiration: 'La máxima expresión del hombre libre e inquebrantable de Chanel París, obra maestra de Olivier Polge.',
    compositionText: 'La expresión más intensa y refinada de la saga Bleu de Chanel. Se abre con una frescura vigorizante de cítricos nobles que da paso a una profundidad majestuosa de sándalo de Nueva Caledonia, cálido y cremoso.',
    historyText: 'Un icono indiscutible del guardarropa masculino contemporáneo. Considerado la cima de la elegancia versátil en la comunidad de Fragrantica.'
  },
  {
    id: 'ysl-libre-le-parfum',
    name: 'Libre Le Parfum',
    brand: 'YVES SAINT LAURENT',
    collection: 'disenador',
    collectionBadge: 'Diseñador • Alta Costura',
    sku: 'YSL-75691',
    concentration: 'Le Parfum Concentré',
    volume100ml: '90 ml / 3.0 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 178.00,
    originalPrice100ml: 215.00,
    priceDecant: 30.00,
    originalPriceDecant: 38.00,
    discountPercent: 17,
    onSale: true,
    timeOfDay: 'noche',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 2210,
    gender: 'Para Ella',
    vibes: ['🍯 Dulces y Gourmand', '🌙 Seducción y Noche', '🌸 Florales & Románticos', '👑 Más Virales de TikTok'],
    vibeBadge: '🔥 Fuego & Seducción',
    badgeColor: 'bg-amber-900 text-amber-200 border border-amber-500/50',
    acordes: ['vainilla', 'gourmand', 'rosas'],
    imageMain: '/assets/images/ysl_libre_parfum.jpg',
    gallery: [
      '/assets/images/ysl_libre_parfum.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Yves-Saint-Laurent/Libre-Le-Parfum-75691.html',
    fraganticaQuery: 'Yves Saint Laurent Libre Le Parfum',
    noteIcons: [
      { emoji: '🍯', name: 'Miel & Vainilla Bourbon' },
      { emoji: '🌸', name: 'Flor de Azahar Marroquí' },
      { emoji: '✨', name: 'Azafrán de Ourika' }
    ],
    technicalTable: {
      headNotes: 'Jengibre especiado, Azafrán de los Jardines de Ourika, Mandarina y Bergamota',
      heartNotes: 'Lavanda de Francia, Flor de azahar de Marruecos y Lavanda Diva',
      baseNotes: 'Vainilla Bourbon de Madagascar, Miel dorada, Haba tonka y Vetiver',
      fragranceType: 'Ámbar Floral Especiado Cálido',
      concentrationPct: '26% Le Parfum Concentré',
      batchCodePrefix: 'BATCH# YSL-LBR-2026',
      origin: 'París, Francia'
    },
    performance: {
      durationLabel: '12 - 14 Horas (Rastro Imborrable)',
      durationPct: 95,
      projectionLabel: 'Intensa / Calidez Hipnótica',
      projectionPct: 92,
      seasonLabel: 'Otoño / Invierno / Noches Especiales',
      seasonPct: 97
    },
    inspiration: 'Una oda a la libertad ardiente y sin concesiones de Yves Saint Laurent París.',
    compositionText: 'El Libre más cálido, goloso y voluptuoso jamás creado. La tensión emblemática entre la lavanda francesa y la flor de azahar marroquí se enciende con el azafrán rojo y un fondo untuoso de miel y vainilla bourbon.',
    historyText: 'Galardonado mundialmente y reverenciado por miles de mujeres como el perfume de noche más seductor y sofisticado de los últimos años.'
  },
  {
    id: 'tom-ford-oud-wood',
    name: 'Oud Wood',
    brand: 'TOM FORD',
    collection: 'disenador',
    collectionBadge: 'Diseñador • Private Blend',
    sku: 'TF-18260',
    concentration: 'Eau de Parfum Niche',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 265.00,
    originalPrice100ml: 320.00,
    priceDecant: 30.00,
    originalPriceDecant: 30.00,
    discountPercent: 17,
    onSale: false,
    timeOfDay: 'ambas',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 4620,
    gender: 'Unisex',
    vibes: ['🔥 Modo Bestia', '💼 Oficina / Diario', '🌙 Seducción y Noche'],
    vibeBadge: '🪵 Ícono de Nicho',
    badgeColor: 'bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]',
    acordes: ['oud_maderas', 'especiados'],
    imageMain: '/assets/images/tom_ford_oud_wood.jpg',
    gallery: [
      '/assets/images/tom_ford_oud_wood.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Tom-Ford/Oud-Wood-1826.html',
    fraganticaQuery: 'Tom Ford Oud Wood',
    noteIcons: [
      { emoji: '🪵', name: 'Oud Noble' },
      { emoji: '🌿', name: 'Palisandro & Cardamomo' },
      { emoji: '🍦', name: 'Haba Tonka & Vainilla' }
    ],
    technicalTable: {
      headNotes: 'Palo de rosa (Palisandro), Cardamomo especiado y Pimienta de Sichuan',
      heartNotes: 'Madera de Agar (Oud), Madera de Sándalo y Vetiver ahumado',
      baseNotes: 'Haba tonka, Vainilla suave y Ámbar cristalino',
      fragranceType: 'Amaderado Oriental Especiado Aristocrático',
      concentrationPct: '22% Eau de Parfum Private Blend',
      batchCodePrefix: 'BATCH# TF-OW-2026',
      origin: 'Nueva York • Suiza'
    },
    performance: {
      durationLabel: '10 - 12 Horas de Aura Exclusiva',
      durationPct: 89,
      projectionLabel: 'Moderada / Exquisita Sofisticación',
      projectionPct: 86,
      seasonLabel: 'Todo el Año / Eventos Exclusivos',
      seasonPct: 94
    },
    inspiration: 'La obra maestra que revolucionó el uso del Oud occidental en la alta perfumería contemporánea.',
    compositionText: 'Uno de los ingredientes más raros, preciosos y caros del arsenal de un perfumista: la madera de oud. Enriquecida con notas exóticas de cardamomo, sándalo y haba tonka para crear una estela de misterio ahumado y distinción incomparable.',
    historyText: 'Pieza angular de la afamada colección Private Blend de Tom Ford. Referenciado en Fragrantica como uno de los pilares aromáticos de mayor prestigio universal.'
  },
  {
    id: 'versace-eros-flame',
    name: 'Eros Flame',
    brand: 'VERSACE',
    collection: 'disenador',
    collectionBadge: 'Diseñador • Alta Costura',
    sku: 'VR-52180',
    concentration: 'Eau de Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 125.00,
    originalPrice100ml: 165.00,
    priceDecant: 30.00,
    originalPriceDecant: 38.00,
    discountPercent: 24,
    onSale: true,
    timeOfDay: 'noche',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 2980,
    gender: 'Para Él',
    vibes: ['🔥 Modo Bestia', '🌙 Seducción y Noche', '👑 Más Virales de TikTok'],
    vibeBadge: '🔥 Pasión y Fuego',
    badgeColor: 'bg-red-700 text-white',
    acordes: ['citricos', 'especiados', 'vainilla'],
    imageMain: '/assets/images/versace_eros_flame.jpg',
    gallery: [
      '/assets/images/versace_eros_flame.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Versace/Eros-Flame-52180.html',
    fraganticaQuery: 'Versace Eros Flame',
    noteIcons: [
      { emoji: '🍊', name: 'Chinotto & Mandarina' },
      { emoji: '🌶️', name: 'Pimienta de Madagascar' },
      { emoji: '🍦', name: 'Vainilla & Haba Tonka' }
    ],
    technicalTable: {
      headNotes: 'Chinotto cítrico, Mandarina de Sicilia, Limón y Pimienta negra de Madagascar',
      heartNotes: 'Pimienta silvestre, Romero fresco, Salvia y Rosa de mayo',
      baseNotes: 'Vainilla de Madagascar, Haba tonka, Cedro de Texas, Sándalo y Pachulí',
      fragranceType: 'Amaderado Especiado Cítrico Intenso',
      concentrationPct: '20% Eau de Parfum de Gran Rastro',
      batchCodePrefix: 'BATCH# VR-FLM-2026',
      origin: 'Milán, Italia'
    },
    performance: {
      durationLabel: '10 - 12 Horas en Piel',
      durationPct: 92,
      projectionLabel: 'Intensa / Proyecta a 2 Metros',
      projectionPct: 91,
      seasonLabel: 'Otoño / Invierno / Citas de Impacto',
      seasonPct: 96
    },
    inspiration: 'La exaltación de la pasión ardiente y el magnetismo italiano de la casa Versace con el sello de la Medusa de oro.',
    compositionText: 'Un contraste ardiente entre los cítricos más luminosos de Italia y las especias más nobles de Madagascar. La pimienta negra y el chinotto dan paso a un fondo dulce y seductor de vainilla y tonka.',
    historyText: 'Uno de los lanzamientos más venerados de Versace por su rendimiento superlativo y estela seductora.'
  },
  {
    id: 'xerjoff-erba-pura',
    name: 'Erba Pura',
    brand: 'XERJOFF',
    collection: 'disenador',
    collectionBadge: 'Diseñador • Nicho Supremo',
    sku: 'XJ-55157',
    concentration: 'Eau de Parfum Niche',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 275.00,
    originalPrice100ml: 340.00,
    priceDecant: 30.00,
    originalPriceDecant: 38.00,
    discountPercent: 19,
    onSale: true,
    timeOfDay: 'ambas',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 3820,
    gender: 'Unisex',
    vibes: ['🔥 Modo Bestia', '👑 Más Virales de TikTok', '🍯 Dulces y Gourmand'],
    vibeBadge: '💎 Nicho Supremo',
    badgeColor: 'bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]',
    acordes: ['citricos', 'gourmand', 'vainilla'],
    imageMain: '/assets/images/xerjoff_erba_pura.jpg',
    gallery: [
      '/assets/images/xerjoff_erba_pura.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Xerjoff/Erba-Pura-55157.html',
    fraganticaQuery: 'Xerjoff Erba Pura',
    noteIcons: [
      { emoji: '🍊', name: 'Naranja Siciliana' },
      { emoji: '🍈', name: 'Cesta de Frutas' },
      { emoji: '✨', name: 'Almizcle Blanco & Vainilla' }
    ],
    technicalTable: {
      headNotes: 'Naranja de Sicilia, Bergamota de Calabria y Limón siciliano',
      heartNotes: 'Cesta de frutas mediterráneas exóticas y acordes solares',
      baseNotes: 'Almizcle blanco puro de máxima fijación, Vainilla de Madagascar y Ámbar cálido',
      fragranceType: 'Ámbar Frutal Cítrico de Alta Pureza',
      concentrationPct: '25% Eau de Parfum Nicho Italiano',
      batchCodePrefix: 'BATCH# XJ-EP-2026',
      origin: 'Turín, Italia'
    },
    performance: {
      durationLabel: '16+ Horas (Longevidad Mítica)',
      durationPct: 99,
      projectionLabel: 'Nuclear / Rastro Inolvidable',
      projectionPct: 98,
      seasonLabel: 'Todo el Año / Eventos de Máximo Estatus',
      seasonPct: 97
    },
    inspiration: 'La cúspide de la perfumería nicho italiana: una oda al terciopelo turquesa y a las frutas más finas del Mediterráneo.',
    compositionText: 'Una canasta rebosante de frutas cítricas sicilianas envuelta en un abrazo de almizcle blanco puro y vainilla bourbon. Su frasco forrado en suave terciopelo turquesa con corona de oro representa el pináculo del lujo.',
    historyText: 'Considerada una de las fragancias nicho más legendarias y clonadas de todos los tiempos. En Fragrantica mantiene estatus de culto por su duración y presencia avasallante.'
  },

  // ==================== COLECCIÓN ÁRABE DUBÁI ====================
  {
    id: 'lattafa-khamrah',
    name: 'Khamrah',
    brand: 'LATTAFA',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'LT-88120',
    concentration: 'Eau de Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 58.00,
    originalPrice100ml: 98.00,
    priceDecant: 15.00,
    originalPriceDecant: 22.00,
    discountPercent: 41,
    onSale: true,
    timeOfDay: 'noche',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 1280,
    gender: 'Unisex',
    vibes: ['🍯 Dulces y Gourmand', '🌙 Seducción y Noche', '🔥 Modo Bestia', '👑 Más Virales de TikTok'],
    vibeBadge: '🏆 Fenómeno Mundial #1',
    badgeColor: 'bg-[#C9A961] text-[#0E0E0E] font-black',
    acordes: ['gourmand', 'vainilla', 'oud_maderas'],
    imageMain: '/assets/images/lattafa_khamrah.jpg',
    gallery: [
      '/assets/images/lattafa_khamrah.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-75805.html',
    fraganticaQuery: 'Lattafa Khamrah',
    noteIcons: [
      { emoji: '🥧', name: 'Praliné & Dátiles' },
      { emoji: '🪵', name: 'Madera de Oud' },
      { emoji: '🥃', name: 'Coñac & Canela' }
    ],
    technicalTable: {
      headNotes: 'Canela de Ceilán, Nuez moscada y Bergamota fresca',
      heartNotes: 'Dátiles de Arabia, Praliné belga, Nardo y Mahonial',
      baseNotes: 'Vainilla de Madagascar, Haba tonka, Benjuí, Mirra y Madera de Akigalawood',
      fragranceType: 'Oriental Gourmand Especiado Licoroso',
      concentrationPct: '22% Concentrado de Lujo',
      batchCodePrefix: 'BATCH# LT-KHM-2026',
      origin: 'Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '14+ Horas (Piel y Ropa)',
      durationPct: 98,
      projectionLabel: 'Pesada / Dulzura Radiante',
      projectionPct: 95,
      seasonLabel: 'Otoño / Invierno / Noche',
      seasonPct: 98
    },
    inspiration: 'Comparte el ADN opulento y licoroso de Angels’ Share de By Kilian, enriquecido con dátiles reales y praliné de Oriente.',
    compositionText: 'Un postre líquido celestial. La canela cálida se une a dátiles deshidratados y praliné fundido sobre una base licorosa y amaderada. Su frasco de cristal tallado evoca el más fino vaso de whisky escocés.',
    historyText: 'El perfume más viral de la historia de TikTok en la categoría de fragancias orientales. Millones de reseñas en Fragrantica destacan su calidad sobresaliente.'
  },
  {
    id: 'armaf-club-de-nuit-intense-man',
    name: 'Club de Nuit Intense Man',
    brand: 'ARMAF',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'AR-10928',
    concentration: 'Eau de Parfum',
    volume100ml: '105 ml / 3.6 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 54.90,
    originalPrice100ml: 95.00,
    priceDecant: 15.00,
    originalPriceDecant: 20.00,
    discountPercent: 42,
    onSale: true,
    timeOfDay: 'ambas',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 948,
    gender: 'Para Él',
    vibes: ['🔥 Modo Bestia', '💼 Oficina / Diario', '👑 Más Virales de TikTok'],
    vibeBadge: '🔥 Rey de Cumplidos',
    badgeColor: 'bg-[#A58B4E] text-white font-bold',
    acordes: ['citricos', 'oud_maderas'],
    imageMain: '/assets/images/armaf_cdn_intense.jpg',
    gallery: [
      '/assets/images/armaf_cdn_intense.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html',
    fraganticaQuery: 'Armaf Club de Nuit Intense Man',
    noteIcons: [
      { emoji: '🍋', name: 'Limón Ahumado' },
      { emoji: '🪵', name: 'Abedul Negro' },
      { emoji: '🌊', name: 'Ámbar Gris' }
    ],
    technicalTable: {
      headNotes: 'Limón, Piña caramelizada, Grosellas negras, Manzana y Bergamota',
      heartNotes: 'Abedul ahumado, Jazmín nocturno y Rosa especiada',
      baseNotes: 'Ámbar gris, Almizcle, Pachulí y Vainilla cremosa',
      fragranceType: 'Amaderado Especiado Cítrico',
      concentrationPct: '20% Aceites Esenciales de Grado Perfumería',
      batchCodePrefix: 'BATCH# CDNIM-2026-DXB',
      origin: 'Dubái, Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '12+ Horas (Fijación Titánica)',
      durationPct: 96,
      projectionLabel: 'Pesada / Proyecta a 2 Metros',
      projectionPct: 94,
      seasonLabel: 'Versátil 4 Estaciones / Noche',
      seasonPct: 95
    },
    inspiration: 'El tributo más alabado a nivel mundial al legendario Creed Aventus, reconocido por su imbatible estela ahumada de piña y abedul.',
    compositionText: 'El perfume masculino más vendido de la perfumería árabe moderna. Abre con una energía vibrante de cítricos y piña negra para dar paso a un ahumado de abedul y ámbar gris irresistible que genera cumplidos inmediatos.',
    historyText: 'Considerado por la crítica internacional como el "arma secreta" de cualquier colección masculina. Se ha vuelto un fenómeno imparable con más de 100 millones de menciones.'
  },
  {
    id: 'lattafa-yara',
    name: 'Yara (Pink)',
    brand: 'LATTAFA',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'LT-77104',
    concentration: 'Eau de Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 46.90,
    originalPrice100ml: 79.00,
    priceDecant: 15.00,
    originalPriceDecant: 20.00,
    discountPercent: 41,
    onSale: true,
    timeOfDay: 'dia',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 1650,
    gender: 'Para Ella',
    vibes: ['🍯 Dulces y Gourmand', '🌸 Florales & Románticos', '👑 Más Virales de TikTok'],
    vibeBadge: '🎀 Nube de Vainilla',
    badgeColor: 'bg-pink-600 text-white',
    acordes: ['gourmand', 'vainilla', 'rosas'],
    imageMain: '/assets/images/lattafa_yara.jpg',
    gallery: [
      '/assets/images/lattafa_yara.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-76890.html',
    fraganticaQuery: 'Lattafa Yara Pink',
    noteIcons: [
      { emoji: '🍓', name: 'Fresas con Crema' },
      { emoji: '🍦', name: 'Vainilla Esponjosa' },
      { emoji: '🥥', name: 'Coco Tierno' }
    ],
    technicalTable: {
      headNotes: 'Heliotropo, Orquídea silvestre y Mandarina dulce',
      heartNotes: 'Acorde Gourmand de crema batida, Frutas tropicales y Malvaviscos',
      baseNotes: 'Vainilla suave, Sándalo cremoso y Almizcle sedoso',
      fragranceType: 'Ámbar Vainilla Dulce y Polvorosa',
      concentrationPct: '18% Eau de Parfum Suave',
      batchCodePrefix: 'BATCH# LT-YRA-2026',
      origin: 'Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '8 - 10 Horas en Piel',
      durationPct: 84,
      projectionLabel: 'Moderada / Burbuja Delicada',
      projectionPct: 80,
      seasonLabel: 'Primavera / Verano / Citas',
      seasonPct: 92
    },
    inspiration: 'Una caricia tierna que fusiona la cremosidad de Pepe Jeans for Her con acordes gourmand de malvavisco y fresa silvestre.',
    compositionText: 'Un abrazo en forma de perfume. Evoca una deliciosa copa de fresas con crema batida y toques de vainilla esponjosa. Delicado, femenino y sumamente adictivo.',
    historyText: 'El perfume femenino más vendido de Lattafa a nivel global, con miles de videos alabando su ternura e idoneidad para el día a día.'
  },
  {
    id: 'afnan-9-pm',
    name: '9 PM',
    brand: 'AFNAN',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'AF-99002',
    concentration: 'Eau de Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 52.00,
    originalPrice100ml: 89.00,
    priceDecant: 15.00,
    originalPriceDecant: 22.00,
    discountPercent: 42,
    onSale: true,
    timeOfDay: 'noche',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 1110,
    gender: 'Para Él',
    vibes: ['🌙 Seducción y Noche', '🔥 Modo Bestia', '👑 Más Virales de TikTok', '🍯 Dulces y Gourmand'],
    vibeBadge: '🌙 Rey de la Noche',
    badgeColor: 'bg-indigo-700 text-white',
    acordes: ['vainilla', 'gourmand', 'especiados'],
    imageMain: '/assets/images/afnan_9pm.jpg',
    gallery: [
      '/assets/images/afnan_9pm.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Afnan/9-PM-65414.html',
    fraganticaQuery: 'Afnan 9 PM',
    noteIcons: [
      { emoji: '🍏', name: 'Manzana & Canela' },
      { emoji: '🍦', name: 'Vainilla Bourbon' },
      { emoji: '🌿', name: 'Lavanda & Haba Tonka' }
    ],
    technicalTable: {
      headNotes: 'Manzana verde crocante, Canela dulce, Lavanda y Bergamota',
      heartNotes: 'Flor de azahar de naranjo y Lirio de los valles',
      baseNotes: 'Vainilla Bourbon intensa, Haba tonka, Ámbar cálido y Pachulí',
      fragranceType: 'Ámbar Especiado Vainilla Dulce',
      concentrationPct: '20% Eau de Parfum',
      batchCodePrefix: 'BATCH# AF-9PM-2026',
      origin: 'Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '12+ Horas en Piel',
      durationPct: 96,
      projectionLabel: 'Muy Pesada / Estela Magnética',
      projectionPct: 93,
      seasonLabel: 'Otoño / Invierno / Fiestas & Noche',
      seasonPct: 97
    },
    inspiration: 'El rey definitivo de la fiesta nocturna, inspirado en el magnetismo de Ultra Male de Jean Paul Gaultier pero con mayor duración y refinamiento.',
    compositionText: 'Una manzana caramelizada con canela que evoluciona hacia una nube sensual de vainilla y ámbar. Diseñado específicamente para destacar en ambientes nocturnos y de celebración.',
    historyText: 'Consagrado en foros de perfumería como uno de los lanzamientos más exitosos de Afnan Perfumes.'
  },
  {
    id: 'armaf-club-de-nuit-woman',
    name: 'Club de Nuit Woman',
    brand: 'ARMAF',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'AR-21545',
    concentration: 'Eau de Parfum',
    volume100ml: '105 ml / 3.6 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 60.01,
    originalPrice100ml: 107.15,
    priceDecant: 15.00,
    originalPriceDecant: 22.00,
    discountPercent: 44,
    onSale: true,
    timeOfDay: 'dia',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 312,
    gender: 'Para Ella',
    vibes: ['🌸 Florales & Románticos', '💼 Oficina / Diario', '👑 Más Virales de TikTok'],
    vibeBadge: '🔥 Best Seller Femenino',
    badgeColor: 'bg-rose-600 text-white',
    acordes: ['rosas', 'citricos', 'vainilla'],
    imageMain: '/assets/images/armaf_cdn_woman.jpg',
    gallery: [
      '/assets/images/armaf_cdn_woman.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Woman-27655.html',
    fraganticaQuery: 'Armaf Club de Nuit Woman',
    noteIcons: [
      { emoji: '🍊', name: 'Naranja' },
      { emoji: '🌹', name: 'Rosa de Grasse' },
      { emoji: '🍦', name: 'Vainilla Bourbon' }
    ],
    technicalTable: {
      headNotes: 'Naranja dulce, Bergamota brillante, Pomelo y Durazno aterciopelado',
      heartNotes: 'Rosa de mayo, Jazmín sambac, Lichi exótico y Geranio silvestre',
      baseNotes: 'Pachulí noble, Vainilla de Madagascar, Almizcle blanco y Vetiver',
      fragranceType: 'Chipre Floral Dulce',
      concentrationPct: '18% - 20% Aceites Esenciales Puros',
      batchCodePrefix: 'BATCH# AR-2026-FR',
      origin: 'Hecho en Dubái, Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '9 - 11 Horas en Piel',
      durationPct: 88,
      projectionLabel: 'Moderada / Envolvente',
      projectionPct: 82,
      seasonLabel: 'Primavera / Todo el Año',
      seasonPct: 90
    },
    inspiration: 'Inspirado en el ADN legendario de Coco Mademoiselle de Chanel, con mayor longevidad oriental y dulzura cautivadora.',
    compositionText: 'Abre con una chispeante explosión cítrica de naranja y bergamota que de inmediato se suaviza con un corazón exquisito de rosas y jazmín. El fondo de pachulí y vainilla abraza la piel durante más de 10 horas con una estela limpia y lujosa.',
    historyText: 'Una de las fragancias de la casa Armaf con mayor récord de ventas en Latinoamérica y Europa.'
  },
  {
    id: 'lattafa-asad',
    name: 'Asad',
    brand: 'LATTAFA',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'LT-12004',
    concentration: 'Eau de Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 49.90,
    originalPrice100ml: 85.00,
    priceDecant: 15.00,
    originalPriceDecant: 20.00,
    discountPercent: 41,
    onSale: true,
    timeOfDay: 'noche',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 1890,
    gender: 'Para Él',
    vibes: ['🔥 Modo Bestia', '🌙 Seducción y Noche', '👑 Más Virales de TikTok'],
    vibeBadge: '🦁 Fuerza Masculina',
    badgeColor: 'bg-[#0E0E0E] text-[#C9A961] border border-[#C9A961]',
    acordes: ['especiados', 'oud_maderas', 'vainilla'],
    imageMain: '/assets/images/lattafa_asad.jpg',
    gallery: [
      '/assets/images/lattafa_asad.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72810.html',
    fraganticaQuery: 'Lattafa Asad',
    noteIcons: [
      { emoji: '🌶️', name: 'Pimienta Negra' },
      { emoji: '☕', name: 'Café Tostado' },
      { emoji: '🪵', name: 'Ámbar & Vainilla' }
    ],
    technicalTable: {
      headNotes: 'Pimienta negra, Piña caramelizada y Tabaco suave',
      heartNotes: 'Café espresso, Iris noble y Pachulí de Indonesia',
      baseNotes: 'Ámbar seco, Vainilla oscura, Maderas preciosas y Benjuí',
      fragranceType: 'Ámbar Especiado Masculino',
      concentrationPct: '20% Eau de Parfum',
      batchCodePrefix: 'BATCH# LT-ASD-2026',
      origin: 'Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '10 - 12 Horas en Piel',
      durationPct: 92,
      projectionLabel: 'Intensa / Llena Espacios',
      projectionPct: 90,
      seasonLabel: 'Otoño / Invierno / Noches',
      seasonPct: 94
    },
    inspiration: 'El clon oriental más respetado de Dior Sauvage Elixir, combinando café tostado con especias ardientes.',
    compositionText: 'Un león en una botella negra y dorada. Combina notas especiadas con un acorde de café tostado y ámbar adictivo.',
    historyText: 'Catalogado por miles de reviewers en YouTube y Fragrantica como una compra a ciegas obligatoria para amantes de las fragancias especiadas.'
  },
  {
    id: 'al-haramain-amber-oud-gold',
    name: 'Amber Oud Gold Edition',
    brand: 'AL HARAMAIN',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'AH-30112',
    concentration: 'Extrait de Parfum',
    volume100ml: '120 ml / 4.0 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 79.90,
    originalPrice100ml: 140.00,
    priceDecant: 15.00,
    originalPriceDecant: 22.00,
    discountPercent: 43,
    onSale: true,
    timeOfDay: 'ambas',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 960,
    gender: 'Unisex',
    vibes: ['🔥 Modo Bestia', '👑 Más Virales de TikTok', '🍯 Dulces y Gourmand'],
    vibeBadge: '🥇 Extrait de Parfum Puro',
    badgeColor: 'bg-[#C9A961] text-[#0E0E0E] font-black',
    acordes: ['citricos', 'gourmand', 'vainilla'],
    imageMain: '/assets/images/al_haramain_amber_oud.jpg',
    gallery: [
      '/assets/images/al_haramain_amber_oud.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Al-Haramain-Perfumes/Amber-Oud-Gold-Edition-50341.html',
    fraganticaQuery: 'Al Haramain Amber Oud Gold Edition',
    noteIcons: [
      { emoji: '🍈', name: 'Melón & Piña' },
      { emoji: '🍬', name: 'Notas Dulces' },
      { emoji: '✨', name: 'Almizcle de Oro' }
    ],
    technicalTable: {
      headNotes: 'Bergamota brillante y Notas verdes mediterráneas',
      heartNotes: 'Melón dulce, Piña dorada, Ámbar cálido y Acordes dulces',
      baseNotes: 'Almizcle blanco, Vainilla de Tahití y Maderas preciosas',
      fragranceType: 'Ámbar Frutal Exótico (Extrait)',
      concentrationPct: '28% Extrait de Parfum de Máxima Pureza',
      batchCodePrefix: 'BATCH# AH-AOG-2026-LUX',
      origin: 'Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '16+ Horas (Fijación Eterna)',
      durationPct: 99,
      projectionLabel: 'Nuclear / Llena Salones',
      projectionPct: 98,
      seasonLabel: 'Verano / Clima Cálido / Fiesta',
      seasonPct: 95
    },
    inspiration: 'El más aclamado sucesor de Xerjoff Erba Pura, famoso por su explosión de frutas doradas y almizcle solar.',
    compositionText: 'Un monumento de lujo en metal dorado cepillado. Su concentración Extrait de Parfum libera una cascada de frutas tropicales maduras bañadas en ámbar y vainilla que dura hasta después de bañarse.',
    historyText: 'Una de las fragancias nicho más deseadas de Oriente Medio. Producida por la histórica casa Al Haramain fundada en 1970.'
  },
  {
    id: 'rasasi-hawas-for-him',
    name: 'Hawas for Him',
    brand: 'RASASI',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'RS-55201',
    concentration: 'Eau de Parfum',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 64.90,
    originalPrice100ml: 110.00,
    priceDecant: 15.00,
    originalPriceDecant: 15.00,
    discountPercent: 41,
    onSale: false,
    timeOfDay: 'dia',
    infographicImage: null,
    rating: 4.9,
    reviewCount: 1420,
    gender: 'Para Él',
    vibes: ['🔥 Modo Bestia', '👑 Más Virales de TikTok', '💼 Oficina / Diario'],
    vibeBadge: '🌊 Bestia Marina Viral',
    badgeColor: 'bg-cyan-700 text-white',
    acordes: ['citricos', 'frescos'],
    imageMain: '/assets/images/rasasi_hawas.jpg',
    gallery: [
      '/assets/images/rasasi_hawas.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Rasasi/Hawas-for-Him-33758.html',
    fraganticaQuery: 'Rasasi Hawas for Him',
    noteIcons: [
      { emoji: '🍎', name: 'Manzana & Canela' },
      { emoji: '🌊', name: 'Brisa Marina' },
      { emoji: '🫐', name: 'Ciruela Oscura' }
    ],
    technicalTable: {
      headNotes: 'Manzana verde crujiente, Bergamota italiana, Limón y Canela cálida',
      heartNotes: 'Ciruela jugosa, Cardamomo aromático, Flor de azahar y Acordes acuáticos',
      baseNotes: 'Ámbar gris noble, Almizcle blanco, Pachulí y Maderas flotantes',
      fragranceType: 'Acuático Especiado Frutal',
      concentrationPct: '20% Eau de Parfum de Larga Duración',
      batchCodePrefix: 'BATCH# RS-HWS-2026-DXB',
      origin: 'Dubái, Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '12+ Horas en Piel (Calor Extremo)',
      durationPct: 96,
      projectionLabel: 'Pesada / Rastro Acuático Envolvente',
      projectionPct: 94,
      seasonLabel: 'Verano / Calor / Todo el Año',
      seasonPct: 98
    },
    inspiration: 'El rey absoluto de los perfumes frescos de verano. Combina la frescura magnética de Invictus Aqua con ciruela oriental y ámbar gris.',
    compositionText: 'Un torbellino de frescura y seducción. La manzana verde y ciruela madura se funden con notas marinas cristalinas y una base de ámbar gris.',
    historyText: 'Creado por la legendaria casa Rasasi de Dubái, fundada en 1979.'
  },
  {
    id: 'bharara-king-parfum',
    name: 'King',
    brand: 'BHARARA',
    collection: 'arabes',
    collectionBadge: 'Árabe • Dubái Original',
    sku: 'BH-77001',
    concentration: 'Parfum Pure',
    volume100ml: '100 ml / 3.4 FL. OZ.',
    volumeDecant: '10 ml (Atomizador de Viaje)',
    price100ml: 74.90,
    originalPrice100ml: 135.00,
    priceDecant: 15.00,
    originalPriceDecant: 15.00,
    discountPercent: 45,
    onSale: false,
    timeOfDay: 'ambas',
    infographicImage: null,
    rating: 5.0,
    reviewCount: 730,
    gender: 'Para Él',
    vibes: ['🔥 Modo Bestia', '👑 Más Virales de TikTok', '🌙 Seducción y Noche'],
    vibeBadge: '👑 Corona Imperial',
    badgeColor: 'bg-[#C9A961] text-[#0E0E0E] font-black',
    acordes: ['citricos', 'vainilla', 'gourmand'],
    imageMain: '/assets/images/bharara_king.jpg',
    gallery: [
      '/assets/images/bharara_king.jpg'
    ],
    fraganticaUrl: 'https://www.fragrantica.es/perfume/Bharara/King-72545.html',
    fraganticaQuery: 'Bharara King Parfum',
    noteIcons: [
      { emoji: '🍊', name: 'Naranja Real' },
      { emoji: '🍦', name: 'Vainilla Bourbon' },
      { emoji: '✨', name: 'Ámbar Puro' }
    ],
    technicalTable: {
      headNotes: 'Naranja dulce de Sicilia, Limón brillante y Bergamota de Calabria',
      heartNotes: 'Frutas confitadas, Acorde ambarino y Resinas doradas',
      baseNotes: 'Vainilla de Madagascar pura, Almizcle blanco y Madera de cedro',
      fragranceType: 'Cítrico Oriental Dulce (Parfum)',
      concentrationPct: '25% Parfum Puro Concentrado',
      batchCodePrefix: 'BATCH# BH-KNG-2026',
      origin: 'Emiratos Árabes Unidos'
    },
    performance: {
      durationLabel: '14+ Horas (Concentración Extrema)',
      durationPct: 98,
      projectionLabel: 'Bestial / Llena Habitaciones',
      projectionPct: 97,
      seasonLabel: 'Todo el Año / Noches Especiales',
      seasonPct: 95
    },
    inspiration: 'Una oda imperial al magnetismo cítrico-avainillado de nicho. Proyección de realeza que no admite comparación.',
    compositionText: 'Un elixir adictivo donde la naranja siciliana y la bergamota reposan sobre una capa suntuosa de vainilla pura y ámbar cálido.',
    historyText: 'La creación insignia de Bharara Beauty, viralizada por los perfumistas más exigentes.'
  }
];

export const VIBE_CATEGORIES = [
  { id: 'all', name: 'Ver Todos', icon: '✨' },
  { id: 'beast', name: 'Modo Bestia (+12h)', icon: '🔥', filterTag: '🔥 Modo Bestia' },
  { id: 'gourmand', name: 'Dulces & Gourmand', icon: '🍯', filterTag: '🍯 Dulces y Gourmand' },
  { id: 'office', name: 'Frescos Oficina / Diario', icon: '💼', filterTag: '💼 Oficina / Diario' },
  { id: 'night', name: 'Seducción & Noche', icon: '🌙', filterTag: '🌙 Seducción y Noche' },
  { id: 'viral', name: 'Los Más Virales', icon: '👑', filterTag: '👑 Más Virales de TikTok' }
];

export const ACORDES_LIST = [
  { id: 'gourmand', name: 'Gourmand & Vainilla', icon: '🍯', count: '6 fragancias', badge: 'Dulces' },
  { id: 'oud_maderas', name: 'Oud & Maderas Nobles', icon: '🪵', count: '6 fragancias', badge: 'Amaderados' },
  { id: 'citricos', name: 'Cítricos & Frutales', icon: '🍍', count: '6 fragancias', badge: 'Frescos' },
  { id: 'especiados', name: 'Especiados Cálidos', icon: '🌶️', count: '5 fragancias', badge: 'Seductores' },
  { id: 'rosas', name: 'Florales & Rosas de Grasse', icon: '🌹', count: '3 fragancias', badge: 'Elegantes' }
];

export const BRANDS_LIST = [
  // Diseñador
  { name: 'DIOR', category: 'disenador', count: '1 fragancia', badge: 'Sauvage Elixir' },
  { name: 'CHANEL', category: 'disenador', count: '1 fragancia', badge: 'Bleu de Chanel' },
  { name: 'YVES SAINT LAURENT', category: 'disenador', count: '1 fragancia', badge: 'Libre Le Parfum' },
  { name: 'TOM FORD', category: 'disenador', count: '1 fragancia', badge: 'Private Blend' },
  { name: 'VERSACE', category: 'disenador', count: '1 fragancia', badge: 'Medusa Collection' },
  { name: 'XERJOFF', category: 'disenador', count: '1 fragancia', badge: 'Nicho Supremo' },
  // Árabes
  { name: 'LATTAFA', category: 'arabes', count: '3 fragancias', badge: 'Top #1 Viral' },
  { name: 'ARMAF', category: 'arabes', count: '2 fragancias', badge: 'Best Seller' },
  { name: 'AFNAN', category: 'arabes', count: '1 fragancia', badge: '9 PM Niche' },
  { name: 'AL HARAMAIN', category: 'arabes', count: '1 fragancia', badge: 'Gold Edition' },
  { name: 'RASASI', category: 'arabes', count: '1 fragancia', badge: 'Hawas' },
  { name: 'BHARARA', category: 'arabes', count: '1 fragancia', badge: 'King' }
];
