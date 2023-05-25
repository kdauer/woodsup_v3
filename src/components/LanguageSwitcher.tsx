import { Select, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { useCookies } from 'react-cookie'

export const LanguageSwitcher: FunctionComponent<{
    children?: React.ReactNode
}> = () => {
    const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
    const router = useRouter()
    const { pathname, asPath, query } = router

    const switchLanguage = (e) => {
        e.preventDefault()
        const selectedLocale = e.target.value
        router.push({ pathname, query }, asPath, {
            locale: selectedLocale,
        })
        if (cookie.NEXT_LOCALE !== selectedLocale) {
            setCookie('NEXT_LOCALE', selectedLocale, { path: '/' })
        }
    }

    return (
        <Select
            variant="outline"
            onChange={switchLanguage}
            defaultValue={router.locale}
            bg={useColorModeValue('brand.100', 'brand.700')}
            ml="0.5rem"
        >
            <option value="de">🇩🇪</option>
            <option value="en">🇬🇧</option>
            <option value="es">🇪🇸</option>
            <option value="fr">🇫🇷</option>
        </Select>
    )
}

export default LanguageSwitcher
