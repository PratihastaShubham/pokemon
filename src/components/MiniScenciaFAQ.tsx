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

export default function MiniScenciaFAQ() {
    const faqs = [
        {
            question: "Is Pokémon Mini Scencia free to download and play?",
            answer: "Yes! Pokémon Mini Scencia is completely free. There are no hidden costs, subscriptions, or in-app purchases. Simply download and enjoy the full game experience at no charge."
        },
        {
            question: "How long does it take to complete Pokémon Mini Scencia?",
            answer: "Pokémon Mini Scencia is designed as a short, focused adventure. Most players can complete the main storyline in 3-5 hours, making it perfect for those who want a complete Pokémon experience without a long time commitment."
        },
        {
            question: "Do I need an emulator to play?",
            answer: "For the Windows PC version, no emulator is required—the game runs natively on your computer. Simply download, extract, and run the executable file. If you're using other platforms, you may need a compatible emulator depending on the version."
        },
        {
            question: "Can I play Pokémon Mini Scencia offline?",
            answer: "Absolutely! Once you've downloaded the game, you can play it completely offline. No internet connection is required after installation, making it perfect for gaming on the go."
        },
        {
            question: "What makes Mini Scencia different from other Pokémon fangames?",
            answer: "Mini Scencia focuses on delivering a compact, polished experience rather than trying to be a massive adventure. It features a smaller custom region, streamlined mechanics, balanced difficulty, and a complete storyline that respects your time—all while maintaining classic Pokémon charm."
        },
        {
            question: "Is this game safe to download?",
            answer: "When downloaded from our verified links, Pokémon Mini Scencia is safe to play. We recommend always downloading from trusted sources, keeping your antivirus enabled, and avoiding any modified or suspicious files from unknown websites."
        },
        {
            question: "Will this work on my computer?",
            answer: "Pokémon Mini Scencia has minimal system requirements and can run on most modern PCs running Windows. The game is lightweight and optimized for performance, so you shouldn't need a powerful gaming computer to enjoy it."
        },
        {
            question: "Can I catch all the classic Pokémon in this game?",
            answer: "While Mini Scencia features a curated selection of Pokémon that fit its compact design, you'll encounter many fan-favorite species throughout your adventure. The focus is on quality over quantity, ensuring each Pokémon encounter feels meaningful."
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
