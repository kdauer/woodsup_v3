import { FunctionComponent } from 'react'
import {
    Box,
    Container,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'

const NewsText: FunctionComponent<{
    children: React.ReactNode
}> = ({ children }) => {
    return (
        <Text textAlign="center" fontSize={['xs', 'sm', 'md', 'lg']}>
            {children}
        </Text>
    )
}

const NewsContainer: FunctionComponent<{ children?: never }> = () => {
    const { t } = useTranslation('news')
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
                <NewsText>{t('p_1')}</NewsText>
                <NewsText>{t('p_2')}</NewsText> <NewsText>{t('p_3')}</NewsText>{' '}
                <NewsText>{t('p_4')}</NewsText> <NewsText>{t('p_5')}</NewsText>{' '}
                <NewsText>{t('p_6')}</NewsText> <NewsText>{t('p_7')}</NewsText>{' '}
                <NewsText>{t('p_8')}</NewsText>
                <NewsText>{t('p_8_1')}</NewsText>
                <NewsText>{t('p_8_2')}</NewsText>{' '}
                <NewsText>{t('p_9')}</NewsText> <NewsText>{t('p_10')}</NewsText>{' '}
                <NewsText>{t('p_11')}</NewsText>
                <NewsText>{t('p_12')}</NewsText>{' '}
                <NewsText>{t('p_13')}</NewsText>
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
            </Stack>
        </Container>
    )
}

export default NewsContainer
