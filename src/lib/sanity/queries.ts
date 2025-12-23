import { groq } from 'next-sanity'

// Get all projects for listing
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

// Get single project by ID
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

// Get all translations for a namespace
export const translationsQuery = groq`
    *[_type == "translation" && namespace == $namespace] {
        key,
        "value": coalesce([$locale][0], de)
    }
`

// Get all translations (for building dictionary)
export const allTranslationsQuery = groq`
    *[_type == "translation"] {
        namespace,
        key,
        de, en, es, fr
    }
`
