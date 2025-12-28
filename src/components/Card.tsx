'use client'
import { Box, Card, Flex, Inset, Skeleton, Text } from '@radix-ui/themes'
import { SanityProject } from 'app/[locale]/projects/projects-page'
import { SanityImage } from 'components/SanityImage'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const CardComponent = ({ project }: { project: SanityProject }) => {
    const { theme } = useTheme()
    const [imageLoaded, setImageLoaded] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isLight = mounted ? theme === 'light' : true // Default to light theme

    return (
        <Flex>
            <Box m="3">
                <Card
                    size="2"
                    style={{
                        maxWidth: 300,
                        minHeight: 400,
                        backgroundColor: mounted
                            ? isLight
                                ? '#F0FFF4'
                                : '#1C4532'
                            : 'transparent',
                        color: mounted
                            ? isLight
                                ? 'black'
                                : 'white'
                            : 'transparent',
                    }}
                    variant="classic"
                >
                    <Inset clip="padding-box" side="top" pb="current">
                        {!imageLoaded && (
                            <Skeleton
                                style={{
                                    width: '100%',
                                    height: '300px',
                                    borderRadius: 'var(--radius-3)',
                                }}
                            />
                        )}
                        {project.mainImage && (
                            <SanityImage
                                image={project.mainImage}
                                alt={project.title || ''}
                                width={300}
                                height={300}
                                style={{
                                    display: 'block',
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: 300,
                                }}
                                onLoad={() => setImageLoaded(true)}
                            />
                        )}
                    </Inset>
                    <Text as="p" size="3" align="center">
                        {project.title}
                    </Text>
                </Card>
            </Box>
        </Flex>
    )
}
