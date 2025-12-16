"use client";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { Heart, Users, Globe, Sparkles } from "lucide-react";
import { useEffect } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function AboutPage() {
    // Handle client-side meta tags for better SEO
    useEffect(() => {
        document.title = "About | Pokémon Reminiscencia";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Pokémon Reminiscencia - a critically acclaimed roguelike fan game with 15+ hours of story-driven gameplay, all Pokémon included, and innovative mechanics.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Learn about Pokémon Reminiscencia - a critically acclaimed roguelike fan game with 15+ hours of story-driven gameplay, all Pokémon included, and innovative mechanics.';
            document.head.appendChild(meta);
        }
    }, []);
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 sm:mb-16 text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 px-4">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">Pokémon Reminiscencia</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Your complete resource for one of the most ambitious and polished Pokémon fan games ever created—a roguelike adventure that reimagines what Pokémon could be.
                </p>
            </motion.section>

            {/* What is Reminiscencia */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="What is Pokémon Reminiscencia?" />
                <div className="glass-card p-8 sm:p-10 rounded-2xl border border-purple-500/20">
                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            <strong className="text-white">Pokémon Reminiscencia</strong> is a critically acclaimed fan-made Pokémon game that throws the classic formula out the window—and somehow makes it better. Built using the Pokémon Essentials engine, it replaces the familiar League structure with a deeply narrative, roguelike-inspired experience.
                        </p>
                        <p>
                            Between its stunning custom pixel art, carefully tuned mechanics, and surprisingly emotional storytelling, Reminiscencia feels less like a fan project and more like a daring alternative take on what Pokémon could be. Now fully complete and available in English, it stands as one of the most polished and ambitious Pokémon fan games ever released.
                        </p>
                        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/20 mt-6">
                            <p className="text-white font-semibold mb-3">Key Features:</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>✨ True roguelike design with branching paths and high-stakes decisions</li>
                                <li>⚡ No grinding—Heart Scale system for full Pokémon customization</li>
                                <li>🎨 Every officially released Pokémon with custom animations</li>
                                <li>📖 15+ hours of character-driven narrative</li>
                                <li>🎮 Multiple game modes including Story, Extra Chapters, DLC, and Replayable Mode</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Why This Site Exists */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="Why This Site Exists" />
                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        {
                            icon: Heart,
                            title: "Share the Experience",
                            desc: "Pokémon Reminiscencia deserves to be discovered by every Pokémon fan who values story, strategy, and innovation. This site exists to spread the word about this incredible fan game."
                        },
                        {
                            icon: Globe,
                            title: "Comprehensive Information",
                            desc: "From detailed game mechanics to download, we provide everything you need to know about Reminiscencia in one accessible location."
                        },
                        {
                            icon: Users,
                            title: "Build Community",
                            desc: "We want to connect players who appreciate this unique take on Pokémon, fostering discussions and sharing strategies for this challenging roguelike adventure."
                        },
                        {
                            icon: Sparkles,
                            title: "Celebrate Fan Gaming",
                            desc: "Reminiscencia represents the best of what fan-made projects can achieve—polish, innovation, and passion. We're here to celebrate that achievement."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="glass-card rounded-xl p-8 hover:bg-white/5 transition-colors border border-purple-500/20"
                        >
                            <item.icon className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* What We Offer */}
            <motion.section
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="What We Provide" />
                <div className="glass-card rounded-2xl p-10 border border-purple-900/30 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            This site is your one-stop resource for everything Pokémon Reminiscencia. Whether you're new to the game or looking to dive deeper into its mechanics, we've got you covered:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Game Overview", desc: "Detailed breakdowns of the story, characters, and what makes Reminiscencia special." },
                                { title: "Download Resources", desc: "Safe, verified download links and step-by-step installation instructions." },
                                { title: "Gameplay Information", desc: "Explanations of roguelike mechanics, the Heart Scale system, and strategic tips." },
                                { title: "Content Catalog", desc: "Information on Story Mode, Extra Chapters, DLC content, and replayable modes." },
                                { title: "FAQ Resources", desc: "Answers to common questions about requirements, gameplay, and features." },
                                { title: "Community Support", desc: "Troubleshooting help and solutions to common technical issues." }
                            ].map((item, i) => (
                                <div key={i} className="bg-purple-500/5 p-5 rounded-xl border border-purple-500/20">
                                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Disclaimer */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="Important Disclaimer" />
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-8">
                    <p className="text-gray-300 leading-relaxed mb-4">
                        <strong className="text-yellow-300">Please Note:</strong> Pokémon Reminiscencia is a fan-made game and is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokémon Company.
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        This website is an independent fan resource created to share information about the game. All Pokémon-related trademarks and copyrights are property of their respective owners. We recommend supporting official Pokémon games and products.
                    </p>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="Get in Touch" />
                <div className="glass-card rounded-xl p-8 border border-white/10">
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Have questions, suggestions, or found an error on the site? We'd love to hear from you! This is a community resource, and your feedback helps us improve.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4 bg-purple-500/5 p-4 rounded-lg">
                            <span className="font-bold text-white min-w-[100px]">Purpose:</span>
                            <span className="text-gray-300">Informational resource and community platform for Pokémon Reminiscencia players</span>
                        </div>
                        <div className="flex items-start gap-4 bg-purple-500/5 p-4 rounded-lg">
                            <span className="font-bold text-white min-w-[100px]">Content:</span>
                            <span className="text-gray-300">Game information, downloads, FAQs, and community resources</span>
                        </div>
                        <div className="flex items-start gap-4 bg-purple-500/5 p-4 rounded-lg">
                            <span className="font-bold text-white min-w-[100px]">Status:</span>
                            <span className="text-gray-300">Actively maintained and updated with the latest information</span>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}

