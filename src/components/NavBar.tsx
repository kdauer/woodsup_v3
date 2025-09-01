'use client'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Box, DropdownMenu, Flex, IconButton } from '@radix-ui/themes'
import { Link as NextLink } from 'i18n/navigation'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NavLink } from './NavLink'
import { NavMenuItem } from './NavMenuItem'

export const NavBar = () => {
    const t = useTranslations('common')
    const [isOpen, setIsOpen] = useState(false)
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Use default values that match server rendering
    const isLight = mounted ? theme === 'light' : true // Default to light theme
    const backgroundColor = isLight ? '#F0FFF4' : '#1C4532'
    const iconColor = isLight ? 'black' : 'white'

    return (
        <>
            <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
                <Box px="4" style={{ backgroundColor }}>
                    <Flex
                        style={{ height: '6rem' }}
                        align="center"
                        justify="between"
                    >
                        <Flex display={{ md: 'none' }}>
                            <DropdownMenu.Trigger>
                                <IconButton
                                    size="3"
                                    variant="soft"
                                    aria-label="Open Menu"
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    {isOpen ? (
                                        <Cross1Icon
                                            height="16px"
                                            width="16px"
                                            color={iconColor}
                                        />
                                    ) : (
                                        <HamburgerMenuIcon
                                            height="16px"
                                            width="16px"
                                            color={iconColor}
                                        />
                                    )}
                                </IconButton>
                            </DropdownMenu.Trigger>
                        </Flex>
                        {isOpen ? (
                            <DropdownMenu.Content>
                                <NavMenuItem
                                    href="/about"
                                    onClose={() => setIsOpen(false)}
                                >
                                    {t('about')}
                                </NavMenuItem>
                                <NavMenuItem
                                    href="/projects"
                                    onClose={() => setIsOpen(false)}
                                >
                                    {t('projects')}
                                </NavMenuItem>
                                <NavMenuItem
                                    href="/support"
                                    onClose={() => setIsOpen(false)}
                                >
                                    {t('support')}
                                </NavMenuItem>
                                <NavMenuItem
                                    href="/motivation"
                                    onClose={() => setIsOpen(false)}
                                >
                                    {t('motivation')}
                                </NavMenuItem>
                            </DropdownMenu.Content>
                        ) : null}

                        <Flex gap="8" align="center">
                            <Box>
                                <NextLink href="/" passHref>
                                    <Image
                                        src={
                                            mounted
                                                ? isLight
                                                    ? '/logo_light.jpg'
                                                    : '/logo_dark.jpg'
                                                : '/logo_light.jpg'
                                        }
                                        alt="Logo"
                                        height={64}
                                        width={114}
                                        style={{
                                            borderRadius: 'var(--radius-2)',
                                        }}
                                    />
                                </NextLink>
                            </Box>
                            <Flex
                                asChild
                                gap="4"
                                display={{ initial: 'none', md: 'flex' }}
                            >
                                <nav>
                                    <NavLink href="/about">
                                        {t('about')}
                                    </NavLink>
                                    <NavLink href="/projects">
                                        {t('projects')}
                                    </NavLink>
                                    <NavLink href="/support">
                                        {t('support')}{' '}
                                    </NavLink>
                                    <NavLink href="/motivation">
                                        {t('motivation')}
                                    </NavLink>
                                </nav>
                            </Flex>
                        </Flex>
                        <Flex align="center" gap="4">
                            <ColorModeSwitcher />
                            <LanguageSwitcher />
                        </Flex>
                    </Flex>
                </Box>
            </DropdownMenu.Root>
        </>
    )
}
