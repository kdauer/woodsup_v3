import { ReactNode } from 'react';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button
        onClick={toggleColorMode}
        bg={useColorModeValue('brand.100', 'brand.700')}
        _hover={{
          bg: useColorModeValue('brand.100', 'brand.700'),
        }}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
}
