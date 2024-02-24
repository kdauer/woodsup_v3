import { oswald, publicSans } from 'app/fonts'
import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { Locale } from '../../../i18n-config'
import Providers from './providers'

async function getDictionaries(locale: string) {
    try {
        return (await import(`../../dictionaries/${locale}.json`)).default
    } catch (error) {
        notFound()
    }
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: Locale }
}) {
    const messages = await getDictionaries(locale)

    return (
        <html
            lang={locale}
            className={`${publicSans.variable} ${oswald.variable}`}
        >
            <body>
                <Providers>
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        {/* @ts-expect-error Server Component */}
                        <NavBar locale={locale} />
                        {children}
                        {/* @ts-expect-error Server Component */}
                        <Footer locale={locale} />
                    </NextIntlClientProvider>
                </Providers>
            </body>
        </html>
    )
}
