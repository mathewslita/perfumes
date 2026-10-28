import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, MessageCircle, ChevronRight, ShoppingBag, RotateCcw, Award, Crown, Check } from 'lucide-react';
import { PERFUMES_DATA } from '../data/perfumes';
import { analyzeAndRespond } from '../utils/aiSommelierBrain';

export default function AiSommelierWidget({ onOpenProduct, onAddToCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const initialBotMessage = {
    sender: 'bot',
    text: '¡Hola! Qué gusto saludarte 👑 Soy tu asesor personal de fragancias en **ARKANO PERFUMERÍA**.\n\nMi meta es ayudarte a encontrar ese aroma que de verdad vaya contigo y te haga recibir cumplidos, sin enredos ni tecnicismos aburridos.\n\nCuéntame: ¿buscas un perfume para ti o para hacer un regalo? ¿Y para qué ocasiones te gustaría usarlo (diario, trabajo, citas románticas o salir de fiesta)?',
    recommendations: [
      PERFUMES_DATA.find(p => p.id === 'lattafa-khamrah'),
      PERFUMES_DATA.find(p => p.id === 'armaf-club-de-nuit-intense-man')
    ].filter(Boolean),
    chips: [
      '👔 Para el día a día / Trabajo',
      '🌙 Para citas o salir de noche',
      '👑 Árabes con fijación extrema',
      '🎁 Quiero hacer un regalo',
      '🧪 ¿Cómo son los Decants de 10ml?'
    ]
  };

  const [messages, setMessages] = useState([initialBotMessage]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setShowGreeting(false);
    }
  }, [isOpen, messages, isTyping]);

  // Handle user sending a message (or tapping a chip) with real API integration
  const handleSendMessage = async (textToSend) => {
    const query = textToSend || inputMessage;
    if (!query.trim() || isTyping) return;

    // Append user message
    const updatedMessages = [...messages, { sender: 'user', text: query }];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: updatedMessages
        })
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([
          ...updatedMessages,
          {
            sender: 'bot',
            text: data.reply,
            recommendations: data.recommendations || [],
            chips: data.chips || []
          }
        ]);
      } else {
        // Fallback to local advisor brain
        const fallback = analyzeAndRespond(query, updatedMessages);
        setMessages([
          ...updatedMessages,
          {
            sender: 'bot',
            text: fallback.replyText,
            recommendations: fallback.recommendations || [],
            chips: fallback.chips || []
          }
        ]);
      }
    } catch (err) {
      // Offline fallback
      const fallback = analyzeAndRespond(query, updatedMessages);
      setMessages([
        ...updatedMessages,
        {
          sender: 'bot',
          text: fallback.replyText,
          recommendations: fallback.recommendations || [],
          chips: fallback.chips || []
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // Reset conversation
  const handleResetChat = () => {
    setMessages([initialBotMessage]);
    setInputMessage('');
    setIsTyping(false);
  };

  return (
    <>
      {/* Floating Avatar Trigger Button in Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
        
        {/* Friendly Speech Bubble - Mascot Image 1 */}
        {showGreeting && !isOpen && (
          <div className="mb-2 bg-[#0E0E0E] text-[#F5F1E8] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#C9A961]/70 max-w-xs animate-bounce flex items-center gap-2">
            <span className="font-semibold text-[#F5F1E8]">¡Hola! Estoy aquí para ayudarte 😊</span>
            <button 
              onClick={() => setShowGreeting(false)} 
              className="text-gray-400 hover:text-white ml-1 text-sm font-bold"
              aria-label="Cerrar saludo"
            >
              &times;
            </button>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-white text-white shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all border-2 border-[#C9A961] group"
          aria-label="Abrir Asistente de Perfumes ARKANO"
          title="Asistente ARKANO Perfumes - ¡Estoy aquí para ayudarte!"
        >
          {isOpen ? (
            <div className="w-full h-full rounded-full bg-[#0E0E0E] flex items-center justify-center">
              <X className="w-6 h-6 text-[#C9A961]" />
            </div>
          ) : (
            <>
              <div className="w-full h-full rounded-full overflow-hidden p-0.5 bg-white">
                <img 
                  src="/assets/images/arkano_mascot.jpg" 
                  alt="Asistente ARKANO Perfumes" 
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
        <div className="fixed bottom-22 right-3 sm:right-5 z-40 w-[94vw] sm:w-[410px] h-[570px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#C9A961]/35 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Chat Header */}
          <div className="bg-[#0E0E0E] text-white p-3.5 sm:p-4 flex items-center justify-between border-b border-[#C9A961]/40">
            <div className="flex items-center gap-2.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A961] bg-white">
                <img 
                  src="/assets/images/arkano_mascot.jpg" 
                  alt="Asistente ARKANO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-arabic-title text-sm font-bold flex items-center gap-1.5 text-white">
                  Asistente ARKANO <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
                </h4>
                <span className="text-[10px] text-[#C9A961] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>¡Hola! Estoy aquí para ayudarte :)</span>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="text-gray-400 hover:text-[#C9A961] p-1.5 rounded-full hover:bg-white/10 transition-colors"
                title="Reiniciar conversación"
                aria-label="Reiniciar conversación"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-grow p-3 sm:p-4 overflow-y-auto space-y-3.5 bg-[#F8F5EE] text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                {/* Bot Identity Header */}
                {msg.sender !== 'user' && (
                  <div className="flex items-center gap-1.5 mb-1 pl-1">
                    <img 
                      src="/assets/images/arkano_mascot.jpg" 
                      alt="ARKANO" 
                      className="w-4 h-4 rounded-full object-cover border border-[#C9A961]"
                    />
                    <span className="text-[10px] font-bold text-stone-600">Asistente ARKANO</span>
                  </div>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#0E0E0E] text-[#F5F1E8] rounded-br-none border border-[#C9A961]/40'
                      : 'bg-white text-gray-900 border border-stone-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line text-xs sm:text-[12.5px] leading-relaxed">
                    {msg.text}
                  </p>
                </div>

                {/* Clickable Product Recommendation Cards inside Chat */}
                {msg.recommendations && msg.recommendations.length > 0 && (
                  <div className="mt-2.5 space-y-2.5 w-full max-w-[94%]">
                    {msg.recommendations.map((perfume) => {
                      const isArabic = perfume.collection === 'arabes';
                      const decantPrice = isArabic ? 15.00 : 30.00;
                      const waText = encodeURIComponent(
                        `¡Hola ARKANO Perfumería! El Sommelier Virtual Yasmin me acaba de recomendar ${perfume.brand} ${perfume.name}. Deseo consultar disponibilidad para despacho express.`
                      );

                      return (
                        <div
                          key={perfume.id}
                          className="bg-white p-3 rounded-2xl border border-stone-200 shadow-sm hover:border-[#C9A961] transition-all"
                        >
                          {/* Card Header & Thumbnail */}
                          <div 
                            className="flex items-center gap-3 cursor-pointer"
                            onClick={() => {
                              onOpenProduct(perfume.id);
                              setIsOpen(false);
                            }}
                            title="Ver detalles completos del perfume"
                          >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-[#FFFDF9] via-[#F8F4EC] to-[#EFE8DA] p-1 border border-stone-200 flex-shrink-0 flex items-center justify-center">
                              <img 
                                src={perfume.imageMain} 
                                alt={perfume.name} 
                                className="w-full h-full object-contain filter drop-shadow-sm"
                              />
                            </div>
                            
                            <div className="flex-grow min-w-0">
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="text-[9px] font-black text-[#0E0E0E] uppercase tracking-wider truncate">
                                  {perfume.brand}
                                </span>
                                <span className={`text-[8.5px] font-bold px-1.5 py-0.2 rounded-full border ${
                                  isArabic ? 'bg-[#C9A961]/20 text-[#0E0E0E] border-[#C9A961]' : 'bg-[#0E0E0E] text-white border-white/20'
                                }`}>
                                  {isArabic ? '👑 Árabe' : '✨ Diseñador'}
                                </span>
                              </div>

                              <h5 className="font-bold text-xs text-gray-950 truncate leading-snug">
                                {perfume.name}
                              </h5>

                              {/* Pricing Options */}
                              <div className="flex items-baseline gap-2 mt-1">
                                <span className="text-xs font-black text-[#0E0E0E]">
                                  ${perfume.price100ml.toFixed(2)}
                                </span>
                                <span className="text-[10.5px] text-[#A58B4E] font-semibold">
                                  Decant 10ml: <strong>${decantPrice.toFixed(2)}</strong>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Purchase Buttons */}
                          <div className="grid grid-cols-2 gap-2 mt-2.5 pt-2 border-t border-stone-100">
                            <button
                              onClick={() => onAddToCart(perfume, '100ml', 1)}
                              className="bg-[#0E0E0E] hover:bg-[#1F1F1F] text-white hover:text-[#C9A961] font-bold text-[10px] py-1.5 px-2 rounded-xl flex items-center justify-center gap-1 transition-all border border-[#C9A961]/30 active:scale-95"
                              title="Agregar frasco completo al carrito"
                            >
                              <ShoppingBag className="w-3 h-3 text-[#C9A961]" />
                              <span>+ Frasco</span>
                            </button>

                            <button
                              onClick={() => onAddToCart(perfume, 'decant', 1)}
                              className="bg-[#C9A961]/15 hover:bg-[#C9A961]/25 text-[#0E0E0E] font-extrabold text-[10px] py-1.5 px-2 rounded-xl flex items-center justify-center gap-1 border border-[#C9A961]/50 transition-all active:scale-95"
                              title="Agregar decant muestra 10ml al carrito"
                            >
                              <span>🧪 + Decant ${decantPrice.toFixed(0)}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Follow-Up Suggestion Chips */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[94%]">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip)}
                        className="text-[10.5px] font-semibold bg-white hover:bg-[#0E0E0E] text-[#0E0E0E] hover:text-[#C9A961] border border-[#C9A961]/40 py-1 px-2.5 rounded-full shadow-xs transition-all active:scale-95 flex items-center gap-1"
                      >
                        <span>{chip}</span>
                        <ChevronRight className="w-3 h-3 text-[#C9A961]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-stone-500 text-xs py-2 px-3 bg-white rounded-2xl w-fit shadow-xs border border-stone-200 animate-pulse">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A961]" />
                <span className="italic">Yasmin está preparando tu recomendación...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input & Human Escalation */}
          <div className="p-3 bg-white border-t border-stone-200 flex flex-col gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Escribe tu consulta (notas, ocasión, dudas...)"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                disabled={isTyping}
                className="flex-grow bg-[#F8F5EE] border border-stone-300 rounded-full py-2 px-3.5 text-xs focus:outline-none focus:border-[#C9A961] text-gray-900 placeholder:text-stone-400"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="bg-[#0E0E0E] hover:bg-[#252525] disabled:opacity-40 text-white p-2 rounded-full transition-all border border-[#C9A961]/40 active:scale-95"
                aria-label="Enviar mensaje"
              >
                <Send className="w-4 h-4 text-[#C9A961]" />
              </button>
            </form>

            <a
              href="https://wa.me/593992851808?text=Hola%20ARKANO%20Perfumería,%20deseo%20asesoría%20personalizada%20con%20un%20sommelier%20humano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] text-stone-600 hover:text-emerald-700 flex items-center justify-center gap-1 font-medium transition-colors"
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
