'use client'
import { Box, Container, Flex, Heading, Link, Text } from '@radix-ui/themes'

export default function ContactPage() {
    return (
        <Container size="3" style={{ minHeight: 'calc(100vh - 64px)' }}>
            <Flex
                asChild
                align="center"
                justify="center"
                direction="column"
                gap={{ initial: '4', md: '7' }}
                py={{ initial: '9', md: '9' }}
            >
                <Box>
                    <Heading
                        weight="bold"
                        size={{ initial: '6', sm: '7', md: '8', lg: '9' }}
                        style={{ lineHeight: '1.1' }}
                    >
                        Woods Up e.V.
                    </Heading>
                    <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                        Wollestraße 54
                        <br />
                        14482 Potsdam
                    </Text>
                    Mail:{' '}
                    <Link
                        size={{ initial: '3', sm: '4', md: '5', lg: '6' }}
                        href="mailto:woodsup@posteo.de"
                    >
                        woodsup@posteo.de
                    </Link>
                </Box>
            </Flex>
        </Container>
    )
}
