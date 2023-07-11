'use client'
import { Box, Center, Link, Stack } from '@chakra-ui/react'
import { Paragraph } from 'components/ParagraphText'
import { PolymorphicHeading } from 'components/PolymorphicHeading'
import { useTranslations } from 'next-intl'

export default function LegalNoticePage() {
    const t = useTranslations('legal-notice')

    return (
        <Center px={2}>
            <Stack
                as={Box}
                spacing={{ base: 2, md: 4 }}
                py={{ base: 10, md: 20 }}
                w="full"
            >
                <PolymorphicHeading>Woods Up e.V.</PolymorphicHeading>
                <Paragraph>
                    Wollestraße 54
                    <br />
                    14482 Potsdam
                </Paragraph>
                <Paragraph>
                    Vereinsregistereintrag:
                    <br />
                    Amtsgericht Potsdam
                    <br />
                    Registernummer: VR 9005 P
                </Paragraph>
                <Paragraph>
                    Vertretungsberechtigt:
                    <br />
                    Romy Schollbach
                </Paragraph>
                <Paragraph>
                    Umsatzsteueridentifikationsnummer:
                    <br />
                    Finanzamt Potsdam
                    <br />
                    046/143/07515
                </Paragraph>
                <Paragraph>
                    Kontakt:{' '}
                    <Link href="mailto:woodsup@posteo.de">
                        woodsup@posteo.de
                    </Link>
                </Paragraph>
                <Paragraph>Technische Umsetzung: Konstantin Dauer</Paragraph>
                <br />
                <PolymorphicHeading>{t('h3')}</PolymorphicHeading>
                <PolymorphicHeading as="h5">{t('h5_1')}</PolymorphicHeading>
                <Paragraph>{t('p_1')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_2')}</PolymorphicHeading>
                <Paragraph>{t('p_2')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_3')}</PolymorphicHeading>
                <Paragraph>{t('p_3')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_4')}</PolymorphicHeading>
                <Paragraph>{t('p_4')}</Paragraph>
            </Stack>
        </Center>
    )
}
