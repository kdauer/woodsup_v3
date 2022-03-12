import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Link,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { ReactNode } from 'react';
import { useTranslation } from 'next-i18next';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('brand.100', 'brand.700')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      target="_blank"
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('brand.100', 'brand.700'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box
      bg={useColorModeValue('white', 'brand.900')}
      color={useColorModeValue('brand.400', 'white')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
          Copyright © 2022 Woods Up e.V. All rights reserved
        </Text>
        <Link href="/privacypolicy" fontSize={['sm', 'md', 'lg', 'xl']}>
          {t('privacypolicy')}
        </Link>
        <Link href="/legalnotice" fontSize={['sm', 'md', 'lg', 'xl']}>
          {t('legalnotice')}
        </Link>
        <Link href="/contact" fontSize={['sm', 'md', 'lg', 'xl']}>
          {t('contact')}
        </Link>
        <Stack direction={'row'} spacing={6}>
          <SocialButton
            label={'Instagram'}
            href={'https://www.instagram.com/woods.up.potsdam/'}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
