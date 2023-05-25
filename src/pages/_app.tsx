import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'

import nextI18NextConfig from '../../next-i18next.config'
import { customTheme } from '../../styles/theme'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

import '@fontsource/oswald/400.css'
import '@fontsource/public-sans/700.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={customTheme}>
            <>
                <NavBar {...pageProps} />
                <Component {...pageProps} />
                <Footer {...pageProps} />
                <Analytics />
            </>
        </ChakraProvider>
    )
}

export default appWithTranslation(MyApp, nextI18NextConfig)
