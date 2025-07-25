import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
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
      type: 'text',
    }),
    defineField({
      name: 'process',
      title: 'Design Process',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})