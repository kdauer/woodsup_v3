import { Oswald, Public_Sans } from 'next/font/google'

export const publicSans = Public_Sans({
    subsets: ['latin-ext'],
    variable: '--font-public_sans',
    weight: '700',
})
export const oswald = Oswald({
    subsets: ['latin-ext'],
    variable: '--font-oswald',
    weight: '400',
})
