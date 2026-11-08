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
    phrase: 'Oler bien, sentirse bien consigo mismo nunca antes fue tan accesible',
    badge: '👑 Colección Árabe Dubái',
    accentColor: '#C9A961',
    features: [
      'Concentración pura de 18% a 26% en aceites de grado nicho',
      'Fijación titánica de 12 a 16+ horas comprobadas',
      'Sello holográfico tridimensional y Batch Code verificado de Dubái'
    ]
  },
  disenador: {
    id: 'disenador',
    title: 'Perfumes de Diseñador',
    subtitle: 'Alta Costura Internacional & Casas Icónicas de Lujo',
    phrase: 'Ser inolvidable nunca se sintió tan bien.',
    badge: '✨ Colección Diseñador Alta Costura',
    accentColor: '#A58B4E',
    features: [
      'Creaciones icónicas de las casas maestras de París, Madrid y Nueva York',
      'Balance olfativo perfecto de máxima sofisticación y estatus',
      'Frascos sellados de origen con trazabilidad oficial garantizada'
    ]
  }
};

export const PERFUMES_DATA = [
  {
    "id": "armaf-odyssey-mandarin-sky",
    "name": "Odyssey Mandarin Sky",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-OD-MS01",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 60,
    "originalPrice100ml": 85,
    "priceDecant": 16,
    "originalPriceDecant": 22,
    "discountPercent": 29,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 840,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🍋 CÍTRICOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🍊 Furor Cítrico & Caramelo",
    "badgeColor": "bg-amber-500 text-white font-black",
    "acordes": [
      "citricos",
      "gourmand",
      "vainilla"
    ],
    "imageMain": "/assets/images/Odysey Mandarin sky.jpg",
    "gallery": [
      "/assets/images/Odysey Mandarin sky.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mandarin-Sky-81673.html",
    "fraganticaQuery": "Armaf Odyssey Mandarin Sky",
    "noteIcons": [
      {
        "emoji": "🍊",
        "name": "Mandarina & Naranja"
      },
      {
        "emoji": "🍮",
        "name": "Caramelo & Tonka"
      },
      {
        "emoji": "🪵",
        "name": "Ambroxan & Cedro"
      }
    ],
    "technicalTable": {
      "headNotes": "Mandarina italiana, Naranja dulce, Salvia y Azafrán",
      "heartNotes": "Caramelo tostado, Haba tonka y Tagetes",
      "baseNotes": "Ambroxan mineral, Cedro noble y Vetiver haitiano",
      "fragranceType": "Cítrico Gourmand Especiado",
      "concentrationPct": "20% Aceite Perfumado Francés",
      "batchCodePrefix": "BATCH# AR-MSK-2026",
      "origin": "Emiratos Árabes Unidos (Sterling Parfums)"
    },
    "performance": {
      "durationLabel": "12+ Horas en Piel",
      "durationPct": 92,
      "projectionLabel": "Muy Intensa / 2 Metros",
      "projectionPct": 90,
      "seasonLabel": "Versátil / Todo el Año",
      "seasonPct": 95
    },
    "inspiration": "La célebre recreación de Scandal Pour Homme de Jean Paul Gaultier con una mandarina aún más jugosa y dulce.",
    "compositionText": "Una explosión efervescente de mandarinas glaseadas bañadas en caramelo líquido tibio y haba tonka sobre un fondo amaderado vibrante. Un imán absoluto de cumplidos.",
    "historyText": "Considerado uno de los mejores lanzamientos de Armaf de la década, viralizado en redes por su adictiva estela gourmand cítrica."
  },
  {
    "id": "armaf-odyssey-homme-white",
    "name": "Odyssey Homme White Edition",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-OD-WH02",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 90,
    "priceDecant": 18,
    "originalPriceDecant": 24,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 520,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "⚡ Frescura Acuática Cristalina",
    "badgeColor": "bg-stone-800 text-stone-100 font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Odyssey homme white.jpg",
    "gallery": [
      "/assets/images/Odyssey homme white.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Odyssey-Homme-White-Edition-59929.html",
    "fraganticaQuery": "Armaf Odyssey Homme White Edition",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Yuzu & Pomelo"
      },
      {
        "emoji": "🌊",
        "name": "Brisa Marina & Violeta"
      },
      {
        "emoji": "🪵",
        "name": "Madera de Guayaco"
      }
    ],
    "technicalTable": {
      "headNotes": "Yuzu japonés, Pimienta rosa y Pomelo blanco",
      "heartNotes": "Hojas de violeta, Notas marinas alpinas y Neroli",
      "baseNotes": "Madera de guayaco, Ámbar blanco y Almizcle puro",
      "fragranceType": "Acuático Amaderado Cítrico",
      "concentrationPct": "19% Extracto de Perfume",
      "batchCodePrefix": "BATCH# AR-OHW-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Frescura",
      "durationPct": 88,
      "projectionLabel": "Moderada-Alta / Muy Limpia",
      "projectionPct": 85,
      "seasonLabel": "Primavera / Verano / Calor Extremo",
      "seasonPct": 98
    },
    "inspiration": "Inspirado en la energía oceánica y cítrica refinada de Invictus Aqua de Paco Rabanne.",
    "compositionText": "La sofisticación del blanco absoluto. Abre con un estallido de yuzu y notas saladas marinas, evolucionando hacia un corazón floral acuático y maderas blancas limpias.",
    "historyText": "La opción predilecta para el calor y la oficina dentro de la línea Odyssey, célebre por su sensación de pulcritud y elegancia masculina."
  },
  {
    "id": "armaf-odyssey-marshmallow",
    "name": "Odyssey Marshmallow",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-OD-MM03",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 70,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 26,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 710,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "☁️ Nube de Algodón & Malvavisco",
    "badgeColor": "bg-pink-500 text-white font-bold",
    "acordes": [
      "gourmand",
      "vainilla"
    ],
    "imageMain": "/assets/images/Odyssey marshemllow.jpg",
    "gallery": [
      "/assets/images/Odyssey marshemllow.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Odyssey-Candee-Marshmallow-94320.html",
    "fraganticaQuery": "Armaf Odyssey Candee Marshmallow",
    "noteIcons": [
      {
        "emoji": "🍥",
        "name": "Malvavisco & Crema"
      },
      {
        "emoji": "🍓",
        "name": "Fresas Silvestres"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla Batida"
      }
    ],
    "technicalTable": {
      "headNotes": "Malvavisco esponjoso, Fresa confitada y Crema chantilly",
      "heartNotes": "Algodón de azúcar, Vainilla de Tahití y Jazmín dulce",
      "baseNotes": "Almizcle blanco aterciopelado, Caramelo y Sándalo cremoso",
      "fragranceType": "Oriental Gourmand Dulce",
      "concentrationPct": "20% Concentrado de Lujo",
      "batchCodePrefix": "BATCH# AR-OMM-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12+ Horas en Piel",
      "durationPct": 93,
      "projectionLabel": "Estela Dulce Envolvente",
      "projectionPct": 91,
      "seasonLabel": "Citas / Tardes / Todo el Año",
      "seasonPct": 94
    },
    "inspiration": "ADN gourmand ultra femenino que rivaliza con Sweet Like Candy y Yum Boujee Marshmallow.",
    "compositionText": "Un postre de alta repostería convertido en fragancia. La textura aterciopelada del malvavisco se funde con fresas glaseadas y una nube de crema de vainilla irresistible.",
    "historyText": "Fenómeno viral en TikTok para amantes de los aromas dulces, tiernos y adictivamente seductores."
  },
  {
    "id": "armaf-odyssey-mega",
    "name": "Odyssey Mega Limited Edition",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-OD-MG04",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 90,
    "priceDecant": 18,
    "originalPriceDecant": 24,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 680,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "⚡ Potencia Azul Imparable",
    "badgeColor": "bg-amber-600 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Odyssey mega.jpg",
    "gallery": [
      "/assets/images/Odyssey mega.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mega-84720.html",
    "fraganticaQuery": "Armaf Odyssey Mega Limited Edition",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Bergamota & Jengibre"
      },
      {
        "emoji": "🌿",
        "name": "Salvia & Menta"
      },
      {
        "emoji": "🪵",
        "name": "Cedro & Vetiver"
      }
    ],
    "technicalTable": {
      "headNotes": "Bergamota calabresa, Jengibre picante y Manzana crujiente",
      "heartNotes": "Salvia esclarea, Bayas de enebro y Geranio azul",
      "baseNotes": "Madera de cedro, Haba tonka tostada, Vetiver y Olíbano",
      "fragranceType": "Aromático Fougère Amaderado",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# AR-OMG-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "11-13 Horas Continuas",
      "durationPct": 90,
      "projectionLabel": "Pesada las primeras 3 horas",
      "projectionPct": 92,
      "seasonLabel": "Día / Gimnasio / Oficina / Salidas",
      "seasonPct": 96
    },
    "inspiration": "La alternativa de máxima duración a Y Eau de Parfum de Yves Saint Laurent.",
    "compositionText": "Un golpe aromático azul electrizante. Combina la frescura crujiente de manzana y jengibre con un cuerpo amaderado masculino de presencia dominante.",
    "historyText": "Una de las fragancias firma más elogiadas por su increíble versatilidad para el día a día."
  },
  {
    "id": "armaf-odyssey-limoni",
    "name": "Odyssey Limoni Fresh Edition",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-OD-LM05",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 88,
    "priceDecant": 18,
    "originalPriceDecant": 24,
    "discountPercent": 26,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 430,
    "gender": "Unisex",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA"
    ],
    "vibeBadge": "🍋 Limón de Amalfi & Sol Radiante",
    "badgeColor": "bg-yellow-500 text-stone-900 font-bold",
    "acordes": [
      "citricos"
    ],
    "imageMain": "/assets/images/Odyssey Limoni.jpg",
    "gallery": [
      "/assets/images/Odyssey Limoni.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Odyssey-Limoni-94321.html",
    "fraganticaQuery": "Armaf Odyssey Limoni",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Limón de Amalfi"
      },
      {
        "emoji": "🌱",
        "name": "Té Verde & Azahar"
      },
      {
        "emoji": "✨",
        "name": "Almizcle Solar"
      }
    ],
    "technicalTable": {
      "headNotes": "Limón de Amalfi, Mandarina siciliana y Bergamota",
      "heartNotes": "Flor de azahar del naranjo, Té verde y Jengibre suave",
      "baseNotes": "Almizcle blanco luminoso, Ámbar cristalino y Maderas claras",
      "fragranceType": "Cítrico Aromático Mediterráneo",
      "concentrationPct": "19% Concentración Fresca",
      "batchCodePrefix": "BATCH# AR-OLM-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "8-10 Horas Cítricas Reales",
      "durationPct": 84,
      "projectionLabel": "Aura Fresca y Radiante",
      "projectionPct": 83,
      "seasonLabel": "Días Calurosos / Verano Puro",
      "seasonPct": 98
    },
    "inspiration": "El tributo a la costa italiana y a los cítricos nicho tipo Under The Lemon Tree y Neroli Portofino.",
    "compositionText": "Un rayo de sol líquido. Limones madurados en la costa italiana exprimidos al instante con flores de azahar y notas de té relajante que refrescan los sentidos.",
    "historyText": "La entrega más fresca de la colección Odyssey, aclamada por su autenticidad cítrica que no se siente artificial."
  },
  {
    "id": "armaf-odyssey-mandarin-sky-elixir",
    "name": "Odyssey Mandarin Sky Elixir",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-OD-MSE06",
    "concentration": "Elixir Concentré",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 105,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 28,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 620,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🔥 Elixir Noche Concentrado",
    "badgeColor": "bg-blue-600 text-white font-bold",
    "acordes": [
      "gourmand",
      "vainilla",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Odysey Mandarin sky elixir.jpg",
    "gallery": [
      "/assets/images/Odysey Mandarin sky elixir.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Odyssey-Mandarin-Sky-Elixir-98401.html",
    "fraganticaQuery": "Armaf Odyssey Mandarin Sky Elixir",
    "noteIcons": [
      {
        "emoji": "🍊",
        "name": "Mandarina Confitada"
      },
      {
        "emoji": "🍯",
        "name": "Caramelo & Resinas"
      },
      {
        "emoji": "🪵",
        "name": "Maderas Ahumadas"
      }
    ],
    "technicalTable": {
      "headNotes": "Mandarina confitada, Licor de naranja y Azafrán oscuro",
      "heartNotes": "Caramelo tostado profundo, Haba tonka intensa y Pachulí",
      "baseNotes": "Resinas de ámbar negro, Vainilla de Madagascar y Madera de ébano",
      "fragranceType": "Oriental Gourmand Amaderado Elixir",
      "concentrationPct": "25% Elixir Concentré",
      "batchCodePrefix": "BATCH# AR-MSE-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Ultra Fijación)",
      "durationPct": 96,
      "projectionLabel": "Pesada / Modo Bestia Nocturno",
      "projectionPct": 95,
      "seasonLabel": "Noches / Climas Templados / Citas",
      "seasonPct": 96
    },
    "inspiration": "La versión Elixir oscurecida y licorosa de Mandarin Sky para conquistar la noche.",
    "compositionText": "Mayor profundidad, acordes resinosos nocturnos y un caramelo ambarino de densidad licorosa que eleva el ADN original a un nivel de perfumería nicho.",
    "historyText": "Lanzamiento especial en frasco azul cobalto y cuero mandarina para los entusiastas de fijaciones monstruosas."
  },
  {
    "id": "lattafa-art-of-universe",
    "name": "Art of Universe",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Lattafa Pride",
    "sku": "LT-PR-AU07",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 105,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 390,
    "gender": "Unisex",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌌 Joya Cósmica de Lujo",
    "badgeColor": "bg-indigo-900 text-[#C9A961] font-bold border border-[#C9A961]/40",
    "acordes": [
      "oud_maderas",
      "especiados"
    ],
    "imageMain": "/assets/images/Art of Universe.jpg",
    "gallery": [
      "/assets/images/Art of Universe.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Art-of-Universe-95123.html",
    "fraganticaQuery": "Lattafa Pride Art of Universe",
    "noteIcons": [
      {
        "emoji": "🪐",
        "name": "Bergamota Cósmica"
      },
      {
        "emoji": "🌌",
        "name": "Lirio & Pachulí"
      },
      {
        "emoji": "✨",
        "name": "Ámbar Gris & Vainilla"
      }
    ],
    "technicalTable": {
      "headNotes": "Bergamota, Pimienta rosa y Cardamomo celestial",
      "heartNotes": "Lirio de Florencia, Incienso místico y Jazmín nocturno",
      "baseNotes": "Pachulí refinado, Ámbar gris, Sándalo cremoso y Vainilla",
      "fragranceType": "Oriental Amaderado Espacial",
      "concentrationPct": "22% Concentrado Pride",
      "batchCodePrefix": "BATCH# LT-AOU-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "13+ Horas de Aura",
      "durationPct": 94,
      "projectionLabel": "Sofisticada / Imponente",
      "projectionPct": 91,
      "seasonLabel": "Gala / Eventos Especiales / Noche",
      "seasonPct": 95
    },
    "inspiration": "Una obra maestra de la línea Pride que evoca la inmensidad del cosmos con frasco de zafiro y esfera terrestre tridimensional.",
    "compositionText": "Misterio en su máxima expresión. Las especias luminosas de salida dan paso a un corazón balsámico profundo y una estela de ámbar gris y maderas preciosas que hipnotiza.",
    "historyText": "Una de las presentaciones más espectaculares de Lattafa Pride, diseñada como pieza de coleccionista."
  },
  {
    "id": "rasasi-hawas-ice",
    "name": "Hawas for Him Ice",
    "brand": "RASASI",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAS-HW-ICE08",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1450,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🧊 Furia Glacial Best Seller",
    "badgeColor": "bg-sky-600 text-white font-black",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Hawas ice.jpg",
    "gallery": [
      "/assets/images/Hawas ice.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Rasasi/Hawas-Ice-for-Him-89190.html",
    "fraganticaQuery": "Rasasi Hawas Ice for Him",
    "noteIcons": [
      {
        "emoji": "🍏",
        "name": "Manzana & Menta Helada"
      },
      {
        "emoji": "🌊",
        "name": "Acorde Acuático Marino"
      },
      {
        "emoji": "🪵",
        "name": "Ámbar Gris & Cedro"
      }
    ],
    "technicalTable": {
      "headNotes": "Manzana verde congelada, Bergamota italiana, Limón y Menta glacial",
      "heartNotes": "Ciruela, Notas acuáticas saladas, Azahar y Cardamomo",
      "baseNotes": "Ámbar gris mineral, Almizcle blanco, Madera de cedro y Musgo",
      "fragranceType": "Acuático Aromático Frutal Glacial",
      "concentrationPct": "22% Aceite Nicho de Dubái",
      "batchCodePrefix": "BATCH# RS-HWI-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Modo Bestia)",
      "durationPct": 97,
      "projectionLabel": "Masiva / Rompe Espacios",
      "projectionPct": 96,
      "seasonLabel": "Primavera / Verano / Calor Extremo",
      "seasonPct": 99
    },
    "inspiration": "La evolución helada del mítico Hawas for Him, agregando un golpe de menta escarchada y mayor concentración.",
    "compositionText": "Fresco como un glaciar y potente como un volcán. La manzana crujiente y la ciruela marina se potencian con una menta fría que revitaliza y un fondo de ámbar gris legendario.",
    "historyText": "Consagrado como uno de los perfumes más vendidos del mundo en perfumería árabe en 2024 y 2025."
  },
  {
    "id": "yves-dorgeval-sublime-red",
    "name": "Sublime Red",
    "brand": "YVES D'ORGEVAL",
    "collection": "disenador",
    "collectionBadge": "Diseñador • París Alta Costura",
    "sku": "YDO-SR-09",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 310,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌹 Seducción Roja Francesa",
    "badgeColor": "bg-rose-700 text-white font-bold",
    "acordes": [
      "rosas",
      "gourmand",
      "vainilla"
    ],
    "imageMain": "/assets/images/Sublime red.jpg",
    "gallery": [
      "/assets/images/Sublime red.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Yves+d+Orgeval+Sublime+Red",
    "fraganticaQuery": "Yves d'Orgeval Sublime Red",
    "noteIcons": [
      {
        "emoji": "🍒",
        "name": "Frutas Rojas & Grosella"
      },
      {
        "emoji": "🌸",
        "name": "Flor de Cerezo & Rosa"
      },
      {
        "emoji": "🍨",
        "name": "Vainilla & Ámbar Cálido"
      }
    ],
    "technicalTable": {
      "headNotes": "Grosella roja, Cereza silvestre y Bergamota francesa",
      "heartNotes": "Flor de cerezo, Rosa damascena y Jazmín aterciopelado",
      "baseNotes": "Vainilla Bourbon de París, Ámbar cálido y Almizcle sedoso",
      "fragranceType": "Floral Frutal Ámbar París",
      "concentrationPct": "20% Esencia de París",
      "batchCodePrefix": "BATCH# YDO-SBR-2026",
      "origin": "Francia"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Estela",
      "durationPct": 89,
      "projectionLabel": "Sensual y Femenina",
      "projectionPct": 88,
      "seasonLabel": "Citas / Tardes / Eventos Románticos",
      "seasonPct": 94
    },
    "inspiration": "La elegancia pasional parisina destilada en un frasco degradado rojo carmesí.",
    "compositionText": "Frutos rojos carnosos envueltos en pétalos de rosa y flor de cerezo, reposando sobre una base adictiva de vainilla francesa y almizcles dorados.",
    "historyText": "Creación de la histórica casa parisina Yves d'Orgeval para la mujer moderna que deja huella inolvidable."
  },
  {
    "id": "rasasi-hawas-fire",
    "name": "Hawas for Him Fire",
    "brand": "RASASI",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAS-HW-FIR10",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 80,
    "originalPrice100ml": 115,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 30,
    "onSale": false,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 480,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🔥 Fuego Oriental Especiado",
    "badgeColor": "bg-red-600 text-white font-bold",
    "acordes": [
      "especiados",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Hawas fire.jpg",
    "gallery": [
      "/assets/images/Hawas fire.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Rasasi/Hawas-Fire-for-Him-99520.html",
    "fraganticaQuery": "Rasasi Hawas Fire for Him",
    "noteIcons": [
      {
        "emoji": "🌶️",
        "name": "Pimienta Roja & Canela"
      },
      {
        "emoji": "🍊",
        "name": "Naranja Sanguina"
      },
      {
        "emoji": "🪵",
        "name": "Cuero Ahumado & Oud"
      }
    ],
    "technicalTable": {
      "headNotes": "Pimienta roja ardiente, Naranja sanguina y Jengibre",
      "heartNotes": "Canela especiada, Cuero negro y Azafrán oriental",
      "baseNotes": "Oud blanco suave, Pachulí volcánico y Ámbar resinoso",
      "fragranceType": "Amaderado Especiado Oriental",
      "concentrationPct": "22% Concentrado de Rasasi",
      "batchCodePrefix": "BATCH# RS-HWF-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "13+ Horas en Piel",
      "durationPct": 94,
      "projectionLabel": "Muy Intensa / Llamativa",
      "projectionPct": 93,
      "seasonLabel": "Noches / Otoño / Invierno",
      "seasonPct": 95
    },
    "inspiration": "El contrapunto ardiente a Hawas Ice: diseñado con especias calientes y un cuero suntuoso para temperaturas frescas y seducción nocturna.",
    "compositionText": "Calidez envolvente. El picor especiado de la canela y la pimienta roja se balancea con maderas nobles ahumadas y un fondo de cuero elegante.",
    "historyText": "La entrega de la saga Hawas con mayor carácter seductor y calidez nocturna de la casa Rasasi."
  },
  {
    "id": "rasasi-hawas-highness",
    "name": "Hawas for Him Highness",
    "brand": "RASASI",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAS-HW-HGH11",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 80,
    "originalPrice100ml": 120,
    "priceDecant": 20,
    "originalPriceDecant": 30,
    "discountPercent": 33,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 540,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "👑 Corona Real de Rasasi",
    "badgeColor": "bg-stone-700 text-stone-100 font-bold border border-stone-400",
    "acordes": [
      "oud_maderas",
      "citricos"
    ],
    "imageMain": "/assets/images/hawas-highness.jpg",
    "gallery": [
      "/assets/images/hawas-highness.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Rasasi/Hawas-Highness-for-Him-99522.html",
    "fraganticaQuery": "Rasasi Hawas Highness for Him",
    "noteIcons": [
      {
        "emoji": "🌪️",
        "name": "Notas Ozónicas Reales"
      },
      {
        "emoji": "🫐",
        "name": "Ciruela Damascena"
      },
      {
        "emoji": "🪙",
        "name": "Ámbar Plateado"
      }
    ],
    "technicalTable": {
      "headNotes": "Notas ozónicas nobles, Bergamota plateada y Cardamomo real",
      "heartNotes": "Ciruela damascena, Lirio del valle y Acorde metálico fresco",
      "baseNotes": "Ámbar gris imperial, Madera de cedro y Almizcle rey",
      "fragranceType": "Aromático Amaderado Imperial",
      "concentrationPct": "22% Concentrado de Élite",
      "batchCodePrefix": "BATCH# RS-HWH-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas Reales",
      "durationPct": 96,
      "projectionLabel": "Aura Majestuosa y Distinguida",
      "projectionPct": 93,
      "seasonLabel": "Todo el Año / Ocasiones Especiales",
      "seasonPct": 97
    },
    "inspiration": "La edición aristocrática con frasco totalmente plateado esculpido con la serpiente de la realeza árabe.",
    "compositionText": "Un porte digno de reyes. La frescura ozónica se entreteje con ciruela madura y ámbar imperial para proyectar riqueza, estatus y distinción inigualable.",
    "historyText": "Lanzamiento exclusivo de Rasasi concebido para competir con la alta perfumería nicho europea."
  },
  {
    "id": "rasasi-hawas-ice-freeze",
    "name": "Hawas Ice Freeze",
    "brand": "RASASI",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAS-HW-FRZ12",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 80,
    "originalPrice100ml": 115,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 30,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 410,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA"
    ],
    "vibeBadge": "🧊 Cero Grados / Escarcha Marina",
    "badgeColor": "bg-cyan-600 text-white font-bold",
    "acordes": [
      "citricos"
    ],
    "imageMain": "/assets/images/Hawas ice freze.webp",
    "gallery": [
      "/assets/images/Hawas ice freze.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Rasasi+Hawas+Ice+Freeze",
    "fraganticaQuery": "Rasasi Hawas Ice Freeze",
    "noteIcons": [
      {
        "emoji": "🧊",
        "name": "Hielo Ártico & Menta"
      },
      {
        "emoji": "🌊",
        "name": "Océano Salino"
      },
      {
        "emoji": "🪵",
        "name": "Cedro Escarchado"
      }
    ],
    "technicalTable": {
      "headNotes": "Glaciar ártico, Menta escarchada y Toronja helada",
      "heartNotes": "Brisa salina, Manzana verde helada y Salvia",
      "baseNotes": "Cedro blanco, Ámbar gris frío y Musgo de roble",
      "fragranceType": "Acuático Cítrico Ultra Frío",
      "concentrationPct": "21% Concentrado Frío",
      "batchCodePrefix": "BATCH# RS-HIF-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12+ Horas en Pleno Verano",
      "durationPct": 92,
      "projectionLabel": "Corte Limpio y Penetrante",
      "projectionPct": 91,
      "seasonLabel": "Verano / Días de Sol Quemante",
      "seasonPct": 99
    },
    "inspiration": "Llevar la sensación térmica de Hawas al bajo cero con un perfil cristalino aún más gélido.",
    "compositionText": "Un golpe de frescura incomparable para climas tropicales y olas de calor, manteniendo la célebre estela magnética de Rasasi intacta.",
    "historyText": "La edición más refrescante y energizante de toda la familia Hawas."
  },
  {
    "id": "rasasi-hawas-diva",
    "name": "Hawas for Her Diva",
    "brand": "RASASI",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAS-HW-DIV13",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 85,
    "originalPrice100ml": 125,
    "priceDecant": 22,
    "originalPriceDecant": 30,
    "discountPercent": 32,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 610,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "👑 Diva Suprema de Rasasi",
    "badgeColor": "bg-purple-900 text-amber-200 font-bold border border-amber-300/40",
    "acordes": [
      "gourmand",
      "rosas",
      "vainilla"
    ],
    "imageMain": "/assets/images/Hawas diva.avif",
    "gallery": [
      "/assets/images/Hawas diva.avif"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Rasasi+Hawas+for+Her+Diva",
    "fraganticaQuery": "Rasasi Hawas for Her Diva",
    "noteIcons": [
      {
        "emoji": "🍇",
        "name": "Granada & Grosella Negra"
      },
      {
        "emoji": "🌸",
        "name": "Iris Real & Jazmín"
      },
      {
        "emoji": "🍫",
        "name": "Praliné & Vainilla de Lujo"
      }
    ],
    "technicalTable": {
      "headNotes": "Granada jugosa, Grosellas negras y Manzana de terciopelo",
      "heartNotes": "Iris florentino, Jazmín sambac y Flor de naranjo",
      "baseNotes": "Praliné de chocolate, Pachulí oscuro, Vainilla y Haba tonka",
      "fragranceType": "Gourmand Floral Frutal Opulento",
      "concentrationPct": "23% Concentrado Diva",
      "batchCodePrefix": "BATCH# RS-HWD-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas en Piel y Ropa",
      "durationPct": 96,
      "projectionLabel": "Estela Seductora Inolvidable",
      "projectionPct": 94,
      "seasonLabel": "Noches / Galas / Citas Inolvidables",
      "seasonPct": 97
    },
    "inspiration": "La reina indiscutible de Rasasi para la mujer empoderada, sofisticada y rodeada de misterio.",
    "compositionText": "Frutas oscuras jugosas fusionadas con un praliné suntuoso y flores orientales en un frasco color borgoña real con detalles en oro rosa.",
    "historyText": "Una creación aclamada por su estela envolvente y su duración legendaria que dura hasta el día siguiente."
  },
  {
    "id": "al-haramain-amber-oud-gold-edition",
    "name": "Amber Oud Gold Edition",
    "brand": "AL HARAMAIN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ALH-AOG-14",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 95,
    "originalPrice100ml": 135,
    "priceDecant": 22,
    "originalPriceDecant": 30,
    "discountPercent": 30,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1680,
    "gender": "Unisex",
    "vibes": [
      "🍬 DULCES",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🥇 El Rey Frutal del Mundo",
    "badgeColor": "bg-[#C9A961] text-[#0E0E0E] font-black",
    "acordes": [
      "gourmand",
      "vainilla",
      "citricos"
    ],
    "imageMain": "/assets/images/Amber oud gold edition.jpg",
    "gallery": [
      "/assets/images/Amber oud gold edition.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Al-Haramain-Perfumes/Amber-Oud-Gold-Edition-50030.html",
    "fraganticaQuery": "Al Haramain Amber Oud Gold Edition",
    "noteIcons": [
      {
        "emoji": "🍈",
        "name": "Melón & Piña Dulce"
      },
      {
        "emoji": "🍬",
        "name": "Notas Dulces & Ámbar"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla & Almizcle"
      }
    ],
    "technicalTable": {
      "headNotes": "Melón cantalupo, Piña dulce y Bergamota dorada",
      "heartNotes": "Acordes dulces gourmand, Ámbar cálido y Jazmín",
      "baseNotes": "Vainilla de Madagascar, Almizcle blanco y Maderas nobles",
      "fragranceType": "Oriental Gourmand Frutal Dorado",
      "concentrationPct": "24% Concentrado Puro de Dubái",
      "batchCodePrefix": "BATCH# ALH-AOG-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "16+ Horas (Ultra Larga Duración)",
      "durationPct": 99,
      "projectionLabel": "Modo Bestia / Proyección Nuclear",
      "projectionPct": 98,
      "seasonLabel": "Versátil / Día y Noche / Fiestas",
      "seasonPct": 98
    },
    "inspiration": "La sublime interpretación de Erba Pura de Xerjoff con una fijación aún más monstruosa que el original.",
    "compositionText": "Una fiesta frutal dorada inigualable. El melón y la piña más jugosos del mundo se unen a un ámbar dulce que llena habitaciones y proyecta por horas.",
    "historyText": "Calificado por expertos mundiales como uno de los 5 mejores perfumes árabes de todos los tiempos."
  },
  {
    "id": "al-haramain-amber-oud-aqua-dubai",
    "name": "Amber Oud Aqua Dubai",
    "brand": "AL HARAMAIN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ALH-AOA-15",
    "concentration": "Extrait de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 85,
    "originalPrice100ml": 125,
    "priceDecant": 22,
    "originalPriceDecant": 30,
    "discountPercent": 32,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 520,
    "gender": "Unisex",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌊 Extrait Marino de Dubái",
    "badgeColor": "bg-teal-600 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Amber oud Aqua dubai.webp",
    "gallery": [
      "/assets/images/Amber oud Aqua dubai.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Al-Haramain-Perfumes/Amber-Oud-Aqua-Dubai-94718.html",
    "fraganticaQuery": "Al Haramain Amber Oud Aqua Dubai",
    "noteIcons": [
      {
        "emoji": "🌊",
        "name": "Brisa de Dubái"
      },
      {
        "emoji": "🍊",
        "name": "Mandarina Verde & Cardamomo"
      },
      {
        "emoji": "🪵",
        "name": "Ámbar Gris & Maderas Acuáticas"
      }
    ],
    "technicalTable": {
      "headNotes": "Mandarina verde, Bergamota del Golfo y Acorde salino",
      "heartNotes": "Cardamomo de Oriente, Salvia y Notas acuáticas cristalinas",
      "baseNotes": "Ámbar gris puro, Madera de cedro y Almizcle mineral",
      "fragranceType": "Acuático Aromático Extrait de Parfum",
      "concentrationPct": "25% Extrait de Parfum",
      "batchCodePrefix": "BATCH# ALH-AOD-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas en Piel",
      "durationPct": 95,
      "projectionLabel": "Intensa / Marina Refinada",
      "projectionPct": 93,
      "seasonLabel": "Calor / Playa / Días Soleados",
      "seasonPct": 98
    },
    "inspiration": "La brisa del Golfo Pérsico y las aguas turquesas de Palm Jumeirah embotelladas en frasco azul cobalto.",
    "compositionText": "Un extracto de perfume acuático con cuerpo amaderado noble que no se evapora, proyectando frescura y lujo marítimo continuo.",
    "historyText": "La respuesta de Al Haramain a la demanda de fragancias acuáticas de grado nicho con duración titánica."
  },
  {
    "id": "most-perfume-rome-melancholic",
    "name": "Rome Melancholia",
    "brand": "MOST PERFUME",
    "collection": "arabes",
    "collectionBadge": "Árabe • Edición Lujo",
    "sku": "MP-RM-16",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 105,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 340,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE"
    ],
    "vibeBadge": "🏛️ Elegancia Romana Nocturna",
    "badgeColor": "bg-purple-950 text-purple-300 font-bold border border-purple-500/30",
    "acordes": [
      "oud_maderas",
      "especiados"
    ],
    "imageMain": "/assets/images/Rome melancholic.webp",
    "gallery": [
      "/assets/images/Rome melancholic.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Rome+Melancholia+Pour+Homme",
    "fraganticaQuery": "Rome Melancholia Pour Homme",
    "noteIcons": [
      {
        "emoji": "🍇",
        "name": "Frutas Oscuras"
      },
      {
        "emoji": "🪵",
        "name": "Cuero & Vetiver"
      },
      {
        "emoji": "🍮",
        "name": "Tonka Nocturna"
      }
    ],
    "technicalTable": {
      "headNotes": "Manzana roja oscura, Cardamomo y Bergamota italiana",
      "heartNotes": "Hojas de violeta, Salvia y Lavanda aromática",
      "baseNotes": "Cuero suave, Vetiver ahumado, Haba tonka y Tabaco dulce",
      "fragranceType": "Oriental Amaderado Seductor",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# MP-RMM-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Presencia",
      "durationPct": 88,
      "projectionLabel": "Seductora a Distancia Corta y Media",
      "projectionPct": 87,
      "seasonLabel": "Citas / Salidas Nocturnas / Otoño",
      "seasonPct": 95
    },
    "inspiration": "Inspirado en la sofisticación italiana de Valentino Uomo Born in Roma Coral Fantasy.",
    "compositionText": "Frutas oscuras sensuales combinadas con cuero y vetiver ahumado en un frasco con tachuelas romanas en degradé negro y púrpura.",
    "historyText": "Una joya oculta de la casa Most Perfume aclamada por su vibra nocturna misteriosa y masculina."
  },
  {
    "id": "maison-alhambra-spectre-malachite",
    "name": "Sceptre Malachite",
    "brand": "MAISON ALHAMBRA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "MA-SM-17",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 420,
    "gender": "Unisex",
    "vibes": [
      "🪵 AMADERADOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "💎 Piedra Preciosa Malaquita",
    "badgeColor": "bg-emerald-800 text-white font-bold",
    "acordes": [
      "oud_maderas",
      "rosas"
    ],
    "imageMain": "/assets/images/Spectre malchite.jpg",
    "gallery": [
      "/assets/images/Spectre malchite.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Maison-Alhambra/Sceptre-Malachite-90412.html",
    "fraganticaQuery": "Maison Alhambra Sceptre Malachite",
    "noteIcons": [
      {
        "emoji": "🌿",
        "name": "Nardo Verde & Naranja"
      },
      {
        "emoji": "🌸",
        "name": "Ylang-Ylang & Lirio"
      },
      {
        "emoji": "🪵",
        "name": "Ámbar Mineral & Benjuí"
      }
    ],
    "technicalTable": {
      "headNotes": "Naranja amarga, Petitgrain y Pimienta rosa",
      "heartNotes": "Nardo verde imperial, Ylang-ylang exótico y Jazmín sambac",
      "baseNotes": "Ámbar mineral, Benjuí cálido y Vainilla bourbon",
      "fragranceType": "Floral Blanco Ambarado Mineral",
      "concentrationPct": "22% Concentrado Nicho",
      "batchCodePrefix": "BATCH# MA-SCM-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12+ Horas de Lujo",
      "durationPct": 93,
      "projectionLabel": "Alta / Opulenta y Distinguida",
      "projectionPct": 91,
      "seasonLabel": "Primavera / Otoño / Ocasiones Especiales",
      "seasonPct": 95
    },
    "inspiration": "El tributo al icónico Vert Malachite de la colección Armani Privé.",
    "compositionText": "Un nardo blanco verde bañado en ámbar y resinas nobles que evoca la textura suntuosa de la piedra malaquita rusa.",
    "historyText": "Una de las creaciones más aclamadas de Maison Alhambra por su semejanza hiperrealista con el perfume nicho de alta costura."
  },
  {
    "id": "lattafa-eclaire",
    "name": "Eclaire",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-ECL-18",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1390,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🍯 Fenómeno Gourmand #1",
    "badgeColor": "bg-amber-600 text-amber-50 font-black",
    "acordes": [
      "gourmand",
      "vainilla"
    ],
    "imageMain": "/assets/images/Eclaire de lataffa.jpg",
    "gallery": [
      "/assets/images/Eclaire de lataffa.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Eclaire-93310.html",
    "fraganticaQuery": "Lattafa Eclaire",
    "noteIcons": [
      {
        "emoji": "🍮",
        "name": "Caramelo & Leche Condensada"
      },
      {
        "emoji": "🍯",
        "name": "Miel Pura & Azúcar Morena"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla & Praliné"
      }
    ],
    "technicalTable": {
      "headNotes": "Caramelo fundido, Azúcar morena tostada y Leche condensada",
      "heartNotes": "Miel dorada, Flores blancas y Crema batida",
      "baseNotes": "Vainilla de Madagascar, Praliné y Almizcle gourmand suave",
      "fragranceType": "Gourmand Dulce Lactónico",
      "concentrationPct": "22% Concentrado Puro",
      "batchCodePrefix": "BATCH# LT-ECL-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas en Piel",
      "durationPct": 96,
      "projectionLabel": "Aura Dulce Irresistible",
      "projectionPct": 94,
      "seasonLabel": "Todo el Año / Citas / Tardes Frías",
      "seasonPct": 97
    },
    "inspiration": "La alternativa perfecta y viral a Bianco Latte de Giardini di Toscana.",
    "compositionText": "Pura adicción dulce. Caramelo líquido dorado con leche tibia y vainilla que te hace sentir como el postre más delicioso del mundo.",
    "historyText": "Agotado a nivel mundial en múltiples ocasiones por su calidad gourmet inigualable."
  },
  {
    "id": "armaf-delights-yum-yum",
    "name": "Delights Yum Yum",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-YY-19",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 105,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 460,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🍨 Helado de Pistacho & Macaron",
    "badgeColor": "bg-rose-400 text-white font-bold",
    "acordes": [
      "gourmand",
      "vainilla"
    ],
    "imageMain": "/assets/images/Yumyum.jpg",
    "gallery": [
      "/assets/images/Yumyum.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Armaf+Delights+Yum+Yum",
    "fraganticaQuery": "Armaf Delights Yum Yum",
    "noteIcons": [
      {
        "emoji": "🍨",
        "name": "Helado de Pistacho"
      },
      {
        "emoji": "🍪",
        "name": "Galleta Macaron"
      },
      {
        "emoji": "🍦",
        "name": "Crema Batida"
      }
    ],
    "technicalTable": {
      "headNotes": "Crema de pistacho, Avellana tostada y Ron dulce",
      "heartNotes": "Galleta macaron francesa, Pera blanca y Lirio de agua",
      "baseNotes": "Crema batida, Algodón de azúcar, Vainilla y Haba tonka",
      "fragranceType": "Gourmand Dulce Pastelero",
      "concentrationPct": "20% Concentrado Delights",
      "batchCodePrefix": "BATCH# AR-YYD-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "11-13 Horas Continuas",
      "durationPct": 91,
      "projectionLabel": "Dulce / Deliciosa",
      "projectionPct": 90,
      "seasonLabel": "Citas / Primavera / Climas Frescos",
      "seasonPct": 94
    },
    "inspiration": "Inspirado en la tendencia gourmet de Yum Pistachio Gelato de Kayali.",
    "compositionText": "Un delicioso batido de helado de pistacho con crema pastelera y galletas macaron en un frasco único con forma de copa dulce.",
    "historyText": "Una creación lúdica y sofisticada de Armaf que deleita los sentidos de principio a fin."
  },
  {
    "id": "maison-alhambra-jean-lowe-immortel",
    "name": "Jean Lowe Immortel",
    "brand": "MAISON ALHAMBRA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "MA-JLI-20",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 780,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "⚡ Clon Maestro de L'Immensité",
    "badgeColor": "bg-yellow-600 text-white font-bold",
    "acordes": [
      "citricos",
      "especiados",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Jean lowe inmortal.jpeg",
    "gallery": [
      "/assets/images/Jean lowe inmortal.jpeg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Maison-Alhambra/Jean-Lowe-Immortal-83921.html",
    "fraganticaQuery": "Maison Alhambra Jean Lowe Immortal",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Toronja & Jengibre"
      },
      {
        "emoji": "🌿",
        "name": "Romero & Salvia"
      },
      {
        "emoji": "🪵",
        "name": "Incienso & Ámbar"
      }
    ],
    "technicalTable": {
      "headNotes": "Toronja efervescente, Jengibre fresco y Bergamota italiana",
      "heartNotes": "Romero aromático, Notas acuáticas, Geranio y Salvia",
      "baseNotes": "Incienso ahumado, Ámbar cálido, Ládano y Madera de cedro",
      "fragranceType": "Cítrico Especiado Amaderado de Alta Gama",
      "concentrationPct": "22% Concentrado Puro",
      "batchCodePrefix": "BATCH# MA-JLI-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12+ Horas de Distinción",
      "durationPct": 93,
      "projectionLabel": "Elegante y Radiante / 2 Metros",
      "projectionPct": 92,
      "seasonLabel": "Todo el Año / Oficina / Negocios",
      "seasonPct": 98
    },
    "inspiration": "La más aclamada recreación de L'Immensité de Louis Vuitton a una fracción del costo.",
    "compositionText": "Toronja chispeante con jengibre picante y un toque de incienso noble que proyecta poder, éxito y pulcritud absoluta.",
    "historyText": "Aclamado universalmente por la comunidad de perfumería como uno de los clones más cercanos al original jamás producidos."
  },
  {
    "id": "maison-alhambra-jean-lowe-azure",
    "name": "Jean Lowe Azure",
    "brand": "MAISON ALHAMBRA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "MA-JLA-21",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 510,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "☀️ DÍA"
    ],
    "vibeBadge": "🌊 Azul Imperial Fresco",
    "badgeColor": "bg-blue-700 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Jean lowe azure.jpg",
    "gallery": [
      "/assets/images/Jean lowe azure.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Maison+Alhambra+Jean+Lowe+Azure",
    "fraganticaQuery": "Maison Alhambra Jean Lowe Azure",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Bergamota & Pomelo"
      },
      {
        "emoji": "🌿",
        "name": "Menta & Pimienta Rosa"
      },
      {
        "emoji": "🪵",
        "name": "Cedro & Incienso"
      }
    ],
    "technicalTable": {
      "headNotes": "Bergamota marina, Pomelo, Menta fresca y Limón",
      "heartNotes": "Jengibre, Jazmín blanco, Nuez moscada y Pimienta rosa",
      "baseNotes": "Cedro azul, Incienso blanco, Sándalo y Ámbar gris",
      "fragranceType": "Amaderado Aromático Azul",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# MA-JLA-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Estela",
      "durationPct": 89,
      "projectionLabel": "Muy Equilibrada y Masculina",
      "projectionPct": 88,
      "seasonLabel": "Uso Diario / Primavera / Verano",
      "seasonPct": 96
    },
    "inspiration": "Inspirado en la icónica frescura atemporal de Bleu de Chanel.",
    "compositionText": "Cítricos brillantes con menta crujiente y maderas de cedro ahumadas con incienso que proyectan elegancia sin esfuerzo.",
    "historyText": "Una fragancia imprescindible para el caballero que busca un perfume firma para cualquier momento del día."
  },
  {
    "id": "armaf-club-de-nuit-intense-man",
    "name": "Club de Nuit Intense Man",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-CDNI-22",
    "concentration": "Eau de Parfum",
    "volume100ml": "105 ml / 3.6 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 3890,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "👑 Rey de Cumplidos #1",
    "badgeColor": "bg-black text-amber-300 font-black border border-amber-400/40",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Club de nuit intense man.webp",
    "gallery": [
      "/assets/images/Club de nuit intense man.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Intense-Man-34696.html",
    "fraganticaQuery": "Armaf Club de Nuit Intense Man",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Limón & Piña Ahumada"
      },
      {
        "emoji": "🪵",
        "name": "Abedul & Jazmín"
      },
      {
        "emoji": "✨",
        "name": "Ámbar Gris & Almizcle"
      }
    ],
    "technicalTable": {
      "headNotes": "Limón siciliano, Piña, Bergamota, Grosellas negras y Manzana",
      "heartNotes": "Abedul negro ahumado, Jazmín y Rosa",
      "baseNotes": "Ámbar gris mineral, Almizcle, Pachulí y Vainilla",
      "fragranceType": "Amaderado Especiado Ahumado",
      "concentrationPct": "22% Concentrado Puro de Dubái",
      "batchCodePrefix": "BATCH# AR-CDNI-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Ultra Fijación)",
      "durationPct": 97,
      "projectionLabel": "Modo Bestia Legendario",
      "projectionPct": 96,
      "seasonLabel": "Versátil / Todo el Año / Seducción",
      "seasonPct": 99
    },
    "inspiration": "El perfume que destronó a Aventus de Creed como el monarca indiscutido de los cumplidos.",
    "compositionText": "Piña ahumada, limón chispeante y abedul negro que proyectan una presencia imponente imposible de ignorar en cualquier multitud.",
    "historyText": "La fragancia árabe más famosa del planeta con más de 10 millones de botellas vendidas mundialmente."
  },
  {
    "id": "armaf-club-de-nuit-iconic",
    "name": "Club de Nuit Iconic",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-CDNIC-23",
    "concentration": "Eau de Parfum",
    "volume100ml": "105 ml / 3.6 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1120,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "⚡ Bestia Azul Sofisticada",
    "badgeColor": "bg-blue-600 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Club de nuit iconic.webp",
    "gallery": [
      "/assets/images/Club de nuit iconic.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Club-de-Nuit-Blue-Iconic-78652.html",
    "fraganticaQuery": "Armaf Club de Nuit Blue Iconic",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Toronja & Menta"
      },
      {
        "emoji": "🪵",
        "name": "Incienso & Jengibre"
      },
      {
        "emoji": "✨",
        "name": "Cedro & Sándalo"
      }
    ],
    "technicalTable": {
      "headNotes": "Toronja azul, Limón, Menta piperita, Pimienta rosa y Cilantro",
      "heartNotes": "Jengibre fresco, Nuez moscada, Melón y Jazmín",
      "baseNotes": "Incienso místico, Ámbar, Cedro, Sándalo y Ládano",
      "fragranceType": "Amaderado Aromático Cítrico",
      "concentrationPct": "22% Concentrado Lujo",
      "batchCodePrefix": "BATCH# AR-CNI-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12-14 Horas de Duración",
      "durationPct": 94,
      "projectionLabel": "Potente y Limpia",
      "projectionPct": 92,
      "seasonLabel": "Todo el Año / Día y Noche",
      "seasonPct": 98
    },
    "inspiration": "La interpretación definitiva de Bleu de Chanel con mayor fuerza y proyección que la versión original.",
    "compositionText": "Un azul sublime que combina pomelo energizante, incienso refinado y maderas aromáticas en un frasco azul tornasolado deslumbrante.",
    "historyText": "Uno de los éxitos más rotundos de Armaf elogiado por superar en rendimiento al perfume francés de referencia."
  },
  {
    "id": "afnan-9-pm",
    "name": "9 PM",
    "brand": "AFNAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "AFN-9PM-24",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 2950,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌙 Arma Letal de Fiesta #1",
    "badgeColor": "bg-purple-900 text-white font-black",
    "acordes": [
      "gourmand",
      "vainilla",
      "especiados"
    ],
    "imageMain": "/assets/images/9pm.webp",
    "gallery": [
      "/assets/images/9pm.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Afnan/9-PM-65414.html",
    "fraganticaQuery": "Afnan 9 PM",
    "noteIcons": [
      {
        "emoji": "🍏",
        "name": "Manzana & Canela"
      },
      {
        "emoji": "🌸",
        "name": "Lavanda & Azahar"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla Bourbon & Tonka"
      }
    ],
    "technicalTable": {
      "headNotes": "Manzana silvestre, Canela dulce, Lavanda francesa y Bergamota",
      "heartNotes": "Flor de azahar del naranjo y Lirio de los valles",
      "baseNotes": "Vainilla Bourbon intensa, Haba tonka, Ámbar cálido y Pachulí",
      "fragranceType": "Oriental Especiado Gourmand",
      "concentrationPct": "22% Concentrado Nocturno",
      "batchCodePrefix": "BATCH# AF-9PM-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Garantizadas)",
      "durationPct": 97,
      "projectionLabel": "Ultra Pesada / Llena Espacios",
      "projectionPct": 96,
      "seasonLabel": "Noches / Fiestas / Climas Fríos",
      "seasonPct": 99
    },
    "inspiration": "El rey indiscutible de la seducción que perfeccionó la fórmula de Ultra Male de Jean Paul Gaultier.",
    "compositionText": "Manzana acaramelada con canela y vainilla cremosa que proyecta una sensualidad juvenil y magnética sin precedentes.",
    "historyText": "La fragancia de fiesta más recomendada por influencers y coleccionistas en todo el mundo."
  },
  {
    "id": "afnan-9-pm-rebel",
    "name": "9 PM Rebel",
    "brand": "AFNAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "AFN-9PMR-25",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 680,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🔥 Híbrido Letal Aventus + Rouge",
    "badgeColor": "bg-red-700 text-white font-bold",
    "acordes": [
      "gourmand",
      "oud_maderas",
      "citricos"
    ],
    "imageMain": "/assets/images/9pm rebel.webp",
    "gallery": [
      "/assets/images/9pm rebel.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Afnan/9-PM-Rebel-93214.html",
    "fraganticaQuery": "Afnan 9 PM Rebel",
    "noteIcons": [
      {
        "emoji": "🍍",
        "name": "Piña & Mandarina"
      },
      {
        "emoji": "🪵",
        "name": "Cedro & Maderas"
      },
      {
        "emoji": "🍬",
        "name": "Caramelo & Musgo"
      }
    ],
    "technicalTable": {
      "headNotes": "Piña madura, Manzana Granny Smith y Mandarina roja",
      "heartNotes": "Cedro ahumado, Jazmín y Vainilla caramelizada",
      "baseNotes": "Musgo de roble, Ámbar gris, Caramelo salado y Almizcle",
      "fragranceType": "Chipre Frutal Amaderado",
      "concentrationPct": "22% Concentrado Rebel",
      "batchCodePrefix": "BATCH# AF-9PR-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "13+ Horas en Piel",
      "durationPct": 95,
      "projectionLabel": "Masiva y Adictiva",
      "projectionPct": 94,
      "seasonLabel": "Noche / Salidas / Climas Templados",
      "seasonPct": 96
    },
    "inspiration": "Una audaz fusión entre el ADN ahumado y frutal de Aventus y el dulzor de Baccarat Rouge 540.",
    "compositionText": "Piña jugosa con madera de cedro y un fondo dulce tostado que crea un rastro inconfundible de seguridad y rebeldía.",
    "historyText": "El nuevo giro de Afnan para quienes querían la potencia de 9 PM con un perfil más maduro y sofisticado."
  },
  {
    "id": "afnan-9-pm-elixir",
    "name": "9 PM Elixir",
    "brand": "AFNAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "AFN-9PME-26",
    "concentration": "Parfum Intense",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 115,
    "priceDecant": 20,
    "originalPriceDecant": 30,
    "discountPercent": 34,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 510,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🥃 Licor & Tabaco Elixir Supremo",
    "badgeColor": "bg-amber-900 text-amber-100 font-bold border border-amber-500/40",
    "acordes": [
      "gourmand",
      "vainilla",
      "especiados"
    ],
    "imageMain": "/assets/images/9pm elixir.webp",
    "gallery": [
      "/assets/images/9pm elixir.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Afnan+9+PM+Elixir",
    "fraganticaQuery": "Afnan 9 PM Elixir",
    "noteIcons": [
      {
        "emoji": "🥃",
        "name": "Coñac & Canela Negra"
      },
      {
        "emoji": "🍂",
        "name": "Tabaco Dulce & Tonka"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla Negra Intensa"
      }
    ],
    "technicalTable": {
      "headNotes": "Coñac licoroso, Canela negra, Manzana oscura y Cardamomo",
      "heartNotes": "Tabaco dulce aromático, Haba tonka tostada y Cuero nocturno",
      "baseNotes": "Vainilla negra de Madagascar, Ámbar oscuro y Pachulí",
      "fragranceType": "Oriental Licoroso Amaderado Elixir",
      "concentrationPct": "26% Parfum Intense",
      "batchCodePrefix": "BATCH# AF-9PE-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "15+ Horas (Ultra Elixir)",
      "durationPct": 98,
      "projectionLabel": "Pesada / Muy Cálida y Seductora",
      "projectionPct": 95,
      "seasonLabel": "Invierno / Noches Especiales",
      "seasonPct": 98
    },
    "inspiration": "La máxima concentración de la serie 9 PM orientada a la opulencia licorosa y el tabaco fino.",
    "compositionText": "Un elixir cálido y oscuro donde el coñac y el tabaco dulce se funden con vainilla densa para una experiencia nocturna embriagadora.",
    "historyText": "La culminación de la colección 9 PM en un frasco con patrones geométricos en relieve y tonos vino oscuro."
  },
  {
    "id": "afnan-9-am-dive",
    "name": "9 AM Dive",
    "brand": "AFNAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "AFN-9AMD-27",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 920,
    "gender": "Unisex",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌊 Inmersión Marina Fresca",
    "badgeColor": "bg-sky-500 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/9Am dive.jpg",
    "gallery": [
      "/assets/images/9Am dive.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Afnan/9-AM-Dive-77312.html",
    "fraganticaQuery": "Afnan 9 AM Dive",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Menta & Limón Espumoso"
      },
      {
        "emoji": "🍏",
        "name": "Manzana & Grosellas"
      },
      {
        "emoji": "🌊",
        "name": "Océano & Cedro"
      }
    ],
    "technicalTable": {
      "headNotes": "Menta piperita, Limón espumoso, Grosellas negras y Pimienta rosa",
      "heartNotes": "Manzana verde crujiente, Incienso blanco y Cedro",
      "baseNotes": "Pachulí, Ámbar gris y Notas marinas oceánicas profundas",
      "fragranceType": "Acuático Aromático Cítrico",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# AF-9AD-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Frescor",
      "durationPct": 89,
      "projectionLabel": "Radiante y Muy Limpia",
      "projectionPct": 88,
      "seasonLabel": "Día / Primavera / Verano / Deportivo",
      "seasonPct": 98
    },
    "inspiration": "Una fusión magistral entre Bleu de Chanel y YSL Y EDP con un giro acuático azul refrescante.",
    "compositionText": "La contraparte matutina de 9 PM. Diseñado para energizar las mañanas con menta helada, cítricos y maderas marinas de alta fijación.",
    "historyText": "Uno de los perfumes diarios más elogiados por su balance impecable entre frescura y durabilidad."
  },
  {
    "id": "bharara-king",
    "name": "King",
    "brand": "BHARARA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "BHR-KNG-28",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 90,
    "originalPrice100ml": 130,
    "priceDecant": 22,
    "originalPriceDecant": 32,
    "discountPercent": 30,
    "onSale": true,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 2100,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🍋 CÍTRICOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "👑 Monarca de Proyección Nuclear",
    "badgeColor": "bg-amber-600 text-stone-900 font-black",
    "acordes": [
      "gourmand",
      "citricos",
      "vainilla"
    ],
    "imageMain": "/assets/images/Bharara king.jpg",
    "gallery": [
      "/assets/images/Bharara king.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Bharara/King-70231.html",
    "fraganticaQuery": "Bharara King",
    "noteIcons": [
      {
        "emoji": "🍊",
        "name": "Naranja Dulce & Bergamota"
      },
      {
        "emoji": "🍍",
        "name": "Tutifruti Tropical"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla & Almizcle Rey"
      }
    ],
    "technicalTable": {
      "headNotes": "Naranja dulce, Limón siciliano y Bergamota brillante",
      "heartNotes": "Acorde exclusivo de tutifruti dulce, Ciruela y Piña",
      "baseNotes": "Vainilla pura, Ámbar blanco y Almizcle rey fijador",
      "fragranceType": "Cítrico Gourmand Frutal Rey",
      "concentrationPct": "25% Concentrado Imperial",
      "batchCodePrefix": "BATCH# BHR-KNG-2026",
      "origin": "Estados Unidos / Dubái"
    },
    "performance": {
      "durationLabel": "16+ Horas (Bestia Legendaria)",
      "durationPct": 99,
      "projectionLabel": "Masiva / Imposible de Superar",
      "projectionPct": 99,
      "seasonLabel": "Versátil / Todo el Año / Cumplidos",
      "seasonPct": 99
    },
    "inspiration": "Una obra cumbre de perfumería nicho frutal que supera los estándares de fijación y proyección de cualquier fragancia comercial.",
    "compositionText": "Frutas confitadas enérgicas con cítricos luminosos y una base de vainilla almizclada que dura días enteros en la ropa.",
    "historyText": "El perfume insignia de Bharara que se convirtió en leyenda por su rendimiento descomunal."
  },
  {
    "id": "lattafa-yara-tous",
    "name": "Yara Tous (Amarillo)",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-YT-29",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 1150,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🥭 Mango & Coco Tropical Viral",
    "badgeColor": "bg-amber-500 text-stone-900 font-bold",
    "acordes": [
      "gourmand",
      "citricos",
      "vainilla"
    ],
    "imageMain": "/assets/images/Yara tous.avif",
    "gallery": [
      "/assets/images/Yara tous.avif"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-Tous-84221.html",
    "fraganticaQuery": "Lattafa Yara Tous",
    "noteIcons": [
      {
        "emoji": "🥭",
        "name": "Mango Maduro & Coco"
      },
      {
        "emoji": "🌸",
        "name": "Maracuyá & Jazmín"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla & Cachemira"
      }
    ],
    "technicalTable": {
      "headNotes": "Mango maduro, Coco cremoso y Fruta de la pasión",
      "heartNotes": "Jazmín, Flor de azahar del naranjo y Heliotropo",
      "baseNotes": "Vainilla dulce, Madera de cachemira y Almizcle dorado",
      "fragranceType": "Floral Frutal Tropical Gourmand",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# LT-YTS-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Dulzura",
      "durationPct": 89,
      "projectionLabel": "Alegre y Envolvente",
      "projectionPct": 88,
      "seasonLabel": "Primavera / Verano / Días Soleados",
      "seasonPct": 98
    },
    "inspiration": "La versión más tropical y solar de la legendaria línea Yara de Lattafa.",
    "compositionText": "Un cóctel de mango dulce con crema de coco y jazmín que te transporta a una playa paradisíaca en Dubái.",
    "historyText": "Una de las sensaciones virales más grandes de la perfumería femenina actual."
  },
  {
    "id": "lattafa-mayar",
    "name": "Mayar",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-MYR-30",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 890,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🍓 Lichi & Frambuesa Radiante",
    "badgeColor": "bg-rose-500 text-white font-bold",
    "acordes": [
      "rosas",
      "gourmand"
    ],
    "imageMain": "/assets/images/Mayar rosado.jpg",
    "gallery": [
      "/assets/images/Mayar rosado.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Mayar-79521.html",
    "fraganticaQuery": "Lattafa Mayar",
    "noteIcons": [
      {
        "emoji": "🍓",
        "name": "Frambuesa & Lichi"
      },
      {
        "emoji": "🌹",
        "name": "Rosa Damascena & Peonía"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla & Almizcle"
      }
    ],
    "technicalTable": {
      "headNotes": "Frambuesa silvestre, Lichi dulce y Hojas de violeta",
      "heartNotes": "Rosa damascena, Peonía blanca y Jazmín",
      "baseNotes": "Vainilla cremosa y Almizcle suave aterciopelado",
      "fragranceType": "Floral Frutal Romántico",
      "concentrationPct": "20% Concentrado Femenino",
      "batchCodePrefix": "BATCH# LT-MYR-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "11-13 Horas de Encanto",
      "durationPct": 91,
      "projectionLabel": "Femenina y Chispeante",
      "projectionPct": 90,
      "seasonLabel": "Primavera / Verano / Todo el Año",
      "seasonPct": 97
    },
    "inspiration": "El aroma de las flores y frutos exóticos de Oriente presentado en un delicado frasco rosado con detalles en oro.",
    "compositionText": "Un acorde efervescente de lichi y frambuesa bañado en rosas frescas y una caricia de vainilla suave que enamora.",
    "historyText": "Una fragancia imprescindible para mujeres elegantes que buscan frescura frutal de alta durabilidad."
  },
  {
    "id": "armaf-club-de-nuit-urban-man",
    "name": "Club de Nuit Urban Man",
    "brand": "ARMAF",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "ARM-CDNU-31",
    "concentration": "Eau de Parfum",
    "volume100ml": "105 ml / 3.6 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 105,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 620,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🍋 CÍTRICOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🏙️ Elegancia Masculina Urbana",
    "badgeColor": "bg-stone-800 text-stone-100 font-bold",
    "acordes": [
      "oud_maderas",
      "citricos",
      "especiados"
    ],
    "imageMain": "/assets/images/Club de nuit Urban man.jpg",
    "gallery": [
      "/assets/images/Club de nuit Urban man.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Armaf/Club-De-Nuit-Urban-Man-47021.html",
    "fraganticaQuery": "Armaf Club de Nuit Urban Man",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Bergamota & Menta"
      },
      {
        "emoji": "🪵",
        "name": "Cedro & Jengibre"
      },
      {
        "emoji": "🌿",
        "name": "Pachulí & Vetiver"
      }
    ],
    "technicalTable": {
      "headNotes": "Bergamota, Toronja, Menta fresca y Cardamomo",
      "heartNotes": "Nuez moscada, Jengibre, Cedro y Lavanda",
      "baseNotes": "Pachulí, Vetiver, Sándalo y Musgo de roble",
      "fragranceType": "Amaderado Especiado Urbano",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# AR-CNU-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "11-13 Horas Continuas",
      "durationPct": 90,
      "projectionLabel": "Masculina / Profesional",
      "projectionPct": 89,
      "seasonLabel": "Uso Diario / Trabajo / Salidas",
      "seasonPct": 95
    },
    "inspiration": "Diseñado para el hombre contemporáneo que busca un aroma versátil, moderno y con presencia imponente.",
    "compositionText": "Frescura amaderada pulcra con especias vibrantes que transmiten liderazgo y sofisticación en cualquier ambiente urbano.",
    "historyText": "Un pilar fundamental de la línea Club de Nuit para quienes prefieren la elegancia sobria y moderna."
  },
  {
    "id": "lattafa-khamrah-qahwa",
    "name": "Khamrah Qahwa",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-KMQ-32",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 98,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 33,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 2150,
    "gender": "Unisex",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "☕ Café Árabe & Praliné Legendario",
    "badgeColor": "bg-amber-800 text-amber-100 font-black",
    "acordes": [
      "gourmand",
      "especiados",
      "vainilla"
    ],
    "imageMain": "/assets/images/Kamrah qawa.jpg",
    "gallery": [
      "/assets/images/Kamrah qawa.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-Qahwa-87854.html",
    "fraganticaQuery": "Lattafa Khamrah Qahwa",
    "noteIcons": [
      {
        "emoji": "☕",
        "name": "Café Árabe (Qahwa)"
      },
      {
        "emoji": "🥧",
        "name": "Canela & Praliné"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla & Benjuí"
      }
    ],
    "technicalTable": {
      "headNotes": "Café árabe recién tostado, Canela y Cardamomo",
      "heartNotes": "Praliné dulce, Frutas confitadas y Flores blancas",
      "baseNotes": "Vainilla Bourbon oscura, Café moka, Benjuí y Haba tonka",
      "fragranceType": "Oriental Gourmand Café Especiado",
      "concentrationPct": "23% Concentrado de Lujo",
      "batchCodePrefix": "BATCH# LT-KQH-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Ultra Fijación)",
      "durationPct": 97,
      "projectionLabel": "Pesada / Exquisita y Envolvente",
      "projectionPct": 96,
      "seasonLabel": "Otoño / Invierno / Noches Especiales",
      "seasonPct": 99
    },
    "inspiration": "La aclamada evolución del mítico Khamrah incorporando el aromático café de Oriente (Qahwa).",
    "compositionText": "Una taza de café caliente especiado con canela, servido junto a dátiles árabes y bombones de praliné derretidos. Puro confort y lujo.",
    "historyText": "Considerado por la crítica internacional como superior incluso al Khamrah original."
  },
  {
    "id": "lattafa-khamrah-original",
    "name": "Khamrah Original",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-KHM-33",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 3420,
    "gender": "Unisex",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🏆 Fenómeno Mundial #1",
    "badgeColor": "bg-[#C9A961] text-[#0E0E0E] font-black",
    "acordes": [
      "gourmand",
      "vainilla",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Kamrah clasico.jpg",
    "gallery": [
      "/assets/images/Kamrah clasico.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Khamrah-75805.html",
    "fraganticaQuery": "Lattafa Khamrah Original",
    "noteIcons": [
      {
        "emoji": "🥧",
        "name": "Dátiles & Praliné"
      },
      {
        "emoji": "🪵",
        "name": "Akigalawood & Mirra"
      },
      {
        "emoji": "🥃",
        "name": "Canela & Vainilla"
      }
    ],
    "technicalTable": {
      "headNotes": "Canela de Ceilán, Nuez moscada y Bergamota",
      "heartNotes": "Dátiles de Arabia, Praliné y Nardo",
      "baseNotes": "Vainilla de Madagascar, Haba tonka, Benjuí y Akigalawood",
      "fragranceType": "Oriental Gourmand Licoroso",
      "concentrationPct": "22% Concentrado de Lujo",
      "batchCodePrefix": "BATCH# LT-KHM-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Piel y Ropa)",
      "durationPct": 98,
      "projectionLabel": "Pesada / Dulzura Radiante",
      "projectionPct": 95,
      "seasonLabel": "Otoño / Invierno / Noche",
      "seasonPct": 98
    },
    "inspiration": "Comparte el ADN opulento de Angels’ Share de By Kilian con dátiles y praliné de Oriente.",
    "compositionText": "Un postre líquido celestial. La canela cálida se une a dátiles deshidratados y praliné fundido en un frasco de cristal tallado como licorera de cristal.",
    "historyText": "El perfume más viral de la historia en la categoría de fragancias orientales."
  },
  {
    "id": "dumont-nitro-red",
    "name": "Nitro Red",
    "brand": "DUMONT PARIS",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dumont París",
    "sku": "DUM-NR-34",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 63,
    "originalPrice100ml": 90,
    "priceDecant": 18,
    "originalPriceDecant": 24,
    "discountPercent": 30,
    "onSale": true,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1780,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🍉 La Mejor Sandía del Mundo",
    "badgeColor": "bg-red-600 text-white font-black",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Nitro red.jpg",
    "gallery": [
      "/assets/images/Nitro red.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Dumont/Nitro-Red-69721.html",
    "fraganticaQuery": "Dumont Nitro Red Pour Homme",
    "noteIcons": [
      {
        "emoji": "🍉",
        "name": "Sandía Jugosa Fresca"
      },
      {
        "emoji": "🍏",
        "name": "Manzana & Lavanda"
      },
      {
        "emoji": "🪵",
        "name": "Notas Marinas & Ámbar"
      }
    ],
    "technicalTable": {
      "headNotes": "Sandía fresca jugosa, Manzana crujiente y Lavanda",
      "heartNotes": "Notas marinas, Madera de cedro y Calone acuático",
      "baseNotes": "Ámbar rojo, Pachulí y Almizcle fijador",
      "fragranceType": "Acuático Frutal Amaderado",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# DUM-NR-2026",
      "origin": "Francia / Dubái"
    },
    "performance": {
      "durationLabel": "12-14 Horas (Modo Bestia Cítrico)",
      "durationPct": 95,
      "projectionLabel": "Enorme / Llena Pasillos",
      "projectionPct": 95,
      "seasonLabel": "Verano / Primavera / Días Cálidos",
      "seasonPct": 99
    },
    "inspiration": "Una creación legendaria reconocida mundialmente por su adictiva y jugosa nota de sandía marina.",
    "compositionText": "Refrescante, dulce y sumamente adictivo. La sandía más elogiada de la perfumería actual combinada con brisa oceánica y maderas masculinas.",
    "historyText": "Convertido en un fenómeno instantáneo de ventas por su proyección y cumplidos desmedidos."
  },
  {
    "id": "dumont-nitro-red-intensely",
    "name": "Nitro Red Intensely",
    "brand": "DUMONT PARIS",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dumont París",
    "sku": "DUM-NRI-35",
    "concentration": "Extrait de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 74,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 32,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 640,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🔥 Extrait Nitro 80% Concentración",
    "badgeColor": "bg-red-800 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas",
      "especiados"
    ],
    "imageMain": "/assets/images/Nitro red intensly.jpg",
    "gallery": [
      "/assets/images/Nitro red intensly.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Dumont+Nitro+Red+Intensely",
    "fraganticaQuery": "Dumont Nitro Red Intensely",
    "noteIcons": [
      {
        "emoji": "🍉",
        "name": "Sandía Concentrada 80%"
      },
      {
        "emoji": "🌶️",
        "name": "Especias Rojas & Océano"
      },
      {
        "emoji": "🪵",
        "name": "Cuero Rojo & Ámbar Oscuro"
      }
    ],
    "technicalTable": {
      "headNotes": "Sandía hiperconcentrada, Frutas rojas y Pomelo",
      "heartNotes": "Notas marinas profundas, Lavanda intensa y Pimienta roja",
      "baseNotes": "Cuero rojo, Ámbar oscuro, Madera de cedro y Almizcle fijador",
      "fragranceType": "Extrait Frutal Acuático Cuero",
      "concentrationPct": "25% Extrait de Parfum",
      "batchCodePrefix": "BATCH# DUM-NRI-2026",
      "origin": "Francia / Dubái"
    },
    "performance": {
      "durationLabel": "15+ Horas en Piel",
      "durationPct": 98,
      "projectionLabel": "Masiva y Penetrante",
      "projectionPct": 97,
      "seasonLabel": "Versátil / Tardes / Noches / Fiestas",
      "seasonPct": 97
    },
    "inspiration": "La versión Extrait de Parfum hiperconcentrada del legendario Nitro Red en frasco rojo metalizado espejo.",
    "compositionText": "Mayor densidad aromática, cuerpo de cuero especiado y una sandía profunda que resiste climas extremos sin perder potencia.",
    "historyText": "Diseñado para los fanáticos del Nitro Red que exigían una concentración nivel nicho."
  },
  {
    "id": "french-avenue-liquid-brun",
    "name": "Liquid Brun",
    "brand": "FRENCH AVENUE",
    "collection": "arabes",
    "collectionBadge": "Árabe • French Avenue",
    "sku": "FA-LB-36",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 76,
    "originalPrice100ml": 115,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 33,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1420,
    "gender": "Unisex",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌰 Clon Perfecto de Althaïr",
    "badgeColor": "bg-amber-900 text-amber-200 font-bold",
    "acordes": [
      "gourmand",
      "vainilla",
      "especiados"
    ],
    "imageMain": "/assets/images/Liquid brun.webp",
    "gallery": [
      "/assets/images/Liquid brun.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/French-Avenue/Liquid-Brun-94812.html",
    "fraganticaQuery": "French Avenue Liquid Brun",
    "noteIcons": [
      {
        "emoji": "🍂",
        "name": "Canela & Cardamomo"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla Bourbon Suprema"
      },
      {
        "emoji": "🌰",
        "name": "Praliné & Guayaco"
      }
    ],
    "technicalTable": {
      "headNotes": "Canela de Ceilán, Cardamomo de Guatemala y Flor de azahar",
      "heartNotes": "Vainilla de Bourbon pura y Resina de elemí",
      "baseNotes": "Praliné de avellana, Madera de guayaco, Almizcle y Ambroxan",
      "fragranceType": "Oriental Gourmand Vainilla Especiada",
      "concentrationPct": "22% Concentrado Francés",
      "batchCodePrefix": "BATCH# FA-LBR-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas en Piel",
      "durationPct": 97,
      "projectionLabel": "Elegante, Cálida y Poderosa",
      "projectionPct": 95,
      "seasonLabel": "Otoño / Invierno / Noche",
      "seasonPct": 98
    },
    "inspiration": "La más perfecta y elogiada interpretación de Althaïr de Parfums de Marly en el mundo.",
    "compositionText": "Vainilla Bourbon de altísima calidad rodeada de canela caliente, flor de azahar y maderas preciosas en un frasco marrón chocolate con joyas incrustadas.",
    "historyText": "Una obra cumbre de French Avenue que causó sensación mundial entre los críticos de perfumería nicho."
  },
  {
    "id": "lattafa-asad-bourbon",
    "name": "Asad Bourbon",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-ASB-37",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 70,
    "originalPrice100ml": 100,
    "priceDecant": 18,
    "originalPriceDecant": 26,
    "discountPercent": 30,
    "onSale": false,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 820,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🥃 Bourbon & Tabaco de Lujo",
    "badgeColor": "bg-amber-950 text-amber-300 font-bold border border-amber-600/30",
    "acordes": [
      "oud_maderas",
      "especiados",
      "vainilla"
    ],
    "imageMain": "/assets/images/Asad bourbon.webp",
    "gallery": [
      "/assets/images/Asad bourbon.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-Zanzibar-91230.html",
    "fraganticaQuery": "Lattafa Asad Bourbon",
    "noteIcons": [
      {
        "emoji": "🥃",
        "name": "Bourbon & Canela Negra"
      },
      {
        "emoji": "☕",
        "name": "Café & Ciruela Pasa"
      },
      {
        "emoji": "🍂",
        "name": "Tabaco & Ámbar Negro"
      }
    ],
    "technicalTable": {
      "headNotes": "Licor de Bourbon especiado, Ciruela pasa y Canela negra",
      "heartNotes": "Café moka tostado, Tabaco rubio y Clavo de olor",
      "baseNotes": "Vainilla de Madagascar, Benjuí, Ámbar negro y Pachulí",
      "fragranceType": "Oriental Especiado Licoroso",
      "concentrationPct": "22% Concentrado Puro",
      "batchCodePrefix": "BATCH# LT-ASB-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "13+ Horas de Aura",
      "durationPct": 94,
      "projectionLabel": "Intensa / Masculina y Envolvente",
      "projectionPct": 93,
      "seasonLabel": "Noches / Climas Fríos / Citas",
      "seasonPct": 97
    },
    "inspiration": "La versión más licorosa y madura de la familia Asad, enriquecida con barricas de roble y bourbon.",
    "compositionText": "Un trago de bourbon añejo junto al fuego con tabaco dulce, café aromático y vainilla que destila masculinidad pura.",
    "historyText": "Frasco color caramelo tostado con el sello del león imperial de Lattafa en bronce."
  },
  {
    "id": "halloween-man-x",
    "name": "Halloween Man X",
    "brand": "HALLOWEEN",
    "collection": "disenador",
    "collectionBadge": "Diseñador • Madrid / París",
    "sku": "HLW-MX-38",
    "concentration": "Eau de Toilette Intense",
    "volume100ml": "125 ml / 4.2 FL. OZ. (Tamaño Grande)",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 3120,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "☕ Rey de la Noche & Café Espresso",
    "badgeColor": "bg-sky-950 text-cyan-300 font-black border border-cyan-500/40",
    "acordes": [
      "especiados",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Halloween x man.jpg",
    "gallery": [
      "/assets/images/Halloween x man.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Halloween/Halloween-Man-X-53488.html",
    "fraganticaQuery": "Halloween Man X",
    "noteIcons": [
      {
        "emoji": "☕",
        "name": "Café Espresso & Whisky"
      },
      {
        "emoji": "🌶️",
        "name": "Cardamomo & Canela"
      },
      {
        "emoji": "🪵",
        "name": "Cuero & Haba Tonka"
      }
    ],
    "technicalTable": {
      "headNotes": "Cardamomo nocturno, Lavanda y Limón espumoso",
      "heartNotes": "Café espresso caliente, Whisky licoroso, Canela y Cuero",
      "baseNotes": "Haba tonka, Ámbar cálido e Incienso ahumado",
      "fragranceType": "Oriental Fougère Gourmand Café",
      "concentrationPct": "Concentración Intense (125 ml)",
      "batchCodePrefix": "BATCH# HLW-X-2026",
      "origin": "España (Jesús del Pozo)"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Impacto",
      "durationPct": 90,
      "projectionLabel": "Gran Proyección Nocturna",
      "projectionPct": 91,
      "seasonLabel": "Citas / Bares / Discotecas / Noches Frías",
      "seasonPct": 98
    },
    "inspiration": "El misterio de la noche urbana con un café espresso licoroso diseñado para romper corazones.",
    "compositionText": "Un acorde legendario de café espresso caliente con licor de whisky, canela especiada y cuero suave que te convierte en el centro de atención.",
    "historyText": "Consagrado como uno de los perfumes de diseñador con mejor relación calidad-precio y más cumplidos en la historia."
  },
  {
    "id": "lattafa-yara-pink",
    "name": "Yara (Pink Edition)",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-YRP-39",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 60,
    "originalPrice100ml": 88,
    "priceDecant": 16,
    "originalPriceDecant": 22,
    "discountPercent": 32,
    "onSale": true,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 4200,
    "gender": "Para Ella",
    "vibes": [
      "🍬 DULCES",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🎀 Fresas con Crema Viral #1",
    "badgeColor": "bg-pink-600 text-white font-black",
    "acordes": [
      "gourmand",
      "vainilla"
    ],
    "imageMain": "/assets/images/Yara rosado.jpg",
    "gallery": [
      "/assets/images/Yara rosado.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-64010.html",
    "fraganticaQuery": "Lattafa Yara Pink",
    "noteIcons": [
      {
        "emoji": "🍓",
        "name": "Fresas con Crema"
      },
      {
        "emoji": "🌸",
        "name": "Orquídea & Heliotropo"
      },
      {
        "emoji": "🍦",
        "name": "Malvavisco & Vainilla"
      }
    ],
    "technicalTable": {
      "headNotes": "Heliotropo, Orquídea de Madagascar y Mandarina dulce",
      "heartNotes": "Acorde gourmand de fresas con crema batida y Frutas tropicales",
      "baseNotes": "Vainilla suave, Almizcle blanco aterciopelado y Madera de sándalo",
      "fragranceType": "Gourmand Floral Dulce Cremoso",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# LT-YRP-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12+ Horas de Suavidad",
      "durationPct": 92,
      "projectionLabel": "Aura Dulce Femenina Magnética",
      "projectionPct": 91,
      "seasonLabel": "Todo el Año / Día a Día / Citas",
      "seasonPct": 99
    },
    "inspiration": "El perfume femenino árabe más vendido en la historia moderna de TikTok e Instagram.",
    "compositionText": "Un abrazo suave y cremoso que huele a batido de fresas con vainilla, flores dulces y nubes de malvavisco.",
    "historyText": "El ícono indiscutible de Lattafa que catapultó la perfumería árabe femenina al estrellato mundial."
  },
  {
    "id": "afnan-turathi-blue",
    "name": "Turathi Blue",
    "brand": "AFNAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "AFN-TRB-40",
    "concentration": "Eau de Parfum",
    "volume100ml": "90 ml / 3.0 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 2150,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "💎 Clon de Tygar de Bvlgari",
    "badgeColor": "bg-indigo-700 text-white font-black",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Turathi.webp",
    "gallery": [
      "/assets/images/Turathi.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Afnan/Turathi-Blue-70887.html",
    "fraganticaQuery": "Afnan Turathi Blue",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Toronja Azul Espumosa"
      },
      {
        "emoji": "🪵",
        "name": "Maderas Nobles & Ámbar"
      },
      {
        "emoji": "✨",
        "name": "Almizcle & Pachulí"
      }
    ],
    "technicalTable": {
      "headNotes": "Toronja azul efervescente y Mandarina siciliana",
      "heartNotes": "Maderas nobles refinadas y Ámbar cálido",
      "baseNotes": "Ámbar gris mineral, Almizcle blanco, Especias y Pachulí",
      "fragranceType": "Cítrico Amaderado Especiado Niche",
      "concentrationPct": "22% Concentrado Puro",
      "batchCodePrefix": "BATCH# AF-TRB-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12+ Horas en Piel",
      "durationPct": 93,
      "projectionLabel": "Intensa, Fresca y Muy Elegante",
      "projectionPct": 92,
      "seasonLabel": "Primavera / Verano / Calor / Oficina",
      "seasonPct": 99
    },
    "inspiration": "La alternativa de lujo a Bvlgari Tygar (perfume de $380 USD) con una toronja ambarina idéntica.",
    "compositionText": "Una toronja chispeante con ámbar y maderas preciosas en un frasco con forma de diamante oriental azul noche.",
    "historyText": "Una obra de arte olfativa que se convirtió en una de las fragancias cítricas más admiradas de todo el mundo."
  },
  {
    "id": "french-avenue-vulcan-feu",
    "name": "Vulcan Feu",
    "brand": "FRENCH AVENUE",
    "collection": "arabes",
    "collectionBadge": "Árabe • French Avenue",
    "sku": "FA-VF-41",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 80,
    "originalPrice100ml": 120,
    "priceDecant": 20,
    "originalPriceDecant": 30,
    "discountPercent": 33,
    "onSale": false,
    "timeOfDay": "ambas",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 480,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🐍 Clon de God of Fire",
    "badgeColor": "bg-cyan-600 text-amber-200 font-bold border border-amber-300/40",
    "acordes": [
      "citricos",
      "especiados",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Vulcan feu.jpg",
    "gallery": [
      "/assets/images/Vulcan feu.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=French+Avenue+Vulcan+Feu",
    "fraganticaQuery": "French Avenue Vulcan Feu",
    "noteIcons": [
      {
        "emoji": "🥭",
        "name": "Mango Volcánico & Jengibre"
      },
      {
        "emoji": "🔥",
        "name": "Pimienta de Sichuan"
      },
      {
        "emoji": "🪵",
        "name": "Oud Dorado & Ámbar"
      }
    ],
    "technicalTable": {
      "headNotes": "Mango exótico, Bayas rojas, Jengibre picante y Limón",
      "heartNotes": "Pimienta de Sichuan, Cuero suave, Incienso y Jazmín",
      "baseNotes": "Ámbar ardiente, Oud blanco, Madera de cedro y Almizcle",
      "fragranceType": "Oriental Frutal Volcánico",
      "concentrationPct": "22% Concentrado Nicho",
      "batchCodePrefix": "BATCH# FA-VCF-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Ultra Fijación)",
      "durationPct": 96,
      "projectionLabel": "Exótica / Llama la Atención",
      "projectionPct": 95,
      "seasonLabel": "Todo el Año / Eventos Exclusivos",
      "seasonPct": 97
    },
    "inspiration": "Inspirado en la obra de arte nicho God of Fire de Stéphane Humbert Lucas.",
    "compositionText": "Un mango caliente picante con pimienta de Sichuan y maderas volcánicas en un frasco azul turquesa envuelto por una serpiente dorada.",
    "historyText": "Una creación audaz que representa el lujo contemporáneo de French Avenue."
  },
  {
    "id": "rayhaan-tropical-vibe",
    "name": "Tropical Vibe",
    "brand": "RAYHAAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAY-TRV-42",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 105,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 28,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.8,
    "reviewCount": 390,
    "gender": "Unisex",
    "vibes": [
      "🍋 CÍTRICOS",
      "🍬 DULCES",
      "☀️ DÍA"
    ],
    "vibeBadge": "🌴 Paraíso Tropical Exótico",
    "badgeColor": "bg-gradient-to-r from-orange-500 to-teal-500 text-white font-bold",
    "acordes": [
      "citricos",
      "gourmand"
    ],
    "imageMain": "/assets/images/Rayhann tropical vibe.webp",
    "gallery": [
      "/assets/images/Rayhann tropical vibe.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Rayhaan+Tropical+Vibe",
    "fraganticaQuery": "Rayhaan Tropical Vibe",
    "noteIcons": [
      {
        "emoji": "🍍",
        "name": "Piña & Maracuyá"
      },
      {
        "emoji": "🥥",
        "name": "Agua de Coco & Jazmín"
      },
      {
        "emoji": "🪵",
        "name": "Ámbar Solar & Cedro"
      }
    ],
    "technicalTable": {
      "headNotes": "Piña tropical jugosa, Maracuyá dulce y Bergamota",
      "heartNotes": "Agua de coco fresca, Jazmín de playa y Flor de tiaré",
      "baseNotes": "Ámbar solar, Madera de cedro y Almizcle puro",
      "fragranceType": "Frutal Tropical Marino",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# RAY-TRV-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "10-12 Horas de Frescura",
      "durationPct": 88,
      "projectionLabel": "Aromática y Divertida",
      "projectionPct": 87,
      "seasonLabel": "Verano / Playa / Vacaciones",
      "seasonPct": 99
    },
    "inspiration": "Una escapada veraniega a las islas paradisíacas de Oriente en un frasco degradado naranja y turquesa con relieves.",
    "compositionText": "Frutas exóticas bañadas en agua de coco y rayos de sol que aportan vitalidad, optimismo y frescor continuo.",
    "historyText": "Una fragancia veraniega estrella de la casa Rayhaan."
  },
  {
    "id": "afnan-9-pm-night-out",
    "name": "9 PM Night Out",
    "brand": "AFNAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "AFN-9NO-43",
    "concentration": "Extrait de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 90,
    "originalPrice100ml": 130,
    "priceDecant": 22,
    "originalPriceDecant": 32,
    "discountPercent": 30,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 610,
    "gender": "Para Él",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "💎 Extrait Edición Coleccionista",
    "badgeColor": "bg-stone-900 text-stone-200 font-black border border-stone-400",
    "acordes": [
      "gourmand",
      "vainilla",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/9pm nigh out.jpg",
    "gallery": [
      "/assets/images/9pm nigh out.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Afnan+9+PM+Night+Out",
    "fraganticaQuery": "Afnan 9 PM Night Out",
    "noteIcons": [
      {
        "emoji": "🍏",
        "name": "Manzana Negra & Canela"
      },
      {
        "emoji": "🥃",
        "name": "Licor Dulce & Resinas"
      },
      {
        "emoji": "🪵",
        "name": "Vainilla Absoluta & Cuero"
      }
    ],
    "technicalTable": {
      "headNotes": "Manzana negra escarchada, Canela especiada y Naranja amarga",
      "heartNotes": "Licor dulce, Resinas oscuras y Flor de azahar nocturna",
      "baseNotes": "Vainilla absoluta de Madagascar, Cuero ahumado y Ámbar negro",
      "fragranceType": "Extrait de Parfum Gourmand Seductor",
      "concentrationPct": "25% Extrait de Parfum",
      "batchCodePrefix": "BATCH# AF-9NO-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "16+ Horas (Ultra Fijación)",
      "durationPct": 99,
      "projectionLabel": "Monstruosa / Deja Huella",
      "projectionPct": 98,
      "seasonLabel": "Noches Frías / Eventos Exclusivos / Fiestas",
      "seasonPct": 99
    },
    "inspiration": "La versión más exclusiva y madura de 9 PM en un frasco con textura de piedra volcánica negra y plata.",
    "compositionText": "La cúspide de la seducción nocturna. Canela especiada con licor oscuro y vainilla de concentración máxima.",
    "historyText": "Edición limitada para coleccionistas que buscan la mayor fijación posible en la saga 9 PM."
  },
  {
    "id": "lattafa-pride-pisa",
    "name": "Pisa",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Lattafa Pride",
    "sku": "LT-PR-PIS44",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 90,
    "originalPrice100ml": 130,
    "priceDecant": 22,
    "originalPriceDecant": 32,
    "discountPercent": 30,
    "onSale": false,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 380,
    "gender": "Unisex",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🏛️ Escultura Monumental de Lujo",
    "badgeColor": "bg-stone-900 text-amber-200 font-bold border border-amber-300/40",
    "acordes": [
      "oud_maderas",
      "especiados"
    ],
    "imageMain": "/assets/images/Pisa lataffa.jpg",
    "gallery": [
      "/assets/images/Pisa lataffa.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=Lattafa+Pride+Pisa",
    "fraganticaQuery": "Lattafa Pride Pisa",
    "noteIcons": [
      {
        "emoji": "🏛️",
        "name": "Especias Toscanas"
      },
      {
        "emoji": "🌸",
        "name": "Iris Noble & Incienso"
      },
      {
        "emoji": "🪵",
        "name": "Cedro Monumental & Cuero"
      }
    ],
    "technicalTable": {
      "headNotes": "Especias de la Toscana, Bergamota amarga y Pimienta rosa",
      "heartNotes": "Iris italiano noble, Incienso místico y Jazmín nocturno",
      "baseNotes": "Cedro monumental, Cuero envejecido, Ámbar gris y Humo",
      "fragranceType": "Amaderado Especiado Monumental",
      "concentrationPct": "24% Concentrado Pride",
      "batchCodePrefix": "BATCH# LT-PIS-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas en Piel",
      "durationPct": 96,
      "projectionLabel": "Pesada / Muy Distinguida",
      "projectionPct": 94,
      "seasonLabel": "Noches / Ocasiones Especiales / Invierno",
      "seasonPct": 96
    },
    "inspiration": "Homenaje arquitectónico a la Torre de Pisa moldeado en una majestuosa botella metálica esculpida.",
    "compositionText": "Un aroma imponente con maderas de cedro milenarias, iris italiano y humo aromático que refleja solemnidad y estatus supremo.",
    "historyText": "Una pieza de alta perfumería y escultura artística lanzada por Lattafa Pride."
  },
  {
    "id": "lattafa-asad-elixir",
    "name": "Asad Elixir Edition",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-ASE-45",
    "concentration": "Elixir Concentré",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 75,
    "originalPrice100ml": 110,
    "priceDecant": 20,
    "originalPriceDecant": 28,
    "discountPercent": 31,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 1890,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "⚡ Bestia Especiada Sauvage Elixir",
    "badgeColor": "bg-black text-[#C9A961] font-black border border-[#C9A961]/40",
    "acordes": [
      "especiados",
      "oud_maderas",
      "vainilla"
    ],
    "imageMain": "/assets/images/Asad elixir.webp",
    "gallery": [
      "/assets/images/Asad elixir.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Asad-72810.html",
    "fraganticaQuery": "Lattafa Asad Elixir Edition",
    "noteIcons": [
      {
        "emoji": "🌶️",
        "name": "Pimienta Negra & Canela"
      },
      {
        "emoji": "☕",
        "name": "Café & Tabaco Dulce"
      },
      {
        "emoji": "🪵",
        "name": "Ámbar Gris & Vainilla"
      }
    ],
    "technicalTable": {
      "headNotes": "Pimienta negra intensa, Tabaco dulce y Piña tostada",
      "heartNotes": "Café recién molido, Canela aromática y Nuez moscada",
      "baseNotes": "Pachulí de Java, Ámbar gris mineral, Vainilla Bourbon y Benjuí",
      "fragranceType": "Oriental Especiado Elixir Intenso",
      "concentrationPct": "24% Elixir Concentré",
      "batchCodePrefix": "BATCH# LT-ASE-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Modo Bestia)",
      "durationPct": 96,
      "projectionLabel": "Intensa / Llena Habitaciones",
      "projectionPct": 95,
      "seasonLabel": "Noches / Climas Templados / Citas",
      "seasonPct": 98
    },
    "inspiration": "La alternativa de referencia mundial a Sauvage Elixir de Dior con un toque cálido de café y vainilla.",
    "compositionText": "Especias ardientes sobre un fondo de tabaco, café y maderas de poder innegable.",
    "historyText": "Uno de los perfumes árabes masculinos más galardonados y vendidos del planeta."
  },
  {
    "id": "rayhaan-pacific-aura",
    "name": "Pacific Pour Homme Aura",
    "brand": "RAYHAAN",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RAY-PCA-46",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 65,
    "originalPrice100ml": 95,
    "priceDecant": 18,
    "originalPriceDecant": 25,
    "discountPercent": 31,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": null,
    "rating": 4.9,
    "reviewCount": 470,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🌊 Brisa del Pacífico Cristalina",
    "badgeColor": "bg-blue-500 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/Pacific aura RAYHAAN.jpg",
    "gallery": [
      "/assets/images/Pacific aura RAYHAAN.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Rayhaan/Pacific-Aura-93812.html",
    "fraganticaQuery": "Rayhaan Pacific Pour Homme Aura",
    "noteIcons": [
      {
        "emoji": "🌊",
        "name": "Brisa Marina del Pacífico"
      },
      {
        "emoji": "🍋",
        "name": "Toronja & Bergamota Azul"
      },
      {
        "emoji": "🪵",
        "name": "Cedro Marino & Almizcle"
      }
    ],
    "technicalTable": {
      "headNotes": "Brisa marina del Pacífico, Toronja cristalina y Bergamota azul",
      "heartNotes": "Cardamomo fresco, Salvia acuática y Romero marino",
      "baseNotes": "Madera de cedro flotante, Ámbar gris y Almizcle blanco puro",
      "fragranceType": "Acuático Cítrico Marino",
      "concentrationPct": "20% Pureza Concentrada",
      "batchCodePrefix": "BATCH# RAY-PCA-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "11-13 Horas de Frescor",
      "durationPct": 91,
      "projectionLabel": "Muy Limpia y Radiante",
      "projectionPct": 90,
      "seasonLabel": "Primavera / Verano / Playa / Gym",
      "seasonPct": 99
    },
    "inspiration": "Inspirado en la frescura oceánica de alta gama tipo Pacific Chill de Louis Vuitton.",
    "compositionText": "Un estallido de energía azul y notas marinas con cítricos luminosos en un frasco con grabados botánicos y acabado degradado océano.",
    "historyText": "Uno de los perfumes acuáticos más solicitados de Rayhaan por su increíble fijación en días de calor."
  },
  {
    "id": "lattafa-his-confession",
    "name": "His Confession",
    "brand": "LATTAFA",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "LT-HCF-47",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 85,
    "originalPrice100ml": 125,
    "priceDecant": 22,
    "originalPriceDecant": 30,
    "discountPercent": 32,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 790,
    "gender": "Para Él",
    "vibes": [
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🗿 Busto Escultural de Seducción",
    "badgeColor": "bg-stone-900 text-[#C9A961] font-bold border border-[#C9A961]/40",
    "acordes": [
      "oud_maderas",
      "especiados",
      "vainilla"
    ],
    "imageMain": "/assets/images/His confesión.webp",
    "gallery": [
      "/assets/images/His confesión.webp"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Lattafa-Perfumes/His-Confession-97421.html",
    "fraganticaQuery": "Lattafa His Confession",
    "noteIcons": [
      {
        "emoji": "🍊",
        "name": "Mandarina & Canela Cálida"
      },
      {
        "emoji": "🌸",
        "name": "Iris Empolvado & Benjuí"
      },
      {
        "emoji": "🪵",
        "name": "Vainilla Oscura & Cedro"
      }
    ],
    "technicalTable": {
      "headNotes": "Mandarina dulce, Canela cálida y Lavanda francesa",
      "heartNotes": "Iris empolvado florentino, Benjuí místico y Cedro",
      "baseNotes": "Vainilla oscura de Madagascar, Haba tonka, Pachulí e Incienso",
      "fragranceType": "Oriental Amaderado Iris Lujoso",
      "concentrationPct": "23% Concentrado de Lujo",
      "batchCodePrefix": "BATCH# LT-HCF-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "14+ Horas (Estela Inolvidable)",
      "durationPct": 96,
      "projectionLabel": "Muy Seductora y Envolvente",
      "projectionPct": 95,
      "seasonLabel": "Citas / Eventos de Gala / Noches",
      "seasonPct": 98
    },
    "inspiration": "Inspirado en la elegancia del iris noble de Dior Homme Intense y Gentleman de Givenchy.",
    "compositionText": "Un iris empolvado aristocrático con canela y vainilla balsámica en una botella única con la escultura de un busto clásico con máscara de oro.",
    "historyText": "Aclamada como una de las obras de arte en diseño y aroma más impactantes del año."
  },
  {
    "id": "french-avenue-liquid-brun-limited-edition",
    "name": "Liquid Brun Limited Edition",
    "brand": "FRENCH AVENUE",
    "collection": "arabes",
    "collectionBadge": "Árabe • French Avenue",
    "sku": "FA-LBLE-48",
    "concentration": "Extrait de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Lujo)",
    "price100ml": 90,
    "originalPrice100ml": 135,
    "priceDecant": 22,
    "originalPriceDecant": 32,
    "discountPercent": 33,
    "onSale": true,
    "timeOfDay": "noche",
    "infographicImage": null,
    "rating": 5,
    "reviewCount": 680,
    "gender": "Unisex",
    "vibes": [
      "🍬 DULCES",
      "🪵 AMADERADOS",
      "🌙 NOCHE",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "👑 Extrait Edición Limitada",
    "badgeColor": "bg-amber-950 text-amber-300 font-black border border-amber-500/50",
    "acordes": [
      "gourmand",
      "vainilla",
      "especiados"
    ],
    "imageMain": "/assets/images/Liquid brun limited Edition.jpg",
    "gallery": [
      "/assets/images/Liquid brun limited Edition.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/buscar/?query=French+Avenue+Liquid+Brun+Limited+Edition",
    "fraganticaQuery": "French Avenue Liquid Brun Limited Edition",
    "noteIcons": [
      {
        "emoji": "🍯",
        "name": "Miel & Canela de Ceilán"
      },
      {
        "emoji": "🍦",
        "name": "Vainilla de Tahití Doble"
      },
      {
        "emoji": "🌰",
        "name": "Avellana & Ámbar Noble"
      }
    ],
    "technicalTable": {
      "headNotes": "Canela de Ceilán pura, Miel silvestre y Azahar dorado",
      "heartNotes": "Avellana caramelizada, Cardamomo y Vainilla de Tahití",
      "baseNotes": "Maderas nobles ambarinas, Almizcle de terciopelo y Resina de benjuí",
      "fragranceType": "Extrait Oriental Gourmand Ámbar",
      "concentrationPct": "26% Extrait de Parfum",
      "batchCodePrefix": "BATCH# FA-LBLE-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "16+ Horas (Ultra Fijación)",
      "durationPct": 99,
      "projectionLabel": "Pesada y Riquísima / Llena Espacios",
      "projectionPct": 97,
      "seasonLabel": "Noches Frías / Ocasiones Únicas",
      "seasonPct": 99
    },
    "inspiration": "La versión Extrait de Parfum de máxima concentración y duración de Liquid Brun en frasco burdeos dorado.",
    "compositionText": "Doble dosis de vainilla y canela con avellanas tostadas y miel salvaje para una experiencia gourmet celestial.",
    "historyText": "Edición limitada para los conocedores más exigentes de la perfumería de autor."
  },
  {
    "id": "rasasi-hawas-verde",
    "name": "Hawas Verde",
    "brand": "RASASI",
    "collection": "arabes",
    "collectionBadge": "Árabe • Dubái Original",
    "sku": "RS-HAW-VERDE",
    "concentration": "Eau de Parfum",
    "volume100ml": "100 ml / 3.4 FL. OZ.",
    "volumeDecant": "10 ml (Atomizador de Viaje)",
    "price100ml": 85,
    "originalPrice100ml": 120,
    "priceDecant": 22,
    "originalPriceDecant": 30,
    "discountPercent": 29,
    "onSale": false,
    "timeOfDay": "dia",
    "infographicImage": "/assets/images/rasasi_hawas_verde_infografia.jpg",
    "rating": 5,
    "reviewCount": 1420,
    "gender": "Para Él",
    "vibes": [
      "🍋 CÍTRICOS",
      "🪵 AMADERADOS",
      "☀️ DÍA",
      "👑 TOP VENTAS"
    ],
    "vibeBadge": "🔥 Nuevo Lanzamiento Exclusivo",
    "badgeColor": "bg-emerald-600 text-white font-bold",
    "acordes": [
      "citricos",
      "oud_maderas"
    ],
    "imageMain": "/assets/images/rasasi_hawas_verde.jpg",
    "gallery": [
      "/assets/images/rasasi_hawas_verde.jpg",
      "/assets/images/rasasi_hawas_verde_infografia.jpg"
    ],
    "fraganticaUrl": "https://www.fragrantica.es/perfume/Rasasi/Hawas-for-Him-39449.html",
    "fraganticaQuery": "Rasasi Hawas Verde for Him",
    "noteIcons": [
      {
        "emoji": "🍋",
        "name": "Lima & Manzana"
      },
      {
        "emoji": "🪵",
        "name": "Pachulí & Cedro"
      },
      {
        "emoji": "🌊",
        "name": "Ámbar Gris & Almizcle"
      }
    ],
    "technicalTable": {
      "headNotes": "Lima fresca italiana, Manzana verde crocante, Romero y Bergamota",
      "heartNotes": "Cardamomo de Ceilán, Notas acuáticas marinas, Ciruela verde y Azahar",
      "baseNotes": "Pachulí noble, Madera de cedro, Ámbar gris mineral y Almizcle puro",
      "fragranceType": "Aromático Acuático Amaderado Fresco",
      "concentrationPct": "20% Aceite Puro de Dubái",
      "batchCodePrefix": "BATCH# RS-VERDE-2026",
      "origin": "Emiratos Árabes Unidos"
    },
    "performance": {
      "durationLabel": "12 a 16 Horas Comprobadas",
      "durationPct": 96,
      "projectionLabel": "Muy Pesada / Modo Bestia Cítrico",
      "projectionPct": 94,
      "seasonLabel": "Primavera / Verano / Calor Extremo",
      "seasonPct": 98
    },
    "inspiration": "Una variante ultra fresca y vibrante inspirada en la vegetación exuberante y costas del Golfo Pérsico.",
    "compositionText": "Abre con un estallido electrizante de lima verde y manzana crujiente que revitaliza los sentidos al instante. Evoluciona hacia un corazón especiado suave con cardamomo y notas marinas, anclándose en una base eterna de pachulí y ámbar gris.",
    "historyText": "Lanzamiento especial de Rasasi que fusiona el mítico ADN seductor de Hawas con una frescura verde explosiva diseñada para destacar en climas cálidos."
  }
];

export const VIBE_CATEGORIES = [
  { id: 'all', name: 'TODOS', icon: '✨' },
  { id: 'dulces', name: 'DULCES', icon: '🍬', filterTag: '🍬 DULCES' },
  { id: 'amaderados', name: 'AMADERADOS', icon: '🪵', filterTag: '🪵 AMADERADOS' },
  { id: 'citricos', name: 'CÍTRICOS', icon: '🍋', filterTag: '🍋 CÍTRICOS' },
  { id: 'day', name: 'DÍA', icon: '☀️', filterTag: '☀️ DÍA' },
  { id: 'night', name: 'NOCHE', icon: '🌙', filterTag: '🌙 NOCHE' },
  { id: 'viral', name: 'TOP VENTAS', icon: '👑', filterTag: '👑 TOP VENTAS' }
];

export const ACORDES_LIST = [
  { id: 'gourmand', name: 'Gourmand & Vainilla', icon: '🍯', count: '18 fragancias', badge: 'Dulces' },
  { id: 'citricos', name: 'Cítricos & Frutales', icon: '🍍', count: '19 fragancias', badge: 'Frescos' },
  { id: 'oud_maderas', name: 'Maderas Nobles & Cuero', icon: '🪵', count: '22 fragancias', badge: 'Amaderados' },
  { id: 'especiados', name: 'Especiados Cálidos & Café', icon: '🌶️', count: '14 fragancias', badge: 'Seductores' },
  { id: 'rosas', name: 'Florales Exóticos & Rosas', icon: '🌹', count: '6 fragancias', badge: 'Elegantes' }
];

export const BRANDS_LIST = [
  // Diseñador
  { name: 'HALLOWEEN', category: 'disenador', count: '1 fragancia', badge: 'Halloween Man X' },
  { name: "YVES D'ORGEVAL", category: 'disenador', count: '1 fragancia', badge: 'Sublime Red Paris' },
  // Árabes
  { name: 'LATTAFA', category: 'arabes', count: '11 fragancias', badge: 'Top #1 Viral' },
  { name: 'ARMAF', category: 'arabes', count: '10 fragancias', badge: 'Best Seller' },
  { name: 'AFNAN', category: 'arabes', count: '6 fragancias', badge: '9 PM Saga' },
  { name: 'RASASI', category: 'arabes', count: '6 fragancias', badge: 'Hawas Dynasty' },
  { name: 'FRENCH AVENUE', category: 'arabes', count: '3 fragancias', badge: 'Liquid Brun Niche' },
  { name: 'MAISON ALHAMBRA', category: 'arabes', count: '3 fragancias', badge: 'Edición Alta Gama' },
  { name: 'AL HARAMAIN', category: 'arabes', count: '2 fragancias', badge: 'Gold Edition' },
  { name: 'DUMONT PARIS', category: 'arabes', count: '2 fragancias', badge: 'Nitro Series' },
  { name: 'RAYHAAN', category: 'arabes', count: '2 fragancias', badge: 'Aroma Marino & Sol' },
  { name: 'BHARARA', category: 'arabes', count: '1 fragancia', badge: 'King Imperial' },
  { name: 'MOST PERFUME', category: 'arabes', count: '1 fragancia', badge: 'Rome Melancholia' }
];
