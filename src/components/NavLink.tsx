import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FunctionComponent } from 'react'

const NavLink: FunctionComponent<{
    href: any
    children?: React.ReactNode
}> = ({ href, children }) => {
    const router = useRouter()
    const isActive = router.pathname === href
    return (
        <NextLink href={href} passHref>
            <Link
                fontSize={['sm', 'md', 'lg', 'xl']}
                px={2}
                py={1}
                rounded={'md'}
                color={
                    isActive
                        ? useColorModeValue('brand.600', 'brand.100')
                        : useColorModeValue('brand.400', 'white')
                }
                _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                }}
            >
                {children}
            </Link>
        </NextLink>
    )
}

export default NavLink
