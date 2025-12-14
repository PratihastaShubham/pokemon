import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PokéGuide - Your Pokémon Resource Hub",
  description: "Comprehensive Pokémon guides, tools, and resources for trainers.",
  keywords: "pokemon, pokedex, guides, competitive, vgc, download, strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} min-h-screen flex flex-col bg-[#0f0e13] text-white antialiased selection:bg-purple-500 selection:text-white overflow-x-hidden`}>
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
