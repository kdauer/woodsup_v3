'use client'

import { CookiesProvider } from 'react-cookie'
import { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
    return <CookiesProvider>{children}</CookiesProvider>
}
