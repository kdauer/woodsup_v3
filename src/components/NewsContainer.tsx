'use client'
import {
    Box,
    Container,
    Heading,
    Image,
    Link,
    ListItem,
    Stack,
    Text,
    TypographyProps,
    UnorderedList,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
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
    const bulletPointItems = [1, 2, 3, 4, 5, 6, 7]

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
                <NewsText textAlignment="justify"> {t('tp_1')}</NewsText>
                <UnorderedList spacing={3}>
                    {bulletPointItems.map((item) => (
                        <ListItem key={item}>{t(`bp_${item}`)}</ListItem>
                    ))}
                </UnorderedList>
                <NewsText textAlignment="justify"> {t('tp_2')}</NewsText>
                <NewsText>
                    {' '}
                    {t('tp_3')}{' '}
                    <Link
                        fontSize={['sm', 'md', 'lg', 'xl']}
                        color="brand.300"
                        href="mailto:woodsup@posteo.de"
                        isExternal
                        textAlign="center"
                    >
                        ✉️
                    </Link>
                </NewsText>
                <Image src="./IMG_6099.jpeg" alt="tiny-forest-preview-image" />
            </Stack>
        </Container>
    )
}
