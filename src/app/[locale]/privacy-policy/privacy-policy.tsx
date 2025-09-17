'use client'
import { Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useTranslations } from 'next-intl'

export default function PrivacyPolicyPage() {
    const t = useTranslations('privacy-policy')

    return (
        <Flex
            px="2"
            justify="center"
            style={{ minHeight: 'calc(100vh - 64px)' }}
        >
            <Flex
                direction="column"
                gap={{ initial: '2', md: '4' }}
                py="9"
                style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                }}
            >
                <Heading as="h3" size="4">
                    {t('p_1')}
                </Heading>
                <Heading as="h3" size="4">
                    {t('h5_1')}
                </Heading>
                <Heading as="h3" size="4">
                    {t('h5_2')}
                </Heading>
                <Text> {t('p_2')}</Text>
                <Flex direction="column">
                    <Text>WoodsUp e.V.</Text>
                    <Text>Falko Drescher</Text>
                    <Text>Wollestraße 54</Text>
                    <Text>14482 Potsdam</Text>
                </Flex>
                <Text> {t('p_3')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_3')}
                </Heading>
                <Text> {t('p_4')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_4')}
                </Heading>
                <Text>
                    {t('p_5')}
                    <Link
                        rel="noopener noreferrer"
                        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_ListItemnks/anschriften_ListItemnks-node.html"
                        target="_blank"
                        style={{
                            wordBreak: 'break-all', // Allow long URLs to break
                        }}
                    >
                        https://www.bfdi.bund.de/DE/Infothek/Anschriften_ListItemnks/anschriften_ListItemnks-node.html
                    </Link>
                    .
                </Text>
                <Heading as="h3" size="4">
                    {t('h5_5')}
                </Heading>
                <Text>{t('p_6')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_6')}
                </Heading>
                <Text>{t('p_7')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_7')}
                </Heading>
                <Text>{t('p_8')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_8')}
                </Heading>
                <Text>{t('p_9')}</Text>
                <Text>{t('p_10')}</Text>
                <Text>{t('p_11')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_9')}
                </Heading>
                <Text>{t('p_12')}</Text>
                <Text>{t('p_13')}</Text>
                <Text>{t('p_14')}</Text>
                <Text>{t('p_15')}</Text>
                <Heading as="h3" size="4">
                    {t('h5_10')}
                </Heading>
                <Text>{t('p_16')}</Text>
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                    <li>{t('li_1')}</li>
                    <li>{t('li_2')}</li>
                    <li>{t('li_3')}</li>
                    <li>{t('li_4')}</li>
                    <li>{t('li_5')}</li>
                    <li>{t('li_6')}</li>
                    <li>{t('li_7')}</li>
                </ul>
            </Flex>
        </Flex>
    )
}
