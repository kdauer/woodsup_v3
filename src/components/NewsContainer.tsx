'use client'
import { Container, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { ReactNode, useEffect, useState } from 'react'

export const NewsText = ({
    children,
    textAlignment = 'center',
}: {
    children: ReactNode
    textAlignment?:
        | 'left'
        | 'center'
        | 'right'
        | {
              initial?: 'left' | 'center' | 'right'
              sm?: 'left' | 'center' | 'right'
              md?: 'left' | 'center' | 'right'
          }
}) => {
    return (
        <Text
            size={{ initial: '1', sm: '2', md: '3', lg: '4' }}
            align={textAlignment}
        >
            {children}
        </Text>
    )
}

const PolymorphicHeading = ({
    children,
    textAlign,
    as,
}: {
    children: ReactNode
    textAlign?: 'left' | 'center' | 'right'
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) => {
    return (
        <Heading
            as={as}
            align={textAlign}
            size={
                as === 'h2'
                    ? { initial: '5', md: '6' }
                    : { initial: '3', md: '4' }
            }
        >
            {children}
        </Heading>
    )
}

export const NewsContainer = () => {
    const t = useTranslations('news')
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const isDark = mounted && resolvedTheme === 'dark'

    return (
        <Container
            size="3"
            style={{
                backgroundColor: isDark ? '#1C4532' : 'white',
                color: isDark ? 'white' : 'black',
                borderRadius: 'var(--radius-4)',
                margin: '2em',
            }}
        >
            <Flex
                direction="column"
                gap={{ initial: '2', md: '4' }}
                p="4"
                pb="8"
            >
                <Heading align="center" size={{ initial: '5', md: '6' }}>
                    {t('h2')}
                </Heading>

                <PolymorphicHeading textAlign="center" as="h5">
                    {t('h3')}
                </PolymorphicHeading>

                <NewsText textAlignment="center">{t('topic_1')}</NewsText>

                <PolymorphicHeading textAlign="center" as="h5">
                    {t('h4')}
                </PolymorphicHeading>

                <NewsText textAlignment="center">{t('topic_2')}</NewsText>

                <NewsText>
                    <Link
                        href="https://www.betterplace.org/de/projects/133638?utm_campaign=ShortURLs&utm_medium=project_133638&utm_source=PlainShortURL"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={{ initial: '2', sm: '3', md: '4', lg: '5' }}
                        style={{
                            color: isDark ? '#90EE90' : '#006400',
                            fontWeight: 'bold',
                        }}
                    >
                        Unterstützte uns mit deiner Spende
                    </Link>
                </NewsText>
            </Flex>
        </Container>
    )
}
