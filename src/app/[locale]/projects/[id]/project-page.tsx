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
import { SanityImage } from 'components/SanityImage'
import { urlFor } from 'lib/sanity/image'
import { useState } from 'react'
import { SanityProject } from '../projects-page'

export default function ProjectPage({ project }: { project: SanityProject }) {
    const [imageLoaded, setImageLoaded] = useState(false)

    // Convert Sanity gallery images to legacy format for Carousel component
    const galleryImages =
        project.gallery
            ?.filter((img) => img)
            .map((img) => urlFor(img).width(800).height(600).url()) || []

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

                    <SanityImage
                        image={project.mainImage}
                        alt={project.title || ''}
                        width={800}
                        height={600}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 'var(--radius-3)',
                            opacity: imageLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
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

                {galleryImages.length > 0 && <Carousel props={galleryImages} />}

                {project.presslinks && project.presslinks.length > 0 && (
                    <Flex direction="column" gap="3" align="center">
                        <Heading size="4">Für Presseartikel</Heading>
                        <Flex direction="column" gap="2" align="center">
                            {project.presslinks.map((link, index) => (
                                <Link
                                    key={`${link.url}-${index}`}
                                    href={link.url}
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
                                    {link.title || `Presseartikel ${index + 1}`}
                                </Link>
                            ))}
                        </Flex>
                    </Flex>
                )}
            </Flex>
        </Container>
    )
}
