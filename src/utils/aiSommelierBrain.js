import { PERFUMES_DATA } from '../data/perfumes.js';

/**
 * Motor de Asesoría de Alta Perfumería ARKANO
 * 
 * Enfoque: Asesor y Sommelier de boutique de lujo real:
 * - Sumamente amable, educado, hospitalario, empático y conocedor.
 * - Cero tecnicismos aburridos: descripciones vivas de a qué huele en la vida real.
 * - Recomendaciones claras con precios de botella y decant de 10ml.
 * - 100% alineado con el catálogo activo de 49 fragancias (48 Árabes y 1 Diseñador).
 */

const clean = (str) => {
  return (str || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

const getPerfume = (id) => PERFUMES_DATA.find(p => p.id === id);

export function analyzeAndRespond(userQuery, conversationHistory = []) {
  const q = clean(userQuery);

  // 1. SALUDOS PUROS Y CONTACTO INICIAL (solo si no pregunta por un tema o perfume específico)
  const isSpecificTopic = (
    q.includes('decant') || q.includes('muestra') || q.includes('10ml') ||
    q.includes('cita') || q.includes('seduc') || q.includes('romant') ||
    q.includes('oficina') || q.includes('trabajo') || q.includes('diario') ||
    q.includes('calor') || q.includes('verano') || q.includes('fresc') ||
    q.includes('durac') || q.includes('bestia') || q.includes('fuerte') ||
    q.includes('dulce') || q.includes('vainilla') || q.includes('postre') ||
    q.includes('regalo') || q.includes('regalar') ||
    q.includes('disenador') || q.includes('precio') || q.includes('original') ||
    q.includes('khamrah') || q.includes('yara') || q.includes('hawas') ||
    q.includes('9 pm') || q.includes('amber oud') || q.includes('odyssey') ||
    q.includes('nitro') || q.includes('liquid brun') || q.includes('mayar') ||
    q.includes('eclaire') || q.includes('king') || q.includes('bharara') ||
    q.includes('asad') || q.includes('club de nuit') || q.includes('halloween')
  );

  if (!isSpecificTopic && (
    /^(hola|buenas|buen dia|buenos dias|buenas tardes|buenas noches|hey|saludos|que tal|como estas|quien eres)\b/.test(q) ||
    q === 'hola' || q === 'buenas' || q === 'que tal' || q === 'ayuda' || q === 'asesoria'
  )) {
    return {
      replyText: `¡Hola! Qué alegría saludarte 👑 Es un verdadero placer darte la bienvenida a **ARKANO PERFUMERÍA**.\n\nSoy tu asesor personal de fragancias y mi mayor satisfacción es ayudarte a descubrir ese aroma que de verdad refleje tu esencia, te haga sentir con total seguridad y te llene de cumplidos dondequiera que vayas.\n\nPara guiarte con toda dedicación, cuéntame: ¿buscas una fragancia para ti o para sorprender con un regalo especial? ¿Y para qué ocasiones te gustaría lucirla (trabajo diario, citas románticas, salir de noche o días de calor)?`,
      recommendations: [
        getPerfume('lattafa-khamrah-original'),
        getPerfume('armaf-club-de-nuit-intense-man')
      ].filter(Boolean),
      chips: [
        '💼 Para el trabajo / Diario',
        '🌙 Para citas y salidas de noche',
        '👑 Árabes con fijación extrema (+14h)',
        '🎁 Quiero hacer un regalo',
        '🧪 ¿Cómo funcionan los Decants de 10ml?'
      ]
    };
  }

  // 2. EXPLICACIÓN AMABLE DE DECANTS DE 10ML
  if (
    q.includes('decant') || q.includes('muestra') || q.includes('10ml') || 
    q.includes('probar antes') || q.includes('pequeno') || q.includes('atomizador') ||
    q.includes('viaje') || q.includes('como funciona el decant')
  ) {
    return {
      replyText: `¡Con mucho gusto te explico! Los **Decants de 10ml** son la alternativa más inteligente y práctica que ofrecemos en ARKANO para que disfrutes de la alta perfumería con total tranquilidad: 🧪✨\n\n• **¿Cómo los preparamos?** Extraemos los 10ml con una jeringa dosificadora estéril directamente del frasco 100% original con sello de fábrica, envasándolo en un atomizador de vidrio de viaje de lujo con spray fino.\n• **¿Cuánto rinde?** Te ofrece entre **120 y 140 atomizaciones**, lo que equivale a casi un mes de uso diario.\n• **Precios muy accesibles:** Entre **$16.00 y $22.00 USD** según la fragancia (en lugar de pagar $65 a $95 por la botella entera).\n\nMuchos de nuestros clientes eligen llevarse 2 o 3 decants para rotar según el día, la oficina o sus citas nocturnas. ¿Te gustaría que te preparemos una selección personalizada?`,
      recommendations: [
        getPerfume('lattafa-khamrah-original'),
        getPerfume('armaf-club-de-nuit-intense-man'),
        getPerfume('rasasi-hawas-ice')
      ].filter(Boolean),
      chips: [
        '👑 Probar Khamrah en Decant ($18)',
        '🍋 Probar Club de Nuit en Decant ($18)',
        '🌊 Probar Hawas Ice en Decant ($20)',
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
        replyText: `Para una cita romántica, lo ideal es una fragancia envolvente, femenina y adictiva que invite a la cercanía y despierte admiración: 🌹✨\n\n• **Lattafa Yara (Pink Edition)** ($60.00 / Decant $16.00):\nHuele a fresas dulces con crema batida, orquídea suave y malvaviscos esponjosos. Es tierno, coqueto y súper magnético.\n\n• **Lattafa Eclaire** ($75.00 / Decant $20.00):\nUna delicia gourmand absoluta. Huele a galletas finas de mantequilla recién horneadas con dulce de leche tibio y vainilla cremosa. Deja una estela dulce irresistible que a todos les encanta.\n\n• **Lattafa Mayar** ($65.00 / Decant $18.00):\nFrambuesas jugosas, lichi exótico y rosas frescas sobre un fondo avainillado radiante y sensual.\n\n¿Prefieres una vibra más dulce de postre delicado o algo más frutal y chispeante?`,
        recommendations: [
          getPerfume('lattafa-yara-pink'),
          getPerfume('lattafa-eclaire'),
          getPerfume('lattafa-mayar')
        ].filter(Boolean),
        chips: ['🍓 Ver Yara Pink ($60)', '🧁 Ver Eclaire ($75)', '🧪 Pedir Decant de 10ml', '💬 Consultar en WhatsApp']
      };
    }

    return {
      replyText: `¡Excelente elección! Para una cita nocturna necesitas un aroma que proyecte seguridad, calidez y masculinidad magnética al acercarse: ✨🌙\n\n• **Lattafa Khamrah Original** ($65.00 / Decant $18.00):\nEl perfume árabe más elogiado del mundo. Huele a canela dulce, dátiles orientales, chocolate belga praliné y un toque licoroso avainillado. Despierta cumplidos inmediatos en cualquier cena o encuentro íntimo.\n\n• **Afnan 9 PM** ($65.00 / Decant $18.00):\nUn imán para salir. Manzana dulce acaramelada, canela tibia y vainilla seductora estilo Ultra Male pero con mayor fuerza y fijación.\n\n• **Halloween Man X** ($65.00 / Decant $18.00 - Diseñador Jesús del Pozo Madrid):\nCafé espresso tostado, licor de whisky, cardamomo y cuero noble. Misterioso, nocturno y sumamente elegante.\n\n• **French Avenue Liquid Brun** ($76.00 / Decant $20.00):\nVainilla bourbon pura con praliné de avellanas y licor cálido. Nivel nicho de alta seducción.\n\n¿Te agrada más ese toque licoroso de canela o prefieres la vibra de café tostado y cuero?`,
      recommendations: [
        getPerfume('lattafa-khamrah-original'),
        getPerfume('afnan-9-pm'),
        getPerfume('halloween-man-x')
      ].filter(Boolean),
      chips: ['👑 Ver Khamrah Original ($65)', '🌙 Ver 9 PM ($65)', '☕ Ver Halloween Man X ($65)', '🧪 Probar en Decant de $18']
    };
  }

  // 4. TRABAJO / OFICINA / DÍA A DÍA / PROFESIONAL / UNIVERSIDAD
  if (
    q.includes('oficina') || q.includes('trabajo') || q.includes('diario') || 
    q.includes('dia a dia') || q.includes('profesional') || q.includes('formal') || 
    q.includes('reunion') || q.includes('universidad') || q.includes('firma') ||
    q.includes('ejecutiv')
  ) {
    return {
      replyText: `Para el entorno laboral o el día a día, la clave es oler a pulcritud, distinción y éxito sin invadir ni saturar el espacio: 💼👔\n\n• **Armaf Club de Nuit Intense Man** ($65.00 / Decant $18.00):\nEl legendario "rey de los cumplidos masculinos". Abre con un limón fresco y efervescente que seca en maderas ahumadas nobles y limpias. Es el perfume todoterreno por excelencia para proyectar liderazgo.\n\n• **Maison Alhambra Jean Lowe Immortel** ($65.00 / Decant $18.00):\nInspirado en la alta perfumería de Louis Vuitton (L'Immensité). Jengibre fresco chispeante, toronja noble, romero y un fondo de ámbar sumamente refinado.\n\n• **Afnan 9 AM Dive** ($65.00 / Decant $18.00):\nMenta fresca, manzana crujiente y maderas claras con una sensación de recién bañado que dura todo el día.\n\n• **Armaf Odyssey Homme White Edition** ($65.00 / Decant $18.00):\nIris empolvado con ámbar blanco y vainilla pulcra. Súper distinguido y sofisticado.\n\n¿Buscas una opción con más presencia cítrica amaderada o algo con sensación ultra limpia?`,
      recommendations: [
        getPerfume('armaf-club-de-nuit-intense-man'),
        getPerfume('maison-alhambra-jean-lowe-immortel'),
        getPerfume('afnan-9-am-dive')
      ].filter(Boolean),
      chips: ['👑 Ver Club de Nuit ($65)', '✨ Ver Jean Lowe Immortel ($65)', '🌊 Ver 9 AM Dive ($65)', '🧪 Pedir Decant de $18']
    };
  }

  // 5. CLIMA CÁLIDO / CALOR / VERANO / PLAYA / GYM / RECIÉN BAÑADO
  if (
    q.includes('calor') || q.includes('verano') || q.includes('fresc') || 
    q.includes('playa') || q.includes('acuatic') || q.includes('marino') || 
    q.includes('limpio') || q.includes('gym') || q.includes('sol') || q.includes('frescura')
  ) {
    return {
      replyText: `¡Qué gran pregunta! En días calurosos necesitas notas frescas, marinas y cítricas que brinden vitalidad y que no se evaporen a las pocas horas: 🌊☀️\n\n• **Rasasi Hawas for Him Ice** ($75.00 / Decant $20.00):\nEl fenómeno del verano en Dubái. Manzana verde escarchada, ciruela jugosa, menta helada y una brisa marina adictiva. A diferencia de los perfumes frescos comerciales que desaparecen pronto, este supera las **12 horas de duración comprobadas**.\n\n• **Afnan Turathi Blue** ($65.00 / Decant $18.00):\nInspirado en Tygar de Bvlgari. Una toronja azul luminosa con bergamota italiana y ambroxan mineral. Huele a millonario en un yate frente al mar.\n\n• **Al Haramain Amber Oud Aqua Dubai** ($85.00 / Decant $22.00):\nMandarina italiana, grosellas frescas y té negro noble estilo Imagination de Louis Vuitton.\n\n• **Armaf Odyssey Limoni Fresh Edition** ($65.00 / Decant $18.00):\nLimón italiano recién exprimido con brisa marina energizante.\n\n¿Prefieres la frescura marina frutal de Hawas Ice o la elegancia cítrica ambarada de Turathi Blue?`,
      recommendations: [
        getPerfume('rasasi-hawas-ice'),
        getPerfume('afnan-turathi-blue'),
        getPerfume('al-haramain-amber-oud-aqua-dubai')
      ].filter(Boolean),
      chips: ['🍏 Ver Hawas Ice ($75)', '🌊 Ver Turathi Blue ($65)', '🍋 Ver Odyssey Limoni ($65)', '🧪 Pedir Decant 10ml']
    };
  }

  // 6. FIJACIÓN / DURACIÓN / "MODO BESTIA" / ESTELA TITÁNICA (+14 HORAS)
  if (
    q.includes('durac') || q.includes('dure') || q.includes('fijac') || 
    q.includes('bestia') || q.includes('estela') || q.includes('proyecc') || 
    q.includes('potente') || q.includes('fuerte') || q.includes('horas') ||
    q.includes('todo el dia') || q.includes('en la ropa')
  ) {
    return {
      replyText: `Si lo que buscas es aplicarte el perfume en la mañana y que al caer la noche continúe proyectando a metros de distancia, estos son nuestros auténticos titanes de fijación comprobada: 🔥👑\n\n1. **Al Haramain Amber Oud (Gold Edition)** ($95.00 / Decant $22.00):\nEn concentración de extracto puro. Huele a melón dulce maduro, piña jugosa y ámbar dorado radiante. Llena habitaciones completas y dura de **14 a 16+ horas comprobadas**.\n\n2. **Bharara King** ($90.00 / Decant $22.00):\nUn monstruo en proyección. Cítricos frutales ultra intensos con vainilla gourmand y ámbar que no se va de la piel ni duchándote.\n\n3. **Dumont Nitro Red** ($63.00 / Decant $18.00):\nSandía jugosa, manzana fresca y maderas pulcras con una fijación legendaria a un precio imbatible.\n\n4. **French Avenue Liquid Brun** ($76.00 / Decant $20.00):\nVainilla bourbon y canela densa con estela de alta gama nicho.\n\nConsejo de asesor: Con estas creaciones, 2 a 3 atomizaciones son más que suficientes. ¿Te llama más el toque frutal de Amber Oud Gold o la potencia cítrica de Bharara King?`,
      recommendations: [
        getPerfume('al-haramain-amber-oud-gold-edition'),
        getPerfume('bharara-king'),
        getPerfume('dumont-nitro-red')
      ].filter(Boolean),
      chips: ['🍈 Ver Amber Oud Gold ($95)', '👑 Ver Bharara King ($90)', '🍉 Ver Nitro Red ($63)', '🧪 Probar en Decant ($22)']
    };
  }

  // 7. DULCES / VAINILLA / GOURMAND / CANELA / CHOCOLATE / POSTRE
  if (
    q.includes('dulce') || q.includes('vainilla') || q.includes('canela') || 
    q.includes('gourmand') || q.includes('caramel') || q.includes('chocolate') || 
    q.includes('postre') || q.includes('cremos') || q.includes('miel')
  ) {
    return {
      replyText: `Para quienes aman los aromas cálidos, acogedores y dulces que huelen a tentación pura: 🍯🧁\n\n• **Lattafa Khamrah Qahwa** ($65.00 / Decant $18.00):\nLa versión enriquecida del clásico Khamrah, con café arábica tostado, canela, dátiles dulces, jengibre y praliné belga. Cálido, tostado y sumamente adictivo.\n\n• **Lattafa Eclaire** ($75.00 / Decant $20.00):\nEl gourmand femenino más viral de Dubái. Huele a leche condensada caramelizada, dulce de leche, galletas de mantequilla y vainilla francesa.\n\n• **Armaf Odyssey Mandarin Sky** ($60.00 / Decant $16.00):\nMandarinas glaseadas bañadas en caramelo líquido tibio y haba tonka sobre maderas dulces estilo Scandal.\n\n• **Armaf Delights Yum Yum** ($75.00 / Decant $20.00):\nMalvaviscos esponjosos, pistacho cremoso y crema pastelera.\n\n¿Te inclinas más por la calidez especiada de Khamrah Qahwa o la dulzura acaramelada de Eclaire?`,
      recommendations: [
        getPerfume('lattafa-khamrah-qahwa'),
        getPerfume('lattafa-eclaire'),
        getPerfume('armaf-odyssey-mandarin-sky')
      ].filter(Boolean),
      chips: ['☕ Ver Khamrah Qahwa ($65)', '🧁 Ver Eclaire ($75)', '🍊 Ver Mandarin Sky ($60)', '🧪 Pedir Decant de 10ml']
    };
  }

  // 8. REGALOS / NO SÉ QUÉ REGALAR / A CIEGAS
  if (
    q.includes('regalo') || q.includes('regalar') || q.includes('novi') || 
    q.includes('espos') || q.includes('cumplea') || q.includes('papa') || 
    q.includes('mama') || q.includes('ciegas')
  ) {
    const isForHer = q.includes('ella') || q.includes('mujer') || q.includes('novia') || q.includes('esposa') || q.includes('mama') || q.includes('dama');

    if (isForHer) {
      return {
        replyText: `¡Un perfume es un regalo memorable y lleno de emoción! Para dama, estas opciones tienen un 100% de éxito garantizado: 🎁🌸\n\n• **Lattafa Yara (Pink Edition)** ($60.00):\nEl regalo más seguro y querido. Su frasco rosa es hermoso y su aroma a fresas con crema batida y flores suaves enamora a mujeres de todas las edades.\n\n• **Lattafa Mayar** ($65.00):\nElegante, frutal y radiante con frambuesas jugosas y lichi sobre rosas finas.\n\n• **Lattafa Eclaire** ($75.00):\nPara amantes de lo dulce y la vainilla fina. Presentación de lujo absoluto.\n\nTodas nuestras piezas vienen 100% selladas de fábrica con batch code. ¿Qué estilo de vestir o qué edad tiene ella?`,
        recommendations: [
          getPerfume('lattafa-yara-pink'),
          getPerfume('lattafa-mayar'),
          getPerfume('lattafa-eclaire')
        ].filter(Boolean),
        chips: ['🍓 Ver Yara Pink ($60)', '🌹 Ver Mayar ($65)', '🧁 Ver Eclaire ($75)', '💬 Asesoría por WhatsApp']
      };
    }

    return {
      replyText: `¡Un perfume para un caballero es un obsequio que transmite prestigio! Aquí tienes opciones infalibles que le encantarán: 🎁👔\n\n• **Armaf Club de Nuit Intense Man** ($65.00):\nLa apuesta más segura del mundo. Fresco, masculino y elegante. Le gusta a cualquier hombre y es un generador constante de cumplidos.\n\n• **Afnan 9 PM** ($65.00):\nSi es un chico joven o le gusta salir de fiesta y reuniones sociales (manzana acaramelada y canela).\n\n• **Armaf Odyssey Mandarin Sky** ($60.00):\nMandarina caramelizada dulce con presentación imponente en forma de cantimplora de lujo.\n\n• **Halloween Man X** ($65.00 - Diseñador de Madrid):\nCafé espresso, whisky y cuero para hombres con estilo nocturno y misterioso.\n\n¿Qué edad tiene y qué actividades suele realizar en su día a día?`,
      recommendations: [
        getPerfume('armaf-club-de-nuit-intense-man'),
        getPerfume('afnan-9-pm'),
        getPerfume('halloween-man-x')
      ].filter(Boolean),
      chips: ['👑 Ver Club de Nuit ($65)', '🌙 Ver 9 PM ($65)', '☕ Ver Halloween Man X ($65)', '🧪 Armar set de Decants']
    };
  }

  // 9. DISEÑADOR VS ÁRABES / PREGUNTAS POR DISEÑADOR
  if (
    q.includes('disenador') || q.includes('halloween') || q.includes('del pozo') ||
    q.includes('francia') || q.includes('paris') || q.includes('occidental')
  ) {
    return {
      replyText: `En **ARKANO PERFUMERÍA** contamos con una selecta colección de 49 fragancias donde conviven lo mejor de dos mundos: 👑✨\n\n• **Nuestra Joya de Diseñador**: **Halloween Man X** ($65.00 / Decant $18.00) de la célebre casa madrileña Jesús del Pozo. Una obra maestra nocturna con notas de café espresso tostado, licor de whisky, cuero noble y cardamomo.\n\n• **48 Obras Maestras Árabes de Dubái**: Marcas consagradas como Lattafa, Armaf, Afnan, Rasasi, Al Haramain, Dumont y French Avenue, con concentraciones de aceite superiores al 20%, estelas legendarias y fijación de más de 12 a 16 horas.\n\n¿Te gustaría conocer en detalle Halloween Man X o prefieres ver las alternativas árabes con mayor fijación?`,
      recommendations: [
        getPerfume('halloween-man-x'),
        getPerfume('lattafa-khamrah-original'),
        getPerfume('armaf-club-de-nuit-intense-man')
      ].filter(Boolean),
      chips: ['☕ Ver Halloween Man X ($65)', '👑 Ver Árabes de Dubái', '🧪 Pedir Decant de $18']
    };
  }

  // 10. EQUIVALENCIAS POPULARES (SAUVAGE, ULTRA MALE, INVICTUS, AVENTUS, SCANDAL, ETC.)
  if (q.includes('sauvage') || q.includes('elixir')) {
    return {
      replyText: `Si buscas la vibra imponente y especiada de Dior Sauvage, en ARKANO tenemos sus mejores equivalencias de Dubái con mayor fijación y mejor precio: 👑✨\n\n• **Lattafa Asad Bourbon** ($70.00 / Decant $18.00) & **Asad Elixir Edition** ($75.00 / Decant $20.00):\nPimienta negra noble, café tostado, vainilla cálida y ámbar profundo. Muy varonil y duradero.\n\n• **Maison Alhambra Jean Lowe Immortel** ($65.00 / Decant $18.00):\nJengibre chispeante, toronja y maderas de elegancia corporativa suprema.\n\nAmbos tienen fijación de 10 a 12 horas. ¿Te gustaría probarlos en Decant de 10ml?`,
      recommendations: [
        getPerfume('lattafa-asad-bourbon'),
        getPerfume('lattafa-asad-elixir'),
        getPerfume('maison-alhambra-jean-lowe-immortel')
      ].filter(Boolean),
      chips: ['👑 Ver Asad Bourbon ($70)', '✨ Ver Asad Elixir ($75)', '🧪 Probar en Decant ($18)']
    };
  }

  if (q.includes('ultra male') || q.includes('jpg') || q.includes('gaultier')) {
    return {
      replyText: `Si te encanta el ADN de Ultra Male de Jean Paul Gaultier, te vas a enamorar de **Afnan 9 PM**: 🎉🌙\n\n• **Afnan 9 PM** ($65.00 / Decant $18.00):\nEs la recreación más célebre y elogiada del mundo. Manzana dulce acaramelada, canela tibia y vainilla seductora, pero con una duración muy superior al diseñador comercial (+12 horas comprobadas).\n\n• También tenemos **9 PM Rebel** ($75.00) y **9 PM Night Out** ($90.00) para salidas exclusivas.\n\n¿Te gustaría ver el frasco de 9 PM o pedirlo en Decant?`,
      recommendations: [
        getPerfume('afnan-9-pm'),
        getPerfume('afnan-9-pm-rebel'),
        getPerfume('afnan-9-pm-night-out')
      ].filter(Boolean),
      chips: ['🌙 Ver Afnan 9 PM ($65)', '🔥 Ver 9 PM Rebel ($75)', '🧪 Pedir Decant ($18)']
    };
  }

  if (q.includes('invictus') || q.includes('paco rabanne')) {
    return {
      replyText: `Si buscas la energía marina y triunfadora estilo Invictus, tu mejor opción es la línea **Hawas de Rasasi**: 🌊🍏\n\n• **Rasasi Hawas for Him Ice** ($75.00 / Decant $20.00):\nEl rey indiscutible de los perfumes frescos de Dubái. Manzana verde helada, ciruela jugosa y brisa marina con más de 12 horas de duración.\n\n• **Rasasi Hawas Verde** ($85.00 / Decant $22.00):\nNotas verdes chispeantes, cítricos nobles y base ambarada radiante.\n\n¿Te gustaría sentirlo en Decant de 10ml antes de comprar la botella?`,
      recommendations: [
        getPerfume('rasasi-hawas-ice'),
        getPerfume('rasasi-hawas-verde')
      ].filter(Boolean),
      chips: ['🍏 Ver Hawas Ice ($75)', '🌿 Ver Hawas Verde ($85)', '🧪 Pedir Decant 10ml']
    };
  }

  if (q.includes('aventus') || q.includes('creed') || q.includes('club de nuit')) {
    return {
      replyText: `**Armaf Club de Nuit Intense Man** ($65.00 / Decant $18.00) es mundialmente reconocido como la mejor y más potente inspiración de Creed Aventus: 🖤🔥\n\n• Abre con limón italiano fresco y piña ahumada, secando en una madera de abedul oscuro muy varonil y atractiva.\n• Es versátil: perfecto para oficina, reuniones de negocios, citas o salidas nocturnas.\n• Duración de 10 a 12+ horas comprobadas.\n\n¿Prefieres la versión clásica de Club de Nuit o te gustaría conocer la versión **Iconic** ($75.00) con vibra azul?`,
      recommendations: [
        getPerfume('armaf-club-de-nuit-intense-man'),
        getPerfume('armaf-club-de-nuit-iconic'),
        getPerfume('armaf-club-de-nuit-urban-man')
      ].filter(Boolean),
      chips: ['👑 Ver Club de Nuit Intense ($65)', '💙 Ver Club de Nuit Iconic ($75)', '🧪 Decant de $18']
    };
  }

  // 11. BÚSQUEDAS ESPECÍFICAS POR NOMBRE O MARCA
  if (q.includes('khamrah')) {
    return {
      replyText: `**Lattafa Khamrah** es una auténtica joya de la perfumería gourmet oriental. 👑\n\nTenemos dos versiones extraordinarias:\n• **Khamrah Original** ($65.00 / Decant $18.00): Canela fina, dátiles dulces, praliné belga y licor tibio.\n• **Khamrah Qahwa** ($65.00 / Decant $18.00): La misma base rica con una infusión intensa de café arábica tostado y jengibre.\n\nAmbos tienen una fijación de más de 12 a 14 horas y dejan una estela inolvidable. ¿Cuál de las dos notas te tienta más?`,
      recommendations: [
        getPerfume('lattafa-khamrah-original'),
        getPerfume('lattafa-khamrah-qahwa')
      ].filter(Boolean),
      chips: ['👑 Ver Khamrah Original ($65)', '☕ Ver Khamrah Qahwa ($65)', '🧪 Decant de $18']
    };
  }

  if (q.includes('yara')) {
    return {
      replyText: `La colección **Yara de Lattafa** es el mayor fenómeno femenino de Oriente: 🍓💛\n\n• **Yara Pink Edition** ($60.00 / Decant $16.00): Fresas dulces con crema batida, malvaviscos y orquídea suave. Tierno y encantador.\n• **Yara Tous Amarillo** ($65.00 / Decant $18.00): Mango maduro tropical, maracuyá jugoso y leche de coco cálida.\n\n¿Te inclinas más por la fresa cremosa de Yara Pink o el mango tropical de Yara Tous?`,
      recommendations: [
        getPerfume('lattafa-yara-pink'),
        getPerfume('lattafa-yara-tous')
      ].filter(Boolean),
      chips: ['🍓 Ver Yara Pink ($60)', '🥭 Ver Yara Tous ($65)', '🧪 Probar en Decant']
    };
  }

  if (q.includes('hawas')) {
    return {
      replyText: `La saga **Hawas de Rasasi** representa la cúspide de la frescura con fijación de Dubái: 🌊🍏\n\n• **Hawas Ice** ($75.00 / Decant $20.00): Manzana verde helada, ciruela y brisa marina escarchada.\n• **Hawas Verde** ($85.00 / Decant $22.00): Romero, lima, manzana y ámbar fresco.\n• **Hawas Fire** ($80.00 / Decant $20.00): Especias cálidas con toque cítrico seductor.\n• **Hawas Diva** ($85.00 / Decant $22.00): La majestuosa versión femenina de la colección.\n\n¿Cuál de estas joyas te gustaría conocer en detalle?`,
      recommendations: [
        getPerfume('rasasi-hawas-ice'),
        getPerfume('rasasi-hawas-verde'),
        getPerfume('rasasi-hawas-diva')
      ].filter(Boolean),
      chips: ['🍏 Ver Hawas Ice ($75)', '🌿 Ver Hawas Verde ($85)', '🌸 Ver Hawas Diva ($85)', '🧪 Pedir Decant de $20']
    };
  }

  if (q.includes('amber oud')) {
    return {
      replyText: `La línea **Amber Oud de Al Haramain** es sinónimo de opulencia en concentración de extracto puro: 👑✨\n\n• **Amber Oud Gold Edition** ($95.00 / Decant $22.00): Melón dulce maduro, piña jugosa y ámbar dorado. Fijación descomunal de 14 a 16+ horas.\n• **Amber Oud Aqua Dubai** ($85.00 / Decant $22.00): Mandarina fresca, brisa marina y té negro noble estilo Imagination.\n\n¿Prefieres la dulzura frutal dorada o la frescura acuática de lujo?`,
      recommendations: [
        getPerfume('al-haramain-amber-oud-gold-edition'),
        getPerfume('al-haramain-amber-oud-aqua-dubai')
      ].filter(Boolean),
      chips: ['🍈 Ver Amber Oud Gold ($95)', '🌊 Ver Aqua Dubai ($85)', '🧪 Pedir Decant de $22']
    };
  }

  if (q.includes('odyssey')) {
    return {
      replyText: `La prestigiosa colección **Odyssey de Armaf** ofrece presentaciones icónicas y aromas memorables: 🍊🪵\n\n• **Odyssey Mandarin Sky** ($60.00 / Decant $16.00): Mandarina italiana glaseada con caramelo tibio y haba tonka.\n• **Odyssey Limoni** ($65.00 / Decant $18.00): Limón italiano escarchado y brisa cítrica energizante.\n• **Odyssey Homme White** ($65.00 / Decant $18.00): Iris empolvado y ámbar blanco elegante.\n• **Odyssey Marshmallow** ($70.00 / Decant $18.00): Nube de malvavisco dulce con vainilla.\n\n¿Qué tipo de acorde disfrutas más?`,
      recommendations: [
        getPerfume('armaf-odyssey-mandarin-sky'),
        getPerfume('armaf-odyssey-limoni'),
        getPerfume('armaf-odyssey-marshmallow')
      ].filter(Boolean),
      chips: ['🍊 Ver Mandarin Sky ($60)', '🍋 Ver Limoni ($65)', '🧁 Ver Marshmallow ($70)', '🧪 Probar en Decant']
    };
  }

  if (q.includes('liquid brun')) {
    return {
      replyText: `**French Avenue Liquid Brun** ($76.00 / Decant $20.00) es una obra maestra de la perfumería nicho contemporánea: 🪵🍯\n\nInspirado en Althair de Parfums de Marly, fusiona canela de Ceilán, vainilla bourbon de Madagascar, praliné de avellanas y licor ámbar suave. Es denso, opulento, envolvente y genera elogios inmediatos en climas frescos o salidas de gala.\n\nTambién tenemos la edición exclusiva **Liquid Brun Limited Edition** ($90.00). ¿Te gustaría conocerlo en Decant de 10ml?`,
      recommendations: [
        getPerfume('french-avenue-liquid-brun'),
        getPerfume('french-avenue-liquid-brun-limited-edition')
      ].filter(Boolean),
      chips: ['🪵 Ver Liquid Brun ($76)', '✨ Ver Edición Limitada ($90)', '🧪 Probar en Decant ($20)']
    };
  }

  if (q.includes('nitro')) {
    return {
      replyText: `**Dumont Nitro Red** ($63.00 / Decant $18.00) es el perfume juvenil y fiestero más elogiado de Dumont Paris: 🍉🔥\n\nCombina sandía jugosa, manzana roja crujiente, lavanda fresca y un fondo de maderas limpias con una fijación y proyección arrolladoras que duran más de 12 horas. También contamos con **Nitro Red Intensely** ($74.00) para máxima concentración.\n\n¿Te gustaría ver la botella sellada o pedirlo en Decant?`,
      recommendations: [
        getPerfume('dumont-nitro-red'),
        getPerfume('dumont-nitro-red-intensely')
      ].filter(Boolean),
      chips: ['🍉 Ver Nitro Red ($63)', '🔥 Ver Nitro Intensely ($74)', '🧪 Pedir Decant de $18']
    };
  }

  if (q.includes('mayar')) {
    return {
      replyText: `**Lattafa Mayar** ($65.00 / Decant $18.00) es una explosión de feminidad moderna y radiante: 🍓🌹\n\nAbre con frambuesas jugosas y lichi exótico, seguido de rosas blancas frescas sobre una base de vainilla y ámbar. Es fresco, coqueto, limpio y sumamente elegante para lucir en cualquier época del año.\n\n¿Te gustaría probarlo en Decant de 10ml o llevarte la botella sellada?`,
      recommendations: [
        getPerfume('lattafa-mayar')
      ].filter(Boolean),
      chips: ['🌹 Ver Frasco Mayar ($65)', '🧪 Probar en Decant ($18)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('eclaire')) {
    return {
      replyText: `**Lattafa Eclaire** ($75.00 / Decant $20.00) es el perfume gourmand más viral y aclamado del momento: 🧁🍮\n\nHuele a postre recién salido del horno: caramelo tibio, dulce de leche, galletas de mantequilla y vainilla francesa cremosa. Es adictivo, dulce sin empalagar y súper acogedor.\n\n¿Te gustaría tenerlo en tu colección?`,
      recommendations: [
        getPerfume('lattafa-eclaire')
      ].filter(Boolean),
      chips: ['🧁 Ver Frasco Eclaire ($75)', '🧪 Probar en Decant ($20)', '💬 Pedir por WhatsApp']
    };
  }

  if (q.includes('bharara') || q.includes('king')) {
    return {
      replyText: `**Bharara King** ($90.00 / Decant $22.00) es una auténtica bomba en proyección y magnetismo masculino: 👑🔥\n\nCombina naranja dulce, bergamota italiana y limón con frutas tropicales, vainilla y un ámbar potentísimo. Es un perfume para no pasar desapercibido bajo ninguna circunstancia, con duración de más de 16 horas.\n\n¿Deseas probarlo en Decant o adquirir la botella completa?`,
      recommendations: [
        getPerfume('bharara-king')
      ].filter(Boolean),
      chips: ['👑 Ver Bharara King ($90)', '🧪 Probar en Decant ($22)', '💬 Pedir por WhatsApp']
    };
  }

  // 12. ORIGINALIDAD / GARANTÍA / BATCH CODES
  if (
    q.includes('original') || q.includes('autentic') || q.includes('copia') || 
    q.includes('fals') || q.includes('replica') || q.includes('batch') || 
    q.includes('sello') || q.includes('garantia') || q.includes('confian')
  ) {
    return {
      replyText: `¡Comprendo perfectamente tu inquietud! En perfumería de alta gama la autenticidad es sagrada, y en **ARKANO PERFUMERÍA** nuestra garantía es 100% estricta: 🛡️🔒\n\n1. **Sellado de Fábrica y Celofán de Origen**: Cada frasco viene sellado con sus sellos holográficos oficiales de Dubái o de las casas de diseñador europeas.\n2. **Batch Code Verificable**: El código alfanumérico grabado con láser en la base de la botella coincide exactamente con el de la caja exterior, verificable en bases de datos cosméticas internacionales.\n3. **Garantía Total ARKANO**: Si por cualquier razón tu perfume presenta la más mínima anomalía de autenticidad, te reembolsamos el 100% de tu dinero de inmediato.\n\n¿Te gustaría consultar algún perfume en particular de nuestro catálogo de 49 fragancias?`,
      recommendations: [
        getPerfume('lattafa-khamrah-original'),
        getPerfume('halloween-man-x')
      ].filter(Boolean),
      chips: ['📦 Ver Todo el Catálogo (49)', '🧪 Probar en Decant de 10ml', '💬 Consultar por WhatsApp']
    };
  }

  // 13. PRECIOS Y PRESUPUESTOS
  if (
    q.includes('precio') || q.includes('costo') || q.includes('cuanto') || 
    q.includes('barat') || q.includes('econom') || q.includes('presupuesto') || 
    q.includes('oferta') || q.includes('descuento')
  ) {
    return {
      replyText: `En **ARKANO** ofrecemos opciones para que disfrutes del lujo al mejor valor: 💰✨\n\n• **Decants de 10ml** ($16 a $22 USD): La manera más accesible de probar 2 o 3 fragancias distintas en tu propia piel (~120 atomizaciones por decant).\n• **Frascos Completos Sellados de Fábrica**:\n  - Desde **$60.00 a $70.00 USD**: Obras maestras como Yara Pink ($60), Odyssey Mandarin Sky ($60), Nitro Red ($63), Khamrah ($65), 9 PM ($65), Club de Nuit ($65) y Halloween Man X ($65).\n  - Gama Premium ($75 a $95 USD): Hawas Ice ($75), Liquid Brun ($76), Amber Oud Aqua Dubai ($85), Bharara King ($90) y Amber Oud Gold ($95).\n\nCuéntame qué presupuesto tienes en mente y con gusto te selecciono la mejor opción.`,
      recommendations: [
        getPerfume('armaf-odyssey-mandarin-sky'),
        getPerfume('lattafa-yara-pink'),
        getPerfume('lattafa-khamrah-original')
      ].filter(Boolean),
      chips: ['🍊 Ver Mandarin Sky ($60)', '🍓 Ver Yara Pink ($60)', '🧪 Ver Decants de $16-$18', '💬 Asesoría por WhatsApp']
    };
  }

  // 14. BÚSQUEDA DINÁMICA POR PALABRAS CLAVE EN EL CATÁLOGO
  const words = q.split(/\s+/).filter(w => w.length > 2 && !['para', 'como', 'cual', 'hola', 'este', 'esta', 'unos', 'unas', 'unos', 'quiero', 'busca'].includes(w));
  const matchingPerfumes = PERFUMES_DATA.filter(p => {
    const textToMatch = clean(`${p.name} ${p.brand} ${p.collection} ${p.gender} ${p.compositionText || ''} ${p.technicalTable?.fragranceType || ''} ${p.inspiration || ''} ${p.vibes?.join(' ') || ''}`);
    return words.some(w => textToMatch.includes(w));
  });

  if (matchingPerfumes.length > 0) {
    const topMatches = matchingPerfumes.slice(0, 2);
    const first = topMatches[0];
    return {
      replyText: `¡Con mucho gusto! Para lo que tienes en mente, una de nuestras mejores recomendaciones es **${first.brand} ${first.name}** ($${first.price100ml.toFixed(2)} USD / Decant $${(first.priceDecant || 18).toFixed(2)} USD): ✨\n\n${first.compositionText || 'Es una creación con fijación excepcional y gran elegancia.'}\n\n• **Fijación:** ${first.performance?.durationLabel || '10+ Horas en Piel'}.\n• **Opciones:** Puedes llevarte la botella completa sellada o probarlo primero en **Decant de 10ml**.\n\n¿Te gustaría que te cuente más sobre cómo se siente en la piel o prefieres ver otra alternativa?`,
      recommendations: topMatches,
      chips: [
        `Ver ${first.name}`,
        `🧪 Decant $${(first.priceDecant || 18).toFixed(0)}`,
        '💬 Asesoría por WhatsApp'
      ]
    };
  }

  // 15. RESPUESTA CONSULTIVA AMABLE Y HOSPITALARIA (FALLBACK GUIADO)
  const fallbacks = [
    {
      replyText: `¡Qué gran consulta! En alta perfumería cada ocasión y preferencia de piel son únicas, y me encantaría ayudarte a elegir con total certeza. 😊✨\n\nPara recomendarte la opción perfecta: ¿te inclinas más por aromas **frescos y limpios** (cítricos o marinos), aromas **dulces y envolventes** (canela, vainilla, caramelo) o algo **amaderado y con presencia formal**?\n\nAquí tienes dos de nuestros perfumes estrella que gozan de aprobación unánime:`,
      recs: [
        getPerfume('lattafa-khamrah-original'),
        getPerfume('armaf-club-de-nuit-intense-man')
      ].filter(Boolean),
      chips: ['🍯 Me gustan dulces', '🌊 Me gustan frescos', '🔥 Busco máxima duración (+14h)']
    },
    {
      replyText: `¡Con el mayor de los gustos te asesoro! Cuéntame un poquito más: ¿buscas una fragancia para **uso diario y trabajo**, para **citas románticas** o para **eventos y salidas de noche**? 👑\n\nRecuerda que si dudas entre dos aromas, con nuestros **Decants de 10ml** puedes probar ambos en tu propia piel por una fracción del precio antes de elegir la botella completa.`,
      recs: [
        getPerfume('afnan-9-pm'),
        getPerfume('rasasi-hawas-ice')
      ].filter(Boolean),
      chips: ['💼 Para oficina / Diario', '🌙 Para citas y noche', '🧪 ¿Cómo son los Decants?']
    }
  ];

  const selectedFallback = fallbacks[q.length % fallbacks.length];
  return {
    replyText: selectedFallback.replyText,
    recommendations: selectedFallback.recs,
    chips: selectedFallback.chips
  };
}
