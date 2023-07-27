'use client'
import { Text, TextProps } from '@chakra-ui/react'

type Props = Omit<TextProps, 'name'> & {
    children: React.ReactNode
}
export const PolymorphicText = ({ children, ...RestProps }: Props) => {
    return (
        <Text fontSize={['sm', 'md', 'lg', 'xl']} {...RestProps}>
            {children}
        </Text>
    )
}
