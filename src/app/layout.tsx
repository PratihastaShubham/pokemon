import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pokemonreminiscencia.site'),
  title: {
    default: "Pokémon Reminiscencia - Roguelike Fan Adventure",
    template: "%s | Pokémon Reminiscencia"
  },
  description: "Download Pokémon Reminiscencia - a beautiful, challenging, story-driven roguelike adventure. Get the complete game, installation help, and all the information you need.",
  keywords: [
    "pokemon",
    "reminiscencia",
    "roguelike",
    "fan game",
    "download",
    "anthony",
    "phione",
    "pokemon essentials",
    "fan-made game",
    "pokemon fan game",
    "free pokemon game",
    "pokemon rpg",
    "pokemon windows",
    "roguelike rpg",
    "story-driven pokemon"
  ],
  authors: [{ name: "Pokémon Reminiscencia Team" }],
  creator: "Pokémon Reminiscencia Team",
  publisher: "Pokémon Reminiscencia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://pokemonreminiscencia.site',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pokemonreminiscencia.site',
    siteName: 'Pokémon Reminiscencia',
    title: 'Pokémon Reminiscencia - Roguelike Fan Adventure',
    description: 'Download Pokémon Reminiscencia - a beautiful, challenging, story-driven roguelike adventure free for Windows PC.',
    images: [
      {
        url: 'https://pub-133a3887e9d04fdb98224777e237c4eb.r2.dev/screenies.gif',
        width: 1200,
        height: 675,
        alt: 'Pokémon Reminiscencia Gameplay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pokémon Reminiscencia - Roguelike Fan Adventure',
    description: 'Download Pokémon Reminiscencia - a beautiful, challenging, story-driven roguelike adventure free for Windows PC.',
    images: ['/screenies.gif'],
    creator: '@pokemonreminiscencia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${outfit.className} min-h-screen flex flex-col bg-[#0f0e13] text-white antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ScrollProgress />
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0f0e13] to-[#0f0e13]" />
        <Header />
        <main className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
