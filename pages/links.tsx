import {
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import links from '../data/links.json';
import nextI18nextConfig from '../next-i18next.config';

const linklist = links.links;

export default function Motivation() {
  const { t } = useTranslation('common');

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      bgImage={'url(/paul-gilmore-KT3WlrL_bsg-unsplash.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          {linklist.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              lineHeight={1.2}
              fontSize={['sm', 'md', 'lg', 'xl']}
              color="white"
              isExternal
            >
              {link.title}
            </Link>
          ))}
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
