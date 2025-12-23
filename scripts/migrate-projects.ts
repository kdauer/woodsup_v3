import { config } from 'dotenv'
import { resolve } from 'path'

// Load environment variables from .env.local
config({ path: resolve(process.cwd(), '.env.local') })

import { writeClient } from '../src/lib/sanity/client'
import { createReadStream, existsSync } from 'fs'
import { join } from 'path'

import projects_de from '../src/json/projects_de.json'
import projects_en from '../src/json/projects_en.json'
import projects_es from '../src/json/projects_es.json'
import projects_fr from '../src/json/projects_fr.json'

async function uploadImage(imagePath: string): Promise<string | null> {
    if (!imagePath) return null

    // Remove leading slash and construct full path
    const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    const fullPath = join(process.cwd(), 'public', cleanPath)

    if (!existsSync(fullPath)) {
        console.warn(`    ⚠️  Image not found: ${fullPath}`)
        return null
    }

    try {
        const asset = await writeClient.assets.upload(
            'image',
            createReadStream(fullPath),
            { filename: imagePath.split('/').pop() }
        )
        return asset._id
    } catch (error) {
        console.error(`    ✗ Failed to upload ${imagePath}:`, error)
        return null
    }
}

async function migrateProjects() {
    console.log('🌳 Starting project migration...\n')

    const deProjects = projects_de.projects
    const enProjects = projects_en.projects
    const esProjects = projects_es.projects
    const frProjects = projects_fr.projects

    let totalProjects = deProjects.length
    let successCount = 0
    let errorCount = 0
    let imageCount = 0
    let imageErrorCount = 0

    for (const deProject of deProjects) {
        const enProject = enProjects.find((p) => p.id === deProject.id)
        const esProject = esProjects.find((p) => p.id === deProject.id)
        const frProject = frProjects.find((p) => p.id === deProject.id)

        console.log(`📦 Project ${deProject.id}: ${deProject.title}`)

        try {
            // Upload main image
            console.log('  📸 Uploading main image...')
            const mainImageId = await uploadImage(deProject.image)
            if (mainImageId) {
                imageCount++
                console.log('    ✓ Main image uploaded')
            }

            // Upload gallery images
            console.log(`  🖼️  Uploading ${deProject.gallery.length} gallery images...`)
            const galleryAssets = await Promise.all(
                deProject.gallery.map(async (imgPath) => {
                    const assetId = await uploadImage(imgPath)
                    if (assetId) {
                        imageCount++
                        console.log(`    ✓ Gallery image uploaded: ${imgPath.split('/').pop()}`)
                        return {
                            _type: 'image',
                            _key: imgPath.replace(/[^a-zA-Z0-9]/g, '_'),
                            asset: { _type: 'reference', _ref: assetId },
                        }
                    } else {
                        imageErrorCount++
                        return null
                    }
                })
            )

            // Create Sanity document
            const doc = {
                _type: 'project',
                _id: `project-${deProject.id}`,
                projectId: deProject.id,
                slug: {
                    _type: 'slug',
                    current: `project-${deProject.id}`,
                },
                title: {
                    de: deProject.title,
                    en: enProject?.title || deProject.title,
                    es: esProject?.title || deProject.title,
                    fr: frProject?.title || deProject.title,
                },
                content: {
                    de: deProject.content,
                    en: enProject?.content || deProject.content,
                    es: esProject?.content || deProject.content,
                    fr: frProject?.content || deProject.content,
                },
                mainImage: mainImageId
                    ? {
                          _type: 'image',
                          asset: { _type: 'reference', _ref: mainImageId },
                      }
                    : undefined,
                gallery: galleryAssets.filter(Boolean),
                video: deProject.video || undefined,
                presslinks: deProject.presslinks.map((url, index) => ({
                    _type: 'object',
                    _key: `press-${index}`,
                    title: `Presseartikel ${index + 1}`,
                    url,
                })),
            }

            await writeClient.createOrReplace(doc)
            successCount++
            console.log(`  ✓ Project ${deProject.id} migrated successfully\n`)
        } catch (error) {
            errorCount++
            console.error(`  ✗ Failed to migrate project ${deProject.id}:`, error)
            console.log('')
        }
    }

    console.log('═'.repeat(60))
    console.log('📊 Project Migration Summary:')
    console.log(`  Total Projects: ${totalProjects}`)
    console.log(`  ✓ Success: ${successCount}`)
    console.log(`  ✗ Errors: ${errorCount}`)
    console.log(`  📸 Images Uploaded: ${imageCount}`)
    console.log(`  ⚠️  Image Errors: ${imageErrorCount}`)
    console.log('═'.repeat(60))

    if (errorCount === 0 && imageErrorCount === 0) {
        console.log('\n🎉 Project migration completed successfully!')
    } else if (errorCount === 0) {
        console.log('\n⚠️  Project migration completed with image upload warnings.')
    } else {
        console.log('\n⚠️  Project migration completed with errors.')
    }
}

migrateProjects().catch((error) => {
    console.error('\n❌ Migration failed:', error)
    process.exit(1)
})
