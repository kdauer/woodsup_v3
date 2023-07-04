'use client'

import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

// This page renders when a route is requested that doesn't match the
// middleware and therefore doesn't have a locale associated with it.

export default function NotFound() {
    return (
        <html lang="en">
            <body>
                <Flex align="center" justify="center" h="100vh" w="full">
                    <Box textAlign="center" py={10} px={6}>
                        <Heading
                            display="inline-block"
                            as="h2"
                            size={['lg', 'xl', '2xl', '3xl']}
                            bgGradient="linear(to-r, brand.100, brand.800)"
                            backgroundClip="text"
                        >
                            404
                        </Heading>
                        <Text mt={3} mb={2}>
                            Page Not Found
                        </Text>
                        <Text
                            fontSize={['xs', 'sm', 'md', 'lg']}
                            color="gray.500"
                            mb={6}
                        >
                            The page you're looking for does not seem to exist
                        </Text>
                        <NextLink href="/">
                            <Button
                                size={['sm', 'md', 'lg', 'lg']}
                                color="white"
                                bgGradient="linear(to-t, brand.300, brand.700)"
                                fontFamily="body"
                                _hover={{
                                    background: 'black',
                                    color: 'brand.500',
                                }}
                            >
                                Take me to the home page
                            </Button>
                        </NextLink>
                    </Box>
                </Flex>
            </body>
        </html>
    )
}
