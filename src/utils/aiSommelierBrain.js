import { PERFUMES_DATA } from '../data/perfumes.js';

/**
 * Motor de Inteligencia del Sommelier ARKANO PERFUMERÍA (Yasmin)
 * 
 * Ofrece respuestas ultra realistas, cálidas y consultivas adaptadas a:
 * - Ocasión (citas, oficina, fiesta, calor/verano, frío, diario)
 * - Género (hombre, mujer, unisex)
 * - Notas y acordes (dulce/vainilla, cítrico/fresco, amaderado/oud, especiado)
 * - Decants de 10ml ($15 árabes / $30 diseñador)
 * - Rendimiento y fijación ("modo bestia" +14h)
 * - Autenticidad, sellos de fábrica y batch codes
 * - Consultas específicas por nombre de perfume o casa
 */

// Helper para normalizar texto
const clean = (str) => {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export function analyzeAndRespond(userQuery, conversationHistory = []) {
  const q = clean(userQuery);

  // Detectar si la consulta menciona directamente un perfume específico
  const mentionsSpecificPerfume = 
    q.includes('khamrah') || q.includes('sauvage') || q.includes('elixir') ||
    q.includes('club de nuit') || q.includes('cdnim') || q.includes('yara') ||
    q.includes('9 pm') || q.includes('9pm') || q.includes('amber oud') ||
    q.includes('hawas') || q.includes('bleu') || q.includes('libre') ||
    q.includes('oud wood') || q.includes('eros flame') || q.includes('erba pura') ||
    q.includes('asad') || (q.includes('king') && !q.includes('parking'));

  // 1. SALUDOS Y CONTACTO INICIAL (solo si no pregunta por un perfume específico)
  if (
    !mentionsSpecificPerfume && (
      /^(hola|buenas|buen dia|buenos dias|buenas tardes|buenas noches|hey|saludos|hola yasmin|quien eres)\b/.test(q) ||
      q === 'hola' || q === 'buenas' || q === 'que tal' || q === 'como estas' || q === 'que me recomiendas' || q === 'ayuda'
    )
  ) {
    return {
      replyText: `¡Hola! Qué placer saludarte 👑 Soy **Yasmin**, Sommelier de Alta Perfumería de **ARKANO PERFUMERÍA**.\n\nEstoy aquí para guiarte de forma personalizada entre el misterio y fijación legendaria de los **Perfumes Árabes de Dubái** y la distinción atemporal de las casas de **Diseñador (Dior, Chanel, YSL)**.\n\n¿Para quién sería tu próxima joya aromática? ¿Para ti o para un regalo especial? Cuéntame también qué notas o qué ocasión tienes en mente.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir')
      ].filter(Boolean),
      chips: [
        '👔 Para Caballero',
        '🌸 Para Dama',
        '👑 Árabes Virales de Dubái',
        '🧪 ¿Cómo funcionan los Decants?'
      ]
    };
  }

  // 2. CONSULTAS SOBRE DECANTS (10ML)
  if (
    q.includes('decant') || q.includes('decants') || q.includes('muestra') || 
    q.includes('muestras') || q.includes('10ml') || q.includes('viaje') ||
    q.includes('probar antes') || q.includes('tamaño pequeño') || q.includes('atomizador')
  ) {
    return {
      replyText: `¡Los **Decants de 10ml** son la mejor forma de explorar la alta perfumería sin comprometerte con un frasco entero! 🧪✨\n\n• **¿Qué es un decant?** Es una muestra de 10ml extraída cuidadosamente de la botella 100% original con sello de fábrica, envasada en un atomizador de vidrio de alta gama con spray dosificador.\n• **Rendimiento:** Te entrega entre **120 y 140 atomizaciones**, suficiente para 3 a 4 semanas de uso diario.\n• **Nuestros precios fijos:**\n  - 👑 **Perfumería Árabe de Dubái:** **$15.00 USD**\n  - ✨ **Diseñador Alta Costura:** **$30.00 USD**\n\n¿Te gustaría armar un set de 2 o 3 decants para encontrar tu fragancia firma?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man')
      ].filter(Boolean),
      chips: [
        '👑 Ver Árabes en Decant ($15)',
        '✨ Ver Diseñador en Decant ($30)',
        '💬 Armar pedido por WhatsApp'
      ]
    };
  }

  // 3. CITAS ROMÁNTICAS / SEDUCCIÓN / MAGNETISMO
  if (
    q.includes('cita') || q.includes('citas') || q.includes('seduc') || 
    q.includes('romance') || q.includes('pareja') || q.includes('conquistar') ||
    q.includes('sexy') || q.includes('atractivo') || q.includes('intimo') || 
    q.includes('cumplido') || q.includes('enamorar') || q.includes('ligar')
  ) {
    const isFemale = q.includes('mujer') || q.includes('dama') || q.includes('chica') || q.includes('femenin');
    
    if (isFemale) {
      return {
        replyText: `Para una cita romántica inolvidable, necesitas notas cálidas, dulces y sensuales que inviten a acercarse. 🌹\n\nTe recomiendo con los ojos cerrados:\n1. **YSL Libre Le Parfum**: Flor de azahar, miel dorada, azafrán y vainilla bourbon. Es magnética, sofisticada y empoderada.\n2. **Lattafa Khamrah**: Praliné belga, dátiles y canela sobre fondo de vainilla. Es adictiva al olfato y despierta fascinación inmediata.\n\nAmbas tienen fijación prolongada para brillar durante toda la velada.`,
        recommendations: [
          PERFUMES_DATA.find(p => p.id === 'ysl-libre-le-parfum'),
          PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah')
        ].filter(Boolean),
        chips: ['🧪 Probar en Decant 10ml', '🌸 Ver más opciones de dama', '💬 Consultar en WhatsApp']
      };
    }

    return {
      replyText: `Para citas y momentos íntimos, la clave es un perfume con calidez ambarada, especias seductoras y una estela que invite al contacto cercano. ✨\n\nMis dos recomendaciones infalibles para caballero son:\n1. **Lattafa Khamrah**: El mayor fenómeno viral de Oriente. Huele a licor fino, canela, praliné belga y dátiles con vainilla. ¡Las mujeres lo adoran instantáneamente!\n2. **Dior Sauvage Elixir**: La cumbre de la seducción masculina madura. Canela noble, lavanda y sándalo amaderado. Imponente, misterioso y arrollador.\n3. **Afnan 9 PM**: Manzana acaramelada, vainilla y haba tonka (estilo Ultra Male). Divertido, juvenil y sumamente seductor.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm')
      ].filter(Boolean),
      chips: ['🧪 Ver Decant de $15 (Khamrah)', '✨ Ver Decant de $30 (Dior)', '🌙 Para fiestas nocturnas']
    };
  }

  // 4. OFICINA / TRABAJO / DIARIO / PROFESIONAL
  if (
    q.includes('oficina') || q.includes('trabajo') || q.includes('formal') || 
    q.includes('diario') || q.includes('dia a dia') || q.includes('reunion') ||
    q.includes('profesional') || q.includes('firma') || q.includes('elegante para el dia')
  ) {
    return {
      replyText: `Para el ámbito profesional y oficina buscamos distinción, frescura impecable y presencia que transmita pulcritud sin hostigar el espacio. 💼👔\n\n• **Bleu de Chanel Parfum**: La obra maestra de la elegancia atemporal. Cedro noble, sándalo y un acorde cítrico refinado que proyecta éxito y liderazgo.\n• **Club de Nuit Intense Man**: Limón chispeante, abedul ahumado y almizcle. El rey absoluto de los cumplidos masculinos para uso diario.\n• **Club de Nuit Woman** (para dama): Rosa fresca, naranja y pachulí delicado estilo Coco Mademoiselle. Sumamente distinguida.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'bleu-de-chanel-parfum'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-woman')
      ].filter(Boolean),
      chips: ['✨ Ver Bleu de Chanel', '👑 Ver Club de Nuit ($54.90)', '🧪 Probar en Decant 10ml']
    };
  }

  // 5. CLIMA CÁLIDO / VERANO / CALOR / PLAYA / GYM / FRESCURA
  if (
    q.includes('calor') || q.includes('verano') || q.includes('fresco') || 
    q.includes('fresca') || q.includes('playa') || q.includes('sol') || 
    q.includes('acuatico') || q.includes('marino') || q.includes('citrico') || 
    q.includes('limpio') || q.includes('gym')
  ) {
    return {
      replyText: `Para el calor y días soleados necesitas notas efervescentes, acuáticas y frutales que proyecten frescura sin volverse pesadas. 🌊☀️\n\n• **Rasasi Hawas for Him**: Una maravilla acuática de Dubái. Manzana verde crujiente, ciruela, notas marinas y ámbar gris. Tiene una duración que supera a casi cualquier perfume de diseñador veraniego.\n• **Armaf Club de Nuit Intense Man**: Su salida cítrica de limón de Sicilia y bergamota te mantiene fresco, con un secado ahumado muy masculino.\n• **Bleu de Chanel Parfum**: Limpieza y sofisticación fresca para los días de calor en ciudad.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'rasasi-hawas-for-him'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'bleu-de-chanel-parfum')
      ].filter(Boolean),
      chips: ['🍏 Ver Hawas de Rasasi', '👑 Ver Club de Nuit ($54.90)', '🧪 Pedir Decant de $15']
    };
  }

  // 6. FIJACIÓN EXTREMA / "MODO BESTIA" / DURACIÓN TITÁNICA (+14H)
  if (
    q.includes('bestia') || q.includes('duracion') || q.includes('duracion') || 
    q.includes('dure') || q.includes('fijacion') || q.includes('estela') || 
    q.includes('proyeccion') || q.includes('potente') || q.includes('fuerte') ||
    q.includes('horas') || q.includes('mucho tiempo')
  ) {
    return {
      replyText: `Si tu prioridad número uno es que el perfume permanezca en tu piel de **12 a 16+ horas** y se quede impregnado en tu ropa durante días, estos son nuestros "Modos Bestia" oficiales: 🔥👑\n\n1. **Al Haramain Amber Oud (Gold Edition)**: Concentración *Extrait de Parfum* pura. Melón dulce, piña, bergamota y ámbar. Su proyección llena habitaciones enteras.\n2. **Dior Sauvage Elixir**: El perfume de diseñador más potente jamás creado. Basta con 2 o 3 atomizaciones para una estela densa que dura más de 16 horas.\n3. **Armaf Club de Nuit Intense Man**: Famoso mundialmente por su estela pesada de más de 2 metros que genera cumplidos a tu paso.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'al-haramain-amber-oud-gold'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man')
      ].filter(Boolean),
      chips: ['👑 Ver Amber Oud Gold (Extrait)', '✨ Ver Dior Sauvage Elixir', '🧪 Probar Decant de 10ml']
    };
  }

  // 7. DULCES / VAINILLA / GOURMAND / CANELA
  if (
    q.includes('dulce') || q.includes('vainilla') || q.includes('gourmand') || 
    q.includes('canela') || q.includes('caramelo') || q.includes('praline') || 
    q.includes('datil') || q.includes('cremoso') || q.includes('miel') || q.includes('postre')
  ) {
    return {
      replyText: `Para paladares olfativos que aman la dulzura rica, cremosa y embriagadora: 🍯🧁\n\n• **Lattafa Khamrah** (Unisex): Praliné de avellana, canela, dátiles orientales y vainilla bourbon. Es cálido, licoroso y ultra adictivo.\n• **Lattafa Yara (Pink)** (Dama): Fresas maduras con crema batida, malvaviscos y vainilla aterciopelada. Es tierno, juvenil y dulce.\n• **YSL Libre Le Parfum** (Dama): Miel pura, flor de azahar, azafrán y vainilla bourbon intensa. Lujo supremo.\n• **Afnan 9 PM** (Caballero): Manzana horneada con canela, haba tonka y vainilla. El rey dulce nocturno.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-yara'),
        PERFUMES_DATA.find(p => p.id === 'ysl-libre-le-parfum'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm')
      ].filter(Boolean),
      chips: ['👑 Ver Lattafa Khamrah ($58)', '🌸 Ver Yara Rosa ($46.90)', '🧪 Decant de 10ml ($15)']
    };
  }

  // 8. AMADERADOS / OUD / CUERO / TABACO / ESPECIADOS NOBLES
  if (
    q.includes('madera') || q.includes('amaderad') || q.includes('oud') || 
    q.includes('cuero') || q.includes('tabaco') || q.includes('humo') || 
    q.includes('sandalo') || q.includes('cedro') || q.includes('cafe') || q.includes('especiad')
  ) {
    return {
      replyText: `Las maderas nobles y el Oud son el corazón de la alta perfumería tradicional. Aportan una presencia aristocrática, madura y misteriosa: 🌲🪵\n\n• **Tom Ford Oud Wood**: La madera de Oud más refinada y lujosa de Occidente. Cardamomo, sándalo, palo de rosa y ámbar. Pura elegancia silenciosa.\n• **Lattafa Asad**: Pimienta negra, café tostado, tabaco noble, iris y ámbar seco. Es un clon brillante y accesible de Sauvage Elixir.\n• **Dior Sauvage Elixir**: Canela fina, lavanda francesa y sándalo cremoso de Nueva Caledonia. Potencia amaderada inigualable.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'tom-ford-oud-wood'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-asad'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir')
      ].filter(Boolean),
      chips: ['✨ Ver Tom Ford Oud Wood', '👑 Ver Lattafa Asad ($49.90)', '🧪 Probar Decant de 10ml']
    };
  }

  // 9. EXCLUSIVO PARA MUJER / DAMA / FEMENINO
  if (
    q.includes('mujer') || q.includes('dama') || q.includes('femenin') || 
    q.includes('esposa') || q.includes('novia') || q.includes('chica') || 
    q.includes('para ella') || q.includes('madre') || q.includes('mama')
  ) {
    return {
      replyText: `Nuestra colección femenina reúne verdaderas joyas para resaltar la belleza, elegancia y magnetismo: 🌸💎\n\n1. **Lattafa Yara (Pink)** ($46.90): El perfume más viral de Dubái para mujer. Fresas con crema, orquídea heliotropo y vainilla suave. Dulce, delicado y súper halagado.\n2. **YSL Libre Le Parfum** ($178): Para la mujer imponente. Miel tibia, azafrán, flor de azahar y vainilla bourbon. Sofisticación de pasarela parisina.\n3. **Armaf Club de Nuit Woman** ($60.01): Elegancia clásica estilo Coco Mademoiselle. Naranja brillante, rosa de Damasco, jazmín y pachulí limpio.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-yara'),
        PERFUMES_DATA.find(p => p.id === 'ysl-libre-le-parfum'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-woman')
      ].filter(Boolean),
      chips: ['🍓 Ver Yara ($46.90)', '✨ Ver YSL Libre Le Parfum', '🧪 Ver Decant de $15 o $30']
    };
  }

  // 10. EXCLUSIVO PARA HOMBRE / CABALLERO / MASCULINO
  if (
    q.includes('hombre') || q.includes('caballero') || q.includes('masculin') || 
    q.includes('esposo') || q.includes('novio') || q.includes('chico') || 
    q.includes('para el') || q.includes('padre') || q.includes('papa')
  ) {
    return {
      replyText: `Para caballeros disponemos de las fragancias más elogiadas y magnéticas del mercado: 👔👑\n\n1. **Armaf Club de Nuit Intense Man** ($54.90): El rey indiscutible de cumplidos. Limón ahumado, abedul y almizcle. Imponente para el día y la noche.\n2. **Dior Sauvage Elixir** ($185): Máxima presencia y estatus. Canela, lavanda fina y sándalo amaderado. Potencia pura.\n3. **Afnan 9 PM** ($52): Manzana dulce, lavanda y vainilla. La fragancia favorita para salir de fiesta y conquistar.\n4. **Bleu de Chanel Parfum** ($198): Elegancia sobria, versatilidad y estatus corporativo.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm'),
        PERFUMES_DATA.find(p => p.id === 'bleu-de-chanel-parfum')
      ].filter(Boolean),
      chips: ['👑 Ver Club de Nuit ($54.90)', '✨ Ver Dior Sauvage Elixir', '🧪 Decants de 10ml']
    };
  }

  // 11. UNISEX / PARA COMPARTIR EN PAREJA
  if (q.includes('unisex') || q.includes('compartir') || q.includes('ambos') || q.includes('neutro')) {
    return {
      replyText: `Los perfumes unisex son creaciones donde no hay etiquetas, solo arte olfativo puro y magnetismo universal: 💎✨\n\n• **Lattafa Khamrah**: Elixir dulce licoroso con canela y dátiles. Queda fabuloso tanto en hombre como en mujer.\n• **Al Haramain Amber Oud Gold**: Frutas tropicales, melón dulce y ámbar dorado con fijación de +16h.\n• **Xerjoff Erba Pura**: Una explosión cítrica mediterránea con almizcle sensual.\n• **Tom Ford Oud Wood**: Maderas aristocráticas y cardamomo distinguido.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'al-haramain-amber-oud-gold'),
        PERFUMES_DATA.find(p => p.id === 'xerjoff-erba-pura')
      ].filter(Boolean),
      chips: ['👑 Ver Khamrah ($58)', '🍈 Ver Amber Oud Gold', '🧪 Probar Decants de $15']
    };
  }

  // 12. AUTENTICIDAD, SELLOS DE FÁBRICA Y BATCH CODES
  if (
    q.includes('original') || q.includes('autentic') || q.includes('copia') || 
    q.includes('falso') || q.includes('replica') || q.includes('batch') || 
    q.includes('sello') || q.includes('seguridad') || q.includes('garantia')
  ) {
    return {
      replyText: `En **ARKANO PERFUMERÍA** la autenticidad es innegociable y nuestro mayor pilar de confianza: 🛡️🔒\n\n1. **100% Originales Sellados**: Todos nuestros perfumes provienen de distribuidores oficiales de Dubái (Emiratos Árabes Unidos) y de las casas matrices de diseñador en Francia e Italia.\n2. **Sello Holográfico de Fábrica**: Cada caja de perfumería árabe incluye su sello holográfico 3D de alta seguridad que certifica que no ha sido alterado.\n3. **Batch Code Coincidente**: El código de lote grabado con láser en la base de la botella coincide exactamente con el código impreso en la caja, verificable en bases de datos cosméticas internacionales.\n4. **Garantía Total**: Si tu producto no cumple con los estándares de originalidad oficial, te devolvemos el 100% de tu dinero.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir')
      ].filter(Boolean),
      chips: ['📦 Ver Catálogo Completo', '🧪 Probar Decants de 10ml', '💬 Consultar Asesor Humano']
    };
  }

  // 13. PRECIOS / OFERTAS / PROMOCIONES
  if (
    q.includes('precio') || q.includes('costo') || q.includes('cuanto vale') || 
    q.includes('cuanto cuesta') || q.includes('oferta') || q.includes('descuento') || 
    q.includes('rebaja') || q.includes('barato') || q.includes('economico')
  ) {
    const saleItems = PERFUMES_DATA.filter(p => p.onSale);
    return {
      replyText: `Nuestros precios son directos y justos, con opciones para todos los presupuestos: 💰✨\n\n• **Decants Muestras 10ml**: Desde **$15.00 USD** (Árabes) y **$30.00 USD** (Diseñador).\n• **Perfumes Árabes en Botella Completa**: Desde **$46.90 USD** hasta **$79.90 USD** (concentraciones de lujo a una fracción del costo de diseñador).\n• **Perfumes de Diseñador en Botella Completa**: Desde **$125.00 USD** (Versace Eros Flame) hasta piezas icónicas como Dior Sauvage Elixir ($185) y Chanel ($198).\n\nActualmente tenemos fragancias selectas con precio especial de descuento:`,
      recommendations: saleItems.slice(0, 3),
      chips: ['🔥 Ver Ofertas Activas', '🧪 Ver Decants de $15', '💬 Consultar por WhatsApp']
    };
  }

  // 14. CONSULTAS ESPECÍFICAS POR NOMBRE DE PERFUME
  if (q.includes('khamrah')) {
    const p = PERFUMES_DATA.find(x => x.id === 'lattafa-khamrah');
    return {
      replyText: `**Lattafa Khamrah** es la joya más codiciada de la perfumería árabe actual. 👑\n\n• **A qué huele:** Canela tibia, praliné belga cremoso, dátiles dulces, haba tonka y vainilla con un toque licoroso sofisticado (inspirado en la vibra de Angels' Share).\n• **Cuándo usarlo:** Noches frescas, citas románticas, salidas de otoño e invierno y eventos especiales.\n• **Fijación:** 12h a 14h en piel, días enteros en ropa.\n• **Disponible en:** Frasco de 100ml ($58.00) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Pedir Decant de $15', '🛒 Comprar Frasco ($58)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('sauvage') || q.includes('elixir')) {
    const p = PERFUMES_DATA.find(x => x.id === 'dior-sauvage-elixir');
    return {
      replyText: `**Dior Sauvage Elixir** no es un perfume ordinario, es un elixir concentrado de alta costura de Christian Dior París. 👑✨\n\n• **A qué huele:** Una explosión de canela noble y cardamomo, corazón de lavanda francesa silvestre y fondo opulento de maderas nobles y sándalo de Nueva Caledonia.\n• **Por qué es legendario:** Proyecta como una bestia con apenas 2 o 3 atomizaciones y se mantiene vivo más de 16 horas.\n• **Presentaciones:** Frasco de 60ml ($185.00) y Decant de 10ml ($30.00).`,
      recommendations: [p],
      chips: ['🧪 Probar Decant ($30)', '🛒 Comprar Frasco ($185)', '💬 Consultar en WhatsApp']
    };
  }

  if (q.includes('club de nuit') || q.includes('cdnim')) {
    const p = PERFUMES_DATA.find(x => x.id === 'armaf-club-de-nuit-intense-man');
    return {
      replyText: `**Armaf Club de Nuit Intense Man** es conocido mundialmente como "la bestia negra de los cumplidos". 🖤🔥\n\n• **Perfil:** Salida fresca y cítrica de limón, lima y grosella negra, que evoluciona hacia un abedul ahumado sumamente masculino, jazmín y fondo de ámbar gris y almizcle (la mejor alternativa a Creed Aventus).\n• **Ideal para:** Diario, oficina, salidas nocturnas y clima templado a cálido. ¡Genera elogios garantizados!\n• **Presentaciones:** Frasco de 105ml ($54.90) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de 10ml ($15)', '🛒 Frasco Completo ($54.90)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('yara')) {
    const p = PERFUMES_DATA.find(x => x.id === 'lattafa-yara');
    return {
      replyText: `**Lattafa Yara (Pink)** es el perfume árabe femenino más viral de todas las redes sociales. 🍓🌸\n\n• **A qué huele:** A fresas maduras con crema batida, orquídea heliotropo tropical, malvaviscos esponjosos y vainilla cremosa. Es un aroma tierno, dulce y juvenil que enamora al primer olfato.\n• **Uso:** Perfecto para uso diario, primavera, citas y salidas informales.\n• **Presentaciones:** Frasco de 100ml ($46.90) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de 10ml ($15)', '🛒 Frasco Yara ($46.90)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('9 pm') || q.includes('9pm') || q.includes('afnan')) {
    const p = PERFUMES_DATA.find(x => x.id === 'afnan-9-pm');
    return {
      replyText: `**Afnan 9 PM** es el rey supremo de las salidas nocturnas y fiestas de fin de semana. 🌙🎉\n\n• **A qué huele:** Manzana roja dulce con canela y lavanda fresca, con un secado cálido y seductor de vainilla, ámbar y haba tonka (inspirado en Jean Paul Gaultier Ultra Male con mayor duración).\n• **Estela:** Más de 12 horas con proyección llamativa que destaca en ambientes con música y gente.\n• **Presentaciones:** Frasco de 100ml ($52.00) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de 10ml ($15)', '🛒 Frasco 9 PM ($52)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('amber oud') || q.includes('al haramain')) {
    const p = PERFUMES_DATA.find(x => x.id === 'al-haramain-amber-oud-gold');
    return {
      replyText: `**Al Haramain Amber Oud (Gold Edition)** es la definición de opulencia dorada en concentración *Extrait de Parfum*. 👑🍈\n\n• **Notas:** Melón jugoso, piña dulce, bergamota verde, ámbar cálido y notas amaderadas de fondo.\n• **Rendimiento:** Considerado un monstruo de proyección (+16 horas comprobadas). 3 atomizaciones son más que suficientes para todo el día.\n• **Presentaciones:** Frasco de 60ml ($79.90) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de 10ml ($15)', '🛒 Frasco Gold ($79.90)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('hawas') || q.includes('rasasi')) {
    const p = PERFUMES_DATA.find(x => x.id === 'rasasi-hawas-for-him');
    return {
      replyText: `**Rasasi Hawas for Him** es el titán acuático de Dubái. 🌊🍏\n\n• **Notas:** Manzana verde crocante, bergamota italiana, canela sutil, ciruela jugosa, notas marinas y una base magnética de ámbar gris y almizcle.\n• **Por qué destaca:** A diferencia de la mayoría de perfumes frescos que duran poco, Hawas dura fácilmente 10 a 12 horas proyectando una frescura limpia y sensual.\n• **Presentaciones:** Frasco de 100ml ($64.90) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de 10ml ($15)', '🛒 Frasco Hawas ($64.90)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('chanel') || q.includes('bleu')) {
    const p = PERFUMES_DATA.find(x => x.id === 'bleu-de-chanel-parfum');
    return {
      replyText: `**Bleu de Chanel Parfum** es la expresión más pura y concentrada del clásico de Chanel París. 💙✨\n\n• **A qué huele:** Notas cítricas nobles, menta fresca, madera de cedro majestuosa y sándalo de Nueva Caledonia ultra cremoso.\n• **El aura que proyecta:** Autoridad, estatus elevado, caballerosidad y pulcritud absoluta en cualquier circunstancia.\n• **Presentaciones:** Frasco de 100ml ($198.00) y Decant de 10ml ($30.00).`,
      recommendations: [p],
      chips: ['🧪 Probar Decant ($30)', '🛒 Frasco Bleu Chanel', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('libre') || q.includes('ysl')) {
    const p = PERFUMES_DATA.find(x => x.id === 'ysl-libre-le-parfum');
    return {
      replyText: `**YSL Libre Le Parfum** es la versión más intensa, cálida y opulenta de la saga Libre de Yves Saint Laurent. 🌸🔥\n\n• **A qué huele:** Acorde de miel tibia, azafrán de los jardines de Ourika en Marruecos, flor de azahar radiante y vainilla bourbon de Madagascar.\n• **Para quién es:** Para una mujer con personalidad magnética, sofisticada y segura de sí misma.\n• **Presentaciones:** Frasco de 90ml ($178.00) y Decant de 10ml ($30.00).`,
      recommendations: [p],
      chips: ['🧪 Probar Decant ($30)', '🛒 Frasco Libre Le Parfum', '💬 Pedir por WhatsApp']
    };
  }

  // 15. INSPIRACIONES Y PARECIDOS FAMOSOS (CLONES DE ÉXITO MUNDIAL)
  if (q.includes('aventus') || q.includes('creed')) {
    const p = PERFUMES_DATA.find(x => x.id === 'armaf-club-de-nuit-intense-man');
    return {
      replyText: `¡Para los amantes de **Creed Aventus**, tenemos el clon número 1 del mundo! 👑🔥\n\n**Armaf Club de Nuit Intense Man** captura magistralmente la esencia de Aventus: limón ahumado, abedul oscuro, grosella negra y almizcle. En pruebas a ciegas, la mayoría de expertos no puede distinguirlos, pero Club de Nuit cuesta una fracción del precio ($54.90 vs +$400) y tiene mayor duración comprobada.\n\nDisponible en botella de 105ml ($54.90) y en Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Pedir Decant de $15', '🛒 Frasco Club de Nuit ($54.90)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('angels share') || q.includes('angel share') || q.includes('kilian')) {
    const p = PERFUMES_DATA.find(x => x.id === 'lattafa-khamrah');
    return {
      replyText: `¡Si buscas la vibra licorosa y gourmand de **Angels' Share de Kilian**, tu perfume indiscutible es **Lattafa Khamrah**! 🍯👑\n\nKhamrah ofrece esa misma apertura embriagadora de canela fina, praliné de chocolate belga, dátiles y vainilla aterciopelada, en un frasco de cristal pesado deslumbrante. Es el mayor éxito viral de Dubái.\n\nDisponible en 100ml ($58.00) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de $15 (Khamrah)', '🛒 Frasco Khamrah ($58)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('ultra male') || q.includes('ultramale') || q.includes('gaultier') || q.includes('le male')) {
    const p = PERFUMES_DATA.find(x => x.id === 'afnan-9-pm');
    return {
      replyText: `¡Si te gusta **Jean Paul Gaultier Ultra Male**, te va a fascinar **Afnan 9 PM**! 🌙🔥\n\n9 PM toma la manzana acaramelada, canela y vainilla seductora de Ultra Male pero con una calidad de aceites árabes que lo hace proyectar por más de 12 horas seguidas. Es el rey de las fiestas y discotecas.\n\nDisponible en 100ml ($52.00) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Pedir Decant ($15)', '🛒 Frasco 9 PM ($52)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('erba pura') || q.includes('xerjoff')) {
    const p1 = PERFUMES_DATA.find(x => x.id === 'xerjoff-erba-pura');
    const p2 = PERFUMES_DATA.find(x => x.id === 'al-haramain-amber-oud-gold');
    return {
      replyText: `¡Una de las firmas más aclamadas de la perfumería nicho! 🍈✨\n\nEn ARKANO tenemos dos joyas absolutas con este ADN de frutas mediterráneas, melón dulce y almizcle blanco seductor:\n1. **Xerjoff Erba Pura Original** ($275.00): La obra de arte italiana original en frasco de terciopelo turquesa.\n2. **Al Haramain Amber Oud Gold Edition** ($79.90): El clon árabe más potente en concentración *Extrait de Parfum*, con estela de +16 horas.\n\nAmbos disponibles en botella completa o Decant de 10ml.`,
      recommendations: [p1, p2].filter(Boolean),
      chips: ['✨ Ver Xerjoff Erba Pura', '👑 Ver Amber Oud Gold ($79.90)', '🧪 Probar en Decant']
    };
  }

  if (q.includes('coco mademoiselle') || q.includes('mademoiselle')) {
    const p = PERFUMES_DATA.find(x => x.id === 'armaf-club-de-nuit-woman');
    return {
      replyText: `¡Para recrear la elegancia parisina de **Chanel Coco Mademoiselle**, te recomendamos **Armaf Club de Nuit Woman**! 🌸✨\n\nCombina naranja bergamota brillante, corazón de rosa de Damasco y jazmín silvestre, con una base limpia de pachulí y vainilla. Una alternativa de altísima calidad por solo **$60.01 USD** (o **$15.00 USD** en decant).`,
      recommendations: [p],
      chips: ['🧪 Decant de $15', '🛒 Frasco Completo ($60.01)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('invictus') || q.includes('paco rabanne')) {
    const p = PERFUMES_DATA.find(x => x.id === 'rasasi-hawas-for-him');
    return {
      replyText: `¡Si te fascina la vibra acuática y cumplidora de **Invictus Aqua**, **Rasasi Hawas for Him** te va a encantar y la supera en duración! 🌊🍏\n\nCombina manzana crujiente, ciruela, canela noble, notas marinas y un fondo magnético de ámbar gris que dura más de 12 horas en piel. Un éxito garantizado para el día a día y calor.\n\nDisponible en 100ml ($64.90) y Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🍏 Ver Hawas ($64.90)', '🧪 Pedir Decant de $15', '💬 Pedir por WhatsApp']
    };
  }

  // 16. COMPARACIÓN: ÁRABES VS DISEÑADOR
  if (
    (q.includes('arabe') && q.includes('disenador')) || 
    q.includes('diferencia') || q.includes('cual es mejor')
  ) {
    return {
      replyText: `¡Una de las preguntas más fascinantes en perfumería! 👑 vs ✨\n\n• **Perfumes Árabes (Dubái):**\n  - Destacan por su **concentración altísima de aceites (18% a 28%)** y fijación que supera las 12 a 16 horas.\n  - Son fragancias potentes, especiadas, gourmand o ambaradas con un valor inigualable ($46 - $79 USD).\n\n• **Perfumes de Diseñador (Francia/Italia):**\n  - Destacan por el **balance olfativo magistral**, estatus internacional y materias primas aristocráticas (Chanel, Dior, Tom Ford).\n  - Son sinónimo de lujo atemporal y sofisticación global ($125 - $275 USD).\n\nEn ARKANO tenemos ambas opciones 100% originales para que elijas según tu gusto o las pruebes en **Decants de 10ml** ($15 y $30).`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir')
      ].filter(Boolean),
      chips: ['👑 Ver Joyas Árabes', '✨ Ver Joyas de Diseñador', '🧪 Probar en Decants']
    };
  }

  // 16. RESPUESTA INTELIGENTE DINÁMICA (Búsqueda semántica por palabras clave o similitud)
  const matchingPerfumes = PERFUMES_DATA.filter(p => {
    const textToMatch = clean(`${p.name} ${p.brand} ${p.collection} ${p.gender} ${p.fragranceProfile?.family || ''} ${p.acordes?.join(' ') || ''}`);
    const words = q.split(/\s+/).filter(w => w.length > 2);
    return words.some(w => textToMatch.includes(w));
  });

  if (matchingPerfumes.length > 0) {
    const topMatches = matchingPerfumes.slice(0, 3);
    const names = topMatches.map(p => `**${p.brand} ${p.name}**`).join(', ');
    return {
      replyText: `Basándome en lo que buscas, estas opciones de nuestro catálogo encajan magníficamente: ${names}.\n\nCada una cuenta con sello holográfico, batch code verificado y disponibilidad inmediata en botella completa o en **Decant de 10ml** para que pruebes su fijación en tu piel. ¿Te gustaría conocer las notas específicas de alguna de ellas?`,
      recommendations: topMatches,
      chips: [
        `Ver ${topMatches[0].name}`,
        '🧪 Probar en Decant 10ml',
        '💬 Asesoría por WhatsApp'
      ]
    };
  }

  // 17. FALLBACK ELEGANTE Y CONSULTIVO (NUNCA DICE SIEMPRE LO MISMO)
  const fallbacks = [
    {
      replyText: `¡Interesante consulta! En el universo de **ARKANO PERFUMERÍA** cada piel reacciona de manera única a las notas aromáticas.\n\nPara orientarte con total precisión: ¿te inclinas más por un aroma **dulce y cálido** (vainilla, canela, praliné), algo **fresco y cítrico** para el día a día, o una **madera especiada** con presencia imponente?\n\nAquí tienes dos de nuestras fragancias más deseadas de la temporada:`,
      recs: [
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah')
      ].filter(Boolean),
      chips: ['🍯 Busco algo Dulce', '🌊 Busco algo Fresco', '🔥 Quiero Máxima Duración']
    },
    {
      replyText: `Con gusto te asesoro personalmente. Si estás buscando dar con tu próximo aroma firma, te recomiendo empezar decidiendo la ocasión de uso: ¿lo prefieres para el **trabajo/oficina**, para **salir de noche y fiestas**, o para **citas románticas**?\n\nRecuerda que todas nuestras fragancias están disponibles en **Decants de 10ml** ($15 Árabes / $30 Diseñador) para probar antes de comprar.`,
      recs: [
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm')
      ].filter(Boolean),
      chips: ['💼 Para el Trabajo', '🌙 Para la Noche', '🧪 Ver Decants de 10ml']
    },
    {
      replyText: `¡Excelente inquietud! En perfumería de nicho y de diseñador tenemos alternativas para cada gusto. Si me dices si buscas algo para **caballero**, para **dama** o un aroma **unisex** para compartir, te daré la selección exacta que mejor se adapte a ti.\n\nTambién puedes hablar con uno de nuestros sommeliers humanos en WhatsApp para atención inmediata.`,
      recs: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-yara'),
        PERFUMES_DATA.find(p => p.id === 'bleu-de-chanel-parfum')
      ].filter(Boolean),
      chips: ['👔 Para Caballero', '🌸 Para Dama', '💎 Colección Unisex']
    }
  ];

  // Alterna dinámicamente según la longitud del mensaje o turno para no repetir nunca
  const selectedFallback = fallbacks[q.length % fallbacks.length];

  return {
    replyText: selectedFallback.replyText,
    recommendations: selectedFallback.recs,
    chips: selectedFallback.chips
  };
}
