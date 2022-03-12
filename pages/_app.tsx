import '@fontsource/oswald/400.css';
import '@fontsource/public-sans/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../styles/theme';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={customTheme}>
      <>
        <NavBar {...pageProps} />
        <Component {...pageProps} />
        <Footer {...pageProps} />
      </>
    </ChakraProvider>
  );
};

export default appWithTranslation(MyApp, nextI18NextConfig);
