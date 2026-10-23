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
      text: '¡Bienvenidos a ARKANO PERFUMERÍA! 👑 Soy Yasmin, tu Sommelier de Alta Perfumería Árabe y Diseñador. ¿Buscas un perfume para ti o para regalar? ¿Prefieres la potencia misteriosa de Oriente o la sofisticación icónica de Diseñador?',
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
    { label: '✨ Diseñador Alta Costura', query: 'Recomiéndame lo mejor de diseñador como Dior o Chanel' },
    { label: '👑 Árabes Virales Dubái', query: '¿Cuáles son los perfumes árabes más virales y de mayor duración?' },
    { label: '🍯 Dulce Gourmand & Vainilla', query: 'Busco un perfume dulce, cremoso con vainilla o canela' },
    { label: '🔥 Modo Bestia (+12h)', query: 'Quiero un perfume modo bestia que proyecte muchísimo' }
  ];

  // Sommelier Intelligent Response Engine
  const generateSommelierResponse = (userQuery) => {
    const q = userQuery.toLowerCase();
    let replyText = '';
    let recs = [];

    if (q.includes('diseñador') || q.includes('disenador') || q.includes('dior') || q.includes('chanel') || q.includes('ysl') || q.includes('tom ford')) {
      replyText = 'En nuestra **Colección de Diseñador**, contamos con joyas absolutas de la alta costura: **Dior Sauvage Elixir** (el elixir especiado más potente del mercado) y **Bleu de Chanel Parfum** (la cumbre de la elegancia versátil), además de **YSL Libre Le Parfum** para dama. ¡Obras maestras con batch code certificado!';
      recs = PERFUMES_DATA.filter(p => p.collection === 'disenador');
    } else if (q.includes('árabe') || q.includes('arabe') || q.includes('dubai') || q.includes('dubái') || q.includes('oriente')) {
      replyText = 'Nuestra **Colección Árabe** reúne los mayores fenómenos virales de Dubái: **Lattafa Khamrah** (praliné, canela y dátiles) y **Armaf Club de Nuit Intense Man** (la legendaria bestia negra de cumplidos). Ambos ofrecen concentración extrema a un precio inigualable.';
      recs = PERFUMES_DATA.filter(p => p.id === 'lattafa-khamrah' || p.id === 'armaf-club-de-nuit-intense-man');
    } else if (q.includes('dulce') || q.includes('vainilla') || q.includes('gourmand') || q.includes('canela')) {
      replyText = 'Para amantes de lo dulce y gourmand, te recomiendo **Lattafa Khamrah** (licoroso y especiado), **YSL Libre Le Parfum** (miel, azafrán y vainilla bourbon) y **Lattafa Yara** (fresas con crema batida). ¡Sumamente adictivos!';
      recs = PERFUMES_DATA.filter(p => p.id === 'lattafa-khamrah' || p.id === 'ysl-libre-le-parfum' || p.id === 'lattafa-yara');
    } else if (q.includes('bestia') || q.includes('duracion') || q.includes('duración') || q.includes('fijacion') || q.includes('fijación')) {
      replyText = 'Si buscas que el perfume dure más de 14 a 16 horas con estela arrolladora: **Dior Sauvage Elixir** (en diseñador) y **Al Haramain Amber Oud Gold** (en árabe, concentración Extrait puro) son los reyes indiscutibles.';
      recs = PERFUMES_DATA.filter(p => p.id === 'dior-sauvage-elixir' || p.id === 'al-haramain-amber-oud-gold');
    } else {
      replyText = '¡Excelente consulta! En **ARKANO PERFUMERÍA** cada fragancia incluye su pirámide olfativa y enlace oficial a Fragrantica. ¿Te gustaría asesoría para alguna ocasión en particular? También puedes escribirnos directamente por WhatsApp.';
      recs = [PERFUMES_DATA[0], PERFUMES_DATA[4]];
    }

    return { replyText, recs };
  };

  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    // Append user message
    const newMessages = [...messages, { sender: 'user', text: query }];
    setMessages(newMessages);
    setInputMessage('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history: messages })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([...newMessages, {
          sender: 'bot',
          text: data.reply,
          recommendations: data.recommendations || []
        }]);
        return;
      }
    } catch (e) {
      console.warn('Fallback to local engine:', e);
    }

    // Fallback response engine
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
      {/* Floating Avatar Trigger Button in Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        
        {/* Friendly Speech Bubble */}
        {showGreeting && !isOpen && (
          <div className="mb-2 bg-[#0E0E0E] text-[#F5F1E8] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#C9A961]/60 max-w-xs animate-bounce flex items-center gap-2">
            <span>✨ ¿Dudas entre un perfume árabe o de diseñador? ¡Te ayudo al instante!</span>
            <button 
              onClick={() => setShowGreeting(false)} 
              className="text-gray-400 hover:text-white ml-1"
            >
              &times;
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-[#0E0E0E] text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-[#C9A961] group"
          aria-label="Abrir Sommelier de Perfumes IA"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#C9A961]" />
          ) : (
            <>
              <div className="w-full h-full rounded-full overflow-hidden p-0.5">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                  alt="Yasmin Sommelier ARKANO" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9A961] rounded-full border-2 border-[#0E0E0E] animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="fixed bottom-22 right-5 z-40 w-96 max-w-[calc(100vw-2rem)] h-[540px] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Header */}
          <div className="bg-[#0E0E0E] text-white p-4 flex items-center justify-between border-b border-[#C9A961]/40">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#C9A961]">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" 
                  alt="Yasmin" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-arabic-title text-sm font-bold flex items-center gap-1.5 text-white">
                  Yasmin • Sommelier ARKANO <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
                </h4>
                <span className="text-[10px] text-[#C9A961] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A961]"></span> Asesoría en Vivo Árabes & Diseñador
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-[#F5F1E8] text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#0E0E0E] text-[#F5F1E8] rounded-br-none border border-[#C9A961]/40'
                      : 'bg-white text-gray-900 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>

                {/* Clickable Product Recommendation Cards inside Chat */}
                {msg.recommendations && msg.recommendations.length > 0 && (
                  <div className="mt-2.5 space-y-2 w-full max-w-[90%]">
                    {msg.recommendations.map((perfume) => {
                      const waText = encodeURIComponent(
                        `¡Hola ARKANO Perfumería! El Sommelier Virtual me acaba de recomendar ${perfume.brand} ${perfume.name} ($${perfume.price100ml.toFixed(2)}). Deseo consultar disponibilidad para envío inmediato.`
                      );

                      return (
                        <div
                          key={perfume.id}
                          className="bg-white p-3 rounded-2xl border border-gray-200 shadow-sm hover:border-[#C9A961] transition-all"
                        >
                          <div 
                            className="flex items-center gap-2.5 cursor-pointer mb-2"
                            onClick={() => {
                              onOpenProduct(perfume.id);
                              setIsOpen(false);
                            }}
                          >
                            <img 
                              src={perfume.imageMain} 
                              alt={perfume.name} 
                              className="w-12 h-12 object-contain rounded-xl bg-[#F5F1E8] p-1 border border-gray-100 flex-shrink-0"
                            />
                            <div className="flex-grow">
                              <span className="text-[9px] font-black text-[#0E0E0E] uppercase block">
                                {perfume.brand}
                              </span>
                              <h5 className="font-bold text-xs text-gray-900 leading-tight">
                                {perfume.name}
                              </h5>
                              <div className="flex items-baseline gap-1.5 mt-0.5">
                                <span className="text-xs font-black text-[#0E0E0E]">
                                  ${perfume.price100ml.toFixed(2)}
                                </span>
                                <span className="text-[10px] text-gray-400 line-through">
                                  ${perfume.originalPrice100ml.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-gray-100">
                            <button
                              onClick={() => onAddToCart(perfume, '100ml', 1)}
                              className="bg-[#0E0E0E] text-white hover:text-[#C9A961] font-bold text-[10px] py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 transition-colors"
                            >
                              <ShoppingBag className="w-3 h-3 text-[#C9A961]" />
                              <span>+ Carrito</span>
                            </button>

                            <a
                              href={`https://wa.me/593992851808?text=${waText}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-[#C9A961] hover:bg-[#B89228] text-[#0E0E0E] font-black text-[10px] py-1.5 px-2 rounded-lg flex items-center justify-center gap-1 shadow-sm transition-colors"
                            >
                              <MessageCircle className="w-3 h-3 fill-current" />
                              <span>Pedir WhatsApp</span>
                            </a>
                          </div>
                        </div>
                      );
                    })}
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
                className="flex-shrink-0 text-[10px] bg-[#F5F1E8] hover:bg-[#0E0E0E] hover:text-[#C9A961] text-[#0E0E0E] font-semibold px-2.5 py-1 rounded-full border border-[#C9A961]/30 transition-colors"
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
                placeholder="Pregunta sobre perfumes árabes o diseñador..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow bg-[#F5F1E8] border border-gray-300 rounded-full py-2 px-3 text-xs focus:outline-none focus:border-[#0E0E0E]"
              />
              <button
                type="submit"
                className="bg-[#0E0E0E] hover:bg-[#1A1A1A] text-white p-2 rounded-full transition-all border border-[#C9A961]/40"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4 text-[#C9A961]" />
              </button>
            </form>

            <a
              href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20hablar%20con%20un%20asesor%20humano"
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
