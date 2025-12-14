"use client";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function AboutPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 sm:mb-16"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
                    About <span className="text-gradient">PokéGuide</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed px-4">
                    Your comprehensive resource hub for all things Pokémon. We&apos;re dedicated
                    to helping trainers of all skill levels succeed in their Pokémon journey.
                </p>
            </motion.section>

            {/* Our Mission */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="Our Mission" />
                <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                    <p>
                        PokéGuide was created with one goal in mind: to provide the most comprehensive,
                        accurate, and accessible Pokémon information available. Whether you&apos;re a
                        casual player enjoying the story, a collector hunting for shiny Pokémon, or a
                        competitive battler climbing the ranks, we have resources tailored for you.
                    </p>
                    <p>
                        We believe that knowledge should be free and accessible. That&apos;s why all our
                        guides, articles, and tools are available at no cost. Our team of dedicated
                        Pokémon enthusiasts works tirelessly to keep our content up-to-date with the
                        latest game releases and meta changes.
                    </p>
                </div>
            </motion.section>

            {/* What We Offer */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="What We Offer" />
                <div className="grid gap-6 md:grid-cols-2">
                    {[
                        { title: "Comprehensive Pokédex", desc: "Detailed information on every Pokémon including stats, abilities, movesets, and evolution chains." },
                        { title: "Strategy Guides", desc: "In-depth guides covering everything from basic mechanics to advanced competitive strategies." },
                        { title: "Team Building Tools", desc: "Interactive tools to help you build, analyze, and optimize your competitive teams." },
                        { title: "Downloadable Resources", desc: "Offline guides, cheat sheets, and reference materials for trainers on the go." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="glass-card rounded-xl p-8 hover:bg-white/5 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Community */}
            <motion.section
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="Community" />
                <div className="glass-card rounded-2xl p-10 border border-purple-900/30 relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                            PokéGuide isn&apos;t just a website—it&apos;s a community of trainers helping each
                            other improve. We encourage feedback, contributions, and discussions from
                            all members of the Pokémon community.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "Contribute Content", desc: "Have expertise to share? We welcome guide submissions." },
                                { title: "Report Errors", desc: "Spotted a mistake? Let us know so we can keep our info accurate." },
                                { title: "Suggest Features", desc: "Have an idea for a new tool? We love hearing suggestions." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20"
            >
                <SectionHeading title="Get in Touch" />
                <div className="bg-white/5 rounded-xl p-8 backdrop-blur-sm border border-white/10">
                    <p className="text-gray-400 leading-relaxed mb-6">
                        We&apos;d love to hear from you! Whether you have questions, suggestions,
                        or just want to say hello, there are several ways to reach us:
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-white">Email:</span>
                            <span className="text-purple-400">contact@pokeguide.example.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="font-bold text-white">Twitter:</span>
                            <span className="text-purple-400">@PokeGuide</span>
                        </div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
