
export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-[#0f0e13]/80 backdrop-blur-xl mt-20 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>

            <div className="container mx-auto max-w-[1200px] px-6 py-12">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            PokéGuide
                        </span>
                    </div>

                    <div className="text-xs text-gray-600 max-w-md">
                        <p className="mb-2">© {new Date().getFullYear()} PokéGuide. All Rights Reserved.</p>
                        <p>This is a fan-made resource and not affiliated with or endorsed by The Pokémon Company or Nintendo.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
