"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
    title: string;
    description: string;
    href: string;
    linkText?: string;
}

export default function ArticleCard({ title, description, href, linkText = 'Read More' }: ArticleCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="glass-card rounded-xl p-6 group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors relative z-10">
                {title}
            </h3>

            <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10">
                {description}
            </p>

            <Link
                href={href}
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold relative z-10 group/link"
            >
                {linkText}
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    );
}
