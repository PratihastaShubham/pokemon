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
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Email Card */}
                    <div className="glass-card p-8 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                        <div className="inline-block p-3 bg-purple-500/20 rounded-full mb-4">
                            <Mail className="w-8 h-8 text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Email Us</h3>
                        <p className="text-gray-400 mb-4">
                            Send us an email and we'll get back to you as soon as possible.
                        </p>
                        <a
                            href="mailto:tonicnetprojects@gmail.com"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                            tonicnetprojects@gmail.com
                        </a>
                    </div>

                    {/* Response Time Card */}
                    <div className="glass-card p-8 rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-900/20 to-purple-900/20">
                        <div className="inline-block p-3 bg-pink-500/20 rounded-full mb-4">
                            <Clock className="w-8 h-8 text-pink-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">Response Time</h3>
                        <p className="text-gray-400 mb-4">
                            We typically respond within 24-48 hours during business days.
                        </p>
                        <div className="text-pink-400 font-semibold">
                            Monday - Friday, 9 AM - 6 PM EST
                        </div>
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

            {/* FAQ Hint */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden max-w-3xl mx-auto"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">
                    Looking for Quick Answers?
                </h2>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto relative z-10">
                    Check out our FAQ section on the homepage for answers to common questions about Pokémon Reminiscencia.
                </p>
                <Link
                    href="/#faq"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 transition-all font-bold backdrop-blur-sm transform hover:scale-105 relative z-10"
                >
                    View FAQ
                </Link>
            </motion.section>
        </div>
    );
}
