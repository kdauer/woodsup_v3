'use client'
import { MenuItem } from '@chakra-ui/react'
import { Link as NextLink } from 'navigation'

export const NavMenuItem = ({
    href,
    children,
    onClose,
}: {
    href: any
    children?: React.ReactNode
    onClose: () => void
}) => {
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
