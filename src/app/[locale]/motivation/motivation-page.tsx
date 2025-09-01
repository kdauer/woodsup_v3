'use client'
import { Flex, Heading, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
export type Link = {
    id: string
    href: string
    title: string
}

// const linklist: Link[] = links.links

export default function MotivationPage() {
    const t = useTranslations('news')

    return (
        <Flex
            style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}
            justify="center"
        >
            <Flex
                direction="column"
                style={{ width: '100%' }}
                justify="center"
                m="0.5em"
                px={{ initial: '4', md: '8' }}
            >
                <Heading
                    weight="bold"
                    size={{ initial: '6', sm: '7', md: '8', lg: '9' }}
                    mb="6"
                >
                    {t('h4')}
                </Heading>
                <Text
                    size={{ initial: '3', sm: '4', md: '5', lg: '6' }}
                    style={{ textAlign: 'justify' }}
                >
                    {t('topic_1')}
                </Text>
                {/* <Stack
                    maxW="2xl"
                    mt={2}
                    align="center"
                    spacing={6}
                    backgroundColor={colorModeBgNav}
                    borderRadius="base"
                >
                    {linklist.map((link) => (
                        <Link
                            p={1}
                            textAlign="center"
                            key={link.id}
                            href={link.href}
                            lineHeight={1.2}
                            fontSize={['sm', 'md', 'lg', 'xl']}
                            color={colorModeColor}
                            isExternal
                        >
                            {link.title}
                        </Link>
                    ))}
                </Stack> */}
            </Flex>
        </Flex>
    )
}
