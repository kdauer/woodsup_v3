import { Center, Container, Heading, Stack, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import TextComponent from '../components/TextComponent';
import nextI18NextConfig from '../../next-i18next.config.js';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <VStack
      bgImage={'url(/paul-gilmore-KT3WlrL_bsg-unsplash.jpg)'}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgAttachment="fixed"
      spacing={8}
      justify="center"
      h={['', '', '', '100vh']}
    >
      <Container maxW="container.xl">
        <Center>
          <Heading
            as="h1"
            fontSize={['md', 'lg', '2xl', '4xl']}
            color="white"
            mt="2em"
            textAlign={'center'}
          >
            {t('heading')}
          </Heading>
        </Center>
      </Container>
      <Container maxW="container.lg">
        <Stack spacing={3}>
          <TextComponent text={t('aboutParagraphOne')} />
          <TextComponent text={t('aboutParagraphTwo')} />
          <TextComponent text={t('aboutParagraphThree')} />
        </Stack>
      </Container>
    </VStack>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
  },
});
export default About;
