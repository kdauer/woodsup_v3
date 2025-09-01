import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { oswald, publicSans } from 'app/fonts'
import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'
import { routing } from 'i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import '../globals.css'

export default async function LocaleLayout({
    children,
    params,
}: {
    children: ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    if (!routing.locales.includes(locale as any)) {
        notFound()
    }

    const messages = await getMessages()

    return (
        <html
            lang={locale}
            className={`${publicSans.variable} ${oswald.variable}`}
            suppressHydrationWarning
        >
            <body>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Theme accentColor="green" grayColor="gray">
                        <NextIntlClientProvider
                            locale={locale}
                            messages={messages}
                        >
                            <NavBar />
                            {children}
                            <Footer />
                        </NextIntlClientProvider>
                    </Theme>
                </ThemeProvider>
            </body>
        </html>
    )
}
