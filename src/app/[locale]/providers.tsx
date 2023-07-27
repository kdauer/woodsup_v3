'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { customTheme } from '../../../styles/theme'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider theme={customTheme}>
                <ColorModeScript
                    initialColorMode={customTheme.config.initialColorMode}
                />
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}
