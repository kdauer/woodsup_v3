'use client'
import { Box, Container, Heading, Link, Stack, Text } from '@chakra-ui/react'

export default function ContactPage() {
    return (
        <Container maxW="3xl" h="100vh">
            <Stack
                as={Box}
                textAlign="center"
                spacing={{ base: 8, md: 14 }}
                py={{ base: 20, md: 36 }}
            >
                <Heading
                    fontWeight={600}
                    fontSize={['md', 'lg', '2xl', '4xl']}
                    lineHeight="110%"
                >
                    Woods Up e.V.
                </Heading>
                <Text fontSize={['sm', 'md', 'lg', 'xl']}>
                    Wollestraße 54
                    <br />
                    14482 Potsdam
                </Text>
                Mail:{' '}
                <Link
                    fontSize={['sm', 'md', 'lg', 'xl']}
                    color="brand.300"
                    href="mailto:woodsup@posteo.de"
                    isExternal
                >
                    woodsup@posteo.de
                </Link>
            </Stack>
        </Container>
    )
}
