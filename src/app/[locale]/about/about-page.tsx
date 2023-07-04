'use client'
import { Center, Container, Heading, Stack, VStack } from '@chakra-ui/react'
import { useTranslations } from 'next-intl'
import PolymorphicText from '../../../components/PolymorphicText'

export default function AboutPage() {
    const t = useTranslations('common')

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
