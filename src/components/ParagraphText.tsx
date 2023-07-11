'use client'
import { Text } from '@chakra-ui/react'

export const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return <Text fontSize={['sm', 'md', 'lg', 'xl']}>{children}</Text>
}
