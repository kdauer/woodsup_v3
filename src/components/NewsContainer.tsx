'use client'
import {
    Box,
    Container,
    Heading,
    Link,
    Stack,
    Text,
    TypographyProps,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
import { Carousel } from './Carousel'

const NewsText = ({
    children,
    textAlignment = 'center',
}: {
    children: React.ReactNode
    textAlignment?: TypographyProps['textAlign']
}) => {
    return (
        <Text textAlign={textAlignment} fontSize={['xs', 'sm', 'md', 'lg']}>
            {children}
        </Text>
    )
}

// Move somewhere logical, to theme maybe?
// const { toggleColorMode } = useColorMode()

// const colorModeBg = useColorModeValue('white', 'brand.900')
// const colorModeColor = useColorModeValue('black', 'white')

export const NewsContainer = () => {
    const t = useTranslations('news')
    const images = [
        '/images/island_23/IMG_5902.png',
        '/images/island_23/IMG_5901.jpeg',
        '/images/island_23/IMG_5903.png',
    ]
    return (
        <Container
            maxW="3xl"
            bg={useColorModeValue('white', 'brand.900')}
            color={useColorModeValue('black', 'white')}
            opacity="80%"
            borderRadius="xl"
            m="2em"
        >
            <Stack
                as={Box}
                spacing={{ base: 2, md: 4 }}
                p={2}
                bg={useColorModeValue('white', 'brand.900')}
                color={useColorModeValue('black', 'white')}
            >
                <Heading textAlign="center" as="h2">
                    {t('h2')}
                </Heading>
                <Heading textAlign="center" as="h5">
                    {t('h3')}
                </Heading>
                <NewsText textAlignment="justify">{t('topic_1')}</NewsText>
                <NewsText>
                    Spende bei &nbsp;
                    <Link
                        href="https://www.betterplace.org/de/projects/120679?utm_campaign=ShortURLs&utm_medium=project_120679&utm_source=PlainShortURL"
                        as={NextLink}
                        fontSize={['sm', 'md', 'lg', 'xl']}
                        color="brand.500"
                        isExternal
                    >
                        <Link
                            fontSize={['sm', 'md', 'lg', 'xl']}
                            color="brand.500"
                            isExternal
                        >
                            betterplace.org
                        </Link>
                    </NextLink>
                </NewsText>
                <Carousel props={images} />
            </Stack>
        </Container>
    )
}
