"use client";
import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RefreshCcw, AlertTriangle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Error caught:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8 relative overflow-hidden">
            <div className="absolute inset-0 z-[-1]">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-2xl w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-8 inline-block"
                    >
                        <div className="p-6 bg-red-500/20 rounded-full border-4 border-red-500/30">
                            <AlertTriangle className="w-16 h-16 sm:w-20 sm:h-20 text-red-400" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="glass-card p-8 sm:p-12 rounded-3xl border border-red-500/30 mb-8"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-500 to-purple-600">
                                Oops! Something Went Wrong
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            A wild error appeared! Don't worry, it happens to the best of us. We're working on catching it.
                        </p>

                        {process.env.NODE_ENV === 'development' && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 text-left">
                                <p className="text-red-300 font-semibold mb-2 text-sm">Error Details (Development Only):</p>
                                <p className="text-gray-400 text-xs font-mono break-all">
                                    {error.message}
                                </p>
                                {error.digest && (
                                    <p className="text-gray-500 text-xs mt-2">
                                        Error ID: {error.digest}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
                            <p className="text-sm text-gray-400">
                                <strong className="text-purple-300">What you can do:</strong>
                                <br />• Try refreshing the page
                                <br />• Go back to the home page
                                <br />• Clear your browser cache
                                <br />• If the problem persists, please contact support
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
                    >
                        <button
                            onClick={reset}
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-bold hover:shadow-[0_0_40px_rgba(192,132,252,0.6)] transition-all transform hover:scale-105"
                        >
                            <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-purple-500/50 hover:bg-purple-500/10 transition-all font-bold backdrop-blur-sm transform hover:scale-105"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-center"
                    >
                        <p className="text-gray-500 text-sm">
                            Need help? Visit our{" "}
                            <Link href="/about" className="text-purple-400 hover:text-purple-300 underline">
                                About page
                            </Link>
                            {" "}or check out{" "}
                            <Link href="/articles" className="text-purple-400 hover:text-purple-300 underline">
                                Articles
                            </Link>
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
