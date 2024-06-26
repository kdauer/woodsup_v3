import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { oswald, publicSans } from 'app/fonts'

const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

export const customTheme = extendTheme({
    config,
    colors: {
        brand: {
            900: '#1C4532',
            800: '#22543D',
            700: '#276749',
            600: '#2F855A',
            500: '#38A169',
            400: '#48BB78',
            300: '#68D391',
            200: '#9AE6B4',
            100: '#C6F6D5',
            50: '#F0FFF4',
        },
    },
    semanticTokens: {
        colors: {
            gradientHeading: {
                default: 'linear-gradient(90deg, #C6F6D5 0%, #22543D 100%)',
            },
            gradientButton: {
                default: 'linear-gradient(90deg, #68D391 0%, #276749 100%)',
            },
        },
    },
    fonts: {
        heading: publicSans.style.fontFamily,
        body: oswald.style.fontFamily,
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
    lineHeights: {
        normal: 'normal',
        none: 1,
        shorter: 1.25,
        short: 1.375,
        base: 1.5,
        tall: 1.625,
        taller: '2',
        '3': '.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.5rem',
    },
    letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
    },
})
