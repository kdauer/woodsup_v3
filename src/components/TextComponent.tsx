'use client'
import { Text } from '@chakra-ui/react'

export const TextComponent = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text fontSize={['sm', 'md', 'lg', 'xl']} textAlign="justify">
            {children}
        </Text>
    )
}
