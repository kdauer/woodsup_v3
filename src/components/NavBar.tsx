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
import NavLink from './NavLink';

const navBar: FunctionComponent<{ children?: never }> = () => {
  const { t } = useTranslation('common');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorMode = useColorModeValue('light', 'dark');
  return (
    <>
      <Box bg={useColorModeValue('brand.50', 'brand.900')} px={4}>
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
                  {colorMode === 'light' ? (
                    <Image
                      src="/logo_light.jpg"
                      alt="Logo"
                      borderRadius="base"
                      h="64px"
                      w="128px"
                    />
                  ) : (
                    <Image
                      src="/logo_dark.jpg"
                      alt="Logo"
                      borderRadius="base"
                      h="64px"
                      w="128px"
                    />
                  )}
                </Link>
              </NextLink>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink href="/about" content={t('common:about')} />
              <NavLink href="/projects" content={t('common:projects')} />
              <NavLink href="/support" content={t('common:support')} />
              <NavLink href="/links" content={t('common:motivation')} />
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
              <NavLink href="/about" content={t('common:about')} />
              <NavLink href="/projects" content={t('common:projects')} />
              <NavLink href="/support" content={t('common:support')} />
              <NavLink href="/links" content={t('common:motivation')} />
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default navBar;
