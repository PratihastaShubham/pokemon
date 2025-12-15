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

export default function ReminiscenciaFAQ() {
    const faqs = [
        {
            question: "Is Pokémon Reminiscencia free to download and play?",
            answer: "Yes! Pokémon Reminiscencia is completely free. There are no hidden costs, subscriptions, or in-app purchases. Simply download and enjoy the full roguelike experience including all DLC content at no charge."
        },
        {
            question: "How long does it take to complete Pokémon Reminiscencia?",
            answer: "The main story takes approximately 15+ hours to complete. However, with Extra Chapters, DLC content, Simulation Mode, and the endless Replayable Mode, you can easily spend 30-50+ hours exploring everything Reminiscencia has to offer."
        },
        {
            question: "What does 'roguelike' mean in this game?",
            answer: "Reminiscencia features dungeon-based runs with branching paths, controlled randomness, and high-stakes decisions. Unlike traditional Pokémon games, each run through a dungeon is different, requiring strategic thinking and adaptation rather than grinding."
        },
        {
            question: "Do I need to grind to progress in the game?",
            answer: "No! One of Reminiscencia's most praised features is its Heart Scale system, which eliminates traditional grinding. You can fully customize your Pokémon's stats, moves, and EVs from the start, making success dependent on strategy and team synergy rather than time spent leveling."
        },
        {
            question: "Are all Pokémon available in the game?",
            answer: "Yes! Every officially released Pokémon is included in Reminiscencia, each with custom animations. The game also features teams with Legendary and Pseudo-Legendary Pokémon in certain Extra Chapters, offering unique gameplay experiences."
        },
        {
            question: "Is the game available in English?",
            answer: "Absolutely! Pokémon Reminiscencia is now fully complete and available with a polished English translation. The entire story, dialogue, and interface have been professionally translated for English-speaking players."
        },
        {
            question: "What is the story about?",
            answer: "The story follows Anthony, a man living in isolation with his Walrein, who encounters a mysterious talking Phione. Together, they embark on a journey across distant islands, with Phione promising to grant Anthony's deepest wish. The narrative is character-driven and surprisingly emotional, featuring memorable characters like Athan and Kyle."
        },
        {
            question: "What content is available beyond the main story?",
            answer: "Beyond the 15+ hour main campaign, you can enjoy: a prequel Extra Chapter featuring Athan, a Johto DLC sequel, Simulation Mode with lore-heavy challenges, and an endless Replayable Mode designed for experimentation and repeated runs."
        },
        {
            question: "Will this work on my computer?",
            answer: "Pokémon Reminiscencia runs on Windows 7 or later. Minimum requirements include a Dual Core 2.0 GHz processor and 4 GB RAM, though Windows 10/11 with 8 GB RAM is recommended for the best experience."
        },
        {
            question: "Is this game safe to download?",
            answer: "When downloaded from our verified links and trusted sources, Pokémon Reminiscencia is safe to play. We recommend keeping your antivirus enabled during download and installation, and avoiding modified files from unknown websites."
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
