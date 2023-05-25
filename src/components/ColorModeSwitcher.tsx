import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

const ColorModeSwitcher: FunctionComponent<{ children?: never }> = () => {
    const { colorMode, toggleColorMode } = useColorMode()

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
    )
}

export default ColorModeSwitcher
