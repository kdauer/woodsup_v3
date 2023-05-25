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
import { useTranslation } from 'next-i18next'
import { FunctionComponent } from 'react'
import Carousel from './Carousel'

const NewsText: FunctionComponent<{
    children: React.ReactNode
    textAlignment?: TypographyProps['textAlign']
}> = ({ children, textAlignment = 'center' }) => {
    return (
        <Text textAlign={textAlignment} fontSize={['xs', 'sm', 'md', 'lg']}>
            {children}
        </Text>
    )
}

const NewsContainer: FunctionComponent<{ children?: never }> = () => {
    const { t } = useTranslation('news')
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
                {/* <Image
                    src="./IMG_5902.png"
                    borderRadius="0.375rem "
                    pb={4}
                    objectFit="cover"
                    alt="Iceland-Two"
                /> */}
                <NewsText textAlignment="justify">{t('topic_1')}</NewsText>
                {/* <Image
                    src="./IMG_5901.jpeg"
                    borderRadius="0.375rem "
                    pb={4}
                    objectFit="cover"
                    alt="Iceland-One"
                /> */}
                <NewsText>
                    Spende bei &nbsp;
                    <Link
                        as={Link}
                        fontSize={['sm', 'md', 'lg', 'xl']}
                        color="brand.500"
                        href="https://www.betterplace.org/de/projects/120679?utm_campaign=ShortURLs&utm_medium=project_120679&utm_source=PlainShortURL"
                        isExternal
                    >
                        betterplace.org
                    </Link>
                </NewsText>
                <Carousel props={images} />
                {/* <Image
                    src="./IMG_5903.png"
                    borderRadius="0.375rem "
                    pb={4}
                    objectFit="cover"
                    alt="Iceland-Three"
                /> */}
            </Stack>
        </Container>
    )
}

export default NewsContainer
