import { PERFUMES_DATA } from '../data/perfumes.js';

/**
 * Motor de Asesoría Real de Alta Perfumería ARKANO
 * 
 * Enfoque: Asesor de ventas de boutique de lujo real:
 * - Cercano, empático, profesional y seguro.
 * - Cero tecnicismos crípticos (pirámides olfativas rígidas, compuestos químicos o fórmulas).
 * - Explicaciones prácticas y sensoriales: a qué huele en la vida real, qué cumplidos genera y en qué momentos usarlo.
 * - Recomendaciones orientadas a soluciones: decants de 10ml para probar en piel antes de comprar frascos enteros.
 * - Preguntas consultivas inteligentes para ayudar a decidir.
 */

// Normalizador de texto para emparejamiento semántico
const clean = (str) => {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

export function analyzeAndRespond(userQuery, conversationHistory = []) {
  const q = clean(userQuery);

  // 1. SALUDOS Y CONTACTO INICIAL
  if (
    /^(hola|buenas|buen dia|buenos dias|buenas tardes|buenas noches|hey|saludos|que tal|como estas|quien eres)\b/.test(q) ||
    q === 'hola' || q === 'buenas' || q === 'que tal' || q === 'ayuda' || q === 'asesoria'
  ) {
    return {
      replyText: `¡Hola! Qué gusto saludarte 👑 Soy tu asesor de fragancias aquí en **ARKANO PERFUMERÍA**.\n\nMi trabajo es ayudarte a encontrar ese aroma que de verdad vaya con tu estilo y te haga sentir increíble, sin enredos ni tecnicismos aburridos.\n\nCuéntame un poco sobre ti: ¿buscas un perfume para ti o para hacer un regalo? ¿Y en qué ocasiones te gustaría lucirlo (trabajo diario, citas, salidas de noche o para llamar la atención)?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man')
      ].filter(Boolean),
      chips: [
        '👔 Para el trabajo / Diario',
        '🌙 Para citas y salidas',
        '👑 Árabes con fijación extrema',
        '🎁 Quiero hacer un regalo',
        '🧪 ¿Cómo son los Decants de 10ml?'
      ]
    };
  }

  // 2. EXPLICACIÓN PRÁCTICA DE DECANTS DE 10ML
  if (
    q.includes('decant') || q.includes('muestra') || q.includes('10ml') || 
    q.includes('probar antes') || q.includes('pequeño') || q.includes('atomizador') ||
    q.includes('viaje') || q.includes('como funciona el decant')
  ) {
    return {
      replyText: `Los **Decants de 10ml** son la opción más práctica e inteligente si quieres probar un perfume en tu propia piel antes de decidirte por la botella entera. 🧪✨\n\n• **¿Cómo lo preparamos?** Extraemos 10ml directamente de la botella 100% original con sello de fábrica y lo envasamos en un atomizador de vidrio de viaje con spray dosificador.\n• **¿Cuánto rinde?** Te da entre **120 y 140 aplicaciones**, lo que significa que puedes usarlo todos los días durante casi un mes.\n• **Precios fijos:**\n  - **Perfumes Árabes:** **$15.00 USD**\n  - **Perfumes de Diseñador:** **$30.00 USD**\n\nMuchos clientes se llevan un set de 2 o 3 decants para rotar según el día o la noche. ¿Te gustaría que te arme una selección personalizada?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'rasasi-hawas-for-him')
      ].filter(Boolean),
      chips: [
        '👑 Ver Árabes en Decant ($15)',
        '✨ Ver Diseñador en Decant ($30)',
        '💬 Armar mi set por WhatsApp'
      ]
    };
  }

  // 3. CITAS ROMÁNTICAS / SEDUCCIÓN / CONQUISTAR / NOCHES ÍNTIMAS
  if (
    q.includes('cita') || q.includes('seduc') || q.includes('romant') || 
    q.includes('conquistar') || q.includes('sexy') || q.includes('atractiv') || 
    q.includes('pareja') || q.includes('novia') || q.includes('novio') ||
    q.includes('cumplido') || q.includes('llamar la atencion')
  ) {
    const isFemale = q.includes('mujer') || q.includes('dama') || q.includes('chica') || q.includes('ella');

    if (isFemale) {
      return {
        replyText: `Para una cita romántica, el secreto está en un aroma cálido, femenino y envolvente que invite a acercarse. 🌹\n\nMis dos recomendaciones favoritas son:\n• **YSL Libre Le Parfum**: Huele a flores blancas con miel tibia y un toque de vainilla dulce. Transmite seguridad, elegancia y sensualidad pura.\n• **Lattafa Khamrah**: Es una delicia que recuerda a canela fina, dátiles y chocolate belga praliné. Es adictivo y deja una estela imposible de olvidar.\n\nAmbos tienen fijación de más de 10 horas. ¿Prefieres una vibra más elegante de diseñador o algo más dulce y acogedor?`,
        recommendations: [
          PERFUMES_DATA.find(p => p.id === 'ysl-libre-le-parfum'),
          PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah')
        ].filter(Boolean),
        chips: ['🧪 Probar Decant de 10ml', '🌸 Ver más opciones de dama', '💬 Consultar por WhatsApp']
      };
    }

    return {
      replyText: `Para una cita, quieres un aroma que se sienta seductor, masculino y cálido al acercarse, no algo estridente que agobie. ✨\n\nAquí tienes dos ganadores absolutos:\n• **Lattafa Khamrah**: El perfume árabe más viral por una buena razón. Huele a licor fino, canela dulce, dátiles y vainilla cremosa. A las mujeres les fascina y siempre preguntan qué llevas puesto.\n• **Dior Sauvage Elixir**: Si buscas presencia imponente, masculinidad madura y misterio, este es el rey. Canela noble, lavanda suave y maderas oscuras con solo 2 atomizaciones.\n• **Afnan 9 PM**: Más juvenil y coqueto. Manzana acaramelada con vainilla, perfecto para salir a cenar o tomar algo.\n\n¿Te inclinas más por ese toque dulce licoroso o algo más especiado y formal?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm')
      ].filter(Boolean),
      chips: ['🧪 Probar Khamrah en Decant ($15)', '✨ Ver Sauvage Elixir ($30)', '💬 Pedir por WhatsApp']
    };
  }

  // 4. TRABAJO / OFICINA / DÍA A DÍA / PROFESIONAL / UNIVERSIDAD
  if (
    q.includes('oficina') || q.includes('trabajo') || q.includes('diario') || 
    q.includes('dia a dia') || q.includes('profesional') || q.includes('formal') || 
    q.includes('reunion') || q.includes('universidad') || q.includes('firma')
  ) {
    return {
      replyText: `Para el trabajo o el día a día, la clave es oler a pulcritud, clase y éxito sin cansar ni invadir el espacio de los demás. 💼👔\n\nTe recomiendo:\n• **Armaf Club de Nuit Intense Man**: El indiscutible rey de los cumplidos masculinos. Abre con un limón fresco y luego se transforma en una madera ahumada limpia muy atractiva. Es un caballo de batalla para todos los días.\n• **Bleu de Chanel Parfum**: La cúspide de la elegancia corporativa. Cítricos nobles con madera de cedro y sándalo cremoso. Transmite autoridad y pulcritud absoluta.\n• **Club de Nuit Woman** (para dama): Elegancia estilo Chanel Coco Mademoiselle con rosa fresca, naranja y pachulí limpio.\n\n¿Buscas algo de uso rudo para todos los días o más enfocado a reuniones ejecutivas?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'bleu-de-chanel-parfum'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-woman')
      ].filter(Boolean),
      chips: ['👑 Ver Club de Nuit ($54.90)', '✨ Ver Bleu de Chanel', '🧪 Pedir Decant de 10ml']
    };
  }

  // 5. CLIMA CÁLIDO / CALOR / VERANO / PLAYA / GIMNASIO / RECIÉN BAÑADO
  if (
    q.includes('calor') || q.includes('verano') || q.includes('fresc') || 
    q.includes('playa') || q.includes('acuatic') || q.includes('marino') || 
    q.includes('limpio') || q.includes('gym') || q.includes('sol') || q.includes('frescura')
  ) {
    return {
      replyText: `Cuando hace calor, los perfumes pesados o muy dulces pueden empalagar. Necesitas aromas chispeantes, frutales y marinos que den sensación de recién salido de la ducha. 🌊☀️\n\nMis mejores recomendaciones prácticas:\n• **Rasasi Hawas for Him**: Una maravilla de Dubái. Huele a manzana verde crujiente, ciruela jugosa y una brisa marina muy fresca. A diferencia de otros perfumes frescos que desaparecen a las 3 horas, Hawas dura más de 10 horas en piel.\n• **Armaf Club de Nuit Intense Man**: Su salida cítrica efervescente de limón y piña aguanta perfectamente las altas temperaturas.\n• **Xerjoff Erba Pura**: Frutas mediterráneas exquisitas con almizcle blanco que proyecta frescura de lujo.\n\n¿Lo usarías para el día en exteriores o para oficina con aire acondicionado?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'rasasi-hawas-for-him'),
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'xerjoff-erba-pura')
      ].filter(Boolean),
      chips: ['🍏 Ver Hawas de Rasasi', '👑 Ver Club de Nuit ($54.90)', '🧪 Probar en Decant ($15)']
    };
  }

  // 6. FIJACIÓN / DURACIÓN / "MODO BESTIA" / QUE DURE TODO EL DÍA
  if (
    q.includes('durac') || q.includes('dure') || q.includes('fijac') || 
    q.includes('bestia') || q.includes('estela') || q.includes('proyecc') || 
    q.includes('potente') || q.includes('fuerte') || q.includes('horas') ||
    q.includes('todo el dia') || q.includes('en la ropa')
  ) {
    return {
      replyText: `Si lo que buscas es ponértelo a primera hora de la mañana y que al llegar la noche la gente siga notándolo a metros de distancia, estos son nuestros verdaderos "Modos Bestia": 🔥👑\n\n1. **Al Haramain Amber Oud (Gold Edition)**: En concentración pura de extracto. Huele a melón dulce, piña jugosa y ámbar dorado. Llena cuartos enteros y dura fácilmente **14 a 16+ horas** comprobadas.\n2. **Dior Sauvage Elixir**: Una concentración brutal de diseñador. Con 2 atomizaciones basta para todo el día y se queda en la ropa hasta lavarla.\n3. **Bharara King**: Una bomba cítrica frutal avainillada con una fijación titánica que supera las 16 horas.\n\nTip de asesor: Con estas fragancias, menos es más. 2 a 3 atomizaciones son más que suficientes. ¿Te llama más el toque frutal de Amber Oud o lo especiado de Sauvage?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'al-haramain-amber-oud-gold'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'bharara-king')
      ].filter(Boolean),
      chips: ['🍈 Ver Amber Oud Gold', '✨ Ver Sauvage Elixir', '👑 Ver Bharara King', '🧪 Pedir Decant de 10ml']
    };
  }

  // 7. DULCES / VAINILLA / GOURMAND / CANELA / CHOCOLATE
  if (
    q.includes('dulce') || q.includes('vainilla') || q.includes('canela') || 
    q.includes('gourmand') || q.includes('caramel') || q.includes('chocolate') || 
    q.includes('postre') || q.includes('cremos') || q.includes('miel')
  ) {
    return {
      replyText: `Para quienes disfrutan los aromas cálidos, dulces y acogedores que huelen a tentación: 🍯🧁\n\n• **Lattafa Khamrah** (Unisex): Huele a postre fino de canela, praliné belga, dátiles orientales y vainilla con licor. Es el perfume dulce más vendido y halagado de Dubái.\n• **Lattafa Yara Rosa** (Mujer): Una nube suave de fresas con crema batida y malvavisco. Dulce, delicado y tierno sin llegar a empalagar.\n• **Afnan 9 PM** (Hombre): Manzana dulce acaramelada con vainilla seductora, inspirado en Ultra Male. Perfecto para salir de fiesta.\n• **YSL Libre Le Parfum** (Mujer): Miel dorada tibia con flor de azahar y vainilla bourbon de alta costura.\n\n¿Buscas algo más para salir de noche o para usar en cualquier momento?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-yara'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm')
      ].filter(Boolean),
      chips: ['👑 Ver Khamrah ($58)', '🍓 Ver Yara Rosa ($46.90)', '🧪 Probar en Decant ($15)']
    };
  }

  // 8. REGALOS / NO SÉ QUÉ REGALAR / REGALO A CIEGAS
  if (
    q.includes('regalo') || q.includes('regalar') || q.includes('novi') || 
    q.includes('espos') || q.includes('cumplea') || q.includes('papa') || 
    q.includes('mama') || q.includes('ciegas')
  ) {
    const isForHer = q.includes('ella') || q.includes('mujer') || q.includes('novia') || q.includes('esposa') || q.includes('mama');

    if (isForHer) {
      return {
        replyText: `¡Un perfume para regalo es un detalle inolvidable! Si quieres acertar al 100% sin miedo a equivocarte: 🎁🌸\n\n• **Lattafa Yara Rosa** ($46.90): Es el regalo estrella para mujer. Su frasco es precioso y el aroma a fresas con crema y vainilla gusta a todas las edades sin excepción.\n• **YSL Libre Le Parfum** ($178): Si buscas un regalo de súper lujo con estatus de alta costura que deslumbre.\n• **Club de Nuit Woman** ($60.01): Elegante, floral y distinguida estilo Chanel.\n\n¿Qué edad tiene y qué estilo de vestir suele tener?`,
        recommendations: [
          PERFUMES_DATA.find(p => p.id === 'lattafa-yara'),
          PERFUMES_DATA.find(p => p.id === 'ysl-libre-le-parfum'),
          PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-woman')
        ].filter(Boolean),
        chips: ['🍓 Ver Yara ($46.90)', '✨ Ver YSL Libre', '💬 Asesoría por WhatsApp']
      };
    }

    return {
      replyText: `Regalar un perfume a un hombre es fácil cuando eliges opciones que tienen aprobación garantizada: 🎁👔\n\n• **Armaf Club de Nuit Intense** ($54.90): La opción más segura del mundo. Limón fresco y madera ahumada. Le gusta a prácticamente cualquier hombre y recibe cumplidos diarios.\n• **Bleu de Chanel Parfum** ($198): Si buscas un regalo imponente de máxima gama para alguien especial o un ejecutivo.\n• **Afnan 9 PM** ($52): Si es un chico joven o le gusta salir de fiesta y reuniones con amigos.\n\nAdemás, todas las botellas vienen 100% selladas de fábrica con batch code para regalo impecable. ¿Qué estilo tiene él?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'bleu-de-chanel-parfum'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm')
      ].filter(Boolean),
      chips: ['👑 Ver Club de Nuit ($54.90)', '✨ Ver Bleu de Chanel', '🧪 Armar set de Decants']
    };
  }

  // 9. PRECIOS / PRESUPUESTO / ECONÓMICO / OFERTAS
  if (
    q.includes('precio') || q.includes('costo') || q.includes('cuanto') || 
    q.includes('barat') || q.includes('econom') || q.includes('presupuesto') || 
    q.includes('oferta') || q.includes('descuento') || q.includes('alcanza')
  ) {
    return {
      replyText: `En **ARKANO** tenemos alternativas prácticas para todos los bolsillos: 💰✨\n\n• **Decants de 10ml** ($15 Árabes / $30 Diseñador): La mejor forma de tener 3 o 4 perfumes de lujo en casa por una fracción de lo que cuesta una botella.\n• **Perfumes Árabes en Botella Completa**: Desde **$46.90 hasta $79.90 USD**. Rinden y duran más que muchos perfumes de $200.\n• **Perfumes de Diseñador Sellados**: Desde **$125.00** (Versace Eros Flame) hasta piezas icónicas como Sauvage Elixir ($185) y Chanel ($198).\n\nSi me cuentas con qué presupuesto te gustaría trabajar, te doy la mejor recomendación para que le saques el máximo valor a tu dinero.`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-asad'),
        PERFUMES_DATA.find(p => p.id === 'afnan-9-pm'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-yara')
      ].filter(Boolean),
      chips: ['👑 Perfumes de menos de $60', '🧪 Decants de $15', '💬 Consultar en WhatsApp']
    };
  }

  // 10. ORIGINALIDAD / BATCH CODES / AUTENTICIDAD
  if (
    q.includes('original') || q.includes('autentic') || q.includes('copia') || 
    q.includes('fals') || q.includes('replica') || q.includes('batch') || 
    q.includes('sello') || q.includes('garantia') || q.includes('confian')
  ) {
    return {
      replyText: `Te entiendo perfectamente: con tantos perfumes adulterados en el mercado, la autenticidad es lo más importante. 🛡️🔒\n\nEn **ARKANO PERFUMERÍA** nuestra garantía es 100% estricta:\n1. **Sellado de Origen**: Cada frasco viene en su celofán sellado de fábrica con sello holográfico oficial de Dubái o de las casas de diseñador europeas.\n2. **Batch Code Coincidente**: El código grabado en la botella coincide con el de la caja exterior, verificable en bases de datos cosméticas internacionales.\n3. **Garantía Total**: Si tu producto presenta cualquier anomalía de originalidad, te devolvemos el 100% de tu dinero de inmediato.\n\nCompramos directamente a importadores certificados para garantizar pureza y calidad. ¿Deseas consultar algún perfume en particular?`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah')
      ].filter(Boolean),
      chips: ['📦 Ver Catálogo Completo', '🧪 Probar en Decant 10ml', '💬 Hablar por WhatsApp']
    };
  }

  // 11. COMPARACIONES POPULARES (ASAD VS SAUVAGE, KHAMRAH VS ANGELS' SHARE, ETC.)
  if (q.includes('asad') && (q.includes('sauvage') || q.includes('elixir') || q.includes('diferencia') || q.includes('cual'))) {
    return {
      replyText: `¡Una de las comparativas más consultadas! 👑 vs ✨\n\n• **Lattafa Asad ($49.90)**: Es la mejor alternativa árabe a Sauvage Elixir. Tiene esa misma pimienta negra, café y vainilla cálida. Es potente, maduro y accesible para usar sin miedo a que se acabe.\n• **Dior Sauvage Elixir ($185.00)**: La obra maestra original. Su lavanda silvestre y sándalo son de una calidad suprema y su fijación es descomunal (+16 horas).\n\n**Mi consejo práctico:** Si quieres la vibra elegante y masculina para el día a día, llévate **Asad**. Si quieres la pieza de colección de lujo definitivo para eventos clave, llévate **Dior** (o pruébalo en decant de $30).`,
      recommendations: [
        PERFUMES_DATA.find(p => p.id === 'lattafa-asad'),
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir')
      ].filter(Boolean),
      chips: ['👑 Ver Lattafa Asad ($49.90)', '✨ Ver Dior Sauvage Elixir', '🧪 Decant de $15 (Asad)']
    };
  }

  if (q.includes('khamrah')) {
    const p = PERFUMES_DATA.find(x => x.id === 'lattafa-khamrah');
    return {
      replyText: `**Lattafa Khamrah** es sencillamente una locura de perfume. 👑\n\nHuele a postre fino con canela recién rallada, dátiles dulces, chocolate belga praliné y un fondo licoroso avainillado que enamora a cualquiera. No es un perfume discreto: es para que la gente te pregunte en la calle qué llevas puesto.\n\n• **Cuándo usarlo:** Salidas de noche, citas, días frescos o eventos especiales.\n• **Fijación:** 12 a 14 horas en piel y días en la ropa.\n• **Presentaciones:** Frasco de 100ml ($58.00) o Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Pedir Decant de $15', '🛒 Comprar Frasco ($58)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('sauvage') || q.includes('elixir')) {
    const p = PERFUMES_DATA.find(x => x.id === 'dior-sauvage-elixir');
    return {
      replyText: `**Dior Sauvage Elixir** es el estándar de oro de la perfumería masculina de diseñador. ✨\n\nNo tiene nada que ver con el Sauvage tradicional: este es oscuro, noble y ultra concentrado. Huele a canela fina, cardamomo, lavanda francesa y sándalo amaderado. Transmite respeto, presencia y estatus elevado.\n\n• **Rendimiento:** Con 2 atomizaciones tienes para todo el día y noche.\n• **Presentaciones:** Frasco de 60ml ($185.00) o Decant de 10ml ($30.00) para probarlo en piel.`,
      recommendations: [p],
      chips: ['🧪 Probar Decant ($30)', '🛒 Ver Frasco ($185)', '💬 Consultar en WhatsApp']
    };
  }

  if (q.includes('club de nuit') || q.includes('cdnim') || q.includes('aventus')) {
    const p = PERFUMES_DATA.find(x => x.id === 'armaf-club-de-nuit-intense-man');
    return {
      replyText: `**Armaf Club de Nuit Intense Man** es legendario en todo el mundo como "el rey de los cumplidos". 🖤🔥\n\nInspirado en la vibra de Creed Aventus, abre con un limón fresco y piña ahumada, y seca en una madera oscura muy masculina que a la gente le fascina en el aire. Es versátil: sirve para oficina, citas, calor o noche.\n\n• **Fijación:** Fácilmente 10 a 12 horas con gran estela.\n• **Presentaciones:** Frasco de 105ml ($54.90) o Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de 10ml ($15)', '🛒 Frasco ($54.90)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('yara')) {
    const p = PERFUMES_DATA.find(x => x.id === 'lattafa-yara');
    return {
      replyText: `**Lattafa Yara Rosa** es el perfume femenino más vendido y viral de Oriente. 🍓🌸\n\nHuele literalmente a fresas dulces con crema batida, orquídea suave y malvaviscos esponjosos. Es tierno, coqueto, limpio y muy agradable para el día a día o citas.\n\n• **Precio:** Frasco de 100ml por solo **$46.90 USD** (o Decant de 10ml por **$15.00 USD**). Un regalo con el que es imposible fallar.`,
      recommendations: [p],
      chips: ['🍓 Frasco Yara ($46.90)', '🧪 Decant de $15', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('9 pm') || q.includes('9pm') || q.includes('afnan') || q.includes('ultra male')) {
    const p = PERFUMES_DATA.find(x => x.id === 'afnan-9-pm');
    return {
      replyText: `**Afnan 9 PM** es el indiscutible rey de la fiesta y la noche. 🌙🎉\n\nHuele a manzana roja acaramelada, canela tibia y vainilla seductora (inspirado en JPG Ultra Male pero con mayor potencia). Si vas a salir de fiesta, a un bar o a una reunión con amigos, este perfume destaca por encima de la música y el ambiente.\n\n• **Duración:** 12+ horas garantizadas.\n• **Presentaciones:** Frasco de 100ml ($52.00) o Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🧪 Decant de $15', '🛒 Frasco 9 PM ($52)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('amber oud') || q.includes('gold')) {
    const p = PERFUMES_DATA.find(x => x.id === 'al-haramain-amber-oud-gold');
    return {
      replyText: `**Al Haramain Amber Oud (Gold Edition)** es opulencia pura. 👑🍈\n\nEn concentración de extracto, huele a melón dulce maduro, piña jugosa y ámbar dorado. Tiene una estela gigante que se siente a metros de distancia y se queda en la ropa por días. Es unisex y perfecto si quieres que tu perfume sea tu carta de presentación.\n\n• **Presentaciones:** Frasco de 60ml ($79.90) o Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🍈 Ver Amber Oud Gold', '🧪 Decant de $15', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('hawas') || q.includes('rasasi') || q.includes('invictus')) {
    const p = PERFUMES_DATA.find(x => x.id === 'rasasi-hawas-for-him');
    return {
      replyText: `**Rasasi Hawas for Him** es el titán de la frescura en Dubái. 🌊🍏\n\nCombina manzana verde crujiente, ciruela jugosa, un toque marino y ámbar gris. A diferencia de casi todos los perfumes acuáticos que se evaporan rápido, Hawas dura más de 10 horas proyectando frescura limpia y sensual. Ideal para calor y uso diario.\n\n• **Presentaciones:** Frasco de 100ml ($64.90) o Decant de 10ml ($15.00).`,
      recommendations: [p],
      chips: ['🍏 Ver Hawas ($64.90)', '🧪 Decant de $15', '💬 Pedir por WhatsApp']
    };
  }

  // 12. BÚSQUEDA DINÁMICA CONSULTIVA POR PALABRAS CLAVE
  const words = q.split(/\s+/).filter(w => w.length > 2);
  const matchingPerfumes = PERFUMES_DATA.filter(p => {
    const textToMatch = clean(`${p.name} ${p.brand} ${p.collection} ${p.gender} ${p.description || ''} ${p.vibe || ''} ${p.acordes?.join(' ') || ''}`);
    return words.some(w => textToMatch.includes(w));
  });

  if (matchingPerfumes.length > 0) {
    const topMatches = matchingPerfumes.slice(0, 2);
    const firstName = topMatches[0].name;
    return {
      replyText: `Para lo que tienes en mente, te recomendaría fijarte especialmente en **${topMatches[0].brand} ${topMatches[0].name}**.\n\nEs una opción fantástica porque encaja con lo que buscas sin saturar, tiene excelente fijación comprobada y puedes probarlo en **Decant de 10ml** o llevarte la botella completa sellada de fábrica.\n\n¿Te gustaría que te cuente a qué huele en la piel o para qué momentos lo prefieres usar?`,
      recommendations: topMatches,
      chips: [
        `Ver ${firstName}`,
        '🧪 Probar en Decant 10ml',
        '💬 Asesoría por WhatsApp'
      ]
    };
  }

  // 13. RESPUESTA CONSULTIVA PROFESIONAL (FALLBACK CON PREGUNTAS CLAVE DE ASESOR)
  const fallbacks = [
    {
      replyText: `¡Buena pregunta! En perfumería de alta gama cada piel y ocasión piden algo distinto.\n\nPara guiarte con total certeza: ¿te gustan más los aromas **frescos y limpios** (como cítricos o brisa marina), los aromas **dulces y cálidos** (vainilla, canela, licor), o algo **amaderado y con presencia**?\n\nAquí tienes dos de nuestros favoritos que nunca fallan:`,
      recs: [
        PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man'),
        PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah')
      ].filter(Boolean),
      chips: ['🍯 Prefiero algo dulce', '🌊 Prefiero algo fresco', '🔥 Busco máxima duración']
    },
    {
      replyText: `Con gusto te asesoro de manera personalizada. Para recomendarte la opción ideal, cuéntame: ¿es para **uso diario en el trabajo**, para **citas románticas** o para **eventos y salidas de noche**?\n\nRecuerda que si dudas entre dos fragancias, siempre puedes pedir los **Decants de 10ml** para probarlas en tu piel antes de comprar el frasco grande.`,
      recs: [
        PERFUMES_DATA.find(p => p.id === 'dior-sauvage-elixir'),
        PERFUMES_DATA.find(p => p.id === 'rasasi-hawas-for-him')
      ].filter(Boolean),
      chips: ['💼 Para la oficina / Diario', '🌙 Para la noche', '🧪 ¿Cómo son los Decants?']
    }
  ];

  const selectedFallback = fallbacks[q.length % fallbacks.length];
  return {
    replyText: selectedFallback.replyText,
    recommendations: selectedFallback.recs,
    chips: selectedFallback.chips
  };
}
