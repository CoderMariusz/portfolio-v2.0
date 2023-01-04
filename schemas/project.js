import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'projectImage',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text'
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {
            type: 'skill'
          }
        }
      ]
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string'
    })
  ]
});
