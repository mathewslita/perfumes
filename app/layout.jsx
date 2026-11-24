import '../src/index.css';
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond, Cinzel } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant-gf',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-cinzel-gf',
});

export const metadata = {
  metadataBase: new URL('https://arkanoperfumeria.com'),
  title: 'ARKANO PERFUMERÍA | Perfumes Árabes y Diseñador de Alta Gama 100% Originales',
  description: 'Boutique exclusiva de Alta Perfumería ARKANO. Colección de Perfumes Árabes de Dubái y Perfumes de Diseñador de Alta Costura. Garantía de autenticidad, batch codes verificables y fichas olfativas completas.',
  keywords: 'arkano perfumeria, perfumes arabes originales, perfumes disenador, lattafa khamrah, dior sauvage elixir, club de nuit intense, ysl libre, fragrantica especificaciones, decants originales',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'ARKANO PERFUMERÍA | El Arte de la Alta Perfumería',
    description: 'Descubre las fragancias árabes y de diseñador más exclusivas del mundo. Concentración pura, estela legendaria y garantía total.',
    images: ['/assets/images/Khamrah clasico.webp'],
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${jakarta.variable} ${cormorant.variable} ${cinzel.variable}`}
    >
      <body className="bg-[#F5F1E8] text-[#0E0E0E] antialiased selection:bg-[#0E0E0E] selection:text-[#C9A961]">
        {children}
      </body>
    </html>
  );
}
