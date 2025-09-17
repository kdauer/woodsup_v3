'use client'
import { Flex, Grid, Link } from '@radix-ui/themes'
import { Link as NextLink } from 'i18n/navigation'

import { CardComponent } from 'components/Card'
import projects_de from 'json/projects_de.json'
import projects_en from 'json/projects_en.json'
import projects_es from 'json/projects_es.json'
import projects_fr from 'json/projects_fr.json'
import { Locale } from '../../../../i18n-config'

export type Project = {
    id: number
    image: string
    title: string
    content: string
    video: string
    presslinks: string[]
    gallery: string[]
}

{
}

export default function ProjectsPage({
    path,
    params: { locale },
}: {
    path: string
    params: { locale: Locale }
}) {
    let projectsList: Project[] = projects_de.projects

    switch (locale) {
        case 'en':
            projectsList = projects_en.projects
            break
        case 'es':
            projectsList = projects_es.projects
            break
        case 'fr':
            projectsList = projects_fr.projects
            break
        case 'de':
        default:
            projectsList = projects_de.projects
            break
    }

    const sortedProjects = projectsList.sort(
        (a: Project, b: Project) => b.id - a.id,
    )

    return (
        <Flex justify="center" style={{ minHeight: 'calc(100vh - 64px)' }}>
            <Flex direction="column" mt="10">
                <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="10">
                    {sortedProjects.map((project) => (
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
