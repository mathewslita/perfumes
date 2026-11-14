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

    // Check if external LLM key is configured (Gemini)
    const geminiKey = process.env.GEMINI_API_KEY;

    if (geminiKey) {
      try {
        // Contexto enriquecido del catálogo oficial de 49 fragancias
        const catalogContext = PERFUMES_DATA.map(p => ({
          id: p.id,
          nombre: p.name,
          casa: p.brand,
          coleccion: p.collection === 'arabes' ? 'Árabe (Dubái/Emiratos)' : 'Diseñador Occidental',
          genero: p.gender,
          precioBotella: `$${p.price100ml.toFixed(2)} USD`,
          precioDecant10ml: `$${(p.priceDecant || 18).toFixed(2)} USD`,
          tipoAroma: p.technicalTable?.fragranceType || '',
          descripcionSensorial: p.compositionText || '',
          inspiracionOlfativa: p.inspiration || '',
          duracionComprobada: p.performance?.durationLabel || '10-14+ Horas',
          vibes: Array.isArray(p.vibes) ? p.vibes.join(', ') : ''
        }));

        const systemPrompt = `Eres el Asesor Personal y Sommelier de Fragancias de ARKANO PERFUMERÍA, una boutique de alta gama especializada en perfumería Árabe de Dubái y piezas selectas de Diseñador 100% originales con sello de fábrica y batch code verificable.

TU MISIÓN:
Brindar una atención al cliente de máxima categoría: sumamente AMABLE, EDUCADA, CÁLIDA, EMPÁTICA, CONOCEDORA Y CERCANA. Trata a cada cliente como a un invitado de honor en una boutique de lujo en Dubái o París.

PAUTAS DE HOSPITALIDAD Y ESTILO:
1. TRATO SUMAMENTE AMABLE Y ACOGEDOR: Saluda con entusiasmo y calidez (ej. "¡Qué gusto saludarte! Es un placer atenderte...", "¡Excelente elección! Me alegra mucho orientarte...", "Con todo el gusto del mundo te ayudo a encontrar tu aroma ideal..."). Sé educado, cercano y respetuoso en todo momento.
2. DESCRIBE EL AROMA EN LA VIDA REAL (CERO TECNICISMOS ABURRIDOS): No hables de porcentajes químicos ni aburras con notas crípticas. Describe la experiencia real: qué evoca (ej. "huele a una cafetería gourmet con canela fina y licor tibio", "huele a brisa marina helada con manzana crujiente", "huele a postre delicado de vainilla y fresas con crema", "huele a elegancia pura de oficina con madera limpia y cítricos").
3. RECOMENDACIONES CLARAS Y VALIOSAS (MÁXIMO 1 O 2 PERFUMES):
   Para cada recomendación incluye:
   - 👑 **Nombre de la fragancia** y **Casa** (ej. *Lattafa Khamrah Original*)
   - ✨ **A qué huele en la piel** (sensorial y descriptivo)
   - 🎯 **Ocasión ideal y cumplidos que produce** (citas, diario, trabajo, calor, fiesta)
   - ⏱️ **Fijación comprobada** (ej. 12+ horas en piel)
   - 🏷️ **Opciones**: Frasco completo ($XX) y Decant de 10ml ($XX)
4. REGLA DE ORO DE CATÁLOGO (49 FRAGANCIAS ACTIVAS):
   Recomienda ÚNICAMENTE fragancias de este catálogo real de ARKANO:
${JSON.stringify(catalogContext, null, 2)}
   - Si el cliente pregunta por marcas que no tenemos (como Dior, Chanel, Versace o Tom Ford), sé muy amable y explícale con tacto que tenemos sus célebres equivalencias o inspiraciones árabes superiores en fijación (ej. Lattafa Asad Bourbon o Jean Lowe Immortel para la vibra Sauvage; Afnan 9 PM para Ultra Male; Hawas Ice para Invictus; Amber Oud Gold para Erba Pura; Halloween Man X como diseñador disponible).
5. LA OPCIÓN INTELIGENTE DE LOS DECANTS:
   Recuérdale con calidez que si desea sentir la fragancia en su propia piel antes de adquirir la botella grande, puede pedir el Decant de 10ml (~120 a 140 sprays para un mes de uso) a un precio sumamente accesible.
6. CIERRE SERVICIAL Y NATURAL:
   Termina siempre con una pregunta cordial y dulce que ayude al cliente a dar el siguiente paso (ej. "¿Te gustaría que te preparemos un Decant de 10ml para que lo sientas en tu piel, o prefieres conocer otra opción?").`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              { role: 'user', parts: [{ text: systemPrompt + '\n\nHistorial reciente de conversación:\n' + JSON.stringify((history || []).slice(-4)) + '\n\nPregunta actual del cliente: ' + message }] }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600
            }
          })
        });

        if (response.ok) {
          const data = await response.json();
          replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
          
          if (replyText) {
            const lowerReply = replyText.toLowerCase();

            // Match perfumes specifically mentioned by name or ID (not just generic brand word)
            recommendations = PERFUMES_DATA.filter(p => {
              const pName = p.name.toLowerCase();
              const pId = p.id.toLowerCase();
              // Check exact name or id
              if (lowerReply.includes(pName) || lowerReply.includes(pId)) return true;
              
              // Multi-word distinct name parts (e.g. "mandarin sky", "khamrah qahwa", "hawas ice", "liquid brun")
              const parts = pName.split(/\s+/).filter(part => part.length > 3 && !['pour', 'homme', 'eau', 'edition'].includes(part));
              if (parts.length >= 2) {
                const combined = parts.join(' ');
                if (lowerReply.includes(combined)) return true;
              }
              return false;
            }).slice(0, 3);

            // Contextual interactive quick chips
            if (lowerReply.includes('decant')) {
              chips = ['🧪 Pedir Decant de 10ml', '🛒 Ver Frasco Completo', '💬 Comprar por WhatsApp'];
            } else if (lowerReply.includes('cita') || lowerReply.includes('noche') || lowerReply.includes('seduc')) {
              chips = ['🌙 Para Citas y Noche', '👑 Ver los Más Vendidos', '🧪 Probar en Decant de 10ml'];
            } else if (lowerReply.includes('calor') || lowerReply.includes('fresc') || lowerReply.includes('verano')) {
              chips = ['🌊 Perfumes Frescos para Calor', '💼 Para Oficina y Diario', '🧪 Pedir Decant Muestra'];
            } else if (lowerReply.includes('mujer') || lowerReply.includes('dama') || lowerReply.includes('ella')) {
              chips = ['🌸 Ver Fragancias Femeninas', '🍓 Ver Yara Rosa', '💬 Asesoría por WhatsApp'];
            } else {
              chips = ['👑 Los Más Duraderos (+14h)', '🧪 ¿Cómo son los Decants?', '💬 Hablar por WhatsApp'];
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
