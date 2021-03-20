import { MdWork as icon } from 'react-icons/md';

export default {
  name: 'project',
  title: 'Project',
  type: 'object',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name of the project',
      type: 'string',
      description: 'What is the project called?',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      description: 'Describe what you did on the project',
      type: 'array',
      of: [
        {
          type: 'block',
          // Only allow these block styles
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
          ],
          // Only allow numbered lists
          lists: [{ title: 'Numbered', value: 'number' }],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'External link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Open in new tab',
                    name: 'blank',
                    description:
                      'Read https://css-tricks.com/use-target_blank/',
                    type: 'boolean',
                  },
                ],
              },
            ],
            // Only allow these decorators
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'githubLink',
      title: 'Github Link',
      type: 'string',
      description: "Link to the project's github repo",
    },
    {
      name: 'liveLink',
      title: 'Live Link',
      type: 'string',
      description: 'Link to the project live on the internet',
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.unique(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
