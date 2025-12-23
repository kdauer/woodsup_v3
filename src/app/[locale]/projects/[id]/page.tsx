import { client } from 'lib/sanity/client'
import { projectByIdQuery } from 'lib/sanity/queries'
import { notFound } from 'next/navigation'
import { Locale } from '../../../../../i18n-config'
import { SanityProject } from '../projects-page'
import ProjectPage from './project-page'

export async function generateStaticParams() {
    try {
        const projects = await client.fetch(
            `*[_type == "project"]{ projectId }`,
        )

        const locales = ['de', 'en', 'es', 'fr']
        return projects.flatMap((p: { projectId: number }) =>
            locales.map((locale) => ({
                id: String(p.projectId),
                locale,
            })),
        )
    } catch (error) {
        console.error('Failed to fetch projects for static params:', error)
        return []
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{
        id: string
        locale: Locale
    }>
}) {
    const { id, locale } = await params

    const project: SanityProject = await client.fetch(
        projectByIdQuery,
        { id: parseInt(id), locale },
        { next: { revalidate: 60 } },
    )

    if (!project) {
        notFound()
    }

    return <ProjectPage project={project} />
}
