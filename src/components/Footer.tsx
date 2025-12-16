
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0f0e13]/80 backdrop-blur-xl mt-20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

            <div className="container mx-auto max-w-[1200px] px-6 py-12">
                {/* Mobile: Stacked & Centered, Desktop: 2-column grid */}
                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-12 mb-8">
                    {/* Quick Links */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-white font-bold text-sm">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                Home
                            </Link>

                            <Link href="/reminiscencia/download" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                Download
                            </Link>
                            <Link href="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                About
                            </Link>
                            <Link href="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-white font-bold text-sm">Legal</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/dmca" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                                DMCA Policy
                            </Link>
                        </nav>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <div className="text-xs text-gray-500 max-w-2xl mx-auto space-y-2">
                        <p>© {new Date().getFullYear()} Pokémon Reminiscencia. All Rights Reserved.</p>
                        <p>This is a fan-made resource and not affiliated with or endorsed by The Pokémon Company, Nintendo, or Game Freak.</p>
                        <p className="text-gray-600">Pokémon and all respective names are trademark &amp; © of Nintendo 1996-{new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

