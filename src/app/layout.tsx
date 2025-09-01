import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { Analytics } from '@vercel/analytics/react'
import { oswald, publicSans } from 'app/fonts'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const metadata: Metadata = {
    title: 'Woods Up e.V.',
    description:
        'This is the website for Woods Up, a non-profit association working for climate and environmental protection',
    icons: {
        icon: '/icon.ico',
    },
}

export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
    params,
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html
            lang={params.locale}
            className={`${publicSans.variable} ${oswald.variable}`}
            suppressHydrationWarning
        >
            <body>
                <ThemeProvider attribute="class" defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
                    <Theme accentColor="green" grayColor="gray">
                        {children}
                        <Analytics />
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    )
}
