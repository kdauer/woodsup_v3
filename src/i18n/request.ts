import { getDictionary } from 'lib/sanity/getDictionary'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale
    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale
    }

    // Fetch translations from Sanity (with JSON fallback)
    const messages = await getDictionary(locale as 'de' | 'en' | 'es' | 'fr')

    return {
        locale,
        messages,
    }
})
