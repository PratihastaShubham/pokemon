"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global error caught:", error);
    }, [error]);

    return (
        <html lang="en">
            <body style={{
                margin: 0,
                padding: 0,
                background: '#0f0e13',
                color: '#fff',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{ maxWidth: '600px', padding: '2rem', textAlign: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        margin: '0 auto 2rem',
                        background: 'rgba(239, 68, 68, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '4px solid rgba(239, 68, 68, 0.3)'
                    }}>
                        <AlertTriangle style={{ width: '50px', height: '50px', color: '#f87171' }} />
                    </div>

                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        background: 'linear-gradient(to right, #f87171, #ec4899, #a855f7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        Critical Error
                    </h1>

                    <p style={{
                        color: '#d1d5db',
                        fontSize: '1.125rem',
                        lineHeight: '1.75',
                        marginBottom: '2rem'
                    }}>
                        Something went critically wrong. The application encountered an unexpected error and needs to restart.
                    </p>

                    {process.env.NODE_ENV === 'development' && (
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            border: '1px solid rgba(239, 68, 68, 0.3)',
                            borderRadius: '0.75rem',
                            padding: '1rem',
                            marginBottom: '2rem',
                            textAlign: 'left'
                        }}>
                            <p style={{ color: '#fca5a5', fontSize: '0.875rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                                Error Details:
                            </p>
                            <p style={{ color: '#9ca3af', fontSize: '0.75rem', fontFamily: 'monospace', wordBreak: 'break-all' }}>
                                {error.message}
                            </p>
                        </div>
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                        <button
                            onClick={reset}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '9999px',
                                background: 'linear-gradient(to right, #9333ea, #ec4899, #9333ea)',
                                color: 'white',
                                fontWeight: 'bold',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'transform 0.2s',
                                outline: 'none'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            🔄 Restart Application
                        </button>

                        <button
                            onClick={() => window.location.href = '/'}
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '9999px',
                                background: 'transparent',
                                color: '#a855f7',
                                fontWeight: 'bold',
                                border: '2px solid rgba(168, 85, 247, 0.5)',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.2s',
                                outline: 'none'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.1)';
                                e.currentTarget.style.transform = 'scale(1.05)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            🏠 Go to Homepage
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
