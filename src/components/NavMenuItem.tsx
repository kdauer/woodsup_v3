import { Link, MenuItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { FunctionComponent } from 'react'

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
