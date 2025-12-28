import createProxy from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createProxy(routing)

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en|fr|es)/:path*'],
}
