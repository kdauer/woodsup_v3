import { FunctionComponent } from 'react'
import { Link, MenuItem } from '@chakra-ui/react'
import NextLink from 'next/link'

const NavMenuItem: FunctionComponent<{
    href: any
    children?: React.ReactNode
    onClose: () => void
}> = ({ href, children, onClose }) => {
    return (
        <NextLink href={href} passHref>
            <MenuItem
                as={Link}
                onClick={onClose}
                fontSize={['sm', 'md', 'lg', 'xl']}
            >
                {children}
            </MenuItem>
        </NextLink>
    )
}

export default NavMenuItem
