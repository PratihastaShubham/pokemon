"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
    index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card rounded-xl overflow-hidden border border-purple-900/30 hover:border-purple-500/30 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors pr-4">
                    {question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                >
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-5 pt-0">
                            <p className="text-gray-400 leading-relaxed">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQ() {
    const faqs = [
        {
            question: "Is PokéGuide free to use?",
            answer: "Yes! PokéGuide is completely free. All our guides, articles, tools, and downloadable resources are available at no cost. We're a community-driven project dedicated to helping Pokémon trainers improve their skills."
        },
        {
            question: "How often is the content updated?",
            answer: "We update our content regularly to reflect the latest game releases, meta changes, and community discoveries. Major updates are typically released within days of new game launches, and smaller updates happen weekly based on community feedback."
        },
        {
            question: "Can I contribute to PokéGuide?",
            answer: "Absolutely! We welcome contributions from experienced trainers. Whether you want to submit guide articles, report errors, or suggest new features, your input helps make PokéGuide better for everyone. Visit our About page to get in touch."
        },
        {
            question: "Are the downloadable guides available offline?",
            answer: "Yes! All our downloadable resources (PDFs, spreadsheets, and cheat sheets) are designed to work completely offline. Download them once and access them anytime, anywhere—perfect for studying strategies on the go or during battles without internet access."
        }
    ];

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    index={index}
                />
            ))}
        </div>
    );
}
