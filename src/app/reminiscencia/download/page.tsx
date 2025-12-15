"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, CheckCircle, AlertTriangle, FileText, HardDrive, Monitor, Shield } from "lucide-react";

export default function ReminiscenciaDownloadPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center py-8 relative"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-blue-500/30 blur-[120px] rounded-full z-[-1]" />

                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight px-4">
                    Download{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                        Pokémon Reminiscencia
                    </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Begin your roguelike Pokémon journey with this beautiful, story-driven adventure!
                </p>
            </motion.section>

            {/* Download Card */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="glass-card p-8 sm:p-12 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-4">
                            <Download className="w-12 h-12 text-purple-400" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 px-2">Pokémon Reminiscencia (Complete Edition)</h2>
                        <p className="text-sm sm:text-base text-gray-400">Full English translation available</p>
                    </div>

                    {/* Game Info */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-8">
                        <div className="bg-black/30 p-5 rounded-xl border border-white/10 text-center">
                            <HardDrive className="w-6 h-6 text-purple-400 mb-2 mx-auto" />
                            <p className="text-gray-400 text-sm mb-1">File Size</p>
                            <p className="text-white font-bold">~500 MB - 1 GB</p>
                        </div>
                        <div className="bg-black/30 p-5 rounded-xl border border-white/10 text-center">
                            <Monitor className="w-6 h-6 text-pink-400 mb-2 mx-auto" />
                            <p className="text-gray-400 text-sm mb-1">Platform</p>
                            <p className="text-white font-bold">Windows PC</p>
                        </div>
                        <div className="bg-black/30 p-5 rounded-xl border border-white/10 text-center">
                            <FileText className="w-6 h-6 text-blue-400 mb-2 mx-auto" />
                            <p className="text-gray-400 text-sm mb-1">Format</p>
                            <p className="text-white font-bold">.ZIP Archive</p>
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="text-center mb-8">
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-xl font-bold hover:shadow-[0_0_50px_rgba(192,132,252,0.7)] transition-all transform hover:scale-105"
                        >
                            <Download className="w-6 h-6" />
                            Download Now (Free)
                        </a>
                        <p className="text-gray-500 text-sm mt-4">
                            Click the button above to start your download
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-yellow-300 font-semibold mb-2">Important Notice</p>
                                <p className="text-gray-300 text-sm">
                                    This is a fan-made Pokémon game and is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokémon Company. Download and play at your own discretion.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Article Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="glass-card p-8 sm:p-12 rounded-3xl border border-purple-500/20 max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                        Pokémon Reminiscencia: A Beautiful, Challenging, Story-Driven Fan Adventure
                    </h2>

                    <div className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300">
                        <p className="leading-relaxed">
                            <strong>Pokémon Reminiscencia</strong> throws the classic Pokémon formula out the window—and somehow makes it better. This critically acclaimed fan game takes Pokémon in a bold new direction, replacing the familiar League structure with a deeply narrative, roguelike-inspired experience.
                        </p>

                        <p className="leading-relaxed">
                            Between its stunning custom pixel art, carefully tuned mechanics, and surprisingly emotional storytelling, Reminiscencia feels less like a fan project and more like a daring alternative take on what Pokémon could be. Now fully complete and available in English, it stands as one of the most polished and ambitious Pokémon fan games ever released.
                        </p>

                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 my-6">
                            <h3 className="text-2xl font-bold text-white mb-3">What Makes It Special</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">▸</span>
                                    <span>True roguelike design with branching paths and high-stakes decisions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">▸</span>
                                    <span>No grinding—Heart Scale system for full customization from the start</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-purple-400 mt-1">▸</span>
                                    <span>Every officially released Pokémon with custom animations</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-pink-400 mt-1">▸</span>
                                    <span>15+ hours of character-driven narrative following Anthony and Phione</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Story</h3>
                        <p className="leading-relaxed">
                            The story centers on Anthony, a man living a quiet, isolated life on a remote island with his loyal Walrein. His solitude is broken when he discovers an unconscious stranger washed ashore—alongside a strange, talking Phione. This Phione claims to be far more than it seems and offers Anthony a deal: help it travel across distant islands to fulfill its mysterious purpose, and in return, it will grant him his deepest wish.
                        </p>

                        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Beyond the Main Story</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">📖</span>
                                <span><strong>Story Mode:</strong> The primary 15+ hour journey following Anthony and Phione</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-400 font-bold">🎮</span>
                                <span><strong>Extra Chapters & DLC:</strong> Prequel centered on Athan + Johto DLC sequel</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">🔬</span>
                                <span><strong>Simulation Mode:</strong> Lore-heavy experience expanding the universe</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-pink-400 font-bold">🔄</span>
                                <span><strong>Replayable Mode:</strong> Endless roguelike mode for experimentation</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Installation Instructions */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                    Installation Instructions
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        {
                            step: 1,
                            title: "Download the Game",
                            description: "Click the download button above to get the .ZIP file"
                        },
                        {
                            step: 2,
                            title: "Extract the Archive",
                            description: "Right-click the downloaded .ZIP file and select 'Extract All' to unzip the contents"
                        },
                        {
                            step: 3,
                            title: "Run the Game",
                            description: "Open the extracted folder and double-click the game executable (.exe) to start playing"
                        },
                        {
                            step: 4,
                            title: "Enjoy Your Adventure",
                            description: "Embark on Anthony and Phione's emotional journey!"
                        }
                    ].map((instruction, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {instruction.step}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{instruction.title}</h3>
                                <p className="text-gray-400">{instruction.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* System Requirements */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                    System Requirements
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="glass-card p-8 rounded-2xl border border-green-500/20">
                        <h3 className="text-2xl font-bold text-green-300 mb-6 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6" />
                            Minimum Requirements
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">•</span>
                                <span><strong>OS:</strong> Windows 7 or later</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">•</span>
                                <span><strong>Processor:</strong> Dual Core 2.0 GHz</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">•</span>
                                <span><strong>Memory:</strong> 4 GB RAM</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400">•</span>
                                <span><strong>Storage:</strong> 2 GB available space</span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-card p-8 rounded-2xl border border-purple-500/20">
                        <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
                            <CheckCircle className="w-6 h-6" />
                            Recommended
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span><strong>OS:</strong> Windows 10/11</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span><strong>Processor:</strong> Quad Core 2.5 GHz</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span><strong>Memory:</strong> 8 GB RAM</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-400">•</span>
                                <span><strong>Storage:</strong> 3 GB available space</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </motion.section>

            {/* Safety Tips */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <div className="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/20 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8 text-blue-400" />
                        <h2 className="text-3xl font-bold text-white">Safety & Security Tips</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            "Always download from official and trusted sources",
                            "Keep your antivirus software enabled during download and installation",
                            "Verify file integrity and scan downloads before opening",
                            "Avoid downloading from suspicious third-party websites",
                            "Read user reviews and feedback before downloading fangames"
                        ].map((tip, idx) => (
                            <div key={idx} className="flex items-start gap-3 bg-blue-500/5 p-4 rounded-xl border border-blue-500/20">
                                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{tip}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Troubleshooting */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                    Common Issues & Solutions
                </h2>
                <div className="max-w-3xl mx-auto space-y-4">
                    {[
                        {
                            issue: "Game won't start after extraction",
                            solution: "Make sure you've extracted all files from the ZIP archive. Try running the game as administrator by right-clicking the .exe file."
                        },
                        {
                            issue: "Missing RGSS or DLL files error",
                            solution: "Install the RPG Maker runtime package (RTP) for the corresponding version, or the latest Microsoft Visual C++ Redistributable package from the official Microsoft website."
                        },
                        {
                            issue: "Antivirus blocking the game",
                            solution: "Add the game folder to your antivirus whitelist. Fan-made games may sometimes trigger false positives."
                        },
                        {
                            issue: "Game runs too slow or crashes",
                            solution: "Close background applications, ensure your system meets the minimum requirements, and try running in compatibility mode for Windows 7 or 8."
                        },
                        {
                            issue: "Save files not working",
                            solution: "Ensure the game folder has write permissions. Run the game as administrator or move it to a location outside of Program Files."
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-xl border border-white/10">
                            <h3 className="text-lg font-bold text-purple-300 mb-2">❓ {item.issue}</h3>
                            <p className="text-gray-400">💡 {item.solution}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Back Link */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <Link
                    href="/"
                    className="inline-block px-8 py-3 rounded-full border border-purple-500/30 text-purple-300 font-bold hover:bg-purple-500/10 transition-all hover:scale-105"
                >
                    ← Back to Reminiscencia Info
                </Link>
            </motion.section>
        </div>
    );
}
