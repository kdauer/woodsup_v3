import { groq } from 'next-sanity'

export const projectsQuery = groq`
    *[_type == "project"] | order(projectId desc) {
        _id,
        projectId,
        slug,
        "title": title[$locale],
        "content": content[$locale],
        mainImage,
        gallery,
        video,
        presslinks
    }
`

export const projectByIdQuery = groq`
    *[_type == "project" && projectId == $id][0] {
        _id,
        projectId,
        slug,
        "title": title[$locale],
        "content": content[$locale],
        mainImage,
        gallery,
        video,
        presslinks
    }
`

export const translationsQuery = groq`
    *[_type == "translation" && namespace == $namespace] {
        key,
        "value": coalesce([$locale][0], de)
    }
`

export const allTranslationsQuery = groq`
    *[_type == "translation"] {
        namespace,
        key,
        de, en, es, fr
    }
`
