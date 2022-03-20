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
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
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
      <Menu closeOnSelect>
        <Box bg={useColorModeValue('brand.50', 'brand.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <MenuButton
              as={IconButton}
              size={'md'}
              variant="outline"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              bg={useColorModeValue('brand.100', 'brand.700')}
            />
            {isOpen ? (
              <MenuList pb={4} display={{ md: 'none' }}>
                <NextLink href="/about" passHref>
                  <MenuItem
                    as={Link}
                    onClick={onClose}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                  >
                    {t('common:about')}
                  </MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem
                    as={Link}
                    onClick={onClose}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                  >
                    {t('common:projects')}
                  </MenuItem>
                </NextLink>
                <NextLink href="/support" passHref>
                  <MenuItem
                    as={Link}
                    onClick={onClose}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                  >
                    {t('common:support')}
                  </MenuItem>
                </NextLink>
                <NextLink href="/links" passHref>
                  <MenuItem
                    as={Link}
                    onClick={onClose}
                    fontSize={['sm', 'md', 'lg', 'xl']}
                  >
                    {t('common:motivation')}
                  </MenuItem>
                </NextLink>
              </MenuList>
            ) : null}
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
                        w="114px"
                      />
                    ) : (
                      <Image
                        src="/logo_dark.jpg"
                        alt="Logo"
                        borderRadius="base"
                        h="64px"
                        w="114px"
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
        </Box>
      </Menu>
    </>
  );
};

export default navBar;
