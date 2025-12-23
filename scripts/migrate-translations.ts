import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') })

import { writeClient } from '../src/lib/sanity/client'

import de from '../src/dictionaries/de.json'
import en from '../src/dictionaries/en.json'
import es from '../src/dictionaries/es.json'
import fr from '../src/dictionaries/fr.json'

type TranslationDict = Record<string, Record<string, string>>

async function migrateTranslations() {
    console.log('🌍 Starting translation migration...\n')

    const namespaces = Object.keys(de) as (keyof typeof de)[]
    let totalTranslations = 0
    let successCount = 0
    let errorCount = 0

    for (const namespace of namespaces) {
        console.log(`📁 Processing namespace: ${namespace}`)

        const deNamespace = de[namespace] as Record<string, string>
        const enNamespace = (en as TranslationDict)[namespace] || {}
        const esNamespace = (es as TranslationDict)[namespace] || {}
        const frNamespace = (fr as TranslationDict)[namespace] || {}

        const keys = Object.keys(deNamespace)

        for (const key of keys) {
            totalTranslations++

            try {
                const doc = {
                    _type: 'translation',
                    _id: `translation-${namespace}-${key}`.replace(
                        /[^a-zA-Z0-9-_]/g,
                        '_'
                    ),
                    namespace,
                    key,
                    de: deNamespace[key],
                    en: enNamespace[key] || deNamespace[key],
                    es: esNamespace[key] || deNamespace[key],
                    fr: frNamespace[key] || deNamespace[key],
                }

                await writeClient.createOrReplace(doc)
                successCount++
                console.log(`  ✓ ${namespace}.${key}`)
            } catch (error) {
                errorCount++
                console.error(
                    `  ✗ Failed to migrate ${namespace}.${key}:`,
                    error
                )
            }
        }

        console.log('')
    }

    console.log('═'.repeat(60))
    console.log('📊 Translation Migration Summary:')
    console.log(`  Total: ${totalTranslations}`)
    console.log(`  ✓ Success: ${successCount}`)
    console.log(`  ✗ Errors: ${errorCount}`)
    console.log('═'.repeat(60))

    if (errorCount === 0) {
        console.log('\n🎉 Translation migration completed successfully!')
    } else {
        console.log('\n⚠️  Translation migration completed with errors.')
    }
}

migrateTranslations().catch((error) => {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
})
