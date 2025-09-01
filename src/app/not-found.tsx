'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '100vh',
                        fontFamily: 'system-ui, sans-serif',
                        padding: '1rem',
                    }}
                >
                    <div style={{ textAlign: 'center' }}>
                        <h1
                            style={{
                                fontSize: '4rem',
                                fontWeight: 'bold',
                                background:
                                    'linear-gradient(90deg, #C6F6D5 0%, #22543D 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '1rem',
                            }}
                        >
                            404
                        </h1>
                        <p
                            style={{
                                fontSize: '1.125rem',
                                marginBottom: '0.5rem',
                            }}
                        >
                            Page Not Found
                        </p>
                        <p
                            style={{
                                color: '#6b7280',
                                marginBottom: '2rem',
                                fontSize: '1rem',
                            }}
                        >
                            The page you're looking for does not seem to exist
                        </p>
                        <Link
                            href="/en"
                            style={{
                                display: 'inline-block',
                                padding: '0.75rem 1.5rem',
                                background:
                                    'linear-gradient(90deg, #68D391 0%, #276749 100%)',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '0.5rem',
                                fontWeight: '500',
                            }}
                        >
                            Take me to the home page
                        </Link>
                    </div>
                </div>
            </body>
        </html>
    )
}
