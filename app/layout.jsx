import '../src/index.css';

export const metadata = {
  metadataBase: new URL('https://sultanparfums.com'),
  title: 'SULTAN PARFUMS | Perfumes Árabes 100% Originales con Sello Holográfico',
  description: 'Boutique oficial de Perfumes Árabes 100% Originales de Dubái. Lattafa, Armaf, Afnan, Al Haramain con Batch Code verificable, sello holográfico y envíos express.',
  keywords: 'perfumes arabes originales, lattafa khamrah, armaf club de nuit, afnan 9pm, lattafa yara, perfumes de dubai',
  openGraph: {
    title: 'SULTAN PARFUMS | Lujo Oriental Accesible',
    description: 'Descubre los perfumes árabes más virales y con mayor fijación (12h+). 100% originales con garantía y decants de muestra.',
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
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-[#FAF7F2] text-gray-900 antialiased selection:bg-[#2E1065] selection:text-[#D4AF37]">
        {children}
      </body>
    </html>
  );
}
