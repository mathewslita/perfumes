import '../src/index.css';

export const metadata = {
  metadataBase: new URL('https://arkanoperfumeria.com'),
  title: 'ARKANO PERFUMERÍA | Perfumes Árabes y Diseñador de Alta Gama 100% Originales',
  description: 'Boutique exclusiva de Alta Perfumería ARKANO. Colección de Perfumes Árabes de Dubái y Perfumes de Diseñador de Alta Costura. Garantía de autenticidad, batch codes verificables y fichas olfativas completas.',
  keywords: 'arkano perfumeria, perfumes arabes originales, perfumes disenador, lattafa khamrah, dior sauvage elixir, club de nuit intense, ysl libre, fragrantica especificaciones, decants originales',
  openGraph: {
    title: 'ARKANO PERFUMERÍA | El Arte de la Alta Perfumería',
    description: 'Descubre las fragancias árabes y de diseñador más exclusivas del mundo. Concentración pura, estela legendaria y garantía total.',
    images: ['/assets/images/lattafa_khamrah.jpg'],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#F5F1E8] text-[#0E0E0E] antialiased selection:bg-[#0E0E0E] selection:text-[#C9A961]">
        {children}
      </body>
    </html>
  );
}
