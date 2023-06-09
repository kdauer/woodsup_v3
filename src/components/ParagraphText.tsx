import { Text } from '@chakra-ui/react'
import React from 'react'

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return <Text fontSize={['sm', 'md', 'lg', 'xl']}>{children}</Text>
}

export default Paragraph
