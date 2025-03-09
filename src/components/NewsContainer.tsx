'use client'
import {
    Box,
    Container,
    Heading,
    Image,
    Link,
    Spacer,
    Stack,
    Text,
    TypographyProps,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import NextLink from 'next/link'
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
                <NewsText textAlignment="justify"> {t('topic_2')}</NewsText>
                <NewsText textAlignment={'justify'}>{t('topic_3')}</NewsText>
                <NewsText textAlignment={'justify'}>{t('topic_4')}</NewsText>
                <NewsText>28.03.2025 @ Bungalow der Herzen</NewsText>
                <NewsText>Doors: 18 Uhr</NewsText>
                <NewsText>Film: 19 Uhr</NewsText>
                <NewsText>Musik: 21 Uhr</NewsText>
                <Spacer />

                <NewsText>Bis 21 Uhr bitte draußen rauchen.</NewsText>
                <NewsText>
                    <Link
                        href="https://www.betterplace.org/de/projects/147911?utm_campaign=user_share&utm_medium=ppp_stats&utm_source=Link&utm_content=bp"
                        as={NextLink}
                        fontSize={['sm', 'md', 'lg', 'xl']}
                        color="brand.300"
                        isExternal
                    >
                        Unterstützte uns mit deiner Spende
                    </Link>
                </NewsText>
                <Image src="./images/soli_party.jpeg" alt="Soli Party" />
                {/* <Carousel props={imageItems} /> */}
            </Stack>
        </Container>
    )
}
