/**
 * Configuración Oficial de Metas de Compra y Regalos Promocionales — ARKANO PERFUMERÍA
 *
 * Metas progresivas activas:
 *  - $120 USD: 1 Decant de 10 ml GRATIS
 *  - $150 USD: Entrega Personal GRATIS (Quito, Valles, Guayllabamba y Cayambe)
 *  - $350 USD: 1 Perfume Original GRATIS (Frasco 100 ml de la lista cerrada)
 *  - $550 USD: 2 Perfumes Originales GRATIS (Frascos 100 ml de la misma lista cerrada)
 *
 * Para cambiar los perfumes elegibles en las metas de $350+ y $550+, edita los IDs
 * dentro de `freeGiftPerfumeIds` (usando cualquier `id` válido de `src/data/perfumes.js`).
 */

export const CART_GOALS_CONFIG = {
  // Meta 1 ($120): 1 Decant de 10 ml Gratis
  freeDecantThreshold: 120.0,

  // Meta 2 ($150): Entrega personal sin costo en zonas habilitadas
  personalDeliveryThreshold: 150.0,
  personalDeliveryZones: 'Quito, Valles, Guayllabamba y Cayambe',

  // Meta 3 ($350): 1 Perfume Gratis de la lista cerrada
  freePerfumeThreshold: 350.0,

  // Meta 4 ($550): 2 Perfumes Gratis de la misma lista cerrada
  twoFreePerfumesThreshold: 550.0,

  // Lista cerrada de perfumes habilitados como regalo ($350+ = 1 regalo, $550+ = 2 regalos)
  freeGiftPerfumeIds: [
    'lattafa-yara-pink',
    'afnan-9-pm',
    'armaf-odyssey-mandarin-sky',
  ],
};

export function getAllowedFreePerfumesCount(paidTotal) {
  if (paidTotal >= CART_GOALS_CONFIG.twoFreePerfumesThreshold) return 2;
  if (paidTotal >= CART_GOALS_CONFIG.freePerfumeThreshold) return 1;
  return 0;
}
