import {
    Box,
    Center,
    Heading,
    Link,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import nextI18nextConfig from '../../next-i18next.config'
import Paragraph from '../components/ParagraphText'
import PolymorphicHeading from '../components/PolymorphicHeading'

const StackText = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text fontSize={['sm', 'md', 'lg', 'xl']} as="span">
            {children}
        </Text>
    )
}

export default function Protection() {
    const { t } = useTranslation('privacypolicy')
    return (
        <Center px="2">
            <Stack
                as={Box}
                spacing={{ base: 2, md: 4 }}
                py={{ base: 10, md: 20 }}
                w="full"
            >
                <PolymorphicHeading as="h5">{t('p_1')}</PolymorphicHeading>
                <PolymorphicHeading as="h5"> {t('h5_1')}</PolymorphicHeading>
                <PolymorphicHeading as="h5"> {t('h5_2')}</PolymorphicHeading>
                <Paragraph> {t('p_2')}</Paragraph>
                <Stack>
                    <StackText>WoodsUp e.V.</StackText>
                    <StackText>Falko Drescher</StackText>
                    <StackText>Wollestraße 54</StackText>
                    <StackText>14482 Potsdam</StackText>
                </Stack>
                <Paragraph> {t('p_3')}</Paragraph>
                <PolymorphicHeading as="h5"> {t('h5_3')}</PolymorphicHeading>
                <Paragraph> {t('p_4')}</Paragraph>
                <PolymorphicHeading as="h5"> {t('h5_4')}</PolymorphicHeading>
                <Text>
                    {t('p_5')}
                    <Link
                        rel="noopener noreferrer"
                        href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_ListItemnks/anschriften_ListItemnks-node.html"
                        target="_blank"
                    >
                        https://www.bfdi.bund.de/DE/Infothek/Anschriften_ListItemnks/anschriften_ListItemnks-node.html
                    </Link>
                    .
                </Text>
                <PolymorphicHeading as="h5">{t('h5_5')}</PolymorphicHeading>
                <Paragraph>{t('p_6')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_6')}</PolymorphicHeading>
                <Paragraph>{t('p_7')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_7')}</PolymorphicHeading>
                <Paragraph>{t('p_8')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_8')}</PolymorphicHeading>
                <Paragraph>{t('p_9')}</Paragraph>
                <Paragraph>{t('p_10')}</Paragraph>
                <Paragraph>{t('p_11')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_9')}</PolymorphicHeading>
                <Paragraph>{t('p_12')}</Paragraph>
                <Paragraph>{t('p_13')}</Paragraph>
                <Paragraph>{t('p_14')}</Paragraph>
                <Paragraph>{t('p_15')}</Paragraph>
                <PolymorphicHeading as="h5">{t('h5_10')}</PolymorphicHeading>
                <Paragraph>{t('p_16')}</Paragraph>
                <UnorderedList>
                    <ListItem>{t('li_1')}</ListItem>
                    <ListItem>{t('li_2')}</ListItem>
                    <ListItem>{t('li_3')}</ListItem>
                    <ListItem>{t('li_4')}</ListItem>
                    <ListItem>{t('li_5')}</ListItem>
                    <ListItem>{t('li_6')}</ListItem>
                    <ListItem>{t('li_7')}</ListItem>
                </UnorderedList>
            </Stack>
        </Center>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common', 'privacypolicy'],
            nextI18nextConfig
        )),
    },
})
