import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'translation',
    title: 'UI Translations',
    type: 'document',
    fields: [
        defineField({
            name: 'namespace',
            title: 'Namespace',
            type: 'string',
            description: 'e.g., common, legal-notice, privacy-policy, news',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'key',
            title: 'Translation Key',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'de',
            title: 'German (Deutsch)',
            type: 'text',
        }),
        defineField({
            name: 'en',
            title: 'English',
            type: 'text',
        }),
        defineField({
            name: 'es',
            title: 'Spanish (Español)',
            type: 'text',
        }),
        defineField({
            name: 'fr',
            title: 'French (Français)',
            type: 'text',
        }),
    ],
    preview: {
        select: {
            namespace: 'namespace',
            key: 'key',
            de: 'de',
        },
        prepare({ namespace, key, de }) {
            return {
                title: `${namespace}.${key}`,
                subtitle: de?.substring(0, 50) + '...',
            }
        },
    },
})
