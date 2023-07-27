'use client'
import { Heading, HeadingProps } from '@chakra-ui/react'

type Props = Omit<HeadingProps, 'name'> & {
    children: React.ReactNode
}
export const PolymorphicHeading = ({ children, ...RestProps }: Props) => {
    return (
        <Heading fontSize={['md', 'lg', 'xl', '2xl']} {...RestProps}>
            {children}
        </Heading>
    )
}
