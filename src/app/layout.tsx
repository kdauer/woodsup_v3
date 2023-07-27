import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Woods Up e.V.',
    description:
        'This is the website for Woods Up, a non-profit association working for climate and environmental protection',
    icons: {
        icon: '/icon.ico',
    },
}

export default async function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
