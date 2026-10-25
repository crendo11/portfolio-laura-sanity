import { defineType, defineField, defineArrayMember } from 'sanity'
import { imageFields } from './imageFields'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fieldsets: [
        {
            name: 'english',
            title: 'English translations',
            description:
                'Optional. Anything left empty here falls back to the Spanish text above, so the ' +
                'English site is never blank.',
            options: { collapsible: true, collapsed: true },
        },
    ],
    fields: [
        defineField({
            name: 'profilePic',
            title: 'Profile Picture',
            type: 'image',
            options: { hotspot: true },
            fields: imageFields,
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'availableFrom',
            title: 'Available from',
            type: 'string',
            description:
                'Shown as a pill over the portrait, e.g. "January 2027". Leave empty to hide the pill.',
        }),
        defineField({
            name: 'shortBio',
            title: 'Short bio',
            type: 'text',
            rows: 3,
            description:
                'The large serif paragraph under "About", and the teaser on the home page. ' +
                'Two sentences at most.',
        }),
        defineField({
            name: 'description',
            title: 'Long bio',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'The smaller supporting paragraphs under the short bio.',
        }),

        defineField({
            name: 'experience',
            title: 'Experience & recognition',
            type: 'array',
            description: 'One row per line on the About page. Shown in the order listed here.',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'experienceRow',
                    fields: [
                        defineField({ name: 'role', title: 'Role or award', type: 'string' }),
                        defineField({ name: 'organisation', title: 'Organisation', type: 'string' }),
                        defineField({
                            name: 'period',
                            title: 'Year or period',
                            type: 'string',
                            description: 'Free text, e.g. "October 2026", "2025, 2026", "2022 —".',
                        }),
                        // English versions. Optional — empty falls back to the Spanish text.
                        defineField({
                            name: 'roleEn',
                            title: 'Role or award (English)',
                            type: 'string',
                        }),
                        defineField({
                            name: 'organisationEn',
                            title: 'Organisation (English)',
                            type: 'string',
                        }),
                    ],
                    preview: {
                        select: { title: 'role', subtitle: 'organisation' },
                    },
                }),
            ],
        }),
        defineField({
            name: 'runwaysLine',
            title: 'Runways and exhibitions line',
            type: 'string',
            description:
                'The small line under the experience rows, e.g. "Colombiamoda · Ibagué está de moda · ' +
                'Vancouver Fashion Week".',
        }),

        defineField({
            name: 'expertise',
            title: 'Expertise',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            description: 'Shown as pills, e.g. "Experimental pattern cutting".',
        }),
        defineField({
            name: 'software',
            title: 'Software',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
        }),
        defineField({
            name: 'languages',
            title: 'Languages',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'language',
                    fields: [
                        defineField({ name: 'language', title: 'Language', type: 'string' }),
                        // English versions. Optional — empty falls back to the Spanish text.
                        defineField({
                            name: 'languageEn',
                            title: 'Language (English)',
                            type: 'string',
                        }),
                        defineField({
                            name: 'level',
                            title: 'Level',
                            type: 'string',
                            description: 'e.g. "Native", "B1", "A1".',
                        }),
                        defineField({
                            name: 'levelEn',
                            title: 'Level (English)',
                            type: 'string',
                        }),
                    ],
                    preview: { select: { title: 'language', subtitle: 'level' } },
                }),
            ],
        }),

        // ---- Contact ----
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Based in',
            type: 'string',
            description: 'e.g. "Rionegro, Colombia".',
        }),
        defineField({
            name: 'portfolioPdf',
            title: 'Portfolio PDF',
            type: 'file',
            options: { accept: '.pdf' },
            description: 'Offered as a download in the footer. Leave empty to hide the link.',
        }),
        defineField({
            name: 'socials',
            title: 'Social links',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'social',
                    fields: [
                        defineField({ name: 'label', title: 'Label', type: 'string' }),
                        defineField({ name: 'url', title: 'URL', type: 'url' }),
                    ],
                    preview: { select: { title: 'label', subtitle: 'url' } },
                }),
            ],
        }),

        // ---- English translations ----
        // Parallel fields, NOT a change of shape on the Spanish ones. No
        // migration needed: existing fields keep their data and their type,
        // and everything here is optional. Empty -> the site shows the Spanish
        // text on /en (decisions.md D3).
        defineField({
            name: 'availableFromEn',
            title: 'Available from (English)',
            type: 'string',
            fieldset: 'english',
        }),
        defineField({
            name: 'shortBioEn',
            title: 'Short bio (English)',
            type: 'text',
            rows: 3,
            fieldset: 'english',
        }),
        defineField({
            name: 'descriptionEn',
            title: 'Long bio (English)',
            type: 'array',
            of: [{ type: 'block' }],
            fieldset: 'english',
        }),
        defineField({
            name: 'runwaysLineEn',
            title: 'Runways and exhibitions line (English)',
            type: 'string',
            fieldset: 'english',
        }),
        defineField({
            name: 'expertiseEn',
            title: 'Expertise (English)',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            fieldset: 'english',
        }),
        defineField({
            name: 'softwareEn',
            title: 'Software (English)',
            type: 'array',
            of: [{ type: 'string' }],
            options: { layout: 'tags' },
            fieldset: 'english',
        }),
        defineField({
            name: 'locationEn',
            title: 'Based in (English)',
            type: 'string',
            fieldset: 'english',
        }),
    ],
    preview: {
        prepare: () => ({ title: 'About' }),
    },
})