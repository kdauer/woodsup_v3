import { Text } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

const TextComponent: FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => {
    return (
        <Text fontSize={['sm', 'md', 'lg', 'xl']} textAlign="justify">
            {children}
        </Text>
    )
}

export default TextComponent
