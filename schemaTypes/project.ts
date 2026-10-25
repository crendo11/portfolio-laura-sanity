import { defineType, defineField } from 'sanity'
import { imageFields } from './imageFields'

export default defineType({
  name: 'project',
  title: 'Project',
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
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'The italic line under the big title, e.g. "Espirales biomecánicas". One short phrase.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),

    // ---- Meta row (shown under the title on the project page) ----
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Free text so ranges work, e.g. "2025 — 2026" or "2026".',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. "Runway collection", "Capsule", "Research project".',
    }),
    defineField({
      name: 'context',
      title: 'Context / institution',
      type: 'string',
      description:
        'Where the work happened, e.g. "Jóvenes Creadores — Colombiamoda 2025" or ' +
        '"Cristóbal Balenciaga Museoa — Transmissions".',
    }),
    defineField({
      name: 'nextStage',
      title: 'Next stage',
      type: 'string',
      description: 'Where the work is going next, e.g. "Selected for Vancouver Fashion Week SS27".',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Her role on the project, e.g. "Designer".',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'text',
      rows: 3,
      description:
        'Photography, model, hair and makeup. Shown as one small line under the gallery. ' +
        'Leave empty to hide the line.',
    }),
    defineField({
      name: 'pullQuote',
      title: 'Pull quote',
      type: 'text',
      rows: 2,
      description:
        'A short quote about the project, shown inside the gallery, e.g. "Mis moldes nacen ' +
        'de la proporción Áurea." Leave empty to hide it.',
    }),
    defineField({
      name: 'featured',
      title: 'Featured on the home page',
      type: 'boolean',
      initialValue: false,
      description:
        'Shows this project in the "Three spirals" trio on the home page. Tick exactly three.',
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      fields: imageFields,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image (optional)',
      type: 'image',
      options: { hotspot: true },
      fields: imageFields,
      description:
        'Used on the home page carousel card. Leave empty to use the Main Image.',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: imageFields }],
    }),
    defineField({
      name: 'processImages',
      title: 'Design process images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: imageFields }],
      description:
        'Photos for the sideways "Design process" strip: sketches, pattern drafting, toile, ' +
        'fittings. Leave empty and the strip borrows from the gallery.',
    }),
    defineField({
      name: 'bgColor',
      title: 'Background Color',
      type: 'color',
      description: 'Pick a color for the project background',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'url',
      description: 'Link to a video (YouTube, Vimeo, etc.)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'process',
      title: 'Design Process',
      type: 'array',
      of: [{ type: 'block' }],
    }),

    // ---- English translations ----
    // Parallel fields, NOT a change of shape on the Spanish ones. Nothing here
    // needs a migration: the existing fields keep their data and their type,
    // and every field below is optional. Empty -> the site shows the Spanish
    // text on /en (decisions.md D3). See docs/sanity-proposal/04-i18n.md for
    // why the internationalized-array plugin was rejected: it would have
    // rewritten the shape of fields that already hold content, the same class
    // of break that invalidated every gallery image in October 2026.
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      fieldset: 'english',
    }),
    defineField({
      name: 'subtitleEn',
      title: 'Subtitle (English)',
      type: 'string',
      fieldset: 'english',
    }),
    defineField({
      name: 'categoryEn',
      title: 'Category (English)',
      type: 'string',
      fieldset: 'english',
    }),
    defineField({
      name: 'contextEn',
      title: 'Context (English)',
      type: 'string',
      fieldset: 'english',
    }),
    defineField({
      name: 'nextStageEn',
      title: 'Next stage (English)',
      type: 'string',
      fieldset: 'english',
    }),
    defineField({
      name: 'roleEn',
      title: 'Role (English)',
      type: 'string',
      fieldset: 'english',
    }),
    defineField({
      name: 'creditsEn',
      title: 'Credits (English)',
      type: 'text',
      rows: 2,
      fieldset: 'english',
    }),
    defineField({
      name: 'pullQuoteEn',
      title: 'Pull quote (English)',
      type: 'text',
      rows: 2,
      fieldset: 'english',
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Description (English)',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'english',
    }),
    defineField({
      name: 'processEn',
      title: 'Design Process (English)',
      type: 'array',
      of: [{ type: 'block' }],
      fieldset: 'english',
    }),
  ],
})