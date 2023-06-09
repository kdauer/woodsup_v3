import { Center, Container, Heading, Stack, VStack } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import React from 'react'
import nextI18NextConfig from '../../next-i18next.config.js'
import PolymorphicText from '../components/PolymorphicText'

const About = () => {
    const { t } = useTranslation('common')

    return (
        <VStack spacing={8} justify="center" h={['', '', '', '100vh']}>
            <Container maxW="container.xl">
                <Center>
                    <Heading
                        as="h1"
                        fontSize={['md', 'lg', '2xl', '4xl']}
                        mt="2em"
                        textAlign="center"
                    >
                        {t('heading')}
                    </Heading>
                </Center>
            </Container>
            <Container maxW="container.lg">
                <Stack spacing={3}>
                    <PolymorphicText textAlign="justify">
                        {t('aboutParagraphOne')}
                    </PolymorphicText>
                    <PolymorphicText textAlign="justify">
                        {t('aboutParagraphTwo')}
                    </PolymorphicText>
                    <PolymorphicText textAlign="justify">
                        {t('aboutParagraphThree')}
                    </PolymorphicText>
                </Stack>
            </Container>
        </VStack>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common'],
            nextI18NextConfig
        )),
    },
})
export default About
