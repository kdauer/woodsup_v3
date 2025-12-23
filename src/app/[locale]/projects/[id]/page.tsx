import { Locale } from '../../../../../i18n-config'
import { SanityProject } from '../projects-page'
import ProjectPage from './project-page'
import { client } from '@/lib/sanity/client'
import { projectByIdQuery } from '@/lib/sanity/queries'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    try {
        // Fetch all projects to generate static paths
        const projects = await client.fetch(
            `*[_type == "project"]{ projectId }`
        )

        const locales = ['de', 'en', 'es', 'fr']
        return projects.flatMap((p: { projectId: number }) =>
            locales.map((locale) => ({
                id: String(p.projectId),
                locale,
            }))
        )
    } catch (error) {
        console.error('Failed to fetch projects for static params:', error)
        // Return empty array if Sanity is not set up yet
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

    // Fetch single project from Sanity
    const project: SanityProject = await client.fetch(
        projectByIdQuery,
        { id: parseInt(id), locale },
        { next: { revalidate: 60 } }
    )

    if (!project) {
        notFound()
    }

    return <ProjectPage project={project} />
}
