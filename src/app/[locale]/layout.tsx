import '@radix-ui/themes/styles.css'
import { Footer } from 'components/Footer'
import { NavBar } from 'components/NavBar'
import { routing } from 'i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

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
        <NextIntlClientProvider locale={locale} messages={messages}>
            {/* @ts-expect-error Server Component */}
            <NavBar locale={locale} />
            {children}
            {/* @ts-expect-error Server Component */}
            <Footer locale={locale} />
        </NextIntlClientProvider>
    )
}
