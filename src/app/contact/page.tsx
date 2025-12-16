"use client";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function ContactPage() {
    useEffect(() => {
        document.title = "Contact Us | Pokémon Reminiscencia";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Get in touch with the Pokémon Reminiscencia team. Need help with downloads, installation, or have questions? Contact us via email.');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = 'Get in touch with the Pokémon Reminiscencia team. Need help with downloads, installation, or have questions? Contact us via email.';
            document.head.appendChild(meta);
        }
    }, []);
    return (
        <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">

            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Contact Us</h2>
                <a
                    href="mailto:tonicnetprojects@gmail.com"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 font-semibold transition-all hover:scale-105 text-sm sm:text-base"
                >
                    <Mail className="w-5 h-5" />
                    tonicnetprojects@gmail.com
                </a>
            </motion.section>


        </div>
    );
}
