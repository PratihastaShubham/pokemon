"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Star, Zap, Heart } from "lucide-react";
import Image from "next/image";

export default function ArticlesPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16 text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                        Featured Article
                    </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Discover the story-driven roguelike that's reimagining Pokémon
                </p>
            </motion.section>

            {/* Featured Article Card */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-16"
            >
                <Link href="/" className="block group">
                    <div className="glass-card rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.3)] transform hover:scale-[1.02]">
                        {/* Article Header with Gradient Background */}
                        <div className="relative h-64 sm:h-80 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-purple-900/40 overflow-hidden">
                            {/* Animated background glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-blue-500/20 animate-pulse"></div>

                            {/* Floating icons decoration */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 right-8 p-4 bg-purple-500/20 rounded-full backdrop-blur-sm"
                            >
                                <Star className="w-8 h-8 text-purple-300" />
                            </motion.div>

                            {/* Content overlay */}
                            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                                <div>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="inline-block p-4 bg-purple-500/30 rounded-full mb-4 backdrop-blur-sm"
                                    >
                                        <BookOpen className="w-12 h-12 text-white" />
                                    </motion.div>
                                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
                                        Pokémon Reminiscencia
                                    </h2>
                                    <p className="text-purple-200 text-lg sm:text-xl font-medium">
                                        A Beautiful, Challenging, Story-Driven Fan Adventure
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-8 sm:p-10">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                                    Featured
                                </span>
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                                    Roguelike
                                </span>
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                    Fan Game
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                                Pokémon Reminiscencia throws the classic Pokémon formula out the window—and somehow makes it better. This critically acclaimed fan game replaces the familiar League structure with a deeply narrative, roguelike-inspired experience featuring stunning custom pixel art and surprisingly emotional storytelling.
                            </p>

                            {/* Key Features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                <div className="flex items-start gap-3 bg-purple-500/5 p-4 rounded-xl border border-purple-500/20">
                                    <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-white font-semibold text-sm mb-1">No Grinding</p>
                                        <p className="text-gray-400 text-xs">Heart Scale customization system</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-pink-500/5 p-4 rounded-xl border border-pink-500/20">
                                    <Heart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-white font-semibold text-sm mb-1">15+ Hours</p>
                                        <p className="text-gray-400 text-xs">Character-driven story</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 bg-blue-500/5 p-4 rounded-xl border border-blue-500/20">
                                    <Star className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-white font-semibold text-sm mb-1">All Pokémon</p>
                                        <p className="text-gray-400 text-xs">With custom animations</p>
                                    </div>
                                </div>
                            </div>

                            {/* Read More Button */}
                            <div className="flex items-center justify-between">
                                <div className="text-sm text-gray-500">
                                    <span className="text-purple-400 font-semibold">Featured Article</span> • Full Story
                                </div>
                                <div className="flex items-center gap-2 text-purple-400 font-bold group-hover:text-purple-300 transition-colors">
                                    <span>Read Full Article</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </motion.section>

            {/* Additional Info Section */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="relative z-10"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Want to Experience It Yourself?
                    </h2>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        Pokémon Reminiscencia is now fully complete and available in English. Download it today and discover why it stands as one of the most polished and ambitious Pokémon fan games ever released.
                    </p>
                    <Link
                        href="/reminiscencia/download"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all transform hover:scale-105"
                    >
                        <span>Download Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </motion.section>
        </div>
    );
}
