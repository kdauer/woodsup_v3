import { Locale } from '../../../../i18n-config'
import ProjectsPage from './projects-page'
import { client } from '@/lib/sanity/client'
import { projectsQuery } from '@/lib/sanity/queries'

export default async function Page({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = await params

    // Fetch projects from Sanity
    const projects = await client.fetch(
        projectsQuery,
        { locale },
        { next: { revalidate: 60 } }
    )

    return <ProjectsPage projects={projects} path="/projects" />
}
