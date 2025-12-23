'use client'
import { Flex, Grid, Link } from '@radix-ui/themes'
import { Link as NextLink } from 'i18n/navigation'
import { CardComponent } from 'components/Card'

export type SanityImage = {
    _type: 'image'
    asset: {
        _ref: string
        _type: 'reference'
    }
    alt?: string
}

export type SanityProject = {
    _id: string
    projectId: number
    slug: { current: string }
    title: string
    content: string
    mainImage: SanityImage
    gallery: SanityImage[]
    video: string
    presslinks: { title: string; url: string }[]
}

export default function ProjectsPage({
    projects,
    path,
}: {
    projects: SanityProject[]
    path: string
}) {
    return (
        <Flex justify="center" style={{ minHeight: 'calc(100vh - 64px)' }}>
            <Flex direction="column" mt="10">
                <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="10">
                    {projects.map((project) => (
                        <Link asChild key={project.projectId}>
                            <NextLink
                                href={
                                    project.projectId
                                        ? path + '/' + project.projectId
                                        : path
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
