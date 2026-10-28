import { NextResponse } from 'next/server';
import { PERFUMES_DATA } from '../../../src/data/perfumes';
import { analyzeAndRespond } from '../../../src/utils/aiSommelierBrain';

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

    let replyText = '';
    let recommendations = [];
    let chips = [];

    // Check if an external LLM key is configured (Gemini)
    const geminiKey = process.env.GEMINI_API_KEY;

    if (geminiKey) {
      try {
        const catalogContext = PERFUMES_DATA.map(p => ({
          id: p.id,
          name: p.name,
          brand: p.brand,
          collection: p.collection === 'arabes' ? 'Árabe' : 'Diseñador',
          gender: p.gender,
          bottlePrice: `$${p.price100ml.toFixed(2)}`,
          decantPrice: p.priceDecant ? `$${p.priceDecant.toFixed(2)}` : (p.collection === 'arabes' ? '$15.00' : '$30.00'),
          vibe: p.vibe,
          realLifeVibe: p.description
        }));

        const systemPrompt = `Eres el Asesor Senior de Fragancias de ARKANO PERFUMERÍA (boutique de alta gama especializada en perfumería Árabe y de Diseñador 100% original con sello de fábrica y batch code).

OBJETIVO:
Actuar como un asesor de ventas de boutique de lujo real: cercano, empático, seguro, profesional y con excelente gusto, pero CERO TÉCNICO. Habla como una persona que de verdad conoce las fragancias y te atiende en el mostrador.

REGLAS DE ORO DE ESTILO Y TONO:
1. NADA DE TECNICISMOS ABURRIDOS: Prohibido hablar de pirámides olfativas rígidas, compuestos químicos, "notas de salida/corazón/fondo" abstractas o concentraciones porcentuales a menos que lo pregunten. Explica a qué huele en la VIDA REAL: por ejemplo "huele a postre fino con licor y canela", "huele a limpio recién bañado con traje elegante", "huele a manzana crujiente y brisa marina".
2. ENFÓCATE EN LA EXPERIENCIA: Cuéntale qué transmite el perfume (cumplidos, seguridad, seducción, elegancia discreta, frescura que no empalaga), en qué momentos usarlo (citas, trabajo, calor, fiesta) y cómo se comporta en la piel.
3. RECOMENDACIONES CLARAS Y CONCRETAS: Recomienda máximo 1 o 2 perfumes específicos de este catálogo real de ARKANO:
${JSON.stringify(catalogContext, null, 2)}
4. SOLUCIONES PRÁCTICAS (DECANTS 10ML): Si el cliente duda o no conoce el perfume, recuérdale con naturalidad que puede probarlo en un Decant de 10ml (~120 aplicaciones para 1 mes, $15 Árabes / $30 Diseñador) antes de comprar el frasco grande.
5. PREGUNTA DE CIERRE: Termina siempre con una pregunta natural y breve que ayude al cliente a decidir o avanzar la asesoría.
6. FORMATO: Máximo 2 o 3 párrafos cortos, tono enérgico pero refinado (tuteo respetuoso y profesional en español). No uses lenguaje robótico.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              { role: 'user', parts: [{ text: systemPrompt + '\n\nHistorial reciente de conversación:\n' + JSON.stringify((history || []).slice(-4)) + '\n\nPregunta actual del cliente: ' + message }] }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 500
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
          
          if (replyText) {
            // Find matched perfumes mentioned in response
            const lowerReply = replyText.toLowerCase();
            recommendations = PERFUMES_DATA.filter(p => 
              lowerReply.includes(p.name.toLowerCase()) || 
              (p.brand.toLowerCase() !== 'dior' && lowerReply.includes(p.brand.toLowerCase())) ||
              lowerReply.includes(p.id.toLowerCase())
            ).slice(0, 3);

            // Generate smart follow-up chips based on context
            if (lowerReply.includes('decant')) {
              chips = ['🧪 Pedir Decant 10ml', '🛒 Ver Botella Completa', '💬 Consultar en WhatsApp'];
            } else if (lowerReply.includes('cita') || lowerReply.includes('noche')) {
              chips = ['🌙 Perfumes para Citas', '👑 Los más vendidos', '🧪 Probar en Decant'];
            } else if (lowerReply.includes('calor') || lowerReply.includes('fresc')) {
              chips = ['🌊 Perfumes para Calor', '💼 Para Oficina', '🧪 Pedir Decant de $15'];
            } else {
              chips = ['👑 Ver Árabes Virales', '🧪 ¿Cómo son los Decants?', '💬 Hablar por WhatsApp'];
            }
          }
        }
      } catch (err) {
        console.warn('Fallback to local advisor brain:', err.message);
      }
    }

    // High-Intelligence Expert Advisor Engine (local fallback & offline)
    if (!replyText) {
      const result = analyzeAndRespond(message, history || []);
      replyText = result.replyText;
      recommendations = result.recommendations;
      chips = result.chips;
    }

    return NextResponse.json({
      reply: replyText,
      recommendations,
      chips,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('API Chat Error:', error);
    return NextResponse.json(
      { error: 'Error procesando la consulta con el Asesor de Perfumes' },
      { status: 500 }
    );
  }
}
