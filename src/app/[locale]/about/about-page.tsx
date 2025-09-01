'use client'
import { Flex, Heading, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'

export default function AboutPage() {
    const t = useTranslations('common')

    return (
        <Flex
            style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}
            justify="center"
        >
            <Flex
                direction="column"
                justify="center"
                gap={{ initial: '3', md: '4' }}
                py={{ initial: '8', md: '9' }}
                m="0.5em"
                style={{ textAlign: 'center', width: '100%' }}
            >
                <Heading
                    weight="bold"
                    size={{ initial: '6', sm: '7', md: '8', lg: '9' }}
                    mb="6"
                >
                    {t('heading')}
                </Heading>
                <Text
                    size={{ initial: '3', sm: '4', md: '5', lg: '6' }}
                    style={{ textAlign: 'justify' }}
                >
                    {t('aboutParagraphOne')}
                </Text>
                <Text
                    size={{ initial: '3', sm: '4', md: '5', lg: '6' }}
                    style={{ textAlign: 'justify' }}
                >
                    {t('aboutParagraphTwo')}
                </Text>
                <Text
                    size={{ initial: '3', sm: '4', md: '5', lg: '6' }}
                    style={{ textAlign: 'justify' }}
                >
                    {t('aboutParagraphThree')}
                </Text>
            </Flex>
        </Flex>
    )
}
