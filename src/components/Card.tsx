'use client'
import { Box, Center, Image, useColorModeValue, VStack } from '@chakra-ui/react'
import { Project } from 'app/[locale]/projects/projects-page'

export const CardComponent = ({ project }: { project: Project }) => {
    return (
        <Center>
            <Box
                width={['90vw', null, '45vw', 300]}
                borderRadius="md"
                overflow="hidden"
                boxShadow="xl"
                rounded="md"
                mb={3}
                mx={3}
                bgColor={useColorModeValue('brand.500', 'brand.900')}
                color={useColorModeValue('black', 'white')}
            >
                <Image
                    src={project.image}
                    borderRadius="0.375rem 0.375rem 0 0"
                    height={300}
                    width="100%"
                    objectFit="cover"
                    alt={project.image}
                />

                <VStack m={1} align="flex-end">
                    <Box
                        h="4.25em"
                        textAlign="center"
                        bgColor={useColorModeValue('brand.500', 'brand.900')}
                        color={useColorModeValue('black', 'white')}
                        alignSelf="center"
                        justifySelf="center"
                    >
                        {project.title}
                    </Box>
                </VStack>
            </Box>
        </Center>
    )
}
