import { client } from 'lib/sanity/client'
import { projectsQuery } from 'lib/sanity/queries'
import { Locale } from '../../../../i18n-config'
import ProjectsPage from './projects-page'

export default async function Page({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = await params

    const projects = await client.fetch(
        projectsQuery,
        { locale },
        { next: { revalidate: 60 } },
    )

    return <ProjectsPage projects={projects} path="/projects" />
}
