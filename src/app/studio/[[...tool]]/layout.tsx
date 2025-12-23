export const metadata = {
    title: 'Woods Up Studio',
    description: 'Content management for Woods Up',
}

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body style={{ margin: 0 }}>{children}</body>
        </html>
    )
}
