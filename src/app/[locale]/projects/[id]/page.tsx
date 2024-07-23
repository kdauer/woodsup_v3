import projects_de from 'json/projects_de.json'
import projects_en from 'json/projects_en.json'
import projects_es from 'json/projects_es.json'
import projects_fr from 'json/projects_fr.json'
import { Locale } from '../../../../../i18n-config'
import { Project } from '../projects-page'
import ProjectPage from './project-page'

export async function generateStaticParams() {
    return [
        { id: '1', locale: 'de' },
        { id: '1', locale: 'en' },
        { id: '1', locale: 'es' },
        { id: '1', locale: 'fr' },
        { id: '2', locale: 'de' },
        { id: '2', locale: 'en' },
        { id: '2', locale: 'es' },
        { id: '2', locale: 'fr' },
        { id: '3', locale: 'de' },
        { id: '3', locale: 'en' },
        { id: '3', locale: 'es' },
        { id: '3', locale: 'fr' },
        { id: '4', locale: 'de' },
        { id: '4', locale: 'en' },
        { id: '4', locale: 'es' },
        { id: '4', locale: 'fr' },
        { id: '5', locale: 'de' },
        { id: '5', locale: 'en' },
        { id: '5', locale: 'es' },
        { id: '5', locale: 'fr' },
        { id: '6', locale: 'de' },
        { id: '6', locale: 'en' },
        { id: '6', locale: 'es' },
        { id: '6', locale: 'fr' },
        { id: '7', locale: 'de' },
        { id: '7', locale: 'en' },
        { id: '7', locale: 'es' },
        { id: '7', locale: 'fr' },
        { id: '8', locale: 'de' },
        { id: '8', locale: 'en' },
        { id: '8', locale: 'es' },
        { id: '8', locale: 'fr' },
        { id: '9', locale: 'de' },
        { id: '9', locale: 'en' },
        { id: '9', locale: 'es' },
        { id: '9', locale: 'fr' },
        { id: '10', locale: 'de' },
        { id: '10', locale: 'en' },
        { id: '10', locale: 'es' },
        { id: '10', locale: 'fr' },
        { id: '11', locale: 'de' },
        { id: '11', locale: 'en' },
        { id: '11', locale: 'es' },
        { id: '11', locale: 'fr' },
        { id: '12', locale: 'de' },
        { id: '12', locale: 'en' },
        { id: '12', locale: 'es' },
        { id: '12', locale: 'fr' },
        { id: '13', locale: 'de' },
        { id: '13', locale: 'en' },
        { id: '13', locale: 'es' },
        { id: '13', locale: 'fr' },
        { id: '14', locale: 'de' },
        { id: '14', locale: 'en' },
        { id: '14', locale: 'es' },
        { id: '14', locale: 'fr' },
        { id: '15', locale: 'de' },
        { id: '15', locale: 'en' },
        { id: '15', locale: 'es' },
        { id: '15', locale: 'fr' },
        { id: '16', locale: 'de' },
        { id: '16', locale: 'en' },
        { id: '16', locale: 'es' },
        { id: '16', locale: 'fr' },
        { id: '17', locale: 'de' },
        { id: '17', locale: 'en' },
        { id: '17', locale: 'es' },
        { id: '17', locale: 'fr' },
        { id: '18', locale: 'de' },
        { id: '18', locale: 'en' },
        { id: '18', locale: 'es' },
        { id: '18', locale: 'fr' },
        { id: '19', locale: 'de' },
        { id: '19', locale: 'en' },
        { id: '19', locale: 'es' },
        { id: '19', locale: 'fr' },
        { id: '20', locale: 'de' },
        { id: '20', locale: 'en' },
        { id: '20', locale: 'es' },
        { id: '20', locale: 'fr' },
        { id: '21', locale: 'de' },
        { id: '21', locale: 'en' },
        { id: '21', locale: 'es' },
        { id: '21', locale: 'fr' },
        { id: '22', locale: 'de' },
        { id: '22', locale: 'en' },
        { id: '22', locale: 'es' },
        { id: '22', locale: 'fr' },
    ]
}

export default async function Page({
    params: { id, locale },
}: {
    params: {
        id: string
        locale: Locale
    }
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

    if (!projectsList) {
        return <div>Loading</div>
    } else return <ProjectPage projects={projectsList} params={{ id }} />
}
