import { Locale } from '../../../../i18n-config'
import ProjectsPage from './projects-page'

export default async function Page({
    params,
}: {
    params: Promise<{ locale: Locale }>
}) {
    const { locale } = await params
    return <ProjectsPage path="/projects" params={{ locale }} />
}
