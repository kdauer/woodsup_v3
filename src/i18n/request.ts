import { getDictionary } from 'lib/sanity/getDictionary'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale
    }

    const messages = await getDictionary(locale as 'de' | 'en' | 'es' | 'fr')

    return {
        locale,
        messages,
    }
})
