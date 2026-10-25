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
        const systemPrompt = `Eres Yasmin, una prestigiosa y apasionada sommelier de alta perfumería para ARKANO PERFUMERÍA. Tu tono es cálido, empático, seductor, culto y sumamente servicial.
Tienes a tu disposición el catálogo oficial de perfumes 100% originales con sello de fábrica y batch code verificado:
${JSON.stringify(PERFUMES_DATA.map(p => ({
  id: p.id,
  name: p.name,
  brand: p.brand,
  collection: p.collection,
  price: p.price100ml,
  decantPrice: p.priceDecant,
  gender: p.gender,
  timeOfDay: p.timeOfDay,
  notes: p.technicalTable
})))}

Instrucciones:
1. Recomienda 1 a 3 perfumes específicos del catálogo según lo que pida el cliente (ocasión, género, notas olfativas, presupuesto, etc.).
2. Explica con encanto sensorial por qué encajan con su gusto y momento de uso.
3. Menciona que disponemos de Decants de 10ml ($15 Árabes / $30 Diseñador) ideales para probar antes de comprar el frasco completo.
4. Recuerda que todos tienen garantía de originalidad, sello de fábrica y batch code.
5. NO incluyas enlaces a Fragrantica. Mantén la respuesta conversacional, amena y estructurada (máximo 3 párrafos cortos).`;

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
          
          // Match recommendations by text mention
          recommendations = PERFUMES_DATA.filter(p => 
            replyText.toLowerCase().includes(p.name.toLowerCase()) || 
            replyText.toLowerCase().includes(p.id)
          ).slice(0, 3);
        }
      } catch (err) {
        console.error('Error calling Gemini API:', err);
      }
    }

    // High-Intelligence Sommelier Engine fallback
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
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Error procesando la consulta con el Sommelier' },
      { status: 500 }
    );
  }
}
