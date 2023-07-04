import { Locale } from '../../../../i18n-config'
import ProjectsPage from './projects-page'

export default function Page({
    params: { locale },
}: {
    params: {
        locale: Locale
    }
}) {
    return <ProjectsPage path="/projects" params={{ locale }} />
}
