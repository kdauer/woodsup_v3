'use client'
import NotFound from '../not-found'

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function Page() {
    return (
        <html lang="en">
            <body>
                <NotFound />
            </body>
        </html>
    )
}
