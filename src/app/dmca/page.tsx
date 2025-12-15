"use client";
import { motion } from "framer-motion";
import { Shield, Mail, FileText, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function DMCAPage() {
    return (
        <div className="container mx-auto max-w-[900px] px-4 sm:px-6 py-8 sm:py-12">
            {/* Page Header */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
            >
                <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-6">
                    <Shield className="w-12 h-12 text-purple-400" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
                    DMCA <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">Policy</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
                    Digital Millennium Copyright Act Notice and Takedown Procedure
                </p>
            </motion.section>

            {/* Important Notice */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-yellow-300 font-bold text-lg mb-2">Important Notice</h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                This website is a fan-made informational resource about Pokémon Reminiscencia, a fan-made Pokémon game. We do not host, distribute, or create the game itself. We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA).
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                {/* Copyright Respect */}
                <section className="glass-card rounded-xl p-8 border border-purple-500/20">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-purple-400" />
                        Copyright Respect
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            We respect the intellectual property rights of others and expect our users to do the same. It is our policy to respond to clear notices of alleged copyright infringement that comply with the DMCA.
                        </p>
                        <p>
                            All Pokémon-related trademarks, copyrights, and intellectual property belong to their respective owners:
                        </p>
                        <ul className="space-y-2 ml-6 list-disc text-gray-400">
                            <li>Pokémon © Nintendo/Creatures Inc./GAME FREAK inc.</li>
                            <li>Pokémon and Pokémon character names are trademarks of Nintendo</li>
                            <li>Pokémon Reminiscencia is a fan-made game not affiliated with Nintendo, Game Freak, or The Pokémon Company</li>
                        </ul>
                    </div>
                </section>

                {/* Our Role */}
                <section className="glass-card rounded-xl p-6 sm:p-8 border border-purple-500/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">What This Website Does</h2>
                    <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                        <p>
                            This website serves as an <strong className="text-white">informational resource only</strong>. We:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                            <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                                <p className="text-green-300 font-semibold mb-2">✓ What We Do:</p>
                                <ul className="space-y-1 text-sm text-gray-300">
                                    <li>• Provide game information</li>
                                    <li>• Share game information and FAQs</li>
                                    <li>• Link to official sources</li>
                                    <li>• Educate about the game</li>
                                </ul>
                            </div>
                            <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                                <p className="text-red-300 font-semibold mb-2">✗ What We Don't Do:</p>
                                <ul className="space-y-1 text-sm text-gray-300">
                                    <li>• Host game files</li>
                                    <li>• Distribute copyrighted content</li>
                                    <li>• Create the game itself</li>
                                    <li>• Claim ownership of Pokémon IP</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DMCA Notice */}
                <section className="glass-card rounded-xl p-8 border border-purple-500/20">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <Mail className="w-6 h-6 text-purple-400" />
                        Filing a DMCA Notice
                    </h2>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                        <p>
                            If you believe that content on this website infringes your copyright, you may submit a DMCA takedown notice. To be valid under the DMCA, your notice must include:
                        </p>

                        <div className="bg-purple-500/5 p-6 rounded-lg border border-purple-500/20 space-y-3">
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">1.</span>
                                <p className="text-gray-300">A physical or electronic signature of the copyright owner or person authorized to act on their behalf</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">2.</span>
                                <p className="text-gray-300">Identification of the copyrighted work claimed to have been infringed</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">3.</span>
                                <p className="text-gray-300">Identification of the material that is claimed to be infringing, with information reasonably sufficient to permit us to locate the material (e.g., URL)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">4.</span>
                                <p className="text-gray-300">Your contact information (address, telephone number, and email address)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">5.</span>
                                <p className="text-gray-300">A statement that you have a good faith belief that use of the material is not authorized</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-purple-400 font-bold">6.</span>
                                <p className="text-gray-300">A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the copyright owner</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Counter-Notice */}
                <section className="glass-card rounded-xl p-6 sm:p-8 border border-purple-500/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Counter-Notification</h2>
                    <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                        <p>
                            If you believe that material you posted was removed or disabled by mistake or misidentification, you may file a counter-notification. A counter-notification must include:
                        </p>
                        <ul className="space-y-2 ml-6 list-disc text-gray-400">
                            <li>Your physical or electronic signature</li>
                            <li>Identification of the material and its location before removal</li>
                            <li>A statement under penalty of perjury that the material was removed by mistake or misidentification</li>
                            <li>Your name, address, and telephone number</li>
                            <li>A statement consenting to jurisdiction of the federal court</li>
                        </ul>
                    </div>
                </section>

                {/* Repeat Infringers */}
                <section className="glass-card rounded-xl p-6 sm:p-8 border border-purple-500/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Repeat Infringer Policy</h2>
                    <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                        <p>
                            We will terminate access for users who are repeat infringers of copyrighted material in accordance with the DMCA and applicable law.
                        </p>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="glass-card rounded-xl p-6 sm:p-8 border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Contact for DMCA Notices</h2>
                    <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                        <p>
                            DMCA notices should be sent to our designated agent. Please note that filing a false DMCA notice may result in legal consequences.
                        </p>
                        <div className="bg-black/30 p-6 rounded-lg border border-white/10 space-y-3">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-white font-semibold mb-1">DMCA Agent:</p>
                                    <p className="text-gray-400 text-sm">Pokémon Reminiscencia Resource</p>
                                    <p className="text-purple-400 text-sm">Email: tonicnetprojects@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                            Please allow up to 48 hours for a response to DMCA notices.
                        </p>
                    </div>
                </section>

                {/* Fair Use */}
                <section className="glass-card rounded-xl p-6 sm:p-8 border border-blue-500/20">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Fair Use Notice</h2>
                    <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                        <p>
                            This website may contain copyrighted material used under the "fair use" provisions of copyright law. Fair use is a use permitted by copyright statute that might otherwise be infringing.
                        </p>
                        <p className="text-sm text-gray-400">
                            Our use of copyrighted material is for purposes such as criticism, comment, news reporting, teaching, scholarship, and research, which we believe constitutes fair use under 17 U.S.C. § 107.
                        </p>
                    </div>
                </section>

                {/* Last Updated */}
                <div className="text-center pt-8 border-t border-white/5">
                    <p className="text-gray-500 text-sm">
                        Last Updated: December 15, 2025
                    </p>
                </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
            >
                <Link
                    href="/"
                    className="inline-block px-8 py-3 rounded-full border border-purple-500/30 text-purple-300 font-bold hover:bg-purple-500/10 transition-all hover:scale-105"
                >
                    ← Back to Home
                </Link>
            </motion.div>
        </div>
    );
}
