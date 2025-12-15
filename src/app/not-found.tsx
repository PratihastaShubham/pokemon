"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* 404 Display */}
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8"
                    >
                        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-extrabold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-gradient-x">
                                404
                            </span>
                        </h1>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="glass-card p-8 sm:p-12 rounded-3xl border border-purple-500/30 mb-8"
                    >
                        <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-6">
                            <HelpCircle className="w-12 h-12 text-purple-400" />
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            Page Not Found
                        </h2>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            Looks like this Pokémon has escaped! The page you're looking for doesn't exist or has been moved.
                        </p>

                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 mb-8">
                            <p className="text-sm text-gray-400">
                                <strong className="text-purple-300">Tip:</strong> Double-check the URL or use the navigation menu to find what you're looking for.
                            </p>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all transform hover:scale-105"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 transition-all font-bold backdrop-blur-sm transform hover:scale-105"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </button>
                    </motion.div>

                    {/* Popular Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="mt-12"
                    >
                        <p className="text-gray-400 text-sm mb-4">Popular pages:</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                { label: "Download", href: "/reminiscencia/download" },
                                { label: "About", href: "/about" },
                                { label: "DMCA", href: "/dmca" }
                            ].map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.href}
                                    className="px-4 py-2 text-sm rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
