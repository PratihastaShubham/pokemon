"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import FeatureCard from "@/components/FeatureCard";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Home() {
  return (
    <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
      {/* Hero/Intro Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 sm:mb-24 text-center py-8 sm:py-12 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/20 blur-[100px] rounded-full z-[-1]" />

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 sm:mb-8 tracking-tight px-4">
          Your Complete <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 animate-pulse-glow">
            Pokémon Resource
          </span>
        </h1>
        <p className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          Welcome to PokéGuide, your premier destination for comprehensive Pokémon information.
          Maximize your potential with our expert guides, tools, and competitive strategies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
          <Link
            href="/download"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors text-center"
          >
            Get Started
          </Link>
          <Link
            href="/articles"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold backdrop-blur-sm text-center"
          >
            Browse Articles
          </Link>
        </div>
      </motion.section>

      {/* Download Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mb-24"
      >
        <SectionHeading
          title="Featured Resources"
          subtitle="Download our comprehensive guides and tools for trainers."
        />
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div variants={itemVariants}>
            <FeatureCard
              title="Complete Pokédex Guide"
              version="v2.0.1"
              description="Access detailed information on every Pokémon, including stats, abilities, movesets, and evolution chains. Perfect for both casual players and competitive trainers."
              href="/download"
              linkText="Download Now"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <FeatureCard
              title="Competitive Team Builder"
              version="v1.5.0"
              description="Build and optimize your competitive team with our interactive tool. Analyze type coverage, calculate damage, and discover synergies."
              href="/download"
              linkText="Get Started"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-24"
      >
        <SectionHeading title="What We Offer" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {['In-Depth Pokémon Guides', 'Comprehensive Pokédex Data', 'Team Building Resources', 'Community-Driven Updates'].map((title, i) => (
            <motion.div key={i} variants={itemVariants} className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 leading-relaxed">
                Access simplified yet detailed information designed to help you master every aspect of the game.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Latest Articles Section */}
      <section className="mb-24">
        <SectionHeading
          title="Latest Articles"
          subtitle="Stay informed with our newest guides and analysis."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            title="Understanding Type Matchups"
            description="Master the fundamentals of Pokémon type effectiveness and learn how to predict and counter your opponents' moves."
            href="/articles/type-matchups"
          />
          <ArticleCard
            title="EV Training Explained"
            description="A complete guide to Effort Values (EVs), how they affect your Pokémon's stats, and the most efficient training methods."
            href="/articles/ev-training"
          />
          <ArticleCard
            title="Best Starter Pokémon Ranked"
            description="An analysis of starter Pokémon across all generations, comparing their strengths, weaknesses, and competitive viability."
            href="/articles/starter-pokemon"
          />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/articles"
            className="inline-block px-8 py-3 rounded-full border border-purple-500/30 text-purple-300 font-bold hover:bg-purple-500/10 transition-all hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-24">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about PokéGuide."
        />
        <FAQ />
      </section>

      {/* How to Get Started Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">Ready to Became a Master?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of trainers who use PokéGuide to improve their gameplay.
          </p>
          <Link
            href="/download"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] transition-all relative z-10"
          >
            Start Your Journey
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
