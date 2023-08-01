'use client'
import {
    Flex,
    Link,
    Stack,
    useBreakpointValue,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react'
import links from 'json/links.json'
export type Link = {
    id: string
    href: string
    title: string
}

const linklist: Link[] = links.links

export default function MotivationPage() {
    const colorModeColor = useColorModeValue('black', 'white')
    const colorModeBgNav = useColorModeValue('white', 'brand.900')
    return (
        <Flex w="full" h="100vh">
            <VStack
                w="full"
                justify="center"
                px={useBreakpointValue({ base: 4, md: 8 })}
            >
                <Stack
                    maxW="2xl"
                    mt={2}
                    align="center"
                    spacing={6}
                    backgroundColor={colorModeBgNav}
                    borderRadius="base"
                >
                    {linklist.map((link) => (
                        <Link
                            p={1}
                            textAlign="center"
                            key={link.id}
                            href={link.href}
                            lineHeight={1.2}
                            fontSize={['sm', 'md', 'lg', 'xl']}
                            color={colorModeColor}
                            isExternal
                        >
                            {link.title}
                        </Link>
                    ))}
                </Stack>
            </VStack>
        </Flex>
    )
}
