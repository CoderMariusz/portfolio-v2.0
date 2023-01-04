import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'skillLevel',
      title: 'Skill Level',
      type: 'number',
      description: 'Enter a number between 1 and 100',
      validation: (Rule) => Rule.min(1).max(100)
    }),
    defineField({
      name: 'skillImage',
      title: 'Skill Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
});
