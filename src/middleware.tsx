import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['de', 'en', 'es', 'fr'],
    defaultLocale: 'en',
})

export const config = {
    // Skip all paths that should not be internationalized
    matcher: ['/((?!api|_next|.*\\..*).*)'],
}
