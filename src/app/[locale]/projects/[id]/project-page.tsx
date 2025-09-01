'use client'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import {
    Box,
    Container,
    Flex,
    Heading,
    Link,
    Skeleton,
    Text,
} from '@radix-ui/themes'
import { Carousel } from 'components/Carousel'
import Error from 'next/error'
import Image from 'next/image'
import { useState } from 'react'
import { Project } from '../projects-page'

export default function ProjectPage({
    projects,
    params: { id },
}: {
    projects: Project[]
    params: {
        id: string
    }
}) {
    const [imageLoaded, setImageLoaded] = useState(false)

    const project = projects.find((project) => {
        return project.id === Number(id)
    })

    if (project === undefined) {
        return <Error statusCode={404} />
    }

    return (
        <Container size="4">
            <Flex
                direction="column"
                align="center"
                gap={{ initial: '4', md: '5' }}
                py={{ initial: '6', md: '7' }}
                className="text-center"
            >
                <Heading>{project.title}</Heading>

                <Box
                    style={{
                        width: '100%',
                        maxWidth: '800px',
                        position: 'relative',
                    }}
                >
                    {!imageLoaded && (
                        <Skeleton
                            style={{
                                width: '100%',
                                height: '400px',
                                borderRadius: 'var(--radius-3)',
                            }}
                        />
                    )}

                    <Image
                        src={project.image}
                        alt={project.title || project.image}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 'var(--radius-3)',
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                        onLoad={() => setImageLoaded(true)}
                    />
                </Box>

                <Text
                    className="text-justify"
                    size={{ initial: '2', sm: '3', md: '4', lg: '5' }}
                    style={{
                        maxWidth: '100%',
                        lineHeight: '1.6',
                    }}
                >
                    {project.content}
                </Text>

                {project.video && (
                    <Box
                        style={{
                            width: '100%',
                            maxWidth: '800px',
                        }}
                    >
                        <AspectRatio.Root ratio={16 / 9}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={project.video}
                                title="YouTube video player"
                                allowFullScreen
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                style={{
                                    borderRadius: 'var(--radius-3)',
                                }}
                            />
                        </AspectRatio.Root>
                    </Box>
                )}

                {project.gallery.length > 0 && (
                    <Carousel props={project.gallery} />
                )}

                {project.presslinks.length > 0 && (
                    <Flex direction="column" gap="3" align="center">
                        <Heading size="4">Für Presseartikel</Heading>
                        <Flex direction="column" gap="2" align="center">
                            {project.presslinks.map((link, index) => (
                                <Link
                                    key={`${link}-${index}`}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size={{
                                        initial: '2',
                                        sm: '3',
                                        md: '4',
                                    }}
                                    style={{
                                        wordBreak: 'break-all', // Handle long URLs
                                    }}
                                >
                                    Presseartikel {index + 1}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Container>
    )
}
