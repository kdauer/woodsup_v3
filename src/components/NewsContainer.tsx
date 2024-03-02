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
import { PolymorphicHeading } from './PolymorphicHeading'

export const NewsText = ({
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

export const NewsContainer = () => {
    const t = useTranslations('news')
    const colorModeColor = useColorModeValue('black', 'white')
    const colorModeBgContainer = useColorModeValue('white', 'brand.900')
    const imageItems = ['./IMG_4810.jpeg', './IMG_168EC.jpeg']

    return (
        <Container
            maxW="3xl"
            bg={colorModeBgContainer}
            color={colorModeColor}
            // opacity="80%"  -> Will be reimplemented when more news are added in the future
            borderRadius="xl"
            m="2em"
        >
            <Stack
                as={Box}
                spacing={{ base: 2, md: 4 }}
                p={2}
                pb={8}
                bg={colorModeBgContainer}
                color={colorModeColor}
            >
                <Heading textAlign="center" as="h2">
                    {t('h2')}
                </Heading>
                <PolymorphicHeading textAlign="center" as="h5">
                    {t('h3')}
                </PolymorphicHeading>
                <NewsText textAlignment="justify"> {t('topic_1')}</NewsText>
                <PolymorphicHeading textAlign="center" as="h5">
                    {t('h4')}
                </PolymorphicHeading>
                <NewsText textAlignment="justify"> {t('topic_2')}</NewsText>
                <NewsText>
                    <Link
                        href="https://www.betterplace.org/de/projects/133638?utm_campaign=ShortURLs&utm_medium=project_133638&utm_source=PlainShortURL"
                        as={NextLink}
                        fontSize={['sm', 'md', 'lg', 'xl']}
                        color="brand.300"
                        isExternal
                    >
                        {t('topic_3')}
                    </Link>
                </NewsText>
                <Carousel props={imageItems} />
            </Stack>
        </Container>
    )
}
