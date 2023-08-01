'use client'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react'

export const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const colorModeBg = useColorModeValue('brand.100', 'brand.700')

    return (
        <>
            <Button
                onClick={toggleColorMode}
                bg={colorModeBg}
                _hover={{
                    bg: colorModeBg,
                }}
            >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
        </>
    )
}
