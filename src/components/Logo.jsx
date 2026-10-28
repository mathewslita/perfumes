import React from 'react';

/**
 * Componente oficial de identidad de marca ARKANO PERFUMERÍA
 * Reproduce fielmente el isotipo arquitectónico (A estilizada con punto central)
 * y la tipografía de alta gama con los colores de la marca:
 * - Negro: #0E0E0E
 * - Dorado: #C9A961
 * - Dorado apagado: #A58B4E
 * - Blanco hueso: #F5F1E8
 */
export default function Logo({ 
  variant = 'full', // 'full' | 'horizontal' | 'icon' | 'symbol'
  theme = 'light', // 'light' (para fondos oscuros) | 'dark' (para fondos claros) | 'gold'
  className = '',
  size = 'md' // 'sm' | 'md' | 'lg' | 'xl'
}) {
  const isDarkBg = theme === 'light'; // Texto blanco hueso/dorado para fondo oscuro
  const textColor = isDarkBg ? '#F5F1E8' : '#0E0E0E';
  const goldColor = '#C9A961';
  const mutedGold = '#A58B4E';

  // Símbolo vectorial exacto de la A con vértice agudo y punto central
  const SymbolSvg = ({ width = 42, height = 46, color = goldColor }) => (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 110" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      {/* Vértice de la A estilizada */}
      <path 
        d="M 16 92 L 50 14 L 84 92" 
        stroke={color} 
        strokeWidth="5.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      {/* Punto interior central */}
      <circle 
        cx="50" 
        cy="68" 
        r="5.5" 
        fill={color} 
      />
    </svg>
  );

  // Variante: Solo el ícono circular negro con la A dorada (Ref: imagen 1 esquina inferior derecha)
  if (variant === 'icon') {
    const dim = size === 'sm' ? 36 : size === 'lg' ? 56 : size === 'xl' ? 72 : 44;
    return (
      <div 
        className={`rounded-full flex items-center justify-center shadow-md border border-[#C9A961]/30 ${className}`}
        style={{ 
          width: dim, 
          height: dim, 
          backgroundColor: '#0E0E0E' 
        }}
        title="ARKANO Perfumería"
      >
        <SymbolSvg width={dim * 0.58} height={dim * 0.62} color="#C9A961" />
      </div>
    );
  }

  // Variante: Solo el símbolo vectorial A·
  if (variant === 'symbol') {
    return <SymbolSvg width={36} height={40} color={isDarkBg ? '#C9A961' : '#0E0E0E'} />;
  }

  // Variante: Horizontal (Isotipo A· al lado de ARKANO PERFUMERÍA)
  if (variant === 'horizontal') {
    const isXs = size === 'xs';
    return (
      <div className={`flex items-center ${isXs ? 'gap-1.5' : size === 'sm' ? 'gap-2.5' : 'gap-3'} ${className}`}>
        <SymbolSvg 
          width={isXs ? 19 : size === 'sm' ? 24 : size === 'lg' ? 38 : 32} 
          height={isXs ? 22 : size === 'sm' ? 28 : size === 'lg' ? 42 : 36} 
          color={goldColor} 
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span 
              className="font-serif tracking-[0.2em] sm:tracking-[0.28em] font-extrabold uppercase leading-none"
              style={{ 
                color: textColor,
                fontSize: isXs ? '0.9rem' : size === 'sm' ? '1.05rem' : size === 'lg' ? '1.75rem' : '1.4rem'
              }}
            >
              ARKANO
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
            <span 
              className="h-[1px] w-2 sm:w-4"
              style={{ backgroundColor: mutedGold }}
            />
            <span 
              className="tracking-[0.22em] sm:tracking-[0.32em] font-medium uppercase text-[7px] sm:text-[9px]"
              style={{ color: goldColor }}
            >
              PERFUMERÍA
            </span>
            <span 
              className="h-[1px] w-2 sm:w-4"
              style={{ backgroundColor: mutedGold }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Variante: Completa Vertical (Ref: Imagen 1 principal)
  // Con el símbolo arriba, ARKANO en el medio, línea divisoria y PERFUMERÍA abajo
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {/* Símbolo A */}
      <SymbolSvg 
        width={size === 'sm' ? 32 : size === 'lg' ? 52 : size === 'xl' ? 68 : 42} 
        height={size === 'sm' ? 36 : size === 'lg' ? 58 : size === 'xl' ? 76 : 48} 
        color={goldColor} 
      />
      
      {/* Wordmark ARKANO */}
      <span 
        className="font-serif tracking-[0.32em] font-extrabold uppercase mt-2.5 leading-none transition-colors"
        style={{ 
          color: textColor,
          fontSize: size === 'sm' ? '1.15rem' : size === 'lg' ? '1.9rem' : size === 'xl' ? '2.4rem' : '1.5rem',
          marginLeft: '0.32em' // Compensa el tracking para centrado visual perfecto
        }}
      >
        ARKANO
      </span>

      {/* Línea divisoria dorada sutil */}
      <div 
        className="my-1.5 h-[1px] transition-all"
        style={{ 
          width: size === 'sm' ? '36px' : size === 'lg' ? '60px' : '46px',
          backgroundColor: goldColor,
          opacity: 0.85
        }} 
      />

      {/* Subtítulo PERFUMERÍA */}
      <span 
        className="font-serif tracking-[0.38em] uppercase transition-colors"
        style={{ 
          color: goldColor,
          fontSize: size === 'sm' ? '8px' : size === 'lg' ? '11px' : size === 'xl' ? '13px' : '9.5px',
          marginLeft: '0.38em' // Compensa el tracking
        }}
      >
        PERFUMERÍA
      </span>
    </div>
  );
}
