import {
  Flex,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../../next-i18next.config';

export default function Support() {
  const { t } = useTranslation('common');
  return (
    <Flex
      w={'full'}
      bgImage={'url(/paul-gilmore-KT3WlrL_bsg-unsplash.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        textAlign={'center'}
        w={'full'}
        align={'center'}
        spacing={{ base: 6, md: 8 }}
        py={{ base: 16, md: 26 }}
      >
        <Heading
          color="white"
          fontWeight={600}
          fontSize={['md', 'lg', '2xl', '4xl']}
        >
          {t('supportHeading')}
        </Heading>
        <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
          {t('supportParagraphOne')}
        </Text>
        <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
          {t('supportParagraphTwo')}
        </Text>
        <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
          {t('supportParagraphThree')}
        </Text>

        <Stack spacing={6} direction={'column'}>
          <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
            Woods Up e.V. <br />
            BIC: HOLVDEB1
            <br />
            IBAN: DE 68 1001 7997 8678 3814 89
          </Text>
          <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
            {t('supportContact')}{' '}
            <Link href="woodsup@posteo.de" color="#0d6efd">
              woodsup@posteo.de
            </Link>
          </Text>
        </Stack>
        <Image src="/QR-Code.png" alt="QR-Code" mt={{ base: 12, sm: 16 }} />
        <Button
          as="a"
          p="2em"
          target="_blank"
          borderRadius="full"
          href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=F4CTCSJDAN8DQ&source=url"
          bgColor="#0070ba"
        >
          {t('donate')}
        </Button>
        <Stack spacing={6} direction={'column'} p="2">
          <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
            {t('supportParagraphFour')}
          </Text>
          <Text color="white" maxW={'3xl'} fontSize={['sm', 'md', 'lg', 'xl']}>
            {t('supportParagraphFive')}
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
  },
});
