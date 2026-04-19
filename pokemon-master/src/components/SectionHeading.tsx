"use client";
import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 relative"
        >
            <h2 className="text-3xl font-bold mb-3 tracking-tight">
                <span className="text-gradient">
                    {title}
                </span>
            </h2>
            {subtitle && (
                <p className="text-gray-400 text-lg max-w-2xl">
                    {subtitle}
                </p>
            )}
            <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full opacity-50" />
        </motion.div>
    );
}
