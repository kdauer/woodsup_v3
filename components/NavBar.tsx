import { useTranslation } from 'next-i18next';

import {
  Box,
  Flex,
  Image,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ColorModeSwitcher from './ColorModeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

export default function navBar() {
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
              <Link href="/">
                <Image
                  src="/IMG_2825.JPG"
                  alt="Logo"
                  borderRadius="base"
                  h="64px"
                  w="128px"
                />
              </Link>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
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
                href="/projects"
              >
                {t('common:projects')}
              </Link>
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
                href="/support"
              >
                {t('common:support')}
              </Link>
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
                href="/links"
              >
                {t('common:motivation')}
              </Link>
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
                href="/projects"
              >
                {t('common:projects')}
              </Link>
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
                href="/support"
              >
                {t('common:support')}
              </Link>
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
                href="/links"
              >
                {t('common:motivation')}
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
