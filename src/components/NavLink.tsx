'use client'
import { Link } from '@radix-ui/themes'
import { Link as NextLink, usePathname } from 'i18n/navigation'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const NavLink = ({
    href,
    children,
}: {
    href: string
    children?: React.ReactNode
}) => {
    const pathname = usePathname()
    const isActive = pathname === href
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Wait until mounted to access theme to prevent hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Before mounting, use a default theme to match server rendering
    const isDark = mounted ? resolvedTheme === 'dark' : false

    return (
        <NextLink
            href={href}
            passHref
            style={{
                textDecoration: 'none',
                color: mounted ? (isDark ? 'white' : 'black') : 'black', // Default to black to match server
            }}
        >
            <Link
                asChild
                style={{
                    color: mounted
                        ? isDark
                            ? isActive
                                ? 'var(--brand-400)'
                                : 'white'
                            : isActive
                              ? 'var(--brand-600)'
                              : 'var(--brand-100)'
                        : 'var(--brand-100)', // Default color
                    textDecoration: 'none',
                    fontWeight: isActive ? 'bold' : 'normal',
                }}
                color={isActive ? 'green' : 'gray'}
                size={{
                    initial: '1',
                    sm: '2',
                    md: '3',
                    lg: '4',
                }}
            >
                <span>{children}</span>
            </Link>
        </NextLink>
    )
}
