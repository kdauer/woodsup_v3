import { FunctionComponent } from 'react'
import { Text } from '@chakra-ui/react'

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
