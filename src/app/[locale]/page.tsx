import { client } from 'lib/sanity/client'
import { hasNewsContentQuery } from 'lib/sanity/queries'
import HomePage from './home-page'

export default async function Home() {
    const hasNews = await client.fetch(
        hasNewsContentQuery,
        {},
        { next: { revalidate: 60 } },
    )
    return <HomePage hasNews={hasNews} />
}
