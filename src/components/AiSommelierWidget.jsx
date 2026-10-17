import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, MessageCircle, ChevronRight, ShoppingBag } from 'lucide-react';
import { PERFUMES_DATA } from '../data/perfumes';

export default function AiSommelierWidget({ onOpenProduct, onAddToCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Salam y bienvenidos a Sultan Parfums! 🌙 Soy Yasmin, tu Sommelier de Perfumería Árabe. ¿Buscas un perfume para ti o para regalar? ¿Prefieres algo dulce y gourmand, o una bomba de duración extrema?',
      recommendations: []
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowGreeting(false);
    }
  }, [isOpen, messages]);

  // Suggested Prompts
  const quickPrompts = [
    { label: '🍯 Dulce y Vainilla Gourmand', query: 'Busco un perfume dulce, cremoso con vainilla o canela' },
    { label: '🔥 Duración Extrema (+12h)', query: 'Quiero un perfume modo bestia que proyecte muchísimo' },
    { label: '💼 Fresco para Oficina', query: 'Un aroma limpio y elegante para usar diario en el trabajo' },
    { label: '👑 El más viral de TikTok', query: '¿Cuál es el perfume más famoso y vendido de la tienda?' }
  ];

  // Sommelier Intelligent Response Engine (Ready for Gemini API backend)
  const generateSommelierResponse = (userQuery) => {
    const q = userQuery.toLowerCase();
    let replyText = '';
    let recs = [];

    if (q.includes('dulce') || q.includes('vainilla') || q.includes('gourmand') || q.includes('canela') || q.includes('praliné')) {
      replyText = 'Para amantes de lo dulce y gourmand, tenemos dos joyas absolutas de Oriente: **Lattafa Khamrah** (canela, praliné belga y dátiles, estilo Angels Share) y **Lattafa Yara** (fresas con crema batida y malvaviscos esponjosos). ¡Ambos son sumamente adictivos y generan elogios constantes!';
      recs = PERFUMES_DATA.filter(p => p.id === 'lattafa-khamrah' || p.id === 'lattafa-yara');
    } else if (q.includes('bestia') || q.includes('duracion') || q.includes('duración') || q.includes('fijacion') || q.includes('fijación') || q.includes('fuerte')) {
      replyText = 'Si buscas que el perfume dure más de 12 a 16 horas en piel y días en ropa, te recomiendo directamente **Al Haramain Amber Oud (Gold Edition)** (concentración Extrait) y **Armaf Club de Nuit Intense Man** (el legendario clon de Creed Aventus con estela de 2 metros). ¡Son auténticos monstruos de fijación!';
      recs = PERFUMES_DATA.filter(p => p.id === 'al-haramain-amber-oud-gold' || p.id === 'armaf-club-de-nuit-intense-man');
    } else if (q.includes('oficina') || q.includes('trabajo') || q.includes('fresco') || q.includes('diario') || q.includes('limpio')) {
      replyText = 'Para el día a día y oficina necesitas algo sofisticado que no abrume. **Club de Nuit Woman** (inspirado en Coco Mademoiselle) para dama, y **Club de Nuit Urban Man Elixir** para caballero son opciones sumamente elegantes y versátiles.';
      recs = PERFUMES_DATA.filter(p => p.id === 'armaf-club-de-nuit-woman' || p.id === 'armaf-club-de-nuit-urban-man-elixir');
    } else if (q.includes('viral') || q.includes('tiktok') || q.includes('famoso') || q.includes('mas vendido') || q.includes('más vendido')) {
      replyText = 'Sin duda alguna, los reyes de TikTok son **Lattafa Khamrah** y **Afnan 9 PM**. Khamrah ha acumulado cientos de millones de visitas por su parecido a un perfume de $300 USD, y 9 PM es el rey de las fiestas nocturnas.';
      recs = PERFUMES_DATA.filter(p => p.id === 'lattafa-khamrah' || p.id === 'afnan-9pm');
    } else if (q.includes('original') || q.includes('autenticidad') || q.includes('batch') || q.includes('copia')) {
      replyText = 'Todos nuestros perfumes son **100% Originales importados directamente de Dubái**, sellados de fábrica con su **Sello Holográfico de Seguridad** y **Batch Code** verificable en la base del frasco y caja. ¡Garantía de satisfacción total o la devolución de tu dinero!';
      recs = [];
    } else {
      replyText = '¡Excelente pregunta! En la perfumería árabe destacamos por tener concentraciones altas (Eau de Parfum y Extrait). ¿Para qué ocasión principal deseas tu nueva fragancia? También puedes hablar directamente con uno de nuestros asesores humanos por WhatsApp.';
      recs = [PERFUMES_DATA[0], PERFUMES_DATA[3]];
    }

    return { replyText, recs };
  };

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');

    // Simulate AI thinking and reply
    setTimeout(() => {
      const { replyText, recs } = generateSommelierResponse(query);
      setMessages([...newMessages, {
        sender: 'bot',
        text: replyText,
        recommendations: recs
      }]);
    }, 450);
  };

  return (
    <>
      {/* Floating Avatar Trigger Button in Bottom Right (Ref: Imagen 1, 2, 3, 4) */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        
        {/* Friendly Speech Bubble (Ref: Prompt spec) */}
        {showGreeting && !isOpen && (
          <div className="mb-2 bg-white text-gray-800 text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#D4AF37]/50 max-w-xs animate-bounce flex items-center gap-2">
            <span>✨ ¿No sabes cuál elegir? ¡Te ayudo a encontrar tu perfume árabe ideal!</span>
            <button 
              onClick={() => setShowGreeting(false)} 
              className="text-gray-400 hover:text-gray-700 ml-1"
            >
              &times;
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#2E1065] to-[#581C87] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-[#D4AF37] group"
          aria-label="Abrir Sommelier de Perfumes IA"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              {/* Avatar Image representation (matching circular avatar in screenshots) */}
              <div className="w-full h-full rounded-full overflow-hidden p-0.5">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                  alt="Yasmin Sommelier" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-22 right-5 z-40 w-96 max-w-[calc(100vw-2rem)] h-[540px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Header */}
          <div className="bg-[#2E1065] text-white p-4 flex items-center justify-between border-b border-[#D4AF37]/40">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                  alt="Yasmin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-arabic-title text-sm font-bold flex items-center gap-1.5">
                  Yasmin • Sommelier IA <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h4>
                <span className="text-[10px] text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Conectada y Lista para Asesorarte
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-[#FAF7F2] text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#2E1065] text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Clickable Product Recommendation Cards inside Chat */}
                {msg.recommendations && msg.recommendations.length > 0 && (
                  <div className="mt-2.5 space-y-2 w-full max-w-[90%]">
                    {msg.recommendations.map((perfume) => (
                      <div
                        key={perfume.id}
                        className="bg-white p-2.5 rounded-xl border border-purple-100 shadow-sm flex items-center justify-between gap-2 hover:border-[#D4AF37] transition-all"
                      >
                        <div 
                          className="flex items-center gap-2 cursor-pointer flex-grow"
                          onClick={() => {
                            onOpenProduct(perfume.id);
                            setIsOpen(false);
                          }}
                        >
                          <img 
                            src={perfume.imageMain} 
                            alt={perfume.name} 
                            className="w-11 h-11 object-contain rounded bg-[#FAF7F2] p-1"
                          />
                          <div>
                            <span className="text-[9px] font-bold text-[#2E1065] uppercase block">
                              {perfume.brand}
                            </span>
                            <h5 className="font-bold text-xs text-gray-900 leading-tight">
                              {perfume.name}
                            </h5>
                            <span className="text-xs font-black text-[#D4AF37]">
                              ${perfume.price100ml.toFixed(2)}
                            </span>
                          </div>
                        </div>

                        <button
                          onClick={() => onAddToCart(perfume, '100ml', 1)}
                          className="bg-[#2E1065] text-white p-2 rounded-full hover:bg-[#3B0764] transition-all"
                          title="Añadir a la bolsa"
                        >
                          <ShoppingBag className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Pills */}
          <div className="p-2 bg-white border-t border-gray-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(p.query)}
                className="flex-shrink-0 text-[10px] bg-purple-50 hover:bg-purple-100 text-[#2E1065] font-semibold px-2.5 py-1 rounded-full border border-purple-200/50 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Chat Input & Human Escalation */}
          <div className="p-3 bg-white border-t border-gray-100 flex flex-col gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Escribe tu duda olfativa..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow bg-[#FAF7F2] border border-gray-200 rounded-full py-2 px-3 text-xs focus:outline-none focus:border-[#2E1065]"
              />
              <button
                type="submit"
                className="bg-[#2E1065] hover:bg-[#3B0764] text-white p-2 rounded-full transition-all"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4 text-[#D4AF37]" />
              </button>
            </form>

            <a
              href="https://wa.me/593985911895?text=Hola,%20deseo%20hablar%20con%20un%20asesor%20humano%20sobre%20perfumes%20árabes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-gray-500 hover:text-emerald-700 flex items-center justify-center gap-1 font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>¿Prefieres hablar con un asesor humano en WhatsApp?</span>
            </a>
          </div>

        </div>
      )}
    </>
  );
}
