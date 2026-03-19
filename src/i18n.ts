import { getRequestConfig } from 'next-intl/server'

const locales = ['en', 'de', 'fr', 'es']

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale

    if (!locale || !locales.includes(locale as 'en' | 'de' | 'fr' | 'es')) {
        locale = 'en'
    }

    return {
        locale,
        messages: {}, // Empty messages as placeholder
    }
})
