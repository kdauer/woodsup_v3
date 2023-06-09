import { Box, Center, Link, Stack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react'
import nextI18nextConfig from '../../next-i18next.config'
import Paragraph from '../components/ParagraphText'
import PolymorphicHeading from '../components/PolymorphicHeading'

export default function Imprint() {
    const { t } = useTranslation('legalnotice')
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
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common', 'legalnotice'],
            nextI18nextConfig
        )),
    },
})
