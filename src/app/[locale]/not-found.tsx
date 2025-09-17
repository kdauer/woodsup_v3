'use client'

import { Box, Button, Flex, Heading, Text } from '@radix-ui/themes'
import { Link } from 'i18n/navigation'

export default function NotFound() {
    return (
        <Flex align="center" justify="center" height="100vh" width="100%">
            <Box py="9" px="6" style={{ textAlign: 'center' }}>
                <Heading
                    as="h2"
                    size={{
                        initial: '6',
                        sm: '7',
                        md: '8',
                        lg: '9',
                    }}
                    style={{
                        background:
                            'linear-gradient(to right, var(--blue-9), var(--violet-9))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                    }}
                >
                    404
                </Heading>
                <Text as="p" mt="3" mb="2">
                    Page Not Found
                </Text>
                <Text
                    as="p"
                    size={{
                        initial: '1',
                        sm: '2',
                        md: '3',
                        lg: '4',
                    }}
                    color="gray"
                    mb="6"
                >
                    The page you're looking for does not seem to exist
                </Text>
                <Link href="/">
                    <Button
                        size={{
                            initial: '1',
                            sm: '2',
                            md: '3',
                            lg: '3',
                        }}
                        style={{
                            background:
                                'linear-gradient(to right, var(--blue-9), var(--violet-9))',
                            fontFamily: 'var(--font-body)',
                        }}
                    >
                        Take me to the home page
                    </Button>
                </Link>
            </Box>
        </Flex>
    )
}
