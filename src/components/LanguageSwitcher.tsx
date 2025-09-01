'use client'

import { Select } from '@radix-ui/themes'
import { usePathname } from 'i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useCookies } from 'react-cookie'

export const LanguageSwitcher = () => {
    const t = useTranslations('common')
    const [cookie, setCookie] = useCookies(['NEXT_LOCALE'])
    const [isPending, startTransition] = useTransition()
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const switchLanguage = (selectedLocale: string) => {
        startTransition(() => {
            router.replace(`/${selectedLocale}${pathname}`)
        })
        if (cookie.NEXT_LOCALE !== selectedLocale) {
            setCookie('NEXT_LOCALE', selectedLocale, { path: '/' })
        }
    }

    return (
        <Select.Root
            defaultValue={locale}
            onValueChange={switchLanguage}
            disabled={isPending}
            size='3'
        >
            <Select.Trigger variant="soft" />
            <Select.Content highContrast>
                <Select.Item value="de">🇩🇪</Select.Item>
                <Select.Item value="en">🇬🇧</Select.Item>
                <Select.Item value="es">🇪🇸</Select.Item>
                <Select.Item value="fr">🇫🇷</Select.Item>
            </Select.Content>
        </Select.Root>
    )
}
