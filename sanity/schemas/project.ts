import { defineType, defineField } from 'sanity'

const localeString = (name: string, title: string) =>
    defineField({
        name,
        title,
        type: 'object',
        fields: [
            { name: 'de', type: 'text', title: 'Deutsch' },
            { name: 'en', type: 'text', title: 'English' },
            { name: 'es', type: 'text', title: 'Español' },
            { name: 'fr', type: 'text', title: 'Français' },
        ],
    })

export default defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'projectId',
            title: 'Project ID',
            type: 'number',
            description: 'Numeric ID for ordering (legacy)',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title.en' },
            validation: (Rule) => Rule.required(),
        }),
        localeString('title', 'Title'),
        localeString('content', 'Content'),
        defineField({
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        }),
        defineField({
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'video',
            title: 'Video URL',
            type: 'url',
            description: 'YouTube embed URL',
        }),
        defineField({
            name: 'presslinks',
            title: 'Press Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'url', type: 'url', title: 'URL' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published At',
            type: 'date',
        }),
    ],
    orderings: [
        {
            title: 'Project ID, Desc',
            name: 'projectIdDesc',
            by: [{ field: 'projectId', direction: 'desc' }],
        },
    ],
    preview: {
        select: {
            title: 'title.de',
            projectId: 'projectId',
            media: 'mainImage',
        },
        prepare({ title, projectId, media }) {
            return {
                title: `#${projectId}: ${title}`,
                media,
            }
        },
    },
})
