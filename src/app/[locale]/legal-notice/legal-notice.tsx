'use client'
import { Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'

export default function LegalNoticePage() {
    const t = useTranslations('legal-notice')

    return (
        <Flex
            px="2"
            justify="center"
            style={{ minHeight: 'calc(100vh - 64px)' }}
        >
            <Flex direction="column" gap={{ initial: '2', md: '4' }} py="9">
                <Heading>Woods Up e.V.</Heading>
                <Text>
                    Wollestraße 54
                    <br />
                    14482 Potsdam
                </Text>
                <Text>
                    Vereinsregistereintrag:
                    <br />
                    Amtsgericht Potsdam
                    <br />
                    Registernummer: VR 9005 P
                </Text>
                <Text>
                    Vertretungsberechtigt:
                    <br />
                    Romy Schollbach
                </Text>
                <Text>
                    Umsatzsteueridentifikationsnummer:
                    <br />
                    Finanzamt Potsdam
                    <br />
                    046/143/07515
                </Text>
                <Text>
                    Kontakt:{' '}
                    <Link href="mailto:woodsup@posteo.de">
                        woodsup@posteo.de
                    </Link>
                </Text>
                <Text>Technische Umsetzung: Konstantin Dauer</Text>
                <br />
                <Heading>{t('h3')}</Heading>
                <Heading as="h3" size="4">
                    {t('h5_1')}
                </Heading>
                <Text>{t('p_1')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_2')}
                </Heading>
                <Text>{t('p_2')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_3')}
                </Heading>
                <Text>{t('p_3')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_4')}
                </Heading>
                <Text>{t('p_4')}</Text>
            </Flex>
        </Flex>
    )
}
