'use client'
import {
    Box,
    Container,
    Heading,
    Image,
    Stack,
    Text,
    TypographyProps,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

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
                <NewsText> {t('h3')}</NewsText>
                <Image src="./IMG_6099.jpeg" alt="tiny-forest-preview-image" />
            </Stack>
        </Container>
    )
}
