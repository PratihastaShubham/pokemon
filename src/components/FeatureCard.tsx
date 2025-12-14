"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';

interface FeatureCardProps {
    title: string;
    description: string;
    href?: string;
    linkText?: string;
    version?: string;
}

export default function FeatureCard({ title, description, href, linkText = 'Learn More', version }: FeatureCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card rounded-xl p-8 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity transform group-hover:rotate-12 duration-500">
                <Download width={120} height={120} />
            </div>

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                        {title}
                    </h3>
                    {version && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm">
                            {version}
                        </span>
                    )}
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {description}
                </p>

                {href && (
                    <Link
                        href={href}
                        className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg hover:shadow-purple-500/25 group/btn"
                    >
                        {linkText}
                        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
