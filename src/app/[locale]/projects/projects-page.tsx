'use client'
import { Center, Link, SimpleGrid, VStack } from '@chakra-ui/react'
import { Link as NextLink } from 'navigation'

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

    if (locale === 'de') {
        projectsList = projects_de.projects
    }
    if (locale === 'en') {
        projectsList = projects_en.projects
    }
    if (locale === 'es') {
        projectsList = projects_es.projects
    }
    if (locale === 'fr') {
        projectsList = projects_fr.projects
    }
    const sortedProjects = projectsList.sort(
        (a: Project, b: Project) => b.id - a.id
    )
    return (
        <Center>
            <VStack mt={10}>
                <SimpleGrid columns={[1, null, 2, 3]} spacing={10}>
                    {sortedProjects.map((project) => (
                        <Link
                            href={project.id ? path + '/' + project.id : path}
                            as={NextLink}
                            key={project.id}
                        >
                            <CardComponent project={project} />
                        </Link>
                    ))}
                </SimpleGrid>
            </VStack>
        </Center>
    )
}
