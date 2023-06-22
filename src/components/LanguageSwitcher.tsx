'use client'

import { Select, useColorModeValue } from '@chakra-ui/react'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next-intl/client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'
import { useCookies } from 'react-cookie'

export default function LanguageSwitcher() {
    const t = useTranslations('common')
    const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
    const [isPending, startTransition] = useTransition()
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const switchLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        const selectedLocale = event.target.value
        startTransition(() => {
            router.replace(`/${event.target.value}${pathname}`)
        })
        if (cookie.NEXT_LOCALE !== selectedLocale) {
            setCookie('NEXT_LOCALE', selectedLocale, { path: '/' })
        }
    }

    return (
        <Select
            variant="outline"
            onChange={switchLanguage}
            defaultValue={locale}
            bg={useColorModeValue('brand.100', 'brand.700')}
            ml="0.5rem"
            disabled={isPending}
        >
            {/* {i18n.locales.map((localeValue) => {
                return (
                    <option key={localeValue} value={localeValue}>
                        {t('change-locale')}
                    </option>
                )
            })} */}
            <option value="de">🇩🇪</option>
            <option value="en">🇬🇧</option>
            <option value="es">🇪🇸</option>
            <option value="fr">🇫🇷</option>
        </Select>
    )
}
