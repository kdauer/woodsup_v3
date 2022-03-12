import {
  Box,
  Heading,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Link,
  Center,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../next-i18next.config';

const HeadingFive = ({ text }) => {
  return (
    <Heading fontSize={['md', 'lg', 'xl', '2xl']} as="h5">
      {text}
    </Heading>
  );
};

const Paragraph = ({ text }) => {
  return <Text fontSize={['sm', 'md', 'lg', 'xl']}>{text}</Text>;
};

export default function Protection() {
  const { t } = useTranslation('privacypolicy');
  return (
    <Center px="2">
      <Stack
        as={Box}
        spacing={{ base: 2, md: 4 }}
        py={{ base: 10, md: 20 }}
        w={'full'}
      >
        <Heading as="h5">{t('p_1')}</Heading>
        <HeadingFive text={t('h5_1')} />
        <HeadingFive text={t('h5_2')} />
        <Paragraph text={t('p_2')} />
        <Stack>
          <Text fontSize={['sm', 'md', 'lg', 'xl']} as="span">
            WoodsUp e.V.
          </Text>
          <Text fontSize={['sm', 'md', 'lg', 'xl']} as="span">
            Falko Drescher
          </Text>
          <Text fontSize={['sm', 'md', 'lg', 'xl']} as="span">
            Wollestraße 52
          </Text>
          <Text fontSize={['sm', 'md', 'lg', 'xl']} as="span">
            14482 Potsdam
          </Text>
        </Stack>
        <Paragraph text={t('p_3')} />
        <HeadingFive text={t('h5_3')} />
        <Paragraph text={t('p_4')} />
        <HeadingFive text={t('h5_4')} />
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
        <HeadingFive text={t('h5_5')} />
        <Paragraph text={t('p_6')} />
        <HeadingFive text={t('h5_6')} />
        <Paragraph text={t('p_7')} />
        <HeadingFive text={t('h5_7')} />
        <Paragraph text={t('p_8')} />
        <HeadingFive text={t('h5_8')} />
        <Paragraph text={t('p_9')} />
        <Paragraph text={t('p_10')} />
        <Paragraph text={t('p_11')} />
        <HeadingFive text={t('h5_9')} />
        <Paragraph text={t('p_12')} />
        <Paragraph text={t('p_13')} />
        <Paragraph text={t('p_14')} />
        <Paragraph text={t('p_15')} />
        <HeadingFive text={t('h5_10')} />
        <Paragraph text={t('p_16')} />
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
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common', 'privacypolicy'],
      nextI18nextConfig
    )),
  },
});
