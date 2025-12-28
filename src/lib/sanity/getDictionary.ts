import { client } from './client'
import { allTranslationsQuery } from './queries'

type Locale = 'de' | 'en' | 'es' | 'fr'

interface Translation {
    namespace: string
    key: string
    de: string
    en: string
    es: string
    fr: string
}

export async function getDictionary(locale: Locale) {
    try {
        const translations: Translation[] = await client.fetch(
            allTranslationsQuery,
            {},
            { next: { revalidate: 60 } },
        )

        const dictionary: Record<string, Record<string, string>> = {}

        for (const t of translations) {
            if (!dictionary[t.namespace]) {
                dictionary[t.namespace] = {}
            }
            dictionary[t.namespace][t.key] = t[locale] || t.de
        }

        return dictionary
    } catch (error) {
        console.error('Failed to fetch translations from Sanity:', error)
    }
}
