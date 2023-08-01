'use client'
import {
    Box,
    Container,
    Link,
    Stack,
    Text,
    VisuallyHidden,
    chakra,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import { FaInstagram } from 'react-icons/fa'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    const colorModeBg = useColorModeValue('brand.100', 'brand.700')

    return (
        <chakra.button
            bg={colorModeBg}
            rounded="full"
            w={8}
            h={8}
            cursor="pointer"
            as="a"
            target="_blank"
            href={href}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            transition="background 0.3s ease"
            _hover={{
                bg: colorModeBg,
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const FooterLink = ({
    linkText,
    children,
}: {
    linkText: any
    children: ReactNode
}) => {
    return (
        <Link href={linkText} as={NextLink} fontSize={['sm', 'md', 'lg', 'xl']}>
            {children}
        </Link>
    )
}

export const Footer = () => {
    const t = useTranslations('common')
    const colorModeBgNav = useColorModeValue('brand.50', 'brand.900')

    return (
        <Box
            bg={colorModeBgNav}
            color={useColorModeValue('brand.400', 'white')}
        >
            <Container
                as={Stack}
                maxW="6xl"
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Text fontSize={['sm', 'md', 'lg', 'xl']}>
                    Copyright © 2023 Woods Up e.V. All rights reserved
                </Text>
                <FooterLink linkText="/privacy-policy">
                    {t('privacy-policy')}
                </FooterLink>
                <FooterLink linkText="/legal-notice">
                    {t('legal-notice')}
                </FooterLink>
                <FooterLink linkText="/contact">{t('contact')}</FooterLink>
                <Stack direction="row" spacing={6}>
                    <SocialButton
                        label="Instagram"
                        href="https://www.instagram.com/woods.up.potsdam/"
                    >
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    )
}
