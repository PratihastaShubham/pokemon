"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Clock, GamepadIcon, Zap, Shield, Star } from "lucide-react";
import MiniScenciaFAQ from "@/components/MiniScenciaFAQ";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6 }
    }
};

export default function MiniScenciaPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 sm:mb-24 text-center py-8 sm:py-16 relative"
            >
                {/* Animated background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-blue-500/30 blur-[120px] rounded-full z-[-1] animate-pulse" />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 tracking-tight px-4">
                        Pokémon Mini{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-x">
                            Scencia
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10 px-4">
                        A compact but engaging fan-made Pokémon adventure. Short, focused, and full of classic Pokémon charm.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row justify-center gap-4 px-4"
                >
                    <Link
                        href="/mini-scencia/download"
                        className="group px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                        <Download className="w-5 h-5" />
                        Download Now
                    </Link>
                    <a
                        href="#features"
                        className="px-10 py-5 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 transition-all font-bold backdrop-blur-sm transform hover:scale-105"
                    >
                        Learn More
                    </a>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto"
                >
                    {[
                        { icon: Zap, label: "Quick Download", value: "Lightweight" },
                        { icon: Clock, label: "Play Time", value: "Short & Fun" },
                        { icon: GamepadIcon, label: "Gameplay", value: "Classic" },
                        { icon: Shield, label: "Platform", value: "Windows PC" }
                    ].map((stat, idx) => (
                        <div key={idx} className="glass-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                            <stat.icon className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                            <p className="text-lg font-bold text-white">{stat.value}</p>
                        </div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Article Content Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-24"
            >
                <article className="prose prose-invert prose-lg max-w-none">
                    {/* Introduction */}
                    <motion.div variants={itemVariants} className="glass-card p-8 sm:p-12 rounded-3xl mb-12 border border-purple-500/20">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                            Pokémon Mini Scencia – Features, Gameplay, and Download Guide
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg mb-4">
                            <strong>Pokémon Mini Scencia</strong> is a fan-made Pokémon game that delivers a compact but engaging experience designed for players who enjoy short, focused adventures. Built with simplicity and accessibility in mind, the game emphasizes exploration, story progression, and classic Pokémon-style battles without requiring a long time commitment.
                        </p>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            This makes Pokémon Mini Scencia an excellent choice for both casual players and long-time Pokémon fans looking for something different.
                        </p>
                    </motion.div>

                    {/* What Is Mini Scencia */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Is Pokémon Mini Scencia?</h2>
                        </div>
                        <div className="glass-card p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Pokémon Mini Scencia is an unofficial Pokémon fangame created by independent developers within the Pokémon community. Unlike large-scale Pokémon fan projects, Mini Scencia focuses on a smaller region, shorter storyline, and streamlined mechanics.
                            </p>
                            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20">
                                <p className="text-white font-semibold mb-3">The game is designed to be:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-purple-400" /> Easy to pick up
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-pink-400" /> Lightweight in size
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Star className="w-4 h-4 text-purple-400" /> Playable without long grinding sessions
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Gameplay Overview */}
                    <motion.div variants={itemVariants} className="mb-12" id="features">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Gameplay Overview</h2>
                        </div>

                        {/* Classic Mechanics */}
                        <div className="glass-card p-8 rounded-2xl border border-white/10 mb-8">
                            <h3 className="text-2xl font-bold text-purple-300 mb-4">Classic Pokémon Mechanics</h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                Pokémon Mini Scencia follows traditional Pokémon gameplay rules:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Turn-based battles",
                                    "Type effectiveness system",
                                    "Capturing and training Pokémon",
                                    "Trainer and wild Pokémon encounters"
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-purple-500/10 p-4 rounded-xl border border-purple-500/20">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full" />
                                        <span className="text-white">{feature}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 mt-4 italic">
                                Players can expect familiar mechanics while experiencing new environments and characters.
                            </p>
                        </div>

                        {/* Storyline */}
                        <div className="glass-card p-8 rounded-2xl border border-white/10">
                            <h3 className="text-2xl font-bold text-pink-300 mb-4">Short and Focused Storyline</h3>
                            <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                The story is intentionally concise, making it ideal for players who:
                            </p>
                            <ul className="space-y-3 text-gray-300 mb-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-400 mt-1">✓</span>
                                    <span>Want a complete Pokémon experience in a short time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-400 mt-1">✓</span>
                                    <span>Prefer story-driven progression</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-pink-400 mt-1">✓</span>
                                    <span>Do not want lengthy post-game requirements</span>
                                </li>
                            </ul>
                            <p className="text-gray-400 italic">
                                Despite its smaller scale, the game still offers meaningful challenges and progression.
                            </p>
                        </div>
                    </motion.div>

                    {/* Key Features */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Key Features of Pokémon Mini Scencia</h2>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                {
                                    title: "Lightweight Game Size",
                                    description: "Quick to download and easy to run",
                                    icon: "🚀"
                                },
                                {
                                    title: "Original Region",
                                    description: "A new setting separate from official Pokémon regions",
                                    icon: "🗺️"
                                },
                                {
                                    title: "Balanced Difficulty",
                                    description: "Designed for smooth progression",
                                    icon: "⚖️"
                                },
                                {
                                    title: "Beginner-Friendly",
                                    description: "Suitable for new and experienced players",
                                    icon: "👥"
                                },
                                {
                                    title: "Offline Play",
                                    description: "No internet connection required after installation",
                                    icon: "📴"
                                },
                                {
                                    title: "Free to Play",
                                    description: "No cost, no hidden fees",
                                    icon: "💎"
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="glass-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group">
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 mt-8 text-center italic">
                            These features make Pokémon Mini Scencia especially popular among players who want a fast, no-frills Pokémon experience.
                        </p>
                    </motion.div>

                    {/* Platforms & Requirements */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Platforms and System Requirements</h2>
                        </div>
                        <div className="glass-card p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                Pokémon Mini Scencia is generally available for:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-xl border border-purple-500/30">
                                    <h4 className="text-xl font-bold text-white mb-2">🖥️ Windows PC</h4>
                                    <p className="text-gray-400">Primary platform with native support</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-6 rounded-xl border border-blue-500/30">
                                    <h4 className="text-xl font-bold text-white mb-2">🎮 Emulator-Compatible</h4>
                                    <p className="text-gray-400">Works with compatible environments</p>
                                </div>
                            </div>
                            <p className="text-gray-400 italic">
                                Because it is a fan-made game, system requirements are minimal and it can run on most modern PCs.
                            </p>
                        </div>
                    </motion.div>

                    {/* Download Section */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Download Pokémon Mini Scencia</h2>
                        </div>
                        <div className="glass-card p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 text-center">
                            <p className="text-gray-300 text-lg mb-8">
                                You can download Pokémon Mini Scencia directly from our website using the link below.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
                                <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                                    <p className="text-gray-400 text-sm mb-1">File size</p>
                                    <p className="text-white font-bold">Small / Lightweight</p>
                                </div>
                                <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                                    <p className="text-gray-400 text-sm mb-1">Platform</p>
                                    <p className="text-white font-bold">Windows PC</p>
                                </div>
                                <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                                    <p className="text-gray-400 text-sm mb-1">Cost</p>
                                    <p className="text-white font-bold">Free</p>
                                </div>
                            </div>

                            <Link
                                href="/mini-scencia/download"
                                className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-xl font-bold hover:shadow-[0_0_50px_rgba(192,132,252,0.7)] transition-all transform hover:scale-105 mb-6"
                            >
                                <Download className="w-6 h-6" />
                                Go to Download Page
                            </Link>

                            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-8">
                                <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Note</p>
                                <p className="text-gray-300 text-sm">
                                    This is a fan-made Pokémon game. It is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokémon Company.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Safety Section */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-green-500 to-purple-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Is Pokémon Mini Scencia Safe to Download?</h2>
                        </div>
                        <div className="glass-card p-8 rounded-2xl border border-green-500/20">
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                When downloaded from trusted sources, Pokémon Mini Scencia is generally safe to play. Always:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { icon: "✅", text: "Download from reputable websites" },
                                    { icon: "🚫", text: "Avoid modified or suspicious files" },
                                    { icon: "🛡️", text: "Keep your antivirus software enabled" },
                                    { icon: "✔️", text: "Our site provides verified download links for user safety" }
                                ].map((tip, idx) => (
                                    <div key={idx} className="flex items-start gap-4 bg-green-500/5 p-4 rounded-xl border border-green-500/20">
                                        <span className="text-2xl">{tip.icon}</span>
                                        <span className="text-gray-300 text-lg">{tip.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Who Should Play */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-white">Who Should Play Pokémon Mini Scencia?</h2>
                        </div>
                        <div className="glass-card p-8 rounded-2xl border border-white/10">
                            <p className="text-gray-300 leading-relaxed text-lg mb-6">This game is ideal for:</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    "Pokémon fans looking for short adventures",
                                    "Players with limited gaming time",
                                    "Fans of Pokémon fangames and mini projects",
                                    "Casual players who enjoy classic Pokémon gameplay"
                                ].map((audience, idx) => (
                                    <div key={idx} className="flex items-start gap-3 bg-purple-500/10 p-5 rounded-xl border border-purple-500/20">
                                        <span className="text-purple-400 text-xl mt-1">►</span>
                                        <span className="text-white text-lg">{audience}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Final Thoughts */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="glass-card p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
                                Final Thoughts
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                Pokémon Mini Scencia proves that a Pokémon game does not need to be massive to be enjoyable. Its compact design, familiar mechanics, and accessible gameplay make it a great entry in the Pokémon fangame space.
                            </p>
                            <p className="text-white text-xl font-semibold">
                                If you are looking for a lightweight Pokémon experience with a complete storyline, Pokémon Mini Scencia is worth downloading and playing.
                            </p>
                        </div>
                    </motion.div>
                </article>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-24"
            >
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                <MiniScenciaFAQ />
            </motion.section>

            {/* Final CTA */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-24"
            >
                <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden text-center border border-purple-500/30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/20 to-transparent pointer-events-none" />
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                        Download Pokémon Mini Scencia now and experience a compact Pokémon journey packed with classic gameplay!
                    </p>
                    <Link
                        href="/mini-scencia/download"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all transform hover:scale-105 relative z-10"
                    >
                        <Download className="w-6 h-6" />
                        Download Now - It's Free!
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}
