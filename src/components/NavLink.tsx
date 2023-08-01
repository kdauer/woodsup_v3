'use client'
import { Link, useColorModeValue } from '@chakra-ui/react'
import { usePathname } from 'next-intl/client'
import NextLink from 'next-intl/link'

export const NavLink = ({
    href,
    children,
}: {
    href: string
    children?: React.ReactNode
}) => {
    const pathname = usePathname()
    const isActive = pathname === href
    const colorModeBgContainer = useColorModeValue('white', 'brand.900')
    const colorModeBgNavLink = useColorModeValue('brand.400', 'white')
    return (
        <Link
            href={href}
            as={NextLink}
            fontSize={['sm', 'md', 'lg', 'xl']}
            px={2}
            py={1}
            rounded={'md'}
            color={
                isActive
                    ? useColorModeValue('brand.600', 'brand.100')
                    : colorModeBgNavLink
            }
            _hover={{
                textDecoration: 'none',
                color: colorModeBgContainer,
                bg: colorModeBgNavLink,
            }}
        >
            {children}
        </Link>
    )
}
