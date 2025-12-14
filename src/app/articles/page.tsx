"use client";
import ArticleCard from "@/components/ArticleCard";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const articles = [
    {
        title: "Understanding Type Matchups",
        description: "Master the fundamentals of Pokémon type effectiveness and learn how to predict and counter your opponents' moves in battle.",
        href: "/articles/type-matchups",
        category: "Basics",
    },
    {
        title: "EV Training Explained",
        description: "A complete guide to Effort Values (EVs), how they affect your Pokémon's stats, and the most efficient training methods available.",
        href: "/articles/ev-training",
        category: "Training",
    },
    {
        title: "Best Starter Pokémon Ranked",
        description: "An analysis of starter Pokémon across all generations, comparing their strengths, weaknesses, and competitive viability.",
        href: "/articles/starter-pokemon",
        category: "Analysis",
    },
    {
        title: "Breeding for Perfect IVs",
        description: "Learn the mechanics of Pokémon breeding and how to pass down IVs, natures, and egg moves to create competitive-ready Pokémon.",
        href: "/articles/breeding-guide",
        category: "Training",
    },
    {
        title: "Competitive Team Building 101",
        description: "Understand the basics of building a balanced competitive team, including role assignment, type coverage, and synergy.",
        href: "/articles/team-building",
        category: "Competitive",
    },
    {
        title: "Hidden Abilities Guide",
        description: "Discover what Hidden Abilities are, which Pokémon have them, and how to obtain them through various in-game methods.",
        href: "/articles/hidden-abilities",
        category: "Mechanics",
    },
    {
        title: "Shiny Hunting Methods",
        description: "A comprehensive overview of all shiny hunting methods across different Pokémon games, including odds and strategies.",
        href: "/articles/shiny-hunting",
        category: "Collecting",
    },
    {
        title: "Understanding Weather in Battles",
        description: "Learn how weather conditions affect battles, which abilities trigger them, and how to build weather-based teams.",
        href: "/articles/weather-battles",
        category: "Competitive",
    },
    {
        title: "Legendary Pokémon Locations",
        description: "Find every legendary Pokémon across all main series games with our comprehensive location and capture guide.",
        href: "/articles/legendary-locations",
        category: "Guides",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function ArticlesPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 sm:mb-16 text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">
                    <span className="text-gradient">Articles & Guides</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Explore our collection of detailed Pokémon articles and tutorials.
                    Whether you&apos;re new to Pokémon or a seasoned veteran, our guides cover
                    everything from basic mechanics to advanced competitive strategies.
                </p>
            </motion.section>

            {/* Articles Grid */}
            <section className="mb-20">
                <SectionHeading
                    title="All Articles"
                    subtitle="Browse our complete collection of guides and tutorials."
                />
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                >
                    {articles.map((article, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ArticleCard
                                title={article.title}
                                description={article.description}
                                href={article.href}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Request Section */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-10 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none" />

                <h2 className="text-2xl font-bold text-white mb-4">
                    Can&apos;t Find What You&apos;re Looking For?
                </h2>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                    We&apos;re constantly adding new content based on community feedback. If there&apos;s
                    a topic you&apos;d like us to cover, let us know!
                </p>
                <a
                    href="/about"
                    className="inline-block px-8 py-3 rounded-full border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 transition-colors"
                >
                    Contact Us
                </a>
            </motion.section>
        </div>
    );
}