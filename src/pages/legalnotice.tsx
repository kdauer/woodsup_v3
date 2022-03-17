import { Box, Heading, Text, Stack, Link, Center } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../../next-i18next.config';

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

export default function Imprint() {
  const { t } = useTranslation('legalnotice');
  return (
    <Center px="2">
      <Stack
        as={Box}
        spacing={{ base: 2, md: 4 }}
        py={{ base: 10, md: 20 }}
        w={'full'}
      >
        <Heading>Woods Up e.V.</Heading>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Wollestraße 52
          <br />
          14482 Potsdam
        </Text>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Vereinsregistereintrag:
          <br />
          Amtsgericht Potsdam
          <br />
          Registernummer: VR 9005 P
        </Text>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Vertretungsberechtigt:
          <br />
          Romy Schollbach
        </Text>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Umsatzsteueridentifikationsnummer:
          <br />
          Finanzamt Potsdam
          <br />
          046/143/07515
        </Text>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Kontakt: <Link href="woodsup@posteo.de">woodsup@posteo.de</Link>
        </Text>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Technische Umsetzung: Konstantin Dauer
        </Text>
        <br />
        <Heading>{t('h3')}</Heading>
        <HeadingFive text={t('h5_1')} />
        <Paragraph text={t('p_1')} />
        <HeadingFive text={t('h5_2')} />
        <Paragraph text={t('p_2')} />
        <HeadingFive text={t('h5_3')} />
        <Paragraph text={t('p_3')} />
        <HeadingFive text={t('h5_4')} />
        <Paragraph text={t('p_4')} />
      </Stack>
    </Center>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(
      locale,
      ['common', 'legalnotice'],
      nextI18nextConfig
    )),
  },
});
