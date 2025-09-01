'use client'
import { Box, Container, Flex, IconButton, Link, Text } from '@radix-ui/themes'
import { useLocale, useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { FaInstagram } from 'react-icons/fa'

const CookieConsent = dynamic(() => import('react-cookie-consent'), {
    ssr: false,
})

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <IconButton asChild size="3" variant="ghost" highContrast>
            <a target="_blank" href={href} aria-label={label}>
                {children}
            </a>
        </IconButton>
    )
}

const FooterLink = ({
    linkText,
    children,
    mounted,
    isLight,
}: {
    linkText: any
    children: ReactNode
    mounted: boolean
    isLight: boolean
}) => {
    return (
        <Link
            asChild
            size={{ initial: '2', md: '3' }}
            style={{
                textDecoration: 'none',
                color: mounted ? (isLight ? 'black' : 'white') : 'black', // Default to black
            }}
        >
            <NextLink href={linkText}>{children}</NextLink>
        </Link>
    )
}

export const Footer = () => {
    const t = useTranslations('common')
    const locale = useLocale()
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const copyrightDate = new Date().getUTCFullYear()

    useEffect(() => {
        setMounted(true)
    }, [])

    const isLight = mounted ? theme === 'light' : true // Default to light theme
    const backgroundColor = isLight ? '#F0FFF4' : '#1C4532'
    const iconColor = isLight ? 'black' : 'white'

    return (
        <Box
            style={{
                backgroundColor,
            }}
        >
            <Container>
                <Flex
                    py="4"
                    direction={{ initial: 'column', md: 'row' }}
                    gap="4"
                    justify={{ initial: 'center', md: 'between' }}
                    align={{ initial: 'center', md: 'center' }}
                >
                    <Text size={{ initial: '2', md: '3' }}>
                        Copyright © {copyrightDate} Woods Up e.V. All rights
                        reserved
                    </Text>
                    <FooterLink
                        linkText={`/${locale}/privacy-policy`}
                        mounted={mounted}
                        isLight={isLight}
                    >
                        {t('privacy-policy')}
                    </FooterLink>
                    <FooterLink
                        linkText={`/${locale}/legal-notice`}
                        mounted={mounted}
                        isLight={isLight}
                    >
                        {t('legal-notice')}
                    </FooterLink>
                    <FooterLink
                        linkText={`/${locale}/contact`}
                        mounted={mounted}
                        isLight={isLight}
                    >
                        {t('contact')}
                    </FooterLink>
                    <Flex direction="row" gap="6">
                        <SocialButton
                            label="Instagram"
                            href="https://www.instagram.com/woods.up.potsdam/"
                        >
                            <FaInstagram color={iconColor} />
                        </SocialButton>
                    </Flex>
                </Flex>
            </Container>
            <CookieConsent
                location="bottom"
                buttonText={t('cookieButton')}
                cookieName="myAwesomeCookieName2"
                style={{ background: 'var(--gray-a5)', opacity: 0.9 }}
                buttonStyle={{
                    background: 'var(--gray-a5)',
                    color: 'white',
                    fontSize: '13px',
                }}
                expires={150}
            >
                {t('cookieText')}{' '}
                <Link asChild>
                    <NextLink
                        href="/privacy-policy"
                        style={{ color: 'var(--gray-a5)' }}
                    >
                        {t('privacy-policy')}
                    </NextLink>
                </Link>
            </CookieConsent>
        </Box>
    )
}
