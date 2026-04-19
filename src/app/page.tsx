"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, Clock, GamepadIcon, Zap, Shield, Star } from "lucide-react";
import ReminiscenciaFAQ from "@/components/ReminiscenciaFAQ";
import { useEffect, useRef, useState, useCallback } from "react";

// Helper component to render ads safely in an iframe
const BannerAd = ({ adKey, width, height }: { adKey: string, width: number, height: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        
        const iframe = document.createElement('iframe');
        iframe.width = width.toString();
        iframe.height = height.toString();
        iframe.title = 'Advertisement';
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.scrolling = 'no';
        
        // Clear container and append iframe
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(iframe);
        
        const iframeDoc = iframe.contentWindow?.document;
        if (iframeDoc) {
            iframeDoc.open();
            iframeDoc.write(`
                <html>
                    <body style="margin:0;padding:0;background:transparent;">
                        <script>
                            atOptions = {
                                'key' : '${adKey}',
                                'format' : 'iframe',
                                'height' : ${height},
                                'width' : ${width},
                                'params' : {}
                            };
                        </script>
                        <script type="text/javascript" src="//www.highperformanceformat.com/${adKey}/invoke.js"></script>
                    </body>
                </html>
            `);
            iframeDoc.close();
        }
    }, [adKey, width, height]);

    return (
        <div ref={containerRef} className="flex justify-center my-4 overflow-hidden rounded-lg bg-black/5" style={{ minHeight: height }} />
    );
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.4 }
    }
};

export default function ReminiscenciaPage() {
    const DOWNLOAD_URL = "https://www.mediafire.com/file/azpvhd4wkphmqq3/ReminiscenciaV2_3.zip/file";
    const TIMER_DURATION = 7;
    const [showModal, setShowModal] = useState(false);
    const [countdown, setCountdown] = useState(TIMER_DURATION);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const popupAdRef = useRef<HTMLDivElement>(null);

    const [isMirror, setIsMirror] = useState(false);

    const handleDownloadClick = useCallback((e: React.MouseEvent, mirror: boolean = false) => {
        e.preventDefault();
        setIsMirror(mirror);
        setCountdown(TIMER_DURATION);
        setShowModal(true);
    }, []);

    useEffect(() => {
        if (showModal) {
            timerRef.current = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current!);
                        setShowModal(false);
                        window.open(DOWNLOAD_URL, "_blank", "noopener,noreferrer");
                        return TIMER_DURATION;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [showModal]);

    // Load the script-based ad when modal opens
    useEffect(() => {
        if (showModal && popupAdRef.current && !isMirror) {
            popupAdRef.current.innerHTML = '';
            const script = document.createElement('script');
            script.src = 'https://pl28658319.profitablecpmratenetwork.com/35/a0/74/35a0748915d879d0ffbc2671e880964e.js';
            script.async = true;
            popupAdRef.current.appendChild(script);
        }
        return () => {
            if (popupAdRef.current) popupAdRef.current.innerHTML = '';
        };
    }, [showModal, isMirror]);

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Pokémon Reminiscencia",
        "applicationCategory": "GameApplication",
        "genre": "Roguelike RPG",
        "operatingSystem": "Windows",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "downloadUrl": "https://www.mediafire.com/file/azpvhd4wkphmqq3/ReminiscenciaV2_3.zip/file",
        "softwareVersion": "v2.3",
        "fileSize": "500MB",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1250"
        },
        "author": {
            "@type": "Organization",
            "name": "Pokémon Reminiscencia Team"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
                <div className="flex justify-center mb-8">
                    <BannerAd adKey="a2c7bca4a23707c28bdf46bdcd719ae4" width={468} height={60} />
                </div>
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 sm:mb-24 text-center py-8 sm:py-16 relative"
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-blue-500/30 blur-[120px] rounded-full z-[-1] animate-pulse" />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight px-4">
                            Pokémon{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-x">
                                Reminiscencia
                            </span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 px-4"
                    >
                        <button
                            onClick={handleDownloadClick}
                            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all transform hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden cursor-pointer"
                        >
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                            <Download className="w-5 h-5" />
                            Download Now
                        </button>
                        <a
                            href="#what-is"
                            className="px-8 py-4 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 transition-all font-bold backdrop-blur-sm transform hover:scale-105"
                        >
                            Learn More
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="flex justify-center mt-4"
                    >
                        <button
                            onClick={(e) => handleDownloadClick(e, true)}
                            className="group px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-500/60 text-purple-300 text-sm font-semibold transition-all transform hover:scale-105 flex items-center gap-2 backdrop-blur-sm cursor-pointer"
                        >
                            <Download className="w-4 h-4" />
                            Mirror Download (No More Popup Issues)
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto px-2"
                    >
                        {[
                            { icon: Zap, label: "Game Type", value: "Roguelike" },
                            { icon: Clock, label: "Play Time", value: "15+ Hours" },
                            { icon: GamepadIcon, label: "Gameplay", value: "Strategic" },
                            { icon: Shield, label: "Platform", value: "Windows PC" }
                        ].map((stat, idx) => (
                            <div key={idx} className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3 mx-auto" />
                                <p className="text-xs sm:text-sm text-gray-400 mb-1">{stat.label}</p>
                                <p className="text-sm sm:text-lg font-bold text-white">{stat.value}</p>
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                <div className="flex justify-center -mt-8 mb-12">
                    <BannerAd adKey="8b0a3162733105a227894449b4d1c860" width={320} height={50} />
                </div>

                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24"
                >
                    <article className="prose prose-invert prose-lg max-w-none">
                        <motion.div variants={itemVariants} className="glass-card p-8 sm:p-12 rounded-3xl mb-12 border border-purple-500/20">
                            
                            <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                It throws the classic Pokémon formula out the window—and somehow makes it better. This critically acclaimed fan game takes Pokémon in a bold new direction, replacing the familiar League structure with a deeply narrative, roguelike-inspired experience.
                            </p>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                Between its stunning custom pixel art, carefully tuned mechanics, and surprisingly emotional storytelling, Reminiscencia feels less like a fan project and more like a daring alternative take on what Pokémon could be. Now fully complete and available in English, it stands as one of the most polished and ambitious Pokémon fan games ever released.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">See It In Action</h2>
                            </div>
                            <div className="glass-card p-4 sm:p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/10 to-pink-900/10">
                                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.3)] group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                                    <Image
                                        src="https://pub-133a3887e9d04fdb98224777e237c4eb.r2.dev/screenies.webp"
                                        alt="Pokémon Reminiscencia Gameplay Screenshots"
                                        width={1200}
                                        height={675}
                                        className="w-full h-auto"
                                        unoptimized
                                        priority
                                    />
                                </div>
                                <p className="text-gray-400 text-center mt-6 italic text-sm sm:text-base">
                                    Beautiful pixel art, custom animations, and atmospheric environments
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-12" id="what-is">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">So, What Is Pokémon Reminiscencia?</h2>
                            </div>
                            <div className="glass-card p-8 rounded-2xl border border-white/10">
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    At its core, Reminiscencia is a roguelike Pokémon game built using the Pokémon Essentials engine. Battles and capturing Pokémon still feel familiar, but the structure around them is completely different. Instead of a linear journey, the game revolves around dungeon-based runs with controlled randomness, branching paths, and high-stakes decisions.
                                </p>
                                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20">
                                    <p className="text-white font-semibold mb-3">Production-wise, it's impressive across the board:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-purple-400" /> Every officially released Pokémon with custom animations
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-pink-400" /> Rich, detailed, atmospheric environments
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Star className="w-4 h-4 text-purple-400" /> Strategy-focused gameplay without grinding
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="mb-12" id="features">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Story</h2>
                            </div>

                            <div className="glass-card p-8 rounded-2xl border border-white/10 mb-8">
                                <h3 className="text-2xl font-bold text-purple-300 mb-4">A Character-Driven Narrative : Anthony, Phione, and a Dangerous Promise</h3>
                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                    The story centers on Anthony, a man living a quiet, isolated life on a remote island with his loyal Walrein. His solitude is broken when he discovers an unconscious stranger washed ashore—alongside a strange, talking Phione.
                                </p>
                                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-6 rounded-xl border border-purple-500/20">
                                    <p className="text-white font-semibold mb-3">The Journey:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1">►</span>
                                            <span>Phione offers Anthony a deal to fulfill its mysterious purpose</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-pink-400 mt-1">►</span>
                                            <span>Travel across distant islands with memorable characters</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="text-purple-400 mt-1">►</span>
                                            <span>15+ hours of layered, emotional storytelling</span>
                                        </li>
                                    </ul>
                                </div>
                                <p className="text-gray-400 mt-4 italic">
                                    Meet charismatic characters like Athan and the sharp-tongued Kyle along the way.
                                </p>
                            </div>
                            <div className="glass-card p-8 rounded-2xl border border-white/10">
                                <h3 className="text-2xl font-bold text-pink-300 mb-4">Why Pokémon Reminiscencia Feels So Different</h3>
                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                    What truly makes Reminiscencia special is how confidently it breaks tradition—and commits to it:
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { title: "True Roguelike Design", desc: "Branching routes, unpredictable events, and tough boss fights" },
                                        { title: "No Grinding—Just Strategy", desc: "Heart Scale system lets you customize Pokémon from the start" },
                                        { title: "Striking Visual Style", desc: "Custom sprites, fluid animations, and a medieval tone" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-pink-500/10 p-4 rounded-xl border border-pink-500/20">
                                            <p className="text-white font-bold mb-1">{item.title}</p>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Plenty to Do Beyond the Main Story</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                {[
                                    {
                                        title: "Story Mode",
                                        description: "15+ hour journey following Anthony and Phione",
                                        icon: "📖"
                                    },
                                    {
                                        title: "Extra Chapters & DLC",
                                        description: "Prequel with Athan + Johto DLC sequel",
                                        icon: "🎮"
                                    },
                                    {
                                        title: "Simulation Mode",
                                        description: "Lore-heavy experience with new challenges",
                                        icon: "🔬"
                                    },
                                    {
                                        title: "Replayable Mode",
                                        description: "Endless roguelike mode for experimentation",
                                        icon: "🔄"
                                    },
                                    {
                                        title: "All Pokémon Included",
                                        description: "Every officially released Pokémon with animations",
                                        icon: "⭐"
                                    },
                                    {
                                        title: "English Translation",
                                        description: "Fully complete and polished",
                                        icon: "🌍"
                                    }
                                ].map((feature, idx) => (
                                    <div key={idx} className="glass-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all group text-center">
                                        <div className="text-4xl mb-4">{feature.icon}</div>
                                        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                            {feature.title}
                                        </h4>
                                        <p className="text-gray-400">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            <p className="text-gray-400 mt-8 text-center italic">
                                Pokémon Reminiscencia isn't just a love letter to the franchise—it's a confident reimagining of it.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Platforms and System Requirements</h2>
                            </div>
                            <div className="glass-card p-8 rounded-2xl border border-white/10">
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    Pokémon Mini Scencia is generally available for:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Download Pokémon Reminiscencia</h2>
                            </div>
                            <div className="glass-card p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 text-center">
                                <p className="text-gray-300 text-lg mb-8">
                                    You can download Pokémon Reminiscencia directly from our website using the link below.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-left">
                                    <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                                        <p className="text-gray-400 text-sm mb-1">Type</p>
                                        <p className="text-white font-bold">Roguelike RPG</p>
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

                                <button
                                    onClick={handleDownloadClick}
                                    className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white text-xl font-bold hover:shadow-[0_0_50px_rgba(192,132,252,0.7)] transition-all transform hover:scale-105 mb-4 cursor-pointer"
                                >
                                    <Download className="w-6 h-6" />
                                    Download Pokémon Reminiscencia
                                </button>

                                <div className="flex justify-center mb-8">
                                    <button
                                        onClick={(e) => handleDownloadClick(e, true)}
                                        className="text-purple-400 hover:text-purple-300 text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                                    >
                                        <Download className="w-4 h-4" />
                                        Mirror Link (No Ads)
                                    </button>
                                </div>

                                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mt-8">
                                    <p className="text-yellow-300 font-semibold mb-2">⚠️ Important Note</p>
                                    <p className="text-gray-300 text-sm">
                                        This is a fan-made Pokémon game. It is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokémon Company.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-green-500 to-purple-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Is Pokémon Reminiscencia Safe to Download?</h2>
                            </div>
                            <div className="glass-card p-8 rounded-2xl border border-green-500/20">
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                                    When downloaded from trusted sources, Pokémon Reminiscencia is generally safe to play. Always:
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
                        <motion.div variants={itemVariants} className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-white">Who Should Play Pokémon Reminiscencia?</h2>
                            </div>
                            <div className="glass-card p-8 rounded-2xl border border-white/10">
                                <p className="text-gray-300 leading-relaxed text-lg mb-6">This game is ideal for:</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        "Pokémon fans looking for story and strategy over tradition",
                                        "Players who enjoy roguelike mechanics",
                                        "Fans seeking a complete, polished fan game experience",
                                        "Anyone wanting a beautiful, challenging Pokémon adventure"
                                    ].map((audience, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-purple-500/10 p-5 rounded-xl border border-purple-500/20">
                                            <span className="text-purple-400 text-xl mt-1">►</span>
                                            <span className="text-white text-lg">{audience}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="glass-card p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 to-pink-900/30">
                                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-6">
                                    Final Thoughts
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-4">
                                    Pokémon Reminiscencia proves that breaking tradition can lead to something truly special. Its roguelike design, emotional narrative, and stunning visuals come together to create a fan game that stands among the very best.
                                </p>
                                <p className="text-white text-xl font-semibold">
                                    If you're looking for a Pokémon experience that values story, strategy, and atmosphere over tradition, this is one fan game you absolutely shouldn't miss.
                                </p>
                            </div>
                        </motion.div>
                    </article>
                </motion.section>
                <div className="flex justify-center my-12">
                    <BannerAd adKey="960b932f633f8680967f2f26de7e1f19" width={300} height={250} />
                </div>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 mt-12"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-1 h-10 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked Questions</h2>
                    </div>
                    <ReminiscenciaFAQ />
                </motion.section>
                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                   
                </motion.section>
            </div>

            {/* Download Countdown Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm"
                     onClick={() => { setShowModal(false); if (timerRef.current) clearInterval(timerRef.current); }}>
                    {/* Ad above the popup */}
                    {!isMirror && <div ref={popupAdRef} className="mb-4 flex justify-center overflow-hidden rounded-lg" onClick={(e) => e.stopPropagation()} />}
                    <div
                        className="relative bg-gradient-to-br from-[#1a1025] via-[#1e1033] to-[#0f0a1a] rounded-3xl p-10 sm:p-14 border border-purple-500/30 shadow-[0_0_80px_rgba(168,85,247,0.25)] max-w-md w-[90%] text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => { setShowModal(false); if (timerRef.current) clearInterval(timerRef.current); }}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none cursor-pointer"
                            aria-label="Close"
                        >
                            ✕
                        </button>

                        {/* Circular timer */}
                        <div className="relative w-32 h-32 mx-auto mb-8">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                                <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(168,85,247,0.15)" strokeWidth="8" />
                                <circle
                                    cx="60" cy="60" r="52" fill="none"
                                    stroke="url(#timerGradient)" strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeDasharray={2 * Math.PI * 52}
                                    strokeDashoffset={2 * Math.PI * 52 * (1 - countdown / TIMER_DURATION)}
                                    style={{ transition: "stroke-dashoffset 0.4s ease" }}
                                />
                                <defs>
                                    <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#a855f7" />
                                        <stop offset="100%" stopColor="#ec4899" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                                {countdown}
                            </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            Preparing Download
                        </h3>
                        <p className="text-gray-300 text-lg">
                            Your download starts in <span className="font-bold text-purple-400">{countdown}</span> second{countdown !== 1 ? "s" : ""}…
                        </p>
                        {/* Ad Banner inside popup for maximum impressions */}
                        {!isMirror && (
                            <div className="mt-6 flex justify-center">
                                <BannerAd adKey="8b0a3162733105a227894449b4d1c860" width={320} height={50} />
                            </div>
                        )}

                        <p className="text-gray-500 text-sm mt-4">
                            Click outside or ✕ to cancel
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

