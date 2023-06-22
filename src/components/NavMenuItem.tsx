'use client'
import { MenuItem } from '@chakra-ui/react'
import NextLink from 'next-intl/link'
import React, { FunctionComponent } from 'react'

const NavMenuItem: FunctionComponent<{
    href: any
    children?: React.ReactNode
    onClose: () => void
}> = ({ href, children, onClose }) => {
    return (
        <MenuItem
            href={href}
            as={NextLink}
            onClick={onClose}
            fontSize={['sm', 'md', 'lg', 'xl']}
        >
            {children}
        </MenuItem>
    )
}

export default NavMenuItem
