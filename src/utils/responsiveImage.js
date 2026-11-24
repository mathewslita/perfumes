/**
 * Builds an encoded responsive srcSet string (320w, 480w, 720w) for root /assets/images/*.webp files.
 */
export function getResponsiveSrcSet(imagePath) {
  if (!imagePath || !imagePath.startsWith('/assets/images/') || !imagePath.endsWith('.webp')) {
    return undefined;
  }
  const fileName = imagePath.slice('/assets/images/'.length);
  if (fileName.includes('/')) {
    return undefined;
  }
  const base = fileName.slice(0, -5);
  const u320 = encodeURI(`/assets/images/thumbs/${base}-320.webp`);
  const u480 = encodeURI(`/assets/images/thumbs/${base}-480.webp`);
  const u720 = encodeURI(imagePath);
  return `${u320} 320w, ${u480} 480w, ${u720} 720w`;
}
