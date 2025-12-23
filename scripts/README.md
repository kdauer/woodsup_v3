# Migration Scripts

This directory contains scripts to migrate Woods Up content from JSON files to Sanity CMS.

## Prerequisites

Before running the migration scripts, you must:

1. **Create a Sanity project** at https://sanity.io/manage
2. **Create a `.env.local` file** in the project root with:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-write-token
   ```
3. **Generate a write token** in your Sanity project dashboard:
   - Go to Settings → API → Tokens
   - Create a new token with "Editor" permissions
   - Copy the token to your `.env.local` file

## Migration Scripts

### migrate-translations.ts

Migrates all UI translation strings from `src/dictionaries/*.json` to Sanity.

**Run:**
```bash
pnpm migrate:translations
```

**What it does:**
- Reads all translation files (de.json, en.json, es.json, fr.json)
- Creates Sanity documents for each translation key
- Organizes translations by namespace (common, legal-notice, privacy-policy, etc.)
- Provides detailed progress output

### migrate-projects.ts

Migrates all projects and images from `src/json/projects_*.json` to Sanity.

**Run:**
```bash
pnpm migrate:projects
```

**What it does:**
- Reads project data from all language files
- Uploads main project images to Sanity
- Uploads gallery images to Sanity
- Creates Sanity documents with all project data (title, content, images, press links, etc.)
- Maps data across all 4 languages (de, en, es, fr)
- Provides detailed progress and error reporting

### migrate:all

Runs both migrations in sequence (translations first, then projects).

**Run:**
```bash
pnpm migrate:all
```

## Important Notes

⚠️ **Image Files**: The migration scripts expect all image files to exist in the `public/` directory as referenced in the JSON files.

⚠️ **Idempotent**: The scripts use `createOrReplace`, so running them multiple times is safe - they will update existing documents rather than creating duplicates.

⚠️ **Rate Limits**: Sanity has API rate limits. The scripts process items sequentially to avoid hitting these limits.

## Troubleshooting

### "You must login first"
- Make sure you have a valid `SANITY_API_TOKEN` in `.env.local`
- Ensure the token has "Editor" permissions

### "Image not found"
- Check that the image file exists in the `public/` directory
- Verify the path in the JSON file matches the actual file location

### Network errors
- Check your internet connection
- Sanity API may be temporarily unavailable - try again later

## After Migration

Once migration is complete:
1. Visit your Sanity Studio at `http://localhost:3000/studio` (after implementing the Studio route)
2. Verify all content has been migrated correctly
3. Test the frontend to ensure data is loading from Sanity
