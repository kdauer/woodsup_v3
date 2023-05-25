import {
    AspectRatio,
    Box,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    ListItem,
    Stack,
    Text,
    UnorderedList,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import nextI18nextConfig from '../../../next-i18next.config'
import Carousel from '../../components/Carousel'
import projects_de from '../../data/projects_de.json'
import projects_en from '../../data/projects_en.json'
import projects_es from '../../data/projects_es.json'
import projects_fr from '../../data/projects_fr.json'

export default function Project() {
    const { t, i18n } = useTranslation('common')
    const router = useRouter()
    const { pid } = router.query

    let projectsList

    if (i18n.language === 'de') {
        projectsList = projects_de.projects
    }
    if (i18n.language === 'en') {
        projectsList = projects_en.projects
    }
    if (i18n.language === 'es') {
        projectsList = projects_es.projects
    }
    if (i18n.language === 'fr') {
        projectsList = projects_fr.projects
    }
    const project = projectsList.find((el) => {
        return el.id === pid
    })
    const images = project.gallery
    const presslinks = project.presslinks
    if (!project) {
        return <div>Loading</div>
    } else
        return (
            <Container maxW="4xl">
                <Stack
                    textAlign="center"
                    align="center"
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                >
                    <Heading>{project.title}</Heading>
                    <Image src={project.image} alt={project.image} />
                    <Text
                        textAlign="justify"
                        fontSize={['sm', 'md', 'lg', 'xl']}
                    >
                        {project.content}
                    </Text>
                    {project.video ? (
                        <Stack>
                            <AspectRatio
                                maxW="560px"
                                minW={['320px', '400px', '400px', '560px']}
                                ratio={16 / 9}
                            >
                                <iframe
                                    width={560}
                                    height={315}
                                    src={project.video}
                                    title="YouTube video player"
                                    allowFullScreen
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </AspectRatio>
                        </Stack>
                    ) : (
                        <Stack></Stack>
                    )}
                    {images.length > 0 ? <Carousel props={images} /> : <Box />}
                    <Stack spacing={6}>
                        {presslinks.length > 0 ? (
                            <UnorderedList>
                                <Heading>Für Presseartikel</Heading>
                                {presslinks.map((link) => (
                                    <ListItem listStyleType="none" key={link}>
                                        <Link
                                            href={link}
                                            isExternal
                                            fontSize={['sm', 'md', 'lg', 'xl']}
                                        >
                                            hier entlang
                                        </Link>
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        ) : (
                            <Text></Text>
                        )}
                    </Stack>
                    <Flex w="full"></Flex>
                </Stack>
            </Container>
        )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(
            locale,
            ['common'],
            nextI18nextConfig
        )),
    },
})

export async function getStaticPaths({ locales }) {
    return {
        // Only `/posts/1` and `/posts/2` are generated at build time
        paths: [
            { params: { pid: '1' }, locale: 'de' },
            { params: { pid: '1' }, locale: 'en' },
            { params: { pid: '1' }, locale: 'es' },
            { params: { pid: '1' }, locale: 'fr' },
            { params: { pid: '2' }, locale: 'de' },
            { params: { pid: '2' }, locale: 'en' },
            { params: { pid: '2' }, locale: 'es' },
            { params: { pid: '2' }, locale: 'fr' },
            { params: { pid: '3' }, locale: 'de' },
            { params: { pid: '3' }, locale: 'en' },
            { params: { pid: '3' }, locale: 'es' },
            { params: { pid: '3' }, locale: 'fr' },
            { params: { pid: '4' }, locale: 'de' },
            { params: { pid: '4' }, locale: 'en' },
            { params: { pid: '4' }, locale: 'es' },
            { params: { pid: '4' }, locale: 'fr' },
            { params: { pid: '5' }, locale: 'de' },
            { params: { pid: '5' }, locale: 'en' },
            { params: { pid: '5' }, locale: 'es' },
            { params: { pid: '5' }, locale: 'fr' },
            { params: { pid: '6' }, locale: 'de' },
            { params: { pid: '6' }, locale: 'en' },
            { params: { pid: '6' }, locale: 'es' },
            { params: { pid: '6' }, locale: 'fr' },
            { params: { pid: '7' }, locale: 'de' },
            { params: { pid: '7' }, locale: 'en' },
            { params: { pid: '7' }, locale: 'es' },
            { params: { pid: '7' }, locale: 'fr' },
            { params: { pid: '8' }, locale: 'de' },
            { params: { pid: '8' }, locale: 'en' },
            { params: { pid: '8' }, locale: 'es' },
            { params: { pid: '8' }, locale: 'fr' },
            { params: { pid: '9' }, locale: 'de' },
            { params: { pid: '9' }, locale: 'en' },
            { params: { pid: '9' }, locale: 'es' },
            { params: { pid: '9' }, locale: 'fr' },
            { params: { pid: '10' }, locale: 'de' },
            { params: { pid: '10' }, locale: 'en' },
            { params: { pid: '10' }, locale: 'es' },
            { params: { pid: '10' }, locale: 'fr' },
            { params: { pid: '11' }, locale: 'de' },
            { params: { pid: '11' }, locale: 'en' },
            { params: { pid: '11' }, locale: 'es' },
            { params: { pid: '11' }, locale: 'fr' },
            { params: { pid: '12' }, locale: 'de' },
            { params: { pid: '12' }, locale: 'en' },
            { params: { pid: '12' }, locale: 'es' },
            { params: { pid: '12' }, locale: 'fr' },
            { params: { pid: '13' }, locale: 'de' },
            { params: { pid: '13' }, locale: 'en' },
            { params: { pid: '13' }, locale: 'es' },
            { params: { pid: '13' }, locale: 'fr' },
            { params: { pid: '14' }, locale: 'de' },
            { params: { pid: '14' }, locale: 'en' },
            { params: { pid: '14' }, locale: 'es' },
            { params: { pid: '14' }, locale: 'fr' },
            { params: { pid: '15' }, locale: 'de' },
            { params: { pid: '15' }, locale: 'en' },
            { params: { pid: '15' }, locale: 'es' },
            { params: { pid: '15' }, locale: 'fr' },
            { params: { pid: '16' }, locale: 'de' },
            { params: { pid: '16' }, locale: 'en' },
            { params: { pid: '16' }, locale: 'es' },
            { params: { pid: '16' }, locale: 'fr' },
        ],
        // Enable statically generating additional pages
        // For example: `/posts/3`
        fallback: false,
    }
}
