# Sanity Studio Access

The Sanity Studio is integrated into your Next.js application and accessible at `/studio`.

## Accessing the Studio

### Local Development

1. Make sure you have the environment variables set in `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

2. Start your development server:
   ```bash
   pnpm dev
   ```

3. Navigate to:
   ```
   http://localhost:3000/studio
   ```

### Production

Once deployed, the studio will be available at:
```
https://your-domain.com/studio
```

## Authentication

The first time you access the Studio, you'll be prompted to log in with your Sanity account. Make sure you have:

1. A Sanity.io account (create one at https://www.sanity.io/)
2. Access to the Woods Up project
3. Appropriate permissions (Editor or Admin role)

## Managing Content

### Projects

In the Studio, you can:
- Create new projects with multilingual content (de, en, es, fr)
- Upload main images and gallery images
- Add video URLs and press links
- Edit existing project content
- Reorder projects by changing the Project ID

### Translations

UI translations can be managed through the Studio:
- Organized by namespace (common, legal-notice, privacy-policy, etc.)
- Each translation has all 4 language variants
- Changes are reflected immediately on the website (with revalidation)

## Important Notes

⚠️ **Security**: The Studio route is publicly accessible but requires authentication. In production, you may want to:
- Restrict access through middleware
- Use environment-based configuration to disable Studio in production
- Set up role-based access control in Sanity

✨ **Vision Tool**: The Studio includes the Vision tool (in the toolbar) for testing GROQ queries against your dataset.

## Troubleshooting

### "Configuration invalid" error
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are set correctly
- Ensure the values match your Sanity project

### Cannot log in
- Verify you have an account on sanity.io
- Check that your account has access to the project
- Clear browser cookies and try again

### Changes not reflecting on website
- The website uses ISR (Incremental Static Regeneration) with 60-second revalidation
- Wait up to 60 seconds for changes to appear
- Or implement webhooks for instant updates (see migration guide)

## Next Steps

After the Studio is set up:
1. Run the migration scripts to populate content
2. Test creating/editing content in the Studio
3. Verify changes appear on the frontend
4. Configure webhooks for instant updates (optional)
