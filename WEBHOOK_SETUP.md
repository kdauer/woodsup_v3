# Webhook Setup for Instant Content Updates

This guide explains how to configure Sanity webhooks to automatically revalidate
your Next.js application when content changes.

## Why Use Webhooks?

By default, Next.js uses Incremental Static Regeneration (ISR) with a 60-second
revalidation period. This means content changes may take up to 60 seconds to
appear on your site.

With webhooks, content updates are reflected **instantly** - as soon as you
publish changes in Sanity Studio!

## Setup Steps

### 1. Generate a Webhook Secret

Generate a secure random string to use as your webhook secret:

```bash
openssl rand -base64 32
```

Copy the generated string - you'll need it for both your environment variables
and Sanity webhook configuration.

### 2. Add Environment Variable

Add the webhook secret to your `.env.local` file:

```bash
SANITY_WEBHOOK_SECRET=your-generated-secret-here
```

**Important**: Never commit this secret to version control! It should only be in
`.env.local` (which is git-ignored).

### 3. Deploy Your Application

If you're using Vercel:

1. Go to your project settings in Vercel
2. Navigate to **Environment Variables**
3. Add `SANITY_WEBHOOK_SECRET` with your generated secret
4. Redeploy your application

For other hosting providers, add the environment variable according to their
documentation.

### 4. Configure Webhook in Sanity

1. Go to [Sanity Manage](https://sanity.io/manage)
2. Select your project
3. Navigate to **API** → **Webhooks**
4. Click **Create webhook**
5. Configure the webhook:

    **Name**: `Next.js Revalidation`

    **URL**: `https://your-domain.com/api/revalidate?secret=YOUR_SECRET_HERE`
    - Replace `your-domain.com` with your actual domain
    - Replace `YOUR_SECRET_HERE` with your generated secret

    **Dataset**: `production` (or your dataset name)

    **Trigger on**:
    - ✅ Create
    - ✅ Update
    - ✅ Delete

    **Filter** (optional - only trigger for specific document types):

    ```groq
    _type == "project" || _type == "translation"
    ```

    **Projection** (what data to send):

    ```groq
    {
      _type,
      projectId
    }
    ```

6. Click **Save**

## How It Works

When a document is created, updated, or deleted in Sanity:

1. Sanity sends a POST request to your webhook endpoint
2. The endpoint verifies the secret
3. Based on the document type, it revalidates the appropriate pages:
    - **Projects**: Revalidates `/[locale]/projects` and
      `/[locale]/projects/[id]`
    - **Translations**: Revalidates all pages (since translations affect the
      entire site)

## Testing the Webhook

### Local Testing

1. Start your development server:

    ```bash
    pnpm dev
    ```

2. In another terminal, test the webhook:

    ```bash
    curl -X POST "http://localhost:3000/api/revalidate?secret=YOUR_SECRET" \
      -H "Content-Type: application/json" \
      -d '{"_type":"project","projectId":1}'
    ```

    Expected response:

    ```json
    {
        "revalidated": true,
        "type": "project",
        "projectId": 1
    }
    ```

### Production Testing

After deploying, you can test using the same curl command but with your
production URL:

```bash
curl -X POST "https://your-domain.com/api/revalidate?secret=YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"_type":"project","projectId":1}'
```

## Monitoring

You can monitor webhook deliveries in Sanity:

1. Go to **API** → **Webhooks**
2. Click on your webhook
3. View the **Deliveries** tab to see:
    - Successful requests (200 status)
    - Failed requests (with error details)
    - Request/response payloads

## Troubleshooting

### Webhook returns 401 Unauthorized

- **Cause**: The secret in the URL doesn't match `SANITY_WEBHOOK_SECRET`
- **Fix**: Verify the secret is correct in both your environment variables and
  the webhook URL

### Webhook returns 500 Internal Server Error

- **Cause**: Error processing the request
- **Fix**: Check your application logs for the error details

### Content doesn't update immediately

- **Cause**: Webhook might not be configured correctly or failing
- **Fix**:
    1. Check the webhook deliveries in Sanity
    2. Verify the webhook URL is correct
    3. Ensure your application is deployed and accessible

### Webhook works but pages don't revalidate

- **Cause**: The revalidate paths might be incorrect
- **Fix**: Check that your route patterns match your actual routes (e.g.,
  `/[locale]/projects`)

## Security Best Practices

1. **Never expose your secret**: Don't commit it to Git or share it publicly
2. **Use HTTPS**: Always use HTTPS for production webhooks
3. **Rotate secrets periodically**: Change your webhook secret every few months
4. **Monitor deliveries**: Regularly check webhook logs for suspicious activity

## Advanced: Custom Revalidation

To add revalidation for additional document types, edit
`src/app/api/revalidate/route.ts`:

```typescript
if (body._type === 'yourDocumentType') {
    revalidatePath('/your/path', 'page')
    return NextResponse.json({
        revalidated: true,
        type: 'yourDocumentType',
    })
}
```

## Resources

- [Next.js Revalidation Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching/incremental-static-regeneration)
- [Sanity Webhooks Documentation](https://www.sanity.io/docs/webhooks)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
