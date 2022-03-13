import { useTranslation } from 'next-i18next';
import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  Menu,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import ColorModeSwitcher from './ColorModeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { FunctionComponent } from 'react';

const navBar: FunctionComponent<{ children?: never }> = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('white', 'brand.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            bg={useColorModeValue('brand.100', 'brand.700')}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <NextLink href="/" passHref>
                <Link>
                  <Image
                    src="/IMG_2825.JPG"
                    alt="Logo"
                    borderRadius="base"
                    h="64px"
                    w="128px"
                  />
                </Link>
              </NextLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NextLink href="/about" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:about')}
                </Link>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:projects')}
                </Link>
              </NextLink>
              <NextLink href="/support" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:support')}
                </Link>
              </NextLink>
              <NextLink href="/links" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:motivation')}
                </Link>
              </NextLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <ColorModeSwitcher />
            <Menu>
              <LanguageSwitcher />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <NextLink href="/about" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                  href="/about"
                >
                  {t('common:about')}
                </Link>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:projects')}
                </Link>
              </NextLink>
              <NextLink href="/support" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:support')}
                </Link>
              </NextLink>
              <NextLink href="/links" passHref>
                <Link
                  fontSize={['sm', 'md', 'lg', 'xl']}
                  px={2}
                  py={1}
                  rounded={'md'}
                  color={useColorModeValue('brand.400', 'white')}
                  _hover={{
                    textDecoration: 'none',
                    color: useColorModeValue('white', 'brand.900'),
                    bg: useColorModeValue('brand.400', 'white'),
                  }}
                >
                  {t('common:motivation')}
                </Link>
              </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default navBar;
