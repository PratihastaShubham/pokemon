"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Clock, MapPin } from "lucide-react";
import Link from "next/link";

// Note: Metadata is handled in layout.tsx with template
// Page-specific meta tags would need a server component wrapper

export default function ContactPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center py-8 relative"
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-blue-500/30 blur-[120px] rounded-full z-[-1]" />

                <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-6">
                    <Mail className="w-12 h-12 text-purple-400" />
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
                    Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">Touch</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
                    Have questions about Pokémon Reminiscencia? Need help with downloads or installation? We're here to help!
                </p>
            </motion.section>

            {/* Contact Information */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-16"
            >
                <div className="max-w-2xl mx-auto">
                    {/* Email Card */}
                    <div className="glass-card p-8 sm:p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 text-center">
                        <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-6">
                            <Mail className="w-10 h-10 text-purple-400" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Get in Touch</h3>
                        <p className="text-gray-400 mb-6 text-base sm:text-lg">
                            Send us an email and we'll get back to you as soon as possible.
                        </p>
                        <a
                            href="mailto:tonicnetprojects@gmail.com"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 font-semibold transition-all hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            tonicnetprojects@gmail.com
                        </a>
                    </div>

                </div>
            </motion.section>

            {/* What We Can Help With */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-16"
            >

            </motion.section>

            {/* Contact Form Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-16"
            >

            </motion.section>


        </div>
    );
}
