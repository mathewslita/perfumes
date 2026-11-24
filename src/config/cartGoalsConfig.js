/**
 * Configuración Oficial de Metas de Compra y Regalos Promocionales — ARKANO PERFUMERÍA
 *
 * Para cambiar los perfumes elegibles en la meta de $350+, simplemente edita los IDs
 * dentro de `FREE_GIFT_PERFUME_IDS` (usando cualquier `id` válido de `src/data/perfumes.js`).
 */

export const CART_GOALS_CONFIG = {
  // Meta 1: Entrega personal sin costo en zonas habilitadas
  personalDeliveryThreshold: 150.0,
  personalDeliveryZones: 'Quito, Valles, Guayllabamba y Cayambe',

  // Meta 2: 1 Perfume Gratis a elegir de la lista cerrada de esta promoción
  freePerfumeThreshold: 350.0,

  // Lista cerrada de perfumes habilitados como regalo al superar $350 USD
  // (Actualmente 3 perfumes de prueba; cámbialos cuando desees)
  freeGiftPerfumeIds: [
    'lattafa-yara-pink',
    'afnan-9-pm',
    'armaf-odyssey-mandarin-sky',
  ],
};
