'use client'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Menu,
    MenuButton,
    MenuList,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react'
import NextLink from 'next-intl/link'

import { useTranslations } from 'next-intl'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NavLink } from './NavLink'
import { NavMenuItem } from './NavMenuItem'

export const NavBar = () => {
    const t = useTranslations('common')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const colorMode = useColorModeValue('light', 'dark')
    return (
        <>
            <Menu closeOnSelect>
                <Box bg={useColorModeValue('brand.50', 'brand.900')} px={4}>
                    <Flex
                        h={16}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <MenuButton
                            as={IconButton}
                            size="md"
                            variant="outline"
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label="Open Menu"
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                            bg={useColorModeValue('brand.100', 'brand.700')}
                        />
                        {isOpen ? (
                            <MenuList pb={4} display={{ md: 'none' }}>
                                <NavMenuItem href="/about" onClose={onClose}>
                                    {t('about')}
                                </NavMenuItem>
                                <NavMenuItem href="/projects" onClose={onClose}>
                                    {t('projects')}
                                </NavMenuItem>
                                <NavMenuItem href="/support" onClose={onClose}>
                                    {t('support')}
                                </NavMenuItem>
                                <NavMenuItem
                                    href="/motivation"
                                    onClose={onClose}
                                >
                                    {t('motivation')}
                                </NavMenuItem>
                            </MenuList>
                        ) : null}
                        <HStack spacing={8} alignItems="center">
                            <Box>
                                <NextLink href="/" passHref>
                                    {/* <Link> */}
                                    {colorMode === 'light' ? (
                                        <Image
                                            src="/logo_light.jpg"
                                            alt="Logo"
                                            borderRadius="base"
                                            h="64px"
                                            w="114px"
                                        />
                                    ) : (
                                        <Image
                                            src="/logo_dark.jpg"
                                            alt="Logo"
                                            borderRadius="base"
                                            h="64px"
                                            w="114px"
                                        />
                                    )}
                                    {/* </Link> */}
                                </NextLink>
                            </Box>
                            <HStack
                                as="nav"
                                spacing={4}
                                display={{ base: 'none', md: 'flex' }}
                            >
                                <NavLink href="/about">{t('about')}</NavLink>
                                <NavLink href="/projects">
                                    {t('projects')}
                                </NavLink>
                                <NavLink href="/support">
                                    {t('support')}{' '}
                                </NavLink>
                                <NavLink href="/motivation">
                                    {t('motivation')}
                                </NavLink>
                            </HStack>
                        </HStack>
                        <Flex alignItems="center">
                            <ColorModeSwitcher />
                            <Menu>
                                <LanguageSwitcher />
                            </Menu>
                        </Flex>
                    </Flex>
                </Box>
            </Menu>
        </>
    )
}
