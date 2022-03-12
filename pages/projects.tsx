import { Center, Link, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18nextConfig from '../next-i18next.config';
import projects_de from '../data/projects_de.json';
import projects_en from '../data/projects_en.json';
import projects_es from '../data/projects_es.json';
import projects_fr from '../data/projects_fr.json';
import CardComponent from '../components/Card';

export default function Projects() {
  const { t, i18n } = useTranslation('common');

  let projectsList = projects_de.projects;

  if (i18n.language === 'de') {
    projectsList = projects_de.projects;
  }
  if (i18n.language === 'en') {
    projectsList = projects_en.projects;
  }
  if (i18n.language === 'es') {
    projectsList = projects_es.projects;
  }
  if (i18n.language === 'fr') {
    projectsList = projects_fr.projects;
  }
  const sortedList = projectsList.sort((a: any, b: any) => b.id - a.id);
  return (
    <Center
      w={'full'}
      py={6}
      bgImage={'url(/paul-gilmore-KT3WlrL_bsg-unsplash.jpg)'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack>
        {sortedList.map((project) => (
          <Link href={`/projects/${project.id}`} key={project.id}>
            <CardComponent data={project} />
          </Link>
        ))}
      </VStack>
    </Center>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'], nextI18nextConfig)),
  },
});
