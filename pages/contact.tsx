import { Box, Heading, Container, Text, Stack, Link } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config';

export default function Contact() {
  const { t } = useTranslation('common');
  return (
    <Container maxW={'3xl'} h="100vh">
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={['md', 'lg', '2xl', '4xl']}
          lineHeight={'110%'}
        >
          Woods Up e.V.
        </Heading>
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Wollestraße 52
          <br />
          14482 Potsdam
        </Text>
        Mail:{' '}
        <Link
          fontSize={['sm', 'md', 'lg', 'xl']}
          color="brand.300"
          href="woodsup@posteo.de"
          isExternal
        >
          woodsup@posteo.de
        </Link>
      </Stack>
    </Container>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});
