'use client'
import {
    AspectRatio,
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import { Carousel } from 'components/Carousel'
import Error from 'next/error'
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
    const project = projects.find((project) => {
        return project.id === Number(id)
    })

    if (project === undefined) {
        return <Error statusCode={404} />
    }

    return (
        <Container maxW="4xl">
            <Stack
                textAlign="center"
                align="center"
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
            >
                <Heading>{project.title}</Heading>
                <Image src={project.image} alt={project.image} />
                <Text textAlign="justify" fontSize={['sm', 'md', 'lg', 'xl']}>
                    {project.content}
                </Text>
                {project.video ? (
                    <Stack>
                        <AspectRatio
                            maxW="560px"
                            minW={['320px', '400px', '400px', '560px']}
                            ratio={16 / 9}
                        >
                            <iframe
                                width={560}
                                height={315}
                                src={project.video}
                                title="YouTube video player"
                                allowFullScreen
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </AspectRatio>
                    </Stack>
                ) : (
                    <Stack></Stack>
                )}
                {project.gallery.length > 0 ? (
                    <Carousel props={project.gallery} />
                ) : (
                    <Box />
                )}
                <Stack spacing={6}>
                    {project.presslinks.length > 0 ? (
                        <UnorderedList>
                            <Heading>Für Presseartikel</Heading>
                            {project.presslinks.map((link) => (
                                <ListItem listStyleType="none" key={link}>
                                    <Link
                                        href={link}
                                        isExternal
                                        fontSize={['sm', 'md', 'lg', 'xl']}
                                    >
                                        hier entlang
                                    </Link>
                                </ListItem>
                            ))}
                        </UnorderedList>
                    ) : (
                        <Text></Text>
                    )}
                </Stack>
                <Flex w="full"></Flex>
            </Stack>
        </Container>
    )
}
