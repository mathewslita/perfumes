import React from 'react';
import { X, Gift, Check, Crown, ShieldCheck, ArrowRight } from 'lucide-react';
import { PERFUMES_DATA } from '../data/perfumes';
import { CART_GOALS_CONFIG, getAllowedFreePerfumesCount } from '../config/cartGoalsConfig';
import { getResponsiveSrcSet } from '../utils/responsiveImage';

export default function FreeGiftModal({
  isOpen,
  onClose,
  cartTotal,
  selectedGiftIds = [],
  onToggleGift,
  onConfirmGifts,
}) {
  const allowedCount = getAllowedFreePerfumesCount(cartTotal);

  // Seguridad estricta: jamás mostrar esta ventana si la compra es menor a $350
  if (!isOpen || allowedCount === 0) {
    return null;
  }

  const eligiblePerfumes = CART_GOALS_CONFIG.freeGiftPerfumeIds
    .map((id) => PERFUMES_DATA.find((p) => p.id === id))
    .filter(Boolean);

  const selectedCount = selectedGiftIds.length;
  const isComplete = selectedCount === allowedCount;

  const handleCardClick = (perfumeId) => {
    if (allowedCount === 1) {
      onToggleGift(perfumeId, 1);
    } else {
      onToggleGift(perfumeId, 2);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[170] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden my-auto border-2 border-[#C9A961] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Luxury Header */}
        <div className="bg-[#0E0E0E] text-[#F5F1E8] p-5 sm:p-6 border-b border-[#C9A961]/40 relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#C9A961] hover:text-white transition-colors cursor-pointer"
            aria-label="Cerrar selección de regalo"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#C9A961]/20 text-[#C9A961] border border-[#C9A961]/50 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2.5">
            <Crown className="w-3.5 h-3.5" />
            <span>
              {allowedCount === 2
                ? `META SUPREMA DE $${CART_GOALS_CONFIG.twoFreePerfumesThreshold} USD SUPERADA`
                : `META DE $${CART_GOALS_CONFIG.freePerfumeThreshold} USD SUPERADA`}
            </span>
          </div>

          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
            {allowedCount === 2
              ? `Elige tus 2 Perfumes Originales Gratis (${selectedCount}/2) 🎁`
              : 'Elige tu Perfume Original Gratis 🎁'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 leading-relaxed">
            Por tu compra de <strong className="text-[#C9A961]">${cartTotal.toFixed(2)} USD</strong>, selecciona{' '}
            <strong>
              {allowedCount === 2 ? '2 fragancias (Frascos 100 ml sellados)' : '1 fragancia (Frasco 100 ml sellado)'}
            </strong>{' '}
            entre las opciones exclusivas de esta promoción:
          </p>
        </div>

        {/* Closed List of Owner-Curated Gift Perfumes */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 bg-[#FAF8F5]">
          {eligiblePerfumes.map((perfume) => {
            const isSelected = selectedGiftIds.includes(perfume.id);
            const isDisabledToAdd = !isSelected && allowedCount > 1 && selectedCount >= allowedCount;

            return (
              <div
                key={perfume.id}
                onClick={() => handleCardClick(perfume.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 bg-white ${
                  isSelected
                    ? 'border-[#0E0E0E] ring-2 ring-[#C9A961] shadow-lg'
                    : isDisabledToAdd
                      ? 'border-stone-200 opacity-65 hover:opacity-100 hover:border-stone-300'
                      : 'border-stone-200 hover:border-[#C9A961] shadow-xs hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl bg-white p-1.5 border border-stone-200 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={perfume.imageMain}
                      srcSet={getResponsiveSrcSet(perfume.imageMain)}
                      sizes="80px"
                      alt={perfume.name}
                      width="80"
                      height="80"
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#755B1E]">
                        {perfume.brand}
                      </span>
                      <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
                        Frasco 100 ml • {perfume.gender}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#0E0E0E] leading-snug mt-0.5 truncate">
                      {perfume.name}
                    </h3>

                    {perfume.noteIcons && (
                      <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                        {perfume.noteIcons.map((n, i) => (
                          <span key={i} className="text-[10.5px] text-stone-600 flex items-center gap-0.5">
                            <span>{n.emoji}</span>
                            <span>{n.name}</span>
                            {i < perfume.noteIcons.length - 1 && <span className="text-stone-300 mx-0.5">•</span>}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-xs font-bold text-stone-500 line-through">
                        Valor normal: ${perfume.price100ml.toFixed(2)}
                      </span>
                      <span className="text-[10.5px] font-black text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        GRATIS ($0.00)
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(perfume.id);
                  }}
                  className={`px-4 py-2.5 rounded-full font-black text-xs flex items-center justify-center gap-1.5 transition-all flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                      : 'bg-[#0E0E0E] hover:bg-[#1F1F1F] text-[#C9A961] border border-[#C9A961]/50'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>{allowedCount > 1 ? 'Elegido (Quitar)' : 'Seleccionado'}</span>
                    </>
                  ) : (
                    <>
                      <Gift className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Elegir regalo</span>
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer action & guarantee */}
        <div className="px-5 py-3.5 bg-white border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] text-stone-600">
          <div className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#755B1E] flex-shrink-0" />
            <span>Perfumes 100% originales con sello de fábrica y Batch Code sin costo.</span>
          </div>

          {allowedCount > 1 && (
            <button
              type="button"
              disabled={!isComplete}
              onClick={onConfirmGifts}
              className={`px-5 py-2.5 rounded-full font-black text-xs flex items-center justify-center gap-1.5 transition-all flex-shrink-0 ${
                isComplete
                  ? 'bg-[#0E0E0E] hover:bg-[#1F1F1F] text-[#C9A961] border border-[#C9A961] shadow-md cursor-pointer'
                  : 'bg-stone-200 text-stone-500 cursor-not-allowed'
              }`}
            >
              <span>
                {isComplete
                  ? 'Confirmar mis 2 regalos'
                  : `Elige ${allowedCount - selectedCount} más (${selectedCount}/${allowedCount})`}
              </span>
              {isComplete && <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
