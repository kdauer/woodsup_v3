import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Can be imported from a shared config
const locales = ['en', 'de', 'fr', 'es']

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale as any)) {
        locale = 'en'
    }

    return {
        locale,
        messages: (await import(`./dictionaries/${locale}.json`)).default,
    }
})
