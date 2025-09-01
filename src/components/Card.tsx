'use client'
import { Box, Card, Flex, Inset, Text } from '@radix-ui/themes'
import { Project } from 'app/[locale]/projects/projects-page'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export const CardComponent = ({ project }: { project: Project }) => {
    const { theme } = useTheme()
    return (
        <Flex>
            <Box m="3">
                <Card
                    size="2"
                    style={{
                        maxWidth: 300,
                        minHeight: 400,
                        backgroundColor:
                            theme === 'dark' ? '#1C4532' : '#F0FFF4',
                        color: theme === 'dark' ? 'white' : 'black',
                    }}
                    variant="classic"
                >
                    <Inset clip="padding-box" side="top" pb="current">
                        <Image
                            src={project.image}
                            alt={project.image}
                            height={300}
                            width={300}
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                width: '100%',
                                height: 300,
                                backgroundColor: 'green',
                            }}
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={project.image}
                        />
                    </Inset>
                    <Text as="p" size="3" align="center">
                        {project.title}
                    </Text>
                </Card>
            </Box>
        </Flex>
    )
}
