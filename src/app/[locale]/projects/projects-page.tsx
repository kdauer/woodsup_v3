'use client'
import { Flex, Grid, Link } from '@radix-ui/themes'
import { Link as NextLink } from 'i18n/navigation'
import { CardComponent } from 'components/Card'

export type SanityProject = {
    _id: string
    projectId: number
    slug: { current: string }
    title: string
    content: string
    mainImage: any
    gallery: any[]
    video: string
    presslinks: { title: string; url: string }[]
}

// Legacy format for compatibility with CardComponent
export type Project = {
    id: number
    image: string
    title: string
    content: string
    video: string
    presslinks: string[]
    gallery: string[]
}

export default function ProjectsPage({
    projects,
    path,
}: {
    projects: SanityProject[]
    path: string
}) {
    // Convert Sanity projects to legacy format for compatibility
    // In the future, update CardComponent to use Sanity format directly
    const legacyProjects: Project[] = projects.map((project) => ({
        id: project.projectId,
        image: project.mainImage?.asset?._ref || '',
        title: project.title || '',
        content: project.content || '',
        video: project.video || '',
        presslinks: project.presslinks?.map((link) => link.url) || [],
        gallery: project.gallery?.map((img) => img.asset?._ref) || [],
    }))

    return (
        <Flex justify="center" style={{ minHeight: 'calc(100vh - 64px)' }}>
            <Flex direction="column" mt="10">
                <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="10">
                    {legacyProjects.map((project) => (
                        <Link asChild key={project.id}>
                            <NextLink
                                href={
                                    project.id ? path + '/' + project.id : path
                                }
                            >
                                <CardComponent project={project} />
                            </NextLink>
                        </Link>
                    ))}
                </Grid>
            </Flex>
        </Flex>
    )
}
