import { Box, Center, Image, useColorModeValue, VStack } from '@chakra-ui/react'
import React, { FunctionComponent } from 'react'

const CardComponent: FunctionComponent<{
    project: any
    children?: React.ReactNode
}> = ({ project, children }) => {
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

export default CardComponent
