"use client";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    ['Home', '/'],
    ['Articles', '/articles'],
    ['Download', '/reminiscencia/download'],
    ['About', '/about'],
    ['DMCA', '/dmca']
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-nav sticky top-0 z-50 h-16"
            >
                <div className="container mx-auto max-w-[1200px] px-6 h-full">
                    <div className="flex items-center justify-between h-full">
                        {/* Logo/Title */}
                        <Link href="/" className="group flex items-center gap-2 hover:no-underline">
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse-glow group-hover:bg-right transition-all duration-500">
                                Pokémon Reminiscencia
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group py-2"
                                >
                                    {label}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-16 right-0 bottom-0 w-[280px] bg-[#0f0e13]/95 backdrop-blur-xl border-l border-purple-900/30 z-50 md:hidden overflow-y-auto"
                        >
                            <nav className="flex flex-col p-6 gap-2">
                                {navLinks.map(([label, href], index) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-4 py-3 text-lg font-medium text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-all"
                                        >
                                            {label}
                                        </Link>
                                    </motion.div>
                                ))}

                                {/* Decorative Elements */}
                                <div className="mt-8 pt-6 border-t border-purple-900/30">
                                    <p className="text-xs text-gray-500 px-4">
                                        © 2025 Pokémon Reminiscencia
                                    </p>
                                </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
