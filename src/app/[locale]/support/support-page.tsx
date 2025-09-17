'use client'
import { Button, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function SupportPage() {
    const t = useTranslations('common')

    return (
        <Flex
            style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}
            justify="center"
        >
            <Flex
                direction="column"
                align="center"
                gap={{ initial: '3', md: '4' }}
                py={{ initial: '8', md: '9' }}
                style={{ textAlign: 'center' }}
            >
                <Heading
                    weight="bold"
                    size={{ initial: '6', sm: '7', md: '8', lg: '9' }}
                >
                    {t('supportHeading')}
                </Heading>
                <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                    {t('supportParagraphOne')}
                </Text>
                <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                    {t('supportParagraphTwo')}
                </Text>
                <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                    {t('supportParagraphThree')}
                </Text>

                <Flex direction="column" gap="3">
                    <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                        Woods Up e.V. <br />
                        BIC: HOLVDEB1
                        <br />
                        IBAN: DE 68 1001 7997 8678 3814 89
                    </Text>
                    <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                        {t('contact')}{' '}
                        <Link
                            href={`mailto:woodsup@posteo.de`}
                            color="blue"
                        >
                            woodsup@posteo.de
                        </Link>
                    </Text>
                </Flex>
                <Image
                    src="/QR-Code.png"
                    alt="QR-Code"
                    width={200}
                    height={200}
                    style={{ marginTop: '2rem' }}
                />
                <Button
                    asChild
                    size="4"
                    radius="full"
                    style={{ backgroundColor: '#0070ba', color: 'white' }}
                >
                    <a
                        href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t('donate')}
                    </a>
                </Button>
                <Flex direction="column" gap="3" p="2">
                    <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                        {t('supportParagraphFour')}
                    </Text>
                    <Text size={{ initial: '3', sm: '4', md: '5', lg: '6' }}>
                        {t('supportParagraphFive')}
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
