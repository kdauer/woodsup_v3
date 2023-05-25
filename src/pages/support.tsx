import {
    Button,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import nextI18nextConfig from '../../next-i18next.config'

const SupportText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text maxW="3xl" fontSize={['sm', 'md', 'lg', 'xl']}>
            {children}
        </Text>
    )
}

export default function Support() {
    const { t } = useTranslation('common')
    return (
        <Flex w="full">
            <VStack
                textAlign="center"
                w="full"
                align="center"
                spacing={{ base: 6, md: 8 }}
                py={{ base: 16, md: 26 }}
            >
                <Heading fontWeight={600} fontSize={['md', 'lg', '2xl', '4xl']}>
                    {t('supportHeading')}
                </Heading>
                <SupportText>{t('supportParagraphOne')}</SupportText>
                <SupportText>{t('supportParagraphTwo')}</SupportText>
                <SupportText>{t('supportParagraphThree')}</SupportText>

                <Stack spacing={6} direction="column">
                    <SupportText>
                        Woods Up e.V. <br />
                        BIC: HOLVDEB1
                        <br />
                        IBAN: DE 68 1001 7997 8678 3814 89
                    </SupportText>
                    <SupportText>
                        {t('supportContact')}{' '}
                        <Link
                            href={`mailto:woodsup@posteo.de`}
                            isExternal
                            color="#0d6efd"
                        >
                            woodsup@posteo.de
                        </Link>
                    </SupportText>
                </Stack>
                <Image
                    src="/QR-Code.png"
                    alt="QR-Code"
                    mt={{ base: 12, sm: 16 }}
                />
                <Button
                    as="a"
                    p="2em"
                    target="_blank"
                    borderRadius="full"
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
                    bgColor="#0070ba"
                    color="white"
                >
                    {t('donate')}
                </Button>
                <Stack spacing={6} direction="column" p={2}>
                    <SupportText>{t('supportParagraphFour')}</SupportText>
                    <SupportText>{t('supportParagraphFive')}</SupportText>
                </Stack>
            </VStack>
        </Flex>
    )
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common'],
            nextI18nextConfig
        )),
    },
})
