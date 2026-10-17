import { NextResponse } from 'next/server';
import { PERFUMES_DATA } from '../../../src/data/perfumes';

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, history } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'El mensaje es requerido' },
        { status: 400 }
      );
    }

    const q = message.toLowerCase();
    let replyText = '';
    let recommendations = [];

    // Check if an external LLM key is configured (Gemini / OpenAI)
    const geminiKey = process.env.GEMINI_API_KEY;

    if (geminiKey) {
      try {
        const systemPrompt = `Eres Yasmin, una experta sommelier de perfumes árabes de lujo para la boutique Sultan Parfums. Tu tono es cálido, elegante, persuasivo y muy servicial.
Tienes a tu disposición el catálogo oficial de perfumes árabes 100% originales con sello holográfico:
${JSON.stringify(PERFUMES_DATA.map(p => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  price: p.price100ml,
  decantPrice: p.priceDecant,
  vibes: p.vibes,
  notes: p.technicalTable,
  inspiration: p.inspiration
})))}

Instrucciones:
1. Recomienda 1 o 2 perfumes específicos del catálogo según lo que pida el usuario (dulces, duración bestial, oficina, fiesta, masculinos, femeninos o unisex).
2. Explica brevemente por qué encajan con su gusto y menciona a qué perfume famoso de diseñador se parece.
3. Menciona que todos los perfumes tienen garantía de originalidad, sello holográfico y batch code de fábrica.
4. Mantén las respuestas concisas (máximo 3 párrafos).`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              { role: 'user', parts: [{ text: systemPrompt + '\n\nPregunta del cliente: ' + message }] }
            ]
          })
        });

        if (response.ok) {
          const data = await response.json();
          replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
        }
      } catch (err) {
        console.error('Error calling Gemini API:', err);
      }
    }

    // Fallback specialized sommelier engine if no API key or call failed
    if (!replyText) {
      if (q.includes('dulce') || q.includes('vainilla') || q.includes('gourmand') || q.includes('canela') || q.includes('praliné')) {
        replyText = 'Para amantes de lo dulce y gourmand, tenemos dos joyas absolutas de Oriente: **Lattafa Khamrah** (canela, praliné belga y dátiles, estilo Angels Share) y **Lattafa Yara** (fresas con crema batida y malvaviscos esponjosos). ¡Ambos son sumamente adictivos y generan elogios constantes!';
        recommendations = PERFUMES_DATA.filter(p => p.id === 'lattafa-khamrah' || p.id === 'lattafa-yara');
      } else if (q.includes('bestia') || q.includes('duracion') || q.includes('duración') || q.includes('fijacion') || q.includes('fijación') || q.includes('fuerte')) {
        replyText = 'Si buscas que el perfume dure más de 12 a 16 horas en piel y días en ropa, te recomiendo directamente **Al Haramain Amber Oud (Gold Edition)** (concentración Extrait) y **Armaf Club de Nuit Intense Man** (el legendario clon de Creed Aventus con estela de 2 metros). ¡Son auténticos monstruos de fijación!';
        recommendations = PERFUMES_DATA.filter(p => p.id === 'al-haramain-amber-oud-gold' || p.id === 'armaf-club-de-nuit-intense-man');
      } else if (q.includes('oficina') || q.includes('trabajo') || q.includes('fresco') || q.includes('diario') || q.includes('limpio')) {
        replyText = 'Para el día a día y oficina necesitas algo sofisticado que no abrume. **Club de Nuit Woman** (inspirado en Coco Mademoiselle) para dama, y **Club de Nuit Urban Man Elixir** para caballero son opciones sumamente elegantes y versátiles.';
        recommendations = PERFUMES_DATA.filter(p => p.id === 'armaf-club-de-nuit-woman' || p.id === 'armaf-club-de-nuit-urban-man-elixir');
      } else if (q.includes('viral') || q.includes('tiktok') || q.includes('famoso') || q.includes('mas vendido') || q.includes('más vendido')) {
        replyText = 'Sin duda alguna, los reyes de TikTok son **Lattafa Khamrah** y **Afnan 9 PM**. Khamrah ha acumulado cientos de millones de visitas por su parecido a un perfume de $300 USD, y 9 PM es el rey de las fiestas nocturnas.';
        recommendations = PERFUMES_DATA.filter(p => p.id === 'lattafa-khamrah' || p.id === 'afnan-9pm');
      } else if (q.includes('original') || q.includes('autenticidad') || q.includes('batch') || q.includes('copia')) {
        replyText = 'Todos nuestros perfumes son **100% Originales importados directamente de Dubái**, sellados de fábrica con su **Sello Holográfico de Seguridad** y **Batch Code** verificable en la base del frasco y caja. ¡Garantía de satisfacción total o la devolución de tu dinero!';
        recommendations = [];
      } else {
        replyText = '¡Excelente pregunta! En la perfumería árabe destacamos por tener concentraciones altas (Eau de Parfum y Extrait). ¿Para qué ocasión principal deseas tu nueva fragancia? También puedes hablar directamente con uno de nuestros asesores humanos por WhatsApp.';
        recommendations = [PERFUMES_DATA[0], PERFUMES_DATA[3]];
      }
    }

    return NextResponse.json({
      reply: replyText,
      recommendations,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Error procesando la consulta con el Sommelier' },
      { status: 500 }
    );
  }
}
