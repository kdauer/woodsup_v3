'use client'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export const ColorModeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    if (!mounted) {
        return (
            <IconButton
                size="3"
                color="green"
                variant="soft"
                onClick={toggleTheme}
            >
                <MoonIcon height="16px" width="16px" color="black" />
            </IconButton>
        )
    }

    return (
        <IconButton size="3" color="green" variant="soft" onClick={toggleTheme}>
            {theme === 'light' ? (
                <MoonIcon height="16px" width="16px" color="black" />
            ) : (
                <SunIcon height="16px" width="16px" color="white" />
            )}
        </IconButton>
    )
}
