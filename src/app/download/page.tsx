"use client";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export default function DownloadPage() {
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-12 sm:mb-16 text-center"
            >
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 px-4">
                    <span className="text-gradient">Downloads</span> Center
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
                    Access our collection of downloadable guides, tools, and resources.
                    Perfect for offline reference during battles or studying strategies on the go.
                </p>
            </motion.section>

            {/* Main Downloads */}
            <motion.section
                className="mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <SectionHeading
                    title="Featured Downloads"
                    subtitle="Our most popular resources and tools."
                />
                <div className="grid gap-6 md:grid-cols-2">
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            title="Complete Pokédex Guide"
                            version="v2.0.1"
                            description="A comprehensive offline reference containing data on every Pokémon. Includes base stats, abilities, movesets, evolution methods, and competitive tier information."
                            href="#"
                            linkText="Download PDF"
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <FeatureCard
                            title="Competitive Team Builder"
                            version="v1.5.0"
                            description="Interactive spreadsheet tool for planning competitive teams. Calculate type coverage, track EVs/IVs, and analyze matchups against common threats."
                            href="#"
                            linkText="Download Excel"
                        />
                    </motion.div>
                </div>
            </motion.section>

            {/* Additional Resources */}
            <motion.section
                className="mb-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <SectionHeading
                    title="Strategy Guides"
                    subtitle="In-depth guides for competitive play."
                />
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Items would go here, simplified for brevity - standardizing animation */}
                    {[
                        { title: "VGC Beginner's Guide", ver: "v3.1", desc: "Everything you need to know to start competing in Video Game Championships format battles." },
                        { title: "OU Tier Guide", ver: "v2.4", desc: "Comprehensive guide to the Smogon OU tier, covering top threats, team archetypes, and counter strategies." },
                        { title: "Breeding Cheat Sheet", ver: "v1.2", desc: "Quick reference for breeding mechanics, including inheritance charts, compatibility groups, and egg move lists." }
                    ].map((item, i) => (
                        <motion.div key={i} variants={itemVariants}>
                            <FeatureCard title={item.title} version={item.ver} description={item.desc} href="#" linkText="Download" />
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Quick Reference */}
            {/* Keeping it simple for this turn */}
        </div>
    );
}
