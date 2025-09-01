'use client'
import { DropdownMenu } from '@radix-ui/themes'
import { Link as NextLink } from 'i18n/navigation'

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
        <DropdownMenu.Item asChild onClick={onClose}>
            <NextLink href={href} passHref>
                {children}
            </NextLink>
        </DropdownMenu.Item>
    )
}
