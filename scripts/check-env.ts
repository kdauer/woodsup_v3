#!/usr/bin/env node
import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') })

console.log('🔍 Checking Sanity environment variables...\n')

let hasErrors = false

// Check NEXT_PUBLIC_SANITY_PROJECT_ID
if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.log('✅ NEXT_PUBLIC_SANITY_PROJECT_ID is set')
    console.log(`   Value: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`)
} else {
    console.log('❌ NEXT_PUBLIC_SANITY_PROJECT_ID is NOT set')
    hasErrors = true
}

console.log('')

// Check NEXT_PUBLIC_SANITY_DATASET
if (process.env.NEXT_PUBLIC_SANITY_DATASET) {
    console.log('✅ NEXT_PUBLIC_SANITY_DATASET is set')
    console.log(`   Value: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`)
} else {
    console.log('❌ NEXT_PUBLIC_SANITY_DATASET is NOT set')
    hasErrors = true
}

console.log('')

// Check SANITY_API_TOKEN
if (process.env.SANITY_API_TOKEN) {
    console.log('✅ SANITY_API_TOKEN is set')
    console.log(`   Value: ${process.env.SANITY_API_TOKEN.substring(0, 10)}...`)
} else {
    console.log('❌ SANITY_API_TOKEN is NOT set')
    hasErrors = true
}

console.log('\n' + '═'.repeat(60))

if (hasErrors) {
    console.log('❌ Some environment variables are missing!')
    console.log('\nPlease create a .env.local file with:')
    console.log(`
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
`)
    console.log('Get your credentials from: https://sanity.io/manage')
    process.exit(1)
} else {
    console.log('✅ All environment variables are set!')
    console.log('\nYou can now run the migration:')
    console.log('  pnpm migrate:all')
}
