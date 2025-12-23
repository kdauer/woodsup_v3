import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

type WebhookBody = {
    _type: string
    projectId?: number
}

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret')

    // Verify the webhook secret
    if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
        return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    try {
        const body = (await request.json()) as WebhookBody

        // Revalidate based on document type
        if (body._type === 'project') {
            // Revalidate the projects list page for all locales
            revalidatePath('/[locale]/projects', 'page')

            // Revalidate the specific project page if we have a projectId
            if (body.projectId) {
                revalidatePath(`/[locale]/projects/${body.projectId}`, 'page')
            }

            return NextResponse.json({
                revalidated: true,
                type: 'project',
                projectId: body.projectId,
            })
        }

        if (body._type === 'translation') {
            // Revalidate all pages since translations affect the entire site
            revalidatePath('/', 'layout')

            return NextResponse.json({
                revalidated: true,
                type: 'translation',
            })
        }

        // Return success even for unknown types
        return NextResponse.json({
            revalidated: false,
            message: `Document type '${body._type}' is not configured for revalidation`,
        })
    } catch (err) {
        console.error('Error revalidating:', err)
        return NextResponse.json(
            {
                message: 'Error revalidating',
            },
            { status: 500 },
        )
    }
}
